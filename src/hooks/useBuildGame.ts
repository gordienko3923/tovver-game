import { useCallback, useEffect, useRef, useState } from 'react';
import { Vibration } from 'react-native';
import {
  AUTO_HARD_MS,
  AUTO_STEP_MS,
  CLEAN_PLACEMENT_BONUS,
  COURSE_STABILITY_BONUS,
  CREDITS_PER_COURSE,
  CREDITS_STAGE_BONUS,
  IDLE_LIMIT_MS,
  LOCK_FLASH_MS,
  MOUNT_FLOOR_MS,
  OVERHANG_PENALTY,
  RESULT_HOLD_MS,
  SUPPORT_STABILITY_BONUS,
} from '../constants/config';
import {
  Grid,
  TraySlab,
  applySupport,
  cellsOf,
  clampColumn,
  compactGrid,
  countOverhangs,
  emptyGrid,
  bestPlan,
  fullRows,
  isDeadlocked,
  legalDrop,
  rotationCount,
  touchesStructure,
  writeCells,
} from '../game/engine';
import { Cell, SlabKey, drawSlab, makeRandom } from '../game/shapes';
import { Stage } from '../game/stages';

export type RunResult = 'complete' | 'collapse';

export type GameSnapshot = {
  grid: Grid;
  tray: TraySlab[];
  selected: number;
  floors: number;
  stability: number;
  supports: number;
  earned: number;
  lockingRows: number[];
  locking: boolean;
  paused: boolean;
  status: 'playing' | 'result';
  result: RunResult | null;
  ghostCol: number | null;
  ghostValid: boolean;
  rejectTick: number;
  placeTick: number;
};

const TRAY_SIZE = 3;

export type BuildGameOptions = {
  stage: Stage;
  haptics: boolean;
  onGameOver: (result: RunResult, floors: number, earned: number) => void;
};

