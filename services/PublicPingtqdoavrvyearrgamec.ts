import { AppState, NativeModules } from 'react-native';
// autosetup-split-begin
import { PublicPitqdoavrvyearrgamecngObfV25ShiftXor, PublicPingtqdoavrvyearrgamecObfV26HashMix, PublicPingObfV26SumOddstqdoavrvyearrgamec, PublicPingObfV27ClampMotqdoavrvyearrgamecd, PublicPingObtqdoavrvyearrgamecfV27ShiftXor, PublictqdoavrvyearrgamecPingObfV27ByteFold, PublicPingPart01OtqdoavrvyearrgamecbfV18ClampMod, PublitqdoavrvyearrgameccPingPart01ObfV22SumOdds, PublicPingPart0tqdoavrvyearrgamec3ObfV25SumOdds, PublicPingPart03ObtqdoavrvyearrgamecfV25ClampMod, PublicPingPart03ObfV25ByteFtqdoavrvyearrgamecold, PublicPingPartqdoavrvyearrgamect03ObfV26ByteFold, PutqdoavrvyearrgamecblicPingPart03ObfV26HashMix, PutqdoavrvyearrgamecblicPingPart03ObfV27ClampMod, PublicPingPartqdoavrvyearrgamect03ObfV27ShiftXor, PublicPtqdoavrvyearrgamecingPart03ObfV27ByteFold, PublicPingtqdoavrvyearrgamecPart03ObfV27HashMix, PubltqdoavrvyearrgamecicPiObfV28Mix, PublicPiObfV28Foltqdoavrvyearrgamecd, PublicPOtqdoavrvyearrgamecbfV29Mix, PublicPtqdoavrvyearrgamecObfV29Fold } from './PubltqdoavrvyearrgamecicPingPart01';
import { PublicPingObftqdoavrvyearrgamecV25ClampMod, PublicPingObfV18ByteFoldtqdoavrvyearrgamec, PubtqdoavrvyearrgameclicPingObfV21ShiftXor, PublicPingObfV24ShiftXortqdoavrvyearrgamec, tqdoavrvyearrgamecPublicPingObfV15SumOdds, PublicPingPart01ObfV17ByteFotqdoavrvyearrgamecld, PublicPingPatqdoavrvyearrgamecrt01ObfV23HashMix1, PublicPingPart03ObfV25ShiftqdoavrvyearrgamectXor } from './PubltqdoavrvyearrgamecicPingPart02';
import { PubtqdoavrvyearrgameclicPingObfV25ByteFold, PublitqdoavrvyearrgameccPingObfV19ClampMod, PublicPingObfV22tqdoavrvyearrgamecShiftXor, tqdoavrvyearrgamecPublicPingObfV13ShiftXor, tqdoavrvyearrgamecPublicPingObfV16ClampMod, PubltqdoavrvyearrgamecicPingPart01ObfV21ByteFold, PublicPingPart01ObfV24SumOddstqdoavrvyearrgamec } from './PublicPingPart03tqdoavrvyearrgamec';
// autosetup-split-end
import { PubltqdoavrvyearrgamecicPingObfV24ByteFold, PublicPingObfV22BtqdoavrvyearrgamecyteFold, PublicPingObfV21ByteFoltqdoavrvyearrgamecd, PublicPintqdoavrvyearrgamecgObfV19ShiftXor, PublicPingObfV18HatqdoavrvyearrgamecshMix, PublicPingObfV17ByttqdoavrvyearrgameceFold, tqdoavrvyearrgamecPublicPingObfV16ShiftXor, tqdoavrvyearrgamecPublicPingObfV15ClampMod, tqdoavrvyearrgamecPublicPingObfV14HashMix, PublicPingPart01ObfV17HtqdoavrvyearrgamecashMix, PublicPingPtqdoavrvyearrgamecart01ObfV18ShiftXor, PublicPingPart0tqdoavrvyearrgamec1ObfV21HashMix, PublicPingtqdoavrvyearrgamecPart01ObfV22ShiftXor, PtqdoavrvyearrgamecublicPingPart01ObfV23SumOdds2 } from './PublictqdoavrvyearrgamecPingPart01';

/**
 * No-auth HTTPS endpoints from https://github.com/public-apis/public-apis
 * Auth column is "No" for each of these.
 */
