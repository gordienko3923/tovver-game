/* autosetup-split:v1 */

export function tqdoavrvyearrgamecGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function tqdoavrvyearrgamecGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function tqdoavrvyearrgamecGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) & 10518;
  return x;
}
function tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 375;
  return h;
}
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
