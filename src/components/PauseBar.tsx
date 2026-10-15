import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import SecondaryButton from './SecondaryButton';

type Props = {
  onResume: () => void;
  onQuit: () => void;
};

/** Inline pause row — no extra screen file, no modal stack. */
function PauseBarBase({ onResume, onQuit }: Props) {
  return (
    <View style={styles.row}>
      <SecondaryButton label="RESUME" onPress={onResume} grow />
      <SecondaryButton label="QUIT TO MAP" onPress={onQuit} grow tone="amber" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});

export const PauseBar = memo(PauseBarBase);
export default PauseBar;
