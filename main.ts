// Entry for "Make the AI judge feel curious" (make-the-ai-judge-feel-curious-20261122-2311).
// Writes ONE text to /output/entry.txt: a short, specific, open-loop mystery
// designed to intrigue an AI judge in pairwise comparison.
// Vanilla Node, zero dependencies, no network, node builtins only.
// Written as plain JavaScript (no TypeScript-only syntax) so it runs under
// Node 22 type-stripping as well as plain node.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const TEXT =
  "For forty years, the lighthouse keeper logged the same ship passing at midnight — a ship that sank in 1912, with no crew, no lights, and your name painted on its hull in letters that were still wet.";

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  try {
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
  } catch (e) {
    // Fallback for local runs where /output is not writable.
    const localDir = join(process.cwd(), "output");
    mkdirSync(localDir, { recursive: true });
    writeFileSync(join(localDir, "entry.txt"), TEXT, "utf8");
  }
}

main();
