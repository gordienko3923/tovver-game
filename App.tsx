import React, { useCallback, useRef, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import theme from './src/constants/theme';
import GameOverScreen from './src/screens/GameOverScreen';
import GameScreen from './src/screens/GameScreen';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import { progressStore } from './src/game/progressStore';
import { getStage } from './src/game/stages';
import { RunResult } from './src/hooks/useBuildGame';

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
  const [screen, setScreen] = useState<Screen>('loader');
  const [run, setRun] = useState<RunSummary>(EMPTY_RUN);
  const gameKey = useRef(0);

  const goMenu = useCallback(() => setScreen('menu'), []);

  const goGame = useCallback(() => {
    gameKey.current += 1;
    setScreen('game');
  }, []);

  const handleGameOver = useCallback(
    (result: RunResult, floors: number, earned: number) => {
      // Snapshot the stage BEFORE the store advances to the next blueprint.
      const stage = getStage(progressStore.read().stageIndex);
      setRun({
        result: result,
        floors: floors,
        earned: earned,
        stageLabel: stage.label,
        stageName: stage.name,
      });
      if (earned > 0) {
        progressStore.addCredits(earned);
      }
      progressStore.recordRun(floors, result === 'complete');
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
      {screen === 'loader' ? <LoaderScreen onDone={goMenu} /> : null}
      {screen === 'menu' ? <MenuScreen onStart={goGame} /> : null}
      {screen === 'game' ? (
        <GameScreen
          key={'game' + gameKey.current}
          onGameOver={handleGameOver}
          onQuit={goMenu}
        />
      ) : null}
      {screen === 'gameover' ? (
        <GameOverScreen
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
    backgroundColor: theme.colors.navy.base,
  },
});
