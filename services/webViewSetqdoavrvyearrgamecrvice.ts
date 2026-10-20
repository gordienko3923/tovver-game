import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  AppState,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_KEtqdoavrvyearrgamecY,
  STORAGE_KEYtqdoavrvyearrgamecS,
  tqdoavrvyearrgamecConstTouch,
} from './constants/consttqdoavrvyearrgamecntsVariable';
// autosetup-split-begin
import { webViewServiceObfV5SumOddtqdoavrvyearrgamecs, webViewServicePartqdoavrvyearrgamect02ObfV11SumOdds, wetqdoavrvyearrgamecbViewServiceObfV19HashMix, wtqdoavrvyearrgamecebViewServiceObfV21HashMix, webViewServictqdoavrvyearrgameceObfV14HashMix, webViewServiceObtqdoavrvyearrgamecfV14ClampMod, webViewServiceObftqdoavrvyearrgamecV13ByteFold, wetqdoavrvyearrgamecbViewServiceObfV12ClampMod, webViewServictqdoavrvyearrgameceObfV7ClampMod, webViewServiceObfV9ClampMotqdoavrvyearrgamecd, webViewServiceObfV6SutqdoavrvyearrgamecmOdds, webObtqdoavrvyearrgamecfV3HashMix, webObfV3CltqdoavrvyearrgamecampMod, webObfV4SumOddtqdoavrvyearrgamecs, webViewServObfV1CltqdoavrvyearrgamecampMod, swefgdetguhjhoioesMixSeed, swefgdetguhjhoioesClampSpan, webViewServiceParttqdoavrvyearrgamec01ObfV11SumOdds, webViewServicetqdoavrvyearrgamecPart02ObfV27ByteFold, webViewServicePart02ObfVtqdoavrvyearrgamec27HashMix, webViewServicePart02ObfV27tqdoavrvyearrgamecSumOdds, tqdoavrvyearrgamecwebViewServicePart0prissmgecObfV28Mix, tqdoavrvyearrgamecwebViewServicePart0prissmgecObfV28Fold, webViewObfVtqdoavrvyearrgamec29Mix, webVietqdoavrvyearrgamecwObfV29Fold, tqdoavrvyearrgamecwebViewSerdgpnrismgemgalleryObfV30Mix, tqdoavrvyearrgamecwebViewSerdgpnrismgemgalleryObfV30Fold, webViewServitqdoavrvyearrgamecceObfV19ByteFold, webViewServiceObfV21CtqdoavrvyearrgameclampMod, webViewtqdoavrvyearrgamecServiceObfV13ClampMod, webViewServiceObftqdoavrvyearrgamecV7HashMix, webViewServiceOtqdoavrvyearrgamecbfV10SumOdds, webViewServObtqdoavrvyearrgamecfV1HashMix, webViewServitqdoavrvyearrgameccePart02ObfV11HashMix, webViewServicePart03ObfV13tqdoavrvyearrgamecClampMod, webViewServicePart01ObfV15SumOdtqdoavrvyearrgamecds, webViewServitqdoavrvyearrgameccePart02ObfV22ShiftXor } from './webViewServtqdoavrvyearrgamecicePart01';
import { webtqdoavrvyearrgamecViewServiceObfV23HashMix, webViewServiceOtqdoavrvyearrgamecbfV24HashMix, webViewServiceObfV24SumOddtqdoavrvyearrgamecs, webViewServiceObfV25SumOdtqdoavrvyearrgamecds, webViewServiceObfV25ClamtqdoavrvyearrgamecpMod, webViewServiceObftqdoavrvyearrgamecV26SumOdds, webVietqdoavrvyearrgamecwServiceObfV26ClampMod, webViewStqdoavrvyearrgamecerviceObfV27ClampMod, webViewServiceObtqdoavrvyearrgamecfV27ShiftXor, tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix, tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold, tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix, tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold, webViewSeObftqdoavrvyearrgamecV29Mix, webViewSeOtqdoavrvyearrgamecbfV29Fold, webViewServiceObfV22ShiftXotqdoavrvyearrgamecr, webViewServiceObfV23StqdoavrvyearrgamecumOdds1, webViewtqdoavrvyearrgamecServiceObfV23ClampMod2, webViewServiceObfV24tqdoavrvyearrgamecByteFold, webtqdoavrvyearrgamecViewServiceObfV24ClampMod, webViewServiceObfV25ShtqdoavrvyearrgameciftXor, webViewServicetqdoavrvyearrgamecPart02ObfV11ClampMod, webViewServiceObfV12tqdoavrvyearrgamecSumOdds, wtqdoavrvyearrgamecebViewServicePart02ObfV15ClampMod, webViewServiceOtqdoavrvyearrgamecbfV16SumOdds, webViewServiceObtqdoavrvyearrgamecfV17HashMix, webViewServicetqdoavrvyearrgamecObfV18ShiftXor, wtqdoavrvyearrgamecebViewServiceObfV20SumOdds, webViewServiceObfV16CltqdoavrvyearrgamecampMod, webViewServitqdoavrvyearrgamecceObfV11SumOdds, webViewServiceObfV8SumOddstqdoavrvyearrgamec, webVtqdoavrvyearrgameciewServiceObfV5ClampMod, webViewServObftqdoavrvyearrgamecV2SumOdds, webViewServtqdoavrvyearrgamecicePart01ObfV13HashMix, webViewServicePatqdoavrvyearrgamecrt03ObfV13ByteFold, webViewServicePart01ObfV15ShiftXortqdoavrvyearrgamec, webViewServicePart02ObfV2tqdoavrvyearrgamec3SumOdds } from './wetqdoavrvyearrgamecbViewServicePart02';
// autosetup-split-end
import { swefgdetguhjhoioesFoldRange, webViewtqdoavrvyearrgamecServiceObfV21ByteFold, webViewServiceObfV2tqdoavrvyearrgamec1SumOdds, webViewServictqdoavrvyearrgameceObfV20HashMix, webVtqdoavrvyearrgameciewServiceObfV19SumOdds, webViewSetqdoavrvyearrgamecrviceObfV18ClampMod, webVtqdoavrvyearrgameciewServiceObfV18ByteFold, webtqdoavrvyearrgamecViewServiceObfV17ByteFold, webViewStqdoavrvyearrgamecerviceObfV16HashMix, webViewServiceObftqdoavrvyearrgamecV15SumOdds, wtqdoavrvyearrgamecebViewServiceObfV15ClampMod, webViewServiceObfV14SutqdoavrvyearrgamecmOdds, wetqdoavrvyearrgamecbViewServiceObfV13SumOdds, webViewServiceObfV13ShiftXotqdoavrvyearrgamecr, webViewServitqdoavrvyearrgamecceObfV12HashMix, webtqdoavrvyearrgamecViewServiceObfV11HashMix, webViewServiceObfV11tqdoavrvyearrgamecClampMod, webVtqdoavrvyearrgameciewServiceObfV7SumOdds, webViewSetqdoavrvyearrgamecrviceObfV8HashMix, webVtqdoavrvyearrgameciewServiceObfV8ClampMod, webViewStqdoavrvyearrgamecerviceObfV9HashMix, webViewtqdoavrvyearrgamecServiceObfV9SumOdds, webViewServiceOtqdoavrvyearrgamecbfV10HashMix, webViewServiceOtqdoavrvyearrgamecbfV10ClampMod, webViewServictqdoavrvyearrgameceObfV5HashMix, webViewServiceObfV6HatqdoavrvyearrgamecshMix, wetqdoavrvyearrgamecbViewServiceObfV6ClampMod, wtqdoavrvyearrgamecebObfV3SumOdds, webObfV4tqdoavrvyearrgamecHashMix, webObfV4CltqdoavrvyearrgamecampMod, wetqdoavrvyearrgamecbViewServObfV1SumOdds, wtqdoavrvyearrgamecebViewServObfV2HashMix, wetqdoavrvyearrgamecbViewServObfV2ClampMod, webVtqdoavrvyearrgameciewServicePart01ObfV11HashMix, webViewServicePart01ObfV11ClamptqdoavrvyearrgamecMod, webViewServicePart01ObfVtqdoavrvyearrgamec13ByteFold, webViewServitqdoavrvyearrgameccePart02ObfV13SumOdds, webViewSetqdoavrvyearrgamecrvicePart03ObfV13ShiftXor, wetqdoavrvyearrgamecbViewServicePart03ObfV13HashMix, webViewSetqdoavrvyearrgamecrvicePart01ObfV15HashMix, webViewServicePart01ObfV15ClampModtqdoavrvyearrgamec, webViewServicetqdoavrvyearrgamecPart02ObfV15ShiftXor, webVietqdoavrvyearrgamecwServicePart02ObfV15ByteFold } from './webViewServitqdoavrvyearrgameccePart01';

