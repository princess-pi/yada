#!/usr/bin/env bun
// build.ts — bundles yada CLI to bin/yada.mjs for npm publish
import * as fs from "node:fs";
import * as path from "node:path";

const DIST = path.join(import.meta.dir, "bin");
fs.mkdirSync(DIST, { recursive: true });

const result = await Bun.build({
  entrypoints: [path.join(import.meta.dir, "bin/yada.ts")],
  outdir: DIST,
  format: "esm",
  target: "node",
  naming: "yada.mjs",
  external: ["@princess-pi/libs"],
});

if (!result.success) {
  console.error("❌ build failed:", result.logs);
  process.exit(1);
}
console.log("✅ bin/yada.mjs");
