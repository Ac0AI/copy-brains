## Start with a price you can learn from, not an optimal one

Corey says that on day one you don't have a price to optimize. You have a bet to place. The goal of a first price is learning, not precision. He argues you should pick a number, ship it, and let real buyers show you if it's wrong.

- The frameworks for value metrics, tiers and Van Westendorp are tools for optimizing an existing price, not for picking the first one.
- His rule of thumb when you have nothing to go on is to start at the order of magnitude that matches the customer. Choose the bucket by who the customer is and how much value you deliver, start near the round number, then move within the bucket quickly once you have signal.
  - ~$10/mo: prosumer or individual, high volume, low touch.
  - ~$100/mo: SMB or team tool, "the SaaS default".
  - ~$1,000/mo: mid-market, business-critical or sales-assisted.
- He cites Jason Fried's advice to early Intercom: "just charge $50 and see what happens." If people pay without flinching, raise it. If nobody bites, you've learned something in a week instead of a quarter.

## Avoid the $9 trap

Corey warns against pricing ultra-low (e.g. $9/mo) to reduce friction.

- It creates false traction: signups that look like validation but come from people who would never pay a real price.
- It traps you, because raising a price 5-10x later is much harder than having started higher.
- Your cheapest customers churn the most and complain the loudest.
- His summary: round-and-slightly-higher beats clever-and-cheap.

## Price on value, not on cost or competitors

He treats price as a position between two reference points.

- The customer's perceived value is the ceiling.
- The next best alternative is the floor for differentiation.
- Price between the next best alternative and perceived value.
- Cost to serve is only a baseline, never the basis.
- Matching a competitor's price "copies their strategy, not their economics." Competitor pricing is a data point, not a target.
- He frames pricing as three axes: packaging (what's in each tier), pricing metric (what you charge for) and price point (the dollar amount).

## Choose a value metric that scales with value

The value metric is what you charge for. Good ones align price with value, are easy to understand, scale as the customer grows and are hard to game.

- The test he gives: "As a customer uses more of [metric], do they get more value?" If yes, it's a good metric. If no, price doesn't align with value.
- Examples by type:
  - Per seat for collaboration tools (Slack, Notion).
  - Per usage for variable consumption (AWS, Twilio).
  - Per feature for modular products (HubSpot add-ons).
  - Per contact or record for CRM and email tools (Mailchimp).
  - Per transaction for payments and marketplaces (Stripe).
  - Flat fee for simple products (Basecamp).
- The value metric then picks the pricing model: flat, usage, tier, user, feature, credit, outcome or hybrid.

## Structure tiers as Good-Better-Best

- Good (entry): core features, limited usage, low price.
- Better (recommended): full features, reasonable limits, the anchor price.
- Best (premium): everything plus advanced features, priced at 2-3x the Better tier.
- Differentiate tiers by feature gating, usage limits, support level (email, priority, dedicated) or access (API, SSO, custom branding).

## Use research methods with realistic expectations

- Van Westendorp asks four questions: too expensive, too cheap, expensive but might consider, a bargain. The intersections give an acceptable price range and candidate prices to test.
- He cautions that the "Optimal Price Point" is a survey intersection, not proof of revenue or profit maximization. The four questions alone don't estimate conversion, churn or demand at a new price.
- MaxDiff shows sets of features and asks which is most and least important. The results inform tier packaging.

## Raise prices as a staged rollout

Corey signals it's time to raise prices when:
- Competitors have raised prices, prospects don't flinch, or you hear "It's so cheap!"
- Conversion is very high (>40%) and monthly churn is very low (<3%).
- You've shipped significant value since the last pricing change.

His approach is to treat a price change as a rollout, not a switch.

1. Test on new customers first. They have no anchor and no relationship at stake, so they give a clean read on market acceptance.
2. Don't grandfather forever. A customer paying $50/mo who should be at $250/mo is a $2,400/yr gap. Grandfather as a grace period, not a permanent exemption.
3. Move 5-10% of existing customers first. Watch churn and support volume for a cycle, then expand in staggered waves.
4. Explain the why months ahead with a generous offer, such as locking in the old price by upgrading to annual, a longer grace window or a one-time credit.

- Other strategies he lists: delayed increase (announce 3-6 months out), tie the raise to added features, or restructure plans.
- He says to accept some churn. The customers most likely to leave over a justified increase are usually the least profitable, highest-support, most price-sensitive.

## Pricing page best practices and teardown

- Above the fold: a clear tier comparison, the recommended tier highlighted, a monthly/annual toggle and a primary CTA per tier.
- Common elements: feature comparison table, who each tier is for, FAQ, an annual discount callout (17-20%), a money-back guarantee and trust signals.
- Psychology:
  - Anchoring: show the higher-priced option first.
  - Decoy effect: make the middle tier the best value.
  - Charm pricing ($49) for value-focused products, round pricing ($50) for premium.
- He audits pricing pages on two axes: human buyer experience (clarity, differentiation, cognitive load, trust, transparency) and AI-agent readiness.
- AI readiness matters because buyers now ask ChatGPT, Perplexity or Claude "what's the best X and what does it cost?" before visiting. A page agents can't parse loses deals you never see.
  - Put prices in text, not images or behind "Contact us".
  - State per-tier depth in text, make FAQs extractable and add Offer structured data (JSON-LD).
- His "paste test": give the pricing URL to a browsing-capable AI and ask "what are the plans and prices?" A clean miss suggests agents will struggle too. He calls this a heuristic, not proof.
