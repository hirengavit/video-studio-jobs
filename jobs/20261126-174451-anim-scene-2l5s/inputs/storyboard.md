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
## s106
Continues: s105
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: The money goes on to the sender; COD needs an agreement with the postal authority and no prohibited goods. In: cut. Framing: wide, still.
Layout: #cod as s105. Lower band: two condition cards (white, #ead9a8 border) x 120–930 and x 990–1800, y 700–960, each an icon at left and two lines of Hindi 40.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | COD title, three-node flow with Addressee and Post Office nodes, rupee on the first arrow, "तय रकम" carried |
| 0.44 | — | — | Sender node (person-with-envelope ink icon) pops |
| 0.98 | — | — | arrow Post Office → Sender draws; second rupee-deposit pops on it |
| 2.12 | — | — | card 1 fades: small document icon |
| 2.80 | — | — | "postal authority से agreement" words |
| 4.50 | — | — | green tick on card 1 |
| 6.10 | — | — | card 2 fades: parcel icon; "Item में मना सामान" words |
| 7.26 | — | — | slate cross on the parcel icon; "नहीं" in slate |

## s107
Continues: no
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: COD and Insurance are different: COD collects money, Insurance (the sender's own choice) covers eligible loss or damage. In: cut. Framing: wide, still.
Component: compare-cards — drop the question and the takeaway; left card COD (red band, "Cash on Delivery", Hindi "डिलीवरी पर नकद"), right Insurance (yellow band, "बीमा"); one fact each, Hindi 40; VS disc between.
Layout: cards x 140–900 and x 1020–1780, y 220–960; band y 220–360; icon y 420–620; fact y 700–860.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both card frames and VS disc; COD band filled; Insurance band name pops |
| 1.60 | — | — | chip "sender चुन सकता है · वैकल्पिक" pops under Insurance band |
| 3.12 | — | — | COD: `rupee-deposit` pops |
| 3.98 | — | — | "पैसा वसूलता है" words |
| 5.22 | — | — | Insurance: `insured-envelope-emblem` pops |
| 6.40 | — | — | "eligible loss या damage से बचाता है" words; highlight "बचाता" at 8.08 |

## s108
Continues: no
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: The BNPL condition: ₹10,000 of Speed Post Document business a month at one booking office. In: cut. Framing: wide, still.
Layout: left x 140–900: "BNPL" 72 bold y 250, "Book Now Pay Later" 44 y 315, "अभी बुक करें, बाद में भुगतान" 38 y 370; three condition rows with ink icons at y 520/650/780 (Hindi 40). Right: `key-fact-stamp` (scale 1.2, 672×408) x 1060–1732, y 280–688; source grey 30 y 760 "BNPL instructions, 16 Dec 2024". Space y 820–940 under the stamp kept for s109.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | BNPL title block on screen |
| 1.58 | — | — | "शर्त" label (red caps) fades above the rows |
| 2.12 | — | — | row 1 building icon + "एक booking office पर" |
| 4.00 | — | — | row 2 calendar icon + "हर महीने" |
| 5.44 | — | — | key-fact-stamp stamps in: "₹10,000" white 150 px, pale-yellow "हर महीने का business" |
| 6.38 | — | — | row 3 envelope icon + "Speed Post Document" 48 bold |
| 7.62 | — | — | source line fades |

