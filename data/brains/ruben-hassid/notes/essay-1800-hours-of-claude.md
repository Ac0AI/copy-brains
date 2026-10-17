## Where Ruben uses Claude Projects, and where he avoids them

- He argues Projects are a poor fit for creative work. Loading around 40 files into a Project means "every answer is a remix of your own documents": Claude answers from the files instead of thinking, which is why a user's LinkedIn posts all sound the same.
- Projects suit repeated tasks with fixed material, such as writing a contract, standard procedures, client reports or weekly formats.
- For a new idea, he says to open a normal, empty chat every time.
- He applies the same logic to skills. Skills are the best for "do this exact task this exact way" (reports, formats, recurring workflows) and the worst for creativity. Every loaded skill bloats context and narrows what Claude explores.
- For maximum anti-clutter, he sometimes opens incognito mode inside Claude so it has zero context.

## Managing context, cost and conversation length

- Claude re-reads everything in the conversation before every answer. Long chats get more expensive and less sharp with each message, and contradictions force Claude to reconcile too much at once.
- His rule of thumb for turns (you say something, Claude replies): around 30-50 turns is when Claude starts to get dumb. Above 100 turns, leave and start a new chat.
- Don't reply "no, that's wrong". The wrong answer stays in the conversation, Claude works around it, and you pay for it on every later message. Instead go back to the prompt right before the bad answer, edit it and click "Save".
- Turn off Connectors (Gmail, Slack, Granola and so on) unless actively used. Every active Connector is loaded into every message, used or not, so it costs extra tokens.
- Model sequencing: frame the whole problem in the first prompt, since it is the most important one, using the most powerful model (Fable-5 on High). Then switch to a cheaper model, Opus 5 (High), to continue without spending extra.
- When combining Connectors on purpose, turn them on together. His example for a big email: Slack (what was said in shared threads), Granola (what was decided in the meeting) and Gmail (what was promised in writing). The prompt: "Using Slack, Granola and Gmail, draft 3 different emails with 3 different tones about […]."

## Prompting: give more context, not adjectives

- Dictate rather than type. Typing makes you organize thoughts and silently delete context, while talking shares everything, including the messy parts. He says it makes "prompt engineering" 100x better.
- His process:
  1. Use Wispr Flow (what he uses) or Claude's built-in dictation.
  2. Talk for 10 minutes straight: goal, constraints, what you tried, what you hate, your contradictions. Don't clean anything up.
  3. End with: "These were messy voicenotes. Ask me clarifying questions if you didn't get something as a form."
- He writes his newsletter this way.
- Add this line to any prompt: "Before answering, use the AskUserQuestion form to get more context from me if necessary." Claude then shows tappable multiple-choice questions, which he calls "the most underrated feature in the app." His summary: "AI is all about sharing enough context."
- Adjectives like "make it nicer/punchier" do almost nothing. Say what you hate instead: "Never write like this: [paste]." It draws the exact line not to cross.
- In Claude Code and Claude Design, start with a screenshot (a competitor's page, a dashboard you like, a photo of a napkin sketch) rather than a description. It also works in normal Claude for HTML designs.

## Claude Code, Cowork and building with Claude

- He says Claude Code is better than Cowork at everything, but looks scary and built for developers. He expects the two to merge eventually.
- Everyone should try Code once, via the "Code" tab at top left: dictate and ask it to vibecode something, e.g. "Build a website to track my daily frisbee sessions." You don't need to master it; you need to know it exists. You can hire someone to use it later.
- Cowork's real feature is spawning agents: multiple Claudes working one problem in parallel. Give it big tasks, e.g. "Prepare the full client onboarding: the deck, the welcome email, and the checklist."
- To set up Cowork, run the Anthropic-made skill `/setup-cowork` with the prompt "start". It interviews you and configures preferences, styles and workflows.
- Vibecoding won't make you rich, because you need much more than code. But when you have an idea, skip the briefing document: build a rough version in one afternoon and send that to the technical team. Talking to engineers and designers with an actual half-baked site is useful.

## Artifacts, images and outputs

- Claude can't generate images like ChatGPT, but it can generate HTML that you export as an image. Upload an example image with: "Code an HTML-like infographic like the one I attached, but about [topic]." Text in HTML is always spelled correctly, which image generators can't guarantee. Most graphics in his newsletters are made this way; he exports to Canva.
- Mini-apps: "Build me an artifact that tracks [my habits / my client pipeline / my reading list], and make it save my data between sessions." Each artifact gets its own shareable link.
- Put Claude inside the mini-app: "Make it so there is a Claude coach inside I can talk to and it has the context of this artifact." Publish and share it (a proposal analyzer for clients, a quiz for a new hire, a tone-checker for a team). Recipients don't need Claude themselves.
- Paste numbers or a CSV and ask "Make this an interactive chart" for an interactive chart inside the chat.
- He opens Claude documents in Google Drive rather than on his computer.
- Research mode is rarely used but good: it plans, reads dozens of sources and returns a structured report you'd normally pay an analyst for. Ask a decision question ("Should we price at X? What does the market do?") and wait.

## Team pricing, Claude vs ChatGPT, and safety

- Premium seats cost $100/seat/month and come with usage limits high enough that a team stops thinking about them. Past 150+ seats you pay per usage regardless, which gets very expensive, so he advises staying under 150 seats.
- He does not tell people to switch to ChatGPT. "ChatGPT is good. Anyone selling you a 10x difference is selling something." He still prefers Claude, for narrow reasons: it writes and reasons slightly better, and the Premium company tier is a better deal.
- He would reconsider only at 5,000+ employees, where an open-source setup starts to make sense.
- On safety: if you use Google, Claude is just as safe. Business plans are SOC-2 compliant, and a team account needs at least 2 seats. He notes Fable-5 has a data retention problem, while the other models are fine.

## Mindset: ignore trendy techniques, AI can be creative

- Ignore "loop engineering" and whatever technique comes out next month. A technique matters once it becomes invisible, like Chain-of-Thought prompting, which gave us reasoning models; you just benefit from the AI thinking before answering.
- "Focus on doing your job better, not on falling in love with the technology."
- On the claim that AI can't be creative because it is data and data is the past: he says it's both true and false. Math problems that had stayed unsolved for 80 years were solved simply because someone asked the AI with the right context, and it was not a one-off.
- He has also built a skill that audits text so it passes AI detectors, covered in his guide "Can you detect AI?" (published Jul 22).
