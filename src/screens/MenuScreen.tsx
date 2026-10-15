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
import theme from '../constants/theme';
import AppShell from '../components/AppShell';
import BentoTile from '../components/BentoTile';
import CreditsBadge from '../components/CreditsBadge';
import IconButton from '../components/IconButton';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import SettingsModal from '../components/SettingsModal';
import StatCard from '../components/StatCard';
import ThemeLibraryModal from '../components/ThemeLibraryModal';
import {
  SettingKey,
  progressStore,
  useProgress,
} from '../game/progressStore';
import { STAGE_COUNT, ThemeKey, getStage, themeByKey } from '../game/stages';

type Props = {
  onStart: () => void;
};

const ELEV_ROWS = 6;

function MiniElevation({ done, base }: { done: number; base: string }) {
  const rows: number[] = [];
  for (let i = 0; i < ELEV_ROWS; i++) {
    rows.push(i);
  }
  return (
    <Svg width={96} height={96} viewBox="0 0 96 96">
      {rows.map(i => {
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

export default function MenuScreen({ onStart }: Props) {
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
      Animated.spring(ctaIn, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }, 480);
    return () => clearTimeout(cta);
  }, [ctaIn, headerFade, rowA, rowB, rowC]);

  // Menu is the root screen: back must never fall through to the launcher.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => sub.remove();
  }, []);

  const handleTheme = useCallback((key: ThemeKey) => {
    progressStore.setTheme(key);
  }, []);

  const handleToggle = useCallback((key: SettingKey) => {
    progressStore.toggleSetting(key);
  }, []);

  const handleReset = useCallback(() => {
    progressStore.resetAll();
  }, []);

  const openLibrary = useCallback(() => setLibraryOpen(true), []);
  const closeLibrary = useCallback(() => setLibraryOpen(false), []);
  const openSettings = useCallback(() => setSettingsOpen(true), []);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  const rise = (value: Animated.Value) => ({
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

  const railPercent = Math.round(((stage.index + 1) / STAGE_COUNT) * 100);

  return (
    <AppShell variant="menu">
      <Animated.View
        pointerEvents="box-none"
        style={{ opacity: headerFade }}>
        <ScreenHeader
          tone="menu"
          title="TOWER RUSH"
          left={
            <View style={styles.brandIcon}>
              <Building2
                size={22}
                color={theme.colors.primary.base}
                strokeWidth={1.5}
              />
            </View>
          }
          right={
            <View style={styles.headerActions}>
              <IconButton
                Icon={Library}
                onPress={openLibrary}
                label="THEME LIBRARY"
              />
              <IconButton
                Icon={SettingsIcon}
                onPress={openSettings}
                label="SETTINGS"
              />
            </View>
          }
        />
      </Animated.View>

      <View style={styles.badgeRow}>
        <CreditsBadge value={progress.credits} />
      </View>

      <View style={styles.bento}>
        <Animated.View style={rise(rowA)}>
          <BentoTile height={150}>
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
                    backgroundColor: theme.colors.primary.base,
                  },
                ]}
              />
              <View style={{ flex: 100 - railPercent }} />
            </View>
          </BentoTile>
        </Animated.View>

        <Animated.View style={[styles.statRow, rise(rowB)]}>
          <View style={styles.statSlot}>
            <StatCard
              Icon={TrendingUp}
              value={String(progress.floorsBuilt)}
              label="floors built"
              valueColor={theme.colors.primary.base}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              Icon={Trophy}
              value={String(progress.bestHeight)}
              label="best height"
              valueColor={theme.colors.amber.base}
            />
          </View>
        </Animated.View>

        <Animated.View style={[styles.statRow, rise(rowC)]}>
          <View style={styles.statSlot}>
            <StatCard
              Icon={CheckCircle2}
              value={progress.blueprintsDone + '/' + STAGE_COUNT}
              label="blueprints"
              valueColor={theme.colors.mint.base}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              Icon={LifeBuoy}
              value={String(progress.supportsOwned)}
              label="supports"
              valueColor={theme.colors.text.primary}
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
        <PrimaryButton label="START BUILD" Icon={Hammer} onPress={onStart} />
      </Animated.View>

      <ThemeLibraryModal
        visible={libraryOpen}
        activeTheme={progress.activeTheme}
        blueprintsDone={progress.blueprintsDone}
        onSelect={handleTheme}
        onClose={closeLibrary}
      />
      <SettingsModal
        visible={settingsOpen}
        settings={progress.settings}
        onToggle={handleToggle}
        onReset={handleReset}
        onClose={closeSettings}
      />
    </AppShell>
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
    color: theme.colors.text.muted,
  },
  heroName: {
    marginTop: 6,
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0.4,
    color: theme.colors.text.primary,
  },
  heroMeta: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: theme.colors.text.secondary,
  },
  heroRailTrack: {
    height: 6,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.colors.bg.tertiary,
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
    color: theme.colors.text.muted,
    marginBottom: 8,
  },
  ctaWrap: {
    paddingHorizontal: 16,
    marginBottom: 28,
  },
});
