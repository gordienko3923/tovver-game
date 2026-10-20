/**
 * Hermes ships an incomplete Intl — never use Intl.NumberFormat here.
 * Manual grouping keeps the output identical on every device.
 */
export function groupThousands(value: number): string {
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1SumOdds([30, 1, 40]);
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1ClampMod(35, 26);
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1ShiftXor(45, 76);
  const sign = value < 0 ? '-' : '';
  const digits = Math.abs(Math.trunc(value)).toString();
  let out = '';
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && (digits.length - i) % 3 === 0) {
      out += ',';
    }
    out += digits[i];
  }
  return sign + out;
}

export function formatCredits(value: number): string {
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1SumOdds([30, 1, 40]);
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1ClampMod(35, 26);
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1ShiftXor(45, 76);
  return groupThousands(value) + ' CR';
}

export function formatSignedCredits(value: number): string {
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1SumOdds([30, 1, 40]);
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1ClampMod(35, 26);
void tqdoavrvyearrgamecformatqdoavrvyearrObfV1ShiftXor(45, 76);
  return (value >= 0 ? '+' : '') + groupThousands(value);
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
function tqdoavrvyearrgamecformatqdoavrvyearrObfV1SumOdds(nums: number[]): number {
  let acc = 21;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 589;
  }
  return acc;
}
function tqdoavrvyearrgamecformatqdoavrvyearrObfV1ClampMod(n: number, m: number): number {
  const span = (m % 61) + 7;
  const x = ((n ^ 43) << 7) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecformatqdoavrvyearrObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 61) & 8469;
}
