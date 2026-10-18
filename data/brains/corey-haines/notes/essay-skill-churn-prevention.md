## Voluntary and involuntary churn need different fixes

- Corey splits churn into two types. Voluntary churn (customers choosing to cancel) is typically 50-70% of total churn. Involuntary churn (failed payments) is 30-50% of total churn but is often easier to fix.
- Voluntary churn is handled with cancel flows, save offers and exit surveys. Involuntary churn is handled with dunning emails, smart retries and card updaters.
- The most common mistake he lists is having no cancel flow: "Instant cancel leaves money on the table. Even a simple survey + one offer saves 10-15%".
- He also lists ignoring involuntary churn and having no dunning emails, which lets payment failures silently cancel accounts.

## Cancel flow structure and exit survey design

- Corey's cancel flow runs: Trigger (click "Cancel subscription") → Exit Survey → Dynamic Save Offer → Confirmation → Post-Cancel.
- The survey decides which offer to show. Confirmation states the end-of-billing-period clearly. Post-cancel sets expectations, offers an easy reactivation path and triggers a win-back sequence.
- Survey rules:
  - One question, single-select, with optional free text.
  - 5-8 reasons max, to avoid decision fatigue. Put the most common first and review the data quarterly.
  - Frame it as "Help us improve" rather than "Why are you leaving?", and don't make it a guilt trip.
- Reason categories he uses:
  - Too expensive
  - Not using it enough
  - Missing a feature
  - Switching to a competitor
  - Technical issues or bugs
  - Temporary or seasonal need
  - Business closed or changed
  - Other, with a free text field
- UI principles:
  - Keep "continue cancelling" visible (no dark patterns).
  - Show one primary offer plus one fallback, not a wall of options.
  - Show dollar savings, not just percentages.
  - Use the customer's name and account data where possible.
  - Make it mobile-friendly, since many cancellations happen on mobile.

## Matching save offers to the cancel reason

Corey's core insight: "match the offer to the reason." A discount won't save someone who isn't using the product, and a roadmap won't save someone who can't afford it.

| Cancel reason | Primary offer | Fallback |
|---|---|---|
| Too expensive | 20-30% discount for 2-3 months | Downgrade to a lower plan |
| Not using it enough | Pause for 1-3 months | Free onboarding session |
| Missing feature | Roadmap preview with timeline | Workaround guide |
| Switching to competitor | Competitive comparison plus discount | Feedback session |
| Technical issues | Escalate to support immediately | Credit plus priority fix |
| Temporary or seasonal | Pause subscription | Temporary downgrade |
| Business closed | Skip the offer and respect the situation | none |

## Save offer types and their rules

- **Discount**
  - 20-30% off for 2-3 months is the sweet spot.
  - Avoid 50%+ discounts because they train customers to cancel for deals.
  - Time-limit the offer ("This offer expires when you leave this page").
  - Show the dollar amount saved.
- **Pause**
  - Cap pauses at 1-3 months, since longer pauses rarely reactivate.
  - 60-80% of pausers eventually return to active.
  - Auto-reactivate with an advance notice email, and keep their data and settings intact.
- **Downgrade**
  - Show what they keep vs. what they lose.
  - Position it as "right-size your plan", not "downgrade".
  - Make the path back up easy.
- **Feature unlock or trial extension**
  - Unlock a premium feature they haven't tried, or extend a higher-tier trial.
  - This works best for "not getting enough value" reasons.
- **Personal outreach**
  - Use it for high-value accounts (top 10-20% by MRR), routed to customer success for a call.
  - For smaller companies, send a personal email from the founder.

## Proactive retention: risk signals and health scores

Corey's view is that "the best save happens before the customer ever clicks 'Cancel.'"

- Leading indicators of churn:
  - Login frequency drops 50%+ (high risk, 2-4 weeks before cancel).
  - Key feature usage stops (high, 1-3 weeks).
  - Support tickets spike then stop (high, 1-2 weeks).
  - Email open rates decline (medium, 2-6 weeks).
  - Billing page visits increase (high, days before).
  - Team seats removed (high, 1-2 weeks).
  - Data export initiated (critical, days before).
  - An individual recommendation rating of 0-6, a detractor (medium, 1-3 months).
- Health score (0-100):
  - Put every component on the same 0-100 scale, higher is healthier, before weighting. Don't add raw login counts, a 1-5 rating and a percentage together.
  - Illustrative weights, not validated predictions: login frequency 0.30, feature usage 0.25, support sentiment 0.15, billing health 0.15, engagement 0.15.
  - Treat missing or stale signals as unavailable, not as healthy or zero. Set freshness windows and a minimum coverage policy first.
  - If a partial score is allowed, compute `sum(weight × observed score) / sum(observed weights)` and report coverage. Example: login 80 and feature usage 60 give (0.30×80 + 0.25×60)/0.55 = 70.91 at 55% coverage.
  - Validate mappings and thresholds against later renewal and churn outcomes before operational use.
