/* autosetup-split:v1 */

export function tqdoavrvyearrgamecVieObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function tqdoavrvyearrgamecViewportHosObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function tqdoavrvyearrgamecViewportHosObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecViewportHostObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecViewportHostObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function tqdoavrvyearrgamecViewportHostObfV15ByteFold(s: string): number {
let x = 29;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 170;
return x & 5709;
}
/* obfuscation-batch:v17 */
function ViewportHostPart02OtqdoavrvyearrgamecbfV17ByteFold(s: string): number {
void tqdoavrvyearrgamecViewportHostPatqdoObfV32HashMix("a5if");
void tqdoavrvyearrgamecViewportHostPatqdoObfV32SumOdds([29, 28, 23]);
void tqdoavrvyearrgamecViewportHostPatqdoObfV32ClampMod(38, 33);
  let x = 80;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 106;
  return x & 6323;
}
void ViewportHostPart02OtqdoavrvyearrgamecbfV17ByteFold('fkvg');
/* obfuscation-batch:v18 */
function ViewportHostPart02ObfV18ByteFoltqdoavrvyearrgamecd(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 114;
  return x & 48365;
}
function VitqdoavrvyearrgamecewportHostPart02ObfV18HashMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 796;
  return h;
}
void ViewportHostPart02ObfV18ByteFoltqdoavrvyearrgamecd('92m');
void VitqdoavrvyearrgamecewportHostPart02ObfV18HashMix('nf66');
/* obfuscation-batch:v19 */
function ViewportHostPart02ObtqdoavrvyearrgamecfV19ShiftXor(n: number, k: number): number {
void tqdoavrvyearrgamecViewportHostPatqdoObfV32HashMix("a5if");
void tqdoavrvyearrgamecViewportHostPatqdoObfV32SumOdds([29, 28, 23]);
void tqdoavrvyearrgamecViewportHostPatqdoObfV32ClampMod(38, 33);
  const x = (n ^ k) << 4;
  return (x ^ 19) & 37937;
}
function ViewportHostPart02tqdoavrvyearrgamecObfV19ByteFold(s: string): number {
        let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 23) ^ 29;
  return x & 37942;
}
function ViewportHosttqdoavrvyearrgamecPart02ObfV19HashMix(s: string): number {

  let h = 23;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 609;
  return h;
}
function ViewportHotqdoavrvyearrgamecstPart02ObfV19SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 628;
  }
  return acc;
}
/* obfuscation-batch:v20 */
function VtqdoavrvyearrgameciewportHostPart02ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 146) & 28064;
}

/* obfuscation-batch:v21 */
function ViewpotqdoavrvyearrgamecrtHostPart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 27) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewtqdoavrvyearrgamecportHostPart02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 123) & 46424;
}
void ViewpotqdoavrvyearrgamecrtHostPart02ObfV21ClampMod(23, 18);
void ViewtqdoavrvyearrgamecportHostPart02ObfV21ShiftXor(60, 40);

/* obfuscation-batch:v22 */
function VietqdoavrvyearrgamecwportHostPart02ObfV22ClampMod(n: number, m: number): number {

const span = (m % 34) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function ViewportHostPart02ObfV22ShiftXtqdoavrvyearrgamecor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 186) & 47522;
}
void VietqdoavrvyearrgamecwportHostPart02ObfV22ClampMod(15, 71);
void ViewportHostPart02ObfV22ShiftXtqdoavrvyearrgamecor(65, 26);
/* obfuscation-batch:v23 */
function ViewptqdoavrvyearrgamecortHostPart02ObfV23ByteFold(s: string): number {
  let x = 41;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 32766;
  return x;
}
function ViewportHostPart02ObfVtqdoavrvyearrgamec23HashMix1(s: string): number {
  let h = 83;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 424;
  return h;
}
void ViewptqdoavrvyearrgamecortHostPart02ObfV23ByteFold('p0ga');
void ViewportHostPart02ObfVtqdoavrvyearrgamec23HashMix1('9jr0');
void ViewportHostPart02OtqdoavrvyearrgamecbfV24ShiftXor(31, 6);
/* obfuscation-batch:v24 */
function ViewportHostPart02OtqdoavrvyearrgamecbfV24ShiftXor(n: number, k: number): number {
void tqdoavrvyearrgamecViewportHostPatqdoObfV32HashMix("a5if");
void tqdoavrvyearrgamecViewportHostPatqdoObfV32SumOdds([29, 28, 23]);
void tqdoavrvyearrgamecViewportHostPatqdoObfV32ClampMod(38, 33);
void tqdoavrvyearrgamecViewportHostPapmvqObfV31HashMix("leh4l");
void tqdoavrvyearrgamecViewportHostPapmvqObfV31SumOdds([37, 28, 7]);
void tqdoavrvyearrgamecViewportHostPapmvqObfV31ClampMod(54, 49);
void tqdoavrvyearrgamecViewportHostPapmvqObfV31ShiftXor(40, 75);
        const x = (n ^ k) << 4;
  return (x ^ 95) & 14170;
}


