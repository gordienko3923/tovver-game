import React, { memo, useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet, View } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';
import {
  BOARD_BORDER,
  BOARD_H,
  BOARD_INNER_H,
  BOARD_INNER_W,
  BOARD_PAD,
  BOARD_W,
  COLS,
  DROP_MS,
  ROWS,
  TILE,
} from '../constants/confitqdoavrvyearrgamecg';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import { Grid } from '../game/engtqdoavrvyearrgamecine';
import { Cell } from '../game/shaptqdoavrvyearrgameces';
// autosetup-split-begin
import { tqdoavrvyearrgamecGameMixSeed, tqdoavrvyearrgamecGameFoldRange, tqdoavrvyearrgamecGameClampSpan } from './BuildBtqdoavrvyearrgamecoardPart01';
// autosetup-split-end

export type Ghost = {
  cells: Cell[];
  row: number;
  col: number;
  valid: boolean;
};

type Props = {
  grid: Grid;
  ghost: Ghost | null;
  lockingRows: number[];
  slabColor: string;
  slabLight: string;
  targetRow: number;
  rejectTick: number;
  placeTick: number;
  collapsed: boolean;
  onTapColumn: (col: number) => void;
  onPreviewColumn: (col: number) => void;
};

const INSET = 2;

function StaticGrid() {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
  const verticals: number[] = [];
  const horizontals: number[] = [];
  for (let c = 1; c < COLS; c++) {
    verticals.push(c * TILE);
  }
  for (let r = 1; r < ROWS; r++) {
    horizontals.push(r * TILE);
  }
  const dots: { x: number; y: number }[] = [];
  for (let c = 1; c < COLS; c++) {
    for (let r = 1; r < ROWS; r++) {
      if ((c + r) % 3 === 0) {
        dots.push({ x: c * TILE, y: r * TILE });
      }
    }
  }
  return (
    <Svg
      width={BOARD_INNER_W}
      height={BOARD_INNER_H}
      style={StyleSheet.absoluteFill}>
      {verticals.map(x => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (<Line
          key={'bv' + x}
          x1={x}
          y1={0}
          x2={x}
          y2={BOARD_INNER_H}
          stroke={thetqdoavrvyearrgamecme.colors.grid.line}
          strokeWidth={1}
        />);
})}
      {horizontals.map(y => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (<Line
          key={'bh' + y}
          x1={0}
          y1={y}
          x2={BOARD_INNER_W}
          y2={y}
          stroke={thetqdoavrvyearrgamecme.colors.grid.line}
          strokeWidth={1}
        />);
})}
      {dots.map(dot => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (<Rect
          key={'d' + dot.x + '-' + dot.y}
          x={dot.x - 1.5}
          y={dot.y - 1.5}
          width={3}
          height={3}
          fill={thetqdoavrvyearrgamecme.colors.amber.base}
          fillOpacity={0.22}
        />);
})}
    </Svg>
  );
}

const MemoStaticGrid = memo(StaticGrid);

