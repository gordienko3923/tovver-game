/**
 * Every visual element in TOWER RUSH is vector (react-native-svg) or a
 * gradient, so no screen depends on a generated bitmap at bundle time.
 * The launcher icon is produced by the asset pipeline from assets.json and
 * installed straight into android/app/src/main/res/mipmap-*.
 *
 * `appIcon` is the one raster that ships with the repo; it is re-exported here
 * so the brand mark has a single import path if a screen ever needs it.
 */
export const appIcon = require('../../../assets/icon_512.png');

export const assets = {
  appIcon,
};

export default assets;

/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecindexObfV1ClampMod(n: number, m: number): number {
  const span = (m % 37) + 8;
  const x = ((n ^ 245) << 5) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecindexObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 163) & 33589;
}
function tqdoavrvyearrgamecindexObfV1ByteFold(s: string): number {
  let x = 31;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) & 33006;
  return x;
}
function tqdoavrvyearrgamecindexObfV1HashMix(s: string): number {
  let h = 4;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 25)) % 652;
  return h;
}
void tqdoavrvyearrgamecindexObfV1ClampMod(59, 18);
void tqdoavrvyearrgamecindexObfV1ShiftXor(5, 20);
void tqdoavrvyearrgamecindexObfV1ByteFold("3o36b");
void tqdoavrvyearrgamecindexObfV1HashMix("haj");