/* obfuscation-batch:v25 */
function ViewportHosttqdoavrvyearrgamecPart02ObfV25ClampMod(n: number, m: number): number {
  const span = (m % 47) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewportHtqdoavrvyearrgamecostPart02ObfV25ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 159) & 54900;
}
void ViewportHosttqdoavrvyearrgamecPart02ObfV25ClampMod(56, 52);
void ViewportHtqdoavrvyearrgamecostPart02ObfV25ShiftXor(14, 28);


/* obfuscation-batch:v26 */
function ViewportHosttqdoavrvyearrgamecPart02ObfV26ByteFold(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 47) & 61698;
  return x;
}

function ViewportHostPart02OtqdoavrvyearrgamecbfV26HashMix(s: string): number {
void tqdoavrvyearrgamecViewportHostPatqdoObfV32HashMix("a5if");
void tqdoavrvyearrgamecViewportHostPatqdoObfV32SumOdds([29, 28, 23]);
void tqdoavrvyearrgamecViewportHostPatqdoObfV32ClampMod(38, 33);
  let h = 76;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 47) % 880;
  return h;
}

function ViewportHostPart02ObfV26SumOddstqdoavrvyearrgamec(nums: number[]): number {
  let acc = 81;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 23) % 408;
  }
  return acc;
}

/* obfuscation-batch:v27 */
function ViewportHosttqdoavrvyearrgamecPart02ObfV27HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 423;
  return h;
}
function ViewportqdoavrvyearrgamectHostPart02ObfV27SumOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 444;
  }
  return acc;
}

/* obfuscation-batch:v28 */
function tqdoavrvyearrgamecViewportHostPaprissmgecmsgalObfV28Mix(a: number, b: number): number {
  const base = 67;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecViewportHostPaprissmgecmsgalObfV28Fold(text: string): number {
  let acc = 67;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function tqdoavrvyearrgamecViewportHostPapzurisymgeqmgaObfV29Mix(a: number, b: number): number {
  const base = 37;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecViewportHostPapzurisymgeqmgaObfV29Fold(text: string): number {
  let acc = 37;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function tqdoavrvyearrgamecViewportHostPadgpnrismgemgalObfV30Mix(a: number, b: number): number {
  const base = 34;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecViewportHostPadgpnrismgemgalObfV30Fold(text: string): number {
  let acc = 34;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function tqdoavrvyearrgamecViewportHostPapmvqObfV31HashMix(s: string): number {
  let h = 5;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 634;
  return h;
}
function tqdoavrvyearrgamecViewportHostPapmvqObfV31SumOdds(nums: number[]): number {
  let acc = 26;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 151;
  }
  return acc;
}
function tqdoavrvyearrgamecViewportHostPapmvqObfV31ClampMod(n: number, m: number): number {
  const span = (m % 35) + 4;
  const x = ((n ^ 236) << 7) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecViewportHostPapmvqObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 122) & 29070;
}

/* obfuscation-batch:v32 */
function tqdoavrvyearrgamecViewportHostPatqdoObfV32HashMix(s: string): number {
  let h = 18;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 517;
  return h;
}
function tqdoavrvyearrgamecViewportHostPatqdoObfV32SumOdds(nums: number[]): number {
  let acc = 13;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 143;
  }
  return acc;
}
function tqdoavrvyearrgamecViewportHostPatqdoObfV32ClampMod(n: number, m: number): number {
  const span = (m % 49) + 8;
  const x = ((n ^ 164) << 1) % span;
  return x < 0 ? x + span : x;
}
