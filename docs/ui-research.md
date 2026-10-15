# The Brains: UI/UX research

Research date: 2026-10-15
Lens: design-with-taste (Simplicity → Fluidity → Delight), frontend-design, interface-craftsmanship, emil-design-eng.
Inputs: a live teardown of https://nevo.md (screenshots, DOM, CSS tokens, and the real `list_sources` / `search_brain` output from Nevo's MCP), plus 18 Mobbin searches covering screens, flows and sections.

---

## 1. nevo.md teardown

### What it is, in one line
This is a single-person landing page where the claim is the hero, the install is the main CTA, and each capability comes with a "receipt" (a dated source link or verified revenue data).

### Anatomy (top to bottom, about 11,600px tall at 1440w)
1. **Hero.** Merriweather serif headline: "I took Postiz to $3.2m ARR alone. Your agent can copy my brain, free." Below it is a one-line Lato subhead and an **MCP URL pill** (`https://mcp.nevo.md/mcp` | Copy | **How to use**). Under that sits a wide grayscale pencil-sketch illustration band (lab, brain on a pink pedestal, rocket) with pink as the only color.
2. **Install modal ("Pick how to connect it").** It has 9 client chips: Claude, ChatGPT, Claude Code, Cursor, Codex, OpenClaw, Hermes, Gemini CLI, Other. Each client gets its own stepper ("1/6 Click Customize in the sidebar") with a small UI screenshot per step, Back/Next buttons, and pagination dots. Cursor also gets "Add to Cursor in one click". Every path ends with an email sign-in and a 6-digit code (this doubles as newsletter capture).
3. **Four capability "chapters":** Niche radar, Hype antenna, Tactics board, Growth engine. Each one has a sans H2 benefit line, a short paragraph, a **bespoke diagram** (radar, timeline, working/harder board, before/after chart), Caveat handwritten annotations, and a dated source link ("Aug 21 article").
4. **Sample Q&A.** "You ask: My trial-to-paid is 8%... The brain answers:" followed by 3 short bullets.
5. **Bio.** "It all came out of one head", with X and product links.
6. **Receipt.** An MRR/ARR chart redrawn from TrustMRR (Stripe-verified), with a toggle and an accessible "See the numbers as a table" fallback.
7. **How it works.** Connect it → Ask it → Ship it, then the install block again and a footer.

### Design tokens (pulled from its CSS)
| Token | Value | Role |
|---|---|---|
| `--ink` | `#4a4a4a` | Headlines and body. Soft charcoal, never black |
| `--ink-muted` / `--ink-faint` | `#767676` / `#b7b7b7` | Secondary text, disabled |
| `--hairline` / `--shade` | `#e8e8e8` / `#eee` | Borders |
| `--bg` / `--band` | `#fff` / `#f7f7f7` | Alternating section bands |
| `--pink` / `--pink-text` / `--pink-deep` | `#ff0083` / `#db0070` / `#cc0068` | The single accent |
| `--pink-wash(-strong)` | `#ffe8f3` / `#ffd6ea` | Tints |
| `--dark` | `#202020` | Primary buttons (Next), active chip |
| Fonts | Merriweather (display), Lato (UI/body), Caveat (annotations), ui-monospace (URLs/config) | |
| `--radius` | `.75rem` | Cards, pills |
| `--shadow-card` | `0 .875rem 2.5rem -1.25rem #4a4a4a73` | Soft, low, wide |
| `--shadow-cta` | `0 .625rem 2.5rem -.625rem #ff008380` | Pink glow on primary CTA |
| `--page` | `75rem` | Max content width |

### What it does well (keep all of this)
- **Claim plus receipt.** Every promise has a number and a dated source behind it. That builds trust better than any "AI-powered" adjective could.
- **The install is the product.** The URL sits in the hero and is one click from copied. The per-client stepper with screenshots is the best part of the page because it meets each client where it actually is. Claude.ai needs 6 UI steps, while Claude Code needs one command.
- **Restraint.** It uses grayscale ink, one accent, generous whitespace and soft shadows. The pink means something: it marks where the brain is "alive".
- **Coherent art direction.** The pencil-sketch grayscale illustrations with pink highlights make it feel crafted, not templated.
- **Showing the output.** The "You ask / The brain answers" block explains MCP value faster than any explanation of MCP.
- **Accessibility details.** It has a skip link, a data-table fallback for the chart, and real headings.

