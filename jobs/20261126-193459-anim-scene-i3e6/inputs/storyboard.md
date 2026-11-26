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
## s103
Continues: s102
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Facility 2, BNPL: credit by agreement, paid by set billing, not at the counter each time. In: cut. Framing: wide, still. Sub-shots: #list 0 (list card), #d2 1.22 (new detail card, same place x 1000–1820).
Layout: list card as s102. #d2: `invoice-sheet` (scale 0.8, header "Bill") at x 1040–1280, y 240–560; lines right of it x 1310–1790 at y 330/430; bottom rows full card width at y 720 and 840.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | list card carried (row 1 done), van detail card carried; row 1 colours to grey #6f6a63, badge 2 turns red |
| 1.22 | cut to #d2 | — | row 2 "Book Now Pay Later" fades; #d2 card with invoice-sheet |
| 3.16 | — | — | "(BNPL)" pill pops beside row 2; Hindi "अभी बुक, बाद में भुगतान" fades 3.50 |
| 5.38 | — | — | "Department से agreement" words |
| 6.40 | — | — | "credit की सुविधा" yellow chip pops |
| 9.54 | — | — | "हर booking पर counter पर भुगतान" fades |
| 10.24 | — | — | slate strike on it |
| 11.28 | — | — | "तय billing से भुगतान" fades with green tick (12.44) |

## s104
Continues: s103
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Facilities 3 and 4: Volume discount for eligible contractual customers; National Account Facility, centralised account and billing. In: cut. Framing: wide, still. Sub-shots: #d2 0 (carried), #d3 1.18, #d4 5.20 (each a detail card at x 1000–1820).
Layout: list card as s102. #d3: `rupee-deposit` (scale 1.6) top centre y 240–500; text y 600–760. #d4: drawn ink office-building icon (3 px, sand fill) y 240–520; text y 600; two chips y 760–880.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | list (rows 1–2) and BNPL detail card carried; row 2 colours grey at 0.20 |
| 1.18 | cut to #d3 | — | row 3 "Volume discount" + "मात्रा छूट" fades; #d3 card with rupee-deposit |
| 2.66 | — | — | "eligible contractual customers को" words |
| 5.20 | cut to #d4 | — | row 3 grey; #d4 card with building icon |
| 6.12 | — | — | row 4 "National Account Facility" fades; "राष्ट्रीय खाता सुविधा" 6.64 |
| 8.28 | — | — | "Corporate customer के लिए" words |
| 10.06 | — | — | chip "centralised account · केंद्रीकृत खाता" pops |
| 12.18 | — | — | chip "billing" pops |

## s105
Continues: s104
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Facility 5, COD; the Post Office collects a set sum from the addressee on delivery. In: cut. Framing: wide, still. Sub-shots: #list 0 (list card + #d4 card), #cod 4.59.
Layout: #cod: title "Cash on Delivery (COD)" 56 bold y 210, Hindi "डिलीवरी पर नकद भुगतान" 40 y 268. Flow left→right at y 470: round ink nodes (dia 200) Addressee x 340, Post Office x 960, Sender x 1580, labels under each (English 44 + Hindi 36: प्राप्तकर्ता / डाकघर / प्रेषक). Lower band y 700–960 kept free for s106.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | list (rows 1–4) and NAF detail card carried; row 4 colours grey at 0.40 |
| 1.44 | — | — | row 5 "Cash on Delivery" fades, badge 5 red |
| 3.30 | — | — | "(COD)" pill pops; Hindi "डिलीवरी पर नकद" 3.60 |
| 4.59 | cut to #cod | — | COD title + Post Office node (post-box icon) |
| 5.79 | — | — | Post Office node pulse |
| 7.53 | — | — | Addressee node (house icon) pops |
| 8.75 | — | — | arrow Addressee → Post Office draws; `rupee-deposit` pops on it |
| 9.15 | — | — | "तय रकम" label fades above the arrow |

