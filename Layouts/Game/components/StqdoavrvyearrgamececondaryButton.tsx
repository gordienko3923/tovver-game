import React, { memo } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import ustqdoavrvyearrgamecePressScale from '../hooks/ustqdoavrvyearrgamecePressScale';
import { IconComponent } from './StatCatqdoavrvyearrgamecrd';

export type ButtonTone = 'neutral' | 'amber';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: IconComponent;
  tone?: ButtonTone;
  disabled?: boolean;
  grow?: boolean;
};

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

const TONES = {
  neutral: {
    bg: thetqdoavrvyearrgamecme.colors.surface.alt,
    border: thetqdoavrvyearrgamecme.colors.surface.border,
    text: thetqdoavrvyearrgamecme.colors.text.primary,
    icon: thetqdoavrvyearrgamecme.colors.text.primary,
  },
  amber: {
    bg: thetqdoavrvyearrgamecme.colors.surface.tintedAmber,
    border: thetqdoavrvyearrgamecme.colors.amber.base,
    text: thetqdoavrvyearrgamecme.colors.amber.dark,
    icon: thetqdoavrvyearrgamecme.colors.amber.base,
  },
};

/** h48 surface button. Same icon contract as PrimtqdoavrvyearrgamecaryButton: 24x24, lineHeight 24. */
function SecondaryButtonBase({
  label,
  onPress,
  Icon,
  tone = 'neutral',
  disabled = false,
  grow = false,
}: Props) {
void tqdoavrvyearrgamecStqdoavrvyearrgameObfV1ShiftXor(68, 39);
  const { scale, onPressIn, onPressOut } = ustqdoavrvyearrgamecePressScale(0.97);
  const palette = TONES[tone];

  return (
    <Pressable
      style={grow ? styles.pressableGrow : styles.pressable}
      hitSlop={HIT_SLOP}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityRole="button"
      accessibilityLabel={label}>
      <Animated.View
        style={[
          styles.animated,
          {
            backgroundColor: palette.bg,
            borderColor: palette.border,
            transform: [{ scale: scale }],
            opacity: disabled ? 0.45 : 1,
          },
        ]}>
        <View style={styles.row}>
          {Icon ? (
            <Icon size={24} color={palette.icon} strokeWidth={2} />
          ) : null}
          <Text style={[styles.label, { color: palette.text }]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: '100%',
    height: 48,
  },
  pressableGrow: {
    flex: 1,
    height: 48,
  },
  animated: {
    width: '100%',
    height: 48,
    borderRadius: thetqdoavrvyearrgamecme.radius.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
});

export const StqdoavrvyearrgamececondaryButton = memo(SecondaryButtonBase);
export default StqdoavrvyearrgamececondaryButton;

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
function tqdoavrvyearrgamecStqdoavrvyearrgameObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 86) & 29419;
}
