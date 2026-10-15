import React, { memo } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../constants/theme';
import usePressScale from '../hooks/usePressScale';
import { IconComponent } from './StatCard';

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
  const { scale, onPressIn, onPressOut } = usePressScale(0.96);

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
          colors={theme.gradients.cta}
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
    borderRadius: theme.radius.lg,
    shadowColor: theme.shadow.cta.shadowColor,
    shadowOpacity: theme.shadow.cta.shadowOpacity,
    shadowRadius: theme.shadow.cta.shadowRadius,
    shadowOffset: theme.shadow.cta.shadowOffset,
    elevation: theme.shadow.cta.elevation,
  },
  gradient: {
    width: '100%',
    height: 64,
    borderRadius: theme.radius.lg,
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

export const PrimaryButton = memo(PrimaryButtonBase);
export default PrimaryButton;
