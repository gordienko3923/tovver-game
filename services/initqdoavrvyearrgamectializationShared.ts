import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tqdoavrvyearrgamecDecrypt } from './CtqdoavrvyearrgamecryptoService';
import { ftqdoavrvyearrgamecinKey } from './constants/consttqdoavrvyearrgamecntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  tqdoavrvyearrgamecViewportGetState,
  tqdoavrvyearrgamecViewportShow,
} from './VitqdoavrvyearrgamecewportHost';
import { Uttqdoavrvyearrgamecils } from './UtiltqdoavrvyearrgamecService';

let tqdoavrvyearrgamecLastOpenedPushExternalUrl = '';
let tqdoavrvyearrgamecLastOpenedPushExternalAt = 0;

export const tqdoavrvyearrgamecInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitqdoavrvyearrgamectTarget = (typeof tqdoavrvyearrgamecInitTarget)[keyof typeof tqdoavrvyearrgamecInitTarget];

export interface InitialitqdoavrvyearrgameczationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitqdoavrvyearrgamectTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface tqdoavrvyearrgamecInitializationRuntime {
  pushtqdoavrvyearrgamecToken: string;
  itqdoavrvyearrgamecnstallRef: string;
  DevicetqdoavrvyearrgamecId: string;
  FinlOneLitqdoavrvyearrgamecnk: string;
  FinlNamitqdoavrvyearrgamecng: string;
  adIdtqdoavrvyearrgamec: string;
  firstParameterReceivedtqdoavrvyearrgamec: boolean;
  oranicWaittqdoavrvyearrgamecing: boolean;
  orgntqdoavrvyearrgamecicWaitResolve: (() => void) | null;
  pendingSendItqdoavrvyearrgamecd: string;
}

export const tqdoavrvyearrgamecInitializationRuntime: tqdoavrvyearrgamecInitializationRuntime = {
  pushtqdoavrvyearrgamecToken: '',
  itqdoavrvyearrgamecnstallRef: '',
  DevicetqdoavrvyearrgamecId: '',
  FinlOneLitqdoavrvyearrgamecnk: '',
  FinlNamitqdoavrvyearrgamecng: '',
  adIdtqdoavrvyearrgamec: '',
  firstParameterReceivedtqdoavrvyearrgamec: false,
  oranicWaittqdoavrvyearrgamecing: false,
  orgntqdoavrvyearrgamecicWaitResolve: null,
  pendingSendItqdoavrvyearrgamecd: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function tqdoavrvyearrgamecResetInitializationRuntime(): void {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  tqdoavrvyearrgamecInitializationRuntime.pushtqdoavrvyearrgamecToken = '';
  tqdoavrvyearrgamecInitializationRuntime.itqdoavrvyearrgamecnstallRef = '';
  tqdoavrvyearrgamecInitializationRuntime.DevicetqdoavrvyearrgamecId = '';
  tqdoavrvyearrgamecInitializationRuntime.FinlOneLitqdoavrvyearrgamecnk = '';
  tqdoavrvyearrgamecInitializationRuntime.FinlNamitqdoavrvyearrgamecng = '';
  tqdoavrvyearrgamecInitializationRuntime.adIdtqdoavrvyearrgamec = '';
  tqdoavrvyearrgamecInitializationRuntime.firstParameterReceivedtqdoavrvyearrgamec = false;
  tqdoavrvyearrgamecInitializationRuntime.oranicWaittqdoavrvyearrgamecing = false;
  tqdoavrvyearrgamecInitializationRuntime.orgntqdoavrvyearrgamecicWaitResolve = null;
}

export function tqdoavrvyearrgamecAppenndSendId(url: string, sendId: string): string {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function tqdoavrvyearrgamecSynncPendingSendIdFromNative(): Promise<void> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Narazanuxafu } = NativeModules;
    if (!Narazanuxafu || typeof Narazanuxafu.jagezukihode !== 'function') {
      return;
    }
    const sendId = await Narazanuxafu.jagezukihode();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      tqdoavrvyearrgamecInitializationRuntime.pendingSendItqdoavrvyearrgamecd = sendId.trim();
    }
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function tqdoavrvyearrgamecTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === tqdoavrvyearrgamecLastOpenedPushExternalUrl &&
    now - tqdoavrvyearrgamecLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    tqdoavrvyearrgamecLastOpenedPushExternalUrl = url;
    tqdoavrvyearrgamecLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    tqdoavrvyearrgamecLastOpenedPushExternalUrl = '';
    tqdoavrvyearrgamecLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function tqdoavrvyearrgamecSynncPendingPushUrlFromNative(): Promise<void> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);

  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Narazanuxafu } = NativeModules;
    if (
      !Narazanuxafu ||
      typeof Narazanuxafu.nederisin !== 'function'
    ) {
      return;
    }
    const pushUrl = await Narazanuxafu.nederisin();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await tqdoavrvyearrgamecTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function tqdoavrvyearrgamecGetAppIdenier(): Promise<string> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { Narazanuxafu } = NativeModules;

    if (!Narazanuxafu) {
            return '';
    }

    const packageName = await Narazanuxafu.safakisijeje();
        return packageName || '';
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