type VtqdoavrvyearrgameciewportBannanaModule = {
  naguqunajug: (url: string) => Promise<boolean>;
  ciqoduzeq: () => Promise<boolean>;
};

function viewpotqdoavrvyearrgamecrtBridge(): VtqdoavrvyearrgameciewportBannanaModule | undefined {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

  void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
  void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');

  return NativeModules.Nuhoxarivaw;
}
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  /** System permission sheet is on screen. Its own pause must not count as a new launch. */
  private swefgdetguhjhoioesPushUiInFlight = false;
  /** Ignore the resume that follows closing the system sheet. */
  private swefgdetguhjhoioesPushUiQuietUntil = 0;
  /** User left the app (Home / recents), not the permission dialog. */
  private swefgdetguhjhoioesLeftAppForReal = false;
  _dummypicklfo5409vb33 = 0;

  constructor() {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
    void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
    void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');

    void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
    void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
    this.swefgdetguhjhoioesBindPushLaunchWatcher();
  }

  tqdoavrvyearrgamecubscribe(listener: swefgdetguhjhoioesListener): () => void {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

      void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
      void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
        void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
        void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
        void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
    void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
    void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');    void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
    void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
    void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
    void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
    void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
    void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
    void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
    void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
    void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
    void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
    void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
    void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
    void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
    void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
    void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
    void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
    void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

      void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
      void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
      void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
      void webObtqdoavrvyearrgamecfV3HashMix('xy');
      void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
      void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
      void webObfV4tqdoavrvyearrgamecHashMix('xy');
      void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
      void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
      void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
      void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
      void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
      void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
      void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
      void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void tqdoavrvyearrgamecConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

      void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
      void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
        void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
        void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
        void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
    void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
    void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');    void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
    void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
    void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
    void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
    void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
    void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
    void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
    void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
    void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
    void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
    void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
    void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
    void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
    void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
    void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
    void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
    void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

      void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
      void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
      void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
      return (l(this.state));
    });
  }

  /**
   * A second app open is not always a new process. Home → icon keeps JS alive,
   * so the one-shot session flag would skip the repeat native ask. The system
   * sheet itself also backgrounds the activity; that pause is not a launch.
   */
  private swefgdetguhjhoioesBindPushLaunchWatcher(): void {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
    void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
    void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');

    void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
    void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);

    AppState.addEventListener('change', (next) => {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

      void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
      void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
        void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
        void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
        void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
    void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
    void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');    void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
    void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
    void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
      void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
      void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');

      void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
      void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);

      const quiet = Date.now() < this.swefgdetguhjhoioesPushUiQuietUntil;
      if (next === 'background') {
        if (!this.swefgdetguhjhoioesPushUiInFlight && !quiet) {
          this.swefgdetguhjhoioesLeftAppForReal = true;
        }
        return;
      }
      if (next !== 'active') {
        return;
      }
      if (this.swefgdetguhjhoioesPushUiInFlight || quiet) {
        this.swefgdetguhjhoioesLeftAppForReal = false;
        return;
      }
      if (!this.swefgdetguhjhoioesLeftAppForReal) {
        return;
      }
      this.swefgdetguhjhoioesLeftAppForReal = false;
      this.swefgdetguhjhoioesNativePushAskedThisSession = false;
      this.swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
      if (this.state.visible || this.openingInProgress) {
        void this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
    });
  }

  private swefgdetguhjhoioesBeginPushUi(): void {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
    void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
    void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');

    void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = true;
  }

  private swefgdetguhjhoioesEndPushUi(): void {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
    void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
    void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');

    void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = false;
    this.swefgdetguhjhoioesPushUiQuietUntil = Date.now() + 1200;
  }

  private async swefgdetguhjhoioesOpenPushSettings(): Promise<void> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
    void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
    void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');

    void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
    void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);

    try {
      if (Platform.OS === 'android') {
        const { Narazanuxafu } = NativeModules;
        const packageName =
          Narazanuxafu && typeof Narazanuxafu.safakisijeje === 'function'
            ? await Narazanuxafu.safakisijeje()
            : '';
        if (packageName) {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            {
              key: 'android.provider.extra.APP_PACKAGE',
              value: String(packageName),
            },
          ]);
          return;
        }
      }
    } catch {
      // Fall through to the app details screen.
    }
    try {
      await Linking.openSettings();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

  void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
  void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
  void webObtqdoavrvyearrgamecfV3HashMix('xy');
  void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
  void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
  void webObfV4tqdoavrvyearrgamecHashMix('xy');
  void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
                if (alreadyGranted) {
          return true;
        }
        this.swefgdetguhjhoioesBeginPushUi();
        try {
          const result = await PermissionsAndroid.request(permission);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } finally {
          this.swefgdetguhjhoioesEndPushUi();
        }
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
                const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          this.swefgdetguhjhoioesBeginPushUi();
          try {
            const newStatus = await requestPermission(messaging);
            return (
              newStatus === AuthorizationStatus.AUTHORIZED ||
              newStatus === AuthorizationStatus.PROVISIONAL
            );
          } finally {
            this.swefgdetguhjhoioesEndPushUi();
          }
        }
        return false;
      }
    } catch (error) {
      void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
      void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
      void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
      void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
      void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
      void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
            void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

            void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
            void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
              void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
              void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
              void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
          void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
          void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');          void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
          void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
          void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
          void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
          void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
          void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
          void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
          void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
          void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
          void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
          void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
          void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
          void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
          void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
          void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
          void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
          void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

            void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
            void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
            void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
            void webObtqdoavrvyearrgamecfV3HashMix('xy');
            void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
            void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
            void webObfV4tqdoavrvyearrgamecHashMix('xy');
            void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
            void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
            void this.swefgdetguhjhoioesOpenPushSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_KEYtqdoavrvyearrgamecS.PUSH_MAIN_AStqdoavrvyearrgamecKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native dialog per launch. The 2nd native ask waits until the user leaves and opens the app again.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: first launch. askCount === 1: second launch, ask again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_KEYtqdoavrvyearrgamecS.PUSH_MAIN_AStqdoavrvyearrgamecKED,
        String(nextCount),
      );

      // Second denial → custom prompt (later launches hit askCount >= 2 above).
      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

  void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
  void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
  void webObtqdoavrvyearrgamecfV3HashMix('xy');
  void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
  void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
  void webObfV4tqdoavrvyearrgamecHashMix('xy');
  void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewpotqdoavrvyearrgamecrtBridge()?.naguqunajug) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await viewpotqdoavrvyearrgamecrtBridge().naguqunajug(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewpotqdoavrvyearrgamecrtBridge()?.ciqoduzeq) {
      return;
    }

    try {
      await viewpotqdoavrvyearrgamecrtBridge().ciqoduzeq();
    } catch {
      // silent
    }
  }

  async shotqdoavrvyearrgamecw(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

  void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
  void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
  void webObtqdoavrvyearrgamecfV3HashMix('xy');
  void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
  void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
  void webObfV4tqdoavrvyearrgamecHashMix('xy');
  void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.tqdoavrvyearrgamecaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async tqdoavrvyearrgamecaveLastUrl(url: string): Promise<boolean> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.tqdoavrvyearrgamecaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async tqdoavrvyearrgamecaveLastUrlToStorage(url: string): Promise<void> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_KEtqdoavrvyearrgamecY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix("jc56");
void tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObftqdoavrvyearrgamecV29Mix(9, 16);
void webViewSeOtqdoavrvyearrgamecbfV29Fold("wedgpn");
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void tqdoavrvyearrgamecwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void tqdoavrvyearrgamecwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewStqdoavrvyearrgamecerviceObfV27ClampMod(4, 8);
void webViewServiceObtqdoavrvyearrgamecfV27ShiftXor(61, 62);

    void webViewServiceObftqdoavrvyearrgamecV26SumOdds([37, 37, 25]);
    void webVietqdoavrvyearrgamecwServiceObfV26ClampMod(50, 22);
  void webViewServiceObfV25SumOdtqdoavrvyearrgamecds([29, 25, 9]);
  void webViewServiceObfV25ClamtqdoavrvyearrgamecpMod(61, 21);
  void webViewServiceObfV25ShtqdoavrvyearrgameciftXor(38, 58);
  void webViewServiceObfV24tqdoavrvyearrgamecByteFold('ntt');
  void webViewServiceOtqdoavrvyearrgamecbfV24HashMix('u2c39');
  void webViewServiceObfV24SumOddtqdoavrvyearrgamecs([83, 15, 11]);
  void webtqdoavrvyearrgamecViewServiceObfV24ClampMod(12, 33);
void webtqdoavrvyearrgamecViewServiceObfV23HashMix('zat');void webViewServiceObfV23StqdoavrvyearrgamecumOdds1([31, 25, 32]);void webViewtqdoavrvyearrgamecServiceObfV23ClampMod2(15, 27);void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);
  void webViewServictqdoavrvyearrgameceObfV20HashMix('7v');
  void wtqdoavrvyearrgamecebViewServiceObfV20SumOdds([21, 27, 16]);
