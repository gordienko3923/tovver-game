import React, { ReactNode, memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HEADER_CONTENT_H, HEADER_TOP_PAD } from '../constants/config';
import theme from '../constants/theme';

type Props = {
  title: string;
  subtitle?: string;
  left?: ReactNode;
  right?: ReactNode;
  centred?: boolean;
  tone?: 'menu' | 'game' | 'result';
};

const BACKGROUNDS = {
  menu: 'rgba(255,255,255,0.72)',
  game: 'rgba(255,255,255,0.77)',
  result: 'rgba(255,255,255,0.55)',
};

/**
 * One header for every screen (rule #12 of the self-check list) — the slots
 * change per screen, the bar styling never does.
 */
function ScreenHeaderBase({
  title,
  subtitle,
  left,
  right,
  centred = false,
  tone = 'menu',
}: Props) {
  return (
    <View style={[styles.bar, { backgroundColor: BACKGROUNDS[tone] }]}>
      <View style={styles.slot}>{left ? left : <View style={styles.spacer} />}</View>
      <View style={centred ? styles.titleWrapCentred : styles.titleWrap}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      <View style={styles.slotRight}>
        {right ? right : <View style={styles.spacer} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    paddingTop: HEADER_TOP_PAD,
    height: HEADER_TOP_PAD + HEADER_CONTENT_H,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.surface.borderStrong,
  },
  slot: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 48,
  },
  slotRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 48,
  },
  spacer: {
    width: 44,
    height: 44,
  },
  titleWrap: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  titleWrapCentred: {
    flex: 1,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: theme.colors.text.primary,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.4,
    color: theme.colors.text.muted,
  },
});

export const ScreenHeader = memo(ScreenHeaderBase);
export default ScreenHeader;
