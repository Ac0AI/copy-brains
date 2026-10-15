## Subscription-native tracking vs ecommerce-style tracking for SaaS affiliate programs

Dustin ran affiliate programs without subscription-native tracking at WP Engine and it nearly cost him. His argument is that ecommerce-style tracking (one click, one sale, done) breaks on subscription billing because there is no continuity and no recurring logic. When a customer upgrades, downgrades, refunds or cancels, ecommerce setups force manual database updates and developer tickets, and the events no longer match what was paid out.

His recommendation for any SaaS or subscription company doing partner marketing is a subscription-native commission tracking tool that:
- Pulls data straight from the billing provider (Stripe and similar).
- Tracks new sales, recurring sales, upgrades, downgrades, refunds, chargebacks and cancellations automatically.
- Needs no manual reconciliation.

## The $200 CPA that got gamed at WP Engine

At WP Engine, Dustin's team had to decide what flat CPA they could afford that was still appealing enough to attract affiliates without eating into customer lifetime value. They settled on a $200 CPA.

- People bought the $30 plan, canceled in month two, and kept the $200 commission.
- He calls this "gaming the system".
- The fix he points to is subscription-aware commission logic (delayed payouts, tiered structures) instead of a big flat bounty paid on the first charge.

## Commission structures that protect against churn and fit the business

Dustin endorses flexibility in commission design as the most important feature when choosing an affiliate platform. His instinctive answer to "what's the most important feature?" is flexibility. Options he highlights:

- Delay commissions until a set month (for example, start paying only from the third month of a subscription).
- Tier payouts, such as 50% on the first payment and 10% on recurring payments.
- One-time, recurring or lifetime commissions.
- Per-partner custom commission structures, not just per campaign.

Principles he endorses:
- Structure the reward model around the business case. If the product depends on customers staying long, use smaller commissions over a longer time to keep partners invested. If the initial sale is very large, pay more upfront and less (or nothing) later.
- Talk to the partner and meet them in the middle ground on what works for both sides.
- Don't pay every affiliate type the same: "I'm not going to pay the coupon sites the same as I'm going to play the content and the content creators."
- The affiliate manager needs to be able to "pull those levers" to work with everybody.

## Lead-based attribution for long B2B sales cycles

Dustin highlights a key difference between SaaS and ecommerce programs: ecommerce sales happen fast (click, then a 30-day cookie, then sale), while B2B software sales cycles can run up to 8 months or a year.

- Click-to-sale cookie tracking misses these deals.
- Tracking should be click-to-lead, so a sale that closes long after the cookie window is still attributed to the right partner.
- For SaaS with freemium or free trials, the main event is registration, so quality leads are what matters. Ecommerce platforms almost never track this.

## Speed of integration and flexibility without complexity

Dustin values platforms that get a program live quickly. He has heard integration "nightmare stories" of three to six months on some platforms.

- His experience with FirstPromoter: the programs he put on the platform got up and running fast.
- The guest's claim, which he did not dispute: zero to a launched campaign in around 15 minutes with a Stripe integration.
- The usual trade-off is that flexibility brings complexity, and the best tools try to avoid that.

## Where he sees small SaaS affiliate programs

Dustin sent smaller SaaS brands to FirstPromoter as his first choice when they were not making much revenue yet and could not afford Impact or PartnerStack, but still needed the full feature set to start an affiliate program.

## AI assistants for affiliate management, with money locked out

He is enthusiastic about AI tooling that lets lean teams do more with less, and plans to build on FirstPromoter's MCP server himself.

- The assistant described can create campaigns, run research and generate reports from a question, so affiliate managers spend time on partnerships and relationships instead of CSV reports.
- Guardrails he endorses: the AI is intentionally blocked from any financial operation (it cannot move money), and all other changes can be reviewed before they apply.
