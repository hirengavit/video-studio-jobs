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
## s006
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: parts 2–5 named, building down the page. In: cut. Framing: wide, still.
Layout: parts strip exactly as s005 (dots 1–2 red). Four white part cards x 140–1780, 150 tall, at y 200 / 370 / 540 / 710: red badge (dia 90) at x 220, text 52 px from x 310.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | strip (1–2 red) + card 2 with badge "2" and "वजन," on screen |
| 0.01 | — | — | "नाप और charge वाला वजन" words in on card 2 |
| 2.23 | — | — | card 3 pops, badge "3"; dot 3 red |
| 3.41 | — | — | "tariff" fades in |
| 4.03 | — | — | card 4 pops, badge "4"; dot 4 red |
| 5.25 | — | — | "booking," fades in; "transmission" at 6.19; "और tracking" at 7.35 |
| 8.03 | — | — | card 5 pops, badge "5"; dot 5 red |
| 9.33 | — | — | "business customers की सुविधाएँ" words in |
| 12.05 | — | — | "और volume discount" fades in |

## s007
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: part 6, delivery and its four pieces; part 7, ordinary Speed Post delivery standards. In: cut. Framing: wide, still.
Layout: parts strip as before (1–5 red). Card 6 white x 140–1780, y 210–540: badge "6", "delivery" 60 px bold y 300; chip row y 440: "registration", "OTP", "POD" (with "वितरण का प्रमाण" 36 px under it), "delivery के प्रयास" (sand chips, 48 px). Card 7 x 140–1780, y 580–860: badge "7", text 52 px y 730.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | strip on screen; card 6 pops with badge "6"; dot 6 red |
| 1.32 | — | — | "delivery" fades in |
| 1.62 | — | — | chip "registration" pops |
| 3.52 | — | — | chip "OTP" pops |
| 4.77 | — | — | chip "POD" + Hindi pops |
| 6.24 | — | — | chip "delivery के प्रयास" pops |
| 7.74 | — | — | card 7 pops, badge "7"; dot 7 red |
| 8.90 | — | — | "ordinary Speed Post" words in; "के delivery standards" at 10.57 |

## s008
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: part 8, the two premium products and the Ahmedabad service; part 9, insurance. In: cut. Framing: wide, still.
Layout: parts strip (1–7 red). Card 8 white x 140–1780, y 210–560: badge "8"; row y 400: red square badge "24" + "Speed Post" 52 px, deep-red (#7d1414) badge "48" + "Speed Post", sand chip "Ahmedabad की service". Card 9 x 140–1780, y 600–860: badge "9", "insurance" 64 px bold, "बीमा" 40 px red under it.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | strip on screen; card 8 pops with badge "8"; dot 8 red |
| 0.41 | — | — | red "24" badge pops, "Speed Post" fades at 1.64 |
| 2.45 | — | — | deep-red "48" badge pops, "Speed Post" fades at 3.50 |
| 4.98 | — | — | chip "Ahmedabad की service" pops |
| 6.47 | — | — | card 9 pops, badge "9"; dot 9 red |
| 7.84 | — | — | "insurance" + "बीमा" fade in |

