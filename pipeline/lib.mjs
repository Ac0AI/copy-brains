// Shared helpers for The Brains pipeline: env, file IO and provider clients.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
process.loadEnvFile(join(ROOT, ".env.local"));

export const brainDir = (slug) => join(ROOT, "data", "brains", slug);

export async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    if (fallback !== undefined && error.code === "ENOENT") return fallback;
    throw error;
  }
}

export async function writeJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, JSON.stringify(value, null, 2) + "\n");
}

export async function loadPerson(slug) {
  const people = await readJson(join(ROOT, "pipeline", "people.json"));
  const person = people.find((p) => p.slug === slug);
  if (!person) throw new Error(`Unknown person "${slug}" in pipeline/people.json`);
  return person;
}

// Keeps a running tally so every run reports what it spent.
export const usage = { scrapecreators: 0, contextdev: 0, ytapi: 0, transcript: 0, twitter154: 0 };

async function request(url, init, label, attempt = 1) {
  let response;
  try {
    response = await fetch(url, { ...init, signal: AbortSignal.timeout(90_000) });
  } catch (error) {
    if (attempt >= 4) throw error;
    await new Promise((resolve) => setTimeout(resolve, 2000 * 2 ** attempt));
    return request(url, init, label, attempt + 1);
  }
  // context.dev allows one in-flight request per organization, so parallel brain runs need
  // patient, jittered retries on 429 rather than the short backoff used for 5xx.
  const maxAttempts = response.status === 429 ? 10 : 4;
  if ((response.status === 429 || response.status >= 500) && attempt < maxAttempts) {
    const retryAfter = Number(response.headers.get("retry-after"));
    const wait = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1500 * 2 ** Math.min(attempt, 4);
    await new Promise((resolve) => setTimeout(resolve, wait + Math.random() * 1500));
    return request(url, init, label, attempt + 1);
  }
  const text = await response.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text };
  }
  if (!response.ok) {
    const error = new Error(`${label} ${response.status}: ${text.slice(0, 200)}`);
    error.status = response.status;
    error.body = body;
    throw error;
  }
  return body;
}

export async function scrapeCreators(path, params) {
  usage.scrapecreators += 1;
  const url = new URL(`https://api.scrapecreators.com${path}`);
  for (const [k, v] of Object.entries(params)) if (v != null) url.searchParams.set(k, v);
  return request(url, { headers: { "x-api-key": process.env.SCRAPECREATORS_API_KEY } }, "ScrapeCreators");
}

function rapid(host, key, counter) {
  return (path, params = {}) => {
    usage[counter] += 1;
    const url = new URL(`https://${host}${path}`);
    for (const [k, v] of Object.entries(params)) if (v != null) url.searchParams.set(k, v);
    return request(url, { headers: { "x-rapidapi-key": key(), "x-rapidapi-host": host } }, host);
  };
}

export const ytApi = rapid("yt-api.p.rapidapi.com", () => process.env.RAPIDAPI_KEY_MEDIA, "ytapi");
export const ytTranscript = rapid("youtube-transcript3.p.rapidapi.com", () => process.env.RAPIDAPI_KEY_MEDIA, "transcript");
export const twitter154 = rapid("twitter154.p.rapidapi.com", () => process.env.RAPIDAPI_KEY_SOCIAL, "twitter154");

export async function contextDev(method, path, { query, body } = {}) {
  const url = new URL(`https://api.context.dev/v1${path}`);
  for (const [k, v] of Object.entries(query ?? {})) if (v != null) url.searchParams.set(k, v);
  const result = await request(
    url,
    {
      method,
      headers: { Authorization: `Bearer ${process.env.CONTEXT_DEV_API_KEY}`, "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    },
    "context.dev",
  );
  usage.contextdev += result?.key_metadata?.credits_consumed ?? 1;
  return result;
}

// Parses YouTube's "1:02:03" / "12:34" length text into seconds.
export function lengthToSeconds(text) {
  if (!text) return null;
  return String(text)
    .split(":")
    .map(Number)
    .reduce((total, part) => total * 60 + part, 0);
}

export async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  const run = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index], index);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

// Short posts (X, LinkedIn) are indexed verbatim; everything else gets a card and notes.
export const isPost = (type) => type === "x_post" || type === "linkedin_post";

export async function apifyRun(actor, input, timeoutSec = 300) {
  const url = new URL(`https://api.apify.com/v2/acts/${actor.replace("/", "~")}/run-sync-get-dataset-items`);
  url.searchParams.set("token", process.env.APIFY_TOKEN);
  url.searchParams.set("timeout", String(timeoutSec));
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
    signal: AbortSignal.timeout((timeoutSec + 30) * 1000),
  });
  if (!response.ok) throw new Error(`Apify ${actor} ${response.status}: ${(await response.text()).slice(0, 300)}`);
  return response.json();
}