### What does not scale to hundreds of brains
| nevo.md pattern | Problem at 50 to 500 brains | Directory fix |
|---|---|---|
| Bespoke diagram per chapter | Can't hand-illustrate 4 diagrams × 500 people | Templated **topic modules** generated from data (topic, one-liner, sample Q, cited source pill). Bespoke art only for flagship brains |
| First-person voice ("my brain") | The directory isn't the person. Implying endorsement is a legal and trust risk | Curator voice on the shell. Quote the person's own words with citations. Show a "Claimed by Nevo" or "Built from public content, unofficial" badge |
| One install modal, repeated 3× in the DOM | Hundreds of copies is impossible, and users want **several** brains | One shared `InstallSheet` keyed by slug or stack id. Remember the user's client choice across the site |
| Email + 6-digit code per brain | 10 brains means 10 sign-ins | One account and one gateway. A **stack URL** exposes many brains behind a single auth |
| Sources shown only as 4 inline article links | Nevo's brain actually has ~110 sources (X articles, YouTube, podcasts, blog posts). The directory's trust story *is* the sources | A browsable sources index on every brain page (counts by type, year timeline, searchable) |
| Revenue chart as the receipt | Only works for public-MRR founders. Musk, Zuckerberg and Alexandr Wang need different proof | A generic **receipt strip**: sources count, hours of transcript, date range, last updated, and an optional person-specific verified stat |
| An 11,600px narrative page | Fine for one landing page, too slow to scan when comparing 30 people | A denser detail page with a sticky install rail, and modules instead of chapters |
| Discovery is not a concern | It has no search, filters, categories or related people | Search first, a category chip rail, sort, "often installed with" |

---

## 2. Reference library (Mobbin)

Each entry lists the app, what it is, a link, and **the pattern to steal**. The 20 strongest are listed first; extras follow at the end.

### 2.1 Directory / marketplace home
1. **Delphi: Discover "minds"** (digital clones of real experts). This is the closest analog to The Brains.
   https://mobbin.com/screens/b29eb123-cbd6-4146-8e8f-e0a53cc71d3d
   *Steal:* the "Search minds..." input plus a category chip rail (Entrepreneurship, Technology...) plus a portrait carousel. Below that is a **ranked list where each row has a sample question bubble on the right** ("What are the best practices for a startup founder...?") and a size stat ("26.6K Mind"). The row shows what you can ask, not just who they are.
2. **Substack: Bestsellers by category**
   https://mobbin.com/screens/add949a8-a714-4f86-a36e-b0474a767cfc
   *Steal:* a horizontal category chip rail on top, **Top / Rising** tabs, and a numbered list with avatar, name, one-line subtitle and a **"+" add button per row**. This is the right density for 500 people and maps directly to "add to stack".
3. **Claude: Connectors Directory**
   https://mobbin.com/screens/554f7cf4-4a3a-416f-ba5a-988b162344b7
   *Steal:* compact 2-column cards (logo, name, one line, "+" quick add) and a **Sort menu: Default / Popular / Trending / New / Alphabetical**. Users will have just seen this exact UI inside Claude, so mirroring its vocabulary lowers friction.
4. **Vercel: AI Gateway Leaderboards**
   https://mobbin.com/screens/abbadfbe-0db6-453b-b9bc-ccb7ce2d60ed
   *Steal:* a quiet 2-column top-10 with **monospace rank numbers**, a logo, a name with chevron, and a one-line tagline. It is very dense and very calm, which suits a developer audience. Use it for "Most installed this week".
5. **Patreon: Explore home**
   https://mobbin.com/screens/7e5dd015-b8d4-4d09-ad58-6e58eae706ed
   *Steal:* "Popular this week" as a **3-column compact person list** (avatar, name, one line) above larger topic tiles. You get a lot of people above the fold without cards.

### 2.2 Person / profile detail
6. **Delphi: profile of a mind (Kian Katanforoosh)**
   https://mobbin.com/screens/80e58ce6-faea-4efe-93b9-d5521cdea25b
   *Steal:* a large **serif name** plus verified badge, a role line plus "33.7K Mind" stat, **entity chips highlighted inside the bio** (Workera, Deep Learning), an "Ask me about" block of suggested questions, and a sticky composer at the bottom. Identity, scale and "what to ask" all show in one viewport.
7. **v0: Extension marketplace detail (Lean AI)**
   https://mobbin.com/screens/bcc629fe-8ac0-4b61-919f-4ddf02953ea4
   *Steal:* a list-to-detail split with **install count and Install button in the header**, plus a **right metadata rail** (identifier, version, published, last released, categories, resources). That rail is the right home for "sources: 112 · updated 2d ago · tools: 2".
8. **Figma: read.cv-style portfolio template**
   https://mobbin.com/screens/0bd1739b-9dd9-44e4-8e63-a42b88f517f6
   *Steal:* a **year column on the left (2017 — Now) with entries on the right**, set as a typographic list. This is the ideal layout for a sources timeline grouped by year.
9. **Deezer: podcast episode table**
   https://mobbin.com/screens/6a34f737-3015-4bf9-be44-ad9e7c4bf037
   *Steal:* a table row with thumbnail, title, 2-line description, added date and duration. It works as the "Sources" table for talks and podcasts (show duration, so "6 podcasts · 9h of transcript" can be a stat).

### 2.3 Install / connect to your client
10. **Magnific: MCP settings**
    https://mobbin.com/screens/6b3fba90-92b4-4e8c-baab-f767c3f069c4
    *Steal:* an icon-plus-label **client tab row** (Claude Desktop, Claude Code, ChatGPT, Cursor, Codex, VS Code, Gemini, Hermes), then **3 numbered steps**, then a single command field with a solid copy button and a "Read the full setup docs ↗" link. It is the most compact version of nevo's modal.
