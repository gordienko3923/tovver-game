/* autosetup-decoy:v1 */

export function tqdoavrvyearrgamecplait01Touch(seed: number): number {
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ClampMod(2, 45);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ShiftXor(4, 23);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ByteFold("m54pa");
  let x = Math.imul(seed | 0, 87);
  x = (x ^ 28960) % 2491;
  if (x < 0) x += 2491;
  return x;
}

/* obfuscation-batch:v1 */
function tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ClampMod(n: number, m: number): number {
  const span = (m % 33) + 2;
  const x = ((n ^ 176) << 1) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 126) & 58570;
}
function tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 4116;
  return x;
}
