# Contributing to The Brains

Thanks for helping. There are three easy ways in:

## 1. Request a brain

Open a [brain request](https://github.com/VicPitic/the-brains/issues/new?template=request-a-brain.yml). The best requests include 3–5 links to the person's strongest long-form material (essays, long interviews, talks). Upvote existing requests with 👍; we build the most-wanted brains first.

## 2. Build a brain

You'll need Node 22+, the [Claude Code CLI](https://docs.claude.com/en/docs/claude-code) (`claude`), and the API keys listed in [`.env.example`](.env.example). Not every step needs every key.

1. Add the person to [`pipeline/people.json`](pipeline/people.json): slug, name, X handle, YouTube search queries, and their own site(s).
2. Follow [`docs/brain-runbook.md`](docs/brain-runbook.md). It covers every step, the budget caps and the quality gate.
3. Open a PR with the brain's folder. **Only commit derived files**: `brain.json`, `index.json`, `shortlist.json`, `sources.json`, `cards/` and `notes/`. `.gitignore` already keeps raw transcripts, scraped essays, photos and scrape dumps out.

A good brain:

- covers the person's principles on growth, distribution, pricing, product and building, not everything they've said;
- only includes things the person actually said or clearly endorses, never the host's views;
- quotes verbatim and never invents numbers;
- has 12+ long-form sources (8+ for people with little long-form) and 40+ high-signal posts.

## 3. Improve the code or design

```bash
npm install
npm start               # site + MCP on http://localhost:8790
npm run typecheck
node pipeline/smoke.mjs # calls both tools on every brain through a real MCP client
```

- The server is TypeScript in `server/`. The site in `web/` is plain HTML/CSS/JS with no build step.
- Match the surrounding code: small modules, comments only where the why isn't obvious, no new dependencies without a reason.
- UI changes should keep the existing design language: Merriweather + Lato, one pink accent, hairlines over boxes, and motion that respects `prefers-reduced-motion`.
- Keep PRs focused, and describe what you checked (browser, clients, typecheck).

## Content rules

Brains are unofficial and built only from public material. If someone asks us to change or remove their brain, we do it. Please don't add private, paywalled or leaked content.
