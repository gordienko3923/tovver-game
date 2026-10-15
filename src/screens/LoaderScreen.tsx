import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LOADER_DURATION_MS } from '../constants/config';
import theme from '../constants/theme';
import AppShell from '../components/AppShell';

type Props = {
  onDone: () => void;
};

// Rendered top-to-bottom: the amber crown slab first, the widest base slab last.
const SLABS = [
  { width: 44, color: theme.colors.amber.base },
  { width: 56, color: theme.colors.primary.light },
  { width: 70, color: theme.colors.primary.base },
  { width: 84, color: theme.colors.primary.base },
];

const BAR_W = 190;

/**
 * Dark navy splash — deliberately the opposite palette to the paper-white Menu
 * so the two capture frames can never read as the same screen.
 * Every animation here is finite and done by ~2.6s; the remaining hold is a
 * completely static frame, which is what uiautomator needs.
 */
export default function LoaderScreen({ onDone }: Props) {
  const cardScale = useRef(new Animated.Value(0.86)).current;
  const cardFade = useRef(new Animated.Value(0)).current;
  const slabAnims = useRef(SLABS.map(() => new Animated.Value(0))).current;
  const titleFade = useRef(new Animated.Value(0)).current;
  const subFade = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;

  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(cardScale, {
        toValue: 1,
        tension: 42,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(cardFade, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true,
      }),
    ]).start();

    // Bottom-to-top stagger: the widest slab lands first.
    Animated.stagger(
      90,
      slabAnims
        .slice()
        .reverse()
        .map(value =>
          Animated.timing(value, {
            toValue: 1,
            duration: 260,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
        ),
    ).start();

    const title = setTimeout(() => {
      Animated.timing(titleFade, {
        toValue: 1,
        duration: 380,
        useNativeDriver: true,
      }).start();
    }, 520);

    const sub = setTimeout(() => {
      Animated.timing(subFade, {
        toValue: 1,
        duration: 320,
        useNativeDriver: true,
      }).start();
    }, 760);

    // Three finite legs, 2.58s total — no loop, nothing animating afterwards.
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 0.38,
        duration: 700,
        useNativeDriver: false,
      }),
      Animated.delay(180),
      Animated.timing(progress, {
        toValue: 0.72,
        duration: 700,
        useNativeDriver: false,
      }),
      Animated.delay(180),
      Animated.timing(progress, {
        toValue: 1,
        duration: 700,
        useNativeDriver: false,
      }),
    ]).start();

    const handoff = setTimeout(() => onDoneRef.current(), LOADER_DURATION_MS);

    return () => {
      clearTimeout(title);
      clearTimeout(sub);
      clearTimeout(handoff);
    };
  }, [cardFade, cardScale, progress, slabAnims, subFade, titleFade]);

  const barWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, BAR_W],
  });

  return (
    <AppShell variant="loader">
      <View style={styles.root}>
        <View style={styles.markWrap}>
          <View style={[styles.bracket, styles.bracketTL]} />
          <View style={[styles.bracket, styles.bracketTR]} />
          <View style={[styles.bracket, styles.bracketBL]} />

          <Animated.View
            style={[
              styles.card,
              { opacity: cardFade, transform: [{ scale: cardScale }] },
            ]}>
            {SLABS.map((slab, index) => (
              <Animated.View
                key={'ls' + index}
                style={[
                  styles.slab,
                  {
                    width: slab.width,
                    backgroundColor: slab.color,
                    opacity: slabAnims[index],
                    transform: [
                      {
                        translateY: slabAnims[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [14, 0],
                        }),
                      },
                    ],
                  },
                ]}
              />
            ))}
          </Animated.View>
        </View>

        <Animated.Text
          style={[
            styles.title,
            {
              opacity: titleFade,
              transform: [
                {
                  translateY: titleFade.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 0],
                  }),
                },
              ],
            },
          ]}>
          TOWER RUSH
        </Animated.Text>

        <Animated.Text style={[styles.subtitle, { opacity: subFade }]}>
          MODULAR TOWER BLUEPRINTS
        </Animated.Text>

        <View style={styles.barTrack}>
          <Animated.View style={[styles.barFillWrap, { width: barWidth }]}>
            <LinearGradient
              colors={theme.gradients.progress}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.barFill}
            />
          </Animated.View>
        </View>

        <Text style={styles.caption}>LOADING BLUEPRINTS...</Text>
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  markWrap: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 132,
    height: 132,
    borderRadius: theme.radius.sheet,
    backgroundColor: theme.colors.navy.card,
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  slab: {
    height: 16,
    borderRadius: 4,
  },
  bracket: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderColor: theme.colors.amber.base,
    opacity: 0.5,
  },
  bracketTL: {
    top: 8,
    left: 8,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  bracketTR: {
    top: 8,
    right: 8,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  bracketBL: {
    bottom: 8,
    left: 8,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  title: {
    marginTop: 26,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 5,
    color: theme.colors.text.onDark,
    textShadowColor: theme.colors.primary.base,
    textShadowRadius: 12,
    textShadowOffset: { width: 0, height: 0 },
  },
  subtitle: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 2.4,
    color: theme.colors.text.onDarkMuted,
    opacity: 0.9,
  },
  barTrack: {
    marginTop: 40,
    width: BAR_W,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  barFillWrap: {
    height: 5,
    borderRadius: 3,
    overflow: 'hidden',
  },
  barFill: {
    width: BAR_W,
    height: 5,
  },
  caption: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.8,
    color: theme.colors.text.onDarkFaint,
  },
});
