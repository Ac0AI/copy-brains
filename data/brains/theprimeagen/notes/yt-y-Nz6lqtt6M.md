## AI hype: poisoning, slop and why he says it's not magic

- ThePrimeagen explains LLM "poisoning": getting enough content out that a model reproduces what you dictate. He calls LLMs "statistical generators" that "simply reproduce what it's seen."
- He cites the Anthropic paper showing roughly 250 documents can start crashing large models (13 billion parameters mentioned), even as model size grows.
- His theory, which he says was not in the paper and he wants to test: the attack works with so few documents because the trigger was a rare token (an angle-bracket "sudo" string). A common word like "Fortnite" would likely need far more data.
- He expects this to be abused commercially as "LLM SEO": mass-producing slop that associates a product name with keywords so chat models recommend it. He calls it the acceleration of the "dead internet" and says "nothing beats corporate greed."
- On synthetic training data, he says distilling from an older model (as with DeepSeek R1) is basically compression of a model that is itself compression.
- On sources of human data, he is less worried than others about Reddit, since angry Redditors still write long human walls of text.

## Hype versus reality: why the models feel stagnant

- He argues the loudest hypers are casually technical people who lack a way to judge what's good, and that "any piece of advanced technology sufficiently looks like magic."
- He says the jump to ChatGPT-3 was magical, but each later jump has been smaller and more iterative, like iPhone 15 to 16. Improvement now comes more from tooling around the model than from the model.
- He mocks "six months until AI takes your job" predictions, tallying "29 months into 6 months" since the Anthropic CEO's claim that AI would write 90% of code.
- On Paul Graham's tweet about a founder writing 10,000 lines of code a day, he says such tweets "blackpill" people learning to code, and asks how anyone knows it isn't bug-filled.
- His optimistic counterpoint: people will want genuine human work. Of Suno-generated music he says he always finds 900 things wrong, and that people will want "100%," not "80% good."

## Where AI coding works and where it breaks down

- He says AI is great for small or medium projects you can tear down and redo in a day, and calls it "so so good" for that use.
- On long-term projects he says it fails: LLMs "cannot decrease entropy." They inline fixes and make the same change in five spots, so surface area and bug risk grow.
- Example: he hooked Twitch chat to Devin for 8 hours. The generated game update function sorted by z-index (a rendering concern), then never touched that code again. He called the result terrifying.
- City analogy: an AI builds the power plant without considering how it interfaces with the houses, roads and plumbing.
- Best use he describes: in a 60-70,000-line Lua game, he had the AI find the five spots a change touched (about 5 minutes versus about 2 hours). He then went home and spent an hour designing a cleaner solution himself.
- He loves AI for "semantic searching" of a codebase, instead of exact-phrase Google-style queries.
- He believes humans must stay hands-on, because learning requires doing the work. He compares it to watching 1,000 Balatro streams without learning the jokers.

## Developer burnout and losing the fun parts

- His rant: "I want to code, I want to dance, I don't want to go home." He says AI took the creative work and left documentation. The promise was curing cancer and folding laundry, but "it's doing all of our art" while people write docs.
- He says the same applies to game art: generating images fast removes the artist's expression and cohesion.
- He foresees burnout in the stepping stone before any AGI. Engineers take on more responsibility, mostly read code instead of writing it, and prompt their way through, so they don't feel they're learning.
- He ties burnout to the lack of learning and growth combined with tighter deadlines and more work, leaving you "just a yes man."
- He says Cursor's CEO, Michael, told him they believe the human programmer is important, and that Cursor aims to help people "go from okay to great."

## Money, AGI and the AI bubble

- On AGI, he says you won't get it: a company that had it would remake Google, Netflix and everything itself. He says labs keep hyping because they aren't there.
- He argues you won't get the same access as the lab. Safety layers also make correctness and safety "kind of at odds"; he cites an early Gemini story where it refused C++ code to a minor because C++ is "unsafe."
- He compares OpenAI's growth model to Docker: millions spent with zero revenue to acquire users, then roughly $500 million in a month once monetization turned on. He thinks OpenAI is at the "turn on the gears" stage.
- He sees secondary companies making real money (e.g., Cursor) and says society adopts slowly, so "10 to 15 years before everything's chat chippity."
- He says $200 to $500 a month coding tools price out much of the world. He gives mid-level EU salaries of 50 to 60,000 a year as an example.
- On the economy, he says the government will keep funding AI as a geopolitical need, and prefers that rationale over "anime titties."
- He is unsure the foundation labs beat specialized models. He does not mind if a lab fails, since the infrastructure remains.

## Regulation: California SB 53 and the EU AI Act

- He calls SB 53 "governmental masturbation": companies file a report, but he asks who verifies it, who prosecutes fakes, and says it has no teeth. Examples he gives are Enron and the XBRL standard.
- He points out the million-dollar fine is trivial for giant companies, so they could just pay it. It could also hurt medium-sized companies, roughly $500 million to $1 billion, far more than small or large ones.
- He likes the whistleblower protections and wants anonymous reporting channels.
- He backs China's AI-labeling rule: AI-generated content should be labeled, since removing watermarks from Sora videos causes real problems.
- On the EU, he notes Mistral is the only major European model, and argues the effect of regulation shows in company counts. He supports the right to be forgotten but fears an "EU black zone" with no AI.
- His stance: he wants "significantly less" AI safety regulation, almost none. He thinks the real harm is people replacing friendships with ChatGPT, and says fears like pipe-bomb instructions are overblown.

## Data centers and the water argument

- He explains the difference between serving Netflix and running AI. Serving a request runs on a CPU and is mostly a database lookup (fast, near-constant or logarithmic).
- AI runs on GPUs doing huge floating-point and linear-algebra workloads. He compares a CPU to Usain Bolt and a GPU to a million people moving stones, and says one AI request triggers vastly more operations.
- He says a data center employs everyone from security to logistics to engineers swapping failed hardware. He notes he is guessing from software experience, not from running a data center.
- On water, he says it is mostly fear-mongering. He says total global AI water use is about the same as Google in 2008. He cites that golf courses use about 7% of US water versus about 0.03% for data centers (and says he is unsure of the 7% figure). He says energy is the larger concern.

## Career advice for new programmers

- He argues new graduates face a time-scale problem. 15 years ago, the 40% of his class that didn't try hard got no jobs, while all who tried hard got hired.
- He says a summer boot camp is not comparable to four years of effort, and he knows juniors who have coded since age 12 and are landing good jobs.
- He blames the zero-interest-rate era for broken expectations like "$100,000 after 6 months," and calls it "the true bubble."
- His own story: he spent multiple years working 80 hours a week to land his first job, once living above a neighbor who smoked meth and threatened him.
- As a Montanan with a Southern accent among Stanford and Harvard graduates at Netflix, he felt discriminated against. His rule: "diversity is a bunch of people at the dance, inclusion is asking someone to dance." He says to ask people to dance yourself and make your own thing.
- He is optimistic. He says AI and online learning give people far more access to education than when he had to guess at code or buy a book at Barnes & Noble, and that those willing to learn will still do well.
