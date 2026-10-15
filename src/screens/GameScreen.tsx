import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Animated, BackHandler, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, Layers, LifeBuoy, RotateCw } from 'lucide-react-native';
import { ROWS } from '../constants/config';
import theme from '../constants/theme';
import AppShell from '../components/AppShell';
import BuildBoard, { Ghost } from '../components/BuildBoard';
import IconButton from '../components/IconButton';
import PauseBar from '../components/PauseBar';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import SlabTray from '../components/SlabTray';
import StatStrip from '../components/StatStrip';
import { cellsOf, legalDrop } from '../game/engine';
import { useProgress } from '../game/progressStore';
import { getStage, themeByKey } from '../game/stages';
import useBuildGame, { RunResult } from '../hooks/useBuildGame';

type Props = {
  onGameOver: (result: RunResult, floors: number, earned: number) => void;
  onQuit: () => void;
};

export default function GameScreen({ onGameOver, onQuit }: Props) {
  const progress = useProgress();
  const stage = getStage(progress.stageIndex);
  const slabTheme = themeByKey(progress.activeTheme);

  const game = useBuildGame({
    stage: stage,
    haptics: progress.settings.haptics,
    onGameOver: onGameOver,
  });
  const snap = game.snapshot;

  const enter = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [enter]);

  const pausedRef = useRef(snap.paused);
  pausedRef.current = snap.paused;
  const setPaused = game.setPaused;
  const onQuitRef = useRef(onQuit);
  onQuitRef.current = onQuit;

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (pausedRef.current) {
        onQuitRef.current();
        return true;
      }
      setPaused(true);
      return true;
    });
    return () => sub.remove();
  }, [setPaused]);

  const openPause = useCallback(() => setPaused(true), [setPaused]);
  const resume = useCallback(() => setPaused(false), [setPaused]);

  const ghost: Ghost | null = useMemo(() => {
    if (!progress.settings.gridGuides) {
      return null;
    }
    if (snap.ghostCol === null || snap.status !== 'playing') {
      return null;
    }
    const slab = snap.tray[snap.selected];
    if (!slab) {
      return null;
    }
    const cells = cellsOf(slab);
    const base = snap.grid.map(row => row.map(v => (v === 2 ? 1 : v)));
    const row = legalDrop(base, cells, snap.ghostCol);
    if (row === null) {
      return { cells: cells, row: 0, col: snap.ghostCol, valid: false };
    }
    return { cells: cells, row: row, col: snap.ghostCol, valid: true };
  }, [
    progress.settings.gridGuides,
    snap.ghostCol,
    snap.grid,
    snap.selected,
    snap.status,
    snap.tray,
  ]);

  const remaining = Math.max(0, stage.targetFloors - snap.floors);
  const targetRow = Math.max(0, ROWS - remaining);

  return (
    <AppShell variant="game">
      <ScreenHeader
        tone="game"
        centred
        title={stage.label}
        subtitle={stage.name}
        left={
          <IconButton
            Icon={ChevronLeft}
            onPress={openPause}
            label="PAUSE BUILD"
          />
        }
        right={
          <View style={styles.floorsBadge}>
            <Layers
              size={18}
              color={theme.colors.primary.base}
              strokeWidth={1.5}
            />
            <Text style={styles.floorsValue}>
              {snap.floors + '/' + stage.targetFloors}
            </Text>
          </View>
        }
      />

      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.body,
          {
            opacity: enter,
            transform: [
              {
                translateY: enter.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, 0],
                }),
              },
            ],
          },
        ]}>
        <View style={styles.boardArea}>
          <BuildBoard
            grid={snap.grid}
            ghost={ghost}
            lockingRows={snap.lockingRows}
            slabColor={slabTheme.base}
            slabLight={slabTheme.light}
            targetRow={targetRow}
            rejectTick={snap.rejectTick}
            placeTick={snap.placeTick}
            collapsed={snap.result === 'collapse'}
            onTapColumn={game.tapColumn}
            onPreviewColumn={game.previewColumn}
          />
        </View>

        <StatStrip
          floors={snap.floors}
          target={stage.targetFloors}
          stability={snap.stability}
          supports={snap.supports}
        />

        <View style={styles.controls}>
          <SlabTray
            slabs={snap.tray}
            selectedIndex={snap.selected}
            slabColor={slabTheme.base}
            onSelect={game.selectSlab}
          />

          <View style={styles.actionRow}>
            {snap.paused ? (
              <PauseBar onResume={resume} onQuit={onQuit} />
            ) : (
              <View style={styles.actionsInner}>
                <SecondaryButton
                  grow
                  tone="amber"
                  Icon={LifeBuoy}
                  label={'SUPPORT ' + snap.supports}
                  disabled={snap.supports <= 0}
                  onPress={game.useSupport}
                />
                <SecondaryButton
                  grow
                  Icon={RotateCw}
                  label="ROTATE"
                  onPress={game.rotateSelected}
                />
              </View>
            )}
          </View>
        </View>
      </Animated.View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  boardArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  floorsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingRight: 8,
  },
  floorsValue: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: theme.colors.text.primary,
  },
  controls: {
    backgroundColor: theme.colors.surface.card,
    borderTopLeftRadius: theme.radius.sheet,
    borderTopRightRadius: theme.radius.sheet,
    borderTopWidth: 1,
    borderTopColor: theme.colors.surface.borderStrong,
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 20,
    shadowColor: '#263447',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: -4 },
    elevation: 10,
  },
  actionRow: {
    marginTop: 12,
    height: 56,
    justifyContent: 'center',
  },
  actionsInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});
