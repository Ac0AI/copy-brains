# Copy Brains

Build a small, local copy knowledge service. Preserve the upstream MIT notice and distinguish code rights from third-party content rights.

- The default app is copy/, not the inherited upstream website.
- Native framework cards live in data/copy-frameworks/. Write original Swedish applications, cite public author/publisher/institution sources, and label invented examples.
- Preserve source provenance. A framework is not customer evidence or a conversion guarantee.
- Write Swedish from the brief. Do not turn every brand into a translated US direct-response voice or assume one Swedish national tone.
- Keep personal briefs, customer data, credentials and machine paths out of the repository. Installed copy-brains.local.json is ignored.
- The local HTTP app listens only on 127.0.0.1. The MCP server uses stdio and makes no outbound calls.
- Validate meaningful changes with npm run typecheck and npm test. Test a real MCP client when changing tool contracts.
- Keep the skill in skills/copy-operator synchronized with the installed copy only when installation is part of the request.
- Avoid unnecessary dependencies. Do not add model APIs or cloud services for a problem this local library can solve.
