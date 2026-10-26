## How Quitter's onboarding and hard paywall drive conversion

Alex Slater (19, product and dev, with Chris on design and Connor on growth) built Quitter, an app to quit porn. It reached about $250,000 in a single month, four to five months after launch. Alex's view: the best app and branding are wasted without a good onboarding flow. His flow:

- A 12-step quiz that doubles as a diagnosis (history of use, escalation, symptoms), so the user feels they are building their own plan.
- A symptom picker (low drive, no interest in girls, etc.), then testimonials, then a list of porn's side effects and the benefits of quitting.
- A review prompt before the user has used the app. Most skip it, but "a select few people just click five stars", which adds up.
- A personalised paywall card using the user's name: "Hey Alex, it's time to invest in yourself". Framing the price as an investment in yourself is deliberate.
- Mixpanel showed roughly 98-99% step-through on every onboarding step.

He sells the outcome, not features. The flow never explains the app's contents; users see the app through App Store screenshots, influencer content and ads.

## Why a hard paywall and a long onboarding

- Quitter is a hard paywall at $12.99/month or $45/year, shown as "$20 or $12.99 a month". Many buy yearly, so cash comes in upfront and is reinvested into marketing.
- About 15% of downloaders convert.
- The team tried a free/premium model first. Activity on the app dropped significantly: "no one used the app when it was free, everyone used it when it was a hard pay wall".
- Paying creates commitment, so users value and use the product more.
- Alex claims that without the long onboarding and hard paywall they "wouldn't have had 99%" of today's revenue, and that a straight-to-product freemium version would have made maybe $10K.
- The length filters out unserious users; serious ones finish and pay. Too short fails.
- The flow works like a sales call: ask questions until the user tells you why they need it, then the sell is easy. He compares it to VSLs and landing-page quizzes.

## How they built the onboarding

- Early on they studied the top-earning apps (those making $5-6M), screenshotted every step, lined them up in Figma, and ripped the pattern for their niche.
- He advises others to do the same, adapted to their own niche, rather than reinventing the wheel: "All these million dollar apps have done the research and testing for you."
- Superwall handles the paywall, so they can A/B test pricing and design on the fly. Superwall later used Quitter's paywall as a template on its site.
- Mixpanel tracks onboarding drop-off.

## Product design for retention

- Started as a simple streak timer, then added a community, breathing exercises, 20+ tools, an AI therapist ("Melus") and a resources library.
- A panic button vibrates the phone and shows the user's own reason for quitting. A tree grows as the streak lengthens, and users don't want to cut it down. There are milestone badges and a recovery progress bar.
- On first entry users get a to-do list (journal why they quit, post in the community) to build retention. The community is the biggest moat: "the tools can become defunct but the community stays forever."
- Referral rewards ($5 per friend) brought few downloads because the product is too personal to share. Organic growth comes mainly from ranking first for "quit porn" style App Store searches.
- Cancellation or deletion triggers a feedback form feeding a feedback feed. Users who suggest an implemented feature get $100.
- Design: all black for a premium feel, DM Sans, and spacing and text sizes in multiples of 4 (8px from borders, 12/16/18 text). Alex says polished design makes people more willing to pay.
- The tech stack is Swift, ChatGPT-assisted coding, Firebase and Figma.
- They chose the name Quitter because "NoFap" was trademarked, and wanted the SEO benefit of an app name matching the movement.

## Influencer distribution and deal structure

- The team started influencer spend with $3,000, which became $37K in the first month.
- Target creators in adjacent niches: religious (e.g. the devil and lust), fitness/testosterone, and self-improvement/semen retention. Each gets its own pitch angle.
- The pitch is the outcome, not the action: higher energy, confidence with women, becoming a man.
- Deal structure:
  - Four videos per month (Instagram and TikTok, so eight posts) with a view guarantee, e.g. 500,000 views for about $1,000.
  - Pay 20% up front and the rest after the views, funded by Apple's payouts, which is how the $3K was stretched.
  - If the creator misses the guarantee, they keep posting until they hit it, or the contract is pro-rated.
- Pricing uses an internal CPM of roughly $2-3, never shared with creators. The pitch is a flat retainer based on expected views; creators with egos need to be handled.
- Contracts include usage rights so the videos can run as ads.
- Ripped creator videos are the best-performing and cheapest ads.
- One viral video had 9.9 million views, doing $40K in a day and $100K over about 65 hours. That creator was paid $3 CPM for a guaranteed million views plus a bonus of a few grand.
- Attribution is hard since many people just search the App Store, so ROI is a back-of-napkin estimate.
- Videos must show the app. Videos with millions of views but no app shown brought in only about $2,000.
- He cancelled a roughly $10K contract because the creator only wanted a mention 1-2 minutes into the video.

## Outreach system

- Message every creator through DMs, a consult call if they sell one (he paid about $50 for the first religious creator, and wasted about $150 on others), and email.
- Opening line is "paid promo", and they send from the verified brand account, which bumps the message in the inbox.
- Keep it short: who they are, the outcome, social proof (100,000+ users), and "reply or send your number".
- Don't state the price over message. Get them on a call, where they are in the moment and it's easier to say yes. A text gives them room to think and negotiate.
- Volume matters: the first 100 may not reply. A VA in Pakistan (found via Fiverr four years ago) sources creators into a Google Sheet and DMs them.
- Pitching also appeals to mission: helping people struggling with a problem in their audience.
- Many creators who beat porn addiction want to help others.
- Ops stack: Grow (creator contracts and payouts), Notion database, Zapier onboarding email, agree.com contracts.

## Scaling: paid ads, virality and brand

- Sequence: influencers first to bootstrap, then paid ads (about $40K/month spend returning 3-4x ROAS), then organic. Friends make hundreds of thousands a month on organic alone.
- Next moves: larger creators and podcast sponsorships, church and diocese partnerships, comedy skits, and viral stunts. Having a 100K day from one viral video showed how valuable virality is.
- Purple branding is intentionally the opposite of the industry's orange.
- Possible stunts include throwing purple paint at porn conventions, or a satirical tweet about buying and shutting down PornHub.
- Alex compares this to Liquid Death-style brand building.
- Retention is not a focus yet: they sell mostly yearly plans, so churn matters less. The idea is to build authority with studies and neurologists, which could also support high-ticket offers.

## Advice

- Everything must be holistic: product, onboarding, design and distribution all have to work together.
- The repeatable loop: pay creator, creator gets views, views drive downloads, downloads drive revenue, and revenue is reinvested into more distribution.
- Evaluate whether influencers actually exist in your niche (e.g. AI writing tools rely on organic faceless content instead). Test channels, then hammer what works.
- Don't procrastinate: "just go send DMs to 2,000 influencers, and the next 2,000 change it up."
- Make people problem-aware, then solve the problem.