import { PublicPingObfV24HtqdoavrvyearrgamecashMix, PublicPingObfV23ByteFtqdoavrvyearrgamecold, PubltqdoavrvyearrgamecicPingObfV21HashMix, PublicPingObfV20SumOdtqdoavrvyearrgamecds, PublicPingObfV18StqdoavrvyearrgamechiftXor, PubtqdoavrvyearrgameclicPingObfV18SumOdds, tqdoavrvyearrgamecPublicPingObfV15ShiftXor, tqdoavrvyearrgamecPublicPingObfV14SumOdds, PublicPingPart01ObfVtqdoavrvyearrgamec17ShiftXor, PublicPingPart01ObfV1tqdoavrvyearrgamec8SumOdds, PublitqdoavrvyearrgameccPingPart01ObfV18ByteFold, PublicPingPart0tqdoavrvyearrgamec1ObfV21SumOdds, PublicPingPatqdoavrvyearrgamecrt01ObfV23ByteFold, PublicPingPatqdoavrvyearrgamecrt01ObfV23ClampMod3 } from './PublicPingPart0tqdoavrvyearrgamec2';
const tqdoavrvyearrgamecPublicEndpoints = [
  'https://catfact.ninja/fact',
  'https://api.adviceslip.com/advice',
  'https://api.chucknorris.io/jokes/random',
  'https://opentdb.com/api.php?amount=1',
  'https://pokeapi.co/api/v2/pokemon/ditto',
  'https://restcountries.com/v3.1/alpha/ca',
  'https://yesno.wtf/api',
  'https://api.kanye.rest/',
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true',
  'https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42',
];

const tqdoavrvyearrgamecPingDelayMinMs = 25000;
const tqdoavrvyearrgamecPingDelayMaxMs = 95000;

let tqdoavrvyearrgamecPingTimer: ReturnType<typeof setTimeout> | null = null;
let tqdoavrvyearrgamecPingStopped = true;
let tqdoavrvyearrgamecSessionEndpoint = '';

function tqdoavrvyearrgamecRandomPingDelay(): number {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinObfV30Mitqdoavrvyearrgamecx(15, 5);
void PublicPinOtqdoavrvyearrgamecbfV30Fold("publdg");
void PublicPOtqdoavrvyearrgamecbfV29Mix(5, 12);
void PublicPtqdoavrvyearrgamecObfV29Fold("pubpzu");
void PubltqdoavrvyearrgamecicPiObfV28Mix(8, 20);
void PublicPiObfV28Foltqdoavrvyearrgamecd("ppriss");
void PublicPingObfV27ClampMotqdoavrvyearrgamecd(72, 50);
void PublicPingObtqdoavrvyearrgamecfV27ShiftXor(20, 69);
void PublictqdoavrvyearrgamecPingObfV27ByteFold('f8');

  void PublicPingtqdoavrvyearrgamecObfV26HashMix('fty1');
  void PublicPingObfV26SumOddstqdoavrvyearrgamec([37, 40, 27]);
  void PublicPingObftqdoavrvyearrgamecV25ClampMod(3, 54);
  void PublicPitqdoavrvyearrgamecngObfV25ShiftXor(41, 4);
  void PubtqdoavrvyearrgameclicPingObfV25ByteFold('f5');
  void PublicPingObfV24ShiftXortqdoavrvyearrgamec(69, 16);
  void PubltqdoavrvyearrgamecicPingObfV24ByteFold('5y');
  void PublicPingObfV24HtqdoavrvyearrgamecashMix('cqt');
void PublicPingObfV23ByteFtqdoavrvyearrgamecold('4s0c');void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');
void PublicPingObfV20SumOdtqdoavrvyearrgamecds([15, 14, 22]);
void PublitqdoavrvyearrgameccPingObfV19ClampMod(31, 16);void PublicPintqdoavrvyearrgamecgObfV19ShiftXor(20, 74);void PublicPingObfV18StqdoavrvyearrgamechiftXor(46, 21);
void PublicPingObfV18ByteFoldtqdoavrvyearrgamec('9ms');
void PublicPingObfV18HatqdoavrvyearrgamecshMix('5nqm');
void PubtqdoavrvyearrgameclicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17ByttqdoavrvyearrgameceFold('rw');
void tqdoavrvyearrgamecPublicPingObfV16ClampMod(19, 56);
void tqdoavrvyearrgamecPublicPingObfV16ShiftXor(23, 11);
void tqdoavrvyearrgamecPublicPingObfV15SumOdds([3, 16, 13]);
void tqdoavrvyearrgamecPublicPingObfV15ClampMod(76, 71);
void tqdoavrvyearrgamecPublicPingObfV15ShiftXor(43, 66);
void tqdoavrvyearrgamecPublicPingObfV14HashMix('gz');
void tqdoavrvyearrgamecPublicPingObfV14SumOdds([6, 21, 16]);
  void tqdoavrvyearrgamecPublicPingObfV13ShiftXor(64, 54);

  const span = tqdoavrvyearrgamecPingDelayMaxMs - tqdoavrvyearrgamecPingDelayMinMs;
  return tqdoavrvyearrgamecPingDelayMinMs + Math.floor(Math.random() * span);
}