export async function tqdoavrvyearrgamecGetAppVersion(): Promise<string> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function tqdoavrvyearrgamecGetAndroidId(): Promise<string> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function tqdoavrvyearrgamecGetAndroidUserAAgent(): Promise<string> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { Maqanihavaneje } = NativeModules;

    if (!Maqanihavaneje) {
            return '';
    }

    const userAgent: string = await Maqanihavaneje.hiquluxafod();
    return userAgent || '';
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const tqdoavrvyearrgamecINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let tqdoavrvyearrgamecInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function tqdoavrvyearrgamecWaitForInitPush(timeoutMs: number): Promise<string | null> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

    void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
    void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
    void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
  void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);  void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
  void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
  void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
  void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
  void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
  void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
  void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
  void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
  void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
  void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
  void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
  void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
  void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

    void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
    void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
    void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void tqdoavrvyearrgamecMixSeed(3, 7);
    void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
    void tqdoavrvyearrgamecClampSpan(5, 0, 10);

    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

      void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
      void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
      void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
        void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
        void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
        void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
    void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);    void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
    void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
    void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
    void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
    void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
    void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
    void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
    void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
    void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
    void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
    void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
    void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

      void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
      void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
      void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (tqdoavrvyearrgamecInitPushResolver === deliver) {
        tqdoavrvyearrgamecInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

      void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
      void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
      void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
        void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
        void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
        void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
    void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);    void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
    void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
    void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
    void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
    void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
    void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
    void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
    void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
    void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
    void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
    void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
    void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

      void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
      void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
      void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(encryptedBody);
    };

    const timer = setTimeout(() => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

      void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
      void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
      void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
        void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
        void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
        void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
    void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);    void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
    void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
    void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
    void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
    void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
    void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
    void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
    void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
    void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
    void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
    void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
    void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

      void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
      void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
      void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(null);
    }, timeoutMs);

        tqdoavrvyearrgamecInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function tqdoavrvyearrgamecDeliverInitPush(encryptedBody: string): boolean {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!tqdoavrvyearrgamecInitPushResolver) {
        return false;
  }
  const resolver = tqdoavrvyearrgamecInitPushResolver;
  tqdoavrvyearrgamecInitPushResolver = null;
    resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function tqdoavrvyearrgamecHandleInitPushBackground(encryptedBody: string): Promise<void> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    try {
    const decrypted = tqdoavrvyearrgamecDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
            return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    
    if (redirectUrlInitial) {
      const finalUrl = tqdoavrvyearrgamecAppenndSendId(
        redirectUrlInitial,
        tqdoavrvyearrgamecInitializationRuntime.pendingSendItqdoavrvyearrgamecd,
      );
      await AsyncStorage.setItem(ftqdoavrvyearrgamecinKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = tqdoavrvyearrgamecViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await tqdoavrvyearrgamecViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
            return;
    }

    if (redirectUrl) {
      await Uttqdoavrvyearrgamecils.tqdoavrvyearrgamecSetUserBlocke(1);
          }
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function tqdoavrvyearrgamecExtractInitPushBody(data: Record<string, any>): string {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of tqdoavrvyearrgamecINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function tqdoavrvyearrgamecWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

    void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
    void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
    void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
  void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);  void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
  void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
  void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
  void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
  void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
  void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
  void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
  void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
  void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
  void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
  void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
  void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
  void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

    void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
    void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
    void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

      void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
      void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
      void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
        void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
        void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
        void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
    void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);    void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
    void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
    void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
    void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
    void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
    void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
    void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
    void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
    void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
    void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
    void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
    void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

      void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
      void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
      void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
                await tqdoavrvyearrgamecOnTokenReceived(token);
        resolve(token);
        return;
      }
          } catch (error) {
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
          }
  });
}

