// Step 1: cheap, metadata-only discovery of everything that might belong in a brain.
// Usage: node pipeline/discover.mjs <slug>
// Writes data/brains/<slug>/candidates.json. Transcripts and page bodies come later, after curation.
import { join } from "node:path";
import { brainDir, contextDev, lengthToSeconds, loadPerson, scrapeCreators, usage, writeJson, ytApi } from "./lib.mjs";

const MIN_VIDEO_SECONDS = 8 * 60;
const PAGES_PER_QUERY = 2;

const slug = process.argv[2];
if (!slug) throw new Error("Usage: node pipeline/discover.mjs <slug>");
const person = await loadPerson(slug);

async function discoverX() {
  const profile = await scrapeCreators("/v1/twitter/profile", { handle: person.x });
  const timeline = await scrapeCreators("/v1/twitter/user-tweets", { handle: person.x });
  const legacy = profile.legacy ?? {};
  const posts = (timeline.tweets ?? [])
    .filter((t) => t.legacy)
    .map((t) => ({
      id: t.rest_id,
      url: `https://x.com/${person.x}/status/${t.rest_id}`,
      date: new Date(t.legacy.created_at).toISOString().slice(0, 10),
      text: t.note_tweet?.note_tweet_results?.result?.text ?? t.legacy.full_text,
      likes: t.legacy.favorite_count,
      views: Number(t.views?.count ?? 0),
      isReply: !!t.legacy.in_reply_to_status_id_str,
      isRetweet: !!t.legacy.retweeted_status_result,
    }))
    .filter((t) => !t.isRetweet);
  return {
    profile: {
      handle: person.x,
      name: profile.core?.name ?? legacy.name,
      bio: legacy.description ?? profile.description,
      followers: legacy.followers_count ?? profile.followers_count,
      posts: legacy.statuses_count ?? profile.statuses_count,
      avatar: (profile.avatar?.image_url ?? legacy.profile_image_url_https ?? "").replace("_normal", "_400x400"),
      location: profile.location?.location ?? legacy.location,
      url: legacy.entities?.url?.urls?.[0]?.expanded_url ?? null,
    },
    posts,
  };
}

function toVideo(v, query) {
  return {
    id: v.videoId,
    url: `https://www.youtube.com/watch?v=${v.videoId}`,
    title: v.title,
    channel: v.channelTitle,
    channelHandle: v.channelHandle,
    views: Number(v.viewCount ?? 0),
    seconds: lengthToSeconds(v.lengthText),
    date: v.publishDate ?? v.publishedAt?.slice(0, 10) ?? v.publishedTimeText ?? null,
    description: v.description ?? null,
    foundBy: query,
  };
}

async function discoverYouTube() {
  const videos = new Map();
  const add = (v, query) => {
    if (v.type !== "video" || !v.videoId || videos.has(v.videoId)) return;
    videos.set(v.videoId, toVideo(v, query));
  };

  for (const query of person.youtubeQueries) {
    let token;
    for (let page = 0; page < PAGES_PER_QUERY; page++) {
      const result = await ytApi("/search", { query, type: "video", token });
      for (const v of result.data ?? []) add(v, query);
      token = result.continuation;
      if (!token) break;
    }
  }

  let channel = null;
  if (person.youtubeChannelQuery) {
    const found = await ytApi("/search", { query: person.youtubeChannelQuery, type: "channel" });
    const hit = (found.data ?? []).find((c) => c.type === "channel");
    if (hit) {
      channel = { id: hit.channelId, title: hit.title, handle: hit.channelHandle ?? null, subscribers: hit.subscriberCount ?? null };
      let token;
      for (let page = 0; page < 3; page++) {
        const result = await ytApi("/channel/videos", { id: hit.channelId, sort_by: "popular", token });
        for (const v of result.data ?? []) add({ ...v, channelTitle: v.channelTitle ?? hit.title }, "own channel");
        token = result.continuation;
        if (!token) break;
      }
    }
  }

  const list = [...videos.values()].filter((v) => v.seconds == null || v.seconds >= MIN_VIDEO_SECONDS);
  return { channel, videos: list.sort((a, b) => b.views - a.views) };
}

async function discoverWritten() {
  const pages = new Map();
  for (const site of person.sites ?? []) {
    try {
      const result = await contextDev("GET", "/web/urls", { query: { domain: site.domain, search: site.search, maxLinks: 60 } });
      for (const u of result.urls ?? []) {
        if (!pages.has(u.url)) pages.set(u.url, { url: u.url, title: u.title ?? null, description: u.description ?? null, foundBy: `map:${site.domain}` });
      }
    } catch (error) {
      console.warn(`map ${site.domain} failed: ${error.message}`);
    }
  }
  const query = `${person.name} essay OR blog post OR interview transcript on startups, growth, business`;
  try {
    const result = await contextDev("POST", "/web/search", { body: { query, numResults: 20 } });
    for (const r of result.results ?? []) {
      if (!pages.has(r.url)) pages.set(r.url, { url: r.url, title: r.title ?? null, description: r.description ?? null, foundBy: "search" });
    }
  } catch (error) {
    console.warn(`web search failed: ${error.message}`);
  }
  return [...pages.values()];
}

const [x, youtube, written] = await Promise.all([discoverX(), discoverYouTube(), discoverWritten()]);
const candidates = {
  slug,
  name: person.name,
  discoveredAt: new Date().toISOString(),
  profile: x.profile,
  youtubeChannel: youtube.channel,
  counts: { posts: x.posts.length, videos: youtube.videos.length, pages: written.length },
  posts: x.posts,
  videos: youtube.videos,
  pages: written,
  usage,
};
await writeJson(join(brainDir(slug), "candidates.json"), candidates);
console.log(slug, candidates.counts, usage);
