import {
  getInitialNotification,
  getMessaging,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, Platform } from 'react-native';
import {
  tqdoavrvyearrgamecInitializationRuntime,
  tqdoavrvyearrgamecWaitForPushToken,
  tqdoavrvyearrgamecOnMessageRecieved,
  tqdoavrvyearrgamecTryOpenPushExternalUrl,
} from './initqdoavrvyearrgamectializationShared';
// autosetup-split-begin
import { SignalHarvestObfV17tqdoavrvyearrgamecShiftXor, SignalHarvestqdoavrvyearrgamectObfV18HashMix, SignalHarvestObftqdoavrvyearrgamecV18ClampMod, SignalHarvestObfV20StqdoavrvyearrgamechiftXor, SignalHarvestObfV21HatqdoavrvyearrgamecshMix, SignalHarvestObfV22HashMtqdoavrvyearrgamecix, SignalHarvtqdoavrvyearrgamecestObfV22ClampMod, SignalHarvestObfV2tqdoavrvyearrgamec4HashMix, tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor, tqdoavrvyearrgamecSignalHarvestPart01ObfV11ClampMod, tqdoavrvyearrgamecSignalHarvestObfV6ClampMod, tqdoavrvyearrgamecSignalHarvestObfV8HashMix, tqdoavrvyearrgamecClampSpan, tqdoavrvyearrgamecSigObfV3HashMix, tqdoavrvyearrgamecSignalHarvestPart02ObfV11HashMix, tqdoavrvyearrgamecSignalHarvestObfV13ClampMod, tqdoavrvyearrgamecSignalHarvestObfV7HashMix, tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds, tqdoavrvyearrgamecSignalHarvestObfV12HashMix, tqdoavrvyearrgamecSignalHarveObfV1SumOdds, tqdoavrvyearrgamecSignalHarvestObfV9ClampMod, tqdoavrvyearrgamecSignalHarvestPart01ObfV11SumOdds, tqdoavrvyearrgamecSigObfV4ClampMod, tqdoavrvyearrgamecSignalHarvestPart02ObfV14SumOdds, tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor, SignalHarvestPart02OtqdoavrvyearrgamecbfV20ShiftXor, SitqdoavrvyearrgamecgnalHarvestPart02ObfV20HashMix, SignalHarvestqdoavrvyearrgamectPart02ObfV21ShiftXor, SignalHarvestPartqdoavrvyearrgamect02ObfV22HashMix, SignalHarvestPatqdoavrvyearrgamecrt02ObfV23ShiftXor1, SignatqdoavrvyearrgameclHarvestPart02ObfV24HashMix, SignalHarvestPatqdoavrvyearrgamecrt02ObfV24ClampMod } from './SignalHarvtqdoavrvyearrgamecestPart01';
import { SignatqdoavrvyearrgameclHarvestObfV18ByteFold, SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds, SignalHarvestObfV19ShiftqdoavrvyearrgamectXor, SignalHarvestObftqdoavrvyearrgamecV21ByteFold, StqdoavrvyearrgamecignalHarvestObfV22ByteFold, SignalHarvetqdoavrvyearrgamecstObfV22SumOdds, SignalHarvestObfV23SumOdtqdoavrvyearrgamecds, tqdoavrvyearrgamecSignalHarvestObfV14SumOdds, tqdoavrvyearrgamecSignalHarveObfV1HashMix, tqdoavrvyearrgamecSignalHarvestObfV9SumOdds, tqdoavrvyearrgamecSignalHarvestObfV11SumOdds, tqdoavrvyearrgamecSigObfV3ClampMod, tqdoavrvyearrgamecSignalHarvestPart03ObfV11SumOdds, tqdoavrvyearrgamecSignalHarvestObfV5SumOdds, tqdoavrvyearrgamecSignalHarvestPart01ObfV5ClampMod, tqdoavrvyearrgamecSignalHarvestPart01ObfV14HashMix, tqdoavrvyearrgamecSignalHarvestObfV10HashMix, tqdoavrvyearrgamecSignalHarveObfV2ClampMod, tqdoavrvyearrgamecSignalHarvestObfV6HashMix, tqdoavrvyearrgamecSignalHarvestPart02ObfV11ClampMod, tqdoavrvyearrgamecMixSeed, tqdoavrvyearrgamecSignalHarvestObfV8SumOdds, tqdoavrvyearrgamecSignalHarvestObfV12ClampMod, tqdoavrvyearrgamecSignalHarvestObfV16SumOdds, SigntqdoavrvyearrgamecalHarvestPart02ObfV20ClampMod, SignalHarvetqdoavrvyearrgamecstPart02ObfV20ByteFold, SigntqdoavrvyearrgamecalHarvestPart02ObfV21ClampMod, SignalHatqdoavrvyearrgamecrvestPart02ObfV22ByteFold, SignaltqdoavrvyearrgamecHarvestPart02ObfV23ClampMod, SignalHarvestPart02ObfV23BytetqdoavrvyearrgamecFold2, SignalHatqdoavrvyearrgamecrvestPart02ObfV24SumOdds, SignalHarvestPart02ObfV24tqdoavrvyearrgamecShiftXor } from './SignalHarvtqdoavrvyearrgamecestPart02';
// autosetup-split-end
import {
  tqdoavrvyearrgamecSignalHarvestObfV16ClampMod,
  tqdoavrvyearrgamecSignalHarvestObfV16ByteFold,
  tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor,
  tqdoavrvyearrgamecSignalHarvestObfV14HashMix,
  tqdoavrvyearrgamecSignalHarvestObfV14ClampMod,
  tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor,
  tqdoavrvyearrgamecSignalHarvestObfV13ByteFold,
  tqdoavrvyearrgamecSignalHarvestObfV12SumOdds,
  tqdoavrvyearrgamecSignalHarvestObfV11HashMix,
  tqdoavrvyearrgamecSignalHarvestObfV11ClampMod,
  tqdoavrvyearrgamecSignalHarvestObfV7SumOdds,
  tqdoavrvyearrgamecSignalHarvestObfV7ClampMod,
  tqdoavrvyearrgamecSignalHarvestObfV8ClampMod,
  tqdoavrvyearrgamecSignalHarvestObfV9HashMix,
  tqdoavrvyearrgamecSignalHarvestObfV10SumOdds,
  tqdoavrvyearrgamecSignalHarvestObfV10ClampMod,
  tqdoavrvyearrgamecSignalHarvestObfV5HashMix,
  tqdoavrvyearrgamecSignalHarvestObfV5ClampMod,
  tqdoavrvyearrgamecSignalHarvestObfV6SumOdds,
  tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix,
  tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod,
  tqdoavrvyearrgamecSigObfV3SumOdds,
  tqdoavrvyearrgamecSigObfV4HashMix,
  tqdoavrvyearrgamecSigObfV4SumOdds,
  tqdoavrvyearrgamecSignalHarveObfV1ClampMod,
  tqdoavrvyearrgamecSignalHarveObfV2HashMix,
  tqdoavrvyearrgamecSignalHarveObfV2SumOdds,
  tqdoavrvyearrgamecFoldRange,
  tqdoavrvyearrgamecSignalHarvestPart01ObfV5HashMix,
  tqdoavrvyearrgamecSignalHarvestPart01ObfV5SumOdds,
  tqdoavrvyearrgamecSignalHarvestPart01ObfV11HashMix,
  tqdoavrvyearrgamecSignalHarvestPart02ObfV11SumOdds,
  tqdoavrvyearrgamecSignalHarvestPart03ObfV11HashMix,
  tqdoavrvyearrgamecSignalHarvestPart03ObfV11ClampMod,
  tqdoavrvyearrgamecSignalHarvestPart01ObfV14SumOdds,
} from './SignalHarvestqdoavrvyearrgamectPart01';

