## v0's mission and the 100 million builders thesis

Guillermo frames v0 as the next step in the same mission as Vercel: "to enable the world to build and ship the best products." His estimate of the opportunity:
- About 5 million React developers and maybe 20 million JavaScript developers exist today.
- His "back of the napkin like minimum calculation" for people with aspirations of building products is 100 million.
- He anchors that number on Slack's roughly 100 million monthly active users, many of whom talk about products they want to see built. v0 lets them "yap into the computer and see something happen": a prototype, a demo, a full-stack product, shipped.

He calls this expanding the addressable market of people who actually ship software. He describes v0 as "social product building", an evolution of GitHub's "social coding" that no longer requires knowing how to code.

## Why v0 exists and why LLMs are good at it

- Origin: when ChatGPT launched, it was already good at JavaScript, Tailwind and Next.js. Vercel's open source tools were already in the training data, so "that long-term bet and vision and open source really paid off."
- The idea was "a ChatGPT for building web products." The first v0 prototype may have predated ChatGPT; it ran on GPT-3.5.
- v0 uses a pipeline of models (OpenAI, Gemini, Claude), with different models specializing in different tasks and handing off work to one another.
- Files and components help: Next.js routes from a file, similar to PHP. LLMs struggle with massive codebases, but they do well when a task is scoped to one component or file.

## Scale, community and the fork flywheel

Figures at recording time:
- Over 1.3 million users had interacted with v0.
- It was setting new daily usage records and was one of the biggest customers of most cloud providers, hitting limits across GPU and LLM infrastructure.
- v0 Community launched less than a month earlier and already had 20,000 submissions. Some showed 1,200, 1,500 and 6,000 forks, and a Luma Labs recruiting site got 2,000 forks in a day.

His reasoning:
- A blank prompt box causes writer's block, so forkable community projects give users a starting point.
- Sharing and forking compounds, like open source: someone shares, someone else improves it.
- A git commit summarizes intent after the work. In v0 the intent comes first and the code is the output. Git commit support was coming within days.

## Retention, feedback loops and building AI products

- v0 is "a very retentive product" compared to other AI products he has built. People use it daily and get jittery when they hit a bug.
- His top advice to startup founders: "create a lot of opportunities for people to give you feedback inside the product." He took the idea from Stripe.
- Early Vercel had an inline feedback button with four emojis that routed straight into Slack. Early on this meant a few to hundreds of messages a day.
- AI products produce a constant stream of feedback through thumbs up/down and bug reports. The next model, prompt, fine-tune or RAG setup improves from it, and he says it is hard to compete with a product that has such a tight loop.
- Showing the model's thinking was inspired by DeepSeek. Users can see where the AI went wrong and correct it, and some report exactly that.
- Vercel open sourced much of what makes v0 work: chat templates at vercel.com/templates and the AI SDK, which connects any model and generates UI, not just text. He calls this generative UI.
- He expects vertical AI tools to win, such as GetGC for legal, OpenEvidence for doctors, chatPRD for PRDs and X-ray tooling. His reason is that a founder who obsesses over one domain and carries a point of view is hard to beat. He also doubts AI will fully replace human direction, since "AI doesn't always know exactly what we want or what we need."

## How product teams and roles change

- Conversations between builders and customers get mediated by artifacts, such as v0 links. A PM can write a "live PRD": last night a v0 spec of the deploy-to-Vercel flow showed the error, success and slow-stream states, animated and interactive.
- People become more full stack: a designer shipping a baked product, a PM prototyping and shipping to production, a backend engineer finishing the end-to-end vision.
- Vercel has about 600 people, of whom about 150 write code by trade. His claim is that "now we have 600 engineers." Some of the best v0 creations came from marketing, sales and product.
- Examples: a designer built an interactive explainer of Vercel's compute infrastructure that became one of his most viral posts, and the VP of sales engineering built a prospect-education tool.
- Ritual: "Demo Fridays" give people permission to step out of their lane and build.
- His frame: AI is becoming synonymous with software. "We build software and we use software to build software."

## Skills that keep their value

