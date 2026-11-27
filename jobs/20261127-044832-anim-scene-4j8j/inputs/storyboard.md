# Storyboard · Speed Post (Postal Exams)

No character, no rigs anywhere: every scene is an animated lecture slide in the kit's look (cream #fbf7ee canvas,
ink #2b2622, postal red cards, yellow only for highlights, green only for correct/allowed, slate strike for wrong).
The app draws the frame: section label top left, series pill top right. Content lives below the header
(y 150–1000, x 100–1820). Hindi ≥ 36 px, English terms ≥ 48 px; at most five items on a screen.

**Series tag:** PRODUCTS (every scene).

**Section labels** (English only; they change only with the part):
| Scenes | Section label |
|---|---|
| s001–s009 | SPEED POST · OVERVIEW |
| s010–s026 | PART 1 · WHAT IT IS |
| s027–s052 | PART 2 · WEIGHT AND SIZE |
| s053–s055 | RECAP · PARTS 1–2 |
| s056–s081 | PART 3 · TARIFF |
| s082–s098 | PART 4 · BOOKING AND TRACKING |
| s099–s101 | RECAP · PARTS 3–4 |
| s102–s125 | PART 5 · BUSINESS CUSTOMERS |
| s126–s146 | PART 6 · DELIVERY |
| s147–s149 | RECAP · PARTS 5–6 |
| s150–s161 | PART 7 · SERVICE STANDARDS |
| s162–s186 | PART 8 · 24 AND 48 SPEED POST |
| s187–s189 | RECAP · PARTS 7–8 |
| s190–s207 | PART 9 · INSURANCE |
| s208–s231 | PART 10 · COMPENSATION |
| s232–s239 | PART 11 · EMS |
| s240–s250 | KEY POINTS |
| s251 | CLOSE |

## Shared

No sets: the channel has no character and no place; every scene is a slide on the cream canvas. Recurring
pieces, each made once:

