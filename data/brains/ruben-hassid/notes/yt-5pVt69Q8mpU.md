## Ruben's core mental model: an LLM is a very good but very literal intern

- Ruben says people use ChatGPT like a "super Google" and expect a genius with all the answers. That is his number one mistake.
- An LLM (large language model) is trained mostly on text. Its simplest explanation is phone autocomplete "on steroids": it predicts the highest-probability next word.
- Trained on a gazillion examples the right way, it gets close to what humans produce day to day.
- A bare prompt like "write an article about Nvidia" returns something "as generic as possible, as dull as possible". He says that is not a flaw. It is "trained that way".
- To get a twist or new knowledge, you have to prompt in that direction.
- He compares it to a "very good student" and also "a very stupid" intern. It follows a process 24/7, is paid once, and is never sick and never on holiday.
- Like an intern, it does exactly what you ask. Anything you leave out because you are the expert, it will miss. You nudge it in the right direction.

## Zero-shot vs few-shot prompting

- Ruben says prompt engineering terms sound technical but are simple.
- **Zero-shot:** you give zero examples before the output. "Write an article about Nvidia" is zero-shot. He says most people use zero-shot without knowing it.
- **Few-shot:** you give multiple examples before asking for the output.
- Example for the Nvidia article: "I want you to know how I write articles. Here are my top three articles, 1, 2, 3 (paste them). Now write an article in the same style for X."
- His pitch for why it matters: "you'll be way better on ChatGPT if you use few-shot prompting."

## Chain-of-thought prompting: you supply the steps

- Chain-of-thought prompting means giving the model steps. He says it sounds odd but is very simple.
- Ask yourself what steps you and a colleague would follow to write an Nvidia article:
  - choose an angle and an interesting twist
  - draft a table of contents
  - write an introduction
  - gather recent, interesting company information
  - build a story framework
  - write a conclusion, maybe with a call to action
- You do those steps internally. The AI "knows it only if you ask for it", otherwise it produces the most generic version.
- Example sequence he gives: step one, find an angle. Step two, write the introduction. Step three, write a table of contents. Step four, wait for me to say yes to the table of contents before continuing.
- Teaching analogy: he tried this with a 7-year-old who had to guide him, as a "robot", to a toothbrush. Everything you think is obvious (go to the bathroom, add water to the brush) is not obvious to an intern or an LLM. Give five steps ahead.

## Where ChatGPT is the wrong tool: education and advice

- Ruben says learning (LinkedIn growth, German for a kid) is not the best use of an LLM.
- ChatGPT is "a vector res, like a lot of data". Asked how to grow on LinkedIn, it returns the most generic advice.
- Example: a German-speaking community member in the US wanted his daughter to learn German via ChatGPT. Ruben asked if he had tried YouTube. A week later the man said he "didn't know there was so much stuff on YouTube."
- For LinkedIn, he says to follow specialists instead, such as Richard van der Blom (Dutch, obsessed with the LinkedIn algorithm), or Ruben himself.
- His test: "Do you ask your intern what's the best way to grow your LinkedIn? You don't."
- YouTube, Google, LinkedIn and Twitter are already a "goldmine" for education.

## Where LLMs shine: brainstorming at volume, then human selection

- Best workflow: learn something from a real expert first, then take it to the LLM and apply it to your business.
- Example: you learned a new SEO technique for SaaS, but you run a retail business. Ask the LLM to connect the two and brainstorm. Generic "best SEO for 2024" prompts give generic advice.
- An LLM can brainstorm 1,000 or 10,000 ideas. It cannot pick the best one. "You're the human", so you select.
- His image: an orchestra of a thousand interns. Do not expect one button to give one perfect solution. Press one button, get a thousand solutions, select the two best.
- Existing data of your own makes brainstorming much stronger.

## Agentic workflows and building EasyGen

- Next level above plain input and output: multiple LLMs or ChatGPTs talking to each other. He calls this "agentic workflows". It is tricky, time-consuming, and he improves his every two to three days.
- He built a tool for himself first and says "the gen part was easy". He used it to reach 120 million people on LinkedIn in roughly 18 months.
- He made it public for two reasons: he has a community, and his team wanted to use it.
- The hard part was making it easy to use, hence the name **EasyGen**.
- How it works today: you brain dump a post idea and EasyGen turns it into a LinkedIn-ready post. He is also building research help, and says he is putting about 10 years of social media knowledge into the tool.
- Example post idea he gives: "How teaching your 7-year-old how to brush his teeth helps you write better prompts for ChatGPT."
- He keeps tweaking it because consumption habits change, not only algorithms. He says the algorithm is made to keep you on the platform longer. He tweaks EasyGen for his own results, not to please users, and users happen to benefit.

## Proof: growing two employees' LinkedIn accounts

- Setup: two employees with different branding. Anisha posts about overcoming mental blocks (psychology degree, introverted). Axel (his "eyes of AI") covers AI news from Twitter and Reddit, such as Runway and Claude releases.
- Ruben recorded himself writing a post for each of them every day using EasyGen. He launched a paid newsletter the same day EasyGen was released (about 40-something days before the interview, under 2 months).
- Results he reports:
  - 1 million views in 25 days
  - purely organic, no ads, no pods, no hacks, "just good content consistently"
  - about 2.3 to 2.4 million views after 40-something days, on their accounts, not his
- He now spends about one hour per week writing the week of content for both. Paid newsletter members get an hour-long unlisted YouTube video plus a written breakdown of wins, failures and lessons.
- He expects 10-15% of his reach by year end to come through them, which made him think about hiring about 10 people and duplicating himself with different branding.
- His view: it is a long game. He reports the result as consistency plus a good process.

## Personal branding and tone of voice

- EasyGen is deliberately not built to copy a new user's tone of voice. He tells beginners they "probably have a shitty one in the first place".
- His analogy: you do not become a book writer by picking up a pen. You read a lot of books first. Consume content, see which authors or creators you love (he names himself, Chris Do and Eric Partaker), then work out why: videos, cheat sheets, carousels, how the idea was conveyed.
- Advice: write a thousand posts, then you have a tone of voice.
- He cites Stephen King, who said he started out bad, read a lot, wrote like one author, then like two or three, and eventually became Stephen King.
- Core rule for content: "It's not about me when I'm making a post. It's about you who's listening." Help the reader go from A to B. Example: A is you don't know how to prompt, B is you now prompt better.
- His line: "Personal branding is awesome, but ditch the personal. Write as you but don't make it about you. Make it about them."
