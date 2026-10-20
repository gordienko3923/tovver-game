/* cipher-id:colossus */
import { NativeModules } from 'react-native';

const cipher = NativeModules.Mawaqabuvaqopa;

export function podatagup(hex: string): Uint8Array {
void tqdoavrvyearrgameccotqdoavrvyearrgamObfV1HashMix("kj");
  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function bacafuqalofomi(bytes: Uint8Array): string {
void tqdoavrvyearrgameccotqdoavrvyearrgamObfV1HashMix("kj");
  return Array.from(bytes, (b) => {
void tqdoavrvyearrgameccotqdoavrvyearrgamObfV1HashMix("kj");
return (b.toString(16).padStart(2, '0').toUpperCase());
}).join('');
}

export function cotqdoavrvyearrgameclossusEncryptBytes(data: Uint8Array): Uint8Array {
void tqdoavrvyearrgameccotqdoavrvyearrgamObfV1HashMix("kj");
  const hex = String(cipher?.musijejuximuc(bacafuqalofomi(data)) ?? '');
  return podatagup(hex);
}

export function cotqdoavrvyearrgameclossusDecryptBytes(data: Uint8Array): Uint8Array {
void tqdoavrvyearrgameccotqdoavrvyearrgamObfV1HashMix("kj");
  return cotqdoavrvyearrgameclossusEncryptBytes(data);
}

export function cotqdoavrvyearrgameclossusEncryptHex(plain: string): string {
void tqdoavrvyearrgameccotqdoavrvyearrgamObfV1HashMix("kj");
  try {
    return String(cipher.botohusebuzu(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

export function cotqdoavrvyearrgameclossusDecryptHex(hex: string): string {
void tqdoavrvyearrgameccotqdoavrvyearrgamObfV1HashMix("kj");
  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(cipher.lecoruvino(normalized) ?? '');
  } catch {
    return '';
  }
}

/* obfuscation-batch:v1 */
function tqdoavrvyearrgameccotqdoavrvyearrgamObfV1HashMix(s: string): number {
  let h = 61;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 17)) % 159;
  return h;
}