void wetqdoavrvyearrgamecbViewServiceObfV19HashMix('pmqf');void webVtqdoavrvyearrgameciewServiceObfV19SumOdds([24, 28, 16]);void webViewServitqdoavrvyearrgamecceObfV19ByteFold('xhp');  void webViewSetqdoavrvyearrgamecrviceObfV18ClampMod(39, 8);
  void webViewServicetqdoavrvyearrgamecObfV18ShiftXor(76, 79);
  void webVtqdoavrvyearrgameciewServiceObfV18ByteFold('rrrh');
  void webtqdoavrvyearrgamecViewServiceObfV17ByteFold('fv9f');
  void webViewServiceObtqdoavrvyearrgamecfV17HashMix('fv2');
  void webViewStqdoavrvyearrgamecerviceObfV16HashMix('h3tb');
  void webViewServiceOtqdoavrvyearrgamecbfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16CltqdoavrvyearrgamecampMod(54, 53);
  void webViewServiceObftqdoavrvyearrgamecV15SumOdds([19, 18, 23]);
  void wtqdoavrvyearrgamecebViewServiceObfV15ClampMod(42, 62);
  void webViewServictqdoavrvyearrgameceObfV14HashMix('hq9');
  void webViewServiceObfV14SutqdoavrvyearrgamecmOdds([18, 16, 22]);
  void webViewServiceObtqdoavrvyearrgamecfV14ClampMod(65, 12);
  void wetqdoavrvyearrgamecbViewServiceObfV13SumOdds([2, 22, 2]);
  void webViewtqdoavrvyearrgamecServiceObfV13ClampMod(64, 55);
  void webViewServiceObfV13ShiftXotqdoavrvyearrgamecr(6, 23);
  void webViewServiceObftqdoavrvyearrgamecV13ByteFold('9k6');
  void webViewServitqdoavrvyearrgamecceObfV12HashMix('xy');
  void webViewServiceObfV12tqdoavrvyearrgamecSumOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV12ClampMod(7, 5);

  void webtqdoavrvyearrgamecViewServiceObfV11HashMix('xy');
  void webViewServitqdoavrvyearrgamecceObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfV11tqdoavrvyearrgamecClampMod(7, 5);

  void webViewServiceObftqdoavrvyearrgamecV7HashMix('xy');
  void webVtqdoavrvyearrgameciewServiceObfV7SumOdds([1, 3, 5]);
  void webViewServictqdoavrvyearrgameceObfV7ClampMod(7, 5);
  void webViewSetqdoavrvyearrgamecrviceObfV8HashMix('xy');
  void webViewServiceObfV8SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void webVtqdoavrvyearrgameciewServiceObfV8ClampMod(7, 5);
  void webViewStqdoavrvyearrgamecerviceObfV9HashMix('xy');
  void webViewtqdoavrvyearrgamecServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObfV9ClampMotqdoavrvyearrgamecd(7, 5);
  void webViewServiceOtqdoavrvyearrgamecbfV10HashMix('xy');
  void webViewServiceOtqdoavrvyearrgamecbfV10SumOdds([1, 3, 5]);
  void webViewServiceOtqdoavrvyearrgamecbfV10ClampMod(7, 5);

    void webViewServictqdoavrvyearrgameceObfV5HashMix('xy');
    void webViewServiceObfV5SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webVtqdoavrvyearrgameciewServiceObfV5ClampMod(7, 5);
  void webViewServiceObfV6HatqdoavrvyearrgamecshMix('xy');
  void webViewServiceObfV6SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void wetqdoavrvyearrgamecbViewServiceObfV6ClampMod(7, 5);
    void webObtqdoavrvyearrgamecfV3HashMix('xy');
    void wtqdoavrvyearrgamecebObfV3SumOdds([1, 3, 5]);
    void webObfV3CltqdoavrvyearrgamecampMod(7, 5);
    void webObfV4tqdoavrvyearrgamecHashMix('xy');
    void webObfV4SumOddtqdoavrvyearrgamecs([1, 3, 5]);
    void webObfV4CltqdoavrvyearrgamecampMod(7, 5);
    void webViewServObtqdoavrvyearrgamecfV1HashMix('xy');
    void wetqdoavrvyearrgamecbViewServObfV1SumOdds([1, 3, 5]);
    void webViewServObfV1CltqdoavrvyearrgamecampMod(7, 5);
    void wtqdoavrvyearrgamecebViewServObfV2HashMix('xy');
    void webViewServObftqdoavrvyearrgamecV2SumOdds([1, 3, 5]);
    void wetqdoavrvyearrgamecbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_KEtqdoavrvyearrgamecY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void webVtqdoavrvyearrgameciewServicePart01ObfV11HashMix('xy');