11. **Featurebase: SDK installation**
    https://mobbin.com/screens/bb6c4589-0a75-413e-ae2e-f5790e503287
    *Steal:* **"Install with your agent: Copy installation as prompt"** above the manual path, plus package-manager tabs (npm/pnpm/yarn/bun) on the command. For The Brains this means a "Copy as prompt" button that tells Claude Code or Codex to install the brain itself.
12. **Claude: Connector detail (Figma MCP) with tool list**
    https://mobbin.com/screens/2eb6c9a1-64f2-46a8-9cf8-ba9b1897ba86
    *Steal:* how Claude presents an MCP, with a description, "Interactive tools" and "Read-only tools", and each tool listed by its real name. Show `search_brain` and `list_sources` the same way so developers know exactly what they're installing.
    Related flows: Claude "Adding a custom connector" https://mobbin.com/flows/9476ef60-8fb4-4a52-af63-af9009d4273b · Cursor "Adding an MCP" https://mobbin.com/flows/a52f6837-ace9-487a-bb62-64a8e22fa550. Use these as the source for your per-step screenshots.
13. **Delphi: Share modal**
    https://mobbin.com/screens/dd166aee-61a2-496b-8277-e8c2be9034be
    *Steal:* a share link plus a **"Starter question" field** baked into the link, a QR code, and social icons. For The Brains, the shared link opens a brain page with a pre-filled question and its cited answer.

### 2.4 Search-first and AI ask/answer with citations
14. **Gemini Notebook (NotebookLM-style)**
    https://mobbin.com/screens/b102da47-7fa9-4356-8b85-493a5eab06e7
    *Steal:* a **left Sources column with per-source checkboxes and "Select all"**, a chat in the middle with **numbered citation pills** inline, and suggested follow-ups under the answer. Swap "sources" for "brains" and this becomes the "ask several founders" UI.
15. **WRITER: Sources panel**
    https://mobbin.com/screens/4a222df9-9ae9-40a0-972f-b0be9bfaa12f
    *Steal:* a right-side panel of **source cards** (favicon + domain, bold title, 2-line snippet). Use it as the citation drawer when a pill is clicked.
16. **Chatbase: Compare**
    https://mobbin.com/screens/fa79d27e-f521-4410-a6a0-87aa921b6319
    *Steal:* **side-by-side answer panes with a "Sync" toggle** so one question goes to all panes. That fits a round table of 2 or 3 founders answering the same question.
17. **Juicebox: people search results**
    https://mobbin.com/screens/2b372008-c21e-49de-853a-195cb0957a9c
    *Steal:* each person row has an AI summary with **matched phrases highlighted**. On The Brains search results, show *why* a brain matched ("talked about **cold outreach** in 14 sources").

### 2.5 Category filtering, tags, sorting
18. **Unity Asset Store: applied filters**
    https://mobbin.com/screens/d009669f-31a0-46ce-b29d-b44645c4a924
    *Steal:* filter dropdowns, a **row of applied-filter pills with × and "Clear"**, "Results 1–6 of 6", and sort plus page size at the top right. At hundreds of brains, users need to see and undo what's filtering the list.
    Also see Dribbble (Shots/Designers toggle above search + "Popular:" chips + Popular sort) https://mobbin.com/screens/6073d841-8ca3-4bc5-be05-d9988aaf1300 and Contra Discover (Projects/People toggle, per-person stat strip: earned · hired · rating · followers) https://mobbin.com/screens/f6b614a8-687d-4bf8-83f0-19632f403550.

### 2.6 Bundles / stacks
19. **Magnific: multi-model selector**
    https://mobbin.com/screens/20f7ca1a-83d3-4a7b-85c4-278d0c2d0a88
    *Steal:* selected rows stay highlighted, and a **bottom tray lists the selected names inline ("Seedream 5 Lite, Cinematic, Nano Banana 2, Flux.2 Klein") with "4/4" and Save**. This is the model for the persistent "Your stack" tray.
20. **Walmart: recipe → "Ingredients you'll need" → Add all to cart**
    https://mobbin.com/screens/fd11011b-cfa3-4552-9d6f-caf36a1a2456
    *Steal:* a curated bundle shown as a list of items with per-item replace, plus a **summary card holding a single "Add all" button**. A "stack" page works like a recipe: "The bootstrapper's board: 4 brains, Install all".

