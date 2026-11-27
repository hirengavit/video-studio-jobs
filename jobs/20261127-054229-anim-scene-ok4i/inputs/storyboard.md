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
## s187
Continues: no
Section label: RECAP · PARTS 7–8
Idea: recap of standards and premium services; row 1, ordinary times. In: wipe (from right). Framing: wide, still.
Component: recap-card — 5 rows (Hindi 36 px; row 2 two lines tall), seal "5", title on flap "Part 7 और Part 8"; ticks draw green as each row finishes.
Layout: envelope card x 120–1480, y 170–960; flap y 170–310 with "RECAP · दोहराव" and red title; rows y 320–440 / 440–610 / 610–730 / 730–840 / 840–950; term column x 170–640, pill column x 660–1360, tick x 1410. `speed-post-emblem` scale 0.55 at (1650, 600).
Row 1: "Ordinary Speed Post" + "साधारण स्पीड पोस्ट"; pills "Local 1–2 दिन" and "बाकी देश 4–5 दिन".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card with flap title and seal; emblem |
| 1.36 | — | — | highlight "Part 7" on flap title |
| 2.76 | — | — | highlight "Part 8" |
| 6.96 | — | — | row 1 term fades in |
| 8.08 | — | — | pill "Local 1–2 दिन" pops |
| 11.14 | — | — | pill "बाकी देश 4–5 दिन" pops |
| 12.78 | — | — | row 1 tick draws green |

## s188
Continues: s187
Section label: RECAP · PARTS 7–8
Idea: row 2 counting rules; row 3 premium 24/48. In: cut. Framing: wide, still.
Layout: s187's envelope as placed. Row 2 term "दिनों की गिनती"; pills (stacked) "नहीं गिनते: cut-off बाद का दिन, रविवार, छुट्टी" and "Branch Office +1 दिन". Row 3 term "24 / 48 Speed Post"; pills "24: अगला दिन", "48: 2 working days".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried envelope, row 1 ticked; row 2 term and first pill fade in |
| 2.16 | — | — | highlight "रविवार, छुट्टी" in pill |
| 4.54 | — | — | pill "Branch Office +1 दिन" pops |
| 7.04 | — | — | row 2 tick draws green |
| 7.78 | — | — | row 3 term fades in |
| 8.68 | — | — | pill "24: अगला दिन" pops |
| 10.64 | — | — | pill "48: 2 working days" pops |
| 12.40 | — | — | row 3 tick draws green |

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
