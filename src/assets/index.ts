/**
 * Every visual element in TOWER RUSH is vector (react-native-svg) or a
 * gradient, so no screen depends on a generated bitmap at bundle time.
 * The launcher icon is produced by the asset pipeline from assets.json and
 * installed straight into android/app/src/main/res/mipmap-*.
 *
 * `appIcon` is the one raster that ships with the repo; it is re-exported here
 * so the brand mark has a single import path if a screen ever needs it.
 */
export const appIcon = require('../../assets/icon_512.png');

export const assets = {
  appIcon,
};

export default assets;
