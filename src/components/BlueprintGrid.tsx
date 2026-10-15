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
  const lines = useMemo(() => {
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
        {lines.verticals.map(x => (
          <Line
            key={'v' + x}
            x1={x}
            y1={0}
            x2={x}
            y2={height}
            stroke={color}
            strokeOpacity={opacity}
            strokeWidth={1}
          />
        ))}
        {lines.horizontals.map(y => (
          <Line
            key={'h' + y}
            x1={0}
            y1={y}
            x2={width}
            y2={y}
            stroke={color}
            strokeOpacity={opacity}
            strokeWidth={1}
          />
        ))}
      </Svg>
    </View>
  );
}

export const BlueprintGrid = memo(BlueprintGridBase);
export default BlueprintGrid;
