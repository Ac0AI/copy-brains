## How Hunter finds app ideas and validates them

- Hunter picks ideas based on whether the mechanic can go viral on its own, not on formal validation. In his words, "It was all intuition with the assumption it has to be viral."
- His key lesson came from Wink, his earlier friend-making app. Users got 100 free gems and each right swipe cost 10 gems. After 10 swipes a popup offered two options: buy gems for 99 cents or share on Snapchat. That share-or-pay gate produced millions of organic downloads, and it showed him that you can use other platforms to grow a new app.
- When Instagram opened link stickers to everyone in October 2021, he applied that lesson. He built NGL, an anonymous Q&A app, in 3-4 weeks.
- He builds eight apps before the big hit. His first app (a Gen Z Foursquare) died when COVID hit. His second, Zoom University (a live video college double-dating app, built in 2020), reached a couple hundred thousand downloads and top 10 in social. That was the first time he felt "this is possible."
- Wink reached roughly 60-70 million downloads.
- He says the earlier you start, the better. You need to fail and "crawl through the mud" before the money comes.

## How NGL went viral: the loop and the small-scale proof

- NGL launched in late 2021 with almost no traction for about 6 months. Nobody cloned it in that time.
- The viral loop works like this:
  - A user's first exposure is a friend posting the link on their story. That works as social proof, because young people do what their friends do.
  - They tap the link and send an anonymous message.
  - A big button after sending says to get your own messages, so they download the app.
  - They already know what the receiving side feels like, so posting their own link feels safe.
- Replies matter more than links. Friends who see a link with no replies leave. Once they see replies on the story, they realize others are sending messages and it's socially acceptable. The "perfect user" posts a link and shares a few replies.
- The core principle: prove the product at small scale first. If you can get one school or one friend graph to adopt it, it will spread globally. The hard part is reaching that tipping point.
- Hunter defines the friend graph as the people you know and the mutual friends you share. The goal is to get everyone in one friend graph posting so their friends see it and it spreads.
- He also tested activating random high schools one by one before it went viral, though it didn't always work.

## The break: New Zealand, Android and 5-10 TikToks

- In April-May 2022, NGL popped off in New Zealand and Australia. The trigger was an influencer paid about $50 to post the link. One of her followers was popular in high school, posted it, and that activated the whole school.
- Growth stalled there. Hunter was watching Firebase graphs and saw usage bouncing between New Zealand and Australia without spreading. He realized the region was Android-heavy and NGL had no Android app.
- He called a friend, asked how fast an Android app could be built, and got three weeks. Hunter admits he was in an "iOS bubble."
- After launching Android, the team pushed about 5-10 TikToks. One got 1 million views. After that they never paid for marketing again.
- Results:
  - Downloads went from about 1,000 a day to about 1.5 million in a day within days (about 90,000 an hour).
  - The target to hit was roughly 1,000 users in one day, at which point the story permeated the whole friend graph.
  - Total: 250 million downloads, zero marketing spend after that, 100% organic.
- Total marketing spend before the break was roughly $5-7K of testing, with about $10K in total expenses (including a few thousand on a domain they never used).
- A funny detail: the viral TikTok creator was on a CPM deal, and the video hit 1 million views, which meant they owed about $3K they didn't have. His co-founder suggested taking it down. They did, and it didn't matter because it had already activated. They later paid her much more.
- He says NGL was built by design for this: they proved critical mass in one region, then fixed what blocked scaling.

## Onboarding and product psychology rules

- NGL onboarding during the viral period was one step: type your Instagram username. No login, no authentication, no phone number. It only pulled the profile picture to put on the story asset.
- After signup the app gives a link with a 3-4 step tutorial: copy the link, share it. At the time links couldn't be auto-attached to stories, so the team effectively trained a quarter of a billion people to use Instagram's link feature.
- Replies are shared to the user's story from a big share button in the inbox, and the question posts anonymously.
- His design rules:
  - **One central action per page.** There is always a big obvious button, because young people are easily distracted and doubt makes them leave for TikTok.
  - **One main onboarding flow** with no branching, running straight to the core metric. For NGL that meant getting someone to share a link and a few replies as fast as possible.
  - **Make the main button pulse, glow or wiggle.** He calls this the last 5% of polish most people skip, and says it is what gets people to finish.
  - **Make products work the way people assume they should.** Meeting expectations makes a product feel great; missing them makes it feel bad (his example: a bad coffee in a paper cup at a nice shop).
  - **Ask where the user's eyes go first** and what a human would do on each screen. Apply this across the whole app, not only onboarding.
  - **Use anticipation moments for loading time.** Tell users something is being prepared ("ETA one minute"), then deliver it faster than expected, ideally with confetti. He calls this framing and priming.
- Colors: NGL is red, orange and yellow. He picked them because Instagram's icon is pink and orange and he wanted NGL to look good next to it. He adds that people tap red buttons.
- Name: it started as Ask.fun. He came up with "NGL" on his own in spring 2022, before it went viral, because it is culturally relevant to the demographic and explains itself ("my NGL link", "I'm not going to lie, I'll send anonymous messages").

## NGL monetization and global pricing

