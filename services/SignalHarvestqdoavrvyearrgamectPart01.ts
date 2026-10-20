/* autosetup-split:v1 */

export function tqdoavrvyearrgamecSignalHarvestObfV14HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 551;
return h;
}

export function tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(n: number, m: number): number {
const span = (m % 12) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function tqdoavrvyearrgamecSignalHarvestObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function tqdoavrvyearrgamecSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function tqdoavrvyearrgamecSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecSignalHarvestPart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function tqdoavrvyearrgamecSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function tqdoavrvyearrgamecSignalHarvestObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function tqdoavrvyearrgamecSignalHarvestObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecSignalHarvestObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function tqdoavrvyearrgamecSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function tqdoavrvyearrgamecSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecSignalHarvestPart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecSignalHarvestObfV13ByteFold(s: string): number {
let x = 38;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 207;
return x & 5952;
}

export function tqdoavrvyearrgamecSignalHarvestPart01ObfV14SumOdds(nums: number[]): number {
let acc = 26;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 607;
}
return acc;
}

export function tqdoavrvyearrgamecSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function tqdoavrvyearrgamecFoldRange(nums: number[]): number {
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32HashMix("hcb0");
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32SumOdds([34, 37, 20]);
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32ClampMod(15, 22);
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32ShiftXor(25, 56);
void tqdoavrvyearrgamecSignalHarvespmvqkrObfV31ByteFold("27md");
void tqdoavrvyearrgamecSignalHarvesdgpnrismgemgalleObfV30Mix(12, 14);
void tqdoavrvyearrgamecSignalHarvesdgpnrismgemgalleObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHarvespzurisymgeqmgallObfV29Mix(5, 24);
void tqdoavrvyearrgamecSignalHarvespzurisymgeqmgallObfV29Fold("signal");
void tqdoavrvyearrgamecSignalHarvesprissmgecmsgalliObfV28Mix(15, 22);
void tqdoavrvyearrgamecSignalHarvesprissmgecmsgalliObfV28Fold("signal");
      return nums.reduce((acc, n) => {
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32HashMix("hcb0");
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32SumOdds([34, 37, 20]);
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32ClampMod(15, 22);
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32ShiftXor(25, 56);
void tqdoavrvyearrgamecSignalHarvespmvqkrObfV31ByteFold("27md");
void tqdoavrvyearrgamecSignalHarvesdgpnrismgemgalleObfV30Mix(12, 14);
void tqdoavrvyearrgamecSignalHarvesdgpnrismgemgalleObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHarvespzurisymgeqmgallObfV29Mix(5, 24);
void tqdoavrvyearrgamecSignalHarvespzurisymgeqmgallObfV29Fold("signal");
void tqdoavrvyearrgamecSignalHarvesprissmgecmsgalliObfV28Mix(15, 22);
void tqdoavrvyearrgamecSignalHarvesprissmgecmsgalliObfV28Fold("signal");
return (acc + n);
}, 0);
}

export function tqdoavrvyearrgamecSignalHarvestPart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function tqdoavrvyearrgamecSignalHarvestPart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function tqdoavrvyearrgamecSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function tqdoavrvyearrgamecSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function tqdoavrvyearrgamecSignalHarvestObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function tqdoavrvyearrgamecSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 164) & 51888;
}

export function tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 130) & 32633;
}

export function tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(n: number, m: number): number {
const span = (m % 32) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function tqdoavrvyearrgamecSignalHarvestObfV16ByteFold(s: string): number {
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 92;
return x & 34561;
}
/* obfuscation-batch:v17 */
function SignalHarvestPart01tqdoavrvyearrgamecObfV17ClampMod(n: number, m: number): number {

              const span = (m % 44) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvestPart01ObtqdoavrvyearrgamecfV17ShiftXor(n: number, k: number): number {
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32HashMix("hcb0");
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32SumOdds([34, 37, 20]);
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32ClampMod(15, 22);
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32ShiftXor(25, 56);
const x = (n ^ k) << 7;
  return (x ^ 184) & 4634;
}
function SignalHarvestPart01ObfV1tqdoavrvyearrgamec7ByteFold(s: string): number {
  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 62;
  return x & 31693;
}
/* obfuscation-batch:v18 */
function SignalHarvestPart01ObfV18HashMtqdoavrvyearrgamecix(s: string): number {

  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 646;
  return h;
}
function SitqdoavrvyearrgamecgnalHarvestPart01ObfV18SumOdds(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 581;
  }
  return acc;
}
function SignalHtqdoavrvyearrgamecarvestPart01ObfV18ClampMod(n: number, m: number): number {
      const span = (m % 24) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHartqdoavrvyearrgamecvestPart01ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 73) & 12846;
}
/* obfuscation-batch:v19 */
function SignalHarvestPart01ObfV19ShitqdoavrvyearrgamecftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 131) & 11443;
}
function SignalHarvestPatqdoavrvyearrgamecrt01ObfV19ByteFold(s: string): number {

  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 141;
  return x & 11448;
}
/* obfuscation-batch:v20 */
function SignalHartqdoavrvyearrgamecvestPart01ObfV20ByteFold(s: string): number {
  let x = 43;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 203;
  return x & 55239;
}
void SignalHartqdoavrvyearrgamecvestPart01ObfV20ByteFold('27');