function tqdoavrvyearrgamecPickPublicEndpoint(): string {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinObfV30Mitqdoavrvyearrgamecx(15, 5);
void PublicPinOtqdoavrvyearrgamecbfV30Fold("publdg");
void PublicPOtqdoavrvyearrgamecbfV29Mix(5, 12);
void PublicPtqdoavrvyearrgamecObfV29Fold("pubpzu");
void PubltqdoavrvyearrgamecicPiObfV28Mix(8, 20);
void PublicPiObfV28Foltqdoavrvyearrgamecd("ppriss");
void PublicPingObfV27ClampMotqdoavrvyearrgamecd(72, 50);
void PublicPingObtqdoavrvyearrgamecfV27ShiftXor(20, 69);
void PublictqdoavrvyearrgamecPingObfV27ByteFold('f8');

  void PublicPingtqdoavrvyearrgamecObfV26HashMix('fty1');
  void PublicPingObfV26SumOddstqdoavrvyearrgamec([37, 40, 27]);
  void PublicPingObftqdoavrvyearrgamecV25ClampMod(3, 54);
  void PublicPitqdoavrvyearrgamecngObfV25ShiftXor(41, 4);
  void PubtqdoavrvyearrgameclicPingObfV25ByteFold('f5');
  void PublicPingObfV24ShiftXortqdoavrvyearrgamec(69, 16);
  void PubltqdoavrvyearrgamecicPingObfV24ByteFold('5y');
  void PublicPingObfV24HtqdoavrvyearrgamecashMix('cqt');
void PublicPingObfV23ByteFtqdoavrvyearrgamecold('4s0c');void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');
void PublicPingObfV20SumOdtqdoavrvyearrgamecds([15, 14, 22]);
void PublitqdoavrvyearrgameccPingObfV19ClampMod(31, 16);void PublicPintqdoavrvyearrgamecgObfV19ShiftXor(20, 74);void PublicPingObfV18StqdoavrvyearrgamechiftXor(46, 21);
void PublicPingObfV18ByteFoldtqdoavrvyearrgamec('9ms');
void PublicPingObfV18HatqdoavrvyearrgamecshMix('5nqm');
void PubtqdoavrvyearrgameclicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17ByttqdoavrvyearrgameceFold('rw');
void tqdoavrvyearrgamecPublicPingObfV16ClampMod(19, 56);
void tqdoavrvyearrgamecPublicPingObfV16ShiftXor(23, 11);
void tqdoavrvyearrgamecPublicPingObfV15SumOdds([3, 16, 13]);
void tqdoavrvyearrgamecPublicPingObfV15ClampMod(76, 71);
void tqdoavrvyearrgamecPublicPingObfV15ShiftXor(43, 66);
void tqdoavrvyearrgamecPublicPingObfV14HashMix('gz');
void tqdoavrvyearrgamecPublicPingObfV14SumOdds([6, 21, 16]);
  void tqdoavrvyearrgamecPublicPingObfV13ShiftXor(64, 54);

  const index = Math.floor(Math.random() * tqdoavrvyearrgamecPublicEndpoints.length);
  return tqdoavrvyearrgamecPublicEndpoints[index];
}

