## A hybrid logical clock for decentralized event ordering

Jason (writing on his long-form site, 2019) presents "Distributed Logical Time" (LT). It is a decentralized, constant-memory way for independent replicas to timestamp events so that anything that happened before something else is always ordered correctly. It needs no master server, no leader and no join or leave announcements. He frames it as an alternative to two options most teams can't use:
- Custom infrastructure such as Google TrueTime, which is unavailable in browsers, laptops and non-Google data centers.
- Vector clocks, which have unbounded memory and leave "conflicts" that are resolved arbitrarily or not at all.

His closing point: "Simplicity is a core requirement for scalability and truly bug-free code."

## Requirements Jason sets for the clock

He defines RT (omniscient real time), PT (the OS clock, the only time a replica can read) and LT (the synthetic clock). The requirements:
- **PT is arbitrary.** It can move backwards, repeat values, update rarely, be unsynchronized between replicas and be off from RT by any variable amount. It only generally increases over the long run.
- **LT always increases** on every request, regardless of PT.
- **Bounded error window `e`.** If two events on different replicas are more than `e` apart in real time (`e` being 1-2 seconds, a small constant), LT orders them correctly. Inside `e`, order is best-effort.
- **`e` must be a constant**, not proportional to any state or configuration.
- **Happened-before is always preserved.** If A happens, the replicas communicate, then B happens, `LT{B>A}` always holds, even inside `e`.
- **A skewed clock must not skew the collective.** A fast replica shouldn't automatically "win", and a slow one shouldn't be unable to write.
- **Constant memory:** a fixed number of bits, unlike vector clocks.
- **Fully decentralized:** no leaders, no peer list, any communication pattern.

## Single-replica algorithm

OS time can go backwards (NTP, leap seconds, manual changes), repeat (CPUs are faster than clock precision) and drift far from real time. Jason's fix is to store the last-seen PT plus a counter, behind a mutex:

```go
func GetLT() {
	if PT_Current > PT_LastSeen {
		PT_LastSeen = PT_Current
		Counter = 0
	} else {
		Counter = Counter + 1
	}
	return {PT_LastSeen, Counter}
}
```

- LT orders by `PT_LastSeen`, then by `Counter`.
- Because of the counter, PT precision doesn't matter. He therefore suggests a recurring timer that refreshes a thread-safe global PT 1-4 times per second, instead of an expensive blocking OS call on every request.
- With that optimization, his Javascript implementation reached tens of millions of invocations per second on a typical laptop.

## Preserving happened-before across replicas

If replica P sends event A to Q and Q then creates B, Q must produce a strictly larger LT. That is automatic when Q's PT is ahead of P's. If P's PT is ahead (his example: one minute), Q's LT would be far behind and `LT{A>B}` despite `RT{A<B}`.

The fix: every message carries the sender's LT. The receiver takes the larger of its own and the peer's, then increments the counter:

```go
func UpdateLTFromPeer( LT_Peer ) {
	LT_Local = GetLT()
	if LT_Peer > LT_Local { LT_Local = LT_Peer }
	Counter = Counter + 1
	SaveState(LT_Local)
}
```

- Q's `PT_LastSeen` may now sit ahead of its own PT. That's fine; it uses its counter until its own PT catches up.
- Jason notes this is the Hybrid Logical Clock (HLC) from a 2014 University at Buffalo paper, which contains the correctness proof.

## Skew correction: making `e` small and bounded

HLC alone breaks the bounded-`e` requirement. In his example, Q's PT is a minute behind P's. Q must keep using its counter while P keeps advancing via PT, so every event on P in that minute outranks every event on Q, regardless of real order. The error window equals the clock skew (a minute, or an hour) and persists even after Q syncs.

One answer is to mandate small skew, for example with NTP (tens of milliseconds). Jason rejects it as the sole fix because browsers, laptops and VMs aren't under your control.

His algorithm extension:
- When P sends its LT, Q computes `s = PT{P - Q}` as the skew.
- If `s` is positive, Q stores it and uses `PT + s` as its physical time from then on.
- If `s` is negative, Q ignores it, so clocks that are already ahead don't get further ahead.
- `s` always under-estimates true skew by the one-way transmission delay `d`. With real skew 60 and `d`=1, the computed skew is 59.
- `d` is bounded by network time (about 1ms in a data center, 100ms across a country, 1000ms across the world), not by skew or system state. So `e` is on the order of `d`, which meets the "small constant" goal.
- If all clocks are well synchronized (NTP, or GPS-synced phones), the computed skew is negative and `s` stays 0. Skew correction vanishes when it isn't needed.
- A replica that is very early develops a large forward skew. A replica that is very late pulls the other replicas' skews to align with it.
- To stop skews from creeping upward as replicas keep nudging each other, his implementation adds another 500ms to the effective `d`.

## Simulations from his Golang implementation

- **Staggered PT:** replicas start 10 seconds apart and one-way-sync a random pair each second. LT increases monotonically and all converge on the replica with the latest LT.
- **Variable-rate PT:** clocks run at different speeds relative to RT. All replicas converge close to the one with the fastest clock.
- **Far-future replica joins, then leaves:** the others converge on the far-future LT. After it leaves, their skews stay put and do not creep up.

## Known problem: start-up

A freshly started replica probably needs skew correction and should fix its LT before using it for anything meaningful.
- Best fix: talk to any live replica, which sets an appropriate skew.
- Alternative: persist LT state, including the skew, between runs. This is weaker because PT behavior or the group's skew may have changed.
- Skipping both is still legal and consistent, but its events will look older than they really are relative to other replicas' events at the same real time.

## Anti-objectives and trade-offs

- **Uniqueness is not provided.** LT is unique per replica but not globally. Collisions are realistic when PT updates coarsely and `d` is tiny. His example: PT refreshed once per second and `d`=0.001, so two synchronized replicas that generate an LT in the same real-time second can collide.
  - Fix: append least-significant bits that are a unique replica ID, or enough random bits. This also lets LT serve as an event name in logs or databases.
- **Keeping PT close to RT is not required.** Disabling skew correction keeps PT provably close to RT (per the HLC paper), but you get a large `e` and mis-ordered events. To keep both, use NTP or a similar service alongside the algorithm.
