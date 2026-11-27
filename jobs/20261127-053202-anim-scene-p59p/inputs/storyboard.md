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
## s157
Continues: s156
Section label: PART 7 · SERVICE STANDARDS
Idea: Monday and Tuesday not counted; Wednesday day 1, Thursday day 2; only a counting method, no route guarantee. In: cut. Framing: wide, still.
Layout: #calendar exactly as s156 (title, tiles 1–2 with texts). Slate crosses over tiles 1–2 centre (160×160). #day-3 "बुधवार", centre "दिन 1" ink 80 bold; #day-4 "गुरुवार", centre "दिन 2". Sand band x 140–1780, y 800–950: "सिर्फ गिनने का तरीका · किसी route की guarantee नहीं" 48.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title, सोमवार and मंगलवार tiles with their texts |
| 2.68 | — | — | both tile texts strike (slate, dim); slate crosses draw, stagger 0.2 |
| 3.72 | — | — | #day-3 बुधवार pops |
| 4.28 | — | — | "दिन 1" pops |
| 5.58 | — | — | #day-4 गुरुवार pops |
| 6.20 | — | — | "दिन 2" pops |
| 7.18 | — | — | band slides up, first half words in |
| 9.40 | — | — | "किसी route की guarantee नहीं" words in |
| 10.32 | — | — | underline on "guarantee नहीं" |

## s158
Continues: no
Section label: PART 7 · SERVICE STANDARDS
Idea: ordinary ranges are broad categories, not a premium promise: Local 1–2 days ≠ a 24 Speed Post booking. In: cut. Framing: wide, still.
Layout: left white card x 140–900, y 220–860, sand header (y 220–360) "Ordinary Speed Post" 52 bold ink + "साधारण स्पीड पोस्ट" 36; lines 44 at y 450 / 560 / 670 / 790. Right white card x 1020–1780, same height, red header "24 Speed Post" white 52 with "24" red badge, pale-yellow "24 स्पीड पोस्ट" 36. Ink "≠" disc dia 120 at (960, 790).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card with header |
| 0.46 | — | — | "दिन की ranges" fades |
| 1.90 | — | — | "मोटी categories" fades |
| 3.04 | — | — | "premium का वादा नहीं" (slate) fades |
| 4.38 | — | — | slate cross draws beside it |
| 5.20 | — | — | "Local: 1–2 दिन" 56 bold pops at y 790 |
| 7.38 | — | — | right card pops; "अलग booking, खास वादा" at y 790 |
| 9.36 | — | — | ≠ disc stamps |

## s159
Continues: no
Section label: PART 7 · SERVICE STANDARDS
Idea: at acceptance the real office connection and route instructions are checked; then the exam-angle summary starts. In: cut. Framing: wide, still. Sub-shots: #counter 0, #exam 6.13.
Layout: #counter: title "Item लेते समय यह भी देखा जाता है" 48 y 205; `booking-counter` scale 1.3 at x 160–992, y 330–876; right cards x 1100–1780: y 340–560 "असली office connection" (two small linked building icons), y 600–820 "route के निर्देश" (route arrow icon). #exam: red title "परीक्षा के लिए याद रखें" y 205; white card x 140–1780, y 250–850, five rows 120 tall (English 46 bold + Hindi 36: Local · स्थानीय / Metro to metro · मेट्रो से मेट्रो / Same State · State capitals / Rest of the country · बाकी देश / Branch Office · शाखा डाकघर); red stamp-edged value chips 240×90 at x 1480–1720; y 880–970 left free.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title, counter |
| 1.95 | — | — | card 1 pops |
| 3.52 | — | — | card 2 pops |
| 6.13 | cut to #exam | — | title and empty card frame |
| 7.19 | — | — | Local row fades |
| 7.67 | — | — | chip "1–2 दिन" pops |
| 9.91 | — | — | Metro row fades |
| 11.73 | — | — | chip "1–3 दिन" pops |

