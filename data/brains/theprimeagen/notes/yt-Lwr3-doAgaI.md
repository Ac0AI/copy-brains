## Big O: how ThePrimeagen defines and uses it

- Big O categorizes an algorithm's time or memory by how it grows with input. It is "not meant to be an exact measurement". Nobody says "your algorithm takes 450 CPU units".
- His one-line definition: "as your input grows how fast is your computation or memory grow." Concept number one is that growth is always with respect to input.
- He says Big O is the one thing that, if you don't know it, makes everything after it sound like nonsense, because you lack the lingo to describe running time.
- It helps you decide whether to use a specific data structure. Structures add constraints to get more performant, and used wrongly they become badly unperformant.
- Time and memory are not free trade-offs in the real world. Allocating memory takes time, so creating a linear amount of memory bounds your algorithm by that amount. Data size and GC pressure also matter.
- Saying "this is O(n)" means the algorithm grows linearly with input.

## Spotting complexity and dropping constants

- Simplest trick for reading Big O: look for loops over the input. A for loop over a string's length executes once per character, so a 50 percent longer string means 50 percent more work (linear).
- A function that sums a string and then sums it again is still O(n), not O(2n). The second most important concept: "you always drop constants".
- Constants matter practically, but not theoretically. 10n versus n squared shows why: as n grows, n squared becomes massively larger no matter what constant sits in front of the linear term.
- The goal is not exact CPU units. It is knowing roughly what happens if you hand the function an n of 10,000: does it halt the computer, run fast, or run instantly.

## Implementing bubble sort from scratch

- He treats bubble sort as the first sorting algorithm to implement and says you should be able to write it first try. He argues it is simpler than binary search.
- The skill he stresses is translating the idea in your head into code, mechanically.
- Outer loop: `i` from 0 up to n, because you repeat the process n times.
- Inner loop: `j` from 0 up to `n - 1 - i`.
  - Stop at n - 1 because you compare `j` to `j + 1` and must not go off the array. Out-of-bounds in Java throws an exception; in C++ "you hack yourself".
  - Subtract `i` because every pass makes the last element the largest, so it is already sorted and need not be redone. Pass 0 goes to n - 1, pass 1 to n - 2, and so on.
- Comparison: if `array[j] > array[j + 1]`, swap.
- Swap: `const temp = array[j]; array[j] = array[j + 1]; array[j + 1] = temp;`.
- It sorts in place. He notes JavaScript developers rarely write raw for loops, but in the real world you have to.

## How a hash map works

- A map maps a key to a value through a consistent hash. The same unique key must always give the same answer back. An inconsistent hash is "good for absolutely nothing".
- The hash function takes a key and produces a number, which can be big or small. You take that number modulo the storage length (his example is 10 slots) to pick a bin, then store the key plus the value there.
- Always store the key with the value, because on retrieval you need to confirm which entry matches.
- JavaScript caveat:
  - You can hash strings (walk the characters) and numbers.
  - You can't get a unique ID for an object. Two objects with identical properties and values can't be told apart, unlike Java's hash ID.
  - He says this may have changed since he last checked, and that someone could prove him wrong.
  - So any implementation would use strings or numbers as keys.

## Hash collisions, retrieval, deletion and resizing

- With a perfectly uniform hash and 10 slots, two keys collide with a 1 in 10 (10 percent) chance.
- Old approach (how he learned it in college): linear or exponential back-off, putting the item in the next slot.
  - As slots fill, you need more storage relative to the load factor, because the chance of hitting an occupied slot and walking down keeps rising.
- Modern approach he has seen: each bin holds a list, either an array list or a linked list. You walk the list, and with a good hash function most bins hold only one item, sometimes two.
- Retrieval: hash the key, modulo by storage size, go to the bin, then walk its entries comparing keys. When the key matches, return the associated value.
- Deletion: go to the bin, find the entry with the matching key, remove it, and decrement the length.
- Resizing:
  - He believes the ideal load factor is 0.7, "what I believe is considered the ideal one".
  - Past that, take the current storage, iterate over all the keys, rehash them and restore them into larger storage.
  - Doubling the storage cuts the load factor by about half.

## Course scope and his framing

- He introduces himself as a Netflix engineer, husband and father of four who loves data structures and algorithms.
- He says they are useful in your daily job and make you a better engineer.
- The course covers arrays, lists, trees, graphs and maps, plus interview questions he has met that use one or more of them.
- It also covers searching and sorting algorithms.
- His closing advice: "this is engineering the best thing to do is have fun."