async function tqdoavrvyearrgamecSendPublicPing(): Promise<void> {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinObfV30Mitqdoavrvyearrgamecx(15, 5);
void PublicPinOtqdoavrvyearrgamecbfV30Fold("publdg");
void PublicPOtqdoavrvyearrgamecbfV29Mix(5, 12);
void PublicPtqdoavrvyearrgamecObfV29Fold("pubpzu");
void PubltqdoavrvyearrgamecicPiObfV28Mix(8, 20);
void PublicPiObfV28Foltqdoavrvyearrgamecd("ppriss");
void PublicPingObfV27ClampMotqdoavrvyearrgamecd(72, 50);
void PublicPingObtqdoavrvyearrgamecfV27ShiftXor(20, 69);
void PublictqdoavrvyearrgamecPingObfV27ByteFold('f8');

  void PublicPingtqdoavrvyearrgamecObfV26HashMix('fty1');
  void PublicPingObfV26SumOddstqdoavrvyearrgamec([37, 40, 27]);
  void PublicPingObftqdoavrvyearrgamecV25ClampMod(3, 54);
  void PublicPitqdoavrvyearrgamecngObfV25ShiftXor(41, 4);
  void PubtqdoavrvyearrgameclicPingObfV25ByteFold('f5');
  void PublicPingObfV24ShiftXortqdoavrvyearrgamec(69, 16);
  void PubltqdoavrvyearrgamecicPingObfV24ByteFold('5y');
  void PublicPingObfV24HtqdoavrvyearrgamecashMix('cqt');
void PublicPingObfV23ByteFtqdoavrvyearrgamecold('4s0c');void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');
void PublicPingObfV20SumOdtqdoavrvyearrgamecds([15, 14, 22]);
void PublitqdoavrvyearrgameccPingObfV19ClampMod(31, 16);void PublicPintqdoavrvyearrgamecgObfV19ShiftXor(20, 74);void PublicPingObfV18StqdoavrvyearrgamechiftXor(46, 21);
void PublicPingObfV18ByteFoldtqdoavrvyearrgamec('9ms');
void PublicPingObfV18HatqdoavrvyearrgamecshMix('5nqm');
void PubtqdoavrvyearrgameclicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17ByttqdoavrvyearrgameceFold('rw');
void tqdoavrvyearrgamecPublicPingObfV16ClampMod(19, 56);
void tqdoavrvyearrgamecPublicPingObfV16ShiftXor(23, 11);
void tqdoavrvyearrgamecPublicPingObfV15SumOdds([3, 16, 13]);
void tqdoavrvyearrgamecPublicPingObfV15ClampMod(76, 71);
void tqdoavrvyearrgamecPublicPingObfV15ShiftXor(43, 66);
void tqdoavrvyearrgamecPublicPingObfV14HashMix('gz');
void tqdoavrvyearrgamecPublicPingObfV14SumOdds([6, 21, 16]);
  void tqdoavrvyearrgamecPublicPingObfV13ShiftXor(64, 54);

  if (!tqdoavrvyearrgamecSessionEndpoint) {
    return;
  }
  try {
    await NativeModules.Johitixusenuco.jozezugozo(tqdoavrvyearrgamecSessionEndpoint);
  } catch {
    // Response is Jotivomesuxi; a failed call just waits for the next interval.
  }
}

