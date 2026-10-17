## How Blake builds around a novel idea

- Blake's core thesis is that most apps fail to hit even $10K/month because they are a "0.1% Improvement", an incremental tweak on something already tried.
- His examples of crowded ideas: a social workout app ("tried like 100 plus times") and a college marketplace app, which was the first app he ever built.
- His rule: "if something has been tried a lot and failed it's usually not a great sign."
- He builds something truly novel instead. He avoids a 1% improvement on a popular product, and avoids squashing two popular products together.
- Plug AI (originally Rizz GPT) worked because it did new things:
  - pickup lines
  - an AI dating coach
  - a "spice" adjuster for responses
  - screenshot-based reply suggestions
- Blake's usual build pattern is to pick a wedge, ship fast, and test.

## Finding a wedge by scanning social media

- Blake saw a gap in male self-improvement: men are increasingly lost, and the information they get is neither high quality nor personalized.
- He scanned social media to find the most popular niche for young men. That was looksmaxing, so he entered through it.
- His long-term triangle for male self-improvement has three corners:
  - attractiveness
  - physiology (weightlifting, running, exercise)
  - motivation, discipline and mindset
- UMax sits only in the attractiveness corner for now.
- Looksmaxing is male beautification: skincare, eyebrow grooming and hair care, which women have done for decades. Blake sees it as the successor to the gym-bro movement, which has declined on social media over the past few years.
- He frames it as American self-improvement culture ("if you work hard you can achieve a better life"). That is why the niche resonates.

## Building as a user of the niche

- Blake says: "build something for yourself."
- He wasn't a looksmaxer, so before building he became an active participant on Reddit, Discord, TikTok and Instagram. He wanted to "think like one of the users."
- Research and development ran in parallel. He designed, built and launched the first version in a little over a month, with part-time help from two people.
- On feature prioritization: with 100 ideas you can't assess them objectively. You either split test them, or you are a user yourself and ask what would make you open the app every day.

## UMax product, launch and growth numbers

- **Product:** the user uploads one front photo and one side photo.
  - They get ratings: overall, potential, jawline, cheekbones, skin quality, masculinity.
  - They also get a personalized "glow-up routine" of recommendations.
  - They rescan weekly to track progress, and results are shareable.
- **Backend:** a mix of classic ML vision and AI vision models such as GPT Vision.
  - Open-source ML libraries detect things like acne.
  - Vision models handle harder calls like hairstyle.
  - About 100 values are classified, covering acne, face shape and jaw contour. These generate the ratings and recommendations.
  - Example: detected acne triggers a routine with benzoyl peroxide and salicylic acid.
- **Launch:** early December. Blake split tested angles, such as ratings versus the recommendations repository, and doubled down on what worked.
- **Trajectory:** a slow trickle for about a month and a half, then organic sharing.
  - Revenue went from about $10K/day to almost $20K/day within a day, and stayed there.
- **Results after about 3.5 months:**
  - 3.5M+ downloads
  - $1.5M+ in revenue
  - roughly $500K/month recurring
  - about $6M ARR
- **Team:** one founder, then a CTO (full stack and ML), one full-time marketer, and about three full-time and three part-time people.
- **Audience:**
  - about 60% US, 30% Europe, 10% rest of world
  - mainly ages 16 to 25

## Marketing: virality plus going wide

- "The best way to Market an app is to build an app that people organically want to share with their friends."
- Two routes to that:
  - **K-factor optimizations.** He cites Lapse as a company that did this.
  - **A inherently viral feature.** Package it so people want to share it because it's funny, fun or unique.
- UMax's shareable features are the rating card and an AI-generated "you as a 10 out of 10" image. He declined to name the model, because competitors copy features.
- Blake also distributes everywhere: Reddit, TikTok, Instagram, Facebook.
- He works with social media creators and took some on a trip to Hawaii to make content.
- Users post "glow-ups" organically and reference the app, which drives more sharing.
- Possible next feature: show the user's photo with a recommendation applied, such as cleared acne.

## Handling insecurity concerns and copycats

- **Insecurity critique.** Blake's view: "insecurities are often just desire for change." They can paralyze, or they can push you toward where you want to be.
  - He points to his own scrawny teenage years, which led him to lift almost daily.
  - Users with bad ratings often email to say thanks, because they now know what to work on.
  - He says criticism comes almost exclusively from people outside the community who haven't used the app.
- **Copycats.** There are at least 20 clones.
  - One competitor tried to poach creators and employees, mass-report his accounts, and call his team scammers.
  - Blake says he won't do the same: "strong moral principles."
  - Despite this, the clones haven't taken much traction.

## Business strategy: expansion, profitability and funding

- **Long-term vision:** a "Hims for self-improvement."
  - Hims became the default destination for men's physiological health issues.
  - Blake wants a brand people go to for fitness, attractiveness, mindset, discipline and focus.
  - He notes tailwinds from Huberman, Chris Williamson and Joe Rogan.
  - Open question: one app, or several apps under one brand.
  - Beyond apps, physical products such as a UMax skincare serum that people could use daily.
- **Plug AI economics:** reached about $200K/month in revenue, and still earns that. The team judged it couldn't scale much further, so they put it on autopilot to build new things.
- **Funding:** Blake leans toward bootstrapping because UMax is highly profitable.
  - He respects founder-VCs, but is wary of VCs who were never founders and have strong opinions.
  - He has heard stories of investors blocking founders.
  - Being "not beholden to anybody" is a strong position.
  - The main open question is how big to scale the team.

## Working with AI models and their limits

- **Origins:** Blake first used GPT-3 in October 2022, before ChatGPT launched. Early projects included an AI slide deck generator for school.
- **Moderation:** with Plug AI the APIs often refused flirtatious or sexual messages. His fix was workarounds and less restrictive open-source models.
- **Opinion:** he understands the risk aversion of big companies but doesn't like it, and says restricting models resembles restricting free speech.
- **AGI:** he defines it as a "physical Turing test": swap a friend's brain for an LLM and see whether you can tell.
  - He guesses 2025 for AGI, noting GPT-4 with the right tooling might already be there.
  - He guesses around 2029 for ASI, meaning a model that hits exponential growth on its own.
- **Other views:** he believes consciousness is a spectrum, and says psychologists and philosophers should weigh in alongside ML experts.
- **Work ethic:** he thinks most people work much less hard than they believe, including in San Francisco and tech.
- **HF0:** he credits the residency, about 2.5 months in total, for exposing him to unusually brilliant people.
