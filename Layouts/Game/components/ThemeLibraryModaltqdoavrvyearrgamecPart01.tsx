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
function tqdoavrvyearrgamecThemeLibraryModaltObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 82) & 16074;
}
void tqdoavrvyearrgamecThemeLibraryModaltObfV1ShiftXor(4, 55);
