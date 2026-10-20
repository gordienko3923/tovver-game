/* autosetup-split:v1 */

export function tqdoavrvyearrgamecViewportHopzurisymgeqmgallseObfV28Mix(a: number, b: number): number {
const base = 61;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function tqdoavrvyearrgamecViewportHopzurisymgeqmgallseObfV28Fold(text: string): number {
let acc = 61;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

/* obfuscation-batch:v29 */
function tqdoavrvyearrgamecViewportHostPpmvqkObfV29ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 90) & 50118;
}
void tqdoavrvyearrgamecViewportHostPpmvqkObfV29ShiftXor(80, 19);

/* obfuscation-batch:v30 */
function tqdoavrvyearrgamecViewportqdoavrvyeaObfV30ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 55) & 9440;
}
function tqdoavrvyearrgamecViewportqdoavrvyeaObfV30ByteFold(s: string): number {
  let x = 11;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) & 47589;
  return x;
}
function tqdoavrvyearrgamecViewportqdoavrvyeaObfV30HashMix(s: string): number {
  let h = 12;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 25)) % 658;
  return h;
}
function tqdoavrvyearrgamecViewportqdoavrvyeaObfV30SumOdds(nums: number[]): number {
  let acc = 7;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 3) % 325;
  }
  return acc;
}
void tqdoavrvyearrgamecViewportqdoavrvyeaObfV30ShiftXor(31, 54);
void tqdoavrvyearrgamecViewportqdoavrvyeaObfV30ByteFold("nkh8");
void tqdoavrvyearrgamecViewportqdoavrvyeaObfV30HashMix("4f");
void tqdoavrvyearrgamecViewportqdoavrvyeaObfV30SumOdds([17, 32, 3]);
