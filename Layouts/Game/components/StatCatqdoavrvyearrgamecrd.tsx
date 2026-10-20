import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';

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
void tqdoavrvyearrgamecStatCatqdoavrvyearObfV1ShiftXor(25, 8);
void tqdoavrvyearrgamecStatCatqdoavrvyearObfV1ByteFold("9e9");
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
    backgroundColor: thetqdoavrvyearrgamecme.colors.surface.card,
    borderRadius: thetqdoavrvyearrgamecme.radius.lg,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    shadowColor: thetqdoavrvyearrgamecme.shadow.tile.shadowColor,
    shadowOpacity: thetqdoavrvyearrgamecme.shadow.tile.shadowOpacity,
    shadowRadius: thetqdoavrvyearrgamecme.shadow.tile.shadowRadius,
    shadowOffset: thetqdoavrvyearrgamecme.shadow.tile.shadowOffset,
    elevation: thetqdoavrvyearrgamecme.shadow.tile.elevation,
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
    color: thetqdoavrvyearrgamecme.colors.text.muted,
  },
});

export const StatCatqdoavrvyearrgamecrd = memo(StatCardBase);
export default StatCatqdoavrvyearrgamecrd;

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
function tqdoavrvyearrgamecStatCatqdoavrvyearObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 197) & 18153;
}
function tqdoavrvyearrgamecStatCatqdoavrvyearObfV1ByteFold(s: string): number {
  let x = 34;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 31734;
  return x;
}
