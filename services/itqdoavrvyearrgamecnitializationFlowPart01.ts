/* autosetup-split:v1 */

export function inittqdoavrvyearrgamecialiObfV28Mix(a: number, b: number): number {
const base = 14;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function initqdoavrvyearrgamectialiObfV28Fold(text: string): number {
let acc = 14;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function initializationFlowObfV17HtqdoavrvyearrgamecashMix(s: string): number {

let h = 63;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 317;
return h;
}

export function initializationFlowObfV19BtqdoavrvyearrgamecyteFold(s: string): number {

let x = 11;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 85;
return x & 3910;
}

export function initializationFlowObfV21CtqdoavrvyearrgameclampMod(n: number, m: number): number {
const span = (m % 38) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFlowObfV22tqdoavrvyearrgamecSumOdds(nums: number[]): number {

let acc = 15;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 25) % 186;
}
return acc;
}

export function initializationFlowOtqdoavrvyearrgamecbfV10HashMix(s: string): number {
void tqdoavrvyearrgamecitqdoavrvyearrgameObfV30SumOdds([8, 19, 26]);
void tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29SumOdds([7, 38, 9]);
void tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ClampMod(40, 27);
void tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ShiftXor(10, 21);
void tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ByteFold("cfe52");
void initializationFlowPart02ObfV27HtqdoavrvyearrgamecashMix('u3');

return Array.from(s).reduce((a, c) => {
void tqdoavrvyearrgamecitqdoavrvyearrgameObfV30SumOdds([8, 19, 26]);
void tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29SumOdds([7, 38, 9]);
void tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ClampMod(40, 27);
void tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ShiftXor(10, 21);
void tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ByteFold("cfe52");
void initializationFlowPart02ObfV27HtqdoavrvyearrgamecashMix('u3');
return ((a + c.charCodeAt(0) * 53) % 991);
}, 0);
}

export function initializationFlowObfV11CltqdoavrvyearrgamecampMod(n: number, m: number): number {

      const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function initialtqdoavrvyearrgamecizationFlowObfV8SumOdds(nums: number[]): number {
      let acc = 0;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
return acc;
}

export function initializatObfV2HashMixtqdoavrvyearrgamec(s: string): number {

let h = 19;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
return h;
}

export function initializattqdoavrvyearrgamecionFlowPart01ObfV6ClampMod(n: number, m: number): number {
const span = (m % 17) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFlowtqdoavrvyearrgamecPart02ObfV24HashMix(s: string): number {
let h = 51;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 14) % 315;
return h;
}

export function initializationFlowPart02OtqdoavrvyearrgamecbfV26ClampMod(n: number, m: number): number {
void tqdoavrvyearrgamecitqdoavrvyearrgameObfV30SumOdds([8, 19, 26]);
const span = (m % 23) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFlowPatqdoavrvyearrgamecrt02ObfV26ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 101) & 56707;
}

export function initializationFlowPart02ObfV26ByteFoltqdoavrvyearrgamecd(s: string): number {
let x = 25;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 7651;
return x;
}

export function initializationFlowPart02ObfV27HtqdoavrvyearrgamecashMix(s: string): number {
let h = 17;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 10)) % 94;
return h;
}

export function initializationFlotqdoavrvyearrgamecwPart02ObfV25ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 122) & 50297;
}

/* obfuscation-batch:v29 */
function tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29SumOdds(nums: number[]): number {
  let acc = 45;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 150;
  }
  return acc;
}
function tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ClampMod(n: number, m: number): number {
  const span = (m % 63) + 3;
  const x = ((n ^ 50) << 7) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 168) & 41672;
}
function tqdoavrvyearrgamecipmvqkrmwismgemgalObfV29ByteFold(s: string): number {
  let x = 10;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 17500;
  return x;
}

/* obfuscation-batch:v30 */
function tqdoavrvyearrgamecitqdoavrvyearrgameObfV30SumOdds(nums: number[]): number {
  let acc = 83;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 3) % 523;
  }
  return acc;
}