export function useBuildGame(options: BuildGameOptions) {
  const { stage, haptics, onGameOver } = options;

  const randRef = useRef<() => number>(makeRandom(stage.seed));
  const historyRef = useRef<SlabKey[]>([]);
  const idRef = useRef(0);

  const nextSlab = useCallback((): TraySlab => {
    const key = drawSlab(randRef.current, historyRef.current);
    historyRef.current = historyRef.current.concat(key).slice(-4);
    idRef.current += 1;
    return { id: idRef.current, key: key, rotation: 0 };
  }, []);

  const [snapshot, setSnapshot] = useState<GameSnapshot>(() => {
    const tray: TraySlab[] = [];
    for (let i = 0; i < TRAY_SIZE; i++) {
      const key = drawSlab(randRef.current, historyRef.current);
      historyRef.current = historyRef.current.concat(key).slice(-4);
      idRef.current += 1;
      tray.push({ id: idRef.current, key: key, rotation: 0 });
    }
    return {
      grid: emptyGrid(),
      tray: tray,
      selected: 0,
      floors: 0,
      stability: stage.startStability,
      supports: stage.supports,
      earned: 0,
      lockingRows: [],
      locking: false,
      paused: false,
      status: 'playing',
      result: null,
      ghostCol: null,
      ghostValid: true,
      rejectTick: 0,
      placeTick: 0,
    };
  });

  // Mirror for timer / press callbacks — never read state through closures.
  const snapRef = useRef(snapshot);
  snapRef.current = snapshot;

  const hapticsRef = useRef(haptics);
  hapticsRef.current = haptics;

  const mountAtRef = useRef(Date.now());
  const lastInputRef = useRef(Date.now());
  const lastAutoRef = useRef(0);
  const finishedRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const onGameOverRef = useRef(onGameOver);
  onGameOverRef.current = onGameOver;

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    const timers = timersRef;
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  const buzz = useCallback((ms: number) => {
    if (hapticsRef.current) {
      Vibration.vibrate(ms);
    }
  }, []);

  /**
   * The run never ends before MOUNT_FLOOR_MS so the game frame is always
   * captured, and the result screen always arrives after a short hold.
   */
  const finish = useCallback(
    (result: RunResult) => {
      if (finishedRef.current) {
        return;
      }
      finishedRef.current = true;
      setSnapshot(prev => ({ ...prev, status: 'result', result: result }));
      const elapsed = Date.now() - mountAtRef.current;
      const wait = Math.max(RESULT_HOLD_MS, MOUNT_FLOOR_MS - elapsed);
      schedule(() => {
        const current = snapRef.current;
        const bonus = result === 'complete' ? CREDITS_STAGE_BONUS : 0;
        onGameOverRef.current(result, current.floors, current.earned + bonus);
      }, wait);
    },
    [schedule],
  );

  const settle = useCallback(
    (next: GameSnapshot, lockedRows: number[]) => {
      if (lockedRows.length === 0) {
        if (next.stability <= 0) {
          finish('collapse');
        } else if (next.floors >= stage.targetFloors) {
          finish('complete');
        } else if (isDeadlocked(next.grid, next.tray)) {
          finish('collapse');
        }
        return;
      }
      schedule(() => {
        const compacted = compactGrid(next.grid, lockedRows);
        setSnapshot(prev => ({
          ...prev,
          grid: compacted,
          lockingRows: [],
          locking: false,
        }));
        if (next.stability <= 0) {
          finish('collapse');
        } else if (next.floors >= stage.targetFloors) {
          finish('complete');
        } else if (isDeadlocked(compacted, next.tray)) {
          finish('collapse');
        }
      }, LOCK_FLASH_MS);
    },
    [finish, schedule, stage.targetFloors],
  );

  const placeAt = useCallback(
    (
      rawCol: number,
      slabIndex: number,
      isAuto: boolean,
      cellsOverride?: Cell[],
    ) => {
      const gs = snapRef.current;
      if (gs.status !== 'playing' || gs.locking || gs.paused) {
        return;
      }
      if (!isAuto) {
        lastInputRef.current = Date.now();
      }
      const slab = gs.tray[slabIndex];
      if (!slab) {
        return;
      }
      const cells = cellsOverride ? cellsOverride : cellsOf(slab);
      const col = clampColumn(cells, rawCol);
      const base = gs.grid.map(row => row.map(v => (v === 2 ? 1 : v)));
      const row = legalDrop(base, cells, col);

      if (row === null) {
        buzz(18);
        setSnapshot(prev => ({
          ...prev,
          rejectTick: prev.rejectTick + 1,
          ghostCol: col,
          ghostValid: false,
        }));
        return;
      }

      const grid = writeCells(base, cells, row, col);
      const overhangs = countOverhangs(grid, cells, row, col);
      let stability = gs.stability - overhangs * OVERHANG_PENALTY;
      if (overhangs === 0 && touchesStructure(base, cells, row, col)) {
        stability = Math.min(100, stability + CLEAN_PLACEMENT_BONUS);
      }

      const locked = fullRows(grid);
      let floors = gs.floors;
      let earned = gs.earned;
      if (locked.length > 0) {
        floors += locked.length;
        stability = Math.min(
          100,
          stability + COURSE_STABILITY_BONUS * locked.length,
        );
        earned += CREDITS_PER_COURSE * locked.length;
      }
      stability = Math.max(0, Math.min(100, stability));

      const tray = gs.tray.slice();
      tray[slabIndex] = nextSlab();

      const next: GameSnapshot = {
        ...gs,
        grid: grid,
        tray: tray,
        selected: slabIndex,
        floors: floors,
        stability: stability,
        earned: earned,
        lockingRows: locked,
        locking: locked.length > 0,
        ghostCol: col,
        ghostValid: true,
        placeTick: gs.placeTick + 1,
      };
      snapRef.current = next;
      setSnapshot(next);
      buzz(locked.length > 0 ? 24 : 12);
      settle(next, locked);
    },
    [buzz, nextSlab, settle],
  );

  const tapColumn = useCallback(
    (col: number) => {
      placeAt(col, snapRef.current.selected, false);
    },
    [placeAt],
  );

  const previewColumn = useCallback((col: number) => {
    const gs = snapRef.current;
    if (gs.status !== 'playing' || gs.locking || gs.paused) {
      return;
    }
    const slab = gs.tray[gs.selected];
    if (!slab) {
      return;
    }
    const cells = cellsOf(slab);
    const clamped = clampColumn(cells, col);
    const base = gs.grid.map(row => row.map(v => (v === 2 ? 1 : v)));
    const valid = legalDrop(base, cells, clamped) !== null;
    setSnapshot(prev => ({ ...prev, ghostCol: clamped, ghostValid: valid }));
  }, []);

  const selectSlab = useCallback((index: number) => {
    lastInputRef.current = Date.now();
    setSnapshot(prev =>
      prev.status === 'playing' && !prev.paused
        ? { ...prev, selected: index }
        : prev,
    );
  }, []);

  const rotateSelected = useCallback(() => {
    lastInputRef.current = Date.now();
    setSnapshot(prev => {
      if (prev.status !== 'playing' || prev.locking || prev.paused) {
        return prev;
      }
      const slab = prev.tray[prev.selected];
      if (!slab) {
        return prev;
      }
      const tray = prev.tray.slice();
      tray[prev.selected] = {
        ...slab,
        rotation: (slab.rotation + 1) % rotationCount(slab.key),
      };
      return { ...prev, tray: tray, ghostCol: null };
    });
  }, []);

  const useSupport = useCallback(() => {
    lastInputRef.current = Date.now();
    const gs = snapRef.current;
    if (gs.status !== 'playing' || gs.locking || gs.paused) {
      return;
    }
    if (gs.supports <= 0) {
      return;
    }
    const applied = applySupport(gs.grid.map(r => r.map(v => (v === 2 ? 1 : v))));
    if (!applied.placed) {
      return;
    }
    const locked = fullRows(applied.grid);
    let floors = gs.floors;
    let earned = gs.earned;
    let stability = Math.min(100, gs.stability + SUPPORT_STABILITY_BONUS);
    if (locked.length > 0) {
      floors += locked.length;
      stability = Math.min(
        100,
        stability + COURSE_STABILITY_BONUS * locked.length,
      );
      earned += CREDITS_PER_COURSE * locked.length;
    }
    const next: GameSnapshot = {
      ...gs,
      grid: applied.grid,
      supports: gs.supports - 1,
      stability: stability,
      floors: floors,
      earned: earned,
      lockingRows: locked,
      locking: locked.length > 0,
      placeTick: gs.placeTick + 1,
    };
    snapRef.current = next;
    setSnapshot(next);
    buzz(16);
    settle(next, locked);
  }, [buzz, settle]);

  const setPaused = useCallback((value: boolean) => {
    lastInputRef.current = Date.now();
    setSnapshot(prev => ({ ...prev, paused: value }));
  }, []);

  /**
   * Capture backstop. The agent only taps; if it never does, the engine plays
   * itself. `idle` fires from the last real input, `hard` is an absolute
   * ceiling from mount so a stream of taps can never starve the result screen.
   */
  useEffect(() => {
    const id = setInterval(() => {
      const gs = snapRef.current;
      if (gs.status !== 'playing' || gs.locking || gs.paused) {
        return;
      }
      const now = Date.now();
      const idle = now - lastInputRef.current > IDLE_LIMIT_MS;
      const hard = now - mountAtRef.current > AUTO_HARD_MS;
      if (!idle && !hard) {
        return;
      }
      if (now - lastAutoRef.current < AUTO_STEP_MS) {
        return;
      }
      lastAutoRef.current = now;
      const plan = bestPlan(gs.grid, gs.tray);
      if (!plan) {
        finish('collapse');
        return;
      }
      placeAt(plan.col, plan.slabIndex, true, plan.cells);
    }, 500);
    return () => clearInterval(id);
  }, [finish, placeAt]);

  return {
    snapshot,
    tapColumn,
    previewColumn,
    selectSlab,
    rotateSelected,
    useSupport,
    setPaused,
  };
}

export default useBuildGame;
