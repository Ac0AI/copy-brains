## Netflix streaming reliability work: the Reggie packet pacer

- ThePrimeagen built Reggie, a test tool for Netflix's real-time game streaming, and named it the most reliable Pacer after Reggie Miller. He calls it "one of my favorite projects I've ever done".
- Background he explains for the streaming stack:
  - Video and audio go out as UDP packets.
  - Video is sent along with forward error correction (FEC) packets.
  - Audio is typically a single UDP packet with no FEC.
  - The back channel (RTCP) tells the server what the client received.
  - RTX re-requests retransmission of missing packets.
- Reggie generates its data from a 30 second clip and feeds it in as fast as possible. A sync component on the other side receives it all and keeps running statistics on loss and drops.
- He wrote it alone, and it is closed source ("absolutely not" open source).

## How Reggie hacks time to run faster than real time

- The Netflix TV stack has three layers:
  - A JavaScript layer.
  - A C++ layer.
  - A partner layer, where the TV actually plays the content.
- Reggie is written in JavaScript. He wrote a fake partner (the sync side), "I was my own partner", which receives packets and keeps statistics.
- Loop for each frame:
  1. JavaScript emits one frame of audio and video, with a configurable amount of FEC.
  2. The C++ layer takes the frame and tracks its id, timestamp, and video and audio buffer levels.
  3. JavaScript queries "what id are you?".
  4. Once it gets the id it just sent, it virtually advances the system clock by one frame time (for example 16.66 ms).
  5. It sends the next frame and repeats, accumulating stats.
- Because time is virtual, he can run as much data as possible through the C++ layer as fast as possible.
- He runs it directly in JavaScript with direct ties into the C++ layer, since it has to work with Netflix's TV system. He explicitly rejects using another tool: "why would I use something else".

## Why fast, deterministic tests beat real-time tests

- His stated reason for not testing in real time: "you can't test stuff fast enough."
- Goals:
  - Run CI in under 20 seconds.
  - Play an hour of video in that time.
  - Drop audio once, drop video once, or drop audio many times, and check the result.
- Failure scenarios he can simulate: the internet dipping out for a second, and whether the C++ layer does the correct things.
- Things he checks:
  - How much memory is produced and whether anything overflows.
  - Whether audio is handed off properly.
  - What happens if the audio buffer drops to zero, and whether the C++ layer queues up enough audio again.
- Audio detail: audio needs 20 ms chunks (you cannot send 10 ms), and each packet is 20 ms. Generating audio himself, whether Opus-encoded silence or beeps, is "really annoying" work, but it is needed to make the audio actually be audio.
- Reggie can also run in real time by feeding audio and video into an ffmpeg player.

## Forward error correction and recovery basics

- He describes ULPFEC as simple: the XOR of all the packets together into one parity packet. If one packet is missed, XOR the rest with the parity to recover it. Other FEC variants exist, such as Reed-Solomon.
- Recovery order, as he describes it for dropped packets:
  - FEC first.
  - RTX re-requests as well.
  - If none of that works, redeliver an IDR frame. An IDR frame contains the full video, and the relative frames are built from it again.

## Validating FEC in the field and defining stats

- His next goal was to know whether forward error correction works for real users on real machines, not just in made-up tests. Otherwise "are we just like completely driving blind".
- He mostly produced a blueprint and tooling here. He did not implement the stats collection, but he:
  - Defined the status events coming off the OCGAs (Open Connect Gaming Appliances, the gaming machines).
  - Chose which statistics he thought were actually useful, such as how good the network is and how often it drops.
  - Built tools around those stats and drove other people toward doing the right thing.

## Rapid triage of failed games

- Problem: when testing, it was hard to know why a game failed. User reports are vague ("audio was really bad, video seemed a little chunky").
- Solution: he took every data source and built a rapid triager that says what is failing, where, and who is to blame: client, server, or network.
- Example reasoning it enables: "your audio is bad, look at these network times, you totally chunked out, are you on the VPN?" That might be a VPN plus bad home internet.
- He found this work fun and notes it is all OCGA work, about what the servers receive and send.

## Server performance fixes: JSON to protobuf

- The first version of the event path used JSON to pass events.
- Encoding JSON alone "completely caved the game server".
- The fix was moving to protobufs, using Go zero-allocation (zero garbage generating) protobuf tooling. This helped the servers run well.
- He says it was not memory arenas, but "cool Go stuff" that avoids allocation.

## Next project at Netflix and working style

- After one last data task, he moves to a project that involves React, but "subverting React" and making it "become not React".
- He will build an LSP for it, which means writing a lot of Rust and a lot of JavaScript.
- Working style: he did all of the Reggie and stats work alone, but worked with many people to get things out and running.