| id | new / library | look and size | anchors | scenes |
|---|---|---|---|---|
| `speed-post-emblem` | new | The lecture's recurring picture: a simple ink Speed Post envelope (white, 3 px ink, red speed lines at its left edge, blank label strip) leaning on a sand cardboard parcel with a blank white label; 520×360, no lettering, no logo. Parts #envelope, #parcel, #speed-lines | base, top | openers, chapter titles, recaps, close |
| `key-fact-stamp` | new | Postal-red card with a perforated stamp edge, 560×340, a thin #b8403a inner line, blank for one big white figure (500 g, 35 kg, ₹19/₹47, 13 characters, ₹5 lakh, ₹1,000) and a pale-yellow Hindi line under it | base, top | every key-fact moment |
| `speed-post-parcel` | new | Sand cardboard box, three-quarter view, 3 px ink, brown tape cross, white address label (blank) with a barcode band; 360×300 | base, top, grip | Part 2, Part 6, Part 9, Part 10 |
| `dimension-box` | new | Open ink line drawing of a box in three-quarter view, 640×420, with three blank dimension arrows (#len, #wid, #ht) and a dashed loop round its middle (#girth-loop) that can be drawn on; no numbers | base, top | s035–s045 girth and size |
| `calendar-strip` | new | Four white day tiles in a row (each 240×260) with a red top band blank for the day name and a big blank centre; #day-1..#day-4 groups so a scene can strike or tick each | base, top | Part 7 counting |
| `transport-icons` | new | Three flat ink icons in a row on 360 px centres, 1080×240: #plane, #truck (mail van), #train; each its own group; no lettering | base | Part 4 transmission, Part 7 |
| `globe-icon` | new | Flat ink globe with a red envelope orbiting arc, 320×320 | base, top | Part 11 EMS, s009 |
| `booking-counter` | library | post office booking window | top, base | s011, s082–s090 |
| `receipt-slip` | library | booking receipt with barcode band | base, grip | s011, s084–s090 |
| `domestic-envelope` | library | address-side envelope | base, top | Part 1, Part 2 document limits |
| `parcel-scale` | library | counter parcel scale with display | top, base | Part 2 weight |
| `document-roll` | library | rolled document with end-centre anchor | base, top, end-centre | s046–s048 roll minimum |
| `otp-phone` | library | flat phone with OTP boxes | base, grip | Part 4 tracking, Part 6 OTP |
| `pod-card` | library | proof-of-delivery card | base, top | Part 6 POD |
| `registered-list-sheet` | library | list sheet with red band | base, top | Part 4 Speed Post list |
| `invoice-sheet` | library | ruled form sheet | base, top | Part 5 manifest/BNPL bill |
| `rupee-deposit` | library | notes and coins | base, top | Part 5, Part 9 fee |
| `india-outline-map` | library | sand outline of India with metro anchors | delhi, mumbai, kolkata, hyderabad, chennai, bengaluru | Part 3 distance, Part 7 metros, Part 8 cities |
| `complaint-channel-icons` | library | five complaint icons | base | Part 10 complaint channels |
| `insured-envelope-emblem` | library | sealed insured envelope with ₹ tag | base, top | Part 9 insurance |
| `security-certificate` | library | bearer-security paper | base, top | Part 11 valuables |
| `declaration-tag` | library | form-tag | base, top, grip | Part 2 declaration, Part 11 CN 22/23 |

Components used (moulded per scene): `chapter-title` (each part opener), `key-term` (first time a term
appears), `compare-cards`, `compare-table` (tariff / limits / discount tables), `timeline`, `step-list`,
`formula-card` (girth, volumetric, fee, discount working), `exam-trap`, `recap-card`, `glossary-list`,
`mind-map`, `quote-card`/`rule-card` (Regulation text).

Real photos (all optional: every scene that uses one also works drawn): library `india-post-parcel` (s072),
`return-to-sender-envelope` (s141), `damaged-parcel` (s144, s203, s219), `gold-jewellery` (s191, s196, s234);
new `speed-post-envelope-label` (s010), `india-post-delivery-van` (s102).
Treatment: paper cut-out with white border and soft shadow, tilted 1–2°, small grey caption.

## Continuity

- No character and no place: every scene is a slide on the cream canvas. A new part opens with a `fade`
  (0.5 s) on its chapter-title scene; every other scene arrives with a `cut`. Recap scenes arrive with `wipe`
  from the right.
- A scene marked `Continues: sNNN` keeps the previous scene's card(s) exactly where they were and adds to
  them (it cuts in with nothing moved), so a table or rule card can hold across 15–40 s with highlights
  moving through it.
- Screen direction: processes and journeys run left → right (booking → delivery; day 1 → day N).
- Camera: still by default; a slow 5–8% push-in onto the row being explained, returned to zoom 1 before the
  cut unless the next scene continues from it (said in each scene).
- Colour memory: Document class = postal red header; Parcel class = sand/ink header; TD = red, NTD = sand,
  across Parts 5–6; 24 Speed Post = red badge "24", 48 Speed Post = deep red badge "48".
## s029
Continues: s028
Section label: PART 2 · WEIGHT AND SIZE
Idea: the rest of the Document dimensions, mm and cm together. In: cut. Framing: wide, still.
Layout: #doc exactly as s028 (header band, 500 g stamp x 140–700, table x 780–1760 y 340–880, source).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: header, 500 g stamp, table with "420 mm", row लंबाई highlighted |
| 0.48 | — | — | "42 cm" fades in cm column |
| 2.00 | — | — | highlight moves to row चौड़ाई |
| 2.90 | — | — | "297 mm" pops |
| 5.78 | — | — | "29.7 cm" fades |
| 8.62 | — | — | highlight moves to row मोटाई |
| 9.48 | — | — | "24 mm" pops |
| 12.38 | — | — | "2.4 cm" fades |

## s030
Continues: s029
Section label: PART 2 · WEIGHT AND SIZE
Idea: all three dimensions must be met together; then Parcel maximum limits. In: cut. Framing: wide, still.
Component: key-fact-stamp (piece) — "35 kg", Hindi "सबसे ज़्यादा वजन".
Layout: #doc as s029, plus green-bordered chip x 780–1760 y 895–955 "तीनों नाप एक साथ ✓" (36 px). Shot #pmax (3.55): sand header band x 120–1800 y 180–300 ("Speed Post Parcel" 52 px ink, "स्पीड पोस्ट पार्सल" 36 px); stamp x 140–700 y 420–760; table x 780–1760 y 360–860, column header "सबसे ज़्यादा", two rows: "लंबाई" | 1.5 m, "लंबाई + Girth" | value slot.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #doc: full table with all values, stamp 500 g |
| 0.60 | — | — | highlight sweeps all three dimension rows on "नाप" |
| 1.34 | — | — | green chip pops on "एक साथ" |
| 3.55 | — | — | cut to #pmax: header band reveals on "Parcel" |
| 4.47 | — | — | table + two row labels fade on "सीमाएँ" |
| 7.75 | — | — | stamp "35 kg" stamps in on "35" |
| 8.95 | — | — | highlight row लंबाई |
| 10.09 | — | — | "1.5 m" pops |

## s031
Continues: s030
Section label: PART 2 · WEIGHT AND SIZE
Idea: length + girth max 3 m; then the minimum sizes card (all four rows). In: cut. Framing: wide, still.
Layout: #pmax as s030. Shot #pmin (4.83): sand header band y 180–300 "Speed Post Parcel" + "कम से कम नाप"; white card x 140–1780 y 330–960, four rows (~150 tall): (1) `speed-post-parcel` scale 0.4 at x 180, "Roll के अलावा parcel" | value; (2–3) `document-roll` scale 0.45 at x 170–485 y 520–600 spanning both, "Roll · लंबाई" | value, "Roll · लंबाई + 2 × diameter" | value; (4) "छूट (tolerance)" | value. Values 60 px right column x 1350–1740.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #pmax: header, 35 kg stamp, table with 1.5 m |
| 0.26 | — | — | highlight moves to row "लंबाई + Girth" |
| 2.44 | — | — | "3 m" pops |
| 4.00 | — | — | grey "से ज़्यादा नहीं" fades under it on "नहीं" |
| 4.83 | — | — | cut to #pmin: header + card reveal |
| 5.65 | — | — | four row labels + icons fade, stagger 0.15, on "नाप" |
| 7.71 | — | — | highlight row 1 on "Roll" |
| 11.09 | — | — | "140 ×" types |
| 13.45 | — | — | "90 mm" types |

