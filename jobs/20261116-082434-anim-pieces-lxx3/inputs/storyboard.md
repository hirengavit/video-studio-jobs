# Storyboard: Postage, date stamps, posting and bulk cash (Postal Exams)

No character in any scene (no rig, no person). Every scene is an animated lecture slide on the cream canvas (#fbf7ee), in the kit's colours and fonts, with the app's frame drawn above it.

## Shared

**Series tag:** POSTAL RULES (in every scene).

**Frame:** the section label sits top left and the series pill top right. Content goes in x 80–1840, y 140–1000. Main cards fill that area with even margins of about 80 px.

**Language on screen:** postal terms are in English (Inter, bold, 64–96 px), with the Hindi translation 0.5 s later underneath (Noto Sans Devanagari, 40–48 px, supporting grey or red). Everything else is in Hindi only (≥ 40 px, line height 1.3), with postal terms kept inline in English.

**Pieces** (made once for the library; all are flat ink with 3 px rounded outlines in the kit palette):
- `envelope-face-large` (NEW): a big white address-side envelope diagram, 1200×760 at scale 1. It has a #ead9a8 border, a blank top-right stamp box (#stamp-box, dashed), a blank address block of 4 grey rules (#address-block) and a faint top band (#top-zone). Anchors: base, top. Used for the stamp position (s012, s019–s028, s145–s146, s153).
- `postal-date-stamp` (NEW): a round ink postmark impression, a double ring with a blank straight date bar and a blank office arc. 300×300. Anchors: base. Used s001, s021, s028–s034, s054, s084, s146.
- `letter-box` (NEW): a drawn postal-red pillar letter box with a dark slot, a cream plate and a base. 260×520. Anchors: base, top, mouth (the slot). Used s035–s044, s055, s100, s147, and as the stand-in whenever the photo is missing.
- `parcel-with-tag` (NEW): a brown-paper packet tied with sand string, with a white tag hanging from a loop. 420×320. Anchors: base, top. Parts: #packet, #string, #tag. Used s015–s017, s044.
- `non-postage-labels` (NEW): two generic labels with no real design, words or emblem. #revenue is a grey-green rectangular stamp with a wavy frame and a blank centre. #charity is a round pale-yellow sticker with a heart outline. 360×200. Anchors: base. Used s013, s019.
- `business-reply-card` (NEW): a white card, address side, with two thick ink vertical bars near the right edge, a blank top band for postmarks, a blank address block and a blank permit-number line. Parts: #bars, #top-band, #address-block, #permit-line. 560×360. Anchors: base. Used s099–s102, s115–s130, s135.
- `invoice-sheet` (NEW): a white ruled form sheet with a blank header strip, 6 blank rows and a signature line. 300×400. Anchors: base, top. Used as the invoice, statement of mailing, journal, bill and daily account (s049, s070, s083–s088, s132–s133).
- `mail-bag` (NEW): a canvas-sand mail bag with a drawstring neck and a postal-red band. 320×380. Anchors: base, mouth. Used s033.
- `rubber-date-stamp` (NEW): a hand-held rubber stamp: a wooden knob, a neck and a slate base. 200×300. Anchors: grip, base. Used s032.
- Library pieces reused: `envelope-article`, `embossed-envelope`, `postage-stamp`, `franking-impression`, `franking-machine`, `post-counter-icon`, `post-office-front`, `newspaper-bundle`, `registration-envelope`, `postcard-blank`, `rupee-cash`, `old-book-stack`.

## Continuity

- There is no character and no set. The canvas stays cream throughout. Scenes inside a section cut; a new section arrives with a wipe from the right (or a fade for recaps and the end).
- **Old/new split** (s014, s026–s028, s038, s066–s068, s103, s124–s126): the left panel is envelope-cream #f3ead6 with a small `old-book-stack`, the grey caps header "OLD · Post Office Guide Part I" and "पुराना" under it. The right panel is white with a postal-red top edge, the header "NOW" and a round `postal-date-stamp` postmark with the date in force. Old is never slate unless it is actually wrong today. Panels: x 100–920 and 1000–1820, y 170–900.
- **Envelope diagram** (s021–s028): `envelope-face-large` sits at x 120–1260, y 200–960. A legend card on the right (x 1320–1840) collects the four Regulation 18 measures. Arrows and measures persist across the continued scenes.
- **Seven-part tracker** (s005–s009): seven numbered stamp tiles stay in a row along the top.
- **Recap cards** use the envelope fold every time (s053–s055, s096–s098, s145–s152).
- Screen direction: flows (sender → office → destination, before → after) always run left to right.

## s001
Continues: no
In: cut (first scene). Section label: INLAND MAIL · POSTAGE AND POSTING. Framing: wide.
Idea: today's three topics, hooked on the stamp corner.
Layout: `envelope-face-large` on the right (scale 0.62, x 980–1730, y 240–710). A `postage-stamp` already sits in its top-right box with a soft yellow ring. Left column (x 120–900): three topic rows, each a stamp tile icon plus the English term and Hindi under it.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide 1.0 → 1.03 slow push | — | The envelope and stamp are visible; the kicker "आज का topic" is visible top left |
| 1.40 | | — | Row 1 slides: "Postage stamp", with "डाक टिकट" fading in 0.5 s later; the stamp ring pulses |
| 3.34 | | — | "सही तरीका" underline under row 1 |
| 4.78 | | — | Row 2: "Date stamps" / "तारीख वाली मुहर"; a `postal-date-stamp` stamps beside the stamp |
| 6.64 | | — | Row 3: "Bulk cash prepayment" / "थोक नकद अग्रिम भुगतान", with a `rupee-cash` icon |

## s002
Continues: no
In: cut. Section label: INLAND MAIL · POSTAGE AND POSTING. Framing: wide.
Idea: these are inland mail rules for postage and posting, in force from 16 December 2024.
Component: timeline. Cut it to two nodes on one track (y 560), drop the caption band, and use a red title at the top.
Layout: title "Inland mail" / "देशी डाक" at y 200. Two chips under it. The track runs x 200–1720 with a right node card (x 1100–1720) and a left node card (x 200–820).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Title card "Inland mail" is visible; "देशी डाक" at 0.5 |
| 1.72 | | — | Chip "Postage · डाक शुल्क" pops |
| 3.00 | | — | Chip "Posting · डाक में डालना" pops |
| 4.80 | | — | The track draws; the right postmark "16.12.2024" stamps |
| 8.16 | | — | Right card slides up: "Post Office Regulations" |

## s003
Continues: s002
Idea: the old Post Office Guide Part I, still asked in papers; then the whole topic is two questions.
Sub-shots: #timeline 0–8.16, #questions 8.16–end.
Layout (#questions): two wide white cards stacked (x 160–1760). Q1 is at y 260–520 and Q2 at y 580–840. Each has a big red number badge on the left and an ink icon on the right (Q1 `envelope-article` with a stamp; Q2 `rupee-cash`).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | "2024" types onto the right card |
| 1.78 | | — | The left node card fades in: `old-book-stack` + "Post Office Guide Part I" / "डाकघर गाइड भाग I", with the grey tag "पहले" |
| 5.84 | | — | Exam pill "पुराने papers: clause" under the left card |
| 8.16 | cut to #questions | — | Heading "पूरी बात: 2 सवाल" |
| 9.04 | | — | Q1 and Q2 card frames pop with badges 1 and 2 |
| 10.58 | | — | Q1 words: "Item पर postage कहाँ और कैसे दिखे?" |

## s004
Continues: s003
Idea: question 2: when, how and with whose permission postage is paid.
Layout: same as #questions.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Q1 holds; its icon draws |
| 0.82 | | — | Q2 words: "Postage कब, किस तरीके से, किसकी अनुमति से?" |
| 2.16 | | — | Highlight "कब" |
| 2.62 | | — | Highlight "किस तरीके से" |
| 4.22 | | — | Highlight "किसकी अनुमति से" |

## s005
Continues: no
In: wipe. Section label: TOPIC MAP · SEVEN PARTS. Framing: wide.
Idea: the topic has seven parts; each one is named as it is said.
Layout: a row of 7 small red perforated stamp tiles, each with its numeral only (x 200–1720, y 170–290). Below them is one big white detail card (x 160–1760, y 340–940) that swaps per part: "Part n" kicker, the rule name in English (88 px) with its Hindi, and a one-line Hindi gist.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Heading "Topic के 7 parts" is visible in the detail card |
| 0.54 | | — | The 7 tiles pop, stagger 0.1 |
| 2.60 | | — | Tile 1 turns yellow; the heading leaves; card 1: "Part 1" |
| 3.72 | | — | "Regulation 16" / "विनियम 16" |
| 5.52 | | — | Gist "Stamp कहाँ और कैसे लगे" |
| 8.08 | | — | Tile 1 → red with a white tick; card 1 out; card 2 "Part 2" in; tile 2 yellow |
| 9.38 | | — | "Regulation 18" / "विनियम 18" |
| 11.32 | | — | Gist "Envelope पर खाली जगह" |

## s006
Continues: s005

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Card 2 holds |
| 1.12 | | — | Second gist line "और date stamps" |
| 2.46 | | — | Tile 2 ticks; card 3 in, "Part 3"; tile 3 yellow |
| 3.36 | | — | "Regulation 22" / "विनियम 22" |

## s007
Continues: s006

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Gist "कौन सा item कहाँ post हो" |
| 2.50 | | — | Tile 3 ticks; card 4 "Part 4", with a small `old-book-stack` and the grey tag "पुराना Guide" |
| 5.20 | | — | "Bulk cash prepayment" / "थोक नकद अग्रिम भुगतान" |
| 7.08 | | — | Tile 4 ticks; card 5 "Part 5" |
| 8.52 | | — | "Regulation 95" / "विनियम 95" |
| 11.10 | | — | Gist "Newspapers: posting without prepayment" |

## s008
Continues: s007

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Card 5 holds |
| 0.50 | | — | Tile 5 ticks; card 6 "Part 6" |
| 1.62 | | — | "Business Reply Service" / "व्यावसायिक जवाबी सेवा" |
| 4.58 | | — | Chips "permit" and "charges" pop |
| 6.46 | | — | Tile 6 ticks; card 7 "Part 7" |
| 7.70 | | — | "Reply article" / "जवाबी वस्तु" with the gist "शर्तें" |
| 10.38 | | — | Chip "Advance deposit · अग्रिम जमा" |

## s009
Continues: s008
Idea: the closing part matches the old Guide clauses to today's rules.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Tile 7 ticks |
| 1.02 | | — | Card 7 out; card 8: `old-book-stack` on the left ↔ an arrow ↔ a white "Regulations 2024" document on the right |
| 1.56 | | — | Text "पुराने Guide clauses" under the book |
| 3.16 | | — | "आज के नियम" under the document; "मिलान" on the arrow at 3.86 |

## s010
Continues: no
In: wipe. Section label: PART 1 · REGULATION 16. Framing: wide.
Idea: the key term Prepayment.
Component: key-term. Keep the red stamp term card on the left and the white meaning card on the right; drop the exam pill and the chain panel; use a single yellow chip for the exception.
Layout: term card x 120–760, y 220–860; meaning card x 840–1800, y 220–860.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Kicker "पहले इतना याद रखिए" with an empty red term card |
| 2.12 | | — | "Prepayment" types in white; "अग्रिम भुगतान" fades in pale yellow 0.5 s later |
| 2.96 | | — | Meaning words: "Posting से पहले" |
| 4.10 | | — | "postage और बाकी देय रकम चुकाना" |
| 7.58 | | — | Yellow chip "छूट: सिर्फ़ authorised exception" pops |

## s011
Continues: no
In: cut. Framing: wide.
Idea: the accepted ways to pay.
Layout: heading "भुगतान के मान्य तरीके" at y 200. Five white tiles in a row (x 100–1820, y 330–800), each with a flat ink icon, the English term and the Hindi under it.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Heading is visible; tile 1: `rupee-cash` "Cash" / "नकद" |
| 0.82 | | — | Tile 2: phone with a ₹ (drawn), "Digital payment" / "डिजिटल भुगतान" |
| 2.34 | | — | Tile 3: `postage-stamp`, "Stamps" / "डाक टिकट" |
| 3.22 | | — | Tile 4: `franking-impression`, "Franking" / "फ्रैंकिंग" |
| 4.76 | | — | Tile 5: `old-book-stack`, "दूसरे तरीके (Regulations में)" |
| 7.66 | | — | A green round postmark "मान्य" stamps under the row |

## s012
Continues: no
In: cut. Framing: wide, then a slight push.
Idea: the stamp goes at the top right of the address side, and big stamps of the right value are best.
Layout: a grey band at the top: "हर service की अपनी शर्तें". `envelope-face-large` at scale 0.7 is centred left (x 140–980, y 280–810). A right panel (x 1080–1800): one big stamp vs a cluster of small stamps.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The band text and the blank envelope are visible |
| 2.02 | | — | Label "Address side · पते वाली तरफ़" |
| 4.14 | push 1.0 → 1.05 toward the corner | — | The stamp box highlights; a `postage-stamp` falls into it at 4.52; an arrow note "ऊपर दाएँ" |
| 5.74 | | — | Right panel: one big stamp (left) and five tiny stamps (right) |
| 6.96 | | — | The big stamp gets a green tick; the tiny ones dim to grey; caption "सही value के बड़े stamps" |

## s013
Continues: no
In: cut. Framing: wide.
Idea: on an unaccountable item where the embossed postage falls short, add stamps for just the difference; revenue stamps and charity labels don't pay postage.
Sub-shots: #emboss 0–6.56, #labels 6.56–end.
Layout (#emboss): `embossed-envelope` on the left (x 140–900). A bar pair on the right: "देय postage" (full length) and "Embossed" (shorter), with the gap in yellow. Layout (#labels): `non-postage-labels` centred and large (x 460–1460).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The envelope and the term "Unaccountable item" / "बिना हिसाब वाली डाक" are visible |
| 1.80 | | — | The embossed stamp is highlighted with the label "Embossed postage" |
| 3.22 | | — | The two bars grow; the gap fills yellow, marked "कम" |
| 4.44 | | — | A `postage-stamp` pops into the gap: "सिर्फ़ फ़र्क के stamps" |
| 6.56 | cut to #labels | — | Labels: "Revenue stamp" (left) |
| 8.74 | | — | "Charity label" (right) |
| 10.50 | | — | Slate cross over each; the line "इनसे postage नहीं चुकता" |

## s014
Continues: no
In: cut. Framing: wide.
Idea: cash at the counter ≠ bulk cash permission; prepayment changed from advice to compulsory.
Sub-shots: #two 0–4.57, #oldnew 4.57–end (the old/new split).
Layout (#two): two cards with a VS disc. On the left, `post-counter-icon` + `rupee-cash`, "Counter पर cash देना". On the right, a stack of `envelope-article` + a permit slip, "Bulk cash की अनुमति".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The left card is visible |
| 1.77 | | — | The right card slides in |
| 3.30 | | — | VS disc with "अलग" |
| 4.57 | cut to #oldnew | — | Old panel: "Prepayment: सलाह" (grey tag) |
| 7.36 | | — | Now panel: the "16.12.2024" postmark stamps |
| 9.62 | | — | "अनिवार्य" in big red ink |
| 10.46 | | — | Yellow chip "सिवाय authorised exceptions" |

## s015
Continues: no
In: cut. Framing: wide.
Idea: an unpaid or short-paid item can be held to settle the dues; dues give it no extra security.
Sub-shots: #hold 0–5.50, #nosec 5.50–end.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | `parcel-with-tag` on the left, its tag reading "Unpaid / कम paid"; kicker "बकाया तय करने के लिए" |
| 3.66 | | — | The packet slides right and stops at a slate bar; the stamp "रोका जा सकता है" |
| 5.50 | cut to #nosec | — | Line "देय रकम बाकी" with a shield icon beside it |
| 7.44 | | — | Label "Extra security" on the shield |
| 8.35 | | — | Slate cross on the shield: "नहीं मिलती" |

## s016
Continues: no
In: cut. Framing: wide.
Idea: the stamp's whole gummed surface must lie on the item itself.
Layout: a big stamp diagram on the left (x 160–820): the stamp face with its gummed back shown as a yellow-hatched area, pressed fully onto a paper surface. On the right (x 980–1780), `parcel-with-tag`.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Heading "Stamp लगाने की एक खास शर्त" |
| 3.12 | | — | Stamp diagram draws |
| 4.35 | | — | The gummed area highlights yellow: "पूरी चिपकने वाली सतह" |
| 5.72 | | — | Caption "item के बाहर लगे"; the stamp lands fully on the paper |
| 9.03 | | — | `parcel-with-tag` pops on the right |
| 10.44 | | — | The tag pulses with the label "tag" |

## s017
Continues: s016

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Holds |
| 0.93 | | — | A small stamp pops on the tag |
| 3.05 | | — | Slate cross on the tag stamp: "शर्त पूरी नहीं" |
| 5.15 | | — | The left diagram fades to grey and two small icons pop under the packet: a loose "अलग label" |
| 6.75 | | — | Then the box opened to show "अंदर का सामान", with slate crosses at 7.49 |

## s018
Continues: no
In: cut. Framing: wide.
Idea: franking follows Regulation 16 too; there's no maximum number of stamps; stamped stationery sells at its printed value.
Sub-shots: #frank 0–4.68, #nomax 4.68–8.17, #stationery 8.17–end.
Layout (#stationery): four tiles in a row: `postage-stamp`, `postcard-blank`, a drawn letter card, a drawn aerogramme. Each has the English term and the Hindi under it; each value box is blank.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | `envelope-article` with a `franking-impression` at the top right; "Franking" / "फ्रैंकिंग" |
| 1.02 | | — | Red chip "Regulation 16: पूरी शर्तें लागू" |
| 4.68 | cut to #nomax | — | Envelope with a row of six stamps |
| 6.13 | | — | Big text "कोई तय maximum गिनती नहीं" |
| 8.17 | cut to #stationery | — | "Postage stamps" / "डाक टिकट" |
| 9.89 | | — | "Stamped postcards" / "मुद्रित पोस्टकार्ड" |
| 11.77 | | — | "Letter cards" / "पत्र कार्ड" |
| 13.35 | | — | "Aerogrammes" / "हवाई पत्र" |
| 15.17 | | — | Every value box highlights yellow; band "छपी value पर ही बिकते हैं" |

## s019
Continues: no
In: cut. Framing: wide.
Idea: revenue stamps and charity labels aren't cancelled like postage; no misleading stamp-like marks on the address side.
Sub-shots: #nocancel 0–6.20, #mislead 6.20–end.
Layout (#mislead): `envelope-face-large` at scale 0.75, centred (x 510–1410, y 220–790), with a stamp-like ink square drawn at the lower left.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | `non-postage-labels` on the left and a `postage-stamp` on the right |
| 4.44 | | — | A `postal-date-stamp` cancels the postage stamp |
| 5.26 | | — | Slate tag over the labels: "Cancel नहीं" |
| 6.20 | cut to #mislead | — | The envelope with the stamp-like mark |
| 8.20 | | — | Slate circle around the mark: "भ्रामक निशान" |
| 9.18 | | — | Slate cross; caption "न लगाइए" |

## s020
Continues: s019

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The address block highlights yellow; label "पता साफ़ पढ़ा जाए" |
| 2.42 | | — | The stamp box highlights |
| 3.10 | | — | A postmark pops beside the stamp; label "काम करने की जगह" |

## s021
Continues: no
In: wipe. Section label: PART 2 · REGULATION 18. Framing: wide.
Idea: the top of an envelope belongs to stamps, labels, postmarks and other postal marks.
Layout: the envelope-diagram layout (Continuity). The legend card on the right starts with the heading "Regulation 18" / "विनियम 18" only.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Envelope and legend heading are visible |
| 0.74 | | — | #top-zone tints soft yellow: "ऊपरी हिस्सा" |
| 2.30 | | — | `postage-stamp` pops at the top right: "stamps" |
| 3.52 | | — | A small blank label pops beside it: "labels" |
| 5.24 | | — | `postal-date-stamp`: "postmarks" |
| 6.70 | | — | A small ink mark: "दूसरे postal निशान" |

## s022
Continues: s021

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | A grey address block slides up into the top zone |
| 1.48 | | — | It reaches the marks; at 3.84 slate cross: "काम अटकता है" |
| 5.12 | | — | The address block moves back down to its proper place |
| 7.30 | | — | Legend line "Domestic envelope: 4 नाप" |

## s023
Continues: s022

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Legend row 1 badge "1" |
| 0.96 | | — | The address block outline highlights |
| 3.28 | | — | A dimension arrow draws from the top edge down to the address block |
| 5.72 | | — | "40 mm" pops on it; legend row 1: "पते के ऊपर ≥ 40 mm" |
| 7.72 | | — | Legend row 2 badge "2" |
| 8.36 | | — | A margin arrow draws at the left |
| 9.18 | | — | Bottom margin arrow |
| 10.60 | | — | Right margin arrow |
| 12.74 | | — | "15 mm" on each; legend row 2: "बाएँ, नीचे, दाएँ ≥ 15 mm" |

## s024
Continues: s023

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Legend row 3 badge "3" |
| 2.42 | | — | A dashed zone draws around the address block |
| 3.46 | | — | "10 mm"; legend row 3: "पते के चारों ओर 10 mm: कुछ छपा या लिखा नहीं" |
| 8.18 | | — | Legend row 4 badge "4" |
| 9.24 | | — | The stamp pulses |
| 10.98 | | — | A `franking-impression` appears beside it as the alternative |
| 12.16 | | — | Legend row 4: "Stamp / frank: ऊपर दाएँ" |

## s025
Continues: s024
Camera ends back at wide; s026 continues from wide.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | to {on: '#stamp-box', zoom: 1.6} by 1.6 | — | The top-right box outline highlights |
| 2.06 | | — | A dimension line draws along the box with the label "74 mm" |
| 6.08 | back to wide by 7.0 | — | Holds |
| 6.94 | | — | The 40 mm arrow pulses; legend row 1 highlight "40 mm = पते तक का gap" |

## s026
Continues: s025
Sub-shots: #env 0–3.30, #oldnew 3.30–end (the old/new split).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The stamp corner circles in ink: "Stamp की जगह: ऊपर दायाँ कोना" |
| 3.30 | cut to #oldnew | — | Both panel headers |
| 4.88 | | — | Old panel: a small envelope sketch with a top gap arrow |
| 7.40 | | — | "ऊपर ≥ 3 cm खाली" |

## s027
Continues: s026

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Grey tag "सलाह" under the old line |
| 1.56 | | — | Now panel: the "16.12.2024" postmark stamps |
| 3.46 | | — | "Regulation 18" |
| 5.86 | | — | "40 mm" in big red |
| 8.20 | | — | "= 4 cm" beside it |
| 9.90 | | — | Bottom band (x 100–1820, y 930–1000): "सवाल पुराने Guide का →" |

## s028
Continues: s027
Sub-shots: #oldnew 0–6.42, #datestamp 6.42–end.
Layout (#datestamp): two cards side by side. On the left, `postage-stamp`; on the right, `postal-date-stamp`.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The band finishes "3 cm"; the old panel's 3 cm highlights |
| 2.70 | | — | The band adds a second line: "आज का नियम → 40 mm"; the now panel's 40 mm highlights |
| 6.42 | cut to #datestamp | — | Heading "Date stamp" |
| 7.74 | | — | Left card: "Postage stamp" / "डाक टिकट" |
| 8.94 | | — | Line "= postage का भुगतान" |

## s029
Continues: s028

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Right card: the postmark stamps; "Postal date stamp" / "डाक तारीख मुहर" |
| 3.62 | | — | The date bar highlights: "तारीख वाली मुहर" |
| 5.24 | | — | A small `post-office-front` under it; line "Office ने item handle किया" at 6.88 |

## s030
Continues: s029
Sub-shots: #datestamp 0–2.67, #rule 2.67–end.
Layout (#rule): a red heading, then three icons in a row (`envelope-article`, a small packet, a parcel) with a count line below.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Slate line under the right card: "इससे postage नहीं चुकता" |
| 2.67 | cut to #rule | — | Heading "Packing और posting का आम नियम" |
| 6.17 | | — | Letter icon |
| 6.69 | | — | Packet icon |
| 7.41 | | — | Parcel icon |
| 9.11 | | — | Big "≥ 2" pops |
| 10.89 | | — | Two postmarks stamp onto the parcel; line "post offices की date stamps" |

## s031
Continues: no
In: cut. Framing: wide.
Idea: the two offices are the booking (posting) office and the destination office; more marks may be added.
Layout: on the left, `post-office-front` (x 120–620); on the right, `post-office-front` (x 1300–1800); an arrow track between them with `envelope-article` moving along it.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Both buildings are visible; envelope at the left |
| 1.90 | | — | Left label "Booking / Posting office" / "बुकिंग कार्यालय"; postmark 1 on the envelope |
| 5.18 | | — | Right label "Destination office" / "गंतव्य कार्यालय"; postmark 2 |
| 7.30 | | — | Caption "≥ 2" |
| 9.94 | | — | A dashed third postmark slot on the track: "और मुहरें भी" |

## s032
Continues: no
In: cut. Framing: wide.
Idea: the count is of date-stamp marks, not stuck stamps; the cover must take the stamping pressure.
Component: myth-fact (first half). Keep the slate myth and the green fact; drop the postmark.
Sub-shots: #count 0–6.86, #press 6.86–end.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Heading "≥ 2 = ?" |
| 1.02 | | — | Fact card: "Offices की तारीख वाली मुहरें" with two postmarks |
| 4.52 | | — | Myth card: "चिपकाए stamps" |
| 6.06 | | — | Slate strike |
| 6.86 | cut to #press | — | `envelope-article` large; `rubber-date-stamp` above it |
| 8.16 | | — | Label "मज़बूत cover" |
| 9.18 | | — | The rubber stamp falls onto the envelope |

## s033
Continues: s032
Sub-shots: #press 0–1.84, #bag 1.84–5.76 (`mail-bag` centred), #layers 5.76–end (a large cut-away of the item: contents, inner layer, outer layer).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | A postmark impression appears under the lifted stamp; "दबाव सह ले" |
| 1.84 | cut to #bag | — | `mail-bag` with envelopes inside |
| 3.44 | | — | Labels "दबाव" |
| 4.18 | | — | "रगड़" |
| 5.76 | cut to #layers | — | A cross-section of the item: the contents with layers |
| 7.26 | | — | Inner layer: "Wax-cloth" / "मोमजामा" |
| 9.30 | | — | Label "अंदर का cover" |

## s034
Continues: s033

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The outer paper layer wraps over the wax-cloth |
| 0.86 | | — | Label "बाहर: मज़बूत कागज़" |
| 4.82 | | — | A stamp is placed on the outer paper |
| 6.30 | | — | A postmark stamps on it; caption "इसी कागज़ पर" |

## s035
Continues: no
In: wipe. Section label: PART 3 · REGULATION 22. Framing: wide.
Idea: Regulation 22 lists the ways of posting; the first is the letter box, which takes eight kinds of item.
Photo: india-post-letter-box, cut out on the left (x 140–620, y 200–960), with a paper edge, a 1° tilt and a credit. If the photo isn't found, use `letter-box`.
Layout: heading at the top right; a big red stamp tile with "8" at the right.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Heading "Regulation 22: posting के तरीके" |
| 3.12 | | — | Label "पहला तरीका" |
| 4.12 | | — | The letter box photo slides up; term "Letter box" / "पत्र पेटी" |
| 6.88 | | — | Stamp tile "8" stamps; line "तरह के items" |

## s036
Continues: s035
Layout: the right side becomes a 2×4 grid of tiles (x 760–1800). Fill only what the narration names: "Letters", "Cards", "Literature for the blind". The other tiles are one soft group labelled "छपी डाक की बाकी श्रेणियाँ". Never invent category names.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The empty grid frames pop |
| 1.58 | | — | "Letters" |
| 3.24 | | — | "Cards" |
| 4.44 | | — | Soft group "छपी डाक की बाकी श्रेणियाँ" |
| 6.70 | | — | Letters pulse |
| 7.90 | | — | "Literature for the blind" / "दृष्टिहीनों के लिए साहित्य" highlights |

## s037
Continues: s036

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Band under the grid: "शर्त: देय postage पूरा prepaid" |
| 3.26 | | — | "prepaid" highlights |
| 4.28 | | — | Second line: "Postage से छूट वाला item" |
| 7.60 | | — | "→ prepay करने को कुछ नहीं" |

## s038
Continues: no
In: cut. Framing: wide.
Idea: small packets used to be on Regulation 22's list; the Sixth Amendment removed them from 1 January 2026.
Layout: the old/new split, with the left header changed to "Regulation 22 · पहली list" (no book) and the right header "1 January 2026 से".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Both headers |
| 2.26 | | — | Left: a list card with three blurred grey rows |
| 5.32 | | — | Chip "Small packets" / "छोटे पैकेट" |
| 7.12 | | — | Right: the postmark "01.01.2026" |
| 9.66 | | — | "Sixth Amendment Regulations 2025" |
| 13.24 | | — | The small-packets chip pulses |
| 15.60 | | — | Slate strike; a note on the right: "list से हटा दिए" |

## s039
Continues: s038
Sub-shots: #oldnew 0–4.47, #notbox 4.47–end.
Layout (#notbox): `letter-box` on the left with a slate "नहीं" tag; three item cards on the right.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Band: "पुरानी list ≠ आज की list" |
| 3.00 | | — | "मत लिखिए" underline |
| 4.47 | cut to #notbox | — | Letter box with heading "Letter box में नहीं" |
| 8.01 | | — | `newspaper-bundle`: "Registered newspaper" / "पंजीकृत समाचार पत्र" |
| 9.83 | | — | A drawn magazine: "Periodical post" / "पत्रिका डाक" |
| 11.73 | | — | Envelope + `franking-impression`: "Franked items" / "फ्रैंक की गई डाक" |

## s040
Continues: s039
Sub-shots: #notbox 0–4.54, #formula 4.54–end.
Component: formula-card. Keep the left formula stamp ("Unpaid charge") and the right card with two rule lines; no worked numbers. The ₹1 minimum goes into the cream follow-on box.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Holds |
| 0.92 | | — | Grey dashed arrows from the items into the box |
| 2.74 | | — | Tag "Unpaid माने जाते" |
| 4.54 | cut to #formula | — | Heading "बकाया postage की वसूली" |
| 7.94 | | — | "Domestic unpaid item" / "घरेलू बिना भुगतान डाक" |
| 11.40 | | — | Formula: "पूरा prepaid rate × 2" |
| 12.28 | | — | "× 2" highlights |

## s041
Continues: s040
Sub-shots: #formula 0–6.56, #who 6.56–end.
Layout (#who): two route rows. Row 1: an envelope → a home icon, labelled "Delivery पर: addressee से". Row 2: an envelope returning ← to a sender office, labelled "लौटे तो: sender से".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Second line: "कम भुगतान" |
| 1.98 | | — | "→ कमी × 2" |
| 4.00 | | — | Cream box: "न्यूनतम charge" |
| 4.82 | | — | "₹1" pops |
| 6.56 | cut to #who | — | Row 1 draws |
| 7.28 | | — | Its label |
| 8.88 | | — | Row 2 draws |
| 10.78 | | — | Its label |

## s042
Continues: no
In: cut. Framing: wide.
Idea: accountable items: not in the letter box, a receipt at booking, a signature at delivery.
Layout: three columns (x 100–1820). Left: `registration-envelope` + `letter-box` with a slate cross. Middle: a receipt slip. Right: a signature line.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | "Accountable items" / "हिसाब वाली डाक"; the envelope |
| 2.50 | | — | Small letter box with a slate cross: "letter box में नहीं" |
| 3.58 | | — | Receipt slip: "Booking पर रसीद" |
| 4.38 | | — | Tag "tracking" |
| 6.84 | | — | Signature card: "Delivery पर sign" |
| 7.72 | | — | Chip "Addressee" |
| 8.90 | | — | Chip "Payee" |
| 9.90 | | — | Chip "Authorised व्यक्ति" |
| 11.00 | | — | A signature squiggle draws |

## s043
Continues: s042
Sub-shots: #three 0–3.54, #counter 3.54–end.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Under the signature: an ink pen icon "स्याही" |
| 2.46 | | — | A phone with a stylus: "digital" |
| 3.54 | cut to #counter | — | Big term bar: "Accountable item" / "हिसाब वाली डाक" |
| 6.82 | | — | `post-counter-icon` with the envelope on the desk |
| 8.68 | | — | Caption "Counter पर ही" |

## s044
Continues: no
In: cut. Framing: wide.
Idea: an item too big for the box can be taken by hand at the window, but that doesn't make it accountable.
Sub-shots: #big 0–7.60, #trap 7.60–end.
Component: myth-fact for #trap (slate myth, then the fact without a postmark).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | `letter-box` on the left; `parcel-with-tag` larger than its slot |
| 1.30 | | — | Parcel pulses: "इतना बड़ा" |
| 3.46 | | — | The slot gets a slate cross |
| 4.50 | | — | `post-counter-icon` on the right; the parcel slides onto its desk at 5.46 |
| 5.46 | | — | Label "Window पर हाथ में" |
| 7.60 | cut to #trap | — | Myth: "बड़ा size → accountable" |
| 11.16 | | — | Slate strike; fact: "Size से accountable नहीं बनता" |

## s045
Continues: no
In: cut. Framing: wide.
Idea: a receipt is given only when an accountable item is handed in; under one Guide arrangement, letters or packets could be handed in bulk at the window.
Sub-shots: #receipt 0–5.23, #bulk 5.23–end.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Receipt slip + `registration-envelope`; line "रसीद तब मिलती है" |
| 1.80 | | — | "जब accountable item भेजने के लिए दिया जाए" |
| 5.23 | cut to #bulk | — | A small `old-book-stack` with the tag "Guide की एक व्यवस्था" |
| 6.87 | | — | A bundle of `envelope-article` and packets |
| 8.29 | | — | "थोक में" |
| 9.55 | | — | `post-counter-icon`: "window पर" |

## s046
Continues: s045

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Chip "Postage + late fee" |
| 3.52 | | — | "पूरी पहले" in red |
| 5.56 | | — | The bundle pulses |
| 7.22 | | — | Slate line "बाद में पैसे देने का हक" with a slate strike at 9.06 |

## s047
Continues: no
In: cut. Framing: wide.
Idea: three more authorised ways to post.
Component: mind-map. Use three branches (left, right, bottom) instead of four. Centre: "बाकी authorised तरीके" with a big "3". Each branch: a flat icon, the English term, the Hindi, a grey example line.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Centre stamp is visible |
| 1.68 | | — | The "3" pops |
| 2.74 | | — | Branch 1: a small shop icon, "Franchisee outlet" / "फ्रैंचाइज़ी आउटलेट" |
| 6.06 | | — | Example line "departmental instructions से अनुमत items" |

## s048
Continues: s047

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Branch 2: kiosk icon, "Self-booking kiosk" / "स्वयं बुकिंग कियोस्क" |
| 1.82 | | — | "कुछ designated offices" |
| 4.88 | | — | "Regional Head तय करते" |
| 7.64 | | — | Branch 3: a browser + phone icon, "Web portal / Mobile app" |
| 10.74 | | — | "अनुमत items" |

## s049
Continues: no
In: cut. Framing: wide.
Idea: franked mail goes to the designated office fixed in the licence, on the day of franking, with a statement of mailing.
Layout: `franking-machine` on the left with an envelope bearing a `franking-impression`; an arrow to `post-office-front` on the right; documents below.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Machine and envelope; "Franked mail" / "फ्रैंक की गई डाक" |
| 2.96 | | — | The arrow draws; the office is labelled "Designated post office" |
| 6.14 | | — | Tag on the office: "Licence में तय" |
| 8.84 | | — | A calendar chip "Franking की तारीख को ही" |
| 10.54 | | — | `invoice-sheet`: "Statement of mailing" / "डाक विवरण" |

## s050
Continues: s049

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Under the calendar: "खास हालात में" |
| 2.74 | | — | "→ ठीक अगला working day" |
| 4.50 | | — | A red pill "Licensing authority" |
| 8.18 | | — | "समय और बढ़ा सकती है" |

## s051
Continues: s050
Sub-shots: #mail 0–0.90, #authority 0.90–end.
Layout (#authority): a card "Licensing authority" with two pills; below it a grey card "Bulk cash की अनुमति वाली authority" joined by a big "≠".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Note "कारण लिखकर" |
| 0.90 | cut to #authority | — | "Licensing authority" / "लाइसेंस प्राधिकारी" |
| 2.50 | | — | Pill "Divisional Head" |
| 4.72 | | — | Pill "Independent Gazetted Postmaster" |
| 8.80 | | — | Grey card |
| 12.28 | | — | "≠" pops; "अलग" highlights |

## s052
Continues: s051

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Back to the mail layout: the franked envelope moves along the arrow |
| 3.08 | | — | The designated office pulses; caption "तय office में ही" |

## s053
Continues: no
In: fade. Section label: RECAP 1. Framing: wide.
Idea: four points so far.
Component: recap-card. Use 4 rows with seal "4" and flap title "अब तक · 4 बातें". Each row has the English rule name, a Hindi line and a yellow fact pill; a green tick draws as each is said.
Layout: the envelope card x 200–1720, y 160–980.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The card with its flap and seal is visible |
| 1.76 | | — | Row 1 "Regulation 16" |
| 3.68 | | — | Hindi "Stamp: address side, ऊपर दाएँ" |
| 7.62 | | — | Pill "पूरा चिपका" |
| 9.22 | | — | Tick |
| 9.72 | | — | Row 2 "Regulation 18" |
| 11.72 | | — | Hindi "पते के ऊपर" |
| 12.68 | | — | Pill "40 mm" |

## s054
Continues: s053

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row 2 pill grows: "किनारे 15" |
| 2.08 | | — | "· पते के चारों ओर 10"; tick at 3.52 |
| 4.26 | | — | Row 3 "Date stamps" / "तारीख वाली मुहर" |
| 6.02 | | — | Pill "≥ 2 offices" |
| 7.30 | | — | Hindi "booking + destination"; tick at 8.70 |

## s055
Continues: s054

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row 4 "Regulation 22" |
| 1.64 | | — | Small chips "Franked" |
| 2.70 | | — | "Newspaper" |
| 4.14 | | — | "Accountable" |
| 5.36 | | — | Hindi "letter box में नहीं"; tick at 6.96 |

## s056
Continues: no
In: wipe. Section label: PART 4 · BULK CASH (OLD GUIDE). Framing: wide.
Idea: why bulk cash exists, and what it is.
Sub-shots: #firm 0–6.64, #term 6.64–end.
Layout (#firm): a firm building icon on the left; a big stack of `envelope-article` in the middle; a clock icon on the right. Layout (#term): the key-term red stamp card on the left; a flow on the right: sender → ₹ → counter, labelled "पहले".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Firm icon and envelope stack are visible; caption "Firm: कई items एक साथ" |
| 3.84 | | — | Small stamps pop onto envelopes one by one, stagger 0.15 (8 stamps) |
| 5.14 | | — | Clock icon: "समय लगता है" |
| 6.64 | cut to #term | — | "Bulk cash prepayment" / "थोक नकद अग्रिम भुगतान" |
| 8.52 | | — | The flow draws: "Sender" |
| 8.94 | | — | "मंज़ूर व्यवस्था" |
| 10.80 | | — | `rupee-cash` slides to the counter; tag "पहले cash" |

## s057
Continues: s056
Sub-shots: #term 0–4.93, #three 4.93–end.
Layout (#three): three tall white cards (x 120–1800, each about 520 wide, y 200–960) under a small `old-book-stack` tag "पुराना Guide". Each card has a red number badge, a who/what line, a where line and a red stamp tile at the bottom for its minimum (empty until said).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Red pill "Head of the Circle" / "सर्किल प्रमुख" |
| 1.90 | | — | "तय करते: कौन से offices" |
| 4.93 | cut to #three | — | The three empty cards pop, stagger 0.2 |
| 6.09 | | — | Heading "3 व्यवस्थाएँ" |
| 9.47 | | — | The three minimum tiles draw (empty); label "minimum" |

## s058
Continues: s057
Photo: mumbai-gpo-building, a small cut-out tilted 1° at the top of card 1 with the caption "बड़ा शहर" and a credit. Without it, card 1 uses `post-office-front`.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Card 1 badge "1" |
| 0.84 | | — | "Firms / दूसरे लोग" |
| 4.00 | | — | "Unregistered packets" / "बिना पंजीकरण पैकेट" |
| 5.68 | | — | Photo cut-out; "बड़े शहर" |
| 7.14 | | — | "Authorised offices" |

## s059
Continues: s058

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Card 1's tile |
| 2.26 | | — | "500" stamps into it; "packets" |
| 3.80 | | — | Card 2 badge "2" |
| 5.46 | | — | "Unregistered packets" |
| 7.02 | | — | Small `post-office-front`: "छोटे towns" |

## s060
Continues: s059

| time | camera | character | actions |
|---|---|---|---|
| 1.16 | | — | Card 2 tile: "250" stamps |
| 2.02 | | — | Card 3 badge "3" |
| 3.80 | | — | "Firms / business establishments" |
| 7.40 | | — | Item chips "Closed letters" |
| 9.90 | | — | "Inland letter cards" |

## s061
Continues: s060

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Chip "Postcards" |
| 1.88 | | — | Where line: "Gazetted + HSG offices" |
| 6.20 | | — | A yellow note pops under card 3: "HSG" |
| 9.08 | | — | "= Higher Selection Grade" / "उच्च चयन ग्रेड" |

## s062
Continues: s061

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The HSG note fades to grey |
| 1.30 | | — | Card 3 tile: "500 articles" stamps |
| 5.76 | | — | The 500 pulses |
| 7.36 | | — | A sand bar along the bottom: "HSG: 500 · छोटे town का 250 नहीं"; slate strike on "250" at 8.24 |

## s063
Continues: no
In: cut. Framing: wide.
Idea: worked example: 300 packets.
Layout: on the left, a firm icon + a packet stack with a big count "300". On the right, two check cards: "छोटा town · 250" and "बड़ा शहर · 500".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Kicker "उदाहरण" and the firm icon |
| 3.60 | | — | "300" counts up; "unregistered packets" |
| 6.84 | | — | Check card 1 |
| 9.04 | | — | Green tick: "शर्त पूरी" |

## s064
Continues: s063

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Check card 2 |
| 2.20 | | — | Slate cross: "नहीं" |
| 3.32 | | — | Band "सिर्फ़ गिनती काफ़ी नहीं" |
| 5.60 | | — | Two tick rows: "Posting office authorised" |
| 6.98 | | — | "व्यवस्था authorised" |
| 7.64 | | — | "दोनों" highlights |

## s065
Continues: no
In: cut. Framing: wide.
Idea: these minimums belong to the Guide's special bulk arrangements; today, cash at the counter has no such general minimum.
Layout: the old/new split.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Old panel: "Guide की खास bulk व्यवस्थाएँ" with three grey chips "500 · 250 · 500" |
| 4.58 | | — | Now panel: `post-counter-icon` + `rupee-cash`, "Counter पर cash" |
| 7.24 | | — | "सामान्य minimum" |
| 8.18 | | — | Slate strike + "नहीं" |

## s066
Continues: no
In: cut. Framing: wide.
Idea: the HSG arrangement also took unregistered parcels (minimum 500); since 16.12.2024 all India Post Parcels are accountable items.
Layout: the old/new split.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Headers |
| 2.94 | | — | Old: "HSG व्यवस्था" |
| 5.08 | | — | Chip "Unregistered parcels" |
| 7.32 | | — | "minimum 500" |
| 9.42 | | — | Now: postmark "16.12.2024" |
| 12.16 | | — | "सभी India Post Parcels" |
| 14.34 | | — | "= Accountable items" in red |

## s067
Continues: s066

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Now panel line: "Postage: पहले ही पूरा" |
| 5.96 | | — | Chip "cash समेत" |
| 7.32 | | — | Line "बाद में वसूली" |
| 10.38 | | — | Pill "सिर्फ़ Director General की इजाज़त से" |

## s068
Continues: s067
Sub-shots: #oldnew 0–6.05, #fifty 6.05–end.
Layout (#fifty): a big old-Guide card (envelope-cream, `old-book-stack`) with a large red stamp tile "50".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Bottom band: "Unregistered parcel" |
| 3.84 | | — | "≠ आज की parcel category"; slate strike on the old chip at 4.86 |
| 6.05 | cut to #fifty | — | Grey tag "पुराना Guide · अलग व्यवस्था" |
| 7.01 | | — | "50" stamps; "articles" |

## s069
Continues: s068
Layout: five `post-office-front` icons in a row under the 50 card. City names only if they are given in the scene inputs; never guess them.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Five office icons pop, stagger 0.12; caption "5 शहरों के चुने हुए offices" |
| 3.00 | | — | Grey note "उस समय के नाम" |
| 6.62 | | — | `registration-envelope`: "Ordinary registered letter mail" |

## s070
Continues: s069

| time | camera | character | actions |
|---|---|---|---|
| 0.34 | | — | Line "Postage + registration fee" |
| 2.74 | | — | `rupee-cash`: "नकद" |
| 4.04 | | — | `invoice-sheet`: "Special registered journals" |
| 8.22 | | — | Red pill "≥ 50 articles" (the 50 tile pulses at 10.30) |

## s071
Continues: s070
Sub-shots: #fifty 0–3.94, #trap 3.94–end.
Component: exam-trap (slim). Two cards: "50 articles · गिनती" (true, green tick) and "50 grams · वज़न" (slate strike).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Line "सभी एक ही type" |
| 2.38 | | — | "और weight" |
| 3.94 | cut to #trap | — | Banner "50 = ?" |
| 4.66 | | — | Card 1 + tick |
| 6.86 | | — | Card 2 |
| 8.66 | | — | Slate strike |

## s072
Continues: no
In: cut. Framing: wide.
Idea: since 1 October 2025, registration, Speed Post documents and parcels carry a value-added service: delivery only to the named addressee.
Layout: a postmark "01.10.2025" at the top left; three chips; on the right an envelope whose address name line highlights.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Postmark stamps |
| 2.18 | | — | Chip "Registration" |
| 3.56 | | — | "Speed Post documents" |
| 5.46 | | — | "Parcels" |
| 6.84 | | — | Red pill "Value-added service" |
| 8.82 | | — | The envelope's name line highlights yellow |

## s073
Continues: s072
Sub-shots: #vas 0–1.94, #limit 1.94–end.
Layout (#limit): an old-Guide card "50 वाली व्यवस्था"; below it a bracket enclosing class chips.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Caption "जिसके नाम item है" |
| 1.94 | cut to #limit | — | Card "50 वाली पुरानी व्यवस्था" |
| 3.86 | | — | "= Ordinary registered letter mail" |
| 7.05 | | — | Line "Guide की cash सुविधा" |
| 10.07 | | — | The bracket draws: "बताई classes तक सीमित" |

## s074
Continues: s073

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Chip inside the bracket: "Registered newspapers" + `newspaper-bundle` |
| 3.90 | | — | Outside the bracket: "हर postal product" |
| 8.64 | | — | Slate strike |

## s075
Continues: no
In: cut. Framing: wide.
Idea: today, Rule 9 lists cash as a valid way, but each product's booking conditions decide acceptance.
Layout: a now-style white card (red top edge).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Header "आज" |
| 0.36 | | — | Badge "Rule 9" / "नियम 9" |
| 1.32 | | — | `rupee-cash`: "cash: मान्य तरीका" |
| 4.36 | | — | Line "Item कैसे स्वीकार होगा?" |
| 7.60 | | — | Arrow → "उस product की booking की शर्तें" |

## s076
Continues: s075

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Holds |
| 1.24 | | — | Chip "+ ज़रूरी agreement" |
| 2.18 | | — | "/ अनुमति" |

## s077
Continues: no
In: wipe. Section label: PART 5 · REGULATION 95. Framing: wide.
Idea: Posting without prepayment: an authorised sender posts first and pays later under an approved arrangement.
Layout: key term on top (x 160–1760, y 170–380). Below, a left-to-right two-step track: [items posted] → [postage paid later].

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | "Posting without prepayment" / "बिना अग्रिम भुगतान posting" |
| 2.72 | | — | Step 1: "Authorised sender" |
| 3.84 | | — | `newspaper-bundle` goes into the office icon; "पहले post" |
| 6.30 | | — | Step 2: `rupee-cash`, "Postage बाद में" |
| 7.76 | | — | "approved व्यवस्था के तहत" |

## s078
Continues: s077
Sub-shots: #track 0–5.49, #licence 5.49–end.
Layout (#licence): `newspaper-bundle` on the left; two chips stacked on the right joined by "+".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | A second track draws under the first, label "Bulk cash" |
| 1.64 | | — | Steps reversed: "पैसा पहले" |
| 4.14 | | — | "→ posting"; tag "उल्टा" |
| 5.49 | cut to #licence | — | "Registered newspaper" / "पंजीकृत समाचार पत्र" |
| 7.19 | | — | Chip "Postal registration" |
| 9.99 | | — | "+ अलग licence" in red |

## s079
Continues: s078
Component: eligibility-card. Left red stamp: "Licence" / "लाइसेंस", "Registered newspaper". Right white card: conditions as tick rows. Drop the footnote.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The card frames slide in |
| 1.14 | | — | Row "कौन देता है" |
| 2.90 | | — | Pill "Head of the Circle" |
| 4.84 | | — | "/ Head of the Region" |
| 6.96 | | — | Row "शर्त" |
| 8.18 | | — | "Newspaper उसी क्षेत्र से प्रकाशित"; tick |

## s080
Continues: s079

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row "Owner / publisher" |
| 2.92 | | — | "एक बार में 500 से ज़्यादा copies" |
| 6.12 | | — | Trap strip below: "ठीक 500 copies" |
| 9.50 | | — | Slate cross |

## s081
Continues: s080

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | "501 copies" in green with a tick beside the strip |
| 4.46 | | — | Sand bar: "Bulk cash (बड़ा शहर): 500 काफ़ी" |
| 7.32 | | — | 500 highlights |

## s082
Continues: no
In: cut. Framing: wide, push.
Idea: print the licence number under the postal registration number, with WPP just before it.
Layout: a big blank newspaper front page (white, grey column lines, blank masthead; no real title). A print block sits at the lower right, with placeholder dots for the numbers (no invented numbers).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Page is visible |
| 0.54 | push to {on: '#printblock', zoom: 1.4} by 2.0 | — | Line 1: "Postal Registration No. ……" |
| 2.38 | | — | Line 2 beneath: "Licence No. ……"; arrow "नीचे" |
| 7.12 | | — | "WPP" types just before the licence number; yellow highlight; label "ठीक पहले" |

Camera ends zoomed; s083 starts fresh.

## s083
Continues: no
In: cut. Framing: wide.
Idea: copies are handed in at the authorised office with two copies of the invoice; the Postmaster checks them.
Component: mail-flow. Use 3 stops (newspapers + invoices → posting office → check) with no bottom band.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Title "Posting और bill" |
| 2.30 | | — | Stop 1: `newspaper-bundle` + two `invoice-sheet`s |
| 2.84 | | — | Stop 2: `post-office-front`, "Authorised posting office" |
| 5.68 | | — | Label "Invoice × 2" on stop 1 |
| 8.16 | | — | Stop 3: "Postmaster" (a badge icon, no person) |
| 10.18 | | — | Invoice rows tick one by one against the articles |

## s084
Continues: s083

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The two invoices separate: "Original" stays at the office |
| 1.72 | | — | Caption "अपने पास" |
| 3.58 | | — | "Duplicate" |
| 4.44 | | — | A signature draws |
| 5.38 | | — | A postmark stamps |
| 7.38 | | — | Duplicate slides back left to the customer side |

## s085
Continues: no
In: cut. Framing: wide.
Idea: the posting office makes a fortnightly bill on Form MS-98: postings from the 1st to the 15th are billed on the 16th.
Layout: the term "Form MS-98" at the top. A month track of 31 small day cells below it (x 120–1800), with bracket 1 and bracket 2 under it.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | `invoice-sheet` stack; line "Invoices से" |
| 3.12 | | — | "पंद्रह दिन का bill" |
| 5.18 | | — | "Form MS-98" / "फॉर्म MS-98" |
| 7.56 | | — | The month track draws; bracket over 1–15 |
| 10.52 | | — | Bill icon on day 16: "16 तारीख को" |

## s086
Continues: s085
Sub-shots: #month 0–5.78, #copies 5.78–end.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Bracket over 16 → the last day |
| 4.70 | | — | Bill icon past the end: "अगले महीने की 1 तारीख" |
| 5.78 | cut to #copies | — | The bill on the left; arrow 1 to `post-office-front`, "Head Office" |
| 6.70 | | — | Grey tag "ज़रूरत हो तो" |

## s087
Continues: s086
Sub-shots: #copies 0–4.34, #head 4.34–end (a ledger card, centred).

| time | camera | character | actions |
|---|---|---|---|
| 0.46 | | — | Arrow 2 to an office: "Postal Accounts Office" |
| 2.36 | | — | Caption "credit पर नज़र" |
| 4.34 | cut to #head | — | A ledger card |
| 7.20 | | — | "Postage realised in cash for ordinary services" types (Georgia) |
| 11.16 | | — | "जमा" |

## s088
Continues: s087
Sub-shots: #head 0–8.24, #pay 8.24–end.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Under the ledger: "Records बताते हैं" |
| 2.14 | | — | Line "Items बिना stamps post हुए" |
| 5.28 | | — | "Sender charge का ज़िम्मेदार" |
| 8.24 | cut to #pay | — | Bill → arrow → `post-office-front` |
| 10.74 | | — | Label "Bill में लिखा post office" |

## s089
Continues: no
In: cut. Framing: wide, slow push.
Idea: pay within 7 days of getting the bill (a slow line, so one big fact holds).
Layout: a big red perforated stamp card centred (x 560–1360): "7" huge, "दिन" under it. Line above: "Bill मिलने के".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide 1.0 → 1.05 | — | The stamp card frame and the bill icon are visible |
| 1.30 | | — | "Bill मिलने के" |
| 3.65 | | — | "7" stamps |
| 4.69 | | — | "दिन" |
| 6.52 | | — | "के अंदर" |

## s090
Continues: no
In: cut. Framing: wide.
Idea: the 7 days run from receipt, not the printed date; late payment can cancel the licence.
Component: myth-fact. The fact "Bill मिलने से" comes first in green; the myth "bill पर छपी तारीख से" in slate with a strike.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Fact card "7 दिन: bill मिलने से" with a green tick |
| 0.88 | | — | Myth card "bill पर छपी तारीख से" |
| 1.35 | | — | Strike |
| 1.93 | | — | Band "समय पर न चुकाया" |
| 5.54 | | — | Red postmark "Licence cancel" stamps |

## s091
Continues: no
In: cut. Framing: wide.
Idea: if the next fortnight after the bill's fortnight also passes unpaid, posting without prepayment stops at once.
Layout: two fortnight blocks on a track; a red stop sign on the right.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Block 1 "Bill वाला पखवाड़ा" |
| 3.19 | | — | Block 2 fills from the left: "अगला पखवाड़ा" |
| 5.81 | | — | `rupee-cash` icon with a slate cross: "पैसा नहीं आया" |
| 7.99 | | — | The stop sign pops |
| 8.44 | | — | Caption "बिना prepayment posting" |
| 9.82 | | — | "तुरंत बंद" |

## s092
Continues: s091
Sub-shots: #stop 0–2.30, #recover 2.30–end.
Layout (#recover): a two-step list.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Postmark "Licence cancel" |
| 2.30 | cut to #recover | — | Step 1: "Head of the Circle / Region" |
| 3.19 | | — | "→ security deposit से वसूली" |
| 4.81 | | — | Step 2: "बाकी रकम" |
| 5.55 | | — | "→ Post Office Act 2023 के तहत" |

## s093
Continues: no
In: cut. Framing: wide.
Idea: the licence ends with the postal registration, so renew both together; the licence covers only that newspaper and its approved posting.
Layout: two linked cards ("Postal registration", "Licence") with a chain link; below, a scope band.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Both cards |
| 0.86 | | — | Registration dims |
| 1.88 | | — | Licence dims: "खत्म" |
| 2.95 | | — | Band "Renewal: दोनों साथ apply" |
| 6.74 | | — | Scope band: "सिर्फ़ उस eligible newspaper" |
| 10.70 | | — | "+ approved posting" |

## s094
Continues: s093

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Slate row 1: "Firm की आम चिट्ठियाँ बिना stamp" |
| 4.26 | | — | Cross |
| 5.50 | | — | Slate row 2: "Business Reply permit से बदल नहीं सकते" |
| 8.16 | | — | Cross |

## s095
Continues: no
In: cut. Framing: wide.
Idea: the trap: without prepayment ≠ free posting.
Component: exam-trap. Use the banner and a single line instead of two cards, and keep the remember bar.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Grey note "वो अलग काम है" |
| 1.68 | | — | The banner "EXAM TRAP · परीक्षा का जाल" slides down |
| 3.04 | | — | Line "बिना prepayment = मुफ़्त posting" |
| 5.74 | | — | Slate strike on "मुफ़्त" |
| 6.50 | | — | Remember bar: "Postage पूरा" |
| 8.98 | | — | "bill से बाद में" |

## s096
Continues: no
In: fade. Section label: RECAP 2. Framing: wide.
Component: recap-card. Card A has flap "Part 4" and seal "3".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The card with its flap is visible |
| 2.78 | | — | Row 1 "Bulk cash" |
| 4.80 | | — | Pill "Head of the Circle"; tick |
| 5.86 | | — | Row 2 "Unregistered packets" |
| 9.20 | | — | Pill "बड़े शहर 500" |
| 11.22 | | — | "· छोटे town 250"; tick |

## s097
Continues: s096
Sub-shots: #part4 0–4.78, #part5 4.78–end (card B, flap "Part 5", seal "3").

| time | camera | character | actions |
|---|---|---|---|
| 0.40 | | — | Row 3 "HSG व्यवस्था" |
| 2.84 | | — | Pill "500 articles"; tick |
| 4.78 | cut to #part5 | — | Row 1 "Newspaper licence" |
| 6.60 | | — | Pill "Circle / Region Head" |

## s098
Continues: s097

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row 1 adds "> 500 copies"; tick |
| 2.14 | | — | Row 2 "Bill" |
| 3.12 | | — | Pill "Form MS-98"; tick |
| 6.26 | | — | Row 3 "भुगतान" |
| 8.28 | | — | Pill "bill मिलने के 7 दिन"; tick |

## s099
Continues: no
In: wipe. Section label: PART 6 · BUSINESS REPLY SERVICE. Framing: wide.
Idea: a firm sends its customer a reply card, envelope or approved reply label.
Layout: a firm building icon on the left (x 120–520); a home icon on the right (x 1400–1800); the three items travel along an arrow between them.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Firm icon "Firm" and home "Customer" |
| 1.75 | | — | `business-reply-card` slides right |
| 3.67 | | — | A reply envelope follows |
| 5.85 | | — | A small reply label |
| 6.31 | | — | Term "Business Reply" / "व्यावसायिक जवाबी" |

## s100
Continues: s099

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The card enlarges at the centre |
| 1.68 | | — | Its address block highlights: "Permit holder का पता" |
| 4.00 | | — | The card moves back; a `letter-box` near the home |
| 6.12 | | — | The card slides into the box: "आम तरीके से post" |
| 7.60 | | — | The empty stamp corner gets a dashed outline: "बिना stamp" |

## s101
Continues: s100
Sub-shots: #route 0–7.94, #charge 7.94–end.
Layout (#charge): a white charge card at the centre (x 360–1560): "हर लौटा reply" and a sum line.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The card travels back left to the firm |
| 2.32 | | — | Firm label becomes "Permit holder" |
| 3.38 | | — | "= Addressee" |
| 4.52 | | — | `rupee-cash` beside the firm |
| 6.22 | | — | "वापसी की डाक का charge चुकाता" |
| 7.94 | cut to #charge | — | Heading "हर लौटे जवाब पर" |
| 11.56 | | — | Term "Usual postage" / "सामान्य डाक शुल्क" |

## s102
Continues: s101

| time | camera | character | actions |
|---|---|---|---|
| 0.82 | | — | "+ ₹1 handling charge" in red |
| 2.98 | | — | The ₹1 chip lifts above two slate cards below |
| 4.34 | | — | Slate card "≠ Permit fee" |
| 6.76 | | — | Slate card "≠ unpaid letter का दोगुना charge" |

## s103
Continues: no
In: cut. Framing: wide.
Idea: the Guide's extra charge of 10 paise per reply became ₹1 per reply from 1 February 2002.
Layout: the old/new split with the right header "1 February 2002 से".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Headers |
| 2.80 | | — | Old: "हर reply पर" |
| 3.74 | | — | "10 paise extra" |
| 6.04 | | — | Now: postmark "01.02.2002" |
| 8.20 | | — | "Usual postage" |
| 10.10 | | — | "+ ₹1 प्रति reply" |

## s104
Continues: no
In: cut. Framing: wide.
Idea: how a permit is obtained.
Component: step-list. Use 4 steps; drop the closing chip. The last step (permit issued) goes on cream with a green tick.
Layout: title at y 190; the step cards at y 300–960.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Title "Permit कैसे मिलता है" |
| 2.22 | | — | Step 1 "Applicant" |
| 3.36 | | — | "Application" |
| 4.96 | | — | Proof icons pop: card |
| 5.96 | | — | Envelope |
| 7.34 | | — | Wrapper |
| 8.58 | | — | "पूरे छपे proofs" |

## s105
Continues: s104

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Step 2 "Postmaster को" |
| 3.36 | | — | "जहाँ जवाब लौटकर आएँगे" |
| 5.44 | | — | Step 3 "Postmaster" |
| 7.80 | | — | "→ Head of the Division" |

## s106
Continues: s105
Sub-shots: #steps 0–2.88, #fee 2.88–end.
Layout (#fee): a red stamp fee card on the left; on the right, a financial-year bar of 4 quarter blocks (x 760–1800).

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Step 4 "Head of the Division: permit जारी"; green tick |
| 2.88 | cut to #fee | — | "Permit fee" / "परमिट शुल्क" |
| 5.20 | | — | Chip "advance में" |
| 7.47 | | — | The year bar draws (blank quarters) |
| 10.69 | | — | Label "किस तिमाही में जारी?" |

## s107
Continues: s106
Component: data-chart. Use vertical stepped bars, one per quarter, values written beside them. No source line beyond "Business Reply permit fee".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Bar label "Financial year" / "वित्तीय वर्ष" |
| 1.02 | | — | "1 April" at the left end |
| 2.62 | | — | "31 March" at the right end |
| 5.06 | | — | Quarter 1 label "April–June" |
| 7.32 | | — | Bar 1 grows: "₹200" |

## s108
Continues: s107

| time | camera | character | actions |
|---|---|---|---|
| 1.18 | | — | Q2 "July–September" |
| 2.24 | | — | Bar "₹150" |
| 5.38 | | — | Q3 "October–December" |
| 6.58 | | — | Bar "₹100" |
| 9.00 | | — | Q4 "January–March" |
| 10.08 | | — | Bar "₹50" |

## s109
Continues: s108

| time | camera | character | actions |
|---|---|---|---|
| 0.74 | | — | Step arrows draw between the bar tops |
| 2.18 | | — | Label "− ₹50" on each |
| 5.07 | | — | Band "Valid" |
| 7.75 | | — | "issue वाले financial year की 31 March तक"; the 31 March end of the bar highlights |

## s110
Continues: s109

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | A chip "Renewal: March में" drops over the March end |
| 1.92 | | — | An arrow into the next year: "1 April से 1 साल" |
| 4.94 | | — | Red pill "Renewal annual fee" |
| 6.58 | | — | "₹200" |

## s111
Continues: s110

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Line "समय रहते apply" |
| 2.76 | | — | Slate tag "Grace period: नहीं" |
| 4.86 | | — | Line "Reply cards / envelopes का बकाया postage" |
| 8.04 | | — | "न चुकाया →" |

## s112
Continues: s111
Sub-shots: #fee 0–2.53, #example 2.53–end.
Layout (#example): kicker "उदाहरण"; the same year bar (Q3 highlighted) with a calendar chip.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Red postmark "Permit cancel" |
| 2.53 | cut to #example | — | "उदाहरण" |
| 3.95 | | — | Chip "October 2026" |
| 7.07 | | — | Q3 block highlights yellow: "तीसरी तिमाही" |
| 8.95 | | — | "Fee ₹100" |

## s113
Continues: s112

| time | camera | character | actions |
|---|---|---|---|
| 0.90 | | — | End chip "31 March 2027 तक" |
| 4.02 | | — | "खत्म" |
| 5.14 | | — | Chip "Renewal: March में" |
| 7.20 | | — | Arrow "नया साल 1 April से" |

## s114
Continues: no
In: cut. Framing: wide.
Idea: the trap: the permit fee doesn't cover the replies' postage.
Component: exam-trap. Banner plus a single line, with a slate strike.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The banner "EXAM TRAP · परीक्षा का जाल" is visible |
| 2.12 | | — | Line "Permit fee में सारे जवाबों का postage" |
| 5.28 | | — | "शामिल" |
| 5.86 | | — | Slate strike + "नहीं" |

## s115
Continues: no
In: wipe. Section label: PART 7 · BUSINESS REPLY ARTICLES. Framing: wide.
Idea: Business Reply works only with the approved design; a plain unstamped envelope with the firm's address is not one.
Layout: on the left, `business-reply-card` with a green tick; on the right, a plain `envelope-article` with an address and an empty corner.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Card on the left: "Business Reply" |
| 1.06 | | — | Pill "Approved design से ही" |
| 3.86 | | — | Plain envelope on the right; dashed corner: "बिना stamp" |
| 7.18 | | — | Its address highlights: "Firm का पता" |

## s116
Continues: s115
Sub-shots: #two 0–3.12, #card 3.12–end.
Layout (#card): `business-reply-card` at scale 2.6, centred (x 230–1690, y 180–940). Three bracket labels around it, one per region: the address block, the permit line, the bars + top band. Six numbered dots mark the six entries on the card; no invented wording on them.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Slate cross on the plain envelope |
| 1.78 | | — | Caption "Business Reply article नहीं" |
| 3.12 | cut to #card | — | Big card |
| 4.00 | | — | Six numbered dots pop, stagger 0.1; "छह बातें" |
| 8.50 | | — | Bracket 1: "जवाब पाने वाला" |
| 10.24 | | — | Bracket 2: "Permit की पहचान" |
| 12.34 | | — | Bracket 3: "Service के निशान" |

## s117
Continues: s116
Camera ends at wide.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | to {on: '#bars', zoom: 1.5} by 1.5 | — | Brackets fade to grey |
| 2.06 | | — | #bars highlight: "दो मोटी खड़ी lines" |
| 3.68 | | — | "पहचान" |
| 5.26 | back to wide by 6.2 | — | The payment lines highlight: "भुगतान वाली lines" |
| 8.46 | | — | Note "भारत में stamp बिना reply post" |

## s118
Continues: s117
Sub-shots: #card 0–8.00, #advert 8.00–end.
Layout (#advert): a blank advertisement page (grey placeholder lines, no real brand) with the reply label printed in its corner.

| time | camera | character | actions |
|---|---|---|---|
| 1.06 | | — | Chip "Postage: addressee चुकाएगा" |
| 3.54 | | — | #top-band highlights |
| 4.86 | | — | "postmarks के लिए जगह" |
| 8.00 | cut to #advert | — | Page; "Permit holder" |
| 9.08 | | — | The reply label in the corner highlights: "Authorised reply label" |
| 12.16 | | — | "advertisement में भी" |

## s119
Continues: s118
Sub-shots: #advert 0–5.73, #lang 5.73–end.
Layout (#lang): three chips in a row (x 200–1720) with a card mock below.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The label lifts off the page onto a blank `envelope-article` beside it |
| 4.26 | | — | The label is placed; "चिपका सकता है" |
| 5.73 | cut to #lang | — | Heading "भाषा" |
| 7.81 | | — | Chip "English" |
| 8.71 | | — | "Hindi" |
| 9.77 | | — | "Regional भाषा" |

## s120
Continues: s119

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Rule card: "Postage lines + permit number" |
| 4.04 | | — | The English chip glows |
| 5.32 | | — | The Hindi chip glows; the regional chip fades to grey; "में ही" |
| 6.84 | | — | Line "Post town का नाम" |
| 9.14 | | — | "आखिर में English में भी" |

## s121
Continues: s120

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Line "अंक" |
| 0.78 | | — | "international रूप" |
| 3.50 | | — | Digits "0 1 2 3 4 5 6 7 8 9" type |
| 5.53 | | — | Grey kicker "अब: card और envelope की शर्तें" |

## s122
Continues: no
In: cut. Framing: wide.
Idea: a Business Reply Card must not be folded, cut or altered; it can be the reply half of a double postcard.
Sub-shots: #nofold 0–6.02, #double 6.02–end.
Layout (#nofold): `business-reply-card` on the left; three slate rows on the right. Layout (#double): two `postcard-blank`s joined along a perforation line.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Card: "Business Reply Card" |
| 1.44 | | — | "मोड़ना" + slate cross |
| 2.37 | | — | "काटना" + cross |
| 4.62 | | — | "बदलना" + cross |
| 5.12 | | — | "मना" |
| 6.02 | cut to #double | — | "Double postcard" / "दोहरा पोस्टकार्ड" |
| 7.68 | | — | The reply half highlights yellow: "reply वाला हिस्सा" |

## s123
Continues: s122
Sub-shots: #double 0–3.92, #bre 3.92–end.

| time | camera | character | actions |
|---|---|---|---|
| 0.80 | | — | A small catalogue sheet slides beside it: "दूसरी सामग्री के साथ" |
| 3.92 | cut to #bre | — | A reply envelope next to a catalogue: "Business Reply Envelope" |
| 5.85 | | — | Red pill "दूसरी सामग्री के साथ ही" |

## s124
Continues: no
In: cut. Framing: wide.
Idea: size: in the old Guide, Business Reply sizes followed the letter-cover and private-postcard rules.
Layout: the old/new split; the right side is empty until s125.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Heading "Size" and the headers |
| 2.56 | | — | Old: "Business Reply size" |
| 4.74 | | — | "↔ आम letter cover" |
| 6.26 | | — | "+ निजी postcard की शर्तें" |

## s125
Continues: s124

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Now: a rectangle outline "Domestic आयताकार letter envelope" |
| 3.46 | | — | "minimum" |
| 4.24 | | — | Width dimension "140" |
| 5.74 | | — | Height "90" |
| 6.14 | | — | "mm" |
| 7.74 | | — | Chip "± 2 mm" |

## s126
Continues: s125

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Now: a second outline "Postcard" |
| 0.42 | | — | "140" |
| 2.22 | | — | "× 90 mm" |
| 4.80 | | — | Line "Material: Post Office postcard से" |
| 7.28 | | — | "पतला" + slate cross |
| 9.04 | | — | "ज़्यादा लचीला" + cross |

## s127
Continues: no
In: cut. Framing: wide.
Idea: the address side is reserved for Business Reply entries; only an authorised Business Reply Label may go there.
Layout: card two sides. On the left, the address side (`business-reply-card`); on the right, the message side (a blank white card), each about 700 wide.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Both sides; labels "Address side" |
| 1.46 | | — | Address side highlights: "Business Reply की बातों के लिए" |
| 5.58 | | — | A small label pops on it: "सिर्फ़ authorised Business Reply Label" |

## s128
Continues: s127

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Message side label "Message side" |
| 1.12 | | — | A name-and-address label pops on it |
| 4.80 | | — | "पूरा चिपका" |
| 6.88 | | — | Dimension box "≤ 5 × 2 cm" |

## s129
Continues: s128

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | A thin-paper frame on the message side |
| 2.50 | | — | Chips "नक्काशी की छाप" |
| 3.68 | | — | "चित्र" |
| 4.74 | | — | "Drawing" |
| 5.82 | | — | "Photo" |
| 8.16 | | — | The frame's edges press flat: "पूरा चिपकाइए" |

## s130
Continues: no
In: cut. Framing: wide.
Idea: break a condition and the card or envelope can be treated as an unpaid letter, with the domestic dues rules.
Layout: `business-reply-card` on the left with a slate cross; on the right, a three-step slate-to-red chain.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Card and line "शर्त टूटे" |
| 1.02 | | — | Slate cross on the card |
| 2.76 | | — | Tag "Unpaid letter" |
| 5.82 | | — | Chain step 1 "घरेलू बकाया नियम" |
| 7.96 | | — | Step 2 "कमी की गणना" |
| 9.48 | | — | Step 3 "₹1 minimum" |

## s131
Continues: no
In: cut. Framing: wide.
Idea: on a correct reply the permit holder pays usual postage plus ₹1; then the advance deposit.
Sub-shots: #pay 0–6.49, #deposit 6.49–end.
Layout (#deposit): the key-term card on the left; on the right, a tall deposit gauge (a level box) labelled "≈ 15 दिन का postage + handling".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | `business-reply-card` with a green tick: "सही reply" |
| 0.98 | | — | "Permit holder देता है" |
| 1.74 | | — | "Usual postage" |
| 3.90 | | — | "+ ₹1 handling charge" |
| 6.49 | cut to #deposit | — | "Advance deposit" / "अग्रिम जमा" |
| 9.51 | | — | Gauge frame |
| 10.67 | | — | "करीब 15 दिन का" |
| 11.81 | | — | "postage + handling" |

## s132
Continues: s131
The gauge follows state `deposit`.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | level `#deposit-level` state deposit (fills to full at 1.54: "जमा") |
| 2.82 | | — | `invoice-sheet` ledger slides in at the centre: "Delivery office" |
| 4.66 | | — | "रोज़ का account" |
| 7.26 | | — | Column chips in the ledger header: "तारीख" |
| 9.00 | | — | "Category" |
| 10.36 | | — | "गिनती" |
| 11.08 | | — | "Postage" |

## s133
Continues: s132

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Chip "Handling charge" |
| 1.36 | | — | "बची रकम"; the gauge level drops (state) |
| 3.24 | | — | Note "Deposit दोबारा भरना" |
| 5.52 | | — | Calendar chips "1" |
| 7.28 | | — | "16" |
| 8.54 | | — | "तारीख वाले पखवाड़े से पहले"; the gauge refills (state) |

## s134
Continues: s133

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | "या" |
| 1.36 | | — | The gauge drains (state): "पैसा खत्म होते ही" |
| 3.72 | | — | Yellow pill "जो पहले हो" |
| 4.50 | | — | Slate line "Permit fee भरा → deposit की ज़रूरत खत्म" |
| 8.26 | | — | Strike |

## s135
Continues: no
In: cut. Framing: wide.
Idea: keep the three permissions apart.
Layout: three tall cards in a row (x 120–1800), each with an icon, the permission in English with its Hindi, and the authority in a red pill.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Heading "3 permissions · अलग-अलग" |
| 3.42 | | — | Card 1: `rupee-cash`, "Bulk cash" |
| 4.80 | | — | Pill "Head of the Circle" |
| 6.80 | | — | Card 2: `newspaper-bundle`, "Newspaper licence" |
| 8.20 | | — | Pill "Head of the Circle" |
| 10.14 | | — | "/ Head of the Region" |

## s136
Continues: s135

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Card 3: `business-reply-card`, "Business Reply permit" |
| 1.50 | | — | Pill "Head of the Division" |
| 2.56 | | — | All three pills pulse once, stagger 0.15 |

## s137
Continues: no
In: wipe. Section label: OLD GUIDE CLAUSES · TODAY'S RULES. Framing: wide.
Idea: old papers ask Guide clause numbers; the Regulations 2024 replaced the Guide from 16 December 2024.
Layout: the same two-node track as s002.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Left node: `old-book-stack` + "Post Office Guide Part I" |
| 3.38 | | — | Pill "पुराने papers: clause number" |
| 5.08 | | — | Track draws; postmark "16.12.2024" |
| 8.12 | | — | "की जगह" arrow |
| 8.66 | | — | Right node: "Post Office Regulations 2024" |

## s138
Continues: no
In: cut. Framing: wide.
Idea: the map from old Guide topics to today's rules.
Component: compare-table. Use 2 columns, "पुराना Guide · विषय" and "आज", with 4 rows on page 1. A dash "—" means no single matching rule. Show only the pairs named in the narration and no clause numbers.
Layout: table x 120–1800, y 170–960; page 1 rows a–d.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Table frame and header are visible, rows blank |
| 2.08 | | — | Legend chip "— = कोई एक matching नियम नहीं" |
| 5.40 | | — | Grey note "खास जोड़े" |
| 7.38 | | — | Row a left: "Stamp लगाने का तरीका" |

## s139
Continues: s138

| time | camera | character | actions |
|---|---|---|---|
| 0.60 | | — | Row a right: "Regulation 16" |
| 2.14 | | — | Row b left: "पते के ऊपर 3 cm (सलाह)" |
| 7.10 | | — | Row b right: "Regulation 18" |

## s140
Continues: s139

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row c left: "Cash में prepayment व्यवस्था" |
| 5.44 | | — | Row c right: "Rule 9" |
| 6.46 | | — | Row d left: "Prepayment की सलाह" |

## s141
Continues: s140
Sub-shots: #page1 0–2.74, #page2 2.74–end (rows e–g in the same table style).

| time | camera | character | actions |
|---|---|---|---|
| 1.06 | | — | Row d right: "Regulation 5" |
| 2.74 | cut to #page2 | — | Row e left: "Packing, sealing, posting के आम नियम" |
| 7.46 | | — | Sub-line "(stamp लगाने का तरीका भी)" |
| 9.44 | | — | Row e right: "—" |

## s142
Continues: s141

| time | camera | character | actions |
|---|---|---|---|
| 1.26 | | — | Row f left: "Address side पर franking जैसी छाप: मना" |
| 6.34 | | — | Row f right: "—" |
| 7.06 | | — | Row g left: "Business Reply Service: पुरानी व्यवस्था" |
| 10.52 | | — | Row g right: "—" |

## s143
Continues: no
In: cut. Framing: wide.
Idea: per old answer keys, the Business Reply permit's annual fee is credited to UCR.
Layout: a grey tag "पुरानी answer keys" at the top; a flow: a fee card → an arrow → a big red stamp "UCR".

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Tag is visible |
| 2.40 | | — | Fee card "Business Reply permit · annual fee" |
| 5.98 | | — | The arrow draws; "UCR" stamps |
| 7.70 | | — | "में जमा" |

## s144
Continues: s143

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The UCR stamp pulses |
| 0.98 | | — | Beneath: "Unclassified Receipts" / "अवर्गीकृत प्राप्तियाँ" |

## s145
Continues: no
In: fade. Section label: KEY POINTS. Framing: wide.
Component: recap-card. Card A has flap "5 बातें · 1–3" and seal "5". Its three rows tick green as they are said.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The card with its flap is visible |
| 1.94 | | — | Row 1 "Stamp" |
| 2.54 | | — | "Address side, ऊपर दाएँ" |
| 5.56 | | — | Pill "पूरा चिपका" |
| 7.48 | | — | Hindi "Franking: यही जगह" |
| 9.34 | | — | Tick |

## s146
Continues: s145

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row 2 "पते से ऊपर" |
| 1.88 | | — | Pill "≥ 40 mm"; tick |
| 3.96 | | — | Row 3 "Date stamps" |
| 4.80 | | — | Pill "≥ 2 offices" |
| 7.78 | | — | "booking + destination"; tick |

## s147
Continues: no
In: cut. Framing: wide.
Idea: point 4: the letter box.
Layout: `letter-box` on the left; on the right, a card with a green row "तय categories · postage पहले पूरा" and four slate chips.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Box and heading "Letter box" |
| 0.98 | | — | "सिर्फ़ तय categories" |
| 3.24 | | — | "देय postage पहले पूरा"; tick |
| 6.06 | | — | Slate chip "Franked" |
| 6.98 | | — | "Registered newspaper" |
| 8.80 | | — | "Periodical" |
| 10.38 | | — | "Accountable" |
| 11.52 | | — | Big slate "नहीं" |

## s148
Continues: no
In: cut. Framing: wide.
Idea: point 5: permissions and numbers.
Component: compare-table. Use 5 rows: Bulk cash offices, Packets, HSG offices, Newspaper licence, Business Reply permit. Columns: "किसकी अनुमति" and "संख्या / शर्त". Rows tick as said.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Table header is visible |
| 0.60 | | — | Row 1 "Bulk cash offices" |
| 2.28 | | — | "Head of the Circle" |
| 3.64 | | — | Row 2 "Packets" |
| 5.44 | | — | "बड़े शहर 500" |
| 7.24 | | — | "· छोटे town 250"; tick |

## s149
Continues: s148

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row 3 "Gazetted + HSG offices" |
| 3.92 | | — | "500 articles"; tick |
| 5.68 | | — | Row 4 "Newspaper licence" |
| 7.36 | | — | "Circle / Region Head" |
| 9.32 | | — | "> 500 copies" |

## s150
Continues: s149

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row 4 adds "bill मिलने के 7 दिन"; tick at 1.38 |
| 2.30 | | — | Row 5 "Business Reply permit" |

## s151
Continues: s150

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Row 5 "Division के Head" |
| 1.34 | | — | Second column "usual postage" |
| 4.02 | | — | "+ ₹1" |
| 5.74 | | — | "Renewal: March" |
| 7.10 | | — | "Deposit: अगले पखवाड़े से पहले" |
| 10.00 | | — | "/ रकम खत्म होने पर" |

## s152
Continues: s151

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Holds |
| 0.58 | | — | Yellow pill "जो पहले हो"; row 5 tick |

## s153
Continues: no
In: fade. Section label: LAST WORD. Framing: wide → close.
Idea: next time an envelope is in your hand, look at its top-right corner.
Layout: `envelope-face-large` at scale 0.85, centred, with a stamp and a postmark at the top right. The camera ends zoomed on the corner; this is the last scene, so it holds there.

| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | The envelope with stamp is visible; line "अगली बार" at the top |
| 0.96 | | — | Hindi "कोई envelope हाथ में आए" |
| 3.38 | to {on: '#stamp-box', zoom: 1.8} by 5.2, inOut | — | Ink circle draws around the corner at 4.54: "ऊपरी दायाँ कोना" |
| 5.76 | | — | Underline "ध्यान से देख लीजिए" |
