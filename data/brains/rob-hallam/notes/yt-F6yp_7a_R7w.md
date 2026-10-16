## Starting point and the leap to Rio

- Rob spent roughly August 2023 to August 2024 making no money and burning savings. A tweet about that failed year went viral.
- A commenter suggested he start a development agency. He launched it the next day and landed a $3,000 client from a follow-up post.
- He kept posting client wins on X and got more clients inbound. The agency built the savings that let him quit and fly to Rio de Janeiro in January 2025.
- His takeaway: "there's money on X", whether through an agency or something else.
- He had about 3,500-4,000 followers before the Rio video. That one video added about 5,000 followers in 24 hours, roughly double what he'd built in a year and a half.
- His pinned post stated a goal: "My goal is to build a SaaS business to $10,000 a month and to document the process." It stayed pinned for a year, so visitors could follow the story to the goal.

## Growing on X: profile, pin post and the 4-part content loop

- Profile first. Use a real, friendly picture of yourself and never change it, because AI slop and bots are the main competition. Keep the bio to one or two lines on what you're doing.
- The pin post is an elevator pitch: who you are, what you're building, and the goal you've committed to for the next 90 days.
- He rotates through four content types:
  1. Entertaining (viral demos, vlogs, memes) warms you up in the algorithm.
  2. Educational (threads, how-tos) gets served to the people who engaged with the entertaining post.
  3. Convincing (selling), placed authentically at the end of the educational content, e.g. "SuperX is free to try for 7 days".
  4. Inspirational (screenshots of results and what they mean to you), tied back to your pin post story.
- Then loop back to entertaining. He argues a framework stops you posting randomly, which is why people drop off.
- Do cool things first; the content follows from them. His dancing feature demos only existed because he built the feature.
- He notes that top-of-funnel entertainment with selling at the end is how most big content earners make money.

## Treating X like a room: engagement and authenticity

- Engagement pods with friends are a good idea. Otherwise, treat X as a huge networking party: don't shout from the rooftops; go person to person, listen, and join conversations on your interests.
- Treat early interactions as friendships, not transactions. He met Florian, Mark Lou, Tony Dinh, Jack Friks and others this way, and says most friends he meets in person now came from X.
- On authenticity: he cites Robert Greene's view that authenticity is a performance. His practical version:
  - Pick inspirations and copy them at first, then add your own take. Mine were Marc Lou (filming in public), Daniel Dalen (video style) and Peter Levels (raw, opinionated, unfiltered).
  - Authenticity comes from discovering what you genuinely enjoy and releasing pressure about the result.
  - Share a bit of what's in your head as it happens, e.g. "I was genuinely crapping myself in the airport".
- He loved making videos and chasing the algorithm since childhood (YouTube at 10, a meme channel at 15-16). He says combining your own skills makes you distinct.
- He warns against turning passion into pressure: after his first YouTube video hit 125,000 views, he burned out on the second.

## Consistency, the daily video and the minimum viable video

- Consistency works like escape velocity for a rocket: pauses cost you more than they save, especially early. People forget you within 24-48 hours.
- Appear online daily, but you don't have to create daily. Schedule content: spend an hour on Monday scheduling seven days of tweets.
- Scheduling can't capture real-time opinions on trends, so mix it with live posting.
- He posted a daily video documenting SuperX growth from about $1,000/month to $10,000/month, taking about 131 days. Afterwards he went weekly because daily videos burn a lot of energy.
- Minimum viable video: on bad days (he was in hospital with food poisoning and neck issues in Colombia) he filmed a quick clip, put a song and a caption over it, and still posted.
- The daily video helped SuperX because it showed an involved founder, and people started recognizing his face in person.
- Daily doing something others won't (like Mr Beast's endurance challenges) makes you stand out.

## What works in the X algorithm (as of Dec 2025)

- X rewards time on platform. His feed is dominated by media posts and quote tweets, so video or images plus text is what gets seen.
- Winning format: media plus a long, honest opinion that invites debate. His Singapore posts (video or photo plus long text) got 607,000, 574,000, 181,000 and 73,000 views, with a post the day before at 133,000.
- Post unfiltered, as if in a group chat.
- Opinions must be real. Intentional rage-baiting or engagement farming loses integrity and brings haters; he got death threats from some posts.
- Evergreen concepts resurface: a repost two or three months later with your own spin goes viral again, because "two or three months is like 200 years on the internet".
- He runs experiments on his own profile constantly.

