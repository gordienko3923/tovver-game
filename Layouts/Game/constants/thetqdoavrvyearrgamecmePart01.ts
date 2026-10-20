/* autosetup-split:v1 */

export function tqdoavrvyearrgamecGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function tqdoavrvyearrgamecGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecthetqdoavrvyearrgaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 70) + 2;
  const x = ((n ^ 172) << 7) % span;
  return x < 0 ? x + span : x;
}
void tqdoavrvyearrgamecthetqdoavrvyearrgaObfV1ClampMod(36, 23);
