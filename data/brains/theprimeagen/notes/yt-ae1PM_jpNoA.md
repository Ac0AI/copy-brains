## Writing testable functions: separate I/O from data transformation

- ThePrimeagen's tip: "build functions as if you're going to unit test them and you're not allowed to use mocks."
- He calls mocks "the devil" and wrote a long article on it about a year and a half before this episode. When he sees a unit test injecting mocks, he wants to "burn it to the ground" because it tests code that doesn't run in production.
- Needing a mock means the function's input isn't creatable. He argues you should be able to construct the input and hand it in.
- Usual culprit: I/O mixed into a function that also processes data.
- Example: a function that fetches a record from the database, transforms it, then writes it back. Split it into a retrieval function (can fail, has its own logic) and a transformation function (turns A into B). Test the transformation with different kinds of A and expected B, as black-box tests.
- In tools, data may arrive from the command line, stdin, or a database. Build with that separation early and later integration test suites or mocking become unnecessary.
- He writes code so every function is testable, though he wouldn't write a test for 99% of it.
- Testing rule: "If I can't get it right in three tries I need to test it."

## Code structure: simple procedural code at the top level

- ThePrimeagen has an obsession with being able to "call something in a single line, do the thing."
- His ideal is simple procedural (or declarative) code at the very end, at the top level where the side effects happen (main, HTTP handler, game loop). He wants that part to be "really pretty."
- Break logic into good logical thoughts and avoid mixing too many in one function. Some unavoidable ugly functions exist (e.g. fetch from 17 sources), but they should still be thought through so the top level reads cleanly.
- Early example: a QBasic blackjack game he wrote in high school used declarations calling one another, growing the stack until a stack overflow in long games. He rewrote it as a main function with a while loop. He calls it a formative refactor.
- In college he built a C# XNA game with seven layers of inheritance. He now says to be careful with inheritance: "I've only seen one" good use case.
- He tries not to be prescriptive, but says "don't use extends." Classes versus POJOs matters less to him. He jokes that "functional Bros" who avoid classes still return objects with attached functions.
- His view: people have to shoot themselves in the foot to learn, so he shares tips and expects some to learn the hard way.

## Building CLI tools and why it's good for developers

- ThePrimeagen likes building for developers: the audience is more technical, can explain what went wrong in detail, and is motivated to learn the product. A customer-facing app like Netflix can't assume users will study menus.
- Tools are more concise and defined than websites. He says the more concise a tool, the better it fits a niche, and contrasts that with forever-building products like Netflix.
- Recent tool 1: "Reggie," a Netflix test harness that shoves video and audio frames through a new interface as fast as possible, so 10 minutes of video plays in about 5 seconds, for performance and memory testing.
- Recent tool 2 (named "aperture" after Portal): goal was to find what happened to a bunch of machines in 10 seconds, given a UUID and a day.
- Unix philosophy design: data enters either by the tool querying databases or via stdin in an expected format. Piping line-by-line objects between stages lets him parse a CSV, format it, enrich it with requests, and mock input for integration tests (e.g. checking CSV generation).
- He likes clean ins and outs and not abusing stdout/stderr.
- Control flow trick in his Node CLI: a single ~17-line function on `process.on('uncaughtException')` handles all thrown errors (bad arguments, unhandled situations) by halting and reporting. He admits proper local error handling would be better, but this works.
- Favorite command-line utilities: grep, cat, awk, find, and `jq` ("if you don't know jq you don't know me").

## Choosing languages for tools

