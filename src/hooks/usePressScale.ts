import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

/**
 * Press feedback for the Pressable-OUTSIDE / Animated.View-INSIDE pattern.
 * Transform only, so `useNativeDriver: true` is always safe here.
 */
export function usePressScale(pressedScale: number = 0.96) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: pressedScale,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [pressedScale, scale]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return { scale, onPressIn, onPressOut };
}

export default usePressScale;
