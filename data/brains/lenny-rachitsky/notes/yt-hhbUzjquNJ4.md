## How Lenny's marketplace research was built, and its caveats

- The research comes from interviews with founders and early employees of the biggest marketplaces: about 17 companies and about 24 people. Lenny credits the interviewees for the insights and says he compiled them into a framework.
- Before Airbnb (7 years as a PM) he ran a startup, Local Mind. At Airbnb he led supply growth for about 2.5 years, worked on booking conversion for 2-3 years, and also worked on community, Superhost and reviews.
- A marketplace connects people who have something with people who want it, and helps them transact. Marketplaces attract investors and founders because of built-in network effects (more users and especially more supply make it better for everyone, especially new users). They also have high barriers to entry, and they are scalable because the company doesn't own the supply.
- Caveat 1: none of the tactics work without product-market fit. "A marketplace's success is 90 percent about whether people want it."
- Caveat 2: this is past experience recalled from memory. Copy how founders thought and solved problems, not the specific moves.
- The framework has two phases. Phase 1 solves the chicken-and-egg problem. Phase 2 scales.

## Phase 1, steps 1 and 2: constrain the marketplace, then pick one side

**Constrain.** Build the smallest possible version of the marketplace, constrained by geography or by category.
- Most of the 17 started in one to three markets. The rest constrained by category.
- Rule of thumb: if the business needs real-world meetups, constrain geographically. Otherwise constrain by category.
- Geography examples:
  - Rover started in Seattle, which was dog-friendly and full of tech workers, and Amazon was dog-friendly.
  - Instacart picked markets where winter was coming.
  - OpenTable needed 50-100 restaurants in one part of a city before supply felt sufficient.
- Category examples:
  - Eventbrite started with tech events and tech mixers.
  - TaskRabbit started with IKEA assembly, cleaning and moving help. Lenny understands they now think they should have been narrower.
- Thumbtack is the exception. People need a plumber or electrician about once a year, so it launched every category across the US to make usage frequent. It worked, but took a long time.

**Pick a side.** About 80% of the marketplaces focused on supply first. Only three started demand-first.
- Supply-first reasoning: supply creates demand. For Uber the priority was more drivers. DoorDash looked at competitors and added restaurants and delivery people first. The winners had all the supply, and the product mattered little.
- Demand-first cases all had easy supply:
  - Rover's pitch to sitters: "earn $50 watching a dog whenever you want."
  - Zillow bootstrapped from existing public housing data.
  - Patreon thought it was a marketplace, but the demand side wasn't real. Creators brought their own fans. So it dropped the demand side and became a SaaS tool for creators, closer to Shopify.
- Lessons:
  - If you can give supply an easy, flexible task with meaningful income, you will probably hit a demand constraint.
  - Be honest about whether you are actually a marketplace. Sometimes you want to be one, but nobody wants what you sell.

## Phase 1, step 3: building early supply

Supply always comes first, because demand needs products on the shelf. Of 12 supply levers, the top three were:
1. **Direct sales** (door-to-door, direct email, calling). OpenTable walked from restaurant to restaurant pitching its product. Airbnb also leaned on direct outreach to homeowners.
2. **Piggybacking** (pulling people from another platform). It was almost always Craigslist. Uber and Airbnb both used it for supply.
3. **Referrals** (paying users credit or cash to bring more users). Big for Lyft, Uber and Caviar. 5 of 17 found them useful.

Others:
- **Word of mouth.** OpenTable restaurants talked to each other. About 36% of Eventbrite's supply came from word of mouth. Patreon creators told other creators.
- **Subsidies.** Lyft and Uber paid early drivers a guaranteed minimum income, then stopped.
- **Single-player mode** was rarer than he expected. It means a tool useful to one side before the other shows up. OpenTable started with a reservation system that was the best way to take bookings, though nobody was booking. It sold that, filled up with restaurants, then added demand.
- **Performance marketing** (Facebook, Google Ads) was used for supply only by Uber and Lyft.
- **SEO** for supply was used only by Eventbrite, which published white papers and content for event creators on how to run an event and sell out tickets.

