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
## s101
Continues: no
Section label: RECAP · PARTS 3–4
Idea: recap, second envelope: air route with the faster-surface exception; SMS gives status, POD gives proof. In: cut. Framing: wide, still.
Component: recap-card — flap "RECAP · दोहराव", title "Transmission और Tracking", seal "2"; two rows (row height 220), card sized for them.
Layout: envelope card x 160–1300, y 200–900 (flap y 200–360); rows at y 400 and y 640; `speed-post-emblem` scale 0.9 right x 1360–1828, y 380–704, resting on a light ground line y 704. Row 1: "Transmission" Inter 48 bold, Hindi "प्रेषण" 40 px; pill "हवाई · तेज़ surface अपवाद". Row 2: "SMS · POD" Inter 48 bold; two pills "SMS = status" and "POD = सबूत".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card and emblem; row 1 "Transmission" with Hindi |
| 0.50 | — | — | pill part "हवाई" pops |
| 1.56 | — | — | pill part "तेज़ surface अपवाद" pops |
| 3.74 | — | — | green tick on row 1 |
| 4.40 | — | — | row 2 term fades; pill "SMS = status" pops 4.78 |
| 6.66 | — | — | pill "POD = सबूत" pops |
| 8.20 | — | — | green tick on row 2 |
## s102
Continues: no
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Part 5 opens; the five business facilities start as a numbered list, first Free pickup. In: fade (0.5). Framing: wide, still. Sub-shots: #title 0, #list 2.56.
Component: chapter-title — "PART 5 · भाग 5", title "Business customers", Hindi "व्यापारिक ग्राहक और volume discount", progress "Part 5 of 11 · भाग 5 / 11", `speed-post-emblem` in the stamp window, value "05".
Photo: india-post-delivery-van — cut-out (white border, 1° tilt, grey caption "Pickup") in the detail card; drawn ink van if missing.
Layout: #list: left list card x 100–940, five rows at y 230/400/570/740/910 (red number badge 64 px at x 100, English term 48 bold from x 190, Hindi 36 beneath). Right detail card x 1000–1820, y 180–980 (photo y 220–560, text y 620–720, chips y 800–900).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title kicker, emblem stamp, English title on screen |
| 0.40 | — | — | Hindi title fades, yellow underline draws |
| 1.46 | — | — | subtitle "5 सुविधाएँ" fades on "पाँच" |
| 2.56 | cut to #list | — | list card with five number badges (1 red, 2–5 grey) |
| 3.32 | — | — | row 1 "Free pickup" fades; "मुफ़्त pickup" at 3.68 |
| 4.48 | — | — | detail card + van photo pop; "Corporate और bulk customers के यहाँ से" words |
| 7.66 | — | — | chip "on-call · बुलाने पर" pops |
| 8.30 | — | — | chip "regular collection · नियमित संग्रह" pops |

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