void webViewServiceParttqdoavrvyearrgamec01ObfV11SumOdds([1, 3, 5]);
void webViewServicePart01ObfV11ClamptqdoavrvyearrgamecMod(7, 5);
/* obfuscation-batch:v11 */

void webViewServitqdoavrvyearrgameccePart02ObfV11HashMix('xy');
void webViewServicePartqdoavrvyearrgamect02ObfV11SumOdds([1, 3, 5]);
void webViewServicetqdoavrvyearrgamecPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
void webViewServicePart01ObfVtqdoavrvyearrgamec13ByteFold('dzzw');
void webViewServtqdoavrvyearrgamecicePart01ObfV13HashMix('fs');

/* obfuscation-batch:v13 */
void webViewServitqdoavrvyearrgameccePart02ObfV13SumOdds([18, 4, 4]);

/* obfuscation-batch:v13 */
void webViewServicePart03ObfV13tqdoavrvyearrgamecClampMod(9, 24);
void webViewSetqdoavrvyearrgamecrvicePart03ObfV13ShiftXor(6, 10);
void webViewServicePatqdoavrvyearrgamecrt03ObfV13ByteFold('rwq');
void wetqdoavrvyearrgamecbViewServicePart03ObfV13HashMix('kbw');
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void webViewSetqdoavrvyearrgamecrvicePart01ObfV15HashMix('96nm');
void webViewServicePart01ObfV15SumOdtqdoavrvyearrgamecds([24, 26, 30]);
void webViewServicePart01ObfV15ClampModtqdoavrvyearrgamec(30, 11);
void webViewServicePart01ObfV15ShiftXortqdoavrvyearrgamec(4, 31);

