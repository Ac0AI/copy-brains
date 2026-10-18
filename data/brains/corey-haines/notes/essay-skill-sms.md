## SMS vs email: where Corey uses each

Corey treats SMS as a channel that "earns the right to interrupt" through opt-in. His rule: if a message could wait 24 hours, send it by email. SMS is for messages that benefit from immediacy.

- **SMS first:** abandoned cart recovery, order and shipping updates, flash sales and limited drops, auth codes and 2FA, post-purchase upsell (ride the purchase momentum).
- **Email primary:** welcome series (SMS as a layer on top), educational nurture, newsletters.
- **Both:** win-back of lapsed customers. SMS gives the strong nudge, email carries the offer detail.
- **Abandoned cart benchmark:** he cites SMS at roughly 98% open rate within 3 minutes versus about 20% for email within 24 hours.
- **Layering:** SMS works best on top of an email program, not as a replacement for it.

## Core principles for running SMS

- **Every send costs money.** At $0.0075-$0.04 per send plus carrier fees, a 100K send costs $750-$4,000. That forces relevance and hard segmentation instead of "blasting."
- **Opt-in quality beats volume.** Email-to-SMS opt-in is typically 5-25%. A high-quality list of 10K beats a low-quality list of 100K.
- **Each message must pass a test:** "would I be glad I got this text?" If not, don't send it.
- **One CTA, one link.** Use short links (`klvy.co`, `txt.attn.tv`, or a branded short domain) and UTM tag every link: `utm_source=sms&utm_medium=sms&utm_campaign=[campaign-name]`.
- **Brand name inline, every send.** Start with "From Acme:" because recipients can't see a sender address, even on automated flows.
- **Common mistakes he flags:**
  - Treating SMS like email (daily promo blasts spike opt-outs and kill the list).
  - Emojis everywhere.
  - No throttling on bulk sends (burst sends trigger carrier filtering).
  - Not tracking conversions.
  - Putting a discount in the first abandoned-cart message.

## US compliance: TCPA and A2P 10DLC

Corey says compliance is "the foundation, not an afterthought." He notes a single TCPA class-action settlement runs $5M-$40M.

**TCPA basics**
- Express written consent is required for marketing SMS. Implied consent doesn't count.
- The opt-in disclosure must include: program name, frequency ("up to 4 msgs/month"), STOP/HELP instructions, "Msg & data rates may apply," and a link to terms.
- Honor STOP within seconds on every keyword variant: STOP, END, CANCEL, UNSUBSCRIBE, QUIT.
- Answer HELP with brand name, STOP info and a support contact.
- Quiet hours: federal rules say no marketing before 8am or after 9pm recipient-local. Some states (he names Florida, Oklahoma, Washington) are stricter, so he defaults to 9am-8pm recipient-local.
- Keep auditable consent records: timestamp, opt-in source, and the exact disclosure text shown.

**A2P 10DLC (required since 2022)**
- Register brand and campaign through The Campaign Registry via your SMS platform.
- Without registration, throughput is throttled or zero and carriers filter messages. You may see "delivered" while recipients never get them.
- Registration covers brand verification, use case, sample messages, opt-in mechanism and opt-out language.
- Sample messages in registration must match what you actually send, or carriers flag and block.

## International compliance and WhatsApp

**EU/UK**
- Explicit opt-in, no pre-checked boxes.
- Withdrawing consent must be as easy as giving it.
- Data subject access requests apply to SMS records.
- ePrivacy Directive sits on top of GDPR.

**Canada (CASL)**
- Express consent, sender identification and unsubscribe in every message.
- Implied consent is allowed for existing business relationships within 24 months.
- Penalties go up to CAD $10M per violation.

**WhatsApp**
Corey says WhatsApp often beats SMS for the same flows if most customers are in LATAM, Europe, Africa, the Middle East, India or Southeast Asia.
- Free-form messages are allowed only within 24 hours of the customer's last message. Outside it, use a Meta-approved template.
- Template categories: marketing, utility, authentication. Cart reminders and promotions count as marketing.
- Since July 2025, every marketing template is charged per message. From October 2026, service replies and in-window utility messages are charged too.
- Blocks and reports lower your quality rating and can shrink daily messaging limits.
- Meta currently doesn't deliver marketing templates to US numbers, so keep SMS for US marketing.

## Phone number types and platform picks

**Number types (US)**

