## Programmatic SEO: what it is and why Marc uses it

- Marc defines programmatic SEO (pSEO) as "a marketing strategy to rank on Google for a group of long-tail keywords related to 1 main keyword."
- You write code to build a page skeleton, then fill it with content that is usually generated programmatically too. He calls it "SEO for features-addict developers."
- It needs no audience and no marketing budget. He frames it as a free growth channel for solopreneurs who love coding.
- Marc says this approach brings him about 300 visitors a day from Google, for free.
- Results he cites, all built once and never touched again:
  - BooksCalculator: 15,600 visitors
  - GamifyList: 9,000 visitors
  - WorkbookPDF: 4,500 visitors
- Monetization is a product or ads. His example business model is: get traffic on autopilot, show ads, profit.

## Step 1: Pick one keyword with long-tail variations

- Marc's worked example is a directory of rage rooms, "like TripAdvisor", to help people find a place to smash away stress.
- The seed keyword needs:
  - Keyword Difficulty (KD) below 20, which he says needs 10 backlinks or fewer to rank.
  - Search volume above 500 per month in one country (he says to multiply by 3 for worldwide searches).
- He uses Ahrefs' free keyword generator to check both. He notes "rage room" is "(almost) perfect" but its KD is a bit high for a start, and that it is just an example.
- You also need many long-tail keywords, at least 20.
- In the example, "rage rooms in [city]" has high search volume and low keyword difficulty, so the whole site is built around that pattern.

## Step 2a: Plan the site structure and build skeletons

- Create one webpage per long-tail keyword. A skeleton is an HTML mold: add data and you get a unique page.
- Rage room example, using 333 US cities with over 100,000 people and an assumed 1,000 rage rooms (he calls this a random guess):
  - `/` is the main welcome page (1 page).
  - `/[city]` lists all rage rooms in a city (1 skeleton, 333 pages).
  - `/rage-room/[name]` is a single rage room page (1 skeleton, 1,000 pages).
- Three skeletons produce 1,334 pages ranking on Google.
- Example city skeleton:
  - H1: "The [total] best rage rooms in [city]"
  - Description: "Explore [city]'s top rage rooms! Find the perfect spot to smash away stress and have a blast. From [district_1] to [district_2], we've got you covered. Let the fun begin!"
- To decide what goes on the page, he says to pretend you are searching for a rage room in New York. You would want:
  - The list of rooms sorted by Google Maps stars
  - Price per hour and the types of objects you can break
  - A button to book
- He advises searching for patterns while crafting the end-user experience, and building as many valuable pages as possible.
- Real examples: WorkbookPDF has 1 skeleton for 25 pages (`workbookpdf.com/free/[language]`). BooksCalculator has 100+ pages ranking for "How long to read [pages_number]?"

## Step 2b: Collect good data

- Rich data is what makes the pages valuable enough to rank.
- Rage room example data:
  - Per city: name, photo, popular districts.
  - Per rage room: business name, starting price, reviews.
- Most of this can come from the Google Maps API.
- For richer data, he suggests outsourcing collection for a few hundred dollars and/or using ChatGPT for parts like the meta description.
- Example: for GamifyList he spent $150 having a virtual assistant (VA) collect the best 600 gamification apps.

## Step 2c: Optimize the pages for SEO

- Put the long-tail keyword in the title and `<h1>` tags, at a minimum.
- Images need alt text, a good size and lazy loading.
- Links and buttons should have titles.
- He calls Lighthouse (Chrome) "your best friend" for checking this.
- Add keywords at strategic locations, but "Don't stuff keywords though." Only add them where it matters for users.

## Step 3: Get backlinks and get indexed

- Marc says you need around 10 backlinks to start ranking.
- Launch for links:
  - Product Hunt is the easiest start because it gives a follow link regardless of upvotes. He notes LogoFast was reshared in many newsletters after its launch.
  - Hacker News, Twitter and Reddit give nofollow links, but people may reshare the site in a newsletter or blog.
- Buy backlinks if you are serious about the project:
  - Purchase a listing in a popular directory such as TIAAFT (There's An AI For That).
  - Or buy a list of sites to submit yours to, such as BACKL.IO.
- Submit to Google Search Console: verify the domain, then manually use "Request Indexing" on a few pages so Google indexes the site faster.
- Timeline: indexing is fast, but ranking for keywords takes 3 to 6 months.
- Other channels he lists for micro startups: launching on Reddit, Hacker News and Product Hunt, and free tools marketing.
