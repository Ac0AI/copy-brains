## Growth is quadratic, not exponential

- Jason argues that even hypergrowth companies don't grow "exponentially." Exponential means growth multiplies by a constant factor each period. He says "percentage growth" and "CAGR" implicitly assume this, and that framing misleads.
- His thesis: "High-growth companies grow quadratically, not exponentially." Quadratic means the absolute amount added each period rises by a roughly constant step, so year-over-year change in absolute numbers is linear.
- He tested this on public data: Facebook MAUs, Slack, Dropbox, Trello, Lyft, HubSpot and Apple. Facebook MAUs were exponential only in the first four years, then close to linear for nearly twenty. Slack showed early quadratic growth, then years of linear growth. Dropbox registered users grew nearly 100M per year early on.
- HubSpot example: the slide said 41% CAGR, but yearly growth actually fell from about 60% to about 30%. In absolute dollars it added $17M, then $23M, then $28M, then $34M, so each year added $5-7M more than the last. A best-fit parabola matched revenue almost perfectly.
- His claim is that the right language and model lead to the right analysis and action for operators, analysts and investors.

## The Elephant Curve: the life of one marketing campaign

- Jason says a marketing campaign follows a consistent shape, which he names the "Elephant Curve." There are four phases:
  - **Foot:** the campaign launches but is ineffective while you figure out design, messaging and calls to action. Sometimes you never solve it and abandon it.
  - **Rise to a natural level:** once solved, it quickly reaches a steady contribution, such as sales per week. The level depends on ad inventory, budget, audience receptivity and how well the audience fits your target market.
  - **Optimization:** you A/B test your way to incremental gains. People also need multiple exposures before acting.
  - **Decline:** this has three causes, covered in the next section.
- Using a model product ($10/month, 1% monthly cancellation), cumulative revenue from one campaign accelerates while the campaign is solved, grows roughly linearly while optimized, then sags (while still growing) as the campaign declines and cancellations pile up.

## Why campaigns decline

- Jason lists three causes:
  - **Audience saturates.** Everyone in the channel has seen the ad more times than needed, and new people are few relative to those new at launch.
  - **The channel declines.** A site over-monetizes and loses readers, an event loses favor, a newsletter or podcast changes or goes closed.
  - **The auction becomes uneconomical.** In Google and Facebook ads, affiliates, and limited newsletter or podcast slots, the winner is whoever pays the most. A price that works for one bidder is laughable for another because of better conversion, higher revenue or profit per customer, or treatment as a loss leader.
- He notes it's hard to tell a failure to build good copy and funnels from a channel that is a bad fit. He suggests retrying previously failed channels every few years because digital marketing evolves fast.

## Stacking campaigns and products makes quadratic growth

- Marketing teams keep adding campaigns of different sizes and lifespans. Each is roughly linear once running, and "adding more linear things over time" is a quadratic. Stacked together, they trace a "wavy quadratic," with a burst each time a new campaign is unlocked.
- Product lines follow the same shape. iPod sales match an Elephant Curve. Apple's total revenue is quadratic with a one-time bump from the iPhone, and each product sits at a different lifecycle phase.
- He says it's rare for a second product to dramatically outpace the first, and even Google, Amazon and Facebook didn't. Google's revenue is 82% advertising, 71% of it from search. Apple's revenue is 60% iPhone.
- Examples: Basecamp (then 37signals) built several products over nearly two decades, but only the first was worth working on, so it divested the rest and rebranded as that product. At Smart Bear, his own company, the second product ended up 95% of sales and they also went to a single product.
- Growth decay: the data suggest a company's growth rate tends to be about 85% of last year's (R² = 0.51, "a tendency but far from a law"). A company decaying at 85% produces a curve whose first sixteen years fit a quadratic with R² = 0.999.

## Viral, word-of-mouth and trend products: logistic, then quadratic

- Jason names three mechanisms that should be exponential in theory:
  - **Virality:** the product is unusable unless you invite others (chat, social, peer-to-peer payments, multiplayer games).
  - **Word-of-mouth:** sharing is built in and encouraged but not required. He cites Wordle, which went from 90 players in November 2021 to 300,000 in December to 2,000,000 in January, and consumer marketplaces like eBay, Airbnb and Uber.
  - **Hot trend:** "everyone" in a defined market will buy (smartphones, search, cloud, online shopping).
- In practice these follow a logistic curve: exponential while far from the market limit, flattening to linear around 25% penetration as the easy customers are used up, then leveling at the carrying capacity. He shows this for Twitter, Pinterest, eBay buyers and sellers, smartphone sales and usage (saturating at 55% of web traffic), and the internet (66% global penetration, in linear mode for years).
- Summing many logistic curves across products and geographies gives a linear user total, and the yearly change in users is again an Elephant Curve. Facebook Messenger shows this in the US versus the world. Global internet users sum to a quadratic from many countries' logistic curves. Netflix's US growth slowed by 2014 while outside-US growth stayed linear, and by 2023 the full Elephant shape appeared globally.

## Market share, carrying capacity and revenue per user

- Facebook's MAUs plotted as a share of global internet users form a full Elephant Curve: logistic trunk, optimized back, declining rump. Absolute growth looks linear because the market itself (people online) is still growing, at about 7% a year, the same as Facebook's MAU growth.
- Jason says this is why large companies spend billions to enlarge the market, since that's one of the few ways to grow other than raising prices. His examples are Google's Loon balloons and Facebook's Free Basics, which he describes as a way to raise Facebook's carrying capacity (and calls "digital colonialism").
- Revenue: Facebook's revenue per user is also Elephant-shaped (mostly linear). Users times revenue per user, two roughly linear curves, gives a quadratic, not an exponential, in revenue.

## How to model growth and what to do

- Jason's modeling method is to forecast components separately, then multiply:
  - Estimate the growth curve of the whole market (Elephantine, or just logistic for trends unlikely to decline).
  - Estimate your market-share curve. Don't assume you'll never decline relative to the market: "are you better at execution than Facebook?"
  - Estimate monetization (revenue per customer). This may not be Elephantine. Facebook and Google have moats and can keep raising prices, but a product in a commoditized market may never raise prices and must grow through usage, companion products, new verticals or geographies, or new markets for its technology.
- Marketing questions he raises:
  - Is the AdWords campaign topped out, and when should you move to new channels?
  - Is it worth being the "irrational bidder" who pays more than immediate payback because of value beyond it, and how do you quantify that?
  - To hit this year's goal, which existing campaigns will grow, hold or shrink, how many new successful campaigns are needed, and so how many must you start since not all succeed?
  - Should you enter newer channels before others saturate them and make clicks "both expensive and more rare"?
  - Would one large move (a big new geography, a reseller channel, a new pricing model) beat many small campaigns, even at 10x the effort and time?
  - Or the reverse: pull funds when you smell decline, accept a short-term hit, and stack many small efficient campaigns so growth is less sensitive to any one decline.
- Product advice:
  - A feature on an existing product rarely produces major growth. Significant growth comes from raising carrying capacity or opening a new avenue.
  - Early on, win market share in one space (the first Elephant Curve). After maturity, something drastic is needed: whole new products or updates big enough to reach new markets.
  - Because the second product rarely matches the first, you need multiple new products, with serious investment, parallel efforts and the willingness to kill what isn't working.
  - Word-of-mouth growth beats marketing-driven growth on cost per customer and because it scales automatically with the company, so work on building it into the product rather than leaving growth to marketing.
