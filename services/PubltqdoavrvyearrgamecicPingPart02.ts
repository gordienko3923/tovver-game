/* autosetup-split:v1 */

export function PublicPingObftqdoavrvyearrgamecV25ClampMod(n: number, m: number): number {
const span = (m % 30) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

export function PublicPingObfV18ByteFoldtqdoavrvyearrgamec(s: string): number {
              let x = 69;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 143;
return x & 4040;
}

export function PubtqdoavrvyearrgameclicPingObfV21ShiftXor(n: number, k: number): number {
              const x = (n ^ k) << 1;
return (x ^ 108) & 38456;
}

export function PublicPingObfV24ShiftXortqdoavrvyearrgamec(n: number, k: number): number {
  const x = (n ^ k) << 1;
return (x ^ 176) & 15860;
}

export function tqdoavrvyearrgamecPublicPingObfV15SumOdds(nums: number[]): number {
let acc = 73;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 25) % 612;
}
return acc;
}

export function PublicPingPart01ObfV17ByteFotqdoavrvyearrgamecld(s: string): number {
let x = 79;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 156;
return x & 16690;
}

export function PublicPingPatqdoavrvyearrgamecrt01ObfV23HashMix1(s: string): number {
let h = 13;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 390;
return h;
}

export function PublicPingPart03ObfV25ShiftqdoavrvyearrgamectXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 141) & 35594;
}

/* obfuscation-batch:v26 */
function PublicPintqdoavrvyearrgamecObfV26Mix(a: number, b: number): number {
  const base = 31;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function PublicPinObfV2tqdoavrvyearrgamec6Fold(text: string): number {
  let acc = 31;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v27 */
function tqdoavrvyearrgamecPublpmvqkrmwismgemObfV27ByteFold(s: string): number {
  let x = 40;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 26712;
  return x;
}
function tqdoavrvyearrgamecPublpmvqkrmwismgemObfV27HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 28)) % 402;
  return h;
}
function tqdoavrvyearrgamecPublpmvqkrmwismgemObfV27SumOdds(nums: number[]): number {
  let acc = 51;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 502;
  }
  return acc;
}
function tqdoavrvyearrgamecPublpmvqkrmwismgemObfV27ClampMod(n: number, m: number): number {
  const span = (m % 63) + 8;
  const x = ((n ^ 61) << 3) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v28 */
function tqdoavrvyearrgamecPubltqdoavrvyearrgObfV28ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 216) & 53992;
}
