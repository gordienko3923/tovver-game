import React, { memo } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import theme from '../constants/theme';
import usePressScale from '../hooks/usePressScale';
import { IconComponent } from './StatCard';

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
  const { scale, onPressIn, onPressOut } = usePressScale(0.92);
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
          color={color ? color : theme.colors.text.primary}
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
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinted: {
    backgroundColor: theme.colors.surface.alt,
    borderWidth: 1,
    borderColor: theme.colors.surface.border,
  },
});

export const IconButton = memo(IconButtonBase);
export default IconButton;