- Current tool language is JavaScript/TypeScript, though he says it "should have been" Go. A coworker's argument he relayed: Go has a proper scheduler and green threads, and its ecosystem avoids "the bazillion npm packages of doubtful quality." JS makes sense for the web and for UI on Netflix's NRDP (a C++ platform embedding V8); Lua was considered and probably would have been the better choice but was hard to make fast.
- He found a 64-bit number precision bug in TypeScript that spawned the discussion.
- He always opts into types over no types. On a protobuf rewrite of his tool, he says changes touch hundreds of spots, which is why untyped code is "the worst thing."
- Rust: great for string-processing CLIs.
- OCaml: he had just finished day one of Advent of Code in it. He wants Rust-style types with inference and a garbage collector when needed, and notes upcoming OCaml versions can avoid the GC for stack-allocated data. John Carmack said functional languages suit tools and could run longer. He finds OCaml unusual after 20 years of C-style languages.
- Go: his main complaint is no algebraic data types, so he doesn't love it.
- Lua: great embedded language ("embed in an afternoon"), which is why it's in Neovim.
- His general stance: pick the right tool per use case. For a small browser job he'd use plain JavaScript and CSS, not a large React app with server components. He says TJ shares this approach.
- Go tip: the `errgroup` package (in the extended standard library) is like Promise.all with error handling; each goroutine returns an error and the first error is returned at the end.

## Error handling and algebraic data types

- JavaScript/Java exceptions halt the program and throw to wherever it is caught, which can be far from the cause.
- Go forces handling at the failing line but only by convention (`if err != nil`), caveman-style. He says it's good that every failure point is visible.
- Algebraic data type: a value that is one of two states (the value or an error). To get the value you must explicitly check or unwrap, which also removes the null/undefined problem.
- Zig's `try` and Rust's `?` return the error to the caller in one token, with the signature forced to declare it can fail. He calls this "the right kind of leaky abstraction" that leaks side effects you need to know about.
- He doesn't mind reusing the word `try` in Go-style proposals (e.g. a `guard` keyword) and says functional programming terminology is often needlessly academic.
- He dislikes try/catch and recalls a team reinventing it in Go with recover, defer and panic.
- Why functional languages are harder to learn: people think procedurally ("walk the list, break if needed") and recursion is hard to explain.

## Career path: from Grail Online to Netflix

- First code at sixth grade (around 1998-99) editing NPC scripts in a Zelda-style online game called Grail/Graal, learning if statements, while loops and math functions without any prior knowledge.
- College: CS degree, dropped out a few times, failed pre-calculus twice before passing on the third try. He took calculus in six weeks of summer school, then was top of the class. In differential equations he was the only person out of roughly 400 to finish the final and scored about 97. He says discipline and the ability "to say no to how I feel and do what I must" drove the turnaround, helped by a life-changing night he describes as a "come to Jesus" moment ending his addictions.
- After college he spent 2-3 years on his own text-message marketing company (around 2009-2010, PHP 5, jQuery and AJAX single-page apps). He says it was too early because most people lacked smartphones. He and his wife were very poor then.
- Next job: Schedulicity (online booking for salons, spas, chiropractors), C# and ASP master pages, which he hated. After about five months a recruiter, Ivan Judson, offered 50% more salary at WebFilings. He says that job, with very hard work (he implies 80-hour weeks), made him the programmer he is, and that "you can't make a John Carmack without working like John Carmack."
- Getting the Netflix interview: he listed RxJS and mustache analysis on LinkedIn (after dropping cage fighting because of endorsements). Within three days a Netflix engineer, Jeff Wagner, emailed him. In the interview he asked questions and wrote down the answers, and was told it was the best RxJS interview the engineer had had.
- Interview tip: understand the product and be able to get passionate and critical about it. When asked what he hates about Netflix, he attacked the Xbox search bar, which was a straight A-Z letter grid, and backed it up with A/B testing metrics.
- Moving to California with his wife 34-35 weeks pregnant was the hardest decision of his life. He says leaving his friend group made him more mature, because groups of guys tend to "pin to the lowest IQ."
- During lockdown he moved his family to Rapid City, South Dakota, to be near family. He recommends living near grandparents for free babysitting.

## Advice for portfolios and learning

- Listeners wanting a back-end portfolio should build CLI tools rather than a boring REST API. ThePrimeagen agrees; developers hiring can judge the API and usefulness directly, and you avoid being judged on product design for a Dev job.
- Experience rather than advice teaches: you have to suffer through bad patterns to understand them.
- Netflix detail: the Konami code worked on Netflix for a while, and at one point only left, right, up, down and enter were guaranteed on devices. He notes left is often used to leave a menu when there's no back button.
