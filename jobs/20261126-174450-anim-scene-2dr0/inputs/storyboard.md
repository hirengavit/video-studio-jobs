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
## s182
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: open to retail and bulk; full correct addresses and both mobile numbers needed. In: cut. Framing: wide, still.
Layout: top row y 200–300: grey "किसके लिए:" 40 px at x 120, chips "Retail ✓" and "Bulk ✓" (green ticks, 48 px) at x 520 and 820. Left: `domestic-envelope` scale 0.9 at (500, 640). Right white card x 1000–1800, y 380–920: red heading "ज़रूरी" 50 px; three rows y 500 / 650 / 800 (44 px Hindi, English terms inline): "Sender का पूरा, सही पता", "Recipient का पूरा, सही पता", phone icon + "दोनों के mobile numbers".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "किसके लिए:" and envelope |
| 0.34 | — | — | chip "Retail ✓" pops |
| 1.18 | — | — | chip "Bulk ✓" pops |
| 3.80 | — | — | card with heading fades in; row 1 Sender pops; envelope #sender-lines highlight |
| 4.76 | — | — | row 2 Recipient pops; envelope #addressee-lines highlight |
| 7.52 | — | — | row 3 phone + mobile numbers pops |

## s183
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: document limit 500 g; don't assume every Gujarat office gives every premium product. In: cut. Framing: wide, still.
Layout: top strip (sand, x 120–1800, y 180–270): green tick + "ज़रूरी: पूरे, सही पते · दोनों के mobile numbers" 40 px. Left: `key-fact-stamp` scale 1.1 at (440, 600): "500 g" 140 px, "Document की सीमा" 36 px. Right white card x 860–1800, y 340–900, slate edge: "मत मानिए" 48 px slate; two lines 48 px: "Gujarat का हर office" (y 560), "हर premium product देता है" (y 680); slate cross (dia 100) at (1700, 800).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | top strip with green tick (completes s182's sentence) |
| 2.72 | — | — | key-fact-stamp stamps in "500 g" (holds to cut) |
| 4.92 | — | — | warning card fades in with "मत मानिए" |
| 5.82 | — | — | "Gujarat का हर office" words |
| 7.44 | — | — | "हर premium product देता है" words |
| 9.16 | — | — | slate strike through both lines; slate cross draws |

## s184
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: check three things; then the exam angle: key limits. In: cut. Framing: wide, still. Sub-shots: #checks 0, #exam 6.32.
Component: exam-trap — banner becomes "Exam angle · परीक्षा के लिए" (no trap line yet); two cards become four fact rows, each with a small red perforated stamp at right carrying the value; the sand bar becomes the trap line (s186).
Layout #checks: three white cards (540×560) at x 120 / 690 / 1260, y 260–820: icons (post-office building; pin marker with "PIN"; `speed-post-emblem` scale 0.4); "Booking centre"/"बुकिंग केंद्र", "Destination PIN code"/"गंतव्य PIN code", "Product"/"उत्पाद" (50/36 px); yellow bracket under all y 870 with "तीनों देखिए" 48 px.
Layout #exam: red banner x 120–1800, y 170–260; rows y 280–400 / 410–530 / 540–660 / 670–790 (term 48 px + Hindi 36 px at x 180; stamp 260×100 at x 1500); trap bar y 820–960.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #checks: card 1 Booking centre |
| 1.78 | — | — | card 2 Destination PIN code pops |
| 4.06 | — | — | card 3 Product pops |
| 4.62 | — | — | bracket draws; "तीनों देखिए" words |
| 6.32 | — | — | cut to #exam: banner |
| 7.66 | — | — | row 1 "Premium documents" + "प्रीमियम दस्तावेज" fades in |
| 8.74 | — | — | stamp "500 g" stamps in |
| 10.62 | — | — | row 2 "24 Speed Post Parcel" fades in |
| 12.70 | — | — | stamp "5 kg" stamps in |

