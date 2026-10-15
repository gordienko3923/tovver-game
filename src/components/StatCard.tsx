import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import theme from '../constants/theme';

/** Every icon in this project comes from lucide-react-native (rule #21). */
export type IconComponent = LucideIcon;

type Props = {
  Icon: IconComponent;
  value: string;
  label: string;
  valueColor: string;
};

/**
 * The ONE stat pill used on Menu and GameOver alike. Fixed 22px lucide icon in
 * a fixed 44x44 wrap — no AI sprite, so every pill in a row is the same size.
 * `width: '100%'` (never `flex: 1`) because the parent slot is already flex:1;
 * two nested flex:1 collapse the card and clip the text.
 */
function StatCardBase({ Icon, value, label, valueColor }: Props) {
  return (
    <View style={[styles.card, { borderColor: valueColor + '55' }]}>
      <View style={[styles.iconWrap, { backgroundColor: valueColor + '1A' }]}>
        <Icon size={22} color={valueColor} strokeWidth={1.5} />
      </View>
      <Text style={[styles.value, { color: valueColor }]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 104,
    backgroundColor: theme.colors.surface.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    shadowColor: theme.shadow.tile.shadowColor,
    shadowOpacity: theme.shadow.tile.shadowOpacity,
    shadowRadius: theme.shadow.tile.shadowRadius,
    shadowOffset: theme.shadow.tile.shadowOffset,
    elevation: theme.shadow.tile.elevation,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    marginTop: 6,
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  label: {
    marginTop: 1,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: theme.colors.text.muted,
  },
});

export const StatCard = memo(StatCardBase);
export default StatCard;
