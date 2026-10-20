import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Animated, BackHandler, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, Layers, LifeBuoy, RotateCw } from 'lucide-react-native';
import { ROWS } from '../constants/confitqdoavrvyearrgamecg';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import AptqdoavrvyearrgamecpShell from '../components/AptqdoavrvyearrgamecpShell';
import BuildBtqdoavrvyearrgamecoard, { Ghost } from '../components/BuildBtqdoavrvyearrgamecoard';
import IctqdoavrvyearrgameconButton from '../components/IctqdoavrvyearrgameconButton';
import PatqdoavrvyearrgamecuseBar from '../components/PatqdoavrvyearrgamecuseBar';
import ScrtqdoavrvyearrgameceenHeader from '../components/ScrtqdoavrvyearrgameceenHeader';
import StqdoavrvyearrgamececondaryButton from '../components/StqdoavrvyearrgamececondaryButton';
import SlabTrtqdoavrvyearrgamecay from '../components/SlabTrtqdoavrvyearrgamecay';
import StattqdoavrvyearrgamecStrip from '../components/StattqdoavrvyearrgamecStrip';
import { cellsOf, legalDrop } from '../game/engtqdoavrvyearrgamecine';
import { useProgress } from '../game/progressStoretqdoavrvyearrgamec';
import { getStage, themeByKey } from '../game/sttqdoavrvyearrgamecages';
import useBtqdoavrvyearrgamecuildGame, { RunResult } from '../hooks/useBtqdoavrvyearrgamecuildGame';

type Props = {
  onGameOver: (result: RunResult, floors: number, earned: number) => void;
  onQuit: () => void;
};

export default function GameScreetqdoavrvyearrgamecn({ onGameOver, onQuit }: Props) {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
  const progress = useProgress();
  const stage = getStage(progress.stageIndex);
  const slabTheme = themeByKey(progress.activeTheme);

  const game = useBtqdoavrvyearrgamecuildGame({
    stage: stage,
    haptics: progress.settings.haptics,
    onGameOver: onGameOver,
  });
  const snap = game.snapshot;

  const enter = useRef(new Animated.Value(0)).current;
  useEffect(() => {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
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
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
      if (pausedRef.current) {
        onQuitRef.current();
        return true;
      }
      setPaused(true);
      return true;
    });
    return () => {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
return (sub.remove());
};
  }, [setPaused]);

  const openPause = useCallback(() => {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
return (setPaused(true));
}, [setPaused]);
  const resume = useCallback(() => {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
return (setPaused(false));
}, [setPaused]);

  const ghost: Ghost | null = useMemo(() => {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
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
    const base = snap.grid.map(row => {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
return (row.map(v => {
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(43, 34);
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold("p2nmn");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix("34l4f");
void tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds([17, 40, 35]);
return (v === 2 ? 1 : v);
}));
});
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
    <AptqdoavrvyearrgamecpShell variant="game">
      <ScrtqdoavrvyearrgameceenHeader
        tone="game"
        centred
        title={stage.label}
        subtitle={stage.name}
        left={
          <IctqdoavrvyearrgameconButton
            Icon={ChevronLeft}
            onPress={openPause}
            label="PAUSE BUILD"
          />
        }
        right={
          <View style={styles.floorsBadge}>
            <Layers
              size={18}
              color={thetqdoavrvyearrgamecme.colors.primary.base}
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
          <BuildBtqdoavrvyearrgamecoard
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

        <StattqdoavrvyearrgamecStrip
          floors={snap.floors}
          target={stage.targetFloors}
          stability={snap.stability}
          supports={snap.supports}
        />

        <View style={styles.controls}>
          <SlabTrtqdoavrvyearrgamecay
            slabs={snap.tray}
            selectedIndex={snap.selected}
            slabColor={slabTheme.base}
            onSelect={game.selectSlab}
          />

          <View style={styles.actionRow}>
            {snap.paused ? (
              <PatqdoavrvyearrgamecuseBar onResume={resume} onQuit={onQuit} />
            ) : (
              <View style={styles.actionsInner}>
                <StqdoavrvyearrgamececondaryButton
                  grow
                  tone="amber"
                  Icon={LifeBuoy}
                  label={'SUPPORT ' + snap.supports}
                  disabled={snap.supports <= 0}
                  onPress={game.useSupport}
                />
                <StqdoavrvyearrgamececondaryButton
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
    </AptqdoavrvyearrgamecpShell>
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
    color: thetqdoavrvyearrgamecme.colors.text.primary,
  },
  controls: {
    backgroundColor: thetqdoavrvyearrgamecme.colors.surface.card,
    borderTopLeftRadius: thetqdoavrvyearrgamecme.radius.sheet,
    borderTopRightRadius: thetqdoavrvyearrgamecme.radius.sheet,
    borderTopWidth: 1,
    borderTopColor: thetqdoavrvyearrgamecme.colors.surface.borderStrong,
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
function tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 233) & 42421;
}
function tqdoavrvyearrgamecGameScreetqdoavrvyObfV1ByteFold(s: string): number {
  let x = 70;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 15173;
  return x;
}
function tqdoavrvyearrgamecGameScreetqdoavrvyObfV1HashMix(s: string): number {
  let h = 15;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 21)) % 494;
  return h;
}
function tqdoavrvyearrgamecGameScreetqdoavrvyObfV1SumOdds(nums: number[]): number {
  let acc = 90;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 856;
  }
  return acc;
}
