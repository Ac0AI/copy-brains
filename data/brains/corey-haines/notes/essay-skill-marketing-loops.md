## How Corey defines a marketing loop

- A marketing loop is a repeatable workflow an AI agent runs on a cadence (weekly, daily or on a trigger), as opposed to a one-off task. It turns something you would do manually and forget into an always-on system, such as a weekly SEO opportunity scan, an ad-fatigue refresh or a churn-signal watch.
- He calls it the operational cousin of marketing ideas: "Ideas tell you *what to try once*. Loops tell you *what to keep doing on a schedule*." Loops wire the other marketing skills (ads, seo-audit, emails, social, churn-prevention, pricing, referrals, analytics) together.
- His workflow for setting one up:
  1. Read the product marketing context file (`.agents/product-marketing.md`) first and only ask for what is missing.
  2. Clarify the outcome the loop should protect or grow (rankings, ad efficiency, activation, retention, revenue, referrals).
  3. Pick the closest loop from a catalog of 58 and adapt it.
  4. Tune the cadence.
  5. Confirm the human checkpoint.
  6. Schedule it.
- He covers the full funnel in the catalog: SEO and content, paid, earned/social/partnerships, outbound, activation, retention, revenue, referral and advocacy, and ongoing ops.

## The nine parts every loop needs

Corey says a loop missing a stop condition, a self-check or its state handling "is a liability, not an asset." Every loop fills these nine parts:

1. **Check cadence**: how often it looks.
2. **Acts when**: the condition for actually doing something, versus checking and skipping. Most runs of a good loop are "checked, nothing to do."
3. **Purpose**: the one outcome it moves.
4. **Skills used**: which marketing skills it orchestrates.
5. **Loop body**: the ordered steps per iteration.
6. **Self-check**: verification before acting, so it does not act on noise, seasonality or a tracking bug.
7. **State / idempotency**: last-run marker, dedupe key, cooldown window, "already handled" set. Without it, loops double-act and re-nag people. He calls this non-negotiable for anything scheduled.
8. **Stop / bail-out**: when it skips, halts, escalates to a human or disables itself, plus error behavior. Even heartbeat loops need one ("manual disable + error-halt," never "n/a").
9. **Output**: a file, PR, staged draft, notification or report.

The split between check cadence and acts-when matters. A churn loop might check daily but only act when an account crosses a risk threshold and has not been contacted inside the cooldown window. Conflating the two gives loops that miss the window or spam.

## The cadence rule

Match cadence to how fast the signal actually changes, not to how often you would like an update. His table:

| Signal | Cadence | Why |
|---|---|---|
| Rankings, backlinks, domain authority | Weekly | Slow-moving; daily is noise |
| Ad creative fatigue, CPA drift | Every 2-3 days | Meta/Google feedback loops are days, not hours |
| Activation / onboarding funnel | Weekly | Needs enough signups to be significant |
| Churn signals | Daily or on-trigger | Early intervention window is short |
| Content / copy decay | Monthly | Traffic erosion is gradual |
| Competitor changes | Weekly | Shifts are infrequent but matter |
| Social listening / mentions | Daily | Engagement windows close fast |

He names over-frequent loops as the most common failure mode: they "generate busywork, burn budget, and train you to ignore the output."

## When not to loop

Corey skips a loop, or adds a mandatory human checkpoint, when:

- **Strategy or creative direction is the real work.** Loops maintain and optimize; they do not set positioning, invent campaigns or make brand calls.
- **The action publishes or spends without review.** Auto-drafting an ad, email or post is fine. Auto-publishing or auto-shifting budget needs a human checkpoint unless the user explicitly authorized autonomy and set guardrails such as caps and allowlists.
- **The signal is too sparse.** His example: a weekly conversion-rate loop on 40 visitors a week measures noise.
- **It is a vanity loop.** If nobody acts on the output, delete it: "A loop that emails a dashboard nobody reads is worse than nothing."

For any loop that sends, spends, publishes or touches personal data, he applies a guardrails reference:

- A two-tier action model: autonomous-safe versus gated.
- Spend and send caps.
- CAN-SPAM, GDPR, FTC and platform ToS rules.
- An always-escalate list.
- A required kill switch.

## Scheduling a loop

Corey keeps the loop body agent-agnostic; only scheduling depends on the environment.

- **Claude Code:** `/loop` (self-paced, until a condition), `ScheduleWakeup` (dynamic pacing that reacts to state) and `CronCreate` (fixed cron). A loop-mechanics skill like `loopify` can help choose between them.
- **Any agent plus cron:** wrap the body as a scheduled prompt or script, for example `0 9 * * 1` for Mondays at 9am.
- **Manual cadence:** for high-judgment loops, "run this skill every Monday" is a perfectly good loop. "The value is the repeatable *body*, not the automation."
- **Default pairing:** time-of-day cron for review-style loops (weekly review, ranking watch); dynamic pacing for monitor-until-threshold loops (churn watch, launch-day tracking).

## Running a whole channel: SEO and outbound operators

**SEO operator**
- Use it when the user wants an agent to own SEO for a site rather than run one loop.
- It bundles the SEO loops into one schedule: site health, claim drift, striking-distance push, AI-answer check, keyword gap, content decay, competitor watch and more.
- It has shared memory in `.agents/seo/`, a first-run checklist, operating rules, a writing gate and a one-screen weekly report.

**Outbound operator**
- It runs day-to-day outbound: signal sweeps, staged outreach, reply triage, sending-domain health and weekly sequence retros.
- It sets the brief, approved claims and approval rules by tier.
- It keeps shared memory in `.agents/outbound/` and produces a weekly report.

## Adoption order, authoring, and anti-patterns

- **Adoption:** when building more than one loop, start with tracking plus a weekly review. Do not build them all at once. Start with one, prove it earns its keep, then add the next.
- **Authoring a new loop:** when nothing in the catalog fits, use a template with fill-in prompts and a ship checklist. If you cannot answer the self-check, state/idempotency and stop/bail-out concretely, "the loop isn't ready to run."
- **Anti-patterns he lists:**
  - No stop condition, which leads to runaway spend or infinite churn.
  - The same cadence for every loop, so most run too often and get ignored.
  - No self-check, so the loop acts on noise, seasonality or a tracking bug.
  - No human checkpoint on spend or publish actions.
  - Building 10 loops at once.
- **Banned vocabulary:** "set it and forget it," "fully autonomous marketing," "AI does everything," "10x on autopilot," "growth hacking machine." His framing is that loops are "disciplined systems with checkpoints, not magic."
