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
## s173
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: what business customers get with premium services, then the delay refund. In: cut. Framing: wide, still.
Layout: left white card x 120–1120, y 190–940: red title "Business customers" 52 px y 260, Hindi "व्यापारिक ग्राहकों के लिए" 38 px y 312; four rows (120 tall, thin rules) at y 380 / 520 / 660 / 800, each a small red ink icon at x 180 and the English term 50 px bold, with grey Hindi 36 px beneath where given. Right sand panel (#f3ead6) x 1200–1800, y 300–820: clock icon top, "देरी हो, तो" 44 px, "पूरे postage का refund" 56 px, grey chip "शर्तों के साथ".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Card with title and row 1 "BNPL" + "अभी book, बाद में भुगतान" (carried over from the word "BNPL" in s172) |
| 1.08 | — | — | row 2 "Free pickup" + "bulk booking पर" pops |
| 2.08 | — | — | row 3 "API integration" pops |
| 4.36 | — | — | row 4 "Centralised billing" + "एक जगह bill" pops |
| 6.52 | — | — | right panel fades in with clock icon and "देरी हो, तो" |
| 8.94 | — | — | "पूरे postage का refund" words; highlight on "refund" |
| 9.40 | — | — | grey chip "शर्तों के साथ" fades in |

## s174
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: 24 Speed Post Parcel goes by air (except a faster surface route); it's charged on the higher of gross and volumetric weight. In: cut. Framing: wide, still.
Layout: title y 190–300: red badge "24" (120×90) at x 120, "24 Speed Post Parcel" 56 px bold beside it, Hindi "24 स्पीड पोस्ट पार्सल" 36 px beneath. Left zone x 120–1000, y 380–900: plane icon (the `transport-icons` #plane look, 280 px) at (330, 560) with "हवाई रास्ता" 44 px under it; truck icon at (780, 560) with "तेज़ surface route" 40 px under it and grey chip "अपवाद" below. Right white card x 1080–1800, y 380–900: "Charge" 52 px red; two boxes side by side "Gross weight" / "Volumetric weight" (48 px, Hindi "कुल वज़न" / "आयतन वज़न" 36 px); yellow-banded line "जो ज़्यादा, वही" 48 px at y 820. No numbers.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title with "24" badge |
| 1.94 | — | — | plane icon draws; "हवाई रास्ता" fades in |
| 3.92 | — | — | truck icon draws; "तेज़ surface route" fades in |
| 5.48 | — | — | chip "अपवाद" pops |
| 7.32 | — | — | Charge card fades in with heading |
| 7.66 | — | — | "Gross weight" box pops |
| 9.00 | — | — | "Volumetric weight" box pops |
| 10.24 | — | — | "जो ज़्यादा, वही" reveals (from left) and highlights |

## s175
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: the 5 kg limit as a key fact; then premium tariffs: retail and contractual bulk are separate. In: cut. Framing: wide, still.
Layout: left: "24 Speed Post Parcel" 50 px bold at x 120, y 230; `key-fact-stamp` (scale 1.1, 616×374) centred (440, 600): white "5 kg" 140 px, pale-yellow "24 Speed Post Parcel की सीमा" 36 px. Right white card x 900–1800, y 200–940: red "Premium tariff" 56 px, Hindi "प्रीमियम शुल्क" 38 px, grey chip "GST अलग" top right; two stacked cards (x 960–1740, 200 tall) at y 470 and 700: "Retail" + "रिटेल ग्राहक", "Contractual bulk" + "अनुबंध वाले bulk ग्राहक" (50 px / 36 px); a yellow bracket at their right with "अलग" 44 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "24 Speed Post Parcel" heading on the left |
| 1.06 | — | — | key-fact-stamp stamps in with "5 kg" (holds to the cut) |
| 2.65 | — | — | right card fades in with "Premium tariff" + Hindi |
| 3.75 | — | — | chip "GST अलग" pops |
| 7.01 | — | — | "Retail" card pops |
| 7.99 | — | — | "Contractual bulk" card pops |
| 9.55 | — | — | yellow bracket draws; "अलग" fades in |

