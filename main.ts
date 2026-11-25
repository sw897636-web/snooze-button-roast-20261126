// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
// Writes one single-line roast (<=200 chars) to /output/entry.txt.
// Deterministic: the same text on every run, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dear snooze button: you've stolen 9 minutes from me 4,000 times — 25 full days — and I spent all of it dreaming I was at work, which my boss Linda calls my best attendance yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