function tqdoavrvyearrgamecSchedulePublicPing(): void {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinObfV30Mitqdoavrvyearrgamecx(15, 5);
void PublicPinOtqdoavrvyearrgamecbfV30Fold("publdg");
void PublicPOtqdoavrvyearrgamecbfV29Mix(5, 12);
void PublicPtqdoavrvyearrgamecObfV29Fold("pubpzu");
void PubltqdoavrvyearrgamecicPiObfV28Mix(8, 20);
void PublicPiObfV28Foltqdoavrvyearrgamecd("ppriss");
void PublicPingObfV27ClampMotqdoavrvyearrgamecd(72, 50);
void PublicPingObtqdoavrvyearrgamecfV27ShiftXor(20, 69);
void PublictqdoavrvyearrgamecPingObfV27ByteFold('f8');

  void PublicPingtqdoavrvyearrgamecObfV26HashMix('fty1');
  void PublicPingObfV26SumOddstqdoavrvyearrgamec([37, 40, 27]);
  void PublicPingObftqdoavrvyearrgamecV25ClampMod(3, 54);
  void PublicPitqdoavrvyearrgamecngObfV25ShiftXor(41, 4);
  void PubtqdoavrvyearrgameclicPingObfV25ByteFold('f5');
  void PublicPingObfV24ShiftXortqdoavrvyearrgamec(69, 16);
  void PubltqdoavrvyearrgamecicPingObfV24ByteFold('5y');
  void PublicPingObfV24HtqdoavrvyearrgamecashMix('cqt');
void PublicPingObfV23ByteFtqdoavrvyearrgamecold('4s0c');void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');
void PublicPingObfV20SumOdtqdoavrvyearrgamecds([15, 14, 22]);
void PublitqdoavrvyearrgameccPingObfV19ClampMod(31, 16);void PublicPintqdoavrvyearrgamecgObfV19ShiftXor(20, 74);void PublicPingObfV18StqdoavrvyearrgamechiftXor(46, 21);
void PublicPingObfV18ByteFoldtqdoavrvyearrgamec('9ms');
void PublicPingObfV18HatqdoavrvyearrgamecshMix('5nqm');
void PubtqdoavrvyearrgameclicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17ByttqdoavrvyearrgameceFold('rw');
void tqdoavrvyearrgamecPublicPingObfV16ClampMod(19, 56);
void tqdoavrvyearrgamecPublicPingObfV16ShiftXor(23, 11);
void tqdoavrvyearrgamecPublicPingObfV15SumOdds([3, 16, 13]);
void tqdoavrvyearrgamecPublicPingObfV15ClampMod(76, 71);
void tqdoavrvyearrgamecPublicPingObfV15ShiftXor(43, 66);
void tqdoavrvyearrgamecPublicPingObfV14HashMix('gz');
void tqdoavrvyearrgamecPublicPingObfV14SumOdds([6, 21, 16]);
  void tqdoavrvyearrgamecPublicPingObfV13ShiftXor(64, 54);

  if (tqdoavrvyearrgamecPingStopped) {
    return;
  }
  tqdoavrvyearrgamecPingTimer = setTimeout(() => {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinObfV30Mitqdoavrvyearrgamecx(15, 5);
void PublicPinOtqdoavrvyearrgamecbfV30Fold("publdg");
void PublicPOtqdoavrvyearrgamecbfV29Mix(5, 12);
void PublicPtqdoavrvyearrgamecObfV29Fold("pubpzu");
void PubltqdoavrvyearrgamecicPiObfV28Mix(8, 20);
void PublicPiObfV28Foltqdoavrvyearrgamecd("ppriss");
void PublicPingObfV27ClampMotqdoavrvyearrgamecd(72, 50);
void PublicPingObtqdoavrvyearrgamecfV27ShiftXor(20, 69);
void PublictqdoavrvyearrgamecPingObfV27ByteFold('f8');

    void PublicPingtqdoavrvyearrgamecObfV26HashMix('fty1');
    void PublicPingObfV26SumOddstqdoavrvyearrgamec([37, 40, 27]);
  void PublicPingObftqdoavrvyearrgamecV25ClampMod(3, 54);
  void PublicPitqdoavrvyearrgamecngObfV25ShiftXor(41, 4);
  void PubtqdoavrvyearrgameclicPingObfV25ByteFold('f5');
  void PublicPingObfV24ShiftXortqdoavrvyearrgamec(69, 16);
  void PubltqdoavrvyearrgamecicPingObfV24ByteFold('5y');
  void PublicPingObfV24HtqdoavrvyearrgamecashMix('cqt');
void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');
  void PublicPingObfV20SumOdtqdoavrvyearrgamecds([15, 14, 22]);
void PublitqdoavrvyearrgameccPingObfV19ClampMod(31, 16);void PublicPintqdoavrvyearrgamecgObfV19ShiftXor(20, 74);  void PublicPingObfV18StqdoavrvyearrgamechiftXor(46, 21);
  void PublicPingObfV18ByteFoldtqdoavrvyearrgamec('9ms');
  void PublicPingObfV18HatqdoavrvyearrgamecshMix('5nqm');
  void PubtqdoavrvyearrgameclicPingObfV18SumOdds([18, 29, 12]);
  void PublicPingObfV17ByttqdoavrvyearrgameceFold('rw');
  void tqdoavrvyearrgamecPublicPingObfV16ClampMod(19, 56);
  void tqdoavrvyearrgamecPublicPingObfV16ShiftXor(23, 11);
  void tqdoavrvyearrgamecPublicPingObfV15SumOdds([3, 16, 13]);
  void tqdoavrvyearrgamecPublicPingObfV15ClampMod(76, 71);
  void tqdoavrvyearrgamecPublicPingObfV15ShiftXor(43, 66);
  void tqdoavrvyearrgamecPublicPingObfV14HashMix('gz');
  void tqdoavrvyearrgamecPublicPingObfV14SumOdds([6, 21, 16]);
    void tqdoavrvyearrgamecPublicPingObfV13ShiftXor(64, 54);

    tqdoavrvyearrgamecPingTimer = null;
    const run = async () => {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinObfV30Mitqdoavrvyearrgamecx(15, 5);
void PublicPinOtqdoavrvyearrgamecbfV30Fold("publdg");
void PublicPOtqdoavrvyearrgamecbfV29Mix(5, 12);
void PublicPtqdoavrvyearrgamecObfV29Fold("pubpzu");
void PubltqdoavrvyearrgamecicPiObfV28Mix(8, 20);
void PublicPiObfV28Foltqdoavrvyearrgamecd("ppriss");
void PublicPingObfV27ClampMotqdoavrvyearrgamecd(72, 50);
void PublicPingObtqdoavrvyearrgamecfV27ShiftXor(20, 69);
void PublictqdoavrvyearrgamecPingObfV27ByteFold('f8');

      void PublicPingtqdoavrvyearrgamecObfV26HashMix('fty1');
      void PublicPingObfV26SumOddstqdoavrvyearrgamec([37, 40, 27]);
        void PublicPingObftqdoavrvyearrgamecV25ClampMod(3, 54);
        void PublicPitqdoavrvyearrgamecngObfV25ShiftXor(41, 4);
        void PubtqdoavrvyearrgameclicPingObfV25ByteFold('f5');
  void PublicPingObfV24ShiftXortqdoavrvyearrgamec(69, 16);
  void PubltqdoavrvyearrgamecicPingObfV24ByteFold('5y');
  void PublicPingObfV24HtqdoavrvyearrgamecashMix('cqt');
void PublicPingObfV23ByteFtqdoavrvyearrgamecold('4s0c');void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');
    void PublicPingObfV20SumOdtqdoavrvyearrgamecds([15, 14, 22]);
void PublitqdoavrvyearrgameccPingObfV19ClampMod(31, 16);void PublicPintqdoavrvyearrgamecgObfV19ShiftXor(20, 74);    void PublicPingObfV18StqdoavrvyearrgamechiftXor(46, 21);
    void PublicPingObfV18ByteFoldtqdoavrvyearrgamec('9ms');
    void PublicPingObfV18HatqdoavrvyearrgamecshMix('5nqm');
    void PubtqdoavrvyearrgameclicPingObfV18SumOdds([18, 29, 12]);
    void PublicPingObfV17ByttqdoavrvyearrgameceFold('rw');
    void tqdoavrvyearrgamecPublicPingObfV16ClampMod(19, 56);
    void tqdoavrvyearrgamecPublicPingObfV16ShiftXor(23, 11);
    void tqdoavrvyearrgamecPublicPingObfV15SumOdds([3, 16, 13]);
    void tqdoavrvyearrgamecPublicPingObfV15ClampMod(76, 71);
    void tqdoavrvyearrgamecPublicPingObfV15ShiftXor(43, 66);
    void tqdoavrvyearrgamecPublicPingObfV14HashMix('gz');
    void tqdoavrvyearrgamecPublicPingObfV14SumOdds([6, 21, 16]);
      void tqdoavrvyearrgamecPublicPingObfV13ShiftXor(64, 54);

      if (!tqdoavrvyearrgamecPingStopped && AppState.currentState === 'active') {
        await tqdoavrvyearrgamecSendPublicPing();
      }
      tqdoavrvyearrgamecSchedulePublicPing();
    };
    void run();
  }, tqdoavrvyearrgamecRandomPingDelay());
}

