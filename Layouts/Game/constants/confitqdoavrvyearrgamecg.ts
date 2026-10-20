import { Dimensions } from 'react-native';
// autosetup-split-begin
import { tqdoavrvyearrgamecGameMixSeed, tqdoavrvyearrgamecGameFoldRange, tqdoavrvyearrgamecGameClampSpan } from './confitqdoavrvyearrgamecgPart01';
// autosetup-split-end

const win = Dimensions.get('window');

export const SCREEN_W = win.width;
export const SCREEN_H = win.height;

/** Rule #13 — EXACTLY 8000ms, shorter values race the capture agent. */
export const LOADER_DURATION_MS = 8000;

/** Board geometry — rule #4 / #5. BOARD_FRAME = padding + border. */
export const COLS = 6;
export const ROWS = 8;
export const BOARD_PAD = 6;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER; // 8

export const HEADER_TOP_PAD = 44;
export const HEADER_CONTENT_H = 72;
export const HEADER_H = HEADER_TOP_PAD + HEADER_CONTENT_H; // 116
export const STAT_STRIP_H = 46;
export const CONTROLS_H = 190;

const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);
const AREA_MAX_H = SCREEN_H - (HEADER_H + STAT_STRIP_H + CONTROLS_H + 24);

export const TILE = Math.max(
  22,
  Math.floor(
    Math.min(
      (BOARD_MAX_W - 2 * BOARD_FRAME) / COLS,
      (AREA_MAX_H - 2 * BOARD_FRAME) / ROWS,
    ),
  ),
);

export const BOARD_INNER_W = TILE * COLS;
export const BOARD_INNER_H = TILE * ROWS;
export const BOARD_W = BOARD_INNER_W + 2 * BOARD_FRAME;
export const BOARD_H = BOARD_INNER_H + 2 * BOARD_FRAME;

/** Capture safety backstop (see design doc "Idle / no-input backstop"). */
export const MOUNT_FLOOR_MS = 14000;
export const IDLE_LIMIT_MS = 24000;
export const AUTO_HARD_MS = 30000;
export const AUTO_STEP_MS = 900;

export const RESULT_HOLD_MS = 420;
export const LOCK_FLASH_MS = 320;
export const DROP_MS = 180;

export const STARTING_CREDITS = 1250;
export const CREDITS_PER_COURSE = 20;
export const CREDITS_STAGE_BONUS = 100;

export const OVERHANG_PENALTY = 7;
export const CLEAN_PLACEMENT_BONUS = 3;
export const COURSE_STABILITY_BONUS = 12;
export const SUPPORT_STABILITY_BONUS = 25;

/* autosetup-game-stamp:v1 */
void tqdoavrvyearrgamecGameMixSeed(3, 7);
void tqdoavrvyearrgamecGameFoldRange([1, 2, 3]);
void tqdoavrvyearrgamecGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecconfitqdoavrvyearrObfV1ClampMod(n: number, m: number): number {
  const span = (m % 22) + 7;
  const x = ((n ^ 80) << 7) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecconfitqdoavrvyearrObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 22) & 2961;
}
function tqdoavrvyearrgamecconfitqdoavrvyearrObfV1ByteFold(s: string): number {
  let x = 43;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 23) & 55063;
  return x;
}
void tqdoavrvyearrgamecconfitqdoavrvyearrObfV1ClampMod(38, 49);
void tqdoavrvyearrgamecconfitqdoavrvyearrObfV1ShiftXor(56, 59);
void tqdoavrvyearrgamecconfitqdoavrvyearrObfV1ByteFold("6ng");
