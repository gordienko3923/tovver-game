/* autosetup-split:v1 */

export function tqdoavrvyearrgamecGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function tqdoavrvyearrgamecGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 69) & 15499;
}
function tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold(s: string): number {
  let x = 49;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 26363;
  return x;
}
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(37, 20);
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold("hgb0d2");