- Illustrative tiers: 80-100 healthy (upsell), 60-79 needs attention (proactive check-in), 40-59 at risk (intervention campaign), 0-39 critical (personal outreach).
- Triggered interventions:
  - Usage drop over 50% for 2 weeks: a "We noticed you haven't used [feature]. Need help?" email.
  - No login for 14 days: a re-engagement email with product updates.
  - NPS detractor: personal follow-up within 24 hours.
  - Support ticket unresolved over 48 hours: escalation plus a proactive status update.
  - Annual renewal in 30 days: a value recap plus renewal confirmation.

## Involuntary churn: the dunning stack and smart retries

- Stack: Pre-dunning → Smart retry → Dunning emails → Grace period → Hard cancel.
- Pre-dunning:
  - Card expiry alerts at 30, 15 and 7 days before expiry.
  - Prompt for a backup payment method at signup.
  - Use Visa/Mastercard card updater programs, which he says reduce hard declines 30-50%.
  - For annual plans, send a pre-billing notice 3-5 days before the charge.
- Retry by decline type:
  - Soft decline (insufficient funds, processor timeout): retry 3-5 times over 7-10 days.
  - Hard decline (stolen card, closed account): don't retry, ask for a new card.
  - Authentication required (3D Secure, SCA): send the customer to update payment.
- Retry timing: 24 hours, 3 days, 5 days, then 7 days after failure (with dunning email escalation). After 4 retries, hard cancel with a reactivation path.
- Tip: retry on the day of the month the payment originally succeeded. Stripe Smart Retries handles this automatically.

## Dunning emails and recovery benchmarks

- Four-email sequence:
  - Day 0: friendly alert, "Your payment didn't go through. Update your card."
  - Day 3: helpful reminder.
  - Day 7: urgency, "Your account will be paused in 3 days."
  - Day 10: final warning.
- Email practices:
  - Link directly to the payment update page, with no login required if possible.
  - Show what they'll lose, such as their data and their team's access.
  - Don't blame ("your payment failed", not "you failed to pay").
  - Include a support contact.
  - Plain text performs better than designed emails for dunning.
- Recovery benchmarks (poor / average / good):
  - Soft decline recovery: under 40% / 50-60% / 70%+.
  - Hard decline recovery: under 10% / 20-30% / 40%+.
  - Overall payment recovery: under 30% / 40-50% / 60%+.
  - Pre-dunning prevention: none / 10-15% / 20-30%.

## Churn metrics, cohorts and cancel flow A/B tests

- Metrics and targets:
  - Monthly churn rate (churned / start-of-month customers): under 5% B2C, under 2% B2B.
  - Net revenue churn: (lost MRR − expansion MRR) / start MRR, ideally negative.
  - Cancel flow save rate: 25-35%.
  - Offer acceptance rate: 15-25%.
  - Pause reactivation rate: 60-80%.
  - Dunning recovery rate: 50-60%.
- Segment churn by acquisition channel, plan type, tenure (30, 60 or 90 days), cancel reason and save offer type.
- Test one variable at a time:
  - Discount of 20% vs 30%, measured on save rate and LTV impact.
  - Pause of 1 vs 3 months, measured on reactivation rate.
  - Survey before vs after the offer.
  - Modal vs full page.
  - Empathetic vs direct copy.
- He suggests PostHog for these tests: feature flags split users server-side, and funnels track survey → offer → accept/decline → confirm.
- Track whether saved customers last. "A 'saved' customer who churns 30 days later wasn't really saved."

## Compliance and tooling for retention

- Don't hide the cancel button. It breeds resentment and bad reviews, and many jurisdictions require easy cancellation (he cites the FTC Click-to-Cancel rule).
- Avoid guilt-trip copy such as "Are you sure you want to abandon us?", which damages brand trust.
- Retention platforms he lists:
  - Churnkey: full cancel flow plus dunning, AI-adaptive offers, 34% average save rate.
  - ProsperStack: advanced rules engine, Stripe and Chargebee integration.
  - Raaft: simple builder for early-stage.
  - Chargebee Retention: native for Chargebee customers (formerly Brightback).
- Billing providers (Stripe, Chargebee, Paddle, Recurly) have built-in smart retries and dunning emails. Braintree needs manual config.
- Context to gather before building: monthly churn split voluntary vs involuntary, subscriber count, average MRR, billing provider, billing intervals, pause and downgrade support, usage tracking, past cancel reasons, B2B vs B2C, and brand tone.
