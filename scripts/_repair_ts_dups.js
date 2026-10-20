const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}
const files = [path.join(root, 'App.tsx'), ...walk(path.join(root, 'Layouts')), ...walk(path.join(root, 'services'))];
for (const file of files) {
  const t = fs.readFileSync(file, 'utf8');
  const counts = new Map();
  let m;
  const re = /(?:function|const|class|interface|type|enum)\s+([A-Za-z0-9_]+)/g;
  while ((m = re.exec(t))) counts.set(m[1], (counts.get(m[1]) || 0) + 1);
  const dups = [...counts.entries()].filter(([, c]) => c > 1);
  if (dups.length) {
    console.log(path.relative(root, file));
    for (const [n, c] of dups) console.log(' ', n, c);
  }
}
