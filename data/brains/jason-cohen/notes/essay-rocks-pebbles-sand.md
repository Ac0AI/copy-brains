## Rocks, Pebbles, Sand: three work types need three different prioritization mindsets

- The geology-in-a-jar lesson (from Stephen Covey) says to schedule big things first or they never fit. Jason says the common misreading is that this is about *size* of work. He argues it is about *impact*: not letting easy or urgent things crowd out strategic things that take years to unfold but "are more important than everything else combined." "A thousand 'quick wins' do not create durable advantages or fulfill a long-term vision."
- A second mistake is stopping at "revenue growth first, then maintenance." Each type needs its own decision framework, goal, and traps. Ignoring this gives a team that commits lots of code and looks productive, but feels it isn't progressing fast enough, lets competitors catch up, and can't see how its work connects to strategy.
- He says doing this right takes no extra time: "smarter, not harder."

| | Rocks | Pebbles | Sand |
|---|---|---|---|
| Effort | 3+ months | 1-4 sprints | 1 sprint or less |
| Maximize | Impact | ROI | Throughput |
| Outlook | Long-term, strategic | Short-term, tactical | Immediate |
| How to decide | Deliberate | Analytical | Intuitive |
| Exec role | Decider | Observer | None |
| PM role | Driver | Decider | Decider (engage devs) |
| Beware | Insufficient impact | Over-estimating ROI | Over-thinking / over-planning |

## Rocks: maximize impact, not ROI, and set the bar higher than feels necessary

- Rocks are nominally 3-6 months but realistically 3-12, because they are the most complex, have the most unknowns and dependencies. He cites Hofstadter's Law: "It always takes longer than you expect, even when you take Hofstadter's Law into account."
- A team might finish one Rock a year, certainly no more than three. "If you can do only one big thing this year, that thing had better be extraordinary."
- A Rock must deliver dramatic, measurable impact, not "incremental improvement." It must be strategic: attack your most important challenges, advance the company down its unique path, leverage existing advantages, and build new durable advantages others can't easily follow.
- Big projects over-run on time and often under-deliver on impact (occasionally they over-deliver by an order of magnitude or two, which is the usual after-the-fact story of a successful company). Because predictions are inaccurate, demand an enormous impact so that even an under-achieving Rock was still worth the time.
- Controversially: "Do *not* maximize ROI" on Rocks. A less impactful but quicker idea is the wrong choice. When things go worse than planned, "less impact" becomes "incremental impact," and you can't spend half a year on something trivial.
- Hofstadter's Law applies to the impact estimate too, so the bar must be higher than you think. "Over-shooting is the antidote to Hofstadter's Law."
- Don't just pick the best idea on a weak list. "Good" is the enemy of "Great." If no truly great idea exists, the real problem is a lack of one; solve that while the team does Pebbles and Sand and helps create and validate better ideas. If ideas aren't coming, also check whether the strategy is too vague.

## Rocks: decide deliberately, act as if it's a one-way door, and let PMs drive

