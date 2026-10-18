## Pages must carry unique value, not swapped variables

Corey's programmatic SEO playbook builds SEO pages at scale from templates and data, and the goal is pages that rank, provide value and avoid thin-content penalties.

- Every page must provide value specific to that page, not just a template with variables swapped.
- He says to maximize unique content: "the more differentiated, the better."
- Use conditional content based on the data, plus original insights or analysis per page.
- Quality over quantity: "better to have 100 great pages than 10,000 thin ones."
- Pages must actually answer what people are searching for.
- Penalty avoidance: no doorway pages, no keyword stuffing, no duplicate content, and genuine utility for users.

## Proprietary data is the moat

Corey ranks data sources by defensibility, strongest first:

1. Proprietary (you created it)
2. Product-derived (from your users)
3. User-generated (your community)
4. Licensed (exclusive access)
5. Public (anyone can use; the weakest)

Before building, identify what data populates each page, whether it is first-party, scraped, licensed or public, and how it is updated. Proprietary data suits Directories and Profiles.

## The 12 playbooks and how to choose

| Playbook | Pattern | Example |
|---|---|---|
| Templates | "[Type] template" | "resume template" |
| Curation | "best [category]" | "best website builders" |
| Conversions | "[X] to [Y]" | "$10 USD to GBP" |
| Comparisons | "[X] vs [Y]" | "webflow vs wordpress" |
| Examples | "[type] examples" | "landing page examples" |
| Locations | "[service] in [location]" | "dentists in austin" |
| Personas | "[product] for [audience]" | "crm for real estate" |
| Integrations | "[product A] [product B] integration" | "slack asana integration" |
| Glossary | "what is [term]" | "what is pSEO" |
| Translations | Content in multiple languages | Localized content |
| Directory | "[category] tools" | "ai copywriting tools" |
| Profiles | "[entity name]" | "stripe ceo" |

Matching playbook to what you have:
- Proprietary data: Directories, Profiles
- Product with integrations: Integrations
- Design/creative product: Templates, Examples
- Multi-segment audience: Personas
- Local presence: Locations
- Tool or utility product: Conversions
- Content/expertise: Glossary, Curation
- Competitor landscape: Comparisons

Playbooks can be layered, e.g. "Best coworking spaces in San Diego."

## Initial assessment and keyword pattern research

Before designing a strategy, Corey checks for product marketing context first (`.agents/product-marketing.md`, `.claude/product-marketing.md`, or the legacy `product-marketing-context.md`) and only asks for what is missing. He then clarifies:

- **Business context:** the product or service, target audience, and the conversion goal for these pages.
- **Opportunity:** which search patterns exist, how many potential pages, and the search volume distribution.
- **Competition:** who ranks now, what their pages look like, and whether you can realistically compete.

Keyword pattern research:
- Identify the repeating structure, the variables, and how many unique combinations exist.
- Validate demand through aggregate search volume, head vs. long-tail distribution, and trend direction.

## Template design and internal linking

Page structure:
- Header with the target keyword
- Unique intro (not just variables swapped)
- Data-driven sections
- Related pages and internal links
- CTAs appropriate to the search intent

URL structure: use subfolders, not subdomains, because subfolders consolidate domain authority while subdomains split it.
- Good: `yoursite.com/templates/resume/`
- Bad: `templates.yoursite.com/resume/`

Internal linking uses a hub and spoke model: a main category page as the hub, individual programmatic pages as spokes, and cross-links between related spokes. Avoid orphan pages:
- Every page is reachable from the main site.
- An XML sitemap covers all pages.
- Breadcrumbs carry structured data.

## Indexation strategy and choosing a build platform

Indexation:
- Prioritize high-volume patterns.
- Noindex very thin variations.
- Manage crawl budget thoughtfully.
- Use separate sitemaps by page type.

Platform: check that it can hold the page count, refresh the data, render server-side HTML, branch on data for conditional sections, and control indexation per page. Corey prefers the existing site's CMS if it can meet these; otherwise serve the set on a subpath of the main domain.

## Pre-launch checklist and post-launch monitoring

Pre-launch:
- **Content:** each page has unique value, answers search intent, and is readable and useful.
- **Technical:** unique titles and meta descriptions, proper heading structure, schema markup, acceptable page speed.
- **Internal linking:** connected to site architecture, related pages linked, no orphans.
- **Indexation:** in the XML sitemap, crawlable, no conflicting noindex.

Post-launch, track indexation rate, rankings, traffic, engagement and conversion. Watch for thin-content warnings, ranking drops, manual actions and crawl errors.

## Common programmatic SEO mistakes and deliverables

Mistakes Corey lists:
- **Thin content:** just swapping city names in identical content.
- **Keyword cannibalization:** multiple pages targeting the same keyword.
- **Over-generation:** creating pages with no search demand.
- **Poor data quality:** outdated or incorrect information.
- **Ignoring UX:** pages that exist for Google, not users.

Deliverables are a strategy document (opportunity analysis, implementation plan, content guidelines) and a page template (URL structure, title/meta templates, content outline, schema markup).

Questions he asks up front: which keyword patterns, what data you have or can acquire, how many pages, your site authority, who ranks now, and your technical stack. Related skills: seo-audit, schema, site-architecture, competitors.
