import React, { ReactNode, memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import theme from '../constants/theme';

type Props = {
  children: ReactNode;
  height?: number;
  style?: StyleProp<ViewStyle>;
};

/** The BENTO_GRID surface primitive: white card, hairline border, even shadow. */
function BentoTileBase({ children, height, style }: Props) {
  return (
    <View
      style={[styles.tile, height ? { height: height } : null, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: theme.colors.surface.card,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: theme.colors.surface.border,
    overflow: 'hidden',
    shadowColor: theme.shadow.tile.shadowColor,
    shadowOpacity: theme.shadow.tile.shadowOpacity,
    shadowRadius: theme.shadow.tile.shadowRadius,
    shadowOffset: theme.shadow.tile.shadowOffset,
    elevation: theme.shadow.tile.elevation,
  },
});

export const BentoTile = memo(BentoTileBase);
export default BentoTile;
