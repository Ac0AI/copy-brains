## From college to Twitch: how Theo became an engineer worth hiring

- Theo graduated with music and CS degrees and little to show: one internship he describes as bombed (absent mentor, a 5,400 RPM drive on a $200 laptop) and a Chrome extension, "Chrome Tana", that redirected Bing searches elsewhere.
- He got into Twitch via two people who had unusual faith in him. He bombed the interview but received a 3-month contract, then a 3-month extension, then a full-time offer after he "locked in".
- He credits his manager Waba for functional programming and Elixir, and says that manager "cracked the whip" to make him the engineer he is.
- On the creative team (non-gaming Twitch) he wrote the code for the Bob Ross and Power Rangers marathons and helped start Clips TV.
- The team was two engineers, one manager and about seven partnerships people. Nobody there understood the music/hip-hop world, so he took it over, helped onboard Kenny Beats, and befriended John Wayne (a childhood hero) after offering help in his stream chat.
- The lesson he took: if you reach out to people you look up to "with actual value to bring them", there's a good chance they reply and a good chance they're awesome. He says this shaped how he does everything after.
- From this team he learned to be in the weeds with the people using what he builds, and says he has "never been able to give up" that habit.

## Safety org and the React rewrite: learning to ship inside a big company

- After the creative org was folded into VOD and he was "thrown overboard", he landed in the safety org, where he had to learn Go (he hated it) and moved into front end.
- He joined as Twitch rewrote its site from Ember to React (the Twilight rebuild, the 2018 beta). He admired a team that rewrote everything from scratch at a ~1,500 person company and succeeded.
- He got good at front end fast, was promoted, helped grow the team from 2 people to about 30, and ran a large number of interviews.
- What he says safety taught him:
  - How to ship inside a moving org.
  - How to fight for users and care about details.
  - How to think full stack.
- He built Mod View, which he names among the things he's most proud of, and talked directly to the moderators using it daily.
- He advises people to "get a normal job" so they can find a team they love, because those connections last. Many of his later successes trace back to people he met in safety, including YC contacts.

## Why he quit Twitch (twice), and the mistake of delaying it

- In 2020, after Mod View shipped, he moved to the creator team to bring what he learned to the creator dashboard, which he says is still a worse experience than Mod View.
- He calls this a mistake not because of the move, but because it was a way of "delaying a thing I'd already been thinking about, which was quitting". He told himself he'd get promoted within a year, and if not he would finally quit.
- The new org disliked fast shipping because it made them look bad. He says one blocker didn't merge a single PR for three months.
- COVID removed his favorite part of the job: lunch and dinner conversations with smarter, more experienced engineers.
- A colleague (Merryweather) told him he was glad Theo was at Twitch because it showed the early-stage energy wasn't gone. Theo later realized this meant he was bringing startup energy to a company too big, and "I cared more about the users than the company did. And that's never a good place to be in."
- He quit in early 2021. His last day ended with his account being deactivated mid goodbye call.
- He joined a music startup the following Monday, wrote no break into his schedule, and left after a founder fight. He says he wrote the React Native app in 3 days (the contractors had shipped nothing), then rewrote a ~50,000 line backend in ~500 lines with more features. It was blocked for lack of unit tests, so he wrote 600 lines of tests with 100% coverage and handed in his notice with it.
- Pay went from about $475K/year at his Twitch peak, to $125K at the startup, to $0.
- He also says arguing with people who "don't get it" was a skill he had to learn, because at Twitch he had argued with people smarter than him who would hear him out.

## The decision to start a company

- After quitting he interviewed at Railway (received an offer), Station Head (a music startup that wanted him) and Retool (~10 employees then, 500+ now).
- Alongside, he had a side project: Round (round.t3.gg), a WebRTC tool for collaborative live streaming. A creator had said they'd "pay any amount of money for something that sucks less than Discord".
- It was his first Next.js project (originally Vite on Vercel with an API directory).
- Gun, an ex-Twitch coworker running VShojo (the biggest VTuber org in the West), asked him for one feature, then asked "What do I have to pay you to work on this full-time". Iron Mouse was the first user.
- The decisive pushes: Jake (Railway CEO) said "I see where your heart is. You need to do a startup"; Murray (Station Head) said the same; Bill said it was time.
- He had been avoiding it: he switched teams instead of quitting Twitch, joined another small startup instead of committing to his own, and interviewed widely so he could work on it on the side. He says that hesitation was the pattern, and that he "caved" and incorporated T3 Tools Inc. in September 2021.
- The plan was a suite of creator tools for live and video, "the Adobe suite, but for live video". He says he used to make fun of startup bros and still does, "just with much more ammo".

## Raising money and getting into Y Combinator

- Seed round: about $300K from "rich homies", with about 15 to 30 people writing $10 to 20K checks, for under 5% of the company. Dax's was the first check to land, Bill's the second, the rest friends from Twitch, old coworkers and college friends at Microsoft and Dropbox. Jake's advice: give a hard deadline to pay the SAFE and cut off anyone who misses it. Jake then missed it.
- Raising from friends was easy, but he says he didn't know how to explain the company to an investor, so he applied to accelerators. South Park Commons rejected him with no feedback; he sent roughly the same application to Y Combinator and got in.
- The application needed a one-minute video. He recounts it as cringe; he was an engineer more than a marketer.
- Michael Seibel interviewed him. His winning answer: "all video is live" until it hits a point where it dies (SD card, transfer, transcode, sort, edit). Make more of the pipeline live and synchronous and production gets more efficient. He still believes it.
- The deal: $125K for 7%, versus the ~5% he had just given up for $300K, so it looked like a bad deal. Michael gave him until 8:00am to decide, calling at 7:50.
- He was up all night. Bill said he trusted Theo but would be "very disappointed" if he said no. Waba, expected to disagree, replied: "You'd be [ __ ] stupid to not take the deal Theo."
- He says YC was one of the best things he ever did. Michael's advice on the call: "You need to find co-founders. You do not want to do this [ __ ] yourself", and Theo convinced his roommate Mark to quit and join on December 31st before the batch (Winter 2022).
- Michael also pushed him, through introductions to broadcast and creator-business people (including the Frame.io founder), toward realizing a product for Twitch streamers was a lost cause.

