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
## s240
Continues: no
Section label: KEY POINTS
Idea: the whole topic's key points open on the recap envelope: two classes, Document 500 g, Parcel 35 kg. In: wipe (from right). Framing: wide, still.
Component: recap-card — flap kicker "दोहराव", red title "पूरे topic की ज़रूरी बातें", seal "3"; 3 rows (row 3 filled in s241): Speed Post Document / स्पीड पोस्ट दस्तावेज · pill "500 g तक"; Speed Post Parcel / स्पीड पोस्ट पार्सल · pill "35 kg तक"; flap sub-line "दो classes: Document और Parcel".
Layout: `speed-post-emblem` scale 0.75 at x 110–500, y 420–690; envelope card x 560–1820, y 180–960; rows at y 470, 640, 810 (170 tall), pills right x 1440–1760.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | emblem and envelope with flap title already on screen |
| 4.32 | — | — | sub-line "दो classes: Document और Parcel" fades |
| 5.50 | — | — | row 1 term reveals; Hindi fades +0.5 |
| 6.94 | — | — | row 2 term reveals; Hindi fades +0.5 |
| 8.30 | — | — | pill "500 g तक" pops; 9.26 green tick draws |
| 11.18 | — | — | pill "35 kg तक" pops; 12.18 green tick draws |

## s241
Continues: s240
Section label: KEY POINTS
Idea: class also follows the contents; then charge = the higher of gross and volumetric, and length + girth. In: cut. Framing: wide, still. Sub-shots: #env (0), #charge-girth (2.58).
Layout: #env = s240's emblem + envelope exactly; row 3 at y 810: "Class / श्रेणी" · pill "सामान से भी तय". #charge-girth: left white card x 100–900, y 190–960 (title "Charge · शुल्क"; two chips "Gross weight / कुल वज़न", "Volumetric weight / आयतन भार" at y 420, 600; line "जो ज़्यादा, वही charge" y 820); right white card x 980–1820, y 190–960 with `dimension-box` scale 1.1 centred x 1400, y 300–760, formula "Length + Girth" y 860.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope with rows 1–2 ticked carried over |
| 0.48 | — | — | row 3 term + pill reveal; 2.14 green tick |
| 2.58 | — | — | cut to #charge-girth: left card with title on screen |
| 3.42 | — | — | gross chip pops |
| 4.46 | — | — | volumetric chip pops |
| 5.80 | — | — | "जो ज़्यादा, वही charge" fades, highlight on "ज़्यादा" |
| 6.98 | — | — | dimension-box draws |
| 8.06 | — | — | "Girth / घेरा" label fades by the loop |
| 9.64 | — | — | #len arrow highlight |
| 11.14 | — | — | #wid, #ht arrows highlight |
| 11.92 | — | — | #girth-loop draws; 12.62 "Length + Girth" types |

## s242
Continues: no
Section label: KEY POINTS
Idea: length + girth up to 3 m (key fact), then Document's first slab: local ₹19, non-local ₹47, GST extra. In: cut. Framing: wide, still.
Layout: `key-fact-stamp` scale 1.1 at x 120–736, y 330–704: white "3 m", pale-yellow "Length + Girth, अधिकतम". Right white tariff card x 840–1820, y 190–960: red header "Speed Post Document / स्पीड पोस्ट दस्तावेज" y 190–360; sub-line "पहला slab: 50 g तक" y 430; rows "Local / स्थानीय · ₹19" y 560, "Non-local / बाहर · ₹47" y 720 (values 96 px, right x 1700); grey pill "GST अलग" y 880; grey source "Schedule I, Post Office Regulations 2024".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "3 m" stamp on screen (spoken at 0) |
| 2.15 | — | — | tariff card slides from right with header |
| 3.43 | — | — | "पहला slab: 50 g तक" fades |
| 4.07 | — | — | Local row reveals; 4.77 "₹19" pops |
| 6.71 | — | — | Non-local row reveals; 7.35 "₹47" pops |
| 8.93 | — | — | "GST अलग" pill pops |

