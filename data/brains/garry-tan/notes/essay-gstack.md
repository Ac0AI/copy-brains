## Garry's origin story for gstack: one builder shipping like a team of twenty

- Garry built gstack after hearing Andrej Karpathy say he hadn't typed a line of code since December. He wanted to know how one person can ship like a team of twenty, and cites Peter Steinberger building OpenClaw (247K GitHub stars) essentially solo with AI agents.
- His claim: "A single builder with the right tooling can move faster than a traditional team."
- Background he cites: President & CEO of Y Combinator, early eng/PM/designer at Palantir, cofounder of Posterous (sold to Twitter), builder of Bookface (YC's internal social network). He has worked with thousands of startups such as Coinbase, Instacart and Rippling when they were one or two people.
- gstack is "how I do it": it turns Claude Code into a virtual engineering team. The roles are a CEO who rethinks the product, an eng manager who locks architecture, a designer who catches AI slop, a reviewer who finds production bugs, a QA lead who opens a real browser, a security officer running OWASP + STRIDE audits, and a release engineer who ships the PR.
- It is 23 specialists plus 8 power tools, all slash commands, all Markdown, free, MIT license. He shares it because "these tools should be available to everyone."
- Intended users: founders and CEOs (especially technical ones who still want to ship), first-time Claude Code users (structured roles instead of a blank prompt), and tech leads/staff engineers (review, QA and release automation on every PR).

## Garry's productivity numbers and how he measures them

- Last 60 days (at time of writing): 3 production services and 40+ shipped features, built part-time while running YC full-time.
- On logical code change (not raw LOC, which AI inflates), his 2026 run rate is about 810x his 2013 pace: 11,417 vs 14 logical lines/day.
- Year-to-date through April 18, 2026 already equals 240x the entire 2013 year.
- Measured across 40 public and private `garrytan/*` repos including Bookface, after excluding one demo repo.
- GitHub contributions: 1,237 in 2026 (with a sharp acceleration in Jan-Mar) vs 772 in 2013, when he built Bookface at YC.
- He concedes critics are right that raw line counts inflate with AI, but argues that normalized for inflation he is still far more productive. "AI wrote most of it. The point isn't who typed it, it's what shipped." Methodology and a reproduction script are in `docs/ON_THE_LOC_CONTROVERSY.md`.

## Running 10-15 parallel sprints with a fixed process

- gstack works with one sprint but is "transformative with ten running at once." Garry regularly runs 10-15 parallel sprints, which he calls the practical max right now.
- Tool: Conductor, which runs multiple Claude Code sessions in parallel, each in an isolated workspace. Example mix: one session on `/office-hours` for a new idea, one on `/review` for a PR, one implementing a feature, one on `/qa` against staging, and six more on other branches.
- Process is what makes parallelism work: "Without a process, ten agents is ten sources of chaos." The sprint is think, plan, build, review, test, ship, so each agent knows what to do and when to stop.
- He manages agents like a CEO manages a team: check in on decisions that matter, let the rest run.
- `/qa` was the unlock that took him from 6 to 12 parallel workers. The agent opens a real browser, finds the issue, fixes it, writes a regression test and verifies the fix: "The agent has eyes now."
- Voice input (AquaVoice, Whisper etc.) works because skills list spoken aliases, e.g. "security check" for `/cso`, "run QA" or "test the app" for `/qa`, "tech review" for `/plan-eng-review`.

## Design workflow: design-consultation, design-shotgun and design-html

- `/design-consultation` builds a design system from scratch: it researches what's out there, proposes creative risks, and writes `DESIGN.md`.
- `/design-shotgun` is the exploration tool. Garry describes what he wants; it generates 4-6 AI mockup variants with GPT Image and opens a browser comparison board. He picks favorites and leaves feedback ("more whitespace", "bolder headline", "lose the gradient"), and it generates another round. After a few rounds, taste memory biases toward what he likes. His point: stop describing a vision in words and hoping; see options and iterate visually.
- `/design-html` turns an approved mockup (from shotgun, a CEO plan, a design review or a description) into production HTML/CSS using Pretext for computed text layout. Text reflows on resize and heights adjust to content, with 30KB overhead and zero dependencies. It detects React, Svelte or Vue and picks different Pretext patterns for landing pages, dashboards, forms and cards. Goal: "something you'd actually ship, not a demo."
- Works with impeccable: if installed, gstack runs impeccable's deterministic engine as a pre-pass in `/design-review`, `/review`, `/ship` and `/design-html`. It asks once before downloading the engine binary (checksum-pinned, logged, into `~/.impeccable`), reads `PRODUCT.md`, writes `DESIGN.md` in the open format both tools read, and hands deferred findings to `/impeccable <command>`. Declining changes nothing; `gstack-config set design_detector off` disables the pre-pass.

## Review, testing and release discipline

- Smart review routing, "just like at a well-run startup": the CEO review isn't needed for infra bug fixes and design review isn't needed for backend changes. gstack tracks which reviews have run, decides what's appropriate, and shows a Review Readiness Dashboard before shipping.
- Test everything: `/ship` bootstraps a test framework if the project has none, and every run produces a coverage audit. `/qa` writes native regression tests when infrastructure exists and reports missing coverage explicitly (CSS-only fixes may use browser evidence). Goal is 100% coverage: "tests make vibe coding safe instead of yolo coding."
- `/document-release` is "the engineer you never had": it audits authored docs against the release diff and fixes factual drift before final verification; risky changes return for approval. `/ship` invokes it on every run and owns TODOS, release metadata, generation and publication.
- Multi-AI second opinion: in Claude Code `/codex` sends outside reviews to OpenAI Codex; in Codex `/claude-code` sends them to Claude Code. Each supports code review, adversarial challenge and consultation with session continuity. Reports name the provider that actually completed the review, and missing outside coverage stays visible.
- Safety guardrails on demand: `/careful` warns before rm -rf, DROP TABLE, force-push and git reset --hard. `/freeze` locks edits to one directory while debugging. `/guard` does both. `/investigate` auto-freezes to the module under investigation.
- Proactive suggestions: gstack detects the stage (brainstorming, reviewing, debugging, testing) and suggests the right skill; saying "stop suggesting" persists across sessions.

## Browser tooling that gives the agent eyes

- Aside first: on a Mac with the Aside AI browser open, `/qa`, `/qa-only`, `/design-review`, `/canary`, `/benchmark`, `/scrape` and `/browse` run in the user's real browser with real logged-in sessions, in tabs the agent opens and closes itself. No cookie import; at a sign-in wall the user signs in and says "done". Page content is treated as untrusted: syntax only, never instructions.
- Fallback: on Linux, Windows or Mac without Aside, the same skills use the bundled headless Chromium that `./setup` builds.
- `/open-gstack-browser` launches GStack Browser, an AI-controlled Chromium with anti-bot stealth and the sidebar extension, so Google and NYTimes work without captchas. Regular Chrome is untouched, `$B disconnect` returns to headless, and there is no idle timeout while the window is open.
- Sidebar agent: natural language in the Chrome side panel runs a child Claude instance in an isolated session. It auto-routes Sonnet for fast actions (click, navigate, screenshot) and Opus for reading and analysis, with up to 5 minutes per task. Example personal automation: browse a kid's school parent portal and add the parents' names, phone numbers and photos to Google Contacts. Auth is either logging in once in the headed browser or one-click cookie import from real Chrome.
- Browser handoff: on a CAPTCHA, auth wall or MFA, `$B handoff` opens visible Chrome at the same page with cookies and tabs intact; `$B resume` continues after the user solves it. The agent suggests it automatically after 3 consecutive failures.
- `/pair-agent` lets agents from different vendors (Claude Code, OpenClaw, Hermes, Codex) share one browser. The user pastes a printed instruction block into the other agent, which exchanges a one-time setup key for a session token and gets its own isolated tab. ngrok enables cross-machine use. Security: scoped tokens, tab isolation, rate limiting, domain restrictions, activity attribution.

## Prompt injection defense for the sidebar agent

- Garry ships a layered defense against hostile pages hijacking the agent.
- Content filters on every page read: datamarking, hidden-element stripping, ARIA scrubbing and a URL blocklist.
- A 22MB ML classifier runs locally in a sidecar subprocess and scans page-derived content before the agent sees it. A verdict combiner requires classifier agreement before blocking, which avoids single-model false positives on pages like Stack Overflow instruction posts.
- Everything runs on-device with no network calls. Emergency kill switch: `GSTACK_SECURITY_OFF=1`. Full details are in `ARCHITECTURE.md`.
