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
function tqdoavrvyearrgamecshaptqdoavrvyearrgObfV1ClampMod(n: number, m: number): number {
  const span = (m % 47) + 4;
  const x = ((n ^ 20) << 3) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecshaptqdoavrvyearrgObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 198) & 58336;
}
function tqdoavrvyearrgamecshaptqdoavrvyearrgObfV1ByteFold(s: string): number {
  let x = 54;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) & 58285;
  return x;
}
void tqdoavrvyearrgamecshaptqdoavrvyearrgObfV1ClampMod(62, 41);
void tqdoavrvyearrgamecshaptqdoavrvyearrgObfV1ShiftXor(16, 51);
void tqdoavrvyearrgamecshaptqdoavrvyearrgObfV1ByteFold("a50");
