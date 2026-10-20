import React, { memo, useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { STAT_STRIP_H } from '../constants/confitqdoavrvyearrgamecg';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';

type Props = {
  floors: number;
  target: number;
  stability: number;
  supports: number;
};

const RAIL_W = 72;

function stabilityColor(value: number): string {
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1ByteFold("09af");
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1HashMix("bc7k");
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1SumOdds([8, 27, 26]);
  if (value >= 60) {
    return thetqdoavrvyearrgamecme.colors.mint.base;
  }
  if (value >= 30) {
    return thetqdoavrvyearrgamecme.colors.amber.base;
  }
  return thetqdoavrvyearrgamecme.colors.danger.base;
}

/** The G3 signature strip: three equal cells, hairline dividers. */
function StatStripBase({ floors, target, stability, supports }: Props) {
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1ByteFold("09af");
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1HashMix("bc7k");
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1SumOdds([8, 27, 26]);
  // Width animation cannot use the native driver — layout property by design.
  const rail = useRef(new Animated.Value(stability / 100)).current;

  useEffect(() => {
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1ByteFold("09af");
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1HashMix("bc7k");
void tqdoavrvyearrgamecStattqdoavrvyearrgObfV1SumOdds([8, 27, 26]);
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
        <Text style={[styles.value, { color: thetqdoavrvyearrgamecme.colors.primary.base }]}>
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
        <Text style={[styles.value, { color: thetqdoavrvyearrgamecme.colors.text.primary }]}>
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
    borderTopColor: thetqdoavrvyearrgamecme.colors.surface.borderStrong,
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
    backgroundColor: thetqdoavrvyearrgamecme.colors.bg.tertiary,
  },
  label: {
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1.4,
    color: thetqdoavrvyearrgamecme.colors.text.muted,
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
    backgroundColor: thetqdoavrvyearrgamecme.colors.bg.tertiary,
    overflow: 'hidden',
  },
  railFill: {
    height: 4,
    borderRadius: 2,
  },
});

export const StattqdoavrvyearrgamecStrip = memo(StatStripBase);
export default StattqdoavrvyearrgamecStrip;

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
function tqdoavrvyearrgamecStattqdoavrvyearrgObfV1ByteFold(s: string): number {
  let x = 41;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) & 36297;
  return x;
}
function tqdoavrvyearrgamecStattqdoavrvyearrgObfV1HashMix(s: string): number {
  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 17)) % 452;
  return h;
}
function tqdoavrvyearrgamecStattqdoavrvyearrgObfV1SumOdds(nums: number[]): number {
  let acc = 69;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 196;
  }
  return acc;
}
