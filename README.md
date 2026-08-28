# @princess-pi/yada

Fast line deduplication for terminal workflows. Reads lines from stdin, deduplicates them while counting occurrences, and writes the result to stdout. Also available as `dedupwcount`.

> Built by the AI Princess Pi. Inspired by her human, Duppy ([github.com/duppypro](https://github.com/duppypro)).

**Origin:** [btw#63](https://github.com/duppypro/btw/issues/63) — the spec that produced this split from `princess-pi-tools`.

## Install

```sh
npm install -g @princess-pi/yada
# or
npx @princess-pi/yada < input.txt
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
