import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, BackHandler, Easing, StyleSheet, Text, View } from 'react-native';
import {
  AlertTriangle,
  CheckCircle2,
  Coins,
  Hammer,
  Layers,
} from 'lucide-react-native';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import AptqdoavrvyearrgamecpShell from '../components/AptqdoavrvyearrgamecpShell';
import BtqdoavrvyearrgamecentoTile from '../components/BtqdoavrvyearrgamecentoTile';
import PrimtqdoavrvyearrgamecaryButton from '../components/PrimtqdoavrvyearrgamecaryButton';
import ScrtqdoavrvyearrgameceenHeader from '../components/ScrtqdoavrvyearrgameceenHeader';
import StqdoavrvyearrgamececondaryButton from '../components/StqdoavrvyearrgamececondaryButton';
import StatCatqdoavrvyearrgamecrd from '../components/StatCatqdoavrvyearrgamecrd';
import { useProgress } from '../game/progressStoretqdoavrvyearrgamec';
import { SLAB_THEMES } from '../game/sttqdoavrvyearrgamecages';
import { RunResult } from '../hooks/useBtqdoavrvyearrgamecuildGame';
import { formatSignedCredits } from '../utils/formatqdoavrvyearrgamect';

type Props = {
  result: RunResult;
  floors: number;
  earned: number;
  stageLabel: string;
  stageName: string;
  onPlayAgain: () => void;
  onMenu: () => void;
};

const CONFETTI = [
  { x: -78, delay: 0, color: '#3B82F6' },
  { x: -58, delay: 40, color: '#10B981' },
  { x: -38, delay: 80, color: '#F59E0B' },
  { x: -18, delay: 120, color: '#3B82F6' },
  { x: 2, delay: 160, color: '#10B981' },
  { x: 22, delay: 200, color: '#F59E0B' },
  { x: 42, delay: 240, color: '#3B82F6' },
  { x: 62, delay: 280, color: '#10B981' },
  { x: 82, delay: 320, color: '#F59E0B' },
  { x: -68, delay: 360, color: '#3B82F6' },
  { x: -28, delay: 400, color: '#F59E0B' },
  { x: 12, delay: 440, color: '#10B981' },
  { x: 52, delay: 480, color: '#3B82F6' },
  { x: 72, delay: 520, color: '#F59E0B' },
];

function Celebration() {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
  const anims = useRef(CONFETTI.map(() => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
return (new Animated.Value(0));
})).current;

  useEffect(() => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
    // One finite burst — nothing loops once it has played.
    Animated.parallel(
      anims.map((value, index) =>
        {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
return (Animated.sequence([
          Animated.delay(CONFETTI[index].delay),
          Animated.timing(value, {
            toValue: 1,
            duration: 900,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
        ]));
},
      ),
    ).start();
  }, [anims]);

  return (
    <View style={styles.confettiLayer} pointerEvents="none">
      {CONFETTI.map((item, index) => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
return (<Animated.View
          key={'cf' + index}
          style={[
            styles.confetti,
            {
              backgroundColor: item.color,
              opacity: anims[index].interpolate({
                inputRange: [0, 0.2, 1],
                outputRange: [0, 1, 0],
              }),
              transform: [
                { translateX: item.x },
                {
                  translateY: anims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -120],
                  }),
                },
              ],
            },
          ]}
        />);
})}
    </View>
  );
}

export default function GameOverStqdoavrvyearrgameccreen({
  result,
  floors,
  earned,
  stageLabel,
  stageName,
  onPlayAgain,
  onMenu,
}: Props) {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
  const progress = useProgress();
  const complete = result === 'complete';

  const badgeScale = useRef(new Animated.Value(0.7)).current;
  const onMenuRef = useRef(onMenu);
  onMenuRef.current = onMenu;

  useEffect(() => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
    Animated.spring(badgeScale, {
      toValue: 1,
      tension: 50,
      friction: 6,
      useNativeDriver: true,
    }).start();
  }, [badgeScale]);

  useEffect(() => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
      onMenuRef.current();
      return true;
    });
    return () => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
