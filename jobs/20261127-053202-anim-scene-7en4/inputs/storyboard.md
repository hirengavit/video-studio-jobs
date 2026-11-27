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
## s154
Continues: s153
Section label: PART 7 · SERVICE STANDARDS
Idea: counter open does not mean that day's dispatch is pending; Sundays and holidays not counted. In: cut. Framing: wide, still.
Layout: #conditions card exactly as s153 (rows y 250 / 380 / 510 / 640 / 770), #hl on row 1. Row 1 grey sub-line 36 at x 260, y +88: "Counter खुला है, इसका मतलब उस दिन का dispatch बाकी है, ऐसा नहीं". Row 2 right: small slate calendar icon with a slate cross, x 1640.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | conditions card, all five main lines, #hl on row 1 |
| 0.38 | — | — | row 1 grey sub-line reveals from left |
| 4.16 | — | — | "ऐसा नहीं" in the sub-line turns slate (color) |
| 5.16 | — | — | #hl moves to row 2 |
| 7.30 | — | — | slate calendar icon with cross draws at row 2 right |

## s155
Continues: s154
Section label: PART 7 · SERVICE STANDARDS
Idea: Branch Office adds 1 day; item conditions, address and PIN code must be right. In: cut. Framing: wide, still.
Layout: #conditions card exactly as s154 (row 1 sub-line, row 2 slate icon kept). Row 3 right: red stamp-edged chip "+1 दिन" 220×90 at x 1540–1760. Row 4 right: small ink envelope icon with "PIN" box at x 1640.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card as s154, #hl on row 2 |
| 0.10 | — | — | #hl moves to row 3 |
| 3.10 | — | — | "+1 दिन" chip stamps in |
| 4.50 | — | — | #hl moves to row 4 |
| 7.76 | — | — | envelope icon with PIN box draws at row 4 right |

## s156
Continues: s155
Section label: PART 7 · SERVICE STANDARDS
Idea: events beyond control (all six from the notes); then the worked example begins: Monday after cut-off, Tuesday a holiday. In: cut. Framing: wide, still. Sub-shots: #conditions 0, #calendar 7.40.
Layout: #conditions as s155; row 5 grey sub-lines 36 at x 260, y 860 "curfew · bandh · strike · transport रद्द होना" and y 915 "carrier का off-loading या non-carriage · force majeure". #calendar: red title "उदाहरण" y 205; `calendar-strip` scale 1.5, x 150–1770, y 300–690, tile centres x 330 / 750 / 1170 / 1590; each tile's day name (Hindi 44 white on its red band) and centre text (44) grouped with its #day-N, popped as one; tiles 3–4 come in s157; band space y 800–950 kept empty.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card as s155, #hl on row 4 |
| 0.56 | — | — | #hl moves to row 5; sub-line 1 reveals |
| 2.98 | — | — | sub-line 2 reveals |
| 7.40 | cut to #calendar | — | title "उदाहरण" |
| 8.58 | — | — | #day-1 "सोमवार" pops |
| 9.72 | — | — | its centre text "cut-off के बाद booking" fades |
| 11.80 | — | — | #day-2 "मंगलवार" pops |
| 12.80 | — | — | its centre text "public holiday" fades |

