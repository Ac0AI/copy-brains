## How the Fortnite countdown site started

- In 2019, while playing Fortnite constantly and learning web development, Priyam built a one-page site showing a countdown to the next Fortnite season.
- Motivation: he didn't want to keep the game open just to check the timer, and power cuts at home made his PC unreliable.
- He already knew HTML from school, then learned JavaScript and CSS. The first version was an amateur-looking single static page.
- Season dates were hard-coded. He took them from leaks and updated the countdown by hand.
- He posted it on Reddit first, and the site took off from there.

## Traffic and why it kept working

- At the start the site got roughly 30,000 to 40,000 page views a day.
- Later it settled at about 4,000 to 5,000 users a day, with many more page views than that. When he checked, 20 to 30 people were on the site live. At peak it used to be 300 to 400.
- Google Analytics showed a lot of returning visitors in the last seven days, which he reads as loyal repeat users.
- Traffic spikes around the end of each season.
- Traffic had stayed roughly the same since 2019 or 2020. Monetization changed, not the audience.

## Near-zero cost structure

- The site is static (users only view data, nothing is entered), so most hosts serve it for free.
- His only recurring expense is the domain, about $10 a year on Cloudflare.
- He never hired anyone and made the logos himself.
- Revenue was effectively all profit. He rarely touched the site, and it kept earning even when he wasn't playing Fortnite.

## Monetization step 1: Epic Games Support-a-Creator

- He was already making YouTube content and joined Epic's Support-a-Creator program.
- He promoted his creator code on the site. It took a couple of months for people to use it consistently.
- Epic doesn't let him disclose exactly what it pays. He says it still brings in extra passive income.

## Automating and monetizing with AdSense

- Season updates were manual every ~3 months (the usual season length). He fixed this by plugging in the FN API's calendar endpoint, so the site fetches the next season date itself.
- He also did some UI updates.
- AdSense first rejected the site for having no content. His fix was to add a blog using Jekyll, a framework that adds a blog to a static site while keeping free hosting. After a few articles, AdSense approved it.
- He calls this the biggest turning point. The traffic was unchanged, but ads on a mostly US audience (higher ad revenue rates) made "really good money."
- After approval he stopped updating anything. He says he could now generate blog articles with ChatGPT.

## What didn't work

- An item shop page using the FN API (showing what's in the Fortnite store each day) got little traffic. He guesses many other sites already do it better.
- He tried Propeller Ads, which pays weekly. It briefly earned more than AdSense, but it pushed spam notifications to users. He called it unethical and removed it.

## Revenue numbers and takeaways

- 2022 revenue across all sources (Epic, AdSense and others): $4,621.
- Lifetime revenue across all sources, including ad networks and affiliate: $10,870.
- Costs: about $10 a year for the domain, nothing else.
- Takeaway: a tiny single-purpose utility, built to solve his own problem, can become passive income. Free static hosting, automating the one manual chore, and adding a blog to qualify for AdSense were what made it work.
- He was preparing a guide on building your own one-page passive-income site and recommended a Udemy web development course. He says no-code tools like WordPress work too but cost more.
