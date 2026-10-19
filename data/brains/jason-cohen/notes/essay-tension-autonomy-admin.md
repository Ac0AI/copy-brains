## Distinguishing individual efficiency from administrative efficiency

Jason frames a recurring tension: what is optimal for an individual (use any note-taking app you like) is often bad for the team (Bear can't share notes) and worse for the company (access control, PII, offboarding, backups, audits, secure servers). He ties this to autonomy and mastery, which make individuals comfortable and efficient.

- He notes that startups often win precisely because they skip the "dumb and slow" administrative overhead.
- He also notes the big company will add more ARR today than the small company adds in the next few months, so the overhead isn't simply dumb. Benefits and drawbacks both come from scale.
- His core question: when should a policy optimize for the individual, and when for the team or company?

## Why "efficiency" and "fair" have no single definition (the meals example)

Jason uses 10 people each handed a unique meal to show the options.

- **Random assignment** is cheapest to administer and "fair" (everyone is treated identically), but obviously suboptimal for recipients.
- **Voluntary trades** (person P prefers Q's plate, and Q is indifferent or agrees) lead to a Pareto-optimal state: any further transaction would make at least one party worse off.
- **Utilitarian maximization** can differ. Example: P rates their plate 1 and Q's 10; Q rates their own 9 and P's 5. Currently total happiness is 1 + 9 = 10; forcing a trade gives 10 + 5 = 15. But Q refuses, so the state is Pareto-optimal yet not globally maximal.
- He asks whether to force the trade, "pissing off Q for the greater good," and concludes there's no single answer, so use these ideas as a backdrop for practical policy decisions.

## Default to individual autonomy; standardize narrowly

- **Maximize the individual, satisfy administration.** Autonomy yields a win-win of happiness and efficiency, so it's the default. Administrative requirements take precedence only with reason: a current problem with identifiable harms, legal requirements, stated values, or because critical jobs (executive team, security, IT) can't be done without it. He points to his Satisficing vs Maximizing framework for navigating this.
- **Minimize the scope of standardization.** Code formatting should be standardized within a team, but requiring one IDE over-scopes it. Mandate the rules, and let developers use any editor that enforces them (even via external tooling they maintain themselves). The team gets standardization and the individual keeps efficiency.
- **Use standardization in one area to buy autonomy in another.** For a note-taking policy, only consider apps that work on Windows, Mac, iOS and Android, with a fantastic web UI and at-least-4-star iOS and Android apps. That narrows the field but lets people keep their own devices. Add requirements for accessibility (visually impaired) and many languages to raise individual effectiveness further.

## Standardize on outcomes, not implementations

Goal-setting and metrics reporting are his main example.

- The CEO needs a consistent summary of activities, metrics, and how departments and initiatives pace to expectation.
- But departments run differently: Product might plan tactics every two weeks and strategy annually while reporting monthly; Sales runs monthly. Product doesn't want to ship in December; Sales doesn't want meetings in the last days of the month.
- Systems of record differ (Jira, Zendesk, HubSpot, Segment, Salesforce), so there's no natural home for goals and metrics.
- His conclusion: forcing a single tool for all work is wrong. Standardize how goals and metrics are reported upward, and explicitly not how each department operates (paired with a KPI philosophy).

## Test policies and decide when to standardize

- **Require explicit benefits for individuals.** "No one creates a policy with an explicit intent of causing pain; it happens by accident." Policies should include sections detailing how they benefit each affected party. If any piece is lacking, the policy isn't good enough yet.
- **Document clear cases either way.** Product-line strategy is shared, so centralize it. Company-wide communication is better as one report than five. A team's inside jokes only work inside the team, and nobody is harmed by a family photo as a desktop background. Writing these down stops standardization encroaching where it has negative value and affirms where administrative needs are paramount.
- **Weigh temporary versus permanent inefficiency.** All change creates temporary inefficiency, and people often dislike change (UX changes draw complaints just for being different). Accept that cost if the standardization is valuable. Permanent inefficiency requires much higher conviction that the standardization is worthwhile.

## When local optimization hurts the whole system

- **Local vs global optimization.** In a marketing funnel, a team that drives more traffic may bring low-quality traffic (maybe why it was easy), so home page to purchase page conversion plummets, hurting another team's numbers. Here global optimization should win. Another case: assigning people at 90% utilization leads to catastrophic failures, plus unhappiness and burnout.
- **Accept sub-optimization away from the bottleneck.** Under the Theory of Constraints, throughput is limited by a single bottleneck, so optimizing other components doesn't raise throughput and can even lower it. Use non-bottleneck people to unblock or take tasks from the bottleneck, even if they're far less efficient or the tasks are menial. That is sub-optimal for those teams but raises total throughput.
- Involve everyone in diagnosing the problem and inventing the solution, so they feel they're working for the greater good "not working for an ignorant organization."

## Encourage self-organized trading; use global optimization sparingly

- **Proactively encourage Pareto-efficiency.** In the meals example, trading helps everyone and creates no problem for management, so it should be encouraged, not just allowed. Get creative about how people self-organize within policy constraints, e.g. trading time: helping another team hit a goal now, with the reverse later, without management involvement. Trading isn't the only technique.
- **Motorcycle courier example.** Bikers start at Central Dispatch, get packets and pickup addresses, and do a few rounds a day. Minimizing total road time is a hard optimization problem, and bikers often found one doing a drop-off blocks from another's pickup.
  - The system: every packet or pickup came with two physical tokens, and pay was by tokens returned at day's end, each worth the same.
  - A biker could do the assigned route and earn the usual amount, or trade: "If you deliver this package for me, I'll give you one of the two tokens."
  - The giver still earns a token for doing nothing; the taker earns more per hour if the detour is small.
  - Result: bikers self-organized far more efficient routes, all made more money per day, and the company handled more clients without hiring more bikers.
- **Use global optimization explicitly and sparingly.** It sounds smartest and often is, but it can be worse for individuals. When used, be explicit about why, what global effect is being maximized, and why it's worth the collective good. "If you're going to give me a meal I don't want, at least tell me why the higher purpose makes it a worthy sacrifice."

## The overall rule

Individual autonomy should be the paramount goal and the default. But local optimization doesn't always lead to global optimization, which is what the organization needs. Be open to administrative needs superseding the individual, but be explicit, thoughtful, justify the decision, and keep the individual in mind.
