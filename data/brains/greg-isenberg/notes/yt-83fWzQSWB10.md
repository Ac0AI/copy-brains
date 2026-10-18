## Agent SaaS sells the job, not the tool

- Greg's mental model: "SaaS sells software, agent SaaS sells work." A normal SaaS says "here is a tool a team could use." An agent SaaS says "here is a job your team no longer has to do by hand."
- He says it is a big mindset change for both the customer and the builder.
- His argument for why agents beat SaaS: the total addressable market is bigger because the product is human labor, which he calls a multi-trillion dollar market.
- Examples he cites (he says he is not affiliated):
  - **Slang AI**: an AI superhost for restaurants. It answers inbound calls, handles guest questions, manages reservations, routes VIPs, alerts staff to private dining or complaints, and integrates with OpenTable and Yelp.
  - **Same Day**: sells AI dispatchers, sales agents and receptionists to home services (plumbing, HVAC, roofing, pest control). They answer calls and texts, book and reschedule jobs.
- The idea test: "I handle this one annoying job better than a junior employee, faster than an agency, and cheaper than adding headcount."
- His broader view: software is moving "from help me do the work to do the work with me."

## Picking a workflow with a paycheck attached

- Start where people already pay for the work: an employee, agency, receptionist, coordinator or dispatcher. Sell it cheaper and free that person for more creative work.
- Five traits of a good agent workflow:
  1. **Frequent.** Daily is good, hourly is better (every inbound lead, call, ticket, quote request, appointment, order, maintenance request).
  2. **Clear finish line.** The job got booked, the ticket got categorized, the refund got approved.
  3. **Touches existing software.** Gmail, Slack, Shopify, HubSpot, Zendesk, Stripe. The agent needs tools to act and context to read.
  4. **Annoying but learnable edge cases.** Too basic and Zaps can do it. Pure human judgment and version one breaks. The sweet spot is "repetitive work with enough judgment that AI can help."
  5. **The buyer can feel the loss.** Missed calls, slow replies, dropped leads, empty calendar slots, expensive humans doing low-value coordination.
- First rep: pick one niche and write down 20 jobs people complain about.
  - Roofers: missed calls, financing questions, insurance paperwork, appointment reminders.
  - Med spas: lead qualification, no-show recovery, membership upsells.
  - Shopify brands: returns, exchanges, wholesale lead follow-ups.
- Score each job on five things: how often it happens, how expensive the pain is, how easy it is to know the job is done, what tools it needs access to, and who already owns the budget.
- He wants to be "in the business of selling painkillers, not vitamins."

## Shadow the human and spec the agent before building

- Greg says many founders skip this, and it is what gives an unfair advantage and a higher-quality agent. Do it before prompting or coding.
- Watch someone do the job 10 to 20 times. Ask them to screen record and narrate. Ask what makes a case easy, what makes it weird, what they check before deciding, and where mistakes happen. He says you can pay them for this.
- Example: a restaurant host answering "What time are you open?" actually knows when the kitchen closes, which tables suit strollers, when the patio is closed, how to handle a VIP, and when to route a private dining inquiry. "The detail is the product."
- Every agent spec should cover seven parts:
  - What wakes the agent up
  - What context it needs
  - What tools it can use
  - What it may do on its own
  - Where it needs approval
  - When it escalates to a human
  - What success looks like
- The goal is to avoid "agent slop" and build agents that do the work as well as humans, or better, and far more consistently.

## Build the minimal useful agent (MUA)

- Greg warns that fully autonomous employee demos on Twitter often don't work and make a bad business. Start smaller.
- He describes a ladder of four first versions:
  1. **Draft and approve.** It reads context and drafts the reply, quote, summary or next step, and a human approves. Good where there is workflow risk or creativity.
  2. **Triage.** It classifies inbound work and routes it (maintenance request, billing issue, refund).
  3. **Coordinator.** It sits between systems and people: checks availability, sends reminders, asks for missing info, keeps work moving.
  4. **Bounded action.** It does one specific thing under clear rules, e.g. book an appointment, send a follow-up, process a refund under $50. He compares it to an Uber Eats missing-item refund issued automatically.
- He cites Anthropic's agent guidance: many agent problems should start as workflows. A workflow follows a predictable path, while an agent decides more dynamically. Founders should "earn autonomy" by starting predictable and adding judgment only where it creates value.
- Start with one workflow and one promise, for example:
  - "We answer missed calls for roofers and book qualified jobs."
  - "We triage maintenance requests for property managers and schedule the right vendor."
  - "We handle reservation calls for restaurants and alert staff when a human should jump in."
