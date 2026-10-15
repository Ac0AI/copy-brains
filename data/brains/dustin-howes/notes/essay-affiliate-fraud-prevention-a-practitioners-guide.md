## Dustin's definition of affiliate fraud and why it matters

- Dustin defines affiliate fraud as "anybody breaking the terms and conditions established by the brand to make a dollar."
- It is not just technical exploits or stolen credit cards. Any violation of your T&C that earns commissions someone didn't earn counts.
- The principle is an even playing field: if one affiliate gets an unfair advantage over legitimate partners, that is a problem, sophisticated or not.
- He notes a technical difference between "fraud" (intentional deception) and "non-compliance," but says they look the same on a dashboard and cost the same, so he deals with all of it.
- Most fraud isn't sophisticated. It is opportunists and hustlers breaking rules for a quick buck, and daily monitoring plus evidence collection catches the vast majority.
- "You can't stop hustlers from hustling." The goal is managing and catching it early, and making your program a harder target than the one down the street. Fraudsters "just want to stay in the shadows" and move on when watched.
- Context he cites: about $3.4B in annual affiliate fraud (2022, up from $1.4B in 2020), roughly 17% of affiliate traffic, about 17 cents of every program dollar. He also cites the top 10% of affiliates generating about 90% of revenue, so one bad top partner is high stakes.
- His background: first job in affiliate marketing at CJ Affiliate doing trademark compliance and cookie stuffing monitoring, later compliance work at Impact Radius, 17+ years in the space.

## Rule out false positives before accusing anyone

Dustin says not everything suspicious is fraud. Check these first:
- Tracking misconfiguration (pixels firing wrong).
- Attribution window mismatches (conversion happened outside your window).
- Cookie overrides or browser cookie blocking (a platform issue, not a partner issue).
- Self-referrals being blocked by your own anti-fraud settings.
- Conversions marked ineligible in the fine print of your program terms.

"Fix your tracking before you accuse anyone." Outright scamming is rarer than these config issues.

## Red flags he watches for

1. **Conversion rates far above baseline.** Healthy e-commerce affiliate rates are 1-3%, content affiliates 3-5%. 25% points to cookie stuffing, click injection or attribution manipulation.
2. **Click-to-purchase under five minutes.** "If something's happened within five minutes from their first click all the way to checkout... somebody's doing something serious and stealing that last click somehow." Under 10 seconds means automation.
3. **Site doesn't match your niche** (e.g., a recipe blog as top B2B SaaS affiliate).
4. **Suspicious country origins.** He says there are schools teaching fraudulent commission tactics, which he saw from the network side at CJ.
5. **Sudden spikes.** "If you see a guy going from one sale to 15 sales, you're going to need to investigate."
6. **Same IP across conversions** (self-submitted leads with disposable emails, stolen cards, synthetic identities).
7. **Low customer LTV.** High refunds, quick cancellations and few repeat purchases suggest incentivized traffic posing as organic.
8. **Gut feeling.** "When there's smoke, there's fire." If you can't find evidence yourself, ask the network about the traffic, since they have data you don't.
9. **Identical email patterns** in lead data (e.g., first initial + last name @gmail.com).
10. **Form completion under 10 seconds.**
11. **Chargeback rates above 0.9%** (Visa VAMP merchant threshold).

## The seven fraud types and how to catch each

- **Browser extension commission replacement.** The biggest modern threat. Honey (20M Chrome users) swapped creators' affiliate cookies for its own at checkout, even when no coupon was found. MegaLag exposed it in December 2024. Fallout: 25+ lawsuits consolidated, about 8M users lost, Rakuten and Impact.com terminated network access, Google banned extensions claiming commissions without real discounts. Dustin calls it "one of the grossest accounts of fraud in the history of affiliate marketing." Capital One Shopping faced similar allegations (settled about $4M). Catch it by monitoring for extension-driven last-touch at checkout, especially with no discount applied.
- **Cookie stuffing.** Hidden iframes, JavaScript or pixels inject cookies. He says the crude version is rare now (better browser protections, shorter windows), but it evolved into extension-based replacement. Up to 60% of fraud cases per TrackAd. Catch via anomalous conversion rates.
- **Brand/trademark bidding.** Affiliates bid on your brand terms. Smart ones geo-fence to dodge your monitoring location. Use BrandVerity or The Search Monitor (Similarweb) for geo-targeted scans.
- **Coupon code abuse / last-click stealing.** A customer at checkout opens a tab, searches "[brand] coupon," and a coupon site takes the commission. Catch it with the 5-minute rule and coupon sites appearing as last click with no coupon used.
- **Self-submitted leads/fake orders.** Look for same IPs, random-character or disposable emails, sub-10-second forms, identical contact info, and concentrated refunds.
- **Incentivized traffic misrepresentation.** Rewards or paid clicks presented as organic. Compare affiliate-referred LTV, churn and returns to direct customers.
- **Click injection.** Mobile apps inject fake clicks on installs (15-30% of Android install campaigns). Watch click-to-install under one second and clustered IPs, mainly for CPI campaigns.

