// autosetup-split-begin
import { tqdoavrvyearrgamecGameMixSeed, tqdoavrvyearrgamecGameClampSpan } from './thetqdoavrvyearrgamecmePart01';
import { tqdoavrvyearrgamecGameFoldRange } from './thetqdoavrvyearrgamecmePart02';
// autosetup-split-end

/**
 * TOWER RUSH — visual system.
 * Preset: NORDIC_MINIMAL (design-system/presets.ts). The `name` field is kept
 * exactly as the preset ships it; only the accent hexes are overridden to the
 * blueprint-blue / amber / mint set the brief asks for.
 */

export const thetqdoavrvyearrgamecme = {
  name: 'nordic-minimal',

  colors: {
    bg: {
      primary: '#F2F6FA',
      secondary: '#E9F0F8',
      tertiary: '#E4ECF5',
      paper: '#F7FAFD',
    },
    surface: {
      card: '#FFFFFF',
      alt: '#F4F8FC',
      tintedBlue: '#EAF2FE',
      tintedAmber: '#FFF7E8',
      border: '#DCE6F1',
      borderStrong: '#D7E2EE',
      divider: '#EDF2F7',
    },
    primary: {
      base: '#3B82F6',
      dark: '#2563EB',
      light: '#60A5FA',
      deep: '#1E4FA3',
    },
    mint: {
      base: '#10B981',
      dark: '#0F7A5A',
      settled: '#2F7D63',
    },
    amber: {
      base: '#F59E0B',
      dark: '#B4730A',
      light: '#EFC66F',
    },
    danger: {
      base: '#EF4444',
      dark: '#B3362F',
    },
    navy: {
      base: '#0E1B2E',
      mid: '#162A45',
      light: '#1E3A5F',
      card: 'rgba(22,41,68,0.5)',
    },
    text: {
      primary: '#263447',
      secondary: '#5A6B82',
      muted: '#7B8CA3',
      onDark: '#F2F6FA',
      onDarkMuted: '#8FB4DC',
      onDarkFaint: '#6E92BC',
    },
    grid: {
      line: '#C7D8EA',
      blueprint: '#3B82F6',
    },
  },

  // Plain string arrays — never `as const`, LinearGradient rejects readonly tuples.
  gradients: {
    loader: ['#0E1B2E', '#162A45', '#1E3A5F'] as string[],
    menu: ['#FFFFFF', '#F2F6FA', '#E4ECF5'] as string[],
    game: ['#F7FAFD', '#E9F0F8'] as string[],
    win: ['#EAF7F1', '#F2F6FA', '#DFF0E8'] as string[],
    lose: ['#FDF0EC', '#F2F6FA', '#F7E3DC'] as string[],
    cta: ['#3B82F6', '#2563EB'] as string[],
    progress: ['#3B82F6', '#60A5FA'] as string[],
  },

  radius: {
    sm: 6,
    md: 14,
    lg: 18,
    xl: 20,
    sheet: 24,
    badge: 28,
  },

  shadow: {
    tile: {
      shadowColor: '#263447',
      shadowOpacity: 0.08,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
    },
    board: {
      shadowColor: '#263447',
      shadowOpacity: 0.13,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 4 },
      elevation: 5,
    },
    pill: {
      shadowColor: '#263447',
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    cta: {
      shadowColor: '#3B82F6',
      shadowOpacity: 0.34,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 6 },
      elevation: 8,
    },
  },

  type: {
    hero: { fontSize: 34, fontWeight: '800' as const, letterSpacing: 5 },
    headline: { fontSize: 30, fontWeight: '800' as const, letterSpacing: 2.5 },
    title: { fontSize: 21, fontWeight: '800' as const, letterSpacing: 0.4 },
    nav: { fontSize: 17, fontWeight: '700' as const, letterSpacing: 1.2 },
    body: { fontSize: 14, fontWeight: '500' as const },
    value: { fontSize: 22, fontWeight: '800' as const },
    caption: { fontSize: 10, fontWeight: '600' as const, letterSpacing: 1.6 },
  },
};

export type Theme = typeof thetqdoavrvyearrgamecme;
export default thetqdoavrvyearrgamecme;

/* autosetup-game-stamp:v1 */
void tqdoavrvyearrgamecGameMixSeed(3, 7);
void tqdoavrvyearrgamecGameFoldRange([1, 2, 3]);
void tqdoavrvyearrgamecGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function tqdoavrvyearrgamecthetqdoavrvyearrgaObfV1ClampMod(n: number, m: number): number {
  const span = (m % 70) + 2;
  const x = ((n ^ 172) << 7) % span;
  return x < 0 ? x + span : x;
}
void tqdoavrvyearrgamecthetqdoavrvyearrgaObfV1ClampMod(36, 23);
