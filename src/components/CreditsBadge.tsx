import React, { memo, useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { Coins } from 'lucide-react-native';
import theme from '../constants/theme';
import { formatCredits } from '../utils/format';

type Props = {
  value: number;
};

/** Credits pill. The value pulses once whenever the balance changes. */
function CreditsBadgeBase({ value }: Props) {
  const pulse = useRef(new Animated.Value(1)).current;
  const previous = useRef(value);

  useEffect(() => {
    if (previous.current === value) {
      return;
    }
    previous.current = value;
    Animated.sequence([
      Animated.timing(pulse, {
        toValue: 1.12,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, [pulse, value]);

  return (
    <Animated.View style={[styles.pill, { transform: [{ scale: pulse }] }]}>
      <Coins size={18} color={theme.colors.amber.base} strokeWidth={1.5} />
      <Text style={styles.value}>{formatCredits(value)}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 40,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: theme.colors.surface.card,
    borderWidth: 1,
    borderColor: theme.colors.surface.borderStrong,
    shadowColor: theme.shadow.pill.shadowColor,
    shadowOpacity: theme.shadow.pill.shadowOpacity,
    shadowRadius: theme.shadow.pill.shadowRadius,
    shadowOffset: theme.shadow.pill.shadowOffset,
    elevation: theme.shadow.pill.elevation,
  },
  value: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: theme.colors.text.primary,
  },
});

export const CreditsBadge = memo(CreditsBadgeBase);
export default CreditsBadge;