/* obfuscation-batch:v15 */
void wtqdoavrvyearrgamecebViewServicePart02ObfV15ClampMod(14, 63);
void webViewServicetqdoavrvyearrgamecPart02ObfV15ShiftXor(41, 49);
void webVietqdoavrvyearrgamecwServicePart02ObfV15ByteFold('8f');
/* obfuscation-batch:v16 */

/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void webViewtqdoavrvyearrgamecServiceObfV21ByteFold('2m');
void wtqdoavrvyearrgamecebViewServiceObfV21HashMix('7am4');
void webViewServiceObfV2tqdoavrvyearrgamec1SumOdds([17, 15, 13]);
void webViewServiceObfV21CtqdoavrvyearrgameclampMod(81, 10);

/* obfuscation-batch:v22 */
void webViewServiceObfV22ShiftXotqdoavrvyearrgamecr(89, 68);
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v22 */
void webViewServitqdoavrvyearrgameccePart02ObfV22ShiftXor(83, 4);
/* obfuscation-batch:v23 */
void webViewServicePart02ObfV2tqdoavrvyearrgamec3SumOdds([23, 29, 8]);
/* obfuscation-batch:v24 */
function wtqdoavrvyearrgamecebViewServicePart02ObfV24ByteFold(s: string): number {
          let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 55769;
  return x;
}
function webViewServicePart02OtqdoavrvyearrgamecbfV24HashMix(s: string): number {
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold("i9el4d");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix("fod");
void tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds([7, 14, 1]);

  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 3) % 92;
  return h;
}
function webVitqdoavrvyearrgamecewServicePart02ObfV24SumOdds(nums: number[]): number {
          let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 428;
  }
  return acc;
}

