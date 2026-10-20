/**
 * One-shot repair after a services-obfuscation batch.
 * Strips void/sink calls from dummy helper bodies and drops imports
 * whose target file is missing when the names are already declared locally.
 */
const fs = require("node:fs/promises");
const path = require("node:path");
const parser = require("@babel/parser");

const ROOT = path.resolve(__dirname, "..", "..");
const FRAGMENT = "tqdoavrvyearrgamec";
const SKIP_DIR = new Set(["node_modules", ".git", "build", ".gradle", "Pods"]);

function isHelperName(name) {
  if (!name) return false;
  if (/Obf/i.test(name)) return true;
  if (/Game(?:MixSeed|FoldRange|ClampSpan)$/.test(name)) return true;
  return false;
}

function functionName(node) {
  if (!node) return "";
  if (node.id && node.id.type === "Identifier") return node.id.name;
  if (node.key && node.key.type === "Identifier") return node.key.name;
  if (node.key && node.key.type === "StringLiteral") return String(node.key.value);
  return "";
}

function isFunctionNode(node) {
  return (
    node.type === "FunctionDeclaration" ||
    node.type === "FunctionExpression" ||
    node.type === "ArrowFunctionExpression" ||
    node.type === "ObjectMethod" ||
    node.type === "ClassMethod" ||
    node.type === "ClassPrivateMethod"
  );
}

function walk(node, visit) {
  if (!node || typeof node !== "object") return;
  visit(node);
  for (const key of Object.keys(node)) {
    if (key === "loc" || key === "range" || key === "leadingComments" || key === "trailingComments" || key === "innerComments") {
      continue;
    }
    const value = node[key];
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item.type === "string") walk(item, visit);
      }
    } else if (value && typeof value.type === "string") {
      walk(value, visit);
    }
  }
}

function applyEdits(source, edits) {
  const sorted = edits.filter((e) => e.end >= e.start).sort((a, b) => b.start - a.start);
  let next = source;
  for (const edit of sorted) {
    next = next.slice(0, edit.start) + (edit.text || "") + next.slice(edit.end);
  }
  return next;
}

async function walkFiles(dir, acc) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (SKIP_DIR.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walkFiles(full, acc);
    else acc.push(full);
  }
}

function skipTriviaOrString(code, i) {
  if (i >= code.length) return i;
  const c = code[i];
  const n = code[i + 1];
  if (c === " " || c === "\t" || c === "\r" || c === "\n") {
    let j = i;
    while (j < code.length && /[ \t\r\n]/.test(code[j])) j++;
    return j;
  }
  if (c === "/" && n === "/") {
    const nl = code.indexOf("\n", i);
    return nl < 0 ? code.length : nl + 1;
  }
  if (c === "/" && n === "*") {
    const end = code.indexOf("*/", i + 2);
    return end < 0 ? code.length : end + 2;
  }
  if (code.startsWith('"""', i)) {
    const end = code.indexOf('"""', i + 3);
    return end < 0 ? code.length : end + 3;
  }
  if (c === '"' || c === "'") {
    let j = i + 1;
    while (j < code.length) {
      if (code[j] === "\\") {
        j += 2;
        continue;
      }
      if (code[j] === c) return j + 1;
      j++;
    }
    return j;
  }
  return i;
}

function isKeywordAt(code, i, word) {
  if (!code.startsWith(word, i)) return false;
  const prev = i > 0 ? code[i - 1] : " ";
  const next = code[i + word.length] || " ";
  if (/[A-Za-z0-9_]/.test(prev) || /[A-Za-z0-9_]/.test(next)) return false;
  return true;
}