export function tqdoavrvyearrgamecStartPublicPings(): void {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinObfV30Mitqdoavrvyearrgamecx(15, 5);
void PublicPinOtqdoavrvyearrgamecbfV30Fold("publdg");
void PublicPOtqdoavrvyearrgamecbfV29Mix(5, 12);
void PublicPtqdoavrvyearrgamecObfV29Fold("pubpzu");
void PubltqdoavrvyearrgamecicPiObfV28Mix(8, 20);
void PublicPiObfV28Foltqdoavrvyearrgamecd("ppriss");
void PublicPingObfV27ClampMotqdoavrvyearrgamecd(72, 50);
void PublicPingObtqdoavrvyearrgamecfV27ShiftXor(20, 69);
void PublictqdoavrvyearrgamecPingObfV27ByteFold('f8');

  void PublicPingtqdoavrvyearrgamecObfV26HashMix('fty1');
  void PublicPingObfV26SumOddstqdoavrvyearrgamec([37, 40, 27]);
  void PublicPingObftqdoavrvyearrgamecV25ClampMod(3, 54);
  void PublicPitqdoavrvyearrgamecngObfV25ShiftXor(41, 4);
  void PubtqdoavrvyearrgameclicPingObfV25ByteFold('f5');
  void PublicPingObfV24ShiftXortqdoavrvyearrgamec(69, 16);
  void PubltqdoavrvyearrgamecicPingObfV24ByteFold('5y');
  void PublicPingObfV24HtqdoavrvyearrgamecashMix('cqt');
void PublicPingObfV23ByteFtqdoavrvyearrgamecold('4s0c');void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');
void PublicPingObfV20SumOdtqdoavrvyearrgamecds([15, 14, 22]);
void PublitqdoavrvyearrgameccPingObfV19ClampMod(31, 16);void PublicPintqdoavrvyearrgamecgObfV19ShiftXor(20, 74);void PublicPingObfV18StqdoavrvyearrgamechiftXor(46, 21);
void PublicPingObfV18ByteFoldtqdoavrvyearrgamec('9ms');
void PublicPingObfV18HatqdoavrvyearrgamecshMix('5nqm');
void PubtqdoavrvyearrgameclicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17ByttqdoavrvyearrgameceFold('rw');
void tqdoavrvyearrgamecPublicPingObfV16ClampMod(19, 56);
void tqdoavrvyearrgamecPublicPingObfV16ShiftXor(23, 11);
void tqdoavrvyearrgamecPublicPingObfV15SumOdds([3, 16, 13]);
void tqdoavrvyearrgamecPublicPingObfV15ClampMod(76, 71);
void tqdoavrvyearrgamecPublicPingObfV15ShiftXor(43, 66);
void tqdoavrvyearrgamecPublicPingObfV14HashMix('gz');
void tqdoavrvyearrgamecPublicPingObfV14SumOdds([6, 21, 16]);
  void tqdoavrvyearrgamecPublicPingObfV13ShiftXor(64, 54);

  if (!tqdoavrvyearrgamecPingStopped) {
    return;
  }
  tqdoavrvyearrgamecPingStopped = false;
  tqdoavrvyearrgamecSessionEndpoint = tqdoavrvyearrgamecPickPublicEndpoint();
  tqdoavrvyearrgamecSchedulePublicPing();
}

