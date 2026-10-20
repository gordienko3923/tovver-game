import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LOADER_DURATION_MS, SCREEN_H, SCREEN_W } from '../constants/confitqdoavrvyearrgamecg';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import AptqdoavrvyearrgamecpShell from '../components/AptqdoavrvyearrgamecpShell';

type Props = {
  onDone?: () => void;
  otqdoavrvyearrgamecnDone?: () => void;
  doneOnFirstCycle?: boolean;
  doneOnFirsttqdoavrvyearrgamecCycle?: boolean;
};

// Rendered top-to-bottom: the amber crown slab first, the widest base slab last.
const SLABS = [
  { width: 44, color: thetqdoavrvyearrgamecme.colors.amber.base },
  { width: 56, color: thetqdoavrvyearrgamecme.colors.primary.light },
  { width: 70, color: thetqdoavrvyearrgamecme.colors.primary.base },
  { width: 84, color: thetqdoavrvyearrgamecme.colors.primary.base },
];

const SPARK_COLORS = [
  thetqdoavrvyearrgamecme.colors.primary.base,
  thetqdoavrvyearrgamecme.colors.primary.light,
  thetqdoavrvyearrgamecme.colors.amber.base,
  thetqdoavrvyearrgamecme.colors.amber.light,
  thetqdoavrvyearrgamecme.colors.mint.base,
];

const BAR_W = 190;
const MAX_SPARK_BURSTS = 4;

type GridBit = {
  id: number;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  thickness: number;
  length: number;
  rot: string;
  color: string;
  opacity: Animated.Value;
  travel: Animated.Value;
};

type SparkHandle = {
  burst: (x: number, y: number) => void;
};

function GridSparkBit({ bit }: { bit: GridBit }) {
  const driftX = useRef(
    bit.travel.interpolate({
      inputRange: [0, 1],
      outputRange: [0, bit.driftX],
    }),
  ).current;
  const driftY = useRef(
    bit.travel.interpolate({
      inputRange: [0, 1],
      outputRange: [0, bit.driftY],
    }),
  ).current;

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        left: bit.x - bit.length / 2,
        top: bit.y - bit.thickness / 2,
        width: bit.length,
        height: bit.thickness,
        borderRadius: 1,
        backgroundColor: bit.color,
        opacity: bit.opacity,
        transform: [
          { translateX: driftX },
          { translateY: driftY },
          { rotate: bit.rot },
        ],
      }}
    />
  );
}

/** Short blueprint dashes. They drift a few pixels off a background tap, then die. */
const LoaderGridSpark = React.forwardRef<SparkHandle>(function LoaderGridSpark(_, ref) {
  const [bits, setBits] = useState<GridBit[]>([]);
  const alive = useRef(true);
  const bursts = useRef(0);
  const seq = useRef(1);
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      timers.current.forEach(clearTimeout);
    };
  }, []);

  const burst = useCallback((x: number, y: number) => {
    if (bursts.current >= MAX_SPARK_BURSTS) {
      return;
    }
    bursts.current += 1;
    const count = 12 + Math.floor(Math.random() * 7);
    const palette = SPARK_COLORS.slice().sort(() => Math.random() - 0.5);
    const born: GridBit[] = [];
    let longest = 320;
    for (let i = 0; i < count; i++) {
      const opacity = new Animated.Value(1);
      const travel = new Animated.Value(0);
      const life = 300 + Math.floor(Math.random() * 401);
      longest = Math.max(longest, life);
      born.push({
        id: seq.current++,
        x,
        y,
        driftX: Math.random() * 32 - 16,
        driftY: Math.random() * 32 - 16,
        thickness: 3 + Math.random() * 3,
        length: 8 + Math.random() * 8,
        rot: `${Math.floor(Math.random() * 160) - 80}deg`,
        color: palette[i % palette.length],
        opacity,
        travel,
      });
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: life,
          useNativeDriver: true,
        }),
        Animated.timing(travel, {
          toValue: 1,
          duration: life,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    }
    const ids = new Set(born.map(bit => bit.id));
    setBits(prev => [...prev, ...born]);
    const timer = setTimeout(() => {
      bursts.current = Math.max(0, bursts.current - 1);
      if (!alive.current) {
        return;
      }
      setBits(prev => prev.filter(bit => !ids.has(bit.id)));
    }, longest + 40);
    timers.current.push(timer);
  }, []);

  useImperativeHandle(ref, () => ({ burst }), [burst]);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {bits.map(bit => (
        <GridSparkBit key={bit.id} bit={bit} />
      ))}
    </View>
  );
});

/**
 * Dark navy splash. The slab emblem shears under a flick; empty taps throw
 * blueprint sparks. The bar keeps filling until the host unmounts this screen.
 */
