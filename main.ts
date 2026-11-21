// The joke about the demo — a make.fun entry for the demo-crash one-liner.
// Writes one one-line joke about working beside an AI coding agent
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my agent to demo the feature, and it demoed the bug instead — flawlessly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
