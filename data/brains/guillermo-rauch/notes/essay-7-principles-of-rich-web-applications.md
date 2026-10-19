## Pre-rendering is a performance requirement, not an SEO feature

Guillermo argues that "pre-rendered pages are not optional" and that the usual choice between pre-rendered/server-rendered apps and single-page apps (SPAs) is a false dichotomy. Giving up either one costs user experience.

- Latency, not bandwidth, is the bottleneck. Bandwidth keeps improving, but the speed of light sets a floor. He cites a theoretical minimum of about 50ms between the US coasts (Stuart Cheshire's Stanford-to-Boston round trip is 43.2ms at light speed in fibre, about 85ms in practice). So the number of round trips to show data is what matters.
- A typical SPA returns an empty body plus `<script>` tags. That means one trip for the script and another for the data, when the server already knew from the URL what the page would show (for example, the orders for `/orders`).
- Caching the bundle doesn't remove the cost: parsing and evaluating scripts can take hundreds of milliseconds on mobile, and users usually see a blank page with no feedback meanwhile.
- TCP slow start and SSL handshakes add round trips. Reaching 64 KB of throughput takes about four round trips, so the first roughly 14kb of the response matter most.
- Pre-rendering is application-specific. Options he lists: render the page "shell" immediately and fetch sections in parallel; pre-render only the content above the fold; leave non-essential parts for the client. He also suggests loading "structural CSS" (blocking) separately from "skin/theme CSS" (async), and prioritizing scripts by URL (sorting scripts matter for `/orders`, not for settings).
- He expects HTTP/2 server push to eventually allow cacheable client code in a single hop. His example of a SPA with no extra round trips is the StackOverflow clone in 4096 bytes (everything inlined, at the cost of cacheability).
- Sharing render code between browser and server, with progressive loading of scripts and styles, erases the website vs. webapp distinction: "A blog and a CRM are fundamentally not that different." Both have URLs, navigation and data to show.

## Act immediately on user input and mask latency

JavaScript's biggest UX advantage, in his view, is masking network latency to approach zero perceived latency.

- Act optimistically on clicks, buttons and form submits instead of waiting for the server. Example: Gmail archives an email in the UI right away while the request runs asynchronously.
- "Layout adaptation": the first state of a page knows the layout of the next, so it can transition before data arrives. Google Instant Search switches to the results layout as the user types or holds down a key. iPhone `default.png` launch images did the same for CPU latency.
- File input: show uploads (drag and drop, paste, file picker) immediately by rendering thumbnails client-side, as in Cloudup uploads.
- Perceived speed is real value. He cites the Houston airport complaints that dropped after lengthening the walk to baggage claim, without faster baggage handling.
- Spinners and loading indicators "should become a rarity." Where optimism is risky (payment forms, logout), defer the spinner until the user no longer feels the response was immediate.
- Nielsen's limits: 0.1s feels instantaneous (no feedback needed), 1.0s keeps the flow of thought intact, 10s is the limit of attention.
- PJAX and TurboLinks miss this opportunity because the client doesn't know the next page's representation until a full server round trip finishes.

## Make the UI self-updating and reconcile state

His third principle is reactivity: when data changes on the server, tell clients without being asked. "Your UI should be self-updating."

- Think in terms of concurrent data points rather than users. Even a single user sending a photo from phone to laptop needs live updates. Facebook's newsfeed was fine as a static render when people updated profiles once a day, but not once peers can like a photo seconds after upload.
- Apply it uniformly, including session and login state: logging out in one tab should invalidate all open tabs, which improves privacy and security on shared devices.
- New challenges: connection and reconnection management, and state reconciliation. The app must update correctly after long gaps (a laptop lid closed for days).
- Reconciliation also applies to pre-rendered pages. Data sent with the initial page sits on the wire until scripts load, which is effectively a disconnection, and the first script connection is a session resumption.

## Control data exchange: retry, queue offline, protect in-flight data

With AJAX, WebSocket and EventSource, the client can manage the server conversation, which the original link-and-form web could not.

- Show connection state. If the UI promises automatic updates, tell users when it's disconnected and when it is reconnecting.
- On disconnect, store pending data in memory or, better, `localStorage` and send it later. With ServiceWorker, apps can sync in the background even when closed.
- Handle timeouts and errors and "retry on behalf of the user." Tell the user only about persistent failures.
- Treat some errors specially: an unexpected `403` may mean the session was invalidated, so prompt a login screen.
- Prevent accidental interruption of the data flow with `beforeunload` handlers and by intercepting in-app link clicks to show your own modals.

## Don't break history, enhance it

Without the browser managing URLs for state changes, JS apps can break expectations that plain hyperlinks gave for free.

- Call `history.pushState` or `replaceState` for transitions such as infinite pagination, which many apps skip.
- "Fast Back" (a term from Daniel Pipius): treat Back as an app-level button, render the cached previous page instantly, then apply live-data updates and tell the user what changed.
- Watch for cases outside your control: server-rendered HTML later modified on the client can come back stale after returning from a third-party site.
- Remember scroll position. He tested Twitter and Facebook feeds and found both exhibited "scrolling amnesia."
- Some state is volatile and tied only to a history entry. In a comment tree with collapsible subtrees, collapsed state may persist on Back but a fresh link visit should show everything uncollapsed.

## Push code updates as well as data

"Pushing data without pushing code is insufficient." A page refresh used to reload both, so a live-data app also needs live code, especially when a tab can stay open a very long time.

- Reasons: breaking backend API changes require client updates, otherwise clients misread data or send incompatible formats; and a self-updating UI removes the user's reason to refresh.
- Mechanisms: with a server push channel, emit a notification when new code ships. Without one, append a version number header to outgoing HTTP requests so the server can compare it to its latest version, decline the request and advise the client.
- Some apps auto-refresh when the page is not visible (Page Visibility API) and no form inputs are filled in.
- Better is hot code reloading: swap individual modules on the fly instead of refreshing. Keep the architecture modular so a component update doesn't restart, say, the socket connection.
- This works best when behavior (code) is separated from data (state) and the UI is rendered from state, as in React. If state lives in the DOM or listeners are wired by hand, swapping code is far harder. He points to Dan Abramov's react-hot-loader.

## Predict behavior ("negative latency")

His seventh principle is that a rich app can anticipate input to beat latency.

- Simplest form: start fetching data when the user hovers a link so it's ready by click.
- More advanced: analyze mouse trajectory to detect when the pointer is heading toward a button and prefetch before the click (he links a jQuery "I know where you are aiming" example).
- His conclusion: keep the web's hyperlinked-pages building block, load code, style and markup progressively as users navigate, and use JavaScript to add speed and interactivity without losing the web's original strengths.
