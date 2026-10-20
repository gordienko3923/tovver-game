import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  BackHandler,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Building2,
  CheckCircle2,
  Hammer,
  Library,
  LifeBuoy,
  Settings as SettingsIcon,
  TrendingUp,
  Trophy,
} from 'lucide-react-native';
import Svg, { Rect } from 'react-native-svg';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import AptqdoavrvyearrgamecpShell from '../components/AptqdoavrvyearrgamecpShell';
import BtqdoavrvyearrgamecentoTile from '../components/BtqdoavrvyearrgamecentoTile';
import CreditqdoavrvyearrgamectsBadge from '../components/CreditqdoavrvyearrgamectsBadge';
import IctqdoavrvyearrgameconButton from '../components/IctqdoavrvyearrgameconButton';
import PrimtqdoavrvyearrgamecaryButton from '../components/PrimtqdoavrvyearrgamecaryButton';
import ScrtqdoavrvyearrgameceenHeader from '../components/ScrtqdoavrvyearrgameceenHeader';
import StqdoavrvyearrgamecettingsModal from '../components/StqdoavrvyearrgamecettingsModal';
import StatCatqdoavrvyearrgamecrd from '../components/StatCatqdoavrvyearrgamecrd';
import ThemeLibraryModaltqdoavrvyearrgamec from '../components/ThemeLibraryModaltqdoavrvyearrgamec';
import {
  SettingKey,
  progressStoretqdoavrvyearrgamec,
  useProgress,
} from '../game/progressStoretqdoavrvyearrgamec';
import { STAGE_COUNT, ThemeKey, getStage, themeByKey } from '../game/sttqdoavrvyearrgamecages';

type Props = {
  onStart: () => void;
};

const ELEV_ROWS = 6;

function MiniElevation({ done, base }: { done: number; base: string }) {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
  const rows: number[] = [];
  for (let i = 0; i < ELEV_ROWS; i++) {
    rows.push(i);
  }
  return (
    <Svg width={96} height={96} viewBox="0 0 96 96">
      {rows.map(i => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
        const fromBottom = i;
        const y = 88 - fromBottom * 14;
        const w = 74 - fromBottom * 6;
        const filled = fromBottom < done;
        return (
          <Rect
            key={'elev' + i}
            x={(96 - w) / 2}
            y={y}
            width={w}
            height={10}
            rx={3}
            fill={filled ? base : 'transparent'}
            stroke={filled ? 'transparent' : '#C3D4E6'}
            strokeWidth={filled ? 0 : 1.5}
            strokeDasharray={filled ? undefined : '4,3'}
          />
        );
      })}
    </Svg>
  );
}

