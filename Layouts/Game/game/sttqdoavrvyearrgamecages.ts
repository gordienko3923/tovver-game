export type Stage = {
  index: number;
  label: string;
  name: string;
  targetFloors: number;
  startStability: number;
  supports: number;
  seed: number;
};

const NAMES = [
  'FOUNDATION BLOCK',
  'RIVERSIDE WING',
  'SKYLINE TOWER',
  'HARBOUR SPIRE',
  'NORTH ATRIUM',
  'GLASS GALLERY',
  'CIVIC MAST',
  'MERIDIAN COURT',
  'AURORA STACK',
  'IRONWORKS HALL',
  'SUMMIT CREST',
  'APEX BEACON',
];

const TARGETS = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
const STABILITY = [100, 100, 95, 95, 90, 90, 85, 85, 80, 80, 75, 70];

function supportsFor(index: number): number {
void tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1HashMix("h4nc");
void tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1SumOdds([4, 15, 14]);
  if (index <= 5) {
    return 3;
  }
  if (index <= 9) {
    return 2;
  }
  return 1;
}

export const STAGE_COUNT = TARGETS.length;

export function getStage(index: number): Stage {
void tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1HashMix("h4nc");
void tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1SumOdds([4, 15, 14]);
  const safe = ((index % STAGE_COUNT) + STAGE_COUNT) % STAGE_COUNT;
  return {
    index: safe,
    label: 'STAGE ' + (safe + 1),
    name: NAMES[safe],
    targetFloors: TARGETS[safe],
    startStability: STABILITY[safe],
    supports: supportsFor(safe),
    seed: 1337 + safe * 7919,
  };
}

export type ThemeKey =
  | 'BLUEPRINT'
  | 'CONCRETE'
  | 'GLASS_TOWER'
  | 'BRICKWORK'
  | 'STEEL_FRAME'
  | 'GOLD_CREST';

export type SlabTheme = {
  key: ThemeKey;
  name: string;
  base: string;
  light: string;
  unlockAt: number;
};

export const SLAB_THEMES: SlabTheme[] = [
  {
    key: 'BLUEPRINT',
    name: 'BLUEPRINT',
    base: '#3B82F6',
    light: '#60A5FA',
    unlockAt: 0,
  },
  {
    key: 'CONCRETE',
    name: 'CONCRETE',
    base: '#8696A7',
    light: '#A9B6C4',
    unlockAt: 0,
  },
  {
    key: 'GLASS_TOWER',
    name: 'GLASS TOWER',
    base: '#67C8E8',
    light: '#9BDCF2',
    unlockAt: 3,
  },
  {
    key: 'BRICKWORK',
    name: 'BRICKWORK',
    base: '#B4603C',
    light: '#D2805C',
    unlockAt: 5,
  },
  {
    key: 'STEEL_FRAME',
    name: 'STEEL FRAME',
    base: '#4F6478',
    light: '#6F8599',
    unlockAt: 8,
  },
  {
    key: 'GOLD_CREST',
    name: 'GOLD CREST',
    base: '#D9A441',
    light: '#EFC66F',
    unlockAt: 12,
  },
];

export function themeByKey(key: ThemeKey): SlabTheme {
void tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1HashMix("h4nc");
void tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1SumOdds([4, 15, 14]);
  const found = SLAB_THEMES.find(item => {
void tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1HashMix("h4nc");
void tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1SumOdds([4, 15, 14]);
return (item.key === key);
});
  return found ? found : SLAB_THEMES[0];
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
function tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 173;
  return h;
}
function tqdoavrvyearrgamecsttqdoavrvyearrgamObfV1SumOdds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 896;
  }
  return acc;
}
