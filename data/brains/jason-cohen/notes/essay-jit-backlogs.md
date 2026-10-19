## Prioritization is not work-planning

- Jason argues product managers conflate two questions: "What is most important?" (prioritization) and "What will we work on next?" (work-planning). A single big backlog encodes the second answer well but is the wrong tool for the first.
- "Important" means many different things: calming a customer threatening to leave, catching a competitor on a feature, opening a new market segment, satisfying security policy, cutting the top cause of support tickets, cutting the top cause of cancellations, refactoring for engineer productivity, improving profitability, or long-term strategy with no next-quarter revenue.
- Sorting one list of epics fails for two reasons. The items are incomparable, since each has different motivations and impacts measured differently, so there is no metric to order them by. And stakeholders are left unsatisfied: Sales lacks context on why engineers need a month to "clean up a mess, which by the way, they made themselves."
- Work-planning rarely matches ideal priority, so one list can't serve both purposes.

## Why actual work order diverges from priority

Jason lists reasons the work-planning order differs from the importance order:

1. Hard deadlines, often external (a zero-day security patch, functionality needed for a live customer event).
2. No current capacity on the teams able to do the high-priority item.
3. Missing skillsets.
4. Dependencies: A is very important, B is not, but A can't happen without B.
5. Unknowns needing a spike or proof-of-concept before work can even be planned.
6. Amount of work or risk means it shouldn't be tackled yet.
7. Shipping smaller wins alongside longer work helps throughput and morale and is more agile.
8. Blockers on other work or other teams.
9. Starving: low-priority things put off so long they effectively become higher priority.
10. Holidays and seasonality (don't kick off a huge initiative on December 15th).

His solution: prioritize items in separate, actually-comparable streams, and keep that effort cleanly separate from work-planning.

## Build one prioritized list per stakeholder group

- Sit down with each group (Sales, Sales Engineering, Support, Engineering) and ask them to generate and then prioritize the things they believe would be most impactful. Tell them to ignore other departments' needs; this list is just for them.
- A single ordered list is fine here, because it's one group answering one question (e.g. "what would best increase sales, via win-rate or average transaction size"). Ordering becomes a forcing function for clarity.
- Sales ideas may come from the last lost deal (insight or noise), from critical causes of lost sales (bonus points if tied to specific lost deals; motivating for Engineering too), or from gut feel ("I know I could sell the piss out of X"). He says not to dismiss gut feel, since "multi-billion-dollar startups have been built atop experience-informed gut-instinct."
- Test whether a group has a consistent sense of impact by watching whether priorities swing dramatically quarter to quarter.
- Forcing prioritization creates empathy for the PM's job and stops everything being Priority #1. Later, when Sales complains "you still haven't made feature X," you can point out it was number seven on their own list. People can change their minds, so run the process several times a year.
- You are not promising to do everything in their order. You are promising to take the list seriously.
- Sales Engineering has a distinct, more technical view, closer to users than buyers.
- Support often knows the product best and has the best data on what causes confusion. Fewer support contacts means a happier, more loyal customer, not just lower support cost. He cites research that "needing Support less" correlates with loyalty (The Effortless Experience).
- Engineering needs its own list: refactors, library replacements, spikes, CI replacement, neglected test automation, systems outgrown by scale. These concern operational excellence, not growth, so they are easily never prioritized, which breeds resentment and grinds velocity to a halt. Engineers also have more ideas than time and must prioritize.
- No single list is correct. Like the blind men and the elephant, each has truth but not the full picture; the PM's job is to deduce the elephant. Keeping inputs separately ordered makes that easier.

## Add customer lists, split by persona, space or journey step

- The customer is the star but is handled by PMs, designers and UX researchers rather than internal stakeholders.
- Simple products may need one customer list. Products with distinct functional areas or personas can have one list each, e.g. small versus large companies, or first-time users versus power users.
- Another option is one list per customer-journey step: trial users need quick success, paying customers need continuing value, and the highest-revenue power users need reasons to stay and grow. Priorities within each are not comparable across categories.
- Jason notes this resembles Story Mapping (Jeff Patton) and Opportunity Solution Trees, and argues Story Mapping is the same idea of independent lists, extended beyond customer topics to Sales, Support and Engineering.

## Alternative ways to split the lists

- **Kano Model:** one list each for Delight, Performance and Must-be. Don't starve any. It's tempting to say Must-be goes first, but products shouldn't supply only basics; unexpectedly Delightful items are often why a customer stays despite failings. Separate lists, none fully starved, counter that.
- **Jyoti Bansal's "Four Lists"** (summarized by Adam Thornhill): customer engagement, sales intelligence, technical debt, and vision for the future.
- In all cases every list matters and none can be ignored forever. You can't move every needle at once, and items within a list are different in kind, so prioritize them separately.

## Cross the streams only at work-planning time (JIT selection)

- When people actually do work you need a clear answer to "what's next?" without more meetings. So select work from the streams into an ordered backlog, at the last possible moment, hence "JIT" (Just In Time).
- Waiting to compare incomparable things keeps prioritization clear. It also lets you handle work-planning puzzles (deadlines, dependencies, capacity) separately, which is divide-and-conquer.
- You are picking from each team's top items, not from everyone's 1000 ideas. Picking from about 12 is far easier, and "on average all 12 are probably decent ideas."
- It's more explainable afterward. Example messages: Sales's first item is impossible now, but their second is also Support's number four and fits a multi-month journey project. Or: "We knocked out two of your top items recently; we've been starving the engineering list so we're going to hit a few of those in the next few months, then resurface."

## Metrics and side benefits of separate streams

Jason says the structure keeps the PM honest and makes reporting easy:

- How much of each kind of work are we doing?
- What is the age of the top three items on each list (are we starving something)?
- How much of this sprint addresses someone's "top 3"?
- How much work is internal rather than customer-visible?

It also surfaces better ideas:

- Trends seen across every function that should inform strategy.
- New product ideas that hit several top-three items at once and so have outsized impact.

He adds that the more primary work-planning principle is to schedule rocks, then pebbles, then sand. Separate streams help identify which rocks and pebbles to consider scheduling at all.
