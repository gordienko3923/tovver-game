/* autosetup-split:v1 */

export function ViewportHostPart01ObfVtqdoavrvyearrgamec27ByteFold(s: string): number {
let x = 17;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) & 24013;
return x;
}

export function tqdoavrvyearrgamecViewportHostPart01ObfV31ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 189) & 7111;
}

/* obfuscation-batch:v32 */
function tqdoavrvyearrgamecViewportHostPart01ObfV32SumOdds(nums: number[]): number {
  let acc = 58;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 417;
  }
  return acc;
}
function tqdoavrvyearrgamecViewportHostPart01ObfV32ClampMod(n: number, m: number): number {
  const span = (m % 32) + 5;
  const x = ((n ^ 108) << 2) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecViewportHostPart01ObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 70) & 21007;
}
function tqdoavrvyearrgamecViewportHostPart01ObfV32ByteFold(s: string): number {
  let x = 77;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 23852;
  return x;
}
