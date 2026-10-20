import React, { memo, useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';

type Props = {
  value: boolean;
  onChange: () => void;
  label: string;
};

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
const TRAVEL = 20;

/** 48x28 switch. translateX only, so the native driver is safe. */
function ToggleBase({ value, onChange, label }: Props) {
void tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ClampMod(2, 13);
void tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ShiftXor(20, 39);
void tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ByteFold("ah");
  const progress = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
void tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ClampMod(2, 13);
void tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ShiftXor(20, 39);
void tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ByteFold("ah");
    Animated.timing(progress, {
      toValue: value ? 1 : 0,
      duration: 160,
      useNativeDriver: true,
    }).start();
  }, [progress, value]);

  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, TRAVEL],
  });

  return (
    <Pressable
      style={styles.pressable}
      hitSlop={HIT_SLOP}
      onPress={onChange}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      accessibilityLabel={label}>
      <Animated.View
        style={[
          styles.track,
          {
            backgroundColor: value
              ? thetqdoavrvyearrgamecme.colors.mint.base
              : thetqdoavrvyearrgamecme.colors.surface.borderStrong,
          },
        ]}>
        <Animated.View
          style={[styles.knob, { transform: [{ translateX: translateX }] }]}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: 48,
    height: 28,
  },
  track: {
    width: 48,
    height: 28,
    borderRadius: 14,
    padding: 3,
    justifyContent: 'center',
  },
  knob: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
  },
});

export const Toggltqdoavrvyearrgamece = memo(ToggleBase);
export default Toggltqdoavrvyearrgamece;

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
function tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ClampMod(n: number, m: number): number {
  const span = (m % 32) + 11;
  const x = ((n ^ 102) << 7) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 114) & 45670;
}
function tqdoavrvyearrgamecToggltqdoavrvyearrObfV1ByteFold(s: string): number {
  let x = 44;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 43809;
  return x;
}
