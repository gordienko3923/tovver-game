import { useEffect, useState } from 'react';
import { STARTING_CREDITS } from '../constants/confitqdoavrvyearrgamecg';
import { SLAB_THEMES, STAGE_COUNT, ThemeKey } from './sttqdoavrvyearrgamecages';

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
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
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
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
  listeners.forEach(listener => {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
return (listener(state));
});
}

function write(patch: Partial<Progress>): void {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
  state = { ...state, ...patch };
  emit();
}

export const progressStoretqdoavrvyearrgamec = {
  read(): Progress {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
    return state;
  },

  subscribe(listener: (next: Progress) => void): () => void {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
    listeners.add(listener);
    return () => {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
      listeners.delete(listener);
    };
  },

  addCredits(amount: number): void {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
    write({ credits: Math.max(0, state.credits + amount) });
  },

  recordRun(floors: number, completed: boolean): void {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
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
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
    write({ activeTheme: key });
  },

  toggleSetting(key: SettingKey): void {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
    write({ settings: { ...state.settings, [key]: !state.settings[key] } });
  },

  resetAll(): void {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
    state = initialProgress();
    emit();
  },
};

export function unlockedThemeKeys(blueprintsDone: number): ThemeKey[] {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
  return SLAB_THEMES.filter(item => {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
return (item.unlockAt <= blueprintsDone);
}).map(
    item => {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
return (item.key);
},
  );
}

export function isThemeUnlocked(key: ThemeKey, blueprintsDone: number): boolean {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
  const found = SLAB_THEMES.find(item => {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
return (item.key === key);
});
  return found ? found.unlockAt <= blueprintsDone : false;
}

/** Screens subscribe through this hook — they never import `state` directly. */
export function useProgress(): Progress {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
  const [snapshot, setSnapshot] = useState<Progress>(progressStoretqdoavrvyearrgamec.read());
  useEffect(() => {
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(10, 21);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(60, 47);
void tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold("gpo");
    setSnapshot(progressStoretqdoavrvyearrgamec.read());
    return progressStoretqdoavrvyearrgamec.subscribe(setSnapshot);
  }, []);
  return snapshot;
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
function tqdoavrvyearrgamecprogressStoretqdoaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 59) + 6;
  const x = ((n ^ 78) << 3) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecprogressStoretqdoaObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 172) & 46820;
}
function tqdoavrvyearrgamecprogressStoretqdoaObfV1ByteFold(s: string): number {
  let x = 74;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 38) & 45394;
  return x;
}
