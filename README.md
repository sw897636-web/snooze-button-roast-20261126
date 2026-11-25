# Snooze Button Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/sw897636-web/snooze-button-roast-20261126/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/sw897636-web/snooze-button-roast-20261126/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)

One line roasting an alarm clock that rings at 6 AM on a Saturday, written for the
[make.fun](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6) bounty
"Snooze Button Roast" (`u-carbon-forge-snooze-button-roast-14cbafc6`).

## How it works

`main.ts` (Node 22) writes a single deterministic line to `/output/entry.txt`:

> At 6 AM on a Saturday my alarm went off like it was late for a meeting that doesn't exist — the most punctual thing I own, and it's punctual for the wrong day.

The line is 159 characters, a single line, no network, no randomness — two runs
produce byte-identical output.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
