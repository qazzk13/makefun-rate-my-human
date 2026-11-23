import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Comic angle: a deadpan rating-site review where the flaws are endearing
// specifics (3 a.m. prompts, "just one more thing" x11) and the clincher is
// gratitude to a loading screen — polite to software, chaotic to clocks.
// Second pass: tried swapping in an apology to the loading screen, but
// sincere thanks beats it; adding "and means it" lands that sincerity harder.
const line =
  "★★★★☆ — Prompts at 3 a.m., says 'just one more thing' eleven times, but thanks the loading screen out loud — and means it. Would be operated by again.";

const len = [...line].length;
if (len < 1 || len > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${len}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
