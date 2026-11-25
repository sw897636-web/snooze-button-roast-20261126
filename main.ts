// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
// Writes one single-line roast (<=200 chars) to /output/entry.txt.
// Deterministic: the same text on every run, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At 6 AM on a Saturday my alarm went off like it was late for a meeting that doesn't exist — the most punctual thing I own, and it's punctual for the wrong day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
