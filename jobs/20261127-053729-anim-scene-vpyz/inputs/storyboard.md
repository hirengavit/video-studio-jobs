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
## s169
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: retail and agreement-holding bulk or corporate customers can both take premium documents; where they are booked is the question. In: cut. Framing: wide, still.
Layout: two white cards y 230–620: left x 140–900 "Retail customers" 52 bold + "खुदरा ग्राहक" 36, ink counter-window icon; right x 1020–1780 "Bulk / Corporate customers" 48 bold + "agreement वाले ग्राहक" 36, ink building icon. Green tick circles dia 90 at each card's top right. Line 48 centred y 700: "दोनों premium documents ले सकते हैं". Sand band x 140–1780, y 800–960: question at x 180–1100 "Ordinary और premium documents कहाँ book होंगे?" 44; right half kept for s170.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card |
| 2.04 | — | — | right card pops with "agreement वाले ग्राहक" |
| 3.12 | — | — | "Bulk" highlighted |
| 4.02 | — | — | "Corporate" highlighted |
| 5.74 | — | — | centre line fades |
| 7.12 | — | — | green ticks draw, stagger 0.2 |
| 8.04 | — | — | band slides up; question words in |

## s170
Continues: s169
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: Circle Heads decide those offices; then what premium services give: OTP delivery for premium documents and 24 SP Parcel. In: cut. Framing: wide, still. Sub-shots: #customers 0, #benefits 3.53.
Layout: #customers exactly as s169; answer in band x 1160–1740: "Circle Heads" 48 bold, "सर्किल प्रमुख तय करते हैं" 36. #benefits: red title "Premium services में क्या मिलता है?" y 205; white card x 120–1800, y 250–960, four rows 170 tall from y 260 (icons x 160–300, text x 330, pills x 1150–1760). Row 1: `otp-phone` scale 0.35, "OTP delivery" 52 bold; pills "Premium documents" and "24 Speed Post Parcel" (sand, 40).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both cards, ticks, line, question band |
| 1.00 | — | — | "Circle Heads" + Hindi pop in band |
| 3.53 | cut to #benefits | — | title words in, empty card |
| 5.61 | — | — | row 1 phone and "OTP delivery" pop |
| 7.37 | — | — | pill "Premium documents" pops |
| 9.33 | — | — | pill "24 Speed Post Parcel" pops |

## s171
Continues: s170
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: registration on premium documents is a separate value-added service, ₹5 + GST; real-time tracking and SMS alerts; delivery on Sundays and holidays. In: cut. Framing: wide, still.
Layout: #benefits card exactly as s170 (row 1 with pills). Row 2 (y 430): `rupee-deposit` scale 0.5, "Registration" 52 bold + "अलग value-added service" 36; red chip "₹5" + grey "GST अलग". Row 3 (y 600): ink handset-with-map-pin icon, "Real-time tracking · SMS alerts" 48 bold. Row 4 (y 770): ink calendar icon, "रविवार और छुट्टियों पर भी delivery" 44.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | benefits card, title, row 1 with both pills |
| 1.50 | — | — | row 2 "Registration" pops |
| 2.92 | — | — | its sub-line fades |
| 5.38 | — | — | "₹5" chip pops |
| 6.22 | — | — | "GST अलग" fades |
| 8.46 | — | — | row 3 pops |
| 11.12 | — | — | row 4 pops |