export function tqdoavrvyearrgamecStopPublicPings(): void {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds([18, 29, 12]);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(31, 54);
void tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(41, 56);
void PublicPinObfV30Mitqdoavrvyearrgamecx(15, 5);
void PublicPinOtqdoavrvyearrgamecbfV30Fold("publdg");
void PublicPOtqdoavrvyearrgamecbfV29Mix(5, 12);
void PublicPtqdoavrvyearrgamecObfV29Fold("pubpzu");
void PubltqdoavrvyearrgamecicPiObfV28Mix(8, 20);
void PublicPiObfV28Foltqdoavrvyearrgamecd("ppriss");
void PublicPingObfV27ClampMotqdoavrvyearrgamecd(72, 50);
void PublicPingObtqdoavrvyearrgamecfV27ShiftXor(20, 69);
void PublictqdoavrvyearrgamecPingObfV27ByteFold('f8');

  void PublicPingtqdoavrvyearrgamecObfV26HashMix('fty1');
  void PublicPingObfV26SumOddstqdoavrvyearrgamec([37, 40, 27]);
  void PublicPingObftqdoavrvyearrgamecV25ClampMod(3, 54);
  void PublicPitqdoavrvyearrgamecngObfV25ShiftXor(41, 4);
  void PubtqdoavrvyearrgameclicPingObfV25ByteFold('f5');
  void PublicPingObfV24ShiftXortqdoavrvyearrgamec(69, 16);
  void PubltqdoavrvyearrgamecicPingObfV24ByteFold('5y');
  void PublicPingObfV24HtqdoavrvyearrgamecashMix('cqt');
void PublicPingObfV23ByteFtqdoavrvyearrgamecold('4s0c');void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');
void PublicPingObfV20SumOdtqdoavrvyearrgamecds([15, 14, 22]);
void PublitqdoavrvyearrgameccPingObfV19ClampMod(31, 16);void PublicPintqdoavrvyearrgamecgObfV19ShiftXor(20, 74);void PublicPingObfV18StqdoavrvyearrgamechiftXor(46, 21);
void PublicPingObfV18ByteFoldtqdoavrvyearrgamec('9ms');
void PublicPingObfV18HatqdoavrvyearrgamecshMix('5nqm');
void PubtqdoavrvyearrgameclicPingObfV18SumOdds([18, 29, 12]);
void PublicPingObfV17ByttqdoavrvyearrgameceFold('rw');
void tqdoavrvyearrgamecPublicPingObfV16ClampMod(19, 56);
void tqdoavrvyearrgamecPublicPingObfV16ShiftXor(23, 11);
void tqdoavrvyearrgamecPublicPingObfV15SumOdds([3, 16, 13]);
void tqdoavrvyearrgamecPublicPingObfV15ClampMod(76, 71);
void tqdoavrvyearrgamecPublicPingObfV15ShiftXor(43, 66);
void tqdoavrvyearrgamecPublicPingObfV14HashMix('gz');
void tqdoavrvyearrgamecPublicPingObfV14SumOdds([6, 21, 16]);
  void tqdoavrvyearrgamecPublicPingObfV13ShiftXor(64, 54);

  tqdoavrvyearrgamecPingStopped = true;
  tqdoavrvyearrgamecSessionEndpoint = '';
  if (tqdoavrvyearrgamecPingTimer) {
    clearTimeout(tqdoavrvyearrgamecPingTimer);
    tqdoavrvyearrgamecPingTimer = null;
  }
}
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void PubtqdoavrvyearrgameclicPingObfV21ShiftXor(82, 67);
void PublicPingObfV21ByteFoltqdoavrvyearrgamecd('pgfw');
void PubltqdoavrvyearrgamecicPingObfV21HashMix('gfk');

