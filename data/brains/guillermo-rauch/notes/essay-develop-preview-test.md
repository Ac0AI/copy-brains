## Why Guillermo prioritizes end-to-end testing

- Writing tests is an investment, judged by its return and its risks, including opportunity costs. There is "too much of a good thing" when time goes to tests instead of features.
- He cites Google's SRE book to make the same point about reliability: past a certain level, extra reliability hurts. Extreme stability "limits how fast new features can be developed," raises cost, and shrinks what a team can afford to offer.
- His 2016 guideline favored integration tests with "not too many" tests. In 2020 he argues for also prioritizing end-to-end (E2E) tests for the critical parts of an app, because that reduces risk and gives the best return.
- The case rests on focusing on the customer first, which he sees as the best way to run a business and to judge software quality.

## Why the conventional testing pyramid can be inverted

- The conventional pyramid (Martin Fowler's) puts E2E at the top because it is slow and expensive. Guillermo asks what happens if those two costs go away.
- Modern deployment workflows plus serverless testing can "fully revert" the pyramid.
- He names two objections to E2E: staging is hard or costly, and running the tests is slow or expensive. Infrastructure now answers both.

## What can't be caught "in the lab"

- Cloud software is deployed to dozens of operating systems, mobile devices, browsers and networks of varying stability and performance. The environment keeps changing as apps depend on more hosted services and third-party APIs.
- A fancy compiler or type system won't help if the site fails to load in Chrome because the right HTTP headers weren't sent for `.js` files, or if a feature isn't compatible with Safari.
- Quality goes beyond correctness. It also includes reliability (staying correct over time) and performance (doing the right thing quickly).

## Instant, prod-like staging: a deployment per push

- With Vercel, every git push is deployed and given a URL. This is cost-effective through incremental computation, where static files and serverless functions are mostly reused from deploy to deploy.
- Deploys are stateless, so resources are used only on demand and scale with traffic. Vercel can keep deploy history forever, like GitHub keeps code history.
- Instead of one shared staging server, there can be "millions of concurrent 'staging' environments."
- "Staging" is in quotes because the tests run against real production infrastructure. That has reliability benefits:
  - Some browser features are only enabled over SSL.
  - Having every production feature on, like brotli compression and HTTP/2, reduces outage risk.

## Making E2E fast and cheap

- Puppeteer (Chrome's headless browser) combined with serverless compute that scales to thousands of concurrent executions makes E2E "both fast and cheap." He points to a Stanford paper (gg) as an example of that scaling.

## The Develop -> Preview -> Test workflow, step by step

He demonstrates it on his open-source blog (`rauchg/blog`) with Vercel, Checkly and GitHub:

1. Define an E2E check in Checkly asserting the browser title always contains "Guillermo Rauch". It fails at first, as expected. Checkly gives full access to the Node and puppeteer APIs, with no setup or scheduling ceremony, since you write inside the function that gets invoked.
2. Install the Checkly GitHub app and, under the check's CI/CD tab, link it to the repository.
3. Create a branch that adds the `<title>` tag, deliberately misspelling his name.
4. Open a pull request. Within seconds Vercel deploys, a headless browser acts as a visitor, and the error is exposed on the PR.
5. Push the fix. The check re-runs automatically. Then merge, and merging to master deploys to `rauchg.com`.

- He stresses there was zero additional configuration: "Vercel supplied a URL, Checkly tested it, GitHub was notified."

## Continuous testing as the answer to complexity

- Checkly can run tests from multiple locations around the world and invoke checks over time, not only at PR time.
- He quotes Leslie Lamport: a distributed system is one where "the failure of a computer you didn't even know existed can render your own computer unusable."
- His conclusion: as systems depend on ever-changing platforms and other cloud systems, "continuously testing just like our users do is our best bet to tame the chaos."
