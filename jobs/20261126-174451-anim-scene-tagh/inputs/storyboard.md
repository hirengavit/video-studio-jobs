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
## s072
Continues: s071
Section label: PART 3 · TARIFF
Idea: POD or insurance are charged separately; now the Speed Post Parcel, whose retail and contractual tariffs differ. In: cut. Framing: wide, still.
Photo: india-post-parcel — cut-out, white border, soft shadow, tilted 2°, x 160–760, y 300–700, grey caption "Speed Post parcel" (drawn `speed-post-parcel` if missing).
Layout: shot #sum (0–5.39) plus a grey dashed line y 940 inside the card: "+ POD / insurance → charge अलग से" (Hindi 40, supporting grey). Shot #parcel (5.39): right side x 860–1780: term "Speed Post Parcel" (English 64 bold) y 360, "स्पीड पोस्ट पार्सल" (red 44) y 430; two pills y 560–680: "retail · खुदरा" (x 880–1240) and "contractual · अनुबंध" (x 1400–1780), "≠" (ink 72) between.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | sum card with ₹29; POD line fades |
| 3.72 | — | — | "charge अलग से" highlight |
| 5.39 | — | — | cut to #parcel: photo pop and term types |
| 6.13 | — | — | Hindi term fades |
| 8.33 | — | — | "retail" pill pop |
| 9.27 | — | — | "contractual" pill pop |
| 10.47 | — | — | "≠" pop |

## s073
Continues: no
Section label: PART 3 · TARIFF
Idea: the parcel's four area categories; West Zone has four Circles. In: cut. Framing: wide, still.
Layout: heading "Speed Post Parcel · इलाके की 4 categories" (red 48) y 215. Four cards 400×200 at x 130 / 560 / 990 / 1420, y 260–460: "Local / स्थानीय", "Within State / राज्य के अंदर", "Zone / Metro · ज़ोन / मेट्रो", "Other States / अन्य राज्य" (English 46 bold, Hindi 36). Lower left panel #west (envelope #f3ead6) x 130–920, y 510–860: "West Zone · पश्चिमी ज़ोन" header; a thin ink line joins it up to card 3.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on |
| 1.64 | — | — | card "Local" pop |
| 3.28 | — | — | card "Within State" pop |
| 4.54 | — | — | card "Zone / Metro" pop |
| 6.96 | — | — | card "Other States" pop |
| 8.20 | — | — | card 3 yellow outline; join line draws; panel #west fades with header |

## s074
Continues: s073
Section label: PART 3 · TARIFF
Idea: West Zone = Gujarat, Maharashtra, Madhya Pradesh, Rajasthan; six parcel metros; zone before metro. In: cut. Framing: wide, still.
Layout: as s073. In #west a 2×2 grid of white chips (English 44, Hindi 36): Gujarat/गुजरात, Maharashtra/महाराष्ट्र, Madhya Pradesh/मध्य प्रदेश, Rajasthan/राजस्थान. Right panel #metros x 980–1790, y 510–860: `india-outline-map` scale 0.42 at x 1000–1300, six red pins on its anchors, a list beside it (x 1340–1780, 44 px): Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad. Priority band #prio x 130–1790, y 885–975: "पहले" + pill "Zone" + arrow + "फिर" + pill "Metro".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | categories and West Zone panel; "Gujarat" chip pop |
| 0.74 | — | — | "Maharashtra" chip pop |
| 1.90 | — | — | "Madhya Pradesh" chip pop |
| 3.20 | — | — | "Rajasthan" chip pop |
| 4.08 | — | — | #metros panel fades with map |
| 5.50 | — | — | six pins + names pop, stagger 0.15 |
| 8.04 | — | — | band #prio fades with "पहले" |
| 12.60 | — | — | "Zone" pill pop |

