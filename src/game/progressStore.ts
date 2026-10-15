import { useEffect, useState } from 'react';
import { STARTING_CREDITS } from '../constants/config';
import { SLAB_THEMES, STAGE_COUNT, ThemeKey } from './stages';

export type Settings = {
  sound: boolean;
  haptics: boolean;
  gridGuides: boolean;
  reducedMotion: boolean;
};

export type SettingKey = keyof Settings;

export type Progress = {
  credits: number;
  stageIndex: number;
  floorsBuilt: number;
  bestHeight: number;
  blueprintsDone: number;
  supportsOwned: number;
  activeTheme: ThemeKey;
  settings: Settings;
};

function initialProgress(): Progress {
  return {
    credits: STARTING_CREDITS,
    stageIndex: 2,
    floorsBuilt: 42,
    bestHeight: 9,
    blueprintsDone: 2,
    supportsOwned: 3,
    activeTheme: 'BLUEPRINT',
    settings: {
      sound: true,
      haptics: true,
      gridGuides: true,
      reducedMotion: false,
    },
  };
}

/**
 * In-memory singleton. Deliberately dependency-free (no native storage module
 * is on the allowed list) but shaped so a persistence adapter can be dropped in
 * behind `read`/`write` without touching a single screen.
 */
let state: Progress = initialProgress();
const listeners = new Set<(next: Progress) => void>();

function emit(): void {
  listeners.forEach(listener => listener(state));
}

function write(patch: Partial<Progress>): void {
  state = { ...state, ...patch };
  emit();
}

export const progressStore = {
  read(): Progress {
    return state;
  },

  subscribe(listener: (next: Progress) => void): () => void {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  addCredits(amount: number): void {
    write({ credits: Math.max(0, state.credits + amount) });
  },

  recordRun(floors: number, completed: boolean): void {
    const next: Partial<Progress> = {
      floorsBuilt: state.floorsBuilt + floors,
      bestHeight: Math.max(state.bestHeight, floors),
    };
    if (completed) {
      next.blueprintsDone = Math.min(STAGE_COUNT, state.blueprintsDone + 1);
      next.stageIndex = (state.stageIndex + 1) % STAGE_COUNT;
    }
    write(next);
  },

  setTheme(key: ThemeKey): void {
    write({ activeTheme: key });
  },

  toggleSetting(key: SettingKey): void {
    write({ settings: { ...state.settings, [key]: !state.settings[key] } });
  },

  resetAll(): void {
    state = initialProgress();
    emit();
  },
};

export function unlockedThemeKeys(blueprintsDone: number): ThemeKey[] {
  return SLAB_THEMES.filter(item => item.unlockAt <= blueprintsDone).map(
    item => item.key,
  );
}

export function isThemeUnlocked(key: ThemeKey, blueprintsDone: number): boolean {
  const found = SLAB_THEMES.find(item => item.key === key);
  return found ? found.unlockAt <= blueprintsDone : false;
}

/** Screens subscribe through this hook — they never import `state` directly. */
export function useProgress(): Progress {
  const [snapshot, setSnapshot] = useState<Progress>(progressStore.read());
  useEffect(() => {
    setSnapshot(progressStore.read());
    return progressStore.subscribe(setSnapshot);
  }, []);
  return snapshot;
}
