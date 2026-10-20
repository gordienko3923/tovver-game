/* autosetup-split:v1 */

export function tqdoavrvyearrgamecGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function tqdoavrvyearrgamecGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function tqdoavrvyearrgamecGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

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
