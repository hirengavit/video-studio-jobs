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
## s070
Continues: s069
Section label: PART 3 · TARIFF
Idea: ₹93; then adding services raises the amount, starting from a ₹19 local document. In: cut. Framing: wide, still.
Layout: shot #examples (0–4.95). Shot #sum (4.95): white receipt-style card x 360–1560, y 190–970 (ink outline, dashed tear line at its foot); title "Services जोड़िए → रकम बढ़ती है" (red 50) y 260; line 1 y 380: "50 g · Local Speed Post Document" (English 46) left, amount right-aligned at x 1460 (Inter 64).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table; "₹93" pops in row 4 |
| 0.90 | — | — | "₹93" pulse (key fact holds to 4.95) |
| 4.95 | — | — | cut to #sum: card, title, line 1 text |
| 7.55 | — | — | "₹19" pops at line 1's right |

## s071
Continues: s070
Section label: PART 3 · TARIFF
Idea: + registration ₹5 + OTP delivery ₹5 = ₹29 before GST. In: cut. Framing: wide, still; slow push-in 5% on #total from 7.1, back to 1 by 10.2.
Layout: #sum as s070. Line 2 y 520: "+ Registration" (46 bold) with "पंजीकरण" (36) beneath, "₹5" right. Line 3 y 660: "+ OTP delivery" with "OTP से वितरण" beneath, "₹5" right. Ink rule y 760 (x 420–1500). #total y 850: "कुल" (Hindi 48) left, "₹29" (Inter 80 red) right; chip "GST से पहले" (amber on #fde9a6) beside it at x 900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | sum card with line 1 and ₹19 |
| 1.26 | — | — | line 2 "+ Registration" fades |
| 2.72 | — | — | "₹5" pops |
| 4.56 | — | — | line 3 "+ OTP delivery" fades |
| 5.90 | — | — | "₹5" pops |
| 7.10 | — | — | rule draws; "कुल" fades |
| 7.46 | — | — | "₹29" counts from 19 |
| 8.84 | — | — | "GST से पहले" chip pop |

## s072
Continues: s071
Section label: PART 3 · TARIFF
Idea: POD or insurance are charged separately; now the Speed Post Parcel, whose retail and contractual tariffs differ. In: cut. Framing: wide, still.
Photo: india-post-parcel — cut-out, white border, soft shadow, tilted 2°, x 160–760, y 300–700, grey caption "Speed Post parcel" (drawn `speed-post-parcel` if missing).
Layout: shot #sum (0–5.39) plus a grey dashed line y 940 inside the card: "+ POD / insurance → charge अलग से" (Hindi 40, supporting grey). Shot #parcel (5.39): right side x 860–1780: term "Speed Post Parcel" (English 64 bold) y 360, "स्पीड पोस्ट पार्सल" (red 44) y 430; two pills y 560–680: "retail · खुदरा" (x 880–1240) and "contractual · अनुबंध" (x 1400–1780), "≠" (ink 72) between.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | sum card with ₹29; POD line fades |
| 3.72 | — | — | "charge अलग से" highlight |
| 5.39 | — | — | cut to #parcel: photo pop and term types |
| 6.13 | — | — | Hindi term fades |
| 8.33 | — | — | "retail" pill pop |
| 9.27 | — | — | "contractual" pill pop |
| 10.47 | — | — | "≠" pop |

