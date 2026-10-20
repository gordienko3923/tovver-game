import React, { ReactNode, memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HEADER_CONTENT_H, HEADER_TOP_PAD } from '../constants/confitqdoavrvyearrgamecg';
import thetqdoavrvyearrgamecme from '../constants/thetqdoavrvyearrgamecme';

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
void tqdoavrvyearrgamecScrtqdoavrvyearrgaObfV1SumOdds([17, 24, 35]);
void tqdoavrvyearrgamecScrtqdoavrvyearrgaObfV1ClampMod(18, 77);
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
    borderBottomColor: thetqdoavrvyearrgamecme.colors.surface.borderStrong,
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
    color: thetqdoavrvyearrgamecme.colors.text.primary,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.4,
    color: thetqdoavrvyearrgamecme.colors.text.muted,
  },
});

export const ScrtqdoavrvyearrgameceenHeader = memo(ScreenHeaderBase);
export default ScrtqdoavrvyearrgameceenHeader;

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
function tqdoavrvyearrgamecScrtqdoavrvyearrgaObfV1SumOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 92;
  }
  return acc;
}
function tqdoavrvyearrgamecScrtqdoavrvyearrgaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 34) + 10;
  const x = ((n ^ 218) << 4) % span;
  return x < 0 ? x + span : x;
}
