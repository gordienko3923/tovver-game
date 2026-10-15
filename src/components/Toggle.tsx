import React, { memo, useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import theme from '../constants/theme';

type Props = {
  value: boolean;
  onChange: () => void;
  label: string;
};

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
const TRAVEL = 20;

/** 48x28 switch. translateX only, so the native driver is safe. */
function ToggleBase({ value, onChange, label }: Props) {
  const progress = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
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
              ? theme.colors.mint.base
              : theme.colors.surface.borderStrong,
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

export const Toggle = memo(ToggleBase);
export default Toggle;
