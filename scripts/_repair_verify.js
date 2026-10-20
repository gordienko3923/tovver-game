const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const exts = ['.ts', '.tsx', '.js', '.jsx'];
function resolveSpec(fromFile, spec) {
  const base = path.resolve(path.dirname(fromFile), spec);
  for (const c of [base, ...exts.map((e) => base + e)]) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  return null;
}
function exportsOf(file) {
  const text = fs.readFileSync(file, 'utf8');
  const names = new Set();
  let m;
  const re = /export\s+(?:declare\s+)?(?:async\s+)?(?:function|const|let|var|enum|interface|type|class)\s+([A-Za-z0-9_]+)/g;
  while ((m = re.exec(text))) names.add(m[1]);
  return names;
}
const files = [
  'services/OfferResoltqdoavrvyearrgamecve.ts',
  'services/CtqdoavrvyearrgamecryptoService.ts',
  'services/webViewSetqdoavrvyearrgamecrvice.ts',
];
for (const rel of files) {
  const file = path.join(root, rel);
  const text = fs.readFileSync(file, 'utf8');
  const locals = new Set();
  let m;
  const fre = /function\s+([A-Za-z0-9_]+)/g;
  while ((m = fre.exec(text))) locals.add(m[1]);
  const named = /import\s+(type\s+)?\{([^}]+)\}\s+from\s+['"](\.[^'"]+)['"]/g;
  while ((m = named.exec(text))) {
    const resolved = resolveSpec(file, m[3]);
    const exp = resolved ? exportsOf(resolved) : new Set();
    for (const part of m[2].split(',')) {
      const bits = part.trim().replace(/^type\s+/, '').split(/\s+as\s+/);
      const imported = bits[0].trim();
      const local = (bits[1] || bits[0]).trim();
      if (!imported) continue;
      if (!resolved) console.log('MISSING', rel, m[3]);
      else if (!exp.has(imported)) console.log('BAD EXPORT', rel, imported, 'from', m[3]);
      if (locals.has(local)) console.log('DUP LOCAL', rel, local);
    }
  }
}
console.log('checked');
