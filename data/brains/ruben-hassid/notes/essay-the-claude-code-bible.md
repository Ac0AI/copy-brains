## Vibecoding is for prototypes and personal tools, not for getting rich

- Ruben says plainly: "I won't sell you a get-rich-quick Claude Code guide." He has never said "get rich with AI". He argues that building a functioning company is far more complex than knowing how to prompt an AI.
- He defines **vibecoding** as building a website or app by talking to an AI in plain English while it writes all the code.
- He says it is still worth your time for two things:
  - **A clickable version of your idea** that you hand to a developer or designer so they "stop guessing what you meant."
  - **A small tool that beats a plain Claude chat interface**, built just for you, your team, or a few customers. Rough edges are fine because nobody else sees them.
- His examples:
  - **Mockup for his dev team:** for his NYC consulting firm GPC, which helps companies adopt AI (today, Claude), he builds a working site before devs build the robust version. He says devs and designers "feel your vision" from it.
  - **LinkedIn dashboard:** he connected a public LinkedIn API through Apify to a dashboard. It scores his posts by a mix of likes, comments and reposts, and lets him click through to each post or search by subject. He built it only for himself and uses it daily. He says custom AI tools for companies with a budget are how he makes money.
- Rule of thumb: "Do not take longer to build it than to consume it." He calls vibecoding for hours something you will never use "performative productivity."

## Setting up Claude Code as a non-coder (7 steps)

1. **Get the app:** download from claude.com/download, get Pro at $20/month, and open the Code tab. $100/month gives more credits.
2. **Make a clean, empty folder** used only for this. It holds no passwords or private files, since Claude touches only this folder.
3. **Turn on bypass permissions:** Settings, then Claude Code, then "Allow bypass permissions mode." Otherwise you click "allow" about 30 times per session.
   - He notes bypass is still a little buggy on some versions.
   - At a company, ask IT first.
4. **Connect Netlify and Supabase** via Settings or the + menu, Connectors. Both are free for basic needs, and he says he is not affiliated.
   - Netlify puts the site live on the internet.
   - Supabase holds data and logins.
5. **Select the folder** with the folder icon.
6. **Pick the model:** he uses Opus 4.8 (High). Smarter models use more tokens.
7. Start building.

## The "mega prompt" and how to use it

- He pastes the same prompt every time he opens Claude Code. Its structure:
  - Role framing: "You're my CTO. I'm the CEO, and I don't write code, and I don't want to read it."
  - Bypass is on, so don't ask for approval of technical steps.
  - Talk in plain English, only about what he can see, click or decide.
  - State the end goal (e.g. a booking page for a coaching business).
  - **Interview first:** ask everything needed, one question at a time via the AskUserQuestion tool so he can click answers, about what it does and how it looks. Claude decides the technical parts.
  - Deploy on Netlify with a public link.
  - Use Supabase with Google login and Row Level Security so each person sees only their own data.
  - Match the shared screenshot for design.
  - Build one piece at a time, then open it, check it on a phone too, compare to the screenshot and fix problems before showing him.
- Demo: he gave it a Calendly screenshot plus a one-liner for a "book a call with me" site. Claude asked many click-to-answer questions, and the site was done and live in 24 minutes.

## Getting better results: references, one piece at a time, and the fix loop

- **Start from a screenshot.** Screenshot a site you like and say "Build me this, but for my thing." He calls it the fastest start.
  - His inspiration sources: Dribbble, Awwwards, Godly, Land-book, Lapa Ninja, CSS Design Awards, Mobbin, Page Flows, Refero, SaaS Landing Page, Saaspo, One Page Love and BentoGrids.
- **Describe the end result, not the steps.** Screenshot plus end-result description are the only two inputs. Example: "A clean landing page for my coaching business. Big headline, three offers, a booking button, my socials in the footer."
- **Go one piece at a time:** build the home page and get it right, then the next page. Each message is one small job, "not twelve at once."
- **Run the loop:** look at the result, write what's wrong as a numbered list in plain words, paste it back, refresh. Expect five or six rounds per page.
- **Stuck on a bug?** Screenshot it, paste it, and say "fix this."

## Avoiding the generic "AI site" look