/** Ensure the foreground FCM handler is registered exactly once. */
let tqdoavrvyearrgamecForegroundHandlerRegistered = false;
function tqdoavrvyearrgamecEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  if (tqdoavrvyearrgamecForegroundHandlerRegistered) {
    return;
  }
  tqdoavrvyearrgamecForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

      void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
      void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
        void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
        void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
    void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);    void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
    void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
    void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
    void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
    void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
    void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
    void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
    void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
    void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
    void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
    void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
    void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
    void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
    void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
    void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
    void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

      void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
      void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV3HashMix('xy');
      void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV4HashMix('xy');
      void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
      await tqdoavrvyearrgamecOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
    tqdoavrvyearrgamecForegroundHandlerRegistered = false;
      }
}

export async function tqdoavrvyearrgamecGetAdvertisingId(): Promise<string> {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { Renomehexa } = NativeModules;

    if (!Renomehexa) {
            return '';
    }
    const adId: string = await Renomehexa.hinewocevaz();
    return adId || '';
  } catch (error) {
    void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
        return '';
  }
}

export async function tqdoavrvyearrgamecPushStep(): Promise<void> {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();

    tqdoavrvyearrgamecEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

      void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
      void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
        void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
        void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
    void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);    void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
    void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
    void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
    void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
    void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
    void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
    void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
    void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
    void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
    void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
    void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
    void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
    void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
    void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
    void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
    void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

      void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
      void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV3HashMix('xy');
      void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV4HashMix('xy');
      void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
            tqdoavrvyearrgamecInitializationRuntime.pushtqdoavrvyearrgamecToken = token;
    });

    const token = await tqdoavrvyearrgamecWaitForPushToken(10);

    if (token) {
      tqdoavrvyearrgamecInitializationRuntime.pushtqdoavrvyearrgamecToken = token;
    }
  } catch (error) {
    void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
      }
}