## Tools by program size

Dustin's core line: "you don't need expensive tools to catch fraud. You need a system. The tools help you scale that system."

- **Free, any size:** network built-in tools, TrafficGuard free tier (up to $2,500 ad spend), manual daily monitoring.
- **Starter ($10K-50K/mo affiliate revenue):** add Complily or RightLander, about $200-500/mo.
- **Growth ($50K-250K/mo):** add BrandVerity or The Search Monitor plus TrafficGuard paid, about $500-2,000/mo.
- **Enterprise ($250K+/mo):** IntegriShield or ImpersonAlly plus multiple monitors, about $2,000-10,000+/mo.
- His top seven: Complily (FTC disclosure), IntegriShield (holistic monitoring), BrandVerity (paid search), RightLander (promo transparency), The Search Monitor (geo-targeted PPC), Sitebee (regulatory, strong in iGaming), TrafficGuard (real-time fraud, free tier).
- Cited results: Rhino Affiliates found 100+ violations, disputed EUR 11,000 and prevented EUR 131,000 in losses. TrafficGuard helped a streaming brand save $1M+ by blocking 66,000 invalid conversions in 12 months.

## How to handle an affiliate you catch

- Confrontation is rarely hard: "It's never really a hard conversation. When they get caught, they understand what they've done is wrong. A lot of them will beg for the money." He has confronted hundreds and has had death threats at the extreme end, but most move on to easier targets.
- Evidence first: "Collect that evidence and make sure that it's locked tight before we do anything else." Gather timestamped screenshots, transaction logs, IP records, click-to-conversion timing and network reports before emailing or freezing anyone.
- Escalation path:
  1. Professional email citing the violated T&C, evidence attached, deadline to respond.
  2. Firmer follow-up with a compliance deadline.
  3. Freeze the account and hold pending commissions.
  4. Reverse commissions by submitting documented evidence to the network.
  5. Report the affiliate to the network so they're flagged ecosystem-wide.
- At CJ, outcomes ranged from a slap on the hand to reversing commissions on a first offense, and sometimes a "rabbit hole" with hundreds of thousands of dollars of fraud.
- Big-affiliate exception: even if the bad actor drives 10-20% of revenue, the process doesn't change. Evidence first, escalation second, because a gamed program poisons legitimate partners.
- Example: for affiliate manager Nick Polano he found coupon sites stealing last clicks and trademark bidding, built an evidence case, sent it to the network, reversed commissions and saved over $10,000.

## Building a prevention system and when to escalate

- **Vet applicants.** Check site quality and niche fit, require traffic-source disclosure, consider KYC-style identity checks for high-commission programs. A healthy approval rate is 20-50%; approving everyone invites fraud.
- **Write specific T&Cs.** Vague terms can't be enforced. Include bans on brand bidding, cookie stuffing and cloaking, incentivized traffic disclosure, FTC disclosure requirements, and clear penalties (reversal, suspension, termination).
- **Cadence:**
  - Daily (5 min): conversion-rate anomalies, spikes, click-to-conversion under 5 minutes.
  - Weekly (30 min): 7 KPIs (conversion rate, EPC, AOV, commission outlay, affiliate CAC, revenue by affiliate, refund rate), affiliate vs direct LTV, new suspicious affiliates.
  - Quarterly (half-day): full audit of every active affiliate, geographic analysis, reversal history, T&C and tool review.
- "Fraud is invisible at low volume because anomalies blend with noise. Build the system before you need it." Small programs are more vulnerable because they monitor less.
- **Handle internally:** first-time T&C violations, small coupon abuse, single self-submitted leads, ignorance-looking non-compliance.
- **Escalate to the network:** repeated violations after warning, large-scale or coordinated fraud, or when you need data you can't see.
- **Involve legal counsel:** stolen identities, credit card fraud, systematic deception across programs, losses over $10,000.
- **FTC:** fines up to $53,088 per violation, with each non-compliant post counting separately. Disclosures must be "clear, conspicuous, and unavoidable" under the June 2023 Endorsement Guides, and fake reviews are banned (August 2024).
- **Framing for a boss:** present prevention as revenue protection and ROI, since about 17 cents of every program dollar is lost to fraud.
