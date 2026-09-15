# yada

Line deduplication with counts for terminal workflows; `yada` and `dedupwcount` are one binary.
Public, `@princess-pi/yada`, not on npm yet. Origin: btw#63.

## Hard gates

- **Never edit `bin/yada.mjs`.** It's built from `bin/yada.ts`. Edit the `.ts`, then `bun run build`.
- **The shipped bin runs on stock node.** bun is for building here, never a consumer requirement.
- **Shared code goes in `@princess-pi/libs`**, pinned exactly (currently `1.0.0`), never copied in.
- **Nothing installs yet.** `@princess-pi/libs` isn't published, so `npm install` fails in a fresh
  clone (#1). Until #1 closes, the README shows only the intended npm channel, labelled
  not-yet-available — never an install path presented as working.

## Commands

| Purpose | Command |
|---|---|
| Install deps | `bun install` — needs `@princess-pi/libs` to resolve (#1) |
| Build | `bun run build` |
| Test | `bun run test` — each suite in its own process |

## Shape

- `bin/yada.ts` — the CLI.
- `extensions/dedup.ts` + `extensions/lib/dedup/` — the Pi face and the shared dedup logic.
- `docs/manifests/yada-cmd.json` — single source for `--help` / `--why`.
- `docs/SPEC_YADA.html` — the spec.
