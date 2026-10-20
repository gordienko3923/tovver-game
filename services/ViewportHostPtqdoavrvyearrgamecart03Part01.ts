/* autosetup-split:v1 */

export function ViewportHostPart03ObfV27ShtqdoavrvyearrgameciftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 53) & 31807;
}

export function ViewportObfV1tqdoavrvyearrgamec5Mix(a: number, b: number): number {
const base = 27;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function VtqdoavrvyearrgameciewportObfV15Fold(text: string): number {
let acc = 27;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function tqdoavrvyearrgamecViewportHostPartdgpnrismgemgObfV29Mix(a: number, b: number): number {
const base = 19;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function tqdoavrvyearrgamecViewportHostPartdgpnrismgemgObfV29Fold(text: string): number {
let acc = 19;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

/* obfuscation-batch:v30 */
function tqdoavrvyearrgamecViewportHostPpmvqkObfV30ByteFold(s: string): number {
  let x = 83;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 41021;
  return x;
}
function tqdoavrvyearrgamecViewportHostPpmvqkObfV30HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 33)) % 898;
  return h;
}
function tqdoavrvyearrgamecViewportHostPpmvqkObfV30SumOdds(nums: number[]): number {
  let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 215;
  }
  return acc;
}

/* obfuscation-batch:v31 */
function tqdoavrvyearrgamecViewportHostPtqdoaObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 105) & 51466;
}
function tqdoavrvyearrgamecViewportHostPtqdoaObfV31ByteFold(s: string): number {
  let x = 14;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) & 14164;
  return x;
}
function tqdoavrvyearrgamecViewportHostPtqdoaObfV31HashMix(s: string): number {
  let h = 33;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 39)) % 456;
  return h;
}
function tqdoavrvyearrgamecViewportHostPtqdoaObfV31SumOdds(nums: number[]): number {
  let acc = 10;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 3) % 652;
  }
  return acc;
}
