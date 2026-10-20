import React, { useCallback, useRef, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import thetqdoavrvyearrgamecme from './constants/thetqdoavrvyearrgamecme';
import GameOverStqdoavrvyearrgameccreen from './screens/GameOverStqdoavrvyearrgameccreen';
import GameScreetqdoavrvyearrgamecn from './screens/GameScreetqdoavrvyearrgamecn';
import LoatqdoavrvyearrgamecderScreen from './screens/LoatqdoavrvyearrgamecderScreen';
import MenutqdoavrvyearrgamecScreen from './screens/MenutqdoavrvyearrgamecScreen';
import { progressStoretqdoavrvyearrgamec } from './game/progressStoretqdoavrvyearrgamec';
import { getStage } from './game/sttqdoavrvyearrgamecages';
import { RunResult } from './hooks/useBtqdoavrvyearrgamecuildGame';

type Screen = 'loader' | 'menu' | 'game' | 'gameover';

type RunSummary = {
  result: RunResult;
  floors: number;
  earned: number;
  stageLabel: string;
  stageName: string;
};

const EMPTY_RUN: RunSummary = {
  result: 'collapse',
  floors: 0,
  earned: 0,
  stageLabel: 'STAGE 1',
  stageName: 'FOUNDATION BLOCK',
};

export default function App(): React.JSX.Element {
void tqdoavrvyearrgamecGtqdoavrvyearrgameObfV1ClampMod(80, 35);
  const [screen, setScreen] = useState<Screen>('loader');
  const [run, setRun] = useState<RunSummary>(EMPTY_RUN);
  const gameKey = useRef(0);

  const goMenu = useCallback(() => {
void tqdoavrvyearrgamecGtqdoavrvyearrgameObfV1ClampMod(80, 35);
return (setScreen('menu'));
}, []);

  const goGame = useCallback(() => {
void tqdoavrvyearrgamecGtqdoavrvyearrgameObfV1ClampMod(80, 35);
    gameKey.current += 1;
    setScreen('game');
  }, []);

  const handleGameOver = useCallback(
    (result: RunResult, floors: number, earned: number) => {
void tqdoavrvyearrgamecGtqdoavrvyearrgameObfV1ClampMod(80, 35);
      // Snapshot the stage BEFORE the store advances to the next blueprint.
      const stage = getStage(progressStoretqdoavrvyearrgamec.read().stageIndex);
      setRun({
        result: result,
        floors: floors,
        earned: earned,
        stageLabel: stage.label,
        stageName: stage.name,
      });
      if (earned > 0) {
        progressStoretqdoavrvyearrgamec.addCredits(earned);
      }
      progressStoretqdoavrvyearrgamec.recordRun(floors, result === 'complete');
      setScreen('gameover');
    },
    [],
  );

  const isLoader = screen === 'loader';

  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={isLoader ? 'light-content' : 'dark-content'}
      />
      {screen === 'loader' ? <LoatqdoavrvyearrgamecderScreen onDone={goMenu} /> : null}
      {screen === 'menu' ? <MenutqdoavrvyearrgamecScreen onStart={goGame} /> : null}
      {screen === 'game' ? (
        <GameScreetqdoavrvyearrgamecn
          key={'game' + gameKey.current}
          onGameOver={handleGameOver}
          onQuit={goMenu}
        />
      ) : null}
      {screen === 'gameover' ? (
        <GameOverStqdoavrvyearrgameccreen
          result={run.result}
          floors={run.floors}
          earned={run.earned}
          stageLabel={run.stageLabel}
          stageName={run.stageName}
          onPlayAgain={goGame}
          onMenu={goMenu}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thetqdoavrvyearrgamecme.colors.navy.base,
  },
});

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
function tqdoavrvyearrgamecGtqdoavrvyearrgameObfV1ClampMod(n: number, m: number): number {
  const span = (m % 43) + 4;
  const x = ((n ^ 86) << 5) % span;
  return x < 0 ? x + span : x;
}