function matchDelim(code, openIdx, open, close) {
  let i = openIdx + 1;
  let depth = 1;
  while (i < code.length && depth > 0) {
    const skipped = skipTriviaOrString(code, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (code[i] === open) depth++;
    else if (code[i] === close) depth--;
    i++;
  }
  return i;
}

function readIdent(code, i) {
  let j = i;
  while (j < code.length && /[A-Za-z0-9_]/.test(code[j])) j++;
  return { text: code.slice(i, j), end: j };
}

function skipAngles(code, i) {
  if (code[i] !== "<") return i;
  let depth = 0;
  let j = i;
  while (j < code.length) {
    const skipped = skipTriviaOrString(code, j);
    if (skipped > j) {
      j = skipped;
      continue;
    }
    if (code[j] === "<") depth++;
    else if (code[j] === ">") {
      depth--;
      j++;
      if (depth === 0) return j;
      continue;
    }
    j++;
  }
  return j;
}

function skipType(code, i) {
  let paren = 0;
  let angle = 0;
  let bracket = 0;
  let j = i;
  while (j < code.length) {
    const skipped = skipTriviaOrString(code, j);
    if (skipped > j) {
      j = skipped;
      continue;
    }
    const c = code[j];
    if (c === "(") paren++;
    else if (c === ")") {
      if (paren === 0) break;
      paren--;
    } else if (c === "<") angle++;
    else if (c === ">") angle = Math.max(0, angle - 1);
    else if (c === "[") bracket++;
    else if (c === "]") bracket--;
    else if (paren === 0 && angle === 0 && bracket === 0 && (c === "{" || c === "=")) break;
    j++;
  }
  return j;
}

function findExprEnd(code, i) {
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  while (i < code.length) {
    if (paren === 0 && brace === 0 && bracket === 0 && (code[i] === "\n" || code[i] === ";")) return i;
    const skipped = skipTriviaOrString(code, i);
    if (skipped > i) {
      if (paren === 0 && brace === 0 && bracket === 0) {
        for (let k = i; k < skipped; k++) {
          if (code[k] === "\n" || code[k] === ";") return k;
        }
      }
      i = skipped;
      continue;
    }
    const c = code[i];
    if (c === "(") paren++;
    else if (c === ")") {
      if (paren === 0) break;
      paren--;
    } else if (c === "{") brace++;
    else if (c === "}") {
      if (brace === 0) break;
      brace--;
    } else if (c === "[") bracket++;
    else if (c === "]") bracket--;
    i++;
  }
  return i;
}

function parseKotlinFun(code, i) {
  let j = skipTriviaOrString(code, i + 3);
  if (code[j] === "<") j = skipTriviaOrString(code, skipAngles(code, j));
  let name = "";
  while (j < code.length) {
    j = skipTriviaOrString(code, j);
    if (code[j] === "<") {
      j = skipAngles(code, j);
      continue;
    }
    if (/[A-Za-z_]/.test(code[j] || "")) {
      const id = readIdent(code, j);
      name = id.text;
      j = skipTriviaOrString(code, id.end);
      if (code[j] === ".") {
        j++;
        continue;
      }
      if (code[j] === "<") j = skipTriviaOrString(code, skipAngles(code, j));
      break;
    }
    break;
  }
  j = skipTriviaOrString(code, j);
  if (code[j] !== "(") return null;
  j = matchDelim(code, j, "(", ")");
  j = skipTriviaOrString(code, j);
  if (code[j] === ":") j = skipType(code, j + 1);
  j = skipTriviaOrString(code, j);
  if (code[j] === "{") return { name, kind: "block", brace: j, resumeAt: j + 1 };
  if (code[j] === "=") {
    const exprStart = skipTriviaOrString(code, j + 1);
    const exprEnd = findExprEnd(code, exprStart);
    return { name, kind: "expr", eq: j, exprEnd, resumeAt: exprEnd };
  }
  return null;
}

function isSinkLine(line) {
  return /^[ \t]*(?:@Suppress(?:Warnings)?\([^)\n]*\)[ \t]*)?(?:val|final[ \t]+int|int)[ \t]+\w*Sink\w*[ \t]*=/.test(line);
}

