## Core CRO analysis: diagnose in order of impact
Corey's CRO playbook starts with an initial assessment, then analyzes a page across seven dimensions ordered by impact.

- Before any recommendation, identify the page type (homepage, landing page, pricing, feature, blog, about), the primary conversion goal (sign up, request demo, purchase, subscribe, download, contact sales) and the traffic context (organic, paid, email, social).
- If a product marketing context file exists (`.agents/product-marketing.md`, `.claude/product-marketing.md`, or the legacy `product-marketing-context.md`), he reads it first and only asks for what it doesn't cover.
- The seven dimensions, highest impact first: value proposition clarity, headline effectiveness, CTA placement/copy/hierarchy, visual hierarchy and scannability, trust signals and social proof, objection handling, and friction points.
- He frames the output as four buckets: Quick Wins (implement now), High-Impact Changes (bigger effort, significant gain), Test Ideas (hypotheses to A/B test rather than assume), and Copy Alternatives (2-3 options with rationale for headlines and CTAs).

## Value proposition and headline
Value proposition clarity is the highest-impact factor in Corey's framework.

- Test: can a visitor understand what this is and why they should care within 5 seconds? Is the primary benefit clear, specific and differentiated, and written in the customer's language rather than company jargon?
- Common issues: feature-focused instead of benefit-focused, too vague or too clever (sacrificing clarity), and trying to say everything instead of the most important thing.
- Headline checks: does it communicate the core value proposition, is it specific enough to be meaningful, and does it match the traffic source's messaging?
- Strong headline patterns:
  - Outcome-focused: "Get [desired outcome] without [pain point]".
  - Specificity: include numbers, timeframes or concrete details.
  - Social proof: "Join 10,000+ teams who...".

## CTA placement, copy and hierarchy
Corey checks that each page has one clear primary action.

- The primary CTA should be visible without scrolling, and its copy should communicate value, not just action.
  - Weak: "Submit," "Sign Up," "Learn More".
  - Strong: "Start Free Trial," "Get My Report," "See Pricing".
- Hierarchy: a logical primary versus secondary CTA structure, with CTAs repeated at key decision points.
- Visual hierarchy: someone scanning should get the main message, the most important elements should be visually prominent, there should be enough white space, and images should support rather than distract from the message.

## Trust signals and objection handling
Proof and objection answers should sit where the visitor is deciding.

- Trust signal types: customer logos (especially recognizable ones), testimonials (specific, attributed, with photos), case study snippets with real numbers, review scores and counts, and security badges where relevant.
- Placement: near CTAs and after benefit claims.
- Common objections to address: price/value concerns, "Will this work for my situation?", implementation difficulty, and "What if it doesn't work?"
- Ways to address them: FAQ sections, guarantees, comparison content and process transparency.
- Friction points to look for: too many form fields, unclear next steps, confusing navigation, required information that shouldn't be required, mobile experience issues and long load times.

## Page-specific frameworks
Corey adapts the analysis to the page type.

- **Homepage:** clear positioning for cold visitors, a quick path to the most common conversion, and handling both "ready to buy" and "still researching" visitors.
- **Landing page:** message match with the traffic source, a single CTA (remove navigation if possible), and a complete argument on one page.
- **Pricing page:** clear plan comparison, a recommended plan indication, and addressing "which plan is right for me?" anxiety.
- **Feature page:** connect each feature to a benefit, show use cases and examples, and give a clear path to try or buy.
- **Blog post:** contextual CTAs matching the content topic, and inline CTAs at natural stopping points.

## Discovery questions, experiments and related skills
Corey's CRO skill gathers context and routes to specialist playbooks.

- Questions he asks: the current conversion rate and goal, where traffic comes from, what the signup/purchase flow looks like after the page, whether there is user research, heatmaps or session recordings, and what has already been tried.
- Experiment areas to consider: hero section (headline, visual, CTA), trust signal and social proof placement, pricing presentation, form optimization, and navigation/UX. Detailed experiments by page type live in a separate experiments reference; test design and measurement go to the ab-testing skill.
- Triggers: use it for optimizing or increasing conversions on homepages, landing, pricing and feature pages, and lead capture or contact forms, including when a user says "this page isn't converting," "my landing page sucks," "form abandonment," or just shares a URL asking for feedback.
- Routing to other skills: signup/registration flows go to the signup skill, post-signup activation to onboarding, popups/modals to popups, a full copy rewrite to copywriting, and proper testing of changes to ab-testing.

## Form optimization and lead routing
Form-specific CRO is handled in a dedicated form reference.

- Lead, contact, demo or quote form abandonment (fields, validation, mobile forms) loads form.md, covering field decisions, layouts, errors, trust, measurement and form-specific experiments, including multi-step forms.
- When enrichment controls the next step after a lead form, Corey points to his revops inbound-routing playbook. Its rules: preserve valid submissions, bound the lookup wait, and provide a useful fallback when qualification is unknown.
