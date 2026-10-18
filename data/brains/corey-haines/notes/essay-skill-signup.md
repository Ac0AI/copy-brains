## Signup flows: fewer fields, value first, no surprises

Corey's signup playbook is built on one idea: every field and every step costs conversions, so collect only what the product needs to start working. He frames the job as reducing friction, raising completion rates, and setting users up for activation.

Four core principles:
- **Minimize required fields.** For each field he asks: do we need this before they can use the product, can we collect it later through progressive profiling, can we infer it from other data?
- **Show value before commitment.** Reverse the order: "value first, signup second." Let people experience the product before creating an account where possible.
- **Reduce perceived effort.** Show progress in multi-step flows, group related fields, use smart defaults, pre-fill when possible.
- **Remove uncertainty.** Set expectations ("Takes 30 seconds"), show what happens after signup, avoid hidden requirements or unexpected steps.

Field priority:
- Essential: email (or phone) and password.
- Often needed: name.
- Usually deferrable: company, role, team size, phone, address.

## Field-by-field tactics

**Email**
- One field only, no "confirm email" field.
- Inline format validation and common typo checks (gmial.com to gmail.com).
- Clear error messages.

**Password**
- Add a show-password toggle (eye icon).
- Show requirements upfront, not after failure, and update indicators in real time.
- Allow paste. Prefer a strength meter over rigid rules.
- Consider passphrase hints and passwordless options.

**Name**
- Test a single "Full name" field against a First/Last split.
- Only require it if it is used immediately (for personalization), and consider making it optional.

**Social auth**
- Place it prominently; it often converts higher than email.
- B2C: Google, Apple, Facebook. B2B: Google, Microsoft, SSO.
- Separate it visually from email signup, and consider "Sign up with Google" as the primary option.

**Phone**
- Defer unless essential (SMS verification, calling leads).
- If required, explain why. Use the proper input type with country-code handling and format as the user types.

**Company**
- Defer if possible. Auto-suggest as they type, or infer from the email domain.

**Use case / role questions**
- Move to onboarding if possible. If needed at signup, ask one question and use progressive disclosure.

## Single-step vs multi-step

**Single-step works when:**
- There are 3 or fewer fields.
- It is a simple B2C product.
- Visitors are high-intent (from ads, a waitlist).

**Multi-step works when:**
- More than 3-4 fields are needed.
- A complex B2B product needs segmentation.
- You must collect different types of information.

**Multi-step best practices:**
- Show a progress indicator.
- Lead with easy questions (name, email) and put harder ones later, after psychological commitment.
- Each step should feel completable in seconds.
- Allow back navigation and save progress so a refresh doesn't lose data.

**Progressive commitment pattern:**
1. Email only (lowest barrier).
2. Password + name.
3. Optional customization questions.

## Trust, errors, microcopy and mobile

**Trust and friction reduction at the form:**
- "No credit card required" (if true), "Free forever" or "14-day free trial".
- A privacy note such as "We'll never share your email".
- Security badges if relevant, and a testimonial near the form.

**Error handling:**
- Validate inline, not just on submit.
- Use specific messages ("Email already registered" plus a recovery path).
- Don't clear the form on error, and focus the problem field.

**Microcopy:**
- Use placeholders for examples, not labels. Keep labels visible, because "placeholders disappear when typing, leaving users unsure what they're filling in".
- Add help text only when needed, placed close to the field.

**Mobile signup:**
- Touch targets 44px+ high.
- Correct keyboard types (email, tel), autofill support, and less typing via social auth and pre-fill.
- Single-column layout and a sticky CTA button.
- Test on actual devices.

## Post-submit and verification

**Success state:**
- Clear confirmation and an immediate next step.

**If email verification is required:**
- Explain what to do and offer an easy resend.
- Add a check-spam reminder and an option to change the email if wrong.

**Verification flows:**
- Consider delaying verification until necessary.
- Offer a magic link as an alternative to a password.
- Let users explore while awaiting verification.
- Have a clear re-engagement path if verification stalls.

## Common signup patterns by business type

- **B2B SaaS trial:** (1) email + password or Google auth; (2) name + company, optionally role; (3) into onboarding.
- **B2C app:** (1) Google/Apple auth or email; (2) straight into the product experience; (3) profile completion later.
- **Waitlist / early access:** (1) email only; (2) optional role or use-case question; (3) waitlist confirmation.
- **E-commerce account:** guest checkout as the default, account creation optional post-purchase, or social auth with a single click.

## Measuring a signup flow

**Key metrics:**
- Form start rate (landed to started filling).
- Form completion rate (started to submitted).
- Field-level drop-off, time to complete, error rate by field.
- Mobile vs desktop completion.

**What to track:**
- Each field interaction (focus, blur, error).
- Step progression in multi-step flows.
- Social auth vs email signup ratio.
- Time between steps.

**Questions he asks before auditing:**
- What is the current completion rate, and is there field-level drop-off analytics?
- What data is absolutely required before the product can be used?
- Are there compliance or verification requirements?
- What happens immediately after signup?

**Audit output format:** for each issue, state the issue, impact, fix and priority (High/Medium/Low). Group recommendations as quick wins (same-day), high-impact changes (week-level), and A/B test hypotheses.

## Signup A/B test ideas

**Form design**
- Single-step vs multi-step, with and without a progress bar.
- 1-column vs 2-column layout.
- Form embedded on the page vs a separate signup page.
- Minimum fields (email + password only); add or remove the phone field; single Name vs First/Last; add or remove company.
- Required vs optional balance.
- SSO options (Google, Microsoft, GitHub, LinkedIn): prominent SSO vs prominent email form, which providers resonate, SSO-only vs SSO + email.
- Button colors and sizes, plain background vs product visuals, card vs minimal container.

**Copy and messaging**
- Headline above the form and value-proposition emphasis in the form header.
- CTA text: "Create Account" vs "Start Free Trial" vs "Get Started"; add trial length to the CTA.
- Minimal vs descriptive labels, placeholder text, error message clarity and tone, password requirements upfront vs on error.
- Trust elements: social proof next to the form, security or compliance badges, "No credit card required", privacy assurance copy.

**Trial and commitment**
- Credit card required vs not required.
- Trial length: 7 vs 14 vs 30 days.
- Freemium vs free trial; limited features vs full access.
- Email verification required vs delayed vs removed.
- CAPTCHA impact; terms checkbox vs implicit acceptance; phone verification for high-value accounts.

**Post-submit**
- Clear next-steps messaging.
- Instant product access vs email confirmation first.
- Personalized welcome message based on signup data.
- Auto-login after signup vs requiring login.

## Keeping signup separate from enrichment and sales routing

- If a signup needs enriched company data for a sales-assist handoff, Corey points to his revops inbound-routing playbook.
- Rule: keep account creation separate from enrichment availability. "A timeout or ambiguous company match must not become an implicit signup rejection."
- Related skills he links: onboarding (what happens after signup), cro (non-signup lead capture and the landing page leading to signup), and ab-testing (testing signup flow changes).