## Taking over SuperX and rebuilding it

- SuperX began as a Chrome extension built by Hugh. Tibo Maker (Tweet Hunter and Taplio exit) acquired it, raised prices and wanted a web app. Hugh left and Tibo took the remaining shares.
- Tibo posted for a full-stack maker. Rob was closing his agency and had been building a similar tool called Brandcast, so he applied with a proof of concept.
- His one-week trial was building an AI tweet inspirations feature, built during his week in Rio. Tibo chose him over the other finalist. They work async over Slack with no video calls since January.
- The inherited product: five repositories, four EC2 instances, a Chrome extension, an SEO server and a vector-embedding server for similarity search. He had to learn and build CI/CD for each.
- Migrations he had to do:
  - X API v1 to v2, and repeated changes since (including pay-per-usage).
  - Vector database (Milvus) off Docker to the cloud when load grew.
  - Media uploads moved to Cloudflare R2.
  - OAuth 1 to OAuth 2, with token syncing between extension and web app.
  - Lemon Squeezy to Stripe. Subscriptions had to be recreated manually, and the right card per subscription copied. A first batch failed, costing MRR, and he emailed users directly.
- From January to July 2025 he earned about $1,500 total, with MRR hovering between $600 and $1,000-1,200. He says he doubted nearly every day, as "I'll put out a fire here and 10 other fires will ignite".
- He half-wonders whether rebuilding from scratch would have been faster, but feels it was the right call.

## Launch, the churn curve and feedback

- Launched in July 2025 at about $1.2K MRR. About $1,000 MRR was added within 24 hours, then viral videos took it to $6K in 45 days. He woke to Gmail threads of 100 trial signups at a time.
- After the spike, churn followed. MRR dipped to about $7K, rose to about $8K, then $10K, then about $13K after a viral post about $10K MRR. It's now about $14K.
- Early feedback hurt (users said it "sucks"), but he learned to talk to churned users. Critical feedback "is gold dust". One user sent a QA spreadsheet, and he gave that user generous credits.
- Every friction point is lost revenue. Separate signal from noise: some churners aren't the ICP (e.g. students wanting big discounts) and he won't discount for them.
- His biggest mistake was perfectionism and trying to fix everything. His key lesson: focus on the 20% of work with 80% impact (e.g. auto DMs, multi-account, onboarding) over minor SEO caching bugs.
- Rob notes fixes like auto DMs came directly from churned users saying they stayed on Tweet Hunter for that feature.

## Finding viral features and the path to $100K MRR

- Feature ideas come from X: he spotted Eddie Zhu's viral tweet simulator and Cursive-for-tweets style trends via SuperX's popular posts tab and daily feed use. He builds them, then demos them.
- Repackaging works: the first Cursive for Tweets launch got about 80,000 views; the update with him dancing got about 130,000. Dancing demos came from boredom while stuck in his room with hip problems; the wooden spoon mic came from Instagram.
- Channels: X is the main one, plus Google Ads (marginally profitable at a few thousand dollars/month), Meta Ads (just started, negative return so far) and affiliates (e.g. Greg Isenberg's video after Dan Koe mentioned SuperX).
- He currently posts less on X to avoid spending his "energy meter" on signups that would churn, until churn drops.
- Math (max MRR = incoming revenue divided by churn):
  - 15 signups a day with 30% conversion gives about $5,265 of new MRR a month. Divided by 30% churn, that's about $17K ceiling.
  - Churn at 5% on the same signups would reach about $100K+; doubling signups to 30/day with 10% churn also reaches $100K.
- Plan: auto DMs, multi-account and team seats with discounts, better onboarding, and "SuperX Coach", turning the product from a "gym membership" into a "personal trainer" that gives daily AI-assisted actions and shows results.
- Tibo's advice: SuperX must be about 10x better than Tweet Hunter, so cover its table stakes (like auto DMs) first. Tweet Hunter and Taplio were separate products, so avoid adding LinkedIn to SuperX.

## Mindset

- Confidence comes from doing what you said you'd do. At $14K MRR he has financial breathing room to be more creative.
- When it got hard (March-April) he felt like "a deer against a wall being hunted by lions" and drifted toward shiny-object thinking. His advice is to stay committed if you believe there is a path.
- SuperX was a validated, proven product (Tweet Hunter reached $250K MRR), which kept his confidence up.
- To his past self: look after yourself, trust your gut, and if you're not excited to wake up to the work, change something. "If you're tired of starting over, stop giving up."