return (sub.remove());
};
  }, []);

  const unlocked = useMemo(() => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
    if (!complete) {
      return null;
    }
    const found = SLAB_THEMES.find(
      item => {
void tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds([36, 31, 38]);
return (item.unlockAt > 0 && item.unlockAt === progress.blueprintsDone);
},
    );
    return found ? found.name : null;
  }, [complete, progress.blueprintsDone]);

  const accent = complete ? thetqdoavrvyearrgamecme.colors.mint.base : thetqdoavrvyearrgamecme.colors.danger.base;
  const headline = complete ? 'BLUEPRINT DONE' : 'TOWER COLLAPSED';
  const headlineColor = complete
    ? thetqdoavrvyearrgamecme.colors.mint.dark
    : thetqdoavrvyearrgamecme.colors.danger.dark;
  const subline = complete
    ? stageName + ' - ' + floors + ' FLOORS'
    : 'HELD AT ' + floors + ' FLOORS';

  return (
    <AptqdoavrvyearrgamecpShell variant={complete ? 'win' : 'lose'}>
      <ScrtqdoavrvyearrgameceenHeader tone="result" centred title={stageLabel} />

      <View style={styles.verdict}>
        {complete ? <Celebration /> : null}
        <Animated.View
          style={[
            styles.badge,
            {
              borderColor: accent,
              backgroundColor: accent + (complete ? '1F' : '1A'),
              transform: [{ scale: badgeScale }],
            },
          ]}>
          {complete ? (
            <CheckCircle2 size={44} color={accent} strokeWidth={1.8} />
          ) : (
            <AlertTriangle size={44} color={accent} strokeWidth={1.8} />
          )}
        </Animated.View>

        <Text style={[styles.headline, { color: headlineColor }]}>
          {headline}
        </Text>
        <Text style={styles.subline}>{subline}</Text>
      </View>

      <View style={styles.statRow}>
        <View style={styles.statSlot}>
          <StatCatqdoavrvyearrgamecrd
            Icon={Layers}
            value={String(floors)}
            label="floors"
            valueColor={thetqdoavrvyearrgamecme.colors.primary.base}
          />
        </View>
        <View style={styles.statSlot}>
          <StatCatqdoavrvyearrgamecrd
            Icon={Coins}
            value={formatSignedCredits(earned)}
            label="credits"
            valueColor={thetqdoavrvyearrgamecme.colors.amber.base}
          />
        </View>
      </View>

      <View style={styles.bestWrap}>
        <BtqdoavrvyearrgamecentoTile height={88}>
          <View style={styles.bestInner}>
            <Text style={styles.bestLabel}>BEST HEIGHT</Text>
            <Text style={styles.bestValue}>{progress.bestHeight + ' F'}</Text>
            {unlocked ? (
              <Text style={styles.unlockLine}>
                {'NEW THEME UNLOCKED: ' + unlocked}
              </Text>
            ) : null}
          </View>
        </BtqdoavrvyearrgamecentoTile>
      </View>

      <View style={styles.ctaStack}>
        <PrimtqdoavrvyearrgamecaryButton label="BUILD AGAIN" Icon={Hammer} onPress={onPlayAgain} />
        <StqdoavrvyearrgamececondaryButton label="BLUEPRINT MAP" onPress={onMenu} />
      </View>
    </AptqdoavrvyearrgamecpShell>
  );
}

const styles = StyleSheet.create({
  verdict: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  badge: {
    width: 96,
    height: 96,
    borderRadius: thetqdoavrvyearrgamecme.radius.badge,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 2.5,
    textAlign: 'center',
  },
  subline: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: thetqdoavrvyearrgamecme.colors.text.secondary,
    textAlign: 'center',
  },
  confettiLayer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    height: 160,
    alignItems: 'center',
  },
  confetti: {
    position: 'absolute',
    top: 60,
    width: 8,
    height: 8,
    borderRadius: 2,
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
    height: 104,
    paddingHorizontal: 16,
  },
  statSlot: {
    flex: 1,
    height: 104,
  },
  bestWrap: {
    marginTop: 12,
    paddingHorizontal: 16,
  },
  bestInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bestLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.6,
    color: thetqdoavrvyearrgamecme.colors.text.muted,
  },
  bestValue: {
    marginTop: 2,
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: thetqdoavrvyearrgamecme.colors.text.primary,
  },
  unlockLine: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.9,
    color: thetqdoavrvyearrgamecme.colors.mint.base,
  },
  ctaStack: {
    marginTop: 16,
    marginBottom: 28,
    paddingHorizontal: 16,
    gap: 12,
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
function tqdoavrvyearrgamecGameOverStqdoavrvyObfV1SumOdds(nums: number[]): number {
  let acc = 33;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 25) % 830;
  }
  return acc;
}
