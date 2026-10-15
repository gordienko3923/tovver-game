import React, { memo } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import theme from '../constants/theme';
import usePressScale from '../hooks/usePressScale';
import { IconComponent } from './StatCard';

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
    bg: theme.colors.surface.alt,
    border: theme.colors.surface.border,
    text: theme.colors.text.primary,
    icon: theme.colors.text.primary,
  },
  amber: {
    bg: theme.colors.surface.tintedAmber,
    border: theme.colors.amber.base,
    text: theme.colors.amber.dark,
    icon: theme.colors.amber.base,
  },
};

/** h48 surface button. Same icon contract as PrimaryButton: 24x24, lineHeight 24. */
function SecondaryButtonBase({
  label,
  onPress,
  Icon,
  tone = 'neutral',
  disabled = false,
  grow = false,
}: Props) {
  const { scale, onPressIn, onPressOut } = usePressScale(0.97);
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
    borderRadius: theme.radius.md,
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

export const SecondaryButton = memo(SecondaryButtonBase);
export default SecondaryButton;
