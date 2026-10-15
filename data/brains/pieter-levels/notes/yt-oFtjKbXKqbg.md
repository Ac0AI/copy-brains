## Validate fast with a two-week build and a paid checkout

- Pieter funds nothing with VC. He designs, codes, and launches everything alone, so he has to move fast to learn whether an idea works.
- He builds a mini startup and launches within about two weeks, then checks whether people actually pay with a credit card. Signups alone do not validate an idea.
- Most ideas fail. His response is statistical: try many cheap things and expect a few to work.
- His "12 Startups in 12 Months" project capped each product at one month, with a Stripe checkout button on each. He published the results publicly (Hacker News, a blog post) for accountability.
- The hard part of a 30-day build is deciding what not to build. His rule of thumb: landing page, Stripe, the core product, and a plan for how people will find it.
- Early login was a static link with a hash. Real Google login took about a year to add.
- He says big companies are slow because of bureaucracy and legal review. He cites Google, which had the transformer tech and the data but did not ship a ChatGPT-style product.

## Photo AI and AI avatars: from a Typeform and Stripe link to a fine-tuning product

- **Path:** Stable Diffusion led to thishousedoesnotexist.org (houses), then interiorai.com (image-to-image interior redesign), then avatarai.me, then Photo AI (photorealistic photos without a photographer).
- **Interior AI:** It made $10K-20K a month within a week of launch. Pieter says it still makes about $40K-50K a month after two years.
- **Avatar launch (October 2022):**
  - He trained a model on his own face and tweeted the results.
  - Demand arrived by DM, so he made an HTML page with a Stripe payment link and a Typeform for photo uploads. There was no code behind it.
  - The first hundreds of orders were manual: download the zip, train the model, run prompts from a text file, and email results from his personal email.
  - The manual load forced him to build the real automated site.
  - He made about $100K in AI avatars and about $150K in a week, his biggest payout. He says it was "10K a day."
- **Competition:** A VC-backed studio (Lensa, which already had an app and user base) copied the feature and reportedly made about $30M. He called it a hype, and the cheesy art style was too easy for the AI to get away with. He pivoted to real photorealism.
- **Vendor risk:** His GPU vendor raised training prices from $3 to $20 once it saw his revenue, after he had been selling at $30. He moved his business to Replicate by DMing its CEO and asking for DreamBooth fine-tuning. He has trained about 36,000 models on it.
- **Training data tips:**
  - Whatever is constant across training photos (a green shirt) gets learned as part of the concept, so photos need diverse clothes, lighting, and locations.
  - He mixes full-body photos with face crops so body shape is kept.
  - Training data quality matters more than training time.
- **A/B testing on users:** With over a million photos a month, he randomly tested generation parameters (step count, sampler) on about 10% of users. He measured favorites and downloads, checked significance, then rolled the winner out to everyone. Users are told sampling happens.
- **Safety:** Photorealistic fine-tunes carry porn in their base. He prompts out nudity and runs Google Vision to check every image for NSFW before showing it, because journalists complain.
- **Honesty:** "AI startups all act like it's perfect," but results are hit or miss (about 50/50 early on), and people still sign up.

## Boring stack, instant deploys, and automation

- **Stack:** Vanilla HTML/CSS, jQuery, PHP, SQLite. He says it was accidental, since he never found time to learn Node.js.
- **On frameworks:** He is suspicious of well-funded frameworks and hosting platforms that pay developer influencers. He asks "did you make money with it? Did you charge users?" He still says to use a framework if it solves a direct problem.
- **Tools:** The IDE is not important. He uses VS Code (previously Sublime Text). He builds with what he knows, and he can always rewrite later.
- **Deploy flow:** He edits CSS or PHP, presses Command+Enter, and it pushes to GitHub. A webhook then pulls to the server and it is live in about a second or two. He deploys straight to production with no staging server. PHP Lint and djLint catch errors.
- **Speed:** He had about 37,000 git commits in the last 12 months. He sometimes times himself fixing a user-reported bug in about two minutes.
- **Automation:**
  - Everything runs on cron jobs (`sudo crontab -e`, hourly PHP scripts).
  - Nomad List meetups are self-serve: a page to organize one, an automatic tweet, and DMs to nomads in that city. About 30 meetups a month with no effort from him.
- **Monitoring:**
  - A healthcheck.php page runs database checks (e.g. data sanity, signups in the last 24 hours) and prints a red X or green check.
  - UptimeRobot opens the page every minute and keyword-checks for the red X. Failures send an alert to Telegram.
  - Every JavaScript and PHP error is also sent to Telegram, which gets him toward zero errors.