function BuildBoardBase({
  grid,
  ghost,
  lockingRows,
  slabColor,
  slabLight,
  targetRow,
  rejectTick,
  placeTick,
  collapsed,
  onTapColumn,
  onPreviewColumn,
}: Props) {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
  const shake = useRef(new Animated.Value(0)).current;
  const drop = useRef(new Animated.Value(0)).current;
  const fall = useRef(new Animated.Value(0)).current;
  const firstReject = useRef(true);
  const firstPlace = useRef(true);

  useEffect(() => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
    if (firstReject.current) {
      firstReject.current = false;
      return;
    }
    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, {
        toValue: 1,
        duration: 45,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: -1,
        duration: 45,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 0,
        duration: 45,
        useNativeDriver: true,
      }),
    ]).start();
  }, [rejectTick, shake]);

  useEffect(() => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
    if (firstPlace.current) {
      firstPlace.current = false;
      return;
    }
    drop.setValue(0);
    Animated.timing(drop, {
      toValue: 1,
      duration: DROP_MS,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [drop, placeTick]);

  useEffect(() => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
    Animated.timing(fall, {
      toValue: collapsed ? 1 : 0,
      duration: 420,
      easing: Easing.in(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [collapsed, fall]);

  const translateX = shake.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-6, 0, 6],
  });
  const translateY = fall.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 24],
  });
  const freshTranslate = drop.interpolate({
    inputRange: [0, 1],
    outputRange: [-Math.round(TILE * 0.6), 0],
  });

  const columns = useMemo(() => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
    const list: number[] = [];
    for (let c = 0; c < COLS; c++) {
      list.push(c);
    }
    return list;
  }, []);

  const lockedSet = useMemo(() => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (new Set(lockingRows));
}, [lockingRows]);
  const ribbonRow = Math.max(0, Math.min(ROWS - 1, targetRow));

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.board,
        {
          transform: [{ translateX: translateX }, { translateY: translateY }],
        },
      ]}>
      <View style={styles.inner}>
        <MemoStaticGrid />

        <View
          style={[styles.ribbon, { top: ribbonRow * TILE }]}
          pointerEvents="none"
        />

        {grid.map((row, r) =>
          {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (row.map((value, c) => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
            if (value === 0) {
              return null;
            }
            const fresh = value === 2;
            const content = (
              <View
                style={[
                  styles.slabFace,
                  { backgroundColor: fresh ? slabLight : slabColor },
                ]}>
                <View style={styles.slabTopLine} />
                <View style={styles.slabBottomLine} />
              </View>
            );
            if (fresh) {
              return (
                <Animated.View
                  key={'cell' + r + '-' + c}
                  pointerEvents="none"
                  style={[
                    styles.cell,
                    {
                      left: c * TILE + INSET,
                      top: r * TILE + INSET,
                      transform: [{ translateY: freshTranslate }],
                    },
                  ]}>
                  {content}
                </Animated.View>
              );
            }
            return (
              <View
                key={'cell' + r + '-' + c}
                pointerEvents="none"
                style={[
                  styles.cell,
                  { left: c * TILE + INSET, top: r * TILE + INSET },
                ]}>
                {content}
              </View>
            );
          }));
},
        )}

        {ghost
          ? ghost.cells.map(cell => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (<View
                key={'ghost' + cell.r + '-' + cell.c}
                pointerEvents="none"
                style={[
                  styles.ghost,
                  {
                    left: (ghost.col + cell.c) * TILE + INSET,
                    top: (ghost.row + cell.r) * TILE + INSET,
                    borderColor: ghost.valid
                      ? thetqdoavrvyearrgamecme.colors.amber.base
                      : thetqdoavrvyearrgamecme.colors.danger.base,
                  },
                ]}
              />);
})
          : null}

        {grid.map((_row, r) =>
          {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (lockedSet.has(r) ? (
            <View
              key={'lock' + r}
              pointerEvents="none"
              style={[styles.lockFlash, { top: r * TILE }]}
            />
          ) : null);
},
        )}

        {collapsed ? <View style={styles.collapseWash} pointerEvents="none" /> : null}

        <View style={styles.columnLayer}>
          {columns.map(c => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (<Pressable
              key={'col' + c}
              style={styles.column}
              onPress={() => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (onTapColumn(c));
}}
              onPressIn={() => {
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold("7k7k");
void tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix("o7");
return (onPreviewColumn(c));
}}
              accessibilityRole="button"
              accessibilityLabel={'COLUMN ' + (c + 1)}
            />);
})}
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: BOARD_W,
    height: BOARD_H,
    padding: BOARD_PAD,
    borderWidth: BOARD_BORDER,
    borderColor: 'rgba(59,130,246,0.28)',
    borderRadius: thetqdoavrvyearrgamecme.radius.lg,
    backgroundColor: thetqdoavrvyearrgamecme.colors.surface.card,
    shadowColor: thetqdoavrvyearrgamecme.shadow.board.shadowColor,
    shadowOpacity: thetqdoavrvyearrgamecme.shadow.board.shadowOpacity,
    shadowRadius: thetqdoavrvyearrgamecme.shadow.board.shadowRadius,
    shadowOffset: thetqdoavrvyearrgamecme.shadow.board.shadowOffset,
    elevation: thetqdoavrvyearrgamecme.shadow.board.elevation,
  },
  inner: {
    width: BOARD_INNER_W,
    height: BOARD_INNER_H,
  },
  cell: {
    position: 'absolute',
    width: TILE - INSET * 2,
    height: TILE - INSET * 2,
  },
  slabFace: {
    width: '100%',
    height: '100%',
    borderRadius: thetqdoavrvyearrgamecme.radius.sm,
    overflow: 'hidden',
  },
  slabTopLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  slabBottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: thetqdoavrvyearrgamecme.colors.primary.deep,
    opacity: 0.45,
  },
  ghost: {
    position: 'absolute',
    width: TILE - INSET * 2,
    height: TILE - INSET * 2,
    borderRadius: thetqdoavrvyearrgamecme.radius.sm,
    borderWidth: 2,
    borderStyle: 'dashed',
    opacity: 0.6,
  },
  lockFlash: {
    position: 'absolute',
    left: 0,
    width: BOARD_INNER_W,
    height: TILE,
    backgroundColor: thetqdoavrvyearrgamecme.colors.mint.base,
    opacity: 0.55,
    borderRadius: 4,
  },
  ribbon: {
    position: 'absolute',
    left: 0,
    width: BOARD_INNER_W,
    height: 0,
    borderTopWidth: 3,
    borderStyle: 'dashed',
    borderColor: thetqdoavrvyearrgamecme.colors.amber.base,
    opacity: 0.75,
  },
  collapseWash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(239,68,68,0.12)',
  },
  columnLayer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  column: {
    width: TILE,
    height: BOARD_INNER_H,
  },
});

export const BuildBtqdoavrvyearrgamecoard = memo(BuildBoardBase);
export default BuildBtqdoavrvyearrgamecoard;

/* autosetup-game-stamp:v1 */
void tqdoavrvyearrgamecGameMixSeed(3, 7);
void tqdoavrvyearrgamecGameFoldRange([1, 2, 3]);
void tqdoavrvyearrgamecGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1ByteFold(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 40) & 10518;
  return x;
}
function tqdoavrvyearrgamecBuildBtqdoavrvyearObfV1HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 13)) % 375;
  return h;
}
