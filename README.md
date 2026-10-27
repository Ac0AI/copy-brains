# Copybiblioteket / Copy Brains

Ett lokalt kunskapsbibliotek för copy, erbjudanden och självständig svenska. Fork av [VicPitic/the-brains](https://github.com/VicPitic/the-brains).

- Elva ramverk med egna svenska tillämpningar, frågor, exempel och originalkällor.
- Hormozi och Cialdini, plus positionering, Jobs to Be Done, kundspråk, medvetenhet, handlingsdesign, textstruktur, rubriker, testning och klarspråk.
- Svensk sökning i ramverken och begreppssökning i ärvda engelska Hormozi- och Corey Haines-källor.
- Ett svenskt webbgränssnitt och fem lokala MCP-verktyg.
- En uppdaterad [Copy Operator-skill](skills/copy-operator/SKILL.md) som skriver med biblioteket som underlag.

Själva språkmodellen finns i din AI-klient. Biblioteket hämtar underlag; skillen styr skrivandet och granskningen. Det finns ingen separat modellträning eller molnmodell i denna version.

## Starta

Node.js 22.12 eller senare.

    npm ci --ignore-scripts
    npm start

Öppna http://127.0.0.1:8813. Porten kan ändras med COPY_BRAINS_PORT. Webbservern lyssnar endast lokalt. Den använder varken konto, databas, analysverktyg eller externa API-anrop.

## Använd med Codex

Kör från repots rot:

    codex mcp add copy-brains -- node "$PWD/node_modules/tsx/dist/cli.mjs" "$PWD/copy/mcp.ts"

Använd absoluta sökvägar om du registrerar servern på annat sätt. MCP-processen startas vid behov via stdio, så webbservern behöver inte vara igång. En ny chatt eller omladdning av MCP kan behövas efter registrering.

Kopiera skills/copy-operator till din lokala skill-katalog. Om du redan har en modifierad skill, bevara dina ändringar och lägg till de nya referenserna och hjälpskriptet. Lägg sedan copy-brains.local.json i den installerade skill-mappen med ett repoPath-fält som pekar på den absoluta sökvägen till denna checkout. Filen är lokal och ska inte publiceras. Alternativt kan COPY_BRAINS_REPO ange platsen.

Exempel på uppdrag till AI-klienten:

> Använd copy-operator. Hjälp mig att förklara erbjudandet på naturlig svenska. Hämta relevant stöd från Copybiblioteket, men behåll vårt tilltal och använd bara fakta ur vårt underlag.

MCP-verktyg:

| Verktyg | Funktion |
| --- | --- |
| list_copy_frameworks | Lista ramverken |
| search_copy_knowledge | Hitta egna svenska tillämpningar |
| get_copy_framework | Läs ramverk, exempel och källor |
| search_copy_sources | Fördjupa i ärvda engelska källor |
| get_swedish_writing_guide | Hämta guiden för självständig svensk copy |

Alla verktyg är läsande. De sparar inte frågor och anropar ingen extern tjänst. Din AI-klients egen datahantering gäller fortfarande.

## Använd utan MCP

    npm run search -- search "kunden tycker att priset är för högt"
    npm run search -- sources "väntetid och ansträngning" alex-hormozi
    npm run search -- get cialdini-persuasion
    npm run search -- guide

Den installerade skillens scripts/search-knowledge.mjs ger samma åtkomst om MCP ännu inte finns tillgängligt i den aktiva chatten.

## Svenska och källor

Svenska tillämpningar skrivs direkt på svenska. Varumärkets röst styr stil och energi; författarnas modeller styr vilka frågor vi ställer. Se [skrivguiden](skills/copy-operator/references/swedish.md), [ramverksurvalet och Reddit-fynden](docs/framework-research.md) och [manuella skrivprov](examples/svenska-copyprov.md).

Sökningen använder BM25, svenska/engelska sökord och en begränsad begreppslista. Den är inte generell semantisk översättning. En AI-klient kan vid behov omformulera sökfrågan till engelska, samtidigt som sluttexten skrivs på svenska. Källavsnitt från upstream visas på originalspråket och märks som ärvda sammanfattningar eller inlägg.

En källa till ett ramverk är inte bevis för kundens produkt. Fiktiva exempel får inte bli kundreferenser. Resultatpåståenden, priser och garantier måste komma från det aktuella underlaget.

## Utveckling och kontroll

    npm run typecheck
    npm test
    npm run smoke

Tester täcker svenska och engelska frågor, källhänvisningar, tomma träffar, indata, HTTP och en faktisk MCP-klient över stdio. De bevisar inte konverteringseffekt eller full språklig kvalitet. [Validering och kvarvarande begränsningar](docs/validation.md).

Ändra eller lägg till egna ramverk i data/copy-frameworks/. Varje kort valideras vid start. Håll beskrivningarna korta, ange källa och skilj vår tillämpning från författarens formuleringar.

## Relation till upstream

Den nya applikationen finns i copy/. Den återanvänder den ursprungliga sökkoden och källbibliotekets datamodell. Ordhanteringen har förbättrats för svenska tecken och stoppord. Endast Hormozi och Corey Haines laddas som fördjupningskällor.

Upstreams övriga data och webbapp finns kvar för spårbarhet. De används inte av standardstarten. Ursprunglig README och integrationsbeskrivningar har flyttats till docs/upstream/ och är arkivmaterial. Den ursprungliga webbappen kan startas med npm run upstream:start; dess e-post, autentisering och externa driftsättning ingår inte i denna versions funktionstest.

## Content and takedowns

Behåll [LICENSE](LICENSE), inklusive upstreams copyright. Kod och våra egna tillägg i copy/, data/copy-frameworks/ och skills/copy-operator/ är MIT-licensierade. Det ger ingen generell licens till författarnas originalverk.

Ärvt innehåll i data/brains/ består av upstreams sammanfattningar och citat. Dess rättighetsvillkor följer med och är separata från kodlicensen. För en publik innehållstjänst behöver innehållet bedömas för den användningen. Den här versionen körs lokalt och är inte en publicerad webbtjänst.

Detta är ett fristående projekt och innebär inget godkännande från Hormozi, Cialdini eller andra refererade författare. Använd repots issues för rättelser i våra tillämpningar; upstreams kontaktvägar finns i originalrepot.
