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
## s037
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: two weight words: Gross Weight and Volumetric Weight. In: cut. Framing: wide, still.
Component: compare-cards — no question, no VS disc, no takeaway; left header red, right header sand; each card: English term 56 px bold on band, Hindi meaning 40 px, an illustration below.
Layout: Hindi title "वजन के दो शब्द" 52 px ink centred y 210. Left card x 120–930 y 270–960: band "Gross Weight", meaning "packing समेत पूरे item का वजन", `parcel-scale` 0.8 with `speed-post-parcel` 0.6 resting on it, y 600–920. Right card x 990–1800: band "Volumetric Weight", meaning lines "item जितनी जगह घेरता है," / "उससे निकाला गया वजन", `dimension-box` 0.65 y 620–900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title + both empty cards with bands |
| 1.64 | — | — | "Gross Weight" types on its band |
| 2.42 | — | — | meaning words in (gap 0.25) |
| 4.30 | — | — | scale + parcel fade in |
| 6.36 | — | — | "Volumetric Weight" types |
| 7.96 | — | — | first meaning line words in |
| 9.22 | — | — | dimension-box draws on "जगह" |

## s038
Continues: s037
Section label: PART 2 · WEIGHT AND SIZE
Idea: Reg. 2(1)(r): "weight" means the greater of the two, unless stated otherwise. In: cut. Framing: wide, still.
Component: rule-card — badge "REG. · नियम", number "2(1)(r)", "Post Office Regulations 2024"; document card with heading "Weight · वजन", a Hindi gist labelled "सार (gist)" (no Georgia quote: exact text not in script); chips left for s039.
Layout: #compare as s037. Shot #reg (2.08): badge x 120–620 y 200–720; document card white, #ead9a8 border x 680–1800 y 200–720; gist 44 px "Gross weight और volumetric weight में जो ज़्यादा हो", grey 36 px "जब तक अलग से कुछ न कहा गया हो"; source grey y 760 "Post Office Regulations 2024 · Reg. 2(1)(r)".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #compare, first meaning line on right |
| 0.44 | — | — | "उससे निकाला गया वजन" words in |
| 2.08 | — | — | cut to #reg: badge + card + source on screen |
| 3.52 | — | — | heading "Weight · वजन" types |
| 5.28 | — | — | gist line words in |
| 6.50 | — | — | highlight "जो ज़्यादा" |
| 8.28 | — | — | grey line fades |

## s039
Continues: s038
Section label: PART 2 · WEIGHT AND SIZE
Idea: Document charge is also on the greater weight; the 500 g limit includes volumetric weight. In: cut. Framing: wide, still.
Layout: #reg exactly as s038; two chips y 800–970: sand x 120–940 ("Speed Post Document" 48 px bold / "charge भी ज़्यादा वाले वजन पर" 36 px), soft yellow x 980–1800 ("500 g" 56 px bold / "सीमा में volumetric weight शामिल" 36 px).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried badge, document card with gist + highlight, source |
| 0.86 | — | — | chip 1 pops with "Speed Post Document" |
| 1.80 | — | — | its Hindi line fades on "charge" |
| 4.82 | — | — | chip 2 pops with "500 g" |
| 6.96 | — | — | its Hindi line fades on "volumetric" |
| 8.26 | — | — | underline "शामिल" |

