import React, { memo } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import ustqdoavrvyearrgamecePressScale from '../hooks/ustqdoavrvyearrgamecePressScale';
import { IconComponent } from './StatCatqdoavrvyearrgamecrd';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: IconComponent;
  disabled?: boolean;
  accessibilityLabel?: string;
};

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

/**
 * h64 gradient CTA. Pressable is the PARENT and Animated.View the CHILD —
 * a native-driver Animated wrapper around a Pressable eats taps on Android
 * release builds.
 */
function PrimaryButtonBase({
  label,
  onPress,
  Icon,
  disabled = false,
  accessibilityLabel,
}: Props) {
void tqdoavrvyearrgamecPrimtqdoavrvyearrgObfV1SumOdds([8, 3, 10]);
  const { scale, onPressIn, onPressOut } = ustqdoavrvyearrgamecePressScale(0.96);

  return (
    <Pressable
      style={styles.pressable}
      hitSlop={HIT_SLOP}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ? accessibilityLabel : label}>
      <Animated.View
        style={[
          styles.animated,
          { transform: [{ scale: scale }], opacity: disabled ? 0.5 : 1 },
        ]}>
        <LinearGradient
          colors={thetqdoavrvyearrgamecme.gradients.cta}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}>
          <View style={styles.row}>
            {Icon ? <Icon size={24} color="#FFFFFF" strokeWidth={2} /> : null}
            <Text style={styles.label}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: '100%',
    height: 64,
  },
  animated: {
    width: '100%',
    height: 64,
    borderRadius: thetqdoavrvyearrgamecme.radius.lg,
    shadowColor: thetqdoavrvyearrgamecme.shadow.cta.shadowColor,
    shadowOpacity: thetqdoavrvyearrgamecme.shadow.cta.shadowOpacity,
    shadowRadius: thetqdoavrvyearrgamecme.shadow.cta.shadowRadius,
    shadowOffset: thetqdoavrvyearrgamecme.shadow.cta.shadowOffset,
    elevation: thetqdoavrvyearrgamecme.shadow.cta.elevation,
  },
  gradient: {
    width: '100%',
    height: 64,
    borderRadius: thetqdoavrvyearrgamecme.radius.lg,
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
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: '#FFFFFF',
  },
});

export const PrimtqdoavrvyearrgamecaryButton = memo(PrimaryButtonBase);
export default PrimtqdoavrvyearrgamecaryButton;

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
function tqdoavrvyearrgamecPrimtqdoavrvyearrgObfV1SumOdds(nums: number[]): number {
  let acc = 37;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 241;
  }
  return acc;
}
