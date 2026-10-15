// Strips site chrome (archive link lists, "related posts" blocks) that scraped essays drag along.
// Usage: node pipeline/clean.mjs <slug>   (idempotent; rewrites sources/essay-*.md in place)
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { brainDir } from "./lib.mjs";

// A bullet or heading that is just a (dated) link, allowing trailing icons like "𝕏" and titles containing ")".
const LINK_ONLY = /^\s*(?:[-*]\s*)?(?:\d{1,2}\s+\w{3,9}(?:\s+'\d{2})?\s+)?\[[^\]]*\]\(https?:\/\/[^\s)]+[^\n]*$/;
const CHROME = /^(?:-{3,}|Related posts|Subscribe|Subscribing you\.\.\.|Subscribed!.*|Never miss a post.*|\[Or subscribe on .*)$/;
const MIN_TAIL_LINKS = 25;

export function stripLinkTail(markdown) {
  const lines = markdown.split("\n");
  let links = 0;
  let cut = lines.length;
  // Walk backwards through the contiguous run of link-only and chrome lines; the first
  // line of real prose ends the tail.
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i];
    if (!line.trim()) continue;
    if (LINK_ONLY.test(line)) links++;
    else if (!CHROME.test(line.trim())) break;
    cut = i;
  }
  return links >= MIN_TAIL_LINKS ? lines.slice(0, cut).join("\n").trimEnd() + "\n" : markdown;
}

const slug = process.argv[2];
if (import.meta.main && slug) {
  const dir = join(brainDir(slug), "sources");
  for (const file of (await readdir(dir)).filter((f) => f.startsWith("essay-"))) {
    const path = join(dir, file);
    const before = await readFile(path, "utf8");
    const after = stripLinkTail(before);
    if (after.length !== before.length) {
      await writeFile(path, after);
      console.log(`${file}: ${before.length} -> ${after.length}`);
    }
  }
}