### Also worth a look
- YouTube Music artist picker (portrait grid, check overlay, Done): https://mobbin.com/screens/7980d281-e5c2-46ab-be41-70fda9af4fb6. Use it for picking brains by face in the ask flow.
- Telescope "Add to collection(s)" (named public/private collections with counts): https://mobbin.com/screens/e8429ef2-aa5e-4bc1-a2c0-864533676437
- Cursor "Use Multiple Models" checklist: https://mobbin.com/screens/5086a06b-e76b-49ad-a5e4-c2100759b758
- Clerk quickstart (numbered steps left, code right): https://mobbin.com/screens/382be08d-b9cd-412e-b88f-aca632720e08
- Clay person record (Properties: last updated / created; a Sources section in the sidebar): https://mobbin.com/screens/577883d8-728d-42ec-86cb-ef0df7d088c0
- Record Club profile (tabs with counts: Releases 7, Reviews 1): https://mobbin.com/screens/59fb99f3-5d92-4664-8f9c-7594e731c4f9
- Vercel Marketplace (category tag on each card, "Request an Agent" tile at the end): https://mobbin.com/screens/7919ab35-9297-4062-ad5e-d8100878ee66
- Webflow Apps hero section (search hero + category sidebar + "New & Noteworthy" 2-column list): https://mobbin.com/sites/sections/ec66869d-ce01-4538-ba01-d9cb686f1c04
- Codecademy catalog (suggested-question chips above a single input on a catalog page): https://mobbin.com/screens/014ce7cf-92a3-4f70-8059-60a7c1d3f4ec

---

## 3. Information architecture

### Routes
| Route | Purpose | Notes |
|---|---|---|
| `/` | Home: search-first directory | The directory *is* the home. No separate marketing page at launch |
| `/?q=&cat=&sort=` | Filtered directory state | URL-synced and shareable. Keep the user on `/` instead of navigating away |
| `/c/[category]` | SEO category pages (`indie-hackers`, `ceos`, `investors`, `ai-builders`, `marketers`, `operators`) | Same list component, with a category intro and a top stack for that category |
| `/[slug]` | Brain detail (`/nevo-david`, `/levelsio`) | Short top-level slugs with reserved words blocked. Matches the MCP URL `mcp.<domain>/[slug]` |
| `/[slug]/sources` | Full sources index | Deep-linkable from citations |
| `/[slug]?install=cursor` | Opens the install sheet pre-tabbed | Used by "Install" links in tweets and READMEs |
| `/stacks` and `/stacks/[slug]` | Curated bundles ("Bootstrapper's board", "AI lab founders") | Recipe-style page with "Install all" |
| `/s/[id]` | A user-made stack (generated id) | The shareable "brain trust" link. Has its own single MCP URL |
| `/ask` | Ask several brains at once | `?brains=nevo-david,levelsio&q=...` is shareable. Phase 2 |
| `/clients/[client]` | "How to add MCP to Cursor / Claude / ChatGPT..." | Evergreen SEO and support pages. The install sheet links here for long-form help |
| `/request`, `/claim` | Request a brain, or a person claims or edits theirs | The claim flow turns "unofficial" into "verified by the person" |
| `/new` | Changelog of new brains and source refreshes | Feeds the "Newest" sort and a weekly email |
| `/account` | Installed brains, stacks, gateway token | One auth for everything |

### Key components
- **`BrainRow`** (primary list unit) and **`BrainTile`** (featured/carousel). Shared fields: portrait, name, one-line claim, category, sources count, freshness, and the add-to-stack `+`.
- **`Portrait`**: grayscale pencil-sketch style for every person, consistent across the site (section 5).
- **`SearchBar`**: the hero input. `/` or ⌘K opens it anywhere as a command palette with no open animation (Raycast rule: used 100×/day). Results are grouped into *Brains*, *Topics* ("pricing" → brains that cover it) and *Ask the brains →*.
- **`CategoryRail`** + **`SortMenu`** (Most installed · Trending · Newest · Most sources · A–Z) + **`AppliedFilters`** pills.
- **`ReceiptStrip`**: sources count · types · date range · hours of transcript · last updated, plus an optional verified stat (MRR, followers).
- **`TopicModule`**: the templated version of nevo's chapters. Topic, one-line, sample Q, 2–3 bullet answer, and a citation pill.
- **`SourcesIndex`**: tabs with counts by type, a read.cv year-column list, and an in-list search.
- **`CitationPill`** → **`SourceDrawer`**: numbered pill, then a card with type icon, title, date, views and an external link.
- **`InstallSheet`**: client tabs, method (one-click / command / guided steps), `ConfigSnippet` with copy, **Copy as prompt**, a live "waiting for first call" state, and success.
- **`StackTray`**: a persistent bottom bar with stacked portraits, names, a count, and "Install stack". It morphs into the install sheet.
- **`ToolList`**: `search_brain`, `list_sources` with real descriptions, styled like Claude's connector detail.
- **`ClaimBadge`**: "Verified by @wickedguro" vs "Built from public content".

---

## 4. Recommended direction

### 4.1 Home page
**Organizing idea:** *a wall of faces you can search.* nevo.md leads with a claim. The directory should lead with the search input and the people. The single primary action is the search box. Everything else is secondary, and the "+" on each row is the only other affordance.

