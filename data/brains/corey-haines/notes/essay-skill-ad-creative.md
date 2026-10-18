## Ad creative skill: what it is and when Corey uses it

Corey wrote an open-source AI agent playbook for generating, iterating, and scaling paid ad creative across Google, Meta, LinkedIn, TikTok, and Twitter/X. It covers headlines, descriptions, primary text, static ads, and video formats. Campaign strategy and targeting belong to his "ads" skill, and landing page copy belongs to his "copywriting" skill.

## Four modes of working

Corey's skill runs in four modes:

- **Generate from scratch:** produce a full creative set from product context, audience insight, and platform best practices.
- **Iterate from performance data:** pull data, identify winning patterns, generate new variations, validate specs, deliver.
- **Scaled static batches (grounded):** recurring production at volume, e.g. 50 concepts per batch, built from a corpus of real inputs and a static template library. Picking 5 winners from 50 concepts beats picking 5 from 10.
- **Creative strategy loop:** decide which ads are worth making before making them. Synthesize three signal sources (account performance, customer language, external organic) into evidence-ranked concepts. Branch the creative mix on account state (exploration vs. scaling), keep a capacity-checked roadmap, and run a monthly retro that feeds the next slate.

Before starting, he reads any product marketing context file and its Learnings section, so already-tested angles and offers are not re-proposed.

## Grounded inputs: the main quality lever

Corey argues most AI ad generation fails on input grounding, not output quality. Ungrounded generation produces plausible ads from training data rather than from what converts for this brand.

**Corpus structure:**
- `inputs/winning-ads/`: 10-20 screenshots of top ads from the last 90 days
- `inputs/reviews/`: 50-100 customer reviews (Trustpilot, G2, Amazon, App Store)
- `inputs/comments/`: top comments from existing ad campaigns
- `brand/` (voice doc, hex codes, logo, assets) and dated `outputs/YYYY-MM-DD/` folders

**Rules:**
- Every concept cites its source (review, winning ad, or comment).
- Copy language is pulled from reviews verbatim, not paraphrased.
- No invented claims, stats, or testimonials.
- If winning ads or reviews are empty, stop and ask the user to populate them instead of generating ungrounded.
- Ad comments are "the most-skipped and highest-value input": objections ("but does it work for X?") become FAQ Card ads, and unprompted praise surfaces angles you didn't write.
- Refresh winning ads as new ones scale; refresh reviews and comments monthly.

## Platform character limits to validate before delivering

- **Google RSA:** headline 30 chars (up to 15), description 90 chars (up to 4), two 15-char URL paths. Headlines must make sense alone and in any combination. Include at least one keyword headline, one benefit headline, and one CTA headline. Pin only when necessary.
- **Meta:** primary text 125 chars visible (2,200 max), headline 40, description 30, display link 40.
- **LinkedIn:** intro text 150 recommended (600 max), headline 70 (200 max), description 100 (300 max).
- **TikTok:** ad text 80 recommended (100 max), display name 40.
- **Twitter/X:** tweet 280, card headline 70, card description 200.

Anything over the limit gets flagged with a trimmed alternative.

## Copy generation method

1. **Define 3-5 angles** (different reasons to click): pain point, outcome, social proof, curiosity, comparison, urgency, identity, contrarian.
2. **Generate variations per angle**, varying word choice, specificity (numbers vs. general), tone (direct, question, command), and structure.
3. **Validate against specs.**
4. **Organize for upload** (by angle with character counts, or bulk CSV for 10+ variations).

**Batch workflow:** break into headline, description, and primary-text sub-tasks. Generate in waves: core angles (3-5 angles, 5 variations each), extended variations on the top 2 angles, then wild cards (contrarian, emotional, specific). Filter out over-limit, duplicate, and policy-risk items.

**Headline standards:** specific beats vague ("Cut reporting time 75%" over "Save time"), benefits over features, active voice, numbers where possible. Avoid jargon, unspecific "Best/Leading" claims, all caps, clickbait the landing page can't deliver, and nicknamed product names (use the exact product name in every field).

## Iterating from performance data

- **Analyze winners:** themes, structures (question, statement, command, number), recurring words, character utilization.
- **Analyze losers:** themes that fall flat, generic or too-long patterns.
- **Generate new creative** that doubles down on winning themes, extends winning angles, tests 1-2 new angles, and avoids loser patterns.
- **Log each round:** top performers, winning patterns, new variations, angles tested and retired.
- Ask which metric matters (CTR, conversion rate, ROAS) before judging.

