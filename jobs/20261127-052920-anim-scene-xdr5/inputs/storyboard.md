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
## s145
Continues: no
Section label: PART 6 · DELIVERY
Idea: exam angle: Registration ₹5, OTP ₹5, GST extra on both; OTP given at delivery. In: cut. Framing: wide, still.
Component: exam-trap — only its red banner, "EXAM ANGLE · परीक्षा की नज़र से", no trap sentence; cards replaced by row cards.
Layout: banner x 120–1800, y 170–260; white row cards x 160–1760, 150 tall, at y 300 and 470 (term left, Hindi under, value right); bracket chip right; note under row 2 y 630–690. Rows 3–4 come in s146 at y 720 and 870.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner |
| 1.08 | — | — | row 1 "Registration · रजिस्ट्री" |
| 2.08 | — | — | "₹5" pops |
| 3.16 | — | — | row 2 "OTP" |
| 3.90 | — | — | "₹5" pops |
| 5.94 | — | — | bracket rows 1–2 + grey chip "GST अलग" |
| 7.16 | — | — | note "delivery के समय देना" |
| 8.22 | — | — | yellow band behind "delivery के समय" |

## s146
Continues: s145
Section label: PART 6 · DELIVERY
Idea: POD ₹10, free on insured items; 2 delivery attempts; Registration, OTP, SMS, POD are four separate facilities. In: cut. Framing: wide, still.
Layout: as s145 + row cards y 720 and 870 (each 130). B (cut 7.60): four tiles x 120–500, 547–927, 993–1373, 1420–1800, y 340–700; caption y 800–880.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried banner, rows 1–2; row 3 "POD" |
| 0.36 | — | — | "₹10" pops |
| 3.72 | — | — | green pill "insured item: free" |
| 4.46 | — | — | row 4 "Accountable item · delivery प्रयास" |
| 5.84 | — | — | "2" pops |
| 7.60 | cut B | — | tile "Registration" (red bar, icon) |
| 8.90 | — | — | tile "OTP" |
| 9.98 | — | — | tile "SMS" |
| 10.98 | — | — | tile "POD" |
| 11.66 | — | — | caption "चार अलग सुविधाएँ"; yellow underline at 12.72 |

## s147
Continues: no
Section label: RECAP · PARTS 5–6
Idea: recap of Part 5 (business): BNPL. In: wipe (from right). Framing: wide, still.
Component: recap-card — flap "RECAP · दोहराव", title "Part 5 · Business", seal "3"; 3 rows; `speed-post-emblem` small at flap's right.
Layout: envelope x 260–1660, y 170–980; rows at y 430, 610, 790 (180 each); pills right.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope, flap, title, seal, emblem |
| 1.54 | — | — | flap subline "business और delivery" fades |
| 6.70 | — | — | row 1 "BNPL" + Hindi "अभी बुक, बाद में भुगतान" |
| 7.66 | — | — | pill "1 office" |
| 10.76 | — | — | pill extends "· ₹10,000 / महीना" |
| 11.68 | — | — | pill "· Document"; green tick draws at 12.04 |

