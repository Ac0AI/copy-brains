## Why UploadThing's backend-first `onUploadComplete` callback matters

Theo built UploadThing, a service that makes S3 file uploads easy for developers, and says its backend-first callback is a deliberate design choice.

- He saw a recurring problem at Twitch and "in many code bases": apps use S3 pre-signed POST URLs but don't record the file until the client finishes uploading and tells the server "hey by the way I'm done uploading."
- A client can get the pre-signed URL, block calls back to the service, post to S3 anyway, and the completion message never goes through. The result is ghost files sitting in the bucket that aren't logged in the database.
- UploadThing's `onUploadComplete` callback runs from the backend. He says to use it "as the source of truth in your database." You should never have a file uploaded that you aren't logging somewhere, or you "run the risk of lost files."
- Client-side callbacks (showing the URL in the UI) are fine for display, but he says not to rely on them as the source of truth. A user could also change the URL they post to your endpoint and swap in something you never approved. He "highly, highly" recommends handling this on your backend.

## How the upload flow works and why it skips your infrastructure

Theo describes the architecture and says a main thing UploadThing optimizes for is not forcing devs to pay egress on file bytes.

1. The client sends only file metadata (file keys, sizes, types) to the dev's own server, not the files.
2. The dev's server validates the metadata against the router rules (file types, max size).
3. The dev's server calls UploadThing's server, which generates a pre-signed POST URL/S3 policy and stores the metadata in a database.
4. The client uploads directly to S3. This is "the important piece because it skips your infrastructure and doesn't cost you any egress."
5. S3 triggers a Lambda bound directly on UploadThing's end, with the uploaded file key. UploadThing translates "the chaos that S3 puts in that metadata" into an actual message.
6. UploadThing looks up the stored metadata and the dev's callback URL, then calls the dev's service back.

- He says you should not have to upload files to your server, because then you "eat the egress" twice: once to send files to your server and again to send them out to S3.
- He credits Mark, who worked at Retool, for knowing how to do the weird S3 bindings.

## Open source, reverse engineering, and being validated by it

Theo reacts positively to a YouTuber (Josh) reverse engineering UploadThing and building a clone in about 24 hours.

- The source was already readable in the published npm packages. He says he "didn't bother clearing the source out" and "didn't even need to reverse minify," and open sourcing "is more formality than anything."
- The architecture diagram (customer-owned pieces in orange, UploadThing's in blue, Amazon's in orange) is in the repo. He says there was no reason to hide it: "we're not trying to obfuscate everything."
- He feels bad for not publishing the architecture explanation first, since Josh reverse engineered almost the same diagram himself. He had planned to give those resources out.
- He finds it validating that someone cares enough to make resources he didn't. His take: Josh is an S3 expert who "gets the value" and thinks it's cool enough to make a video about, which is the person who matters.
- He promoted Josh's channel ("go subscribe to Josh, he deserves it probably even more than me") and said he'd link the repo, treating it as free distribution and goodwill rather than a threat.

## Owning shipping delays and early-product gaps

Theo admits missing features the clone had and takes responsibility for the delay.

- Josh's clone had an on-success callback and on-error handling on the client; Theo says UploadThing had added all of this in the most recent release.
- He says it was "a very early demo" and the team hoped to ship more updates the week before, but they were busy at Reactathon and Vercel Ship events and keeping the service running.
- He says "we dropped the ball here much more than I would have liked" and that the component library and API changes "should have happened Wednesday last week... I'll take the L on that for sure."

## Security details of the upload policy

Theo and Josh's walkthrough covers how the signed policy enforces limits.

- The server generates an S3 policy containing a signature, delivered like a JSON web token; the client cannot change it or the upload "wouldn't work."
- The policy enforces a content-length range (the max bytes the dev configured, e.g. 3 MB) and a content-type prefix such as starting with `image/`.
- Limits must be enforced server side, "because you cannot trust the client to do this."
- After S3 uploads, a notification (like a webhook through Amazon's simple notification service) tells UploadThing the file key and size, which it uses to attribute the upload to an API key and count it against that key's quota. Theo notes UploadThing handles this on the edge with Upstash as the database because it plays well with the edge.