- **AI moderation:** GPT-4 reviews Nomad List city reviews and moderates a chat of about 10,000 members. He is alerted only on rejections. He says it understands humor and double meanings.
- **Costs:** He keeps profit margins high and has no employees. He emails AI vendors for discounts, and 25-50% discounts are common.

## Nomad List, Hoodmaps and RemoteOK: start scrappy and let users build the data

- **Nomad List:**
  - It began as a public, editable Google Sheet of cities with internet speed and cost of living, shared on Twitter.
  - It was then turned into a website. Seeing it go viral with few followers showed demand.
  - The rating is now mostly national public data sets (World Bank, UN). Crowdsourced ratings were skewed because some groups boosted their own country.
  - Members' check-ins still drive about half the ranking. The site has roughly 30,000-45,000 members and has run for almost ten years.
  - It is his baby, so he doesn't want to sell it.
- **Hoodmaps (built in about a week):**
  - Users draw colors on a map to label neighborhoods: tourist, hipster, rich, business, residential.
  - He used HTML5 canvas, normalized coordinates by removing decimals, and a cron job picks the most common color per cell.
  - He added tags with upvotes (his model came from Reddit).
  - Mapbox once billed him $20,000 after a viral spike, so he later moved to an open-source map platform.
  - It makes no money, and he says it is fine: "you don't need to monetize everything."
- **RemoteOK:** A spin-off from the Nomad List jobs page. At the 2021 peak it made about $140K a month from job posts, with $299 entry listings, upsells such as rainbow colors and background images, and a few $3,000-4,000 posts. It later fell to about $10K a month and is now back to about $40K.
- **Chrome extensions and plugins:** Pieter says people don't pay for plugins, so make an extension a feature of a product.

## Pricing, distribution, and feedback

- **Charge from day one:** He says free users rarely convert and abuse AI apps heavily. Without VC money, he charges at once.
- **Price:** He recommends more than $10 a month, ideally $30 or more per user, since indie makers can't match Netflix scale. 1,000 users at $30 is $30K a month.
- **Community:** Paying users form a higher-quality group. A Discord with developers and users together is now normal.
- **Distribution:**
  - Organic wins. If you use Reddit, solve a specific problem for a subreddit rather than posting a startup pitch.
  - TikTok, Reels and X test content on a small group (about 300 people) and promote it by performance, not follower count.
  - One TikTok by a random creator added about $20,000 a month to Photo AI. Some AI influencers charge about $4,000 after a video goes viral.
- **Haters:** He treats haters as useful, because some have a point (hard signup, bad data). He has muted about 15,000 accounts, and he mutes rather than blocks.
- **Building in public:** He finds personal tweets more engaging than single-topic ones.

## Finding ideas, learning, and working habits

- **Ideas:**
  - Note daily annoyances and travel arbitrage, such as WeChat-style super-apps seen in Asia.
  - He keeps ideas in Telegram saved messages and used Trello earlier.
  - Technology-first ideas, like Stable Diffusion, are riskier ("solution looking for a problem").
  - He thinks first ideas can be good because they come from subconscious processing.
- **Learning:** He learns by acting. He asks ChatGPT, copies the code, and tweaks it. Bootcamps do not work well, in his view. He says AI is a better use of time than a front-end framework.
- **Work style:**
  - One MacBook screen is enough. He is "suspicious of more," and he avoids gear acquisition syndrome.
  - Constraints make him happier than freedom. For new projects he wants uninterrupted time and sometimes pulls all-nighters.
  - He works with industrial techno and strong V60 coffee.
  - He uses a $1 fine per phrase spoken in 45-minute cowork sprints.
- **Team:** He rarely works with others. He is building an AI startup with friend Andre (Andre codes in Ruby; Pieter handles product direction and Twitter). He once hired a Python/AI developer for 10 months because he couldn't do Python.

## Exits and staying small

- He has never sold a company. In acquisition talks, buyers dragged on for 6-12 months and then cut the price.
- His products have about 90% margins and run mostly automated. Selling at 3-5x profit or revenue is equivalent to waiting 3 years, so he doesn't sell below a high multiple. Only 6-8x would tempt him.
- He thinks AI products like Photo AI are easier to sell than Nomad List.
- He is wary of retirement and the emptiness after exits, so he prefers to keep building.
- Founders with large funding told him they would build like him next time because it is "more fun, more indie, more chill." They don't enjoy being managers.
