import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import theme from '../constants/theme';
import { SettingKey, Settings } from '../game/progressStore';
import SheetModal from './SheetModal';
import Toggle from './Toggle';

type Props = {
  visible: boolean;
  settings: Settings;
  onToggle: (key: SettingKey) => void;
  onReset: () => void;
  onClose: () => void;
};

const ROWS: { key: SettingKey; label: string }[] = [
  { key: 'sound', label: 'SOUND EFFECTS' },
  { key: 'haptics', label: 'HAPTIC FEEDBACK' },
  { key: 'gridGuides', label: 'GRID GUIDES' },
  { key: 'reducedMotion', label: 'REDUCED MOTION' },
];

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

function SettingsModalBase({
  visible,
  settings,
  onToggle,
  onReset,
  onClose,
}: Props) {
  const [confirming, setConfirming] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      setConfirming(false);
    }
  }, [visible]);

  const handleReset = useCallback(() => {
    if (confirming) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setConfirming(false);
      onReset();
      return;
    }
    setConfirming(true);
    timerRef.current = setTimeout(() => setConfirming(false), 3000);
  }, [confirming, onReset]);

  return (
    <SheetModal
      visible={visible}
      title="SETTINGS"
      heightRatio={0.58}
      onClose={onClose}>
      <View style={styles.list}>
        {ROWS.map(row => (
          <View key={row.key} style={styles.row}>
            <Text style={styles.label}>{row.label}</Text>
            <Toggle
              value={settings[row.key]}
              onChange={() => onToggle(row.key)}
              label={row.label}
            />
          </View>
        ))}

        <Pressable
          style={styles.resetRow}
          hitSlop={HIT_SLOP}
          onPress={handleReset}
          accessibilityRole="button"
          accessibilityLabel="RESET PROGRESS">
          <Text style={styles.resetLabel}>
            {confirming ? 'TAP AGAIN TO CONFIRM' : 'RESET PROGRESS'}
          </Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>TOWER RUSH v1.0 - OFFLINE BUILD</Text>
    </SheetModal>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 4,
  },
  row: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.surface.divider,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: theme.colors.text.primary,
  },
  resetRow: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
  },
  resetLabel: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: theme.colors.danger.base,
  },
  footer: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: theme.colors.text.muted,
    paddingBottom: 8,
  },
});

export const SettingsModal = memo(SettingsModalBase);
export default SettingsModal;
