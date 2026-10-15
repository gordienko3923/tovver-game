/**
 * Hermes ships an incomplete Intl — never use Intl.NumberFormat here.
 * Manual grouping keeps the output identical on every device.
 */
export function groupThousands(value: number): string {
  const sign = value < 0 ? '-' : '';
  const digits = Math.abs(Math.trunc(value)).toString();
  let out = '';
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && (digits.length - i) % 3 === 0) {
      out += ',';
    }
    out += digits[i];
  }
  return sign + out;
}

export function formatCredits(value: number): string {
  return groupThousands(value) + ' CR';
}

export function formatSignedCredits(value: number): string {
  return (value >= 0 ? '+' : '') + groupThousands(value);
}
