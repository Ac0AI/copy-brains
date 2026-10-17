## Scraping your LinkedIn posts for $2 per 1,000 instead of using your own account

Ruben says not to run the extraction from your own LinkedIn account ("never do any automation"). Instead, use a third-party tool that safely and legally pulls publicly visible posts, since all LinkedIn posts are public on the web.
- He uses Apify and says he is not affiliated: "it's just the best way to do it."
- Cost is about $2 per 1,000 posts. A free Apify account comes with $5 of credits, enough for roughly 2,000 posts.
- Steps:
  1. Create a free Apify account.
  2. Open the LinkedIn profile-posts actor.
  3. Enter a LinkedIn profile URL plus the settings, then click save and start.
  4. Wait a couple of minutes.
  5. Export the results as a spreadsheet.
- His own run scraped 489 posts for about $1, covered by the free credits.
- The method works for any account with 30+ posts, not just your own. His demo used Alex Hormozi's posts.

## The report prompt: turning the export into a decision-ready analysis

Ruben uploads the spreadsheet to Claude Cowork with one long prompt, run once. It makes Claude act as a coach producing a serious analytics deliverable (50 to 5,000+ rows).
- **Fixing misleading columns.** The `type` column says "post" for every row, so format is derived from which media columns are filled: document means carousel, `postVideo` means video, `article` means shared link, `postImages` means image, otherwise text-only.
- **Engagement.** Likes + comments + shares. The reaction mix (like, empathy, praise, funny) is used to read emotional register.
- **Dates.** There is no date column, so the prompt decodes the timestamp from the activity ID: take it as a 64-bit integer, shift right 22 bits, and read the result as Unix milliseconds. This feeds cadence and best day/time analysis.
- **Rigor.** Quantitative stats are computed in code across all posts so numbers are exact, and the outlier multiple used must be stated.
- **Visual review.** Claude must open the actual images, video thumbnails and carousel slides (via the transcribed-document URLs) rather than judging from captions. It describes the hook text, style (selfie, screenshot, chart, quote card, meme) and layout, and ties them to performance.
- **Required report contents:** bottom line in 3-4 sentences; winning formats with average, median and sample size; winning angles and hook patterns; biggest over- and under-performers with links; Stop / Continue / Start; cadence, best day/time, length, comment-to-reaction ratio, fatigue signs and the single highest-leverage change.
- **Outputs:** two new files, a written report and an SOP for the next post reverse-engineered from the top outliers (hook formula, format, angle, visual template).
- **Integrity checks.** If data is missing (too few videos, dead media URLs), Claude must say so, and re-check headline numbers against the file before finishing.
- His Cowork run took about 8-10 minutes and spawned agents to go through the whole file.

## Turning the report and SOP into a reusable skill

To avoid re-pasting the same prompt and context, Ruben continues in the same chat and asks for a skill.
- Prompt pattern: `/skill-creator Create a skill combining what matters inside the content report and the SOP to write viral posts for [person]. Call the skill "[name]".`
- The skill must use the AskUserQuestion tool, tailored to what the person does best, to collect input before generating angles, hooks and captions. The user then picks favorites and assembles the post with Claude.
- After saving, he invokes it in a new Claude tab with the `/` command. It returns five angle options (he says he could ask for 500). After he picks one, Claude searches the web and produces the full caption plus guidance on the image to pair with it.
- Everything is optimized only from the person's own best posts, "nothing from the internet (which is probably outdated anyway)."
- He notes you could technically start a ghostwriting agency this way.

## Recreating one ultra-viral post as a skill

For someone who "went ultra-viral once," meaning a post that did really well for their own standards (5 usual likes and one with 100 counts), Ruben builds a skill from that single post.
- Example: an Alex Hormozi post with 9,500 likes.
- Method: screenshot the post (and describe the video if there is one), upload it to Claude using Opus 4.8, and run a `/skill-creator` prompt.
- The prompt asks the skill to capture the recipe: the format, the hook (first two visible lines), and the entire caption, covering how it is written (line breaks, cadence, tone of voice).
- The skill stores the full viral post for reference. When invoked, Claude iterates through questions and answers until the new post is generated, and the new post can be about anything, for anyone.
- Claude even tells you not to use AI where appropriate, which Ruben likes.
- Warning: don't repeat an ultra-viral recipe over and over. "It's not because burgers are tasty that you want to eat burgers every day."

## Where the approach falls short (his own caveats)

- **AI isn't creative.** It follows instructions well, but the value comes from combining its capacity to digest lots of context (400+ posts) with your human pattern-matching.
- **Not faster.** A good post still takes time; the gain is spending time more efficiently for better odds of going viral.
- **Expensive.** Claude costs him $100/month.
- **Not for one post.** Worth it only if posting at least weekly and with enough past posts.
- **Garbage in, garbage out.** If you are bad at LinkedIn, training on 400+ bad posts won't help; feed it good posts first.
- **Only good at repeating.** Ultra-viral is often novelty, but everyone starts by mirroring (not copying) the best.
- **Don't be a copycat.** He dislikes people who copy and add a tiny "credits: Ruben" comment.
- On a reader's question (only 3 posts so far), the essay's answer is implied by these limits: it needs a body of good posts, so a newcomer would study someone else's profile.

## LinkedIn credentials and newsletter positioning

- Ruben says he gained 340,000 new followers last year with $0 spent on ads.
- He runs a paid LinkedIn "Circle": 3,700 people joined at $200 a year. LinkedIn caps connections at 30,000; he has 18,000 and can still connect with about 12,000 more. He sent 3,000+ connection requests manually.
- He says he is not tied to any model ("I don't care about Claude, ChatGPT, Grok, Gemini") and is not paid to make the newsletter.
- His stated goal: be "the greatest filter to the AI noise," publishing twice a week on the "How." The newsletter has 700,000+ readers, most arriving through a trusted person's referral, so he asks readers to share it.
