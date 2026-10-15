// Loads every built brain (data/brains/<slug>/index.json) and answers the two MCP tools.
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { Bm25 } from "./search.js";

export interface IndexSource {
  id: string;
  type: "youtube" | "essay" | "podcast" | "x_article" | "x_post";
  title: string;
  url: string;
  publishedAt: string | null;
  outlet: string | null;
  topics: string[];
  quality?: number;
}

interface Chunk {
  sourceId: string;
  heading: string | null;
  text: string;
}

interface BrainIndex {
  slug: string;
  name: string;
  x: string;
  builtAt: string;
  typeLabels: Record<string, string>;
  sources: IndexSource[];
  chunks: Chunk[];
}

export interface Brain extends BrainIndex {
  sourceById: Map<string, IndexSource>;
  bm25: Bm25;
}

const MAX_CHUNKS_PER_SOURCE = 2;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export async function loadBrains(dataDir: string): Promise<Map<string, Brain>> {
  const brains = new Map<string, Brain>();
  for (const slug of await readdir(dataDir)) {
    const raw = await readFile(join(dataDir, slug, "index.json"), "utf8").catch(() => null);
    if (!raw) continue;
    const index = JSON.parse(raw) as BrainIndex;
    const sourceById = new Map(index.sources.map((s) => [s.id, s]));
    const bm25 = new Bm25(
      index.chunks.map((chunk, id) => ({
        id,
        fields: { text: chunk.text, boosted: `${chunk.heading ?? ""} ${sourceById.get(chunk.sourceId)?.title ?? ""}` },
      })),
    );
    brains.set(index.slug, { ...index, sourceById, bm25 });
  }
  return brains;
}

const formatDate = (date: string | null) => {
  if (!date || !/^\d{4}-\d{2}/.test(date)) return date ?? "";
  const [y, m, d] = date.split("-").map(Number);
  return d ? `${d} ${MONTHS[m - 1]} ${y}` : `${MONTHS[m - 1]} ${y}`;
};

function describe(brain: Brain, source: IndexSource): string {
  const label = brain.typeLabels[source.type] ?? source.type;
  return [label, source.outlet && source.type !== "x_post" ? source.outlet : null, formatDate(source.publishedAt)]
    .filter(Boolean)
    .join(", ");
}

export function searchBrain(brain: Brain, query: string, limit: number): string {
  const perSource = new Map<string, number>();
  const picked: Chunk[] = [];
  for (const { doc } of brain.bm25.search(query)) {
    const chunk = brain.chunks[doc];
    const seen = perSource.get(chunk.sourceId) ?? 0;
    if (seen >= MAX_CHUNKS_PER_SOURCE) continue;
    perSource.set(chunk.sourceId, seen + 1);
    picked.push(chunk);
    if (picked.length >= limit) break;
  }
  if (!picked.length) {
    return `No passages in ${brain.name}'s brain matched "${query}". Try other words, or call list_sources to see what it covers.`;
  }
  return picked
    .map((chunk, i) => {
      const source = brain.sourceById.get(chunk.sourceId)!;
      const title = source.type === "x_post" ? `X post by @${brain.x}, ${formatDate(source.publishedAt)}` : source.title;
      const heading = chunk.heading && chunk.heading !== "Summary" ? `### ${chunk.heading}\n\n` : "";
      return `## ${i + 1}. ${title}\nSource: ${source.url} (${describe(brain, source)})\n\n${heading}${chunk.text}`;
    })
    .join("\n\n---\n\n");
}

export function listSources(brain: Brain): string {
  const longForm = brain.sources
    .filter((s) => s.type !== "x_post")
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""))
    .map((s) => `- ${s.title} (${s.url}): ${describe(brain, s)}`);

  const postsByMonth = new Map<string, number>();
  for (const s of brain.sources.filter((s) => s.type === "x_post")) {
    const month = (s.publishedAt ?? "unknown").slice(0, 7);
    postsByMonth.set(month, (postsByMonth.get(month) ?? 0) + 1);
  }
  const years = new Map<string, number>();
  for (const [month, count] of postsByMonth) years.set(month.slice(0, 4), (years.get(month.slice(0, 4)) ?? 0) + count);
  const posts = [...years.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, count]) => `- ${brain.name}'s X posts on business and growth, ${year} (https://x.com/${brain.x}): ${count} X posts by @${brain.x}`);

  return [...longForm, ...posts].join("\n");
}
