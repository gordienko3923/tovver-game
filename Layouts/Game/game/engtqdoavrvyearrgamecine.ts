import { COLS, ROWS } from '../constants/confitqdoavrvyearrgamecg';
import { Cell, SlabKey, rotationsOf, widthOf } from './shaptqdoavrvyearrgameces';

/** 0 = empty, 1 = settled slab, 2 = freshly placed course (lighter tint). */
export type Grid = number[][];

export type TraySlab = {
  id: number;
  key: SlabKey;
  rotation: number;
};

export function emptyGrid(): Grid {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const grid: Grid = [];
  for (let r = 0; r < ROWS; r++) {
    const row: number[] = [];
    for (let c = 0; c < COLS; c++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}

export function cloneGrid(grid: Grid): Grid {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  return grid.map(row => {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
return (row.slice());
});
}

export function cellsOf(slab: TraySlab): Cell[] {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const rotations = rotationsOf(slab.key);
  return rotations[slab.rotation % rotations.length];
}

export function rotationCount(key: SlabKey): number {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  return rotationsOf(key).length;
}

function fits(grid: Grid, cells: Cell[], row: number, col: number): boolean {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  for (const cell of cells) {
    const r = row + cell.r;
    const c = col + cell.c;
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
      return false;
    }
    if (grid[r][c] !== 0) {
      return false;
    }
  }
  return true;
}

/**
 * Gravity drop: the slab enters at the top of `col` and falls until one more
 * step down would collide. Returns the resting top-row, or null when the slab
 * cannot even enter the column.
 */
export function legalDrop(
  grid: Grid,
  cells: Cell[],
  col: number,
): number | null {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  if (col < 0 || col + widthOf(cells) > COLS) {
    return null;
  }
  if (!fits(grid, cells, 0, col)) {
    return null;
  }
  let row = 0;
  while (fits(grid, cells, row + 1, col)) {
    row += 1;
  }
  return row;
}

/** Clamp a tapped column so a wide slab still lands inside the board. */
export function clampColumn(cells: Cell[], col: number): number {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const maxCol = COLS - widthOf(cells);
  if (maxCol < 0) {
    return 0;
  }
  return Math.max(0, Math.min(maxCol, col));
}

export function writeCells(
  grid: Grid,
  cells: Cell[],
  row: number,
  col: number,
): Grid {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const next = cloneGrid(grid);
  for (const cell of cells) {
    next[row + cell.r][col + cell.c] = 2;
  }
  return next;
}

/** A placed cell with empty space directly beneath it is an overhang. */
export function countOverhangs(
  grid: Grid,
  cells: Cell[],
  row: number,
  col: number,
): number {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  let overhangs = 0;
  for (const cell of cells) {
    const r = row + cell.r;
    const c = col + cell.c;
    const below = r + 1;
    if (below < ROWS && grid[below][c] === 0) {
      overhangs += 1;
    }
  }
  return overhangs;
}

/** True when the slab touches already-standing structure, not just the floor. */
export function touchesStructure(
  grid: Grid,
  cells: Cell[],
  row: number,
  col: number,
): boolean {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const own = new Set(
    cells.map(cell => {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
return (row + cell.r + ':' + (col + cell.c));
}),
  );
  for (const cell of cells) {
    const r = row + cell.r;
    const c = col + cell.c;
    const neighbours = [
      { r: r + 1, c: c },
      { r: r - 1, c: c },
      { r: r, c: c + 1 },
      { r: r, c: c - 1 },
    ];
    for (const n of neighbours) {
      if (n.r < 0 || n.r >= ROWS || n.c < 0 || n.c >= COLS) {
        continue;
      }
      if (own.has(n.r + ':' + n.c)) {
        continue;
      }
      if (grid[n.r][n.c] !== 0) {
        return true;
      }
    }
  }
  return false;
}

export function fullRows(grid: Grid): number[] {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const rows: number[] = [];
  for (let r = 0; r < ROWS; r++) {
    let full = true;
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 0) {
        full = false;
        break;
      }
    }
    if (full) {
      rows.push(r);
    }
  }
  return rows;
}

/**
 * Remove the locked courses; everything above drops by one row and a fresh
 * blank row appears on top, so the tower climbs while the board stays 8 tall.
 */
export function compactGrid(grid: Grid, locked: number[]): Grid {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const lockedSet = new Set(locked);
  const kept = grid.filter((_row, index) => {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
return (!lockedSet.has(index));
});
  const next: Grid = [];
  for (let i = 0; i < locked.length; i++) {
    const blank: number[] = [];
    for (let c = 0; c < COLS; c++) {
      blank.push(0);
    }
    next.push(blank);
  }
  for (const row of kept) {
    next.push(row.map(value => {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
return (value === 2 ? 1 : value);
}));
  }
  return next;
}