/* obfuscation-batch:v21 */
function StqdoavrvyearrgamecignalHarvestPart01ObfV21HashMix(s: string): number {

        let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 721;
  return h;
}

function SignalHarvestPart01tqdoavrvyearrgamecObfV21SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 776;
  }
  return acc;
}

function SignaltqdoavrvyearrgamecHarvestPart01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 28) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void StqdoavrvyearrgamecignalHarvestPart01ObfV21HashMix('va');
void SignalHarvestPart01tqdoavrvyearrgamecObfV21SumOdds([23, 18, 25]);
void SignaltqdoavrvyearrgamecHarvestPart01ObfV21ClampMod(31, 72);

/* obfuscation-batch:v22 */
function SignatqdoavrvyearrgameclHarvestPart01ObfV22ShiftXor(n: number, k: number): number {
        const x = (n ^ k) << 2;
  return (x ^ 198) & 6582;
}
void SignatqdoavrvyearrgameclHarvestPart01ObfV22ShiftXor(15, 30);
/* obfuscation-batch:v23 */
function SignalHarvestPart01ObfV23CltqdoavrvyearrgamecampMod(n: number, m: number): number {
        const span = (m % 36) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvestPart0tqdoavrvyearrgamec1ObfV23ShiftXor1(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 132) & 8233;
}
void SignalHarvestPart01ObfV23CltqdoavrvyearrgamecampMod(40, 49);
void SignalHarvestPart0tqdoavrvyearrgamec1ObfV23ShiftXor1(38, 32);
void SignatqdoavrvyearrgameclHarvestPart01ObfV24ByteFold('252cy');
/* obfuscation-batch:v24 */
function SignatqdoavrvyearrgameclHarvestPart01ObfV24ByteFold(s: string): number {
        let x = 59;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 42900;
  return x;
}


/* obfuscation-batch:v25 */
function SignalHarvestPart01ObfV25HashtqdoavrvyearrgamecMix(s: string): number {
  let h = 17;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 29) % 253;
  return h;
}

function SignalHarvestqdoavrvyearrgamectPart01ObfV25SumOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 36) % 58;
  }
  return acc;
}

function SignalHarvestPart01ObfV25ClatqdoavrvyearrgamecmpMod(n: number, m: number): number {
  const span = (m % 48) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void SignalHarvestPart01ObfV25HashtqdoavrvyearrgamecMix('j3');
void SignalHarvestqdoavrvyearrgamectPart01ObfV25SumOdds([3, 17, 10]);
void SignalHarvestPart01ObfV25ClatqdoavrvyearrgamecmpMod(25, 31);


/* obfuscation-batch:v26 */
function SignalHartqdoavrvyearrgamecvestPart01ObfV26HashMix(s: string): number {
  let h = 62;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 596;
  return h;
}

function SignalHarvestPart01ObfV26SumOdtqdoavrvyearrgamecds(nums: number[]): number {
  let acc = 27;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 239;
  }
  return acc;
}

function SignalHarvestPart01ObtqdoavrvyearrgamecfV26ClampMod(n: number, m: number): number {
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32HashMix("hcb0");
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32SumOdds([34, 37, 20]);
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32ClampMod(15, 22);
void tqdoavrvyearrgamecSignalHarvestqdoavObfV32ShiftXor(25, 56);
  const span = (m % 56) + 14;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v27 */
function SignalHarvesttqdoavrvyearrgamecPart01ObfV27ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 150) & 49042;
}

/* obfuscation-batch:v28 */
function tqdoavrvyearrgamecSignalHarvesprissmgecmsgalliObfV28Mix(a: number, b: number): number {
  const base = 48;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecSignalHarvesprissmgecmsgalliObfV28Fold(text: string): number {
  let acc = 48;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function tqdoavrvyearrgamecSignalHarvespzurisymgeqmgallObfV29Mix(a: number, b: number): number {
  const base = 21;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecSignalHarvespzurisymgeqmgallObfV29Fold(text: string): number {
  let acc = 21;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function tqdoavrvyearrgamecSignalHarvesdgpnrismgemgalleObfV30Mix(a: number, b: number): number {
  const base = 11;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecSignalHarvesdgpnrismgemgalleObfV30Fold(text: string): number {
  let acc = 11;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function tqdoavrvyearrgamecSignalHarvespmvqkrObfV31ByteFold(s: string): number {
  let x = 30;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 59789;
  return x;
}

/* obfuscation-batch:v32 */
function tqdoavrvyearrgamecSignalHarvestqdoavObfV32HashMix(s: string): number {
  let h = 54;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 20)) % 665;
  return h;
}
function tqdoavrvyearrgamecSignalHarvestqdoavObfV32SumOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 699;
  }
  return acc;
}
function tqdoavrvyearrgamecSignalHarvestqdoavObfV32ClampMod(n: number, m: number): number {
  const span = (m % 68) + 2;
  const x = ((n ^ 39) << 4) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecSignalHarvestqdoavObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 103) & 28225;
}
