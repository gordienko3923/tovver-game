/* autosetup-split:v1 */

export function tqdoavrvyearrgamecGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function tqdoavrvyearrgamecGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecStqdoavrvyearrgameObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 86) & 29419;
}
void tqdoavrvyearrgamecStqdoavrvyearrgameObfV1ShiftXor(68, 39);