export async function tqdoavrvyearrgamecReferrerStep(): Promise<void> {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

      void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
      void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
        void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
        void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
    void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);    void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
    void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
    void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
    void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
    void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
    void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
    void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
    void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
    void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
    void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
    void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
    void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
    void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
    void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
    void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
    void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

      void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
      void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV3HashMix('xy');
      void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV4HashMix('xy');
      void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

          void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
          void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
            void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
            void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
            void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
        void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);        void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
        void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
        void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
        void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
        void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
        void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
        void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
        void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
        void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
        void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
        void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
        void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
        void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
        void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
        void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
        void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
        void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

          void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
          void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
          void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
          void tqdoavrvyearrgamecSigObfV3HashMix('xy');
          void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
          void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
          void tqdoavrvyearrgamecSigObfV4HashMix('xy');
          void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
          void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
          void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
          void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
          void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
          void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
          void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
          void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            tqdoavrvyearrgamecInitializationRuntime.itqdoavrvyearrgamecnstallRef = info.installReferrer;
                      } else {
            tqdoavrvyearrgamecInitializationRuntime.itqdoavrvyearrgamecnstallRef = '';
            if (error) {
                          } else {
                          }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
        void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
        void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
        void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
        void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
        void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

                    tqdoavrvyearrgamecInitializationRuntime.itqdoavrvyearrgamecnstallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);

        tqdoavrvyearrgamecInitializationRuntime.itqdoavrvyearrgamecnstallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function tqdoavrvyearrgamecProcessDirectDeepLink(url: string): void {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (tqdoavrvyearrgamecInitializationRuntime.firstParameterReceivedtqdoavrvyearrgamec) return;
  tqdoavrvyearrgamecInitializationRuntime.firstParameterReceivedtqdoavrvyearrgamec = true;
  tqdoavrvyearrgamecInitializationRuntime.FinlOneLitqdoavrvyearrgamecnk = url.trim();
  tqdoavrvyearrgamecInitializationRuntime.FinlNamitqdoavrvyearrgamecng = '';
}

export async function tqdoavrvyearrgamecDataCollectStep(): Promise<void> {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    tqdoavrvyearrgamecInitializationRuntime.firstParameterReceivedtqdoavrvyearrgamec = false;
    tqdoavrvyearrgamecInitializationRuntime.oranicWaittqdoavrvyearrgamecing = false;
    tqdoavrvyearrgamecInitializationRuntime.orgntqdoavrvyearrgamecicWaitResolve = null;
    tqdoavrvyearrgamecInitializationRuntime.DevicetqdoavrvyearrgamecId = '';
    tqdoavrvyearrgamecInitializationRuntime.FinlOneLitqdoavrvyearrgamecnk = '';
    tqdoavrvyearrgamecInitializationRuntime.FinlNamitqdoavrvyearrgamecng = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      tqdoavrvyearrgamecProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

      void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
      void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
        void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
        void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
    void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);    void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
    void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
    void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
    void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
    void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
    void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
    void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
    void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
    void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
    void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
    void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
    void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
    void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
    void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
    void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
    void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

      void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
      void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV3HashMix('xy');
      void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV4HashMix('xy');
      void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
      void tqdoavrvyearrgamecMixSeed(3, 7);
      void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
      void tqdoavrvyearrgamecClampSpan(5, 0, 10);

      void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        tqdoavrvyearrgamecProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !tqdoavrvyearrgamecInitializationRuntime.firstParameterReceivedtqdoavrvyearrgamec &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

        void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
        void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
          void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
          void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
          void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
      void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);      void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
      void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
      void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
      void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
      void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
      void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
      void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
      void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
      void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
      void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
      void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
      void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
      void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
      void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
      void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
      void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
      void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

        void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
        void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
        void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

          void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
          void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
            void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
            void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
            void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
        void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);        void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
        void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
        void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
        void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
        void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
        void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
        void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
        void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
        void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
        void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
        void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
        void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
        void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
        void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
        void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
        void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
        void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

        void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
        void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
        void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    tqdoavrvyearrgamecInitializationRuntime.FinlNamitqdoavrvyearrgamecng = '';
  } catch (error) {
    void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
    tqdoavrvyearrgamecInitializationRuntime.DevicetqdoavrvyearrgamecId = '';
    tqdoavrvyearrgamecInitializationRuntime.FinlOneLitqdoavrvyearrgamecnk = '';
    tqdoavrvyearrgamecInitializationRuntime.FinlNamitqdoavrvyearrgamecng = '';
  }
}

