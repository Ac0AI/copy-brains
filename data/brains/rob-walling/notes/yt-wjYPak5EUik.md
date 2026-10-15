## Expansion revenue as the SaaS pricing "cheat code"

- Rob says recurring revenue is the business cheat code: it lifts sales multiple, enterprise value and stability, including in a recession. SaaS founders get it for free.
- Expansion revenue is "the opportunity for a customer to pay you more money as they get more value from your product." It usually works through pricing tiers that auto-upgrade customers.
- First-order effect: more revenue per customer. Second-order effect: it can get you to net negative churn.
- Net negative churn example: a month with zero net new customers where the business still grew 4.5%.
- Rob says the biggest, fastest-growing SaaS businesses reach net negative churn. It is not possible for every SaaS, but worth striving for.
- If he started another SaaS, he would build in some virality and some expansion revenue. He would also never again build a product that sends email.
- The goal is to charge more, but only to the right customer segments.
- SquadCast example (a Tiny Seed batch 2 company, studio-quality podcast recording):
  - Hobbyist podcasts (fly fishing, Dungeons & Dragons) balk at $9-14 a month.
  - Business podcasts like Startups for the Rest of Us would find $50-100 a month trivial.
  - Big networks (Gimlet, NPR, ESPN, iHeartRadio) should pay thousands a month, roughly $2-5K.
  - Ask which features or usage patterns separate these segments, so customers land in the right bucket at signup or upgrade over time.
- This covers monthly or annual pricing only. In the State of Independent SaaS report, about 85-90% of respondents are monthly or annual, about 3% pay-as-you-go and about 4% metered.

## Value metrics, feature gating and when to combine them

- Rob ranks three ways to build upgrade paths into monthly pricing:
  1. **Value metric** (his number one): the more you use, the more value you get. Examples: contacts or subscribers for Mailchimp and Drip, seats for Close, Salesforce and Pipedrive.
  2. **Feature gating**: use it when no usage number fits. Examples: a Salesforce or Zapier integration, or direct streaming to YouTube, on a higher plan.
  3. **Both together**: more common in larger companies.
- Seat-based pricing rule: only use it if two users in the same company see different things when they log in.
  - Pipedrive (assigned deals) and Help Scout (assigned tickets) pass this test.
  - Mailchimp-style tools fail it, because users can share one login.
- Castos (podcast hosting) uses feature gating without a value metric.
  - Early hosts offered unlimited podcasts and episodes around 2008-2010, which locked the space in.
  - Gated features include video republishing to YouTube, Headliner audiogram integration and advanced analytics.
  - Rob runs two podcasts on the $190 plan and Startups for the Rest of Us on the $490 tier.
- Rails Autoscale (Heroku add-on) does both neatly. The value metric is the number of dynos (1 to 3, 1 to 9, 1 to 29). The feature gate is the dyno type, since performance dynos cost more than standard ones.
- AWeber competes with Mailchimp using "everyone gets everything" pricing, which Rob calls a clever jiu-jitsu move.
- Don't combine both early. Mailchimp (sold for $12 billion), Zapier, Salesforce and Intercom all have complex pages, but none started that way.
  - Mailchimp's 2007 pricing was one plan based purely on subscribers.
  - Rob finds even Mailchimp's current page daunting, and he built an ESP.
  - Under about $1M ARR, he would sacrifice some MRR to stay simple and win customers.

## ARPC beats LTV, and why higher ARPC unlocks marketing channels

- Rob prefers ARPC (average revenue per customer) to ARPU, since "users are not customers."
- LTV is ARPC divided by churn. $50 a month at 5% churn gives $1,000. At 1% churn it gives $5,000, but that is collected over 8.33 years.
- Low churn can make LTV deceiving. Bootstrappers lack the cash to wait years, so they should focus on ARPC.
- CAC payback rules of thumb:
  - Venture-backed: spend up to about 12 months of ACV on acquisition.
  - Bootstrapped: three to six months of revenue, and he once reached seven when cash in the bank was high.
- The only usual ways to raise ARPC are expansion revenue or higher prices.
- Second-order effect: higher ARPC or ACV unlocks more B2B marketing channels. He drew the channel list from Traction by Gabriel Weinberg, the Tiny Seed playbook and his own notes.
  - About $500 a year per customer: only three or four channels are affordable. That supports a $200-300K business, but not seven figures.
  - About $5,000 ACV: roughly half to 60% of channels.
  - $25-50K ACV (enterprise): almost every channel.
- Raising prices therefore also expands which growth strategies are open to you, beyond extra profit.

## The impact of raising prices: first-order and second-order effects

- Pricing is "one of the biggest levers we have as SaaS founders." It takes only a changed number on a pricing page and in Stripe. The barrier is emotional: fear of crushing the business. Rob helps founders treat it as an experiment.
- Tiny Seed data (anonymous): after the pricing playbook month, several companies changed prices and saw a major change in their MRR graphs.
  - One company's projection without a price change was just over $10K MRR. By March of the next year it was almost $20K.
  - Rob caveats that those graphs also reflect funding and going full-time.
  - Prices can't rise infinitely. There is a ceiling for your market and product, but most founders never reach it.
- Second-order effect: "lower paying customers churn faster." Rob has said this for over a decade.
- Tiny Seed company data, segment A ($30 a month) versus segment B ($100 and up, 80% of revenue):
  - Segment A had net revenue churn of 11%.
  - Segment B had net revenue churn of -4% (net negative).
  - Rob says that single metric can mean the difference between $250K ARR and $1M ARR or more.
