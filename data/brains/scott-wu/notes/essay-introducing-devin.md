## Devin's pitch: an AI teammate, not a tool

Scott launched Devin (2024-03-12) as "a tireless, skilled teammate, equally ready to build alongside you or independently complete tasks for you to review."

- The framing is a teammate that works either alongside you or independently.
- The stated benefit: engineers focus on more interesting problems, and teams can "strive for more ambitious goals."
- Cognition describes itself as "an applied AI lab focused on reasoning." Scott says that solving reasoning unlocks new possibilities in many disciplines, and "code is just the beginning."
- The mission line: help people around the world turn their ideas into reality.

## What makes Devin work: reasoning, tools and collaboration

Scott credits three capabilities.

- **Long-term reasoning and planning.** Devin can plan and execute complex engineering tasks requiring thousands of decisions. It recalls relevant context at every step, learns over time, and fixes mistakes.
- **Human-equivalent tools.** It has the shell, code editor and browser inside a sandboxed compute environment, "everything a human would need to do their work."
- **Active collaboration.** Devin reports progress in real time, accepts feedback, and works through design choices with the user as needed.

## Demonstrating capability with concrete, real-world tasks

Scott's launch relies on specific demos rather than abstract claims:

- **Learning unfamiliar technology:** after reading a blog post, Devin runs ControlNet on Modal to produce images with concealed messages.
- **Building and deploying end to end:** an interactive Game of Life site, with features added incrementally, deployed to Netlify.
- **Finding and fixing bugs:** helping maintain and debug an open source competitive programming book.
- **Training and fine-tuning models:** sets up fine tuning for a large language model given only a link to a research repository on GitHub.
- **Open source issues:** given just a GitHub issue link, it does the setup and context gathering itself.
- **Mature production repos:** a SWE-bench task fixing a logarithm bug in the sympy Python algebra system. Devin sets up the environment, reproduces the bug, then codes and tests the fix on its own.
- **Paid work:** Scott says they "even tried giving Devin real jobs on Upwork and it could do those too." In the example, Devin writes and debugs code to run a computer vision model, samples the data and compiles a report.

## Benchmarking with SWE-bench

Scott used SWE-bench, a hard benchmark of real-world GitHub issues from projects like Django and scikit-learn, as the proof point.

- Devin resolves **13.86%** of issues end to end, versus the previous state of the art of **1.96%**.
- Even when told the exact files to edit, the best previous models resolved only **4.80%**.
- Devin was evaluated on a random 25% subset of the dataset.
- Devin was unassisted; all other models were assisted (told which files to edit). The comparison is deliberately framed to favor the harder, unassisted setting.
- He promised a more detailed technical report later.

## Launch strategy: early access and waitlist

- Devin launched in early access "as we ramp up capacity," not general availability.
- Call to action: join the waitlist at cognition.com/get-started or email the team, positioned as "Hire Devin" for engineering work.
- Demand and capacity are managed through the waitlist rather than open signups.

## Credibility signals: funding and backers

Scott cites social proof from investors and operators:

- A **$21 million Series A led by Founders Fund**.
- Named supporters include Patrick and John Collison, Elad Gil, Sarah Guo, Chris Re, Eric Glyman, Karim Atiyeh, Erik Bernhardsson, Tony Xu and Fred Ehrsam.
- The company describes itself as "well funded" and grateful for industry-leader support, using the backer list to establish trust for an unproven new category.
