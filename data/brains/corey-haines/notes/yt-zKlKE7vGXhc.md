## Corey's view: most "AI CMO" products are a scam

- Corey says "most AI CMO products are a scam" and discloses that he is building a competitor, Magister (magistermarketing.com), so he is critical of others by his own admission.
- He says the core failure is builders without subject-matter expertise. They build an "AI CMO" from what they think marketing is, not from what marketers do day to day.
- His example: an early "AI CMO" that only found Reddit posts to comment in. He calls that one tiny, niche script, not a CMO's job, and notes not every company needs Reddit.
- People conflate marketing with social media and ads. He says modern digital marketing is "like 20 things", far broader than sales, engineering, design, support, customer success or finance, which each have maybe four to six parts.
- A real AI CMO must be a horizontal layer covering everything a marketer does: reporting and analytics, channel-level strategy, and granular tasks like writing copy, making an ad or writing an email.
- His read on why fakes sell: they look flashy and get attention even though they don't match real marketing work.

## What Magister is designed to do

- Magister is an orchestration layer with dedicated tools for every part of marketing, plus the integrations and connections needed to do any of it.
- It is autonomous and proactive and runs in a sandboxed, safe environment.
- It has its own web UI and is also getting an MCP and CLI, so he gets "the best of both worlds": terminal power and flexibility, plus a UI for analytics and background agent work.
- He wants checks and balances: good reports, change logs, history and paper trails of what the AI did. He says Claude Code "is just not going to be able to give you that level of detail and transparency."
- Dogfooding example: he moved management of Google Ads for his SaaS product TrueList into Magister.
  - In Claude Code he had to prompt for every report or analytics dump, and the formatting was awkward to copy.
  - In Magister he gets daily emailed reports and briefs, live analytics dashboards, and multiple parallel chats.
- Status: a waitlist, with beta invites in weekly rounds.

## Why he built the Marketing Skills repo

- In January 2026 Anthropic released skills. Corey had about 10 years in SaaS marketing, years of content, and coding skills from a 2-week boot camp about 3 years earlier, and says everything "came together."
- His agency (Conversion Factory) already had SOPs. Skills let his whole team use Claude Code the same way, with the agency's tried-and-true process.
- Custom GPTs and Claude Projects failed him. His "140 SaaS marketing ideas" resource was too big for the AI to hold, so it chunked it into about 20 at a time and overwrote old work, which "was driving me crazy."
- A skill is more than prompts strung together. It becomes the source of truth and playbook, easy to scale and update, and with GitHub you get versioning, a paper trail and the ability to revert.
- How he built it: one Friday afternoon he took ebooks, newsletter editions, course material and agency SOPs, used Anthropic's skill-creator skill, and tested by dogfooding.
- He open-sourced it with no strategy. It hit about 500 GitHub stars in a couple of days, and he briefly wondered whether to give it away free. His conclusion: "the benefit is probably going to outweigh the risk and someone's probably going to do this so it might as well be me."
- Open source risk he names: forks republished as someone's own work.

## Security and discovery for skills

- Vercel's Andrew Qu built the skills directory skills.sh, with an npm-style installer and security scanners. Corey says it gave the marketing skills a lot of visibility, and a leaderboard cycle fed more users.
- His advice: before installing any skill, check skills.sh or ask Claude, and look at the security rating. Prompt injection is a real risk, and many people install random skills without knowing what a skill is.
- Install advice: since it's free, install the whole set or use the plugin, not one skill at a time.
- Most popular skills, in his guess:
  - SEO audit, which he thinks is popular because it feels approachable and the SEO community is the most technical marketing crowd.
  - Product marketing, referenced by every other skill because it defines ICP, differentiators, audience and brand voice. Cherry-picked skills will ask you to install it.
  - Social content, because people want to automate social media.
- He says popularity reflects what people think AI can help with or what they do daily, not necessarily what is most useful.

## His working setup (he notes it could change in 6 months)

- Daily driver is Claude Code in the terminal. He accepts the terminal as a "curmudgeonly cranky old man" tool because it is much faster and more powerful, though he now finds the terminal UI less worth the trade-off.
- Solo (solo.term.com, by Aaron Francis) for project-based agent management.
  - Nested project folders, with several agents sharing context.
  - It exposes an API and MCP so the agent can start dev servers in a visible, controllable place with restarts, notifications and debugging.
  - He runs about 30 tabs at once.
- Warp for unstructured work (new folders, writing a new skill), with a good markdown editor.
- Obsidian as memory: "the best memory is just files on your computer." It stores markdown, which AI handles best.
  - He keeps a "raw" folder and dumps transcripts, tweets and YouTube videos in, asking the AI to process and save them.
  - Later he can say "I'm thinking about doing X" and it searches the vault.
- He has Open Claw, Hermes and similar installed and uses them in Slack, but they aren't central. He feels they lack transparency.
- He has a Max Claude subscription and hasn't had to think about token limits.

## Data feedback loops across marketing

- Most marketing is data-driven, so piping analytics into AI gives it richer context:
  - SEO: rankings, impressions and clicks from Google Search Console after changes.
  - Social: test post formats, review engagement, use results for the next batch.
  - Ads: Meta and Google Ads data to adapt strategy continuously.
- Claude Code lacks cron jobs and background self-evaluation, which is part of why he moved ongoing ad management to Magister.
- His rule: AI that runs unattended needs approvals, change logs and history, not "magically happening" actions you can't see.

## AI, taste and craft

- His view: AI is now good enough that everyone thinks they're a genius, but not yet good enough for top practitioners. He calls it "an annoying spot."
- He expects AI to reach senior designer and copywriter level, probably within about 6 months for things like web design. Evidence: every 6 months the goalposts move, as with image and video, and Anthropic's front-end design skill moved output from C to about B/B+.
- Taste still matters because you need it to recognize A/A+ work and push AI past B/B+ output. He builds taste by doing the work hands-on.
- His example: a woodworking class where he made a "stupid three-legged stool", which let him tell handmade from manufactured, how pieces are joined and what wood is used.
- He worries many will stay complacent with B-level work, and notes client sites often self-rate an A when they are a B or C.

## How he learns: skip business podcasts, be curious and resourceful

- He mostly avoids business podcasts and spoon-fed takes, which he finds C-to-B content that can pull him toward chasing the wrong things.
- Instead he finds primary sources, researches himself, asks questions directly and uses Claude or ChatGPT deep research. He says relying on podcasts, he "never would have made Marketing Skills" because the finding was that people weren't using AI for marketing, so he had to figure it out.
- Resourcefulness example: when a house offer hit a seller bankruptcy, he asked Claude Code how to get case records, found a court-records site, bought the documents, and knew more than his agent and the other broker.
- Rule: don't box yourself into "that's not possible." Ask and poke around.

## What he's working on

- Magister: waitlist at magistermarketing.com, weekly beta invites.
- AI training through Conversion Factory, to take teams from zero to Claude Code power users for marketing.