function sinkRanges(code, start, end) {
  const ranges = [];
  let i = start;
  while (i < end) {
    const nl = code.indexOf("\n", i);
    const lineEnd = nl < 0 ? code.length : nl + 1;
    if (lineEnd > end + 1) break;
    const line = code.slice(i, Math.min(lineEnd, end));
    if (isSinkLine(line)) ranges.push({ start: i, end: lineEnd > end ? end : lineEnd, text: "" });
    if (nl < 0) break;
    i = lineEnd;
  }
  return ranges;
}

function braceBalance(code) {
  let depth = 0;
  let i = 0;
  while (i < code.length) {
    const skipped = skipTriviaOrString(code, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (code[i] === "{") depth++;
    else if (code[i] === "}") depth--;
    i++;
  }
  return depth;
}

async function resolveImport(file, spec) {
  const base = path.resolve(path.dirname(file), spec);
  const candidates = [base, `${base}.ts`, `${base}.tsx`, `${base}.js`, `${base}.jsx`, path.join(base, "index.ts"), path.join(base, "index.tsx")];
  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      /* continue */
    }
  }
  return null;
}

async function repairTypeScript(file) {
  const source = await fs.readFile(file, "utf8");
  let ast;
  try {
    ast = parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"], errorRecovery: false });
  } catch (error) {
    return { changed: false, error: error.message, ui: [], missing: [] };
  }
  const edits = [];
  const ui = [];
  const localFns = new Set();
  walk(ast, (node) => {
    if (node.type === "FunctionDeclaration" && node.id) localFns.add(node.id.name);
    if (node.type === "VariableDeclarator" && node.id && node.id.type === "Identifier") localFns.add(node.id.name);
    if ((node.type === "ClassDeclaration" || node.type === "ClassExpression") && node.id) localFns.add(node.id.name);
    if (isFunctionNode(node) && isHelperName(functionName(node)) && node.body && node.body.type === "BlockStatement") {
      for (const stmt of node.body.body) {
        if (stmt.type === "ExpressionStatement" && stmt.expression.type === "UnaryExpression" && stmt.expression.operator === "void") {
          let end = stmt.end;
          if (source[end] === "\r") end++;
          if (source[end] === "\n") end++;
          edits.push({ start: stmt.start, end, text: "" });
        }
      }
    }
    if (node.type === "ImportDeclaration" && typeof node.source.value === "string" && node.source.value.startsWith(".")) {
      /* checked below */
    }
    if (file.includes(`${path.sep}Layouts${path.sep}Game${path.sep}`) || file.includes("/Layouts/Game/")) {
      if (node.type === "StringLiteral" && node.value.includes(FRAGMENT)) {
        const parentImport = false;
        ui.push({ kind: "string", value: node.value.slice(0, 120), line: node.loc && node.loc.start.line });
      }
      if (node.type === "TemplateLiteral") {
        const raw = node.quasis.map((q) => q.value.raw).join("");
        if (raw.includes(FRAGMENT)) ui.push({ kind: "template", value: raw.slice(0, 120), line: node.loc && node.loc.start.line });
      }
      if (node.type === "JSXText" && node.value.includes(FRAGMENT)) {
        ui.push({ kind: "jsx", value: node.value.trim().slice(0, 120), line: node.loc && node.loc.start.line });
      }
    }
  });

  for (const node of ast.program.body) {
    if (node.type !== "ImportDeclaration") continue;
    if (!node.source.value.startsWith(".")) continue;
    const resolved = await resolveImport(file, node.source.value);
    if (resolved) continue;
    const names = node.specifiers.map((spec) => (spec.type === "ImportDefaultSpecifier" || spec.type === "ImportNamespaceSpecifier" ? spec.local.name : spec.imported && (spec.imported.name || spec.imported.value))).filter(Boolean);
    const allLocal = names.every((name) => localFns.has(name));
    if (allLocal && names.length) {
      let end = node.end;
      if (source[end] === "\r") end++;
      if (source[end] === "\n") end++;
      edits.push({ start: node.start, end, text: "" });
    }
  }

  // Drop UI hits that are import/require paths.
  const filteredUi = [];
  if (ui.length) {
    const importNodes = [];
    walk(ast, (node) => {
      if (node.type === "ImportDeclaration") importNodes.push(node);
      if (node.type === "CallExpression" && node.callee.type === "Identifier" && node.callee.name === "require") importNodes.push(node);
    });
    for (const hit of ui) {
      const inside = importNodes.some((node) => node.loc && hit.line >= node.loc.start.line && hit.line <= node.loc.end.line);
      if (!inside) filteredUi.push(hit);
    }
  }

  let next = source;
  if (edits.length) next = applyEdits(source, edits);
  if (next !== source) {
    parser.parse(next, { sourceType: "module", plugins: ["typescript", "jsx"], errorRecovery: false });
    await fs.writeFile(file, next, "utf8");
  }

  const missing = [];
  const ast2 = parser.parse(next, { sourceType: "module", plugins: ["typescript", "jsx"], errorRecovery: false });
  const defined = new Set();
  const imported = new Set();
  walk(ast2, (node) => {
    if (node.type === "FunctionDeclaration" && node.id) defined.add(node.id.name);
    if (node.type === "ImportSpecifier" || node.type === "ImportDefaultSpecifier" || node.type === "ImportNamespaceSpecifier") {
      imported.add(node.local.name);
    }
    if (
      (node.type === "ClassMethod" || node.type === "ClassPrivateMethod" || node.type === "ObjectMethod") &&
      node.key &&
      node.key.type === "Identifier"
    ) {
      defined.add(node.key.name);
    }
  });
  walk(ast2, (node) => {
    if (node.type !== "CallExpression" || node.callee.type !== "Identifier") return;
    const name = node.callee.name;
    if (!/ObfV|Obf/i.test(name)) return;
    if (defined.has(name) || imported.has(name)) return;
    missing.push(`${name} @ ${node.loc && node.loc.start.line}`);
  });

  return { changed: next !== source, error: null, ui: filteredUi, missing: missing.slice(0, 8), missingCount: missing.length };
}

