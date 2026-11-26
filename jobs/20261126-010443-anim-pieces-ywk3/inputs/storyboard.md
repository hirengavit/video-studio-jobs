# Storyboard: Poste Restante, Recall, Alteration of address (Postal Exams, Hindi)

No character anywhere: no host rig. Every screen is a lecture slide built on its words, on the cream canvas (#fbf7ee), under the app's fixed frame. Content area: x 100–1820, y 150–1000 (the frame header sits above y 130). Hindi text 'Noto Sans Devanagari' ≥ 48 px; English terms Inter bold, translation beneath ~0.5 s after the term. Kit moves only (no smear/ticker/scatter/spin/float/wiggle/shake/bounce/flip/letters). Transitions: `cut` inside a part, `wipe` (from right) at each new part, `fade` for recaps and the close.

## Shared

Series tag: DELIVERY RULES (every scene).

Section labels (English, the kit's frame `section` slot):
- s001–s007: TOPIC · BIG PICTURE
- s008–s032: PART 1 · POSTE RESTANTE
- s033–s047: PART 2 · HOLDING PERIOD
- s048–s050: RECAP
- s051–s079: PART 3 · IDENTITY CARD
- s080–s095: PART 4 · SENDER'S RECALL
- s096–s098: RECAP
- s099–s113: PART 5 · CANCELLATION
- s114–s136: PART 6 · ADDRESSEE'S REDIRECTION
- s137–s139: RECAP
- s140–s169: PART 7 · INTERNATIONAL
- s170–s183: KEY POINTS

Places and props (each made once):
- **po-counter** (set, new): the recurring picture. Back: `pigeonhole-rack` (new) at x 510–1410, y 150–560; front: `posting-counter` (library) at translate(510 560) scale 1 (sign plate y 582–678, counter top y 730, red front to y 977). Spots: `counter-left` (700, 730), `counter-centre` (960, 730), `counter-right` (1220, 730), `rack-slot` (960, 360, the centre pigeonhole), `customer-side` (1640, 990, floor right of the counter, where a `person-icon` stands). Framings: `wide` (whole set), `medium` (counter top + rack, zoom 1.35 on y 600), `close` (envelope on the counter, zoom 2 on counter-centre). Scenes: s001, s008, s029, s051, s066, s067, s183.
- **pigeonhole-rack** (piece, new): sand (#f3ead6) wooden rack 900×410, 3 rows × 5 open slots with 3 px ink lines, white envelope corners peeking from 6 slots, a blank white label strip under each row. Anchors: base, top. Parts: #slots, #slot-centre (row 2, slot 3), #labels. Scenes: po-counter scenes, s029.
- **postmark-ring** (piece, new): round postal-red (#9e1b1b) postmark 220×220, double ring 4 px, five wavy cancel lines running right (to x 420), blank centre band for the scene's words (POSTE RESTANTE, a date, a regulation number). Anchors: base. Parts: #ring, #band, #cancels. Every part (sources go on postmarks: Reg. 54 in Part 3; Regs. 55–58, Schedule I Table VI in Parts 4–5; Reg. 23A, S.O. 3891(E), 15.07.2026 in Part 5; Regs. 55–58, 69 in Part 6; Reg. 119A, Regs. 126–127, Schedule III Table XI in Part 7).
- **domestic-envelope** (library): the recurring letter, white, 760×400; scenes letter its address lines. Rests on `counter-centre` in the set. Most scenes.
- **post-office-icon** (piece, new): small flat post office 320×300: white walls, postal-red roof band, blank sand sign band (x 40–280, y 70–110), door, a small red post box beside the door, ground line; no emblem. Anchors: base. Parts: #building, #sign-band, #door, #postbox. Scenes: s002, s009, s012, s025, s034, s043, s060–s062, s090, s119–s123, s128–s131, s141–s144.
- **house-icon** (piece, new): flat ink house 220×220, sand walls, red roof, door, blank white number plate. Anchors: base. Parts: #roof, #walls, #door, #plate. Scenes: s003, s012, s025, s033, s043–s044, s081, s090, s116–s124, s130–s131, s162–s163.
- **written-request** (piece, new): white letter sheet 420×560, 3 px ink outline, a blank header line, five grey ruled lines, a signature line bottom right and a small blank chip at bottom left (for a fee). Anchors: base, grip. Parts: #sheet, #header, #lines, #sign-line, #chip. Scenes: s068, s083–s087, s103, s122–s123, s126, s130–s132, s142.
- **letter-scale** (piece, new): flat ink postal scale 360×300, sand body, steel platform on top (top anchor), blank white display window (#display) for the scene's weight. Anchors: top, base. Parts: #platform, #body, #display. Scenes: s155–s158, s169, s182.
- **day-strip** (piece, new): a row of 12 square day tiles 1320×130 (100 px tiles, 10 px gaps), white with 3 px ink outline, blank for the scene's day numbers. Anchors: base. Parts: #tile-1 … #tile-12. Scenes: s152, s155, s157–s158, s164, s168, s181.
- **icon-plane** (piece, new): small flat ink aeroplane 200×120, white with a red tail band. Anchors: base. Scenes: s141, s143, s151–s153, s161, s162.
- Library pieces reused: `posting-counter`, `domestic-envelope`, `person-icon`, `id-card`, `receipt-slip`, `cod-parcel-face`, `rupee-deposit`, `regulations-book`, `key-fact-card` (every Exam angle), `icon-circle-office`, `browser-window`, `booking-counter`, `icon-globe`, `insured-letter-bag`, `mail-bag`, `camp-bag`, `book-packet-icon`, `parcel-bag`.

Recurring layouts (drawn by the scene, kept identical where they return):
- **Exam angle**: `key-fact-card` at translate(140 190) scale 1 (1640×780 → x 140–1780, y 190–970); kicker strip lettered "Exam angle · परीक्षा की बात"; up to 5 white lines (52 px Hindi, English terms inline) with yellow bullets, each landing on its spoken words; earlier lines stay white.
- **Four bars** (Part 4 and Part 6): four slate-outlined white bars 1500×120 stacked at x 210, y 330/480/630/780, each with a slate stop-hand icon at left and the term in English 60 px with Hindi 44 px beside it.
- **Recap envelope** (component recap-card, 5 rows): see s048.
- Real photos used: `Photo: postman-delivering-parcel-cutout` (s090), `Photo: newspaper-bundle-tied-cutout` (s154), `Photo: india-post-parcel-cutout` (s129). New ones are in materials.json; every scene that names one also works with the drawn piece named beside it.

## Continuity

No character, so continuity is about cards and the recurring envelope. The envelope is always the same white `domestic-envelope` with a red `postmark-ring` "POSTE RESTANTE" at its upper right; in Parts 4–7 it carries a curved slate return arrow (recall, always curving back to the LEFT, toward the sender) or a forked arrow (redirection, the second branch always going RIGHT to a second `house-icon`). Screen direction: sender and office of posting on the LEFT, delivery post office and addressee on the RIGHT, in every flow. Scenes marked `Continues` cut with no change; a new part arrives with a wipe from the right; recaps and the close fade. Every scene's last frame holds its full content until the cut.

## s001
Continues: no
Section label: TOPIC · BIG PICTURE
Idea: the hook: the topic's three terms beside the recurring envelope. Transition in: cut (first scene). Set: po-counter, framing `medium`, slow push to 1.42 by the end (s002 is a new layout, so it simply cuts).
Layout: set shifted to the left half (its group translate(-300 0)); envelope on `counter-centre` with a red `postmark-ring` lettered POSTE RESTANTE; right column x 1080–1780: three term pairs at y 300 / 520 / 740 (English 84 px bold ink, Hindi 48 px grey under).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | medium | — | already on: set, envelope, postmark, term 1 "Poste Restante" + "प्राप्ति के लिए डाक रखने की व्यवस्था" (readable at frame 1) |
| 1.14 | — | — | `highlight` term 1 |
| 2.58 | — | — | `fade` term 2 "Recall" / "वापस मंगाना" (Hindi +0.5 s) |
| 4.48 | — | — | `fade` term 3 "Alteration of address" / "पते में परिवर्तन" (Hindi +0.5 s) |
| 6.94 | push to 1.42 over 2.4 s | — | `fade` grey line under the column: "देश के अंदर की डाक" 48 px |

## s002
Continues: no
Section label: TOPIC · BIG PICTURE
Idea: where the rules live and since when; then "two lines" begin. Transition: cut. Sub-shots: `#book` at 0, `#lines` at 8.21.
Layout `#book`: `regulations-book` scale 1.6 at x 380, y 220 (title panel lettered "Post Office Regulations 2024"); right x 1000–1760: a `postmark-ring` scale 1.6 lettered "16.12.2024", under it "16 December 2024 से लागू" 56 px.
Layout `#lines`: two full-width white cards (#ead9a8 border) x 140–1780: line 1 y 200–560, line 2 y 620–980, numbered 1 and 2 in red discs; line 1 holds the envelope (scale 0.55) at left and `post-office-icon` at right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | book already on |
| 0.60 | — | — | `highlight` "2024" on the book title |
| 4.48 | — | — | postmark `stamp`; 5.16 Hindi date line `fade` |
| 7.16 | — | — | `underline` "लागू" |
| 8.21 | — | — | shot `#lines`: both card frames and number discs on |
| 10.59 | — | — | line 1 title "Poste Restante" `type` 64 px |
| 12.13 | — | — | envelope `slide` from left toward the office |

## s003
Continues: s002
Section label: TOPIC · BIG PICTURE
Idea: the two-line picture: mail waits for its addressee; recall and alteration change its route or address.
Layout: as s002 `#lines`. Line 1 text at x 700: "delivery post office में रुककर addressee का इंतज़ार" 52 px. Line 2: title "Recall · Alteration" 64 px; envelope at x 700 with a slate return arrow curving LEFT to a `house-icon` and a forked arrow RIGHT to a second `house-icon`.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | both cards, line 1 title and envelope on |
| 0.54 | — | — | office's sign band lettered "Delivery Post Office" `highlight` |
| 1.70 | — | — | line 1 Hindi `words` |
| 5.80 | — | — | line 2 title `type`; return arrow `draw` (0.8 s) and left house `pop` |
| 6.90 | — | — | forked arrow `draw`; right house `pop` |
| 8.46 | — | — | labels "sender" (left) · "addressee" (right) 48 px `fade` |

## s004
Continues: s003
Section label: TOPIC · BIG PICTURE
Idea: finish line 2, then the seven parts as a progress row with one big card for the part being named. Sub-shots: `#lines` 0, `#parts` 3.13.
Layout `#parts`: top row of 7 red perforated stamps (110×110) at y 190, x 330…1590 (step 210), numbered 1–7 in white; big white card x 200–1720, y 380–940 holding the current part: "Part N · term" 88 px ink, Hindi 56 px grey beneath, an ink icon at left.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | `#lines` as s003 ends |
| 0.64 | — | — | line 2 Hindi "item का रास्ता या पता बदलवाते हैं" 48 px `fade` |
| 3.13 | — | — | shot `#parts`: big card frame on, the 7 stamps' outlines drawn grey |
| 4.03 | — | — | stamps fill `pop` {stagger: 0.08} |
| 5.57 | — | — | stamp 1 `pulse`, a yellow ring marks it; card text "Part 1 · Poste Restante" `fade`, envelope icon |
| 8.13 | — | — | Hindi "मतलब, और उसका पता" `fade` |

## s005
Continues: s004
Section label: TOPIC · BIG PICTURE
Idea: Parts 2 and 3 on the same card (its words swap; the yellow ring moves along the stamps).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s004 ends |
| 0.10 | — | — | ring to stamp 2; text `swap` to "Part 2 · Holding period" with "Poste Restante डाक कितने दिन रुकती है" |
| 5.44 | — | — | second Hindi line "और फिर क्या होता है" `fade` |
| 7.56 | — | — | ring to stamp 3; `swap` to "Part 3 · Postal Identity Card" / "डाक पहचान पत्र", icon `id-card` |
| 9.42 | — | — | Hindi "delivery पर पहचान" `fade` |

## s006
Continues: s005
Section label: TOPIC · BIG PICTURE
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s005 ends |
| 0.10 | — | — | ring to stamp 4; `swap` to "Part 4 · Recall · Alteration of address", Hindi "sender के कहने पर", icon: envelope with return arrow |
| 6.12 | — | — | ring to stamp 5; `swap` to "Part 5 · Cancellation" / "रद्द करना" |
| 9.48 | — | — | Hindi "booking cancellation, और fee की वापसी" `fade` |

## s007
Continues: s006
Section label: TOPIC · BIG PICTURE
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s006 ends |
| 0.10 | — | — | ring to stamp 6; `swap` to "Part 6 · Redirection" / "पुनर्निर्देशन", Hindi "addressee के कहने पर", icon: forked arrow |
| 7.50 | — | — | ring to stamp 7; `swap` to "Part 7 · International recall", icon `icon-globe` |
| 11.18 | — | — | "Demurrage · विलंब शुल्क" `fade` under it; holds to the cut |

## s008
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: the key term, then the arrangement literally: mail kept at the office, the person comes himself. Transition: wipe from right. Sub-shots: `#term` 0, `#how` 3.08.
Component: key-term, moulded: keep the red stamp-edged term card (x 200–1720, y 230–640: "Poste Restante" 120 px white, "प्राप्ति के लिए डाक रखने की व्यवस्था" 56 px pale yellow) and one white meaning strip y 700–900 ("एक व्यवस्था" 56 px); drop the exam pill, chips and chain.
Layout `#how`: set po-counter `wide`; envelope on `counter-centre`; `person-icon` scale 1.3 for the customer. Photo: letters-pigeonhole-rack (if found: framed print tilted 1.5°, x 1400–1800, y 170–470, caption "Post office pigeonholes"; else the drawn rack alone).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | term card on with "Poste Restante" |
| 1.14 | — | — | Hindi translation `fade` |
| 2.00 | — | — | meaning strip `reveal` |
| 3.08 | wide | — | shot `#how`: set and envelope (addressee lines drawn) on |
| 5.58 | — | — | envelope `place` {spot: 'rack-slot'}; photo `fade` |
| 8.14 | — | — | person-icon `slide` from right to stop at `customer-side` |
| 10.50 | medium | — | label "खुद आकर ले जाता है" 52 px `fade` above the person |

## s009
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: which office: the post office of address, i.e. the delivery post office, not the office of posting. Transition: cut.
Layout: question "कौन सा post office?" 64 px red heading at y 220; two cards y 320–960: left x 160–900 (office of posting), right x 1020–1760 (delivery); each a `post-office-icon` and labels (English 60 px, Hindi 44 px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | question and both empty card frames on |
| 1.48 | — | — | right card: icon `pop`, "Post office of address" `fade` |
| 4.20 | — | — | "= Delivery post office" + "वितरण डाकघर" `fade`; green tick `draw` |
| 6.00 | — | — | left card: icon `pop`, "Office of posting" + "जहाँ sender ने post किया" |
| 6.72 | — | — | left label `strike` (slate) + slate cross `draw` |

## s010
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: only two kinds of people. Transition: cut.
Layout: heading "सिर्फ दो तरह के लोग" 64 px at y 220; cards x 220–900 and x 1020–1700, y 320–960: `person-icon` scale 1.2 (right one with a small drawn suitcase), "Strangers" / "Travellers" 80 px with "अजनबी" / "यात्री" 48 px beneath.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading and both card frames on |
| 3.02 | — | — | left icon `pop`, term `fade` (Hindi +0.5) |
| 4.32 | — | — | right icon `pop`, term `fade` |
| 5.16 | — | — | left card `highlight`; "जो उस इलाके में नया है" 48 px `fade` |

## s011
Continues: s010
Section label: PART 1 · POSTE RESTANTE
Idea: what each means, then an everyday example. Sub-shots: `#two` 0, `#example` 8.06.
Layout `#example`: centred card x 260–1660, y 220–960: `person-icon` with suitcase at x 520, an ink city skyline at right, a dashed arrow between; caption "कुछ दिन के काम से नए शहर" 56 px at y 860.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s010 ends |
| 1.44 | — | — | left card: small `house-icon` with slate cross + "पक्का delivery पता नहीं" `fade` |
| 3.86 | — | — | right card `highlight`; a dashed path `draw` across it |
| 5.58 | — | — | "गुज़रते हुए डाक ले सकता है" `fade` |
| 8.06 | wide | — | shot `#example`: person and skyline on |
| 11.70 | — | — | arrow `draw`; caption `fade` |

## s012
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: no home address there, so the mail goes to that town's post office as Poste Restante. Transition: cut.
Layout: left x 180–760: `house-icon` scale 1.4; centre arrow; right x 1060–1760: `post-office-icon` scale 1.4; the envelope (scale 0.4) with its postmark rests on the office's ground line.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | house on |
| 1.74 | — | — | slate cross `draw` on the house; "घर का पता नहीं" 52 px under it |
| 4.98 | — | — | arrow `draw`; office `pop` |
| 5.60 | — | — | envelope `fall` onto the office ground line {bounce: 0.15} |
| 6.62 | push 1.06 on the office | — | postmark `stamp` "POSTE RESTANTE" |

## s013
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: the person's limit: 3 months. Transition: cut.
Layout: heading "अब एक सीमा" 64 px y 200; big red perforated stamp card x 360–1560, y 260–760: "Person: 3 months max" 96 px white, "व्यक्ति: 3 महीने तक" 60 px pale yellow; at y 820–960 two small person-icons beside "Stranger हो या traveller" 48 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on |
| 1.04 | — | — | person-icons `pop` {stagger: 0.3} with caption |
| 5.70 | — | — | stamp card `stamp` with "Person: 3 months max" |
| 6.78 | — | — | Hindi line `fade`; `underline` "3 महीने" |

## s014
Continues: s013
Section label: PART 1 · POSTE RESTANTE
Idea: 3 months is the person's limit; the article's days are a different rule, next part. The stamp card moves to the left half; a sand card x 1020–1760 arrives: envelope icon, "Article: कितने दिन?" 60 px, grey pill "→ Part 2".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s013 ends |
| 0.30 | — | — | stamp card `move` by [-560, 0] (people icons with it); "व्यक्ति की सीमा" `fade` under it |
| 3.58 | — | — | sand card `slide` from right with envelope and question |
| 6.14 | — | — | `highlight` "अलग नियम" line (52 px) as it `fade`s in |
| 7.16 | — | — | "→ Part 2" pill `pop` |

## s015
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: how to recognise a Poste Restante article: an instruction written on it. Transition: cut.
Layout: envelope scale 1.9 centred (x 238–1682, y 190–950); handwritten instruction (Caveat 72 px) upper left; Hindi gloss 52 px on a sand strip y 880–970 under it.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope on (blank address lines) |
| 5.76 | — | — | instruction area soft `highlight` |
| 7.66 | — | — | "To be kept till called for" `write` (1.4 s) |
| 10.40 | — | — | Hindi strip "लेने आने तक रखिए" `reveal` |

## s016
Continues: s015
Section label: PART 1 · POSTE RESTANTE
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s015 ends |
| 0.10 | — | — | first line `color` to grey; "To await arrival" `write` under it |
| 2.70 | — | — | Hindi strip `swap` to "आने तक इंतज़ार कीजिए" |
| 5.88 | — | — | third handwritten line "… या ऐसा कोई और निर्देश" `fade` in grey |

## s017
Continues: s016
Section label: PART 1 · POSTE RESTANTE
Idea: the four ways an article is marked, as a list beside the envelope, ending on "Poste Restante" in plain words. The envelope moves left (to x 120–880 at scale 1.0); a list card x 980–1780, y 200–980 holds 4 rows (52 px): 1 To be kept till called for · 2 To await arrival · 3 नाम, किसी Post Office पर पता · 4 "Poste Restante". Photo: poste-restante-cover (if found: framed print below the envelope in the box x 140–860, y 760–990, keeping its proportions, tilted -2°, caption "Poste Restante लिखा लिफ़ाफ़ा"; else the drawn envelope carries it).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s016 ends |
| 0.20 | — | — | Hindi strip `out`; envelope `move` (to the left, scale 1.0); list card `reveal` with rows 1–2 |
| 1.76 | — | — | row 3 `fade` |
| 6.88 | — | — | row 4 `fade` |
| 8.80 | — | — | "Poste Restante" `write` on the envelope; red postmark `stamp`; row 4 `highlight`; photo `pop` |

## s018
Continues: s017
Section label: PART 1 · POSTE RESTANTE
Idea: the name for these words: Superscription. The list leaves; a red stamp-edged term card x 980–1780, y 240–620 ("Superscription" 88 px white, "उपरिलेख" 56 px pale yellow); meaning strip y 680–900 "article के बाहर लिखे शब्द" 52 px; an ink arrow from the strip to the envelope's handwriting.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s017 ends |
| 1.92 | — | — | list `out`; term card `slide` from right |
| 2.42 | — | — | "उपरिलेख" `fade` |
| 5.66 | — | — | meaning strip `reveal`; arrow `draw` to the envelope's words |

## s019
Continues: s018
Section label: PART 1 · POSTE RESTANTE
Idea: the delivery office reads the sender's wish; then the most important condition. Sub-shots: `#read` 0, `#cond` 6.94.
Layout `#cond`: red perforated stamp card x 360–1560, y 300–760: kicker "सबसे ज़रूरी शर्त" 64 px pale yellow, envelope icon below.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s018 ends |
| 0.58 | — | — | a small `post-office-icon` `pop` under the strip + "sender कैसे पहुँचाना चाहता है" 48 px `fade` |
| 6.94 | — | — | shot `#cond`: stamp card with kicker |
| 8.68 | — | — | envelope icon `pop` inside it |

## s020
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: the name must be there; four things don't count as a name. Transition: cut.
Layout: top band y 180–330 on a yellow-edged stamp strip: "Name needed, not initials" 72 px ink, "addressee का नाम ज़रूरी" 48 px; list card x 200–1720, y 380–990: grey heading "नाम की जगह ये नहीं चलते" 44 px, four rows at y 500/620/740/860 (52 px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | top band on with "Name needed, not initials" |
| 1.66 | — | — | Hindi line `fade` |
| 4.08 | — | — | list card `reveal` with heading |
| 7.10 | — | — | row 1 "सिर्फ initials या figures" `fade` |
| 8.66 | — | — | row 1 `strike` (slate) + slate cross at right |

## s021
Continues: s020
Section label: PART 1 · POSTE RESTANTE
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s020 ends |
| 0.10 | — | — | row 2 "Surname के बिना सिर्फ पहला नाम (Christian name)" `fade` |
| 3.16 | — | — | row 2 `strike` + cross |
| 5.16 | — | — | row 3 "बनावटी नाम" `fade`; 5.76 `strike` + cross |
| 8.22 | — | — | row 4 "नाम की जगह निशान या symbol" `fade`; 9.12 `strike` + cross |

## s022
Continues: s021
Section label: PART 1 · POSTE RESTANTE
Idea: the reason: the office must match the article to the person who asks for it. The list card shifts left (rows grey); right panel x 1080–1760, y 380–990: envelope icon, `person-icon` below, a red two-way link between labelled "मिलान" 52 px; bottom "निशान ≠ पहचान" 60 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s021 ends |
| 0.20 | — | — | list `move` by [-480, 0]; rows `color` to grey |
| 2.31 | — | — | envelope `pop`; 4.82 person `pop` |
| 5.50 | — | — | link `draw`; "मिलान" `fade` |
| 8.47 | — | — | "निशान ≠ पहचान" `fade` |
| 11.59 | — | — | `underline` "≠" |

## s023
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: a correct example envelope. Transition: cut.
Layout: heading "एक example" 56 px y 200; envelope scale 1.7 centred (x 314–1606, y 260–940), address lines lettered Inter 60 px; red postmark at upper right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading and envelope (blank lines) on |
| 2.77 | — | — | "Mehul Shah" `type` |
| 4.41 | — | — | "Poste Restante" `type` |
| 7.31 | — | — | "[delivery post office]" `type` in grey |

## s024
Continues: s023
Section label: PART 1 · POSTE RESTANTE
Idea: the named one works; "M.S." alone fails. Envelope 1 moves left (scale 1.0, x 140–900, y 340–740); envelope 2 at x 1020–1780 shows only "M.S." 80 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s023 ends |
| 0.87 | — | — | envelope 1 `move` left; caption "Mehul Shah के लेने तक रखो" 48 px under it |
| 2.91 | — | — | green tick `draw` on envelope 1 |
| 5.50 | — | — | envelope 2 `slide` from right with "M.S." |
| 9.26 | — | — | slate cross `draw` on envelope 2; caption "नाम वाली शर्त पूरी नहीं" 48 px |

## s025
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: only the waiting place changes. Transition: cut.
Layout: heading "सिर्फ जगह बदलती है" 60 px y 190; two rows x 180–1740: top y 260–560 label "सामान्य": envelope → `house-icon` (grey); bottom y 640–940 label "Poste Restante": envelope → `post-office-icon`.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | top row on |
| 0.74 | — | — | heading `fade` |
| 2.06 | — | — | bottom row envelope `pop`, arrow `draw` |
| 4.90 | — | — | office `pop`, `highlight` its label |
| 7.36 | — | — | "यहाँ इंतज़ार करता है" 48 px `fade` under the office |

## s026
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: the item's own conditions stay the same: a checklist with icons. Transition: cut.
Layout: heading "Item की शर्तें वही" 64 px y 210; three rows x 220–1700 at y 330/540/750 (180 tall), icon at left, text 52 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on |
| 2.74 | — | — | row 1: `receipt-slip` scale 0.4 `pop`; "Accountable item: booking receipt" `fade` |
| 9.62 | — | — | row 2: ink signature squiggle `draw`; "delivery का सबूत: signature" `fade` |

## s027
Continues: s026
Section label: PART 1 · POSTE RESTANTE
Sub-shots: `#list` 0, `#only` 8.07. Layout `#only`: envelope scale 1.6 centred with only a handwritten instruction (Caveat 72 px) upper left.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s026 ends |
| 0.20 | — | — | row 2 adds "स्याही से या digital" 44 px grey |
| 2.30 | — | — | row 3: `cod-parcel-face` scale 0.2 `pop`; "COD: delivery से पहले बकाया रकम" 52 px |
| 8.07 | — | — | shot `#only`: envelope on |
| 10.03 | — | — | "To await arrival" `write` |
| 12.99 | — | — | grey "या" then "To be kept till called for" `write` as a second line |

## s028
Continues: s027
Section label: PART 1 · POSTE RESTANTE
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s027 ends (the second line finishes writing) |
| 2.36 | — | — | big ink "?" `draw` right of the envelope; "Sender की मंशा का और कोई संकेत नहीं" 52 px `fade` below |

## s029
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: the office keeps it only for the applicable period. Transition: cut.
Set: po-counter `medium`; envelope in `rack-slot`; on the counter's sign plate a red duration bar x 560–1360, y 630 with an end tick; right panel x 1440–1800, y 220–700. Photo: letters-pigeonhole-rack may sit as a framed print at upper left if found.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | medium | — | set, envelope in the rack |
| 3.92 | — | — | bar `grow` {axis: 'x', origin: 'left'}; end tick + "लागू अवधि तक deposit" 48 px |
| 6.42 | — | — | right panel "हमेशा के लिए" 52 px `fade` |
| 8.38 | — | — | it `strike`s (slate) + slate cross |

## s030
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: Exam angle (recurring layout). Transition: cut.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | card on with its kicker |
| 1.02 | — | — | line 1 "Poste Restante: strangers और travellers के लिए" `fade` |
| 4.80 | — | — | line 2 "Article: office of address (delivery office) में" `fade` |

## s031
Continues: s030
Section label: PART 1 · POSTE RESTANTE
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s030 ends |
| 0.20 | — | — | line 3 "व्यक्ति: ज़्यादा से ज़्यादा 3 महीने" `fade`; `highlight` {words: '3 महीने'} |
| 4.30 | — | — | line 4 "Addressee का नाम ज़रूरी" `fade` |
| 6.96 | — | — | line 5 "initials, बनावटी नाम नहीं चलते" `fade` |

## s032
Continues: no
Section label: PART 1 · POSTE RESTANTE
Idea: the trap: 3 months is the person's limit, not the article's. Transition: cut.
Component: exam-trap, moulded: banner "EXAM TRAP · परीक्षा का जाल", trap line "हर Poste restante article 3 महीने रखा जाता है?" (Hindi only, 52 px); two cards: left (tricky, yellow border) "Article" with stamp "?" and "Part 2 में", right "Person · व्यक्ति" with stamp "3 M"; remember bar "3 महीने = व्यक्ति की सीमा". Drop the English closing lines.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | banner with its caps label on |
| 2.66 | — | — | trap line `type` |
| 7.80 | — | — | trap line `strike` (slate) + slate cross |
| 8.14 | — | — | both cards `slide` up; "3 M" `stamp` |
| 10.30 | — | — | remember bar `reveal`; `highlight` {words: 'व्यक्ति'} |

## s033
Continues: no
Section label: PART 2 · HOLDING PERIOD
Idea: the general rule in one line: 15 days with the Postmaster, then back to the sender. Transition: wipe from right.
Layout: top: perforated red stamp card x 260–1100, y 200–620: "Article: 15 days" 88 px white, "15 दिन" 64 px pale yellow; right x 1200–1760: the envelope (scale 0.6) in front of a `post-office-icon`; bottom row y 700–980: the envelope's slate return arrow curving LEFT to a `house-icon` labelled "sender".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "सामान्य नियम, एक line में" 56 px y 170 already on; office with envelope on |
| 4.42 | — | — | "Postmaster के पास" 48 px label `fade` under the office |
| 6.12 | — | — | stamp card `stamp` with "Article: 15 days" (Hindi +0.5) |
| 8.22 | — | — | "कोई लेने न आए" 48 px `fade` |
| 10.24 | — | — | return arrow `draw` (0.9 s); house `pop`; "sender को वापस" 48 px |

## s034
Continues: no
Section label: PART 2 · HOLDING PERIOD
Idea: the 15 days are counted at the delivery office; transit time isn't counted. Transition: cut.
Layout: a horizontal track x 160–1760 at y 560: left `post-office-icon` "Booking office" (x 160–420), a grey dashed transit segment x 440–960 with a small van-free ink arrow, then a red segment x 980–1660 ending at the right `post-office-icon` "Delivery office". Labels above (52 px), notes below.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | both offices and the dashed segment on |
| 0.20 | — | — | red segment `grow` {axis: 'x', origin: 'left'}; "15 दिन" 64 px over it |
| 1.26 | — | — | "delivery office में जमा" 48 px `fade` under the red segment |
| 5.12 | — | — | "Booking office से पहुँचने का समय" 48 px `fade` under the grey segment |
| 8.84 | — | — | grey segment label `strike` (slate) + "नहीं गिना जाता" |

## s035
Continues: no
Section label: PART 2 · HOLDING PERIOD
Idea: what COD is: the office collects from the addressee and sends it to the sender. Transition: cut.
Layout: key term strip y 180–330: "COD (Cash on Delivery)" 72 px ink, Hindi "डिलीवरी पर भुगतान" 48 px; flow y 420–940: `person-icon` "addressee" right (x 1500), `post-office-icon` centre, `person-icon` "sender" left (x 300), `rupee-deposit` moves along red arrows right → centre → left.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | key term strip on |
| 0.92 | — | — | Hindi line `fade` |
| 2.36 | — | — | office and addressee `pop` |
| 5.28 | — | — | arrow addressee → office `draw`; rupee notes `pop` at the office |
| 7.24 | — | — | sender `pop`; arrow office → sender `draw` |
| 9.74 | — | — | grey pill "value-added service" `pop` under the term |

## s036
Continues: s035
Section label: PART 2 · HOLDING PERIOD
Idea: COD rules give no separate period for Poste Restante and no automatic paid extension. The flow stays where s035 left it but turns grey; a white rules card (#ead9a8 border) slides up over its lower half, x 200–1720, y 500–990, title "COD के नियम" 48 px red, rows at y 600 / 730 / 860 (52 px), each with a mark at right (s037 adds row 3 and a sand banner inside the card's foot).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s035 ends |
| 1.26 | — | — | flow `color` to grey; rules card `slide` from down |
| 2.78 | — | — | row 1 "Poste Restante के लिए अलग अवधि" `fade`; 5.58 slate cross `draw` |
| 6.98 | — | — | row 2 "fee देकर अवधि अपने आप बढ़ना" `fade`; 10.14 slate cross `draw` |

## s037
Continues: s036
Section label: PART 2 · HOLDING PERIOD
Idea: a COD service's special period comes from that service's own instruction; then a look-alike rule is announced.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s036 ends |
| 1.62 | — | — | row 3 "खास अवधि → उसी service का लागू निर्देश" 52 px `fade`, green tick at right |
| 7.97 | — | — | the COD term strip `out`; in its place a sand banner y 180–300 "मिलता-जुलता नियम, अलग रखिए" 52 px `slide` from up |
| 9.44 | — | — | `highlight` {words: 'अलग'} |

## s038
Continues: no
Section label: PART 2 · HOLDING PERIOD
Idea: the general deposit rule for mail that couldn't be delivered: all enquiries for the addressee fail. Transition: cut.
Layout: heading "Deliver न हो पाई डाक: सामान्य deposit" 60 px y 200; centre: envelope scale 1.0 with a grey "?" and an ink magnifier beside it (x 1300); below y 760–960: "Addressee की पूछताछ: असफल" 56 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope on |
| 0.73 | — | — | heading `fade` |
| 4.85 | — | — | magnifier `draw` |
| 6.81 | — | — | "Addressee की पूछताछ" `fade`; 7.52 "असफल" `fade` and slate cross over the magnifier |

## s039
Continues: s038
Section label: PART 2 · HOLDING PERIOD
Idea: then usually 7 days, not counted from the posting date. A perforated stamp card x 1180–1760, y 300–700 "आम तौर पर 7 दिन" 64 px white.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s038 ends |
| 0.60 | — | — | `underline` "असफल" ("उसके बाद") |
| 2.33 | — | — | stamp card `stamp` |
| 5.07 | — | — | grey line "posting की तारीख से" 48 px `fade` under the card; 6.39 `strike` |
| 8.63 | — | — | label "undelivered article का नियम" 44 px `fade` at the envelope |

## s040
Continues: no
Section label: PART 2 · HOLDING PERIOD
Idea: two different situations side by side. Transition: cut.
Component: compare-cards, moulded: no question line; left card (red band) "Poste Restante article" with Hindi "जानबूझकर Poste restante पते पर" and big value "15 दिन"; right card (yellow band) "Undelivered: deposit" with Hindi "पूछताछ असफल होने पर" and value "आम तौर पर 7 दिन"; VS disc between; one labelled fact each; drop the takeaway for now.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | right card on (carried idea: 7 दिन) |
| 1.00 | — | — | left card `slide` from left |
| 5.55 | — | — | "15 दिन" `pop` |
| 7.69 | — | — | VS disc `pop`; pill "Exam confusion" 44 px `fade` above |

## s041
Continues: s040
Section label: PART 2 · HOLDING PERIOD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s040 ends |
| 0.00 | — | — | left card `pulse`; 1.64 `highlight` "15 दिन" |
| 3.58 | — | — | right card `pulse`; 8.02 `highlight` "7 दिन" |

## s042
Continues: s041
Section label: PART 2 · HOLDING PERIOD
Idea: two situations, two periods; then the period ends and the item goes back. Sub-shots: `#cards` 0, `#return` 3.53.
Layout `#return`: a red duration bar x 200–1000 at y 420 ending in a slate "अवधि खत्म" tick; the delivery `post-office-icon` at x 1100–1420 with the envelope; a white reason tag (#ead9a8 border) hangs from the envelope: "delivery न होने का कारण" 44 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s041 ends |
| 0.00 | — | — | takeaway band "दो अलग हालात, दो अलग अवधि" 52 px `reveal` below the cards |
| 3.53 | — | — | shot `#return`: bar (full) and office on |
| 4.43 | — | — | end tick `draw`; "अवधि खत्म" `fade` |
| 7.87 | — | — | "वापसी के लिए" 48 px `fade` |
| 12.51 | — | — | reason tag `slide` down onto the envelope |

## s043
Continues: s042
Section label: PART 2 · HOLDING PERIOD
Idea: unclaimed or refused domestic items go back to the office of posting for the sender. Remaining flow to the LEFT: the bar leaves; `post-office-icon` "Office of posting" at x 400–720, `house-icon` "sender" at x 120–340; red arrow from the delivery office leftward.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s042 ends (tag on) |
| 0.54 | — | — | reason tag text "standard कारण दर्ज" `fade` |
| 3.10 | — | — | labels "unclaimed · refused" 48 px `fade` over the envelope |
| 5.48 | — | — | bar `out`; office of posting `pop` at left; arrow `draw` |
| 8.34 | — | — | sender house `pop`; second arrow `draw` |

## s044
Continues: s043
Section label: PART 2 · HOLDING PERIOD
Idea: sender not found → Returned Letter Office. Below the flow, a red stamp-edged term card x 360–1560, y 640–990: "Returned Letter Office (RLO)" 64 px white, "वापसी पत्र कार्यालय" 48 px pale yellow; a slate arrow from the house down to it.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s043 ends |
| 0.56 | — | — | slate cross `draw` on the sender house |
| 2.22 | — | — | term card `slide` up; arrow `draw` |
| 2.72 | — | — | Hindi translation `fade` |
| 7.42 | — | — | "RLO" `pulse` |
| 12.38 | — | — | line under the card "न deliver हो सके" 44 px `fade` |

## s045
Continues: s044
Section label: PART 2 · HOLDING PERIOD
Idea: finish the RLO line; then Exam angle: three periods. Sub-shots: `#flow` 0, `#three` 3.12.
Layout `#three`: component timeline, moulded into a three-row period card: red title "तीन अवधियाँ, तीन अलग बातें" 56 px; three white rows x 200–1720 at y 330/530/730 (each 170 tall), English label at left, big value in a red pill at right, Hindi line under. Row 1 "व्यक्ति के लिए सुविधा" — "3 महीने तक"; row 2 "Poste restante article" — "15 दिन, फिर sender को वापस"; row 3 "पूछताछ असफल होने पर deposit" — "आम तौर पर 7 दिन". Drop the track and dates.
Component: timeline (reshaped as described).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s044 ends |
| 1.06 | — | — | the line extends "न लौटाई जा सके" |
| 3.12 | — | — | shot `#three`: card with title on |
| 7.82 | — | — | row 1 label `fade` |
| 9.34 | — | — | row 1 pill "3 महीने तक" `pop` |

## s046
Continues: s045
Section label: PART 2 · HOLDING PERIOD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s045 ends |
| 0.00 | — | — | row 2 label `fade`; 1.52 pill "15 दिन" `pop`; 3.02 "फिर sender को वापस" 44 px |
| 4.88 | — | — | row 3 label `fade`; 8.82 pill "आम तौर पर 7 दिन" `pop` |

## s047
Continues: s046
Section label: PART 2 · HOLDING PERIOD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s046 ends |
| 0.42 | — | — | row 4 (sand, y 900–990) "COD: fee देकर अपने आप extension" 48 px `fade` |
| 4.00 | — | — | slate cross `draw` at its right; held to the cut |

## s048
Continues: no
Section label: RECAP
Idea: Recap 1 (envelope fold). Transition: fade.
Component: recap-card, moulded: flap "RECAP · दोहराव" with red title "Part 1 और Part 2", seal "5"; five keyword rows x 200–1720, y 330–990 (130 apart): Poste Restante / "लेने आने तक रखी डाक" · Strangers, travellers / "3 महीने तक" · Name needed / "नाम ज़रूरी" · 15 days / "फिर sender को" · RLO / "Returned Letter Office". English term bold 52 px, Hindi 40–44 px beneath, yellow fact pill right; green tick draws as each is said.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card with flap and title on |
| 0.88 | — | — | the five term names `fade` grey {stagger: 0.15} |
| 5.68 | — | — | row 1 `color` to ink; pill `pop`; 8.66 green tick `draw` |

## s049
Continues: s048
Section label: RECAP
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s048 ends |
| 0.00 | — | — | row 2 ink, pill `pop`; 3.48 tick |
| 4.80 | — | — | row 3 ink, pill `pop`; 5.94 tick |
| 7.36 | — | — | row 4 ink, pill `pop` "15 दिन" |

## s050
Continues: s049
Section label: RECAP
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s049 ends |
| 0.26 | — | — | row 4 tick `draw` |
| 1.96 | — | — | row 5 ink, pill `pop`; 3.58 tick; all hold |

## s051
Continues: no
Section label: PART 3 · IDENTITY CARD
Idea: the person collecting may be unknown to the staff; an identity check gets the item to the right person. Transition: wipe from right.
Set: po-counter `wide`; envelope on `counter-centre`; `person-icon` at `customer-side` with a grey "?" above its head; later an `id-card` (scale 0.6) pops beside the person and a green tick on the envelope. Photo: post-office-counter-window (if found: framed print top-left x 120–520, y 170–470, caption "Post office counter"; else omitted).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set, envelope and person on |
| 2.76 | — | — | label "delivery staff" 44 px `fade` above the counter; photo `fade` |
| 4.14 | — | — | "?" `pop` over the person; "अनजान" 48 px |
| 5.70 | medium | — | id-card `pop` by the person; "पहचान की जाँच" 48 px |
| 7.98 | — | — | green tick `draw` between card and envelope; "सही व्यक्ति" 48 px |

## s052
Continues: no
Section label: PART 3 · IDENTITY CARD
Idea: the rule's two words: first "may" (unknown recipient). Transition: cut.
Layout: heading "नियम के दो शब्द" 60 px y 190; two white document cards (#ead9a8 border) y 290–760: left x 140–920 "may seek identification" in Georgia 64 px + grey label "postman न जानता हो" 44 px; right x 1000–1780 for s053. A `postmark-ring` "Reg. 54 · Post Office Regulations 2024" at lower right y 800–990. Hindi gist strip under the left card: "सार (gist): पहचान माँग सकता है" 44 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading and both empty card frames on |
| 2.28 | — | — | left card label "Addressee / authorised person" `fade` |
| 4.94 | — | — | "postman न जानता हो" `fade` |
| 7.70 | — | — | "may seek identification" `type` (Georgia) |
| 10.62 | — | — | `highlight` {words: 'may'}; postmark `stamp` |

## s053
Continues: s052
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s052 ends |
| 0.00 | — | — | left gist strip `reveal` |
| 2.58 | — | — | right card label "कुछ accountable items" 44 px `fade` |
| 4.38 | — | — | right card: "shall be delivered only after identification is sought" `type` (Georgia 52 px, 3 lines) |
| 7.38 | — | — | under it three chips `pop` {stagger: 0.6}: "Passport", "PAN card", "Driving licence" (each with a tiny `id-card` icon) |

## s054
Continues: s053
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s053 ends |
| 0.62 | — | — | fourth chip "पहचान की शर्त वाले दूसरे items" `pop` |
| 6.56 | — | — | `highlight` {words: 'only after identification is sought'} |
| 9.58 | — | — | right gist strip "सार (gist): पहचान के बाद ही delivery" 44 px `reveal` |

## s055
Continues: s054
Section label: PART 3 · IDENTITY CARD
Idea: "shall"; the summary "may vs shall"; then the traditional card begins. Sub-shots: `#rule` 0, `#card` 7.23.
Layout `#card`: component key-term, moulded: red term card x 200–1100, y 260–700 "Postal Identity Card" 80 px white, "डाक पहचान पत्र" 52 px pale yellow; right a large `id-card` scale 2.2 at x 1180–1760 (title strip lettered "Postal Identity Card").
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s054 ends |
| 1.18 | — | — | `highlight` {words: 'shall'} |
| 2.26 | — | — | summary band y 900–990: "अनजान → may · खास items → shall" 52 px `reveal` |
| 7.23 | — | — | shot `#card`: term card on |
| 8.35 | — | — | id-card `pop`; 9.37 Hindi `fade` |

## s056
Continues: s055
Section label: PART 3 · IDENTITY CARD
Idea: who it is for. Term card `move` up and left into a header strip; three person-icon cards x 160–1760 at y 560–990 (three columns), labels 52 px under each.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s055 ends |
| 1.98 | — | — | line "पहचान साबित करने में दिक्कत" 52 px `fade` at y 470 |
| 6.54 | — | — | card 1 `pop`: person-icon with a camera strap, "Tourists" + "पर्यटक" |
| 7.62 | — | — | card 2 `pop`: person-icon with a case, "firms के घूमने वाले representatives" |

## s057
Continues: s056
Section label: PART 3 · IDENTITY CARD
Idea: … and other members of the public; what the card is used for. Sub-shots: `#who` 0, `#use` 3.38. Layout `#use`: two big cards x 180–900 and x 1020–1740, y 300–960: `insured-letter-bag` scale 0.6 + "registered या insured articles लेना"; `rupee-deposit` scale 1.4 + "money order का payment लेना" (52 px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s056 ends |
| 1.08 | — | — | card 3 `pop`: person-icon, "आम जनता के दूसरे लोग" |
| 3.38 | — | — | shot `#use`: heading "किस काम में" 56 px on |
| 4.14 | — | — | left card `pop` |
| 7.56 | — | — | right card `pop` |

## s058
Continues: no
Section label: PART 3 · IDENTITY CARD
Idea: who can get the card: any literate person, meeting one of two conditions. Transition: cut.
Layout: heading "Card कौन ले सकता है?" 64 px y 200; a red stamp card x 360–1560, y 300–560: "कोई भी literate व्यक्ति" 64 px white, "पढ़ा-लिखा" 48 px pale yellow; below two empty condition cards x 180–900 and x 1020–1740, y 640–990 with "A" and "B" badges and an "या" disc between.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on |
| 2.54 | — | — | stamp card `stamp` |
| 4.50 | — | — | "पढ़ा-लिखा" `fade` |
| 5.84 | — | — | condition card frames `pop` {stagger: 0.2}; "दो में से एक शर्त" 44 px grey above them |

## s059
Continues: s058
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s058 ends |
| 0.56 | — | — | card A: `house-icon` small + "अपने इलाके में पहचान अच्छी तरह स्थापित" 48 px `fade` |
| 5.90 | — | — | "या" disc `pulse` |
| 6.14 | — | — | card B: two small person-icons + "Postmaster के जाने-पहचाने स्थायी निवासी पुष्टि करें" 48 px `fade` |
| 12.40 | — | — | green tick `draw` on card B ("पुष्टि") |

## s060
Continues: no
Section label: PART 3 · IDENTITY CARD
Idea: application at a Sub Post Office goes to the Head Post Office, which gives the card. Transition: cut.
Layout: left `post-office-icon` scale 1.3 "Sub Post Office" (x 160–580, y 360–750); right `icon-circle-office` scale 1.0 "Head Post Office" (x 1300–1700, y 300–620); a red arrow between; `written-request` scale 0.5 (application) on the arrow's start; `id-card` scale 0.8 below the HO. Labels English 52 px + Hindi 40 px ("उप डाकघर" / "प्रधान डाकघर").
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | both buildings on (labels on) |
| 0.87 | — | — | HO `pulse`; id-card `pop` under it |
| 3.41 | — | — | application `pop` at the Sub PO |
| 8.35 | — | — | label "Sub-Postmaster पूछताछ करता है" 44 px `fade` |
| 10.85 | — | — | arrow `draw` to the HO; application `move` along it by [900, -60] |

## s061
Continues: s060
Section label: PART 3 · IDENTITY CARD
Idea: the issuer is the Head Post Office or Head Postmaster; then the trap is set up.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s060 ends |
| 0.57 | — | — | red pill "जारी करता है" 48 px `pop` under the HO card |
| 3.39 | — | — | "Head Post Office / Head Postmaster" 48 px in the pill line `fade`; `highlight` |
| 4.91 | — | — | grey pill "Exam confusion" `fade` y 200 |
| 7.38 | — | — | trap line y 900–990: "Option: Sub Office card जारी करता है" 52 px `fade` |

## s062
Continues: s061
Section label: PART 3 · IDENTITY CARD
Idea: that option is wrong; then what the card holds. Sub-shots: `#flow` 0, `#card` 5.40.
Layout `#card`: `id-card` scale 4 centred (x 360–1560, y 200–1000): its `#photo` box labelled "photo", `#lines` labelled "पूरा विवरण", a signature line drawn at lower right labelled "signature"; callout labels 48 px outside with thin ink leaders.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s061 ends |
| 0.31 | — | — | trap line `strike` (slate) + slate cross |
| 0.88 | — | — | green line under it "Sub Office: application लेकर आगे भेजता है" 48 px `fade` |
| 5.40 | — | — | shot `#card`: card on |
| 7.00 | — | — | "पूरा विवरण" leader `draw` + label |
| 7.80 | — | — | signature `write`; label |
| 9.38 | — | — | photo box `highlight`; label "photo" |

## s063
Continues: s062
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s062 ends |
| 0.32 | — | — | under the photo label: "applicant खुद देता है" 44 px `fade` |
| 4.72 | push to 1.15 on the photo box | — | dimension lines `draw` round the photo box: "88 mm" (width), 6.58 "63 mm" (height), 60 px |
| 8.20 | — | — | "या थोड़ा छोटा" 48 px `fade` |

## s064
Continues: s063
Section label: PART 3 · IDENTITY CARD
Idea: valid 3 years from issue; then apply for a new one. Camera returns to 1.0; a `postmark-ring` scale 1.2 "VALID 3 YEARS" stamps on the card's lower right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | back to 1.0 | — | as s063 ends |
| 2.42 | — | — | postmark `stamp` "Validity: 3 साल" |
| 3.30 | — | — | "जारी होने की तारीख से" 44 px under it |
| 4.82 | — | — | grey line at y 950 "3 साल बाद: नए card के लिए apply" 48 px `fade` |

## s065
Continues: s064
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s064 ends |
| 0.94 | — | — | line "photo चेहरे से मिलती हो" 48 px `fade` in a band at y 200, above the card |
| 3.60 | — | — | "→ card अपने आप आगे valid" `fade`; 5.28 `strike` (slate) |
| 8.60 | — | — | green pill "Optional · वैकल्पिक" 52 px `stamp` on the card's top right |

## s066
Continues: no
Section label: PART 3 · IDENTITY CARD
Idea: showing the card usually makes delivery or payment easy; if doubt remains, the Postmaster may enquire further. Transition: cut.
Set: po-counter `wide`; person-icon at `customer-side` holding an `id-card` (scale 0.6) beside it; envelope on `counter-centre`; right panel text.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set, person, card on |
| 1.34 | — | — | card `pulse` |
| 2.10 | — | — | green tick `draw` on the envelope; "delivery / payment आसानी से" 48 px `fade` |
| 5.82 | — | — | grey "?" `pop` above the counter; "शक बचा रहे" 48 px |
| 7.06 | — | — | label "Postmaster: और पूछताछ" 48 px `fade` over the sign plate |

## s067
Continues: s066
Section label: PART 3 · IDENTITY CARD
Idea: more proof that the holder is the real one; then a lost card → duplicate. Sub-shots: `#counter` 0, `#dup` 6.50.
Layout `#dup`: left: `id-card` scale 2 with a slate dashed outline and "खो गया" 48 px; arrow; right: a new `id-card` scale 2 with a red "DUPLICATE" band lettered on its title strip.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s066 ends |
| 0.80 | — | — | "और सबूत: असली holder?" 48 px `fade` |
| 6.50 | — | — | shot `#dup`: lost card on |
| 7.72 | — | — | arrow `draw`; duplicate card `pop` |

## s068
Continues: s067
Section label: PART 3 · IDENTITY CARD
Idea: duplicate needs the applicable fee and a written declaration freeing the Department from misuse of the old card. Below the cards (y 640–990): left chip `rupee-deposit` + "लागू fee"; right `written-request` scale 0.6 lettered "Declaration" with one line "पुराने card के गलत इस्तेमाल की ज़िम्मेदारी से Department मुक्त" 44 px beside it.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s067 ends |
| 0.64 | — | — | fee chip `pop` |
| 2.40 | — | — | declaration sheet `slide` up |
| 6.24 | — | — | the old card `pulse`; the line `fade` |
| 11.32 | — | — | `highlight` {words: 'मुक्त'} |

## s069
Continues: s068
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s068 ends |
| 1.74 | — | — | fee chip text `swap` to "duplicate fee: नियम में तय नहीं" |
| 6.56 | — | — | line y 180–260 "duplicate fee = पहली fee" 52 px `fade`; 8.08 `strike` (slate) + slate cross |

## s070
Continues: no
Section label: PART 3 · IDENTITY CARD
Idea: the fee table; rows build as read. Transition: cut.
Layout: component compare-table, moulded into a one-column fee table: title "Identity card fees · शुल्क" 56 px y 190; white table x 200–1720, y 280–860: red header row (CARD · कार्ड | FEE · शुल्क); 4 rows 130 tall: सामान्य postal identity card — ₹9 · Value-added POID: Application charge — ₹20 · Value-added POID: Processing charge — ₹250 · Value-added POID: कुल — ₹270; source line grey y 900: "Post Office Regulations 2024 · Reg. 54". Values in 72 px; row labels 48 px.
Component: compare-table (one value column).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | title on |
| 0.44 | — | — | table frame and header `reveal` |
| 3.26 | — | — | source line `fade` |
| 5.46 | — | — | row 1 label `fade` |

## s071
Continues: s070
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s070 ends |
| 0.00 | — | — | row 1 value "₹9" `pop` |
| 1.34 | — | — | small bracket label "Value-added POID card · मूल्यवर्धित डाकघर पहचान पत्र" 44 px `fade` beside rows 2–4 (right margin inside the table) |
| 7.16 | — | — | row 2 label `fade`; 8.24 "₹20" `pop` |

## s072
Continues: s071
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s071 ends |
| 0.00 | — | — | row 3 label `fade`; 0.88 "₹250" `pop` |
| 2.58 | — | — | row 4 label `fade`; 3.90 "₹270" `pop`; yellow outline `draw` round row 4 |
| 5.22 | — | — | `highlight` row 1's "₹9"; 6.62 `highlight` "₹270" |
| 7.92 | — | — | note y 940 "दो अलग card व्यवस्थाएँ" 48 px `fade` |

## s073
Continues: s072
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s072 ends |
| 1.04 | — | — | note `swap` to "₹9 ↔ ₹270: एक-दूसरे की जगह नहीं" |
| 3.50 | — | — | second note in the title row at right: "देश भर में एक तारीख से बदलाव?" 44 px `fade` |
| 6.50 | — | — | it `strike`s (slate) |

## s074
Continues: no
Section label: PART 3 · IDENTITY CARD
Idea: the Tamil Nadu Postal Circle's published value-added POID process. Transition: cut.
Component: step-list, moulded: title "Tamil Nadu Postal Circle · value-added POID" 52 px with Hindi "प्रकाशित व्यवस्था"; four step cards x 200–1720, y 300–940 (150 tall): 1 Application · 2 postman या कोई official जाँच करता है · 3 card देने की सिफ़ारिश · 4 Head Office: 15 दिन में card जारी; drop the closing chip; no English lines under Hindi except terms.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | line "एक व्यवस्था की जगह दूसरी आई — साबित नहीं" 44 px grey on (carries s073's point) |
| 2.82 | — | — | grey line `out`; title `fade` |
| 7.60 | — | — | step 1 `slide` from left |
| 8.74 | — | — | step 2 `slide`; 13.06 `highlight` {words: 'जाँच'} |

## s075
Continues: s074
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s074 ends |
| 1.38 | — | — | step 3 `slide` |
| 2.96 | — | — | step 4 `slide`; 5.98 red chip "15 दिन" `pop` in it |
| 8.82 | — | — | grey line under the list "Validity: जारी होने से 3 साल" 48 px `fade` |

## s076
Continues: s075
Section label: PART 3 · IDENTITY CARD
Idea: 15 days is the Circle's service standard, not validity; then Exam angle starts. Sub-shots: `#steps` 0, `#exam` 6.03 (Exam angle layout).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s075 ends |
| 0.56 | — | — | chip "15 दिन" `pulse`; label "service standard" 44 px beside it |
| 4.00 | — | — | "validity नहीं" `fade`, `underline` "नहीं" |
| 6.03 | — | — | shot `#exam`: card with kicker on |
| 7.50 | — | — | line 1 "पहचान: अनजान व्यक्ति → may" `fade` |
| 10.50 | — | — | line 2 "passport, PAN card वाले items → shall" `fade` |

## s077
Continues: s076
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s076 ends |
| 0.62 | — | — | line 3 "Card: tourists, firms के representatives, आम लोग" `fade` |
| 5.31 | — | — | line 4 "Head Post Office जारी करता है" `fade` |
| 7.83 | — | — | line 5 "Sub Office: application लेकर आगे भेजता है" `fade` |

## s078
Continues: no
Section label: PART 3 · IDENTITY CARD
Idea: Exam angle, card two (the first card is full). Transition: cut.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Exam angle card on, kicker "Exam angle · परीक्षा की बात (2)" |
| 0.33 | — | — | line 1 "Card में विवरण, signature और photo" `fade` |
| 2.93 | — | — | line 2 "photo: 88 × 63 mm, या थोड़ा छोटा" `fade` |
| 7.53 | — | — | line 3 "Validity 3 साल" `fade` |
| 9.17 | — | — | line 4 "इस्तेमाल optional" `fade` |

## s079
Continues: s078
Section label: PART 3 · IDENTITY CARD
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s078 ends |
| 0.00 | — | — | line 5 "Value-added POID:" `fade` |
| 2.21 | — | — | "₹20" `pop` in line 5 |
| 4.12 | — | — | "+ ₹250" `pop` |
| 5.71 | — | — | "= ₹270" `pop`; `highlight` {words: '₹270'} |

## s080
Continues: no
Section label: PART 4 · SENDER'S RECALL
Idea: Recall: take the item back instead of sending it on. Transition: wipe from right.
Layout: red stamp-edged term card x 200–1000, y 220–560: "Recall" 110 px white, "वापस मंगाना" 56 px pale yellow; right x 1080–1760: the envelope (scale 0.7) between a `house-icon` "sender" at left and a grey `house-icon` "addressee" at right, a grey dashed arrow to the addressee and a slate return arrow curving back LEFT; meaning strip y 700–940 x 200–1720: "addressee तक भेजने के बजाय, वापस लेने की request" 52 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "पहले दो शब्द" 56 px y 180 and the right picture (envelope, houses, dashed arrow) on |
| 1.60 | — | — | term card `slide` from left; 2.10 Hindi `fade` |
| 3.76 | — | — | dashed arrow `pulse` |
| 5.98 | — | — | return arrow `draw` (0.9 s) |
| 7.88 | — | — | meaning strip `reveal`; `highlight` {words: 'request'} |

## s081
Continues: s080
Section label: PART 4 · SENDER'S RECALL
Idea: Alteration of address: change the delivery address (domestic rule includes the addressee's name). The term card `swap`s its words; the picture adds a forked arrow RIGHT to a second `house-icon`.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s080 ends |
| 0.00 | — | — | term text `swap` to "Alteration of address" (80 px) / "पते में परिवर्तन"; return arrow `color` grey |
| 2.46 | — | — | forked arrow `draw`; second house `pop` |
| 5.36 | — | — | meaning strip text `swap` to "जहाँ deliver होना है, वो पता बदलना" |
| 6.72 | — | — | chip "Domestic: addressee का नाम बदलवाना भी" 48 px `pop` under the strip |

## s082
Continues: no
Section label: PART 4 · SENDER'S RECALL
Idea: for accountable domestic items: booking receipt + signature at delivery. Transition: cut.
Layout: term strip y 180–320: "Accountable domestic item" 72 px with Hindi "जवाबदेह देशी डाक" 44 px; two cards x 200–900 and x 1020–1720, y 380–960: `receipt-slip` scale 1.2 "booking receipt"; envelope + ink signature "delivery पर signature".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "ये सुविधा किसके लिए" 48 px grey on |
| 0.96 | — | — | term strip `reveal` |
| 6.66 | — | — | left card `pop` |
| 8.82 | — | — | right card `pop`; 9.54 signature `write` |

## s083
Continues: s082
Section label: PART 4 · SENDER'S RECALL
Idea: no addressee consent needed; then how the request is made. Sub-shots: `#item` 0, `#req` 4.86.
Layout `#req`: left `person-icon` scale 1.3 labelled "Sender / ज़रूरी authority वाला व्यक्ति" (x 200–700); right `written-request` scale 1.3 (x 1100–1650, y 220–950) lettered header "लिखित request".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s082 ends |
| 2.08 | — | — | strip y 900–990 "Addressee की सहमति" 52 px `fade`; 3.64 slate cross + "ज़रूरी नहीं" |
| 4.86 | — | — | shot `#req`: heading "Request कैसे?" 56 px |
| 6.91 | — | — | person `pop` with label |
| 8.72 | — | — | "authority" label `highlight` |

## s084
Continues: s083
Section label: PART 4 · SENDER'S RECALL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s083 ends |
| 0.99 | — | — | request sheet `slide` from right |
| 3.33 | — | — | first line on the sheet lettered "कारण" 48 px `fade` |
| 5.97 | — | — | chip at the sheet's bottom-left "लागू fee" `pop` |
| 9.69 | — | — | grey tag next to the sheet "Form No. ___" 48 px `fade`; 11.59 `strike` (slate) + label "कोई numbered form नहीं" |

## s085
Continues: no
Section label: PART 4 · SENDER'S RECALL
Idea: ₹6 per item, for all three requests, with a receipt. Transition: cut.
Layout: perforated red stamp card x 520–1400, y 200–520: "₹6 per item" 96 px white; three chips y 600–760 x 200–1720: "Recall" · "पता बदलना" · "नाम बदलना" (52 px); `counter-receipt` scale 0.6 at right x 1500–1720, y 720–990 with "fee की receipt" 44 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "Fee" 56 px y 170 on |
| 0.64 | — | — | stamp card `stamp` |
| 2.72 | — | — | chip 1 `pop`; 3.86 chip 2; 6.20 chip 3 |
| 7.56 | — | — | receipt `slide` up; 9.48 label `fade`, `underline` "receipt" |

## s086
Continues: s085
Section label: PART 4 · SENDER'S RECALL
Idea: the fee is for the request, no guarantee; the request must identify the item by its booking details. Sub-shots: `#fee` 0, `#req` 6.88. Layout `#req`: `written-request` scale 1.4 centred-left (x 300–890, y 220–990); its lines lettered as they're said; right column notes 52 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s085 ends |
| 0.88 | — | — | band y 880–990 "fee = request की" 52 px `reveal` |
| 3.92 | — | — | band adds "काम की गारंटी नहीं" with a slate cross |
| 6.88 | — | — | shot `#req`: request sheet on |
| 9.83 | — | — | line 1 "booking details" (with a small `receipt-slip`) `fade`; right note "item की पहचान साफ़" |

## s087
Continues: s086
Section label: PART 4 · SENDER'S RECALL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s086 ends |
| 0.25 | — | — | line 2 "क्या करवाना है" `fade`; note "साफ़ लिखा हो" |
| 5.83 | — | — | line 3 "नया पता / सही नाम" `fade` |
| 8.74 | — | — | `highlight` line 3 ("इतना साफ़") |

## s088
Continues: s087
Section label: PART 4 · SENDER'S RECALL
Idea: office can act on it; then timing: four situations where no request is taken. Sub-shots: `#req` 0, `#bars` 2.91 (Four bars layout; heading "चार हालात: request नहीं" 56 px y 200).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s087 ends |
| 1.48 | — | — | green tick `draw` on the sheet ("काम कर सके") |
| 2.91 | — | — | shot `#bars`: heading on, four empty bar frames drawn grey |
| 7.09 | — | — | bar 1 stop-hand `pop` |
| 9.99 | — | — | bar 1 "Out for delivery" / "वितरण के लिए निकल चुकी" `fade` |

## s089
Continues: s088
Section label: PART 4 · SENDER'S RECALL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s088 ends |
| 0.28 | — | — | bar 2 "Seized" / "ज़ब्त" `fade` with its hand |
| 2.78 | — | — | bar 3 "Confiscated" / "अधिहृत (confiscate)" `fade` |
| 7.50 | — | — | bar 4 "Destroyed under law" / "कानून से नष्ट" `fade` |

## s090
Continues: no
Section label: PART 4 · SENDER'S RECALL
Idea: the fine point: out with the postman, not yet delivered — still no request. Transition: cut.
Layout: route x 160–1760 at y 640: `post-office-icon` at left, a red "STOP" bar line at x 700 (labelled "Out for delivery"), the postman on the road (Photo: postman-delivering-parcel-cutout, height 420, standing on the route line at x 900–1260; drawn alternative: a `mail-bag` scale 0.8 on the route), `house-icon` at right "addressee"; label strip y 860–980.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "एक बारीक बात" 56 px y 190, office and house on |
| 2.56 | — | — | postman cut-out `slide` from left to x 900 (or the mail bag) |
| 5.28 | — | — | "अभी deliver नहीं" 48 px over the house, grey |
| 7.20 | — | — | label "undelivered" 48 px `fade` |
| 8.78 | — | — | strip "फिर भी request नहीं" 52 px `reveal` |
| 11.64 | — | — | stop line `draw` at x 700 + "Out for delivery = रोक शुरू" `stamp` |

## s091
Continues: s090
Section label: PART 4 · SENDER'S RECALL
Idea: the half-truth; then the fee sum begins. Sub-shots: `#route` 0, `#sum` 4.62. Layout `#sum`: four envelopes scale 0.5 in a row x 260–1660, y 300–520, each with a small "₹6" tag; below a stamp-edged card x 460–1460, y 620–940 for the sum.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s090 ends |
| 0.18 | — | — | line y 200 "\"delivery तक recall हमेशा\"" 52 px `fade` |
| 3.52 | — | — | `strike` (slate) + "अधूरी बात" 48 px |
| 4.62 | — | — | shot `#sum`: heading "Fee का हिसाब" 56 px |
| 7.34 | — | — | four envelopes `pop` {stagger: 0.15} |

## s092
Continues: s091
Section label: PART 4 · SENDER'S RECALL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s091 ends |
| 1.68 | — | — | "₹6" tags `pop` {stagger: 0.12} |
| 2.56 | — | — | sum card: "4 × ₹6" 96 px `fade` |
| 5.14 | — | — | "= ₹24" 96 px `pop`; `highlight` |
| 6.22 | — | — | a bracket `draw` over the envelopes: "एक साथ post" 44 px |

## s093
Continues: s092
Section label: PART 4 · SENDER'S RECALL
Sub-shots: `#sum` 0, `#exam` 3.11 (Exam angle layout).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s092 ends |
| 0.86 | — | — | under the bracket "तब भी per item" 48 px `fade` |
| 3.11 | — | — | shot `#exam`: card and kicker |
| 4.77 | — | — | line 1 "Sender की सुविधा: accountable domestic items" `fade` |

## s094
Continues: s093
Section label: PART 4 · SENDER'S RECALL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s093 ends |
| 0.00 | — | — | line 2 "Addressee की सहमति ज़रूरी नहीं" `fade` |
| 2.75 | — | — | line 3 "लिखित request, कारण और fee के साथ" `fade` |
| 6.81 | — | — | line 4 "fee की receipt ज़रूरी" `fade` |

## s095
Continues: s094
Section label: PART 4 · SENDER'S RECALL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s094 ends |
| 0.35 | — | — | line 5 "₹6 per item · Out for delivery होते ही request बंद" `fade` |
| 0.35 | — | — | `highlight` {words: '₹6 per item'} |
| 2.91 | — | — | `highlight` {words: 'Out for delivery'} |

## s096
Continues: no
Section label: RECAP
Idea: Recap 2. Transition: fade.
Component: recap-card, moulded: title "Part 3 और Part 4", seal "4"; four rows (150 apart): Identity card / "Head Post Office · 3 साल" · ₹270 POID / "₹20 + ₹250" · ₹6 per item / "लिखित request" · Out for delivery / "फिर request नहीं". Ticks green as said.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card, flap, title on |
| 1.53 | — | — | the four term names `fade` grey {stagger: 0.15} |
| 6.21 | — | — | row 1 ink; 8.43 pill `pop`; 10.07 tick `draw` |

## s097
Continues: s096
Section label: RECAP
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s096 ends |
| 0.00 | — | — | row 2 ink; 2.15 pill `pop`; 6.43 tick |
| 8.22 | — | — | row 3 ink; 11.18 pill `pop`; 12.22 tick |

## s098
Continues: s097
Section label: RECAP
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s097 ends |
| 0.00 | — | — | row 4 ink, pill `pop` |
| 1.80 | — | — | row 4 tick `draw`; all hold |

## s099
Continues: no
Section label: PART 5 · CANCELLATION
Idea: recall and booking cancellation are two different jobs. Transition: wipe from right.
Component: compare-cards, moulded: no question; left (red band) "Recall" / "वापस मंगाना", fact "स्वीकार हो चुके item का"; right (yellow band) "Cancellation" / "रद्द करना", fact "booking का" (arrives s100); VS disc; Hindi ≥ 44 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | both card frames and band names on |
| 2.44 | — | — | VS disc `pop`; heading "दो अलग काम" 56 px y 190 |
| 4.60 | — | — | left fact "उस item का, जिसे post office स्वीकार कर चुका" `fade` |
| 8.32 | — | — | `highlight` {words: 'स्वीकार'} |

## s100
Continues: s099
Section label: PART 5 · CANCELLATION
Sub-shots: `#cards` 0, `#table` 2.88. Layout `#table`: a white table x 160–1760, y 280–900, red header "Cancellation · कब" 48 px; two rows 260 tall: row 1 label "Self-booking (web portal या mobile app)" with `browser-window` icon scale 0.16; row 2 label "Counter booking" with `booking-counter` icon scale 0.25; values on the right half (52 px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s099 ends |
| 0.00 | — | — | right fact "booking का" `fade` |
| 2.88 | — | — | shot `#table`: frame and header |
| 6.26 | — | — | row 1 icon `pop`, label `fade` |

## s101
Continues: s100
Section label: PART 5 · CANCELLATION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s100 ends |
| 0.00 | — | — | row 1 value "Post Office के स्वीकार करने से पहले cancel" `fade` |
| 3.16 | — | — | row 2 icon `pop`, label `fade` |
| 4.50 | — | — | row 2 value "booking वाले दिन ही" `fade` |
| 5.80 | — | — | row 2 second line "गलत data entry: Post Office भी उसी दिन" 44 px `fade` |

## s102
Continues: s101
Section label: PART 5 · CANCELLATION
Sub-shots: `#table` 0, `#steps` 6.36. Layout `#steps`: component step-list, moulded: title "Dispatch से पहले cancellation" 56 px; four step cards x 200–1720, y 300–960: 1 लिखित request, booking office को · 2 साथ में: booking receipt, item details, कारण, पहचान · 3 Staff देखता है: item अभी office में · 4 पहचान जाँच, receipt लेकर item वापस (last card cream with green tick); drop the chip.
Component: step-list.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s101 ends |
| 2.26 | — | — | band y 920–990 "Deliver हो चुका item वापस लेने का हक: नहीं" 48 px `reveal`; slate cross |
| 6.36 | — | — | shot `#steps`: title |

## s103
Continues: s102
Section label: PART 5 · CANCELLATION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s102 ends |
| 0.00 | — | — | step 1 `slide`; label "Sender / authorised representative" 44 px in it |
| 7.20 | — | — | step 2 `slide`; its items `fade` on their words: 7.38 receipt, 9.14 details, 10.06 कारण |

## s104
Continues: s103
Section label: PART 5 · CANCELLATION
Photo: post-office-counter-window (if found: small framed print in step 3's right end; else a `booking-counter` icon).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s103 ends |
| 0.46 | — | — | step 2 adds "पहचान" |
| 1.40 | — | — | step 3 `slide`; photo `fade` |
| 5.92 | — | — | step 4 `slide` |
| 9.68 | — | — | step 4 tick `draw` |

## s105
Continues: no
Section label: PART 5 · CANCELLATION
Idea: refund of postage on cancellation follows the Department's administrative instructions. Transition: cut.
Layout: heading "Refund?" 80 px red y 230; centre: `rupee-deposit` scale 2 (x 300–780, y 420–740) with an arrow to a white document card x 920–1720, y 380–860 lettered "Department के administrative instructions" 52 px; a `postmark-ring` "Reg. 23A · S.O. 3891(E)" on its corner.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on |
| 2.28 | — | — | rupee notes `pop`; "postage refund" 48 px |
| 3.88 | — | — | arrow `draw`; document card `slide` from right |
| 5.24 | — | — | card text `fade`; postmark `stamp` |

## s106
Continues: s105
Section label: PART 5 · CANCELLATION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s105 ends |
| 0.78 | — | — | line y 920 "हर product का तय refund % या रकम" 48 px `fade`; 5.02 slate cross + "नहीं" |
| 6.50 | — | — | line `swap` to "Cancellation ≠ पूरा refund" 56 px; `underline` "≠" |

## s107
Continues: no
Section label: PART 5 · CANCELLATION
Idea: the rule came by a 15 July 2026 notification; it applies on publication in the Official Gazette. Transition: cut.
Layout: a horizontal track x 200–1720 at y 600: left `postmark-ring` scale 1.3 "15.07.2026 · S.O. 3891(E)" with label "Notification" 52 px; right a white document card (#ead9a8) "Official Gazette" 56 px with label "publication पर लागू" 52 px; arrow between.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "Cancellation और refund: ये नियम कब से" 52 px y 200 on |
| 2.66 | — | — | left postmark `stamp`; 5.08 label `fade` |
| 7.12 | — | — | arrow `draw`; Gazette card `slide` from right |
| 9.24 | — | — | "लागू" `highlight` |

## s108
Continues: s107
Section label: PART 5 · CANCELLATION
Sub-shots: `#dates` 0, `#refund` 5.45. Layout `#refund`: heading "Recall / alteration: fee की वापसी" 56 px y 200; a rule card x 200–1720, y 300–620 for the general rule; second card y 680–990 for the exception (s110–s111).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s107 ends |
| 0.96 | — | — | under the left postmark "तारीख" 48 px; 4.24 a slate "≠" sign `draw` between date and "लागू" + "शर्त की जगह मत रखिए" 44 px |
| 5.45 | — | — | shot `#refund`: heading and empty rule card |

## s109
Continues: s108
Section label: PART 5 · CANCELLATION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s108 ends |
| 0.98 | — | — | rule card text "सामान्य नियम: दिया गया postage और fee वापस नहीं" 52 px `fade`, slate cross |
| 6.20 | — | — | second card frame `slide` up, grey label "पर एक अलग नियम" 44 px |

## s110
Continues: s109
Section label: PART 5 · CANCELLATION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s109 ends |
| 0.00 | — | — | second card row 1 "Request पूरी न हो पाए" 48 px `fade` |
| 2.70 | — | — | row 2 "या application के उलट deliver हो जाए" `fade` |
| 7.38 | — | — | note "तय शर्तों पर post office ज़िम्मेदार नहीं" 44 px grey `fade` |

## s111
Continues: s110
Section label: PART 5 · CANCELLATION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s110 ends |
| 1.42 | — | — | green pill "request fee वापस" 52 px `stamp` on the second card |
| 5.02 | — | — | grey pill "Exam confusion" `fade` by the heading |
| 8.94 | — | — | `highlight` {words: 'request fee'} |

## s112
Continues: s111
Section label: PART 5 · CANCELLATION
Sub-shots: `#refund` 0, `#exam` 5.21 (Exam angle layout).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s111 ends |
| 0.00 | — | — | beside the green pill: "original postage" 44 px `fade` + `strike` (slate); 2.36 "सामान की कीमत" `fade` + `strike` |
| 5.21 | — | — | shot `#exam` |
| 6.79 | — | — | line 1 "Self-booked item: स्वीकार होने से पहले cancellation" `fade` |

## s113
Continues: s112
Section label: PART 5 · CANCELLATION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s112 ends |
| 0.00 | — | — | line 2 "Counter booking: booking वाले दिन" `fade` |
| 2.68 | — | — | line 3 "Cancellation refund: administrative instructions से" `fade` |
| 7.32 | — | — | line 4 "Request पूरी न हो: request fee वापस" `fade`; 9.22 `highlight` {words: 'request fee'} |

## s114
Continues: no
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Idea: recall is the sender's right; the addressee may ask for alteration of address. Transition: wipe from right.
Layout: two columns x 160–900 (Sender) and x 1020–1760 (Addressee), y 220–980: `person-icon` header each (labels 56 px); under each two rows: "Recall" and "Alteration of address" (52 px) with tick/cross marks at right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | both person headers on |
| 0.00 | — | — | sender column row "Recall" `fade`; 1.73 green tick |
| 2.82 | — | — | addressee column `highlight` |
| 3.73 | — | — | addressee row "Alteration of address" `fade`; 6.58 green tick |
| 7.88 | — | — | small forked-arrow icon with `house-icon` `draw` under it: "दूसरे पते पर" 44 px |

## s115
Continues: s114
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s114 ends |
| 0.80 | — | — | addressee row "Recall" `fade` |
| 3.46 | — | — | it `strike`s (slate) + slate cross; "हक नहीं" 44 px |
| 6.04 | — | — | band y 920–990 "Fee: एक सवाल" 52 px `reveal` |

## s116
Continues: no
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Idea: the one question. Transition: cut.
Layout: question 60 px y 200–300 "पुराना पता और नया पता: एक ही post office के delivery area में?"; below a soft yellow (#fde9a6) rounded area x 360–1560, y 380–960 labelled "Delivery area" 44 px, a `post-office-icon` at its centre and two `house-icon`s "पुराना" (left) and "नया" (right).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | question line on |
| 0.54 | — | — | old house `pop` |
| 1.36 | — | — | new house `pop` |
| 3.02 | — | — | office `pop` |
| 3.90 | — | — | area `reveal` behind them; label `fade` |

## s117
Continues: no
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Idea: the fee table. Transition: cut.
Layout: component compare-table, moulded: title "Alteration fee · शुल्क" 56 px y 190; table x 200–1720, y 280–760: header (हालात | FEE); row 1 "दोनों पते एक ही Post Office के delivery area में" — "Free"; row 2 "ऐसा न हो" — "₹6 per item"; source line "Regs. 55–58, 69 · Post Office Regulations 2024" grey y 800.
Component: compare-table.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | title and table frame with header on |
| 0.94 | — | — | source line `fade` |
| 2.12 | — | — | row 1 label `fade` |

## s118
Continues: s117
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s117 ends |
| 0.00 | — | — | row 1 value "Free" 72 px green `pop` |
| 1.38 | — | — | row 2 label `fade`; 2.88 "₹6 per item" 72 px `pop` |
| 5.30 | — | — | yellow outline `draw` round row 1's label; band y 880–990 "कसौटी: एक ही post office का delivery area" 48 px `reveal` |

## s119
Continues: s118
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Idea: same city / district / PIN ≠ same delivery area. Sub-shots: `#table` 0 (its bottom band changes), `#lane` 6.30.
Layout `#lane`: a street map strip: two lanes drawn as ink lines inside one soft-yellow area, `post-office-icon` at left, `house-icon` on lane 1 and another on lane 2.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s118 ends |
| 0.00 | — | — | band `swap` to "same city / district / PIN Code ≠ same delivery area" 48 px |
| 0.54 | — | — | `highlight` "city"; 1.86 "district"; 3.82 "PIN Code" |
| 4.90 | — | — | left side "same city / district / PIN Code" `strike` (slate) |
| 6.30 | — | — | shot `#lane`: area, office and first house on |
| 8.28 | — | — | second lane `draw`; second house `pop` |

## s120
Continues: s119
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Sub-shots: `#lane` 0, `#example` 5.41. Layout `#example`: left area A (soft yellow, x 140–1060, y 300–960) with `post-office-icon` "Delivery post office" and two houses "घर 1" and "घर 2"; space at right for area B (s121).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s119 ends |
| 1.50 | — | — | label "उसी area में" 48 px `fade` |
| 3.32 | — | — | green pill "Alteration: free" `stamp` |
| 5.41 | — | — | shot `#example`: area A with office and house 1 |
| 9.43 | — | — | house 2 `pop`; arrow house 1 → house 2 `draw` |

## s121
Continues: s120
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s120 ends |
| 1.44 | — | — | dotted delivery lines from the office to both houses `draw` |
| 4.92 | — | — | green pill "Free" `stamp` in area A |
| 6.90 | — | — | area B (x 1160–1780, y 300–960) `reveal` with a second `post-office-icon` and house 3 |
| 8.54 | — | — | arrow from house 1 to house 3 `draw` |

## s122
Continues: s121
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Sub-shots: `#example` 0, `#notice` 2.26. Layout `#notice`: `written-request` scale 1.3 at x 260–810 (lettered header "पता बदलने की सूचना"); `post-office-icon` at x 1100; `house-icon` "नया पता" at x 1500. Photo: change-of-address-card (if found: replaces the drawn sheet as a framed print the same size, tilted 1.5°, caption "Change of address card"; else the sheet).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s121 ends |
| 0.20 | — | — | red pill "₹6 per item" `stamp` in area B |
| 2.26 | — | — | shot `#notice`: heading "पता बदलने के बाद: लिखित सूचना" 52 px |
| 5.38 | — | — | sheet (or photo) `slide` from left |
| 7.28 | — | — | label "घर या office का पता" 44 px `fade` |

## s123
Continues: s122
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s122 ends |
| 0.00 | — | — | arrow sheet → office `draw`; office `pop` |
| 3.30 | — | — | envelope icon `pop` at the office |
| 8.06 | — | — | arrow office → new house `draw`; house `pop` |
| 12.20 | — | — | `postmark-ring` "3 महीने तक valid" `stamp` on the sheet |

## s124
Continues: s123
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s123 ends |
| 0.58 | — | — | band y 900–990 "Fee वही: same area → free · नहीं तो per item" 48 px `reveal` |
| 7.04 | — | — | postmark `pulse` |

## s125
Continues: s124
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Sub-shots: `#notice` 0, `#who` 3.46. Layout `#who`: heading "Request कौन दे सकता है?" 56 px; three `person-icon` cards x 160–1760 at y 320–960: "Sender" · "Addressee" · "Authorised person" (56 px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s124 ends |
| 0.00 | — | — | band text `swap` to "3 महीने validity ≠ redirection charge की पूरी छूट" |
| 3.46 | — | — | shot `#who`: heading |
| 5.18 | — | — | card 1 `pop`; 6.24 card 2; 7.46 card 3 |

## s126
Continues: s125
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Sub-shots: `#who` 0, `#bars` 8.30 (Four bars layout, as s088–s089; heading "रोक वही" 56 px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s125 ends |
| 0.00 | — | — | strip y 880–990 "लिखित request · कारण · लागू fee" 48 px `reveal` |
| 4.08 | — | — | strip adds "हर fee की receipt" with a small `counter-receipt` |
| 8.30 | — | — | shot `#bars`: four empty bar frames |
| 10.14 | — | — | bar 1 "Out for delivery" `fade` |
| 11.68 | — | — | bar 2 "Seized" `fade` |

## s127
Continues: s126
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Sub-shots: `#bars` 0, `#transit` 4.99. Layout `#transit`: route line x 160–1760 at y 640: left `post-office-icon` "Booking", right `post-office-icon` "Office of destination"; an envelope on the route midway.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s126 ends |
| 0.00 | — | — | bar 3 "Confiscated" `fade` |
| 1.50 | — | — | bar 4 "Destroyed under law" `fade` |
| 4.99 | — | — | shot `#transit`: heading "Redirection के और नियम" 52 px, both offices |
| 7.21 | — | — | envelope `slide` from left along the route to the middle |

## s128
Continues: s127
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s127 ends |
| 0.90 | — | — | slate stop-hand `pop` over the envelope; "रास्ते में redirect नहीं" 48 px |
| 3.88 | — | — | destination office `pulse`; label "Redirection: सिर्फ यहीं" 52 px green tick |
| 8.42 | — | — | "जिसके पते पर article भेजा गया" 44 px `fade` under it |

## s129
Continues: no
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Idea: a returned parcel, unclaimed or refused, within the issuing office's delivery area. Transition: cut.
Layout: left: Photo: india-post-parcel-cutout (height 360, x 200–700, y 380–760; drawn alternative: `parcel-bag`), labels "unclaimed · refused" 48 px; right: a soft-yellow area x 980–1740, y 300–940 with a `post-office-icon` "जारी करने वाला office" and "delivery area" label.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel on |
| 1.34 | — | — | label "unclaimed" `fade`; 2.34 "refused" |
| 4.58 | — | — | slate return arrow from the parcel curving into the area `draw` |
| 5.24 | — | — | area `reveal` with office and labels |

## s130
Continues: s129
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Sub-shots: `#parcel` 0, `#two` 5.72. Layout `#two`: `written-request` scale 0.9 centre (x 760–1160); left `post-office-icon` "जिस जगह को छोड़ रहा है", right `post-office-icon` "जिस जगह जा रहा है"; arrows from the sheet to both.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s129 ends |
| 0.66 | — | — | area label adds "या उसी post town में" 44 px |
| 3.24 | — | — | green pill "redirection fee नहीं" `stamp` |
| 5.72 | — | — | shot `#two`: sheet on, heading "दोनों offices को लिखित निर्देश" 52 px |
| 7.60 | — | — | both arrows `draw`; both offices `pop` |

## s131
Continues: s130
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s130 ends |
| 0.00 | — | — | left office label `highlight`; 2.90 right office label `highlight` |
| 4.88 | — | — | band y 880–990 "निर्देश: सीधे और सरल" 52 px `reveal`, green tick |
| 7.54 | — | — | grey chips above the band: "उलझे हुए" `fade`, 8.64 "शर्तों वाले" `fade` |

## s132
Continues: s131
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s131 ends |
| 0.64 | — | — | chip "tour programme" `fade`; 2.74 all three chips `strike` (slate) |
| 4.04 | — | — | band `swap` to "हर बदलाव → अलग निर्देश" |

## s133
Continues: no
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Idea: the mail office can redirect, intercept or deliver. Transition: cut.
Layout: red stamp-edged term card x 200–900, y 220–560: "Mail office" 88 px white, "डाक कार्यालय" 48 px; right three chips x 1000–1760 at y 260/420/580: "Redirect" · "Intercept" · "Deliver" 60 px; bottom y 720–990 reserved for authority (s134).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "आखिर में" 48 px grey on |
| 1.16 | — | — | term card `slide` from left |
| 4.78 | — | — | chip 1 `pop`; 5.82 chip 2; 7.16 chip 3 |

## s134
Continues: s133
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s133 ends |
| 0.62 | — | — | bottom-left: `icon-circle-office` scale 0.6 + "Director General या Head of the Circle की authority" 48 px `fade` |
| 4.86 | — | — | chip 2 `highlight`; "Intercept = रास्ते में रोकना" 44 px under the chips |
| 8.42 | — | — | bottom-right: `camp-bag` scale 0.5 + "अपवाद: बड़े अधिकारियों के camp articles" 44 px `fade` |

## s135
Continues: no
Section label: PART 6 · ADDRESSEE'S REDIRECTION
Idea: Exam angle. Transition: cut.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Exam angle card on |
| 0.94 | — | — | line 1 "Addressee: alteration of address, recall नहीं" `fade`; 5.48 `underline` {words: 'recall नहीं'} |
| 6.62 | — | — | line 2 "Same post office का delivery area: free" `fade` |

## s136
Continues: s135
Section label: PART 6 · ADDRESSEE'S REDIRECTION
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s135 ends |
| 0.00 | — | — | line 3 "नहीं तो ₹6 per item" `fade` |
| 2.32 | — | — | line 4 "पता बदलने की सूचना: 3 महीने तक valid" `fade` |
| 7.42 | — | — | line 5 "Redirection: सिर्फ destination office पर" `fade` |

## s137
Continues: no
Section label: RECAP
Idea: Recap 3. Transition: fade.
Component: recap-card, moulded: title "Part 5 और Part 6", seal "4"; rows: Cancellation / "self-booking: स्वीकार से पहले · counter: उसी दिन" · Request fee refund / "सिर्फ request fee" · Same delivery area / "free · नहीं तो ₹6" · 3 months / "सूचना की validity".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | card, flap, title on |
| 1.58 | — | — | the four term names `fade` grey {stagger: 0.15} |
| 8.10 | — | — | row 1 ink; first half of its pill "self-booking: स्वीकार से पहले" `pop` |

## s138
Continues: s137
Section label: RECAP
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s137 ends |
| 0.00 | — | — | row 1 pill completes "counter: उसी दिन"; 0.86 tick |
| 1.22 | — | — | row 2 ink, pill `pop`; 4.68 tick |
| 5.72 | — | — | row 3 ink, pill `pop`; 9.72 tick |

## s139
Continues: s138
Section label: RECAP
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s138 ends |
| 0.00 | — | — | row 4 ink, pill `pop` |
| 1.80 | — | — | row 4 tick `draw`; all hold |

## s140
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: the same words in domestic and international, different request rules. Transition: wipe from right.
Component: compare-cards, moulded: left (red band) "Domestic" / "देश के अंदर" with a small `house-icon`; right (yellow band) "International" / "अंतरराष्ट्रीय" with `icon-globe` scale 0.4; one shared chip row above both: "Recall · Redirection"; takeaway band "नियम अलग" 52 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | both cards on with their names |
| 2.32 | — | — | chip "Recall" `pop`; 3.68 chip "Redirection" `pop` (spanning both cards) |
| 6.48 | — | — | VS disc `pop` |
| 7.84 | — | — | takeaway band "request के नियम अलग" `reveal` |

## s141
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: outward = leaving India; its sender can recall it from the office of booking. Transition: cut.
Layout: left `post-office-icon` scale 1.2 "Office of booking" (x 160–550, y 380–740) on a ground line; right `icon-globe` scale 1.3 (x 1340–1730); a red arrow LEFT→RIGHT with `icon-plane` on it; term strip y 180–300: "Outward" 80 px + "भारत से बाहर जाने वाला" 48 px; bottom y 820–990: envelope + return arrow back to the office.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | office and globe on |
| 0.44 | — | — | term strip `reveal` ("Outward") |
| 3.14 | — | — | arrow `draw`; plane `slide` from left along it; Hindi `fade` |
| 4.70 | — | — | label "Accountable outward item · sender" 48 px `fade` |
| 9.06 | — | — | return arrow `draw` back to the office; `highlight` "Office of booking" |
| 10.22 | — | — | "Recall" 56 px `stamp` beside the arrow |

## s142
Continues: s141
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s141 ends |
| 0.00 | — | — | line under the term "किसी भी कारण से" 44 px `fade` |
| 2.50 | — | — | chip "administrative instructions के हिसाब से" 44 px `pop` |
| 5.20 | — | — | `written-request` scale 0.5 `slide` up at bottom right; label "Sender · Addressee · Authorised person" 44 px |
| 11.36 | — | — | label "लिखित request" `highlight` |

## s143
Continues: s142
Section label: PART 7 · INTERNATIONAL
Idea: no fee for that recall; then inward = coming into India. Sub-shots: `#out` 0, `#in` 5.18. Layout `#in`: mirror: `icon-globe` at left (x 190–580), `post-office-icon` "Office of delivery" at right (x 1370–1760); red arrow LEFT→RIGHT with the plane; term strip "Inward" + "बाहर से भारत आया".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s142 ends |
| 3.52 | — | — | green pill "कोई fee नहीं" 52 px `stamp` by the recall arrow |
| 5.18 | — | — | shot `#in`: globe, office, term strip "Inward" |
| 7.76 | — | — | arrow `draw`; plane `slide`; Hindi `fade` |

## s144
Continues: s143
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s143 ends |
| 0.00 | — | — | label "Accountable inward item · addressee" 48 px `fade` |
| 3.68 | — | — | `highlight` "Office of delivery" |
| 5.40 | — | — | forked arrow from the office to two `house-icon`s `draw`; "Redirection" `stamp` |
| 7.80 | — | — | soft yellow area `reveal` behind both houses + "same delivery area" 44 px |
| 11.62 | — | — | green pill "Free" `stamp` |

## s145
Continues: s144
Section label: PART 7 · INTERNATIONAL
Sub-shots: `#in` 0, `#abroad` 3.03. Layout `#abroad`: `icon-globe` scale 2.2 centred (x 630–1290, y 260–920) with the envelope sitting on a far-side red pin; question 60 px at y 200: "Item विदेश में destination पर?".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s144 ends |
| 0.76 | — | — | red pill "नहीं तो ₹6 per item" `stamp` beside the second house |
| 3.03 | — | — | shot `#abroad`: globe and question |
| 4.55 | — | — | pin + envelope `pop` on the globe |

## s146
Continues: s145
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s145 ends |
| 0.62 | — | — | chips at right of the globe "Recall · Redirection" 48 px `fade` |
| 2.36 | — | — | card x 1340–1780, y 400–800: "उस देश की postal administration" 48 px `slide` from right |
| 5.58 | — | — | card adds "policy + लागू निर्देश" 44 px |

## s147
Continues: s146
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s146 ends |
| 0.00 | — | — | card x 140–580 at left: "भारत: booking office से recall" 48 px `slide` from left |
| 2.39 | — | — | green pill "request fee नहीं" `stamp` in it |
| 4.52 | — | — | band y 900–990 "विदेश में हर काम free?" 52 px `reveal`; 7.89 `strike` (slate) |

## s148
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: refund wording: postage, special fees and air surcharges may be refunded per administrative instructions. Transition: cut.
Component: quote-card, moulded: source label "Post Office Regulations 2024 · international recall"; Georgia lines are the screen's own paraphrase, so instead of a quote show three item chips (Postage · Special fees · Air surcharges, 60 px) on the white card and the line "may be refunded · administrative instructions के हिसाब से" (Georgia 56 px for "may be refunded"); postmark "Regs. 126–127"; drop the Hindi gist panel.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "Refund का शब्द" 56 px and the card frame on |
| 1.80 | — | — | chip "Postage" `pop`; 2.64 "Special fees"; 4.52 "Air surcharges" |
| 6.08 | — | — | line "administrative instructions के हिसाब से" `fade` |
| 8.66 | — | — | "may be refunded" `type` (Georgia); postmark `stamp` |

## s149
Continues: s148
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s148 ends |
| 0.90 | — | — | `highlight` {words: 'may'} |
| 2.82 | — | — | sand strip under the card "हर recall में अपने आप पूरा refund" 48 px `fade`; 6.30 `strike` (slate) + cross |
| 7.10 | — | — | second strip "Service suspend होने के बाद का refund: इन्हीं निर्देशों से" 44 px `fade` |

## s150
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: key term Demurrage (warehousing charges): a charge for taking an item late. Transition: cut.
Component: key-term, moulded: term card x 200–1720, y 220–600: "Demurrage" 110 px white, "विलंब शुल्क" 56 px pale yellow, and under it "(Warehousing charges · भंडारण शुल्क)" 44 px; meaning strip y 660–900: "देर से item लेने का charge" 56 px; a small ink clock icon at its left. Drop the chain and exam pill.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "अब demurrage" 48 px grey on |
| 1.22 | — | — | term card `slide` up; 1.72 Hindi `fade` |
| 3.04 | — | — | warehousing line `fade` |
| 5.54 | — | — | meaning strip `reveal`; clock `draw` |
| 8.06 | — | — | grey line under it "कुछ खास international items" 44 px `fade` |

## s151
Continues: s150
Section label: PART 7 · INTERNATIONAL
Sub-shots: `#term` 0, `#table` 3.55. Layout `#table`: component compare-table, moulded as the demurrage table: title "Demurrage · विलंब शुल्क" 52 px y 180; table x 140–1780, y 260–860 with header ITEM · वस्तु | शर्त | दर; rows (built across scenes): 1 International air parcel (Poste Restante) — 500 g की कोई शर्त नहीं — ₹1 प्रति दिन, maximum ₹40 · 2 Printed-paper packet या bag; insured letter या box (Poste Restante) — 500 g से ज़्यादा — ₹10 प्रति दिन · 3 (grey, small) Ordinary international air parcel — ₹1 प्रति दिन, maximum ₹24.50; source line "Reg. 119A · Schedule III Table XI" grey y 900. Row label 44 px, values 48 px.
Component: compare-table.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s150 ends |
| 0.00 | — | — | meaning strip adds "free अवधि के बाद" 44 px |
| 3.55 | — | — | shot `#table`: title, frame, header, source line |
| 4.31 | — | — | row 1 label `fade` with `icon-plane` scale 0.3 |

## s152
Continues: s151
Section label: PART 7 · INTERNATIONAL
Idea: 7 days free after arrival at the delivery office; demurrage from day 8. A cream panel (x 220–1700, y 560–990) lays over the table's empty lower half (rows 2–3 not yet filled) holding a `day-strip` scale 1.0 at x 300–1620, y 700–830, tiles lettered 1–12 (48 px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s151 ends |
| 1.16 | — | — | cream panel `reveal` over the lower table; strip on, label "Delivery office में पहुँचने के बाद" 44 px |
| 2.34 | — | — | tiles 1–7 `color` to soft green-tinted white with "free" label `fade` {stagger: 0.06} |
| 5.82 | — | — | tile 8 `color` to soft yellow; "8वें दिन से demurrage" 48 px `fade`; tiles 9–12 yellow {stagger: 0.06} |

## s153
Continues: s152
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s152 ends |
| 0.58 | — | — | label above the strip "delivery लेते समय वसूला" 44 px `fade` |
| 4.14 | — | — | cream panel `out`; row 1 conditions "500 g की कोई शर्त नहीं" `fade` |
| 4.66 | — | — | row 1 value "₹1 प्रति दिन" `fade` |
| 6.74 | — | — | "maximum ₹40" `fade`; `highlight` |

## s154
Continues: s153
Section label: PART 7 · INTERNATIONAL
Photo: newspaper-bundle-tied-cutout (small, 200 px tall, at row 2's left as its icon; drawn alternative: `book-packet-icon` scale 0.4) and `insured-letter-bag` scale 0.35 beside it.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s153 ends |
| 0.20 | — | — | small tag "Poste Restante" 40 px in row 2 `fade` |
| 2.44 | — | — | row 2 label line 1 "Printed-paper packet या bag" `fade`; photo `pop` |
| 7.14 | — | — | line 2 "insured letter या box" `fade`; bag icon `pop` |

## s155
Continues: s154
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s154 ends |
| 1.22 | — | — | row 2 note "वही 7 दिन, पहुँचने से" 40 px grey `fade` |
| 4.38 | — | — | row 2 condition "500 g से ज़्यादा" `fade` |
| 7.00 | — | — | `letter-scale` scale 0.5 `pop` by the condition, display "> 500 g"; `highlight` "से ज़्यादा" |

## s156
Continues: s155
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s155 ends |
| 0.46 | — | — | row 2 value "₹10 प्रति दिन" `fade`; yellow outline round row 2 |
| 2.32 | — | — | band y 920–990 "ठीक 500 g: शर्त पूरी नहीं" 48 px `reveal` |
| 7.40 | — | — | slate cross `draw` at the band's right |

## s157
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: a worked example: a 600 g Poste Restante printed-paper packet. Transition: cut.
Layout: left: `letter-scale` scale 1.3 (x 160–630, y 420–810) with `book-packet-icon` scale 0.6 resting on its platform; display shows "600 g"; label "Poste Restante · international printed-paper packet" 44 px under; right: `day-strip` scale 0.82 (x 700–1782, y 520–627), tiles lettered 1–12; heading "एक example" 52 px y 190.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading and scale on |
| 1.14 | — | — | packet `fall` onto the scale's platform {bounce: 0.15} |
| 3.82 | — | — | display "600 g" `count` {to: 600, suffix: ' g', dur: 0.8} |
| 5.46 | — | — | label `fade` |
| 8.34 | — | — | day strip `reveal`; tiles lettered 1–12 |
| 10.00 | — | — | tiles 1–7 tint + "free" `fade` {stagger: 0.05} |

## s158
Continues: s157
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s157 ends |
| 0.76 | — | — | tile 8 onward yellow {stagger: 0.05}; "₹10 प्रति दिन, 8वें दिन से" 48 px under the strip |
| 2.78 | — | — | display `swap` to "500 g"; 6.46 a slate cross over the "₹10" line + "charge नहीं" 48 px green |
| 9.48 | — | — | band y 900–990 "अनगिनत दिन रखवाने का हक नहीं" 48 px `reveal` |

## s159
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: where counting starts: for these Poste Restante items, from arrival at the delivery office. Transition: cut.
Layout: two rows x 160–1760: top y 220–560 "Poste Restante items" — `post-office-icon` "Delivery office" with the plane arriving and a red "दिन 1" flag at arrival; bottom y 620–980 reserved for ordinary items (s160), drawn as an empty sand row with label "Ordinary international items".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "गिनती कहाँ से?" 56 px y 170, both row frames on |
| 2.44 | — | — | top label `fade` |
| 6.66 | — | — | office `pop`; plane `slide` to it |
| 7.72 | — | — | flag "दिन 1: पहुँचने से" `stamp` |

## s160
Continues: s159
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s159 ends |
| 0.00 | — | — | bottom row label `highlight` |
| 5.02 | — | — | bottom row: envelope at a `house-icon` door + "पहली बार delivery के लिए पेश करने से" 44 px `fade` |
| 8.30 | — | — | "या" disc `pop` |
| 11.88 | — | — | a small notice card "arrival intimation" 44 px `pop` + "intimation देने से" |

## s161
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: the ordinary international air parcel: ₹1 a day too, but maximum ₹24.50 (the demurrage table's grey row). Transition: cut.
Layout: the demurrage table exactly as s151–s156 left it (rows 1–2 filled), now with row 3 added in grey.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | table on with rows 1–2 |
| 0.00 | — | — | row 3 label "Ordinary international air parcel" `fade` (grey) |
| 4.06 | — | — | row 3 value "₹1 प्रति दिन" `fade` |
| 7.20 | — | — | "maximum ₹24.50" `fade`; `underline` it; row 1's "₹40" `highlight` again |

## s162
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: an air parcel with an alternate address. Transition: cut.
Layout: `icon-plane` + `parcel-bag` scale 0.6 at left (x 200–600); two `house-icon`s at right: "पहला addressee" (x 1000) and "दूसरा addressee (alternate)" (x 1450); question 60 px y 200.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | question "Air parcel पर alternate address?" and the parcel on |
| 1.34 | — | — | houses `pop` {stagger: 0.3}; a forked arrow `draw` |

## s163
Continues: s162
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s162 ends |
| 1.92 | — | — | tag "बकाया demurrage" 44 px `pop` at the first house |
| 3.08 | — | — | arrow from the tag to the second house `draw`; "दूसरे addressee से वसूला" 48 px |
| 6.68 | — | — | "delivery के समय" 44 px `fade` |
| 8.64 | — | — | grey pill "Exam confusion" `fade` at y 290 under the question |

## s164
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: day 8 is only the day the charge starts — not the last date or return date. Transition: cut.
Layout: `day-strip` scale 1.0 at x 300–1620, y 420–550, tiles 1–12; tile 8 yellow with a red flag "charge शुरू"; two slate labels under it y 680–900: "आखिरी तारीख" and "वापसी की तारीख" (52 px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | strip on with numbers; tile 8 yellow |
| 0.74 | — | — | flag "charge शुरू" `stamp` on tile 8 |
| 4.62 | — | — | "आखिरी तारीख" `fade`; 5.87 "वापसी की तारीख" `fade` |
| 7.30 | — | — | both `strike` (slate) + slate crosses |

## s165
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: Exam angle, card 1 of 2. Transition: cut.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | Exam angle card on |
| 1.30 | — | — | line 1 "Outward accountable item: booking office से recall" `fade` |

## s166
Continues: s165
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s165 ends |
| 0.00 | — | — | line 1 adds "→ कोई request fee नहीं"; `highlight` it |
| 1.88 | — | — | line 2 "Inward accountable item: redirection" `fade` |

## s167
Continues: s166
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s166 ends |
| 0.00 | — | — | line 2 adds "same area free, नहीं तो ₹6 per item" |
| 3.92 | — | — | line 3 "Poste Restante international: गिनती पहुँचने से" `fade` |
| 8.36 | — | — | line 4 "Ordinary: पेश करने या intimation से" `fade` |

## s168
Continues: no
Section label: PART 7 · INTERNATIONAL
Idea: Exam angle, card 2 of 2. Transition: cut.
Layout: Exam angle card, kicker "Exam angle · परीक्षा की बात (2)"; a small `day-strip` scale 0.6 inside the card under line 1 (x 300–1092, y 360–440).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | card on |
| 0.44 | — | — | line 1 "पहले 7 दिन free, demurrage 8वें दिन से" `fade`; strip tiles 1–7 tint, 8–12 yellow at 2.60 |
| 4.04 | — | — | line 2 "Air parcel: ₹1 प्रति दिन, maximum ₹40" `fade` |

## s169
Continues: s168
Section label: PART 7 · INTERNATIONAL
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s168 ends |
| 0.00 | — | — | line 3 "Printed papers, insured items: 500 g से ज़्यादा पर" `fade` |
| 6.38 | — | — | line 3 adds "₹10 प्रति दिन"; `highlight` "500 g से ज़्यादा" |

## s170
Continues: no
Section label: KEY POINTS
Idea: five jobs, told apart: a 5-tile board, one tile per job. Transition: fade.
Layout: heading "पाँच काम, अलग-अलग" 60 px y 200; five white tiles (#ead9a8 border) in one row x 120–1800, y 320–960 (each 310 wide, 26 px gaps), each with an ink icon at top (envelope with POSTE RESTANTE postmark · return arrow · forked arrow · id-card · `browser-window` with a slate cross), the English term 52 px, its Hindi job line 44 px (two lines max).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "पूरे topic की ज़रूरी बातें" 52 px on |
| 4.68 | — | — | heading `swap` to "पाँच काम, अलग-अलग"; five tile frames `pop` {stagger: 0.1} |
| 7.66 | — | — | tile 1 icon + "Poste Restante" `fade` |
| 10.36 | — | — | tile 1 Hindi "लेने आने तक रोकना" `fade` |

## s171
Continues: s170
Section label: KEY POINTS
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s170 ends |
| 0.00 | — | — | tile 2 "Recall" + "sender का item वापस माँगना" `fade` |
| 4.28 | — | — | tile 3 "Alteration / Redirection" + "delivery का पता बदलना" `fade` |

## s172
Continues: s171
Section label: KEY POINTS
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s171 ends |
| 0.00 | — | — | tile 4 "Identity card" + "लेने वाला कौन" `fade` |
| 5.08 | — | — | tile 5 "Cancellation" + "booking से जुड़ा" `fade` |
| 7.80 | — | — | band y 900–990 "जो काम, उसी की अवधि · fee · authority" 48 px `reveal` |
| 9.96 | — | — | `highlight` "अवधि"; 10.46 "fee"; 12.16 "authority" |

## s173
Continues: no
Section label: KEY POINTS
Idea: key points list A (Poste Restante and holding). Transition: cut.
Layout: a white list card x 140–1780, y 180–990 with a red header strip "याद रखिए · 1" 44 px; five rows 150 apart (y 300–900), each a yellow bullet + 52 px line; earlier rows stay ink.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | card and header on |
| 0.00 | — | — | row 1 "Poste Restante: strangers, travellers · delivery post office" `fade` |
| 5.98 | — | — | row 2 "व्यक्ति: 3 महीने तक" `fade` |
| 8.74 | — | — | row 3 "article: 15 दिन" `fade` |

## s174
Continues: s173
Section label: KEY POINTS
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s173 ends |
| 0.00 | — | — | row 3 adds "→ फिर sender को वापस" |
| 1.90 | — | — | row 4 "पूछताछ असफल: deposit, आम तौर पर 7 दिन" `fade` |
| 7.82 | — | — | row 5 "COD: अपने आप extension नहीं" `fade`; slate cross at 10.26 |

## s175
Continues: no
Section label: KEY POINTS
Idea: list B (name and identity card). Transition: cut. Same card layout, header "याद रखिए · 2".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | card and header on |
| 0.00 | — | — | row 1 "Addressee का नाम ज़रूरी" `fade` |
| 2.22 | — | — | row 1 line 2 "initials, बनावटी नाम, निशान: नहीं" 44 px grey `fade` |
| 5.34 | — | — | row 2 "Identity card: Head Post Office से" `fade` |
| 8.10 | — | — | row 2 adds "3 साल valid" |

## s176
Continues: s175
Section label: KEY POINTS
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s175 ends |
| 0.00 | — | — | row 2 adds ", optional" |
| 1.54 | — | — | row 3 "सामान्य card ₹9" `fade` |
| 4.14 | — | — | row 3 adds "· value-added POID ₹270"; `highlight` "₹270" |

## s177
Continues: no
Section label: KEY POINTS
Idea: list C (sender's recall, cancellation). Transition: cut. Header "याद रखिए · 3".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | card and header on |
| 0.00 | — | — | row 1 "Sender का recall और alteration" `fade` |
| 3.80 | — | — | row 1 adds "accountable domestic item" |
| 6.18 | — | — | row 1 line 2 "लिखित request · ₹6 per item" 48 px `fade` |

## s178
Continues: s177
Section label: KEY POINTS
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s177 ends |
| 0.00 | — | — | row 2 "Addressee की सहमति नहीं चाहिए" `fade` |
| 3.22 | — | — | row 3 "Out for delivery के बाद: request नहीं" `fade` |
| 6.50 | — | — | row 4 "Self-booking: स्वीकार होने से पहले cancel" `fade` |
| 10.04 | — | — | row 4 line 2 "counter booking:" 48 px `fade` |

## s179
Continues: s178
Section label: KEY POINTS
Sub-shots: `#c` 0, `#d` 5.10 (list D, same layout, header "याद रखिए · 4").
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s178 ends |
| 0.00 | — | — | row 4 line 2 adds "उसी दिन" |
| 0.84 | — | — | row 5 "Request पूरी न हो: सिर्फ request fee वापस" `fade` |
| 5.10 | — | — | shot `#d`: card and header |
| 5.10 | — | — | row 1 "Addressee का redirection" `fade` |
| 7.90 | — | — | row 1 adds "same delivery area: free" |

## s180
Continues: s179
Section label: KEY POINTS
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s179 ends |
| 0.00 | — | — | row 1 adds ", नहीं तो ₹6 per item" |
| 1.76 | — | — | row 2 "पता बदलने की सूचना: 3 महीने तक valid" `fade` |
| 5.60 | — | — | row 3 "International outward recall: booking office से" `fade` |

## s181
Continues: s180
Section label: KEY POINTS
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s180 ends |
| 0.00 | — | — | row 3 adds "बिना request fee" |
| 1.46 | — | — | row 4 "Poste Restante international: पहुँचने से 7 दिन free" `fade` |
| 8.94 | — | — | row 4 adds "· demurrage 8वें दिन से" |

## s182
Continues: s181
Section label: KEY POINTS
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s181 ends |
| 0.00 | — | — | row 5 "Printed papers, insured items: सिर्फ 500 g से ज़्यादा पर" `fade` |
| 4.88 | — | — | `highlight` {words: '500 g से ज़्यादा'}; holds to the cut |

## s183
Continues: no
Section label: KEY POINTS
Idea: the close: back to the counter: the name matched, the request read carefully, the mail reaches the right hands. Transition: fade.
Set: po-counter `wide` → `medium` by the end; envelope on `counter-centre` with "Mehul Shah · Poste Restante" lettered and its red postmark; `person-icon` at `customer-side`; `written-request` (scale 0.5) on `counter-left`.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set, envelope, person on |
| 0.60 | — | — | `highlight` the name on the envelope; a red link line envelope ↔ person `draw` |
| 2.82 | — | — | request sheet `pulse`; `underline` its lines |
| 5.86 | slow push to `medium` (until 8.2) | — | green tick `draw` on the envelope; line "सही हाथ तक" 56 px `fade` above the counter; holds to the end |
