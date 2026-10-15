import React, { memo, useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import theme from '../constants/theme';
import { TraySlab, cellsOf } from '../game/engine';
import { heightOf, widthOf } from '../game/shapes';

type Props = {
  slabs: TraySlab[];
  selectedIndex: number;
  slabColor: string;
  onSelect: (index: number) => void;
};

const UNIT = 15;
const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

function SlabShape({ slab, color }: { slab: TraySlab; color: string }) {
  const cells = cellsOf(slab);
  const w = widthOf(cells) * UNIT;
  const h = heightOf(cells) * UNIT;
  return (
    <Svg width={w} height={h} viewBox={'0 0 ' + w + ' ' + h}>
      {cells.map(cell => (
        <Rect
          key={'s' + cell.r + '-' + cell.c}
          x={cell.c * UNIT + 1}
          y={cell.r * UNIT + 1}
          width={UNIT - 2}
          height={UNIT - 2}
          rx={3}
          fill={color}
        />
      ))}
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
  const scale = useRef(new Animated.Value(selected ? 1.04 : 1)).current;

  useEffect(() => {
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
      onPress={() => onSelect(index)}
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
  return (
    <View style={styles.row}>
      {slabs.map((slab, index) => (
        <TraySlot
          key={slab.id}
          slab={slab}
          index={index}
          selected={index === selectedIndex}
          color={slabColor}
          onSelect={onSelect}
        />
      ))}
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
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.surface.border,
    backgroundColor: theme.colors.surface.alt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileSelected: {
    borderWidth: 2,
    borderColor: theme.colors.primary.base,
    backgroundColor: theme.colors.surface.tintedBlue,
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
    color: theme.colors.text.muted,
  },
});

export const SlabTray = memo(SlabTrayBase);
export default SlabTray;
