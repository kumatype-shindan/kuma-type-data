import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";

const root = new URL("..", import.meta.url).pathname;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if ([".git", "node_modules"].includes(entry.name)) continue;
      files.push(...await walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

test("public package does not include private deployment or site-source files", async () => {
  const files = await walk(root);
  const relative = files.map((file) => path.relative(root, file));

  assert.equal(relative.some((file) => file.startsWith(".env")), false);
  assert.equal(relative.some((file) => file.startsWith("src/app/")), false);
  assert.equal(relative.some((file) => file.startsWith("src/components/")), false);
  assert.equal(relative.some((file) => file.startsWith(".debug/")), false);
  assert.equal(relative.some((file) => file.includes("vercel")), false);

  for (const file of files) {
    const info = await stat(file);
    if (info.size > 1024 * 1024 || /\.(png|jpg|jpeg|webp|ico|woff2)$/i.test(file)) continue;

    const text = await readFile(file, "utf8");
    const forbidden = [
      "GOOGLE_" + "ANALYTICS",
      "STRIPE" + "_",
      "DATABASE" + "_URL",
      "AUTH" + "_SECRET",
      "NEXT_PUBLIC" + "_APP_URL",
    ];
    assert.equal(forbidden.some((item) => text.includes(item)), false, file);
  }
});