function shouldSkipNative(rel, source) {
  const norm = rel.replace(/\\/g, "/");
  if (norm.includes("com/rnobfuscator/")) return true;
  if (source.includes("/* autosetup-decoy:v1 */")) return true;
  if (source.includes("/* dex-lanes:v1 */")) return true;
  return false;
}

function repairKotlinSource(source) {
  const edits = [];
  const problems = [];
  let i = 0;
  while (i < source.length) {
    const skipped = skipTriviaOrString(source, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (isKeywordAt(source, i, "fun")) {
      const parsed = parseKotlinFun(source, i);
      if (!parsed) {
        i++;
        continue;
      }
      if (parsed.kind === "block" && isHelperName(parsed.name)) {
        const close = matchDelim(source, parsed.brace, "{", "}");
        edits.push(...sinkRanges(source, parsed.brace + 1, close - 1));
      }
      if (parsed.kind === "block") {
        const close = matchDelim(source, parsed.brace, "{", "}");
        const head = source.slice(parsed.brace, Math.min(close, parsed.brace + 180));
        if (/\{\s*@Suppress\("UNUSED_VARIABLE"\)[\s\S]{0,120}\n\s*\(/.test(head) && /->/.test(head)) {
          problems.push(`lambda-sink ${parsed.name}`);
        }
      }
      i = parsed.resumeAt;
      continue;
    }
    i++;
  }
  const next = applyEdits(source, edits);
  if (braceBalance(next) !== braceBalance(source)) {
    return { next: source, stripped: 0, problems: ["brace-balance"] };
  }
  return { next, stripped: edits.length, problems };
}

function findJavaMethod(code, braceIndex) {
  let i = braceIndex - 1;
  while (i >= 0 && /\s/.test(code[i])) i--;
  if (code[i] !== ")") return null;
  let depth = 1;
  i--;
  while (i >= 0 && depth > 0) {
    if (code[i] === ")") depth++;
    else if (code[i] === "(") depth--;
    i--;
  }
  const open = i + 1;
  let k = open - 1;
  while (k >= 0 && /\s/.test(code[k])) k--;
  const nameEnd = k + 1;
  while (k >= 0 && /[A-Za-z0-9_]/.test(code[k])) k--;
  const name = code.slice(k + 1, nameEnd);
  if (!name || /^(if|for|while|switch|catch|else|do|try|synchronized|new)$/.test(name)) return null;
  const before = code.slice(Math.max(0, k - 30), k + 1);
  if (/\bnew\s*$/.test(before)) return null;
  if (/\b(class|interface|enum)\s*$/.test(before)) return null;
  if (/->/.test(code.slice(Math.max(0, braceIndex - 12), braceIndex))) return null;
  return { name };
}

function repairJavaSource(source) {
  const edits = [];
  let i = 0;
  while (i < source.length) {
    const skipped = skipTriviaOrString(source, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (source[i] === "{") {
      const method = findJavaMethod(source, i);
      if (method && isHelperName(method.name)) {
        const close = matchDelim(source, i, "{", "}");
        edits.push(...sinkRanges(source, i + 1, close - 1));
      }
    }
    i++;
  }
  const next = applyEdits(source, edits);
  if (braceBalance(next) !== braceBalance(source)) {
    return { next: source, stripped: 0, problems: ["brace-balance"] };
  }
  return { next, stripped: edits.length, problems: [] };
}

async function main() {
  const tsFiles = [];
  await walkFiles(path.join(ROOT, "services"), tsFiles);
  await walkFiles(path.join(ROOT, "Layouts", "Game"), tsFiles);
  let tsChanged = 0;
  const tsErrors = [];
  const uiHits = [];
  const missingCalls = [];
  for (const file of tsFiles) {
    if (!/\.(ts|tsx)$/.test(file) || file.endsWith(".d.ts")) continue;
    try {
      const result = await repairTypeScript(file);
      if (result.changed) tsChanged++;
      if (result.error) tsErrors.push(`${path.relative(ROOT, file)}: ${result.error}`);
      if (result.ui && result.ui.length) uiHits.push({ file: path.relative(ROOT, file), hits: result.ui.slice(0, 6) });
      if (result.missingCount) missingCalls.push({ file: path.relative(ROOT, file), count: result.missingCount, sample: result.missing });
    } catch (error) {
      tsErrors.push(`${path.relative(ROOT, file)}: ${error.message}`);
    }
  }

  const javaRoot = path.join(ROOT, "android", "app", "src", "main", "java");
  const nativeFiles = [];
  await walkFiles(javaRoot, nativeFiles);
  let nativeChanged = 0;
  let sinksStripped = 0;
  const nativeProblems = [];
  for (const file of nativeFiles) {
    if (!/\.(kt|java)$/.test(file)) continue;
    const source = await fs.readFile(file, "utf8");
    const rel = path.relative(javaRoot, file);
    if (shouldSkipNative(rel, source)) continue;
    const result = file.endsWith(".kt") ? repairKotlinSource(source) : repairJavaSource(source);
    if (result.problems && result.problems.length) nativeProblems.push({ file: rel, problems: result.problems });
    if (result.next !== source) {
      await fs.writeFile(file, result.next, "utf8");
      nativeChanged++;
      sinksStripped += result.stripped;
    }
  }

  console.log(JSON.stringify({
    tsChanged,
    tsErrors: tsErrors.slice(0, 20),
    tsErrorCount: tsErrors.length,
    uiHits: uiHits.slice(0, 30),
    uiFileCount: uiHits.length,
    missingCalls: missingCalls.slice(0, 20),
    missingFileCount: missingCalls.length,
    nativeChanged,
    sinksStripped,
    nativeProblems: nativeProblems.slice(0, 20),
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