- Rocks commit so much of the team's life that the decision is strategic, not "agile." Pick the mountain deliberately; then be agile in how you climb it. "If you're climbing up the wrong mountain in the first place, being 'agile' doesn't help; the result is a team self-managing themselves into a mediocre, unfulfilling result."
- Aborting a failing project is smarter than sunk-cost plodding, but cancelling a months-long project is demoralizing and ruins trust. So treat a Rock as a one-way door (Bezos's framing).
- For the decision he recommends his Binstack framework, which makes impact the top priority, lets other dimensions participate without dominating, and produces a clear explanation.
- Execs ultimately own strategy and make the final call. In a healthy setup the PM is in command of the ideas and discussion, and the exec acts as coach and Devil's Advocate who signs off on a well-thought-out proposal.

## Pebbles: tactical wins that maximize ROI, and why ROI rubrics are fragile

- Pebbles are not a "balance" between Rocks and Sand. They are tactical wins landing in the next few months, aimed at current challenges or a feature that can surprise customers sooner than expected. They take 1-4 sprints (multiple stories) and, unlike Sand, must have a measurable impact.
- They maximize ROI (value divided by effort): modest value in a short time or more value over more time are both fine. "What you cannot do is deliver little value but still take a long time."
- Impactful things tend to explode in effort. Anything over four sprints must be treated as a Rock. If a Pebble expands, either cut scope so it fits, or move it to Rocks. Either way you often find the impact is no longer big enough, meaning get more creative or drop the idea.
- Estimation error swamps ROI. His example: estimated impact 60, effort 4, ROI 15. Actual: 20% less impact (48) and 50% more time (6), giving ROI 8, "half the ROI than we originally thought." Many items' ROI fall within that error, so noise exceeds signal and a naive rubric is useless. He points to his ROI rubric framework to avoid this.
- PMs decide Pebbles. It's a judgment call synthesizing customer needs, competitors, strategy, company metrics and customer delight. One mind should make it: the one closest to customers, product, competitors and market. Not a drive-by manager decision, and not "a hostage negotiation with engineers who would rather rewrite a whole module from scratch." With self-management comes responsibility for results, so there should be a sensible justification and an objective measure of impact.

## Sand: maximize throughput and strip out administration

- Sand items need no breakdown, take at most a sprint (sometimes under an hour), and "just need to be done." Examples: UI tweaks, corner-case unit tests, performance optimizations, small bug fixes (some customers never hit), small refactorings for tech debt, security patches, library upgrades, documentation tweaks. Even most edits to a piece of writing change a single sentence.
- Individually unmeasurable, together they make software feel "really well-done." Ignoring them means never reaching greatness even with the best strategy.
- Goal is throughput: how many are done per sprint. Don't try to measure or prioritize impact; it's too small. Fixing ten bugs in a sprint is a good accomplishment. (If a rare item has measurable impact, just do it.) High throughput is also energizing: "Do not discount the importance of the *feeling* of productivity and usefulness."
- Administrative overhead is the main enemy. Debating, writing user stories, filling JIRA fields, re-prioritizing across sprints and balancing assignments, multiplied by meeting attendees, can cost more than the work. "If you're using the same processes to prioritize and define Sand as to define Pebbles or Rocks, the process is wrong."
- His example: a JIRA ticket with Type, Priority, Estimate, Story, Linked Goal, Risks, Testing Considerations and Acceptance Criteria to upgrade the npm package `minimist` from 1.2.2 to 1.2.3. It could be a one-liner and takes minutes (change one line in `package.json`, rerun unit tests). Engineers usually already know what and why, so formalities are waste.

## Sand: prioritize by intuition and desire, and let the team schedule it

- Complex prioritization systems produce nothing meaningful for Sand. Since delivered value per item is near zero and timing rarely matters, let people pick what they have energy for. That raises morale and quality, and "you get 'productivity for free,'" which lifts throughput.
- Teams should schedule their own Sand rather than debate it with executives. If management is constantly engaged in Sand scheduling, "it's always the manager's fault": either micromanaging, or having hired wrong or failed to build an environment where the team understands customer, market, technology and work.
- Small requests from around the company are normal, but if you're debating with spreadsheets and virtual sticky-note boards, it has gone too far.

## A simple sprint-planning order and how to handle common failure modes

Schedule in this order, skipping a tier if capacity is insufficient to make significant progress or stories aren't ready:
1. Time-critical items regardless of size (security patches, bugs actively hurting customers, launch work with an immovable date).
2. One or more stories from the current Rock.
3. One or more stories from the current Pebble.
4. Sand.

Common problems:
- **Time-critical work eats everything:** the meta-problem (too little effective time) becomes the top priority, above the Rock, because no Rock will finish. Diagnose causes (individual productivity, too many owned things, architectural dependencies, domain needing more people, missing skills, not saying "no") and schedule sprint time to fix it.
- **Starving the Rock:** one story per sprint causes context switching and slow calendar time. The PM should address it; the team is likely falling for the Eisenhower Matrix fallacy of doing urgent over important. Maybe pause the Pebble.
- **More than one Pebble:** no time for two at once, and context switching hurts morale and productivity. Exception: a Pebble nearly done or blocked for at least a week.
- **Always Rock, never Pebble:** may be fine if the Rock is valuable enough; call it "the theme of the next four months." After a first complete version, do Pebbles with incremental Rock updates instead of starting another Rock right away.
- **Zero Sand:** leads to a poor product and unhappy engineers. Tone down other stories, pause the Rock or Pebble for a sprint, or run a Sand-only sprint, which is fun and gets a lot done.
- **Starting a new Rock or Pebble too soon:** after shipping, you still need field learning, deferred small items, and follow-on functionality, so keep the Rock or Pebble around longer. This is another reason estimates are subject to Hofstadter's Law.
- **Trying to balance every sprint:** unnecessary. Balance over several months matters; intentionally imbalanced sprints give more focus and less context switching.
