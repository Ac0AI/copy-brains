## Digital nomads as a market: sizing and profile

- Pieter presented a prediction about 9 years ago of 1 billion digital nomads by 2035. He says people called him crazy until Covid made remote work normal.
- His 2024 figures: about 13% of the world works remotely, roughly one billion people out of about three billion workers. He estimates 10-20% of remote workers are digital nomads, so about 100 to 200 million people working from other countries on and off, not full-time.
- A decade earlier this was a "micro subculture"; now it is massive.
- Profile from his Nomad List statistics page: most male nomads are software developers, most women work in marketing, and 66% are single.
- They are not poor backpackers. Average income is about $125,000 per year, 90% are university educated, and 34% hold a master's degree.
- He sees this as a very attractive, already-mobile, high-income audience for any "network state" that wants to collect taxes.

## Building data products from user statistics (Nomad List)

- Nomad List has a statistics page inspired by OkCupid's dating statistics, which were removed after the match.com acquisition. It covers differences between men and women nomads, political leanings, diet (meat or vegan) and more.
- Example finding: about 75% of women digital nomads are progressive, versus about 45% of men. Few nomads are conservative.
- He maintains the data by hand ("Grind Mode on these spreadsheets") but only needs to refresh it about once a year, for example by downloading World Bank or IMF data and normalizing it.
- He notes that data sites that look simple are "deceptively hard". A passport index has about 200 countries squared, so about 40,000 cells that all must be right. His visa filter has the same problem, because rules change every few months (the EU recently added three countries to Schengen).

## Keeping a one-man portfolio of apps running

- He runs Nomad List, Remote OK, Photo AI and several other AI apps largely alone, plus Daniel, a part-time server admin on an SLA who only comes online if the server dies and does Linux upgrades.
- His principle: be scrappy and ship fast, but never be sloppy on security. "You cannot do security wrong" because you hold user data.
- His stack is vanilla PHP. He argues it rarely changes, so there is little maintenance. Major PHP upgrades needed only small fixes, and he says the language is now professional.
- He starts with everything in one file and splits later. He writes vanilla code and improves it slowly.
- He now uses Cursor and other AI tools heavily to write code.
- On Photo AI, he notes the AI photos keep improving. His own face shows up in AI photos more often because they look a little better than real life.

## Product idea: alerts for tax residency and visa limits

- Nomad List sends a bot message when a user is about to become tax liable in a country within the next 30 days. This works because users log their trips.
- He says users love it. Just before the 183-day or 90-day threshold, the bot says "get out of the country".
- Visa questions are a core need. Example: a Dutch person with a German girlfriend asks which countries they can visit.
- A related concept is the "perpetual traveler": rotate among about six countries every 60 days so you are not a tax resident of any of them. He sees that as an app idea, but notes the cost is difficulty keeping relationships and friends. He thinks it suits people in their 20s.

## Choosing where to live: friends first, economics second

- He pushes back on moving somewhere just for 0% tax (such as Puerto Rico). His order: first pick a place that is actually nice to live, with your friends near you, and only then add tax benefits.
- He moved essentially all his friends to a beach village on the Portuguese coast, with friends five minutes away on foot. He says this changes your happiness completely.
- He observes nomad scenes split into different tribes over time: Bangkok differs from Bali, and Canggu is more Western. During Covid there were "ski nomads" who moved to US ski villages to snowboard and work remotely.
- He notes you can now either move to where your people are, or find your people online and then move.

## Ambition and culture as a location factor

- He says Europe feels less ambitious than Asia. In northern Europe he cites a "Jante's law"-style attitude (Danish/Swedish: "you think you're better than us").
- If you start a business in Europe, people "immediately look for the problems"; in Asia people say "let's start a business."
- He sees a brain drain from Europe: founders move to the UK, US or Asia because regulation is heavy.
- He made the "make Europe great again" hat as a joke to push Europe toward being better for startups. He prefers iterating on what you have over resetting from zero, and would like founders to move back.
- He notes that when he deregistered from the Netherlands, it felt scary, as if he were an "international vigilante". He observes governments cultivate that fear, and cites exit taxes such as Norway's.

## Crypto payments and the network state critique

- He owns crypto but does not use it daily, so he is "not completely convinced yet". He also questions the physical "declare a state" final step of the network state concept, asking who will actually show up, and noting a proposed Egypt-Sudan network state would need both countries.
- On payments, Balaji urged building crypto wallets into products. Pieter's practical objection: it is hard to implement because he already runs Stripe, and supporting multiple processors is a burden. He suggested users can use a Coinbase card instead.
- Balaji advised re-evaluating every three to six months, since USDC on Solana and Base now enable micropayments. Pieter noted Stripe has added crypto and he is waiting for it to appear in the "enable payment methods" settings.