- Everyone vibecoding ends up with the same design, so he suggests adding taste without touching code.
- **DESIGN.md:** a plain-text design-system file with exact colors, fonts, spacing and rules.
  - Download one for brands like Stripe, Notion, Airbnb, Linear or Claude from getdesign.md (he is not affiliated), or from designmd.app, which has 400+.
  - Drop it in the folder or the first prompt and say "use this for all the styling." The whole site then looks like one designer made it.
- **shadcn/ui:** ask Claude to "use shadcn/ui components" for professional-looking buttons, menus and forms.
  - It's not necessary and burns many tokens.
  - He says it works best for dashboards, SaaS apps, landing pages, onboarding flows, settings pages and form-heavy screens.
- **Be specific:** paste two reference sites, name the font, ask for more whitespace, give exact colors. Stop typing "make it look good."

## When not to use Claude Code, and what it costs

- **Wrong tool cases:**
  - A small one-off widget: use an Artifact in a normal Claude chat ("Make an interactive [...] for [...]").
  - Documents or spreadsheets: use Claude Cowork, which he recommends for most of your work.
  - A single image: use ChatGPT with thinking set to High, and upload references.
- **Cost:**
  - Pro ($20/month) is enough to start.
  - Claude Code uses usage faster than chat because every message re-sends the whole conversation and every file read.
  - His habits to stay under the cap:
    - Fresh chat per task.
    - Sonnet on the $20 plan.
    - Opus 4.8 High only on the $100 plan ("and you should").
    - Point Claude at files rather than pasting big text.
    - Ask for a plan before big changes.
  - Check usage with `/usage`.

## Prompt templates for what to build

His fill-in-the-blank "what Claude needs to build" lines, each with specifics in brackets:

- **Landing page:** headline, short pitch, 3 offers with prices, testimonials, a booking button, a calm-and-premium feel with lots of whitespace.
- **Mockup for a dev/designer:** a clickable mockup that doesn't need to work, plus a plain-English spec of what was built.
- **Boring-job tool:** drop in an export of orders, get a clean monthly report back.
- **App with login:** students sign in with Google and see only their own progress.
- **Dashboard:** reads a spreadsheet in the folder and shows revenue, new clients and refunds as charts.
- **Replace an overpriced app:** an internal tool doing only the 3 things the team uses. Example he cites: an HR lead with no coding background built org-chart software in 3 days to drop a vendor.
- **File reader:** pulls fields from every PDF in a folder into a spreadsheet. Example he cites: non-engineers extracting details from 150+ contracts in minutes.
- **Marketing variations:** paste a best ad, get 10 versions for different audiences in the brand voice. Example he cites: Anthropic's growth marketing team.
- **Inbound sorter:** scores applications against 3 criteria and sorts them best to worst with a one-line reason. Example he cites: a SaaStr team tool.
- **Small paid product:** one screen, Google sign-in, a $9 payment.

## Handing off to a real developer

- He says a prototype becomes real when it needs proper security for 1,000+ users or holds other people's private data. Then you bring in a human coder.
- The handoff is easy because everything lives in one folder.
- Before sending it, he has Claude write a `HANDOFF.md` in plain English covering:
  - What the app does and who it's for.
  - What's built and working versus rough or unfinished.
  - The stack (Netlify, Supabase) and where key pieces live.
  - What a developer needs first: how logins work, where data lives, secrets and gotchas.
  - An honest note that it's a prototype built by description, not production code.
  - A five-minute read.

## Learning AI and company adoption

- His learning path: Claude for Dummies, then Claude Cowork, then claude101.com (which he vibecoded himself).
- His view: "you should not learn AI by yourself. It's too much for one person."
  - Alone or at a company under 50 people: learn with your team through his free newsletter, or join his Circle ($200/year, about 1,500 members, direct access to him).
  - At a company of 50+: having a few people master Claude isn't enough. Getting 50 people to adopt AI is not the same as getting 1 person to. He offers a free discovery call to assess the company.
- He says he is not paid by Claude or any AI company and doesn't pick sides. He aims to be the "filter to the AI noise" for his 700,000 readers, most of whom came via someone they trusted sharing an article. He asks readers to share it with one person.
