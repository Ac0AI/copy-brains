## Blake's first app: RizzGPT, from idea to $200K MRR

- Blake had only basic Python experience and had never built software. He got hooked on ChatGPT in late 2022 and graduated college around mid-2023 without wanting a full-time job.
- The idea came from a roommate who kept asking what to say to girls on dating apps. Blake pasted the transcript into ChatGPT, found the replies robotic, and spent time prompt-engineering them to "sound like a human and have Rizz."
- The product: upload a screenshot of your messages, OCR pulls out the conversation (left side is her, right side is you), the GPT API generates reply options, and you copy-paste them. A "spice meter" makes replies more flirtatious.
- His thesis for all three of his apps: "Guys don't know how to text girls." Guys already send these screenshots in group chats, so the product is the same behavior moved into an app.
- Results: a couple hundred downloads in the first weeks, then about $80K monthly revenue right after launch, scaling to a little over $200K MRR, held steady for about 10 months. Total revenue was heading toward $2.5M.
- Pricing: free at first, with credits, then $7 a week. Later it was a flat $7 a week.

## How $100 of promos drove 200K downloads

- Blake found a niche on social media: "Rizz content," where guys show off conversations with girls in 10-image slideshows. Those creators had roughly 50K to 100K followers but got millions of views per video.
- He paid $50 each for two promos. The creators made their normal content and worked the app into the middle. Those two videos got a few million views each, nearly 200,000 downloads in under a week, and about $80K in monthly revenue.
- Why it converts: the creator shows the conversations working, then credits the app. It works like Michael Jordan saying "wear my shoes." The viewer sees the outcome and thinks the app is the missing piece.
- Views and engagement matter, not followers. He says "washed up" creators with millions of followers can get 20K views a video, and brands that pay per follower are using the wrong strategy.
- Promos were cheap because the niche was new. Few other advertisers could monetize Tinder-message content. His rule is to find the audience that converts best, where you have the most comparative advantage, and double down.
- He did not use affiliate deals, because attribution on mobile apps is messy. Streetwear-style checkout codes don't work for apps.

## Influencer outreach tactics

- It is a numbers game and a quality game at once. Reach out to hundreds of creators a day, but go to extremes for the few you really need.
- For one key creator he joined the creator's Discord, spammed hourly, and messaged the creator's mom and girlfriend (politely, e.g. "would love to pay your son to do some work for me"). His rule: when something would greatly lever your efforts, do everything in your power to make it happen.
- Most people who say "I DM'd 20 influencers and nobody replied" spent about 20 minutes. He says you have to put in the time.
- The message has to be split-tested like ad copy, and there is no universal template. RizzGPT, UMax and Cali each needed a different approach.
- In noisy niches, be direct: "Love your content. Looking to pay you X dollars for a promo. Let me know if you're interested." Creators are flooded with high-ticket sales pitches.
- Showing value up front (an example video, a redesign) beats a calendar link.
- Influencer marketing is the hardest channel to crack. Most people run unprofitable promos because they take the first creator who says yes and judge by follower or view counts without checking how loyal the audience is. He is skeptical of anyone selling a course on it: "DM people... you have to iterate."

## Building with ChatGPT, no technical background

- He asked ChatGPT "how do I build a mobile app?", got options (SwiftUI, Kotlin, React Native), and picked SwiftUI. He downloaded Xcode, designed in Figma with a co-founder, and built piece by piece: "I need a blue gradient background... I need two buttons... after this button I need to open the camera roll."
- ChatGPT wrote about 95% of RizzGPT's code and about 90% of UMax's. He debugged by pasting errors back and asking why the code failed. Over time ChatGPT became a tutor, and he asked it to explain concepts.
- The first version took a little over a month. He says he could now build it in a day or two.
- Early mistakes: no backend, no user authentication, API calls made from the front end (so the key was stealable), the app named "RizzGPT-production" on the home screen, and a Heroku backend he'd now replace with AWS.
- Advice: keep pushing through small blocks that cost 20 hours (they cost three minutes later). This works for single-function utility apps; he doesn't think a beginner could build a social app with ChatGPT.
- App Store setup was not a hurdle: set up an LLC and a developer account.
- Weak product ideas have no guarantee (he cites a water-reminder app). A simple product with a clear problem and better solution or distribution has "massive upside."

## Ignoring competition and shooting from the hip

- Blake didn't know a competitor (the Rizz app) existed when he built RizzGPT. They had under 200K downloads, which RizzGPT matched in its first week. They threatened a lawsuit, which is why the product was renamed Plug AI.
- His view: "If your competition is not known, it's as if they do not exist." A product only exists in society once people know about it, and weak distribution makes a competitor irrelevant.
- He doesn't run focus groups or five-month beta periods: "I build the app, I put it on the market and I hope that it works."
- Exception: consumer social apps, where a weak first impression churns users permanently. For utility apps, being slightly optimized at launch is enough.
- A tell for good ideas: on projects that succeeded, he grew more confident as he thought them through. When his confidence dropped, they didn't work out.
- He thinks through direction first (long walks in the woods with no phone), then builds fast.

