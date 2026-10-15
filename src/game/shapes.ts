/** A slab is a list of cell offsets, normalised so min row = 0 and min col = 0. */
export type Cell = { r: number; c: number };

export type SlabKey =
  | 'BLOCK_1'
  | 'BEAM_2'
  | 'COLUMN_2'
  | 'CORNER_3'
  | 'SLAB_4'
  | 'SPAN_3'
  | 'TEE_4';

export type SlabDef = {
  key: SlabKey;
  label: string;
  cells: Cell[];
  weight: number;
};

export const SLABS: Record<SlabKey, SlabDef> = {
  BLOCK_1: { key: 'BLOCK_1', label: 'MODULE', cells: [{ r: 0, c: 0 }], weight: 6 },
  BEAM_2: {
    key: 'BEAM_2',
    label: 'BEAM',
    cells: [
      { r: 0, c: 0 },
      { r: 0, c: 1 },
    ],
    weight: 20,
  },
  COLUMN_2: {
    key: 'COLUMN_2',
    label: 'COLUMN',
    cells: [
      { r: 0, c: 0 },
      { r: 1, c: 0 },
    ],
    weight: 12,
  },
  CORNER_3: {
    key: 'CORNER_3',
    label: 'CORNER',
    cells: [
      { r: 0, c: 0 },
      { r: 1, c: 0 },
      { r: 1, c: 1 },
    ],
    weight: 18,
  },
  SLAB_4: {
    key: 'SLAB_4',
    label: 'SLAB',
    cells: [
      { r: 0, c: 0 },
      { r: 0, c: 1 },
      { r: 1, c: 0 },
      { r: 1, c: 1 },
    ],
    weight: 18,
  },
  SPAN_3: {
    key: 'SPAN_3',
    label: 'SPAN',
    cells: [
      { r: 0, c: 0 },
      { r: 0, c: 1 },
      { r: 0, c: 2 },
    ],
    weight: 16,
  },
  TEE_4: {
    key: 'TEE_4',
    label: 'TEE',
    cells: [
      { r: 0, c: 0 },
      { r: 0, c: 1 },
      { r: 0, c: 2 },
      { r: 1, c: 1 },
    ],
    weight: 10,
  },
};

export const SLAB_KEYS: SlabKey[] = [
  'BLOCK_1',
  'BEAM_2',
  'COLUMN_2',
  'CORNER_3',
  'SLAB_4',
  'SPAN_3',
  'TEE_4',
];

function normalise(cells: Cell[]): Cell[] {
  let minR = Infinity;
  let minC = Infinity;
  for (const cell of cells) {
    if (cell.r < minR) {
      minR = cell.r;
    }
    if (cell.c < minC) {
      minC = cell.c;
    }
  }
  return cells
    .map(cell => ({ r: cell.r - minR, c: cell.c - minC }))
    .sort((a, b) => (a.r - b.r) || (a.c - b.c));
}

function rotateOnce(cells: Cell[]): Cell[] {
  // Clockwise quarter turn: (r, c) -> (c, -r)
  return normalise(cells.map(cell => ({ r: cell.c, c: -cell.r })));
}

function fingerprint(cells: Cell[]): string {
  return cells.map(cell => cell.r + ':' + cell.c).join('|');
}

/** Up to 4 distinct orientations, each clamped to width <= 4 (brief rule). */
export function rotationsOf(key: SlabKey): Cell[][] {
  const out: Cell[][] = [];
  const seen = new Set<string>();
  let current = normalise(SLABS[key].cells);
  for (let i = 0; i < 4; i++) {
    const width = widthOf(current);
    const print = fingerprint(current);
    if (width <= 4 && !seen.has(print)) {
      seen.add(print);
      out.push(current);
    }
    current = rotateOnce(current);
  }
  return out.length > 0 ? out : [normalise(SLABS[key].cells)];
}

export function widthOf(cells: Cell[]): number {
  let max = 0;
  for (const cell of cells) {
    if (cell.c > max) {
      max = cell.c;
    }
  }
  return max + 1;
}

export function heightOf(cells: Cell[]): number {
  let max = 0;
  for (const cell of cells) {
    if (cell.r > max) {
      max = cell.r;
    }
  }
  return max + 1;
}

/** Deterministic 32-bit PRNG — the stage seed drives a reproducible bag. */
export function makeRandom(seed: number): () => number {
  let state = (seed >>> 0) || 0x9e3779b9;
  return () => {
    state ^= state << 13;
    state >>>= 0;
    state ^= state >>> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 0x100000000;
  };
}

const WEIGHT_TOTAL = SLAB_KEYS.reduce((sum, key) => sum + SLABS[key].weight, 0);

/** Weighted draw, with a guard against three identical slabs in a row. */
export function drawSlab(rand: () => number, history: SlabKey[]): SlabKey {
  for (let attempt = 0; attempt < 8; attempt++) {
    let ticket = rand() * WEIGHT_TOTAL;
    let picked: SlabKey = 'BEAM_2';
    for (const key of SLAB_KEYS) {
      ticket -= SLABS[key].weight;
      if (ticket <= 0) {
        picked = key;
        break;
      }
    }
    const len = history.length;
    const repeated =
      len >= 2 && history[len - 1] === picked && history[len - 2] === picked;
    if (!repeated) {
      return picked;
    }
  }
  return 'BEAM_2';
}