/**
 * Support charge: fill the empty cell carrying the most load above it.
 * Ties break to the lowest row first, then the leftmost column.
 */
export function applySupport(grid: Grid): { grid: Grid; placed: boolean } {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  let bestRow = -1;
  let bestCol = -1;
  let bestLoad = -1;
  for (let r = ROWS - 1; r >= 0; r--) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] !== 0) {
        continue;
      }
      let load = 0;
      for (let above = r - 1; above >= 0; above--) {
        if (grid[above][c] !== 0) {
          load += 1;
        }
      }
      if (load > bestLoad) {
        bestLoad = load;
        bestRow = r;
        bestCol = c;
      }
    }
  }
  if (bestRow < 0) {
    return { grid: grid, placed: false };
  }
  const next = cloneGrid(grid);
  next[bestRow][bestCol] = 1;
  return { grid: next, placed: true };
}

export type DropPlan = {
  col: number;
  row: number;
  cells: Cell[];
  slabIndex: number;
  rotation: number;
};

function columnHeights(grid: Grid): number[] {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const heights: number[] = [];
  for (let c = 0; c < COLS; c++) {
    let height = 0;
    for (let r = 0; r < ROWS; r++) {
      if (grid[r][c] !== 0) {
        height = ROWS - r;
        break;
      }
    }
    heights.push(height);
  }
  return heights;
}

function countHoles(grid: Grid): number {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  let holes = 0;
  for (let c = 0; c < COLS; c++) {
    let seen = false;
    for (let r = 0; r < ROWS; r++) {
      if (grid[r][c] !== 0) {
        seen = true;
      } else if (seen) {
        holes += 1;
      }
    }
  }
  return holes;
}

/**
 * Scores a candidate board the way a competent builder would: finished courses
 * are worth a lot, buried holes and a tall ragged stack are worth a lot less.
 * This is what the idle backstop plays, so a hands-off run still produces a
 * real tower and a real result instead of an instant collapse.
 */
function scoreGrid(grid: Grid, lockedCount: number): number {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const heights = columnHeights(grid);
  let aggregate = 0;
  let bumpiness = 0;
  for (let c = 0; c < COLS; c++) {
    aggregate += heights[c];
    if (c + 1 < COLS) {
      bumpiness += Math.abs(heights[c] - heights[c + 1]);
    }
  }
  return (
    lockedCount * 760 -
    aggregate * 51 -
    countHoles(grid) * 356 -
    bumpiness * 18
  );
}

/** Best placement across every tray slab, rotation and column. */
export function bestPlan(grid: Grid, tray: TraySlab[]): DropPlan | null {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  const base = grid.map(row => {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
return (row.map(v => {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
return (v === 2 ? 1 : v);
}));
});
  let best: DropPlan | null = null;
  let bestScore = -Infinity;

  for (let slabIndex = 0; slabIndex < tray.length; slabIndex++) {
    const variants = rotationsOf(tray[slabIndex].key);
    for (let rotation = 0; rotation < variants.length; rotation++) {
      const cells = variants[rotation];
      for (let col = 0; col + widthOf(cells) <= COLS; col++) {
        const row = legalDrop(base, cells, col);
        if (row === null) {
          continue;
        }
        const next = writeCells(base, cells, row, col);
        const locked = fullRows(next);
        const settled =
          locked.length > 0 ? compactGrid(next, locked) : next;
        const score = scoreGrid(settled, locked.length);
        if (score > bestScore) {
          bestScore = score;
          best = {
            col: col,
            row: row,
            cells: cells,
            slabIndex: slabIndex,
            rotation: rotation,
          };
        }
      }
    }
  }
  return best;
}

export function isDeadlocked(grid: Grid, tray: TraySlab[]): boolean {
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix("bahcf");
void tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds([23, 30, 25]);
  for (const slab of tray) {
    for (const cells of rotationsOf(slab.key)) {
      for (let col = 0; col + widthOf(cells) <= COLS; col++) {
        if (legalDrop(grid, cells, col) !== null) {
          return false;
        }
      }
    }
  }
  return true;
}

/* autosetup-game-stamp:v1 */
function tqdoavrvyearrgamecGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function tqdoavrvyearrgamecGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function tqdoavrvyearrgamecGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void tqdoavrvyearrgamecGameMixSeed(3, 7);
void tqdoavrvyearrgamecGameFoldRange([1, 2, 3]);
void tqdoavrvyearrgamecGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 19)) % 281;
  return h;
}
function tqdoavrvyearrgamecengtqdoavrvyearrgaObfV1SumOdds(nums: number[]): number {
  let acc = 90;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 899;
  }
  return acc;
}
