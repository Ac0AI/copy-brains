## Data the UI needs per brain

This is the contract between the data pipeline and the site. There is one manifest per brain at `data/brains/<slug>/brain.json`, plus optional assets in the same folder (`sketch.png`, `photo.jpg`). The UI derives install snippets for each client from `mcp`, so the pipeline never writes client-specific config.

Notation: TypeScript. `?` = optional. All dates are ISO 8601 strings (`"2026-10-14"` for dates, `"2026-10-14T09:30:00Z"` for timestamps).

```ts
type CategorySlug = "indie-hackers" | "ceos" | "investors" | "ai-builders" | "marketers" | "operators";
type SourceType   = "x_post" | "x_article" | "youtube" | "podcast" | "essay";
type LinkKind     = "x" | "youtube" | "website" | "blog" | "github" | "linkedin";

interface Brain {
  schemaVersion: 1;
  slug: string;                  // "levelsio". URL path + MCP path. Lowercase kebab, unique, never changes
  name: string;                  // "Pieter Levels"
  shortName: string;             // "Levels". Used in "Install Levels' brain", stack names
  tagline: string;               // ≤ 80 chars, claim-style: "Solo founder behind Photo AI and Nomad List"
  role: string;                  // "Indie hacker"
  company?: string;              // "Photo AI". Current main company, plain text
  categories: CategorySlug[];    // 1–3. First one = primary (drives row label + /c/ page)
  avatar: {
    sketch?: string;             // "sketch.png" (relative to brain folder). Preferred
    photo?: string;              // "photo.jpg". Fallback, rendered grayscale + pink duotone
    alt: string;                 // "Pencil sketch of Pieter Levels"
  };
  links: { kind: LinkKind; url: string; label?: string }[];  // first "x" link = @handle shown in header
  followers?: { x?: number; youtube?: number; asOf: string }; // raw integers; UI formats "182K"
  claim: { status: "unofficial" | "claimed"; claimedBy?: string; claimedAt?: string };
  quote?: { text: string; sourceId: string };   // ≤ 140 chars, verbatim, pull quote in detail header

  stats: {                       // must match `sources`; build step validates
    longFormCount: number;       // youtube + podcast + essay + x_article
    xPostCount: number;          // x_post
    byType: Record<SourceType, number>;   // all keys present, 0 allowed
    transcriptMinutes?: number;  // sum of durationSec/60 for youtube + podcast
    dateRange: { from: string; to: string };  // "2014-03" → "2026-10" (YYYY-MM)
  };
  createdAt: string;             // first publish
  updatedAt: string;             // last successful ingest. Drives "updated 1d ago" + Newest sort

  topics: {                      // 3–6, ordered by weight. Each = one "What it knows" module
    id: string;                  // "pricing"
    label: string;               // "Pricing"
    summary: string;             // ≤ 120 chars
    sampleQuestion: string;      // ≤ 90 chars, shown on module + home row hover
    sourceIds: string[];         // ≥ 1, first = citation pill on the module
  }[];
  principles: {                  // 3–5 signature principles, ≤ 140 chars each
    text: string;
    sourceIds: string[];         // ≥ 1
  }[];
  sampleQA: {                    // 1–3, pre-generated, for the "Try it" block
    question: string;
    answer: { text: string; sourceIds: string[] }[];   // 2–4 short lines, each cited
  }[];
  featuredSourceIds: string[];   // 3–6, shown first in Sources + used for share card

  sources: Source[];             // full curated index (≈ 15–30 long-form + 100–300 x_post)

  mcp: {
    url: string;                 // "https://mcp.<domain>/levelsio"
    serverName: string;          // "levelsio-brain". Key used in mcpServers JSON + CLI commands
    auth: "oauth" | "none";
    tools: { name: string; description: string; readOnly: boolean }[];  // search_brain, list_sources
  };

  related?: string[];            // slugs for "Often installed with" (0–4). Optional; UI can compute
  verifiedStat?: {               // optional receipt, e.g. revenue
    label: string;               // "Photo AI MRR"
    value: string;               // pre-formatted display value, e.g. "$120K"
    asOf: string;
    sourceUrl: string;
    verifiedBy?: string;         // "TrustMRR"
  };
}

interface Source {
  id: string;                    // stable, type-prefixed: "yt-<videoId>", "x-<tweetId>", "pod-<slug>", "essay-<slug>"
  type: SourceType;
  title: string;                 // for x_post: first ~90 chars of the post
  url: string;
  publishedAt: string;           // date
  outlet?: string;               // "Lex Fridman Podcast", "levels.io"
  durationSec?: number;          // youtube, podcast
  views?: number;                // when public
  topicIds: string[];            // ⊆ topics[].id, may be empty
  excerpt?: string;              // ≤ 200 chars, shown in citation drawer
}
```

### Which surface reads what
| Surface | Fields |
|---|---|
| Directory row / card | `slug`, `name`, `tagline`, `role`, `categories[0]`, `avatar`, `stats.longFormCount`, `stats.xPostCount`, `updatedAt`, `claim.status`, `topics[0].sampleQuestion` (hover) |
| Search + filters | `name`, `shortName`, `tagline`, `role`, `company`, `categories`, `topics[].label`, `principles[].text` · sort by `updatedAt`, `stats.longFormCount + xPostCount` (installs come from analytics, not the manifest) |
| Detail header | `avatar`, `name`, `role`, `company`, `links`, `followers`, `claim`, `quote`, `stats.*`, `verifiedStat` |
| Detail body | `topics`, `principles`, `sampleQA`, `featuredSourceIds`, `sources`, `related`, `mcp.tools` |
| Citation pill → drawer | `sources[id]`: `type`, `title`, `outlet`, `publishedAt`, `excerpt`, `url` |
| Install sheet + stack | `shortName`, `avatar`, `mcp.url`, `mcp.serverName`, `mcp.auth`, `topics[0].sampleQuestion` ("Ask your agent: …" while waiting) |
| Share card (OG image) | `avatar.sketch`, `name`, `tagline`, `stats` |

### Validation rules (build fails if broken)
- Every `sourceIds` / `featuredSourceIds` / `quote.sourceId` entry resolves to a `sources[].id`.
- `stats.byType` counts equal the counts in `sources`; `longFormCount + xPostCount === sources.length`.
- Length caps: `tagline` ≤ 80, `summary` ≤ 120, `principles[].text` ≤ 140, `quote.text` ≤ 140.
- Array sizes: `topics` 3–6, `principles` 3–5, `sampleQA` 1–3, `featuredSourceIds` 3–6, `categories` 1–3.
- At least one of `avatar.sketch` / `avatar.photo`.
- `quote` and `principles` text must come from the cited sources (verbatim or close paraphrase). They are attributed to a real person.

### Pilot mapping (expected shape, values illustrative)
| slug | categories | long-form mix | X posts |
|---|---|---|---|
| `levelsio` | `["indie-hackers"]` | podcasts + levels.io essays + a few YouTube | 100–300 (from 182K) |
| `marc-lou` | `["indie-hackers", "marketers"]` | YouTube-heavy + podcasts | 100–300 |
| `alexandr-wang` | `["ai-builders", "ceos"]` | interviews + podcasts + talks | small (often < 100), so `xPostCount` can be low; UI hides the X tab when 0 |