## UMax: picking the niche and building it

- After leaving RizzGPT (amicably, keeping equity and payouts), he spent November 2023 on friends' couches with no money, scrolling social media for what was popping.
- He picked "looksmaxing." Weightlifting content seemed to be declining while looksmaxing was growing (rising on Google Trends). He argued it cuts straight to what lifting was a step away from: being more attractive to girls.
- He researched on Reddit, TikTok and Instagram and found two needs: personalized advice (skincare, hair, grooming) and a way to quantify how attractive you are and track progress.
- Timing: the GPT Vision API was about to be released. A custom facial-analysis ML model would have cost $50K to $100K with no guarantee of quality, while GPT Vision cost under a cent an image. He tweeted that people would make millions off GPT Vision.
- Product: upload a photo and get a rating out of 10, a "potential score" if you improve changeable traits, and recommendations (skincare, hairstyle, grooming, jawline trainers, chewier food, losing weight). He deliberately excluded unchangeable traits like cheekbones, citing an "internal locus of control."
- Scoring method: have the model classify 20+ traits (acne, skin discoloration, grooming, hair vs. face shape, eye bags, jawline strength) and deduct points from a perfect 10 for each issue found. He says GPT does poorly at giving numeric scores directly (every jawline gets about 70) but classifies well.
- Partner: he brought on Sam Zia, a looksmaxing influencer (200K TikTok followers, but 1M+ views a video), plus his older brother. He picked Sam because the community is tight-knit and led by a few creators. He decided partnerships depend on the niche: looksmaxing had a handful of leaders, while calorie tracking has no single leader.
- He also refused practices that would have raised retention and revenue, such as pushing hard into the female beauty niche or excessive subscription pricing.
- Revenue: about $100K in month one, about $200K in month two, then a viral spike to over $500K a month. Total was a little over $3M, with UMax projected to pass $5M in 2024.

## Cali, the studio model, and the team playbook

- While UMax boomed, Blake gave his calorie-tracking idea, designs, playbook and capital to two 17-year-old founders (Zach and Henry) on an even split. They built it and ran social media. Cali did over $300K in a month, about $3M ARR (not all of it recurring).
- He walked away from UMax's $500K a month because he can't make himself work on things he isn't passionate about. He estimates he gets far less out of the hours he puts in. He calls UMax a "local maximum" that he could break through but doesn't want to.
- Studio model: always keep about 20 app ideas in the back pocket and work the best one. Bring in engineers to lead individual apps, supply designs, infrastructure, paid ads, in-house content and influencer deals.
- Team structure: he sees 2x or better outcomes when two skilled people work on the same app, as long as the ceiling is not low. Split ownership across engineering, design/product/App Store, and marketing.
- Consumer apps allow rapid iteration on distribution, design and engineering, unlike e-commerce, where you wait weeks for samples.
- Distribution varies by app: paid platform ads, influencers, or in-house UGC. He has seen people succeed with each.
- You can tell you've hit a ceiling when you do everything right and growth plateaus.

## Apex: the long-term vision and his philosophy on money

- Apex is an "all-in-one self-actualization ecosystem" aimed at health, meaning and virtue rather than "get jacked, make 10K a month, buy a Rolex." He frames the position as the opposition to social media's mimetic desire (copying what others want), noting that opposing a prevalent narrative can build a strong community.
- Plan: a content house between San Diego and LA, a founding team including his older brother and Jesse Abed, creator-style content, and free apps (personalized fitness, nutrition and skill plans) and free communities. He will put in at least a couple million of his own money, and he plans to file as a benefit corporation so he can act for the public good instead of maximizing shareholder value.
- His split of earnings: about two-fifths to Apex, two-fifths to his parents, one-fifth to himself.
- He thinks the consumer app space is dominated by LTV maximization and wants to build tools free to use. Monetization (e.g. physical products) is a later question. He compares the brand to FaZe Clan and Barstool, but says he's a "businessman first, creator second."
- On picking pursuits: choose things you care about, so you come out ahead even if you fail. Making money in something you're not proud of (his example: OnlyFans management) means you fail or succeed at a cost. He would rather change a million lives and make zero dollars than make millions and change none.
- On motivation: working on what you love produces far more output per hour, because the subconscious keeps working on it. Time in nature (he cites a study in Cal Newport's *Deep Work*) improves thinking.
- Background: his father had a neurodegenerative condition and the family had financial hardship, with Blake's brother lending him grocery money after college. Blake started investing at seven by tracking MSFT and INTC from the Wall Street Journal, and wrote an ebook at seven called "How to Make Money as a Seven-Year-Old." He says he asked "why" a lot as a kid, and that thinking like everyone else produces the same ideas and results.
- Contact: Blake Anderson on Instagram and Twitter, blakeex.inc, apex.improve.
