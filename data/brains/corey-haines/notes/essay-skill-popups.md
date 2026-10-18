## Popup design principles: timing, value, and respect for the user

Corey frames popup CRO around three principles.
- **Timing:** too early is an annoying interruption, too late is a missed opportunity. The right time is "helpful offer at moment of need".
- **Value:** the benefit must be clear and immediate, relevant to the page context, and "worth the interruption".
- **Respect:** make it easy to dismiss, don't trap or trick users, remember their preferences, and don't ruin the experience.

Before recommending anything, he wants to know three things:
- **Purpose:** email capture, lead magnet, discount, announcement, exit save, feature promo or survey.
- **Current state:** performance, triggers in use, user complaints, and the mobile experience.
- **Traffic context:** sources (paid, organic, direct), new vs. returning visitors, and page types.

He also checks for an existing product marketing context file before asking questions.

## Choosing a trigger

- **Time-based:** he does not recommend "show after 5 seconds". He prefers 30-60 seconds, which signals proven engagement. Best for general site visitors.
- **Scroll-based:** typically 25-50% scroll depth, which signals content engagement. Best for blog posts and long-form content. Example copy: "You're halfway through—get more like this".
- **Exit intent:** detects the cursor moving to close or leave. Best for e-commerce and lead gen. Mobile can't detect it, so use the back button or scroll up as alternatives.
- **Click-triggered:** the user initiates it, so there is "zero annoyance factor". Best for lead magnets, gated content and demos. Example: "Download PDF" opens a popup form.
- **Page count / session-based:** fires after X pages, which signals research or comparison behavior. Example: "Been comparing? Here's a summary...".
- **Behavior-based:** cart abandonment, pricing page visitors, repeat page visits. Best for high-intent segments.

## Popup types and what each needs

- **Email capture:**
  - Use a clear value prop, not just "Subscribe".
  - State the specific benefit, use a single email field, and consider an incentive.
  - Copy structure: a benefit or curiosity headline, a subhead on what they get and how often, and a specific CTA like "Get Weekly Tips".
- **Lead magnet:**
  - Show what they get (cover image or preview) and make a specific, tangible promise.
  - Ask for minimal fields (email, maybe name) and set an expectation of instant delivery.
- **Discount/promotion:**
  - State the discount clearly (10%, $20, free shipping) and add a deadline for urgency.
  - Make it single use per visitor and easy to apply.
- **Exit intent:**
  - Acknowledge that they're leaving and use a different offer than the entry popup.
  - Address common objections and give a final compelling reason to stay.
  - Formats: "Wait! Before you go...", "Forget something?", "Get 10% off your first order", "Questions? Chat with us".
- **Announcement banner:**
  - Place it at the top of the page, sticky or static, with a single clear message.
  - It must be dismissable, link to more info, and be time-limited ("don't leave forever").
- **Slide-in:**
  - It enters from a corner or the bottom, doesn't block content, and is easy to dismiss or minimize.
  - Good for chat, support and secondary CTAs.

## Design, mobile, and close behavior

- **Hierarchy:** headline (largest, seen first), then value prop or offer, then form/CTA, then the close option.
- **Sizing:**
  - Desktop is typically 400-600px wide and shouldn't cover the entire screen.
  - Mobile should be full-width at the bottom or centered, not full-screen.
- **Close button:**
  - Keep it visible, with top right as convention. "Users who can't find the close button will bounce entirely."
  - Make it large enough to tap on mobile, add a "No thanks" text link, and allow click outside to close.
- **Mobile:**
  - Full-screen overlays feel aggressive.
  - Bottom slide-ups work well. Use larger touch targets and easy dismiss gestures.
- **Imagery:** a product image or preview, or a face if relevant (increases trust). Keep it minimal for speed. It's optional, since copy can work alone.

## Copy formulas

- **Headlines:**
  - Benefit-driven: "Get [result] in [timeframe]".
  - Question: "Want [desired outcome]?"
  - Command: "Don't miss [thing]".
  - Social proof: "Join [X] people who...".
  - Curiosity: "The one thing [audience] always get wrong about [topic]".
- **Subheadlines:** expand on the promise, address an objection ("No spam, ever"), and set expectations ("Weekly tips in 5 min").
- **CTA buttons:**
  - First person works: "Get My Discount" over "Get Your Discount".
  - Specific beats generic: "Send Me the Guide" over "Submit".
  - Value-focused: "Claim My 10% Off" over "Subscribe".
