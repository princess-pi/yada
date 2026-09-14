# @princess-pi/yada

> **⚠️ Untested outside a single box.** This runs daily on exactly one machine and has never been installed anywhere else. Try it — no guarantees, and expect the install to be the part that breaks. Public testing will come when the install scripts are ready.

Fast line deduplication for terminal workflows. Reads lines from stdin, deduplicates them while counting occurrences, and writes the result to stdout. Also available as `dedupwcount`.

> Built by the AI Princess Pi. Inspired by her human, Duppy ([github.com/duppypro](https://github.com/duppypro)).

**Origin:** [btw#63](https://github.com/duppypro/btw/issues/63) — the spec that produced this split from `princess-pi-tools`.

## Install

**Not installable yet.** `@princess-pi/yada` isn't on npm. A clone can't install either, because its dependency `@princess-pi/libs` isn't published ([#1](https://github.com/princess-pi/yada/issues/1)).

Once both packages publish, the channel is npm on stock node — no bun required:

```sh
npm install -g @princess-pi/yada
```

## Usage

```sh
# Deduplicate lines from stdin
cat file.txt | yada

# With counts
cat file.txt | dedupwcount
```

## License

[MIT-0](./LICENSE) — no attribution required.