- One workflow that works is enough for day one. Buyers are purchasing agents for the first time and don't want everything at once, especially from a company that isn't Microsoft or Salesforce.

## The product wrapper and evals build trust

- A cool automation becomes a SaaS through the wrapper. "The agent does the work but the wrapper creates the trust."
- Customers need logs, approvals, controls and handoff rules. They also need a way to test the agent before it goes live and to see why it did what it did.
- The agent itself lives in the phone system, inbox, Slack or CRM. The dashboard can be simple, but customers still need a "control room."
  - Restaurant phone agent: call summaries, reservation outcomes, missed human handoffs.
  - Property maintenance agent: tickets created, vendor routes, tenant updates, owner approvals.
- Evals: before promising autonomy, take 50 real examples of the job (50 calls, leads or maintenance requests) and mark the right answers. Run the agent against them to check whether it classified correctly, asked for the right missing information and used the right policy.
- He calls the eval set "the gym." Re-run it every time the prompt, model, tools or workflow changes.
- Evals are also a sales asset. His example pitch to a property manager: tested on 50 of your old maintenance requests, it routed 42 correctly, flagged six for human review, and made two mistakes, "here are the two mistakes, and here's how we fix them." That transparency builds trust with owners of "boring businesses."

## Sell the pilot like labor, then productize

- Fastest path: do the work manually with AI in a pilot, then productize the repeated parts.
- Start with three customers in one niche, with the same workflow and the same pain. Greg says to be very constrained or results will be bad.
- Sell the outcome ("we will answer and qualify your missed calls," "we will triage your maintenance requests"). Charge a setup fee plus a simple monthly fee.
- Example pricing structures he gives:
  - $1,500 setup plus $1,000 a month for one workflow
  - $2,000 setup plus $30 per qualified appointment (outcome-based)
  - $3,000 a month for up to 500 handled tickets
- The exact price matters less than the learning: what the customer values, where the agent breaks, what needs approval, and "what would they miss if you took it away" (the most important question).
- Outcome pricing: he is a "huge believer" it is the future of pricing for agent-first businesses, because customers don't want to pay for another seat. But don't start there. Add usage or outcome pricing once you understand the value, and have patience.
- Productize the repeated pattern. If every roofer needs the same emergency call script, service-area check, financing question and estimate follow-up, that is a product. Same for med spas: lead scoring, consultation booking, no-show recovery, post-treatment follow-up.
- "You earn the software by doing the work first."

## Distribution: workflow teardowns and content

- Workflow teardowns are what Greg sees working well right now.
- Show the old way: a call comes in and nobody answers, or the CSR asks five questions, checks the calendar and service area, books the job, writes notes, sends a reminder and forgets to follow up. Then show the agent way: it answers, asks the right questions, checks service area and urgency, books, updates the CRM, sends confirmation and flags edge cases for a human.
- It works because the owner or manager feels the pain. Make fun of the old way, then show the new one.
- Pick one workflow and "make the internet associate you with it." Make the checklist, the benchmark and the teardown, and aim for about 50 examples of posts on that workflow. He acknowledges many people don't want to create content but says you have to.
- Once assets work, put paid ads behind the winners. Memes are also fair game. Focus on one platform to start.

## A 30-day plan to build an agent business from zero

- **Day 1:** pick a niche where missed work costs money (home services, property management, insurance agencies).
- **Day 2:** interview 10 operators, ask them to screen share the workflow, and keep the calls as research.
- **Day 3:** pick one workflow with frequency, pain, software access and a clear success metric.
- **Day 4:** write the agent spec: trigger, context, tools, rules, handoffs, eval.
- **Day 5:** run it manually with AI (Claude or ChatGPT, copy and paste context, draft output, human approves) to test whether AI helps before building software.
- **Day 6:** build the smallest useful version (draft and approve, or triage, is usually enough).
- **Day 7:** create the eval set from 50 real examples.
- **Week 2:** sell two pilots in the same niche.
- **Week 3:** add the product wrapper (logs, approvals, settings, analytics, handoffs). He would use AI to build it, e.g. Claude Design, and says he'd use Fable to code it, assuming it is live.
- **Week 4:** publish workflow teardowns, turn the pilots into proof, and double down on content.
- Build an audience throughout. By the end of week four he expects to have working formats and to know where to double down and spend on paid acquisition. In months two and three, work out LTV and which channels work, then keep going.
- His summary: find the job, shadow it, spec it, run it manually, build the smallest useful agent, sell the pilot, then productize the repeatable parts.