Progressive behavior (one input, gradual revelation):
- Typing a name or topic filters the list below **in place**, with no navigation. Rows reorder with layout animation.
- A question-shaped query ("how do I price a SaaS?") adds a final row: **"Ask the 3 best-matching brains →"**. Ask mode only appears when the query earns it.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ ◐ The Brains                         Stacks   Ask   Request   ⌘K   [Sign in] │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│          Install the brains of the people who built it.        (serif H1)  │
│  {count} founders, CEOs and investors. Searchable from Claude, Cursor, ChatGPT.│
│                    Every answer cites the post, talk or essay.               │
│                                                                              │
│        ┌──────────────────────────────────────────────────────┐              │
│        │ 🔍  Search a name, or ask "how do I get first users?" │  /           │
│        └──────────────────────────────────────────────────────┘              │
│                                                                              │
│   ( sketch )( sketch )( sketch )( soon.. )( soon.. )( soon.. )( soon.. ) →  │
│     Levels   Marc Lou   A. Wang   (pencil outlines of upcoming brains)       │
│   ── grayscale pencil portraits, one row, drifts slowly, pauses on hover ──  │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ [All 3] Indie hackers 2  AI builders 1  CEOs 1           Sort: Most installed ▾ │
├─────────────────────────────────────┬────────────────────────────────────────┤
│ 01 (◉) Pieter Levels         [ + ]  │ 02 (◉) Marc Lou                [ + ]   │
│    Solo founder, Photo AI & Nomads  │    Ships fast: ShipFast, CodeFast      │
│    Indie hacker · 24 + 240 X · 1d   │    Indie hacker · 18 + 210 X · 2d      │
│    ┊ hover: "Ask: should I raise?"  │    ┊ hover: "Ask: how do I launch?"    │
│ 03 (◉) Alexandr Wang         [ + ]  │ 04 ( ) Request the next brain →        │
│    Scale AI → Meta superintelligence│                                        │
│    AI builder · 27 + 110 X · 3d     │                                        │
├─────────────────────────────────────┴────────────────────────────────────────┤
│ Stacks                                                         See all →     │
│ ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐   │
│ │ ◉◉  Ship-it-solo     │ │ ◉◉◉  Pilot board     │ │ ◉◉  Pricing & growth │   │
│ │ Levels + Marc Lou    │ │ Levels, Lou, Wang    │ │ Levels + Wang        │   │
│ │ [Install all]        │ │ [Install all]        │ │ [Install all]        │   │
│ └──────────────────────┘ └──────────────────────┘ └──────────────────────┘   │
│ ... rows 04+ continue as brains ship (2-col, ~72px rows) ...                 │
│                                                                              │
│  Missing someone?  Request a brain →     Are you on here?  Claim yours →     │
└──────────────────────────────────────────────────────────────────────────────┘
        ┌──────────────────────────────────────────────────────────────┐
        │ ◉◉◉  Levels, Marc Lou, A. Wang · 3 brains   [Install stack →]│  ← StackTray
        └──────────────────────────────────────────────────────────────┘
