## Pieter's MVP philosophy: ship fast, rough, and minimal

- Pieter says the #1 question about his "12 startups in 12 months" challenge is how he ships so fast. His answer: "I do work fast and rough," not longer hours.
- He warns that he doesn't do things conventionally, so copying him exactly is a bad idea. Better to figure out your own workflow.
- He starts by scratching his own itch (a DHH phrase). Examples: GoFuckingDoIt (fines him if he doesn't finish what he said he would), Tubelytics (overview of his YouTube channels' performance), NomadList (which cities have the best cost of living for a traveling nomad).
- Solving your own problems is a good start, but it limits audience and problem settings. In the long run he wants to build things with a wider impact.
- "I'm not [a programmer] and I don't want to be one either. I just want my stuff to work and not break." Making stuff is his passion, not programming, like liking how math builds a skyscraper.
- His sites are minimal on purpose. He doesn't see the point of building big immediately and doesn't think a site needs functionality from top to bottom.
- If something takes off, he wants the code readable enough for others to refactor or scale.
- Conclusion: tools don't matter. PHP, Node, Ruby: "It's really about what you're best, quickest and most comfortable with."

## Design and front-end workflow

- He usually has the look in his head and sketches it on paper first (GoFuckingDoIt's first sketch "looks terrible").
- Next he builds it in Photoshop, then in HTML and CSS, where the design keeps evolving. The name changed from Just Fucking Do It to Go Fucking Do It and the photo was swapped.
- For stock photos he gets a mock (watermarked comp) from Stocksy first, and pays $10 for the license only once he decides to use it.
- He tweaks until the interface looks great, then makes it responsive using Chrome's emulation. 40% of his traffic came from mobile at the time, and "People will simply leave your site if they can't use it."
- Front-end comes first. The back-end and interactivity come after.

## Dev environment

- No IDE. He codes in Sublime Text 3 (auto-completion, linting, dark themes such as Soda), plus CodeKit to compile and minify JS and SCSS and surface errors.
- Earlier he had no local server. He uploaded every change to a DreamHost dev server to test, which took "1000x more time."
- He recommends a Mac because OS X resembles Linux, so the dev machine nearly duplicates the production server. He can code and test offline without breaking the live site.

## Hosting and tech stack

- He moved from shared hosting (DreamHost) to his own Linode VPS after heavy cron jobs drew complaints. Setting it up took about a week and he didn't know the Linux shell then.
- Owning the whole stack means he can find problems quickly instead of debugging for 12 hours only to find the host's fault.
- Stack: Nginx + PHP-FPM on Ubuntu 14.04 LTS on Linode, with PHP, Node.js, hand-coded HTML, raw JS with jQuery, and some SCSS/raw CSS.
- All his sites, including the blog, run on one VPS costing $40/month (4 GB RAM, 4 CPU cores, 96 GB SSD, 4 TB transfer). It handles Hacker News and Product Hunt floods (often >1000 concurrent users) and has never gone down except when he broke it.
- He prefers Linode's simplicity to AWS: a server is deployed with one button and running in 5 minutes.
- He admits PHP is embarrassing to say but it has improved, and he feels pressure to move to Node.

## Deploying a new site in about 15 minutes

1. Register the domain at NameCheap and use FreeDNS to point it at the VPS IP.
2. Clone an nginx.conf from another domain and tweak it.
3. Upload it, SSH in, symlink it into Nginx's sites folder and reload Nginx:
   - `sudo ln -s /srv/http/domain.com/app/nginx.conf /etc/nginx/sites/domain.com`
   - `sudo nginx -s restart`

- SSH beats hosting web panels, which used to take him hours per new domain.

## Folder structure and coding style

- `/_assets`: mockups, logos, press screenshots, anything not for the server.
- `/public/assets/`: publicly served CSS, JS and images, pre-processed from `/app/`.
- `/app/`: front-end and back-end code plus nginx.conf, which acts as the router to specific PHP files. Only `/public/` is web-accessible.
- `/lib/`: third-party libraries (Stripe, Twitter OAuth).
- `/workers/`: cron-scheduled background jobs (email queues, scraping, backups).
- `/logs/`: plain .txt output, e.g. a cron redirected to `logs/doStuff.txt`.
- `/data/`: JSON text files instead of a database, named with an MD5 hash (NomadList: city + state + country).
- He admits the no-database approach is horrible but fast, and hates designing schemas before knowing the fields. You can script a move to MySQL/PostgreSQL later, but use a proper database for sensitive user data.
- He uses no frameworks except jQuery ("many times, they just make things more complex"). He follows DRY and KISS, and reuses code from previous projects.

## Task management with Trello

- He had trouble getting tasks done. His Trello board has lists for this year, this month, this week, today, and now (copied from a Hacker News commenter).
- He drags the current task into "now" for focus, then into a completed list on its left.
- Each week's finished list moves to a "finished" board. Looking back at weeks of finished work gives satisfaction and a loose measure of productivity.