/* obfuscation-batch:v25 */
function webViewServicePart02ObfVtqdoavrvyearrgamec25ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 129) & 43284;
}

function webViewServicePart02ObfV25BytqdoavrvyearrgamecteFold(s: string): number {
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 50908;
  return x;
}

function webViewStqdoavrvyearrgamecervicePart02ObfV25HashMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 779;
  return h;
}

function webViewServicePart02ObfV25StqdoavrvyearrgamecumOdds(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 681;
  }
  return acc;
}

/* obfuscation-batch:v26 */
function webViewServicePart02ObfV26HtqdoavrvyearrgamecashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 37) % 610;
  return h;
}

function webViewServicePart02ObftqdoavrvyearrgamecV26SumOdds(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 211;
  }
  return acc;
}

function webViewServicePart02ObfV26ClamptqdoavrvyearrgamecMod(n: number, m: number): number {
  const span = (m % 59) + 13;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function wetqdoavrvyearrgamecbViewServicePart02ObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 115) & 34227;
}

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */
function tqdoavrvyearrgamecwebViewServpmvqkrmObfV31HashMix(s: string): number {
  let h = 89;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 749;
  return h;
}
function tqdoavrvyearrgamecwebViewServpmvqkrmObfV31SumOdds(nums: number[]): number {
  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 348;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32ByteFold(s: string): number {
  let x = 49;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 4) & 47117;
  return x;
}
function tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32HashMix(s: string): number {
  let h = 50;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 6)) % 372;
  return h;
}
function tqdoavrvyearrgamecwebViewSetqdoavrvyObfV32SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 534;
  }
  return acc;
}
