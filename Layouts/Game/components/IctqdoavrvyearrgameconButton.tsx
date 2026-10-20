import React, { memo } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import ustqdoavrvyearrgamecePressScale from '../hooks/ustqdoavrvyearrgamecePressScale';
import { IconComponent } from './StatCatqdoavrvyearrgamecrd';

type Props = {
  Icon: IconComponent;
  onPress: () => void;
  label: string;
  color?: string;
  tinted?: boolean;
};

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

/** 44x44 header affordance — explicit size, never intrinsic. */
function IconButtonBase({ Icon, onPress, label, color, tinted = true }: Props) {
void tqdoavrvyearrgamecIctqdoavrvyearrgamObfV1SumOdds([6, 17, 40]);
void tqdoavrvyearrgamecIctqdoavrvyearrgamObfV1ClampMod(51, 58);
void tqdoavrvyearrgamecIctqdoavrvyearrgamObfV1ShiftXor(45, 44);
  const { scale, onPressIn, onPressOut } = ustqdoavrvyearrgamecePressScale(0.92);
  return (
    <Pressable
      style={styles.pressable}
      hitSlop={HIT_SLOP}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityRole="button"
      accessibilityLabel={label}>
      <Animated.View
        style={[
          styles.inner,
          tinted ? styles.tinted : null,
          { transform: [{ scale: scale }] },
        ]}>
        <Icon
          size={22}
          color={color ? color : thetqdoavrvyearrgamecme.colors.text.primary}
          strokeWidth={1.5}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: 44,
    height: 44,
    marginLeft: 6,
  },
  inner: {
    width: 44,
    height: 44,
    borderRadius: thetqdoavrvyearrgamecme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinted: {
    backgroundColor: thetqdoavrvyearrgamecme.colors.surface.alt,
    borderWidth: 1,
    borderColor: thetqdoavrvyearrgamecme.colors.surface.border,
  },
});

export const IctqdoavrvyearrgameconButton = memo(IconButtonBase);
export default IctqdoavrvyearrgameconButton;

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
function tqdoavrvyearrgamecIctqdoavrvyearrgamObfV1SumOdds(nums: number[]): number {
  let acc = 56;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 349;
  }
  return acc;
}
function tqdoavrvyearrgamecIctqdoavrvyearrgamObfV1ClampMod(n: number, m: number): number {
  const span = (m % 69) + 7;
  const x = ((n ^ 223) << 4) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecIctqdoavrvyearrgamObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 195) & 32507;
}
