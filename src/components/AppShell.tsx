import React, { ReactNode, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_H, SCREEN_W } from '../constants/config';
import theme from '../constants/theme';
import BlueprintGrid from './BlueprintGrid';

export type ShellVariant = 'loader' | 'menu' | 'game' | 'win' | 'lose';

type Props = {
  variant: ShellVariant;
  children: ReactNode;
};

const GRADIENTS: Record<ShellVariant, string[]> = {
  loader: theme.gradients.loader,
  menu: theme.gradients.menu,
  game: theme.gradients.game,
  win: theme.gradients.win,
  lose: theme.gradients.lose,
};

const GRID_OPACITY: Record<ShellVariant, number> = {
  loader: 0.18,
  menu: 0.07,
  game: 0.06,
  win: 0.07,
  lose: 0.07,
};

/** Background stack shared by every screen: gradient -> grid -> blob -> content. */
function AppShellBase({ variant, children }: Props) {
  const isLoader = variant === 'loader';
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={GRADIENTS[variant]}
        start={{ x: 0, y: 0 }}
        end={isLoader ? { x: 1, y: 1 } : { x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <BlueprintGrid
        width={SCREEN_W}
        height={SCREEN_H}
        cell={28}
        color={theme.colors.grid.blueprint}
        opacity={GRID_OPACITY[variant]}
      />
      {isLoader ? null : <View style={styles.blob} pointerEvents="none" />}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
  content: {
    flex: 1,
  },
  blob: {
    position: 'absolute',
    top: -120,
    left: -60,
    width: SCREEN_W + 120,
    height: 320,
    borderRadius: 220,
    backgroundColor: 'rgba(59,130,246,0.06)',
  },
});

export const AppShell = memo(AppShellBase);
export default AppShell;