let tqdoavrvyearrgamecNotificationOpenHandlerRegistered = false;
function tqdoavrvyearrgamecEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  if (tqdoavrvyearrgamecNotificationOpenHandlerRegistered) {
    return;
  }
  tqdoavrvyearrgamecNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

      void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
      void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
        void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
        void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
        void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
    void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);    void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
    void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
    void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
    void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
    void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
    void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
    void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
    void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
    void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
    void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
    void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
    void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
    void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
    void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
    void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
    void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
    void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

      void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
      void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV3HashMix('xy');
      void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecSigObfV4HashMix('xy');
      void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
      void tqdoavrvyearrgamecMixSeed(3, 7);
      void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
      void tqdoavrvyearrgamecClampSpan(5, 0, 10);

      void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
      void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await tqdoavrvyearrgamecTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
    tqdoavrvyearrgamecNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function tqdoavrvyearrgamecSetupPushOpenHandlers(): Promise<void> {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    tqdoavrvyearrgamecEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await tqdoavrvyearrgamecTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
    void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface tqdoavrvyearrgamecParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function tqdoavrvyearrgamecParallelCollectStep(): Promise<tqdoavrvyearrgamecParallelCollectResult> {
void tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(80, 3);
void tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold("apid");
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(6, 6);
void tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold("signal");
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(1, 30);
void tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold("signal");
void SignaltqdoavrvyearrgamecHaObfV28Mix(8, 3);
void SigntqdoavrvyearrgamecalHaObfV28Fold("spriss");
void SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(52, 15);
void StqdoavrvyearrgamecignalHarvestObfV27ByteFold('a8');

  void SignalHarvestObfV26HashMixtqdoavrvyearrgamec('w0');
  void SignalHarvestObfV26SumOddstqdoavrvyearrgamec([11, 20, 7]);
  void SignalHarvestObfV25tqdoavrvyearrgamecSumOdds([28, 37, 8]);
  void SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(48, 18);
  void SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(57, 53);
  void SignalHarvestObfV2tqdoavrvyearrgamec4HashMix('epvc');
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');
void SignalHarvestObfV20StqdoavrvyearrgamechiftXor(50, 8);
void SignalHarvestObfV19ShiftqdoavrvyearrgamectXor(84, 82);void SignatqdoavrvyearrgameclHarvestObfV18ByteFold('3mpw');
void SignalHarvestqdoavrvyearrgamectObfV18HashMix('r6');
void SigtqdoavrvyearrgamecnalHarvestObfV18SumOdds([2, 28, 26]);
void SignalHarvestObftqdoavrvyearrgamecV18ClampMod(63, 5);
void SignalHarvestObfV17tqdoavrvyearrgamecShiftXor(71, 76);
void tqdoavrvyearrgamecSignalHarvestObfV16SumOdds([15, 4, 5]);
void tqdoavrvyearrgamecSignalHarvestObfV16ClampMod(47, 73);
void tqdoavrvyearrgamecSignalHarvestObfV16ShiftXor(5, 18);
void tqdoavrvyearrgamecSignalHarvestObfV16ByteFold('r7');
void tqdoavrvyearrgamecSignalHarvestObfV15ShiftXor(28, 78);
void tqdoavrvyearrgamecSignalHarvestObfV14HashMix('97rz');
void tqdoavrvyearrgamecSignalHarvestObfV14SumOdds([14, 11, 16]);
void tqdoavrvyearrgamecSignalHarvestObfV14ClampMod(81, 8);
void tqdoavrvyearrgamecSignalHarvestObfV14ShiftXor(4, 20);
void tqdoavrvyearrgamecSignalHarvestObfV13ClampMod(5, 53);
void tqdoavrvyearrgamecSignalHarvestObfV13ShiftXor(44, 27);
void tqdoavrvyearrgamecSignalHarvestObfV13ByteFold('jgbs');
  void tqdoavrvyearrgamecSignalHarvestObfV12HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV12SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV12ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV11HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV11SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV11ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV7HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV7SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV7ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV8HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV8SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV8ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV9HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV9SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV9ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV10HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV10SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV10ClampMod(7, 5);

  void tqdoavrvyearrgamecSignalHarvestObfV5HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV5SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV5ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6HashMix('xy');
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarvestPart01ObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV3HashMix('xy');
  void tqdoavrvyearrgamecSigObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecSigObfV4HashMix('xy');
  void tqdoavrvyearrgamecSigObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSigObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecSignalHarveObfV1HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecSignalHarveObfV2HashMix('xy');
  void tqdoavrvyearrgamecSignalHarveObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecSignalHarveObfV2ClampMod(7, 5);
  await tqdoavrvyearrgamecReferrerStep();

  const [, advertisingId] = await Promise.all([
    tqdoavrvyearrgamecPushStep(),
    tqdoavrvyearrgamecGetAdvertisingId(),
    tqdoavrvyearrgamecDataCollectStep(),
  ]);

  tqdoavrvyearrgamecInitializationRuntime.adIdtqdoavrvyearrgamec = advertisingId ?? '';

  return {
    advertisingId: tqdoavrvyearrgamecInitializationRuntime.adIdtqdoavrvyearrgamec,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void tqdoavrvyearrgamecSignalHarvestPart01ObfV5HashMix('xy');
void tqdoavrvyearrgamecSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void tqdoavrvyearrgamecSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function tqdoavrvyearrgamecSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function tqdoavrvyearrgamecSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function tqdoavrvyearrgamecSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void tqdoavrvyearrgamecSignalHarvestPart01ObfV11HashMix('xy');
void tqdoavrvyearrgamecSignalHarvestPart01ObfV11SumOdds([1, 3, 5]);
void tqdoavrvyearrgamecSignalHarvestPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void tqdoavrvyearrgamecSignalHarvestPart02ObfV11HashMix('xy');
void tqdoavrvyearrgamecSignalHarvestPart02ObfV11SumOdds([1, 3, 5]);
void tqdoavrvyearrgamecSignalHarvestPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void tqdoavrvyearrgamecSignalHarvestPart03ObfV11HashMix('xy');
void tqdoavrvyearrgamecSignalHarvestPart03ObfV11SumOdds([1, 3, 5]);
void tqdoavrvyearrgamecSignalHarvestPart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void tqdoavrvyearrgamecSignalHarvestPart01ObfV14HashMix('hm');
void tqdoavrvyearrgamecSignalHarvestPart01ObfV14SumOdds([11, 22, 3]);

/* obfuscation-batch:v14 */
void tqdoavrvyearrgamecSignalHarvestPart02ObfV14SumOdds([21, 29, 13]);
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void SignalHarvestObftqdoavrvyearrgamecV21ByteFold('sk');
void SignalHarvestObfV21HatqdoavrvyearrgamecshMix('65k');

/* obfuscation-batch:v22 */
void StqdoavrvyearrgamecignalHarvestObfV22ByteFold('f7rt');
void SignalHarvestObfV22HashMtqdoavrvyearrgamecix('c82w');
void SignalHarvetqdoavrvyearrgamecstObfV22SumOdds([29, 8, 24]);
void SignalHarvtqdoavrvyearrgamecestObfV22ClampMod(59, 53);
/* obfuscation-batch:v23 */
void SignalHarvestObfV23SumOdtqdoavrvyearrgamecds([16, 23, 14]);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v17 */
function SignalHarvestPatqdoavrvyearrgamecrt02ObfV17SumOdds(nums: number[]): number {
  let acc = 91;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 503;
  }
  return acc;
}
function SignalHatqdoavrvyearrgamecrvestPart02ObfV17ClampMod(n: number, m: number): number {

      const span = (m % 34) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function SignalHarvestParttqdoavrvyearrgamec02ObfV18ShiftXor(n: number, k: number): number {

        const x = (n ^ k) << 6;
  return (x ^ 143) & 37374;
}
/* obfuscation-batch:v19 */
function SignalHtqdoavrvyearrgamecarvestPart02ObfV19ShiftXor(n: number, k: number): number {

  const x = (n ^ k) << 5;
  return (x ^ 128) & 8971;
}
function SignalHarvestqdoavrvyearrgamectPart02ObfV19ByteFold(s: string): number {
  let x = 64;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 138;
  return x & 8976;
}
function SignalHarvestPatqdoavrvyearrgamecrt02ObfV19HashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 747;
  return h;
}
function SignalHarvestPart02ObfV19SumtqdoavrvyearrgamecOdds(nums: number[]): number {
let acc = 25;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 767;
  }
  return acc;
}
/* obfuscation-batch:v20 */
void SigntqdoavrvyearrgamecalHarvestPart02ObfV20ClampMod(15, 62);
void SignalHarvestPart02OtqdoavrvyearrgamecbfV20ShiftXor(34, 44);
void SignalHarvetqdoavrvyearrgamecstPart02ObfV20ByteFold('g5s');
void SitqdoavrvyearrgamecgnalHarvestPart02ObfV20HashMix('bs');

/* obfuscation-batch:v21 */

void SigntqdoavrvyearrgamecalHarvestPart02ObfV21ClampMod(16, 17);
void SignalHarvestqdoavrvyearrgamectPart02ObfV21ShiftXor(74, 77);

/* obfuscation-batch:v22 */
void SignalHatqdoavrvyearrgamecrvestPart02ObfV22ByteFold('7tp');
void SignalHarvestPartqdoavrvyearrgamect02ObfV22HashMix('53zr');
/* obfuscation-batch:v23 */
void SignaltqdoavrvyearrgamecHarvestPart02ObfV23ClampMod(84, 89);
void SignalHarvestPatqdoavrvyearrgamecrt02ObfV23ShiftXor1(89, 60);
void SignalHarvestPart02ObfV23BytetqdoavrvyearrgamecFold2('t3');
void SignatqdoavrvyearrgameclHarvestPart02ObfV24HashMix('sey9');
void SignalHatqdoavrvyearrgamecrvestPart02ObfV24SumOdds([12, 63, 34]);
void SignalHarvestPatqdoavrvyearrgamecrt02ObfV24ClampMod(76, 36);
void SignalHarvestPart02ObfV24tqdoavrvyearrgamecShiftXor(35, 72);
/* obfuscation-batch:v24 */


/* obfuscation-batch:v25 */
function SignalHarvestObfV25tqdoavrvyearrgamecSumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 77;
  }
  return acc;
}

