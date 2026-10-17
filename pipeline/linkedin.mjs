// Step 1c: pull a person's recent LinkedIn posts and profile through Apify (no cookies).
// harvestapi/linkedin-profile-posts costs $0.002 per post; the profile lookup is about $0.004.
// Usage: node pipeline/linkedin.mjs <slug> [maxPosts=400]
// Needs `linkedin` (the profile's public id, e.g. "ruben-hassid") in pipeline/people.json.
// Merges into candidates.json `posts` (platform "linkedin", deduped by id) and sets `linkedinProfile`.
import { join } from "node:path";
import { apifyRun, brainDir, loadPerson, readJson, writeJson } from "./lib.mjs";

const [slug, maxPostsArg] = process.argv.slice(2);
if (!slug) throw new Error("Usage: node pipeline/linkedin.mjs <slug> [maxPosts]");
const person = await loadPerson(slug);
if (!person.linkedin) throw new Error(`${slug} has no "linkedin" id in people.json`);
const maxPosts = Number(maxPostsArg ?? 400);
const profileUrl = `https://www.linkedin.com/in/${person.linkedin}/`;

const [items, profiles] = await Promise.all([
  apifyRun("harvestapi/linkedin-profile-posts", { targetUrls: [profileUrl], maxPosts, includeReposts: false, includeQuotePosts: false }, 600),
  apifyRun("harvestapi/linkedin-profile-scraper", { profileScraperMode: "Profile details no email ($4 per 1k)", urls: [profileUrl] }, 120).catch((error) => {
    console.warn(`profile lookup failed: ${error.message}`);
    return [];
  }),
]);

const posts = items
  .filter((p) => p.type === "post" && p.id && p.content)
  .filter((p) => (p.author?.publicIdentifier ?? person.linkedin) === person.linkedin)
  .map((p) => ({
    id: String(p.id),
    platform: "linkedin",
    url: p.linkedinUrl ?? p.socialContent?.shareUrl ?? `https://www.linkedin.com/feed/update/urn:li:activity:${p.id}/`,
    date: (p.postedAt?.date ?? new Date(p.postedAt?.timestamp ?? Date.now()).toISOString()).slice(0, 10),
    text: p.content,
    likes: p.engagement?.likes ?? 0,
    comments: p.engagement?.comments ?? 0,
    views: 0,
    isReply: false,
    isRetweet: false,
  }));

const author = items.find((p) => p.author?.publicIdentifier === person.linkedin)?.author ?? {};
const profile = profiles[0] ?? {};
const linkedinProfile = {
  id: person.linkedin,
  url: profileUrl,
  name: author.name ?? ([profile.firstName, profile.lastName].filter(Boolean).join(" ") || null),
  headline: profile.headline ?? author.info ?? null,
  about: profile.about ?? null,
  followers: profile.followerCount ?? profile.followersCount ?? profile.followers ?? null,
  avatar: author.avatar?.url ?? profile.photo ?? profile.profilePicture?.url ?? null,
  website: author.website ?? null,
};

const path = join(brainDir(slug), "candidates.json");
const candidates = await readJson(path);
const known = new Set(candidates.posts.map((p) => `${p.platform ?? "x"}:${p.id}`));
const added = posts.filter((p) => !known.has(`linkedin:${p.id}`));
candidates.posts.push(...added);
candidates.counts.posts = candidates.posts.length;
candidates.counts.linkedinPosts = candidates.posts.filter((p) => p.platform === "linkedin").length;
candidates.linkedinProfile = linkedinProfile;
candidates.linkedin = { ranAt: new Date().toISOString(), returned: items.length, added: added.length, estUsd: +(items.length * 0.002 + 0.004).toFixed(2) };
await writeJson(path, candidates);
console.log(slug, { ...candidates.linkedin, profile: { ...linkedinProfile, about: linkedinProfile.about?.slice(0, 60) } });
