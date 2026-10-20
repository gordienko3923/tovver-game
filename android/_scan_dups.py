import os
import re

root = os.path.join("app", "src", "main", "java")
pat = re.compile(r"final int (\w+)\s*=")
for dirpath, _, files in os.walk(root):
    for name in files:
        if not name.endswith(".java"):
            continue
        path = os.path.join(dirpath, name)
        lines = open(path, encoding="utf-8", errors="replace").read().splitlines()
        stack = [set()]
        for i, line in enumerate(lines, 1):
            code = line
            while True:
                nxt = re.sub(r'"[^"\\]*(?:\\.[^"\\]*)*"', "", code)
                nxt = re.sub(r"'[^'\\]*(?:\\.[^'\\]*)*'", "", nxt)
                if nxt == code:
                    break
                code = nxt
            opens = code.count("{")
            closes = code.count("}")
            # declarations before braces on this line
            pre = code
            if "{" in code:
                pre = code.split("{", 1)[0]
            for m in pat.finditer(pre):
                var = m.group(1)
                if any(var in scope for scope in stack):
                    print(f"{path}:{i}: {var}")
                stack[-1].add(var)
            for _ in range(opens):
                stack.append(set())
            for _ in range(min(closes, len(stack) - 1)):
                stack.pop()
            if "{" not in code:
                continue
            rest = code.split("{", 1)[1]
            for m in pat.finditer(rest):
                var = m.group(1)
                if any(var in scope for scope in stack):
                    print(f"{path}:{i}: {var}")
                stack[-1].add(var)
