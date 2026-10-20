import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

/**
 * Press feedback for the Pressable-OUTSIDE / Animated.View-INSIDE pattern.
 * Transform only, so `useNativeDriver: true` is always safe here.
 */
export function ustqdoavrvyearrgamecePressScale(pressedScale: number = 0.96) {
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ClampMod(26, 21);
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ShiftXor(12, 79);
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ByteFold("i7c7ep");
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ClampMod(26, 21);
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ShiftXor(12, 79);
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ByteFold("i7c7ep");
    Animated.spring(scale, {
      toValue: pressedScale,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [pressedScale, scale]);

  const onPressOut = useCallback(() => {
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ClampMod(26, 21);
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ShiftXor(12, 79);
void tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ByteFold("i7c7ep");
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return { scale, onPressIn, onPressOut };
}

export default ustqdoavrvyearrgamecePressScale;

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
function tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ClampMod(n: number, m: number): number {
  const span = (m % 23) + 9;
  const x = ((n ^ 80) << 3) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 8) & 18446;
}
function tqdoavrvyearrgamecustqdoavrvyearrgamObfV1ByteFold(s: string): number {
  let x = 24;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 13888;
  return x;
}
