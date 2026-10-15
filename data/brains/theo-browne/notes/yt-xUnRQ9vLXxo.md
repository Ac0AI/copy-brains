## The model eras and why Theo says to build bigger

- Theo describes three "eras" by model. Sonnet 3.5 is the tool-call era: the first model to call tools consistently enough for day-to-day coding in a real code base.
- Opus 4.5 is the long-running-task era. It could test its own work and finish tasks that take hours instead of minutes. He dates the start of his own "AI psychosis" to November and December of last year.
- Mythos is the orchestration era. He says it's the first model that "understands itself": it spawns additional models, breaks up work, and verifies it afterwards.
- This needs no custom tooling or "fancy software factory". You just prompt the model to go further.
- His conclusion: "we need to go bigger." Most of his old Jira tickets could be solved by Opus 4.5, so his previous work would not benefit from a model like Mythos.
- He admits he was wrong when he claimed models were hitting a wall. Models are improving faster than people are, so people can't just get better; they have to go bigger.

## Software's skeuomorphic phase and the iOS 7 analogy

- Theo compares today's developer habits to pre-iOS 7 design. The compass app looked like a compass, and the books app looked like a bookshelf with turning pages, because apps had to convince people they could replace physical tools.
- iOS 7 marked the shift from convincing to embracing. The result was a more useful interface: a clear red block for being off-direction and a large heading number.
- He argues developers are in their own skeuomorphic phase. We pretend terminals are the ultimate interface "when they're not even good interfaces", and he says this as someone who deeply loves his terminal.
- "Natural language has no place in a terminal, but we pretend it does because the terminal's familiar."
- Developers care deeply about tools, frameworks and languages, and have "blinded ourselves" into thinking it all matters.

## Habits and identity developers need to drop

- Theo asks whether we do things "cuz it's right, or is this how we do things cuz it's just how we've always done it?"
- Example: why can't we commit environment files? Sharing one file across a team requires building a separate system, only because Git was built for a specific purpose and took over our heads.
- Identity by language ("I write JavaScript") is not just a junior habit. Senior engineers do it too ("He's not a real developer"). He says these facts "matter less now" and never mattered as much as people thought.
- Developers got away with it because hiring was so hard that companies couldn't push back.
- Sunk cost: people are scared of deleting code, and teams "guilt merge" PRs that took someone a week or two even when the solution isn't right. He argues that when code is cheap, the solution is often to delete and reset.

## Every project tier has shifted down one level

- Theo's three examples: a Reddit meme scraper (2-3 days, scrapes top posts from programming humor into a copy-paste format), Ping (a Y Combinator startup for high-quality live-creator collaboration inside OBS, built in 2021), and a "full stack cloud" like Vercel with auth and databases built in (current work).
- His old categories: side project, startup, "too big". Now "everything is now one tier lower": what used to be a startup is now a side project.
- Some startups at the event "could have arguably been a side project", and a new tier below side project is "the G brain tier": a markdown file.
- "The fact that you can now execute markdown by just piping it to Codex or Claude is unbelievable."
- Opportunity: build a very small, specific service as a markdown file run on a cron.

## Markdown-plus-cron example

- Theo had a service to triage and prioritize his PRs with AI review. It is now a markdown file.
- The prompt says: go to these four GitHub repos, look at all open PRs, work out the current status, help prioritize, then update a static HTML file, send it to S3 and give him the URL.
- It runs on a cron at 9:00 a.m., and around 9:15 to 9:20 he has his work for the day.
- He urges the audience to try it, saying many services can be "literally just a markdown file running on a cron".

## Think wider: breadth vs depth

- Theo says "bigger" is the wrong word; it's time to "think wider". Software has breadth (range of things covered) and depth (features within an area).
- Vercel doesn't have all of AWS's features and never will, but it goes deeper in full-stack, front-end-leaning servers. Frontend developers not using it "are feeling some amount of pain", and "even the agents prefer it".
- Historically a startup competing with AWS could never match its range without thousands of engineers. Now that range is viable.
- His claim is not that you can build something as reliable as RDS, but that you can build a database platform into your product in "a day or two of work with enough prompting and enough effort".
- Aim for enough breadth that most users can at least start trying the product. When they need a feature in a vertical you don't support, "it's not your problem" if you've architected the product so users can build the missing features themselves.
- Slack is his example: it "sucks" as a product, but it's now where people run their agents half the time, because it's "the right shape" for building features through its somewhat functional bot APIs.

## Pick ideas that feel stupid

- Theo's closing message: compete with Slack, build your own AWS, challenge Salesforce directly.
- "If your idea doesn't feel stupid, it's cuz your idea's not big enough."
- He admits he doesn't know what "too big" means anymore (training your own model, your own operating system, competing with NPM and Node?), and says he needs to keep pushing himself bigger than makes sense to find the limits.
- He is working on the full-stack cloud himself and says not to compete with him on that one.
