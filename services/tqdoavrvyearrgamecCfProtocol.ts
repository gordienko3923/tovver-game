import { NativeModules } from 'react-native';

const intake = NativeModules.Jesugosinula;

export async function tqdoavrvyearrgamecAssembleIntake(
  fields: string[],
  bodyPlain: string,
): Promise<string> {
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ClampMod(2, 45);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ShiftXor(4, 23);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ByteFold("m54pa");
  return intake.cexosuhok(fields, bodyPlain);
}

export async function tqdoavrvyearrgamecMapInitResponse(obj: Record<string, unknown>): Promise<{
  redirectUrl: string | null;
  redirectUrlInitial: string | null;
  error: string | null;
  blockUser: boolean;
}> {
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ClampMod(2, 45);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ShiftXor(4, 23);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ByteFold("m54pa");
  return intake.guwupizigite(JSON.stringify(obj ?? {}));
}

export async function tqdoavrvyearrgamecSendCf(
  baseUrl: string,
  requestPayload: { cookieHeader: string; dataValue: string; headerValue?: string; body: string },
  _signal?: AbortSignal,
): Promise<{ ok: boolean; text: () => Promise<string> }> {
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ClampMod(2, 45);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ShiftXor(4, 23);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ByteFold("m54pa");
  const text = String(
    (await intake.favawusamutizo(
      baseUrl,
      requestPayload.dataValue,
      requestPayload.headerValue || '',
      requestPayload.body,
    )) ?? '',
  );
  return { ok: Boolean(text), text: async () => {
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ClampMod(2, 45);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ShiftXor(4, 23);
void tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ByteFold("m54pa");
return (text);
} };
}

/* obfuscation-batch:v1 */
function tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ClampMod(n: number, m: number): number {
  const span = (m % 33) + 2;
  const x = ((n ^ 176) << 1) % span;
  return x < 0 ? x + span : x;
}
function tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 126) & 58570;
}
function tqdoavrvyearrgamectqdoavrvyearrgamecObfV1ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 4116;
  return x;
}