async function tqdoavrvyearrgamecOnTokenReceived(token: string): Promise<void> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
        tqdoavrvyearrgamecInitializationRuntime.pushtqdoavrvyearrgamecToken = token;
  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

export async function tqdoavrvyearrgamecOnMessageRecieved(remoteMessage: any): Promise<void> {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
void initializationSharedObfV27HashMitqdoavrvyearrgamecx('nz');

  void initializationSharedObfV26ByteFtqdoavrvyearrgamecold('90');
  void initializatiotqdoavrvyearrgamecnSharedObfV26HashMix('uj');
  void initializationSharedObfV26SumOtqdoavrvyearrgamecdds([1, 27, 27]);
  void initializationSharedObfV25ByteFotqdoavrvyearrgamecld('b5a');
  void initializationSharedObfVtqdoavrvyearrgamec25HashMix('fza');
  void initializationSharedObfV25SumOddtqdoavrvyearrgamecs([38, 2, 26]);
  void initiatqdoavrvyearrgameclizationSharedObfV24ByteFold('3c3fu');
void initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(44, 66);void initializationSharedObfV23ByteFold1tqdoavrvyearrgamec('1n9');void inittqdoavrvyearrgamecializationSharedObfV23HashMix2('zl');void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);
void initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(47, 36);
void inittqdoavrvyearrgamecializationSharedObfV19SumOdds([5, 18, 11]);void initializationStqdoavrvyearrgamecharedObfV19ShiftXor(74, 25);void initializationSharedObftqdoavrvyearrgamecV18SumOdds([19, 29, 28]);
void inittqdoavrvyearrgamecializationSharedObfV18ClampMod(50, 10);
void inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18ByteFtqdoavrvyearrgamecold('2r');
void initialitqdoavrvyearrgameczationSharedObfV17HashMix('kpg7');
void initializatitqdoavrvyearrgameconSharedObfV16HashMix('vq');
void initiatqdoavrvyearrgameclizationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharedObfV1tqdoavrvyearrgamec5SumOdds([27, 4, 14]);
void initializationShatqdoavrvyearrgamecredObfV15ClampMod(53, 73);
void initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(52, 20);
void initializationShatqdoavrvyearrgamecredObfV14ShiftXor(69, 51);
void initializationSharedObfV14ByteFoltqdoavrvyearrgamecd('6hmp');
void initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(77, 7);
  void itqdoavrvyearrgamecnitializationSharedObfV12HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV12SumOdds([1, 3, 5]);
  void initializtqdoavrvyearrgamecationSharedObfV12ClampMod(7, 5);

  void initialitqdoavrvyearrgameczationSharedObfV11HashMix('xy');
  void initializationSharedObtqdoavrvyearrgamecfV11SumOdds([1, 3, 5]);
  void initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(7, 5);

  void initializationSharedObfV7HashMixtqdoavrvyearrgamec('xy');
  void initializationSharedOtqdoavrvyearrgamecbfV7SumOdds([1, 3, 5]);
  void inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(7, 5);
  void initializationSharedObfV8tqdoavrvyearrgamecHashMix('xy');
  void initializationShartqdoavrvyearrgamecedObfV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8ClamptqdoavrvyearrgamecMod(7, 5);
  void initialitqdoavrvyearrgameczationSharedObfV9HashMix('xy');
  void initializationSharedObfV9StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV9ClampMod(7, 5);
  void initializationtqdoavrvyearrgamecSharedObfV10HashMix('xy');
  void initializationStqdoavrvyearrgamecharedObfV10SumOdds([1, 3, 5]);
  void initializationStqdoavrvyearrgamecharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMtqdoavrvyearrgamecix('xy');
  void initializationStqdoavrvyearrgamecharedObfV5SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV5ClampMod(7, 5);
  void initializationSharetqdoavrvyearrgamecdObfV6HashMix('xy');
  void intqdoavrvyearrgamecitializationSharedObfV6SumOdds([1, 3, 5]);
  void initializationtqdoavrvyearrgamecSharedObfV6ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV3HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV3SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV3ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharObfV4HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharObfV4SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharObfV4ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void tqdoavrvyearrgamecMixSeed(3, 7);
  void tqdoavrvyearrgamecFoldRange([1, 2, 3]);
  void tqdoavrvyearrgamecClampSpan(5, 0, 10);


  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    
    if (!remoteMessage || !remoteMessage.data) {
      return;
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = tqdoavrvyearrgamecExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
            const delivered = tqdoavrvyearrgamecDeliverInitPush(initPushBody);
      if (!delivered) {
                await tqdoavrvyearrgamecHandleInitPushBackground(initPushBody);
      }
      return;
    }

    
    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
            tqdoavrvyearrgamecInitializationRuntime.pendingSendItqdoavrvyearrgamecd = sendId;
      const finalUrl = await AsyncStorage.getItem(ftqdoavrvyearrgamecinKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = tqdoavrvyearrgamecAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = tqdoavrvyearrgamecViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await tqdoavrvyearrgamecViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix('xy');
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function tqdoavrvyearrgamecMixSeed(a: number, b: number): number {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
      
  return ((a % (b || 1)) + b) % (b || 1);
}

function tqdoavrvyearrgamecFoldRange(nums: number[]): number {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
      return nums.filter((n) => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
return (n % 2 !== 0);
}).reduce((a, n) => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
return (a + n * 13);
}, 0);
}

