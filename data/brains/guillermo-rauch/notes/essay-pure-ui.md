## Pure UI as a pure function of application state

- Guillermo's core idea: define an application's UI as "a pure function of application state." A pure function can be replaced by its return value without changing program behavior (`concat('hello', 'world')` can be swapped for `'hello world'`).
- Applied to a GUI, the function returns an abstract representation of widgets or markup (a virtual DOM), not real DOM elements. It maps parameters to output.
- When parameters change (a new video, a user action), the function is called again and the view updates.
- The programmer no longer specifies the transition from state A to state B. He argues you only describe what A looks like and what B looks like, discretely.
- He frames this as a benefit of the programming model React enables, rather than of React's feature list.
- Footnote: comparing libraries by features is inferior to examining the model they impose on the programmer. The model tells you how code will fare as the product matures and the team grows, and where the technology will evolve.

## Designers already work this way: artboards and styleguides

- Guillermo argues UI designers have been intuitively "programming" this way, arguably more directly than programmers.
- The rise of mobile forced designers to think about screen sizes, and artboards became the de-facto standard for showing how a UI renders per configuration.
- His example: the Socket.IO dashboard on desktop vs mobile is the same `dashboard()` function called with different parameters, e.g. `dashboard({ width: 375 })`. He notes that with layout data available in the function, CSS media queries can be redundant.
- Styleguides, such as GitHub Primer's buttons, are the same idea. The base function is `<button>` and its parameters are `class="btn-sm"` or `disabled`, which can be combined (`btn-sm btn-outline`).
- Declarative CSS and HTML suit this well.

## The VideoPress rebuild and the hidden size of the state space

- Context: he redesigned and rebuilt VideoPress, the WordPress video platform. He dropped the Flash dependency for HTML5 `<video>` and added new functionality.
- He designed the main player states in his design tool: video converting on the backend, removed due to DMCA, connection or server error, not G rated so the viewer enters their age, playing but no further data received, and hovering the progress bar.
- Key warning: underestimating the state space is easy, because the experience is "just watching video." Every other state looks exceptional, like an error, so it's tempting to reduce it to "just `<video>` and a few extra divs."
- He offers this as an explanation for chronically poor software estimates. If the magnitude of the work isn't clear to the developer or designer, let alone to people outside the process, accurate prediction is impossible.

## Implementation as rendered artboards driven by JSON

- The implementation mirrored the design workflow. He broke the design into small view functions that render to HTML artboards.
- Because the functions map data to UI, he wrote a simple JSON file listing the params for each state. Example: a "Thumb tooltip" view with entries for Default, Custom offset (30px) and Custom offset (left edge), each with width, height and tip position params.
- Each rendered view got a `[+]` icon to edit the invocation parameters live. He could drag numbers to resize the player and see behavior beyond the designer's breakpoints (iPhone, iPad). He compares this to fuzz testing.
- For image parameters he added a link that pulls a random image from imgur.

## Design vs discovery, and what discovery found

- He separates two interleaved phases. Design is taking available data and coming up with its representation; the outcome is reasonably well specified. Discovery is the expansion and evolution of that input: uncovering new states and ideas during the process. Even very experienced designers go through this loop.
- Parameter permutations are potentially infinite, so only some combinations can be considered at design time.
- Concrete discoveries:
  - The tooltip over the progress bar grew to 6 representations. The tip triangle had to be split in half near the player's edges, and a state was needed for when the thumbnail grid hasn't loaded.
  - Light images clashed with the blurred-thumbnail conversion progress bar. Adding shadows made it work across a wide range of photos.
  - Implementation surfaced the video download stalling completely (the MediaElement `stalled` event) as a state neither designer nor developer had considered.
- He says the designer-developer communication becomes a clear protocol: the mockup is requested again with the extra parameter `{ stalled: true }`, and the TODO list expands with responsibilities neatly divided.

## Measuring completeness, progress and complexity

- If you define 20 distinct states and 10 are rendered on screen as HTML, the implementation is 50% done. This makes completeness directly visible.
- Contrast with a jQuery payment form: a 200 on success, a 400 on failure, and handlers that show or hide `#msg-error` / `#msg-success`. The only way to know both branches are correct is to execute the code.
- That is hard in practice. Apps must answer questions like "what if this network call is taking too long?", "what if the response doesn't come back?" and "what if the server returns an error?" Reaching the form may itself require specific login state, role, privileges and profile data.
- Mapping the application this way measures complexity as well as progress: too many steps, too many screens, inconsistency.
- Visualizing how the map grows over time shows how accurate initial assumptions were. If much of the map is discovered late, the project was improperly scoped or understood, which explains why it's taking longer to ship.

## Where the workflow leads

- Short term: designer-programmer communication improves dramatically by becoming "well technically delineated."
- Longer term, he extrapolates to a future where going from sketch to design to implementation is far more accessible to anyone with an idea, a "growing convergence" of designer and programmer roles.
- The goal of an app is the creative representation of data a set of users cares about.
- He notes there is still repeated effort translating ideas from mind to medium, and expects tools to follow as understanding of the process improves.
- Closing line: "Lorem Ipsum has had a good run. Let's replace it with data." Design with real data instead of placeholder text.