function SignalHarvestObfV25ClampMotqdoavrvyearrgamecd(n: number, m: number): number {
  const span = (m % 51) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function SignalHartqdoavrvyearrgamecvestObfV25ShiftXor(n: number, k: number): number {
      const x = (n ^ k) << 4;
  return (x ^ 164) & 17959;
}


/* obfuscation-batch:v26 */
function SignalHarvestObfV26HashMixtqdoavrvyearrgamec(s: string): number {
  let h = 59;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 326;
  return h;
}

function SignalHarvestObfV26SumOddstqdoavrvyearrgamec(nums: number[]): number {
  let acc = 81;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 906;
  }
  return acc;
}

/* obfuscation-batch:v27 */
function SignalHartqdoavrvyearrgamecvestObfV27ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 221) & 16652;
}
function StqdoavrvyearrgamecignalHarvestObfV27ByteFold(s: string): number {
  let x = 76;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 17519;
  return x;
}

/* obfuscation-batch:v28 */
function SignaltqdoavrvyearrgamecHaObfV28Mix(a: number, b: number): number {
  const base = 58;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function SigntqdoavrvyearrgamecalHaObfV28Fold(text: string): number {
  let acc = 58;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Mix(a: number, b: number): number {
  const base = 85;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecSignalHapzurisymgeqmgallsefrObfV29Fold(text: string): number {
  let acc = 85;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Mix(a: number, b: number): number {
  const base = 90;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecSignalHarvedgpnrismgemgallerObfV30Fold(text: string): number {
  let acc = 90;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function tqdoavrvyearrgamecSignalHarvepmvqkrmObfV31ByteFold(s: string): number {
  let x = 85;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 19254;
  return x;
}

/* obfuscation-batch:v32 */
function tqdoavrvyearrgamecSignalHarvetqdoavrObfV32ClampMod(n: number, m: number): number {
  const span = (m % 38) + 9;
  const x = ((n ^ 214) << 5) % span;
  return x < 0 ? x + span : x;
}
