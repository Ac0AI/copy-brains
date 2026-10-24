## Sharper Image, Reebok and Dodge: why dynamic pages beat static ones

Steve frames the web in two acts. Act one was the browser and static publishing. Act two adds the server and dynamic services, which he says will be "the epicenter of the web act two".

- Most web pages are static: a human builds a page with a publishing tool, puts it on a server, and it never changes until a human changes it.
- Browser progress (plugins, Java, ActiveX) mostly expands the browser's UI toward Windows-level power. He calls that wonderful, and says Netscape and Microsoft will "duke it out" over it.
- His claim: the cool stuff has to happen on the server, "where you're responding to the user, doing tremendous amounts of processing" and building pages on the fly.
- He cites NeXT as a roughly $60 million, profitable, ten-year-old software company built on client-server enterprise software. Its enterprise know-how carried over to the web.

## Why pages must be built on the fly

- Federal Express package tracking is his main example. The page showing where a package is did not exist before the package was sent, so the computer queries four mainframes and builds the page.
- That app took FedEx four months to build, and it is a very simple dynamic app.
- Search engines (WebCrawler, Lycos) build a page per query and are not hand-crafted for every search. The code behind them is "a lot of Perl code... it's not pretty".
- A catalog can have far too many permutations to build by hand. A customer might answer five questions and see only 10% of the catalog.
- If one change touches 3,000 pages, "the last thing you want to do is update 3,000 web pages by hand. You want the computer to do it."
- WebObjects layers on top of any HTTP server (Microsoft, Netscape, public domain). Page components such as pictures and text, held in databases or flat files, are stitched together with a scripting language, and pages are built on the fly.

## Dodge demo: speed of building

- The Dodge site let a user filter by car, price range ($8,000 to $90,000) and model, then sort by model or price. Each choice rebuilt the page from a database.
- The user could drill into a Neon, pick the lime-green one, add option packages (package B and a subset package greyed out), and reach a ~$14,000 total.
- A leasing calculator took that price, a down payment and a 60-month term, and computed the amount.
- Steve says the app took two days to build, "and most of that time was the aesthetics". His contrast: the FedEx tracker took four months.
- His point: there are too many permutations to build by hand, so pages must be built from what the customer tells you about what they want, helping them "navigate through the morass of information".

## Reebok demo: guiding a customer to a decision

- Planet Reebok aims to help people find cross-training shoes.
- The visitor picks a goal (lose weight, tone muscle, flexibility, overall fitness), self-rates cardio, strength and flexibility, and picks activities (bike, running, weights, yoga).
- The site returns matching shoes with match counts, sortable alphabetically, by price or by number of matches. The user adds shoes to a compare list and compares them.
- Steve says it was built in about a week by a few people, and that updating it by hand would mean changing 5,000 pages.
- He says it "looks a little different than the stuff you see on the web every day".

## Sharper Image demo: running a catalog without a staff of editors

- A gift finder takes interests (gadgetry, fitness), price and demographic ("baby boomer") and builds a results page on the fly. Users can choose items per page and open a product page with several photos and ordering.
- Steve raises the operational problem himself. With static pages, 28 price changes in a day would need staff doing nothing but editing pages.
- He demos a web-based database administration app, built from the same components. He edits the massage chair record live, changing the layout, the price and the available colors (blue, red, yellow).
- On a fresh session the product page reflects the changes: a new layout, one picture, the new price, and a color pop-up.
- His takeaway: you need "much more robust tools" for dynamic applications, and "you cannot build applications like this with most of the tools out there today".
- Sharper Image's founder says the site went from first seeing the Dodge demo to live in weeks. He says he has never seen a company move that fast, and that typing in 400 products by hand took Josh a couple of hours each.
- He says Sharper Image spent about $35 million the prior year mailing its catalog to about 2 million people a month. He says the web could reach 10 or 40 million people a month at a far smaller fraction of the cost.
- Steve adds that NeXT gets paid partly in free stuff ("we're a company that likes stuff").

## Pricing and product strategy for WebObjects

- Steve calls it a "radical pricing philosophy". Following the Netscape and now Microsoft model, NeXT gives away a surprisingly powerful base version and sells more powerful versions on top.
- Over 20,000 copies were downloaded from the website. This is server software, not client software. Roughly 12,000 of those downloads were for Windows NT, the most popular platform.
- The three tiers:
  - **Base (free):** a rich set of ready-made objects, including a virtual showroom app, but you cannot add your own.
  - **Pro:** lets you add your own objects, needing a compiled language because many clients hit them and they must run fast. It also talks to databases.
  - **Enterprise:** technology for enterprise-scale web apps and very sophisticated database access.
- Reason for giving away the base: "we think this should be essential on every web server. Every web server should be turbocharged."
- It works with every browser (it serves standard HTML) and every HTTP server, on NT, Solaris and NeXTSTEP.
- Language strategy: NeXT's own WebScript, plus JavaScript and Visual Basic as scripting languages. Compiled Java is planned for later in the year, "because we really believe in those languages and we want people to have a choice".
- Customers he names: Merrill Lynch (large internal then external apps), Motorola (intranets), Disney, DreamWorks (internal production management for the whole studio), Fannie Mae, Reebok and Sharper Image.
- His call to action is to download WebObjects free, layer it on your existing Netscape or Microsoft server, and build dynamic applications instead of static ones. He closes with "we're all just getting started" and that this is a new era of dynamic websites.