export default function MenutqdoavrvyearrgamecScreen({ onStart }: Props) {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
  const progress = useProgress();
  const stage = getStage(progress.stageIndex);
  const slabTheme = themeByKey(progress.activeTheme);

  const [libraryOpen, setLibraryOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const headerFade = useRef(new Animated.Value(0)).current;
  const rowA = useRef(new Animated.Value(0)).current;
  const rowB = useRef(new Animated.Value(0)).current;
  const rowC = useRef(new Animated.Value(0)).current;
  const ctaIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
    Animated.timing(headerFade, {
      toValue: 1,
      duration: 220,
      useNativeDriver: true,
    }).start();
    Animated.stagger(70, [
      Animated.timing(rowA, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(rowB, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(rowC, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
    const cta = setTimeout(() => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
      Animated.spring(ctaIn, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }, 480);
    return () => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
return (clearTimeout(cta));
};
  }, [ctaIn, headerFade, rowA, rowB, rowC]);

  // Menu is the root screen: back must never fall through to the launcher.
  useEffect(() => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
return (true);
});
    return () => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
return (sub.remove());
};
  }, []);

  const handleTheme = useCallback((key: ThemeKey) => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
    progressStoretqdoavrvyearrgamec.setTheme(key);
  }, []);

  const handleToggle = useCallback((key: SettingKey) => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
    progressStoretqdoavrvyearrgamec.toggleSetting(key);
  }, []);

  const handleReset = useCallback(() => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
    progressStoretqdoavrvyearrgamec.resetAll();
  }, []);

  const openLibrary = useCallback(() => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
return (setLibraryOpen(true));
}, []);
  const closeLibrary = useCallback(() => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
return (setLibraryOpen(false));
}, []);
  const openSettings = useCallback(() => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
return (setSettingsOpen(true));
}, []);
  const closeSettings = useCallback(() => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
return (setSettingsOpen(false));
}, []);

  const rise = (value: Animated.Value) => {
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold("johabo");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix("mpkn");
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds([11, 10, 29]);
void tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(20, 55);
return ({
    opacity: value,
    transform: [
      {
        translateY: value.interpolate({
          inputRange: [0, 1],
          outputRange: [18, 0],
        }),
      },
    ],
  });
};

  const railPercent = Math.round(((stage.index + 1) / STAGE_COUNT) * 100);

  return (
    <AptqdoavrvyearrgamecpShell variant="menu">
      <Animated.View
        pointerEvents="box-none"
        style={{ opacity: headerFade }}>
        <ScrtqdoavrvyearrgameceenHeader
          tone="menu"
          title="TOWER RUSH"
          left={
            <View style={styles.brandIcon}>
              <Building2
                size={22}
                color={thetqdoavrvyearrgamecme.colors.primary.base}
                strokeWidth={1.5}
              />
            </View>
          }
          right={
            <View style={styles.headerActions}>
              <IctqdoavrvyearrgameconButton
                Icon={Library}
                onPress={openLibrary}
                label="THEME LIBRARY"
              />
              <IctqdoavrvyearrgameconButton
                Icon={SettingsIcon}
                onPress={openSettings}
                label="SETTINGS"
              />
            </View>
          }
        />
      </Animated.View>

      <View style={styles.badgeRow}>
        <CreditqdoavrvyearrgamectsBadge value={progress.credits} />
      </View>

      <View style={styles.bento}>
        <Animated.View style={rise(rowA)}>
          <BtqdoavrvyearrgamecentoTile height={150}>
            <View style={styles.heroInner}>
              <View style={styles.heroText}>
                <Text style={styles.heroLabel}>CURRENT BLUEPRINT</Text>
                <Text style={styles.heroName} numberOfLines={1}>
                  {stage.name}
                </Text>
                <Text style={styles.heroMeta}>
                  {stage.label + ' OF ' + STAGE_COUNT}
                </Text>
              </View>
              <MiniElevation
                done={progress.blueprintsDone}
                base={slabTheme.base}
              />
            </View>
            <View style={styles.heroRailTrack}>
              <View
                style={[
                  styles.heroRailFill,
                  {
                    flex: railPercent,
                    backgroundColor: thetqdoavrvyearrgamecme.colors.primary.base,
                  },
                ]}
              />
              <View style={{ flex: 100 - railPercent }} />
            </View>
          </BtqdoavrvyearrgamecentoTile>
        </Animated.View>

        <Animated.View style={[styles.statRow, rise(rowB)]}>
          <View style={styles.statSlot}>
            <StatCatqdoavrvyearrgamecrd
              Icon={TrendingUp}
              value={String(progress.floorsBuilt)}
              label="floors built"
              valueColor={thetqdoavrvyearrgamecme.colors.primary.base}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCatqdoavrvyearrgamecrd
              Icon={Trophy}
              value={String(progress.bestHeight)}
              label="best height"
              valueColor={thetqdoavrvyearrgamecme.colors.amber.base}
            />
          </View>
        </Animated.View>

        <Animated.View style={[styles.statRow, rise(rowC)]}>
          <View style={styles.statSlot}>
            <StatCatqdoavrvyearrgamecrd
              Icon={CheckCircle2}
              value={progress.blueprintsDone + '/' + STAGE_COUNT}
              label="blueprints"
              valueColor={thetqdoavrvyearrgamecme.colors.mint.base}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCatqdoavrvyearrgamecrd
              Icon={LifeBuoy}
              value={String(progress.supportsOwned)}
              label="supports"
              valueColor={thetqdoavrvyearrgamecme.colors.text.primary}
            />
          </View>
        </Animated.View>

        <View style={styles.spacer} />

        <Text style={styles.hint}>TAP A SLAB, THEN TAP THE GRID</Text>
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.ctaWrap,
          {
            opacity: ctaIn,
            transform: [
              {
                translateY: ctaIn.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}>
        <PrimtqdoavrvyearrgamecaryButton label="START BUILD" Icon={Hammer} onPress={onStart} />
      </Animated.View>

      <ThemeLibraryModaltqdoavrvyearrgamec
        visible={libraryOpen}
        activeTheme={progress.activeTheme}
        blueprintsDone={progress.blueprintsDone}
        onSelect={handleTheme}
        onClose={closeLibrary}
      />
      <StqdoavrvyearrgamecettingsModal
        visible={settingsOpen}
        settings={progress.settings}
        onToggle={handleToggle}
        onReset={handleReset}
        onClose={closeSettings}
      />
    </AptqdoavrvyearrgamecpShell>
  );
}

const styles = StyleSheet.create({
  brandIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeRow: {
    marginTop: 14,
    paddingHorizontal: 16,
  },
  bento: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
    gap: 12,
  },
  heroInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 14,
    flex: 1,
  },
  heroText: {
    flex: 1,
    paddingRight: 10,
  },
  heroLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.6,
    color: thetqdoavrvyearrgamecme.colors.text.muted,
  },
  heroName: {
    marginTop: 6,
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0.4,
    color: thetqdoavrvyearrgamecme.colors.text.primary,
  },
  heroMeta: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: thetqdoavrvyearrgamecme.colors.text.secondary,
  },
  heroRailTrack: {
    height: 6,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: thetqdoavrvyearrgamecme.colors.bg.tertiary,
  },
  heroRailFill: {
    height: 6,
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
    height: 104,
  },
  statSlot: {
    flex: 1,
    height: 104,
  },
  spacer: {
    flex: 1,
    minHeight: 4,
  },
  hint: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.4,
    color: thetqdoavrvyearrgamecme.colors.text.muted,
    marginBottom: 8,
  },
  ctaWrap: {
    paddingHorizontal: 16,
    marginBottom: 28,
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
function tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ByteFold(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 54359;
  return x;
}
function tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1HashMix(s: string): number {
  let h = 23;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 40)) % 266;
  return h;
}
function tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1SumOdds(nums: number[]): number {
  let acc = 46;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 168;
  }
  return acc;
}
function tqdoavrvyearrgamecMenutqdoavrvyearrgObfV1ClampMod(n: number, m: number): number {
  const span = (m % 64) + 9;
  const x = ((n ^ 174) << 6) % span;
  return x < 0 ? x + span : x;
}
