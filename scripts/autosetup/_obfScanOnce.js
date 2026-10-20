const fs = require("node:fs");
const path = require("node:path");

const root = path.join("android", "app", "src", "main", "java");

function walk(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "build") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(kt|java)$/.test(entry.name)) acc.push(full);
  }
}

function skipTrivia(src, i) {
  const c = src[i];
  const n = src[i + 1];
  if (c === "/" && n === "/") {
    const nl = src.indexOf("\n", i);
    return nl < 0 ? src.length : nl + 1;
  }
  if (c === "/" && n === "*") {
    const end = src.indexOf("*/", i + 2);
    return end < 0 ? src.length : end + 2;
  }
  if (src.startsWith('"""', i)) {
    const end = src.indexOf('"""', i + 3);
    return end < 0 ? src.length : end + 3;
  }
  if (c === '"' || c === "'") {
    let j = i + 1;
    while (j < src.length) {
      if (src[j] === "\\") {
        j += 2;
        continue;
      }
      if (src[j] === c) return j + 1;
      j++;
    }
    return j;
  }
  return i;
}

function braceBalance(src) {
  let depth = 0;
  let i = 0;
  while (i < src.length) {
    const skipped = skipTrivia(src, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (src[i] === "{") depth++;
    else if (src[i] === "}") depth--;
    i++;
  }
  return depth;
}

const files = [];
walk(root, files);
const braceBad = [];
const samples = [];
let missing = 0;
let scanned = 0;
for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  if (src.includes("autosetup-decoy:v1") || src.includes("dex-lanes:v1") || file.includes("rnobfuscator")) continue;
  scanned++;
  const balance = braceBalance(src);
  if (balance !== 0) braceBad.push(`${path.basename(file)}:${balance}`);
  const defs = new Set();
  const funRe = /\bfun\s+(?:[A-Za-z_]\w*\s*\.\s*)?([A-Za-z_]\w+)\s*\(/g;
  let match;
  while ((match = funRe.exec(src))) defs.add(match[1]);
  const javaRe = /\b(?:int|void|boolean|String)\s+([A-Za-z_]\w+)\s*\(/g;
  while ((match = javaRe.exec(src))) defs.add(match[1]);
  const callRe = /(^|[^.\w])([A-Za-z_]\w*Obf\w*)\s*\(/g;
  while ((match = callRe.exec(src))) {
    const name = match[2];
    const before = src.slice(Math.max(0, match.index - 16), match.index + match[1].length);
    if (/\b(fun|int|void|boolean|String)\s*$/.test(before)) continue;
    if (defs.has(name)) continue;
    missing++;
    if (samples.length < 25) samples.push(`${path.basename(file)} ${name}`);
  }
}

const lambdaSink = [];
for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  if (src.includes("autosetup-decoy:v1") || src.includes("dex-lanes:v1")) continue;
  if (/\{\s*\r?\n\s*@Suppress\("UNUSED_VARIABLE"\)[^\n]*\r?\n\s*\([^)\n]*->/.test(src)) {
    lambdaSink.push(path.basename(file));
  }
}

const parser = require("@babel/parser");
function visit(node, fn) {
  if (!node || typeof node !== "object") return;
  fn(node);
  for (const key of Object.keys(node)) {
    if (key === "loc" || key === "range" || key === "leadingComments" || key === "trailingComments" || key === "innerComments") continue;
    const value = node[key];
    if (Array.isArray(value)) {
      for (const item of value) if (item && item.type) visit(item, fn);
    } else if (value && value.type) visit(value, fn);
  }
}
function isFn(node) {
  return node.type === "FunctionDeclaration" || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression" || node.type === "ObjectMethod" || node.type === "ClassMethod" || node.type === "ClassPrivateMethod";
}
function fnName(node) {
  if (node.id && node.id.type === "Identifier") return node.id.name;
  if (node.key && node.key.type === "Identifier") return node.key.name;
  return "";
}
const tsRoots = [path.join("services"), path.join("Layouts", "Game")];
const tsFiles = [];
function walkTs(dir) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const entry of entries) {
    if (entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkTs(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) tsFiles.push(full);
  }
}
for (const dir of tsRoots) walkTs(dir);
const parseErrors = [];
const helperVoids = [];
for (const file of tsFiles) {
  const source = fs.readFileSync(file, "utf8");
  let ast;
  try {
    ast = parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
  } catch (error) {
    parseErrors.push(`${file}: ${error.message}`);
    continue;
  }
  visit(ast, (node) => {
    const name = fnName(node);
    if (!isFn(node) || !/Obf/i.test(name) || !node.body || node.body.type !== "BlockStatement") return;
    for (const stmt of node.body.body) {
      if (stmt.type === "ExpressionStatement" && stmt.expression.type === "UnaryExpression" && stmt.expression.operator === "void") {
        if (helperVoids.length < 10) helperVoids.push(`${path.basename(file)} ${name}`);
      }
    }
  });
}
console.log(JSON.stringify({ scanned, braceBad, missing, samples, lambdaSink, tsFiles: tsFiles.length, parseErrors, helperVoids }, null, 2));
