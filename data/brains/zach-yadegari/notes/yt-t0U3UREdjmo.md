## How Zach built Cal AI to $1M+/month at 17: product and idea selection

Zach builds mobile consumer apps. Cal AI is an app where you take a picture of your food and it returns calories, carbs, protein and fat. He and his friend Henry (both in high school) started building apps about a year before this interview. Their first app, Grindclock (a motivational speaker like David Goggins screaming you out of bed), got 20,000 downloads in its first couple of weeks but they could not sustain the growth. Zach had been cold-messaging founders on X, including Blake Anderson (founder of two apps, Umax and RizzGPT, with a few million downloads combined). They worked out a partnership where Blake helps with high-level growth strategy as a co-founder while Zach and Henry run day-to-day operations. Cal AI has four co-founders (Zach 17, Henry 17, Blake 23, Jake 28) plus eight team members.

- **Idea source:** Existing calorie trackers like My Fitness Pal were outdated and convoluted. Zach wanted to bulk up and quit tracking after 3 days because it was so annoying. ChatGPT-era vision AI made a much simpler tracker possible.
- **Simplicity as positioning:** Cal AI sticks to calories, carbs, protein and fat. It skips sleep, hydration and other features. "We pride ourselves with how simple we are."
- **Validate distribution before building:** He validates ideas by making sure he knows how the product will blow up on social media. If there is "nothing to tap into" (no niche, no influencer to promote it), growth is "10 times harder." For Cal AI there were hundreds of health and fitness influencers whose audiences would love it, so "we just needed to build it and show it to them."
- **Inherent virality:** He only builds apps with built-in virality. Cal AI's core action (snap food, see calories) is instantly understandable, and the app name is shown at the top of the screen so viewers discover it. He says the idea is not genius: "we came in the Market at the right time" once the ChatGPT technology made it possible, and "we just moved quickly."
- **Build ideas you are the user of:** The best ideas come from a problem you or people around you have. If you are your ideal user "you'll know exactly what to build."
- **Results:** Launched about 6 months before the interview. Went from a May goal of $50K/month by end of summer to about $600K/month by then, and he shows App Store Connect at $1.14M for the month. Margins are about 50%, fully bootstrapped, profitable.
- **AI accuracy:** Version one was a single ChatGPT prompt, about 80% accurate (he equates this to the FDA's allowed margin of error on food labels). They then built a multi-prompt pipeline that gets more specific by food type and reaches about 90% on average.
- **User expectations lesson:** Consumers expected "x-ray vision" (for example seeing steak under rice in a Chipotle bowl). He says to lower your baseline assumption of user intelligence and make the experience "foolproof." Cal AI added a guide on the first scan showing how to scan for best accuracy.
- **Tech stack:** Swift natively (earlier apps used Flutter and React Native, which felt "janky"), Firebase Cloud Functions for the backend, Mixpanel for analytics, Slack for the team. They test extensively before updates.

## Influencer marketing system: finding, pricing and negotiating

Influencer marketing is Cal AI's main channel (roughly 150 influencers posting regularly at the time). Zach says this is the first time he has publicly shared the full system.

- **Finding influencers:** Create a new TikTok account and only engage with health and fitness videos so the For You page feeds only creators in the niche. Copy the accounts into a Google Sheet with average views and followers. He did this himself at first; now virtual assistants do it.
- **Outreach volume:** About 1 in 100 influencers reply to DMs, and after 500 DMs you might get two decent ones. "People give up after DMing 100 influencers. You have to DM thousands." Prefer DMs over email, because email usually reaches managers, whose rates are higher and who are harder to negotiate with.
- **Core math (RPM vs CPM):** You pay the influencer enough that what you spend per thousand views (CPM) is below what you earn per thousand views (RPM). Predict views from their last ~10 videos and past brand deals, then pay a flat upfront fee. Example: 50,000 average views at a $2 CPM is about $100 per video.
- **Starting assumption:** When testing a new niche he starts at a $5 RPM (revenue per 1,000 views) and then watches trends. A niche brands have not tapped (he cites looksmaxxing) allows lower CPMs and a much higher RPM. For Cal AI, he targets roughly a $2-$3 CPM against that $5 RPM.
- **Engagement-adjusted pay:** Not all views are equal. Pay a lower rate for poor engagement and more for strong engagement.
- **Reading engagement:** Check the comment section. Good signs are people replying to each other, personal "you inspired me" comments, and top comments with 100+ likes. Red flags: comment bots, the same accounts on every video, or commenters who are all influencers (look for story rings on every profile), which signals a comment-for-comment pod.
- **Bundle and prepay for retainers:** Small creators often ask for far more than their views justify (for example $1,000 for a video averaging 50K views). Zach offers four videos paid upfront, which lowers the price and creates a monthly recurring retainer.
- **Negotiation framing:** "If they say I want $4,000 for one video, what they really mean is I want $4,000, I don't care how many videos I have to post." So give them the money but extend the number of videos, or use a "minimum view clause" (they must guarantee a view count or keep posting). Creators are "a dime a dozen" - for each one you can find 12 with the same views and engagement.
- **Pay-per-view deals:** Only work with smaller creators. Big ones will not agree.
- **Pay range:** He pays influencers from $100 a month up to $100,000 every two months for the largest one. Payment is by PayPal or bank transfer.
- **Content brief:** A simple one-pager with examples of past videos that worked, what the app does, things they can say and other ideas. Creators are professionals, so he lets them shoot it their way.

## Native-feeling integrations, comment control and repurposing

- **Seamless integrations, no hard sell:** A lot of brands get this wrong with scripted reads like "this video is sponsored by X." Cal AI wants "what I eat in a day" or day-in-the-life videos where the influencer simply uses the app, often without ever saying the name. "People don't even know it's an ad." Zach tells creators to show the product in the first 15 seconds.
- **Let the product do the pitch:** Because scanning food is so novel, viewers see the app name on screen and ask what it is.
- **Control the comments:** Cal AI plants a comment in every video and has the creator pin it, replies to everyone who asks about the app, and makes sure everyone knows it is their app. He calls controlling the comment section "a big part of the strategy."
- **Repurposing content:** Cal AI owns the influencer videos and reposts every one on its own Instagram account (about 40,000 followers), getting tens of millions of views a month in addition to creator reach. The same video can be reposted after a few months because it reaches new viewers. TikTok flags duplicate videos, so the repost approach only works on Instagram. Early on, when you have no followers, DM influencers from a personal verified account, because response rates are much lower from an empty brand account. Once the brand account had tens of thousands of followers, replies improved.
- **Org setup for outreach:** Virtual assistants find influencers and do outreach, and a social media manager gets on calls and closes deals. Everyone logs in to the same brand account.

## Attribution and the viral.tech influencer platform

- **Attribution problem:** Link-in-bio tracking does not work because viewers go straight to Google or the App Store after hearing about the app.
- **How he attributes:** Correlate the timing of an influencer post and its views with the download and revenue curves in App Store Connect over the same period. At scale, isolate which specific videos correlated most closely with downloads.
- **Planned product:** Zach says Cal AI's internal tools will launch publicly in early December as viral.tech (the transcript renders it "viral. te"). Pitch: a go-to-market strategy generator (who to target, what niche, how inherently viral your app is, content ideas), a CRM to track outreach status and active influencers, a posting schedule, post and view tracking, and attribution that overlays views on downloads.
- **Why he is doing it:** He believes influencer marketing will become ubiquitous and people are already reverse engineering Cal AI's strategy. If he brings it to market first and builds the platform everyone uses, he captures more upside than hoping no one competes.

## Pricing, paywall and onboarding psychology

- **Pricing:** Cal AI is premium only, with $10 a month or $30 a year and a 3-day free trial. Most people choose yearly. There is no free tier. They had not yet measured retention because the app was under a year old.
- **Hard paywall lesson:** With Grindclock the premium upgrade was optional (ads plus a premium tier). After switching to a hard paywall they saw more revenue despite fewer downloads. Once people are used to something being free, "they don't want to pay." For a utility app that provides real value, "people shouldn't be scared to just hard paywall."
- **Onboarding questions raise conversion:** Onboarding asks weight, target weight, height and goals and why. An A/B test showed some questions have no functional purpose in calculating the plan, but asking them still raised conversion. His reasoning: each question ("why are you doing this?") makes users reflect on why they need the product, and the effort invested creates commitment, so by the time they see the paywall they are likelier to take the trial.
- **Fast time to value:** After onboarding users are dropped straight into scanning food. The app saves every meal and shows grams eaten versus grams left for the day. It does not recommend meals.

## Paid ads, Apple Search Ads and scaling

- **Paid ads started ~2 months before the interview:** About $7,000 a day on Meta (Facebook and Instagram) and TikTok, profitable every day. He says paid ads are about 90% creative, and influencer content gives Cal AI a huge supply of creatives to test.
- **Sequencing:** Influencer marketing is more profitable in the short term and easier to get started, so use it first. His suggested order: build the product, reach out to ~100 creators, get ~2 to post, grow to ~20-30 influencers and ~100 pieces of content, then cycle into paid ads with the money generated. Paid ads should help scale further over the long term.
- **Apple Search Ads as a product test:** Running ads on a competitor's brand keyword in the App Store works as a validation signal. If your ad is profitable on their search term, that is usually a sign your product is better than theirs. If it is not, you are likely the worse product. He says this is not one-for-one but is a useful read.
- **Other ideas:** Considering TV ads. SEO is weak so far because the app is only six months old.
- **Scaling internally to scale externally:** At each stage he asks what has to change internally to hit the next milestone. After $100K/month they added developers, a full-time designer, more marketing help and more virtual assistants for outreach.
- **Distribution channels:** He notes the difference between scaling from $10M to $100M a month is mostly how many distribution channels you can competently master. Founders get held back at $50K-$100K a month because they do not scale their internal operations.
- **Cash flow:** Apple pays about two months later, so Cal AI continuously reinvests earnings from two months prior into current marketing. Founders had not yet paid themselves, expecting to within a month or two.
- **Competition and goals:** Competitors copy Cal AI after every tweet about its success. Cal AI usually ranks around number 10 in the App Store, behind long-established apps. His goal is to beat My Fitness Pal (he cites about $100M a year, stagnated) and then sell, possibly to My Fitness Pal.

## App studio strategy and mindset

- **Why an app studio:** They have a network of health and fitness influencers, so new apps in the health and fitness category can be plugged into the same creators and deal structure. He says combining two apps in one deal with an influencer, paying more, gives more leverage to lower CPM.
- **Delegation:** Other apps are built by other developers with little of his time. Cal AI may deserve a double-down after seeing more potential than expected.
- **AI as a growth lever:** AI lets existing app categories be made more viral by attaching AI to a feature that is "a little bit cooler," which makes a social-friendly demo and can turn into a business.
- **Seasonal viral loop idea:** For Thanksgiving, he planned to make the app free for a day with a themed food scan and prompt users to post it to their stories (for example a "how festive is your dinner" angle), noting it might fail.
- **Role and mindset:** He moved from programmer to marketer to CEO focused on product and delegation. He says it helps to understand the technology deeply even if you are not the one programming.
- **Programming's future:** Programmers will need better product sense, knowing why a feature or button placement is right rather than just how to implement it.
- **Early history:** His unblocked games site (totally science dot com, categorized as an educational site) made about $660,000 a year and sold for $100,000 when he was 16 via Flippa. He grew it to 5 million users with TikTok videos recorded in class and asked viewers to comment which games to add next, which fed a reply-to-comment video series. He sold deliberately after meeting a 25-year-old founder whose high-school app had stalled, deciding to "burn the boats."
- **Age:** "Your age should really not hold you back."
