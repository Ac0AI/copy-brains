## Shipping crude products and ignoring "enterprise" standards

- Pieter argues that dev culture pushes people to build things in a "proper" way (complex code, perfect design, big-company look), and that this keeps small indie devs down.
- His analogy is a bakery: if people like your bread, they will come to a crappy shack and pay in nickels. "You can get a cash register later."
- The first version of Google also looked bad, so every first version looks bad.
- He built Remote OK as a single PHP file for a long time. He tweets self-deprecating jokes about how bad his code is, and uses that as marketing to show that code quality is not what matters.
- His stack is vanilla PHP, vanilla JavaScript with jQuery, no frameworks, SQLite, and Sublime Text as the editor.
- He built the instant messaging feature for Nomad List in about three hours with plain AJAX, then improved it slowly.
- Enterprise and freelance work focus on engineering and checklists. Entrepreneurship focuses on the customer side: what to build, how to get market fit, and how to get paying users.
- "Planning is procrastination." Fear of failure makes people prepare more instead of launching. Everything is bad at first, so launch and redo it.
- He learned to code on the spot, just in time. Early Nomad List loaded in 32 seconds because it pulled data from Google Sheets into JSON. It now loads in about 600 milliseconds.
- He did not know SQL when he started.

## Artisanal advantage over big companies

- Pieter argues that people like artisanal products and small-team websites, and that companies like a direct line to the maker.
- Remote OK customers choose it over big boards like Indeed because they can email him to ask for a feature, such as a dashboard of all their jobs. He says he'll build it next month, which corporates will not do.
- Corporate answers like "maybe in Q5" are what people dislike. Small teams can be fast and give white-glove service.
- Authenticity is what people are "desperate for". Not everyone has to like the product: "80% of people don't like me... the 20% that does, they really, really like me." Don't try to appeal to everybody.
- He notes that everything big started small (Whole Foods started as a hippie vegetable store). "If you wanna get big, you need to start small."
- Bigger companies later buy small brands to buy access to the market.
- He says artisanal founders often burn out after about 10 years and sell, and the product then becomes corporate.

## Pricing Nomad List: lifetime vs monthly, and the price ceiling

- Pieter's pricing logic is to get the highest revenue possible. He tests prices on live traffic and watches sales within a day.
- Example: at $300 he expects about 50 signups, which is $15,000. At $75 with 800 signups a month, that is $60,000.
- If doubling the price makes sales drop by more than half, he knows he is past the sweet spot. He changes prices regularly to see if the market will now pay more, and puts them back if not.
- Monthly membership is $30. Nomads typically cancel around month 4 or 5, so the expected value is about $90 (about 3 months).
- He sets lifetime membership slightly above that expected value, at $99. The price was around $75 after Black Friday.
- Nomads are often temporary users or never actually become nomads, so recurring revenue is hard to retain. He prefers to take the money upfront as lifetime.
- There is a psychological barrier at $100 for B2C. Above $99 there is a big drop-off, and only inflation or more perceived value will move it.
- B2B has no such limit. Remote OK charges about $1,600 for a job post, which is cheap against a recruiter fee of about $3,000. Businesses pay with company cards.
- Nomad List has a light membership without social features, added during corona, which also sells well and can scale more easily than the community.
- Dating is built into Nomad List, like a Tinder for nomads, and is included in premium. He jokes that a "Nomad List Gold" tier might extract more.
- A Nomad List ad page with Stripe checkout took a $1,500 ad from Shopify, with no email back and forth.

## Community limits, scaling, and acquisitions

- Pieter says Facebook ads for Nomad List did not work: "you get the wrong users" and "really shitty users".
- Nomad List's membership works because the community is tight-knit, and more random users hurt it. "It's hard to scale community." The site is a database plus a community.
- Over 800 people a month sign up as paid, up from about 200 for a long time.
- He pays a moderator to keep the community friendly.
- A job board like Remote OK is easier to scale with B2B ads.
- The community started as a Slack for nomads in 2014/2015. People spammed it, so he charged $1 and then $5, $25, $50 as a spam filter. That became the membership.
- He suggests asking your audience what they would pay for, rather than inventing a product.
- He is skeptical of venture capital and angel investing: "I think Angel investing is vanity." Raised money is not yours. It is "business money", and "over half goes straight to Facebook ads".
- His advice is to get revenue and own 100% of your company.
- Many startup people who are famous and active on Twitter are not rich, because they took stock that can't be sold. One company offered $8 million in its stock to acquire Nomad List, which he considered unsellable.
- Bootstrapped startups typically sell for about 2 to 4 times annual revenue on marketplaces like Empire Flippers (he mentions being offered about 3.7). VC-backed ones can be valued much higher.

