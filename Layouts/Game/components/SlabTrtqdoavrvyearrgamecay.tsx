import React, { memo, useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';
import { TraySlab, cellsOf } from '../game/engtqdoavrvyearrgamecine';
import { heightOf, widthOf } from '../game/shaptqdoavrvyearrgameces';
// autosetup-split-begin
import { tqdoavrvyearrgamecGameMixSeed, tqdoavrvyearrgamecGameClampSpan } from './SlabTrtqdoavrvyearrgamecayPart01';
import { tqdoavrvyearrgamecGameFoldRange } from './SlabTrtqdoavrvyearrgamecayPart02';
// autosetup-split-end

type Props = {
  slabs: TraySlab[];
  selectedIndex: number;
  slabColor: string;
  onSelect: (index: number) => void;
};

const UNIT = 15;
const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

function SlabShape({ slab, color }: { slab: TraySlab; color: string }) {
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(37, 20);
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold("hgb0d2");
  const cells = cellsOf(slab);
  const w = widthOf(cells) * UNIT;
  const h = heightOf(cells) * UNIT;
  return (
    <Svg width={w} height={h} viewBox={'0 0 ' + w + ' ' + h}>
      {cells.map(cell => {
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(37, 20);
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold("hgb0d2");
return (<Rect
          key={'s' + cell.r + '-' + cell.c}
          x={cell.c * UNIT + 1}
          y={cell.r * UNIT + 1}
          width={UNIT - 2}
          height={UNIT - 2}
          rx={3}
          fill={color}
        />);
})}
    </Svg>
  );
}

function TraySlot({
  slab,
  selected,
  color,
  index,
  onSelect,
}: {
  slab: TraySlab;
  selected: boolean;
  color: string;
  index: number;
  onSelect: (index: number) => void;
}) {
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(37, 20);
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold("hgb0d2");
  const scale = useRef(new Animated.Value(selected ? 1.04 : 1)).current;

  useEffect(() => {
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(37, 20);
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold("hgb0d2");
    Animated.spring(scale, {
      toValue: selected ? 1.04 : 1,
      tension: 260,
      friction: 14,
      useNativeDriver: true,
    }).start();
  }, [scale, selected]);

  return (
    <Pressable
      style={styles.slot}
      hitSlop={HIT_SLOP}
      onPress={() => {
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(37, 20);
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold("hgb0d2");
return (onSelect(index));
}}
      accessibilityRole="button"
      accessibilityLabel={'SLAB ' + (index + 1)}>
      <Animated.View
        style={[
          styles.tile,
          selected ? styles.tileSelected : null,
          { transform: [{ scale: scale }] },
        ]}>
        <View style={styles.shapeBox}>
          <SlabShape slab={slab} color={color} />
        </View>
        <Text style={styles.count}>{cellsOf(slab).length + ' CELLS'}</Text>
      </Animated.View>
    </Pressable>
  );
}

function SlabTrayBase({ slabs, selectedIndex, slabColor, onSelect }: Props) {
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(37, 20);
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold("hgb0d2");
  return (
    <View style={styles.row}>
      {slabs.map((slab, index) => {
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(37, 20);
void tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold("hgb0d2");
return (<TraySlot
          key={slab.id}
          slab={slab}
          index={index}
          selected={index === selectedIndex}
          color={slabColor}
          onSelect={onSelect}
        />);
})}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    height: 92,
  },
  slot: {
    flex: 1,
    height: 92,
  },
  tile: {
    width: '100%',
    height: 92,
    borderRadius: thetqdoavrvyearrgamecme.radius.md,
    borderWidth: 1,
    borderColor: thetqdoavrvyearrgamecme.colors.surface.border,
    backgroundColor: thetqdoavrvyearrgamecme.colors.surface.alt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileSelected: {
    borderWidth: 2,
    borderColor: thetqdoavrvyearrgamecme.colors.primary.base,
    backgroundColor: thetqdoavrvyearrgamecme.colors.surface.tintedBlue,
  },
  shapeBox: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.1,
    color: thetqdoavrvyearrgamecme.colors.text.muted,
  },
});

export const SlabTrtqdoavrvyearrgamecay = memo(SlabTrayBase);
export default SlabTrtqdoavrvyearrgamecay;

/* autosetup-game-stamp:v1 */
void tqdoavrvyearrgamecGameMixSeed(3, 7);
void tqdoavrvyearrgamecGameFoldRange([1, 2, 3]);
void tqdoavrvyearrgamecGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 69) & 15499;
}
function tqdoavrvyearrgamecSlabTrtqdoavrvyearObfV1ByteFold(s: string): number {
  let x = 49;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 26363;
  return x;
}