- Revenue is from weekly subscriptions in every country.
- Pricing is localized by the GDP of each country. Examples he gives: roughly $1 a week in smaller or lower-income markets versus around $5-8 a week in the US. His reasoning is that $10 a week is a salary in some countries and he didn't want to price out parts of the world.
- The app is also translated into every language, and he credits this localization for global growth, with large usage in Asia, the Middle East and North Africa.
- Premium features are hints about who sent a message (location, phone type and similar factors, which kids use to guess who it was) and seeing viewers of your link. He says nobody got upset about the premium features.
- NGL is now close to an optimized version of what it was. It does about 100 million downloads a year, still with no marketing. Hunter says people who churn often return because the viral loop keeps looping and a friend posts a link. It is passive cash flow, so he hasn't sold it. It's about two and a half years into significant revenue, run by his co-founders on autopilot.
- Hunter has never done paid advertising, so he says he is not the expert, though he is open to it for Bags.

## Scaling pains after going viral

- When the app blew up, everything broke. Software providers shut them off, API usage hit billions of requests, and bills piled up on every platform.
- They didn't know how long the viral wave would last, so they didn't know how much to spend on software providers.
- Apple pays out on a delay (he says about 60 days), so cash was tight. He and his co-founders had to take a loan to cover software bills. The first 3-6 months were hard before it calmed down.
- He also dealt with odd requests, including emails from international police forces and military, and users DMing the team just to get attention.
- On the App Store, he calls it a "pure meritocracy" because everyone builds with the same tools and compute. His one tip is to not submit until the app is mostly ready, since review feedback will force fixes and long review cycles get annoying.

## Team, process and tools for building apps

- Team recipe: a product/design lead, an engineer (a technical lead or CTO), and a growth person who handles influencer outreach and videos. One person can cover more than one role.
- Hunter splits equity far more evenly than most founders. His reasoning: people have to wake up at 3 a.m. when things crash, and they need meaningful equity to do that. Good engineers are hard to find.
- Simple-app timeline: about a week of design in Figma, then engineers scope and break it into tasks and build module by module. Hunter then gets a build and tries to break it, creates a QA list, sends it to developers, and repeats a few rounds before launch. Complex apps (photo, video) take longer.
- Stack he lists: Figma, App Store Connect, TestFlight, Firebase or AWS, an AI coding environment such as Cursor, Xcode, and Mixpanel or Amplitude for analytics. NGL is built in Swift, which he likes for access to the full phone and smooth animation. Bags uses React Native, cross-platform.
- He started as a designer, then moved to product lead and founder. He does his own branding, color, interfaces, navigation, copy and vibe. He says he built eight years of apps and calls Figma speed his edge.
- His first job was the only designer at a mobile app holding company, where his mentor (the CEO) had him study existing apps. The team printed screens and put them on the office whiteboard. He treats the two years there as his college.

## Bags: building a consumer crypto trading app

- Bags is a social crypto trading app (a DEX on Solana) launched in November 2024. Hunter bootstrapped it with money from NGL, started ideating in summer 2023 and went fully locked in from the start of 2024.
- His bet is that "the real battle of crypto is going to be fought on the app store" and that crypto will go mobile and social.
- Product:
  - Sign up in about 5 seconds with email or other login, build a profile in seconds, fund the wallet with Apple Pay, and buy a memecoin within 60 seconds.
  - The app looks more like a credit card wallet than a crypto wallet. It uses an embedded, non-custodial wallet whose keys can be exported.
  - Users can follow friends and see what they traded, check leaderboards, join group chats, and see a "bags for you" feed.
  - It includes live charts and data with filters.
- Economics: Bags takes a standard 1% fee on buys and sells, with no fees on sending or receiving. The majority of fees are passed back to active traders and to people whose followers trade. Everyone has an auto referral link and earns a percentage of fees from people they refer. Group chats also act as ref links.
- Early traction: over 300,000 registered profiles (fewer active traders). The key finding is that users who fund their card have high retention and high session time. The main goal now is getting people to fund their account and reach the first trade and profit-locking moment faster.
- Order of operations: the team spent the months after launch on performance (landing 99.9% of transactions in a couple of seconds), plus a new auth system, because early sign-in required Twitter. Getting the best data feeds is what gets users the best price. Marketing started only after enough bugs were fixed.
- Growth plan: level one is UGC and short videos aimed at finance people and crypto-curious users who see memecoin profits on TikTok and Instagram. He wants to build the foundation first and layer growth features after, and says he is more open to paid ads for Bags than for NGL.

## Studios, selling and long-term bets

- Hunter says the app studio model works if you want to throw many products at the wall, find one that hits, then double down on it.
- He chose not to run a studio for Bags because he knew the problem and the market he loved, even if he didn't know the exact product.
- He prefers a longer-term business that evolves with him over a quick build-and-sell, and he didn't sell NGL because it still cash flows.
- He thinks ICOs and app tokens may eventually replace IPOs for modern consumer tech companies, though it could take around 20 years and he has made no formal token announcement for Bags.
- He credits Steve Jobs, Brian Chesky (and the Stanford Blitzscaling podcast), Evan Spiegel and Walter Isaacson's Elon Musk biography as product-focused influences. The most impactful book he names is Reality Transurfing.
