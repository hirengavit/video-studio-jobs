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
## s001
Continues: no
Section label: INTRODUCTION
In: cut (video start). Wide, static.
Idea (hook, readable at frame 0): the topic title over the three things it covers: a stamp, a franking impression, a postcard; then the first law it comes from.
Layout: title "Payment of Postage, Stamps & Postal Stationery" 72 px bold ink, centred y 250; Hindi "डाक महसूल का भुगतान, डाक टिकट और डाक लेखन-सामग्री" 48 px red, y 330. Objects row (y 420–760), centres x 420 / 960 / 1500: `postage-stamp` (value box blank), `franking-impression`, `postcard-blank`; labels under each (y 800/845): "Postage Stamp / डाक टिकट", "Franking Impression / फ्रैंकिंग की छाप", "Postcard / पोस्टकार्ड". Bottom (y 880–980, centred): grey "इसके नियम:" + red-outlined chip "Post Office Act 2023 / डाकघर अधिनियम 2023".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title, Hindi, three objects and labels already on screen |
| 1.04 | — | — | highlight words "Payment of Postage" |
| 2.72 | — | — | pulse stamp |
| 3.98 | — | — | pulse postcard (stationery) |
| 5.74 | — | — | fade "इसके नियम:" |
| 6.64 | — | — | chip pop (English); Hindi fade 7.1; holds |

## s002
Continues: no
Section label: INTRODUCTION
In: fade (0.5). Wide, static.
Idea: the three law books, and when the Regulations came into force.
Layout: three `regulations-book` (scale 1.1) standing in a row, centres x 400 / 960 / 1520, base y 700; each title panel lettered only with its year, big ("2023", "2024", "2024"). Under each (y 770 / 825): "Post Office Act 2023 / डाकघर अधिनियम 2023", "Post Office Rules 2024 / डाकघर नियम 2024", "Post Office Regulations 2024 / डाकघर विनियम 2024" (English 48 px bold, Hindi 40 px). Red round postmark (r 130) "16 December 2024 से लागू" stamped over the third book's upper right, y ~300.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Act book + label on screen (carried idea); Rules book slide up from below |
| 0.46 | — | — | Rules label fade (Hindi +0.5) |
| 3.58 | — | — | Regulations book slide up; label fade 4.74, Hindi 5.2 |
| 7.84 | — | — | yellow outline draw round Regulations book + label |
| 9.52 | — | — | postmark stamp; holds |

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

## s006
Continues: s005
Section label: INTRODUCTION
In: cut. Wide, static.
Idea: the 10-part agenda, built item by item across s006–s010 (one card).
Sub-shots: `#double` 0.00 (carried), `#agenda` 0.92.
`#agenda`: red Hindi heading "इस lecture के 10 parts" y 200. Two white columns x 100–940 and x 980–1820, y 250–1000, five rows each (148 px): small red perforated stamp (110×120) with white "01"…"10" 52 px; English 44–46 px bold at x+170; Hindi 36–38 px beneath (fit in 640 px; shorten Hindi, never shrink). Rows: 1 Postage & Prepayment / पूर्व भुगतान, भुगतान के तरीके · 2 Cash, Digital, Franking / नकद, डिजिटल भुगतान, फ्रैंकिंग · 3 Stamp Types & Philately / टिकटों के प्रकार, डाक टिकट संग्रह · 4 Valid & Invalid Stamps / टिकट लगाने का तरीका · 5 Sale, Stock, Refund / बिक्री, stock, refund, booking रद्द · 6 Postal Stationery / उस पर छपा postage · 7 Letter Card / पत्र कार्ड · 8 Postcard / पोस्टकार्ड · 9 Unpaid & Short-paid / बिना या कम postage वाले items · 10 Reuse & Fictitious Stamps / दोबारा इस्तेमाल, नकली टिकट. Current row gets a soft yellow highlight; the row before turns grey.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #double still on screen |
| 0.92 | — | — | cut to #agenda: heading + both columns; ten number stamps pop, stagger 0.05 |
| 2.58 | — | — | row 1 English fade, Hindi 3.1; highlight row 1 |
| 6.32 | — | — | row 1 text color → grey |
| 7.44 | — | — | row 2 English fade, Hindi 7.9; highlight row 2; holds |

## s007
Continues: s006
Section label: INTRODUCTION
In: cut. Wide, static.
Idea: agenda items 3 and 4 land.
Layout: as s006 #agenda.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | agenda with rows 1–2 |
| 0.20 | — | — | row 2 → grey |
| 1.30 | — | — | row 3 English fade, Hindi 1.8; highlight row 3 |
| 4.06 | — | — | row 3 → grey |
| 5.26 | — | — | row 4 English fade, Hindi 5.8; highlight row 4; holds |

## s008
Continues: s007
Section label: INTRODUCTION
In: cut. Wide, static.
Idea: agenda items 5 and 6.
Layout: as s006 #agenda.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | agenda with rows 1–4 |
| 0.20 | — | — | row 4 → grey |
| 1.06 | — | — | row 5 English fade, Hindi 1.6; highlight row 5 |
| 6.32 | — | — | row 5 → grey |
| 6.88 | — | — | row 6 English fade, Hindi 7.4; highlight row 6; holds |

## s009
Continues: s008
Section label: INTRODUCTION
In: cut. Wide, static.
Idea: agenda items 7, 8, 9.
Layout: as s006 #agenda.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | agenda with rows 1–6 |
| 0.20 | — | — | row 6 → grey |
| 1.10 | — | — | row 7 fade (Hindi 1.6); highlight row 7 |
| 2.34 | — | — | row 7 → grey |
| 3.44 | — | — | row 8 fade (Hindi 3.9); highlight row 8 |
| 4.54 | — | — | row 8 → grey |
| 5.54 | — | — | row 9 fade (Hindi 6.0); highlight row 9; holds |

## s010
Continues: s009
Section label: INTRODUCTION
In: cut. Wide, static.
Idea: the last item; the whole plan holds complete.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | agenda with rows 1–9; row 9 → grey |
| 1.00 | — | — | row 10 English fade, Hindi 1.5; highlight row 10 |
| 3.40 | — | — | underline words "Fictitious" in row 10; all ten hold to the cut |

## s011
Continues: no
Section label: PART 1 · POSTAGE & PREPAYMENT
In: wipe (from right, 0.6). Wide, static.
Idea: Part 1 opens; postage = the charge for sending an item through the Post Office, plus charges of any extra service the sender picks.
Sub-shots: `#title` 0.00, `#postage` 3.20.
`#title`: Component: chapter-title: kicker "PART 1 · भाग 1", English "Postage & Prepayment", Hindi "डाक महसूल, पूर्व भुगतान और भुगतान के तरीके", progress "Part 1 of 10 · भाग 1 / 10"; stamp icon = envelope, value "01".
`#postage`: Component: key-term, moulded (drop exam pill and chain): red stamp-edge card x 100–760, y 200–700 "Postage" 96 px / "डाक महसूल"; white meaning card x 820–1820, y 200–700: "Post Office से कोई item भेजने का charge" with `envelope-article` → `rupee-cash` icons. Sand panel x 100–1820, y 760–980: "Postage" + "Extra service के charges", plus sign between, grey "Sender चुने तो".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title builds (kicker, title, underline draw, stamp icon draw) |
| 3.20 | — | — | cut to #postage: term card on |
| 3.62 | — | — | meaning line fade + icons pop |
| 4.44 | — | — | sand panel slide up: "Postage" chip + grey "Sender चुने तो" |
| 5.92 | — | — | "+ Extra service के charges" chip pop |
| 7.98 | — | — | highlight that chip; holds |