- **Decline options:** polite, not guilt-trippy ("No thanks", "Maybe later", "I'm not interested"). Avoid manipulative wording like "No, I don't want to save money".

## Frequency, targeting, compliance, and accessibility

- **Frequency capping:**
  - Show at most once per session.
  - Remember dismissals via cookie or localStorage.
  - Wait 7-30 days before showing again.
- **Targeting:**
  - Split new and returning visitors, and match by traffic source (to the ad message) and page type.
  - Exclude converted users and recently dismissed users.
- **Page rules:** exclude checkout and conversion flows, and match the offer to the page context.
- **GDPR/privacy:** use clear consent language, link the privacy policy, don't pre-check opt-ins, and honor unsubscribe preferences.
- **Accessibility:** keyboard navigable (Tab, Enter, Esc), focus trap while open, screen reader compatible, sufficient color contrast, and don't rely on color alone.
- **Google guidelines:**
  - Intrusive interstitials hurt SEO, and mobile is especially sensitive.
  - Allowed: cookie notices, age verification, reasonable banners.
  - Avoid: full-screen overlays before content on mobile.

## Measurement and benchmarks

- **Metrics:**
  - Impression rate: visitors who see the popup.
  - Conversion rate: impressions to submissions.
  - Close rate: how many dismiss immediately.
  - Engagement rate: interaction before close.
  - Time to close.
- **Events to track:** popup views, form focus, submission attempts, successful submissions, close button clicks, outside clicks, and the Escape key.
- **Benchmarks:**
  - Email popup: 2-5% conversion typical.
  - Exit intent: 3-10%.
  - Click-triggered: 10%+, because users self-select.

## Popup strategies by business type, and output format

- **E-commerce:** entry or scroll popup with a first-purchase discount; exit intent with a bigger discount or reminder; cart abandonment with "complete your order".
- **B2B SaaS:** click-triggered demo requests and lead magnets; scroll-triggered newsletter or blog subscription; exit intent with a trial reminder or content offer.
- **Content/media:** scroll-based newsletter after engagement; page-count subscribe after multiple visits; exit intent with "don't miss future content".
- **Lead generation:** time-delayed general list building; click-triggered specific lead magnets; exit intent as a final capture attempt.
- **Output format for a popup design:** type, trigger, targeting, frequency, copy (headline, subhead, CTA, decline), and design notes (layout, imagery, mobile).
- **Multiple popups:** state each one's purpose, trigger and audience, plus conflict rules so they don't overlap.
- **Test hypotheses:** list A/B ideas with expected outcomes.

## Experiments worth testing

- **Placement and format:**
  - Top bar vs. banner below the header; sticky vs. static; full-width vs. contained; countdown timer vs. none.
  - Center modal vs. slide-in; full-screen vs. smaller modal; bottom bar vs. corner popup.
  - Left vs. right corner for slide-ins.
- **Triggers:**
  - Exit intent vs. 30-second delay vs. 50% scroll.
  - Delay of 10s vs. 30s vs. 60s; scroll depth of 25% vs. 50% vs. 75%; page-count trigger.
  - Return vs. new visitors, and referral source.
  - Click-triggered popups for lead magnets, and button vs. link triggers.
- **Messaging:**
  - Attention-grabbing vs. informational headlines, and headline length and specificity.
  - "Limited-time offer" vs. "New feature alert", and urgency vs. value copy.
  - CTA text and button color, primary plus secondary CTA vs. single CTA, and friendly vs. neutral decline text.
  - Countdown timers, with or without images, product preview vs. generic imagery, and social proof inside the popup.
- **Personalization:**
  - Industry-specific content, and content tailored to pages visited.
  - Progressive profiling (ask more over time).
  - Segment by traffic source and engagement level, and exclude converted visitors.
- **Frequency and rules:**
  - Once per session vs. once per week.
  - Cool-down after dismissal and different dismiss behaviors.
  - Escalating offers over multiple visits.

## Questions Corey asks before designing a popup

1. What's the primary goal for this popup?
2. What's your current popup performance, if any?
3. What traffic sources are you optimizing for?
4. What incentive can you offer?
5. Are there compliance requirements (GDPR, etc.)?
6. What's the mobile vs. desktop traffic split?

Related playbooks he points to: lead-magnets (planning what to promote), cro (the form inside the popup and the page around it), emails (what happens after conversion), and ab-testing (testing variations).
