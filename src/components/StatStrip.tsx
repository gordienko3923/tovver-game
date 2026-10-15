import React, { memo, useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { STAT_STRIP_H } from '../constants/config';
import theme from '../constants/theme';

type Props = {
  floors: number;
  target: number;
  stability: number;
  supports: number;
};

const RAIL_W = 72;

function stabilityColor(value: number): string {
  if (value >= 60) {
    return theme.colors.mint.base;
  }
  if (value >= 30) {
    return theme.colors.amber.base;
  }
  return theme.colors.danger.base;
}

/** The G3 signature strip: three equal cells, hairline dividers. */
function StatStripBase({ floors, target, stability, supports }: Props) {
  // Width animation cannot use the native driver — layout property by design.
  const rail = useRef(new Animated.Value(stability / 100)).current;

  useEffect(() => {
    Animated.timing(rail, {
      toValue: Math.max(0, Math.min(1, stability / 100)),
      duration: 260,
      useNativeDriver: false,
    }).start();
  }, [rail, stability]);

  const railWidth = rail.interpolate({
    inputRange: [0, 1],
    outputRange: [0, RAIL_W],
  });
  const tint = stabilityColor(stability);

  return (
    <View style={styles.strip}>
      <View style={styles.cell}>
        <Text style={styles.label}>HEIGHT</Text>
        <Text style={[styles.value, { color: theme.colors.primary.base }]}>
          {floors + 'F / ' + target + 'F'}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.cell}>
        <Text style={styles.label}>STABILITY</Text>
        <Text style={[styles.value, { color: tint }]}>{stability + '%'}</Text>
        <View style={styles.railTrack}>
          <Animated.View
            style={[
              styles.railFill,
              { width: railWidth, backgroundColor: tint },
            ]}
          />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.cell}>
        <Text style={styles.label}>SUPPORTS</Text>
        <Text style={[styles.value, { color: theme.colors.text.primary }]}>
          {String(supports)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    height: STAT_STRIP_H,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderTopWidth: 1,
    borderTopColor: theme.colors.surface.borderStrong,
  },
  cell: {
    flex: 1,
    height: STAT_STRIP_H,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: 1,
    height: 26,
    backgroundColor: theme.colors.bg.tertiary,
  },
  label: {
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1.4,
    color: theme.colors.text.muted,
  },
  value: {
    marginTop: 1,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  railTrack: {
    marginTop: 2,
    width: RAIL_W,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.bg.tertiary,
    overflow: 'hidden',
  },
  railFill: {
    height: 4,
    borderRadius: 2,
  },
});

export const StatStrip = memo(StatStripBase);
export default StatStrip;
