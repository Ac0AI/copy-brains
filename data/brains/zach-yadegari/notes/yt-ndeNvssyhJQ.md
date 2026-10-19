## How Zach started totally science. and got the first users

- Zach built totally science. (a games hub, "totally science" is a deliberately sarcastic name) in 8th grade at age 14. He noticed that when schools first let students bring laptops (the Covid era), kids had a different tab open for every game on a different website.
- His idea was one hub with all those games. His original goal was just "to get people in my school using my website," not money.
- The first version took "a few days": a basic layout with games on it, built in HTML, JavaScript and CSS.
- He put his name in the corner ("a Zach Yadegari production"). People came up to thank him, and the credit now sits in the footer.
- He is 16 at the time of the interview.
- At first the site spread person to person in his school, "just like how rumors spread in high schools." About 200 kids used it.

## Naming the site to get past school blockers

- School filters block sites by category. A site called something like coolgames.com gets flagged as games and blocked.
- Zach named the site "totally science" so the filter classifies it as educational and lets it through.
- The site is still blocked in many schools and sits on the global blacklist of GoGuardian, one of the biggest blockers. Only school IT admins block it, and only once they notice students using it heavily.
- His response is to make new links students can use. He says users now comment on his TikToks "the website's blocked, make new links," and the team keeps adapting to stay unblocked.
- The site also has a proxy feature so students can browse YouTube and other sites. A key such as the tilde button instantly brings up Google Classroom if a teacher walks by. Users can change the cover page to their school's site.

## TikTok as the growth engine

- First TikTok: filmed in his coding class after he finished a project early. It was a simple screen recording with a caption along the lines of "made this website because I was bored in school, check it out, totally science." It got around 50,000 views and brought a few thousand users a month.
- A few months later, a second TikTok got about a million views and the site began growing faster.
- Retro Bowl was the real inflection point. In September of 9th grade, Retro Bowl (a pixel football game) was trending on TikTok among kids trying to play it at school. A friend told him to add it to the site and make a TikTok, promising it would go viral. It did, with about 1 million views, and brought a large wave of users.
- The tactic: watch what is trending, add that specific game, then post a video about it.
- To keep the loop going, he reads TikTok comments, finds a requested game, adds it, and replies to that comment with a video saying the game was added. Everyone interested in that game sees it.
- Organic TikTok seeds one person per school; after that it spreads inside the school. The name "totally science" is printed at the top of the site on purpose, so a kid sitting behind someone playing sees it on their screen and goes to look it up.
- He tried Google Ads for "unblocked games," but says the top source was always organic TikTok.
- He argues TikTok is the best way to market anything to any age group: "over a billion users," roughly one in seven people in the world, and not just kids.

## Finding trends and product ideas on TikTok

- Zach says he is addicted-averse to TikTok and wants to delete it, but keeps it for one reason: spotting trends among young people. He reads comments, watches what influencers make, and also checks Snapchat stories.
- Example: comments on motivational videos (David Goggins and similar) said "I want this as my alarm clock." He and a friend built Grind Clock, a motivational alarm clock app with people like David Goggins yelling at you to get up, in a few weeks.
- The app got a few thousand downloads and a membership. The main takeaway was learning Flutter (iOS and Android development) to use in future projects.
- He and the same friend worked roughly six hours a day on it, and he is working on a gym app too.
- He says he plans to keep "learning the language" through small projects like this and move on to other ideas.

## Monetization and the economics of the site

- Day one had no monetization. After the traffic grew to hundreds of thousands of users a day, he realized he should monetize.
- He applied for Google AdSense around January, after the traffic arrived. Setup took about a week and required forming an LLC and opening business bank accounts. He was surprised to learn "you could actually make good money from websites."
- Costs: initial hosting was a few hundred dollars. At one point they spent about $11,000 on a pile of domains and experiments. He says that was paid back soon after monetizing.
- Scale quoted: about 300,000 monthly visitors (the host corrected this in the intro) and over 3 million visitors total. Roughly 100,000-150,000 accounts have been created. Anyone can play without registering.
- The shop earns nothing. Users earn points daily and spend them on avatars, which now show next to the name in the new per-game chat. It is an engagement feature, not a revenue source.

## Infrastructure lessons from rapid growth

- The site crashed multiple times and his account was nearly banned. He started on Hostinger shared hosting, and heavy database calls slowed other customers' sites.
- Culprits were a real-time user counter and a chat that hit the database every few seconds across thousands of users. He had to stop those requests, and he spent school lunch periods calling customer service to fix outages.
- He then moved to a dedicated virtual private server with a cloud provider, no longer a shared plan.
- Stack: plain HTML, CSS and JavaScript on a VPS. He says it's fast to run but slow to develop, and if restarting he'd use a framework such as React. The code has been rewritten several times, often over the summer.
- Games come from open-source code found online, and the site runs them on its own server because an iframe breaks when the source site is blocked. He puts a DMCA takedown process in the terms, and says no company has complained. He admits the sourcing is "a little sketchy."
- Feedback process: a Google form for game requests broke under hundreds of thousands of responses full of typos, so they scrapped it. Now they rely on TikTok comments and a Discord server with moderators, where users complain about issues. A "report" button was useless because people pressed it for any slow-loading game.

## Team, partnerships and exit plans

- Two programmer friends helped over a winter break. One (Henry) left; the other, Elon, became CTO and works on a revenue share, not a salary. Zach keeps the team small since each hire means more people to pay.
- He views other big unblocked-game sites as partners rather than competitors, because when one is blocked students switch to another. He and Elon are joining forces with another site of similar size on a new project.
- He emailed the CEO of Cool Math Games to explore a partnership. The smaller sites did not reply; the biggest one did, and he got feedback from that CEO.
- Plans: an interested buyer was testing ads on the site. If they make a good offer, he would sell and move on to other projects. Otherwise he would use an ad agency he found via TikTok to scale, and expand into other languages (for example Spanish, using Google Translate or a friend), inspired by MrBeast's language channels.
- He calls the site "a good source of passive income" but notes it still needs new games, fixes and community upkeep.

## Mindset, learning and education

- Learned to code from YouTube, starting at 7 after a summer camp, first wanting to make games. His advice for a total beginner is to start with Python.
- He wants to build a user-generated-content platform where users create the content and drive engagement.
- His stated superpower is focus and drive. He worked every night after school and in class on the site, and spent six hours a day on his apps.
- He reads TechCrunch and watches Y Combinator videos on YouTube.
- On college: he is against the default path ("swimming with the tide") and thinks free online courses teach as well. He sees value mainly in connections, would like business school for that, and might drop out. His first choice is the Thiel Fellowship ($100,000 grant), with college as plan B.
- The book he recommends most is Zero to One by Peter Thiel.
