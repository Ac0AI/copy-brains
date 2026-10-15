## Free tiers carry small teams much further than people assume

- Theo's first argument against "just use AWS" is how long the free tier lasts. He says he has not shipped a service that doesn't fit within Vercel's free tier.
- Most services he recommends have what he calls "disgustingly generous" free tiers.
- PlanetScale free tier: a billion row reads and 10 million row writes per month.
- PlanetScale $30/month plan: 100 billion reads and 50 million writes.
- PlanetScale overage: $1 per billion reads and $1.50 per million writes.
- He says PlanetScale is billed on how many databases you host, not on reads and writes, so scaling databases properly makes them cheap.
- PlanetScale can pass savings on because it makes its money on enterprise scale and by upselling developer experience, not on margin per unit of compute.

## Clerk pricing and why it compares well to other professional auth

- Theo says Clerk's pricing is similar to other professional solutions like Auth0.
- The free tier has no credit card and unlimited sign-ins, with up to 5,000 monthly active users. A user counts as active only if they visited that month.
- The Hobby tier is $25/month and is not limited to 5,000 users.
- Overage is $0.02 per additional active user on Hobby and $0.05 on the Business tier, which adds more integrated features.
- Each additional employee in the Clerk dashboard costs $20 initially. He says you probably don't need many, since you can share environment variables.
- His summary: the free-tier window is massive and the rest is cheap. The same holds for Upstash and Axiom.

## Engineering time is the real cost of self-managing on AWS

- Theo says engineers think of their own time as cheap, but it is not.
- He describes AWS problems that took "sometimes days sometimes weeks" and always added long-term maintenance:
  - setting up CI/CD and linking it to GitHub
  - connecting the database and setting up PgBouncer for serverless traffic
  - switching databases between platforms
  - figuring out AppSync and Amplify
- He says he lost "hundreds upon hundreds of hours" to this, which is expensive, and more so if done for a company.
- A complex custom setup also creates job-security-style lock-in: if the person who built it leaves, the company must find someone to maintain "whatever chaos I have set up."
- Saving a few cents a month only matters once the number of units is large enough.

## When rewriting for cost actually makes sense

- Theo cites other creators' "line of prime": the point where a service is stable in features, high in traffic and predictable in usage, so rewriting it as a stable self-hosted system to minimize cost pays off.
- He says most teams, including those at big companies, are far from that point because most code is still changing and the cost of change is high.
- He would bet that at most companies it costs more to pay engineers to build their own developer experience than to pay Vercel and similar vendors for theirs.
- As a team lead, company owner and investor, he says it matters to understand how valuable engineer time is. Engineers should work on unique business differentiators that make the product better for users and beat competitors.
- Contrast: don't spend a $200k/year engineer's time saving "100 bucks a month" on AWS.

## Scale-to-zero billing makes costs track usage

- Theo says these services save actual money, not just time, because you are billed when users use the service, not when the month ends.
- Running servers means paying for compute that sits unused, even if Kubernetes and Terraform are set up well.
- With Vercel and PlanetScale, cost flexes with usage across every part of the app, and you don't pay for servers that sit idle.

## Caching, edge functions and HTTP database access cut compute

- Vercel's cache primitives and incremental static regeneration mean the server only computes when things have changed.
- PlanetScale's database.js package hits an HTTP endpoint instead of opening a SQL connection, so you avoid connection pools and bouncers. It can be called from an edge function.
- Edge function pricing on Vercel Pro: $0.65 per million invocations, and the function only runs if the data isn't already in cache.
- His example: update the posts on a Twitter-style profile only when the user makes a new post, so every other request hits the cache and uses no compute.
- He says it is "so much cheaper to cache a response than to run a server that processes every single request."
- Setting up caching and a CDN yourself returns to the engineer-time cost above.

## Bottom line on hosting your own

- Theo says he recommended these services before any of them paid him, because they saved him time, money and energy and made it faster to build the right solution for users at every scale he has worked at.
- He argues people who call them too expensive don't see where the cost is.
- His rule: "if you're hosting your own backends and you're hosting your own services you better have a damn good reason because you are costing more money the vast majority of the time."
