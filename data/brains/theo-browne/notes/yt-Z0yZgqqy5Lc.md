## Framework for evaluating technical decisions: cost, value, risk

Theo argues picking tech is an investment, like hiring an employee: you are betting on the people maintaining it (or on your ability to fork it), and it affects hiring, developer satisfaction, delivery time and what you can build. His position is that more options don't make decisions inherently harder; they just mean you need a better way to measure them. He measures every option on three axes:

- **Cost**, split into three parts:
  - ramp-up time
  - maintenance over time
  - ramp-off (migration) cost
- **Value**: time saved, wins users feel, developer happiness, and effect on hiring.
- **Risk**: kept separate from cost. Theo describes it as "almost like the delta for how much range there is for the cost to be in." It is the hardest to measure, but he says to measure both the risk of a technology and your team's tolerance for it. Decide this loosely ahead of time so you can discuss it and reflect on it.

## Plotting cost against team size to compare technologies

Theo's visualization puts cost on the vertical axis (time, money and a hint of risk, i.e. how much drain on the people building and how much less time goes to user-facing features). On the horizontal axis he uses employee count.

- Employee count is imperfect, but it is a way to think about how a project will change over time.
- A side project with a friend will never have 100 people on it. A greenfield project at work might go to 50 people in weeks and hundreds later. The technologies should differ.
- Companies that know they need 2,000 employees in a few years choose differently from a small, successful team that chooses a simple codebase by design.
- Risk shows up as horizontal stretching or shrinking of the curve: how soon you have to adopt or drop a technology.

## tRPC: cheap to leave, bounded in scale

Theo calls tRPC one of the best ways to start a new full stack app. It is a type-safe API defined with plain TypeScript functions, with no custom language and no compiler, which makes sweeping changes fast because inference shows errors on both sides.

- **Ramp-up:** somewhat high. You need to understand it well, and there is boilerplate. Usually one person sets it up and the rest of the team cruises on top.
- **Maintenance:** effectively flat as the team grows. You just write functions and call them.
- **Limit:** with enough endpoints, the TypeScript compiler slows to a crawl and eventually crashes from the amount of inference. There are codebase sizes where tRPC is not valid, so plan early for moving off it.
- **Risk:** it is mostly the work of one developer. Theo accepts that because the migration cost is low: porting to GraphQL or Express means copy-pasting existing functions and adding your own validation and schema.
- **His own call:** at ping (5 people) he optimizes for shipping functions fast and will pay the migration cost later, "when there is a technology that makes more sense for us as the team and the codebase grows."
- **Requirement:** it only works well if backend and frontend are both TypeScript.

## GraphQL: expensive to adopt, huge to leave, valuable as team communication

- **Ramp-up:** much higher, because you are choosing "like five" technologies (client, server, and so on). Prescriptive options like Apollo "tend to fail faster." Theo says he could draw 15 lines on the chart for different GraphQL setups.
- **Maintenance:** every schema change carries a cost, because clients may be in other codebases and you never have a firm guarantee they will respect the change. He watched Twitch pay this regularly.
- **Value:** at Twitch it was worth it. Its benefit was "a method for us to communicate better and define standards between the backend and front-end teams," not a technology that magically solves problems.
- **Risk reduction:** the schema language came from Meta and has a huge community, with clients and servers for Swift, Kotlin, Python, Go, and so on.
- **Ramp-off:** "if we ever had to move off of GraphQL we're screwed." Once deeply bought in, he finds it unimaginable to move off.

## RedwoodJS vs create-t3-app: how far each scales and what leaving costs

- **RedwoodJS:** a full stack TypeScript framework with a strong GraphQL layer. Theo thinks it scales to larger teams than tRPC or create-t3-app because of that layer.
  - Non-TypeScript hires or Swift and Kotlin mobile clients can consume the same APIs.
  - Most of the GraphQL definition and consumption lives inside the Redwood project, so when you hit its cap, moving off is very expensive.
- **create-t3-app:** a project his community built, on his idea, to cut tRPC onboarding cost. It bootstraps the boilerplate and the interactions between pieces like NextAuth and Prisma, so that knowledge is "paid off in advance" by the maintainers.
  - Maintenance cost is the same, since the technology is the same.
  - Off-boarding is slightly more expensive, because you need to understand tRPC better at that point.
  - Setup asks which pieces you want (tRPC, Prisma, Tailwind, NextAuth), and you can add, remove or swap them later.
- **Comparison on his chart:** over the life of a growing company, create-t3-app costs less time, effort and sanity than tRPC alone. Redwood reaches a similar cost at the point where create-t3-app is outgrown. At around 400 employees (he stresses this is arbitrary), the cost of leaving Redwood is far higher. Once you have paid to move off create-t3-app, you are roughly where Redwood sits.
- **Theo's summary:** he says modular tools are cheap to move off, "you can move to anything else at that point," and that composability is "the easiest way to reduce the risk of any technology bet that you make."

## Other factors beyond the cost curve: clients, team, future

- **Client needs:** users are the often-forgotten part. Engineers talk about raw numbers like latency, but he says to think about what users need now and later. His example is the Amazon figure where a couple hundred milliseconds cost roughly 10% of checkouts.
- **Current team:** consider what they know and how the choice affects their day-to-day satisfaction. Even as an opinionated leader, he would let an engineer adopt a technology they are confident in and he is unsure of, even if it might burn and fail. Developer satisfaction is "essential to retaining your team."
- **Future:** know where the project is expected to be.
  - Many of his projects are solo.
  - Some may have all his code deleted and replaced by the 10,000th engineer.
  - Modularity and tech picks should match that expected trajectory.
- **Examples of risk that extends reach:** hiring non-engineers, or having contractors on iOS and Android who need the data, can favor something like Redwood. A huge endpoint count even with a small team can force an earlier move off tRPC.