export default function LoatqdoavrvyearrgamecderScreen({
  onDone,
  otqdoavrvyearrgamecnDone,
  doneOnFirstCycle,
  doneOnFirsttqdoavrvyearrgamecCycle,
}: Props) {
  const slabAnims = useRef(SLABS.map(() => new Animated.Value(0))).current;
  const titleFade = useRef(new Animated.Value(0)).current;
  const subFade = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const dropY = useRef(new Animated.Value(-12)).current;
  const tilt = useRef(new Animated.Value(0)).current;
  const shearX = useRef(new Animated.Value(0)).current;
  const pressScale = useRef(new Animated.Value(1)).current;
  const tiltDeg = useRef(
    tilt.interpolate({
      inputRange: [-180, 180],
      outputRange: ['-180deg', '180deg'],
    }),
  ).current;

  const sparkRef = useRef<SparkHandle>(null);
  const frame = useRef({ w: SCREEN_W, h: SCREEN_H });
  const reactionStep = useRef(0);
  const grantAt = useRef(0);
  const playRef = useRef<(kind: 'tap' | 'hold') => void>(() => {});

  const notifyRef = useRef<(() => void) | undefined>(onDone ?? otqdoavrvyearrgamecnDone);
  notifyRef.current = onDone ?? otqdoavrvyearrgamecnDone;
  const doneOnFirstRef = useRef(
    Boolean(doneOnFirstCycle || doneOnFirsttqdoavrvyearrgamecCycle),
  );
  doneOnFirstRef.current = Boolean(doneOnFirstCycle || doneOnFirsttqdoavrvyearrgamecCycle);

  playRef.current = (kind: 'tap' | 'hold') => {
    tilt.stopAnimation();
    const nod = () =>
      Animated.sequence([
        Animated.timing(tilt, { toValue: -8, duration: 140, useNativeDriver: true }),
        Animated.timing(tilt, { toValue: 6, duration: 160, useNativeDriver: true }),
        Animated.timing(tilt, { toValue: 0, duration: 180, useNativeDriver: true }),
      ]).start();
    if (kind === 'hold') {
      nod();
      return;
    }
    const pick = reactionStep.current % 3;
    reactionStep.current += 1;
    if (pick === 0) {
      Animated.sequence([
        Animated.timing(tilt, { toValue: 8, duration: 120, useNativeDriver: true }),
        Animated.timing(tilt, { toValue: -8, duration: 150, useNativeDriver: true }),
        Animated.timing(tilt, { toValue: 0, duration: 140, useNativeDriver: true }),
      ]).start();
      return;
    }
    if (pick === 1) {
      nod();
      return;
    }
    Animated.sequence([
      Animated.timing(tilt, {
        toValue: 180,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(tilt, {
        toValue: 0,
        friction: 7,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        grantAt.current = Date.now();
        tilt.stopAnimation();
        shearX.stopAnimation();
        Animated.spring(pressScale, {
          toValue: 1.05,
          friction: 7,
          tension: 80,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderMove: (_evt, g) => {
        const drive = Math.abs(g.dx) >= Math.abs(g.dy) ? g.dx : g.dy;
        tilt.setValue(Math.max(-16, Math.min(16, drive * 0.15)));
        shearX.setValue(Math.max(-8, Math.min(8, g.dx * 0.06)));
      },
      onPanResponderRelease: (_evt, g) => {
        const moved = Math.hypot(g.dx, g.dy);
        const held = Date.now() - grantAt.current;
        Animated.spring(pressScale, {
          toValue: 1,
          friction: 6,
          tension: 70,
          useNativeDriver: true,
        }).start();
        Animated.spring(shearX, {
          toValue: 0,
          friction: 6,
          tension: 60,
          useNativeDriver: true,
        }).start();
        if (moved < 8 && held < 380) {
          playRef.current('tap');
          return;
        }
        if (moved < 8) {
          playRef.current('hold');
          return;
        }
        Animated.spring(tilt, {
          toValue: 0,
          friction: 6,
          tension: 48,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderTerminate: () => {
        Animated.spring(pressScale, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }).start();
        Animated.spring(shearX, { toValue: 0, friction: 6, useNativeDriver: true }).start();
        Animated.spring(tilt, { toValue: 0, friction: 6, useNativeDriver: true }).start();
      },
    }),
  ).current;

  useEffect(() => {
    Animated.timing(dropY, {
      toValue: 0,
      duration: 420,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

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

    return () => {
      clearTimeout(title);
      clearTimeout(sub);
    };
  }, [dropY, slabAnims, subFade, titleFade]);

  useEffect(() => {
    let stopped = false;
    let first = true;
    const fillOnce = () => {
      if (stopped) {
        return;
      }
      progress.setValue(0);
      const ms = 1800 + Math.floor(Math.random() * 1001);
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (!finished || stopped) {
          return;
        }
        if (first) {
          first = false;
          if (doneOnFirstRef.current) {
            notifyRef.current?.();
          }
        }
        fillOnce();
      });
    };
    fillOnce();

    let handoff: ReturnType<typeof setTimeout> | undefined;
    if (!doneOnFirstRef.current) {
      handoff = setTimeout(() => notifyRef.current?.(), LOADER_DURATION_MS);
    }

    return () => {
      stopped = true;
      progress.stopAnimation();
      if (handoff) {
        clearTimeout(handoff);
      }
    };
  }, [progress]);

  const barWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, BAR_W],
  });

  const onFieldTap = (x: number, y: number) => {
    const w = frame.current.w;
    const h = frame.current.h;
    sparkRef.current?.burst(Math.max(0, Math.min(w, x)), Math.max(0, Math.min(h, y)));
  };

  return (
    <AptqdoavrvyearrgamecpShell variant="loader">
      <View
        style={styles.root}
        pointerEvents="box-none"
        onLayout={e => {
          frame.current = {
            w: e.nativeEvent.layout.width,
            h: e.nativeEvent.layout.height,
          };
        }}>
        <Pressable
          style={styles.field}
          onPress={e => onFieldTap(e.nativeEvent.locationX, e.nativeEvent.locationY)}
        />

        <View style={styles.column} pointerEvents="box-none">
          <View style={styles.markWrap} pointerEvents="box-none">
            <View style={[styles.bracket, styles.bracketTL]} pointerEvents="none" />
            <View style={[styles.bracket, styles.bracketTR]} pointerEvents="none" />
            <View style={[styles.bracket, styles.bracketBL]} pointerEvents="none" />

            <Animated.View
              pointerEvents="box-none"
              style={{ transform: [{ translateY: dropY }] }}>
              <Animated.View
                {...pan.panHandlers}
                style={[
                  styles.card,
                  {
                    transform: [
                      { translateX: shearX },
                      { rotate: tiltDeg },
                      { scale: pressScale },
                    ],
                  },
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

          <View
            style={styles.barTrack}
            onStartShouldSetResponder={() => true}>
            <Animated.View style={[styles.barFillWrap, { width: barWidth }]}>
              <LinearGradient
                colors={thetqdoavrvyearrgamecme.gradients.progress}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.barFill}
              />
              <View style={[styles.stripe, styles.stripeA]} />
              <View style={[styles.stripe, styles.stripeB]} />
              <View style={[styles.stripe, styles.stripeC]} />
            </Animated.View>
          </View>

          <Text style={styles.caption} pointerEvents="none">
            LOADING BLUEPRINTS...
          </Text>
          <Text style={styles.hint} pointerEvents="none">
            TAP THE GRID
          </Text>
        </View>

        <LoaderGridSpark ref={sparkRef} />
      </View>
    </AptqdoavrvyearrgamecpShell>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  field: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  column: {
    alignItems: 'center',
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
    borderRadius: thetqdoavrvyearrgamecme.radius.sheet,
    backgroundColor: thetqdoavrvyearrgamecme.colors.navy.card,
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
    borderColor: thetqdoavrvyearrgamecme.colors.amber.base,
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
    color: thetqdoavrvyearrgamecme.colors.text.onDark,
    textShadowColor: thetqdoavrvyearrgamecme.colors.primary.base,
    textShadowRadius: 12,
    textShadowOffset: { width: 0, height: 0 },
  },
  subtitle: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 2.4,
    color: thetqdoavrvyearrgamecme.colors.text.onDarkMuted,
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
  stripe: {
    position: 'absolute',
    top: 0,
    width: 3,
    height: 5,
    backgroundColor: 'rgba(242,246,250,0.42)',
  },
  stripeA: {
    left: '22%',
  },
  stripeB: {
    left: '48%',
  },
  stripeC: {
    left: '74%',
  },
  caption: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.8,
    color: thetqdoavrvyearrgamecme.colors.text.onDarkFaint,
  },
  hint: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2.2,
    color: thetqdoavrvyearrgamecme.colors.amber.light,
    opacity: 0.75,
  },
});

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
function tqdoavrvyearrgamecLoatqdoavrvyearrgaObfV1HashMix(s: string): number {
  let h = 89;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 20)) % 735;
  return h;
}
function tqdoavrvyearrgamecLoatqdoavrvyearrgaObfV1SumOdds(nums: number[]): number {
  let acc = 63;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 3) % 814;
  }
  return acc;
}
