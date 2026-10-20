import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  STORAGE_KEYtqdoavrvyearrgamecS,
  litqdoavrvyearrgamecnk,
  tqdoavrvyearrgamecConstTouch,
} from './constants/consttqdoavrvyearrgamecntsVariable';
import {
  tqdoavrvyearrgamecEncrypt,
  tqdoavrvyearrgamecDecrypt,
} from './CtqdoavrvyearrgamecryptoService';
import { tqdoavrvyearrgamecSendCf } from './tqdoavrvyearrgamecCfProtocol';
import {
  tqdoavrvyearrgamecSumSquares,
  tqdoavrvyearrgamecAverageAbsoluteDeviation,
  tqdoavrvyearrgamecGcdPair,
  tqdoavrvyearrgamecXorFold,
  tqdoavrvyearrgamecModSpan,
  tqdoavrvyearrgamecStrLenSum,
  tqdoavrvyearrgamecLcmPair,
  tqdoavrvyearrgamecAbsDiff,
  tqdoavrvyearrgamecDotFold,
  tqdoavrvyearrgamecMinPair,
  tqdoavrvyearrgamecMaxPair,
  tqdoavrvyearrgamecSignVal,
  tqdoavrvyearrgamecRevStr,
  tqdoavrvyearrgamecSumDiff,
  tqdoavrvyearrgamecConcatLen,
  tqdoavrvyearrgamecNormMod,
  tqdoavrvyearrgamecPairAvg,
  tqdoavrvyearrgamecCharCodeSum,
  tqdoavrvyearrgamecEvenCount,
  tqdoavrvyearrgamecTrimLen,
  tqdoavrvyearrgamecOddCount,
  tqdoavrvyearrgamecMidAvg,
  tqdoavrvyearrgamecStrHash,
  tqdoavrvyearrgamecFloorDiv,
  tqdoavrvyearrgamecPowSum,
  tqdoavrvyearrgamecPrefixLen,
  tqdoavrvyearrgamecJoinLen,
  tqdoavrvyearrgamecIsEven,
  tqdoavrvyearrgamecRangeSpan,
  tqdoavrvyearrgamecHalfSum,
  tqdoavrvyearrgamecDigitSum,
  tqdoavrvyearrgamecBoolOr,
  tqdoavrvyearrgamecSqDiff,
  tqdoavrvyearrgamecLerpVal,
  tqdoavrvyearrgamecWrapIndex,
  tqdoavrvyearrgamecCountTruthy,
} from './UtilServicePart02tqdoavrvyearrgamec';
// autosetup-split-begin
import { UtilServiceOtqdoavrvyearrgamecbfV17ShiftXor, UtiltqdoavrvyearrgamecServiceObfV18ShiftXor, UtilServicetqdoavrvyearrgamecObfV20HashMix, UtilServitqdoavrvyearrgamecceObfV23HashMix1, UtilServiceObfV25ClamtqdoavrvyearrgamecpMod, UtilServiceObfV26HashtqdoavrvyearrgamecMix, tqdoavrvyearrgamecMinValue, UtilServicePart0tqdoavrvyearrgamec2ObfV6SumOdds, tqdoavrvyearrgamecMaxValue, tqdoavrvyearrgamecRangeValue, UtqdoavrvyearrgamectilServiceObfV6HashMix, UtilServiceObfV10SutqdoavrvyearrgamecmOdds, UtilServiceObfV16ByteFtqdoavrvyearrgamecold, tqdoavrvyearrgamecBitMix, tqdoavrvyearrgamecBoolAnd, tqdoavrvyearrgamecBoolXor, tqdoavrvyearrgamecMeanVal, tqdoavrvyearrgamecRotSum, tqdoavrvyearrgamecProductFold, UtitqdoavrvyearrgamecObfV4SumOdds, UttqdoavrvyearrgamecilServicePart01ObfV22ShiftXor, UtilServicePatqdoavrvyearrgamecrt01ObfV22ByteFold, UtilServicePart01ObfV22HashtqdoavrvyearrgamecMix, UtilServicePart01ObfV23HashMtqdoavrvyearrgamecix, UtilServicePart01ObfV23SumOddtqdoavrvyearrgamecs1, UtilServicePart01ObfV23tqdoavrvyearrgamecClampMod2, UtiltqdoavrvyearrgamecServicePart01ObfV23ShiftXor3, UttqdoavrvyearrgamecilServicePart01ObfV24SumOdds, UtilServicePart01ObtqdoavrvyearrgamecfV25ClampMod, UtitqdoavrvyearrgameclServicePart01ObfV25ShiftXor, UtilServicePart01OtqdoavrvyearrgamecbfV25ByteFold, UtilServictqdoavrvyearrgamecePart01ObfV26SumOdds, UtilServicePart01ObfV26tqdoavrvyearrgamecClampMod, UtilServicetqdoavrvyearrgamecPart01ObfV26ShiftXor, UtilServicetqdoavrvyearrgamecPart01ObfV26ByteFold, UtilServiceObfV27ByteFoldtqdoavrvyearrgamec, UtilServiceObfV27HastqdoavrvyearrgamechMix, UtitqdoavrvyearrgameclServiceObfV17SumOdds, UtilServiceObfV17ClampMotqdoavrvyearrgamecd, UtilServiceObfV1tqdoavrvyearrgamec8ClampMod, UtilServiceObfV18BtqdoavrvyearrgamecyteFold, UtilServiceObfV18HashMtqdoavrvyearrgamecix, UtilServiceObtqdoavrvyearrgamecfV19ShiftXor, UtilServiceObfV21tqdoavrvyearrgamecShiftXor, UtilServiceObfV21ByteFoldtqdoavrvyearrgamec, UtitqdoavrvyearrgameclServiceObfV21HashMix, UtilServicetqdoavrvyearrgamecObfV21SumOdds, UtilServiceObfV22SutqdoavrvyearrgamecmOdds, UtilServiceObfV22StqdoavrvyearrgamechiftXor, UtilServiceObfV23BytetqdoavrvyearrgamecFold, UtilServictqdoavrvyearrgameceObfV23SumOdds2, UtilStqdoavrvyearrgamecerviceObfV23ClampMod3, UttqdoavrvyearrgamecilServiceObfV24HashMix, UtilServtqdoavrvyearrgameciceObfV24SumOdds, UtitqdoavrvyearrgameclServiceObfV24ClampMod, UtiltqdoavrvyearrgamecServiceObfV25ByteFold, UtilServicetqdoavrvyearrgamecObfV25HashMix, UtilStqdoavrvyearrgamecerviceObfV25SumOdds, UtiltqdoavrvyearrgamecServiceObfV26SumOdds, UtilServiceObfV26ClamtqdoavrvyearrgamecpMod, UtilServiceObfV5HashMitqdoavrvyearrgamecx, UtilServitqdoavrvyearrgamecceObfV5SumOdds, UtilServiceObfV5ClampMotqdoavrvyearrgamecd, UttqdoavrvyearrgamecilServiceObfV6SumOdds, UtilServiceObfV6ClampMotqdoavrvyearrgamecd, UtilSertqdoavrvyearrgamecviceObfV8HashMix, UttqdoavrvyearrgamecilServiceObfV8SumOdds, UtilServiceObfV8CtqdoavrvyearrgameclampMod, UtilServiceObfV9tqdoavrvyearrgamecHashMix, UtilSetqdoavrvyearrgamecrviceObfV9SumOdds, UtilServiceObfV9ClatqdoavrvyearrgamecmpMod, UtilServiceObfVtqdoavrvyearrgamec10HashMix, UtilServiceObfV10CltqdoavrvyearrgamecampMod, UtilSetqdoavrvyearrgamecrviceObfV12HashMix, UtilServiceObfV12SumOtqdoavrvyearrgamecdds, UtilSetqdoavrvyearrgamecrviceObfV12ClampMod, UtqdoavrvyearrgamectilServiceObfV15HashMix, UtilServiceObfV16HashMtqdoavrvyearrgamecix, UtqdoavrvyearrgamectilServiceObfV11HashMix, UtilServiceObfV7SumOddstqdoavrvyearrgamec, UtiObfV4HashtqdoavrvyearrgamecMix, UtqdoavrvyearrgamectilServiceObfV1SumOdds, UtilServitqdoavrvyearrgamecceObfV1HashMix, UtilServitqdoavrvyearrgameccePart02ObfV6ClampMod, UtilServiceObfV7HashMtqdoavrvyearrgamecix, UtiObfV3HashtqdoavrvyearrgamecMix, UtilServiceOtqdoavrvyearrgamecbfV1ClampMod, UtilStqdoavrvyearrgamecervicePart01ObfV21ByteFold, UtilServicePart01ObfVtqdoavrvyearrgamec21HashMix, UtilServiceObfVtqdoavrvyearrgamec14SumOdds, UtilServiceOtqdoavrvyearrgamecbfV14ClampMod, UtilServiceObfVtqdoavrvyearrgamec14ShiftXor, UtilServiceObfV1tqdoavrvyearrgamec4ByteFold, UtilServitqdoavrvyearrgamecceObfV13ShiftXor, UtilServiceObfV11SumOddtqdoavrvyearrgamecs, UtilStqdoavrvyearrgamecerviceObfV11ClampMod, UtilSetqdoavrvyearrgamecrviceObfV7ClampMod, UtiObfV3StqdoavrvyearrgamecumOdds, UtiObfV3CtqdoavrvyearrgameclampMod, UtiObtqdoavrvyearrgamecfV4ClampMod, UtilServictqdoavrvyearrgameceObfV2HashMix, UtilSertqdoavrvyearrgamecviceObfV2SumOdds, UtilServiceObtqdoavrvyearrgamecfV2ClampMod, UtilServtqdoavrvyearrgamecicePart02ObfV6HashMix, UtilServicePart02ObftqdoavrvyearrgamecV14HashMix } from './UttqdoavrvyearrgamecilServicePart01';
// autosetup-split-end

