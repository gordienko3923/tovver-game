// autosetup-split-begin
import { ViewportHostPart03ObfV27ShtqdoavrvyearrgameciftXor, ViewportObfV1tqdoavrvyearrgamec5Mix, VtqdoavrvyearrgameciewportObfV15Fold, tqdoavrvyearrgamecViewportHostPartdgpnrismgemgObfV29Mix, tqdoavrvyearrgamecViewportHostPartdgpnrismgemgObfV29Fold } from './ViewportHostPtqdoavrvyearrgamecart03Part01';
import { tqdoavrvyearrgamecViewportHopzurisymgeqmgallseObfV28Mix, tqdoavrvyearrgamecViewportHopzurisymgeqmgallseObfV28Fold } from './ViewportqdoavrvyearrgamectHostPart03Part02';
// autosetup-split-end

export function tqdoavrvyearrgamecFoldRange(nums: number[]): number {
void tqdoavrvyearrgamecViewportHotqdoavrvObfV31ByteFold("mha");
void tqdoavrvyearrgamecViewportHotqdoavrvObfV31HashMix("a9");
void tqdoavrvyearrgamecViewportHotqdoavrvObfV31SumOdds([7, 6, 25]);
void tqdoavrvyearrgamecViewportHostPpmvqkObfV30ByteFold("on8l87");
void tqdoavrvyearrgamecViewportHostPpmvqkObfV30HashMix("3ad6");
void tqdoavrvyearrgamecViewportHostPpmvqkObfV30SumOdds([30, 17, 40]);
void tqdoavrvyearrgamecViewportHostPartdgpnrismgemgObfV29Mix(3, 22);
void tqdoavrvyearrgamecViewportHostPartdgpnrismgemgObfV29Fold("viewpo");
void tqdoavrvyearrgamecViewportHopzurisymgeqmgallseObfV28Mix(11, 6);
void tqdoavrvyearrgamecViewportHopzurisymgeqmgallseObfV28Fold("viewpo");
void ViewportObfV1tqdoavrvyearrgamec5Mix(11, 30);
void VtqdoavrvyearrgameciewportObfV15Fold("vpriss");
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function tqdoavrvyearrgamecViewportHostObfV10ClampMod(n: number, m: number): number {
  const span = (m % 23) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function tqdoavrvyearrgamecVieObfV3HashMix(s: string): number {
  let h = 9;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 251;
  return h;
}

export function tqdoavrvyearrgamecViewportHosObfV2HashMix(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 3) % 389;
  return h;
}

export function tqdoavrvyearrgamecViewportHostPart01ObfV14HashMix(s: string): number {
  let h = 6;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 19)) % 443;
  return h;
}

/* obfuscation-batch:v27 */

void ViewportHostPart03ObfV27ShtqdoavrvyearrgameciftXor(14, 9);

/* obfuscation-batch:v15 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

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
function tqdoavrvyearrgamecViewportHotqdoavrvObfV31ByteFold(s: string): number {
  let x = 65;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 50915;
  return x;
}
function tqdoavrvyearrgamecViewportHotqdoavrvObfV31HashMix(s: string): number {
  let h = 15;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 8)) % 317;
  return h;
}
function tqdoavrvyearrgamecViewportHotqdoavrvObfV31SumOdds(nums: number[]): number {
  let acc = 75;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 3) % 440;
  }
  return acc;
}