## Test hypotheses must be able to lose

"This will resonate with renters" can't lose. "Beats the control on CTR among renters" can. A good hypothesis:

- Names the metric (CTR, CVR, CPA, thumb-stop rate) and the comparison (which control or sibling concept, which audience).
- States the expected direction, and a magnitude when a baseline exists (e.g. "+15% CTR vs. Concept A").
- Follows from the angle's motivation, so a win or loss teaches something about the audience.

## Avoiding AI tells in ad copy

Corey's rule: generating at volume multiplies whatever tic the first draft has, so check the whole batch. Never write:

- Contrast reveals: "It's not X, it's Y." State Y directly.
- Negation lists: "No X, no Y, no Z." One plain absence ("No card required") is fine.
- Trailing pile-ons after a full claim.
- Self-answered questions and colon reveals ("The result? 3x faster.", "The best part: it learns.").
- Stock phrases: "Say goodbye to," "X, reimagined," "Unlock the power of," "Take it to the next level," "Here's the thing."
- Em dashes in headlines, descriptions, or primary text.
- Stacked negations to fit a character limit; keep the one that matters and use the space for a fact.
- Hook slop ("Stop scrolling," "Here's what nobody tells you about X"). A POV hook is fine only when hyper-specific ("POV: it's 3pm and you're on your fourth coffee").
- CTA slop ("Get started today," "Join thousands of happy customers"). Name the action and what they get.

Across a batch, vary sentence shapes, since ten variations opening the same way read as generated.

**Descriptions** should complement headlines, not repeat them: add proof points, handle objections ("No credit card required"), reinforce the CTA, add urgency only when genuine.

## Creative formats and visual production

- **Format selection:** a Meta creative format taxonomy ranks about 51 formats S through F by one question: is it a "unicorn scaler" that punctures cold net-new audiences, or a "supporting cast" format that only converts mid-funnel? Creator-fronted formats (founder content, partnership ads, VSL) top the list; press, podcast, and notes-app fake-native formats are F-tier. Static templates (Us vs. Them, Stat Callout, Review Card, Before/After, Founder Message, FAQ Card, Grid Static, Callout) each carry a tier and funnel role. Weight toward S/A tiers for cold reach, and cycle templates rather than clustering on favorites.
- **iOS-native reveal videos:** iMessage, ChatGPT, Apple Notes, and AirDrop reveals, produced via Playwright + ffmpeg or Remotion, with strict grounding rules for dramatized conversations (strictest for fabricated AI answers).
- **Faceless motion video:** 15-45s videos (styled stills, image-to-video motion, TTS narration, word-timed captions) at roughly $3-6 and about 15 minutes each. Nine visual styles, plus QC gotchas: maker-hands intrusion, final-two-seconds drift, caption/label collision, TTS/whisper sound-alikes.
- **Creator/UGC short-form:** tiered formats (reaction+demo, split-screen tutorials, greenscreen, Yapper, David & Goliath, and others). Vertical video rules: a 720x1200 text-safe band, classic TikTok captions (white fill with black stroke, no pill), and the organic-vs-baked-music decision.
- **Tools:** Nano Banana Pro, Flux, and Ideogram for images; Veo, Kling, Runway, Seedance, and Higgsfield for video; ElevenLabs, OpenAI TTS, and Cartesia for voice; Remotion for templated video.
- **Scaled production workflow:** generate hero creative with AI, build Remotion templates from winning patterns, batch-produce variations from data feeds, then use AI for new angles and Remotion for scale.
- **Review page:** for client or stakeholder approval, he produces a self-contained HTML creative review page with in-feed platform mockups, carousel storyboards, headline toggles, and a required grounding disclosure block.

## Common mistakes Corey flags

- Writing RSA headlines that only work together.
- Ignoring character limits.
- Variations that differ only in word choice, not angle.
- No CTA headlines (include 2-3 in RSAs).
- Generic descriptions like "Learn more about our solution."
- Iterating without data.
- Generating without grounding, or skipping the comments input.
- Testing too many variables at once (change one per cycle).
- Retiring creative before 1,000+ impressions.
