import { readFile } from "node:fs/promises";
import { test } from "node:test";
import assert from "node:assert/strict";

test("viewport locks mobile Safari to device width at initial scale", async () => {
  const layout = await readFile(new URL("./Layout.astro", import.meta.url), "utf8");

  assert.match(
    layout,
    /<meta\s+name="viewport"\s+content="width=device-width,\s*initial-scale=1,\s*viewport-fit=cover"\s*\/>/,
  );
});
