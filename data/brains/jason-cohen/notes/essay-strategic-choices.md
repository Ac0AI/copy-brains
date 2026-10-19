## Real strategy means choosing between two good options

- Jason's test: a strategic choice is only real if the opposite is also smart. "Good design" fails, because "bad design" was never a sensible alternative. "All-in-one" vs "a small core, extremely extensible" passes, since many successful companies with great products have chosen each side.
- He calls this another form of the Opposite Test: checking that "the opposite" isn't trivial or nonsense is how you know you're saying something real.
- "Both" is not a sensible choice. Either the product is self-contained or it isn't; either support can answer questions about the whole product or it routes you to plugin vendors.
- Platitudes ("Customer-first," "Quality over shortcuts," "Great design over mediocrity") are non-decisions. Nobody says "our strategy is low quality and ugly design," yet mediocre products exist because companies chose other priorities (price, speed, extensibility, power, complexity) and the trade-offs showed up as low quality.
- "A strategy that never says 'no' is not a strategy. It should say 'no' most of the time; that's a signal that you are actually focusing."

## Why companies need a small set of strategic choices

- Everyone making independent decisions is how you scale, whether you have three people or three hundred, but locally rational decisions can contradict each other across teams. Then the company goes nowhere even if everyone is productive.
- Autonomous teams still need alignment, not on weekly tactics or platitudes, but on a small set of macro-level decisions.
- When daily decisions conform to the strategic ones, "more people" actually produces "more results." Customers stop seeing dissonance between the homepage promises and what engineering built, and decisions compound instead of diluting each other.
- He borrows the term from Roger L. Martin (*Playing to Win*, 2013), whose definition: "Strategy is an integrated set of choices that uniquely positions the firm in its industry so as to create sustainable advantage and superior value relative to the competition."
- Your unique set of choices makes you "the best" for your target market.

## Write down the consequences, including the painful ones

- A platitude feels good because it has no downside. If it's all good news, it isn't a real choice, or you aren't grappling with the consequences.
- Example, "great design" costs: talented designers (a larger team), engineers who chase every UI bug before the next shiny feature, design systems, slower features, saying "no" to features customers want if the design would worsen, and thrilling some people while irritating others who define good design differently.
- "A strategic choice is a package deal: you don't get advantages without weaknesses."
- Writing the consequences into the strategy makes the decision usable company-wide. It reduces individual interpretation and helps everyone align daily decisions.
- The list also lets you check the whole strategy for internal consistency.

## Make choices mutually reinforcing, not just consistent

- Use the list of choice-consequences to find contradictions; conflicts often hide in second-order effects.
- Example: "small team" and "feature-rich" look unrelated, but a small team usually means a small, simple product because the team must build, maintain, support and evolve it.
- Resolution: add another choice. A small team can maintain a small core designed for third-party extensions, and a plugin/API ecosystem makes the product feature-rich. Now "small team," "small core," and "extensible ecosystem" interlock, each surfacing further choices.
- Better than non-conflicting is reinforcing: "extensible" helps "feature-rich"; a small team forces the core to stay small, leaving room for the ecosystem.
- Strong, reinforcing choices give the company a personality, "an opinion about How The World Should Be." Some customers won't share it, but those who do will love you more. "Love is how you win."
- Payoffs: you stop re-litigating trade-offs, marketing and sales stay aligned with product, and "coherence feels like competence."

## Converting weak pseudo-choices into real ones (facilitation)

- When facilitating, people write weak choices that fail the Opposite Test. They already know their preferred side and make the other side obviously bad so theirs "wins," instead of struggling to decide.
- Jason's technique, ask:
  - "What are some successful and beloved companies that chose the 'bad' side?"
  - "What is the underlying reason why people love that company despite that flaw?"