| Type | Throughput | Cost | Trust |
|---|---|---|---|
| Short code (5-6 digit) | 100+ msg/sec | $500-$1,000/mo plus setup | Highest |
| Toll-free | ~3 msg/sec | $10-$30/mo | Medium-high |
| 10DLC long code | 1-250 msg/sec | $2-$10/mo | Medium, needs A2P reg |

Rule of thumb: list under 10K, use 10DLC. 10K-100K, toll-free. 100K+, short code.

**Platform quick picks**
- Already on Klaviyo for email, DTC/ecom: Klaviyo SMS (no second platform to learn).
- Shopify ecom wanting deeper SMS features: Postscript.
- Mid-market+ full-service ecom: Attentive.
- Custom SMS in a product, or B2B SaaS transactional/auth: Twilio or Customer.io.
- EU-focused email plus SMS: Brevo.
- SMB, simple needs: SimpleTexting.

## SMS sequences and timing

**Abandoned cart (highest-ROI ecom flow)**
- Send 1, 30 minutes after abandon: "Forget something? Your cart's still here: [short link]"
- Send 2, 4 hours later: soft urgency plus social proof.
- Send 3, 24 hours later (optional): discount, only if margin allows.
- A discount on the first message "trains customers to abandon," so he reserves it for send 2 or 3.

**Welcome**
- Immediate confirmation plus reward, e.g. "From Acme: Thanks for joining! Here's 10% off: ACME10. Use at checkout: acme.co/sale. Reply STOP to opt out."
- Optional send 2 at 24 hours: reminder plus best-seller showcase.

**Other flows**
- Browse abandonment: one send, 1 hour after browse, "Thinking it over?" plus link.
- Post-purchase: immediate order confirmation with delivery ETA (transactional), then delivery plus 2 days for a review prompt and cross-sell.
- Win-back: send 1 at 60-90 days after last purchase ("We miss you" plus curated picks); send 2 at +14 days with a discount; send 3 at +14 days with an opt-out warning and last chance.
- Promotional campaigns: 1-2 sends max per campaign. Stack against the email schedule to avoid a same-day double-tap.
- Transactional (order updates, shipping, auth codes, account alerts) is a separate compliance bucket. It is generally fine without separate marketing consent if tied to a user-initiated transaction, but still needs A2P 10DLC registration.

## SMS copy and segment math

**Structure:** sender ID, then a hook (the first 5 words decide if they read on), then specific value, then one CTA with one short link, then a compliance footer.

**Footer:** "Reply STOP to opt out" is required on the opt-in confirmation and at least quarterly after that. Carriers recommend it on every promotional message.

**Length and cost**
- 160 GSM-7 characters is 1 segment. Aim for this.
- 161-306 characters is 2 segments, so you pay double.
- Emojis, accented characters or curly quotes force UCS-2 encoding, dropping a segment to 70 characters.
- MMS (image plus up to 1,600 characters) costs 3-5x SMS. Use it sparingly for high-impact moments.

**Voice**
- Conversational, like texting a friend. No subject line, no formatting, no marketing-speak.
- At most one emoji, situationally.
- Avoid ALL CAPS except explicit codes like "Use ACME10."
- A first-name token lifts CTR about 20%. He warns against fake intimacy ("Hey friend!"), which backfires.

## SMS benchmarks and measurement

**Healthy ranges for ecom DTC**

| Metric | Range |
|---|---|
| Opt-in rate | 5-25% of email subscribers |
| CTR | 8-15% (vs about 3% for email) |
| Conversion per promotional send | 1-5% |
| Revenue per send | $0.20-$2.00 |
| Opt-out rate | under 2% per send, under 0.5% for promotional |
| List growth | 5-15%/month early, 1-3% steady-state |

**Other measurement notes**
- SMS opt-ins typically show 1.5-3x the LTV of email-only subscribers.
- Track SMS-driven sessions, last-click revenue and assisted conversions.
- A/B test send time (afternoon vs evening, local), copy length, discount amount and trigger, first-name token, and CTA wording ("Shop now" vs "See it" vs "Last chance").

**Plan format he uses:** a compliance check first (flag blockers like missing A2P registration), then which flows to build ranked by ROI, then sequences with trigger, delay, copy and character counts, then platform, KPIs and required STOP/HELP templates. He wants specifics, e.g. "send 30 min after cart abandon, 4 hours later if no purchase, 24 hours later with discount."
