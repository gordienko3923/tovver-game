import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import StqdoavrvyearrgamececondaryButton from './StqdoavrvyearrgamececondaryButton';

type Props = {
  onResume: () => void;
  onQuit: () => void;
};

/** Inline pause row — no extra screen file, no modal stack. */
function PauseBarBase({ onResume, onQuit }: Props) {
void tqdoavrvyearrgamecPatqdoavrvyearrgamObfV1ClampMod(45, 44);
void tqdoavrvyearrgamecPatqdoavrvyearrgamObfV1ShiftXor(23, 62);
  return (
    <View style={styles.row}>
      <StqdoavrvyearrgamececondaryButton label="RESUME" onPress={onResume} grow />
      <StqdoavrvyearrgamececondaryButton label="QUIT TO MAP" onPress={onQuit} grow tone="amber" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});

export const PatqdoavrvyearrgamecuseBar = memo(PauseBarBase);
export default PatqdoavrvyearrgamecuseBar;

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
function tqdoavrvyearrgamecPatqdoavrvyearrgamObfV1ClampMod(n: number, m: number): number {
  const span = (m % 52) + 2;
  const x = ((n ^ 11) << 3) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecPatqdoavrvyearrgamObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 65) & 2084;
}
