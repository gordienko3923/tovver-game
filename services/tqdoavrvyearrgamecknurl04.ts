/* autosetup-decoy:v1 */

export function tqdoavrvyearrgamecknurl04Touch(seed: number): number {
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ClampMod(2, 45);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ShiftXor(4, 23);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ByteFold("m54pa");
  const tag = "tqdoavrvyearrgamecknurl04Touch";
  let x = (seed ^ 14393) & 0xffff;
  for (let i = 0; i < tag.length; i++) {
    x = (x + tag.charCodeAt(i) * 13) & 0xffff;
  }
  return x ^ 1532;
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
