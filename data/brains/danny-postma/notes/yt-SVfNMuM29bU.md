## Danny's AI product portfolio and what was getting traction (early 2023)

Over a few months Danny built seven AI projects:
- Profile Picture AI (a Lensa-style tool)
- Tattoos AI (an AI tattoo artist)
- Deep Agency (a virtual modeling agency and photo studio)
- "This model does not exist" (an AI-generated model named Alice)
- Meme tool (people morph themselves into memes)
- Headshot Pro (corporate headshots for individuals and teams)

He says the tools spread because they feel like "indistinguishable from magic": a user uploads a few photos and gets hundreds of profile pictures back. That makes them easy to share on Instagram and TikTok. A few months after launch, Headshot Pro's live counter showed 450,000+ headshots generated, and he said it had passed a million about two weeks after going live (he updated the counter manually).

## Headshot Pro: what sells and why it beat the artsy tools

- Headshot Pro became his biggest success in traffic and revenue.
- Customers kept asking for LinkedIn-style photos from the artsy styles of Profile Picture AI, and he followed that demand into Headshot Pro.
- It solves real problems: people with no usable photos, and people who hate photo shoots and look awkward in them.
- Remote teams are the strongest use case. A company with staff across Asia, America and Europe cannot send one photographer around the world. Everyone uploads a photo, an AI model is trained on them, and shared styles give the whole team a consistent look.
- He expects photographers to adapt rather than disappear:
  - His best customer outputs come from people who did a very basic photo shoot on a white screen first, then trained the AI on those photos.
  - He then generates hundreds of photos of them in a park, an office or anywhere else.
  - He thinks headshot photographers may move toward producing high-quality training images and using AI as "the next Photoshop".
- His framing: "Photoshop was the post-production", and AI will become the pre-production, with real photography filling gaps AI can't cover.

## Unit economics of AI image generation (Feb/Mar 2023)

- Training a Dreambooth model on a person's face costs about 60 cents.
- Generating each image costs a fraction of a cent. He says hundreds of thousands of photos can be generated for under $100.
- A Deep Agency-style shoot with the non-existent model "Alice" is therefore very cheap.
- His main demand there came from mom-and-pop clothing brands that could never afford models for web shop photos. He sees the tool as democratizing for the low end of small business.
- Profile Picture AI pricing:
  - It started fairly expensive.
  - He kept lowering the price until it was "almost around cost price", about $5 per set.
  - Lensa, which he says did about $40M, "basically killed the whole market" after it went live.

## The Deep Agency viral launch and the lesson of shipping before the product is ready

- He posted a tweet about Deep Agency before the product was ready. It went viral (one tweet reached about 2M people, and he cites about 30 million views overall).
- He had to ship something within 24 hours because no website was live yet.
- He says the product is "nowhere close" to what the tweet implied and that other tools do the job better.
- The underlying stack was assembled from separate research tracks:
  - Dreambooth to train an AI on a real or fake face.
  - StyleGAN to generate faces of people who don't exist.
  - Deep learning models that put a flat, top-down clothing photo onto a body.
- His view: the technology is there, and a company that understands the fashion industry has to take it further.

## Lesson from losing to Lensa: distribution is everything, and avoid building on hype

- Profile Picture AI was essentially just Dreambooth with no moat. Lensa launched about a month after he did and made his revenue "in one hour or something like it".
- His takeaway: "Distribution is everything, marketing is everything." Indie developers like to build and skip marketing, and that is the wake-up call.
- With AI products the model gives little defensibility, so distribution matters more. Lensa hired TikTok influencers to post, and he expects someone with a bigger budget to win that way again.
- His rule: "You shouldn't build on a hype." Hype brings attention that then fades.
- His response with Headshot Pro:
  - Focus on SEO, building tools and getting backlinks so the business lasts longer than a hype cycle.
  - Pick small problems to solve.
  - Do the marketing and distribution, because "you got to sell it".
- He applies the same hype warning to novelty content such as AI-generated celebrity podcasts, where interest fades with each episode. Tools tied to a real job to be done last longer.

## Building a defensible product: stacking models and learning the hard parts

- Headshot Pro is not a single wrapper. It is 15 different AI models stacked in sequence, each doing a separate job: training, upscaling, generating, and optimizing photo quality. Some are custom-built.
- To do this he had to learn Python and machine learning. He says deploying models used to be the hard part, but hosting startups that appeared around October 2022 made it much easier.
- He uses ChatGPT to summarize academic AI papers, since he has no academic background.
- His following on Twitter grew by showing what AI can do in a form regular people can understand: "I like to try things out, make tools out of it so it's more comprehensible for the regular Joe."

## How to start building AI tools and what he would build

How to start:
- Use replicate.com. It hosts models such as Stable Diffusion, has simple input fields, and offers an API.
- Hook that API into a no-code tool. He mentions Zapier-style integrations that connect Stable Diffusion to email or Discord.
- He says 99% of apps you could build right now can be API wrappers with no-code tools. Coding knowledge is only needed to go deeper.

Choosing what to build:
- He would not enter image generation (Adobe and Canva do it) or chatbots (ChatGPT ships something new every week).
- Instead, pick something that annoys you and consider whether AI can speed it up.
- A looming recession means people want to save money, so ask whether the tool removes a step and saves money.
- An idea he would like to see built: a personalized daily podcast generated from Hacker News top posts and his favorite Twitter accounts, using text-to-voice and Whisper-style transcription, short enough for a morning dog walk. He thinks it is "not even that hard to build".

## Expected platform and market shifts

- He expects social media platforms such as Instagram to integrate AI try-on within a year or so, since they already hold users' face photos and could train a model on them and place shopping-carousel clothing on the user.
- He sees AI-generated models as most useful for small brands that could not otherwise afford shoots.
- Because new models launch constantly, he says that "every time I wake up the next morning there's something new that's launched that already makes the whole technology obsolete." For that reason he builds on small problems and distribution rather than on the current state of the tech.
