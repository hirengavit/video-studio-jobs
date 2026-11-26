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
## s056
Continues: no
Section label: PART 3 · TARIFF
Idea: Part 3 opens; the postage depends on three things (product, chargeable weight, distance/area category). In: fade. Framing: wide, still.
Component: chapter-title — kicker "PART 3 · भाग 3", title "Speed Post / Tariff", Hindi "स्पीड पोस्ट का शुल्क" (yellow underline draws on), subtitle "Postage कैसे तय होता है", dots "भाग 3 / 11"; stamp window holds `speed-post-emblem`, value "03". Shot #title 0–4.27.
Layout: shot #title as the component. Shot #factors (4.27): heading "Postage · तीन बातें" (red, 56 px) at y 230; three white cards 500×320 at x 140, 710, 1280, y 290–610 (kept there in s057), each a red number badge, an ink icon (envelope+parcel, `parcel-scale`, small `india-outline-map`) and words beneath: "Product · उत्पाद", "charge वाला वजन", "दूरी / इलाके की category".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title fades in with stamp and title |
| 0.80 | — | — | Hindi title underline draws |
| 1.69 | — | — | subtitle fades |
| 4.27 | — | — | cut to #factors: heading + card 1 "Product" pop |
| 4.84 | — | — | card 2 "charge वाला वजन" pop |
| 6.95 | — | — | card 3 "दूरी / इलाके की category" pop |
| 8.48 | — | — | "category" highlight |

## s057
Continues: s056
Section label: PART 3 · TARIFF
Idea: customer type (retail / contractual bulk) also matters; one product's tariff never applies to another. In: cut. Framing: wide, still.
Layout: #factors exactly as s056 (heading y 230, cards y 290–610). Sand strip #cust x 140–1780, y 640–760: "Customer:" (Hindi 40) + two pills "retail · खुदरा" and "contractual bulk · अनुबंध (थोक)". White rule line #one y 800–960: tag "Speed Post Document" → arrow → tag "Speed Post Parcel", Hindi caption "एक product का tariff, दूसरे पर नहीं".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading and three factor cards carried over; strip #cust fades with "retail" pill |
| 1.27 | — | — | "contractual bulk" pill pop |
| 3.69 | — | — | Hindi "इससे भी फ़र्क पड़ता है" fades in strip's right end |
| 5.43 | — | — | tag "Speed Post Document" pop |
| 6.88 | — | — | arrow draws, tag "Speed Post Parcel" pop |
| 8.17 | — | — | arrow strike (slate) + slate cross; Hindi caption fades |

## s058
Continues: no
Section label: PART 3 · TARIFF
Idea: each product has its own table in Schedule I; the six-row list on screen; Table IV A for the ordinary document. In: cut. Framing: wide, still.
Layout: document card #sched (white, #ead9a8 border) x 120–1800, y 175–985. Title "Schedule I · Tariff tables" (Georgia 50, red) y 230. Header row y 270–320 grey caps: "PRODUCT · उत्पाद" / "TABLE" / "से लागू". Six rows 100 px each from y 330 (English 46 bold, Hindi 36 beneath; table Georgia 56 at x 1300; date x 1560): 1 Ordinary Speed Post Document · साधारण दस्तावेज · IV A · 1 Oct 2025; 2 Speed Post Parcel (retail + contractual) · पार्सल · IV · 1 Aug 2026; 3 24 Speed Post Document (retail) · IV B · 1 Aug 2026; 4 48 Speed Post Document (retail) · IV C · 1 Aug 2026; 5 24 Speed Post Parcel · IV D · 17 Mar 2026; 6 24 & 48 Document (contractual bulk) · IV E, IV F · 1 Aug 2026. Source y 955 grey 28: "Post Office Regulations 2024, Schedule I, as amended 2025–2026".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card #sched with title and header row already on |
| 2.12 | — | — | "Schedule I" underline |
| 3.46 | — | — | six rows fade in, stagger 0.2 |
| 4.96 | — | — | source line fades |
| 7.67 | — | — | row 1 highlight band |
| 10.17 | — | — | "IV A" pulse |