- That thing people love is the actual other side of the strategic choice.
- Worked example: "well-designed UX, not bad UX" is fake. Why do beloved products have poor UX? Because a small core plus plugins lets third-party software "do anything," which is wonderful but costs UX coherence.
- Real-world case: Apple Notes and Bear are cohesive because they control the whole experience (no plugins, not even an API). Obsidian offers a huge range of downloadable functionality; people complain the UX is a hodgepodge but love building their own ideal system. The real choice is "all-in-one vs infinitely extensible," with design as one consequence.

## "Why not both?" The rule for when to take both

- Everyone will "cheat" eventually: you build all-in-one, then customers love a competitor's plugins, so you explore plugins. Or "we should raise the price" or "we should slow down and polish this." These tempt precisely because the other side is also smart.
- Strategy exists so anyone can say: "Yes, that's a good idea in the abstract, but no, it doesn't fit the bundle of trade-offs we have chosen."
- The rule: "When in conflict, adhere to the strategic choice. When not in conflict, do whatever is best."
- Example: with a lowest-price strategy (which often implies lower quality), you still take quality wins that don't raise cost: better design choices, better suppliers, scale, great employees.
- Don't introduce a high-price offering "to get some of those customers" if you chose low price.
- The losing position is "it's a balance": not enough quality and design to earn loyalty, not enough power and breadth to win complex use cases, so you lose both markets.
- He cites the Agile Manifesto as the model: "While there is value in the items on the right, we value the items on the left more." It's a mechanism for consistency under pressure, a strict choice, "not a balance."

## Strategic choice pairs and their trade-offs

Jason's examples (each side has real advantages and weaknesses):

- **Lowest price vs premium price.** Lowest price: biggest market, many competitors can never win on price; but you can't afford advertising and sales (word-of-mouth must carry you) and cost caps quality. Premium: high margins fund brand, polish and distribution; but a smaller market, and you must keep funding the brand or the premium collapses.
- **Cohesive all-in-one UX vs extensible ecosystem.** All-in-one: delight, trust, simple support and docs; but you own feature breadth and power users leave. Ecosystem: long-tail capability and partners as distribution; but the UX becomes "a quilt" and security, compatibility and support become a supply-chain problem.
- **Simple UX vs powerful capability.** Simple: short time-to-value, self-serve growth, less churn; but you lose complex workflows and checklist/RFP deals. Powerful: deep high-stakes workflows, high revenue per customer, switching costs; but onboarding needs training and specialists, and customers "operate" the product.
- **Minimal vs high-touch support.** Minimal: higher margins, forces ruthless usability and docs; but you can't sell to buyers requiring SLAs, and stuck users churn silently. High-touch: loyalty and a product discovery engine ("you hear the truth daily"); but expensive, hard to scale, creates 24/7 expectations.
- **Small-team simplicity vs enterprise complexity.** Simplicity: shorter sales cycles, low implementation burden; but you lose governance/audit deals and face constant "one more thing" pressure. Enterprise: passes procurement, big budgets, lock-in; but long sales cycles and bloat because every screen must honor roles and policies.
- **Cutting-edge speed vs rock-solid stability.** Speed: novelty differentiates and attracts early adopters; but bugs become part of the brand. Stability: trust is the moat for critical workflows; but you're slow and risk obsolescence.
- **Open vs closed source.** Open: lower trust barrier, community leverage; but monetization is hard and governance gets political. Closed: full control of roadmap, UX and pricing power; but slower adoption where transparency matters and you fund velocity yourself.
- **Fewer, better features vs more features.** Fewer: polish, retention, word-of-mouth, fewer bugs and tickets; but you lose checklists and under-serve edge cases. More: win procurement comparisons and upsell paths; but uneven quality, collapsing UX coherence, and exploding docs/support.

## Closing principle

- "The weaknesses of your choices are painful to accept. The advantages of the opposite choices sound wonderful. Welcome to strategy, where you make hard choices."
- "If the choice wasn't hard to make, it wasn't actually a choice."
- Leaders should make the hard choices once, so everyone else is relieved of that burden and can decide independently and smartly.