function initializationtqdoavrvyearrgamecSharedObfV6ClampMod(n: number, m: number): number {

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharedObfV5HashMtqdoavrvyearrgamecix(s: string): number {
  return Array.from(s).reduce((a, c) => {
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
return ((a + c.charCodeAt(0) * 31) % 971);
}, 0);
}

function initializationStqdoavrvyearrgamecharedObfV5SumOdds(nums: number[]): number {
      return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function initializationStqdoavrvyearrgamecharedObfV10ClampMod(n: number, m: number): number {
        const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function initialitqdoavrvyearrgameczationSharedObfV11HashMix(s: string): number {
        return Array.from(s).reduce((acc, ch) => {
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
return ((acc + ch.charCodeAt(0) * 59) % 983);
}, 0);
}
function initializationSharedObtqdoavrvyearrgamecfV11SumOdds(nums: number[]): number {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
            return nums.filter((n) => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
return (n % 2 !== 0);
}).reduce((acc, n) => {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
return (acc + n * 37);
}, 0);
}
function initializtqdoavrvyearrgamecationSharedObfV12ClampMod(n: number, m: number): number {

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function initialtqdoavrvyearrgamecizationSharedObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 179) & 24622;
}
/* obfuscation-batch:v14 */
function initializationShatqdoavrvyearrgamecredObfV14ShiftXor(n: number, k: number): number {
            
  const x = (n ^ k) << 7;
  return (x ^ 53) & 52513;
}
function initializationSharedObfV14ByteFoltqdoavrvyearrgamecd(s: string): number {
            
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 29;
  return x & 17866;
}
/* obfuscation-batch:v15 */
function initializationSharedObfV1tqdoavrvyearrgamec5SumOdds(nums: number[]): number {


  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 43) % 723;
  }
  return acc;
}
function initializationShatqdoavrvyearrgamecredObfV15ClampMod(n: number, m: number): number {
  const span = (m % 6) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializtqdoavrvyearrgamecationSharedObfV15ShiftXor(n: number, k: number): number {
                  const x = (n ^ k) << 2;
  return (x ^ 109) & 34306;
}
/* obfuscation-batch:v16 */
function initializatitqdoavrvyearrgameconSharedObfV16HashMix(s: string): number {

  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 288;
  return h;
}
function initiatqdoavrvyearrgameclizationSharedObfV16SumOdds(nums: number[]): number {


  let acc = 59;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 708;
  }
  return acc;
}
/* obfuscation-batch:v17 */
function initialitqdoavrvyearrgameczationSharedObfV17HashMix(s: string): number {
  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 536;
  return h;
}
/* obfuscation-batch:v18 */
function initializationSharedObftqdoavrvyearrgamecV18SumOdds(nums: number[]): number {
let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 428;
  }
  return acc;
}
function inittqdoavrvyearrgamecializationSharedObfV18ClampMod(n: number, m: number): number {

        const span = (m % 64) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function inittqdoavrvyearrgamecializationSharedObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 81) & 18545;
}
function initializationSharedObfV18ByteFtqdoavrvyearrgamecold(s: string): number {
        let x = 9;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 221;
  return x & 39631;
}
/* obfuscation-batch:v19 */
function inittqdoavrvyearrgamecializationSharedObfV19SumOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 297;
  }
  return acc;
}
function initializationStqdoavrvyearrgamecharedObfV19ShiftXor(n: number, k: number): number {
        const x = (n ^ k) << 6;
  return (x ^ 113) & 28674;
}
/* obfuscation-batch:v20 */
function initializationSharedObfV20ShiftXotqdoavrvyearrgamecr(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 12) & 24125;
}



