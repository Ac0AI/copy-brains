## Unit tests and where ThePrimeagen stands: pragmatic testing, not coverage

- ThePrimeagen says 100% code coverage is "just terrible." It is easy to have a bug and still hit full coverage, for example by accessing a list and getting an undefined second item.
- He and Theo agree that TDD (writing the test first and building the architecture around it) is the wrong tool. He says he never defines architecture by how he will write tests; he does it the other way around.
- He is not anti-test. His stance: write tests alongside the code, for the things that matter.
- He is also a fan of building something once to throw it away, because the first version rarely survives contact with the real problem.

## When ThePrimeagen thinks tests earn their keep

- **Tricky data structures and translations.** At a previous job, a document viewer ran on iPad, ActionScript and HTML. Touching the screen produced a few points that had to be translated into exact text positions. He could have built it in a day, but spent 2-3 days on a very comprehensive test suite.
- That feature ran untouched for about a decade. When a couple of bugs showed up, the tests told people where the bug was and how to fix it.
- **Tests as documentation.** He prefers a real example of how to search a document over a written description. He leans on tests both to prove correctness and to give the next developer "tech documentation for free."
- **Edge cases that must never be forgotten.** After he has refactored and knows what he wants, he adds tests so the weird behaviors don't get lost, similar to leaving comments in the code.
- **Refactors.** Tests let him change the insides of a unit and confirm the behavior is unchanged.
- **Rewrites.** When he burns down an interface, the old tests act as a list of the oddities to remember (e.g., "this thing actually gets called twice for this really weird reason").

## How ThePrimeagen avoids bad mocks

- His rule: anything that interacts with the environment goes behind an interface, so there is no mocking.
- He passes in an object that abstracts the environment, so calls are simple "in and out." Example: instead of a player querying an outside source for the audio render rate on a television, the render rate is part of the config handed to the player.
- He points to the confusion in the style where you rewrite module imports and hope the replacement propagates all the way through.
- This is inversion of control rather than import-level mocking.

## Why integration tests are not an easy alternative

- He argues integration tests are extremely complicated to set up, break all the time, and depend on unreliable data.
- Data mocking layers are always out of date. He says he has never seen someone data-mock successfully.
- At Netflix they tried a lot: services go down, a staging environment is required, and it has to be scaled because many tests or developers hit it at once. In his words, "you're solving production in not production."
- He says outsourcing is the answer for hard networking problems like WebRTC (out-of-order RTP packets, forward error correction, Reed-Solomon). Teams that own that stack will probably be more pro-unit-test than he is.

## What Netflix learned about scale

- Old Netflix, roughly 5-8 years before this conversation, had virtually no unit tests. It relied on tribal knowledge, with each person responsible for their own area.
- That worked from zero customers to about 100 million customers.
- Eventually the accumulated decisions gained momentum. He says the company went over a year and a half without shipping a feature, "heads rolled," and the team replaced the old approach with unit tests.
- Bad ideas spread faster than good ones. Code like RxJS infects everything: one observable leads to half the codebase emitting observables, and it becomes impossible to rip out.
- Production bugs creep up year after year (he describes "up 50% this year" compounding) until there are many hard-to-track bugs.
- Netflix hired only very senior engineers at that point, which is why he says the failure was not a matter of weak engineers.
- He concedes some unit tests are poor, e.g., "does this thing construct?"
- His summary: no-test works "small and fast," but he does not think it works forever.

## Where he agrees and disagrees with the "no unit tests" camp

- He agrees that good tools beat okay tests. Example from Theo: turning on a TypeScript rule for unchecked array index access caught three more places the bug could happen, where 100 unit tests might have missed it.
- He agrees TypeScript definitions give most of the documentation value you need, and that type systems now cover much of what unit tests used to.
- He accepts that a first, throwaway version doesn't need tests, and that people over-optimize to make the first version last forever.
- He disagrees that unit tests should be the default to avoid. He worries that, without tests, small recurring bugs pile up as a team grows to 20, 50 or 100 engineers, and that those small bugs frustrate users more than the occasional big one.
- He is skeptical of "manual testing 100 times" as the plan for a fix that touches one place repeatedly.
- He believes a team that feels some pain builds more trust, but he still wants a record of why code behaves oddly.

## Classes, hooks and the cost of closures

- He is a strict class user: never more than one level of inheritance. He thinks inheritance was a mistake except for event emitters.
- For tangled async state, he would suggest putting it in a class with the callbacks inside it and emitting only what is needed, a thin observable-like layer.
- He objects to React hooks on technical grounds, not DX. Every hook call creates a closure, a function and a dependency array on every render, so large components generate thousands of throwaway objects.
- That produces garbage collection time of "20, 30, 50, 100 milliseconds" per render, which matters on low-end devices.
- He says hooks and classes share a lot: both give you a way to reach a value, one via `this.foo` and the other via a hook's returned value.
- He tests on an old Galaxy S5 and a broken Moto G, because most of the world uses Android and low-powered phones, not a threadripper or M1 MacBook.
- He questions whether DX is "a real thing." He calls UX the number one thing that exists.
- He says if he shipped mobile clients he would probably not use React and would do as much server-rendered work as possible, reaching for Solid.js when needed.
- He thinks channels are a better version of what people try to get from RxJS.

## War stories

- At Twitch, he shipped Elixir for a year and calls it fun but would not recommend shipping it today. He notes it has no static types and uses two plus signs for concatenation.
- He broke production with a lowercase "p": the string was "Power Rangers" with an uppercase P, but the code used a lowercase p, and without type definitions the pattern match did not catch it.
- That Power Rangers stream also aired an episode with only sound effects, because channels one and two held only sound effects in that episode.
- He calls the lowercase-p bug the closest example of one a unit test could have caught.
