## Translating between customers, product, and business: three separate languages

Jason's core idea: most conflicts inside a company are "apparent, not real." People are speaking three distinct "languages" at once, and conflict happens when one party applies their language to a party using a different one. It doesn't translate automatically, so you must build systems that translate and help each side achieve the others' goals. In a high-tech company, he says, it is often Product's job to do the translating.

- **Customer language:** first-person, industry-specific jargon. "I can only use this if...", "I'd get a raise if...", "It would be cool if...", "Everyone needs...". It covers what I'm trying to accomplish, what blocks my job, what would make me a hero to my boss, make me money, raise my reputation, or de-risk my project. It is also what they will say in a case study, on Twitter, or in a review.
- **Product language:** strategy (how we will win), competitive and market analysis, ICP, positioning, leveraging strengths, scrum/kanban, sprints, epics, stories, tickets, retros, sequencing, feature usage and abandonment.
- **Business language:** growth (profitable, sustainable, maximized), profitability, sales and marketing efficiency, product ROI, predictable results, quarterly planning, hiring plans, budget-to-actual, and ratios that raise the stock price relative to current revenue.

## Who speaks each language, and what they measure

| | Customer | Product | Business |
|---|---|---|---|
| Who | Named customer personas | PM, PgM, UX, Engineering | Exec team, Finance, Board |
| Work | creating, designing, troubleshooting, calculating, reporting | epics, stories, sprints, research, planning, releases, launches, customer feedback | forecasting, budgets, hiring plans, project ROI, capital allocation, public company comps |
| Metrics | activation, abandonment, support tickets, time-to-first-success, WAU/MAU, reviews | conversion rate, feature use, API calls/day, deploys/week, sprint velocity, bug backlog, latency, SLOs | MRR (new, cancelled, upgrade, downgrade), R40, NRR, ARPU, GPM, LTV, CAC, EV, IRR, Magic Number, fixed and variable costs |

- Translation layers: Customer to Product runs through JTBDs and user stories. Product to Business runs through "correct strategy + excellent execution → business success."
- Jason's point is that everyone is "correct" within their own corner. The first step is recognizing that each person is doing what they think is best from their area of excellence. The second step is to translate.

## How the languages collide inside one team

Jason gives concrete examples of people talking past each other:

- **CEO vs. PM on revenue.** The CEO asks why "grow revenue" isn't the product goal. The PM answers that his goal is delivering customer value quickly, and revenue also reflects sales effectiveness, marketing effectiveness, and market swings like COVID, inflation, or economic pull-back. Jason says neither is wrong: revenue is a shared goal and may not correlate with product development or even customer satisfaction. His fix for "who owns which number" is in his Product KPIs article.
- **Customer vs. PM on a feature.** The customer says "everyone needs" a feature, so it's crazy it's missing. The PM digs for the underlying pain and the "job being done." The customer feels they already explained it. Six months later, with no feature, the customer concludes no one listened. Meanwhile the PM knows the feature wouldn't make sense for most customers, and a different update later in the year will solve the use case.
- **Marketing, finance, and product on time horizons.** Marketing wants to know what ships by September 17th because of a big global event. Finance wants twelve-month projections because revenue forecasts drive hiring in sales and support and investment in marketing, and with a nine-month lag for both hiring and training, "we have to start that process today." Product has planned only a few sprints because "we're agile."

## Translating Customer to Product: JTBD, then user stories

- Customers can fully describe their own pain and requests, and often have feature ideas. They lack the context and expertise to integrate their desires with development capacity, architectural evolution, and other customers' wants.
- Product work needs definition: requirements, requests, and enough description that everyone can decide what work would produce the desired outcome.
- The high-level translation is the **JTBD**, which projects the customer's world onto the company's internal language.

**Jason's WP Engine example** (customers worried about "hackers," scared of news coverage or expensive damage):
- Context: marketers fear security breaches that (a) hurt their brand and (b) cost time and money.
- Inciting event: after being hacked once, marketers become highly motivated to move to a secure platform, even at higher cost.
- Job to be done: "My website is fast, scalable, and secure."

A JTBD still isn't a list of things to do, so the next step is the **user story**:

- Template: "As a [who], I want [feature] so that I [benefit] because [why]."
- Applied to security: "As a [non-technical marketer], I want [a report about how many nefarious attacks were thwarted in the past week] so that I [can show my boss] because [it proves I'm proactive and intelligent about security; if we still get hacked, my job is still secure]."
- The same structure is the bones sales and marketing copy needs, because it states what the product does and why it matters from the customer's point of view.

## Translating Product to Business: show contribution without owning the total

The business most wants to know "how much will we grow?" Jason splits the answer into what Product drives and what it doesn't.

**Largely Product-driven:**
- Is positioning intelligent and competitive?
- Is it targeting the right market segment?
- Does the product pay off the promise made on the website?
- Are we building the right features?
- Is the pricing right?
- Are customers delighted enough to stay, grow with us, and advocate through word of mouth and reviews?
- Are we expanding into adjacent segments and products at the right time?

**Largely not Product-driven:**
- Marketing campaign effectiveness
- Sales pitch and sales organization effectiveness
- White-glove onboarding
- Whether support increases retention
- Account management relationship quality
- Corporate development partnerships
- Geographic expansion
- Company-wide budgeting

His conclusion: Product's job is to clearly articulate how it contributes, without taking full responsibility for the business's total results. He recommends his product metrics framework, where everyone's KPIs are shown as important, with context and clear areas of responsibility and accountability.

## Practical takeaways for working across functions

- Match the language to the audience: customer-first-person for customer research and copy, work-language (stories, sprints) for building, financial language (MRR, NRR, CAC, LTV) for the exec team and board.
- Don't treat a mismatch as someone being wrong or not listening. A customer who "wasn't heard" and a PM who is correctly declining a feature are often both right.
- Forecasting lead times matter: if hiring and training take nine months, finance needs product direction long before sprint planning would normally provide it.
- Using the right language for the right thing, he says, "creates clarity and insight and helps us work better together."