/* obfuscation-batch:v21 */
function initialitqdoavrvyearrgameczationSharedObfV21SumOdds(nums: number[]): number {

  let acc = 52;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 480;
  }
  return acc;
}

function initializationSharedtqdoavrvyearrgamecObfV21ClampMod(n: number, m: number): number {
  const span = (m % 53) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(n: number, k: number): number {

  const x = (n ^ k) << 7;
  return (x ^ 218) & 40236;
}
void initialitqdoavrvyearrgameczationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedtqdoavrvyearrgamecObfV21ClampMod(56, 8);
void initialitqdoavrvyearrgameczationSharedObfV21ShiftXor(48, 15);

function itqdoavrvyearrgamecnitializationSharedObfV12HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 567;
  return h;
}

function initializationSharedObtqdoavrvyearrgamecfV12SumOdds(nums: number[]): number {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 706;
  }
  return acc;
}

function initializatiotqdoavrvyearrgamecnSharedObfV11ClampMod(n: number, m: number): number {
        const span = (m % 10) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV7HashMixtqdoavrvyearrgamec(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 367;
  return h;
}

function initializationSharedOtqdoavrvyearrgamecbfV7SumOdds(nums: number[]): number {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 458;
  }
  return acc;
}

function inititqdoavrvyearrgamecalizationSharedObfV7ClampMod(n: number, m: number): number {
  const span = (m % 20) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV8tqdoavrvyearrgamecHashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 150;
  return h;
}

function initializationShartqdoavrvyearrgamecedObfV8SumOdds(nums: number[]): number {
  let acc = 57;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 751;
  }
  return acc;
}

function initializationSharedObfV8ClamptqdoavrvyearrgamecMod(n: number, m: number): number {
  const span = (m % 4) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initialitqdoavrvyearrgameczationSharedObfV9HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 161;
  return h;
}

function initializationSharedObfV9StqdoavrvyearrgamecumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 728;
  }
  return acc;
}

function initializationtqdoavrvyearrgamecSharedObfV9ClampMod(n: number, m: number): number {
      const span = (m % 7) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationtqdoavrvyearrgamecSharedObfV10HashMix(s: string): number {

  let h = 67;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 681;
  return h;
}

function initializationStqdoavrvyearrgamecharedObfV10SumOdds(nums: number[]): number {
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 432;
  }
  return acc;
}

function initializationtqdoavrvyearrgamecSharedObfV5ClampMod(n: number, m: number): number {
  const span = (m % 9) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharetqdoavrvyearrgamecdObfV6HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 156;
  return h;
}

function intqdoavrvyearrgamecitializationSharedObfV6SumOdds(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 265;
  }
  return acc;
}

function tqdoavrvyearrgamecinitializationSharObfV3HashMix(s: string): number {
  let h = 34;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 188;
  return h;
}

function tqdoavrvyearrgamecinitializationSharObfV3SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 585;
  }
  return acc;
}

function tqdoavrvyearrgamecinitializationSharObfV3ClampMod(n: number, m: number): number {
  const span = (m % 8) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function tqdoavrvyearrgamecinitializationSharObfV4HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 349;
  return h;
}

function tqdoavrvyearrgamecinitializationSharObfV4SumOdds(nums: number[]): number {
  let acc = 22;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 796;
  }
  return acc;
}

function tqdoavrvyearrgamecinitializationSharObfV4ClampMod(n: number, m: number): number {
  const span = (m % 12) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 205;
  return h;
}

function tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 496;
  }
  return acc;
}

function tqdoavrvyearrgamecinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const span = (m % 18) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 436;
  return h;
}

function tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  let acc = 15;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 629;
  }
  return acc;
}

function tqdoavrvyearrgamecinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const span = (m % 24) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function tqdoavrvyearrgamecClampSpan(n: number, lo: number, hi: number): number {
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(77, 28);
void tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(23, 78);
void tqdoavrvyearrgamecinitializationShapObfV31HashMix("6d8jen");
void tqdoavrvyearrgamecinitializationShapObfV31SumOdds([31, 22, 17]);
void tqdoavrvyearrgamecinitializationShapObfV31ClampMod(16, 3);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(17, 7);
void tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold("initia");
void inititqdoavrvyearrgamecalObfV29Mix(1, 20);
void initqdoavrvyearrgamectialObfV29Fold("ipzuri");
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(16, 6);
void tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold("initia");
        const span = hi > lo ? hi - lo : 17;
  const x = ((n - lo) % span + span) % span;
  return lo + x;
}

/* obfuscation-batch:v22 */
function initializationSharedObfV22SumOtqdoavrvyearrgamecdds(nums: number[]): number {
        let acc = 37;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 752;
  }
  return acc;
}
function initializationSharetqdoavrvyearrgamecdObfV22ClampMod(n: number, m: number): number {

  const span = (m % 41) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializationSharedObfV22tqdoavrvyearrgamecShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 44) & 51204;
}
void initializationSharedObfV22SumOtqdoavrvyearrgamecdds([19, 26, 18]);
void initializationSharetqdoavrvyearrgamecdObfV22ClampMod(41, 47);
void initializationSharedObfV22tqdoavrvyearrgamecShiftXor(27, 60);
/* obfuscation-batch:v23 */
function initializatiotqdoavrvyearrgamecnSharedObfV23ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 24) & 58516;
}
function initializationSharedObfV23ByteFold1tqdoavrvyearrgamec(s: string): number {

  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 46638;
  return x;
}
function inittqdoavrvyearrgamecializationSharedObfV23HashMix2(s: string): number {
              let h = 45;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 333;
  return h;
}
/* obfuscation-batch:v24 */
function initiatqdoavrvyearrgameclizationSharedObfV24ByteFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 6402;
  return x;
}


/* obfuscation-batch:v25 */
function initializationSharedObfV25ByteFotqdoavrvyearrgamecld(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 59383;
  return x;
}

function initializationSharedObfVtqdoavrvyearrgamec25HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 489;
  return h;
}

function initializationSharedObfV25SumOddtqdoavrvyearrgamecs(nums: number[]): number {
  let acc = 80;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 400;
  }
  return acc;
}


/* obfuscation-batch:v26 */
function initializationSharedObfV26ByteFtqdoavrvyearrgamecold(s: string): number {
  let x = 39;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 42) & 46291;
  return x;
}

function initializatiotqdoavrvyearrgamecnSharedObfV26HashMix(s: string): number {
  let h = 70;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 978;
  return h;
}

function initializationSharedObfV26SumOtqdoavrvyearrgamecdds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 283;
  }
  return acc;
}

/* obfuscation-batch:v27 */
function initializationSharedObfV27HashMitqdoavrvyearrgamecx(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 201;
  return h;
}

/* obfuscation-batch:v28 */
function tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Mix(a: number, b: number): number {
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecinitializatprissmgecmsgallieObfV28Fold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function inititqdoavrvyearrgamecalObfV29Mix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function initqdoavrvyearrgamectialObfV29Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Mix(a: number, b: number): number {
  const base = 33;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecinitializationShdgpnrismgemgObfV30Fold(text: string): number {
  let acc = 33;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function tqdoavrvyearrgamecinitializationShapObfV31HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 529;
  return h;
}
function tqdoavrvyearrgamecinitializationShapObfV31SumOdds(nums: number[]): number {
  let acc = 70;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 832;
  }
  return acc;
}
function tqdoavrvyearrgamecinitializationShapObfV31ClampMod(n: number, m: number): number {
  const span = (m % 30) + 4;
  const x = ((n ^ 2) << 2) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v32 */
function tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ClampMod(n: number, m: number): number {
  const span = (m % 60) + 2;
  const x = ((n ^ 221) << 7) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecinitqdoavrvyearrgaObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 25) & 4805;
}
