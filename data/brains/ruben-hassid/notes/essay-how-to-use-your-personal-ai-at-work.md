## Setting up personal AI accounts for work: the privacy checklist

Ruben's premise: most employees already use personal ChatGPT or Claude accounts at work because the company pays for nothing or for the wrong tool ("ahem… Copilot"). He argues the risk is real but manageable, and he lays out a setup routine ("block 10 min this week & set up your account right"). His closing thesis is that the real fix is a company-paid AI plus team training.

## How common shadow AI use is

He cites these figures (he attributes the first to an MIT study):
- Workers at more than 90% of companies use personal chatbots for work, mostly without telling IT.
- 57% have typed sensitive information into one at least once.
- 22% still use a personal AI even where the company already pays for an AI tool.

His takeaway is "you're normal", but you can't keep doing it without fixes first.

## Step 1: Turn off model training on personal plans

On personal plans (free or paid), the AI provider may train on your chats by default.
- **Claude:** Anthropic changed its consumer terms in August 2025. On Free, Pro and Max, chats and coding sessions are used to improve Claude unless you opt out, and conversations can be kept for up to 5 years. Path: profile > Settings > Privacy > turn off "Help improve our AI models".
- **ChatGPT:** profile > Settings > Data controls > turn off "Improve the model for everyone".
- **Grok:** profile > settings > data controls > turn off everything.
- **Gemini:** harder. Use myactivity.google.com/u/1/product/gemini and turn it off there; he found no easier way.
- The opt-out only applies going forward, to new and resumed conversations. Conversations already in a started training run are not pulled back, and models can't "unlearn" data, so turning it off sooner keeps more data out.
- He added an update for the new Claude Fable 5, whose footnote means (in his reading) "we will take your data for 30 days". His advice: "Use it at your own risk."

## Step 2: Understand the firing and legal risk

He says both firings and lawsuits have happened, with the caveat that he is "not a lawyer" and is citing public cases.
- **Samsung, April 2023:** engineers allowed to use ChatGPT leaked internal source code three times within 20 days (code pasted to find bugs, more code uploaded to fix defects, and a recording of an internal meeting). Samsung banned ChatGPT company-wide and opened disciplinary investigations.
- **NDA breach:** a chatbot run by another company counts as an outside party.
- **Trade secrets:** under the US Defend Trade Secrets Act, a secret stays legally secret only while kept secret, so handing it to a third party under loose terms can undermine the company's own protection.
- **GDPR (Europe):** pasting a customer's name, email or phone number into a personal account can make the company liable for an unlawful data transfer. He cites West Technology Group v. Sundstrom, where a salesperson recorded confidential meetings with an AI tool and kept access after leaving; the company sued.
- **His test before pasting:** "Would I be fine if this exact text showed up in the company-wide channel, with my name on it?" If yes, paste. If no, anonymize it or use the company's tool.

## Step 3: What never to paste into a personal account

- Source code or anything from the company codebase
- Customer or patient data (names, emails, phones, addresses, order history, health info)
- Unreleased plans, roadmaps, designs, prototypes
- Non-public financials (revenue, margins, budgets, forecasts, deal terms)
- Anything marked confidential, internal-only or under NDA
- Logins, passwords, access keys, security settings
- Full contracts or legal docs with real names and terms
- Recordings or transcripts of internal meetings

Side-project warning: if you use your company's AI to vibecode a side project, "your company now owns your project". Vibecoding with your personal AI on the company's computer is also risky: "Just don't do it."

## Step 4: Anonymize before you paste

The AI only needs the shape of the problem, not the identifying details.
1. Swap names for roles ("the client", "Company A", "Project X").
2. Use fake values of similar size (real numbers become fake numbers; emails become name@example.com).
3. Paste only what is needed. Don't upload the original PDF or spreadsheet, which can carry author names, comments, tracked changes and hidden columns. Copy out the relevant part.

Example he gives:
- Don't: "Draft a renewal email to Sarah Chen at Medtronic. Their $2.3M contract expires Aug 31 and they're unhappy about support delays."
- Do: "Draft a renewal email to a client contact. Their $5M contract expires end of next month, and they're unhappy about support delays."

Anonymizing "drops your risk a lot" but "doesn't make it zero". For truly regulated data (health records, legal files, anything re-identifiable), the only clean answer is a company-paid AI.

## Step 5: Use temporary chats for work tasks

Even with training off, normal chats save to account history. For work tasks, start a temporary chat before typing:
- Claude: "Incognito" (top right)
- ChatGPT and Gemini: "Temporary chat"
- Grok: "Private chat"

A temporary chat isn't saved to history and isn't used for training. Close it and it's gone. He suggests making it the default for private chats.

## Step 6: Connectors are the most dangerous feature

Connectors (integrations or "apps" linking Gmail, Drive, Calendar, Slack, Teams, Outlook) are, in his words, "the most dangerous thing you can do with a personal AI account."
- **Access is enormous:** Gmail exposes the whole mailbox; Drive exposes every file you can open, including old shared documents. Connecting work Gmail to a personal AI pipes the company inbox into a tool the company has no contract with.
- **Hijack risk:** researchers showed twice in 2025 that a connected AI can be tricked by content it reads. He calls the cause the "lethal trifecta": an AI that can reach private data, read outside content you don't control, and send information out can be made to steal your data.
- **Rules:**
  1. Never connect work accounts to a personal AI.
  2. Connect the least, with the narrowest access (read-only or a single folder; if you can paste the one thing you need, skip the connector).
  3. Use only official connectors from the AI's own directory; a remote third-party connector can quietly change behavior after approval.
  4. Review and disconnect monthly, including the Google or Microsoft "third-party access" page.
- His conclusion: connect almost nothing on a personal account and save the connected setup for the company tool, where someone is paid to secure it.

## The best solution and Ruben's funnel

His top fix: get the company to pay for the best AI and train the team on it. He notes that Microsoft Copilot "isn't the best AI out there".

His tiered offer, framed by what people can afford:
- Free: this newsletter, read by about 700,000 people ("Go & do it yourself!").
- Paid: 3,659 paying subscribers get access to his Circle community, to "figure things out together".
- Workshops: live, starting with mastering Claude Cowork, via a separate free email list (how-to-ai.co/interested).
- Enterprise: a consulting firm in NYC that helps "dozens of enterprises" adopt AI (a lot of Claude). He limits it to 3 new clients per month, with a minimum team size of 50 people.

## Distribution approach

He says the newsletter grows from shares and that he keeps hitting 1,000+ shares per post, calling it his "north star". He repeats share prompts throughout the post ("Sharing is free & helps others use AI more safely") and ends with explicit asks to save and send it to colleagues. He also embeds consulting and workshop calls to action inside a practical, fear-driven safety guide.