export class Uttqdoavrvyearrgamecils {

  static async tqdoavrvyearrgamecGetLink(): Promise<string> {
void tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(56, 27);
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31HashMix("lehib");
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV3tqdoavrvyearrgamec0Mix(8, 27);
void UtilServtqdoavrvyearrgameciObfV30Fold("udgpnr");
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteFoldtqdoavrvyearrgamec('nsf');
void UtilServiceObfV27HastqdoavrvyearrgamechMix('4m');

    void UtilServiceObfV26HashtqdoavrvyearrgamecMix('9a');
    void UtiltqdoavrvyearrgamecServiceObfV26SumOdds([35, 10, 27]);
    void UtilServiceObfV26ClamtqdoavrvyearrgamecpMod(76, 82);
  void UtiltqdoavrvyearrgamecServiceObfV25ByteFold('mb28');
  void UtilServicetqdoavrvyearrgamecObfV25HashMix('sa4');
  void UtilStqdoavrvyearrgamecerviceObfV25SumOdds([22, 25, 31]);
  void UtilServiceObfV25ClamtqdoavrvyearrgamecpMod(12, 46);
  void UttqdoavrvyearrgamecilServiceObfV24HashMix('wv');
  void UtilServtqdoavrvyearrgameciceObfV24SumOdds([88, 17, 34]);
  void UtitqdoavrvyearrgameclServiceObfV24ClampMod(54, 15);
void UtilServitqdoavrvyearrgamecceObfV23HashMix1('3c');void UtilServictqdoavrvyearrgameceObfV23SumOdds2([33, 25, 18]);void UtilStqdoavrvyearrgamecerviceObfV23ClampMod3(82, 89);void UtilServiceObfV22SutqdoavrvyearrgamecmOdds([9, 20, 16]);
void UtilServiceObfV22StqdoavrvyearrgamechiftXor(49, 56);void UtilServiceObfV21tqdoavrvyearrgamecShiftXor(72, 39);
void UtilServiceObfV21ByteFoldtqdoavrvyearrgamec('r3gf');
void UtitqdoavrvyearrgameclServiceObfV21HashMix('pg');
void UtilServicetqdoavrvyearrgamecObfV21SumOdds([25, 15, 11]);
  void UtilServicetqdoavrvyearrgamecObfV20HashMix('6f5s');
void UtilServiceObtqdoavrvyearrgamecfV19ShiftXor(24, 86);  void UtilServiceObfV1tqdoavrvyearrgamec8ClampMod(76, 32);
  void UtiltqdoavrvyearrgamecServiceObfV18ShiftXor(52, 6);
  void UtilServiceObfV18BtqdoavrvyearrgamecyteFold('gdf');
  void UtilServiceObfV18HashMtqdoavrvyearrgamecix('4n');
  void UtitqdoavrvyearrgameclServiceObfV17SumOdds([11, 14, 27]);
  void UtilServiceObfV17ClampMotqdoavrvyearrgamecd(42, 44);
  void UtilServiceOtqdoavrvyearrgamecbfV17ShiftXor(45, 6);
  void UtilServiceObfV16ByteFtqdoavrvyearrgamecold('vktf');
  void UtilServiceObfV16HashMtqdoavrvyearrgamecix('fz');
  void UtqdoavrvyearrgamectilServiceObfV15HashMix('bv99');
  void UtilServiceObfVtqdoavrvyearrgamec14SumOdds([12, 9, 18]);
  void UtilServiceOtqdoavrvyearrgamecbfV14ClampMod(24, 55);
  void UtilServiceObfVtqdoavrvyearrgamec14ShiftXor(80, 79);
  void UtilServiceObfV1tqdoavrvyearrgamec4ByteFold('p2j');
  void UtilServitqdoavrvyearrgamecceObfV13ShiftXor(69, 52);
  void UtilSetqdoavrvyearrgamecrviceObfV12HashMix('xy');
  void UtilServiceObfV12SumOtqdoavrvyearrgamecdds([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV12ClampMod(7, 5);

  void UtqdoavrvyearrgamectilServiceObfV11HashMix('xy');
  void UtilServiceObfV11SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void UtilStqdoavrvyearrgamecerviceObfV11ClampMod(7, 5);

  void UtilServiceObfV7HashMtqdoavrvyearrgamecix('xy');
  void UtilServiceObfV7SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV7ClampMod(7, 5);
  void UtilSertqdoavrvyearrgamecviceObfV8HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV8SumOdds([1, 3, 5]);
  void UtilServiceObfV8CtqdoavrvyearrgameclampMod(7, 5);
  void UtilServiceObfV9tqdoavrvyearrgamecHashMix('xy');
  void UtilSetqdoavrvyearrgamecrviceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClatqdoavrvyearrgamecmpMod(7, 5);
  void UtilServiceObfVtqdoavrvyearrgamec10HashMix('xy');
  void UtilServiceObfV10SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void UtilServiceObfV10CltqdoavrvyearrgamecampMod(7, 5);

    void UtilServiceObfV5HashMitqdoavrvyearrgamecx('xy');
    void UtilServitqdoavrvyearrgamecceObfV5SumOdds([1, 3, 5]);
    void UtilServiceObfV5ClampMotqdoavrvyearrgamecd(7, 5);
  void UtqdoavrvyearrgamectilServiceObfV6HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV6SumOdds([1, 3, 5]);
  void UtilServiceObfV6ClampMotqdoavrvyearrgamecd(7, 5);
    void UtiObfV3HashtqdoavrvyearrgamecMix('xy');
    void UtiObfV3StqdoavrvyearrgamecumOdds([1, 3, 5]);
    void UtiObfV3CtqdoavrvyearrgameclampMod(7, 5);
    void UtiObfV4HashtqdoavrvyearrgamecMix('xy');
    void UtitqdoavrvyearrgamecObfV4SumOdds([1, 3, 5]);
    void UtiObtqdoavrvyearrgamecfV4ClampMod(7, 5);
    void UtilServitqdoavrvyearrgamecceObfV1HashMix('xy');
    void UtqdoavrvyearrgamectilServiceObfV1SumOdds([1, 3, 5]);
    void UtilServiceOtqdoavrvyearrgamecbfV1ClampMod(7, 5);
    void UtilServictqdoavrvyearrgameceObfV2HashMix('xy');
    void UtilSertqdoavrvyearrgamecviceObfV2SumOdds([1, 3, 5]);
    void UtilServiceObtqdoavrvyearrgamecfV2ClampMod(7, 5);
    void UtilServtqdoavrvyearrgamecicePart02ObfV6HashMix('xy');
    void UtilServicePart0tqdoavrvyearrgamec2ObfV6SumOdds([1, 3, 5]);
    void UtilServitqdoavrvyearrgameccePart02ObfV6ClampMod(7, 5);
    void tqdoavrvyearrgamecConstTouch();
    void tqdoavrvyearrgamecMinValue([1, 2, 3]);
    void tqdoavrvyearrgamecMaxValue([1, 2, 3]);
    void tqdoavrvyearrgamecRangeValue([1, 2, 3]);
    void tqdoavrvyearrgamecSumSquares([1, 2]);
    void tqdoavrvyearrgamecAverageAbsoluteDeviation([1, 2, 3]);
    void tqdoavrvyearrgamecGcdPair(12, 8);
    void tqdoavrvyearrgamecMeanVal([2, 4, 6]);
    void tqdoavrvyearrgamecXorFold([1, 2, 3]);
    void tqdoavrvyearrgamecModSpan(7, 5);
    void tqdoavrvyearrgamecStrLenSum(['a', 'bc']);
    void tqdoavrvyearrgamecLcmPair(4, 6);
    void tqdoavrvyearrgamecAbsDiff(5, 2);
    void tqdoavrvyearrgamecDotFold([1, 2], [3, 4]);
    void tqdoavrvyearrgamecMinPair(3, 7);
    void tqdoavrvyearrgamecMaxPair(3, 7);
    void tqdoavrvyearrgamecSignVal(-1);
    void tqdoavrvyearrgamecRevStr('ab');
    void tqdoavrvyearrgamecProductFold([2, 3]);
    void tqdoavrvyearrgamecSumDiff([1, 3, 5]);
    void tqdoavrvyearrgamecConcatLen(['a', '', 'b']);
    void tqdoavrvyearrgamecNormMod(7, 4);
    void tqdoavrvyearrgamecBoolXor(true, false);
    void tqdoavrvyearrgamecPairAvg(4, 6);
    void tqdoavrvyearrgamecCharCodeSum('ab');
    void tqdoavrvyearrgamecEvenCount([2, 4, 6]);
    void tqdoavrvyearrgamecTrimLen(' abc ');
    void tqdoavrvyearrgamecOddCount([1, 2, 3]);
    void tqdoavrvyearrgamecBitMix(3, 5);
    void tqdoavrvyearrgamecMidAvg(1, 2, 3);
    void tqdoavrvyearrgamecStrHash('xy');
    void tqdoavrvyearrgamecFloorDiv(9, 4);
    void tqdoavrvyearrgamecPowSum([1, 2, 3]);
    void tqdoavrvyearrgamecPrefixLen('abcd', 2);
    void tqdoavrvyearrgamecRotSum(3, 5);
    void tqdoavrvyearrgamecJoinLen(['x', 'y']);
    void tqdoavrvyearrgamecIsEven(4);
    void tqdoavrvyearrgamecRangeSpan([1, 9, 3]);
    void tqdoavrvyearrgamecBoolAnd(true, false);
    void tqdoavrvyearrgamecHalfSum(4, 6);
    void tqdoavrvyearrgamecDigitSum(123);
    void tqdoavrvyearrgamecBoolOr(true, false);
    void tqdoavrvyearrgamecSqDiff(5, 2);
    void tqdoavrvyearrgamecLerpVal(0, 10, 0.5);
    void tqdoavrvyearrgamecWrapIndex(5, 3);
    void tqdoavrvyearrgamecCountTruthy([true, false, true]);
    try {
      const encryptedLink: string = litqdoavrvyearrgamecnk;
            if (!encryptedLink || encryptedLink === '') {
                return '';
      }
      const decryptedLink = tqdoavrvyearrgamecDecrypt(encryptedLink);
            if (!decryptedLink || decryptedLink === '') {
        return '';
      }
      try {
        await AsyncStorage.setItem(
          STORAGE_KEYtqdoavrvyearrgamecS.LI_tqdoavrvyearrgamec,
          tqdoavrvyearrgamecEncrypt(decryptedLink),
        );
      } catch {
        // Cache write is best-effort.
      }
      return decryptedLink;
    } catch {
      return '';
    }
  }

  static async tqdoavrvyearrgamecGetUserBlocke(): Promise<number> {
void tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(56, 27);
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31HashMix("lehib");
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV3tqdoavrvyearrgamec0Mix(8, 27);
void UtilServtqdoavrvyearrgameciObfV30Fold("udgpnr");
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteFoldtqdoavrvyearrgamec('nsf');
void UtilServiceObfV27HastqdoavrvyearrgamechMix('4m');

    void UtilServiceObfV26HashtqdoavrvyearrgamecMix('9a');
    void UtiltqdoavrvyearrgamecServiceObfV26SumOdds([35, 10, 27]);
    void UtilServiceObfV26ClamtqdoavrvyearrgamecpMod(76, 82);
  void UtiltqdoavrvyearrgamecServiceObfV25ByteFold('mb28');
  void UtilServicetqdoavrvyearrgamecObfV25HashMix('sa4');
  void UtilStqdoavrvyearrgamecerviceObfV25SumOdds([22, 25, 31]);
  void UtilServiceObfV25ClamtqdoavrvyearrgamecpMod(12, 46);
  void UttqdoavrvyearrgamecilServiceObfV24HashMix('wv');
  void UtilServtqdoavrvyearrgameciceObfV24SumOdds([88, 17, 34]);
  void UtitqdoavrvyearrgameclServiceObfV24ClampMod(54, 15);
void UtilServitqdoavrvyearrgamecceObfV23HashMix1('3c');void UtilServictqdoavrvyearrgameceObfV23SumOdds2([33, 25, 18]);void UtilStqdoavrvyearrgamecerviceObfV23ClampMod3(82, 89);void UtilServiceObfV22SutqdoavrvyearrgamecmOdds([9, 20, 16]);
void UtilServiceObfV22StqdoavrvyearrgamechiftXor(49, 56);void UtilServiceObfV21tqdoavrvyearrgamecShiftXor(72, 39);
void UtilServiceObfV21ByteFoldtqdoavrvyearrgamec('r3gf');
void UtitqdoavrvyearrgameclServiceObfV21HashMix('pg');
void UtilServicetqdoavrvyearrgamecObfV21SumOdds([25, 15, 11]);
  void UtilServicetqdoavrvyearrgamecObfV20HashMix('6f5s');
void UtilServiceObtqdoavrvyearrgamecfV19ShiftXor(24, 86);  void UtilServiceObfV1tqdoavrvyearrgamec8ClampMod(76, 32);
  void UtiltqdoavrvyearrgamecServiceObfV18ShiftXor(52, 6);
  void UtilServiceObfV18BtqdoavrvyearrgamecyteFold('gdf');
  void UtilServiceObfV18HashMtqdoavrvyearrgamecix('4n');
  void UtitqdoavrvyearrgameclServiceObfV17SumOdds([11, 14, 27]);
  void UtilServiceObfV17ClampMotqdoavrvyearrgamecd(42, 44);
  void UtilServiceOtqdoavrvyearrgamecbfV17ShiftXor(45, 6);
  void UtilServiceObfV16ByteFtqdoavrvyearrgamecold('vktf');
  void UtilServiceObfV16HashMtqdoavrvyearrgamecix('fz');
  void UtqdoavrvyearrgamectilServiceObfV15HashMix('bv99');
  void UtilServiceObfVtqdoavrvyearrgamec14SumOdds([12, 9, 18]);
  void UtilServiceOtqdoavrvyearrgamecbfV14ClampMod(24, 55);
  void UtilServiceObfVtqdoavrvyearrgamec14ShiftXor(80, 79);
  void UtilServiceObfV1tqdoavrvyearrgamec4ByteFold('p2j');
  void UtilServitqdoavrvyearrgamecceObfV13ShiftXor(69, 52);
  void UtilSetqdoavrvyearrgamecrviceObfV12HashMix('xy');
  void UtilServiceObfV12SumOtqdoavrvyearrgamecdds([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV12ClampMod(7, 5);

  void UtqdoavrvyearrgamectilServiceObfV11HashMix('xy');
  void UtilServiceObfV11SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void UtilStqdoavrvyearrgamecerviceObfV11ClampMod(7, 5);

  void UtilServiceObfV7HashMtqdoavrvyearrgamecix('xy');
  void UtilServiceObfV7SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV7ClampMod(7, 5);
  void UtilSertqdoavrvyearrgamecviceObfV8HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV8SumOdds([1, 3, 5]);
  void UtilServiceObfV8CtqdoavrvyearrgameclampMod(7, 5);
  void UtilServiceObfV9tqdoavrvyearrgamecHashMix('xy');
  void UtilSetqdoavrvyearrgamecrviceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClatqdoavrvyearrgamecmpMod(7, 5);
  void UtilServiceObfVtqdoavrvyearrgamec10HashMix('xy');
  void UtilServiceObfV10SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void UtilServiceObfV10CltqdoavrvyearrgamecampMod(7, 5);

    void UtilServiceObfV5HashMitqdoavrvyearrgamecx('xy');
    void UtilServitqdoavrvyearrgamecceObfV5SumOdds([1, 3, 5]);
    void UtilServiceObfV5ClampMotqdoavrvyearrgamecd(7, 5);
  void UtqdoavrvyearrgamectilServiceObfV6HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV6SumOdds([1, 3, 5]);
  void UtilServiceObfV6ClampMotqdoavrvyearrgamecd(7, 5);
    void UtiObfV3HashtqdoavrvyearrgamecMix('xy');
    void UtiObfV3StqdoavrvyearrgamecumOdds([1, 3, 5]);
    void UtiObfV3CtqdoavrvyearrgameclampMod(7, 5);
    void UtiObfV4HashtqdoavrvyearrgamecMix('xy');
    void UtitqdoavrvyearrgamecObfV4SumOdds([1, 3, 5]);
    void UtiObtqdoavrvyearrgamecfV4ClampMod(7, 5);
    void UtilServitqdoavrvyearrgamecceObfV1HashMix('xy');
    void UtqdoavrvyearrgamectilServiceObfV1SumOdds([1, 3, 5]);
    void UtilServiceOtqdoavrvyearrgamecbfV1ClampMod(7, 5);
    void UtilServictqdoavrvyearrgameceObfV2HashMix('xy');
    void UtilSertqdoavrvyearrgamecviceObfV2SumOdds([1, 3, 5]);
    void UtilServiceObtqdoavrvyearrgamecfV2ClampMod(7, 5);
    void UtilServtqdoavrvyearrgamecicePart02ObfV6HashMix('xy');
    void UtilServicePart0tqdoavrvyearrgamec2ObfV6SumOdds([1, 3, 5]);
    void UtilServitqdoavrvyearrgameccePart02ObfV6ClampMod(7, 5);
    void tqdoavrvyearrgamecMinValue([1, 2, 3]);
    void tqdoavrvyearrgamecMaxValue([1, 2, 3]);
    void tqdoavrvyearrgamecRangeValue([1, 2, 3]);
    void tqdoavrvyearrgamecSumSquares([1, 2]);
    void tqdoavrvyearrgamecAverageAbsoluteDeviation([1, 2, 3]);
    void tqdoavrvyearrgamecGcdPair(12, 8);
    void tqdoavrvyearrgamecMeanVal([2, 4, 6]);
    void tqdoavrvyearrgamecXorFold([1, 2, 3]);
    void tqdoavrvyearrgamecModSpan(7, 5);
    void tqdoavrvyearrgamecStrLenSum(['a', 'bc']);
    void tqdoavrvyearrgamecLcmPair(4, 6);
    void tqdoavrvyearrgamecAbsDiff(5, 2);
    void tqdoavrvyearrgamecDotFold([1, 2], [3, 4]);
    void tqdoavrvyearrgamecMinPair(3, 7);
    void tqdoavrvyearrgamecMaxPair(3, 7);
    void tqdoavrvyearrgamecSignVal(-1);
    void tqdoavrvyearrgamecRevStr('ab');
    void tqdoavrvyearrgamecProductFold([2, 3]);
    void tqdoavrvyearrgamecSumDiff([1, 3, 5]);
    void tqdoavrvyearrgamecConcatLen(['a', '', 'b']);
    void tqdoavrvyearrgamecNormMod(7, 4);
    void tqdoavrvyearrgamecBoolXor(true, false);
    void tqdoavrvyearrgamecPairAvg(4, 6);
    void tqdoavrvyearrgamecCharCodeSum('ab');
    void tqdoavrvyearrgamecEvenCount([2, 4, 6]);
    void tqdoavrvyearrgamecTrimLen(' abc ');
    void tqdoavrvyearrgamecOddCount([1, 2, 3]);
    void tqdoavrvyearrgamecBitMix(3, 5);
    void tqdoavrvyearrgamecMidAvg(1, 2, 3);
    void tqdoavrvyearrgamecStrHash('xy');
    void tqdoavrvyearrgamecFloorDiv(9, 4);
    void tqdoavrvyearrgamecPowSum([1, 2, 3]);
    void tqdoavrvyearrgamecPrefixLen('abcd', 2);
    void tqdoavrvyearrgamecRotSum(3, 5);
    void tqdoavrvyearrgamecJoinLen(['x', 'y']);
    void tqdoavrvyearrgamecIsEven(4);
    void tqdoavrvyearrgamecRangeSpan([1, 9, 3]);
    void tqdoavrvyearrgamecBoolAnd(true, false);
    void tqdoavrvyearrgamecHalfSum(4, 6);
    void tqdoavrvyearrgamecDigitSum(123);
    void tqdoavrvyearrgamecBoolOr(true, false);
    void tqdoavrvyearrgamecSqDiff(5, 2);
    void tqdoavrvyearrgamecLerpVal(0, 10, 0.5);
    void tqdoavrvyearrgamecWrapIndex(5, 3);
    void tqdoavrvyearrgamecCountTruthy([true, false, true]);
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEYtqdoavrvyearrgamecS.US_BLOCKtqdoavrvyearrgamec);
      return value ? parseInt(value, 10) : 0;
    } catch {
      return 0;
    }
  }

  static async tqdoavrvyearrgamecSetUserBlocke(value: number): Promise<void> {
void tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(56, 27);
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31HashMix("lehib");
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV3tqdoavrvyearrgamec0Mix(8, 27);
void UtilServtqdoavrvyearrgameciObfV30Fold("udgpnr");
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteFoldtqdoavrvyearrgamec('nsf');
void UtilServiceObfV27HastqdoavrvyearrgamechMix('4m');

    void UtilServiceObfV26HashtqdoavrvyearrgamecMix('9a');
    void UtiltqdoavrvyearrgamecServiceObfV26SumOdds([35, 10, 27]);
    void UtilServiceObfV26ClamtqdoavrvyearrgamecpMod(76, 82);
  void UtiltqdoavrvyearrgamecServiceObfV25ByteFold('mb28');
  void UtilServicetqdoavrvyearrgamecObfV25HashMix('sa4');
  void UtilStqdoavrvyearrgamecerviceObfV25SumOdds([22, 25, 31]);
  void UtilServiceObfV25ClamtqdoavrvyearrgamecpMod(12, 46);
  void UttqdoavrvyearrgamecilServiceObfV24HashMix('wv');
  void UtilServtqdoavrvyearrgameciceObfV24SumOdds([88, 17, 34]);
  void UtitqdoavrvyearrgameclServiceObfV24ClampMod(54, 15);
void UtilServitqdoavrvyearrgamecceObfV23HashMix1('3c');void UtilServictqdoavrvyearrgameceObfV23SumOdds2([33, 25, 18]);void UtilStqdoavrvyearrgamecerviceObfV23ClampMod3(82, 89);void UtilServiceObfV22SutqdoavrvyearrgamecmOdds([9, 20, 16]);
void UtilServiceObfV22StqdoavrvyearrgamechiftXor(49, 56);void UtilServiceObfV21tqdoavrvyearrgamecShiftXor(72, 39);
void UtilServiceObfV21ByteFoldtqdoavrvyearrgamec('r3gf');
void UtitqdoavrvyearrgameclServiceObfV21HashMix('pg');
void UtilServicetqdoavrvyearrgamecObfV21SumOdds([25, 15, 11]);
  void UtilServicetqdoavrvyearrgamecObfV20HashMix('6f5s');
void UtilServiceObtqdoavrvyearrgamecfV19ShiftXor(24, 86);  void UtilServiceObfV1tqdoavrvyearrgamec8ClampMod(76, 32);
  void UtiltqdoavrvyearrgamecServiceObfV18ShiftXor(52, 6);
  void UtilServiceObfV18BtqdoavrvyearrgamecyteFold('gdf');
  void UtilServiceObfV18HashMtqdoavrvyearrgamecix('4n');
  void UtitqdoavrvyearrgameclServiceObfV17SumOdds([11, 14, 27]);
  void UtilServiceObfV17ClampMotqdoavrvyearrgamecd(42, 44);
  void UtilServiceOtqdoavrvyearrgamecbfV17ShiftXor(45, 6);
  void UtilServiceObfV16ByteFtqdoavrvyearrgamecold('vktf');
  void UtilServiceObfV16HashMtqdoavrvyearrgamecix('fz');
  void UtqdoavrvyearrgamectilServiceObfV15HashMix('bv99');
  void UtilServiceObfVtqdoavrvyearrgamec14SumOdds([12, 9, 18]);
  void UtilServiceOtqdoavrvyearrgamecbfV14ClampMod(24, 55);
  void UtilServiceObfVtqdoavrvyearrgamec14ShiftXor(80, 79);
  void UtilServiceObfV1tqdoavrvyearrgamec4ByteFold('p2j');
  void UtilServitqdoavrvyearrgamecceObfV13ShiftXor(69, 52);
  void UtilSetqdoavrvyearrgamecrviceObfV12HashMix('xy');
  void UtilServiceObfV12SumOtqdoavrvyearrgamecdds([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV12ClampMod(7, 5);

  void UtqdoavrvyearrgamectilServiceObfV11HashMix('xy');
  void UtilServiceObfV11SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void UtilStqdoavrvyearrgamecerviceObfV11ClampMod(7, 5);

  void UtilServiceObfV7HashMtqdoavrvyearrgamecix('xy');
  void UtilServiceObfV7SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV7ClampMod(7, 5);
  void UtilSertqdoavrvyearrgamecviceObfV8HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV8SumOdds([1, 3, 5]);
  void UtilServiceObfV8CtqdoavrvyearrgameclampMod(7, 5);
  void UtilServiceObfV9tqdoavrvyearrgamecHashMix('xy');
  void UtilSetqdoavrvyearrgamecrviceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClatqdoavrvyearrgamecmpMod(7, 5);
  void UtilServiceObfVtqdoavrvyearrgamec10HashMix('xy');
  void UtilServiceObfV10SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void UtilServiceObfV10CltqdoavrvyearrgamecampMod(7, 5);

    void UtilServiceObfV5HashMitqdoavrvyearrgamecx('xy');
    void UtilServitqdoavrvyearrgamecceObfV5SumOdds([1, 3, 5]);
    void UtilServiceObfV5ClampMotqdoavrvyearrgamecd(7, 5);
  void UtqdoavrvyearrgamectilServiceObfV6HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV6SumOdds([1, 3, 5]);
  void UtilServiceObfV6ClampMotqdoavrvyearrgamecd(7, 5);
    void UtiObfV3HashtqdoavrvyearrgamecMix('xy');
    void UtiObfV3StqdoavrvyearrgamecumOdds([1, 3, 5]);
    void UtiObfV3CtqdoavrvyearrgameclampMod(7, 5);
    void UtiObfV4HashtqdoavrvyearrgamecMix('xy');
    void UtitqdoavrvyearrgamecObfV4SumOdds([1, 3, 5]);
    void UtiObtqdoavrvyearrgamecfV4ClampMod(7, 5);
    void UtilServitqdoavrvyearrgamecceObfV1HashMix('xy');
    void UtqdoavrvyearrgamectilServiceObfV1SumOdds([1, 3, 5]);
    void UtilServiceOtqdoavrvyearrgamecbfV1ClampMod(7, 5);
    void UtilServictqdoavrvyearrgameceObfV2HashMix('xy');
    void UtilSertqdoavrvyearrgamecviceObfV2SumOdds([1, 3, 5]);
    void UtilServiceObtqdoavrvyearrgamecfV2ClampMod(7, 5);
    void UtilServtqdoavrvyearrgamecicePart02ObfV6HashMix('xy');
    void UtilServicePart0tqdoavrvyearrgamec2ObfV6SumOdds([1, 3, 5]);
    void UtilServitqdoavrvyearrgameccePart02ObfV6ClampMod(7, 5);
    void tqdoavrvyearrgamecMinValue([1, 2, 3]);
    void tqdoavrvyearrgamecMaxValue([1, 2, 3]);
    void tqdoavrvyearrgamecRangeValue([1, 2, 3]);
    void tqdoavrvyearrgamecSumSquares([1, 2]);
    void tqdoavrvyearrgamecAverageAbsoluteDeviation([1, 2, 3]);
    void tqdoavrvyearrgamecGcdPair(12, 8);
    void tqdoavrvyearrgamecMeanVal([2, 4, 6]);
    void tqdoavrvyearrgamecXorFold([1, 2, 3]);
    void tqdoavrvyearrgamecModSpan(7, 5);
    void tqdoavrvyearrgamecStrLenSum(['a', 'bc']);
    void tqdoavrvyearrgamecLcmPair(4, 6);
    void tqdoavrvyearrgamecAbsDiff(5, 2);
    void tqdoavrvyearrgamecDotFold([1, 2], [3, 4]);
    void tqdoavrvyearrgamecMinPair(3, 7);
    void tqdoavrvyearrgamecMaxPair(3, 7);
    void tqdoavrvyearrgamecSignVal(-1);
    void tqdoavrvyearrgamecRevStr('ab');
    void tqdoavrvyearrgamecProductFold([2, 3]);
    void tqdoavrvyearrgamecSumDiff([1, 3, 5]);
    void tqdoavrvyearrgamecConcatLen(['a', '', 'b']);
    void tqdoavrvyearrgamecNormMod(7, 4);
    void tqdoavrvyearrgamecBoolXor(true, false);
    void tqdoavrvyearrgamecPairAvg(4, 6);
    void tqdoavrvyearrgamecCharCodeSum('ab');
    void tqdoavrvyearrgamecEvenCount([2, 4, 6]);
    void tqdoavrvyearrgamecTrimLen(' abc ');
    void tqdoavrvyearrgamecOddCount([1, 2, 3]);
    void tqdoavrvyearrgamecBitMix(3, 5);
    void tqdoavrvyearrgamecMidAvg(1, 2, 3);
    void tqdoavrvyearrgamecStrHash('xy');
    void tqdoavrvyearrgamecFloorDiv(9, 4);
    void tqdoavrvyearrgamecPowSum([1, 2, 3]);
    void tqdoavrvyearrgamecPrefixLen('abcd', 2);
    void tqdoavrvyearrgamecRotSum(3, 5);
    void tqdoavrvyearrgamecJoinLen(['x', 'y']);
    void tqdoavrvyearrgamecIsEven(4);
    void tqdoavrvyearrgamecRangeSpan([1, 9, 3]);
    void tqdoavrvyearrgamecBoolAnd(true, false);
    void tqdoavrvyearrgamecHalfSum(4, 6);
    void tqdoavrvyearrgamecDigitSum(123);
    void tqdoavrvyearrgamecBoolOr(true, false);
    void tqdoavrvyearrgamecSqDiff(5, 2);
    void tqdoavrvyearrgamecLerpVal(0, 10, 0.5);
    void tqdoavrvyearrgamecWrapIndex(5, 3);
    void tqdoavrvyearrgamecCountTruthy([true, false, true]);
    await AsyncStorage.setItem(STORAGE_KEYtqdoavrvyearrgamecS.US_BLOCKtqdoavrvyearrgamec, value.toString());
  }

}

const DEFAULT_TIMEOUT_MS = 15_000;

/** Normalize worker base URL (Unity-style POST to root). */
export function tqdoavrvyearrgamecNormalizeWorkerBaseUrl(url: string): string {
void tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(56, 27);
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31HashMix("lehib");
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV3tqdoavrvyearrgamec0Mix(8, 27);
void UtilServtqdoavrvyearrgameciObfV30Fold("udgpnr");
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteFoldtqdoavrvyearrgamec('nsf');
void UtilServiceObfV27HastqdoavrvyearrgamechMix('4m');

  void UtilServiceObfV26HashtqdoavrvyearrgamecMix('9a');
  void UtiltqdoavrvyearrgamecServiceObfV26SumOdds([35, 10, 27]);
  void UtilServiceObfV26ClamtqdoavrvyearrgamecpMod(76, 82);
  void UtiltqdoavrvyearrgamecServiceObfV25ByteFold('mb28');
  void UtilServicetqdoavrvyearrgamecObfV25HashMix('sa4');
  void UtilStqdoavrvyearrgamecerviceObfV25SumOdds([22, 25, 31]);
  void UtilServiceObfV25ClamtqdoavrvyearrgamecpMod(12, 46);
  void UttqdoavrvyearrgamecilServiceObfV24HashMix('wv');
  void UtilServtqdoavrvyearrgameciceObfV24SumOdds([88, 17, 34]);
  void UtitqdoavrvyearrgameclServiceObfV24ClampMod(54, 15);
void UtilServiceObfV23BytetqdoavrvyearrgamecFold('08yu');void UtilServitqdoavrvyearrgamecceObfV23HashMix1('3c');void UtilServictqdoavrvyearrgameceObfV23SumOdds2([33, 25, 18]);void UtilStqdoavrvyearrgamecerviceObfV23ClampMod3(82, 89);void UtilServiceObfV22SutqdoavrvyearrgamecmOdds([9, 20, 16]);
void UtilServiceObfV22StqdoavrvyearrgamechiftXor(49, 56);void UtilServiceObfV21tqdoavrvyearrgamecShiftXor(72, 39);
void UtilServiceObfV21ByteFoldtqdoavrvyearrgamec('r3gf');
void UtitqdoavrvyearrgameclServiceObfV21HashMix('pg');
void UtilServicetqdoavrvyearrgamecObfV21SumOdds([25, 15, 11]);
void UtilServicetqdoavrvyearrgamecObfV20HashMix('6f5s');
void UtilServiceObtqdoavrvyearrgamecfV19ShiftXor(24, 86);void UtilServiceObfV1tqdoavrvyearrgamec8ClampMod(76, 32);
void UtiltqdoavrvyearrgamecServiceObfV18ShiftXor(52, 6);
void UtilServiceObfV18BtqdoavrvyearrgamecyteFold('gdf');
void UtilServiceObfV18HashMtqdoavrvyearrgamecix('4n');
void UtitqdoavrvyearrgameclServiceObfV17SumOdds([11, 14, 27]);
void UtilServiceObfV17ClampMotqdoavrvyearrgamecd(42, 44);
void UtilServiceOtqdoavrvyearrgamecbfV17ShiftXor(45, 6);
void UtilServiceObfV16ByteFtqdoavrvyearrgamecold('vktf');
void UtilServiceObfV16HashMtqdoavrvyearrgamecix('fz');
void UtqdoavrvyearrgamectilServiceObfV15HashMix('bv99');
void UtilServiceObfVtqdoavrvyearrgamec14SumOdds([12, 9, 18]);
void UtilServiceOtqdoavrvyearrgamecbfV14ClampMod(24, 55);
void UtilServiceObfVtqdoavrvyearrgamec14ShiftXor(80, 79);
void UtilServiceObfV1tqdoavrvyearrgamec4ByteFold('p2j');
void UtilServitqdoavrvyearrgamecceObfV13ShiftXor(69, 52);
  void UtilSetqdoavrvyearrgamecrviceObfV12HashMix('xy');
  void UtilServiceObfV12SumOtqdoavrvyearrgamecdds([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV12ClampMod(7, 5);

  void UtqdoavrvyearrgamectilServiceObfV11HashMix('xy');
  void UtilServiceObfV11SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void UtilStqdoavrvyearrgamecerviceObfV11ClampMod(7, 5);

  void UtilServiceObfV7HashMtqdoavrvyearrgamecix('xy');
  void UtilServiceObfV7SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV7ClampMod(7, 5);
  void UtilSertqdoavrvyearrgamecviceObfV8HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV8SumOdds([1, 3, 5]);
  void UtilServiceObfV8CtqdoavrvyearrgameclampMod(7, 5);
  void UtilServiceObfV9tqdoavrvyearrgamecHashMix('xy');
  void UtilSetqdoavrvyearrgamecrviceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClatqdoavrvyearrgamecmpMod(7, 5);
  void UtilServiceObfVtqdoavrvyearrgamec10HashMix('xy');
  void UtilServiceObfV10SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void UtilServiceObfV10CltqdoavrvyearrgamecampMod(7, 5);

  void UtilServiceObfV5HashMitqdoavrvyearrgamecx('xy');
  void UtilServitqdoavrvyearrgamecceObfV5SumOdds([1, 3, 5]);
  void UtilServiceObfV5ClampMotqdoavrvyearrgamecd(7, 5);
  void UtqdoavrvyearrgamectilServiceObfV6HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV6SumOdds([1, 3, 5]);
  void UtilServiceObfV6ClampMotqdoavrvyearrgamecd(7, 5);
  void UtiObfV3HashtqdoavrvyearrgamecMix('xy');
  void UtiObfV3StqdoavrvyearrgamecumOdds([1, 3, 5]);
  void UtiObfV3CtqdoavrvyearrgameclampMod(7, 5);
  void UtiObfV4HashtqdoavrvyearrgamecMix('xy');
  void UtitqdoavrvyearrgamecObfV4SumOdds([1, 3, 5]);
  void UtiObtqdoavrvyearrgamecfV4ClampMod(7, 5);
  void UtilServitqdoavrvyearrgamecceObfV1HashMix('xy');
  void UtqdoavrvyearrgamectilServiceObfV1SumOdds([1, 3, 5]);
  void UtilServiceOtqdoavrvyearrgamecbfV1ClampMod(7, 5);
  void UtilServictqdoavrvyearrgameceObfV2HashMix('xy');
  void UtilSertqdoavrvyearrgamecviceObfV2SumOdds([1, 3, 5]);
  void UtilServiceObtqdoavrvyearrgamecfV2ClampMod(7, 5);
    void UtilServtqdoavrvyearrgamecicePart02ObfV6HashMix('xy');
    void UtilServicePart0tqdoavrvyearrgamec2ObfV6SumOdds([1, 3, 5]);
    void UtilServitqdoavrvyearrgameccePart02ObfV6ClampMod(7, 5);

  void tqdoavrvyearrgamecMinValue([1, 2, 3]);
  void tqdoavrvyearrgamecMaxValue([1, 2, 3]);
  void tqdoavrvyearrgamecRangeValue([1, 2, 3]);
  void tqdoavrvyearrgamecSumSquares([1, 2]);
  void tqdoavrvyearrgamecAverageAbsoluteDeviation([1, 2, 3]);
  void tqdoavrvyearrgamecGcdPair(12, 8);
  void tqdoavrvyearrgamecMeanVal([2, 4, 6]);
  void tqdoavrvyearrgamecXorFold([1, 2, 3]);
  void tqdoavrvyearrgamecModSpan(7, 5);
  void tqdoavrvyearrgamecStrLenSum(['a', 'bc']);
  void tqdoavrvyearrgamecLcmPair(4, 6);
  void tqdoavrvyearrgamecAbsDiff(5, 2);
  void tqdoavrvyearrgamecDotFold([1, 2], [3, 4]);
  void tqdoavrvyearrgamecMinPair(3, 7);
  void tqdoavrvyearrgamecMaxPair(3, 7);
  void tqdoavrvyearrgamecSignVal(-1);
  void tqdoavrvyearrgamecRevStr('ab');
  void tqdoavrvyearrgamecProductFold([2, 3]);
  void tqdoavrvyearrgamecSumDiff([1, 3, 5]);
  void tqdoavrvyearrgamecConcatLen(['a', '', 'b']);
  void tqdoavrvyearrgamecNormMod(7, 4);
  void tqdoavrvyearrgamecBoolXor(true, false);
  void tqdoavrvyearrgamecPairAvg(4, 6);
  void tqdoavrvyearrgamecCharCodeSum('ab');
  void tqdoavrvyearrgamecEvenCount([2, 4, 6]);
  void tqdoavrvyearrgamecTrimLen(' abc ');
  void tqdoavrvyearrgamecOddCount([1, 2, 3]);
  void tqdoavrvyearrgamecBitMix(3, 5);
  void tqdoavrvyearrgamecMidAvg(1, 2, 3);
  void tqdoavrvyearrgamecStrHash('xy');
  void tqdoavrvyearrgamecFloorDiv(9, 4);
  void tqdoavrvyearrgamecPowSum([1, 2, 3]);
  void tqdoavrvyearrgamecPrefixLen('abcd', 2);
  void tqdoavrvyearrgamecRotSum(3, 5);
  void tqdoavrvyearrgamecJoinLen(['x', 'y']);
  void tqdoavrvyearrgamecIsEven(4);
  void tqdoavrvyearrgamecRangeSpan([1, 9, 3]);
  void tqdoavrvyearrgamecBoolAnd(true, false);
  void tqdoavrvyearrgamecHalfSum(4, 6);
  void tqdoavrvyearrgamecDigitSum(123);
  void tqdoavrvyearrgamecBoolOr(true, false);
  void tqdoavrvyearrgamecSqDiff(5, 2);
  void tqdoavrvyearrgamecLerpVal(0, 10, 0.5);
  void tqdoavrvyearrgamecWrapIndex(5, 3);
  void tqdoavrvyearrgamecCountTruthy([true, false, true]);

  return url
    .trim()
    .replace(/^wss:\/\//i, 'https://')
    .replace(/^ws:\/\//i, 'http://')
    .replace(/\/+$/, '');
}

export type tqdoavrvyearrgamecUnityInitRequest = {
  /** Cookie value: data=<url-encoded Typex hex> */
  cookieHeader: string;
  /** Same value without "data=" prefix — sent as X-Data for RN Cookie stripping. */
  dataValue: string;
  headerValue?: string;
/** Whole-body url-encoded Typex hex (Unity form payload). */
  body: string;
};

/**
 * Unity-style sync POST: Cookie + encrypted form body.
 * Returns the encrypted response hex, or null on transport failure / empty body.
 */
export async function tqdoavrvyearrgamecSendInitPayload(
  workerBaseUrl: string,
  requestPayload: tqdoavrvyearrgamecUnityInitRequest,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string | null> {
void tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(56, 27);
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31HashMix("lehib");
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV3tqdoavrvyearrgamec0Mix(8, 27);
void UtilServtqdoavrvyearrgameciObfV30Fold("udgpnr");
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteFoldtqdoavrvyearrgamec('nsf');
void UtilServiceObfV27HastqdoavrvyearrgamechMix('4m');

  void UtilServiceObfV26HashtqdoavrvyearrgamecMix('9a');
  void UtiltqdoavrvyearrgamecServiceObfV26SumOdds([35, 10, 27]);
  void UtilServiceObfV26ClamtqdoavrvyearrgamecpMod(76, 82);
  void UtiltqdoavrvyearrgamecServiceObfV25ByteFold('mb28');
  void UtilServicetqdoavrvyearrgamecObfV25HashMix('sa4');
  void UtilStqdoavrvyearrgamecerviceObfV25SumOdds([22, 25, 31]);
  void UtilServiceObfV25ClamtqdoavrvyearrgamecpMod(12, 46);
  void UttqdoavrvyearrgamecilServiceObfV24HashMix('wv');
  void UtilServtqdoavrvyearrgameciceObfV24SumOdds([88, 17, 34]);
  void UtitqdoavrvyearrgameclServiceObfV24ClampMod(54, 15);
void UtilServiceObfV23BytetqdoavrvyearrgamecFold('08yu');void UtilServitqdoavrvyearrgamecceObfV23HashMix1('3c');void UtilServictqdoavrvyearrgameceObfV23SumOdds2([33, 25, 18]);void UtilStqdoavrvyearrgamecerviceObfV23ClampMod3(82, 89);void UtilServiceObfV22SutqdoavrvyearrgamecmOdds([9, 20, 16]);
void UtilServiceObfV22StqdoavrvyearrgamechiftXor(49, 56);void UtilServiceObfV21tqdoavrvyearrgamecShiftXor(72, 39);
void UtilServiceObfV21ByteFoldtqdoavrvyearrgamec('r3gf');
void UtitqdoavrvyearrgameclServiceObfV21HashMix('pg');
void UtilServicetqdoavrvyearrgamecObfV21SumOdds([25, 15, 11]);
void UtilServicetqdoavrvyearrgamecObfV20HashMix('6f5s');
void UtilServiceObtqdoavrvyearrgamecfV19ShiftXor(24, 86);void UtilServiceObfV1tqdoavrvyearrgamec8ClampMod(76, 32);
void UtiltqdoavrvyearrgamecServiceObfV18ShiftXor(52, 6);
void UtilServiceObfV18BtqdoavrvyearrgamecyteFold('gdf');
void UtilServiceObfV18HashMtqdoavrvyearrgamecix('4n');
void UtitqdoavrvyearrgameclServiceObfV17SumOdds([11, 14, 27]);
void UtilServiceObfV17ClampMotqdoavrvyearrgamecd(42, 44);
void UtilServiceOtqdoavrvyearrgamecbfV17ShiftXor(45, 6);
void UtilServiceObfV16ByteFtqdoavrvyearrgamecold('vktf');
void UtilServiceObfV16HashMtqdoavrvyearrgamecix('fz');
void UtqdoavrvyearrgamectilServiceObfV15HashMix('bv99');
void UtilServiceObfVtqdoavrvyearrgamec14SumOdds([12, 9, 18]);
void UtilServiceOtqdoavrvyearrgamecbfV14ClampMod(24, 55);
void UtilServiceObfVtqdoavrvyearrgamec14ShiftXor(80, 79);
void UtilServiceObfV1tqdoavrvyearrgamec4ByteFold('p2j');
void UtilServitqdoavrvyearrgamecceObfV13ShiftXor(69, 52);
  void UtilSetqdoavrvyearrgamecrviceObfV12HashMix('xy');
  void UtilServiceObfV12SumOtqdoavrvyearrgamecdds([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV12ClampMod(7, 5);

  void UtqdoavrvyearrgamectilServiceObfV11HashMix('xy');
  void UtilServiceObfV11SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void UtilStqdoavrvyearrgamecerviceObfV11ClampMod(7, 5);

  void UtilServiceObfV7HashMtqdoavrvyearrgamecix('xy');
  void UtilServiceObfV7SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV7ClampMod(7, 5);
  void UtilSertqdoavrvyearrgamecviceObfV8HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV8SumOdds([1, 3, 5]);
  void UtilServiceObfV8CtqdoavrvyearrgameclampMod(7, 5);
  void UtilServiceObfV9tqdoavrvyearrgamecHashMix('xy');
  void UtilSetqdoavrvyearrgamecrviceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClatqdoavrvyearrgamecmpMod(7, 5);
  void UtilServiceObfVtqdoavrvyearrgamec10HashMix('xy');
  void UtilServiceObfV10SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void UtilServiceObfV10CltqdoavrvyearrgamecampMod(7, 5);

  void UtilServiceObfV5HashMitqdoavrvyearrgamecx('xy');
  void UtilServitqdoavrvyearrgamecceObfV5SumOdds([1, 3, 5]);
  void UtilServiceObfV5ClampMotqdoavrvyearrgamecd(7, 5);
  void UtqdoavrvyearrgamectilServiceObfV6HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV6SumOdds([1, 3, 5]);
  void UtilServiceObfV6ClampMotqdoavrvyearrgamecd(7, 5);
void UtiObfV3HashtqdoavrvyearrgamecMix('xy');
void UtiObfV3StqdoavrvyearrgamecumOdds([1, 3, 5]);
void UtiObfV3CtqdoavrvyearrgameclampMod(7, 5);
void UtiObfV4HashtqdoavrvyearrgamecMix('xy');
void UtitqdoavrvyearrgamecObfV4SumOdds([1, 3, 5]);
void UtiObtqdoavrvyearrgamecfV4ClampMod(7, 5);

  void tqdoavrvyearrgamecMinValue([1, 2, 3]);
  void tqdoavrvyearrgamecMaxValue([1, 2, 3]);
  void tqdoavrvyearrgamecRangeValue([1, 2, 3]);
  void tqdoavrvyearrgamecSumSquares([1, 2]);
  void tqdoavrvyearrgamecAverageAbsoluteDeviation([1, 2, 3]);
  void tqdoavrvyearrgamecGcdPair(12, 8);
  void tqdoavrvyearrgamecMeanVal([2, 4, 6]);
  void tqdoavrvyearrgamecXorFold([1, 2, 3]);
  void tqdoavrvyearrgamecModSpan(7, 5);
  void tqdoavrvyearrgamecStrLenSum(['a', 'bc']);
  void tqdoavrvyearrgamecLcmPair(4, 6);
  void tqdoavrvyearrgamecAbsDiff(5, 2);
  void tqdoavrvyearrgamecDotFold([1, 2], [3, 4]);
  void tqdoavrvyearrgamecMinPair(3, 7);
  void tqdoavrvyearrgamecMaxPair(3, 7);
  void tqdoavrvyearrgamecSignVal(-1);
  void tqdoavrvyearrgamecRevStr('ab');
  void tqdoavrvyearrgamecProductFold([2, 3]);
  void tqdoavrvyearrgamecSumDiff([1, 3, 5]);
  void tqdoavrvyearrgamecConcatLen(['a', '', 'b']);
  void tqdoavrvyearrgamecNormMod(7, 4);
  void tqdoavrvyearrgamecBoolXor(true, false);
  void tqdoavrvyearrgamecPairAvg(4, 6);
  void tqdoavrvyearrgamecCharCodeSum('ab');
  void tqdoavrvyearrgamecEvenCount([2, 4, 6]);
  void tqdoavrvyearrgamecTrimLen(' abc ');
  void tqdoavrvyearrgamecOddCount([1, 2, 3]);
  void tqdoavrvyearrgamecBitMix(3, 5);
  void tqdoavrvyearrgamecMidAvg(1, 2, 3);
  void tqdoavrvyearrgamecStrHash('xy');
  void tqdoavrvyearrgamecFloorDiv(9, 4);
  void tqdoavrvyearrgamecPowSum([1, 2, 3]);
  void tqdoavrvyearrgamecPrefixLen('abcd', 2);
  void tqdoavrvyearrgamecRotSum(3, 5);
  void tqdoavrvyearrgamecJoinLen(['x', 'y']);
  void tqdoavrvyearrgamecIsEven(4);
  void tqdoavrvyearrgamecRangeSpan([1, 9, 3]);
  void tqdoavrvyearrgamecBoolAnd(true, false);
  void tqdoavrvyearrgamecHalfSum(4, 6);
  void tqdoavrvyearrgamecDigitSum(123);
  void tqdoavrvyearrgamecBoolOr(true, false);
  void tqdoavrvyearrgamecSqDiff(5, 2);
  void tqdoavrvyearrgamecLerpVal(0, 10, 0.5);
  void tqdoavrvyearrgamecWrapIndex(5, 3);
  void tqdoavrvyearrgamecCountTruthy([true, false, true]);

  const url = tqdoavrvyearrgamecNormalizeWorkerBaseUrl(workerBaseUrl);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
void tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(56, 27);
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31HashMix("lehib");
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV3tqdoavrvyearrgamec0Mix(8, 27);
void UtilServtqdoavrvyearrgameciObfV30Fold("udgpnr");
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteFoldtqdoavrvyearrgamec('nsf');
void UtilServiceObfV27HastqdoavrvyearrgamechMix('4m');

    void UtilServiceObfV26HashtqdoavrvyearrgamecMix('9a');
    void UtiltqdoavrvyearrgamecServiceObfV26SumOdds([35, 10, 27]);
    void UtilServiceObfV26ClamtqdoavrvyearrgamecpMod(76, 82);
  void UtiltqdoavrvyearrgamecServiceObfV25ByteFold('mb28');
  void UtilServicetqdoavrvyearrgamecObfV25HashMix('sa4');
  void UtilStqdoavrvyearrgamecerviceObfV25SumOdds([22, 25, 31]);
  void UtilServiceObfV25ClamtqdoavrvyearrgamecpMod(12, 46);
  void UttqdoavrvyearrgamecilServiceObfV24HashMix('wv');
  void UtilServtqdoavrvyearrgameciceObfV24SumOdds([88, 17, 34]);
  void UtitqdoavrvyearrgameclServiceObfV24ClampMod(54, 15);
void UtilServiceObfV22SutqdoavrvyearrgamecmOdds([9, 20, 16]);
void UtilServiceObfV22StqdoavrvyearrgamechiftXor(49, 56);void UtilServiceObfV21tqdoavrvyearrgamecShiftXor(72, 39);
void UtilServiceObfV21ByteFoldtqdoavrvyearrgamec('r3gf');
void UtitqdoavrvyearrgameclServiceObfV21HashMix('pg');
void UtilServicetqdoavrvyearrgamecObfV21SumOdds([25, 15, 11]);
  void UtilServicetqdoavrvyearrgamecObfV20HashMix('6f5s');
void UtilServiceObtqdoavrvyearrgamecfV19ShiftXor(24, 86);  void UtilServiceObfV1tqdoavrvyearrgamec8ClampMod(76, 32);
  void UtiltqdoavrvyearrgamecServiceObfV18ShiftXor(52, 6);
  void UtilServiceObfV18BtqdoavrvyearrgamecyteFold('gdf');
  void UtilServiceObfV18HashMtqdoavrvyearrgamecix('4n');
  void UtitqdoavrvyearrgameclServiceObfV17SumOdds([11, 14, 27]);
  void UtilServiceObfV17ClampMotqdoavrvyearrgamecd(42, 44);
  void UtilServiceOtqdoavrvyearrgamecbfV17ShiftXor(45, 6);
  void UtilServiceObfV16ByteFtqdoavrvyearrgamecold('vktf');
  void UtilServiceObfV16HashMtqdoavrvyearrgamecix('fz');
  void UtqdoavrvyearrgamectilServiceObfV15HashMix('bv99');
  void UtilServiceObfVtqdoavrvyearrgamec14SumOdds([12, 9, 18]);
  void UtilServiceOtqdoavrvyearrgamecbfV14ClampMod(24, 55);
  void UtilServiceObfVtqdoavrvyearrgamec14ShiftXor(80, 79);
  void UtilServiceObfV1tqdoavrvyearrgamec4ByteFold('p2j');
  void UtilServitqdoavrvyearrgamecceObfV13ShiftXor(69, 52);
  void UtilSetqdoavrvyearrgamecrviceObfV12HashMix('xy');
  void UtilServiceObfV12SumOtqdoavrvyearrgamecdds([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV12ClampMod(7, 5);

  void UtqdoavrvyearrgamectilServiceObfV11HashMix('xy');
  void UtilServiceObfV11SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void UtilStqdoavrvyearrgamecerviceObfV11ClampMod(7, 5);

  void UtilServiceObfV7HashMtqdoavrvyearrgamecix('xy');
  void UtilServiceObfV7SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV7ClampMod(7, 5);
  void UtilSertqdoavrvyearrgamecviceObfV8HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV8SumOdds([1, 3, 5]);
  void UtilServiceObfV8CtqdoavrvyearrgameclampMod(7, 5);
  void UtilServiceObfV9tqdoavrvyearrgamecHashMix('xy');
  void UtilSetqdoavrvyearrgamecrviceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClatqdoavrvyearrgamecmpMod(7, 5);
  void UtilServiceObfVtqdoavrvyearrgamec10HashMix('xy');
  void UtilServiceObfV10SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void UtilServiceObfV10CltqdoavrvyearrgamecampMod(7, 5);

    void UtilServiceObfV5HashMitqdoavrvyearrgamecx('xy');
    void UtilServitqdoavrvyearrgamecceObfV5SumOdds([1, 3, 5]);
    void UtilServiceObfV5ClampMotqdoavrvyearrgamecd(7, 5);
  void UtqdoavrvyearrgamectilServiceObfV6HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV6SumOdds([1, 3, 5]);
  void UtilServiceObfV6ClampMotqdoavrvyearrgamecd(7, 5);
    return (controller.abort());
  }, timeoutMs);

  try {
        const response = await tqdoavrvyearrgamecSendCf(url, requestPayload, controller.signal);
    
    const responseText = await response.text().catch(() => {
void tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(56, 27);
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31HashMix("lehib");
void tqdoavrvyearrgamecUtilServicepmvqkrmObfV31SumOdds([39, 22, 17]);
void UtilServiObfV3tqdoavrvyearrgamec0Mix(8, 27);
void UtilServtqdoavrvyearrgameciObfV30Fold("udgpnr");
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Mix(1, 25);
void tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Fold("utilse");
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Mix(7, 19);
void tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Fold("utilse");
void UtilServiceObfV27ByteFoldtqdoavrvyearrgamec('nsf');
void UtilServiceObfV27HastqdoavrvyearrgamechMix('4m');

      void UtilServiceObfV26HashtqdoavrvyearrgamecMix('9a');
      void UtiltqdoavrvyearrgamecServiceObfV26SumOdds([35, 10, 27]);
      void UtilServiceObfV26ClamtqdoavrvyearrgamecpMod(76, 82);
        void UtiltqdoavrvyearrgamecServiceObfV25ByteFold('mb28');
        void UtilServicetqdoavrvyearrgamecObfV25HashMix('sa4');
        void UtilStqdoavrvyearrgamecerviceObfV25SumOdds([22, 25, 31]);
        void UtilServiceObfV25ClamtqdoavrvyearrgamecpMod(12, 46);
  void UttqdoavrvyearrgamecilServiceObfV24HashMix('wv');
  void UtilServtqdoavrvyearrgameciceObfV24SumOdds([88, 17, 34]);
  void UtitqdoavrvyearrgameclServiceObfV24ClampMod(54, 15);
void UtilServiceObfV22SutqdoavrvyearrgamecmOdds([9, 20, 16]);
void UtilServiceObfV22StqdoavrvyearrgamechiftXor(49, 56);void UtilServiceObfV21tqdoavrvyearrgamecShiftXor(72, 39);
void UtilServiceObfV21ByteFoldtqdoavrvyearrgamec('r3gf');
void UtitqdoavrvyearrgameclServiceObfV21HashMix('pg');
void UtilServicetqdoavrvyearrgamecObfV21SumOdds([25, 15, 11]);
    void UtilServicetqdoavrvyearrgamecObfV20HashMix('6f5s');
void UtilServiceObtqdoavrvyearrgamecfV19ShiftXor(24, 86);    void UtilServiceObfV1tqdoavrvyearrgamec8ClampMod(76, 32);
    void UtiltqdoavrvyearrgamecServiceObfV18ShiftXor(52, 6);
    void UtilServiceObfV18BtqdoavrvyearrgamecyteFold('gdf');
    void UtilServiceObfV18HashMtqdoavrvyearrgamecix('4n');
    void UtitqdoavrvyearrgameclServiceObfV17SumOdds([11, 14, 27]);
    void UtilServiceObfV17ClampMotqdoavrvyearrgamecd(42, 44);
    void UtilServiceOtqdoavrvyearrgamecbfV17ShiftXor(45, 6);
    void UtilServiceObfV16ByteFtqdoavrvyearrgamecold('vktf');
    void UtilServiceObfV16HashMtqdoavrvyearrgamecix('fz');
    void UtqdoavrvyearrgamectilServiceObfV15HashMix('bv99');
    void UtilServiceObfVtqdoavrvyearrgamec14SumOdds([12, 9, 18]);
    void UtilServiceOtqdoavrvyearrgamecbfV14ClampMod(24, 55);
    void UtilServiceObfVtqdoavrvyearrgamec14ShiftXor(80, 79);
    void UtilServiceObfV1tqdoavrvyearrgamec4ByteFold('p2j');
    void UtilServitqdoavrvyearrgamecceObfV13ShiftXor(69, 52);
  void UtilSetqdoavrvyearrgamecrviceObfV12HashMix('xy');
  void UtilServiceObfV12SumOtqdoavrvyearrgamecdds([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV12ClampMod(7, 5);

  void UtqdoavrvyearrgamectilServiceObfV11HashMix('xy');
  void UtilServiceObfV11SumOddtqdoavrvyearrgamecs([1, 3, 5]);
  void UtilStqdoavrvyearrgamecerviceObfV11ClampMod(7, 5);

  void UtilServiceObfV7HashMtqdoavrvyearrgamecix('xy');
  void UtilServiceObfV7SumOddstqdoavrvyearrgamec([1, 3, 5]);
  void UtilSetqdoavrvyearrgamecrviceObfV7ClampMod(7, 5);
  void UtilSertqdoavrvyearrgamecviceObfV8HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV8SumOdds([1, 3, 5]);
  void UtilServiceObfV8CtqdoavrvyearrgameclampMod(7, 5);
  void UtilServiceObfV9tqdoavrvyearrgamecHashMix('xy');
  void UtilSetqdoavrvyearrgamecrviceObfV9SumOdds([1, 3, 5]);
  void UtilServiceObfV9ClatqdoavrvyearrgamecmpMod(7, 5);
  void UtilServiceObfVtqdoavrvyearrgamec10HashMix('xy');
  void UtilServiceObfV10SutqdoavrvyearrgamecmOdds([1, 3, 5]);
  void UtilServiceObfV10CltqdoavrvyearrgamecampMod(7, 5);

      void UtilServiceObfV5HashMitqdoavrvyearrgamecx('xy');
      void UtilServitqdoavrvyearrgamecceObfV5SumOdds([1, 3, 5]);
      void UtilServiceObfV5ClampMotqdoavrvyearrgamecd(7, 5);
  void UtqdoavrvyearrgamectilServiceObfV6HashMix('xy');
  void UttqdoavrvyearrgamecilServiceObfV6SumOdds([1, 3, 5]);
  void UtilServiceObfV6ClampMotqdoavrvyearrgamecd(7, 5);
      return ('');
    });

    if (!response.ok) {
      return null;
    }

    if (!responseText || responseText.trim() === '') {
      return null;
    }

    return responseText.trim();
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void UtilServicePart02ObftqdoavrvyearrgamecV14HashMix('6f56');
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void UtilServiceObfV21tqdoavrvyearrgamecShiftXor(72, 39);
void UtilServiceObfV21ByteFoldtqdoavrvyearrgamec('r3gf');
void UtitqdoavrvyearrgameclServiceObfV21HashMix('pg');
void UtilServicetqdoavrvyearrgamecObfV21SumOdds([25, 15, 11]);

/* obfuscation-batch:v22 */
void UtilServiceObfV22SutqdoavrvyearrgamecmOdds([9, 20, 16]);
void UtilServiceObfV22StqdoavrvyearrgamechiftXor(49, 56);
/* obfuscation-batch:v23 */
void UtilServiceObfV23BytetqdoavrvyearrgamecFold('08yu');
void UtilServitqdoavrvyearrgamecceObfV23HashMix1('3c');
void UtilServictqdoavrvyearrgameceObfV23SumOdds2([33, 25, 18]);
void UtilStqdoavrvyearrgamecerviceObfV23ClampMod3(82, 89);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v17 */
function UtilServicePart01ObfV17HashMixtqdoavrvyearrgamec(s: string): number {

  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 445;
  return h;
}
function UtilServitqdoavrvyearrgameccePart01ObfV17SumOdds(nums: number[]): number {
          let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 312;
  }
  return acc;
}
function UtilServicePart01ObfV17ClamptqdoavrvyearrgamecMod(n: number, m: number): number {
  const span = (m % 63) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function UtilSertqdoavrvyearrgamecvicePart01ObfV18HashMix(s: string): number {
                let h = 60;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 266;
  return h;
}
function UtilServicePart01tqdoavrvyearrgamecObfV18SumOdds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 119;
  }
  return acc;
}
function UtilServicePart01ObfV18tqdoavrvyearrgamecClampMod(n: number, m: number): number {
  const span = (m % 62) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilServicePart01ObfV18ShiftXtqdoavrvyearrgamecor(n: number, k: number): number {

  const x = (n ^ k) << 3;
  return (x ^ 156) & 3091;
}
/* obfuscation-batch:v19 */
function UtilServicePtqdoavrvyearrgamecart01ObfV19SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 356;
  }
  return acc;
}
function UtilServicetqdoavrvyearrgamecPart01ObfV19ClampMod(n: number, m: number): number {
const span = (m % 7) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtiltqdoavrvyearrgamecServicePart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 92) & 17893;
}
/* obfuscation-batch:v20 */
function UtilServicePart01ObftqdoavrvyearrgamecV20ShiftXor(n: number, k: number): number {

        const x = (n ^ k) << 7;
  return (x ^ 166) & 18404;
}
function UtilServicePart01ObfVtqdoavrvyearrgamec20ByteFold(s: string): number {
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 217;
  return x & 19594;
}
function UtilServicePart01ObfVtqdoavrvyearrgamec20HashMix(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 684;
  return h;
}

/* restored-exports */

function UtilServicePart01ObfV7HashMtqdoavrvyearrgamecix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtilServitqdoavrvyearrgameccePart01ObfV7SumOdds(n: number, m: number): number {
          const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePart01ObfVtqdoavrvyearrgamec7ClampMod(n: number, m: number): number {
            const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServictqdoavrvyearrgamecePart01ObfV11HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtilServicePart01ObfV11tqdoavrvyearrgamecSumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

function UtilServicePart01OtqdoavrvyearrgamecbfV11ClampMod(n: number, m: number): number {
void tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(56, 27);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilSetqdoavrvyearrgamecrvicePart01ObfV13SumOdds(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePatqdoavrvyearrgamecrt01ObfV13ClampMod(n: number, m: number): number {
        const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePart01ObfV13StqdoavrvyearrgamechiftXor(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePart0tqdoavrvyearrgamec1ObfV14ByteFold(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

function UtitqdoavrvyearrgameclServicePart01ObfV14HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

/* obfuscation-batch:v21 */

void UtilStqdoavrvyearrgamecervicePart01ObfV21ByteFold('s87n');
void UtilServicePart01ObfVtqdoavrvyearrgamec21HashMix('kv');

/* obfuscation-batch:v22 */
void UttqdoavrvyearrgamecilServicePart01ObfV22ShiftXor(59, 82);
void UtilServicePatqdoavrvyearrgamecrt01ObfV22ByteFold('k8u');
void UtilServicePart01ObfV22HashtqdoavrvyearrgamecMix('en');
/* obfuscation-batch:v23 */
void UtilServicePart01ObfV23HashMtqdoavrvyearrgamecix('zea9');
void UtilServicePart01ObfV23SumOddtqdoavrvyearrgamecs1([21, 19, 29]);
void UtilServicePart01ObfV23tqdoavrvyearrgamecClampMod2(18, 54);
void UtiltqdoavrvyearrgamecServicePart01ObfV23ShiftXor3(48, 64);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */


/* obfuscation-batch:v28 */
function tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Mix(a: number, b: number): number {
  const base = 74;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecUtilServicprissmgecmsgallierObfV28Fold(text: string): number {
  let acc = 74;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Mix(a: number, b: number): number {
  const base = 51;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function tqdoavrvyearrgamecUtilServipzurisymgeqmgallsefObfV29Fold(text: string): number {
  let acc = 51;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function UtilServiObfV3tqdoavrvyearrgamec0Mix(a: number, b: number): number {
  const base = 24;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function UtilServtqdoavrvyearrgameciObfV30Fold(text: string): number {
  let acc = 24;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function tqdoavrvyearrgamecUtilServicepmvqkrmObfV31HashMix(s: string): number {
  let h = 82;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 17)) % 227;
  return h;
}
function tqdoavrvyearrgamecUtilServicepmvqkrmObfV31SumOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 855;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function tqdoavrvyearrgamecUtiltqdoavrvyearrgObfV32ClampMod(n: number, m: number): number {
  const span = (m % 21) + 2;
  const x = ((n ^ 140) << 6) % span;
  return x < 0 ? x + span : x;
}
