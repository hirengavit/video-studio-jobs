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
## s088
Continues: s087
Section label: PART 4 · BOOKING AND TRACKING
Idea: where surface is faster, by surface; and a Speed Post Parcel going by surface moves ahead of India Post Parcel at every stage. In: cut. Framing: wide, still.
Layout: 0–4.24 shot #route carried (heading, two chips, air arc with plane y 330). Road lane: ink line x 760–1760 at y 800, `transport-icons` #truck (scale 0.9) resting on it; yellow tag "तेज़ surface route" y 700. Shot #race from 4.24: header "हर stage पर" 48 px x 140 y 230; two lanes x 600–1760 at y 470 and y 780, three dashed stage lines x 980/1360/1740 (no labels); lane labels left x 140–560: "Speed Post Parcel" Inter 44 bold (red) / "India Post Parcel" Inter 44 bold (ink), Hindi under each; `speed-post-parcel` scale 0.4 resting at each lane start (plain sand box on the lower lane).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: Transmission heading, chips, plane on the air arc |
| 1.20 | — | — | road line draws, truck pops on it |
| 1.52 | — | — | tag "तेज़ surface route" pops |
| 3.30 | — | — | arrow along the road draws; label "surface से" fades |
| 4.24 | — | — | cut to #race: header and the two lane lines |
| 5.70 | — | — | top lane label + parcel pop |
| 7.16 | — | — | stage lines draw, stagger 0.15 |
| 8.38 | — | — | lower lane label + box pop |

## s089
Continues: s088
Section label: PART 4 · BOOKING AND TRACKING
Idea: Speed Post Parcel moves ahead first; so not every Speed Post journey is by plane; air carriage isn't tied to one airline. In: cut. Framing: wide, still.
Layout: 0–1.52 shot #race carried. Shot #notall: plane and truck (`transport-icons`) side by side x 560–1360, y 260–520; Hindi sentence centred 52 px y 640 "Speed Post का हर सफ़र, हवाई जहाज़ में ज़रूरी नहीं". Shot #air from 6.62: "Air carriage" Inter 64 bold y 220, Hindi "हवाई ढुलाई" 40 px y 285; three planes (no lettering, tails ink/sand/grey) at x 400/960/1520, y 420–600; `speed-post-emblem` scale 0.45 centred y 760–920; line "किसी एक airline से बँधा नहीं" 48 px y 990.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: two lanes, both parcels at the start |
| 0.38 | — | — | Speed Post parcel moves right past stage 1–2 (move, soft); its lane highlights yellow |
| 0.84 | — | — | India Post box moves a shorter way |
| 1.52 | — | — | cut to #notall: plane and truck |
| 1.86 | — | — | sentence words in |
| 5.52 | — | — | underline "ज़रूरी नहीं" |
| 6.62 | — | — | cut to #air: "Air carriage" + Hindi, emblem |
| 8.10 | — | — | three planes pop, stagger 0.15 |
| 8.64 | — | — | dashed lines from emblem to all three planes draw |
| 9.50 | — | — | bottom line reveals |

## s090
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: the Regulations give the method, not airline names; a Speed Post list goes with the Speed Post bag. In: cut. Framing: wide, still.
Layout: shot #regs: white document card (#ead9a8 border) x 360–1560, y 200–900: "Regulations" Georgia 64 heading, Hindi "विनियम" 40 px; two rows y 480 and y 660: "तरीका" with green tick, "airlines के नाम" with slate cross; source grey 32 px beneath card "Post Office Regulations 2024". Shot #bag from 4.80: drawn sand mail bag (ink 3 px, tied neck) left x 160–560, y 300–640 resting on a line y 640, label "Speed Post bag" Inter 48 under it y 700; `registered-list-sheet` scale 1.9 right x 1000–1608, y 190–988 (red band).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | document card with "Regulations" heading |
| 1.38 | — | — | row "तरीका" fades, green tick draws |
| 2.60 | — | — | row "airlines के नाम" fades |
| 3.68 | — | — | slate strike + cross on it |
| 4.80 | — | — | cut to #bag: the bag |
| 5.64 | — | — | "Speed Post bag" label reveals |
| 7.48 | — | — | list sheet slides in from right |
| 8.26 | — | — | band words "Speed Post list" type in white |

