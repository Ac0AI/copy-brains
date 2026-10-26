## Avoid hard problems: the shortcut-first approach to building products

Paul argues that the fastest way to make things easy is to avoid hard problems rather than solve them. In his experience most engineers prefer hard problems because they impress other engineers, but that is "not a great way to build successful products."

- His method for getting things done quickly: "cheat (technically), take a lot of shortcuts, and find an easier way around the problem."
- Guardrail: think ahead only enough to avoid painting yourself into a corner, or have a plausible plan for escaping the corner.
- "There's always an easier way -- work lazier, not harder."
- Exceptions exist, such as security and bank transactions.
- The best wins are easy solutions to important problems that look really hard. Avoiding hard problems doesn't mean avoiding things that merely seem difficult.

## Why YouTube beat Google Video

Paul cites this as one of several reasons YouTube beat Google Video.

- Google spent a lot of time solving technically challenging problems.
- YouTube built a product people actually used, on what he believes was PHP and MySQL, "which is not at all technically impressive."
- He hedged on the stack ("I think"). In the comments he noted YouTube probably used a variety of languages as it grew, and that a "Senior web developer" job posting asked for PHP experience.

## Most "hard problems" are irrelevant for 99% of products

Paul's example is conventional databases. Databases solve difficult problems, and people rightly warn against reinventing the wheel. But many of those problems don't apply to most products.

- "Real" databases can handle transactions too large to fit in memory. That mattered in 1980.
- In 2007 a computer with 32GB of memory cost around $5,000.
- His guess for Twitter: transactions of roughly 0.0000002 GB (messages capped at 140 characters), not gigabyte-sized ones.
- Takeaway: check whether the hard problem a tool solves is one you actually have.

## Don't ditch what works: understand, then fix

Paul is explicit that he is not telling people to abandon their database.

- If the database is plenty fast, "the easiest thing to do is probably 'nothing', and that's what I advise you do."
- If it's slow or overloaded, do two things: 1. understand the problem, 2. fix the problem.
- The right fix depends on the situation.

## Split data by how much correctness it needs

When a database is overloaded, Paul suggests separating data by importance.

- Important data that rarely changes (username and password): leave it in the database.
- Data that updates constantly and doesn't need to be exactly correct (last active time, hit counters): move it into something "really simple but less reliable."

His example of simple but less reliable:
1. All updates go into memcached, but not the database.
2. (Optional) A background process occasionally copies entries from memcached to the database. Without this, the values are completely lost when memcached restarts.