## YouTube started as a side effect, then outgrew the product

- He started the channel to explain things he couldn't in Twitter Spaces, not as a career. He was a Twitter-Spaces regular at the time (that's how he met Tanner Linsley and Jacob, and how he found tRPC) and wanted senior dev conversations that didn't exist.
- The T3 stack came from rewriting Jacob's project in two hours to prove the stack. The "T3" name predated Tailwind/tRPC: it came from a Twitch friend's name and a pun on Tier 3 subs.
- A Dan Abramov mock-interview video (done to showcase a good non-LeetCode interview and Ping) blew up the channel, getting ~100K plays. His next video (Solid, Christmas Eve) bombed, which he says broke his heart, so he went all in on YC for three months and posted almost nothing.
- By the end of YC he says he "won the Twitch streamer market" and the reward was about $8K a month: streamers don't spend much, don't stick around, and will use Discord even though it sucks. He had hired six people.
- In April 2022 he went from one video a month to weekly or more, motivated by wanting to nerd out and understand why creators wouldn't use his product. He hit 100K subs in the first year and never expected more than 10K.
- Key realization: "I was more popular than all but like four of our thousandish users." Live streaming wasn't a growth channel, just engagement; his Twitch viewers came from YouTube videos.
- He learned to make "something people want" from YC, and says it's easier if "you are people": build what you deeply want, then compromise to see what others want it for. He cites T3 Chat (voice mode is a thing he'd never use, but users want it).
- Editing his own videos made him better at speaking, copy, branding and fundraising. His hiring advice: "Don't hire for the thing you want to avoid. Hire for the thing you love so you'll go get good at the thing you're avoiding." He edited for about 6 months longer than he should have, and only then hired the right editor.

## The painful part: overhiring, layoffs, and learning not to sell to creators

- By January 2023 he accepted he "did the startup thing wrong" and was "cosplaying as a big company". He had about 6 employees for roughly a hundred recurring users and about three support questions a day: a support person, two junior engineers, a full-time designer.
- The design polish didn't move conversion: the product's value was how well and reliably it worked. Low-latency video infrastructure was also expensive.
- He laid everyone off, with generous severance and help finding jobs, right before the wider layoff wave. He says he "effectively blown a million dollars" paying people to pretend to be a big company, and that it took about 9 months (April to January) to recognize.
- The realization that triggered the rethink: he was too exhausted by content to adopt a new creator tool himself, so why would creators? His conclusion: "if you're building a tool that's exclusive customer base is creators and influencers, you are going to struggle immensely to even make money, much less be a scalable business." Dev tools are much easier to sell.
- Ping capped around $8K MRR.
- He is now hard on startups that overhire for the same reason.

## Finding the winning product: small tools, then T3 Chat

- Webhook Thing (replaying webhooks in dev) got little traction. Pick Thing (background removal for thumbnails) became UploadThing after he again got frustrated with S3 setup; the original bucket was still named "P thing".
- UploadThing was the first dev product with real traction beyond the T3 stack, peaking around $12K MRR. He admits much of the adoption was because he was a popular YouTuber, and that the problem "just wasn't big enough or cared about enough". Julius (from the community) started part-time while in college and is now essential.
- He later made Marker Thing (open source, free, used for stream topics → CSV → video chapters) and a real Pick Thing (about $1 to 2K/month with good margins). The business was losing money but he figured four more Pick Things would reach break-even, "default alive" in YC's phrase, at roughly $22 to 25K/month.
- T3 Chat: in December 2024 DeepSeek V3 felt like Claude at under a fiftieth of the price, but its website was broken. He built "Better Chat" over the holidays (Dec 24 to Jan 1), then Mark joined for payments. He found T3.chat available at retail price.
- When V3 slowed from ~180 to 200 tokens/sec to 60 to 70, he found GPT-4o mini on Azure was fast and used YC cloud credits to run it as the default, and charged $8/month for unlimited (Mark's idea, which Theo says helped a ton).
- Results: within about two weeks it made more than the rest of the business combined, and soon after the company was profitable. He won't share revenue numbers because they help investor negotiations.
- He says he expected five products at $2 to 4K/month each, not one that "trounced everything we had built combined". He also got deep into AI quickly by reading reports, following Artificial Analysis and talking to people like Simon, frustrated by AI "grifting".

## What he concludes about building a company

- "At no point did I correctly predict what was next for us. I could only ever see what wasn't." His path was a series of recognizing the current path was wrong and cutting it off, not predicting the right one.
- His through-line: caring deeply about users, "caring too much about the users of the thing and what experiences they are having", and making stuff that's good that he's proud of.
- The biggest unlock: removing the salary, the boss and the rival. As an employee he fixated on managers, PMs and reorgs as the enemy. After leaving, "the only thing in my way is me". Having nobody to blame, he says, is what changed his life, and success was inevitable as long as he didn't burn out or grow to hate himself.
- His mistakes were his own, and his team suffered for them.
- Today the team is smaller than at YC and smaller than the team he formed at Twitch by an order of magnitude, yet building bigger, more successful things with more users who care more.
- He also wants to correct a misconception: he did not start the company to cash out on YouTube. The company and the product came first, and the channel started as a side effect.
