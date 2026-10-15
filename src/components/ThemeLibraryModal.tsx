import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Lock } from 'lucide-react-native';
import Svg, { Rect } from 'react-native-svg';
import theme from '../constants/theme';
import { SLAB_THEMES, SlabTheme, ThemeKey } from '../game/stages';
import SheetModal from './SheetModal';

type Props = {
  visible: boolean;
  activeTheme: ThemeKey;
  blueprintsDone: number;
  onSelect: (key: ThemeKey) => void;
  onClose: () => void;
};

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

function SlabSwatch({ item }: { item: SlabTheme }) {
  return (
    <Svg width={76} height={46} viewBox="0 0 76 46">
      <Rect x={4} y={30} width={68} height={12} rx={3} fill={item.base} />
      <Rect x={12} y={16} width={52} height={12} rx={3} fill={item.base} />
      <Rect x={20} y={2} width={36} height={12} rx={3} fill={item.light} />
    </Svg>
  );
}

function ThemeLibraryModalBase({
  visible,
  activeTheme,
  blueprintsDone,
  onSelect,
  onClose,
}: Props) {
  return (
    <SheetModal
      visible={visible}
      title="THEME LIBRARY"
      heightRatio={0.72}
      onClose={onClose}>
      <View style={styles.grid}>
        {SLAB_THEMES.map(item => {
          const unlocked = item.unlockAt <= blueprintsDone;
          const active = item.key === activeTheme;
          const state = active
            ? 'ACTIVE'
            : unlocked
            ? 'READY'
            : 'UNLOCK: ' + item.unlockAt + ' BLUEPRINTS';
          return (
            <Pressable
              key={item.key}
              style={styles.slot}
              hitSlop={HIT_SLOP}
              disabled={!unlocked}
              onPress={() => onSelect(item.key)}
              accessibilityRole="button"
              accessibilityLabel={'THEME ' + item.name}>
              <View
                style={[
                  styles.card,
                  active ? styles.cardActive : null,
                  unlocked ? null : styles.cardLocked,
                ]}>
                <SlabSwatch item={item} />
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.stateRow}>
                  {unlocked ? null : (
                    <Lock
                      size={18}
                      color={theme.colors.text.muted}
                      strokeWidth={1.5}
                    />
                  )}
                  <Text
                    style={[
                      styles.state,
                      active ? styles.stateActive : null,
                    ]}
                    numberOfLines={1}>
                    {state}
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>
    </SheetModal>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  slot: {
    width: '48%',
    height: 132,
    marginBottom: 12,
  },
  card: {
    width: '100%',
    height: 132,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.surface.border,
    backgroundColor: theme.colors.surface.alt,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  cardActive: {
    borderWidth: 2,
    borderColor: theme.colors.primary.base,
    backgroundColor: theme.colors.surface.tintedBlue,
  },
  cardLocked: {
    opacity: 0.55,
  },
  name: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: theme.colors.text.primary,
  },
  stateRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  state: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.9,
    color: theme.colors.text.muted,
  },
  stateActive: {
    color: theme.colors.mint.base,
  },
});

export const ThemeLibraryModal = memo(ThemeLibraryModalBase);
export default ThemeLibraryModal;
