// autosetup-split-begin
import { ViewportHostPart01ObfVtqdoavrvyearrgamec27ByteFold, tqdoavrvyearrgamecViewportHostPart01ObfV31ShiftXor } from './ViewportHostPart01tqdoavrvyearrgamecPart01';
import { tqdoavrvyearrgamecViewportHostPart01ObfV31SumOdds } from './ViewportHostPart01tqdoavrvyearrgamecPart02';
import { tqdoavrvyearrgamecViewportHostPart01ObfV31ClampMod } from './ViewportHostPart01tqdoavrvyearrgamecPart03';
// autosetup-split-end

export function tqdoavrvyearrgamecViewportHostObfV15SumOdds(nums: number[]): number {
  let acc = 4;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 173;
  }
  return acc;
}

export function tqdoavrvyearrgamecViewportHostObfV14ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 41) & 29117;
}

export function tqdoavrvyearrgamecViewportHostObfV11ClampMod(n: number, m: number): number {
  const span = (m % 27) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function tqdoavrvyearrgamecViewportHostObfV7SumOdds(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 211;
  }
  return acc;
}

export function tqdoavrvyearrgamecViewportHostObfV8HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 307;
  return h;
}

export function tqdoavrvyearrgamecViewportHostObfV6ClampMod(n: number, m: number): number {
  const span = (m % 19) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v27 */

void ViewportHostPart01ObfVtqdoavrvyearrgamec27ByteFold('k8');

/* obfuscation-batch:v28 */
function tqdoavrvyearrgamecViewportHostPart01prissmgecmObfV28Mix(a: number, b: number): number {
  const base = 51;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecViewportHostPart01prissmgecmObfV28Fold(text: string): number {
  let acc = 51;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function tqdoavrvyearrgamecViewportHostPart01pzurisymgeObfV29Mix(a: number, b: number): number {
  const base = 22;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecViewportHostPart01pzurisymgeObfV29Fold(text: string): number {
  let acc = 22;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function tqdoavrvyearrgamecViewportHostPart01dgpnrismgeObfV30Mix(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecViewportHostPart01dgpnrismgeObfV30Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
void tqdoavrvyearrgamecViewportHostPart01ObfV31SumOdds([30, 25, 24]);
void tqdoavrvyearrgamecViewportHostPart01ObfV31ClampMod(67, 42);
void tqdoavrvyearrgamecViewportHostPart01ObfV31ShiftXor(29, 60);

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
void tqdoavrvyearrgamecViewportHostPart01ObfV32SumOdds([39, 6, 9]);
void tqdoavrvyearrgamecViewportHostPart01ObfV32ClampMod(48, 35);
void tqdoavrvyearrgamecViewportHostPart01ObfV32ShiftXor(66, 29);
void tqdoavrvyearrgamecViewportHostPart01ObfV32ByteFold("8papkh");