## Automation, error reporting, and tooling

- His productivity hack is to automate everything: invoicing, user deletion, moderation. MVPs are already automated, so full automation is not hard. Also build checks that the robots are doing the right work.
- Error reporting is a few lines: a PHP error calls a Telegram bot webhook via `file_get_contents` and posts into a chat group. JavaScript errors are caught by `window.onerror`, sent by AJAX to the server, and forwarded to Telegram. A part-time server helper (Daniel) is in the group and can jump in.
- He argues this is good enough for a team, and that fancy error tooling is too tedious.
- Tools he names: Sublime Text, Telegram (also for alerts), photop.com instead of Photoshop, and Gig/Now for deploying instead of FTP, which he used for six years.
- He uses wip.co (made by his friend Marc) for public "/done" to-do logging and accountability.
- He moved his blog to Ghost and emails about 9,000 subscribers when he posts. He dislikes email in general.
- He shares live revenue charts on his sites (slash open) as a transparency and marketing tactic.
- Block-then-unblock a Twitter follower, which he calls "Blunble", to make a hater unfollow. He wrote a script that does this for his mute list.

## Motivation, product cycles, and working style

- Pieter says intrinsic motivation lasts about six months, after which "you hate everything you do". Money rolling in is what keeps him working on a site, and projects that don't earn tend to die.
- Options for project fatigue after years: hire people to take over (he is hiring a developer and a customer support person) or sell.
- He is hiring a generalist PHP/JavaScript/CSS dev. He pays well, about double or triple market rates, to give people freedom.
- He is stepping away from Nomad List and Remote OK because he needs distance to find new ideas.
- New ideas need novel experiences, so he deliberately does other things.
- He launched several smaller products in the last year, including a QR menu, an idea generator on GPT-3, and Rebase (relocation and immigration agency for remote workers, with immigration lawyers, like Stripe Atlas for relocation).
- Bug fixes and maintenance are short (5-10 minutes). New products need long deep sessions, sometimes at night.
- He sleeps from about 3-4 a.m. to 11 a.m.-noon without an alarm, and says forcing an early-bird schedule is bad. No fixed schedule, with walks and gym every second day with a friend as accountability.
- "Making new stuff is the most fun. Growing stuff's kinda boring."
- Small wins help: sticky notes on a laptop, or logging `/done`. "I don't care about the task itself. I care about the feeling of finishing a task."
- When depressed, he still shipped a small task, because "that system keeps me on the rails".

## Reinventing yourself and the personal-brand approach

- Pieter got labeled the digital nomad guy and found it cringe, so he moved to "indie / solo entrepreneur" as his brand. You have to keep reinventing yourself.
- He started Nomad List because the nomad scene was full of fake "dream lifestyle" course sellers and he wanted real people. He was inspired by a Singaporean-British founder making SaaS and traveling.
- Organic growth is proof you're right, and lack of it is proof you're wrong. He says marketing that looks like marketing is bad marketing.
- He says it is a mistake to want 100 shallow viewers over 20 engaged ones, because the core can grow. He treats top of funnel vs bottom of funnel the same for any audience.
- Companies are not loyal to you, so don't treat a company like family. "Family" culture reduces your negotiating power. He says he pays people for work and doesn't pretend otherwise.
- He argues for profit sharing or shared ownership for employees.
- He says avoid news, which is built to make people angry. He prefers neutral outlets like Reuters and The Economist.
- Nomad List data: about 140,000 trips logged. He uses it to publish public trends pages (for example, fastest-growing remote work hubs) as quick PHP pages.