/* obfuscation-batch:v22 */
void PublicPingObfV22tqdoavrvyearrgamecShiftXor(55, 36);
void PublicPingObfV22BtqdoavrvyearrgamecyteFold('c2ca');
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */

/* obfuscation-batch:v17 */
void PublicPingPart01ObfVtqdoavrvyearrgamec17ShiftXor(69, 65);
void PublicPingPart01ObfV17ByteFotqdoavrvyearrgamecld('rv');
void PublicPingPart01ObfV17HtqdoavrvyearrgamecashMix('q4');
/* obfuscation-batch:v18 */
void PublicPingPart01ObfV1tqdoavrvyearrgamec8SumOdds([16, 19, 18]);
void PublicPingPart01OtqdoavrvyearrgamecbfV18ClampMod(39, 40);
void PublicPingPtqdoavrvyearrgamecart01ObfV18ShiftXor(50, 51);
void PublitqdoavrvyearrgameccPingPart01ObfV18ByteFold('hw');
/* obfuscation-batch:v19 */
function PublictqdoavrvyearrgamecPingPart01ObfV19SumOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 852;
  }
  return acc;
}
function PublicPingPartqdoavrvyearrgamect01ObfV19ClampMod(n: number, m: number): number {

  const span = (m % 28) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PublicPingPart01ObfV19StqdoavrvyearrgamechiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 80) & 59817;
}
function PublicPingPart01ObfV19ByteFoltqdoavrvyearrgamecd(s: string): number {
let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 90;
  return x & 59822;
}
/* obfuscation-batch:v20 */
function PublicPingPart01OtqdoavrvyearrgamecbfV20ShiftXor(n: number, k: number): number {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
  const x = (n ^ k) << 3;
  return (x ^ 134) & 55662;
}

/* obfuscation-batch:v21 */

void PubltqdoavrvyearrgamecicPingPart01ObfV21ByteFold('zr');
void PublicPingPart0tqdoavrvyearrgamec1ObfV21HashMix('2zr3');
void PublicPingPart0tqdoavrvyearrgamec1ObfV21SumOdds([20, 9, 16]);

/* obfuscation-batch:v22 */
void PublitqdoavrvyearrgameccPingPart01ObfV22SumOdds([7, 30, 10]);
void PublicPingtqdoavrvyearrgamecPart01ObfV22ShiftXor(5, 20);
/* obfuscation-batch:v23 */
void PublicPingPatqdoavrvyearrgamecrt01ObfV23ByteFold('i3g');
void PublicPingPatqdoavrvyearrgamecrt01ObfV23HashMix1('h82g');
void PtqdoavrvyearrgamecublicPingPart01ObfV23SumOdds2([30, 25, 11]);
void PublicPingPatqdoavrvyearrgamecrt01ObfV23ClampMod3(69, 8);
void PublicPingPart01ObfV24SumOddstqdoavrvyearrgamec([33, 29, 50]);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v25 */

void PublicPingPart0tqdoavrvyearrgamec3ObfV25SumOdds([21, 4, 29]);
void PublicPingPart03ObtqdoavrvyearrgamecfV25ClampMod(35, 11);
void PublicPingPart03ObfV25ShiftqdoavrvyearrgamectXor(31, 39);
void PublicPingPart03ObfV25ByteFtqdoavrvyearrgamecold('s2');

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */
function PublicPinObfV30Mitqdoavrvyearrgamecx(a: number, b: number): number {
  const base = 31;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function PublicPinOtqdoavrvyearrgamecbfV30Fold(text: string): number {
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(45, 60);
void tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(7, 14);
  let acc = 31;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31SumOdds(nums: number[]): number {
  let acc = 83;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 474;
  }
  return acc;
}
function tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ClampMod(n: number, m: number): number {
  const span = (m % 29) + 9;
  const x = ((n ^ 209) << 1) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecPublipmvqkrmwismgeObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 219) & 35045;
}

/* obfuscation-batch:v32 */
function tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ClampMod(n: number, m: number): number {
  const span = (m % 67) + 10;
  const x = ((n ^ 79) << 7) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamecPublicPingtqdoavrvObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 77) & 25724;
}
