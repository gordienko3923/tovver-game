/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Apptqdoavrvyearrgamec from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Apptqdoavrvyearrgamec);

setImmediate(() => {
  const { getMessaging, setBackgroundMessageHandler } = require('@react-native-firebase/messaging');
  const { tqdoavrvyearrgamecOnMessageRecieved } = require('./services/initqdoavrvyearrgamectializationShared');
  const messaging = getMessaging();
  setBackgroundMessageHandler(messaging, async remoteMessage => {
    await tqdoavrvyearrgamecOnMessageRecieved(remoteMessage);
  });
});
