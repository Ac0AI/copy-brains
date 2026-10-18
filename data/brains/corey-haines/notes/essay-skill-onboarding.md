## Onboarding goal: time-to-value and activation

Corey treats onboarding as getting new signups to their "aha moment" as fast as possible and building habits that drive retention.

- **Time-to-value is everything.** Remove every step between signup and core value. Design the Minimum Path to Value (MPTV): the fewest steps needed to experience enough value to make a confident decision.
- **One goal per session.** The first session should aim at one successful outcome. Advanced features come later.
- **Do, don't show.** Interactive beats tutorial; doing the thing beats learning about the thing.
- **Progress creates motivation.** Show advancement, celebrate completions, make the path visible.
- **Judge activation by outcomes, not volume.** He measures it by lead-to-customer conversion plus 90-day retention, because signups that don't convert and stick mean nothing.
- **Activation metrics:** % of signups reaching activation, time to activation, steps to activation, and activation by cohort/source.
- **Abandonment benchmarks (MPTV reference):** 40-60% after one session; 75-80% within day one.
- **Activation examples by product:**
  - Project management: create first project plus add a team member.
  - Analytics: install tracking plus see the first report.
  - Design tool: create first design plus export/share.
  - Marketplace: complete the first transaction.
- He says to pick an activation model (freemium, free trial, paid trial, money-back, consultation) before designing the flow, since the model shapes the whole path.

## Onboarding psychology principles

Corey lists the mechanisms that make progress mechanics, checklists and prompts work.

- **Endowed Progress Effect.** People finish faster when progress is already started. A checklist opening at "20% done" (a step pre-completed for them) drives roughly +40% completion versus starting at 0%.
- **Peak-End Rule.** Users remember the most intense moment and the end of an experience. Engineer a clear high point (a win, a wow, a celebration) and end each session positively.
- **Goldilocks Rule.** Motivation peaks when a task is on the edge of ability, neither too easy nor too hard. Tune early steps to be achievable but not trivial.
- **BJ Fogg Behavior Model.** A behavior happens only when Motivation × Ability × Prompt converge. If a step isn't happening, one is missing: raise motivation, make it easier, or add a better-timed prompt.
- **Mario Kart boosters and blockers (Ramli John).** Add boosters (pre-filled data, templates, quick wins, celebrations) and remove blockers (required fields, dead ends, confusing empty states).

## Onboarding toolkit: 10 components

He says to assemble onboarding from the fewest components that reach value:

- **Welcome forms:** capture role/goal to personalize; keep short (Hick's Law).
- **Initial screens:** orient and point to one clear action.
- **Drip emails:** one concept per email; don't overload.
- **Skippable tutorials:** optional guidance, never trap users.
- **Videos:** show complex workflows visually.
- **Docs / help center:** self-serve reference for stuck users.
- **Onboarding calls:** human touch for complex or high-value accounts.
- **Data inputs:** get the user's real data in so value feels real.
- **Checklists:** ordered, value-first steps with visible progress.
- **Empty states:** guided first-action opportunities, not dead ends.

## Finding the aha moment

Corey's method for identifying which early action predicts retention, with careful cohort rules:

1. Define signup as time zero, an early activation window, and a separate retention outcome after it (for example, first-seven-day actions and return activity in week four; choose windows that fit the product cadence).
2. Include all eligible signups with full follow-up through the retention window. Show recent, immature cohorts separately; don't count them as churned or limit the denominator to users who already activated.
3. Compare actions recorded within the early window only. Exclude behavior during the retention window: a week-four return can't also be the early predictor of week-four retention.
4. Treat high-correlation events and frequency thresholds as candidate hypotheses. Report counts, uncertainty, and acquisition/product segments; confirm on a later mature cohort before adopting.
5. Test whether an onboarding intervention actually improves later retention or customer conversion. "Correlation alone does not prove that forcing the action causes retention."

He points to Amplitude's Compass setup (separates early actions from later retention, requires time for every cohort member to retain) and its interpretation guide on correlation versus causation.

## Post-signup flow design, checklists and empty states

**First 30 seconds, three approaches:**

| Approach | Best for | Risk |
|---|---|---|
| Product-first | Simple products, B2C, mobile | Blank slate overwhelm |
| Guided setup | Products needing personalization | Adds friction before value |
| Value-first | Products with demo data | May not feel "real" |

Whatever the choice: one clear next action, no dead ends, progress indication if multi-step.

**Checklist pattern** (use when setup has multiple steps, many features to discover, or self-serve B2B):
- 3-7 items, ordered by value with the most impactful first.
- Start with quick wins.
- Show a progress bar or completion %.
- Celebrate on completion.
- Include a dismiss option; don't trap users.

**Empty states** are onboarding opportunities. A good one:
- Explains what the area is for.
- Shows what it looks like with data.
- Gives a clear primary action to add the first item.
- Optionally pre-populates example data.

**Tooltips and guided tours** suit complex UI, non-obvious features, and power features users might miss. Keep tours to 3-5 steps, dismissable at any time, and don't repeat them for returning users.

## Multi-channel onboarding and stalled users

**Email plus in-app coordination, trigger-based emails:**
- Welcome email: immediate.
- Incomplete onboarding: 24h and 72h.
- Activation achieved: celebration plus next step.
- Feature discovery: days 3, 7, 14.

Emails should reinforce in-app actions rather than duplicate them, drive back to the product with a specific CTA, and be personalized by actions taken.

**Stalled users:** define "stalled" criteria up front (X days inactive, incomplete setup). Re-engage with:
1. An email sequence: remind of value, address blockers, offer help.
2. In-app recovery: welcome back, pick up where they left off.
3. Human outreach for high-value accounts.

## Measurement, funnels and patterns by product type

**Key metrics:** activation rate, time to activation, onboarding completion, and Day 1/7/30 retention.

**Funnel analysis:** track drop-off at every step and focus on the biggest drops. His example funnel: Signup 100% → Step 1 80% → Step 2 60% → Activation 40% → Retention 25%.

**Key steps by product type:**

| Product | Steps |
|---|---|
| B2B SaaS | Setup wizard → first value action → team invite → deep setup |
| Marketplace | Complete profile → browse → first transaction → repeat loop |
| Mobile app | Permissions → quick win → push setup → habit loop |
| Content platform | Follow/customize → consume → create → engage |

**Experiment areas he recommends:** flow simplification (step count, ordering), progress and motivation mechanics, personalization by role or goal, and support/help availability.

## How Corey structures an onboarding audit or design

- **Audit format:** for each issue, Finding → Impact → Recommendation → Priority.
- **Flow design deliverable:** activation goal, step-by-step flow, checklist items, empty state copy, email sequence triggers, and a metrics plan.
- **Questions he asks first:**
  - Which early action predicts later retention, using what activation window and fully observed signup cohort?
  - What happens immediately after signup?
  - Where do users currently drop off?
  - What's the activation rate target?
  - Is there cohort analysis on successful versus churned users?
- He also checks for existing product marketing context before asking questions, and reads it first to avoid re-asking what's already covered.
