/* autosetup-split:v1 */

export function PubtqdoavrvyearrgameclicPingObfV25ByteFold(s: string): number {
let x = 77;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 43311;
return x;
}

export function PublitqdoavrvyearrgameccPingObfV19ClampMod(n: number, m: number): number {
const span = (m % 38) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function PublicPingObfV22tqdoavrvyearrgamecShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 84) & 35676;
}

export function tqdoavrvyearrgamecPublicPingObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 215) & 24601;
}

export function tqdoavrvyearrgamecPublicPingObfV16ClampMod(n: number, m: number): number {
const span = (m % 60) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function PubltqdoavrvyearrgamecicPingPart01ObfV21ByteFold(s: string): number {
let x = 44;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 65535;
return x;
}

export function PublicPingPart01ObfV24SumOddstqdoavrvyearrgamec(nums: number[]): number {
let acc = 90;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 8) % 638;
}
return acc;
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
function tqdoavrvyearrgamecPublicpmvqkrmwismgObfV27SumOdds(nums: number[]): number {
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 388;
  }
  return acc;
}
function tqdoavrvyearrgamecPublicpmvqkrmwismgObfV27ClampMod(n: number, m: number): number {
  const span = (m % 25) + 7;
  const x = ((n ^ 108) << 2) % span;
  return x < 0 ? x + span : x;
}
void tqdoavrvyearrgamecPublicpmvqkrmwismgObfV27SumOdds([33, 8, 19]);
void tqdoavrvyearrgamecPublicpmvqkrmwismgObfV27ClampMod(74, 53);

/* obfuscation-batch:v28 */
function tqdoavrvyearrgamecPublicPingPart03tqObfV28SumOdds(nums: number[]): number {
  let acc = 49;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 855;
  }
  return acc;
}
void tqdoavrvyearrgamecPublicPingPart03tqObfV28SumOdds([16, 11, 18]);