```
(Example people are the 3 pilot brains. Counts and taglines are placeholders until `brain.json` lands.)

Details that matter:
- **Rows, not cards.** Substack and Vercel density gets ~16 people above the fold on desktop, and cards would cap that at ~6. Rank numbers are mono and tabular.
- **The one-liner is a claim, not a bio.** "Took Postiz to $3.2M ARR alone" beats "Founder of Postiz". This carries nevo's hero voice into every row.
- **Hover reveals a sample question** (Delphi pattern), gated by `@media (hover:hover)`. On touch it is hidden, and the question appears on the detail page instead.
- **Counts on chips** (Hotjar/Typeform) tell users how deep each category is.
- **Request/claim tile at the end** (Vercel "Request an Agent"). The empty state of a search is also a request CTA: "No brain for 'Sam Altman' yet. Request it, 31 people already have."
- Mobile: hero → search → chip rail (horizontal scroll) → single-column rows. The stack tray becomes a bottom pill.

### 4.2 Brain detail page (`/levelsio`)
**Organizing idea:** *identity and receipts on the left, install always within reach on the right.* This keeps nevo's narrative order (claim → what it knows → proof → install) in a scannable 2-column frame.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ ← All brains / Indie hackers                                     ⌘K          │
├──────────────────────────────────────────────────┬───────────────────────────┤
│  ( pencil sketch portrait, pink brain accent )   │ ┌───────────────────────┐ │
│                                                  │ │ Install Levels' brain │ │
│  Pieter Levels               ○ Unofficial        │ │ Free · 2 tools        │ │
│  Solo founder, Photo AI · Indie hacker · @levelsio│ │                      │ │
│  182K followers on X · levels.io                 │ │ [Claude][Cursor][Code]│ │
│                                                  │ │ [ChatGPT][Codex][···] │ │
│  "<signature quote from a source>"    ↗ source   │ │                       │ │
│                                                  │ │ ┌───────────────────┐ │ │
│  24 long-form · YouTube 5 · Podcasts 11 ·        │ │ │claude mcp add ... │⧉│ │
│  Essays 8 · + 240 X posts · 2014 → 2026 ·        │ │ └───────────────────┘ │ │
│  updated 1d ago                                  │ │ [ Add to Cursor ⚡ ]  │ │
├──────────────────────────────────────────────────┤ │ Copy as prompt ↗      │ │
│  What it knows                                   │ │ ─────────────────────│ │
│  ┌─────────────────────┐ ┌─────────────────────┐ │ │ [ + Add to stack ]    │ │
│  │ ◎ Ship to validate  │ │ ↗ Distribution on X │ │ └───────────────────────┘ │
│  │ <topic summary>     │ │ <topic summary>     │ │  Tools                    │
│  │ Q: <sample question>│ │ Q: <sample question>│ │  search_brain  read-only  │
│  │ ① <source, date>    │ │ ② <source, date>    │ │  list_sources  read-only  │
│  └─────────────────────┘ └─────────────────────┘ │                           │
│  ┌─────────────────────┐ ┌─────────────────────┐ │  Often installed with     │
│  │ $ Pricing           │ │ ◇ Staying solo      │ │  ◉ Marc Lou      [+]      │
│  └─────────────────────┘ └─────────────────────┘ │  ◉ Alexandr Wang [+]      │
│                                                  │                           │
│  Principles  (3–5, each with a citation)         │   (rail is sticky)        │
│  1. <principle> ①   2. <principle> ②   3. ... ③ │                           │
│                                                  │                           │
│  Try it                                          │                           │
│  you ▸ <sampleQA.question>                       │                           │
│  brain ▸ <answer line> ① <answer line> ②         │                           │
│  [ Ask your own question ]  (rate-limited demo)  │                           │
├──────────────────────────────────────────────────┤                           │
│  Sources                     🔍 search sources   │                           │
│  [All 264] [X 240] [Podcasts 11] [Essays 8] ...  │                           │
│  2024   Lex Fridman Podcast           Pod · 3h   │                           │
│         <essay title>                 levels.io  │                           │
│  2023   ...                                      │                           │
│  2014   ...                       See all 264 →  │                           │
└──────────────────────────────────────────────────┴───────────────────────────┘
Mobile: rail collapses into a sticky bottom bar  [ Install ]  [ + Stack ]
```

Details that matter:
- **The pull quote is the person's own claim, with a source link.** This replaces nevo's first-person hero without the directory speaking *as* them.
- **The receipt strip is generic and data-driven.** The verified stat line only renders when the data exists.
- **Topic modules are nevo's chapters, templated.** Use a uniform small glyph instead of a bespoke diagram. Flagship brains can opt into a custom illustration in the same slot, and the layout doesn't change.
- **Try it** shows a pre-generated, real, cited transcript, so it is free to serve. "Ask your own" is a capped live demo and the hook into `/ask`.
- **Sources** uses read.cv year grouping with tabs and counts. Every citation pill anywhere on the site deep-links here and highlights the row.
- **The install rail remembers your client** (localStorage, wrapped in try/catch). After the first brain, every brain page opens on your client's tab, which saves one decision forever.

### 4.3 Install flow
**Organizing idea:** *pick a client once, then each install is one action.* nevo's stepper is preserved, but most clients skip it.

