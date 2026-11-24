// The One-Line Exit — a one-line resignation letter, written to /output/entry.txt.
// The program is deterministic: it always writes the same single line, no network,
// no randomness, no clock. The gate allows 1 to 140 UTF-8 characters; the line is 127.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hereby resign as a professional queue-stander: after nine years I finally reached the front of the line, and it was the exit.";

// The gate counts the file's characters, so the file holds exactly the line:
// no trailing newline, no extra whitespace, nothing for the judge to trip over.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, over the 140 limit`);
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