The median company used just 2 supply levers, about 2.5 on average. Lenny's takeaway: don't try all of them. Focus on the few that really work.

## Phase 1, step 4: building early demand

Of 12 demand levers, the top three were:
1. **Word of mouth** by a wide margin.
   - It isn't something you can pull, but it signals strong product-market fit.
   - Lyft grew its mustache so people would talk about it.
   - OpenTable grew this way.
   - At Airbnb a survey found about 50% of growth came from word of mouth. It made everything look good.
2. **Supply-driven demand.** This is a superpower if your marketplace allows it.
   - DoorDash restaurants tell their customers to download DoorDash, and a sign in the restaurant says to order online through it.
   - Eventbrite organizers email their whole lists.
   - Etsy sellers buy from Etsy because they need materials for their own products.
3. **SEO.** 7 of 17 companies relied on it.
   - Thumbtack got 80-90% of growth from SEO by building pages for plumbers and electricians. People search "I need a plumber in San Francisco."
   - SEO was Grubhub's #1 lever, about 30% of its users. Performance marketing was a fourth.

Other levers:
- **Promoted tweet (Breather, a meeting-room marketplace).** The founder promoted "we're launching in New York, DM me for early access." It drew many requests and became very cheap because of the engagement.
- **PR.** Big for TaskRabbit and Zillow.
- **Sales.** Useful for only a few.
- **Loops** (new users bring more new users):
  - Grubhub scanned restaurant menus and put them online. Searchers found the menus and were converted to phone orders. Then Grubhub told the restaurant about its demand and pitched joining. More restaurants meant more menus and more traffic.
  - On Etsy, buyers and sellers buy their own stuff.

## Phase 2: knowing whether you are supply- or demand-constrained

This constraint isn't permanent. Roughly 40% of companies were always supply-constrained. About 40% were in between, depending on market and time of year. Very few were always demand-constrained.

- **Always supply-constrained:**
  - DoorDash needs more restaurants.
  - Uber and OpenTable are the same.
- **Demand-constrained:** TaskRabbit had a waitlist and began charging to sign up as a tasker.
- **Companies built their own diagnostic models:**
  - Grubhub ranked all its markets by orders per restaurant and focused on adding supply in markets with the highest ratio, meaning more restaurants would spread existing demand.
  - Thumbtack learned that fewer than 3 results for a plumber in a market hurts conversion and NPS, and more than 3 does much better. Its goal became at least 3 plumbers, electricians and painters in every category in every market.
  - At Airbnb, a market's occupancy rate was the signal. Above a threshold, say 70% booked on a given day, you assume supply constraint even if it isn't 100%.
  - At Uber, Friday nights were badly supply-constrained. A GM manually promised to double driver earnings on Friday nights, supply surged, and it later became surge pricing in the core product.

## Phase 2: scaling growth levers and keeping quality up

**Growth levers at scale.**
- Only about 8 levers matter at scale (versus 12 each for supply and demand early). They apply to both sides.
- **Performance marketing** becomes the most popular. About 50% of Uber's growth came from it, and it was also huge for Zillow.
- Two new levers appear:
  - **Geographic expansion** was a top-2-or-3 lever for many.
  - **Conversion optimization** won't 10x you, but it improves growth incrementally. It worked for Etsy and Zillow.
- **SEO** is the fourth most common long-term. OpenTable started late and it became very successful. Etsy's millions of listings made SEO a major driver.
- **Referrals** became popular: about 10-15% of growth for both Uber and Airbnb.
- There is no silver bullet. Early on companies focus on 2-2.5 levers. At scale it spreads across 3-3.5 medium levers.

**Quality at scale.** The most common methods:
- Set standards and penalize bad supply. Uber deactivates drivers whose ratings fall below a level.
- Manually onboard supply with a checklist: great photos, great titles, right price.
- Run a review system.
- Use search ranking to push good supply up and bad supply down. This was huge for Rover and Airbnb.
- Screen at signup:
  - TaskRabbit used a mini personality test. People who are service-oriented and want to please made good taskers.
  - Rover asked "Where does your dog sleep at night?" An answer of "in my bed" signalled a great sitter, and those sitters were ranked higher in search.