## s012
Continues: no
Section label: PART 1 · POSTAGE & PREPAYMENT
In: fade (0.5). Wide, static.
Idea: prepayment = paying before the item is sent; then the postage stamp is proof that the money is paid.
Sub-shots: `#prepay` 0.00, `#proof` 5.25.
`#prepay`: top term "Prepayment" 88 px / "पूर्व भुगतान" (y 200–330). Below, a left→right line of two steps y 450–900: left "1 · पहले" `rupee-cash` + "charge दिया"; red arrow; right "2 · फिर" `envelope-article` + "item भेजा".
`#proof`: big `postage-stamp` x 160–720, y 260–900; right x 800–1820: "Postage Stamp / डाक टिकट" 80/46 px; white card under it heading "सबूत" with line "postal service का पैसा दिया जा चुका है" (the line's last words finish in s013).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Prepayment term on screen |
| 1.34 | — | — | right step (envelope, "item भेजा") pop |
| 2.82 | — | — | arrow draw left→right; left step "1 · पहले" fade |
| 3.48 | — | — | rupee-cash pop + "charge दिया"; holds |
| 5.25 | — | — | cut to #proof: stamp draw |
| 5.91 | — | — | term fade, Hindi +0.5 |
| 8.25 | — | — | "सबूत" card slide up |
| 9.11 | — | — | "postal service का पैसा" fade |

## s013
Continues: s012
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: a stamp is more than a picture or label; then Section 4 of the Act opens.
Sub-shots: `#proof` 0.00 (as s012), `#sec4` 6.66.
`#proof` adds under the card two grey chips "सिर्फ एक तस्वीर", "सिर्फ एक label".
`#sec4`: Component: rule-card, moulded: left red perforated badge x 100–560, y 180–1000: "SECTION · धारा", huge "4", "Post Office Act 2023" white, "डाकघर अधिनियम 2023" pale yellow. Right white card x 620–1820, y 180–1000, red heading "Postage stamp क्या हो सकता है · सार"; no Georgia text (narration paraphrases), body built in s014–s015; drop chips and date postmark.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #proof; "दिया जा चुका है" completes (fade) |
| 0.66 | — | — | green tick draw beside the line |
| 3.96 | — | — | "तस्वीर" chip pop |
| 5.46 | — | — | "label" chip pop |
| 5.80 | — | — | strike both chips (slate) |
| 6.66 | — | — | cut to #sec4: badge with Act name on |
| 9.66 | — | — | "4" pop |
| 10.06 | — | — | right card + heading fade |

## s014
Continues: s013
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: Section 4 (Hindi gist): physical or digital; affixed, printed or embossed.
Layout: in the right card: row 1 (y 290–460) two chips "Physical / भौतिक", "Digital / डिजिटल" at x 660–1400; row 2 (y 490–720) three tiles with small icons: `adhesive-stamp` "चिपका हुआ", `postcard-blank` (scale 0.4) "छपा हुआ", `embossed-envelope` (scale 0.4) "उभरा हुआ".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rule card from s013 |
| 1.02 | — | — | "Physical" chip pop (Hindi +0.5) |
| 3.14 | — | — | "Digital" chip pop (Hindi +0.5) |
| 4.66 | — | — | "चिपका हुआ" tile pop |
| 6.12 | — | — | "छपा हुआ" tile pop |
| 8.08 | — | — | "उभरा हुआ" tile pop; holds |

## s015
Continues: s014
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: more forms (made into the item, impressed, shown some other way); all of these are stamps. Then the term postal stationery.
Sub-shots: `#sec4` 0.00, `#stationery-term` 10.91.
`#sec4` row 3 (y 750–960): tiles "item में बना हुआ" (inline: envelope outline with a stamp drawn into it), `franking-impression` (scale 0.35) "छाप", "किसी और तरह दिखे". Green round postmark (r 120) "ये सब stamp ही" at (1640, 375).
`#stationery-term`: Component: key-term, moulded: red stamp-edge card x 100–820, y 200–620 "Postal Stationery" / "डाक लेखन-सामग्री"; white meaning card x 880–1820, y 200–620 (filled in s016); row below (y 660–980) for the three items in s016.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rule card, rows 1–2 |
| 0.52 | — | — | row 2 tiles color → grey |
| 1.36 | — | — | "item में बना हुआ" tile pop |
| 3.46 | — | — | "छाप" tile pop |
| 6.54 | — | — | "किसी और तरह दिखे" tile pop |
| 9.04 | — | — | green postmark stamp |
| 10.91 | — | — | cut to #stationery-term: term card pop (Hindi +0.5) |

## s016
Continues: s015
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: stationery issued by the Post Office (envelopes, letter cards, postcards) carrying a printed stamp or words that the charge is prepaid.
Layout: as s015 #stationery-term. Meaning card: line 1 "Post Office की जारी की हुई stationery"; line 2 (grey) "stamp छपा, या लिखा हो कि charge पहले दिया जा चुका". Items row, centres x 380 / 960 / 1540: `embossed-envelope`, `letter-card`, `postcard-blank` (scale ~0.8) with labels "Envelope / लिफ़ाफ़ा", "Letter Card / पत्र कार्ड", "Postcard / पोस्टकार्ड".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | term card on screen |
| 1.46 | — | — | meaning line 1 fade |
| 3.72 | — | — | envelope pop + label |
| 4.92 | — | — | letter card pop + label |
| 6.46 | — | — | postcard pop + label |
| 8.34 | — | — | highlight (soft band) behind the three printed stamps, stagger 0.15; line 2 first half fade |
| 10.68 | — | — | line 2 second half "या लिखा हो…" fade |

## s017
Continues: s016
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: the sentence ends; then the question: who issues stamps?
Sub-shots: `#stationery-term` 0.00, `#who` 1.60.
`#who`: red Hindi question "Stamp जारी कौन करता है?" 76 px, centred y 230; `postage-stamp` centred, x 850–1070, y 300–520, with a big red "?" lettered in its value box; lower band y 560–980 left empty for s018's cards (only 1.9 s here).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s016 layout |
| 0.32 | — | — | green tick draw beside line 2 |
| 1.60 | — | — | cut to #who: stamp on |
| 1.96 | — | — | question words (gap 0.12); "?" pop at 3.22 |

## s018
Continues: s017
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: the exclusive privilege to issue stamps belongs to the Post Office; the Director General may make regulations for supply and sale.
Layout: s017's question (y 230) and stamp (y 300–520) hold; two cards slide up into the free lower band y 560–980: left x 100–1000 red stamp-edge "Exclusive Privilege / अनन्य विशेषाधिकार", white Hindi "यानी अकेला अधिकार", red round postmark "Post Office" at its right; right x 1060–1820 white card "Supply और बिक्री के Regulations" → "Director General / महानिदेशक" (lands in s019).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | question + stamp |
| 2.28 | — | — | left card slide up, "Exclusive Privilege" (Hindi +0.5) |
| 4.52 | — | — | "यानी अकेला अधिकार" fade |
| 6.20 | — | — | "Post Office" postmark stamp |
| 7.80 | — | — | right card slide up |
| 9.44 | — | — | "Supply और बिक्री के Regulations" fade |

## s019
Continues: s018
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: DG may make those regulations; stamps are issued by the Central Government or the DG, as applicable: definitive, commemorative, special and all related material.
Sub-shots: `#who` 0.00, `#issuers` 2.68.
`#issuers`: top row (y 190–470): two white cards "Central Government / केंद्र सरकार" x 260–880, "Director General / महानिदेशक" x 1040–1660, grey "या" between, grey line under "जैसा लागू हो". Bottom row (y 540–860): three cards each with `adhesive-stamp`: "Definitive / निश्चित डाक टिकट", "Commemorative / स्मारक डाक टिकट", "Special / विशेष डाक टिकट"; sand strip y 890–990 "सब तरह के stamps + उनसे जुड़ा material".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "Director General / महानिदेशक" fade in right card |
| 2.68 | — | — | cut to #issuers |
| 4.22 | — | — | Central Government card pop |
| 5.50 | — | — | "या" fade; DG card pop |
| 8.10 | — | — | "जैसा लागू हो" fade |
| 9.36 | — | — | top cards → grey; Definitive pop |
| 10.66 | — | — | Commemorative pop |
| 12.02 | — | — | Special pop |
| 13.18 | — | — | sand strip slide up; holds |

## s020
Continues: no
Section label: PART 1 · POSTAGE & PREPAYMENT
In: fade (0.5). Wide, static.
Idea: permission to sell stamps ≠ the right to issue them.
Component: compare-cards, moulded: Hindi heading only "एक बात अलग रखिए" (y 210); two cards x 100–900 and x 1020–1820, y 310–900, no fact rows: left (yellow band) `post-counter-icon` + "Stamp बेचने की permission"; right (red band) red stamp-edge seal "Post Office" + "Stamp जारी करने का अधिकार" + grey "Exclusive privilege"; centre dark disc "≠" instead of VS; takeaway y 940 "दो अलग चीज़ें".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on screen |
| 2.68 | — | — | left card slide from left; text fade 3.74 |
| 5.02 | — | — | right card slide from right; text fade 6.50 |
| 7.04 | — | — | "≠" disc pop |
| 8.02 | — | — | takeaway fade + underline "अलग"; holds |

## s021
Continues: no
Section label: PART 1 · POSTAGE & PREPAYMENT
In: fade (0.5). Wide, static.
Idea: the prepayment rule, Regulation 5: postage and other sums due on the item must be paid first.
Component: rule-card, moulded: badge x 100–560, y 180–1000: "REGULATION · विनियम", huge "5", "Post Office Regulations 2024 / डाकघर विनियम 2024". Right white card x 620–1820: red heading "Prepayment का नियम"; Hindi line (sans, labelled "सार") "postage और item पर देय बाकी रकम पहले देना ज़रूरी" (y 300–420); rows 2–3 kept free for s022. Drop chips and postmark.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | right card + heading "Prepayment का नियम" on screen |
| 1.92 | — | — | badge slide from left; "5" pop at 2.80 |
| 4.08 | — | — | gist line fade with "सार" tag |
| 7.20 | — | — | highlight words "पहले देना ज़रूरी"; holds |

## s022
Continues: s021
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: the only exemptions are those the Regulations give; an unpaid item found in the post comes under postage-due recovery rules.
Layout: in the right card: row 2 sand chip (y 470–620) "छूट: सिर्फ जहाँ Regulations खुद दें"; row 3 (y 660–960) `postage-due-mark` (scale 0.6) left + "Unpaid item डाक में मिले" → "Postage Due / देय डाक महसूल" "वसूली के नियम".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rule card; row 2 chip fade |
| 0.42 | — | — | highlight word "सिर्फ" |
| 4.64 | — | — | row 1 → grey; postage-due-mark draw + "Unpaid item डाक में मिले" fade |
| 7.76 | — | — | "Postage Due" fade (Hindi +0.5) |
| 9.30 | — | — | "वसूली के नियम" fade; holds |

## s023
Continues: no
Section label: PART 1 · POSTAGE & PREPAYMENT
In: fade (0.5). Wide, static.
Idea: exam point: the recovery rule is not a general exemption for unpaid posting; a fully prepaid article goes by the earliest mail.
Sub-shots: `#trap` 0.00, `#prepaid` 6.76.
`#trap`: Component: exam-trap, moulded: banner y 180–380 "EXAM TRAP · परीक्षा का जाल", white line "फर्क याद रखिए"; two cards y 420–960, no stamps or remember bar: left "Postage due वसूली का नियम" / "unpaid item मिले तो वसूली"; right (yellow border) "Unpaid posting की आम छूट" with slate strike and slate cross.
`#prepaid`: left `envelope-article` with small `postage-stamp` + green tick, label "पूरा prepaid article" (x 140–700, y 300–800); red arrow x 760–1180; right chips "जल्दी से जल्दी वाली mail" then "Deliver / वितरण" (x 1240–1820).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner + "फर्क याद रखिए" |
| 1.94 | — | — | left card slide up |
| 3.50 | — | — | right card slide up |
| 5.94 | — | — | strike right card; slate cross draw |
| 6.76 | — | — | cut to #prepaid: envelope on |
| 8.60 | — | — | green tick draw; label fade |
| 11.28 | — | — | "जल्दी से जल्दी वाली mail" chip pop |

## s024
Continues: s023
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: the Post Office tries to send and deliver it; then one exemption: Book Now Pay Later (BNPL).
Sub-shots: `#prepaid` 0.00, `#bnpl` 4.49.
`#bnpl`: grey Hindi kicker "छूट का एक उदाहरण" y 200; red stamp-edge card x 100–760, y 260–980: "BNPL" 150 px white, "Book Now Pay Later" 52 px, "अभी book करें, बाद में भुगतान" pale yellow. Right x 820–1820 left free for s025's steps.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #prepaid |
| 0.20 | — | — | arrow draw |
| 1.72 | — | — | "Deliver / वितरण" chip pop |
| 2.92 | — | — | grey "कोशिश करता है" fade under chips |
| 4.49 | — | — | cut to #bnpl: kicker + card |
| 5.97 | — | — | "Book Now Pay Later" words (gap 0.25); Hindi 7.2 |
| 7.87 | — | — | "BNPL" pop; holds |

## s025
Continues: s024
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: BNPL is an authorised arrangement: an eligible customer books items on set conditions and pays the charges later.
Component: step-list, moulded: right x 820–1820, y 260–980: green pill "Authorised / अधिकृत व्यवस्था" on top, then three white step cards (red number badge, Hindi line): 1 "Eligible customer" / "योग्य ग्राहक"; 2 "तय शर्तों पर items book"; 3 (cream, green tick) "Postal charges बाद में".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | BNPL card |
| 0.70 | — | — | "Authorised" pill pop (Hindi +0.5) |
| 3.16 | — | — | step 1 slide from right |
| 5.30 | — | — | step 2 slide from right |
| 7.36 | — | — | step 3 slide from right; highlight "बाद में" 8.26; holds |

## s026
Continues: no
Section label: PART 1 · POSTAGE & PREPAYMENT
In: fade (0.5). Wide, static.
Idea: writing "BNPL" on an item does not make it exempt; then Rule 9: five ways to pay for mail services.
Sub-shots: `#scrawl` 0.00, `#rule9` 6.04.
`#scrawl`: centred `address-envelope` (scale 1.5, y 240–840) with "BNPL" handwritten (Caveat, 90 px) on it; Hindi line y 920 "Sender ने बस लिख दिया"; slate cross + "छूट नहीं" right of envelope.
`#rule9`: left white card x 100–1200, y 180–1000: small red perforated badge "RULE · नियम 9", "Post Office Rules 2024", heading "Mail Services / डाक सेवाएँ · भुगतान के 5 तरीके"; five empty numbered rows (y 340–990, 130 each). Right x 1300–1820 kept free (s028).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope on screen |
| 1.78 | — | — | "BNPL" write; Hindi line fade 2.7 |
| 4.72 | — | — | slate cross draw + "छूट नहीं" |
| 6.04 | — | — | cut to #rule9: card + heading |
| 9.12 | — | — | badge stamp |
| 9.78 | — | — | five number badges pop, stagger 0.1; holds |

## s027
Continues: s026
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: ways 1–3: cash, digital payment, postage stamps (postage printed on valid postal stationery counts here).
Layout: rows of #rule9: icon at x 260, English 52 px bold, Hindi 38 px: 1 `rupee-cash` "Cash / नकद"; 2 `smartphone-blank` (screen "₹") "Digital Payment / डिजिटल भुगतान"; 3 `postage-stamp` "Postage Stamps / डाक टिकट" + small `postcard-blank` and grey line "+ valid postal stationery पर छपा postage".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Rule 9 card, five empty rows |
| 0.90 | — | — | row 1 fade + icon pop |
| 2.50 | — | — | row 2 fade + icon pop |
| 4.78 | — | — | row 3 fade + icon pop |
| 6.28 | — | — | stationery sub-line + postcard pop; highlight "valid" 6.4; holds |

## s028
Continues: s027
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: ways 4–5: franking machine impression, any other way the Regulations give; other postal services follow a separate rule.
Layout: row 4 `franking-impression` "Franking Machine Impression / फ्रैंकिंग मशीन की छाप"; row 5 "Regulations में बताया कोई और तरीका". Right sand panel x 1300–1820, y 180–1000: "Other Postal Services / अन्य डाक सेवाएँ", line "payment का नियम अलग".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–3 |
| 1.02 | — | — | rows 1–3 → grey; row 4 fade + icon pop |
| 4.34 | — | — | row 5 fade |
| 7.26 | — | — | right panel slide from right; heading fade |
| 9.76 | — | — | "payment का नियम अलग" fade; holds |

## s029
Continues: s028
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: other services use the ways the Regulations name; keep the mail list and other services apart.
Layout: right panel adds `regulations-book` (scale 0.6) + "Regulations में बताए तरीके".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Rule 9 card + right panel |
| 2.42 | — | — | book pop + "Regulations में बताए तरीके" fade |
| 4.42 | — | — | rows → normal ink; highlight left heading "Mail Services" |
| 7.10 | — | — | highlight right heading "Other Postal Services"; holds |

## s030
Continues: s029
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: don't mix them; then the exam angle: exclusive privilege = Post Office; stamp can be physical or digital.
Sub-shots: `#rule9` 0.00, `#exam` 2.94.
`#rule9` adds dark disc "≠" at (1250, 590) between card and panel.
`#exam`: Component: recap-card, moulded: envelope card x 160–1760, y 180–990, flap "EXAM ANGLE · परीक्षा की नज़र", seal "3"; three rows: "Exclusive Privilege / अनन्य विशेषाधिकार" pill "Post Office"; "Postage Stamp / डाक टिकट" pill "Physical + Digital"; "Prepayment / पूर्व भुगतान" pill "ज़रूरी" + grey line "जब तक छूट लागू न हो" (s031). Green tick as each is said.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Rule 9 card + panel |
| 1.74 | — | — | "≠" disc pop |
| 2.94 | — | — | cut to #exam: envelope + flap |
| 4.52 | — | — | row 1 term fade |
| 7.70 | — | — | pill "Post Office" pop; tick draw 8.3 |
| 9.74 | — | — | row 2 term fade |
| 11.90 | — | — | pill "Physical + Digital" pop; tick 12.3 |

## s031
Continues: s030
Section label: PART 1 · POSTAGE & PREPAYMENT
In: cut. Wide, static.
Idea: the last exam point: prepayment is required unless an exemption applies.
Layout: as s030 #exam.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | exam card, rows 1–2 ticked; row 3 term fade |
| 0.40 | — | — | pill "ज़रूरी" pop |
| 2.28 | — | — | grey line under the term "जब तक छूट लागू न हो" fade; highlight "छूट" |
| 3.30 | — | — | tick draw; holds to cut |
## s032
Continues: no
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: wipe (from right, 0.6). Wide, static.
Idea: Part 2 opens; then at the counter both cash and digital payment are allowed, and the amount must be full: postage + charges of chosen services.
Sub-shots: `#title` 0.00, `#pay` 2.40.
`#title` — Component: chapter-title: kicker `PART 2 · भाग 2`, English "Cash, Digital Payment & Franking", Hindi "नकद, डिजिटल भुगतान और franking", progress `Part 2 of 10 · भाग 2 / 10`; stamp icon = rupee note drawn inline, value `02`.
`#pay` — left half (x 140–900): `post-counter-icon` top (y 180–470), below it two tiles side by side: `rupee-cash` + "Cash / नकद", `smartphone-blank` (screen "₹") + "Digital payment / डिजिटल भुगतान"; green pill "दोनों allowed · मान्य" (y 880). Right half (x 980–1800): white card "पूरी रकम" = "Postage / डाक महसूल" + "Services charges / चुनी गई सेवाओं का शुल्क".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title builds (kicker, title, stamp draw) |
| 2.40 | — | — | cut to #pay: counter, both tiles pop (stagger 0.2) |
| 4.26 | — | — | green "allowed" pill pop |
| 7.06 | — | — | "पूरी रकम" card slide from right |
| 9.54 | — | — | "Postage" term fade, Hindi +0.5 |
| 11.46 | — | — | "+ Services charges" fade, Hindi +0.5; holds |

## s033
Continues: no
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: fade (0.5). Wide, static.
Idea: QR code payment is a kind of digital payment; in Advanced Postal Technology the booking amount is taken by dynamic QR.
Sub-shots: `#def` 0.00, `#apt` 4.62.
`#def` — `qr-code-stand` left (x 220–520, y 300–720). Right: big red-outlined box "Digital payment / डिजिटल भुगतान" (x 700–1780, y 220–900) holding a smaller yellow-edged chip "QR code payment / QR कोड से भुगतान"; grey line under chip "digital payment का ही एक रूप".
`#apt` — top: term "Advanced Postal Technology / उन्नत डाक प्रौद्योगिकी (APT)" (y 180–330). Below, left→right: `envelope-article` "article की booking" (x 200–600) → arrow → `qr-code-stand` (x 820–1120) with caption strip "dynamic QR" → (space right kept for s034).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | qr-code-stand draw |
| 0.30 | — | — | "QR code payment" chip pop, Hindi +0.5 |
| 1.58 | — | — | outer "Digital payment" box draw round it, Hindi +0.5 |
| 3.24 | — | — | grey "का ही एक रूप" fade |
| 4.62 | — | — | cut to #apt: APT term fade, Hindi +0.5 |
| 7.62 | — | — | envelope-article pop, label fade |
| 8.68 | — | — | arrow draw, qr-code-stand pop, "dynamic QR" caption type |

## s034
Continues: s033
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static (same #apt layout).
Idea: scanning only starts the payment; the postal transaction must record a successful payment.
Layout: `smartphone-blank` at x 1300–1560, y 420–920 beside the stand. Under the row, a two-step strip (y 800–980, x 140–1180): step 1 grey "QR scan → payment सिर्फ शुरू"; step 2 white card green-edged "Postal transaction में successful payment दर्ज" with green tick.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #apt as left by s033 |
| 1.22 | — | — | smartphone slide from right; screen "scan" text fade |
| 2.72 | — | — | step 1 fade; "सिर्फ शुरू" underline at 3.52 |
| 4.86 | — | — | step 2 card slide up; "Postal transaction" bold |
| 6.22 | — | — | "successful payment" highlight; green tick draw at 7.24; holds |

## s035
Continues: no
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: fade (0.5). Wide, static.
Idea: cash, digital payment and stamps are separate ways to pay a charge; paying at the counter through an authorised transaction.
Sub-shots: `#ways` 0.00, `#counter` 6.44.
`#ways` — three equal white tiles in a row (x 140–1780, y 260–780, gaps 60): `rupee-cash` "Cash / नकद", `smartphone-blank` "Digital payment / डिजिटल भुगतान", `postage-stamp` "Stamps / डाक टिकट"; grey line beneath "charge देने के अलग-अलग तरीके" (y 880).
`#counter` — `post-counter-icon` left (x 140–620, y 260–760), `counter-receipt` centre (x 820–1040) labelled "authorised transaction", `address-envelope` scaled 0.75 right (x 1260–1740, y 300–600), stamp box empty.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Cash tile pop with label |
| 0.62 | — | — | Digital payment tile pop |
| 2.46 | — | — | Stamps tile pop |
| 4.88 | — | — | grey "अलग-अलग तरीके" line fade; dividers draw |
| 6.44 | — | — | cut to #counter: counter draw |
| 7.60 | — | — | receipt slide up, "authorised transaction" fade |
| 8.70 | — | — | arrow counter→envelope draw, envelope pop |

## s036
Continues: s035
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static.
Idea: paid at the counter → no stamps needed; payment method and proof on the item are different things. Then franking: the machine prints an authorised impression.
Sub-shots: continue `#counter`; `#frank` 8.20.
`#counter` adds: a ghost slate `postage-stamp` in the envelope's stamp box, struck with "stamps ज़रूरी नहीं"; labels under receipt "Payment का तरीका / भुगतान का तरीका" and under envelope "item पर सबूत", "≠ अलग बातें" pill between (y 860).
`#frank` — Photo: franking-machine-photo-cutout, paper cut-out, white border, 1° tilt, left (x 140–900, y 220–820), credit beneath. Right: term "Franking machine / फ्रैंकिंग मशीन" (y 220), `franking-impression` large (x 1080–1700, y 420–820), label "authorised impression / अधिकृत छाप".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #counter as s035 left it |
| 1.10 | — | — | ghost stamp fade, strike at 2.74, "ज़रूरी नहीं" fade |
| 3.44 | — | — | "Payment का तरीका" label fade |
| 6.22 | — | — | "item पर सबूत" label fade; "अलग" pill pop at 6.70 |
| 8.20 | — | — | cut to #frank: photo fade |
| 9.22 | — | — | "Franking machine" term pop, Hindi +0.5 |
| 13.06 | — | — | franking-impression stamp; label fade at 13.30 |

## s037
Continues: s036
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide; slow push-in toward the impression (zoom 1.08) 5.74–7.6, stays to the cut (s038 fades fresh).
Idea: the impression shows postage or postal fee is paid; its value = stamps you no longer need.
Layout: #frank kept. Under the impression (y 860–980, x 980–1800): line "Postage या postal fee → भुगतान हो चुका" with green tick. The impression's value box gets a yellow ring; beside the photo bottom (x 140–900, y 860–980): "जितनी value, उतने stamps की ज़रूरत नहीं".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #frank as s036 left it |
| 1.74 | — | — | "Postage" term fade; "postal fee" fade at 3.18 |
| 4.56 | — | — | "भुगतान हो चुका" fade, green tick draw |
| 5.74 | push-in on impression | — | "Valid" pill pop above impression |
| 7.28 | — | — | value box highlight (yellow ring draw) |
| 8.90 | — | — | "उतने stamps की ज़रूरत नहीं" fade; holds |

## s038
Continues: no
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: fade (0.5). Wide, static.
Idea: three conditions for a valid impression; unauthorised impression ≠ prepayment.
Layout: left white card (x 120–1000, y 200–960) heading "Impression" + three rows with green ticks: "authorised हो", "साफ पढ़ी जाए", "कोई बदलाव न हो". Right slate panel (x 1080–1800, y 200–960): `franking-impression` greyed, label "Unauthorised impression / अनधिकृत छाप", slate cross; beneath "Prepayment / पूर्व भुगतान" struck, "नहीं माना जाता".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card with "Impression" heading |
| 0.60 | — | — | row 1 fade, tick draw at 1.52 |
| 2.26 | — | — | row 2 fade, tick at 3.14 |
| 4.40 | — | — | row 3 fade, tick at 5.40 |
| 6.14 | — | — | right panel slide from right, impression fade (slate), term + Hindi +0.5 |
| 8.10 | — | — | "Prepayment" fade, strike at 9.38, slate cross draw |
| 9.76 | — | — | "नहीं माना जाता" fade; holds |

## s039
Continues: no
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: fade (0.5). Wide, static.
Idea: where and how stamps go — the same rules apply to franking; then India Post Parcel is introduced.
Sub-shots: `#same` 0.00, `#parcel` 5.94.
`#same` — two `address-envelope` (scale 0.75) side by side (left x 200–680, right x 1240–1720, y 300–600): left with `postage-stamp` in its stamp box, right with `franking-impression` in the same place; "=" pill between "वही नियम"; grey line under: "कहाँ और कैसे लगें" (y 820).
`#parcel` — centred term card (x 460–1460, y 300–700): inline ink parcel icon (brown box, string), "India Post Parcel / इंडिया पोस्ट पार्सल"; grey line beneath "एक बात साफ लिखी है".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left envelope with stamp shown |
| 0.66 | — | — | "कहाँ और कैसे लगें" fade |
| 2.66 | — | — | "= वही नियम" pop |
| 3.92 | — | — | right envelope pop; impression stamp in box at 4.30 |
| 5.94 | — | — | cut to #parcel: card + icon draw, term pop, Hindi +0.5 |
| 8.12 | — | — | grey line fade; holds |

## s040
Continues: s039
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static.
Idea: franking machine models of vendors approved by the Director General → their impressions are a recognised prepayment method (for India Post Parcel).
Layout: the #parcel card moves up and shrinks to a header (y 170–300). Chain of three white cards (y 380–700, x 140–1780): "Director General / महानिदेशक" → "approve किए vendors" → `franking-machine` piece + "franking machine models". Green band (y 800–960): "उनकी impressions = prepayment का माना हुआ तरीका" (सार, grey tag).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel card move by [0,-280], scale down (header) |
| 0.30 | — | — | card 1 slide, term + Hindi +0.5 |
| 1.64 | — | — | arrow draw, card 2 pop |
| 2.30 | — | — | arrow draw, card 3 + franking-machine pop; "models" at 3.44 |
| 4.62 | — | — | green band slide up |
| 5.90 | — | — | "prepayment" highlight; holds |

## s041
Continues: no
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: fade (0.5). Wide, static.
Idea: hand a machine-franked article in at the fixed counter; dropped in a letter box it counts as unpaid.
Layout: left green-edged panel (x 120–920): `envelope-article` with small `franking-impression`, term "Machine-franked article / मशीन से फ्रैंक की गई वस्तु", arrow → `post-counter-icon`, green tick "तय counter पर दें". Right slate panel (x 1000–1800): Photo: india-post-letter-box-cutout (cut-out, white border, credit), caption "Post Office या mail van का letter box"; slate cross; "Unpaid / बिना भुगतान" in slate.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope with impression shown, term pop, Hindi +0.5 |
| 1.98 | — | — | arrow draw, counter pop |
| 2.78 | — | — | green tick draw, "तय counter पर दें" fade |
| 3.88 | — | — | right panel, letter-box photo fade |
| 4.94 | — | — | caption fade |
| 6.74 | — | — | dashed arrow envelope→box draw |
| 7.98 | — | — | "Unpaid" stamp (slate), cross draw; holds |

## s042
Continues: no
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: fade (0.5). Wide, static.
Idea: special bulk cash facilities, not part of the ordinary payment list; the Head of Circle authorises chosen offices.
Sub-shots: `#bulk` 0.00, `#auth` 7.24.
`#bulk` — term card left (x 140–900, y 260–760): `rupee-cash` + "Bulk cash facilities / थोक नकद सुविधाएँ". Right grey list card (x 1000–1780): "आम payment के तरीके" with Cash, Digital, Stamps, Franking in grey; under it slate note "bulk facilities इस list में नहीं".
`#auth` — three cards left→right (y 360–720): "Head of Circle / सर्किल प्रमुख" → "कुछ तय offices" → "cash में postage लेने का authority".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | term card with rupee-cash; term pop at 0.16, Hindi +0.5 |
| 2.39 | — | — | "खास" chip (yellow) pop |
| 4.16 | — | — | grey list card fade |
| 5.83 | — | — | slate note fade, underline "नहीं" at 6.07 |
| 7.24 | — | — | cut to #auth: card 1 pop, Hindi +0.5 |
| 9.27 | — | — | arrow draw, card 2 pop |
| 11.88 | — | — | arrow draw, card 3 pop ("authority" lands in s043) |

## s043
Continues: s042
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static.
Idea: facility 1 — big posting of unregistered packets; big cities at least 500 at a time.
Sub-shots: continue `#auth`; `#two` 1.89 (rule card held to s046's end).
`#two` — small heading strip "Bulk cash facilities" (y 170–230). Left card (x 100–940, y 260–840): red header "1 · Unregistered packets / बिना रजिस्ट्री के packets", `packet-stack` scaled 0.6, row "बड़े शहर: एक बार में ≥ 500 packets". Right card frame (x 980–1820) drawn empty-outline, header waits.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #auth as left by s042 |
| 0.27 | — | — | "authority" highlight |
| 1.89 | — | — | cut to #two: left card + header "1" draw |
| 2.74 | — | — | "Unregistered packets" pop, Hindi +0.5 |
| 4.25 | — | — | packet-stack pop, "बड़ी posting" fade |
| 5.54 | — | — | row "बड़े शहर" fade |
| 8.71 | — | — | "500" count from 0 in a perforated stamp chip; holds |

## s044
Continues: s043
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static.
Idea: small cities at least 250; facility 2 — chosen Gazetted and Higher Selection Grade post offices.
Layout: #two. Left card gains row "छोटे शहर: ≥ 250". Right card (x 980–1820) gets red header "2 · Gazetted & HSG post offices" with Hindi "राजपत्रित और उच्च चयन ग्रेड डाकघर", grey "कुछ चुने हुए".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #two as s043 left it; row "छोटे शहर" fade |
| 1.69 | — | — | "250" count in stamp chip |
| 2.69 | — | — | right card header "2" draw |
| 3.99 | — | — | "कुछ चुने हुए" fade |
| 4.65 | — | — | "Gazetted" pop, Hindi +0.5 |
| 6.00 | — | — | "Higher Selection Grade post offices" pop, Hindi +0.5; left card fades to grey at 7.9 |

## s045
Continues: s044
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static.
Idea: there, from firms or business establishments, at least 500 articles at a time: closed-cover letters, inland letter cards (and postcards next).
Layout: right card rows: "firms / business establishments से", "एक बार में ≥ 500 articles" stamp chip, then a row of chips "closed covers वाले letters", `letter-card` icon + "Inland letter cards / अंतर्देशीय पत्र कार्ड".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #two as s044 left it |
| 0.41 | — | — | "firms" fade; "business establishments" at 1.59 |
| 5.18 | — | — | "500" count in stamp chip, "articles" at 5.94 |
| 7.56 | — | — | chip "closed covers वाले letters" pop |
| 9.88 | — | — | letter-card chip pop, term + Hindi +0.5 |

## s046
Continues: s045
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static.
Idea: postcards complete the list; the exam trap — these minimums apply only to the set bulk facilities, not to ordinary counter payment.
Layout: right card adds `postcard-blank` chip "Postcards / पोस्टकार्ड". Bottom band (y 870–990, full width): "ये minimum सिर्फ तय bulk facilities के लिए" with the three stamp chips (500, 250, 500) re-lit yellow; then "आम counter payment: ये शर्त नहीं" with slate cross.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | postcard chip pop, term + Hindi +0.5 |
| 1.24 | — | — | left card back to full colour |
| 4.30 | — | — | three number chips pulse in turn (stagger 0.3) |
| 4.64 | — | — | band slide up, "सिर्फ" underline at 4.64 |
| 6.26 | — | — | "bulk facilities" highlight |
| 8.36 | — | — | "आम counter payment" line fade beside |
| 10.22 | — | — | slate cross draw on "शर्त"; holds |

## s047
Continues: no
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: fade (0.5). Wide, static.
Idea: India Post Parcels are accountable items; from 1 October 2025 registration is a value-added service for Speed Post documents and parcels.
Layout: left card (x 120–860, y 220–800): inline parcel icon, "India Post Parcel / इंडिया पोस्ट पार्सल", below green-edged pill "Accountable items / जवाबदेह डाक वस्तुएँ". Right card (x 940–1800, y 220–800): grey round postmark "1 OCT 2025" top-right, "Speed Post documents और parcels", then "Registration / रजिस्ट्री" = "value-added service / मूल्य-वर्धित सेवा". Bottom strip y 840–980 kept for s048.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card + parcel icon shown; "एक और fact" grey kicker |
| 1.38 | — | — | "India Post Parcel" pop, Hindi +0.5 |
| 3.16 | — | — | "Accountable items" pill stamp, Hindi +0.5 |
| 5.38 | — | — | right card fade; postmark "1 OCT 2025" stamp |
| 7.46 | — | — | "Speed Post documents" fade; "parcels" at 9.56 |
| 10.54 | — | — | "Registration" pop, Hindi +0.5 |
| 12.16 | — | — | "value-added service" highlight + fade |

## s048
Continues: s047
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static.
Idea: registration means delivery only to the named addressee; then the exam angle points begin.
Sub-shots: continue s047 layout; `#exam` 6.62.
Bottom strip (y 840–980): `envelope-article` → "delivery सिर्फ उसी addressee (पाने वाले) को, जिसके नाम item है".
`#exam` — white card full width (x 140–1780, y 200–980), red kicker "EXAM ANGLE · परीक्षा की नज़र से"; three rows (one each, built over s048–s049): row 1 small `qr-code-stand` icon + "QR code payment = digital payment".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s047 cards held; "value-added service" still highlighted |
| 0.98 | — | — | envelope-article pop, arrow draw |
| 2.66 | — | — | "addressee" fade, Hindi +0.5; "उसी" underline at 2.20 |
| 4.40 | — | — | "जिसके नाम item है" fade |
| 6.62 | — | — | cut to #exam: card + kicker draw |
| 7.82 | — | — | row 1 icon pop; "QR code payment" fade |
| 9.92 | — | — | "= digital payment" fade, highlight; holds |

## s049
Continues: s048
Section label: PART 2 · CASH, DIGITAL & FRANKING
In: cut. Wide, static (#exam card).
Idea: valid franking impression shows payment of postage or postal fee; bulk cash limits depend on facility and place.
Layout: row 2 inline small `franking-impression` + "Valid franking impression → postage या postal fee का भुगतान"; row 3 `rupee-cash` icon + "Bulk cash: limit = facility + जगह के हिसाब से". Row 1 fades to grey when row 3 arrives.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #exam with row 1 |
| 0.38 | — | — | row 2 icon pop, "Valid franking impression" fade |
| 2.34 | — | — | "postage या postal fee" fade |
| 4.60 | — | — | "का भुगतान" highlight |
| 6.60 | — | — | row 1 color grey; row 3 icon pop, "Bulk cash" fade |
| 8.10 | — | — | "facility" chip pop |
| 9.64 | — | — | "+ जगह" chip pop; "तय" underline at 10.92; holds |

## s050
Continues: no
Section label: RECAP · PARTS 1–2
In: wipe (from right, 0.6). Wide, static.
Idea: the four points of Parts 1–2, one ticking green as said.
Component: recap-card — 4 rows (not 3), title "Part 1–2", seal "4". Envelope x 160–1760, y 170–990; flap y 170–330; rows ~150 px each from y 350.
Row 1: "Prepayment / पूर्व भुगतान" · yellow pill "छूट सिर्फ Regulations से · जैसे authorised BNPL".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope, flap, "RECAP · दोहराव", title shown |
| 0.35 | — | — | seal "4" stamp |
| 2.23 | — | — | row 1 term fade, Hindi +0.5 |
| 3.00 | — | — | green tick draw |
| 4.43 | — | — | pill fade "छूट सिर्फ Regulations से" |
| 7.11 | — | — | "authorised BNPL" added to pill, highlight |

## s051
Continues: s050
Section label: RECAP · PARTS 1–2
In: cut. Wide, static.
Idea: payment ways for mail services.
Row 2: "Mail services / डाक सेवाएँ" · five small chips in the pill area: cash, digital, stamps, franking, Regulations.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows so far held |
| 0.00 | — | — | row 2 term fade, Hindi +0.5 |
| 2.33 | — | — | chip "cash" pop |
| 3.17 | — | — | chip "digital" pop |
| 4.23 | — | — | chip "stamps" pop |
| 5.25 | — | — | chip "franking" pop |
| 6.59 | — | — | chip "Regulations" pop; green tick draw at 8.03 |

## s052
Continues: s051
Section label: RECAP · PARTS 1–2
In: cut. Wide, static.
Idea: machine-franked article to the fixed counter; bulk cash has set minimum limits.
Row 3: "Machine-franked article / मशीन-फ्रैंक वस्तु" · pill "तय counter पर दें". Row 4: "Bulk cash / थोक नकद" · pill "तय minimum limits".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3 term fade, Hindi +0.5 |
| 1.62 | — | — | pill "तय counter पर दें" fade; green tick at 2.35 |
| 3.21 | — | — | row 4 term fade, Hindi +0.5 |
| 4.65 | — | — | pill "तय minimum limits" fade; green tick at 5.45; holds |
## s053
Continues: no
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: wipe (from right, 0.6). Wide.
Idea: Part 3 opens; stamps differ in design and purpose, yet any authorised stamp pays postage.
Shot #title (0): Component: chapter-title — kicker "PART 3 · भाग 3", title "Types of Stamps / & Philately", Hindi "डाक टिकटों के प्रकार और philately", progress "Part 3 of 10 · भाग 3 / 10"; stamp icon = three small stamps drawn inline, value "03".
Shot #three (3.50): three `postage-stamp` (scale 0.85) at x 260–600, 790–1130, 1320–1660, y 230–570, each with a simple inline design (leaf, dome, plain value box); grey Hindi "अलग design · अलग मकसद" y 660 (52 px). Green pill y 800–900 x 560–1360: "postage का payment ✓".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title on; kicker + title `words` |
| 0.80 | — | — | Hindi title fades, underline draws |
| 1.40 | — | — | stamp icon `draw`, "03" pops |
| 3.50 | — | — | shot #three: stamps `pop` stagger 0.25 |
| 4.44 | — | — | "अलग design · अलग मकसद" `fade` |
| 6.94 | — | — | stamps `pulse` stagger 0.15 |
| 10.48 | — | — | green pill `pop` |

## s054
Continues: no
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: fade 0.5. Wide.
Idea: the five-type table that holds to s063 (s058–s060 detour). Literal: a white table, rows fill on their words; a side panel shows each type.
Layout: table card #tbl x100–1180 y175–1000 (white, #ead9a8 border); red header strip y175–255 "Stamps के 5 प्रकार" (white, 44 px). Rows y265–995, five of 146 px (centres y 338, 484, 630, 776, 922): red perforated number badge 70×70 at x150; English term 52 px bold at x220 with Hindi 40 px beneath; key phrase column x720–1160 Hindi 40 px. Panel #pnl x1220–1820 y175–1000 envelope #f3ead6.
Row 1: "Definitive / निश्चित डाक टिकट"; key "रोज़ की डाक". Panel: `stamp-sheet` (scale 0.65) top centred y195–510; chip y570–670 "Denominations / मूल्यवर्ग" + grey "ज़रूरत के हिसाब से".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #tbl + header `fade` |
| 1.42 | — | — | badges 1–5 `pop` stagger 0.1; #pnl `fade` |
| 3.29 | — | — | "Definitive" `words`; Hindi `fade` 3.80 |
| 5.49 | — | — | "रोज़ की डाक" `fade`; stamp-sheet `draw` |
| 9.19 | — | — | denominations chip `pop` |

## s055
Continues: s054
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: definitives are reprinted again and again, sold at all post offices, from 25 paise upward.
Layout as s054 (all carried). Panel adds: y720 Hindi 40 px "बार-बार दोबारा छपते" with a small ink loop-arrow inline; y800 "सभी post offices में"; y880–960 red pill "25 paise से बढ़ते मूल्य" (white).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table row 1 + panel as s054 end |
| 0.83 | — | — | "बार-बार दोबारा छपते" `fade`; loop-arrow `draw` |
| 3.09 | — | — | "सभी post offices में" `fade` |
| 5.14 | — | — | red pill `pop` |
| 7.95 | — | — | `underline` words "बढ़ते मूल्य" |

## s056
Continues: s055
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: the exam answer for "daily mail stamps" is definitive; row 2 begins.
Layout as s055. Row 2: "Commemorative / स्मारक डाक टिकट".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | all from s055 holds |
| 1.16 | — | — | `highlight` "रोज़ की डाक" (row 1 key) |
| 5.16 | — | — | `highlight` "Definitive" |
| 6.30 | — | — | panel lines + stamp-sheet `color` to #6f6a63 (dur 0.4); badge 2 `pulse` |
| 7.26 | — | — | "Commemorative" `words`; Hindi `fade` 7.76 |

## s057
Continues: s056
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: commemoratives honour an event, institution, theme or person; limited number, printed once.
Table as s056 (rows 1–2; row 1 highlights kept). Panel redrawn fresh for commemoratives: 2×2 white chips y195–455 (Hindi 40 px, text only, no drawing of a person): "आयोजन", "संस्था", "विषय (theme)", "व्यक्ति"; grey "की याद में" y510; y600 "सीमित संख्या में"; yellow-band pill y680–770 "सिर्फ एक बार छपते". Row 2 key: "याद में · एक बार".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table holds; #pnl empty sand panel |
| 0.66 | — | — | chip "आयोजन" `pop` |
| 1.56 | — | — | chip "संस्था" `pop` |
| 3.06 | — | — | chip "विषय (theme)" `pop` |
| 4.22 | — | — | chip "व्यक्ति" `pop` |
| 5.02 | — | — | "की याद में" `fade`; row 2 key `fade` |
| 6.98 | — | — | "सीमित संख्या में" `fade` |
| 9.28 | — | — | "सिर्फ एक बार छपते" `pop`, `highlight` 9.86 |

## s058
Continues: s057
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: sold for a fixed, limited time; then the exam trap: a commemorative is not only for collecting.
Shot #tablea (0): s057 layout + panel line y790 "तय, सीमित समय तक बिकते".
Shot #trap (3.86) — Component: myth-fact moulded (holds to s060 6.37): red banner y180–270 "परीक्षा का जाल" (pale yellow, Hindi only); white myth card y290–500: `postage-stamp` (scale 0.45) x140 with inline flag-free ribbon design, "Commemorative stamp" 64 px + "स्मारक डाक टिकट" 40 px at x380, right x1150–1780 "सिर्फ collection के लिए?" 48 px. Sand fact card y520–990 empty for s059.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s057 frame holds |
| 1.10 | — | — | "तय, सीमित समय तक बिकते" `fade` |
| 3.86 | — | — | shot #trap: banner `reveal` from left |
| 5.62 | — | — | myth card + stamp `pop`; term `words` |
| 7.22 | — | — | "सिर्फ collection के लिए?" `fade` |
| 8.42 | — | — | `strike` (slate) on that line |

## s059
Continues: s058
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: Regulations clearly allow paying postage with it; keep it, or stick it on a letter.
Trap layout as s058 end. Fact card y520–990, left half x130–980: green pill "सही" y545; `regulations-book` (scale 0.6) x170 y600–840 with "Regulations" lettered; beside it 48 px "इससे postage दे सकते हैं" with green tick. Middle x1000–1400: inline album (closed book with stamp squares) + "संभालकर रखें" beneath. Right x1420–1790: `address-envelope` (scale 0.55) with `adhesive-stamp` in its box + "letter पर लगाएँ".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner + struck myth card hold; fact card `fade` |
| 0.00 | — | — | `regulations-book` `pop` |
| 1.42 | — | — | "इससे postage दे सकते हैं" `words` |
| 3.14 | — | — | `highlight` words "postage दे सकते"; tick `draw` |
| 4.94 | — | — | album `draw`; "संभालकर रखें" `fade` |
| 7.08 | — | — | envelope `pop`; stamp `stamp` into box 7.74; label `fade` |

## s060
Continues: s059
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: it doesn't become a revenue stamp or charity label; then row 3, special stamps (themes).
Shot #trap (0): s059 layout; left fact items `color` grey; strip y860–980 across fact card: `non-postage-labels` (scale 0.4) x150 + "Revenue stamp / राजस्व टिकट" x420 + "Charity label / चैरिटी लेबल" x1000, both struck slate on "नहीं".
Shot #tableb (6.37): table + panel redrawn exactly as s057 (rows 1–2, keys), panel fresh. Row 3 "Special / विशेष डाक टिकट"; key "विषय पर आधारित". Panel 2×2 tiles y195–700, inline ink icons + Hindi 40 px: leaf "पेड़-पौधे", bird "जीव-जंतु", dome "वास्तुकला", brush "कला".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | trap holds |
| 1.14 | — | — | earlier fact items `color` #6f6a63 |
| 2.98 | — | — | labels piece `pop`; "Revenue stamp" `fade` |
| 4.16 | — | — | "Charity label" `fade` |
| 4.90 | — | — | `strike` both labels (stagger 0.2) |
| 6.37 | — | — | shot #tableb; badge 3 `pulse` |
| 7.19 | — | — | "Special" `words`; Hindi `fade` 7.69 |
| 9.07 | — | — | leaf tile `pop` |
| 9.87 | — | — | bird tile `pop` |
| 10.83 | — | — | dome tile `pop` |
| 12.43 | — | — | brush tile `pop` |
| 13.41 | — | — | row 3 key `fade` |

## s061
Continues: s060
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: special stamps are not for any specific event; row 4, joint issue: India and another country together.
Table as s060 end. Panel shot #pspecial (0) = s060 panel + y760 "खास event की याद में" (40 px). Panel shot #pjoint (4.81): two `postage-stamp` (scale 0.6) side by side x1260–1500 and 1540–1780, y230–470, joined by a red "+"; labels beneath "India / भारत" and "दूसरा देश" (no flags); y620 "मिलकर जारी". Row 4 "Joint issue / संयुक्त डाक टिकट".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table + special panel hold |
| 1.36 | — | — | "खास event की याद में" `fade` |
| 2.64 | — | — | `strike` (slate) on that line |
| 3.83 | — | — | badge 4 `pulse` |
| 4.81 | — | — | "Joint issue" `words`; Hindi `fade` 5.31; panel shot #pjoint, stamps `pop` |
| 6.69 | — | — | "India / भारत" `fade` |
| 8.83 | — | — | "+" `pop`; "दूसरा देश" `fade` |
| 9.13 | — | — | "मिलकर जारी" `fade`; row 4 key "India + दूसरा देश" `fade` |

## s062
Continues: s061
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: on agreed terms; row 5, My Stamp: personalised printing given by a customer or proponent.
Table as s061. Panel #pjoint + y720 "आपसी तय शर्तों पर". Panel shot #pmy (3.16): `postage-stamp` (scale 0.7) x1260–1540 y230–510 with an attached tab x1540–1780 showing a simple inline picture (house and sun, no person); beneath y600 chips "Customer / ग्राहक" and "Proponent / प्रस्तावक"; y800 "Personalised printing / व्यक्तिगत छपाई". Row 5 "My Stamp / माई स्टाम्प"; key "अपनी छपाई".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table + joint panel hold |
| 0.96 | — | — | "आपसी तय शर्तों पर" `fade` |
| 2.36 | — | — | badge 5 `pulse` |
| 3.16 | — | — | "My Stamp" `words`; Hindi `fade` 3.66; panel shot #pmy, stamp `pop` |
| 5.52 | — | — | "Customer" chip `pop` |
| 6.34 | — | — | "Proponent" chip `pop` |
| 7.64 | — | — | tab `draw`; "Personalised printing" `words`, Hindi `fade` 8.14 |
| 8.92 | — | — | row 5 key `fade`; `highlight` tab label |

## s063
Continues: s062
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: My Stamp follows administrative instructions; then philately = study and collection of stamps, postal stationery, postmarks and other material.
Shot #tablec (0): s062 layout; panel y900 small `regulations-book` (scale 0.3) + "लागू administrative instructions से" 40 px.
Shot #phil (4.35) — Component: key-term moulded: red perforated card x100–760 y190–470 "Philately" 96 px white + "डाक टिकट संग्रह" 48 px pale yellow; right x820–1820 y230–430: "का" line with pills "अध्ययन" and "संग्रह". Four white tiles y520–990, x100–1820 (gap 30): `postage-stamp` "Stamps / डाक टिकट"; `postcard-blank` "Postal stationery / डाक लेखन सामग्री"; `cancelled-stamp` "Postmarks / डाक मुहर"; inline small album "Other philatelic material / अन्य सामग्री".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | full table holds |
| 0.90 | — | — | book `pop`; instructions line `fade` |
| 4.35 | — | — | shot #phil; red card `pop` |
| 4.55 | — | — | "Philately" `words`; Hindi `fade` 5.05 |
| 6.67 | — | — | tile 1 `pop` |
| 7.91 | — | — | tile 2 `pop` |
| 9.23 | — | — | tile 3 `pop` |
| 11.29 | — | — | tile 4 `pop` |
| 12.65 | — | — | "अध्ययन" pill `pop` |
| 13.57 | — | — | "संग्रह" pill `pop` |

## s064
Continues: s063
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: philately is more than stamps; Philatelic Bureaux and philatelic counters meet collectors' needs.
Shot #phil (0): s063 end. Shot #bureau (6.80): left white card x100–620 y260–900: inline album with magnifier + "संग्राहकों की ज़रूरतें" 44 px; red arrow x650–820; right two white cards x860–1820: y200–560 inline ink building + "Philatelic Bureaux / फिलेटलिक ब्यूरो"; y600–960 `post-counter-icon` (scale 0.8) + "Philatelic counters / फिलेटलिक काउंटर".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | philately card + four tiles hold |
| 1.04 | — | — | tile 1 `color` #6f6a63 (labels) |
| 3.14 | — | — | `highlight` tile 2 label |
| 4.80 | — | — | `highlight` tile 3 label |
| 6.80 | — | — | shot #bureau; album card `pop`; label `fade` 7.34 |
| 8.44 | — | — | arrow `draw`; bureau card `pop`, term `words` |
| 10.58 | — | — | counter card `pop`, term `words` |

## s065
Continues: no
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: fade 0.5. Wide.
Idea: philatelic material falls in two groups (show only the two groups and the examples the narration names; no invented list).
Layout: header red perforated strip x100–1820 y175–320: "Philatelic material" 72 px white + "फिलेटलिक सामग्री" 44 px pale yellow. Two white columns y360–990: #g1 x100–940, #g2 x980–1820, each with red badge "1"/"2" and Hindi heading 48 px at y430: g1 "संग्रह वाला material", g2 two lines "stamps बनाने व" / "mark करने वाला material" (second line lands in s066).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header strip `pop`; "Philatelic material" `words` |
| 0.60 | — | — | Hindi `fade` |
| 4.08 | — | — | both columns `fade` stagger 0.2; badges `pop` |
| 5.36 | — | — | g1 heading `fade` |
| 8.66 | — | — | g2 line 1 `fade` |

## s066
Continues: s065
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: examples: first day covers (group 1), printing plates (group 2); the Director General decides what is sold at post offices.
Shot #groups (0): s065 + g2 line 2. In g1 y520–960: `address-envelope` (scale 0.9) with `cancelled-stamp` (scale 0.22) in its stamp box; "First day cover / प्रथम दिवस आवरण" under. In g2: inline slate printing plate (grid of stamp outlines) + "Printing plates / मुद्रण प्लेट". Grey "उदाहरण" tag on each.
Shot #dg (6.70): left x100–820 `post-counter-icon` (scale 1.4) + "कौन-सा philatelic material बिकेगा?" 44 px; right red perforated card x900–1820 y300–760 "Director General / महानिदेशक"; "तय करते हैं" y840.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | g2 line 2 `fade` |
| 1.82 | — | — | envelope `pop`; stamp `stamp`; FDC term `words` 2.48 |
| 3.56 | — | — | plate `draw`; term `words` |
| 5.34 | — | — | "उदाहरण" tags `fade` |
| 6.70 | — | — | shot #dg; counter `pop` |
| 7.92 | — | — | question line `fade` |
| 10.96 | — | — | DG card `pop`; term `words`, Hindi `fade` 11.46 |
| 12.06 | — | — | "तय करते हैं" `fade` |

## s067
Continues: no
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: fade 0.5. Wide.
Idea: orders from abroad are filled by the Indian Philatelic Bureau at Bombay GPO; then a warning begins.
Shot #bureau (0): left x100–900: inline ink globe + `envelope-article` (scale 0.8) at y220–480 with "विदेश से orders" 44 px; red arrow down; red perforated card y620–960 "Indian Philatelic Bureau / भारतीय फिलेटलिक ब्यूरो". Right: Photo: mumbai-gpo-building as paper cut-out, white border, soft shadow, tilt 1.5°, x980–1800 y200–820; caption "Bombay GPO" 52 px y890 + grey credit. (Fallback: inline ink domed building.)
Shot #items (7.32): three white tiles x100–1820 y220–700, inline ink: folded leaflet "ब्रोशर", album "एल्बम", magnifier + tweezers "accessory (सहायक सामान)".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | globe + envelope + "विदेश से orders" shown |
| 2.10 | — | — | arrow `draw` |
| 2.52 | — | — | bureau card `pop`; term `words`, Hindi `fade` 3.02 |
| 4.60 | — | — | photo `fade` |
| 5.36 | — | — | caption `fade` |
| 7.32 | — | — | shot #items |
| 8.52 | — | — | brochure tile `pop` |
| 9.28 | — | — | album tile `pop` |
| 10.88 | — | — | accessory tile `pop` |

## s068
Continues: s067
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: none of these is proof of postage paid; then the question: who can propose a commemorative stamp?
Shot #items (0): s067 end + slate line y800 "postage के payment का सबूत" (52 px) struck.
Shot #proposal (2.90) — Component: cause-chain moulded to 3 cards (holds to s070 4.68): header y180–300 "Commemorative stamp का proposal कौन दे सकता है?" 52 px; cards y360–940: #c1 x100–640, #c2 x690–1230, #c3 x1280–1820, red arrows between. #c1: inline white document with a small `postage-stamp` sketch, "Proposal / प्रस्ताव".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three tiles hold |
| 0.54 | — | — | "postage के payment का सबूत" `fade` |
| 1.92 | — | — | `strike` (slate) |
| 2.90 | — | — | shot #proposal; header `words` |
| 4.26 | — | — | #c1 `pop`; stamp `pop`; term `words` |

## s069
Continues: s068
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: any citizen of India may propose, under administrative instructions; proposals are examined under Central Government instructions. No person drawn.
Layout as s068 shot #proposal. #c1 bottom: green pill "भारत का कोई भी citizen" + grey "administrative instructions के हिसाब से". #c2: "Proposals की जाँच" 48 px, "Central Government / केंद्र सरकार" pill, grey "के instructions से".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header + #c1 hold |
| 1.26 | — | — | green citizen pill `pop` |
| 2.18 | — | — | instructions line `fade` |
| 5.02 | — | — | arrow 1 `draw`; #c2 `pop`; "Proposals की जाँच" `fade` |
| 6.82 | — | — | Central Government pill `pop`; Hindi `fade` 7.32 |
| 8.28 | — | — | "के instructions से" `fade` |

## s070
Continues: s069
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: Central Government approves design and denomination; then a plain rule: no postage stamp on a living person. Never draw a person or portrait.
Shot #proposal (0): #c3 "Design + Denomination / मूल्यवर्ग", "Central Government" pill, green tick + "approve".
Shot #rule (4.68): red perforated card x260–1660 y220–900, label "नियम" pale yellow; white Hindi 60 px two lines "किसी जीवित व्यक्ति पर / postage stamp जारी नहीं होगा"; empty-faced `postage-stamp` (scale 0.5) at right; slate round postmark "नहीं" lands on it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #c1, #c2 hold |
| 0.68 | — | — | arrow 2 `draw`; #c3 `pop`; term `words` |
| 2.26 | — | — | Central Government pill `pop` |
| 3.42 | — | — | tick `draw`; "approve" `fade` |
| 4.68 | — | — | shot #rule; card `pop`, "नियम" `fade` |
| 7.06 | — | — | rule text `words` gap 0.18 |
| 7.56 | — | — | `highlight` words "जीवित व्यक्ति" |
| 9.54 | — | — | stamp `pop` |
| 10.48 | — | — | slate postmark `stamp` |

## s071
Continues: no
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: fade 0.5. Wide.
Idea: for an issue on an institution, event or organisation, the proponent must make a fixed mandatory purchase.
Layout: left column x100–620: grey "issue किस पर?" y200, three chips y300–700: "संस्था", "आयोजन (event)", "Organisation / संगठन". Arrow to centre card x680–1100 y360–700: "Proponent / प्रस्तावक". Right red perforated card x1160–1820 y200–720: "Mandatory purchase / अनिवार्य खरीद", yellow pill "तय"; beneath it `stamp-sheet` (scale 0.45) + `rupee-cash` (scale 0.6) on a sand strip y740–990.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "issue किस पर?" shown; chip 1 hidden |
| 0.36 | — | — | "संस्था" chip `pop` |
| 1.38 | — | — | "आयोजन" chip `pop` |
| 2.58 | — | — | "Organisation" chip `pop` |
| 4.34 | — | — | arrow `draw`; proponent card `pop` |
| 5.56 | — | — | "तय" pill `pop` |
| 6.06 | — | — | red card `pop`; term `words`, Hindi `fade` 6.56 |
| 7.14 | — | — | sheet + cash `pop` stagger 0.2 |

## s072
Continues: s071
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: in exceptional, deserving cases the Central Government may relax it; then the Philatelic Advisory Committee and what it advises on.
Shot #buy (0): s071 + sand panel x100–1100 y760–990: "असाधारण और योग्य cases में", green "Central Government छूट दे सकती है".
Shot #pac (6.06): tall red perforated card x100–760 y175–1000: "Philatelic Advisory Committee" 60 px white, "डाक टिकट सलाहकार समिति" 44 px pale yellow, "सलाह देती है:" then white list: "Commemorative stamps", "Special stamps", "जुड़े मामले". Right column x800–1820 left empty sand panels for s073/s074 (#chair y175–570, #members y610–1000).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s071 holds |
| 0.78 | — | — | sand panel `fade`; first line `fade` |
| 3.68 | — | — | green line `fade` |
| 4.44 | — | — | `highlight` words "छूट दे सकती" |
| 6.06 | — | — | shot #pac; card `pop`; term `words`, Hindi `fade` 6.56; right panels `fade` |
| 8.10 | — | — | "Commemorative stamps" `fade` |
| 9.92 | — | — | "Special stamps" `fade` |
| 11.48 | — | — | "जुड़े मामले" `fade` |
| 12.42 | — | — | "सलाह देती है:" `underline` |

## s073
Continues: s072
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: its Chairperson is the Union Minister in charge of the Ministry of Communications, ex officio (by virtue of the office). Text only, no portrait.
Layout as s072 shot #pac. #chair panel: "Chairperson / अध्यक्ष" 56 px at y230; "Union Minister, Ministry of Communications" 40 px + "संचार मंत्रालय के प्रभारी केंद्रीय मंत्री" 40 px at y340–430; red pill "Ex officio / पदेन" x840–1200 y460–550; grey "= अपने पद की वजह से" 40 px beside it at x1230, y515.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | committee card holds |
| 0.44 | — | — | list items `color` #6f6a63 |
| 1.38 | — | — | "Chairperson" `words`; Hindi `fade` 1.88 |
| 2.30 | — | — | minister English line `fade` |
| 3.80 | — | — | Hindi minister line `fade` |
| 5.76 | — | — | "Ex officio" pill `pop` |
| 8.96 | — | — | "= अपने पद की वजह से" `fade` |

## s074
Continues: s073
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: he also nominates the official and non-official members; then the exam-angle recap begins.
Shot #pac (0): #members panel: "Official और non-official members" 48 px + "सरकारी और गैर-सरकारी सदस्य" 40 px; grey "Chairperson nominate करते हैं".
Shot #recap (5.18) — Component: recap-card (holds to s076): envelope x260–1660 y175–1000, flap "RECAP · दोहराव" + red title "Exam angle · Part 3", seal "5"; five rows (~150 px): English term bold + Hindi beneath, yellow fact pill right, green tick on the word.
Row 1: "Definitive / निश्चित डाक टिकट", pill "रोज़ की ज़रूरत".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | committee + chair hold |
| 0.66 | — | — | members English `fade`; Hindi `fade` 1.16 |
| 3.64 | — | — | "nominate करते हैं" `fade` |
| 5.18 | — | — | shot #recap; envelope `pop`, title `words` 5.58 |
| 6.46 | — | — | row 1 term `fade`; pill `pop` 7.16 |
| 8.42 | — | — | tick `draw` |

## s075
Continues: s074
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: recap rows 2–4: commemorative pays postage; joint issue = India + one other country; philately includes stationery and postmarks.
Layout as s074 #recap. Row 2 "Commemorative / स्मारक डाक टिकट", pill "postage दे सकते"; row 3 "Joint issue / संयुक्त डाक टिकट", pill "India + एक दूसरा देश"; row 4 "Philately / डाक टिकट संग्रह", pill "stationery + postmarks भी".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + row 1 hold; row 2 term `fade` |
| 1.50 | — | — | row 2 pill `pop` |
| 3.20 | — | — | row 2 tick `draw` |
| 4.14 | — | — | row 3 term `fade` |
| 5.12 | — | — | row 3 pill `pop` |
| 6.92 | — | — | row 3 tick `draw` |
| 7.54 | — | — | row 4 term `fade` |
| 8.80 | — | — | row 4 pill `pop` |
| 12.48 | — | — | row 4 tick `draw` |

## s076
Continues: s075
Section label: PART 3 · TYPES OF STAMPS & PHILATELY
In: cut. Wide.
Idea: last recap row: the committee's ex officio Chairperson is the Union Minister of Communications.
Layout as s075. Row 5 "Chairperson / अध्यक्ष", pill "संचार के Union Minister · पदेन". Recap holds to the cut (s077 wipes in).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–4 hold; row 5 term `fade` |
| 0.86 | — | — | pill `pop` |
| 4.46 | — | — | `highlight` words "Union Minister" |
| 4.80 | — | — | row 5 tick `draw` |
## s077
Continues: no
Section label: PART 4 · VALID STAMPS & AFFIXING
In: wipe (from right, 0.6). Wide, no camera.
Idea: a printed value alone doesn't pay postage; the stamp must be authorised. Sub-shots: `#title` 0.00, `#paid` 2.08.
`#title` — Component: chapter-title: kicker "PART 4 · भाग 4", English "Valid Stamps / & Affixing", Hindi "मान्य stamps और लगाने का तरीका", subtitle "Part 4 of 10 · भाग 4 / 10"; stamp icon = envelope with a small stamp top-right, value "04". Already built at 0.00.
`#paid` — left: `postage-stamp` scale 1.4 centred (480, 580), value box lettered "₹", grey label "छपी value" under it (y 920). Right column x 900–1780: top block y 220–440 "postage paid" (64px) / "डाक शुल्क चुकता" (44px) with slate cross; then three condition rows y 520–940 (green tick + term + Hindi), row 1 here: "authorised" / "उस काम के लिए अधिकृत".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#title` shown; underline draw 0.2 |
| 2.08 | — | — | cut `#paid`: stamp + label shown |
| 3.36 | — | — | fade "postage paid", Hindi 3.86 |
| 3.94 | — | — | draw slate cross beside it |
| 6.18 | — | — | pulse stamp value box |
| 8.42 | — | — | slide row 1 term, Hindi 8.9; draw green tick 9.12 |

## s078
Continues: s077
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: two more conditions, then Regulation 7's four reasons. Sub-shots: `#paid` 0.00, `#reg7` 4.64.
`#paid` rows 2–3: "valid" / "मान्य"; "इस्तेमाल की शर्तें पूरी" (Hindi only).
`#reg7` (held through s082 7.34): left column x 140–560: `regulations-book` scale 0.8 centred (350, 420), title panel "Post Office Regulations"; under it "Regulation 7" (72px) / "विनियम 7" (44px) at y 660–740; grey chip "सार" y 790. Right: white document card x 640–1780, y 180–980 headed "भुगतान मान्य नहीं, जब:" (red, 48px); four numbered row slots (red discs 1–4) at y 300, 470, 640, 810, text Hindi 44px added by later scenes.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#paid` as s077 end |
| 0.36 | — | — | row 2 slides in, tick 0.7 |
| 2.88 | — | — | row 3 slides in, tick 3.84 |
| 4.64 | — | — | cut `#reg7`: book + "Regulation 7" shown; Hindi fade 5.1 |
| 6.04 | — | — | card + heading fade |
| 6.44 | — | — | four number discs pop, stagger 0.12 |
| 7.86 | — | — | highlight heading words "मान्य नहीं" |

## s079
Continues: s078
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide; slow push-in to 1.04 on the document card over the scene, holds (s080–s081 keep it, returns at the s081 sub-shot cut).
Idea: reasons 1 and 2 on the `#reg7` card. Row text: 1 "Rules या Regulations उस तरीके को मान्यता नहीं देते"; 2 "stamp मिटा हुआ या खराब" with a small inline stamp (postage-stamp look, slate smudge and torn corner) at the row's right, x 1600.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | push to 1.04 on card, 11 s | — | `#reg7` as s078 end; disc 1 pulse |
| 1.32 | — | — | row 1 text fade; yellow highlight band on row 1 |
| 4.28 | — | — | underline "मान्यता नहीं" |
| 6.04 | — | — | disc 2 pulse; highlight band moves to row 2 (row 1 band color off) |
| 7.44 | — | — | row 2 text fade |
| 9.48 | — | — | inline smudged stamp pops |

## s080
Continues: s079
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Camera held at s079's push.
Idea: reason 3 — someone else printed on a stamp, franking impression or counter receipt before posting; only the Director General may print. Row 3 text "posting से पहले किसी और ने कुछ छापा"; three mini icons in row 3 right (x 1340, 1480, 1620, ~110 px): `postage-stamp`, `franking-impression`, `counter-receipt`. Left column chip under "सार" (x 140–560, y 850–970): "Director General" (48px) / "महानिदेशक · सिर्फ वही छाप सकते" (38px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | hold | — | card as s079 end; disc 3 pulse; band to row 3 |
| 1.06 | — | — | row 3 text fade |
| 2.18 | — | — | pop mini stamp |
| 2.86 | — | — | pop mini franking impression |
| 5.10 | — | — | pop mini counter receipt |
| 7.62 | — | — | underline "किसी और ने" |
| 9.62 | — | — | chip slides up; Hindi 10.1 |

## s081
Continues: s080
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Camera at s080's push until 7.34, then wide 1.0 at the cut.
Idea: reason 4, then the example. Row 4 text "stamp embossed envelope, postcard या wrapper से अलग किया गया"; mini icons `embossed-envelope`, `postcard-blank`, inline wrapper (buff paper band rolled round a tube). Sub-shots: `#reg7` 0.00, `#example` 7.34.
`#example`: kicker "उदाहरण" (red, 52px, x 140 y 220); `embossed-envelope` scale 1.6 centred (520, 600); grey label "unused" above it (y 300). Inline: a dashed cut-ring round `#embossed-stamp` and small ink scissors beside it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | hold push | — | disc 4 pulse; band to row 4 |
| 1.60 | — | — | row 4 text fade; mini embossed envelope pop |
| 4.08 | — | — | mini postcard pop |
| 5.04 | — | — | mini wrapper pop |
| 7.34 | wide 1.0 | — | cut `#example`: kicker + envelope shown |
| 10.24 | — | — | fade "unused" |
| 12.44 | — | — | highlight circle on embossed stamp |
| 13.18 | — | — | draw dashed cut-ring (0.6); scissors pop |

## s082
Continues: s081
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: the cut-out stuck on another envelope carries no value. Left `embossed-envelope` stays; inline cut-out disc (copy of the embossed stamp with paper edge) over its stamp, and a hole (cream circle, dashed edge) beneath it. Right: `address-envelope` scale 1.1 at x 1060–1764, y 380–820. Verdict below, centred y 900: slate round postmark "cut-out · prepayment नहीं" (Hindi 44px, "prepayment" Inter).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#example` as s081 end |
| 0.52 | — | — | right envelope slides from right |
| 1.20 | — | — | cut-out moves to right envelope's stamp box (by ≈[900,-150], 0.9, soft); hole fades on left |
| 3.40 | — | — | grey label "छपी value" with short arrow to cut-out |
| 6.66 | — | — | slate cross over cut-out |
| 8.44 | — | — | stamp verdict postmark |

## s083
Continues: no
Section label: PART 4 · VALID STAMPS & AFFIXING
In: fade 0.5. Wide; slow push to 1.05 on the stamp, returns before cut.
Idea: exception — tiny-hole initials (identifying perforation) are allowed. Left: `perforated-initials-stamp` scale 1.5 centred (520, 580), "INDIA" small on its face top (inline). Right column x 960–1780: amber chip "अपवाद" (y 230); Hindi lines "Stamps में initials या पहचान के निशान" (y 380) and "बहुत छोटे छेदों से" (y 450); term "Identifying perforation" (72px, y 640) / "पहचान के लिए छिद्रण" (46px, y 710); green pill "allowed · मंज़ूर" (y 860).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp shown |
| 0.40 | push 1.05 on stamp, 6 s | — | chip pops |
| 2.20 | — | — | line 1 fade |
| 5.40 | — | — | line 2 fade; circle round the holes 5.88 |
| 8.30 | — | — | term fade; Hindi 8.8 |
| 11.84 | return 1.0 | — | green pill pops |

## s084
Continues: no
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: don't confuse it with a torn/cut stamp; country and value must stay readable. Left: `perforated-initials-stamp` scale 1.0 centred (560, 500) with "INDIA" and "₹" in its value box (inline), label under (y 760) "Identifying perforation" 48px / green tick. Centre "≠" (slate, 120px, x 960). Right: `postage-stamp` scale 1.0 centred (1360, 500) with inline torn jagged corner, label "फटा / कटा stamp" + slate cross. Bottom bar (envelope #f3ead6) x 140–1780, y 860–980: "शर्त: stamp का देश और value साफ पढ़ी जाए".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left stamp + label shown |
| 0.34 | — | — | torn stamp fade |
| 1.28 | — | — | "≠" pops; slate cross 1.9 |
| 2.96 | — | — | bottom bar reveal from left, text 3.2 |
| 4.84 | — | — | highlight "INDIA" on stamp |
| 6.18 | — | — | circle round value box |

## s085
Continues: s084
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: the exemption is only for identification; then the four look-alike stamps table. Sub-shots: `#perf` (s084 layout) 0.00, `#table` 4.36.
`#table` (Component: compare-table, moulded to 4 rows × 3 columns, held s085–s087 2.50 and s089–s091 2.73; s089 redraws it with this geometry): red title "चार मिलते-जुलते stamps" (x 140, y 210, 52px). Card x 120–1800, y 250–990; red header row y 250–330: "STAMP · टिकट" | "किस काम के लिए" | "Postage?". Rows 160 tall (y 330, 490, 650, 810): col 1 x 140–740 icon (≈110 px) + English term 48px / Hindi 38px; col 2 x 760–1380 Hindi purpose 40px; col 3 x 1400–1780 verdict. Rows: `postage-stamp` "Ordinary postage stamp" / "साधारण डाक टिकट"; `non-postage-labels` (#revenue half, clipped) "Revenue stamp" / "राजस्व टिकट"; inline postage-stamp with a slate "SERVICE" band "Service postage stamp" / "सेवा डाक टिकट"; `non-postage-labels` (#charity half) "Charity stamp / label" / "धर्मार्थ टिकट / लेबल".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#perf` as s084 end |
| 1.98 | — | — | amber line under left label "छूट सिर्फ पहचान के लिए" fade |
| 4.36 | — | — | cut `#table`: title + card + header shown |
| 4.89 | — | — | four rows (icon + term) slide up, stagger 0.3 |
| 9.98 | — | — | yellow band on row 1 |
| 12.00 | — | — | row 1 purpose "postal service का payment" fade |

## s086
Continues: s085
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: ordinary stamp valid if authorised, unused, used rightly; revenue stamp is for revenue/fiscal work. Row 1 col 3: green tick + "valid", with grey 36px line "authorised · unused · सही इस्तेमाल" under it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#table` as s085 end |
| 0.00 | — | — | row 1 col 3 line: "authorised" fade |
| 1.33 | — | — | "· unused" fade |
| 2.83 | — | — | "· सही इस्तेमाल" fade |
| 4.75 | — | — | green tick draw + "valid" pop |
| 5.67 | — | — | band moves to row 2 |
| 6.87 | — | — | row 2 purpose "revenue / fiscal काम" fade |

## s087
Continues: s086
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: revenue stamp pays no postage; sold at post offices but stays a revenue stamp. Sub-shots: `#table` 0.00, `#sold` 2.50.
`#sold`: `post-counter-icon` scale 1.4 centred (520, 600), sign plate "Post Office"; revenue label (`non-postage-labels` #revenue half) scale 1.6 on the desk. Right column x 1000–1780: line "Central Government के revenue stamps यहाँ बिकते हैं" (y 380); equation (y 640): "Revenue stamp" ≠ "postage stamp" (60px), Hindi "बिकने से नहीं बदलता" (y 760).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#table` row 2 banded |
| 1.10 | — | — | row 2 col 3 slate cross + "नहीं" |
| 2.50 | — | — | cut `#sold`: counter shown |
| 3.82 | — | — | right line fade; revenue label pops on desk 5.40 |
| 9.38 | — | — | "Revenue stamp" fade |
| 10.66 | — | — | "≠ postage stamp" fade; slate cross 11.66; Hindi 12.1 |

## s088
Continues: no
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: revenue stamps alone = no credit; with valid postage, only that postage counts. Two `address-envelope` scale 1.25 (800×500): left centred (540, 520), right centred (1380, 520). Left box: revenue label (non-postage-labels #revenue, ~130 px). Right box: revenue label + `postage-stamp` (~130 px) side by side. Under each (y 860): left "postage credit: कुछ नहीं" (slate); right "सिर्फ valid postage गिना" (green).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left envelope shown |
| 1.06 | — | — | revenue label pops on left |
| 3.20 | — | — | left caption fade; slate cross 4.5 |
| 5.42 | — | — | right envelope fade, revenue label on it |
| 6.44 | — | — | postage stamp pops on right |
| 8.74 | — | — | green circle round postage stamp; revenue label dims (color grey) |
| 9.56 | — | — | right caption fade |

## s089
Continues: no
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: service stamp only for authorised official mail, not private letters. Redraw `#table` exactly per s085 geometry, rows 1–2 filled as at s087 2.50 (row 1 tick "valid" + grey line; row 2 purpose + slate cross).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table shown; band on row 3 |
| 1.91 | — | — | row 3 purpose "authorised सरकारी (official) डाक" fade |
| 6.12 | — | — | grey line under it "private letter नहीं" |
| 7.89 | — | — | row 3 col 3 slate cross + "नहीं" |

## s090
Continues: s089
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: an employee's personal letter is also private; charity stamp/label is for raising money or decoration. Row 3 col 2 second line (amber, 36px): "कर्मचारी की personal चिट्ठी = private letter".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table as s089 end |
| 1.62 | — | — | row 3 amber line fade |
| 2.83 | — | — | underline "private letter" |
| 4.34 | — | — | band moves to row 4 |
| 6.80 | — | — | row 4 purpose "पैसा जुटाना" fade |
| 8.68 | — | — | "या सजाना" fade |

## s091
Continues: s090
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: charity label pays no postage; then where to put the stamp. Sub-shots: `#table` 0.00, `#affix` 2.73.
`#affix` (held through s093 4.98): title "Stamp कहाँ और कैसे?" (red 52px, x 140 y 210). `address-envelope` scale 1.4 at x 140–1036, y 320–880 (grey address rules, no text). Right column x 1100–1800: "address side" (56px) / "पते वाली तरफ़" (y 340–400); "top right-hand corner" (56px) / "ऊपर दायाँ कोना" (y 480–540).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table, row 4 banded |
| 1.20 | — | — | row 4 col 3 slate cross + "नहीं" |
| 2.73 | — | — | cut `#affix`: title + envelope shown |
| 6.67 | — | — | "address side" fade; highlight envelope address rules 7.1 |
| 8.47 | — | — | `postage-stamp` (~150 px) stamps into the stamp box |
| 8.81 | — | — | "top right-hand corner" fade; Hindi 9.3 |
| 9.89 | — | — | yellow circle round stamp corner |

## s092
Continues: s091
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: stamp fully stuck on the item; not on contents, not on a tied-on label. Right column, below the terms (which go grey at 1.34): three rows y 640, 760, 880 (Hindi 42px): ✓ green "पूरी तरह चिपका"; ✗ slate "Contents पर नहीं"; ✗ slate "बँधे / जुड़े label या चीज़ पर नहीं". Inline on envelope's left edge: a small buff tag tied by a string, with a tiny stamp drawn on it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#affix` as s091 end |
| 1.34 | — | — | row 1 fade; green tick 2.32; earlier terms color grey |
| 3.68 | — | — | row 2 fade; slate cross 4.3 |
| 6.22 | — | — | tag + string draw on envelope |
| 7.84 | — | — | row 3 text fade |

## s093
Continues: s092
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: placement rules apply to franking too; use the fewest stamps, of higher value. Sub-shots: `#affix` 0.00, `#fewest` 4.98.
`#affix` adds a strip under the envelope (y 910–990): `franking-impression` ~90 px + "जगह के ये नियम franking पर भी".
`#fewest` (held through s094): two `address-envelope` scale 0.95 (608×380): left x 180–788, y 200–580, six `adhesive-stamp` (scale 0.45) crowding its top right into the address area; right x 1100–1708, y 200–580, one `postage-stamp` (~120 px) in its box. Captions y 640: left "कई छोटे stamps" (grey), right "कम stamps · ऊँची value" (ink).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#affix`; row 3 slate cross 0.84 |
| 2.88 | — | — | franking strip slides up |
| 4.98 | — | — | cut `#fewest`: left envelope + 6 stamps + left caption shown |
| 6.16 | — | — | right envelope fade, stamp pops 6.4, green tick 6.78 |
| 8.06 | — | — | right caption fade; underline "ऊँची value" 8.54 |

## s094
Continues: s093
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: three gains of fewer stamps. Three envelope-coloured cards (#f3ead6) x 140–680, 690–1230, 1240–1780, y 720–980, Hindi 40px with English terms inline: 1 "address और postal markings के लिए जगह"; 2 "Cancellation का काम कम"; 3 "stamp paper और printing की बचत".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#fewest` as s093 end |
| 0.40 | — | — | card 1 slides up; highlight free space on right envelope 2.6 |
| 4.06 | — | — | card 2 slides up |
| 6.80 | — | — | card 3 slides up |

## s095
Continues: no
Section label: PART 4 · VALID STAMPS & AFFIXING
In: fade 0.5. Wide.
Idea: non-postal stamps, charity labels, seals and misleading impressions don't go on the address side or hide the address. `address-envelope` scale 1.4 at x 140–1036, y 300–860 (postage stamp in box). On its address side, items land: `non-postage-labels` (revenue, charity), inline grey wax seal, inline slate round fake-postmark partly over address line 2. Right column x 1100–1800 names, y 300/420/540/660 (English 48px / Hindi 38px): "Non-postal stamps" / "गैर-डाक टिकट"; "Charity labels" / "धर्मार्थ लेबल"; "Seals" / "सील"; "गुमराह करने वाली impressions". Header above (y 210): "address side पर नहीं" with slate cross. Bottom strip y 900–990: "address न छिपाएँ".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope shown; name 1 + revenue label fade |
| 1.40 | — | — | name 2 + charity label |
| 3.48 | — | — | name 3 + seal pop |
| 4.76 | — | — | name 4 + fake mark pop |
| 7.04 | — | — | header fade; slate cross 8.5 |
| 9.66 | — | — | bottom strip reveal; circle round mark over address 10.12 |

## s096
Continues: s095
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: they must not obstruct postal work; a non-postal label is not cancelled like a stamp. Sub-shots: `#labels` (s095 layout) 0.00, `#cancel` 4.04.
`#labels`: bottom strip adds " · postal काम में रुकावट नहीं".
`#cancel`: left `cancelled-stamp` scale 1.0 centred (560, 520), caption (y 820) "postage stamp" / "cancel होता है"; right `non-postage-labels` scale 1.8 centred (1360, 520), caption "Non-postal label" (48px) / "cancel नहीं किया जाता" (slate).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#labels` as s095 end |
| 0.76 | — | — | strip addition fade |
| 4.04 | — | — | cut `#cancel`: right label + caption shown |
| 5.48 | — | — | left cancelled stamp + caption fade |
| 7.08 | — | — | slate cross by right caption; underline "नहीं" 7.48 |

## s097
Continues: no
Section label: PART 4 · VALID STAMPS & AFFIXING
In: fade 0.5. Wide.
Idea: invalid payment and suspected fraud are different. Component: compare-cards, moulded: top line "एक फर्क" (red 52px, y 210); left card x 140–900, y 280–980, red band "Invalid payment" / "अमान्य भुगतान"; right card x 1020–1780, yellow band "Fraud का शक" / "धोखाधड़ी का शक"; no VS disc yet, no takeaway. Left body: inline damaged stamp (postage-stamp look, slate scuffs) ~200 px; lines "postage नहीं चुकता" (slate cross), "fraud साबित नहीं". Right body: `cancelled-stamp` ~200 px; line "पहले इस्तेमाल हुआ stamp, धोखे से दोबारा".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "एक फर्क" + empty card frames shown |
| 1.30 | — | — | left band fade |
| 2.78 | — | — | right band fade |
| 5.16 | — | — | damaged stamp pops |
| 6.22 | — | — | line 1 fade; slate cross 6.94 |
| 8.26 | — | — | line 2 fade |
| 10.00 | — | — | cancelled stamp pops; line fade 11.24; highlight "धोखे से" 11.58 |

## s098
Continues: s097
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: reused stamp caught → item not delivered; then the exam points. Sub-shots: `#fraud` 0.00, `#exam` 7.91.
`#fraud`: "≠" disc (slate, 100 px) between the cards (960, 600); slate round verdict in right card bottom (y 860): "item deliver नहीं होगा".
`#exam` (held through s100): red heading "परीक्षा के लिए" (x 140, y 210). White document card x 120–1800, y 260–990, four rows 175 tall, icon left (x 200, ~120 px) + Hindi 44px with English terms inline: 1 `postage-stamp` "Postage के लिए सही प्रकार का valid stamp"; 2 inline SERVICE stamp; 3 `perforated-initials-stamp`; 4 `address-envelope` (tiny, with stamp).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | cards as s097 end; "≠" pops |
| 4.02 | — | — | verdict stamps in (6.5 lands = "नहीं") |
| 7.91 | — | — | cut `#exam`: heading + card shown |
| 9.01 | — | — | row 1 icon + text fade; band row 1 |
| 10.49 | — | — | highlight "सही प्रकार"; green tick 12.09 |

## s099
Continues: s098
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: service stamp only for authorised government mail; identifying holes allowed if country and value readable. Row 2: "Service stamp: सिर्फ authorised सरकारी डाक". Row 3: "पहचान के छोटे छेद मंज़ूर" + second line (38px) "अगर देश और value पढ़े जा सकें".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#exam` row 1; band to row 2, row 2 icon + text fade |
| 2.02 | — | — | underline "सिर्फ authorised" |
| 4.32 | — | — | band to row 3; icon + line 1 fade |
| 6.54 | — | — | green tick on row 3 |
| 7.60 | — | — | row 3 line 2 fade |

## s100
Continues: s099
Section label: PART 4 · VALID STAMPS & AFFIXING
In: cut. Wide.
Idea: the stamp's place. Row 4: "Stamp की जगह: address side का top right-hand corner".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | band to row 4; icon + "Stamp की जगह:" fade |
| 1.16 | — | — | "address side का top right-hand corner" fade |
| 2.30 | — | — | highlight "top right-hand corner" |

## s101
Continues: no
Section label: RECAP · PARTS 3–4
In: wipe (from right, 0.6). Wide.
Idea: four things to remember. Component: recap-card, moulded to 4 rows, centred x 260–1660, y 170–990; flap "RECAP · दोहराव", red title "Part 3 + 4", seal "4". Rows (English 52px / Hindi 38px, pill right):
1 "Definitive stamps" / "रोज़ की डाक के टिकट" — pill "25 paise से"
2 "Commemorative stamps" / "स्मारक डाक टिकट" — pill "postage ✓ · जीवित व्यक्ति नहीं"
3 "Private letter" / "निजी पत्र" — pill "valid postage stamp"
4 "top right-hand corner" / "ऊपर दायाँ कोना" — pill "address side · पूरा चिपका"
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card, flap, title, seal shown |
| 1.40 | — | — | row 1 term fade; Hindi 2.5 |
| 4.68 | — | — | row 1 pill pops; green tick 5.84 |
| 6.58 | — | — | row 2 term fade |
| 7.78 | — | — | pill part "postage ✓" |
| 9.42 | — | — | pill part "जीवित व्यक्ति नहीं"; tick 11.38 |

## s102
Continues: s101
Section label: RECAP · PARTS 3–4
In: cut. Wide.
Idea: rows 3 and 4 of the same recap card.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card as s101 end; row 3 term fade |
| 1.32 | — | — | row 3 pill pops; tick 2.76 |
| 3.76 | — | — | row 4 term fade |
| 5.90 | — | — | pill "address side"; highlight term 6.16 |
| 7.84 | — | — | pill "· पूरा चिपका"; tick 9.06 |
## s103
Continues: no
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: wipe (from right, 0.6). Wide, still.
Idea: Part opener, then "who may sell stamps": DG's prior permission, for everyone.
Sub-shots: `#title` 0.00, `#permit` 2.40.
`#title` Component: chapter-title — kicker `PART 5 · भाग 5`, English "Sale, Stock, Refund / & Cancellation", Hindi "टिकटों की बिक्री, stock, refund और booking cancellation", subtitle "Part 5 of 10 · भाग 5 / 10"; stamp icon: a small stamp sheet drawn inline, value "05".
`#permit` left (x120–900, y200–640): red perforated stamp-edge card, "Director General" 72 px white / "महानिदेशक" 44 px pale yellow; under it "prior permission" / "पूर्व अनुमति" on a white chip. Right (x1000–1800, y200–760): heading "कौन?" then four stacked sand chips (Hindi 48 px): व्यक्ति · संस्था · संगठन · इलेक्ट्रॉनिक प्लेटफ़ॉर्म. Bottom band y800–980 left empty for s104.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title shown; underline draw |
| 2.40 | wide | — | cut to #permit; heading "कौन?" shown |
| 2.50 | — | — | DG card pop; Hindi fade 3.00 |
| 3.86 | — | — | permission chip slide up; Hindi fade 4.40; highlight "prior" 4.12 |
| 6.14 / 6.84 / 7.80 / 9.60 | — | — | chips fade in, one each |

## s104
Continues: s103
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide.
Idea: the rule covers everyone and every kind of stamp business, online too.
Sub-shots: `#permit` (carried) 0.00, `#trade` 1.12.
`#trade`: top strip (x100–1820, y180–280) red pill "Director General की prior permission ज़रूरी". Three tiles on envelope panels (x140–620, 720–1200, 1300–1780; y330–720): `stamp-sheet` "बेचना"; `adhesive-stamp` ×3 fanned with two ink arrows outward "बाँटना"; `rupee-cash` "कोई और कारोबार". Green bracket under all three y740 "सब इसमें आता है". Bottom-right: `smartphone-blank` small (scale 0.5, at x1500 y800–1000 base) with a stamp drawn on its screen, left of it "Online बिक्री भी — नियम से बाहर नहीं" (Hindi 44 px, x420–1360 y900).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | #permit held; yellow highlight sweep over the four chips ("सबके लिए") |
| 1.12 | — | — | cut to #trade; pill shown |
| 2.00 / 3.08 / 5.94 | — | — | tiles pop in, one each |
| 6.78 | — | — | bracket draw + label fade |
| 8.34 | — | — | phone slide from right; line fade 8.76 |
| 10.24 | — | — | underline "बाहर नहीं" |

## s105
Continues: no
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: fade 0.5. Wide; slow push-in 5% on the verdict from 6.5, holds to cut.
Idea: no permission, or a broken condition → penalty under the applicable law.
Layout: left, two stacked white cards (x120–900): top y220–500 "बिना permission" (permission / अनुमति beneath in grey) with a slate cross; bottom y560–840 "permission की शर्त तोड़ी" with a slate strike on a drawn condition line. Ink arrows from both to the right. Right (x1100–1760): `regulations-book` (scale to ~520 tall, title panel lettered "लागू कानून") y240–760; under it a round slate postmark "सज़ा" y800–980.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "अनुमति के बिना?" grey 44 px at top-left; book outline shown faint |
| 0.96 | — | — | card 1 pop; cross draw 1.30 |
| 3.46 | — | — | card 2 pop; strike 3.98 |
| 5.34 | — | — | both arrows draw |
| 6.48 | push 1.05 on book | — | book title "लागू कानून" fade 6.92 |
| 7.74 | — | — | postmark "सज़ा" stamp |

## s106
Continues: no
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: fade 0.5. Wide.
Idea: supply, upkeep and sale follow operational instructions; then sale price — the four stationery items.
Sub-shots: `#ops` 0.00, `#items` 6.68.
`#ops`: three sand chips in a column left (x140–700, y260/480/700): "Supply / आपूर्ति", "रखरखाव", "बिक्री"; ink arrows converge right to a white document card (x900–1780, y300–780) with `regulations-book` small at its left and "Operational instructions" 64 px / "परिचालन निर्देश" 44 px.
`#items`: heading "बिक्री की कीमत" red y210. Four props in a row on a shared baseline y700, centres x300 / 720 / 1140 / 1560: `postage-stamp`, `postcard-blank`, `letter-card`, `aerogramme`; English name 48 px under each with Hindi 38 px: डाक टिकट · पोस्टकार्ड · अंतर्देशीय पत्र · एयरोग्राम.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | doc card outline shown; chip 1 slide 0.70 |
| 1.36 / 3.10 | — | — | chips 2, 3 slide in |
| 4.04 | — | — | arrows draw; term type, Hindi fade 4.60 |
| 6.68 | — | — | cut to #items; heading words 6.84 |
| 8.18 / 9.64 / 11.02 / 12.54 | — | — | each prop place on baseline, label fade +0.5 |

## s107
Continues: s106
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide.
Idea: these four sell at face value; embossed and registration envelopes at the Regulations' schedule. Starts the price table that holds through s109.
Sub-shots: `#items` (carried) 0.00, `#table` 3.12.
`#items`: green-edged pill under the row (x460–1460, y820–920): "छपे stamp की value पर".
`#table`: title "बिक्री की कीमत — कौन तय करता है?" red y200. White table card x100–1820, y260–990, four rows of ~180; left cell x120–1100 (item), right cell x1140–1800 (price basis on yellow-soft pill). Row 1 at once: the four mini icons + pill "छपी value". Row 2: `embossed-envelope` + `registration-envelope` (scale ~0.25) beside "Embossed / Registration envelopes" 48 px with "उभरे टिकट वाले / रजिस्ट्री लिफ़ाफ़े" 36 px; pill: `regulations-book` mini + "Regulations की schedule".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | four props held |
| 1.08 | — | — | pill pop; highlight "value" 1.68 |
| 3.12 | — | — | cut to #table: title, card, row 1 shown |
| 3.12 / 5.20 | — | — | embossed icon pop, "Embossed"; registration icon pop, its line; Hindi fade 5.70 |
| 7.40 | — | — | pill fade; highlight "schedule" 8.82 |

## s108
Continues: s107
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide; table held.
Idea: Rakhi envelopes priced by the Circle Head; philatelic stamps at printed value.
Row 3: a white envelope drawn inline with a small red-yellow thread knot on its flap (no logo) + "Special Rakhi Envelopes" 48 px / "विशेष राखी लिफ़ाफ़े" 36 px; pill "Circle Head" / "सर्किल प्रमुख".
Row 4: `postage-stamp` mini + small album drawn inline + "Philatelic stamps & material" / "डाक-टिकट संग्रह के टिकट और सामग्री"; pill "छपी value" (left half of the cell, room kept for s109).
Earlier rows dim to grey ink at 0.00 (not removed).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | table rows 1–2 held; row 3 envelope pop |
| 0.54 | — | — | row 3 English type; Hindi fade 1.30 |
| 3.58 | — | — | pill fade "Circle Head"; Hindi 4.00; highlight 4.32 |
| 5.42 | — | — | row 4 icons pop; English type; Hindi fade 6.30 |
| 8.90 | — | — | pill "छपी value" fade; highlight 9.78 |

## s109
Continues: s108
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide.
Idea: or value set by administrative instructions; never mix a collection/accessory price with postage credit.
Sub-shots: `#table` (carried) 0.00, `#credit` 3.96.
Row 4 pill extends: "या administrative instructions में तय value" (right half of cell).
`#credit`: left white card (x140–820, y260–860): stamp album with a corner mount drawn inline, tag "Collection / accessory की कीमत" Hindi 44 px. Right white card (x1100–1780): `postage-stamp` big + "Postage credit" 56 px / "डाक मूल्य" 40 px. Centre: slate "≠" 160 px at x960. Bottom (y900–980): "दोनों को मत मिलाइए" 48 px.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | table held, row 4 lit |
| 0.58 | — | — | second pill fade; underline "administrative instructions" 1.70 |
| 3.96 | — | — | cut to #credit; left card pop, tag type 4.52 |
| 6.56 | — | — | right card pop; term type 7.64; Hindi fade 8.10 |
| 8.66 | — | — | "≠" pop |
| 9.14 | — | — | bottom line fade |

## s110
Continues: no
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: fade 0.5. Wide.
Idea: stock safety protects stamps from loss and damage; stock stays in the office safe.
Layout: left top (x120–900): heading "Stock की हिफ़ाज़त" red 64 px y220; two sand chips y300–520: "गुम होने से" with a dashed-outline stamp sheet drawn inline, "खराब होने से" with a creased, stained sheet drawn inline (slate tint). Lower-left y560–980 kept free for s111. Right: `office-safe` scale 1.15, base (1420, 990), door open showing its shelf; label "Safe / तिजोरी" beside it at x1060 y300.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `stamp-sheet` small shown at centre-left as anchor; heading type 0.16 |
| 1.92 | — | — | thin green shield line under heading "बचाता है" draw |
| 3.06 | — | — | chip 1 pop |
| 5.34 | — | — | chip 2 pop |
| 6.64 | — | — | safe draw (0.9); stamp sheet slides into the safe door area (place on shelf) |
| 7.82 | — | — | "Safe" fade; Hindi 8.30 |

## s111
Continues: s110
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide; same layout.
Idea: inside the safe, a wooden or tin box; if it won't fit, the prescribed protective case or book with blotting paper between pages.
Layout adds: `stamp-tin-box` (scale 0.8) placed on the safe's shelf, label "लकड़ी या टीन का box" 44 px under the safe-label. Lower-left (x120–900, y580–980): white card "Box ठीक न बैठे तो" heading; an open book drawn inline: two pages each holding a stamp sheet, pale envelope-coloured blotting sheets between, label "Protective case / book" + "बीच में blotting paper".
Chips from s110 fade to grey at 2.70.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | safe + sheet held; box place on shelf |
| 0.98 | — | — | box label fade |
| 2.70 | — | — | s110 chips → grey; card pop, heading type 3.40 |
| 5.38 | — | — | book draw; "Protective case / book" fade 6.14 |
| 9.08 | — | — | blotting sheets fade; label fade, highlight "blotting paper" 9.64 |

## s112
Continues: s111
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide.
Idea: even by day most stock stays inside; take out only one day's or half a day's sale.
Sub-shots: `#store` (carried) 0.00, `#day` 0.94.
`#day`: left `office-safe` (scale 1.0, base 560,990) with three `stamp-sheet`s stacked on its shelf; a small sun drawn inline top-left with "दिन में भी". Label above safe "ज़्यादातर stock: अंदर". Ink arrow right to `post-counter-icon` (base 1420,990, scale to ~560 wide) with one `stamp-sheet` (small) on its ledge; label above "बाहर: एक दिन / आधे दिन की बिक्री" (Hindi 48 px, y260).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | #store held |
| 0.94 | — | — | cut to #day; safe + stacked sheets + sun shown |
| 1.68 | — | — | safe label type; highlight "ज़्यादातर" 1.80 |
| 4.52 | — | — | arrow draw; counter pop |
| 5.34 | — | — | one sheet place on counter |
| 5.72 | — | — | counter label words; highlight "आधे दिन" 6.58 |

## s113
Continues: no
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: fade 0.5. Wide.
Idea: keep each supply apart; sell the older supply of a denomination first, then start the new one.
Layout: top centre key term "Denomination" 72 px / "मूल्यवर्ग" 44 px (y200–330). Two stacks of `stamp-sheet` (same colour = same denomination), left stack centre x560, right x1360, base y880; a dashed ink divider between at x960 ("अलग"). Labels above stacks: "पहले वाली supply" / "नई supply". Under each a numbered badge: green "1 · पहले बेचिए", then grey→ink "2 · फिर शुरू".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both stacks shown, unlabelled |
| 0.32 | — | — | divider draw; "अलग रखिए" fade 0.86 |
| 2.40 | — | — | term type; Hindi fade 2.90 |
| 3.40 | — | — | left label fade |
| 4.58 | — | — | badge 1 stamp (green) |
| 6.94 | — | — | ink arrow left → right stack draw |
| 8.46 | — | — | right label fade |
| 9.62 | — | — | badge 2 pop |

## s114
Continues: s113
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide.
Idea: otherwise sheets get mixed up on the counter; then refund: unused stamps or stationery normally not refunded. Opens the refund card held to s117.
Sub-shots: `#supply` (carried) 0.00, `#mess` 0.44, `#refund` 6.08.
`#mess`: `post-counter-icon` centred (x560–1360, base y990) with a stamp pad drawn inline and three `stamp-sheet`s lying askew (slate tint); slate cross top-right; label "counter पर इधर-उधर" 48 px y220.
`#refund`: white document card x100–1820, y180–990: header "Refund / धनवापसी" red; tag "सार (gist)" grey at top-right; left mini icons `stamp-sheet` + `postcard-blank` with a slate ↩ struck; Line 1 (Hindi 44 px): "Post Office unused stamps या stationery की value normally वापस नहीं करता".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | #supply held |
| 0.44 | — | — | cut to #mess; pad + sheets shown |
| 3.12 | — | — | label fade |
| 4.26 | — | — | cross draw |
| 6.08 | — | — | cut to #refund; card + header type 6.24 |
| 8.88 | — | — | icons pop |
| 9.42 | — | — | line 1 fade; ↩ strike 13.08 |

## s115
Continues: s114
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide; refund card held.
Idea: nor exchanged for another denomination or type; a wrong-denomination buyer has no general right to cash or exchange.
Card adds Line 2: "न दूसरी denomination या प्रकार से बदलता है" (with a small two-stamp ⇄ icon, slate strike). Line 3: "गलत denomination खरीदा, तब भी cash वापसी या बदलने का आम हक नहीं". Line 1 dims to grey at 4.72.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card + line 1 held |
| 0.58 | — | — | line 2 fade |
| 3.66 | — | — | ⇄ icon pop, strike 4.14 |
| 4.72 | — | — | line 1 → grey; line 3 fade (words), first part |
| 8.48 | — | — | highlight "cash वापसी या बदलने" |

## s116
Continues: s115
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide; refund card held; slow push 1.04 toward line 1 from 1.5, returns by 5.0.
Idea: the word "normally" matters: not every refund is barred; one given by a specific rule or administrative instruction is a different matter.
Card adds bottom strip (envelope panel, y800–970): "हर refund मना नहीं" + chip "खास rule या administrative instruction में दिया refund".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card held; underline "हक नहीं" on line 3 |
| 1.50 | push 1.04 on line 1 | — | — |
| 1.92 | — | — | highlight words "normally" (yellow) |
| 3.64 | — | — | underline "normally" |
| 5.00 | return 1.0 | — | — |
| 5.96 | — | — | strip pop; "हर refund मना नहीं" type |
| 7.32 | — | — | chip fade; highlight "administrative instruction" 9.66 |

## s117
Continues: s116
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide.
Idea: "a different matter" closes refunds; booking cancellation is a separate rule, Regulation 23A, in force from 15 July 2026. Rule card held to s120.
Sub-shots: `#refund` (carried) 0.00, `#reg` 1.79.
`#reg` Component: rule-card — left red stamp badge (x100–620, y180–990) "REGULATION · विनियम", "23A" huge white; no act name. Right white card (x660–1820): heading "Booking cancellation" 60 px / "बुकिंग रद्द करना" 40 px; body reserved for three case rows (s118–s119) and a refund strip; red round postmark "15 July 2026 · से लागू" top-right. Drop the two chips; no Georgia text (gist only, labelled सार).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | refund card held; chip gets yellow band "अलग बात" 0.88 |
| 1.79 | — | — | cut to #reg; card shown; heading type 2.25 |
| 2.80 | — | — | Hindi fade |
| 5.35 | — | — | badge "23A" pop (5.87) |
| 7.75 | — | — | postmark stamp |
| 9.93 | — | — | underline "से लागू" |

## s118
Continues: s117
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide; rule card held.
Idea: self-booked via web portal/mobile app → cancel before the Post Office accepts it; counter booking → sender may request cancellation the same day.
Card rows (each y-band ~150, icon left x700, text x840–1780, Hindi 42 px):
Row 1: `smartphone-blank` (scale 0.25) — "Web portal / mobile app से खुद book" → green pill "accept से पहले cancel".
Row 2: `post-counter-icon` (scale ~0.3) — "Counter booking" / "काउंटर बुकिंग" → pill "sender: उसी दिन request".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | rule card held |
| 0.30 | — | — | row 1 icon pop |
| 2.32 | — | — | row 1 text fade |
| 5.56 | — | — | pill fade; highlight "पहले" 6.50 |
| 8.46 | — | — | row 2 icon pop; term type; Hindi fade 9.00 |
| 10.74 | — | — | pill fade; highlight "उसी दिन" 11.24 |

## s119
Continues: s118
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide; rule card held.
Idea: a data-entry error → the Post Office itself may cancel the counter booking the same day; refund of postage after cancellation…
Row 3: a `counter-receipt` (scale 0.3) with one line struck slate — "Data entry गलत" → pill "Post Office खुद, उसी दिन cancel".
Refund strip at card bottom (envelope panel): "Cancellation के बाद postage का refund →" (completed in s120).
Rows 1–2 dim to grey at 6.60.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card rows 1–2 held; receipt pop |
| 0.40 | — | — | row 3 text fade; strike on receipt line 0.72 |
| 2.38 | — | — | pill fade; highlight "उसी दिन" 3.74 |
| 6.60 | — | — | rows 1–2 grey; strip pop, text words |

## s120
Continues: s119
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide.
Idea: refund per the Department's administrative instructions; then the trap: returning unused stamps vs cancelling a booking.
Sub-shots: `#reg` (carried) 0.00, `#trap` 5.33.
Refund strip completes: "Department के administrative instructions के हिसाब से".
`#trap` Component: exam-trap — banner "EXAM TRAP · परीक्षा का जाल" + one Hindi line "दो अलग transactions"; two white cards (x140–900 / x1020–1780, y380–860): left "Unused stamps की sheet लौटाना" with `stamp-sheet` in place of the number stamp; right "Booking cancel करना" with `envelope-article` (filled s121). No numbers; remember-bar filled in s121.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | rule card held |
| 0.40 | — | — | strip text completes (fade); highlight "administrative instructions" 1.76 |
| 5.33 | — | — | cut to #trap; banner shown, triangle pop 5.71 |
| 6.75 | — | — | left card pop, text type; sheet pop 8.27 |

## s121
Continues: s120
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide.
Idea: two separate transactions; cancellation refund has its own conditions. Then the exam angle.
Sub-shots: `#trap` (carried) 0.00, `#exam` 8.24.
Trap: right card + remember-bar "Cancellation पर refund की अपनी शर्तें".
`#exam`: white card x100–1820, y180–990, red header "Exam angle · परीक्षा की नज़र से" (y180–280). Four rows (~170 each): left English term 52 px bold + Hindi 38 px; ink arrow; right yellow-soft pill (Hindi 44 px). Row 1: "Director General" / "महानिदेशक" → "stamps के कारोबार की prior permission".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | trap left card held; right card pop 0.73, text type |
| 2.39 | — | — | banner line highlight "दो अलग" |
| 5.03 | — | — | remember-bar slide up |
| 8.24 | — | — | cut to #exam; card + header shown |
| 9.62 | — | — | row 1 pill fade |
| 11.54 | — | — | row 1 term type; Hindi fade 12.00 |

## s122
Continues: s121
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide; exam card held.
Idea: online too; Rakhi Envelope price: Circle Head; self-booked item: cancel before acceptance.
Row 1 pill gains "+ online भी". Row 2: "Rakhi Envelope" / "राखी लिफ़ाफ़ा" → pill "कीमत: Circle Head". Row 3: "Self-booked item" / "खुद book किया item" → pill "accept से पहले cancel".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 1 held; "+ online भी" fade |
| 1.34 | — | — | row 2 term type; Hindi fade 1.90 |
| 3.50 | — | — | row 2 pill fade |
| 5.14 | — | — | row 3 term type; Hindi fade 5.60 |
| 6.52 | — | — | row 3 pill fade; highlight "पहले" 8.30 |

## s123
Continues: s122
Section label: PART 5 · SALE, STOCK, REFUND, CANCELLATION
In: cut. Wide; exam card held (holds to cut; s124 wipes in).
Idea: counter booking: the same day.
Row 4: "Counter booking" / "काउंटर बुकिंग" → pill "उसी दिन".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | rows 1–3 held; row 4 term type |
| 0.40 | — | — | Hindi fade |
| 0.70 | — | — | pill pop; highlight "उसी दिन" 1.76 |
## s124
Continues: no
Section label: PART 6 · POSTAL STATIONERY
In: wipe (from right, 0.6). Wide, still.
Idea: Part 6 opens; then the three stamped items and their printed stamp = value already paid.
Sub-shots: `#title` 0, `#items` 3.40.
`#title` — Component: chapter-title: kicker `PART 6 · भाग 6`, title "Postal Stationery", Hindi "डाक स्टेशनरी", dots "Part 6 of 10 · भाग 6 / 10"; stamp icon a postcard, value `06`.
`#items`: three pieces on a row, each scale 0.95, bases y 640: `postcard-blank` x 420, `letter-card` x 960, `embossed-envelope` x 1500; under each English term 56 px (y 720) + Hindi 40 px (y 775): Postcard / पोस्टकार्ड · Letter card / अंतर्देशीय पत्र · Embossed envelope / छपे टिकट वाला लिफ़ाफ़ा. Band y 880–980: "छपा stamp या लिखावट = पहले से दी हुई value".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title already built (stamp, title) |
| 0.40 | — | — | underline draws under Hindi title |
| 3.40 | — | — | cut to `#items`: postcard + letter card pop with labels (stagger 0.12) |
| 3.56 | — | — | embossed envelope pops, label fades 0.5 s later |
| 5.52 | — | — | yellow rings draw round the three printed stamps (stagger 0.15) |
| 8.36 | — | — | band fades in; its line arrives by `words` |
| 11.16 | — | — | highlight "पहले से दी हुई value" |

## s125
Continues: no
Section label: PART 6 · POSTAL STATIONERY
In: fade 0.5. Wide.
Idea: a plain shop envelope is not prepaid; then the four items begin.
Sub-shots: `#plain` 0, `#four` 6.87.
`#plain`: `address-envelope` scale 1.5 centred x 700, y 300–900 (empty dashed stamp box); label above "बाज़ार से खरीदा सादा envelope" 48 px; right x 1240–1760: term "Prepaid" 80 px / "पहले से भुगतान" 44 px.
`#four`: heading strip y 170–240 "चार चीज़ें पहचानिए" + four numbered red dots; four white cards (#ead9a8 border) x 120–520, 547–947, 973–1373, 1400–1800, y 260–830, centres 320/747/1173/1600. Card 1: `postcard-blank` scale 0.7 at top (y 290–540), "Postcard" 56 px y 610, "पोस्टकार्ड" 40 px y 660, meaning 36 px y 730–780.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope already on screen, label types in by `words` |
| 2.68 | — | — | pulse the empty stamp box |
| 4.82 | — | — | "Prepaid" fades, Hindi 0.5 s later |
| 5.38 | — | — | slate strike on "Prepaid" |
| 6.87 | — | — | cut to `#four`: heading + four dots pop (stagger 0.1) |
| 8.41 | — | — | card 1 pops; postcard draws, term lands |
| 10.47 | — | — | meaning "एक card पर खुला संदेश" fades |

## s126
Continues: s125
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide, same `#four` layout (card 1 complete).
Idea: card 2 letter card, card 3 embossed envelope.
Card 2 (x 547–947): `letter-card` scale 0.7, "Letter card" / "अंतर्देशीय पत्र", meaning "एक sheet, मोड़कर गोंद से बंद". Card 3 (x 973–1373): `embossed-envelope` scale 0.7, "Embossed envelope" / "छपे टिकट वाला लिफ़ाफ़ा", meaning line 1 "postage छपा हुआ".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading + card 1 held; card 2 pops, letter card draws, term lands |
| 0.50 | — | — | Hindi term fades |
| 2.10 | — | — | meaning "एक sheet," fades |
| 3.64 | — | — | "मोड़कर गोंद से बंद" fades (second meaning line) |
| 6.22 | — | — | card 3 pops, envelope draws, term lands; Hindi 0.5 s later |
| 8.42 | — | — | meaning "postage छपा हुआ" fades; highlight on the printed stamp ring |

## s127
Continues: s126
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide, same `#four` layout.
Idea: card 3 finishes; card 4 aerogramme; aerogramme is not an inland letter card.
Card 3 meaning line 2 "अंदर letter या allowed चीज़ें". Card 4 (x 1400–1800): `aerogramme` scale 0.7, "Aerogramme" / "एयरोग्राम (हवाई पत्र)", meaning "International letter post की stationery". Bottom band y 850–990, envelope panel: "Aerogramme ≠ Inland letter card" 56 px, Hindi 40 px under it "कीमत के नियम में नाम साथ, फिर भी अलग".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | cards 1–3 held |
| 0.64 | — | — | card 3 meaning line 2 fades |
| 4.00 | — | — | card 4 pops, aerogramme draws, term lands; Hindi 0.5 s later |
| 5.22 | — | — | meaning fades |
| 8.12 | — | — | cards 1–3 fade to grey (`color` text #6f6a63); band fades in with "Aerogramme ≠" |
| 11.62 | — | — | "Inland letter card" lands; slate strike `words: 'Inland letter card'` at 13.04 |
| 12.20 | — | — | Hindi line fades |

## s128
Continues: no
Section label: PART 6 · POSTAL STATIONERY
In: fade 0.5. Wide.
Idea: a few example prices, not the full tariff; postcard 50 paise.
Sub-shots: `#note` 0, `#prices` 6.98.
`#note`: centred heading "कुछ कीमतें" 88 px red y 420; grey line 48 px y 540 "पूरा tariff नहीं · stationery के कुछ examples".
`#prices`: three white columns x 120–660, 690–1230, 1260–1800, y 200–980: piece scale 0.85 (y 230–560), English term 56 px y 640, Hindi 40 px y 695, price on a red perforated stamp chip (white 72 px) y 780–930. Column 1: `postcard-blank`, "Ordinary postcard" / "साधारण पोस्टकार्ड", chip "50 paise" (Hindi "50 पैसे" in chip foot).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading already shown |
| 2.05 | — | — | grey line arrives by `words` |
| 2.92 | — | — | slate strike `words: 'पूरा tariff'` |
| 5.68 | — | — | highlight "कुछ examples" |
| 6.98 | — | — | cut to `#prices`: column 1 card + postcard draw, term lands |
| 7.40 | — | — | Hindi fades |
| 8.85 | — | — | price chip `stamp` |

## s129
Continues: s128
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide.
Idea: letter card ₹2.50, domestic embossed envelope ₹5; then small registration envelope ₹22.50.
Sub-shots: `#prices` 0 (columns 2–3 fill), `#reg` 6.16.
Column 2: `letter-card`, "Letter card" / "अंतर्देशीय पत्र", chip "₹2.50". Column 3: `embossed-envelope`, "Domestic embossed envelope" (two lines) / "देशी छपे टिकट वाला लिफ़ाफ़ा", chip "₹5".
`#reg`: two rows, white cards x 120–1800: row 1 y 180–570, row 2 y 600–990 (row 2 empty until s130). Row 1: `registration-envelope` scale 0.85 left (x 140–480), term x 520 "Small registration" / "envelope" 56 px + "छोटा रजिस्ट्री लिफ़ाफ़ा" 40 px; red stamp chip x 1180–1460 "₹22.50" 72 px.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | column 1 held; column 2 card + letter card draw, term lands |
| 1.46 | — | — | chip "₹2.50" `stamp` |
| 2.37 | — | — | column 3 card + envelope draw |
| 3.33 | — | — | term lands; Hindi 0.5 s later |
| 5.11 | — | — | chip "₹5" `stamp` |
| 6.16 | — | — | cut to `#reg`: row 1 card + envelope draw, term at 7.07 |
| 9.22 | — | — | chip "₹22.50" `stamp` |

## s130
Continues: s129
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide, `#reg` layout.
Idea: ₹22.50 = ₹22 prepaid postage + 50 paise stationery charge; large envelope ₹23.
Row 1 breakdown strip y 450–560, x 520–1780: left panel (envelope #f3ead6) "₹22 · Prepaid postage" 48 px / "पहले से चुकाया डाक शुल्क" 36 px; "+"; right panel (white, #ead9a8) "50 paise · Stationery charge" / "स्टेशनरी शुल्क". Row 2 (y 600–990) mirrors row 1: `registration-envelope` scale 0.85, "Large registration" / "envelope" / "बड़ा रजिस्ट्री लिफ़ाफ़ा", chip "₹23".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 held with ₹22.50 chip |
| 0.56 | — | — | left panel `reveal` from left, "₹22" lands |
| 1.72 | — | — | "Prepaid postage" + Hindi fade |
| 3.54 | — | — | "+" and right panel reveal, "50 paise" lands |
| 4.54 | — | — | "Stationery charge" + Hindi fade |
| 6.20 | — | — | row 2 card + envelope draw |
| 6.78 | — | — | term lands; Hindi 0.5 s later |
| 8.10 | — | — | chip "₹23" `stamp` |

## s131
Continues: s130
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide, `#reg` layout.
Idea: ₹23 = ₹22 prepaid postage + ₹1 stationery charge; the stationery charge is the price of the stationery itself.
Row 2 breakdown strip y 870–980 like row 1 (English only, Hindi already shown above): "₹22 · Prepaid postage" + "₹1 · Stationery charge". The meaning "= लिफ़ाफ़े की कीमत" goes as one amber 40 px line under the row 1 title (x 520, y 420), pointing to both highlighted panels.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 complete, row 2 with ₹23 chip held |
| 1.09 | — | — | row 2 left panel reveals, "₹22" lands |
| 1.88 | — | — | "Prepaid postage" fades |
| 3.85 | — | — | "+" and right panel, "₹1" lands |
| 4.68 | — | — | "Stationery charge" fades |
| 6.37 | — | — | highlight both "Stationery charge" panels (stagger 0.2) |
| 8.97 | — | — | amber line "Stationery charge = लिफ़ाफ़े की कीमत" fades (x 520, y 420) |

## s132
Continues: s131
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide.
Idea: stationery charge is not postage; buying the envelope does not complete a registered booking.
Sub-shots: `#reg` 0, `#buy` 3.66.
`#reg`: slate tag "postage नहीं" (44 px, slate outline) pops beside both stationery-charge panels.
`#buy`: left `registration-envelope` scale 1.1 (x 160–600, y 300–800) with `rupee-cash` scale 0.6 below-right, label "खरीद लिया" 48 px; red arrow x 660–1000; right box x 1060–1780: "Registered booking" 72 px / "रजिस्टर्ड बुकिंग" 44 px; under it "पूरी नहीं" slate 56 px.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#reg` held complete |
| 2.40 | — | — | slate tags pop (stagger 0.15) on "postage नहीं" |
| 3.66 | — | — | cut to `#buy`: envelope already drawn |
| 5.26 | — | — | rupee-cash pops, "खरीद लिया" fades |
| 6.96 | — | — | arrow draws; "Registered booking" lands, Hindi 0.5 s later |
| 8.64 | — | — | slate strike on the term, "पूरी नहीं" fades |

## s133
Continues: no
Section label: PART 6 · POSTAL STATIONERY
In: fade 0.5. Wide.
Idea: making up a shortfall: an embossed item needs more postage than its printed stamp.
Layout: heading "कमी पूरी करना" 72 px red y 220 left x 140. Left: `embossed-envelope` scale 1.5 (x 140–740, y 300–900); label beneath "Unaccountable item" 56 px / "बिना रजिस्ट्री की साधारण डाक" 40 px (y 920–990, x 440 centre). Right x 900–1780: two relative bars (no numbers): "छपा stamp" short red bar y 460, "लगने वाला postage" long ink bar y 640; labels 44 px above each.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading already shown |
| 1.60 | — | — | envelope draws |
| 3.92 | — | — | term lands; Hindi 0.5 s later |
| 5.80 | — | — | "छपा stamp" bar grows (origin left) |
| 7.52 | — | — | "लगने वाला postage" bar grows longer |
| 8.44 | — | — | gap between bar ends gets a dashed outline segment (draw) |

## s134
Continues: s133
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide.
Idea: the sender adds extra stamps for the rest; example: a 35 g letter.
Sub-shots: `#gap` 0, `#scale` 4.14.
`#gap`: as s133; `adhesive-stamp` scale 0.8 joins the envelope beside the printed stamp; dashed gap fills with a yellow segment labelled "extra stamps" 44 px.
`#scale`: left `letter-scale` scale 1.4 (x 140–730, y 400–900) with `envelope-article` placed on its pan; readout window letters "35 g". Right panel x 860–1780, y 200–980 (white card, #ead9a8): title "Ordinary letter" 64 px / "साधारण पत्र" 44 px y 260–320 (rate lines come in s135).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#gap` with bars held |
| 1.98 | — | — | adhesive stamp pops on envelope |
| 2.34 | — | — | yellow segment grows into the gap; label fades |
| 4.14 | — | — | cut to `#scale`: scale already drawn |
| 4.34 | — | — | envelope `place` on pan; "35 g" types in readout |
| 6.42 | — | — | right card pops with "Ordinary letter"; Hindi 0.5 s later |

## s135
Continues: s134
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide, `#scale` layout.
Idea: rate: up to 20 g ₹5, each further 20 g or part ₹5; this letter ₹10.
Right card rows (Hindi 44 px, numbers 64 px): row 1 y 420 "20 g तक" → chip "₹5"; row 2 y 560 "हर अगले 20 g या उसके हिस्से पर" (2 lines) → chip "+ ₹5"; rule line y 720; result y 820 "इस letter पर" + big "₹10" on a red stamp chip.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | scale with 35 g and card title held |
| 0.00 | — | — | row 1 "20 g तक" fades |
| 1.26 | — | — | chip "₹5" pops |
| 2.02 | — | — | row 2 text arrives by `words` through 6.04 |
| 6.30 | — | — | chip "+ ₹5" pops |
| 8.22 | — | — | rule draws; "इस letter पर" fades |
| 9.10 | — | — | "₹10" `stamp`; highlight it |

## s136
Continues: no
Section label: PART 6 · POSTAL STATIONERY
In: fade 0.5. Wide.
Idea: the ₹10 letter goes in a ₹5 embossed envelope, so ₹5 more of valid stamps before posting.
Layout: top pill y 180–260 centred "35 g letter = ₹10" (carried fact). Equation row y 330–860: `embossed-envelope` scale 1.2 (x 140–620) with red "₹5" tag on its printed stamp, caption "छपा" 44 px; "+" 96 px x 700; group of two `adhesive-stamp` scale 1.2 (x 800–1180) with tag "₹5", caption "valid stamps" / "मान्य टिकट"; "=" x 1270; red stamp chip "₹10" x 1360–1760.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | top pill shown |
| 0.62 | — | — | envelope draws, "₹5" tag pops |
| 2.42 | — | — | caption "Domestic embossed envelope" 48 px fades under it |
| 4.78 | — | — | "+" fades |
| 6.68 | — | — | adhesive stamps pop (stagger 0.15), "₹5" tag |
| 7.56 | — | — | "valid stamps" + Hindi fade |
| 9.40 | — | — | "=" and "₹10" chip `stamp` |

## s137
Continues: s136
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide.
Idea: no paying the full ₹10 again; the printed ₹5 counts as credit; same logic for registration envelopes.
Sub-shots: `#sum` 0, `#reg2` 7.37.
`#sum`: slate line under the equation y 920 "पूरे ₹10 दोबारा"; green chip on the envelope "Credit / जमा".
`#reg2`: `registration-envelope` scale 1.6 left (x 140–780, y 260–900), term "Registration envelope" 64 px / "रजिस्ट्री लिफ़ाफ़ा" 44 px on the right x 880 y 380/440.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | equation held |
| 0.60 | — | — | slate line fades |
| 1.70 | — | — | slate strike on it |
| 2.44 | — | — | pulse the envelope's "₹5" tag |
| 4.62 | — | — | green "Credit" chip pops; Hindi 0.5 s later |
| 7.37 | — | — | cut to `#reg2`: envelope draws, term lands; Hindi 0.5 s later |
| 9.63 | — | — | grey line "यही सोच" 44 px fades under the term |

## s138
Continues: s137
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide, `#reg2` layout.
Idea: its ₹22 works like prepaid postage; registration is a value-added service for Speed Post documents and parcels.
Right side x 880–1780: chip y 540 "₹22 = Prepaid postage" (red stamp chip "₹22" + text 52 px, Hindi 40 px "पहले से चुकाया डाक शुल्क"). Card y 720–980 (envelope panel): "Registration" 56 px / "रजिस्ट्री", then "Speed Post documents और parcels की value-added service" 40 px (two lines).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + term held |
| 0.48 | — | — | "₹22" chip `stamp` |
| 1.48 | — | — | "Prepaid postage" fades; Hindi 0.5 s later |
| 5.36 | — | — | envelope panel fades with "Registration" + Hindi |
| 6.34 | — | — | detail line arrives by `words` through 9.48 |
| 9.48 | — | — | highlight "value-added service" |

## s139
Continues: no
Section label: PART 6 · POSTAL STATIONERY
In: fade 0.5. Wide.
Idea: work out the real booking: postage + chosen services, then credit the envelope's ₹22.
Layout: white sum card x 240–1680, y 200–960, Georgia working lines 56 px, left-aligned x 340, amounts column right x 1560 (words, no invented figures): line 1 y 330 "असली booking का postage"; line 2 y 460 "+ चुनी services का charge"; rule y 540; line 3 y 640 "− envelope के ₹22" with green "Credit / जमा" chip at right; rule y 720; line 4 y 820 "= बाकी रकम (stamps से)" in amber.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card shown with small `registration-envelope` scale 0.5 at top right (x 1480, y 220) |
| 1.04 | — | — | line 1 arrives by `words` |
| 3.60 | — | — | line 2 arrives by `words` |
| 5.14 | — | — | rule draws |
| 6.42 | — | — | line 3 fades |
| 8.02 | — | — | "₹22" highlighted |
| 8.66 | — | — | green "Credit" chip pops; rule 2 and line 4 fade at 9.02 |

## s140
Continues: no
Section label: PART 6 · POSTAL STATIONERY
In: fade 0.5. Wide.
Idea: Rakhi Envelope price is set by the Circle Head; not the ordinary embossed price, nor that prepaid value.
Layout: left x 140–760: envelope drawn inline (white envelope, a red-and-yellow rakhi thread with a round flower knot across it), term "Rakhi Envelope" 64 px / "राखी लिफ़ाफ़ा" 44 px beneath (y 820/880). Right x 860–1780: row 1 y 230–400 green-edged card "कीमत तय करते हैं: Circle Head" + "सर्किल प्रमुख" 40 px; row 2 y 470–640 "= ordinary embossed envelope की कीमत" slate; row 3 y 700–870 "= उतनी prepaid value" slate.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Rakhi envelope already drawn; term shown |
| 0.58 | — | — | Hindi term fades |
| 2.30 | — | — | row 1 card pops with "कीमत तय करते हैं:" |
| 3.62 | — | — | "Circle Head" lands; Hindi 0.5 s later |
| 6.60 | — | — | row 2 arrives by `words` |
| 9.20 | — | — | slate strike + slate cross on row 2 |
| 10.32 | — | — | row 3 arrives by `words` |
| 12.36 | — | — | slate strike + cross on row 3 |

## s141
Continues: no
Section label: PART 6 · POSTAL STATIONERY
In: fade 0.5. Wide.
Idea: exam angle: the three prices, and extra stamps for a shortfall (points build down one card, s141–s143).
Layout: white card x 140–1780, y 170–990; kicker red "Exam angle · परीक्षा के लिए" 52 px y 230. Five rows, each 140 high from y 280 (280, 420, 560, 700, 840). Row 1: three envelope-panel chips across (x 200–700, 720–1220, 1240–1740): "Postcard · 50 paise", "Letter card · ₹2.50", "Embossed envelope · ₹5" 48 px, Hindi terms 36 px under. Row 2: red dot + "छपे postage में कमी → extra stamps" 48 px.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card + kicker shown |
| 1.20 | — | — | chip 1 pops with "Postcard"; "50 paise" at 2.04 |
| 3.84 | — | — | chip 2 pops; "₹2.50" at 4.74 |
| 5.52 | — | — | chip 3 pops; "₹5" at 6.96 |
| 8.42 | — | — | row 2 arrives by `words` |
| 11.06 | — | — | highlight "extra stamps" |

## s142
Continues: s141
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide, same card.
Idea: a stamp cut from embossed stationery is not valid on another item; the registration envelope's ₹22 is prepaid postage.
Row 3 y 560: small inline drawing (embossed round stamp with dashed scissor cut line, 110 px) + "Embossed stationery से कटा stamp → दूसरे item पर नहीं" 46 px, slate cross at right. Row 4 y 700: green dot + "Registration envelope का ₹22 = Prepaid postage" 46 px. Rows 1–2 fade to grey at 0.00.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–2 held, turn grey; row 3 icon draws |
| 0.90 | — | — | row 3 text arrives by `words` |
| 4.04 | — | — | slate cross draws; strike `words: 'दूसरे item पर'` |
| 4.90 | — | — | row 4 arrives by `words` |
| 6.62 | — | — | highlight "₹22" |
| 8.84 | — | — | green tick draws beside row 4 |

## s143
Continues: s142
Section label: PART 6 · POSTAL STATIONERY
In: cut. Wide, same card.
Idea: the stationery charge is not added to the postage credit.
Row 5 y 840: "Stationery charge ≠ postage credit" 48 px, Hindi 36 px under "स्टेशनरी शुल्क जमा में नहीं जुड़ता". Row 3 turns grey.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–4 held; row 3 greys; "Stationery charge" lands |
| 1.32 | — | — | "≠ postage credit" fades |
| 2.20 | — | — | Hindi line fades |
| 3.02 | — | — | slate underline `words: 'नहीं'` |

## s144
Continues: no
Section label: RECAP · PARTS 5–6
In: wipe (from right, 0.6). Wide.
Idea: four takeaways of Parts 5–6 on one envelope card, held s144–s146.
Component: recap-card — four rows (not three); flap y 170–320 with "RECAP · दोहराव" and red title "Part 5 और Part 6"; seal "4". Rows x 200–1720 at y 340, 500, 660, 820 (row 4 taller, to 990). Each row: English term 52 px bold + Hindi 38 px left; yellow fact pill right x 1000–1700; green tick at x 1740.
Row 1: "Sale of stamps" / "टिकटों की बिक्री" · pill "DG की prior permission · online भी". Row 2: "Unused stamps" / "बिना इस्तेमाल के टिकट" · pill "न refund, न exchange".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card + flap + seal "4" shown |
| 1.12 | — | — | row 1 term lands; Hindi 0.5 s later |
| 2.38 | — | — | pill 1 pops |
| 5.38 | — | — | tick 1 draws |
| 6.40 | — | — | row 2 term lands; Hindi 0.5 s later |
| 8.28 | — | — | pill 2 pops |
| 9.50 | — | — | tick 2 draws |

## s145
Continues: s144
Section label: RECAP · PARTS 5–6
In: cut. Wide, same recap card.
Idea: rows 3–4: cancellation is a separate rule; printed postage counts as credit, extra stamps for a shortfall.
Row 3: "Booking cancellation" / "बुकिंग रद्द करना" · pill "अलग नियम". Row 4: "Postal stationery" / "डाक स्टेशनरी" · pill "छपा postage = credit · कमी पर extra stamps" (pill y 830–900).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–2 ticked, held |
| 0.90 | — | — | row 3 term lands; Hindi 0.5 s later |
| 1.68 | — | — | pill 3 pops |
| 2.74 | — | — | tick 3 draws |
| 3.36 | — | — | row 4 term lands; Hindi 0.5 s later |
| 5.10 | — | — | pill 4 pops; highlight "credit" |
| 7.24 | — | — | highlight "extra stamps" |

## s146
Continues: s145
Section label: RECAP · PARTS 5–6
In: cut. Wide, same recap card.
Idea: row 4 completes: registration envelope ₹22 postage, the rest stationery charge.
Second pill under row 4, x 1000–1700, y 910–975: "Registration envelope: ₹22 postage · बाकी stationery charge" 38 px.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–3 ticked, row 4 with pill held |
| 0.00 | — | — | second pill fades in with "Registration envelope:" |
| 1.48 | — | — | "₹22 postage" lands, highlighted |
| 3.06 | — | — | "बाकी stationery charge" fades |
| 4.24 | — | — | tick 4 draws; seal pulses once |
## s147
Continues: no
Section label: PART 7 · LETTER CARD
In: wipe (from right, 0.6). Wide, still.
Idea: Part 7 opens; then what a letter card is: one sheet of letter paper, folded and gummed, the message written on that same sheet.
Sub-shots: `#title` 0, `#def` 2.90.
`#title` — Component: chapter-title: kicker "PART 7 · भाग 7", title "Letter Card", Hindi "पत्र कार्ड", progress "Part 7 of 10 · भाग 7 / 10"; stamp window icon = `letter-card` (folded) at scale 0.7, value "07".
`#def` — term top-left (x140 y230): "Letter Card" 88 px, "पत्र कार्ड" 44 px beneath. Left: `letter-card` second use showing its #open view (hide #folded), scale 1.6, centre (560, 640). Right column x1060–1780, three Hindi lines 48 px at y430/600/770.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#title` already built (kicker, title, stamp) |
| 0.30 | — | — | Hindi title underline draws |
| 2.90 | — | — | cut to `#def`: term + Hindi fade; open sheet pop |
| 3.18 | — | — | words "letter लिखने के कागज़ की एक sheet" |
| 4.56 | — | — | words "ठीक से मोड़ी, गोंद लगी" |
| 6.32 | — | — | draw 5 grey ink writing lines inside the sheet (inline), stagger 0.15 |
| 7.72 | — | — | words "संदेश उसी sheet पर"; highlight "उसी sheet" |

## s148
Continues: no
Section label: PART 7 · LETTER CARD
In: fade 0.5. Wide.
Idea: nothing inside, nothing attached; a privately made letter card may also go.
Layout: two halves split by a thin grey rule at x960. Left: `letter-card` folded, scale 1.4, centre (520, 560); inline drawn small paper slip half-tucked into its top edge (x620 y380), inline drawn small paper tag clipped to its right edge (x800 y640). Captions under (y880): "अंदर कुछ नहीं · ऊपर कुछ नहीं" 48 px. Right: green-bordered envelope panel x1040–1780 y300–860: "Private letter card" 72 px bold, "निजी पत्र कार्ड" 44 px, `letter-card` folded scale 0.8 at (1410, 690), green tick top-right.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left letter card already there |
| 0.38 | — | — | slip pop on top edge |
| 1.24 | — | — | slate cross draws over slip; "अंदर कुछ नहीं" fade |
| 3.64 | — | — | tag pop on right edge |
| 4.40 | — | — | slate cross over tag; "ऊपर कुछ नहीं" fade |
| 5.74 | — | — | right panel pop; "Private letter card" type |
| 6.30 | — | — | Hindi fade |
| 7.92 | — | — | small card pop; green tick draws |

## s149
Continues: no
Section label: PART 7 · LETTER CARD
In: fade 0.5. Wide; slow push-in 1.0→1.06 on `#card` from 7.0, holds into s150 (returns at s150 2.0 cut).
Idea: a private letter card's conditions: fixed size and other rules, folded properly, closed on three sides with continuous gum or adhesive.
Layout: heading top-left (x140 y230) "Private letter card · शर्तें" 56 px. Left list x140–980, three rows with red number badges at y380/560/740, Hindi 46 px. Right `#card`: `letter-card` folded, scale 1.8, centre (1400, 600); three inline yellow (#f2b705) glue strips along its left, right and top edges.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading and card already shown |
| 1.94 | — | — | row 1 slide from left: "तय size + बाकी शर्तें" |
| 6.02 | — | — | row 2: "ठीक से मुड़ा" |
| 7.08 | push-in starts | — | — |
| 7.54 | — | — | row 3: "तीन sides पर लगातार गोंद / adhesive" |
| 8.88 | — | — | glue strips grow left, right, top (stagger 0.35) |

## s150
Continues: s149
Section label: PART 7 · LETTER CARD
In: cut. Sub-shots: `#prev` 0 (s149's layout), `#five` 2.00 (camera reset to wide on the cut).
Idea: card fully closed; then the five conditions, a rule card held through s153 (≈26 s), highlight moving row to row; earlier rows fade to grey.
`#five`: white document card x100–1820 y170–1000. Title "Letter card की 5 शर्तें" 56 px red at y240. Five rows (y330/470/610/750/890, 130 px), each: red number badge x170, Hindi text 44 px from x260, small inline/library icon at x1650.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | (push-in held) | — | s149 card with glue strips |
| 1.04 | — | — | green tick pops beside row 3 ("पूरा बंद") |
| 2.00 | wide | — | cut to `#five`: card + title |
| 3.03 | — | — | "5" in title pulse |
| 4.15 | — | — | row 1: "Postage पूरा prepaid" (English "Prepaid" 52 px, "पहले से चुकाया" 40 px beneath); icon: inline red stamp outline |
| 6.41 | — | — | row 1 fades grey; row 2: "वज़न ≤ 5 grams"; `letter-scale` scale 0.3 icon pop |
| 7.03 | — | — | highlight "5 grams" |

## s151
Continues: s150
Section label: PART 7 · LETTER CARD
In: cut. Wide; push-in `{on: '#row3', zoom: 1.12}` at 4.74, returns to wide by 10.6.
Idea: paper substance at least 70 gsm, and what that means: one square metre of the paper weighs at least 70 grams.
Row 3 text: "कागज़ की substance ≥ 70 g/m²" ("Substance" 52 px, "कागज़ का भार" 40 px beneath). Gist line inside row 3, grey 40 px, x700: "1 square metre कागज़ ≥ 70 grams"; icon: inline cream square sheet with "1 m²" inside.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–2 shown, row 2 highlighted |
| 0.68 | — | — | row 2 to grey; row 3 slides in |
| 2.06 | — | — | highlight "70 g/m²" |
| 4.74 | push-in on row 3 | — | — |
| 7.00 | — | — | square-sheet icon draw |
| 7.90 | — | — | gist line words |
| 9.62 | — | — | underline "70 grams" |
| 10.00 | return to wide | — | — |

## s152
Continues: s151
Section label: PART 7 · LETTER CARD
In: cut. Wide, still.
Idea: on a domestic letter card, once folded, "Letter Card" printed at the top-left corner of the address side.
Row 4: "Domestic letter card: मोड़ने के बाद address side के top-left पर “Letter Card” छपा" (Hindi 44 px, two lines). Icon x1560–1780: `letter-card` folded, scale 0.5, with inline text "LETTER CARD" 18 px in its top-left corner inside a yellow outline box.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–3, row 3 highlighted |
| 0.00 | — | — | row 3 to grey; row 4 slides in (first line) |
| 3.08 | — | — | small card icon pop |
| 4.64 | — | — | yellow outline box draws at top-left corner |
| 6.92 | — | — | "LETTER CARD" type inside box; highlight "Letter Card" in row 4 |

## s153
Continues: s152
Section label: PART 7 · LETTER CARD
In: cut. Sub-shots: `#five` 0, `#trap` 4.00.
Idea: fifth condition (nothing inside, nothing on top); then the size trap: open and folded sizes differ.
Row 5: "न अंदर कुछ, न ऊपर कुछ जुड़ा"; icon: inline slip with slate cross.
`#trap` — Component: exam-trap, moulded: banner "Size में trap · परीक्षा का जाल" (y170–330); two cards x140–940 and x980–1780, y380–980; drop the side stamps and the remember bar (numbers arrive in s154). Left card: "खुला letter card" + `letter-card` #open view scale 0.9; right (yellow border, the tricky one): "मुड़ा letter card" + `letter-card` folded scale 0.9.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–4; row 4 to grey; row 5 slides in |
| 1.20 | — | — | slip icon pop; slate cross draws at 2.28 |
| 4.00 | — | — | cut to `#trap`: banner pop |
| 4.77 | — | — | underline "trap" |
| 5.53 | — | — | left card + open sheet pop, "खुला" |
| 8.73 | — | — | right card + folded card pop, "मुड़ा" |

## s154
Continues: s153
Section label: PART 7 · LETTER CARD
In: cut. Wide; push-in to 1.05 on right card from 5.88, held into s155's fade.
Idea: open incl. flaps max 300 × 210 mm; folded max 210 × 100 mm. Each number holds ≥4 s.
Numbers in each card under the drawing, 72 px bold Inter at y880; "maximum · अधिकतम" grey label above at y800; "flaps मिलाकर" amber chip on left card's top-right.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | trap layout from s153 |
| 0.74 | — | — | chip "flaps मिलाकर" pop; flaps on open sheet highlight (color #fde9a6) |
| 2.58 | — | — | left "maximum · अधिकतम" fade |
| 3.00 | — | — | "300 × 210 mm" type (cps 14) |
| 5.88 | push-in right | — | — |
| 6.78 | — | — | right "maximum · अधिकतम" fade |
| 7.58 | — | — | "210 × 100 mm" type (cps 14) |
| 9.20 | — | — | yellow underline under "210 × 100 mm" |

## s155
Continues: no
Section label: PART 7 · LETTER CARD
In: fade 0.5. Wide, still.
Idea: the size table (minimums and flap sizes on screen), then the three flaps: left, right, top.
Left: Component: compare-table, moulded: white table x100–940 y200–960, header "Letter card size · आकार", columns "Maximum · अधिकतम" | "Minimum · न्यूनतम"; rows "खुला (flaps सहित)" 300 × 210 mm | …, "मुड़ा" 210 × 100 mm | …, "Flaps" | …. Minimum and flap cells only from the lesson material's table; none are in the narration, so if the scene writer doesn't have them, leave grey dashes, never guess. Right: `letter-card` #open view scale 2.0, centre (1380, 600); labels "left", "right", "top" (English 48 px, "बायाँ / दायाँ / ऊपर" 40 px) beside each flap.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table card + header already shown |
| 0.78 | — | — | rows reveal (stagger 0.3) |
| 2.84 | — | — | outline round table |
| 4.56 | — | — | open sheet pop |
| 5.24 | — | — | "3 flaps · तीन flaps" heading fade above sheet |
| 6.82 | — | — | #flap-left color #fde9a6; label "left" |
| 7.80 | — | — | #flap-right highlight; label "right" |
| 9.12 | — | — | #flap-top highlight; label "top" |

## s156
Continues: s155
Section label: PART 7 · LETTER CARD
In: cut. Sub-shots: `#flaps` 0 (s155 layout), `#mix` 5.80.
Idea: flaps may be left out if another effective method closes the card; then the trap: right numbers, wrong state.
`#flaps`: green-bordered chip under the sheet (x1000–1800 y880–980): "कोई और असरदार तरीका बंद करे → flaps छोड़ सकते हैं".
`#mix`: three stamp-edged tiles in a row, y380–760, x140–660 / 700–1220 / 1260–1780: "खुला · 300 × 210", "मुड़ा · 210 × 100", "खुला · 210 × 100". Heading y240: "Option में सही numbers, गलत हालत".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s155 table + labelled flaps |
| 1.42 | — | — | green chip pop, text words |
| 3.70 | — | — | three flaps color to grey |
| 4.30 | — | — | highlight "flaps छोड़ सकते हैं" |
| 5.80 | — | — | cut to `#mix`: heading + tiles 1–2 (green ticks) |
| 6.84 | — | — | tile 3 pop |
| 8.68 | — | — | slate strike on tile 3 "खुला"; slate cross |

## s157
Continues: s156
Section label: PART 7 · LETTER CARD
In: cut. Sub-shots: `#mix` 0, `#breach` 5.00.
Idea: keep open and folded apart; if a condition breaks, the letter card counts as a letter.
`#mix` adds a sand bar y840–960: "खुला ≠ मुड़ा · हमेशा अलग याद रखिए".
`#breach` (top half, y170–560, leaving the bottom for s158): question "शर्त टूटी, तो?" 56 px left at y230; `letter-card` folded scale 0.9 at (420, 430) with an inline slip tucked in its top; arrow → at x700–1100; `envelope-article` scale 0.9 at (1380, 430) with "Letter · पत्र" beneath.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three tiles from s156 |
| 2.06 | — | — | sand bar slide up; text words |
| 3.22 | — | — | underline "हमेशा अलग" |
| 5.00 | — | — | cut to `#breach`: question type |
| 7.89 | — | — | letter card + slip pop |
| 8.85 | — | — | arrow draw; envelope pop |
| 9.73 | — | — | stamp "Letter माना जाता है" (red postmark ring) on envelope |

## s158
Continues: s157
Section label: PART 7 · LETTER CARD
In: cut. Wide, still.
Idea: charge on delivery = twice the difference between letter postage and the valid postage already on the card.
Component: formula-card, moulded: one wide white card y600–990 x100–1820, no worked example. Kicker "Delivery पर charge" 48 px; formula in Georgia 60 px on one line: "2 × ( Letter का postage − card पर लगा valid postage )".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | breach row from s157 |
| 0.00 | — | — | formula card slide up; kicker fade at 0.40 |
| 1.94 | — | — | "( … − … )" brackets draw; label "फर्क" grey under them |
| 3.38 | — | — | "2 ×" stamp; highlight "2 ×" |
| 4.66 | — | — | "Letter का postage" words |
| 6.44 | — | — | "card पर लगा valid postage" words |
| 8.40 | — | — | underline "valid" |

## s159
Continues: no
Section label: PART 7 · LETTER CARD
In: fade 0.5. Wide, still.
Idea: worked example: a ₹2.50 letter card with something inside becomes a letter; letter postage ₹5.
Component: formula-card, moulded: left x120–760: `letter-card` folded scale 1.4 at (440, 560), its printed stamp reading "₹2.50" (scene lettering); label "Letter Card" 52 px under at y860 ("पत्र कार्ड" beneath). Right white working card x840–1800 y200–980, Georgia 56 px lines at y320/460/600/740, equals signs aligned.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | letter card + working card (empty) shown |
| 3.32 | — | — | "₹2.50" pop in stamp; pulse |
| 5.36 | — | — | inline slip slides down into card top (half visible) |
| 6.08 | — | — | slate ring round the slip draws |
| 7.62 | — | — | label swap "Letter Card" → "Letter · पत्र" |
| 9.38 | — | — | line 1: "Letter का postage = ₹5" words |
| 10.00 | — | — | highlight "₹5" |

## s160
Continues: s159
Section label: PART 7 · LETTER CARD
In: cut. Wide; push-in `{on: '#answer', zoom: 1.08}` at 3.86, returns by 6.6.
Idea: shortfall ₹2.50, doubled = ₹5 collected on delivery; extra stamps don't make the enclosure allowed.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | line 1 from s159 |
| 0.38 | — | — | line 2: "कमी = ₹5 − ₹2.50 = ₹2.50" |
| 2.10 | — | — | line 3: "दोगुना = 2 × ₹2.50 = ₹5" |
| 3.86 | push-in | — | `#answer` red pill under line 3: "Delivery पर ₹5 वसूले" pop |
| 4.80 | — | — | highlight "₹5" in pill |
| 6.60 | return | — | — |
| 7.14 | — | — | two `adhesive-stamp` (scale 0.45) pop beside the letter card (x650 y480, y640) |
| 9.64 | — | — | sand bar left y880–980: "extra stamps ≠ enclosure allowed" |
| 11.76 | — | — | slate strike on "allowed" |

## s161
Continues: s160
Section label: PART 7 · LETTER CARD
In: cut. Sub-shots: `#sum` 0, `#foreign` 4.90.
Idea: it is treated and charged as a letter; this rate isn't for foreign mail.
`#foreign`: two cards y240–960: left x140–900 "Domestic letter card" 60 px, "अंतर्देशीय पत्र कार्ड" 44 px, `letter-card` folded scale 0.9, green tick; right x1020–1780 "विदेश की डाक" 52 px, inline drawn small globe + airmail-striped arrow, slate.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | worked sum from s160 |
| 1.22 | — | — | highlight "Letter · पत्र" label |
| 3.24 | — | — | pulse on the ₹5 pill |
| 4.90 | — | — | cut to `#foreign`: both cards shown |
| 5.39 | — | — | globe draw |
| 6.43 | — | — | slate strike under right card: "ये rate नहीं" |
| 7.47 | — | — | left card highlight: "Domestic" |
| 8.85 | — | — | chip "rate" under left card fade |

## s162
Continues: s161
Section label: PART 7 · LETTER CARD
In: cut. Sub-shots: `#foreign` 0, `#aero` 2.80.
Idea: the domestic rate isn't the foreign letter tariff; the aerogramme is a separate international item; then a foreign item unpaid or short-paid…
`#aero`: left x120–900: `aerogramme` scale 1.5 at (500, 560), "Aerogramme" 72 px, "एयरोग्राम" 44 px beneath at y860. Right x1000–1800: `envelope-article` scale 1.0 at (1250, 500) with inline small globe; label "Unpaid / कम postage" chips below at y720.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | domestic vs foreign cards |
| 1.52 | — | — | right card text "विदेश letter tariff ≠" words; slate cross |
| 2.80 | — | — | cut to `#aero`: aerogramme pop |
| 2.94 | — | — | "Aerogramme" type; Hindi fade 3.50 |
| 5.10 | — | — | chip "अलग international item" pop |
| 7.34 | — | — | envelope + globe pop |
| 8.92 | — | — | chip "Unpaid · बिना postage" pop |
| 10.74 | — | — | chip "Short-paid · कम postage" pop |

## s163
Continues: s162
Section label: PART 7 · LETTER CARD
In: cut. Sub-shots: `#aero` 0, `#exam` 5.70.
Idea: such a foreign item isn't sent on; it goes back to the sender free. Then the exam angle card, held through s164.
`#aero` adds: forward arrow → (x1450–1780 y500) and a return arrow ← under it (y620).
`#exam`: postal-red header band y170–290 "Exam angle · परीक्षा दृष्टि"; white card y310–990 with five rows (y380/500/620/740/860), Hindi 44 px, a perforated red mini-stamp bullet each; earlier rows to grey as new ones land.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | aerogramme + foreign item |
| 0.60 | — | — | forward arrow draws; slate cross at 0.94 |
| 2.54 | — | — | return arrow draws; chip "Sender को वापस · बिना charge" (green) |
| 5.70 | — | — | cut to `#exam`: header band |
| 6.79 | — | — | row 1: "Letter card: ≤ 5 grams" |
| 8.01 | — | — | highlight "5 grams" |
| 9.29 | — | — | row 2: "कागज़ ≥ 70 g/m²"; highlight "70" at 10.07 |

## s164
Continues: s163
Section label: PART 7 · LETTER CARD
In: cut. Wide, still (card holds to the cut).
Idea: rest of the exam angle: nothing inside or on top; breach = letter, charged twice the shortfall; extra stamps don't allow an enclosure.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header + rows 1–2 |
| 0.00 | — | — | row 2 to grey; row 3 "अंदर या ऊपर कुछ नहीं" |
| 2.10 | — | — | row 3 to grey; row 4 "शर्त टूटी → Letter माना" |
| 5.22 | — | — | row 4 adds "कमी × 2"; highlight "× 2" |
| 6.78 | — | — | row 4 to grey; row 5 "Extra stamps से enclosure allowed नहीं" |
| 8.28 | — | — | slate strike on "allowed" |
## s165
Continues: no
Section label: PART 8 · POSTCARD
In: wipe (from right, 0.6). Wide, still.
Idea: Part 8 opens, then the postcard itself: a fixed-size open card with postage printed on it, not a letter in an envelope.
Sub-shots: `#title` 0, `#def` 5.10.
`#title` — Component: chapter-title: kicker "PART 8 · भाग 8", title "Postcard", Hindi "पोस्टकार्ड" (red, yellow underline), subtitle "तय size का आयताकार card · खुला संदेश", dots "Part 8 of 10 · भाग 8 / 10"; stamp icon = inline ink postcard, value "08".
`#def` — `postcard-blank` big, card ~900 wide at x 140–1040, y 300–880; right column x 1120–1800: callout "छपा postage · तय value" (arrow to #printed-stamp); below at x 1300–1800, y 640–940: `envelope-article` (scale 1.3) with caption "envelope में रखा छोटा letter".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title shot on: kicker, "Postcard" (stamp lands 0.00) |
| 0.88 | — | — | Hindi title + underline draw; subtitle words (to 4.60) |
| 5.10 | — | — | cut #def: postcard draws on |
| 6.72 | — | — | highlight printed stamp; callout fades 7.16 |
| 8.70 | — | — | envelope + caption fade |
| 10.72 | — | — | strike caption, slate cross by envelope; hold |

## s166
Continues: no
Section label: PART 8 · POSTCARD
In: fade (0.5). Wide, still.
Idea: six conditions in two groups. Title "Postcard की 6 शर्तें" (y 190). Two white panels, x 120–940 and x 1000–1820, y 280–990. Left header "Payment · वज़न · Size" (Hindi "भुगतान · वज़न · आकार" beneath); right header "card की बनावट". Rows only for what is named (no invented payment row). Left rows: (1) small `postcard-blank` with drawn dimension arrows, "Size · आकार", value "ठीक 140 × 90 mm" (big); (2) small `letter-scale`, "Weight · वज़न", value "अधिकतम 5 grams".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title + two empty panel frames |
| 2.94 | — | — | left header fades |
| 6.18 | — | — | right header fades |
| 8.46 | — | — | row 1 icon + "Size" term, Hindi 8.96 |
| 9.28 | — | — | value "140 × 90 mm" words (lands 10.84); underline "ठीक" 10.84 |
| 12.30 | — | — | row 2 icon + "Weight · वज़न" |
| 13.62 | — | — | "अधिकतम 5 grams" pop; hold |

## s167
Continues: s166
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: the card-make rows fill the right panel. Row 3 "खुला भेजें" (green tick); row 4 "न मोड़ें, न cover में" with two inline icons: a folded card and `postcard-blank` tucked into `envelope-article`, each with a slate cross; row 5 small `perforated-initials-stamp` + "छपे stamp पर initials के छोटे छेद: छूट" with green tick. Left rows stay full ink (5 rows total, nothing dims).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s166 card as left |
| 0.36 | — | — | row 3 "खुला भेजें" fades; green tick draws 0.82 |
| 2.08 | — | — | row 4 text + folded-card icon; slate cross 2.60 |
| 3.70 | — | — | envelope icon pops; slate cross 4.64 |
| 5.76 | — | — | row 5 stamp icon pops |
| 6.98 | — | — | row 5 text fades; highlight "initials" |
| 9.44 | — | — | green tick on "छूट"; hold |

## s168
Continues: no
Section label: PART 8 · POSTCARD
In: fade (0.5). Wide, still.
Idea: the space division begins on one big postcard diagram. Header "जगह का बँटवारा" (y 190, x 120). `postcard-blank` scaled so the card is ~1120×720 at x 120–1240, y 250–970; zone overlays drawn inline over its #divider, #printed-stamp, #address-rules. Right column x 1290–1820: term "Address side" (56 px) + "पते वाली ओर"; line "Right-hand half: 3 काम"; numbered rows 1–3 (red badges) that will match badges on the card.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | big postcard draws on |
| 0.90 | — | — | header types |
| 2.44 | — | — | "Address side" term; Hindi 2.90 |
| 3.72 | — | — | right half fills soft yellow #fde9a6; divider underline |
| 4.64 | — | — | "Right-hand half: 3 काम" fades |
| 6.88 | — | — | row 1 "पाने वाले का address" + badge 1 on address rules |
| 7.80 | — | — | address rules color amber; hold |

## s169
Continues: s168
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: rows 2 and 3, and where the stamp goes. Row 2 "stamp या stamping machine की impression" with a small `franking-impression` icon; badge 2 on the card's stamp zone (dashed box round #printed-stamp). Row 3 "postal directions" (Hindi "डाक निर्देश" beneath); on the card two short grey ruled lines at the upper-left of the right half, badge 3. Then one annotation: an ink arrow to the top right-hand corner with note "Stamp: top right corner (जहाँ तक हो सके)".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s168 diagram; badge 2 + stamp-zone box draw |
| 1.74 | — | — | row 2 text + impression icon fade |
| 3.20 | — | — | row 3 term; Hindi 3.70; card lines + badge 3 draw 3.78 |
| 5.08 | — | — | note text fades under rows |
| 8.50 | — | — | arrow draws to top-right corner |
| 9.40 | — | — | stamp zone pulse; hold |

## s170
Continues: s169
Section label: PART 8 · POSTCARD
In: cut (same card, re-composed). Wide, still.
Idea: the sender's space: left half of the address side plus the whole back. New layout used through s176: front card x 120–800, y 250–688 (right half still yellow, badges 1–3, no text); label below "Address side" + "पते वाली ओर" (y 715/758). Back card (inline plain buff card, same size) x 1140–1820, label "पीछे की side". Bottom strip y 790–1000: two tiles under the back card: "संदेश" (pen icon) and "छपा advertisement · एक या कई रंग".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | front card + label |
| 0.86 | — | — | front left half fills #f3ead6 with "Sender" tag |
| 1.46 | — | — | back card draws on; fills #f3ead6 at 2.38 |
| 3.18 | — | — | tag "sender के लिए" over both |
| 4.04 | — | — | tile "संदेश" fades |
| 7.26 | — | — | tile "छपा advertisement" fades; "एक या कई रंग" 8.94 |
| 10.22 | — | — | highlight "advertisement"; hold |

## s171
Continues: s170
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: sender's address goes top-left of the back; the stamp place on the address side may be marked by lines or dots. Back card: dashed white box at top-left with grey lines, label "Sender का address". Front card: a dotted rectangle round the top-right stamp spot, label "stamp की जगह".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s170 layout |
| 1.34 | — | — | back top-left box draws |
| 3.64 | — | — | box label fades; highlight "top left" 4.62 |
| 6.68 | — | — | front card stamp spot pulse |
| 9.56 | — | — | solid corner lines draw round stamp spot |
| 11.46 | — | — | dotted rectangle draws over them |
| 12.84 | — | — | "stamp की जगह" label fades; hold |

## s172
Continues: s171
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: nothing may be attached except four things. Sub-shots: `#a` 0 (exact s171 end frame), `#b` 2.09 (same two cards and labels; sender tiles gone; strip y 790–1000 holds four tiles 410×210 at x 120, 550, 980, 1410, each: number badge, icon left, Hindi lines right). A small chip "कुछ नहीं जोड़ते · बस 4 चीज़ें" (40 px) sits centred in the gap between the cards (x 820–1120, y 420–520).
Tile 1: `adhesive-stamp` icon, "Postage / postal fee के stamps".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#a`: s171 frame |
| 2.09 | — | — | cut `#b`: cards + empty strip |
| 4.75 | — | — | chip "कुछ नहीं जोड़ते · बस 4 चीज़ें" fades |
| 6.23 | — | — | tile 1 frame + badge pop |
| 7.13 | — | — | stamp icon pops; text fades 8.55 |
| 9.27 | — | — | highlight "stamps"; hold |

## s173
Continues: s172
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: tile 1 gets "सिर्फ address side पर" and a small `adhesive-stamp` lands on the front card's right half beside the printed stamp. Tile 2: inline gummed label icon (white label, grey lines, gum edge), "पाने वाले का gummed label · पूरा चिपका". Tile 3: inline small label icon, "Sender-address label".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s172 `#b` frame |
| 0.84 | — | — | tile 1 line "सिर्फ address side पर" fades |
| 1.34 | — | — | stamp pops on front right half |
| 2.36 | — | — | tile 2 frame + badge |
| 5.46 | — | — | label icon + "gummed label" text |
| 6.54 | — | — | "पूरा चिपका" fades |
| 8.06 | — | — | tile 3 frame + badge |
| 9.52 | — | — | label icon + "Sender-address label"; hold |

## s174
Continues: s173
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: tile 3 limit "≤ 50 × 20 mm" (big, highlight band); tile 4: inline thin framed picture icon (simple hill sketch), "बहुत पतले कागज़ पर" then "चित्र · drawing · photo".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s173 frame; tile 3 value words "50 × 20 mm" begin (lands 1.44) |
| 2.38 | — | — | "से बड़ा नहीं" fades; highlight value 2.70 |
| 3.26 | — | — | tile 4 frame + badge |
| 4.10 | — | — | picture icon draws; "बहुत पतले कागज़ पर" 5.28 |
| 6.06 | — | — | "चित्र · drawing · photo" words (gap 1.3, to 10.06); hold |

## s175
Continues: s174
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: tile 4 adds "पूरे चिपके". Both address labels go only on the back or on the address side's left half: two small inline label shapes appear on the back card (below the sender box), then dashed ghost labels on the front card's left half. One annotation: a curved ink arrow from tiles 2–3 up to the back card.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s174 frame |
| 0.34 | — | — | tile 4 "पूरे चिपके" fades |
| 1.30 | — | — | tiles 2 and 3 highlight |
| 2.98 | — | — | arrow draws to back card |
| 4.44 | — | — | two labels pop on back card |
| 7.20 | — | — | front left half outline pulse |
| 7.72 | — | — | dashed ghost labels draw there; hold |

## s176
Continues: s175
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: right half stays for its fixed uses; break a condition and the postcard counts as a letter. Sub-shots: `#a` 0 (s175 frame), `#b` 4.29 (rule card used through s178): top band y 180–520: `postcard-blank` (~420 wide) at x 200–620, red arrow x 680–960, `envelope-article` (scale 1.4) at x 1020–1420 with term "Letter · पत्र" beside it (x 1460); heading "शर्त टूटी" top-left. White card below y 560–1000, label "सार" (empty now).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#a` frame |
| 0.52 | — | — | front right half yellow outline draws |
| 1.78 | — | — | badges 1–3 pulse (stagger 0.2) |
| 4.29 | — | — | cut `#b`: card frame + heading |
| 5.71 | — | — | postcard pops; arrow draws 6.20 |
| 6.45 | — | — | envelope + "Letter" stamp; Hindi 6.95; hold |

## s177
Continues: s176
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: the charge, as a Hindi gist on the white card (label "सार"). Row 1 "Delivery पर: कमी का दोगुना". Row 2 "कमी = letter का postage − पहले लगा valid postage".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s176 `#b` card |
| 0.40 | — | — | row 1 "Delivery पर:" fades |
| 1.30 | — | — | "कमी का दोगुना" words |
| 2.84 | — | — | row 2 "letter का postage" fades |
| 4.30 | — | — | "−" pops |
| 5.52 | — | — | "पहले लगा valid postage" fades; underline "valid" 5.84 |
| 8.42 | — | — | highlight "दोगुना" in row 1; hold |

## s178
Continues: s177
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: two chips under the rows: green-edged chip "Minimum ₹1" (stamp-edged) and chip "paise आएँ → अगला पूरा रुपया".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s177 card |
| 0.90 | — | — | chip 1 frame + "Minimum" |
| 1.80 | — | — | "₹1" stamps in |
| 4.10 | — | — | chip 2 frame + "paise आएँ" |
| 5.80 | — | — | "→ अगला पूरा रुपया" words |
| 7.30 | — | — | highlight "पूरा रुपया"; hold |

## s179
Continues: no
Section label: PART 8 · POSTCARD
In: fade (0.5). Wide, still.
Idea: the worked sum. Component: formula-card — left stamp: "हिसाब · कमी का दोगुना", Georgia line "वसूली = 2 × (letter postage − valid postage)", key "Minimum ₹1 · paise → पूरा रुपया"; drop the letter key. Right white card: question row = small `postcard-blank` lettered "50 paise" → arrow → `envelope-article` "Letter: ₹5"; working lines come in s180.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left formula stamp card on |
| 1.36 | — | — | right card frame |
| 3.08 | — | — | postcard pops with "50 paise" |
| 5.06 | — | — | arrow draws; envelope + "Letter" 5.42 |
| 7.56 | — | — | "₹5" pops; hold |

## s180
Continues: s179
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: working in Georgia, equals aligned: "कमी = ₹5 − 50 paise = ₹4.50", "× 2 = ₹9"; green pill "Delivery पर ₹9"; cream box "पहले दिया postage: credit".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s179 card |
| 0.32 | — | — | line 1 types (to 1.02) |
| 2.18 | — | — | line 2 "× 2" fades; "= ₹9" pops 2.88 |
| 4.16 | — | — | green pill "Delivery पर ₹9" pops (₹9 at 4.92) |
| 6.60 | — | — | cream box fades; highlight "credit" 7.94; hold |

## s181
Continues: no
Section label: PART 8 · POSTCARD
In: fade (0.5). Wide, still.
Idea: the four postcard names. Component: glossary-list — kicker "Postcard के नाम"; 2×2 cards (each ~830×370) with icons on stamp tiles: Single Postcard · एकल पोस्टकार्ड (`postcard-blank`), Reply Postcard · जवाबी पोस्टकार्ड (two `postcard-blank` joined by a dashed fold line, inline), Printed Postcard · मुद्रित पोस्टकार्ड (`postcard-blank` + inline print lines), Meghdoot Postcard · मेघदूत पोस्टकार्ड (`postcard-blank`). Meaning lines only for Reply and Printed (none invented for the others).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | kicker + grid frame |
| 1.52 | — | — | Single card pops |
| 2.46 | — | — | Reply pops |
| 3.26 | — | — | Printed pops |
| 4.42 | — | — | Meghdoot pops |
| 6.40 | — | — | Reply card border turns yellow |
| 8.96 | — | — | Reply line 1 "दोनों हिस्सों पर postage पहले से"; hold |

## s182
Continues: s181
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: Reply line 2 "जुड़ा हिस्सा: addressee के जवाब के लिए"; then Printed gets the focus and its line "संदेश printing, cyclostyle या machine से छपा".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s181 grid |
| 0.66 | — | — | Reply line 2 fades; highlight "जवाब" 3.08 |
| 4.50 | — | — | Reply border back to #ead9a8; Printed border yellow |
| 6.12 | — | — | Printed line words (gap 0.9, to 9.82) |
| 10.96 | — | — | highlight "छपा"; hold |

## s183
Continues: no
Section label: PART 8 · POSTCARD
In: fade (0.5). Wide, still.
Idea: names change nothing: one tariff. Left: red perforated stamp card x 120–760, y 220–980, "Postage · डाक शुल्क", big "50 paise". Right white card x 820–1820: top chips Single · Reply · Printed · Meghdoot; row "अलग tariff" and row "अलग availability", each struck in slate with a slate cross; bottom row "तय जगह में छपा advertisement" with green "allowed" pill.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | right card + four name chips |
| 1.04 | — | — | row "अलग tariff" fades; strike + cross 1.78 |
| 3.08 | — | — | row "अलग availability" fades; strike + cross 3.56 |
| 5.46 | — | — | stamp card slides from left |
| 6.70 | — | — | "50 paise" pops (lands 7.48) |
| 10.14 | — | — | ad row fades |
| 13.28 | — | — | green "allowed" pill stamps; hold |

## s184
Continues: no
Section label: PART 8 · POSTCARD
In: fade (0.5). Wide, still.
Idea: Exam angle summary. Heading "Exam angle · परीक्षा में" (y 190). Left: `postcard-blank` card ~1000×640 at x 120–1120, y 280–920 with inline dimension arrows "140 mm" (below) and "90 mm" (side), chip "Maximum 5 grams"; right half tints yellow with three small badges. Right column x 1200–1820: chip 1 "Right-hand half: address · postage · postal directions".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading + postcard |
| 2.00 | — | — | "140 mm" arrow draws |
| 3.66 | — | — | "90 mm" arrow draws |
| 5.12 | — | — | weight chip pops ("5 grams" 5.70) |
| 8.46 | — | — | right half tints; chip 1 frame |
| 9.76 | — | — | chip 1 words address 9.76, postage 10.85, postal directions 12.09; hold |

## s185
Continues: s184
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: chip 2: `envelope-article` icon with slate cross, "cover में नहीं"; chip 3 frame: term "Sender-address label" + "भेजने वाले के पते का label" (value comes in s186).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s184 frame |
| 0.56 | — | — | chip 2 envelope icon pops |
| 1.20 | — | — | "cover में नहीं" fades; slate cross |
| 2.68 | — | — | chip 3 frame + term; Hindi 3.18 |

## s186
Continues: s185
Section label: PART 8 · POSTCARD
In: cut. Wide, still.
Idea: chip 3 value "≤ 50 × 20 mm" big in amber on a soft yellow band.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s185 frame; value words "50 × 20 mm" begin |
| 1.65 | — | — | value complete |
| 2.15 | — | — | highlight band on value; hold |

## s187
Continues: no
Section label: RECAP · PARTS 7–8
In: wipe (from right, 0.6). Wide, still.
Idea: Component: recap-card — envelope x 160–1760, y 170–990, flap title "Letter Card और Postcard", seal "4", four rows (term English bold, Hindi beneath, yellow fact pill right, green tick):
1 "Maximum weight · अधिकतम वज़न" — pill "5 grams · दोनों"
2 "Letter Card · पत्र कार्ड" — pill "खुला 300 × 210 · मुड़ा 210 × 100 mm"
3 "Postcard · पोस्टकार्ड" — pill "140 × 90 mm · right-hand half: address, postage"
4 "शर्त टूटी → Letter" — pill "कमी का दोगुना"
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + flap title + seal "4" |
| 1.36 | — | — | row 1 term |
| 4.52 | — | — | pill 1 pops; tick 5.32 |
| 6.28 | — | — | row 2 term |
| 7.38 | — | — | pill 2 words (300 × 210 at 9.10, 210 × 100 mm at 13.04) |
| 13.46 | — | — | tick 2 |

## s188
Continues: s187
Section label: RECAP · PARTS 7–8
In: cut. Wide, still.
Idea: rows 3 and 4 of the same recap card tick in.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s187 card; row 3 term |
| 1.22 | — | — | pill 3 "140 × 90 mm" (lands 2.98) |
| 4.02 | — | — | pill 3 rest "· right-hand half: address, postage" |
| 7.14 | — | — | tick 3 |
| 7.86 | — | — | row 4 term "शर्त टूटी → Letter" (Letter 9.64) |
| 10.92 | — | — | pill 4 "कमी का दोगुना" pops |
| 11.58 | — | — | tick 4; hold |
## s189
Continues: no
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: wipe (from right, 0.6). Wide, still.
Idea: Part 9 opens, then the first two of three terms. Sub-shots: `#title` 0, `#terms` 1.40.
`#title` — Component: chapter-title: kicker "PART 9 · भाग 9", English "Unpaid & Short-paid Items", Hindi "बिना या कम postage वाले items"; stamp window holds an inline ink envelope with an empty dashed stamp box, value "09". No progress dots.
`#terms` — two tall white stamp-edged cards side by side (x100–940, x980–1820, y200–960). Each: English term 72 px, Hindi 44 px beneath, ink icon (inline envelope: left empty stamp box; right one small stamp in the box), meaning line in Hindi.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#title` shown; Hindi underline draw |
| 1.40 | — | — | cut to `#terms`; cards pop |
| 1.56 | — | — | "UNPAID" pop; "बिना भुगतान" fade 2.06 |
| 4.32 | — | — | "कोई माना हुआ postage payment नहीं" words |
| 6.70 | — | — | "INSUFFICIENTLY PAID" pop; "अपर्याप्त भुगतान" fade 7.20 |
| 8.72 | — | — | "कुछ valid payment है" words |

## s190
Continues: s189
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#terms` 0, `#def` 2.20.
`#terms` as s189 end. `#def`: one big white card x100–1820, y200–960: top "DEFICIENCY" 88 px + "कमी" 48 px; below, the meaning built as a Georgia-style subtraction in Georgia (Hindi gist, labelled "सार"): "लगने वाला charge − पहले दिया valid amount"; bottom green pill "सिर्फ valid payment गिनिए".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#terms` holds |
| 0.60 | — | — | right card: "पर ज़रूरत से कम" words, highlight "कम" 1.40 |
| 2.20 | — | — | cut to `#def` |
| 2.26 | — | — | "DEFICIENCY" pop; "कमी" fade 2.76 |
| 3.90 | — | — | "लगने वाला charge" words |
| 6.60 | — | — | "−  पहले दिया valid amount" words; "सार" label fade |
| 8.94 | — | — | underline whole subtraction ("फर्क") |
| 9.60 | — | — | green pill pop; highlight "valid" 10.10 |

## s191
Continues: no
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: fade (0.5). Wide. Sub-shots: `#invalid` 0, `#rule` 7.30.
`#invalid`: three equal cream tiles in a row (x100–1820, y240–800), each a thing that doesn't count: `non-postage-labels` #revenue part ("Revenue stamps / राजस्व टिकट"), an inline drawn cut-out round embossed stamp on a ragged paper scrap ("Invalid cut-outs / अमान्य कटे टिकट"), `non-postage-labels` #charity part ("Non-postal labels / गैर-डाक लेबल"). Caption below y880: "इनसे कमी नहीं घटती".
`#rule`: Component: rule-card moulded: left red stamp badge "REGULATION · विनियम", huge "71", "Domestic items · देशी items"; no act year, no postmark, no chips. Right white card heading "नियम (सार)", empty rows for s192.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | tile 1 pops with revenue label |
| 1.86 | — | — | tile 2 pops (cut-out) |
| 4.38 | — | — | tile 3 pops (charity label) |
| 5.70 | — | — | caption words; all three strike (slate) 6.06 stagger 0.1 |
| 7.30 | — | — | cut to `#rule`; right card fades |
| 7.56 | — | — | "Domestic items · देशी items" fade |
| 9.58 | — | — | badge pop; "71" stamp 10.52 |

## s192
Continues: s191
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide; slow push-in to 1.05 on the right card from 9.9, held to the cut (s193 continues at 1.05).
Rule card holds; rows build on the right card (x760–1820), each English term 56 px + Hindi 40 px left, result in Georgia right; the row being said gets a soft yellow band, earlier rows stay ink.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rule card shown (from s191) |
| 0.00 | — | — | row 1 "UNPAID ITEM / बिना भुगतान item" fade |
| 1.52 | — | — | "prepaid rate × 2" type; highlight row 3.09 |
| 4.04 | — | — | row 2 "कम postage वाला item" fade |
| 6.04 | — | — | "कमी × 2" type; highlight 6.54 |
| 7.76 | — | — | row 3 "Minimum वसूली" fade; "₹1" pill pop 8.85 |
| 9.90 | {on:'#rulecard', zoom:1.05} | — | push-in begins |
| 10.87 | — | — | row 4 "ADDRESSEE / पाने वाला" fade; "से · delivery पर" words 12.22 |

## s193
Continues: s192
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Starts at zoom 1.05 on rule card; returns to wide at the `#sum1` cut. Sub-shots: `#rule` 0, `#sum1` 5.00.
`#sum1` (sum layout used through s198): left x100–760: `letter-scale` (scale 1.4) with `envelope-article` placed on its pan; right white document card x820–1820, y200–960, red heading, Georgia working lines at y 400/520/640/760.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | zoom 1.05 | — | rule card holds |
| 2.08 | — | — | row 5 "SENDER / प्रेषक" fade; "से · लौटाते समय" words 2.82 |
| 3.80 | — | — | highlight rows 4–5 together |
| 5.00 | wide | — | cut to `#sum1`; scale + envelope + empty card shown |
| 5.02 | — | — | small grey kicker "तीन हिसाब" fade |
| 7.12 | — | — | heading "हिसाब 1 · UNPAID LETTER" words; "बिना भुगतान letter" fade 8.74 |

## s194
Continues: s193
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide, still.
Sum 1 builds in Georgia, one line per spoken step.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#sum1` holds; readout "20 g तक" type |
| 0.82 | — | — | "ORDINARY LETTER / साधारण पत्र" label under scale fade |
| 2.00 | — | — | line 1 "Rate = ₹5" type |
| 4.16 | — | — | slate tag "बिना postage" pop beside envelope |
| 6.80 | — | — | line 2 "वसूली = 2 × ₹5" type (cps 14, finishing ~7.98) |

## s195
Continues: s194
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#sum1` 0, `#sum2` 1.80.
`#sum2`: same layout; left `address-envelope` (scale 1.0, x120–760, y360–760) with `postage-stamp` sized into its stamp box. Heading "हिसाब 2 · कम postage".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#sum1` holds |
| 0.64 | — | — | line 3 "= ₹10" in green pill pop |
| 1.80 | — | — | cut to `#sum2`; envelope + card shown |
| 1.83 | — | — | heading words |
| 4.69 | — | — | line 1 "Rate = ₹5" type |
| 6.57 | — | — | stamp in box pops with "₹3" lettered |
| 7.85 | — | — | line 2 "Valid postage = ₹3" type |

## s196
Continues: s195
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide, still.
Sum 2 working: first the shortfall, then double it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#sum2` holds (rate, valid lines) |
| 0.40 | — | — | line 3 "कमी = ₹5 − ₹3" type, from 0.72 |
| 4.40 | — | — | "= ₹2" type; highlight "₹2" |
| 5.84 | — | — | line 4 "वसूली = 2 × ₹2" type |
| 6.96 | — | — | "= ₹4" green pill pop |
| 8.88 | — | — | ink tag "Delivery पर ₹4" pop on the envelope (lower-left) |

## s197
Continues: s196
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#sum2` 0, `#sum3` 3.20.
`#sum3`: same layout; `address-envelope` with a `postage-stamp` in the box (no value lettered); heading "हिसाब 3 · MINIMUM / न्यूनतम".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#sum2` holds |
| 0.76 | — | — | highlight "Valid postage = ₹3"; underline "₹3" |
| 1.42 | — | — | handwritten-style note (Hindi) "पहले दिए ₹3 छोड़े नहीं जाते" fade under line 2 |
| 3.20 | — | — | cut to `#sum3`; envelope + card shown |
| 3.21 | — | — | heading words; "न्यूनतम" fade 4.75 |
| 7.61 | — | — | line 1 "कमी = 25 paise" type |

## s198
Continues: s197
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#sum3` 0, `#trap` 7.50.
`#trap`: Component: exam-trap moulded: red banner "EXAM TRAP · परीक्षा का जाल" + one Hindi line; below, two cards (left slate "गलत", right yellow-bordered "सही") empty until s199; drop the stamp numbers and the remember bar.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#sum3` holds |
| 0.00 | — | — | line 2 "दोगुनी = 2 × 25 paise" type; "= 50 paise" 1.00 |
| 2.72 | — | — | line 3 "वसूली = 50 paise" type, then strike "50 paise" (slate) 3.50 |
| 3.78 | — | — | green pill "₹1" pop beside it |
| 5.54 | — | — | red postmark "MINIMUM ₹1" stamp on card corner |
| 7.50 | — | — | cut to `#trap`; banner shown |
| 9.75 | — | — | banner line "कम postage वाले item पर" words |

## s199
Continues: s198
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#trap` 0, `#held` 7.80.
`#held`: question in Hindi at top (y240) "ऐसे items कहाँ रखे जाते हैं?"; below, a stamp-edged term card centred (x460–1460, y400–760) "POSTAGE DUE / देय डाक शुल्क", chip "वसूली के लिए hold पर".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#trap` banner holds |
| 1.22 | — | — | left card "valid postage भूलकर" fade; "पूरे rate × 2" type 2.30 |
| 4.02 | — | — | left card strike (slate) + slate cross |
| 5.04 | — | — | right card "पहले कमी" fade; "फिर कमी × 2" 6.14; green tick draw 6.84 |
| 7.80 | — | — | cut to `#held`; question words 7.86 |
| 10.34 | — | — | "POSTAGE DUE" pop; Hindi fade 10.84 |
| 12.86 | — | — | chip "वसूली के लिए hold पर" pop |

## s200
Continues: s199
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#held` 0, `#deliv` 6.50.
`#held` gains a reason line under the chip. `#deliv`: Component: compare-cards moulded: drop the question and facts; left card (red band) "GENERAL DELIVERIES / सामान्य वितरण" with inline `envelope-article` and chip "postage due items"; right card (yellow band) "SPECIAL DELIVERIES / विशेष वितरण" waits for s201 (its band only).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#held` holds |
| 1.54 | — | — | line "Delivery पर पैसा आना है" words |
| 4.84 | — | — | "→ ज़्यादा security नहीं" words; underline "नहीं" 5.22 |
| 6.50 | — | — | cut to `#deliv`; both card frames shown |
| 6.68 | — | — | "GENERAL DELIVERIES" pop; Hindi fade 7.18 |
| 7.56 | — | — | envelope-article + chip pop |

## s201
Continues: s200
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#deliv` 0, `#officer` 3.70.
`#officer`: left column (x100–760): Hindi question "Charge ठीक कौन करवाता है?" then two stacked term cards "POSTMASTER / डाकपाल", small "या", "OFFICER IN CHARGE / प्रभारी अधिकारी", chip "अपनी मौजूदगी में". Right white list card (x820–1820, y200–960) heading "ठीक charge: 3 तरह के items", three numbered empty rows for s202–s203.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#deliv`; "SPECIAL DELIVERIES" pop; Hindi 0.50 |
| 1.18 | — | — | chip "prepaid mail" pop on right card |
| 3.70 | — | — | cut to `#officer`; question words 3.73 |
| 5.73 | — | — | "POSTMASTER" pop; Hindi 6.23 |
| 6.97 | — | — | "OFFICER IN CHARGE" pop; Hindi 7.47 |
| 7.93 | — | — | chip pop |
| 9.97 | — | — | list card + heading fade; numbers 1–3 fade stagger 0.15 |

## s202
Continues: s201
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide, still.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#officer` holds |
| 0.72 | — | — | row 1 "कम postage वाले items" words |
| 2.66 | — | — | sub-line "गलती से पूरा prepaid माने गए" words; highlight "पूरा prepaid" 4.44 |
| 7.06 | — | — | row 2 "UNPAID ITEMS / बिना भुगतान items" fade; row 1 to grey |
| 8.38 | — | — | sub-line "postage-due stamp नहीं लगा" words; underline "नहीं" 10.30 |

## s203
Continues: s202
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#officer` 0, `#duestamp` 6.00.
`#duestamp`: `address-envelope` scale 1.3 (x140–972, y300–820) with `postage-stamp` in its box; `postage-due-mark` (scale 0.6) to land upper-left of the envelope; right side (x1060–1820) label "POSTAGE-DUE STAMP / डाक-देय मुहर" (and space for s204's list).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3 "DISPATCH OFFICE / भेजने वाला डाकघर" fade; row 2 to grey |
| 1.98 | — | — | sub-line "पूरा due charge नहीं किया" words; underline "नहीं" 5.16 |
| 6.00 | — | — | cut to `#duestamp`; envelope shown |
| 7.30 | — | — | postage-due-mark stamp; label pop 7.30, Hindi 7.80 |

## s204
Continues: s203
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Slow push-in to 1.08 on the due mark from 0.5, returns to wide at 8.2.
Right column builds a short list "लिखते हैं:" of three officers (English + Hindi); arrows to the mark's parts.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + due mark hold; "Due रकम" ink arrow draw to #amount-box, grey "₹ ___" inside |
| 0.50 | {on:'#duemark', zoom:1.08} | — | push-in |
| 1.04 | — | — | "POSTMASTER / डाकपाल" fade |
| 2.66 | — | — | "OFFICER IN CHARGE / प्रभारी अधिकारी" fade |
| 5.04 | — | — | "AUTHORISED OFFICIAL / अधिकृत अधिकारी" fade |
| 6.74 | — | — | inline squiggle initials draw on #initials-line; label "INITIALS / आद्याक्षर" fade |
| 8.20 | wide | — | camera returns |

## s205
Continues: s204
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#duestamp` 0, `#vs` 4.90.
`#vs`: Component: compare-cards moulded: no question, no facts grid; left card "POSTAGE-DUE STAMP / डाक-देय मुहर" with `postage-due-mark` and line "वसूली जानी है"; right card "ADHESIVE POSTAGE STAMP / चिपकने वाला डाक टिकट" with `postage-stamp` and line "पहले से दिया payment"; slate "≠" disc between.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#duestamp` holds; highlight #amount-box |
| 1.48 | — | — | caption "वसूली जाने वाली रकम दर्ज" words |
| 4.90 | — | — | cut to `#vs`; left card shown |
| 6.96 | — | — | right card pop; English 6.96, Hindi 7.46 |
| 7.85 | — | — | "पहले से दिया payment" words |
| 8.50 | — | — | "≠" disc pop |

## s206
Continues: no
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: fade (0.5). Wide, still.
Idea: at delivery, two ways. Left: `address-envelope` scale 0.9 (x100–676, y380–740) with `postage-stamp` in box and small `postage-due-mark` on it. Heading above "Delivery के समय". Two branches drawn right: upper (green ink) to card "Delivery ली → marked due रकम दी" (x820–1820, y240–520); lower (slate) to card "ADDRESSEE / पाने वाला" + "मना किया → पैसा देना ज़रूरी नहीं" (y600–960).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + heading shown |
| 1.38 | — | — | upper arrow draw; card pop "Delivery ली" |
| 3.78 | — | — | "MARKED DUE / अंकित देय" fade; "रकम दी" words 4.92 |
| 5.92 | — | — | lower arrow draw; "ADDRESSEE / पाने वाला" pop |
| 7.59 | — | — | "मना किया" words |
| 8.84 | — | — | "पैसा देना ज़रूरी नहीं" words; underline "नहीं" 10.32 |

## s207
Continues: s206
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#branch` 0, `#refused` 0.25, `#flow` 4.30.
`#refused`: `address-envelope` scale 1.6 centred (x448–1472, y260–900), caption top "POSTMAN / डाकिया लिखता है" (no person). `#flow`: Component: mail-flow moulded: stops left→right — `envelope-article` "REFUSED · UNCLAIMED / अस्वीकृत · बिना लिए", `post-counter-icon` "POSTING OFFICE / बुकिंग डाकघर", inline house "SENDER / प्रेषक" (s208); no bottom band.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#branch` (s206 layout) |
| 0.25 | — | — | cut to `#refused`; caption fade 0.28 |
| 1.96 | — | — | double-headed ink arrow across envelope width draw ("चौड़ाई") |
| 2.72 | — | — | Caveat "Refused" 180 px, reveal from left across full width |
| 4.30 | — | — | cut to `#flow`; stop 1 shown |
| 4.36 | — | — | "REFUSED" label; "UNCLAIMED" 5.38; "domestic" grey 6.02 |
| 8.02 | — | — | arrow 1 draw, "तुरंत सीधे" on it |
| 8.96 | — | — | stop 2 pop; label + Hindi 9.46 |

## s208
Continues: s207
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide, still.
`#flow` grows: stop 3 Sender at right; a branch drops from Sender to a fourth stop below (inline ink building) "RETURNED LETTER OFFICE / वापसी पत्र कार्यालय".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stops 1–2 hold; arrow 2 draw; stop 3 "SENDER / प्रेषक" pop |
| 1.50 | — | — | slate tag "Sender न मिले" fade under Sender |
| 3.36 | — | — | down arrow draw; stop 4 pop; "RETURNED LETTER OFFICE" 3.74, Hindi 4.24 |
| 6.82 | — | — | highlight stop 3 |
| 9.28 | — | — | yellow pill "due postage sender से" pop beside Sender |

## s209
Continues: no
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: fade (0.5). Wide, still.
Idea: the one waiver. Heading "एक छूट" (red, y220). Left (x100–900): `envelope-article` scale 1.6 with slate tag "जानबूझकर unpaid" and arrow to grey line "addressee को परेशान करने के लिए". Right (x980–1820, y320–860): stamp-edged term card "CIRCLE HEAD / सर्किल प्रमुख", chip "भरोसा हो जाए".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading shown; "छूट" highlight 0.18 |
| 1.82 | — | — | envelope-article pop |
| 2.64 | — | — | arrow draw; "addressee को परेशान करने के लिए" words |
| 5.28 | — | — | tag "जानबूझकर unpaid" pop |
| 7.70 | — | — | term card pop; Hindi fade 8.20 |
| 9.08 | — | — | chip pop |

## s210
Continues: s209
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#waiver` 0, `#myth` 5.90.
`#myth`: Component: myth-fact moulded: myth card "मना करने भर से → postage अपने आप माफ" (slate strike + cross), fact card "माफी = competent authority का फैसला" (green postmark "सही").
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#waiver` holds |
| 1.22 | — | — | green round postmark "POSTAGE माफ" stamp on the envelope |
| 3.30 | — | — | under Circle Head: "COMPETENT AUTHORITY / सक्षम प्राधिकारी" fade; "का फैसला" 4.96 |
| 5.90 | — | — | cut to `#myth`; myth card shown, "मना करने भर से" words 5.98 |
| 8.24 | — | — | "postage अपने आप माफ" words |
| 9.94 | — | — | strike (slate) + slate cross |
| 6.20 | — | — | fact card fade (said at 3.00–5.44, so it is already earned) |

## s211
Continues: no
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: fade (0.5). Wide. Sub-shots: `#scope` 0, `#foreign` 4.90.
`#scope`: two cards side by side: "DOMESTIC / देशी" with green tick "Regulation 71"; "INTERNATIONAL / अंतरराष्ट्रीय" with slate line "हर item पर नहीं". `#foreign` (continues into s212): `envelope-article` left (x160–560) with tag "unpaid / कम postage"; arrow right toward a globe-free label "विदेश" (inline dashed border line at x1400).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | domestic card shown with tick |
| 2.14 | — | — | international card pop; Hindi 2.64 |
| 3.68 | — | — | "हर item पर नहीं" words |
| 4.90 | — | — | cut to `#foreign`; envelope shown, "विदेश जाने वाला" label 5.00 |
| 6.30 | — | — | tag "unpaid / कम postage" pop |
| 8.28 | — | — | arrow toward "विदेश" draw |

## s212
Continues: s211
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide. Sub-shots: `#foreign` 0, `#exam` 5.85.
`#exam`: Component: recap-card moulded, title "EXAM ANGLE · परीक्षा के लिए", seal "5"; five rows (x160–1760, flap y160–300, rows 136 px each): term left (English + Hindi), pill right, tick green as said. Held through s214.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#foreign` holds |
| 1.10 | — | — | slate cross on arrow; "आगे नहीं भेजा जाता" words |
| 2.66 | — | — | return arrow curves back to "SENDER / प्रेषक" label draw |
| 2.98 | — | — | green pill "बिना charge" pop on return arrow |
| 5.85 | — | — | cut to `#exam`; flap + title shown |
| 7.11 | — | — | row 1 "UNPAID / बिना भुगतान" fade |
| 8.13 | — | — | pill "prepaid rate × 2" pop; tick 9.49 |

## s213
Continues: s212
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide, still. Recap card holds; rows 2–4 tick.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2 "INSUFFICIENTLY PAID / कम postage" fade |
| 1.32 | — | — | pill "कमी × 2" pop; tick 2.00 |
| 3.14 | — | — | row 3 "MINIMUM / न्यूनतम वसूली" fade |
| 4.20 | — | — | pill "₹1" pop; tick 4.40 |
| 5.26 | — | — | row 4 "CHARGING ERRORS / गलत charging" fade |
| 7.00 | — | — | pill "Postmaster · officer in charge" pop; tick 9.54 |

## s214
Continues: s213
Section label: PART 9 · UNPAID & SHORT-PAID ITEMS
In: cut. Wide, still. Recap card holds to the cut (Part 10 wipes in).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–4 hold |
| 1.62 | — | — | row 5 "MARKED DUE / अंकित देय" fade |
| 2.40 | — | — | pill "दें · मना करें तो Refused" pop |
| 6.08 | — | — | tick row 5; highlight "Refused" in pill |
## s215
Continues: no
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: wipe (from right, 0.6). Wide, no camera move.
Idea: Part 10 opens on its title stamp, then the literal rule: a used stamp reused by fraud is forbidden, and so is using it to harm the government.
Sub-shots: `#title` 0.00, `#rule` 2.78.
`#title`: Component: chapter-title. Kicker "PART 10 · भाग 10", English "Reuse & Fictitious Stamps", Hindi "Stamp का दोबारा इस्तेमाल और fictitious stamps", dots "Part 10 of 10 · भाग 10 / 10"; the big stamp's window holds a small `cancelled-stamp` icon, value "10".
`#rule`: `cancelled-stamp` scale 1.0, centred (470,560); grey caption under it (470,820) "पहले इस्तेमाल हो चुका stamp". Right column x820–1800: row 1 (y 420) "धोखे से दोबारा इस्तेमाल" + slate "मना" pill with slate cross; row 2 (y 660, two lines) "सरकार को नुकसान पहुँचाने के इरादे से इस्तेमाल" + slate "मना" pill.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title layout already up; stamp icon draws |
| 1.42 | — | — | kicker/progress dots fade |
| 2.78 | — | — | cut to `#rule`: stamp + caption shown |
| 3.74 | — | — | row 1 words |
| 5.28 | — | — | "मना" pill 1 stamp |
| 6.38 | — | — | row 2 words |
| 10.24 | — | — | "मना" pill 2 stamp; hold |

## s216
Continues: no
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: fade 0.5. Wide.
Idea: a faint or erased cancellation still doesn't make the stamp valid again; then such a stamp caught on a posted item.
Sub-shots: `#faint` 0.00, `#caught` 6.78.
`#faint`: two `postage-stamp` (scale 0.9) at (520,520) and (1400,520). Left: a grey postmark ring drawn inline at 30% opacity. Right: same ring drawn inline, half covered by a cream rubbed patch. Labels under each (y 790): "Cancellation हल्की" / "Cancellation मिटाई गई"; English term top centre (960,220) "Cancellation" 64 px, "रद्द करने का निशान" 44 px beneath. Bottom slate band (y 900) "तब भी stamp दोबारा नहीं चलता" with slate cross.
`#caught`: `address-envelope` scale 1.3 centred (960,560) with `cancelled-stamp` at 0.3 in its stamp box; label above (960,230) "पहले से post हुआ item".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | term card + both stamps shown |
| 0.96 | — | — | left faint ring fades, label fades |
| 2.74 | — | — | right patch fades, label fades |
| 4.88 | — | — | slate band reveal from left, cross draw |
| 6.78 | — | — | cut to `#caught`: envelope + stamp shown |
| 8.42 | — | — | label words |
| 9.90 | slow push-in on stamp box, zoom 1.25 (held into s217) | — | yellow hand-drawn circle draws round stamp |

## s217
Continues: s216
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Starts on s216's push-in (zoom 1.25 on stamp box); returns to wide at 2.70.
Idea: such an item is not delivered; the Department's administrative instructions decide what next.
Layout (`#caught` kept): slate round postmark over envelope's left half (700,600): "Non-delivery" + "डिलीवरी नहीं". Right, after the camera returns, envelope moves left to centre (560,560); a white instruction sheet drawn inline (300×380) at (1460,560): "Administrative instructions" 52 px, "प्रशासनिक निर्देश" 40 px, "आगे क्या करना है" grey; ink arrow envelope → sheet.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | zoom 1.25 on stamp | — | envelope, stamp, yellow circle held |
| 0.84 | — | — | postmark stamp (slate) "Non-delivery" |
| 2.70 | ease back to wide (0.8 s) | — | envelope group move by [-400,0] |
| 3.42 | — | — | arrow draw |
| 4.72 | — | — | sheet pop; term fades in; Hindi at 5.20 |
| 7.22 | — | — | "आगे क्या करना है" fade; hold |

## s218
Continues: s217
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: just collecting the shortfall and delivering does not satisfy the rule; then the fictitious stamp is named.
Sub-shots: `#caught` (from s217) 0.00, `#fict` 5.73.
`#caught` adds bottom strip (y 900, x 300–1620): small `rupee-cash` icon + "बस कमी का postage लेकर deliver" — struck in slate.
`#fict`: left a `postage-stamp` scale 1.1 at (480,560) with a dashed slate outline drawn inline round it and a slate tag "नकली". Right (x 860–1800): "Fictitious stamp" 88 px bold (y 330), "नकली stamp" 48 px beneath; white definition card (y 470–960) labelled "सार", line 1: "जो खुद को सरकारी postage stamp बताए".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s217 layout held |
| 0.22 | — | — | strip reveal from left (icon + text) |
| 3.92 | — | — | strike strip (slate) |
| 5.73 | — | — | cut to `#fict`: stamp + dashed outline shown |
| 5.89 | — | — | "Fictitious stamp" fade; Hindi at 6.49 |
| 7.45 | — | — | definition card pop (label "सार") |
| 9.99 | — | — | line 1 words; hold |

## s219
Continues: s218
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: the definition completes (or imitates, or represents it), then making or using such stamps unlawfully is punishable.
Layout (`#fict` kept): card lines 2–3 under line 1: "या उसकी नकल करे", "या उसे दर्शाए". Bottom band across full width (y 900, x 100–1820): "ऐसे stamps गैर-कानूनी तरीके से बनाना या इस्तेमाल करना" + slate verdict postmark "दंडनीय" at right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp, term, card line 1 held |
| 1.80 | — | — | line 2 words |
| 3.40 | — | — | line 3 words |
| 5.00 | — | — | band reveal from left with its text |
| 6.58 | — | — | highlight words "गैर-कानूनी" |
| 10.60 | — | — | "दंडनीय" postmark stamp; hold |

## s220
Continues: no
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: fade 0.5. Wide.
Idea: the law here is BNS 2023, in force from 1 July 2024.
Layout: `regulations-book` scale 1.5 at (480,580), title panel lettered "BNS 2023". Right (x 860–1800): "Bharatiya Nyaya Sanhita 2023" 72 px two lines (y 330–430), "भारतीय न्याय संहिता 2023" 46 px beneath (y 510); red "BNS" pill (y 620). Round red postmark (1320,830) "1 JULY 2024" with "से लागू" under it.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | book shown (anchor) |
| 1.28 | — | — | English name words |
| 3.36 | — | — | Hindi name fade |
| 5.78 | — | — | "BNS" pill pop |
| 8.52 | — | — | postmark stamp |
| 10.86 | — | — | "से लागू" fade; hold |

## s221
Continues: no
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: fade 0.5. Wide. This table holds to s228 2.34.
Idea: BNS has three separate offences; row 1 is reuse of a used government stamp.
Component: compare-table, moulded: title "BNS 2023 · तीन अलग Offences" (Hindi "अपराध" under "Offences"); white card x100–1820, y 260–980; red header row (y 260–330): "Offence · अपराध" (x100–1160), "सज़ा" (x1160–1580), "Exam trap" (x1580–1820, stays empty until s226). Three rows: y 330–520, 520–740, 740–980; numbers 1/2/3 in red circles; Hindi 40 px, wraps to two lines.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title shown |
| 1.34 | — | — | card + header row reveal from top |
| 4.34 | — | — | row-1 number pop |
| 4.88 | — | — | row 1 words: "पहले इस्तेमाल हुआ सरकारी stamp" |
| 7.76 | — | — | row 1 line 2 words: "जानते हुए, धोखे से इस्तेमाल" |
| 8.96 | — | — | highlight words "धोखे से"; hold |

## s222
Continues: s221
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: row 1 penalty, then row 2: fraudulently erasing the used mark.
Layout as s221. Row-1 सज़ा cell: "अधिकतम 2 साल कैद" (big "2 साल"), under it "या जुर्माना, या दोनों".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table with row 1 held |
| 0.74 | — | — | "अधिकतम 2 साल कैद" fade |
| 3.30 | — | — | "या जुर्माना, या दोनों" words |
| 6.22 | — | — | row 1 text colour → grey #6f6a63; row-2 number pop |
| 7.20 | — | — | row 2 words: "पहले इस्तेमाल का निशान धोखे से मिटाना" |
| 8.36 | — | — | highlight words "मिटाना"; hold |

## s223
Continues: s222
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: row 2 also covers knowingly possessing or dealing, as the section says.
Row 2 line 2: "+ जानते हुए रखना या कारोबार करना"; small grey note "(section के अनुसार)" at the row's right end.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table held |
| 2.14 | — | — | row 2 line 2 words |
| 3.30 | — | — | highlight words "रखना" |
| 4.16 | — | — | highlight words "कारोबार" |
| 6.74 | — | — | grey note fade; hold |

## s224
Continues: s223
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: row 2 penalty (max 3 years), then row 3: fictitious stamps.
Row-2 सज़ा cell: "अधिकतम 3 साल कैद", "या जुर्माना, या दोनों". Row 3: "Fictitious stamps बनाना, या जानते हुए कारोबार / इस्तेमाल".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table held |
| 0.96 | — | — | "अधिकतम 3 साल कैद" fade |
| 3.70 | — | — | "या जुर्माना, या दोनों" words |
| 5.63 | — | — | row 2 text colour → grey; row-3 number pop |
| 6.67 | — | — | row 3 line 1 words |
| 9.25 | — | — | row 3 rest words; hold |

## s225
Continues: s224
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: row 3 also covers possession without lawful excuse and preparing to make; fine up to ₹200; seizure.
Row 3 line 2: "+ बिना lawful excuse रखना, या बनाने की तैयारी". Row-3 सज़ा cell: "जुर्माना ₹200 तक" (big), under it "Seize · ज़ब्त".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table held |
| 0.88 | — | — | row 3 line 2 words |
| 7.40 | — | — | "जुर्माना" fade |
| 8.00 | — | — | "₹200 तक" pop |
| 12.98 | — | — | "Seize" fade; "ज़ब्त" at 13.48; hold |

## s226
Continues: s225
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: seized items are forfeited to the government; exam has two traps here, starting with the ₹200 maximum.
Row-3 cell adds "→ Forfeit · सरकार का". Trap column: yellow tag "Trap 1" beside row 3 (y 860).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table held |
| 1.76 | — | — | "→ Forfeit" fade; "सरकार का" at 3.34 |
| 5.81 | — | — | "Exam trap" header text colour → yellow #f2b705 |
| 7.07 | — | — | header highlight |
| 8.35 | — | — | yellow outline draws round "₹200 तक"; "Trap 1" tag pop; hold |

## s227
Continues: s226
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: ₹200 is the maximum only for the fictitious-stamps offence; and reusing a genuine stamp is a separate offence from fictitious stamps.
Trap 1 tag adds "सिर्फ़ offence 3 का" (36 px, two lines). Trap 2: yellow bracket in the trap column joining rows 1 and 3, tag "Trap 2" with "दो अलग offences".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table + trap 1 held |
| 0.70 | — | — | "सिर्फ़ offence 3 का" fade |
| 3.92 | — | — | underline words "₹200" (slate), rows 1–2 सज़ा cells pulse |
| 7.90 | — | — | rows 1 and 3 text colour → ink; row 2 stays grey |
| 8.18 | — | — | highlight row 3 "Fictitious" |
| 10.10 | — | — | highlight row 1 "सरकारी stamp"; bracket draw; "Trap 2" tag pop; hold |

## s228
Continues: s227
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: "two separate offences" lands; then reproduction: printing a stamp's picture is allowed for illustration.
Sub-shots: `#table` 0.00, `#repro` 2.34.
`#repro`: top (x100–1820, y 190–330): "Reproduction" 80 px, "पुनरुत्पादन (stamp की तस्वीर छापना)" 44 px beneath. Left: an open magazine page drawn inline (white, two text columns of grey rules) x140–640, y 380–960, with a stamp outline printed in black ink in one column. Right (x 720–1800): line "Illustration के लिए" (y 430) + green "Allowed · अनुमति" pill.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table held |
| 0.00 | — | — | "दो अलग offences" text in the trap 2 tag pulse |
| 2.34 | — | — | cut to `#repro`: magazine page shown |
| 3.44 | — | — | "Reproduction" fade; Hindi at 3.94 |
| 5.20 | — | — | black stamp outline draw |
| 6.44 | — | — | "Illustration के लिए" words |
| 7.94 | — | — | green pill stamp; hold |

## s229
Continues: s228
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: where: a philatelic publication, or an article/section of a general publication wholly about stamps.
Right column under the pill: row 1 (y 580) "1 · Philatelic publication" 56 px, "डाक-टिकट संग्रह की पत्रिका" 40 px; row 2 (y 790) "2 · आम publication का article या section", line 2 "जो पूरा postage stamps के बारे में हो".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `#repro` held |
| 0.42 | — | — | row 1 English fade; Hindi at 0.92 |
| 2.76 | — | — | row 2 line 1 words |
| 8.16 | — | — | row 2 line 2 words |
| 8.82 | — | — | highlight words "पूरा"; hold |

## s230
Continues: no
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: fade 0.5. Wide.
Idea: two conditions: print the illustration in black; its form is set by administrative instructions.
Layout: heading (960,220) "Illustration की शर्तें". Two white cards side by side (x100–940 and x980–1820, y 300–960). Left: a stamp outline drawn in black ink (300×300) on white, under it "सिर्फ़ काले रंग में" 52 px. Right: inline instruction sheet icon (same as s217), "Administrative instructions" 52 px, "प्रशासनिक निर्देश" 40 px, then "किस रूप में छापें, ये तय करती हैं".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading + both cards shown |
| 0.72 | — | — | black stamp outline draw |
| 1.36 | — | — | "सिर्फ़ काले रंग में" fade |
| 2.56 | — | — | sheet icon pop |
| 5.30 | — | — | English term fade; Hindi at 5.80 |
| 7.26 | — | — | last line words; hold |

## s231
Continues: no
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: fade 0.5. Wide.
Idea: exam angle, built point by point (four rows across s231–s232).
Layout: red heading (x140, y 220) "Exam angle · परीक्षा की नज़र से". White card x100–1820, y 290–980, four rows ~170 px, each a small icon tile (x 180) + text from x 320. Row 1: inline dashed-outline stamp icon, "BNS: fictitious stamps मना". Row 2: `cancelled-stamp` at 0.3, "पहले इस्तेमाल हुए stamp का धोखे से इस्तेमाल = अलग offence".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading + card shown |
| 1.14 | — | — | row 1 icon pop |
| 2.32 | — | — | row 1 words |
| 5.02 | — | — | row 2 icon pop; words |
| 8.68 | — | — | highlight words "अलग offence"; hold |

## s232
Continues: s231
Section label: PART 10 · REUSE & FICTITIOUS STAMPS
In: cut. Wide.
Idea: rows 3–4: found on a posted item → non-delivery; reproduction only in the form the instructions set.
Row 3: small `address-envelope` (scale 0.2) tile, "Post हुए item पर मिले → Non-delivery". Row 4: inline black stamp-outline tile, "Reproduction: administrative instructions के form में ही".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–2 held; rows 1–2 colour → grey |
| 0.40 | — | — | row 3 icon pop; words |
| 3.36 | — | — | highlight words "Non-delivery" |
| 4.34 | — | — | row 4 icon pop; words |
| 7.76 | — | — | highlight words "form में ही"; hold |

## s233
Continues: no
Section label: KEY POINTS
In: wipe (from right, 0.6). Wide.
Idea: key-points opener, then point 1: Post Office's exclusive privilege; physical or digital stamp.
Key-points layout (used s233–s244): left badge = red perforated stamp card x100–460, y 200–620, holding the big numeral and the Hindi ordinal (white); under it seven progress dots (y 700, x 140–420), current one yellow. Right white card x520–1820, y 200–980, up to four rows.
At 0.00 the badge shows "7" with "ज़रूरी बातें"; card heading "याद रखने वाली बातें".
Point 1 rows: "Exclusive privilege" 64 px / "अनन्य विशेषाधिकार" 44 px; "Postage stamps जारी करना → सिर्फ़ Post Office"; "Stamp: physical या digital".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | badge, dots, card heading shown |
| 3.20 | — | — | badge numeral swap "7" → "1", ordinal swap → "पहली"; dot 1 colour → yellow |
| 3.90 | — | — | row "Postage stamps जारी करना" words |
| 6.42 | — | — | term "Exclusive privilege" fade; Hindi at 6.92 |
| 8.04 | — | — | "→ सिर्फ़ Post Office" fade |
| 10.52 | — | — | row "Stamp: physical" words; hold |

## s234
Continues: s233
Section label: KEY POINTS
In: cut. Wide.
Idea: finish point 1 (digital; prepayment required unless Regulations exempt); then point 2 opens.
Sub-shots: `#kp1` 0.00, `#kp2` 6.24. `#kp2`: same badge "2 · दूसरी", dot 2 yellow; card heading "Mail services · डाक सेवाएँ: भुगतान के चार तरीके".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | point 1 held |
| 0.00 | — | — | "या digital" fade |
| 1.64 | — | — | row "Prepayment ज़रूरी" fade ("अग्रिम भुगतान" beneath at 2.14) |
| 3.16 | — | — | "— जब तक Regulations छूट न दें" words |
| 6.24 | — | — | cut to `#kp2`: badge + dots shown |
| 7.44 | — | — | heading words |
| 8.50 | — | — | underline words "चार"; hold |

## s235
Continues: s234
Section label: KEY POINTS
In: cut. Wide.
Idea: the four ways, plus any other way the Regulations allow.
Four tiles in a row inside the card (y 380–720, each 290 wide): `rupee-cash` "Cash · नकद"; `smartphone-blank` "Digital · डिजिटल"; `postage-stamp` "Stamps · डाक-टिकट"; `franking-impression` "Authorised franking · अधिकृत franking". Line below (y 830): "+ Regulations में बताया दूसरा तरीका भी मान्य".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading held; tile 1 pop |
| 0.72 | — | — | tile 2 pop |
| 1.68 | — | — | tile 3 pop |
| 3.06 | — | — | tile 4 pop |
| 4.98 | — | — | bottom line words |
| 7.60 | — | — | highlight words "मान्य"; hold |

## s236
Continues: no
Section label: KEY POINTS
In: fade 0.5. Wide.
Idea: point 2 continued: QR code payment counts as digital; 500 and 250 packets are only conditions for bulk cash facilities.
Badge "2 · दूसरी" and dots as before (shown at 0.00). Card two rows: row 1 (y 260–600): `qr-code-stand` scale 0.75 at x 680, arrow →, text "QR code payment = Digital payment" 60 px. Row 2 (y 640–960): `packet-stack` scale 0.6 at x 680, text "500 / 250 packets" 60 px, "→ सिर्फ़ bulk cash facilities की शर्तें" 44 px.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | badge, dots, card, QR stand shown |
| 0.36 | — | — | "QR code payment" fade |
| 1.46 | — | — | arrow draw |
| 2.52 | — | — | "= Digital payment" fade |
| 4.24 | — | — | packet stack pop; "500" fade; "/ 250 packets" at 5.68 |
| 6.88 | — | — | Hindi line words; highlight words "सिर्फ़" at 7.44; hold |

## s237
Continues: no
Section label: KEY POINTS
In: fade 0.5. Wide.
Idea: point 3: which stamps for which mail.
Badge "3 · तीसरी", dot 3 yellow. Card rows (four, y 240–960, each with a small `adhesive-stamp` at 0.35): "Definitive stamps" / "रोज़ की डाक के लिए"; "Commemorative stamps" / "इनसे भी postage दिया जा सकता है"; "Private mail" / "→ valid postage".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | badge + card shown |
| 0.00 | — | — | badge numeral pop "3", dot 3 colour → yellow |
| 0.78 | — | — | row 1 term fade; Hindi at 1.78 |
| 3.96 | — | — | row 2 term fade; Hindi at 4.66 |
| 8.04 | — | — | row 3 term fade; "→ valid postage" at 8.72; hold |

## s238
Continues: s237
Section label: KEY POINTS
In: cut. Wide.
Idea: finish point 3 (service stamp for authorised government mail); point 4 opens: stamp at top right-hand corner.
Sub-shots: `#kp3` 0.00, `#kp4` 4.59. `#kp3` row 4: "Service stamp" / "authorised सरकारी डाक के लिए". `#kp4`: badge "4 · चौथी", dot 4 yellow; card: `address-envelope` scale 1.0 at (920,520) (x 600–1240, y 320–720); right of it (x 1300–1780) two short labels.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | point 3 rows 1–3 held |
| 0.00 | — | — | row 4 "Service stamp" fade |
| 0.90 | — | — | "authorised सरकारी डाक के लिए" words |
| 4.59 | — | — | cut to `#kp4`: badge, envelope shown |
| 5.79 | — | — | `postage-stamp` (0.22) slide in from up to above stamp box |
| 8.13 | — | — | yellow circle draws round stamp box; "Top right-hand corner" text fade (x 1300, y 360, two lines) |
| 9.23 | — | — | stamp move into stamp box; hold |

## s239
Continues: s238
Section label: KEY POINTS
In: cut. Wide.
Idea: stamp fully stuck; selling stamps needs DG's prior permission; unused stamps/stationery normally not refunded.
"पूरा चिपका हुआ" + green tick right of the envelope (x 1300, y 560); two rows below the envelope (y 760–980, two columns): row A (x 560–1180) "Stamps बेचना → Director General की prior permission"; row B (x 1200–1800) "Unused stamps / stationery" with slate-crossed pill "Refund".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + stamp held |
| 0.70 | — | — | "पूरा चिपका हुआ" fade; green tick draw |
| 1.82 | — | — | row A words |
| 4.80 | — | — | highlight words "prior permission" |
| 6.50 | — | — | row B words |
| 10.12 | — | — | "Refund" pill pop, strike (slate); hold |

## s240
Continues: s239
Section label: KEY POINTS
In: cut. Wide.
Idea: no exchange either; point 5 opens: stationery prices.
Sub-shots: `#kp4` 0.00, `#kp5` 1.80. `#kp5`: badge "5 · पाँचवीं", dot 5 yellow; card three tiles (y 280–760): `postcard-blank` "Postcard" / "50 paise"; `letter-card` "Letter card" / "₹2.50"; `embossed-envelope` "Domestic embossed envelope" / "₹5". Prices big in red.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | point 4 held |
| 0.46 | — | — | "Exchange" pill pop, strike (slate) |
| 1.80 | — | — | cut to `#kp5`: badge + card shown |
| 2.58 | — | — | postcard tile pop; "50 paise" at 3.18 |
| 4.74 | — | — | letter card tile pop; "₹2.50" at 5.72 |
| 6.54 | — | — | envelope tile pop; "₹5" at 9.26; hold |

## s241
Continues: s240
Section label: KEY POINTS
In: cut. Wide.
Idea: printed postage counts as credit, shortfall made up with extra stamps; then size 140 × 90 mm and weight.
Sub-shots: `#kp5` 0.00, `#kp5b` 8.24. `#kp5` line below tiles (y 860): "छपा postage = credit · कमी → extra stamps". `#kp5b`: badge same; `postcard-blank` scale 1.6 at (900,560) with ink dimension arrows "140 mm" (below) and "90 mm" (right side); `letter-card` scale 1.0 at (1520,560); caption under both (y 900) for s242.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three tiles held |
| 0.00 | — | — | "छपा postage" fade |
| 2.42 | — | — | "= credit" fade, highlight |
| 4.56 | — | — | "कमी → extra stamps" words |
| 8.24 | — | — | cut to `#kp5b`: postcard shown |
| 8.92 | — | — | width arrow grow; "140 mm" fade |
| 10.58 | — | — | height arrow grow; "90 mm" fade |
| 13.88 | — | — | letter card pop; hold |

## s242
Continues: s241
Section label: KEY POINTS
In: cut. Wide.
Idea: both max 5 grams; point 6: unpaid and short-paid charges.
Sub-shots: `#kp5b` 0.00, `#kp6` 2.73. `#kp6`: badge "6 · छठी", dot 6 yellow; card rows (Georgia sums, y 260–960): "Unpaid domestic item → prepaid rate × 2"; "कम postage → कमी × 2"; "Minimum वसूली ₹1".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | postcard + letter card held |
| 0.76 | — | — | caption "दोनों: अधिकतम 5 grams" fade; highlight "5 grams" at 1.72 |
| 2.73 | — | — | cut to `#kp6`: badge + card shown |
| 3.59 | — | — | row 1 left fade; "× 2" pop at 6.85 |
| 7.71 | — | — | row 2 left fade; "× 2" pop at 9.57 |
| 10.95 | — | — | row 3 fade; "₹1" pop at 11.89; hold |

## s243
Continues: s242
Section label: KEY POINTS
In: cut. Wide.
Idea: broken letter-card/postcard conditions → treated as a letter, shortfall doubled; point 7: reuse and fictitious stamps are separate offences.
Sub-shots: `#kp6` 0.00, `#kp7` 6.56. `#kp6` row 4: "Letter card / Postcard शर्त टूटी → letter, कमी × 2". `#kp7`: badge "7 · सातवीं", dot 7 yellow; card top half two panels: left `cancelled-stamp` 0.5 + "इस्तेमाल हुआ stamp धोखे से दोबारा"; right `postage-stamp` 0.5 with inline dashed slate outline + "Fictitious stamp बनाना"; between them a yellow "≠" and "अलग अपराध" beneath (y 640).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–3 held, colour → grey |
| 0.00 | — | — | row 4 words; "× 2" pop at 5.32 |
| 6.56 | — | — | cut to `#kp7`: badge + card shown |
| 7.44 | — | — | left panel pop; words |
| 11.66 | — | — | right panel pop; words |
| 13.86 | — | — | "≠" pop; "अलग अपराध" fade at 14.72; hold |

## s244
Continues: s243
Section label: KEY POINTS
In: cut. Wide.
Idea: finish point 7: a reused stamp found on a posted item → no delivery.
Bottom of card (y 720–960): small `address-envelope` (0.35) with `cancelled-stamp` (0.1) in its stamp box, arrow → slate round postmark "Non-delivery" / "डिलीवरी नहीं".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | point 7 panels held |
| 0.58 | — | — | envelope pop |
| 3.90 | — | — | arrow draw |
| 5.44 | — | — | postmark stamp; hold to cut |

## s245
Continues: no
Section label: CLOSE
In: wipe (from right, 0.6). Wide.
Idea: warm close: a letter at the counter with too few stamps, and the shortfall sum is ready in a minute. Final image, held to the end.
Layout: `post-counter-icon` scale 1.6 at (560,580) (sign plate lettered "Counter"), desk top at about (560,500). `address-envelope` scale 0.6 lands on the desk, one `postage-stamp` (0.15) in its stamp box lettered "₹3". Right white sum card x1080–1800, y 260–940 (Georgia): "Letter · ₹5"; "लगे · ₹3"; "कमी · ₹2"; "वसूली · ₹2 × 2 = ₹4" with ₹4 on a green pill.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | counter shown |
| 1.98 | — | — | envelope slide in from right to desk |
| 2.94 | — | — | stamp "₹3" pop; yellow circle draws round it |
| 4.90 | — | — | sum card pop; "Letter · ₹5" fade |
| 5.68 | — | — | "लगे · ₹3" fade |
| 6.28 | — | — | "कमी · ₹2" fade |
| 7.08 | — | — | last line words; green "₹4" pill stamp at 7.62; hold to end |
