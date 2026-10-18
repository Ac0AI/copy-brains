## Paywalls: value first, never trap the user

Corey's "paywalls" skill is a playbook for in-product upgrade moments (freemium to paid, trial to paid, tier upgrades, feature upsells, usage limits). It is distinct from public pricing pages, which belong to CRO, and from pricing decisions, which belong to the pricing skill. The goal is converting free users at moments when they have already experienced enough value to justify paying.

## Four core principles

- **Value before ask.** The user should have experienced real value first. The upgrade should feel like a natural next step, timed after the "aha moment," not before.
- **Show, don't just tell.** Demonstrate paid features, preview what the user is missing, and make the upgrade feel tangible.
- **Friction-free path.** Upgrading should be easy when the user is ready. Don't make them hunt for pricing.
- **Respect the no.** Don't trap or pressure. Make it easy to continue on free so trust holds for future conversion.

## Trigger points

- **Feature gates** (user clicks a paid-only feature): explain clearly why it's paid, show what the feature does, give a quick path to unlock, and offer an option to continue without it.
- **Usage limits**: indicate clearly that the limit is reached, show what upgrading provides, and don't block abruptly.
- **Trial expiration**: send early warnings at 7, 3, and 1 day. Spell out what happens on expiration and summarize the value the user received.
- **Time-based prompts** (after X days of free use): keep the reminder gentle, highlight unused paid features, and make it easy to dismiss.

## Paywall screen anatomy

1. **Headline** focused on what they get: "Unlock [Feature] to [Benefit]".
2. **Value demonstration**: a preview, a before/after, or "With Pro you could...".
3. **Feature comparison** that highlights key differences, with the current plan marked.
4. **Pricing** that is clear and simple, with annual vs. monthly options.
5. **Social proof**: customer quotes, "X teams use this".
6. **CTA** that is specific and value-oriented: "Start Getting [Benefit]".
7. **Escape hatch**: a clear "Not now" or "Continue with Free".

## Three screen templates

- **Feature lock:** lock icon, "This feature is available on Pro," a feature preview or screenshot, "[Feature name] helps you [benefit]" with two capability bullets, then "Upgrade to Pro - $X/mo" and "Maybe Later".
- **Usage limit:** "You've reached your free limit," a progress bar at 100%, "Free: 3 projects | Pro: Unlimited," then "Upgrade to Pro" next to "Delete a project" (a way to stay free).
- **Trial expiration:** "Your trial ends in 3 days," then "What you'll lose" (features used, data created), "What you've accomplished" (e.g. "Created X projects"), and the actions "Continue with Pro," "Remind me later," and "Downgrade".

## Timing and frequency

- **Show** after a value moment but before frustration, after activation or the aha moment, and when the user hits genuine limits.
- **Don't show** during onboarding (too early), while the user is in a flow, or repeatedly after a dismissal.
- **Frequency rules:** cap prompts per session, use a cool-down after dismissal measured in days rather than hours, and track annoyance signals.

## Upgrade flow and post-upgrade

- **Paywall to payment:** minimize steps, keep the flow in-context where possible, and pre-fill known information.
- **Post-upgrade:** give immediate access to the features, send a confirmation and receipt, and guide the user to the new features.

## Testing, metrics and anti-patterns

- **Test:** trigger timing, headline and copy, price presentation, trial length, feature emphasis, and design/layout.
- **Metrics:** paywall impression rate, click-through to upgrade, completion rate, revenue per user, and churn rate after upgrade.
- **Dark patterns to avoid:** hiding the close button, confusing plan selection, guilt-trip copy.
- **Conversion killers:** asking before value is delivered, prompts that are too frequent, blocking critical flows, and a complicated upgrade process.

## Questions Corey asks before advising

1. What's the current free-to-paid conversion rate?
2. What triggers upgrade prompts today?
3. Which features sit behind the paywall?
4. What is the users' "aha moment"?
5. What is the pricing model (per seat, usage, flat)?
6. Is it a mobile app, a web app, or both?

He also checks `.agents/product-marketing.md` (or `.claude/product-marketing.md`) for existing context before asking anything. Related skills: churn-prevention (cancel flows, save offers), cro, onboarding (reaching the aha moment before upgrade), and ab-testing.
