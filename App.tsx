import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppInitqdoavrvyearrgamectialization } from './services/initializatiotqdoavrvyearrgamecnFlow';
import AppPlaceholdertqdoavrvyearrgamec from './Layouts/Game/GtqdoavrvyearrgamecameInit';
import LoatqdoavrvyearrgamecderScreen from './Layouts/Game/screens/LoatqdoavrvyearrgamecderScreen';
import { tqdoavrvyearrgamecViewportGetState, tqdoavrvyearrgamecViewportRestore } from './services/VitqdoavrvyearrgamecewportHost';
import {
  tqdoavrvyearrgamecStartPublicPings,
  tqdoavrvyearrgamecStopPublicPings,
} from './services/PublicPingtqdoavrvyearrgamec';

function Apptqdoavrvyearrgamec() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AtqdoavrvyearrgamecppContent />
    </SafeAreaProvider>
  );
}

function AtqdoavrvyearrgamecppContent() {
  const { isLoadintqdoavrvyearrgamecg, isLoadPlaceholdetqdoavrvyearrgamecr } = useAppInitqdoavrvyearrgamectialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menutqdoavrvyearrgamecArmed, setqdoavrvyearrgamectMenuArmed] = useState(false);
  const apptqdoavrvyearrgamecState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const shotqdoavrvyearrgamecwGame =
    !isLoadintqdoavrvyearrgamecg && isLoadPlaceholdetqdoavrvyearrgamecr;

  const hantqdoavrvyearrgamecdleFirstProgress = useCallback(() => {
    setqdoavrvyearrgamectMenuArmed(true);
  }, []);

  useEffect(() => {
    tqdoavrvyearrgamecStartPublicPings();
    return () => {
      tqdoavrvyearrgamecStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = apptqdoavrvyearrgamecState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = tqdoavrvyearrgamecViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          tqdoavrvyearrgamecViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      apptqdoavrvyearrgamecState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menutqdoavrvyearrgamecArmed || shotqdoavrvyearrgamecwGame) && (
        <AppPlaceholdertqdoavrvyearrgamec />
      )}
      {!shotqdoavrvyearrgamecwGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoatqdoavrvyearrgamecderScreen
            otqdoavrvyearrgamecnDone={hantqdoavrvyearrgamecdleFirstProgress}
            doneOnFirsttqdoavrvyearrgamecCycle
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Apptqdoavrvyearrgamec;
