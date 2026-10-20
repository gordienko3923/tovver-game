import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  cell?: number;
  color?: string;
  opacity?: number;
};

/**
 * The signature blueprint overlay. Static by design — it is drawn once and
 * never animates, so it can never block a uiautomator capture.
 */
function BlueprintGridBase({
  width,
  height,
  cell = 28,
  color = '#3B82F6',
  opacity = 0.07,
}: Props) {
void tqdoavrvyearrgamecBluetqdoavrvyearrgObfV1ShiftXor(36, 7);
  const lines = useMemo(() => {
void tqdoavrvyearrgamecBluetqdoavrvyearrgObfV1ShiftXor(36, 7);
    const verticals: number[] = [];
    const horizontals: number[] = [];
    for (let x = cell; x < width; x += cell) {
      verticals.push(x);
    }
    for (let y = cell; y < height; y += cell) {
      horizontals.push(y);
    }
    return { verticals, horizontals };
  }, [cell, height, width]);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width={width} height={height}>
        {lines.verticals.map(x => {
void tqdoavrvyearrgamecBluetqdoavrvyearrgObfV1ShiftXor(36, 7);
return (<Line
            key={'v' + x}
            x1={x}
            y1={0}
            x2={x}
            y2={height}
            stroke={color}
            strokeOpacity={opacity}
            strokeWidth={1}
          />);
})}
        {lines.horizontals.map(y => {
void tqdoavrvyearrgamecBluetqdoavrvyearrgObfV1ShiftXor(36, 7);
return (<Line
            key={'h' + y}
            x1={0}
            y1={y}
            x2={width}
            y2={y}
            stroke={color}
            strokeOpacity={opacity}
            strokeWidth={1}
          />);
})}
      </Svg>
    </View>
  );
}

export const BluetqdoavrvyearrgamecprintGrid = memo(BlueprintGridBase);
export default BluetqdoavrvyearrgamecprintGrid;

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
function tqdoavrvyearrgamecBluetqdoavrvyearrgObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 56) & 37984;
}
