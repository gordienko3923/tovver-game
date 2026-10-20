import React, { ReactNode, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_H, SCREEN_W } from '../constants/confitqdoavrvyearrgamecg';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import BluetqdoavrvyearrgamecprintGrid from './BluetqdoavrvyearrgamecprintGrid';

export type ShellVariant = 'loader' | 'menu' | 'game' | 'win' | 'lose';

type Props = {
  variant: ShellVariant;
  children: ReactNode;
};

const GRADIENTS: Record<ShellVariant, string[]> = {
  loader: thetqdoavrvyearrgamecme.gradients.loader,
  menu: thetqdoavrvyearrgamecme.gradients.menu,
  game: thetqdoavrvyearrgamecme.gradients.game,
  win: thetqdoavrvyearrgamecme.gradients.win,
  lose: thetqdoavrvyearrgamecme.gradients.lose,
};

const GRID_OPACITY: Record<ShellVariant, number> = {
  loader: 0.18,
  menu: 0.07,
  game: 0.06,
  win: 0.07,
  lose: 0.07,
};

/** Background stack shared by every screen: gradient -> grid -> blob -> content. */
function AppShellBase({ variant, children }: Props) {
void tqdoavrvyearrgamecAptqdoavrvyearrgamObfV1ShiftXor(23, 78);
void tqdoavrvyearrgamecAptqdoavrvyearrgamObfV1ByteFold("f4b81");
void tqdoavrvyearrgamecAptqdoavrvyearrgamObfV1HashMix("90p8pg");
void tqdoavrvyearrgamecAptqdoavrvyearrgamObfV1SumOdds([12, 31, 22]);
  const isLoader = variant === 'loader';
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={GRADIENTS[variant]}
        start={{ x: 0, y: 0 }}
        end={isLoader ? { x: 1, y: 1 } : { x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <BluetqdoavrvyearrgamecprintGrid
        width={SCREEN_W}
        height={SCREEN_H}
        cell={28}
        color={thetqdoavrvyearrgamecme.colors.grid.blueprint}
        opacity={GRID_OPACITY[variant]}
      />
      {isLoader ? null : <View style={styles.blob} pointerEvents="none" />}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thetqdoavrvyearrgamecme.colors.bg.primary,
  },
  content: {
    flex: 1,
  },
  blob: {
    position: 'absolute',
    top: -120,
    left: -60,
    width: SCREEN_W + 120,
    height: 320,
    borderRadius: 220,
    backgroundColor: 'rgba(59,130,246,0.06)',
  },
});

export const AptqdoavrvyearrgamecpShell = memo(AppShellBase);
export default AptqdoavrvyearrgamecpShell;

/* autosetup-game-stamp:v1 */
function tqdoavrvyearrgamecGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function tqdoavrvyearrgamecGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function tqdoavrvyearrgamecGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void tqdoavrvyearrgamecGameMixSeed(3, 7);
void tqdoavrvyearrgamecGameFoldRange([1, 2, 3]);
void tqdoavrvyearrgamecGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecAptqdoavrvyearrgamObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 213) & 28606;
}
function tqdoavrvyearrgamecAptqdoavrvyearrgamObfV1ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 50609;
  return x;
}
function tqdoavrvyearrgamecAptqdoavrvyearrgamObfV1HashMix(s: string): number {
  let h = 82;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 29)) % 149;
  return h;
}
function tqdoavrvyearrgamecAptqdoavrvyearrgamObfV1SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 266;
  }
  return acc;
}
