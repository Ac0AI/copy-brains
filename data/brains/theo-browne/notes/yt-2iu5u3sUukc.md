## Agents have a "Groundhog Day" problem, so set up the box, not the output

Theo describes agents as "incredibly talented engineers experiencing the world's worst Groundhog Day where every time you give them a task, their brain gets reset." He frames the work as writing the letter you'd give a brilliant new hire who doesn't know they have the job: who they are, what they do, where to start. That is what CLAUDE.md or agents.md should be.

- A new thread starts from zero, so agents only know what is in the history, not your codebase.
- Context windows are still smaller than most codebases.
- The key question is not how much the agent can know. It is "how much can it get away with without knowing", meaning how confidently it can change a system it doesn't fully understand.
- Humans at big companies work the same way, since nobody knows the whole codebase.
- He argues your job is no longer to be "the black box where all the context goes in and the code comes out." Your job is to set that box up for success.

## Type safety, linting and tests are the gears of an automatic transmission

Theo asks whether type safety and CI are becoming theater with agents. His answer is that automatic cars still have gears; you just don't see them. They let the engine be designed more efficiently.

- Type safety lets you or an agent change code with confidence without proving out the whole system for each line.
- It catches problems earlier and doesn't waste coworkers' or users' time.
- He relies on it personally because he hops between many projects and can't hold function signatures in his head.
- If a change in a database column name produces errors in the exact client components consuming it, the whole pipeline gives feedback that agents read from the terminal.
- His position: anything that makes it harder for agents to change code with confidence won't survive, but these tools aren't in that category.

## Build the codebase so agents can verify their own work

Theo ties shipping speed to verification confidence. He describes bumping confidence that "a green check and a thumbs up" means ready for users from 40% to 60%, 70%, 85%, with each step compounding.

- Test: if you can't work on one thing and pull a coworker's changes down without breaking your local setup, your agents can't either.
- Remove blockers: global installs, one hardcoded port, tests that need the desktop app installed with only one instance running.
- Let the agent spin up five versions of the app in a browser and compare them, reach the iOS simulator, and run against a real backend.
- With a high-confidence verification system, you can send "hundreds" of agents through a backlog. Scale the team "up and down dynamically."
- If a green PR is about 95% likely to be safe and rollback is easy, "you can kind of just start blindly merging stuff."
- Evidence: "Last night before bed, I merged 28 pull requests."
- He built a 3K-line PR so a dev server in T3 Code is exposed over Tailscale for remote testing. A week of work to make remote dev 30% easier made no sense for three people, but it pays off across hundreds of agents.
- His favorite Vercel feature is zero-config preview deployments per PR. Verifying should be "as simple as looking at the solution."

## Markdown files plus a cron are the new executable programs, and many features are now prompts

Theo compares markdown and Claude/Codex to JavaScript and Node. Node made JS executable outside the browser; Claude and Codex do the same for natural language. A markdown file piped to Claude now executes.

- Example: a service runs at 10 a.m. daily, reviews open PRs across the projects he maintains, and rewrites a static HTML page. It is a dashboard with no backend and no host.
- It lowers the barrier for things that weren't worth building: inbox management, keeping boxes on the latest core software.
- Limit: you still shouldn't rewrite ffmpeg in Node or your web server in markdown.
- "Things that used to be features or even whole products can now literally just be prompts or markdown files."
- He saw complex "software factories" with 20 sub-agent types and review loops. Now he tells Codex or Claude to spin up sub-agents, split the work, spin up reviewers, then test with browser use.
- He doesn't write custom sub-agent definitions except for a bug workaround in Claude Code.
- Plan mode fell off because modes restricted capability for weaker models. He compares it to iOS 6 skeuomorphism, where interfaces mimicked old physical objects, versus iOS 7 designing the best shape for the task. He thinks we are still in a skeuomorphic era with git, terminals and reading every line.

## Skills are useful, but outputs depend on the rest of your setup

Asked if skills will last, Theo says reusable process is valuable because models are sensitive to wording, and teams want consistent behavior from a shared markdown file. His hesitation is variability.

- Two people running the same skill can get different behavior from different global agents.md files or models.
- Example: a "treat questions as read-only until I confirm" rule is nearly necessary for Claude models, but annoying with Codex or open-weight models, which answer "yes" and then do nothing. With one new model he had to say "go do it" three times.
- He expects many skill uses to move to one-off, controlled cloud processes anyone on the team can trigger with a button, without touching their own agent context, such as a PR audit that produces a page of priorities.

## Use agents as natural-language review gates in CI

Theo calls agents as verification "one of the most underrated things you can do right now." He uses Macroscope, which lets you define pass/fail criteria in a directory of markdown files that spawn review agents during CI.

- His team has one for Effect best practices and one for UI regressions against the design system.
- The design-system one has an index of components and examples of mistakes, like rolling a custom tooltip instead of the provided one.
- It targets what lint rules can't catch; what can be linted already is.
- It is a checklist written in plain English, "never perfectly" followed but catching regressions before a human is involved.
- Benefit: it steers taste and doesn't waste teammates' time on repeated mistakes.

## Use AI to automate the parts you understand, not to avoid understanding

Theo's advice: "You have to care deeply about the thing you don't like doing so that you could find all of the edges and use the AI to automate it."

- People struggle because "They're not using AI to automate the things they understand. They're using it to avoid building that understanding."
- Failure modes he names: "I don't want to get good at front end," "I don't like Kubernetes," "I don't like code review."
- Get good at the thing first, know how it succeeds and fails, then bring in agents with those criteria.
- Companies are tied to old processes that are encoded and enforced, so a small motivated team can change process as fast as technology and outrun them.
- He advises against being a solo founder: he was one for about three months and found it lonely and grueling, and credits co-founders for getting through hard parts.

## Own your stack, and build for a deep niche audience

Theo prefers open tools because it is hard to control what you don't understand. He studies the people behind a tool and what problems drove them. Closed software is more likely to diverge from his interests, while open lets him steer.

- The T3 stack assembled small, well-maintained open-source tools "almost Unix style" rather than customizing each.
- T3 Code, built with Julius, wraps Codex, Claude Code, Cursor, Open Code and Grok Build. It runs as a websocket server on a machine, reachable from Electron, app.t3.codes, and mobile (React Native).
- Claim: you can bring your own subscriptions via official harnesses, because a $200/month plan carries roughly $8,000 a month of inference that third-party tools can't match.
- It is MIT-licensed, forkable, has many contributors, and `npx t3 triage` pipes context to an agent for debugging.
- He doesn't target casual devs. His channel is for developers who want to nerd out, and he won't broaden it, since a narrow, high-value audience (Microsoft VPs and teenage prodigies) is worth more to brands.
- His pitch: a new hire loves the tech and an exec has heard of it from him, which "flanks the team." He claims this lets him charge more than a wider audience would.
