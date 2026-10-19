## Why 90% utilization makes systems brittle

- Jason argues that running any system near full capacity removes the slack that absorbs normal variation. His framing: "Your non-linear problem of 90% utilization."
- Server example: a server at 50% has spare resources when traffic spikes. Traffic arrives "in spurts and occasionally large spikes," not smoothly.
- If someone says "it costs the same at 90% or 99%, so drive it into the 90s," even normal fluctuations exceed capacity. Response times "skyrocket" and requests get dropped all the time, not just in unusual events.
- His label for the result: "The system is now brittle." It is bad for cost, product quality and customer experience.
- The point is non-linear: the cost of the last 10-40% of utilization is far higher than the benefit.

## The three-server trap: pooled capacity still fails

- Three servers at 70% each look like a happy medium between 50% (wasteful) and 90% (brittle). Total load is 2.1 servers (3 x 70%).
- When one server crashes (data center power cut, network flooded with garbage traffic), two servers must carry 2.1 servers of traffic. Each runs at 105% and the system breaks.
- Lesson: spreading load across a team does not remove the need for spare capacity. Headroom has to cover losing a member, not just average load.

## This is really about people and teams

- Jason says "This isn't really about servers; it's about you and your teams."
- People have a capacity, measured in hours, energy or focused attention. Instead of web requests they get "life-requests": emails, Jira tickets, Zendesk tickets, Salesforce leads, co-worker requests, friends, and family who need time and attention.
- A hectic, always-busy team can still be slow. Everyone works hard yet accomplishes a fraction of what seems possible.
- He treats burnout as the obvious cost (sleep, health, friends, family) but says the bigger miss is lower productivity and output: "You're trading that for super-human productivity, right?" The implied answer is no.

## Context-switching and interruption: the Twin Enemies of productivity

- At 90% utilization, work is constantly interrupted. Jason calls frequent context-switching and interruption "the Twin Enemies of productivity."
- Work-completion drags out, and some work is abandoned.
- You also don't get "outsized professional gains" as a reward for the sacrifice.

## The cascade effect when everyone is at 90%

- In many organizations everyone is at 90%, which behaves like the three-server system. One person's hiccup ripples to several other people or projects.
- Because those people are also over capacity, they cannot absorb the spike. They pass the problem on, creating "a cascade like the run-away chain reaction of an atom bomb."
- Variation is "inevitable": illness, death, people leaving or changing, errands, and small work nobody mapped out weeks ahead. Real emergencies also deserve to interrupt work.
- He says you can't "architect out" variation. Build a system, and personal and team work-style, that assumes variation and interruption and is resilient to it.

## What the healthy pattern looks like

- Target: most of the time in the safe zone, with occasional surges into high gear "for a short period of time" and "for good cause."
- Examples of good-cause surges:
  - A new product launch, with extra time fixing bugs, especially post-launch when real customers hit issues that everyone agrees should be fixed swiftly.
  - A clear-and-present danger to the company that needs a special, time-bounded rally.
  - Infrequent, brief surges used in a fun way: a Hack-a-Thon, a Bug Squash Competition, or a Ticket Kill Day.
- His conclusion: "We're erring on the side of over-utilization." Instead of competitive advantage from higher productivity, it creates "needless turmoil and lower productivity." His closing advice: don't let yourself or your team fall into the trap.
