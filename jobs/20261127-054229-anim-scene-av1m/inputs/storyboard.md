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
## s189
Continues: s188
Section label: RECAP · PARTS 7–8
Idea: rows 4–5: 24 SP Parcel 5 kg; Ahmedabad has 24 Speed Post Document. In: cut. Framing: wide, still.
Layout: s188's envelope as placed. Row 4 "24 Speed Post Parcel" + "24 स्पीड पोस्ट पार्सल", pill "5 kg तक". Row 5 "Ahmedabad" + "अहमदाबाद", pill "24 Speed Post Document".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried envelope, rows 1–3 ticked; row 4 term fades in |
| 2.08 | — | — | pill "5 kg तक" pops |
| 2.76 | — | — | row 4 tick draws green |
| 3.46 | — | — | row 5 term fades in |
| 4.74 | — | — | pill "24 Speed Post Document" pops |
| 6.74 | — | — | row 5 tick draws green; all five rows hold to the cut |
## s190
Continues: no
Section label: PART 9 · INSURANCE
Idea: Part 9 opens; article insurance is not PLI/RPLI. In: fade 0.5. Framing: wide, still. Sub-shots: #title 0, #notlife 6.68.
Component: chapter-title — kicker "PART 9 · भाग 9", title "Article Insurance", Hindi "बीमा" (yellow underline), subtitle line replaced by Hindi "सफ़र में loss या damage से पैसे की सुरक्षा", dots "Part 9 of 11 · भाग 9 / 11"; stamp value "09" with `speed-post-emblem` drawn on.
Layout: #title: text block x 120–1060, stamp x 1180–1780 y 220–900. #notlife: left white card x 120–860 y 260–860 (`insured-envelope-emblem` scale 0.9 top, "Article insurance" 56 bold); big ink "≠" x 960; right column x 1060–1800: two sand cards y 260–540 / 580–860.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #title: kicker, "Article Insurance", stamp with emblem |
| 0.42 | — | — | "बीमा" fades, underline draws |
| 1.50 | — | — | Hindi subtitle words; highlight "loss या damage" at 2.98 |
| 6.68 | cut to #notlife | — | Article insurance card present; "≠" pops |
| 7.02 | — | — | "Postal Life Insurance" / "डाक जीवन बीमा" fades |
| 9.18 | — | — | "Rural Postal Life Insurance" / "ग्रामीण डाक जीवन बीमा" fades |
| 11.24 | — | — | grey pill "अलग चीज़" pops under "≠" |

## s191
Continues: no
Section label: PART 9 · INSURANCE
Idea: insurance is usually optional; for some valuables it is compulsory. In: cut. Framing: wide, still.
Photo: gold-jewellery — cut-out (`gold-jewellery-cutout`, vs-cutout filter), 440 wide, tilted 1.5°, grey caption.
Layout: left white card x 120–920 y 180–800: `speed-post-parcel` (scale 1) top centre, "Ordinary Speed Post item" 52 bold, pill row y 680. Right white card x 1000–1800 y 180–800: photo top, "कीमती सामान" 48, pill row y 680. Band y 840–980 kept empty for s192.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card with parcel and "Ordinary Speed Post item" |
| 1.92 | — | — | sand pill "insurance:" pops in left card |
| 3.98 | — | — | "आम तौर पर वैकल्पिक" fades into the pill |
| 5.10 | — | — | right card pops; photo fades |
| 6.04 | — | — | "कीमती सामान" fades |
| 7.88 | — | — | red pill "insurance ज़रूरी" stamps |

