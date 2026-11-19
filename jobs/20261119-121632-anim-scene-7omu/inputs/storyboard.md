# Storyboard: Payment of postage, stamps and postal stationery (Postal Exams, Hindi)

No character in any scene (no rig). Everything is a calm annotated slide: document cards, built lists, compare
tables, stamps and stationery drawn as flat ink props, worked sums. Kit palette only: cream canvas #fbf7ee, ink
#2b2622, postal red #9e1b1b for cards/headings, yellow #f2b705 / #fde9a6 only for highlights, green #2e7d4f
only for allowed/correct, slate #4b4f58 + strike for invalid/rejected, grey #6f6a63 for labels, envelope
#f3ead6 for secondary panels, white document cards with #ead9a8 border.

## Shared

**Series tag:** `STAMPS & STATIONERY` (same on every scene).

**Section labels** (English only, the frame's top-left slot; change only with the section):
- s001–s010: `INTRODUCTION`
- s011–s031: `PART 1 · POSTAGE & PREPAYMENT`
- s032–s049: `PART 2 · CASH, DIGITAL & FRANKING`
- s050–s052: `RECAP · PARTS 1–2`
- s053–s076: `PART 3 · TYPES OF STAMPS & PHILATELY`
- s077–s100: `PART 4 · VALID STAMPS & AFFIXING`
- s101–s102: `RECAP · PARTS 3–4`
- s103–s123: `PART 5 · SALE, STOCK, REFUND, CANCELLATION`
- s124–s143: `PART 6 · POSTAL STATIONERY`
- s144–s146: `RECAP · PARTS 5–6`
- s147–s164: `PART 7 · LETTER CARD`
- s165–s186: `PART 8 · POSTCARD`
- s187–s188: `RECAP · PARTS 7–8`
- s189–s214: `PART 9 · UNPAID & SHORT-PAID ITEMS`
- s215–s232: `PART 10 · REUSE & FICTITIOUS STAMPS`
- s233–s244: `KEY POINTS`
- s245: `CLOSE`

**Screen grid (every scene):** the app's frame draws the section label and series pill in the top 130 px;
content lives in x 100–1820, y 160–1000 (even 100 px side margins). English postal terms 56–96 px bold Inter,
their Hindi beneath at 40–48 px in Noto Sans Devanagari; other lines Hindi only, never under 36 px. Exact
rule text in Georgia on a white document card (#ead9a8 border) with the source beneath in grey. At most five
items on screen; earlier items fade to grey when a card gets busy.

**Library pieces reused** (all flat ink, 3 px rounded outlines, kit colours; the scene writes any lettering):

| id | look | anchors | used for |
|---|---|---|---|
| `postage-stamp` | perforated stamp, red border, cream face, blank value box | base, top | the generic adhesive stamp everywhere |
| `adhesive-stamp` | small plain perforated stamp, 160×190 | base | rows/sheets of stamps, stamp counts |
| `embossed-envelope` | white envelope with round embossed stamp top-right | base, top | embossed envelope, cut-out stamp story, credit sums |
| `registration-envelope` | white envelope, red registration band, printed stamp | base, top | registration envelope ₹22 credit |
| `postcard-blank` | buff postcard, printed stamp, centre divider | base, top | postcard (Part 8, prices) |
| `letter-card` | inland letter card, folded / open sheet with three flaps | base | letter card (Part 7, prices) |
| `aerogramme` | pale blue folded aerogramme, airmail border | base | aerogramme (Parts 6, 7) |
| `address-envelope` | big white envelope front 640×400, dashed stamp box top-right, 4 address rules | base, top | where stamps go, Refused, unpaid letters |
| `envelope-article` | small white envelope with red stripe | base, top | "an item" in flows and intro |
| `franking-machine` | slate desktop franking machine, roller | top, base | Part 2 franking |
| `franking-impression` | red franking mark, date ring, value box | base | franking impression |
| `rupee-cash` | folded notes + ₹ coin | base | cash payment, bulk cash |
| `postage-due-mark` | slate handstamp, blank amount box + initials rule | base | postage-due stamp (Part 9) |
| `non-postage-labels` | grey-green revenue stamp + pale-yellow charity sticker | base | revenue/charity labels (Parts 4, 9) |
| `post-counter-icon` | post-office counter with sign plate and window | top, base | counter payment, counter booking, machine-franked counter |
| `regulations-book` | red hardcover book with blank title panel | base, top | Act / Rules / Regulations |

**New pieces** (made once for the library; the full list of scenes for each piece is in shared.json). Small one-off things (a rakhi envelope, a stamp album, a parcel, the cut-out embossed stamp, a fictitious stamp with a dashed slate outline) are drawn inline in their scenes:

| id | look | size | anchors | scenes |
|---|---|---|---|---|
| `qr-code-stand` | white counter standee on a postal-red foot holding a generic square QR pattern (ink modules, no logo), blank caption strip below the code | 300×420 | base, top | s033, s034, s048, s236 |
| `smartphone-blank` | ink-outlined phone, slate frame, blank white screen for the scene to letter | 260×500 | base, grip | s033, s034, s118 |
| `office-safe` | slate steel safe, front view, door shown slightly open with one shelf inside, round dial, red trim | 520×620 | base, top | s110, s111, s112 |
| `stamp-tin-box` | open wooden-brown/tin box with a lid hinged back, stamp sheets visible inside | 360×240 | base, top | s110, s111 |
| `stamp-sheet` | sheet of 4×5 blank perforated stamps with red borders and cream faces, white margin | 400×480 | base, top, grip | s054, s110–s115, s120 |
| `cancelled-stamp` | the `postage-stamp` look with a grey part-postmark ring and wavy cancel lines across it | 400×400 | base | s097, s098, s215, s216, s231, s244 |
| `perforated-initials-stamp` | stamp with small punched holes forming two letters across its centre, value box still clear | 400×400 | base | s083, s084, s099 |
| `letter-scale` | small postal letter scale: flat cream pan on a slate body with a blank white readout window | 420×360 | base, top (pan) | s134, s135, s159, s194 |
| `packet-stack` | neat stack of brown-paper packets tied with string, front view | 420×360 | base, top | s043, s044, s045, s046 |
| `counter-receipt` | narrow white till receipt with blank grey lines and a torn zigzag bottom edge | 220×420 | base | s035, s080, s118, s119 |

## Continuity

- No character and no set: every scene is the cream page under the fixed frame. Screen direction for flows:
  left → right (sender → Post Office → addressee).
- Prop states hold: a cut-out embossed stamp stays cut out; a cancelled stamp keeps its cancellation; the
  ₹2.50 letter card and the 50 paise postcard keep their printed values in every sum.
- Transitions: `cut` when a scene continues the previous layout; `fade` (0.5) for a new idea inside a part;
  `wipe` (from right, 0.6) only at the start of each Part, recap and Key Points (s011, s032, s050, s053, s077,
  s101, s103, s124, s144, s147, s165, s187, s189, s215, s233, s245).
- Each Part opens on the chapter-title stamp (Component: chapter-title) for its first words, then cuts to the
  teaching card. Each recap uses the envelope recap card (Component: recap-card) held across its scenes.
- A card that a scene leaves mid-sentence is carried over by the next scene (`Continues:`) so nothing
  disappears mid-thought; the next idea arrives with a fade.
## s003
Continues: no
Section label: INTRODUCTION
In: fade (0.5). Wide, static.
Idea: the whole picture in brief: prepayment is required unless exempt; the main ways of paying.
Layout: red Hindi heading "पूरी तस्वीर, छोटे में" y 210. Left: red perforated stamp-edge card x 100–860, y 290–980: "Prepayment" 88 px white, "पूर्व भुगतान" 44 px pale yellow, white Hindi "Postage पहले देना ज़रूरी"; sand chip inside at bottom "जब तक तय छूट न हो". Right: white card x 920–1820, y 290–980, heading "भुगतान के मुख्य तरीके", 2×2 tiles (icon + English + Hindi): `rupee-cash` "Cash / नकद", `smartphone-blank` (screen "₹") "Digital Payment / डिजिटल भुगतान", `postage-stamp` "Stamps / डाक टिकट", `franking-impression` "Franking / फ्रैंकिंग". Last two tiles land in s004.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on screen |
| 1.78 | — | — | stamp card pop with "Prepayment"; Hindi fade 2.3 |
| 3.16 | — | — | "Postage पहले देना ज़रूरी" fade |
| 4.46 | — | — | sand chip fade; highlight "छूट" 5.52 |
| 6.40 | — | — | right card + heading fade |
| 6.70 | — | — | Cash tile pop |
| 7.44 | — | — | Digital tile pop; holds |

## s004
Continues: s003
Section label: INTRODUCTION
In: cut. Wide, static.
Idea: the four ways complete; a stamp counts only if valid and in the right place; stationery carries its postage.
Sub-shots: `#ways` 0.00 (s003 layout), `#valid` 3.68, `#stationery` 8.94.
`#valid`: `address-envelope` scale 1.45, x 160–1100, y 280–860, `postage-stamp` (small) in its stamp box. Right x 1180–1820: Hindi "Stamp तभी गिना जाता है, जब…" 52 px; two rows with green ticks: "Valid / मान्य हो", "सही जगह लगा हो".
`#stationery`: three items, centres x 380 / 960 / 1540, y 300–720: `postcard-blank`, `letter-card` (folded), `embossed-envelope`; labels y 780/835: "Postcard / पोस्टकार्ड", "Letter Card / पत्र कार्ड", "Embossed Envelope / उभरे टिकट वाला लिफ़ाफ़ा".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s003 card; Stamps tile pop |
| 1.14 | — | — | Franking tile pop |
| 3.68 | — | — | cut to #valid: envelope on; stamp place in box |
| 4.06 | — | — | Hindi line fade |
| 6.32 | — | — | "Valid" row fade + tick draw |
| 7.70 | — | — | "सही जगह" row + tick; yellow circle draw round stamp box 8.02 |
| 8.94 | — | — | cut to #stationery: postcard pop + label |
| 10.06 | — | — | letter card pop + label |
| 11.50 | — | — | embossed envelope pop + label; holds |

## s005
Continues: s004
Section label: INTRODUCTION
In: cut. Wide, static.
Idea: these have postage printed on them; then the domestic penalty: nothing paid = double the full rate; short paid = double the shortfall.
Sub-shots: `#stationery` 0.00 (as s004), `#double` 2.82.
`#stationery` adds Hindi heading y 200 "इन पर postage पहले से छपा होता है".
`#double`: top "Domestic Item / देशी डाक वस्तु" (y 200/255). Two white cards x 100–930 and x 990–1820, y 330–960: left caps "कुछ न दिया हो" with `envelope-article` (empty stamp corner), big red "2 × पूरा rate" (96 px); right caps "कम दिया हो" with `envelope-article` + small `adhesive-stamp`, big red "2 × कमी".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three stationery items on screen |
| 0.40 | — | — | Hindi heading fade |
| 1.72 | — | — | highlight (soft band) behind each printed stamp, stagger 0.15 |
| 2.82 | — | — | cut to #double: header fade (Hindi +0.5) |
| 4.48 | — | — | left card slide up with caps + envelope |
| 7.14 | — | — | "2 × पूरा rate" pop |
| 7.86 | — | — | right card slide up |
| 9.76 | — | — | "2 × कमी" pop; holds into s006 |

