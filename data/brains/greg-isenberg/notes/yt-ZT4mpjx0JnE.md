## Why the AI roll-up wave is happening now

Greg argues three things are converging, and that this combination usually creates a new kind of business:
- **Owners are retiring.** The "$5 trillion" figure comes from McKinsey, which expects about a million small businesses to sell by 2035. These are accounting practices, insurance agencies and property management firms started in the '80s or '90s with a loyal client base. Kids went elsewhere and employees don't want to run the whole thing.
- **AI can do the work now.** He says he "couldn't have said this eight months ago." Data entry from PDFs, chasing the same missing document, and writing the same status update 50 times a week used to give a hallucinated rough draft. Set up correctly, it now gives a draft someone checks. He trusts his AI agent systems "sometimes way more than my human beings."
- **Service firms are priced as if margins are stuck.** A normal service firm runs at 5-10% profit, and buyers value it that way.

His "black swan" is that agents are good right now. Earlier boomer-retirement talk assumed a buyer would only optimize a little.

## What Thrive and General Catalyst are doing

- **Thrive Holdings** (Thrive Capital, Josh Kushner's firm) has bought close to 50 local accounting firms in about 24 months and committed another $1B.
  - Example: Larsson Gross in Bellingham, WA. It has been around since 1949, with 5 offices and 200 people.
  - After Thrive got involved, it used AI built on OpenAI's Codex. It processed 7,000 returns this tax season, and accountants saved 31% of their time on average.
  - One accountant's task went from 180 hours a year to 15.
  - Interns who prepared returns started training to review them. Greg's takeaway: "The people who used to do the work are becoming the people who check it."
- **General Catalyst** set aside $1.5B for this strategy and, per what Greg heard, put more than $750M into at least 10 companies.
  - Long Lake buys property management firms. It claims 18 businesses and $100M EBITDA in under two years, with margins doubling.
  - Crescendo runs customer support centers and says AI handles about 90% of frontline tickets.
  - Deal structure he likes: roughly 60-70% cash, with the founder rolling about 30% equity into the new company. The person who built the client relationships has a reason to stay and make the handoff work.
- **Caveat he gives:** many numbers are self-reported by young companies that are raising money, and none have been through a recession. He treats them as a strong signal, not proof.

## The funds' playbook and the gap they leave

The playbook, in order:
1. Build the platform (agents and software) before buying anything.
2. Buy a firm people already trust, ideally one with a good brand and long-standing clients.
3. Run the agents in the background alongside the people, so nobody outside sees a change.
4. Once the agents are reliable, move back-office work over: data entry, document collection, first drafts.
5. Buy the next firm and plug it into the same platform.

The math is that revenue stays the same because the clients and invoices are the same. Costs fall because agents do a big share of the work. Profit goes from about 5-10% to 30-40% "if the thesis holds," which is the same business making three to four times the profit.

The gap is deal size. Billion-dollar funds can't spend time on a bookkeeping firm doing $2M a year, because it can't move the needle for them. The McKinsey wave is mostly small firms, so the funds will target bigger and mid-market firms. Greg's question was what the one-person version looks like.

## The solo-founder holdco structure

- The founder sits at the top and owns a holding company, "a company whose job is to own other businesses."
- Each small business under it has a GM, usually someone already there. Example: a senior bookkeeper with 15 years at the firm who knows every client, given a real piece of the upside.
- Every business shares the same agents, rule system, back office and dashboards. You build the layer once, so the second business is easier than the first, and the third is easier again.
- Greg has run a holdco for six years. He says who the GM is matters hugely: weak GMs can't take a business where it should go, and great ones "really fly."
- He describes his own holding company the same way: a few businesses with strong people running each, and a shared layer underneath that keeps improving.

**Why solo founders have an edge:**
- You use the same models the funds do (Codex, Claude Code, Gemini).
- You are the integration. Getting each new business onto the system without breaking anything is the hardest part of a roll-up. You know the clients and read the agent drafts yourself.
- Some owners who spent 40 years building something care who takes over and won't sell to a large VC firm, but may sell to you.
- The deals are too small for the big funds, so you're not competing with General Catalyst.

## Folder structure and agent files

Greg treats the folder structure as the org chart:
- **Thesis folder:** which industries you're in, why, and what a good business looks like. It stops you buying something just because you got excited.
- **Shared folder:** everything every business uses.
  - The agents and global rules.
  - A folder of real accepted work, used to test the agents every time you change something.
  - Runbooks: step-by-step instructions for recurring events, such as day one after taking over a business or what to do when an agent sends something wrong.
- **One folder per business**, with four files:
  - Clients file: who has been with the firm 20 years, who is sensitive, who is loyal to a specific person.
  - People file: who knows what. For example, if only the senior bookkeeper knows how a certain client likes things done, it is written here.
  - Rules file: things specific to this business. Example: reports go out on the third instead of the first because a big client asked for that in 2011.
  - Corrections log: every fix a person makes to agent work.
- If you only set up three files, he'd pick global rules, per-business rules, and the corrections log. These turn agents into something you can trust with a client.
- He says this way of structuring a business is useful even if you never do a roll-up, because it gets more out of AI agents and makes you more AI-native.

## Agent workflow and the "reviewer can block, never send" rule

The flow of work through a business:
1. **Intake agent:** collects documents and chases anything missing.
2. **Prepare agent:** does the first draft. In a bookkeeping firm that could mean categorizing transactions or drafting month-end close.
3. **Reviewer agent:** checks the draft against the rules and sends it back if something is off.
4. **A human approves,** usually the person who used to do the work by hand.
5. Only then does it go to the client.

His most important rule is that the reviewer can block but can never send, and the preparer can't send either. A person always approves before anything reaches a client. He says full automation may come one day, but for now the person is the accountability layer.

Every agent gets a plain-English job description. For the reviewer, it says:
- Check every draft from the preparer before a person sees it.
- Score it, pass it to the person, or send it back.
- What it can and can't do.
- What to check for.
- When it must stop, ask a question and get human intervention.

He says most agent problems come from nobody telling the agent where its job ends. Writing down what it can never do fixes a lot of that.

## A solo founder's weekly rhythm

Greg says it's less hectic than people assume because GMs and agents handle day-to-day work.
- **Monday:** review five metrics per business: profit margin, minutes of human time per job, how often agent drafts need fixing, client retention, and whether key people are happy and staying. If profit rises while clients leave, something is wrong.
- **Tuesday:** one call with each GM. Ask what's working, what's annoying them, which clients need attention, and how you can help.
- **Wednesday:** the corrections log, "the most important hour of the week." Turn recurring fixes into rules. His prompt: compare each agent draft with the version a person approved this week; sort every change into factual error, client preference, missing information or style; for any correction that happened more than once, propose a rule; add each approved rule as a test using the original input and accepted output.
- **Thursday and Friday:** find the next business. Have coffee with owners, learn a new industry, and figure out what comes next.

The compounding asset: "anyone can use the same AI models, but nobody else has your list of every way they go wrong in your kind of business." After a few hundred jobs, that rule list becomes the most valuable thing you own.

## Finding and landing the first deal

- **Sourcing:** Greg says that once businesses reach marketplaces (he names Bizbuysell-style sites), you won't get a good deal unless the listing is highly curated. The best way to find deals is direct outreach.
- **Getting the first one:** pick one industry, such as bookkeeping firms, and sell the owners a service first.
  - Take one annoying job and do it with agents, such as cleaning up month-end for their messiest clients or chasing missing documents.
  - You learn how these firms work from the inside, build your agents on real work, and meet many owners.
  - After 6, 9 or 12 months of good work across several firms, one owner will be ready to step back and you'll be the obvious buyer.
  - "You start by serving them. You earn their trust, and eventually you own one."
- He calls owning multiple businesses "multipreneurship" and thinks you can cash-flow it.

## Objections to AI roll-ups and Greg's answers

- **"Roll-ups always fail; this is PE with an AI sticker."** Roll-ups fail because they overpay, buy faster than they integrate, or the culture falls apart. AI doesn't fix that, which is why the solo version buys slowly, does the integration itself, and prices the business on what it earns today rather than paying the seller for the AI upside. He compares the objection to "don't do startups because most startups fail."
- **"Margins get competed away once everyone uses AI."** Eventually, probably. But there is a window between when your costs drop and when industry prices catch up, and in many industries it is years long. Twenty years of client relationships and your own rule list are hard to copy.
- **"Regulated, high-stakes work needs humans checking everything."** Some does, but checking a draft takes far less time than making one from scratch. People stay, but spend their day differently, with more productivity leverage.
- **"People hate change; staff and clients will leave."** The one he takes most seriously. Some will leave. His mitigations:
  - Change nothing clients can see in the first 30 days.
  - Run agents in the background before they touch anything real.
  - Make the person who knows every client a GM with real upside.
  - Incentivize senior leadership.
- **"This is a fancy way of saying layoffs."** He says early examples show people shifting from doing the work to checking it, with each person handling more clients. He admits many jobs will change. He expects some people to excel in the new roles and some not to meet expectations, and those people will probably be laid off, though he hasn't seen much of that yet.

His conclusion is that the risks are real but none changed his view of the opportunity's size or how to approach it.