- Translation work is disappearing. Turning a design, screenshot or intent into React and CSS is a translation task. A test he runs on each new model, rebuilding his own website, took 10-15 prompts once and two prompts with the latest model. The model also produced more accessible code than he wrote.
- Knowing how things work under the hood still matters. Naming CSS, layout, styles and animation terms lets you steer the model. One designer used the word "turbulence" to get a specific animation effect.
- He expects specialists to need less depth, for example no longer memorizing every CSS property. That frees people for more ambitious work.
- Foundational infrastructure engineering will stay valuable for decades. LLMs orchestrate existing tools; they do not write a compiler, a cloud or a framework from scratch.
- For his five kids he pushes math, eloquence (the "wordcel" and "shape rotator" sides), and presenting and putting yourself out there. He takes them to hackathons. In a world where software gets cheaper to produce, he says you need to build an audience and a signature brand.
- If someone wants to go deep into code, he says JavaScript is "the English of programming languages," reaching billions of devices.

## Tips for getting results with v0

- Be as ambitious as you want and steer toward inspiration. If you lack ideas, fork from the community.
- Stay open-minded: the tool may know things you don't. Focus on describing the product and the user experience rather than the implementation.
- Iterate like you would with an agency or a stuck engineer. Even "just try something else" often unsticks it, and he compares this to giving the tool a one-on-one performance review.
- Use evocative style tokens such as neo-brutalist, minimalist, newspaper-like, vintage, telegram, or "make it pop." A bank CIO improved a print brochure design in a couple of prompts this way.
- He sees three core skills when building with AI: figuring out what to build, making it look good, and getting it unstuck. Escape hatches help here: you can view and edit the Next.js code, or paste it into another model. A Luma Labs engineer unstuck a ~100-iteration project by giving the code to OpenAI's o1.
- He cites React's "escape hatch" principle (for example dangerouslySetInnerHTML) as a systems design lesson. He also cites Facebook's principle of getting unblocked rather than staying blocked.
- Bring screenshots of your own artboards, Slack posts and designs, not just other sites. You can also ask v0 to center a div with the inline refinement tool.

## Taste, quality and product craft

- Taste is a skill, not an inborn trait. Vercel's operating principle is "increasing exposure hours": quantify the time you spend watching people use your product and other products.
- He says teams tend to overrate how well their product works. Hand it to someone and "expose yourself to the pain of reality."
- His own habits: calendar-color customer meetings (about a third of his meetings that week), use the product during customer calls instead of thinking about internals, and invite customers to demo live to the exec team or company. These sessions surface pain nobody knew about.
- Detail example: Grok defaults Enter to a new line on mobile and to submit on desktop, because that matches user habits. He rebuilt a Grok-style chat UI in v0 to capture such details.
- "A great product is made up of a thousand little details," and the best product builders say nine nos for every yes: "a feature is like adopting a puppy." He admires Midjourney's mobile web and says that level of quality takes restraint, obsession and heavy dogfooding.
- Vercel and v0 are built using themselves.

## v0 demos, limits and roadmap

- Flight radar example: on a poor in-flight connection from Tokyo, he built his own flight tracker in under two hours on his $20 plan. It used Mapbox, Leaflet and a flight data API, then a canvas layer to render tens of thousands of flights, with a dashed route line that accounted for Earth's curvature. He estimates the work would take weeks and tens of thousands of dollars with engineers. His working style is experience-first: front end first, then performance, then full stack.
- He keeps a fitness function in mind: find the thing v0 can't build. The product's commitment is real quality and performance. One user called v0 "a super genius five-year-old PhD with ADHD."
- Users have shipped real things: an enterprise customer builds all products and client communications in v0, someone sold a client website, and others used it for an engagement site.
- Limits he names:
  - Errors still happen; the agentic setup tries to fix runtime errors itself.
  - Very large codebases are harder.
- Roadmap mentioned:
  - Zip import now, Git coming soon.
  - Tighter Vercel Marketplace integrations that auto-install databases, search and AI models.
- On scale: the combined v0 and Vercel path lets one person go from prompt to a site that can reach 100 million people. Ramp had 43x traffic from a Super Bowl ad with 100% uptime, built by an engineer who only learned Next.js.