## Trust, quality and engagement at Airbnb

- **Trust.** It matters most when the marketplace puts people in risky situations (Airbnb, Uber).
  - Guests: Airbnb reviews were very powerful ("others have stayed here and had a great time"). Word of mouth from friends reinforced it.
  - Hosts: the host guarantee was big, with $10,000 of protection first and then $1 million if something goes wrong.
- **Quality at scale.** Airbnb set a minimum quality bar for hosts. It removed hosts who fell below it, with warnings and education first.
  - Lenny says removing bad hosts was the single biggest quality lever. If they keep getting bookings, they keep doing what they're doing.
  - Early on, manual onboarding was very valuable: an ops person helped set up listings and made sure they looked good. This also built trust, because the places didn't look like somewhere you would die.
- **Repeat engagement.** Airbnb tried many things, including emails about discounts and new homes. Nothing was incredibly powerful. People take only a couple of big trips a year and can't be forced to travel more. His answer: it always comes back to the value you give your audience, not just more emails, pushes and texts.

## Lenny's advice on stakeholders, PM careers, investing and Clubhouse

- **Stakeholder management** (when many product teams work together):
  - Understand what the other person is trying to achieve and show how your work helps them reach it.
  - Over-communicate. Involve people early, ask their opinion and keep them updated, so they are never surprised.
  - Sort stakeholders into tiers: decision makers, people who just want to stay informed, and people who'd say stay out. Ask whether they really want to be involved.
- **Getting into growth PM.**
  - Find an opening. Lenny told his Airbnb manager he wanted a growth team, and an opportunity came up.
  - Most of product management is growth anyway: moving a metric through funnel optimization, performance marketing and referrals.
  - Find a growth person at your company and learn their skills and vocabulary, for example by running Facebook ads for your own project.
- **Four ways into PM:**
  1. Move internally from engineering, design or data. This is the easiest because of the support.
  2. Take a junior PM or APM role at a big company. An MBA helps but isn't essential.
  3. Join a startup that needs a PM.
  4. Start a company that gets acquired. This is how he did it, and it is probably the hardest.
- **Evaluating early-stage startups as an investor.**
  - Look at the team: how good, how fast, how experienced, how well they work together.
  - Look at market size and how much they have already learned (research, design, prototyping).
  - Look at the business model: margins, network effects, and how it scales.
  - "Wait for a team to come together" rather than waiting for a great idea. He has seen the same idea fail with one team and work with the best team a month later.
- **B2B marketplaces.** His research is all B2C because few big B2B marketplaces existed (Alibaba, part of Amazon). He is excited by newer B2B marketplaces such as restaurant repair and grocery supply for stores.
- **Clubhouse.** Consumer apps are very hard because attention is scarce. Clubhouse focused on tech and VC users and created FOMO on Twitter ("you're not on Clubhouse yet?"). It still needed real product-market fit. The open question is whether it can expand beyond that niche.
- **Newsletter.**
  - It is an advice column. Readers send questions and he picks topics he is excited about, with paid subscribers' questions moved to the top. Once a month he does a deep dive, with a quicker answer every two weeks.
  - Growth is "90 percent" creating valuable content and "10 percent" optimizing growth (Twitter ads, telling friends, pinging people with followings).
  - To start without credentials, create real value first, then tell interesting people with audiences.
- **Local Mind and the Airbnb acquisition.**
  - Local Mind was a location-based app for asking people anywhere what was happening somewhere. The idea came from the Foursquare API and check-ins era.
  - The Airbnb path began when he met Airbnb's head of product at SXSW in Austin. A year later Airbnb came back with a problem to solve, which led to a partnership and then an acquisition.
  - The experience didn't help much at Airbnb, because he was moving from engineering to PM and didn't know what he was doing at first.
