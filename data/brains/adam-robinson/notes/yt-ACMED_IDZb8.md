## How Adam diagnoses why cold email fails

Adam scaled RB2B, his SaaS, past $6M ARR (the video later cites $6.3M). He says 32% of revenue ($1.9M) comes from cold email alone, about $160k/mo at the time. He says the way most people do cold email is dead, and he names three mistakes:

- **Message before infrastructure.** "Your perfect email means nothing if it lands in a spam folder." Many senders never realize their emails aren't being delivered. Build bulletproof infrastructure before writing a word.
- **Only emailing totally cold audiences.** Random lists with no prior touchpoint or reason to care become noise in a crowded inbox.
- **Quitting after a week or two.** People send five emails, get three replies, see no sales, and conclude cold email doesn't work. They never test different messages or audiences.

His fix has four parts:
- Build awareness on LinkedIn first.
- Email people already showing interest, plus cold contacts in the same ecosystem.
- Use an AI system to tailor each email, even at millions of sends.
- Commit to a 4-month testing window.

## Prime the audience before sending: 3 months of LinkedIn first

- Adam spent about 3 months posting on LinkedIn before sending a single email. He built in public, covering the problems RB2B would solve, the journey, the struggles and the early wins.
- The cold contacts he emailed were B2B SaaS people, likely to have already seen his content. He may even have connected with some of them on LinkedIn.
- He says this "warm outreach disguised as cold email" is the framework behind 20% of all signups, 30% positive reply rates, and one campaign converting at 12.7% (one signup per ~8 emails).
- His three strategies together produced 42% of total revenue.

## Strategy 1: Waitlist campaigns (about 6% of revenue)

- He captured a waitlist with a simple CTA at the bottom of LinkedIn posts: "If you want LinkedIn URLs of your website visitors pushed to Slack, DM me... and it's 100% free."
- By launch day, 3,000 people were waiting to sign up.
- The launch email was deliberately plain:
  - Subject: "RB2B is here"
  - Body: "Hi, first name. I'm thrilled to announce that RB2B is live. You can create your free account by clicking here."
- These people already knew him and followed the journey, so they were primed to sign up.

## Strategy 2: Pure cold outbound (about 21% of revenue)

**Targeting**
- Source: Apollo.io.
- Filter: US-based SaaS companies with 3 to 200 employees.
- Contacts: founders or marketing roles, which gave over 80,000 contacts.
- Cadence: each person has been emailed twice per month since.

**Best-performing email**
- Subject line: the person's name plus "RB2B".
- Body, in short:
  - "We launched a tool that lets you know when individuals, not companies, are on your site."
  - "We send you their LinkedIn profile on Slack and we don't charge you a dime."
  - "Respond back with yes if you'd like me to send you a link to sign up."
  - PS: "No, I am not kidding. It's an exact match to the individual that visited, not just the company behind the domain. And we will not charge you a penny."

**Why he says it worked**
- Short, punchy copy.
- It sounds like his actual voice, not corporate speak.
- The direct benefit is in the first line.
- There is one clear, simple call to action.

## Infrastructure: deliverability comes first

- He sends about 160,000 emails per month (the video also says 160,000 per day, which conflicts, so treat the exact volume with caution) off hundreds of domains.
- The stack:
  - Domains are bought through Instantly, with names like "tryb.com" and "therealrb.com". He creates 2 inboxes per domain.
  - Each inbox sends 2 to 10 emails per day.
  - Smart Lead and Instantly are used, and they switch between them depending on what's happening in each platform.
- He credits this combination of many low-volume inboxes with sneaking past Gmail and Hotmail spam filters into the primary inbox.
- He keeps list quality high. Every email passes multiple verification steps, and deliverability metrics are monitored obsessively every day.
- He had 200+ warmed-up domains before sending anything. Warm-up can be done inside Smart Lead or Instantly.
- Taylor Heron runs the sending infrastructure and the copy.
- Result: over 1 million emails in the first 6 months.

## Strategy 3: Website-visitor retargeting with AI (his biggest lever)

RB2B identifies anonymous site visitors and triggers a personalized email within minutes. The pipeline:

1. **Install the RB2B script.** It identifies the visitor in real time and pushes their full LinkedIn profile: name, title, company and pages viewed.
2. **Clay enriches the data.** It adds company size, industry, tech stack and recent funding, and filters out existing customers via a HubSpot integration.
3. **Clay AI writes the email.** It references the specific pages they viewed and adapts tone to their industry and role.
4. **Push to Instantly.** The email is sent from the rotating domains, while the visitor is still thinking about RB2B.

**Winning message** (the simplest he has written): "Hey, saw you on our site via RB2B. Do you have any questions?"

**Results**
- One campaign converted at 10.4% (about one signup per 9.6 emails). He says overall retargeting converts at around 10%.
- Adam says this is 26x better than average cold email.
- His explanation for why it works: it is simple, direct and contextually relevant, the timing is perfect because they just visited, and the personalization is real because he knows what they looked at. "Timing is everything."

## Testing discipline and overall results

- He ran 40 campaign variations over a 4-month window. The first few weeks did not tell the full story, and "most founders give up after sending only 500 emails."
- Cold audience conversion: about 1 signup per 250 emails, versus an industry average he puts closer to 1 in 1,000 or worse.
- Pure cold campaigns average a 30% positive reply rate.
- Up to 10 automated campaigns run at once, across about 200 domains rotated through Instantly.
- Cold email accounts for at least 20% of new revenue.
- He calls margins on the channel "incredible".
