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
## s081
Continues: s080
Section label: PART 3 · TARIFF
Idea: non-local ₹47 (GST extra); parcel retail and contractual tariffs differ; local = within identified PIN codes or municipal limits. In: cut. Framing: wide, still.
Layout: recap-card as s080; row 1 pill reads "₹19 · ₹47" with small "GST अलग" (grey 36) under it.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope with row 1, slab chips, pill "₹19" |
| 0.56 | — | — | "· ₹47" fades into the pill |
| 2.02 | — | — | "GST अलग" fades; row 1 green tick draws |
| 3.14 | — | — | row 2 "Speed Post Parcel" fades |
| 4.68 | — | — | pill "retail ≠ contractual" pop |
| 6.44 | — | — | row 2 tick |
| 7.30 | — | — | row 3 "Local" fades |
| 8.58 | — | — | pill "तय PIN codes / municipal सीमा" pop |
| 13.18 | — | — | row 3 tick |
## s082
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: Part 4 opens, then what the booking office does: takes the item, records it, hands a receipt. In: fade (0.5). Framing: wide, still.
Component: chapter-title — kicker "PART 4 · भाग 4", title "Booking, Transmission & Tracking", Hindi "बुकिंग, प्रेषण और ट्रैकिंग", progress "Part 4 of 11 · भाग 4 / 11"; stamp holds `speed-post-emblem`, value "04".
Layout: shot #title (whole frame). Shot #counter: `booking-counter` x 120–856, y 440–923 (scale 1.15), `speed-post-parcel` (scale 0.5) on its ledge; 3-step card right x 960–1800, y 200–760 (red badges, Hindi 44 px); yellow note strip x 960–1800, y 800–940.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title fades in, stamp emblem drawn |
| 0.36 | — | — | Hindi title underline draws |
| 2.56 | — | — | cut to #counter: counter, parcel on ledge, step 1 "eligible item लेना" |
| 3.08 | — | — | step 2 "booking दर्ज करना" pops |
| 4.72 | — | — | step 3 "receipt देना" pops |
| 4.98 | — | — | `receipt-slip` (scale 0.6) slides up out of the opening onto the ledge |
| 6.30 | — | — | note "Receipt: जाँचिए और संभालिए" reveals; 7.68 underline "संभालिए" |

## s083
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: the receipt carries the article number: needed for tracking, the proof in a complaint or claim; it has 13 characters. In: cut. Framing: wide, still.
Layout: shot #why: `receipt-slip` scale 1.7 left x 160–602, y 250–896 (barcode band outlined yellow); term block right x 720–1780, y 220–420 ("Article number" Inter 72 bold, Hindi "हर item की अलग पहचान संख्या" 40 px); three chips in a row y 520–640 (x 720/1080/1440, 320 wide); red round postmark "सबूत" x 1500, y 800. Shot #count: `key-fact-stamp` centred x 680–1240, y 170–510; 13 white tiles (110×140, gap 12) x 166–1754, y 620–760, tiny grey 1–13 under each.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | receipt slip on the left |
| 0.44 | — | — | "Article number" reveals; barcode band highlight; Hindi fades 0.90 |
| 1.88 | — | — | chip "Tracking" pops |
| 4.04 | — | — | chip "Complaint" pops |
| 5.30 | — | — | chip "Claim" pops |
| 6.60 | — | — | postmark "सबूत" stamps |
| 7.60 | — | — | cut to #count: empty tile row outlines |
| 9.52 | — | — | stamp pops "13", pale-yellow line "characters" |
| 9.90 | — | — | tiles fill white with ink outline, stagger 0.06 (count left to right) |