The decision tree per client, shown as the primary method in the sheet:
| Client | Primary | Secondary |
|---|---|---|
| Cursor, VS Code | **One-click deep link** button | JSON snippet for `mcp.json` |
| Claude Code, Codex, Gemini CLI, OpenClaw, Hermes | **One command** + copy | "Copy as prompt" for the agent to run itself |
| Claude.ai / Desktop, ChatGPT | **Guided stepper** (nevo's 1/6 with screenshots, from the Claude and Cursor flows above) | URL + copy |
| Other | Generic `mcpServers` JSON | Link to `/clients/other` |

```
 Install sheet (desktop: right sheet 440px · mobile: bottom sheet ~70vh)
┌───────────────────────────────────────────┐
│ ◉ Install Marc Lou's brain           ✕    │   ← title + dismiss, always
│ Free. Sign in once for all brains.        │
│                                           │
│ [Claude] [Cursor●] [Claude Code] [ChatGPT]│   ← remembered choice pre-selected
│ [Codex] [Gemini CLI] [More ▾]             │
│                                           │
│  ┌─────────────────────────────────────┐  │
│  │  ⚡ Add to Cursor                    │  │   ← one primary action
│  └─────────────────────────────────────┘  │
│  or paste into ~/.cursor/mcp.json   ⧉     │
│  ┌─────────────────────────────────────┐  │
│  │ { "mcpServers": { "nevo-david": {   │  │
│  │   "url": "https://mcp.…/marc-lou"   │  │
│  │ } } }                               │  │
│  └─────────────────────────────────────┘  │
│  Copy as prompt for your agent ↗          │
│ ───────────────────────────────────────── │
│  ◌ Waiting for Marc's first question…     │   ← live, server-confirmed
│    Ask your agent: "how should I          │
│    launch my boilerplate?"                │
└───────────────────────────────────────────┘
          ↓ first tool call arrives
│  ● Connected to Cursor. Marc's brain just  │
│    answered your first question. [Add →]   │
```

Stack variant: the same sheet. The header becomes overlapping portraits plus "Install 4 brains". The URL becomes the stack URL (`mcp.<domain>/s/abc123`), and one OAuth covers every brain in it. This one decision removes N-1 sign-ins and is the biggest UX gain over nevo.md.

Motion for this flow (emil + design-with-taste):
- The sheet enters at 240ms with `cubic-bezier(0.23, 1, 0.32, 1)`, slides from the right edge (desktop) or bottom (mobile), and exits at 180ms.
- Client tabs slide content directionally (left/right by tab index, 200ms) with a shared-layout underline.
- Copy button: icon crossfade with `filter: blur(2px)` bridging, and the label morphs "Copy → Copied" (only the changed letters move). It reverts after 1.6s.
- Card `+` → tray: the portrait **flies** from the row to the tray (shared element, ~350ms) and the tray count rolls. The tray grows from a pill and never pops in.

### 4.4 "Ask several founders" (`/ask`, phase 2)
- Layout follows NotebookLM: a **left brain list with checkboxes** (max 3–4 for cost and readability), with the composer in the middle.
- Answers render as **per-brain columns** (Chatbase compare) on desktop and stacked cards on mobile. Each has its own citation pills.
- A one-paragraph synthesis sits on top: **"Where they agree / where they split"**. The split is the interesting part.
- After the answer, a single CTA: **"Install this round table"**, which creates a stack from the selected brains.

---

## 5. Visual direction

Stay close to nevo.md. It already has a crafted, non-generic feel, and the directory should read as "nevo.md, multiplied". Only depart where scale requires it.

**Type**
- Display: **Merriweather**. Use it for H1s, person names, pull quotes. Person names always in serif is the signature move (Delphi does the same).
- UI/body: **Lato**, as on nevo.md. If you want more crispness at small sizes in dense rows, Source Sans 3 is a near-drop-in, but keep Lato unless rows look soft in testing.
- Mono: `ui-monospace` stack for URLs, configs, rank numbers and counts, with `font-variant-numeric: tabular-nums` on all stats.
- **Caveat** handwriting: at most **one annotation per view** ("most installed this week ↙", "Postiz went here"). It's the human touch, and overuse turns it into decoration.
- Scale: H1 48/56 serif, name-in-row 17/24 serif, body 16/26, meta 13/20 muted.

**Color**
- Reuse nevo's tokens unchanged: ink `#4a4a4a`, muted `#767676`, faint `#b7b7b7`, hairline `#e8e8e8`, band `#f7f7f7`, dark `#202020`, pink `#ff0083` / text `#db0070` / wash `#ffe8f3`.
- **Pink keeps one meaning: "alive / yours".** Use it for installed, selected-into-stack, live-connection pulse, citation pills, and links. Primary buttons stay `--dark`, as nevo does with "Next". There are no per-person brand colors. 500 accents would destroy the system.
- Dark mode: bg `#161616`, band `#1d1d1d`, ink `#e6e6e6`, hairline `#2a2a2a`, pink unchanged. Sketch portraits invert to light-on-dark pencil.

**Portraits (the art direction that scales)**
- Every person gets a **consistent grayscale pencil-sketch portrait** in nevo's illustration style, with a single pink detail (the brain motif). This is one generated-and-curated pipeline, not commissions. It unifies 500 faces, avoids photo-licensing problems with celebrity photos, and signals "a brain *of* them, not them".
- Fallback while a sketch is pending: a grayscale photo with a pink duotone, so it is never an initials circle.

**Density**
- Home: dense (72px rows, 2 columns at ≥1024px, ~16 people above the fold).
- Detail: medium (2-column, 75rem page like nevo's `--page`).
- Install sheet: airy (one primary action, generous spacing).
- Bands alternate `#fff` / `#f7f7f7` like nevo, with hairlines instead of heavy cards. Use the `--shadow-card` soft shadow only on floating things (sheet, tray, popovers).

**Motion**
- Default easing `cubic-bezier(0.23, 1, 0.32, 1)` (strong ease-out). Exits are faster than entrances. Animate transform and opacity only.
- **No animation on ⌘K open/close** or keyboard list navigation. List filtering uses layout animation (≤200ms) so rows travel instead of teleporting.
- First paint gets a single row stagger (30ms/row, first 12 rows only), never on subsequent filters.
- Hover is subtle and gated: row bg tint plus a 2px portrait lift. Press is `scale(0.97)` on every button.
- The portrait band drifts at ~12px/s (linear, constant motion is the exception), pauses on hover, and stops under `prefers-reduced-motion`.
- Reduced motion: keep opacity and color, drop translation and the drift.

**Copy voice** (carried from nevo)
- Short, declarative, number-first: "24 talks and essays, 240 posts. Updated yesterday." Not "Comprehensive knowledge base".
- The shell speaks in curator voice ("Levels' brain knows..."). Only quoted text is first person, and it always carries a source link.

---

## 6. Three delight ideas specific to The Brains

These follow the Delight-Impact Curve: frequent actions stay subtle, rare moments get the theater.

1. **The live handshake (rare, theatrical).** After someone installs a brain, the open page waits for the **server to receive that user's first `search_brain` call**. When it arrives, the pencil-sketch brain on the page "lights up": its folds fill with pink in a wave along the sketch lines (SVG stroke-dashoffset, ~900ms). The page then shows the actual first question: *"Pieter Levels' brain just got its first question from Cursor: 'should I raise money?'"*. It doubles as install verification, and it is a moment no other MCP directory can fake.
2. **Your "brain trust" card (occasional, memorable, viral).** Every stack generates a share image laid out like a band poster or board-of-directors photo: the selected sketch portraits in a row, the stack name in Merriweather, "3 brains · 600+ sources", and a Caveat scribble ("my advisors, sort of"). Sharing `/s/abc123` on X unfurls it, and the link installs the whole stack in one click. Each share is distribution.
3. **The round table split (rare, theatrical).** In `/ask`, while 3 founders answer the same question, their portraits sit around a small sketched table. When the synthesis finds a disagreement, a hand-drawn Caveat arrow connects the two who disagree with a one-line label ("Levels: never raise ↔ Wang: raise early"). Each side's citation pills sit right next to it, so the argument is checkable. It turns a feature list into a story people screenshot.

Small, frequent-touch details (subtle): the tray count rolls instead of swapping; a "Copied" letter-morph; a pink pulse dot on brains updated in the last 24h ("new X post ingested 3h ago"); citation pills highlight their source row on hover anywhere on the page.

---

## 7. Data the UI needs per brain

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

#### Which surface reads what
| Surface | Fields |
|---|---|
| Directory row / card | `slug`, `name`, `tagline`, `role`, `categories[0]`, `avatar`, `stats.longFormCount`, `stats.xPostCount`, `updatedAt`, `claim.status`, `topics[0].sampleQuestion` (hover) |
| Search + filters | `name`, `shortName`, `tagline`, `role`, `company`, `categories`, `topics[].label`, `principles[].text` · sort by `updatedAt`, `stats.longFormCount + xPostCount` (installs come from analytics, not the manifest) |
| Detail header | `avatar`, `name`, `role`, `company`, `links`, `followers`, `claim`, `quote`, `stats.*`, `verifiedStat` |
| Detail body | `topics`, `principles`, `sampleQA`, `featuredSourceIds`, `sources`, `related`, `mcp.tools` |
| Citation pill → drawer | `sources[id]`: `type`, `title`, `outlet`, `publishedAt`, `excerpt`, `url` |
| Install sheet + stack | `shortName`, `avatar`, `mcp.url`, `mcp.serverName`, `mcp.auth`, `topics[0].sampleQuestion` ("Ask your agent: …" while waiting) |
| Share card (OG image) | `avatar.sketch`, `name`, `tagline`, `stats` |

#### Validation rules (build fails if broken)
- Every `sourceIds` / `featuredSourceIds` / `quote.sourceId` entry resolves to a `sources[].id`.
- `stats.byType` counts equal the counts in `sources`; `longFormCount + xPostCount === sources.length`.
- Length caps: `tagline` ≤ 80, `summary` ≤ 120, `principles[].text` ≤ 140, `quote.text` ≤ 140.
- Array sizes: `topics` 3–6, `principles` 3–5, `sampleQA` 1–3, `featuredSourceIds` 3–6, `categories` 1–3.
- At least one of `avatar.sketch` / `avatar.photo`.
- `quote` and `principles` text must come from the cited sources (verbatim or close paraphrase). They are attributed to a real person.

#### Pilot mapping (expected shape, values illustrative)
| slug | categories | long-form mix | X posts |
|---|---|---|---|
| `levelsio` | `["indie-hackers"]` | podcasts + levels.io essays + a few YouTube | 100–300 (from 182K) |
| `marc-lou` | `["indie-hackers", "marketers"]` | YouTube-heavy + podcasts | 100–300 |
| `alexandr-wang` | `["ai-builders", "ceos"]` | interviews + podcasts + talks | small (often < 100), so `xPostCount` can be low; UI hides the X tab when 0 |

(Standalone copy: `docs/brain-schema-ui.md`.)

---

## 8. Open product decisions surfaced by the research
- **Stack URL and single auth.** One gateway MCP endpoint per stack, with `search_brain` taking an optional `brain` arg or namespaced tools. This drives the whole install UX, so decide it before building.
- **Claimed vs unofficial.** Showing provenance clearly ("Built from public content, not affiliated") protects trust and reduces likeness and endorsement risk for people like Musk and Zuckerberg. The claim flow is also a growth loop.
- **Live ask on the web.** A rate-limited demo on brain pages is enough for v1. Make `/ask` multi-brain a phase 2 once stack auth exists.
