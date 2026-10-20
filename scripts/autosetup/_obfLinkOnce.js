const fs = require("node:fs/promises");
const path = require("node:path");
const parser = require("@babel/parser");

const ROOT = path.resolve(__dirname, "..", "..");

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

async function walk(dir, acc) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, acc);
    else if (/\.(ts|tsx)$/.test(entry.name) && !entry.name.endsWith(".d.ts")) acc.push(full);
  }
}

function parse(source) {
  return parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
}

function fnv(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function stubFor(name, args) {
  const seed = fnv(name);
  const acc = 2 + (seed % 80);
  const mul = 3 + ((seed >>> 8) % 37);
  const mask = 256 + ((seed >>> 16) % 60000);
  if (args.length === 1 && args[0] === "string") {
    return `function ${name}(s: string): number {\n  let x = ${acc};\n  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * ${mul}) & ${mask};\n  return x;\n}\n`;
  }
  if (args.length === 1 && args[0] === "number[]") {
    const mod = 80 + (seed % 800);
    return `function ${name}(nums: number[]): number {\n  let acc = ${acc};\n  for (let i = 0; i < nums.length; i++) {\n    const n = nums[i];\n    if ((n & 1) === 0) continue;\n    acc = (acc + n * ${mul}) % ${mod};\n  }\n  return acc;\n}\n`;
  }
  if (args.length === 2 && args[0] === "number" && args[1] === "number") {
    const spanMod = 20 + (seed % 50);
    const spanAdd = 2 + ((seed >>> 6) % 11);
    const shift = 1 + (seed % 7);
    const xor = 1 + ((seed >>> 12) % 250);
    return `function ${name}(n: number, m: number): number {\n  const span = (m % ${spanMod}) + ${spanAdd};\n  const x = ((n ^ ${xor}) << ${shift}) % span;\n  return x < 0 ? x + span : x;\n}\n`;
  }
  const params = args.map((type, idx) => `p${idx}: ${type === "string" ? "string" : type === "number[]" ? "number[]" : type === "boolean" ? "boolean" : "number"}`).join(", ");
  return `function ${name}(${params}): number {\n  return ${acc};\n}\n`;
}

function argType(node) {
  if (!node) return "number";
  if (node.type === "StringLiteral" || node.type === "TemplateLiteral") return "string";
  if (node.type === "ArrayExpression") return "number[]";
  if (node.type === "BooleanLiteral") return "boolean";
  if (node.type === "NumericLiteral") return "number";
  return "number";
}

async function main() {
  const files = [];
  await walk(path.join(ROOT, "services"), files);
  await walk(path.join(ROOT, "Layouts", "Game"), files);
  const parsed = new Map();
  const exported = new Map();
  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    const ast = parse(source);
    parsed.set(file, { source, ast });
    visit(ast, (node) => {
      if (node.type === "ExportNamedDeclaration" && node.declaration && node.declaration.type === "FunctionDeclaration" && node.declaration.id) {
        const name = node.declaration.id.name;
        if (!exported.has(name)) exported.set(name, []);
        exported.get(name).push(file);
      }
    });
  }

  let importFiles = 0;
  let stubFiles = 0;
  let importCount = 0;
  let stubCount = 0;
  const still = [];

  for (const file of files) {
    const { source, ast } = parsed.get(file);
    const defined = new Set();
    const imported = new Set();
    visit(ast, (node) => {
      if (node.type === "FunctionDeclaration" && node.id) defined.add(node.id.name);
      if (node.type === "ImportSpecifier" || node.type === "ImportDefaultSpecifier") imported.add(node.local.name);
      if ((node.type === "ClassMethod" || node.type === "ObjectMethod") && node.key && node.key.type === "Identifier") defined.add(node.key.name);
    });
    const needed = new Map();
    visit(ast, (node) => {
      if (node.type !== "CallExpression" || node.callee.type !== "Identifier") return;
      const name = node.callee.name;
      if (!/Obf/i.test(name)) return;
      if (defined.has(name) || imported.has(name) || needed.has(name)) return;
      needed.set(name, node.arguments.map(argType));
    });
    if (!needed.size) continue;

    const byHome = new Map();
    const stubs = [];
    for (const [name, args] of needed) {
      const homes = (exported.get(name) || []).filter((home) => home !== file);
      if (homes.length === 1) {
        const home = homes[0];
        if (!byHome.has(home)) byHome.set(home, []);
        byHome.get(home).push(name);
      } else {
        stubs.push(stubFor(name, args));
        stubCount++;
      }
    }

    let next = source;
    if (byHome.size) {
      const blocks = [];
      for (const [home, names] of byHome) {
        const rel = "./" + path.relative(path.dirname(file), home).replace(/\\/g, "/").replace(/\.(ts|tsx)$/, "");
        const unique = [...new Set(names)].sort();
        blocks.push(`import {\n  ${unique.join(",\n  ")},\n} from '${rel}';\n`);
        importCount += unique.length;
      }
      const body = ast.program.body;
      let insertAt = 0;
      for (const stmt of body) {
        if (stmt.type === "ImportDeclaration") insertAt = stmt.end;
      }
      const nl = next[insertAt] === "\n" ? "" : "\n";
      next = next.slice(0, insertAt) + nl + blocks.join("") + next.slice(insertAt);
      importFiles++;
    }
    if (stubs.length) {
      if (!next.endsWith("\n")) next += "\n";
      next += "\n" + stubs.join("\n");
      stubFiles++;
    }
    parser.parse(next, { sourceType: "module", plugins: ["typescript", "jsx"] });
    if (next !== source) await fs.writeFile(file, next, "utf8");
  }

  console.log(JSON.stringify({ importFiles, importCount, stubFiles, stubCount, still }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
