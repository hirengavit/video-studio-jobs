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
## s197
Continues: s196
Section label: PART 9 · INSURANCE
Idea: notes go as insured items; their limit is ₹20,000, not ₹5 lakh. In: cut. Framing: wide, still.
Layout: s196 cards exactly; right pill row gets "→ insured item" beside "तय खास तरीके से". Band y 850–990: "Notes की limit:" 44 at x 300, green pill "₹20,000" x 760–1060, sand pill "₹5 लाख" x 1160–1460.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both s196 cards with chips and pills |
| 0.00 | — | — | "→ insured item" fades in right pill row |
| 2.90 | — | — | "Notes की limit:" fades |
| 3.94 | — | — | green pill "₹20,000" pops, tick draws |
| 6.12 | — | — | pill "₹5 लाख" pops |
| 7.80 | — | — | slate strike + slate cross on "₹5 लाख" |

## s198
Continues: no
Section label: PART 9 · INSURANCE
Idea: insurance fee: ₹4 up to ₹200; above, ₹4 + 1.50% of the part over ₹200. In: cut. Framing: wide, still.
Layout: title y 170–240 "Insurance fee · बीमा शुल्क" (red, with `insured-envelope-emblem` scale 0.25 at right). Two wide tiers x 120–1800: tier 1 white y 280–480 ("insured value ₹200 तक" left 48 | big "₹4" right 96); tier 2 white y 520–760 ("₹200 से ऊपर" left | "₹4 + ₹200 से ऊपर वाले हिस्से का 1.50%" right, 52). Band y 800–960 empty for s199.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title with emblem; tier 1 card |
| 0.78 | — | — | "insured value" types |
| 1.78 | — | — | "₹200 तक" fades |
| 3.62 | — | — | "₹4" pops |
| 4.56 | — | — | tier 2 card pops with "₹200 से ऊपर" |
| 6.58 | — | — | "₹4" fades |
| 7.66 | — | — | "+ ₹200 से ऊपर वाले हिस्से का" words |
| 11.22 | — | — | "1.50%" pops, highlighted |

## s199
Continues: s198
Section label: PART 9 · INSURANCE
Idea: fee is over postage + registration, tax extra; worked example ₹1,000. In: cut. Framing: wide, still. Sub-shots: #rule 0 (s198 as is), #work 4.74.
Component: formula-card — left red stamp card "FEE · शुल्क" with the two tiers ("₹200 तक → ₹4", "ऊपर → ₹4 + ऊपर वाले हिस्से का 1.50%"); right white working card, Georgia lines, equals aligned; no letter key, no follow-on box.
Layout: #rule: s198 exactly + grey band y 800–900 "postage + registration fee के ऊपर · tax अलग". #work: stamp card x 100–720 y 170–990; working card x 780–1820 y 170–990: question "₹1,000 का सामान" y 260, lines y 420 / 560 / 700, green pill y 840.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s198 title and both tiers |
| 0.38 | — | — | band "postage + registration fee के ऊपर" words |
| 3.96 | — | — | "· tax अलग" fades |
| 4.74 | cut to #work | — | stamp card with tiers; working card |
| 6.06 | — | — | "₹1,000 का सामान" fades |
| 7.82 | — | — | "₹1,000 − ₹200" types |
| 10.38 | — | — | "= ₹800" pops |
| 12.58 | — | — | "₹800 × 1.50%" types (line 2) |

