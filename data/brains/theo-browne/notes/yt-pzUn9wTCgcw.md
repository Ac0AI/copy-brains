## Issue trackers were built for a handoff model that is dying

- Theo agrees with Linear's claim that "issue tracking is dead." He says it is "exciting to see them die," and finds it striking that Linear is trying to kill the category it led.
- He describes the old model: a PM scopes the work, engineers pick it up later, and the system fills with prioritization, negotiation and workflow to bridge the gap.
- It was a real constraint-driven design, because engineering time was scarce and work had to be routed across roles.
- His own experience at Twitch was breaking big work into small tickets, queueing them, assigning them and guesstimating when everything would ship.
- He thinks the next system is built around context and agents, not handoffs, and he's "excited" about that direction while a little scared of what comes next.
- He says "the number of people I know whose jobs are effectively just using Linear or Jira is heartbreaking."

## Why Jira got slow and why Linear won engineers

- At Twitch, Theo's Jira dashboard took over 2 minutes to load.
- His explanation: every feature in a tool like this gets "used and abused until it breaks at the seams," with a huge number of tickets, fields and data links.
- Linear was a bet that engineers would make the important tooling decisions, while Jira was marketed to and picked by product managers.
- Linear tried to remove weight so you could get in, filter, find what you need and go back to work.
- Theo guesses Linear has a similar number of users to Jira and many more startups.
- His view of the category's failure mode: complexity starts to look like sophistication, and "the process became work itself."

## The "Theo method": prototype first, spec second

- Specs written before the product exists almost never describe what the product becomes, how it should be built, or how long it takes.
- Instead he built a small version in 1 to 3 days. The goal was not shipping faster; it was to:
  - force out the UX questions
  - identify tech shortcomings and the real surface area of the change
  - produce something demoable for internal testing and for users brought into the office
- The prototype produced much better specs.
- About half the time, the team slightly polished that first pass and shipped it as is.
- He says a feature that "should have been a huge 20-page spec" that teams spent weeks debating often took him a few days and shipped unchanged.
- It cost him in promotion packets because he had no fancy documents to point to, but it earned internal regard. At Twitch it is still called "the Theo method" or "the Theo prototype," and he overhauled several teams' product design process by refusing to write "a boring useless spec."
- His rule: "The first version of software will always be less than ideal. Do it first to figure it out, throw it away, and then make a good version after."
- He thinks issue trackers discourage this kind of exploratory building.
- He credits his advantage then as trimming the fat, finding where in the system to insert the thing, and building it fast. He says agents have now made that capability available to almost every engineer.

## Agents compress planning, implementation and review

- Theo endorses Linear's claim that agents absorb procedural work, so teams spend more time on intent, judgment and taste.
- He cites Linear's figures as evidence the shift is already underway:
  - coding agents installed in more than 75% of Linear's enterprise workspaces
  - agent-completed work up 5x in the last 3 months, which he attributes to the "Opus 4.5 effect" and then Codex
  - agents authoring nearly 25% of new issues
- He still lets agents close issues but not open them, and says he may need to get over that.
- Linear's proposed model, which he agrees with: customer feedback, ideas, direction, decisions and code are captured as shared context. Rules, skills and permissions drive agents, and the output is the product. "Notice that there are no issues here. Notice that there is no sprint planning here."
- He found the line "Linear is the shared product system that turns context into execution" cringe and hopes they rethink it.

## Automations are for non-developers first

- Theo overlooked automations in the Codex app at first, and says most devs do too, partly because the example templates (stand-up summaries, weekly updates, release prep) don't appeal to developers.
- A scheduled automation fires on a set schedule, spins up a work tree in a chosen project, and runs with a chosen model and reasoning level.
- He sees a growing number of non-devs using the Codex app mainly for automations. One example is a comms person at a startup with 30-plus automations. One of them checks websites and news sources for company mentions and DMs her the results on Slack. She had never been a dev.
- His explanation for the gap: developers know how much work automating something is, so they have "trained our brains to ignore the urge to automate things that aren't super useful." Non-developers get automation for the first time, and with it now easier, they do far more of it.
- He expects PMs, leads and other non-coders to love Linear's automations and turn them into something useful.
- Anecdotally, he observes that the devs most into automations and OpenClaw tend to be less strong developers. He says this is an observation, not an insult.

## Roles and multi-step planning were built for humans

- Theo is skeptical of gstack-style skill packs (CEO, eng manager, designer and QA personas defined in markdown text files). He calls it "how devs role play."
- The one idea he finds fun is a /codex command that has Claude Code call the Codex CLI for a second-pass review.
- His hot take: the way work was split into roles only made sense because humans were different enough and hard enough to find and level up that you needed separate specialists. If the model can play CEO, designer, QA and debugger, "why are we still defining these things?"
- He sees the same flaw in multi-step planning processes: hours of planning, specs, sub-plans and summaries that fill the context window before any code gets built.
- His alternative is to treat the first build pass as the plan:
  - give the model the useful context as tools
  - ask for a scrappy prototype of the requested feature, with scope identification
  - let the build surface the footguns and flaws
  - write a much simpler, better-informed plan and build again
- He predicts the industry will reinvent plans "a million times over the next year" and then return to code as planning, as happened with MCP, which got better once models used it through code.
- He grants one way he could be wrong: models are trained on human process, so mimicking human-style planning might suit them better. He still believes a prototype is the best plan.

## Org structure: product and engineering should not be separate

- Theo agrees with a point about functional versus product divisions at companies.
- He says he recently learned GitHub has separate product and engineering orgs with no shared leadership. He says the people building the product can't properly interact with the people deciding it, and he thinks that explains why GitHub is in such bad shape.
- His conclusion: "I don't see how GitHub can ever get better if the product people don't code and the devs don't make product decisions."
- His closing argument is "Build it three times and throw away the first two." He says this didn't make sense when code was expensive, but now "code is cheap," so teams should "stop inventing all this [process]."
- He says he has long worked this way, even filing rough PRs to showcase UX or DX ideas so a teammate (Julius) could turn them into production code.
- He thinks Linear is ahead of the curve but still clings too much to historical team splits, and he calls Jira's owner Atlassian clearly unfocused for buying The Browser Company.