- He recommends segmenting churn by price paid or tier. The higher-paying customers are usually where the long-term value is.
- Gather (visual spec management for interior designers and architects, Tiny Seed batch 1):
  - It started with a one- or two-demo-close sales process and a lowest price of $29 a month, which Rob calls unfeasible.
  - They raised to $39 and $79, saw no change in conversion or churn, then moved to $99 with still no difference.
  - Today they charge $165 and $290 and are at their fastest growth rate ever.
  - Reasoning: for a 5-20 person firm running much of its workflow on the tool, $30 versus $130 is a rounding error.
  - Two effects drove the growth: higher prices, and customers who churn less.

## Tactics for raising ARPC without a headline price hike

- Reduce what a plan includes. At Drip he moved a plan from 3,000 subscribers to 2,500 at the same $49 price. Rob wanted to keep price points like $49.99 and $149, not awkward ones like $59 or $109.
- Drop the lowest plan. Hide the div, watch for a week, and usually nothing changes.
  - Don't do this if you want early adopters to enter at the bottom and upgrade over time, as Mailchimp does.
- Annual plans: Rob loves them.
  - Two months free is about a 16.7% discount.
  - A customer who pays you for 10 months up front can make acquisition cost effectively negative. With $500 CAC and $1,000 collected, you net $500 immediately.
  - Churn also drops and bootstrappers get cash sooner.
- Killing a free plan:
  - He killed HitTail's free plan, which had about 1,500 free users and had been around for five years.
  - The service was losing money with it. He comped a few exceptions, such as a professor.
  - Killing the free plan reduced server load.
  - Free users rarely convert to a $29 plan, so he generally grandfathers them.
- Wide gaps between tiers, such as free or $50 versus $1,000 or more a month:
  - He likes the idea of a "dual funnel," with many $10 customers and some paying thousands.
  - Case by case, complaints may come mainly from low-paying customers.
- Enterprise annual contracts: build in annual increases of 5% to 10% up front, for example "as we renew it'll go up seven percent." Pushback is rare.
- Add-ons versus tiers: Rob has no framework yet and says so.

## Raising prices: experiment or certainty

- First decide whether the increase is an experiment or a "certainty" (his quotation marks). He decides by gut feel. If he doesn't know, it's an experiment.
- Experiment:
  - Make it a two-minute rollback. Keep all the changes in one Git label.
  - Watch daily: traffic, trial-to-paid conversion, and conversion versus the prior week.
  - Run it for a couple of weeks to a month. He calls this a "poor man's split test."
  - True split testing is very hard. The only company he knows that did it is Zapier, which forked users after signup inside the app so pricing wasn't visible publicly.
- Certainty: he has raised prices knowing he would not roll back, even if the funnel took a short-term hit.
  - Make it a marketable event, a lesson he took from Dharmesh Shah of HubSpot.
  - Drip, 2015 tweet: "Drip's pricing goes up tomorrow. Existing customers/trials are grandfathered. If you've considered Drip, now is a good time."
  - Email existing customers (grandfathered or not), email trial users that the price will be higher if they return, and promote it to the whole marketing list.
  - Drip got a bunch more trials from this.

## Grandfathering rules, including Rob's Rule of Ten

- Ideally you would just upgrade everyone, as a restaurant does. SaaS has a contract-like expectation, so you must communicate.
- Reasons to grandfather: churn to competitors, angry customers and support burden, and brand damage from doing it poorly. On pure business terms he would raise for everyone.
- Minimum notice if not grandfathering: at least two months, with three more comfortable.
  - Three to six months works. Netflix gives a year and people are still angry.
  - Six months is long enough that people forget and assume you're raising again.
- **Rob's Rule of Ten:** if raising prices on existing customers won't grow MRR by at least 10%, it is probably not worth considering.
  - Example: at $50K MRR, growing by $5K doesn't justify the support burden, brand risk and churn. Going to $57.5K starts getting interesting, and going to $60K may be worth it.
- Never promise "grandfathered for life." You may want to stop grandfathering the next time you raise prices or sell the company. Lifetime deals belong to one-time sales, not SaaS.
- Zombie customers (inactive for 24 months): Rob would probably email everybody, but says it's the founder's call.
  - He says 15-35% of SaaS customers are zombies, and high-pressure marketing tools may see a third to 40%.
  - His own customers received a monthly invoice anyway.
- Developers tend to say "always grandfather," and salespeople "never." Rob says it is a business decision with nuance.

## How to message a price increase (CartHook example)

- Rob holds up Jordan Gal's CartHook increase as the model. It raised prices a lot, increased fees and didn't grandfather, yet landed well.
  - He grandfathered for six months, through Black Friday, since CartHook served e-commerce.
  - The post is archived on the Wayback Machine (bit.ly/carthookpricing).
- If you grandfather, you only need about three of the six points (explain the change, tell customers they pay nothing more, thank them). If you don't, cover all six:
  1. Set the stage: we're raising prices, here's who we are and how long we've been around.
  2. Give a high-level justification, for example that the product has evolved from an email service to marketing automation and provides far more value.
  3. Give specifics on who is affected and when (optional).
  4. Give more justification (optional).
  5. Say what the commitment is: you have to earn customers over the next six months so they don't churn. Treat customers as free to leave, not prisoners.
  6. Invite questions and reach out.
- The worst increase Rob saw broke all the rules:
  - It gave two weeks' notice and roughly doubled the price.
  - The email was unclear about the new price and gave no justification or commitment.
- His summary: study people who did it poorly and avoid that, and study those who did it well and copy it.
