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
## s001
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: the topic itself: "Speed Post" big beside its emblem, then what the lecture covers, then the start date. In: cut. Framing: slow push-in 4% on #title over the scene, back to 1 before the cut.
Layout: #title "Speed Post" Inter 800 150 px ink x 140, baseline y 380; #title-hi "स्पीड पोस्ट" red 64 px y 470. `speed-post-emblem` scale 1.2 at x 1140–1764, y 220–652. #chips row y 540–630 (x 140–1080): खूबियाँ · सीमाएँ · service standards (sand pills, ink 44 px). `key-fact-stamp` scale 0.94 at x 140–700, y 680–1000: "1 August" 56 px over "1986" 140 px white, Hindi "शुरुआत" pale yellow.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | push-in starts | — | title, Hindi title and emblem already on screen (the hook) |
| 1.20 | — | — | yellow underline draws under "Speed Post" |
| 3.18 | — | — | pill "खूबियाँ" pops |
| 4.22 | — | — | pill "सीमाएँ" pops |
| 5.76 | — | — | pill "service standards" pops |
| 7.30 | — | — | key-fact-stamp stamps in with "शुरुआत" |
| 8.44 | — | — | "1 August" fades in on the stamp |
| 9.08 | — | — | "1986" pops |
| 10.9 | back to 1 | — | hold |

## s002
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: the first name, then today's standing, on a two-point timeline. In: cut. Framing: wide, still.
Component: timeline — moulded to 2 events (no caption band); the left event's year is the 1986 key-fact-stamp, so the date keeps holding.
Layout: cream track y 600, x 200–1720 (fills red). Left node x 480: `key-fact-stamp` scale 0.7 (x 284–676, y 330–568) "1 August" / "1986", Hindi "शुरुआत". Below it a white card x 220–740, y 640–900: grey "शुरुआती नाम" 40 px, "EMS Speed Post" 60 px bold. Right node x 1440: red "आज" 64 px y 520; white card x 1060–1780, y 640–900: "देश के अंदर express delivery" 44 px, yellow pill "market leader" 52 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | track and the 1986 stamp already on screen (carries the start date on) |
| 1.14 | — | — | left card fades with "शुरुआती नाम" |
| 2.04 | — | — | "EMS Speed Post" words in |
| 4.94 | — | — | track grows red to the right node; "आज" pops |
| 5.64 | — | — | right card fades with "देश के अंदर express delivery" (words) |
| 7.76 | — | — | "market leader" pill pops, highlight sweeps it at 8.12 |

## s003
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: the whole picture in two lines; line 1: Speed Post = fast, time-bound delivery of documents and parcels. In: cut. Framing: wide, still.
Layout: heading "पूरी तस्वीर" red 56 px x 140, y 230; "· दो lines" beside it. Line-1 card white, ink outline, x 140–1780, y 280–600: red badge "1" (dia 80) at x 210, y 360; "Speed Post" 64 px bold x 300, y 380; row y 520: small `domestic-envelope` (scale 0.18) + "documents", small `speed-post-parcel` (scale 0.3) + "parcels" (48 px), sand pill "तेज़", pill "समय से बँधी delivery". Lower half y 640–990 kept for line 2 (s004).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "पूरी तस्वीर" on screen |
| 0.88 | — | — | "· दो lines" fades in |
| 2.28 | — | — | line-1 card pops with badge "1" and "Speed Post" |
| 3.60 | — | — | envelope icon + "documents" pop |
| 4.54 | — | — | parcel icon + "parcels" pop |
| 5.40 | — | — | pill "तेज़" pops |
| 6.64 | — | — | pill "समय से बँधी delivery" pops |
| 7.34 | — | — | highlight sweeps "समय से बँधी" |

## s004
Continues: s003
Section label: SPEED POST · OVERVIEW
Idea: line 2: every item has a record from booking to delivery; every product has its own limit, tariff and promise. In: cut. Framing: wide, still.
Layout: as s003, plus line-2 card white x 140–1780, y 640–990: red badge "2" x 210, y 720; row A y 740: "हर item:" 44 px, chip "booking" → ink arrow → chip "delivery", small `receipt-slip` (scale 0.25) + "record" 48 px; row B y 900: "हर product की अपनी:" 44 px, red-outline chips "सीमा", "tariff", "वादा".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: heading and line-1 card exactly as s003 |
| 0.00 | — | — | line-2 card pops with badge "2" and "हर item:" |
| 0.92 | — | — | chip "booking" pops |
| 1.48 | — | — | arrow draws, chip "delivery" pops |
| 2.16 | — | — | receipt icon + "record" pop |
| 4.10 | — | — | "हर product की अपनी:" fades in |
| 5.10 | — | — | chip "सीमा" pops |
| 6.40 | — | — | chip "tariff" pops |
| 7.94 | — | — | chip "वादा" pops |

## s005
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: the lecture has 11 parts; parts 1 and 2 named. In: cut. Framing: wide, still.
Layout: #parts-strip (recurring to s009 and s024): 11 white dots dia 72, 3 px ink rim, numerals 36 px, centres x 200 + 152·(n−1), y 950, joined by a thin ink line; a named part's dot turns red with a white numeral. `key-fact-stamp` scale 1 at x 140–700, y 240–580: "11" white, Hindi "हिस्से". Part cards right, x 780–1780, 160 tall, at y 240 and 440: red number badge (dia 90) + text 52 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parts strip (11 empty dots) on screen |
| 0.88 | — | — | key-fact-stamp "11 · हिस्से" stamps in |
| 2.31 | — | — | card 1 pops with badge "1"; dot 1 colours red |
| 2.99 | — | — | "Speed Post क्या है" words in |
| 5.83 | — | — | "· दो classes" fades in |
| 7.29 | — | — | card 2 pops with badge "2"; dot 2 red |
| 8.55 | — | — | "वजन," fades in |

## s006
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: parts 2–5 named, building down the page. In: cut. Framing: wide, still.
Layout: parts strip exactly as s005 (dots 1–2 red). Four white part cards x 140–1780, 150 tall, at y 200 / 370 / 540 / 710: red badge (dia 90) at x 220, text 52 px from x 310.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | strip (1–2 red) + card 2 with badge "2" and "वजन," on screen |
| 0.01 | — | — | "नाप और charge वाला वजन" words in on card 2 |
| 2.23 | — | — | card 3 pops, badge "3"; dot 3 red |
| 3.41 | — | — | "tariff" fades in |
| 4.03 | — | — | card 4 pops, badge "4"; dot 4 red |
| 5.25 | — | — | "booking," fades in; "transmission" at 6.19; "और tracking" at 7.35 |
| 8.03 | — | — | card 5 pops, badge "5"; dot 5 red |
| 9.33 | — | — | "business customers की सुविधाएँ" words in |
| 12.05 | — | — | "और volume discount" fades in |

## s007
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: part 6, delivery and its four pieces; part 7, ordinary Speed Post delivery standards. In: cut. Framing: wide, still.
Layout: parts strip as before (1–5 red). Card 6 white x 140–1780, y 210–540: badge "6", "delivery" 60 px bold y 300; chip row y 440: "registration", "OTP", "POD" (with "वितरण का प्रमाण" 36 px under it), "delivery के प्रयास" (sand chips, 48 px). Card 7 x 140–1780, y 580–860: badge "7", text 52 px y 730.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | strip on screen; card 6 pops with badge "6"; dot 6 red |
| 1.32 | — | — | "delivery" fades in |
| 1.62 | — | — | chip "registration" pops |
| 3.52 | — | — | chip "OTP" pops |
| 4.77 | — | — | chip "POD" + Hindi pops |
| 6.24 | — | — | chip "delivery के प्रयास" pops |
| 7.74 | — | — | card 7 pops, badge "7"; dot 7 red |
| 8.90 | — | — | "ordinary Speed Post" words in; "के delivery standards" at 10.57 |

## s008
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: part 8, the two premium products and the Ahmedabad service; part 9, insurance. In: cut. Framing: wide, still.
Layout: parts strip (1–7 red). Card 8 white x 140–1780, y 210–560: badge "8"; row y 400: red square badge "24" + "Speed Post" 52 px, deep-red (#7d1414) badge "48" + "Speed Post", sand chip "Ahmedabad की service". Card 9 x 140–1780, y 600–860: badge "9", "insurance" 64 px bold, "बीमा" 40 px red under it.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | strip on screen; card 8 pops with badge "8"; dot 8 red |
| 0.41 | — | — | red "24" badge pops, "Speed Post" fades at 1.64 |
| 2.45 | — | — | deep-red "48" badge pops, "Speed Post" fades at 3.50 |
| 4.98 | — | — | chip "Ahmedabad की service" pops |
| 6.47 | — | — | card 9 pops, badge "9"; dot 9 red |
| 7.84 | — | — | "insurance" + "बीमा" fade in |

## s009
Continues: no
Section label: SPEED POST · OVERVIEW
Idea: part 10, compensation and complaint; part 11, International Speed Post = EMS; the strip completes. In: cut. Framing: wide, still.
Layout: parts strip (1–9 red). Card 10 white x 140–1780, y 210–520: badge "10", "compensation" 60 px, "और complaint" beside it. Card 11 x 140–1780, y 560–880: badge "11", "International Speed Post" 56 px x 310, y 690; "= EMS" red 96 px bold y 820; `globe-icon` scale 0.8 at x 1480–1736, y 590–846.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | strip on screen; card 10 pops with badge "10"; dot 10 red |
| 0.53 | — | — | "compensation" fades in |
| 2.67 | — | — | "और complaint" fades in |
| 4.17 | — | — | card 11 pops, badge "11"; dot 11 red (all 11 now red) |
| 5.12 | — | — | "International Speed Post" words in |
| 6.17 | — | — | globe icon draws on |
| 8.00 | — | — | "= EMS" stamps in |

## s010
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: Part 1 opens: Speed Post is the Department of Posts' express, time-bound service; then Domestic Speed Post carries items within the country. In: fade (0.5 s). Framing: wide, still; sub-shots #title (0) and #domestic (6.42).
Component: chapter-title — kicker "PART 1 · भाग 1", English title "Speed Post", Hindi title "क्या है, और उसकी दो classes", subtitle replaced by "Department of Posts · डाक विभाग", progress "भाग 1 / 11"; stamp window holds `speed-post-emblem`, value "01".
Photo: speed-post-envelope-label — paper cut-out, white border, shadow, tilted −1.5°, grey caption; if missing, a large `domestic-envelope` with red speed lines instead.
Layout: #title: kicker y 240, title 120 px y 380, Hindi red 56 px y 470, subtitle 44 px y 560, chips row y 640–720 ("express", "time-bound"), progress y 800, all x 140–1100; stamp x 1220–1720, y 220–760. #domestic: photo x 160–860, y 230–820, caption y 870; "Domestic Speed Post" 64 px bold x 960, y 380; "देश के अंदर" red 48 px y 460; `india-outline-map` scale 0.5 at x 1100–1460, y 520–920.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter title (kicker, title, Hindi, progress, stamp with emblem) fading in |
| 0.42 | — | — | yellow underline draws under the Hindi title |
| 1.20 | — | — | subtitle "Department of Posts · डाक विभाग" fades in |
| 3.50 | — | — | chip "express" pops |
| 4.88 | — | — | chip "time-bound" pops |
| 6.42 | cut to #domestic | — | photo already up; "Domestic Speed Post" words in |
| 7.92 | — | — | "देश के अंदर" fades; map draws on |
| 9.08 | — | — | three short red arrows draw between metro anchors inside the map |

## s011
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: an accountable service: receipt at booking, records through the journey and delivery. In: cut. Framing: wide, still.
Component: mail-flow — moulded to 3 stops (booking, सफ़र, delivery), no bottom note; a record strip under the stops instead.
Layout: heading "accountable service" red 64 px bold x 140, y 250; "हर item का record" grey 40 px y 310. Stops centred x 400 / 960 / 1520, icons y 420–680, labels 44 px y 740: `booking-counter` (scale 0.6) + `receipt-slip` (scale 0.5) beside it, "Booking", "sender को receipt"; `transport-icons` #truck alone, "सफ़र"; flat ink house-door icon, "delivery". Record strip x 200–1720, y 820–900: ruled ink line with a tick under each stop and "records" 48 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "accountable service" on screen |
| 0.60 | — | — | highlight sweeps "accountable"; Hindi line fades |
| 3.18 | — | — | counter draws on + "Booking" label |
| 4.46 | — | — | receipt pops beside it + "sender को receipt" |
| 5.90 | — | — | arrow draws; truck pops + "सफ़र" |
| 6.78 | — | — | arrow draws; house pops + "delivery" |
| 7.84 | — | — | record line draws, "records" fades, three ticks draw (stagger 0.2) |

## s012
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: the article number lets the customer track the item; then a new term, "delivery standard". In: cut. Framing: wide, still; sub-shots #track (0) and #term (4.55).
Layout: #track: `receipt-slip` scale 1.5 at x 260–650, y 260–830; label "article number" 56 px bold x 700, y 300 with an ink arrow to the barcode; `otp-phone` scale 1.6 at x 1260–1612, y 230–900, its OTP boxes covered by a white panel; on its screen three rows 36 px: "booking", "सफ़र", "delivery" each with a dot; "track" red 56 px bold under the phone y 960. #term: grey "अब एक शब्द" 40 px x 140, y 200; red stamp-edged term card x 140–820, y 230–640: "Delivery" / "Standard" white 72 px bold. Right half x 880–1780 kept for its meaning (s013).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | receipt and phone on screen |
| 0.32 | — | — | arrow draws, "article number" fades |
| 0.74 | — | — | highlight on the barcode band |
| 1.64 | — | — | dashed arrow receipt → phone draws |
| 2.74 | — | — | "track" pops; phone rows tick in (stagger 0.3) |
| 4.55 | cut to #term | — | "अब एक शब्द" on screen |
| 5.63 | — | — | term card pops with "Delivery Standard" |

## s013
Continues: s012
Section label: PART 1 · WHAT IT IS
Idea: what a delivery standard means, and what it does not mean. In: cut. Framing: wide, still.
Layout: as s012 #term, plus white meaning card x 880–1780, y 230–640: line 1 "service की शर्तों में," 44 px y 360; line 2 "delivery का अपेक्षित समय" 52 px y 470. Slate-edged strip x 140–1780, y 700–960: grey "इसका मतलब ये नहीं:" 40 px y 770; "हर Speed Post item का समय एक जैसा" 52 px y 880; slate cross at x 1700.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: "अब एक शब्द" and the "Delivery Standard" card exactly as s012 |
| 0.46 | — | — | meaning card fades with line 1 (words) |
| 1.82 | — | — | line 2 words in |
| 3.24 | — | — | highlight sweeps "अपेक्षित समय" |
| 4.46 | — | — | strip fades with "इसका मतलब ये नहीं:" |
| 6.34 | — | — | "हर Speed Post item का समय एक जैसा" words in |
| 8.98 | — | — | slate strike through it, slate cross draws |

## s014
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: different promises: ordinary Speed Post has its own; the premium 24 and 48 Speed Post have theirs. In: cut. Framing: wide, still.
Layout: left card white x 140–860, y 260–760: sand header (y 260–380) "Ordinary Speed Post" ink 52 px; body "अपना वादा" 56 px y 560. Right card white x 1060–1780, y 260–760: rows y 400 and y 540: red badge "24" + "Speed Post" 52 px; deep-red badge "48" + "Speed Post"; red label "premium services" 48 px y 690. "≠" ink 140 px at x 960, y 530.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card with "Ordinary Speed Post" header on screen |
| 1.58 | — | — | "अपना वादा" fades in |
| 1.98 | — | — | yellow underline draws under "अपना वादा" |
| 3.38 | — | — | right card pops with the "24 Speed Post" row |
| 4.96 | — | — | "48 Speed Post" row pops |
| 6.88 | — | — | "premium services" fades in |
| 8.22 | — | — | "≠" pops between the cards |

## s015
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: the two classes side by side with their main limits: Document 500 g, Parcel 35 kg. In: cut. Framing: wide, still.
Component: compare-cards — moulded: no question line, no VS disc, no takeaway; Document header postal red, Parcel header sand with ink text; each body holds a `key-fact-stamp`.
Layout: "दो classes" red 56 px centred x 960, y 210. Document card x 140–920, y 240–700: header y 240–380 "Speed Post Document" white 52 px, "स्पीड पोस्ट दस्तावेज" pale 36 px; `key-fact-stamp` scale 0.8 (448×272) centred x 530, y 410–682: "500 g", Hindi "मुख्य सीमा". Parcel card x 1000–1780 same: "Speed Post Parcel" ink, "स्पीड पोस्ट पार्सल"; stamp at x 1390: "35 kg", Hindi "सीमा". y 730–990 kept for s016.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "दो classes" on screen |
| 0.76 | — | — | Document card pops (header + Hindi) |
| 3.42 | — | — | Parcel card pops |
| 6.30 | — | — | Document stamp stamps in with "मुख्य सीमा" |
| 6.96 | — | — | "500 g" pops on it |
| 8.42 | — | — | Parcel stamp stamps in with "सीमा" |
| 9.58 | — | — | "35 kg" pops on it |

## s016
Continues: s015
Section label: PART 1 · WHAT IT IS
Idea: what counts as a Document: a letter or any written, drawn or printed message; and packets of free things or things with no resale value. In: cut. Framing: wide, still.
Layout: as s015, plus a red connector x 530, y 700–730 from the Document card down to a white panel x 140–1780, y 730–990 (ink outline): question "Document में क्या आता है?" red 44 px x 180, y 780; row 1 y 860: small envelope icon + "Letter, या कोई भी" then "लिखा · बनाया · छपा संदेश" (40 px); row 2 y 945: small packet icon + "packets: free में दी गई चीज़ें" then ", या resale value न हो" (40 px).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: both class cards with 500 g and 35 kg exactly as s015; connector and panel pop with the question |
| 1.80 | — | — | envelope icon + "Letter, या कोई भी" fade |
| 3.36 | — | — | "लिखा · बनाया · छपा संदेश" words in (to 5.30) |
| 7.54 | — | — | packet icon + "packets:" fade |
| 8.84 | — | — | "free में दी गई चीज़ें" words in |
| 11.56 | — | — | ", या resale value न हो" fades; highlight on "resale value" at 12.08 |

## s017
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: Document items fall into three groups; the full list will be on screen; group 1 (banking, financial services, insurance) with all its items. In: cut. Framing: wide, still; the list holds through s019.
Layout: heading "Speed Post Document" 52 px bold x 140, y 220; "· तीन groups" 44 px beside it. Badges 1/2/3 (red dia 64) at y 290, x 410 / 1020 / 1570. Columns y 330–990: group 1 card x 120–700, group 2 x 730–1310, group 3 x 1340–1800. Group 1: red header y 330–460 "बैंकिंग, वित्तीय सेवाएँ" / "और बीमा" white 36 px; items Inter 48 px ink, line pitch 62 from y 510: Welcome kits / or letters (2 lines), Passbooks, Cheque books, Bank statements, Plastic cards, Debit cards, Credit cards.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "Speed Post Document" on screen |
| 0.86 | — | — | "· तीन groups" fades; badges 1–3 pop (stagger 0.15) |
| 4.40 | — | — | group 1 card pops under badge 1 |
| 5.46 | — | — | header words in (to 7.78) |
| 8.62 | — | — | all seven items fade in, top to bottom (stagger 0.1) |

## s018
Continues: s017
Section label: PART 1 · WHAT IT IS
Idea: examples from group 1; group 2, government documents, with all its items. In: cut. Framing: wide, still.
Layout: as s017, plus group 2 card x 730–1310, y 330–990: red header "सरकारी documents" white 40 px; items 48 px from y 510: PAN cards, Aadhaar cards, Electoral Photo / Identity Cards (2 lines), Passports, Driving licences.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: heading, badges and group 1 with all items exactly as s017 |
| 0.32 | — | — | highlight "Passbooks" |
| 0.88 | — | — | highlight "Cheque books" |
| 2.88 | — | — | highlight "Credit cards" |
| 3.80 | — | — | group 2 card pops under badge 2 |
| 4.80 | — | — | header "सरकारी documents" fades |
| 5.90 | — | — | all five items fade in (stagger 0.1) |
| 7.12 | — | — | highlight "PAN cards"; "Aadhaar cards" at 8.18; "Passports" at 9.74 |

## s019
Continues: s018
Section label: PART 1 · WHAT IT IS
Idea: group 3: Rakhi envelopes and greeting cards up to 500 g, but no merchandise or commercial goods even here. The full three-group list now holds complete. In: cut. Framing: wide, still.
Layout: as s018, plus group 3 card x 1340–1800, y 330–990: red header "500 g तक" white 44 px; items 48 px from y 520: "Rakhi envelopes" / "or packages", "Greeting cards" / "or packages"; slate box y 800–960: slate cross + "merchandise या" / "commercial सामान नहीं" slate 36 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: groups 1 and 2 exactly as s018; group 3 card pops under badge 3 |
| 0.98 | — | — | header "500 g तक" fades |
| 2.84 | — | — | "Rakhi envelopes or packages" fades |
| 4.44 | — | — | "Greeting cards or packages" fades |
| 6.64 | — | — | slate box fades, cross draws, "merchandise या" fades |
| 8.06 | — | — | "commercial सामान नहीं" fades; underline "commercial" at 8.64 |

## s020
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: anything outside the Document definition goes to the Parcel class, so the class isn't decided by weight alone. In: cut. Framing: wide, still.
Layout: Document card white x 140–800, y 230–700: red header "Speed Post Document" white 48 px; three stacked chips 40 px: "बैंकिंग · बीमा", "सरकारी documents", "500 g तक"; dashed outline = "परिभाषा". `speed-post-parcel` scale 0.5 at x 850, y 400 (outside the card). Parcel card x 1180–1780, y 230–700: sand header "Speed Post Parcel" ink 48 px. Bottom strip sand x 140–1780, y 770–960: "category सिर्फ वजन से तय" 56 px + small `parcel-scale` icon.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Document card with its three chips on screen |
| 0.56 | — | — | dashed outline draws round the card; grey "परिभाषा" label |
| 1.44 | — | — | parcel icon pops outside the card; slate cross at its corner |
| 2.21 | — | — | Parcel card pops |
| 2.71 | — | — | parcel icon moves into the Parcel card (by 560, 0) |
| 5.55 | — | — | bottom strip fades with the scale icon; "category सिर्फ वजन से तय" words in |
| 8.12 | — | — | slate strike through "सिर्फ वजन से तय", slate cross |

## s021
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: example: a 100 g commercial item is under 500 g, yet it is not a Speed Post Document. In: cut. Framing: wide, still.
Layout (top region; y 770–990 kept for s022): `parcel-scale` scale 0.86 at x 140–622, y 400–710 (display "100 g" white); `speed-post-parcel` scale 0.7 resting on its top; tag pill "commercial item" yellow outline 48 px x 140–620, y 220–290. Middle card x 700–1120, y 330–620: "100 g < 500 g" 60 px, Hindi "वजन कम" 40 px. Right column x 1200–1780: white card y 240–440 "Speed Post Document" 52 px (with "स्पीड पोस्ट दस्तावेज" 36 px); space y 480–700 for s022's verdict.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | scale on screen, display blank; grey "एक example" 40 px y 200 x 700 |
| 1.31 | — | — | parcel falls onto the scale (small bounce) |
| 1.62 | — | — | "100 g" types on the display |
| 3.22 | — | — | tag "commercial item" pops |
| 4.87 | — | — | middle card pops with "100 g < 500 g" |
| 5.97 | — | — | "वजन कम" fades |
| 7.56 | — | — | right card pops with "Speed Post Document" |
| 8.76 | — | — | slate strike through it, slate cross |

## s022
Continues: s021
Section label: PART 1 · WHAT IT IS
Idea: commercial goods, so Parcel; then a new term: International Speed Post is called EMS, Express Mail Service. In: cut. Framing: wide, still.
Layout: as s021, plus green pill x 1200–1780, y 500–680: "Speed Post Parcel" white 52 px + "स्पीड पोस्ट पार्सल" 36 px, green tick. Bottom band envelope-colour x 140–1780, y 770–990: `globe-icon` scale 0.6 at x 160–352, y 785–977; "International Speed Post" 52 px x 400, y 880; ink arrow x 1050–1120; "EMS" red 88 px bold x 1150, y 890; "Express Mail Service" 48 px x 1330, y 880.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: scale, parcel, tag, middle card and the struck Document card exactly as s021 |
| 0.59 | — | — | highlight sweeps the "commercial item" tag |
| 2.25 | — | — | green "Speed Post Parcel" pill pops, tick draws |
| 3.38 | — | — | bottom band fades; globe draws; "International Speed Post" words in |
| 5.38 | — | — | arrow draws, "EMS" stamps in |
| 7.46 | — | — | "Express Mail Service" words in |

## s023
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: for EMS the destination's conditions, customs, tariff and compensation all differ; don't carry a domestic limit over to an item going abroad. In: cut. Framing: wide, still.
Layout: `globe-icon` scale 1.3 at x 170–586, y 260–676; "EMS" red 80 px bold centred x 378, y 770. Right 2×2 sand chips (520×170) at x 700–1220 / 1260–1780, y 220–390 / 420–590, 48 px: "destination की शर्तें", "customs", "tariff", "compensation". Red round postmark (dia 160) "सब अलग" white 40 px at x 1240, y 690. Bottom strip x 140–1780, y 800–990: chip "Domestic की सीमा" 48 px → ink arrow → small globe + "विदेश जाने वाला item" 44 px; slate cross over the arrow + "अपने आप नहीं" slate 44 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | globe and "EMS" on screen |
| 0.52 | — | — | chip "destination की शर्तें" pops |
| 2.50 | — | — | chip "customs" pops |
| 3.56 | — | — | chip "tariff" pops |
| 4.66 | — | — | chip "compensation" pops |
| 6.46 | — | — | postmark "सब अलग" stamps in |
| 7.26 | — | — | bottom strip fades with "Domestic की सीमा" |
| 8.88 | — | — | arrow draws; globe + "विदेश जाने वाला item" pop |
| 11.40 | — | — | slate cross draws on the arrow, "अपने आप नहीं" fades |

## s024
Continues: no
Section label: PART 1 · WHAT IT IS
Idea: EMS rules come in part 11 (pointer); then the exam angle: the two classes, Document and Parcel. In: cut. Framing: wide, still; sub-shots #pointer (0) and #trap (3.06).
Component: exam-trap — moulded: banner kicker "परीक्षा का जाल" with the warning triangle, white line starts as "Speed Post की दो classes"; two cards, Document with the yellow (trap) border; each card's small perforated stamp blank until s025; remember bar added in s026.
Layout: #pointer: `globe-icon` scale 1 at x 800–1120, y 250–570; "EMS के नियम" 56 px centred y 680; parts strip exactly as s005–s009 (all 11 red), dot 11 gets a yellow ring. #trap: red banner x 120–1800, y 190–360 (kicker 36 px y 245, white line 52 px y 320); cards y 400–760, x 140–940 and 980–1780: "Speed Post Document" 52 px + "स्पीड पोस्ट दस्तावेज" 36 px; "Speed Post Parcel" + "स्पीड पोस्ट पार्सल"; stamp tiles (200×200) at the right of each card. y 790–990 kept for the remember bar.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | globe, "EMS के नियम" and the full parts strip on screen |
| 1.32 | — | — | yellow ring pops round dot 11; "भाग 11" red 52 px fades under it |
| 3.06 | cut to #trap | — | banner with triangle and "परीक्षा का जाल" on screen |
| 4.22 | — | — | "Speed Post की दो classes" words in on the banner |
| 6.50 | — | — | Document card pops (yellow border) |
| 7.88 | — | — | Parcel card pops |

## s025
Continues: s024
Section label: PART 1 · WHAT IT IS
Idea: Document up to 500 g, ordinary parcel up to 35 kg; this is where the confusion is: an option saying every item under 500 g is a document. In: cut. Framing: wide, still.
Layout: as s024 #trap; stamps carry "500 g" / "35 kg" white 64 px with "तक" pale yellow; grey caps "ordinary" 36 px above the Parcel name.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: banner ("Speed Post की दो classes") and both cards exactly as s024 |
| 0.46 | — | — | "500 g" + "तक" pop on the Document stamp |
| 2.48 | — | — | "ordinary" fades above Parcel |
| 3.60 | — | — | "35 kg" + "तक" pop on the Parcel stamp |
| 6.76 | — | — | Document card pulses (amount 0.06); yellow underline under its stamp |
| 9.10 | — | — | banner line swaps to "500 g से कम हर item = document" |
| 11.00 | — | — | highlight sweeps "document" on the banner |

## s026
Continues: s025
Section label: PART 1 · WHAT IT IS
Idea: that option is wrong: goods and weight together decide the class. In: cut. Framing: wide, still.
Layout: as s025, plus sand remember bar x 140–1780, y 790–990: "सामान + वजन" ink 60 px x 200, y 880; "= class" red 60 px bold x 900; "दोनों मिलकर" amber 40 px under it, y 950.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: banner with "500 g से कम हर item = document" and both cards with 500 g / 35 kg exactly as s025 |
| 0.20 | — | — | slate strike through the banner line, slate cross beside it |
| 0.70 | — | — | remember bar fades; "सामान" fades |
| 1.94 | — | — | "+ वजन" fades |
| 2.54 | — | — | "दोनों मिलकर" fades |
| 3.80 | — | — | "= class" pops; underline under it at 4.22 |
## s027
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: Part 2 opens; this part is about ordinary Speed Post Document and Parcel; 24 Speed Post Parcel has a lower limit. In: fade (0.5 s). Framing: wide, still.
Component: chapter-title — kicker "PART 2 · भाग 2", title "Weight, Size and / Chargeable Weight", Hindi "वजन, नाप और charge वाला वजन", dots "Part 2 of 11 · भाग 2 / 11"; stamp window holds `speed-post-emblem`, value "02"; subtitle replaced by two chips.
Layout: shot #title: text x 140–1100, stamp x 1180–1780 y 200–940; chips y 860–950. Shot #premium (8.46): left sand panel x 140–860 y 260–900 "Ordinary Speed Post" + chips Document / Parcel; right white card x 960–1780: red badge "24" (240×240) + "24 Speed Post Parcel" 56 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title on screen (fading in), emblem in stamp, Hindi underline draws |
| 5.00 | — | — | chip "Speed Post Document" pops on "Document" |
| 6.30 | — | — | chip "Speed Post Parcel" pops on "Parcel" |
| 8.46 | — | — | cut to #premium: left panel + chips, "24" badge pops on "24" |
| 9.36 | — | — | "24 Speed Post Parcel" types |
| 11.18 | — | — | Hindi "सीमा इससे कम" + ink down arrow fade on "कम" |

## s028
Continues: s027
Section label: PART 2 · WEIGHT AND SIZE
Idea: Part 8 pointer, then the Speed Post Document limits table (every row shown). In: cut. Framing: wide, still.
Component: key-fact-stamp (piece) — "500 g", pale-yellow Hindi "volumetric weight मिलाकर".
Layout: #premium as s027. Shot #doc (2.10): red header band x 120–1800 y 180–300 ("Speed Post Document" 52 px white, "स्पीड पोस्ट दस्तावेज" 36 px pale yellow). Stamp x 140–700 y 420–760. Table white, #ead9a8 border x 780–1760 y 340–880: column row नाप | mm | cm (grey 36), rows लंबाई / चौड़ाई / मोटाई (Hindi 44), values 64 px. Source grey y 985 "Post Office Regulations 2024 (as amended 2025–26)".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #premium carried (24 card, chips) |
| 0.26 | — | — | red pill "PART 8 · भाग 8" pops under 24 card on "आठवें" |
| 2.10 | — | — | cut to #doc: header band reveals (left) |
| 3.30 | — | — | table + three row labels fade, stagger 0.15, on "Table" |
| 6.84 | — | — | stamp "500 g" stamps in on "500" |
| 8.40 | — | — | stamp's Hindi line fades on "volumetric" |
| 11.54 | — | — | highlight row लंबाई |
| 12.26 | — | — | "420 mm" pops in mm column |

## s029
Continues: s028
Section label: PART 2 · WEIGHT AND SIZE
Idea: the rest of the Document dimensions, mm and cm together. In: cut. Framing: wide, still.
Layout: #doc exactly as s028 (header band, 500 g stamp x 140–700, table x 780–1760 y 340–880, source).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: header, 500 g stamp, table with "420 mm", row लंबाई highlighted |
| 0.48 | — | — | "42 cm" fades in cm column |
| 2.00 | — | — | highlight moves to row चौड़ाई |
| 2.90 | — | — | "297 mm" pops |
| 5.78 | — | — | "29.7 cm" fades |
| 8.62 | — | — | highlight moves to row मोटाई |
| 9.48 | — | — | "24 mm" pops |
| 12.38 | — | — | "2.4 cm" fades |

## s030
Continues: s029
Section label: PART 2 · WEIGHT AND SIZE
Idea: all three dimensions must be met together; then Parcel maximum limits. In: cut. Framing: wide, still.
Component: key-fact-stamp (piece) — "35 kg", Hindi "सबसे ज़्यादा वजन".
Layout: #doc as s029, plus green-bordered chip x 780–1760 y 895–955 "तीनों नाप एक साथ ✓" (36 px). Shot #pmax (3.55): sand header band x 120–1800 y 180–300 ("Speed Post Parcel" 52 px ink, "स्पीड पोस्ट पार्सल" 36 px); stamp x 140–700 y 420–760; table x 780–1760 y 360–860, column header "सबसे ज़्यादा", two rows: "लंबाई" | 1.5 m, "लंबाई + Girth" | value slot.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #doc: full table with all values, stamp 500 g |
| 0.60 | — | — | highlight sweeps all three dimension rows on "नाप" |
| 1.34 | — | — | green chip pops on "एक साथ" |
| 3.55 | — | — | cut to #pmax: header band reveals on "Parcel" |
| 4.47 | — | — | table + two row labels fade on "सीमाएँ" |
| 7.75 | — | — | stamp "35 kg" stamps in on "35" |
| 8.95 | — | — | highlight row लंबाई |
| 10.09 | — | — | "1.5 m" pops |

## s031
Continues: s030
Section label: PART 2 · WEIGHT AND SIZE
Idea: length + girth max 3 m; then the minimum sizes card (all four rows). In: cut. Framing: wide, still.
Layout: #pmax as s030. Shot #pmin (4.83): sand header band y 180–300 "Speed Post Parcel" + "कम से कम नाप"; white card x 140–1780 y 330–960, four rows (~150 tall): (1) `speed-post-parcel` scale 0.4 at x 180, "Roll के अलावा parcel" | value; (2–3) `document-roll` scale 0.45 at x 170–485 y 520–600 spanning both, "Roll · लंबाई" | value, "Roll · लंबाई + 2 × diameter" | value; (4) "छूट (tolerance)" | value. Values 60 px right column x 1350–1740.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #pmax: header, 35 kg stamp, table with 1.5 m |
| 0.26 | — | — | highlight moves to row "लंबाई + Girth" |
| 2.44 | — | — | "3 m" pops |
| 4.00 | — | — | grey "से ज़्यादा नहीं" fades under it on "नहीं" |
| 4.83 | — | — | cut to #pmin: header + card reveal |
| 5.65 | — | — | four row labels + icons fade, stagger 0.15, on "नाप" |
| 7.71 | — | — | highlight row 1 on "Roll" |
| 11.09 | — | — | "140 ×" types |
| 13.45 | — | — | "90 mm" types |

## s032
Continues: s031
Section label: PART 2 · WEIGHT AND SIZE
Idea: the roll minimums: length 100 mm; length + 2 × diameter 170 mm. In: cut. Framing: slow push-in 6% on #roll-rows from 0.4, back to 1 by 10.4.
Layout: #pmin exactly as s031 (header, card x 140–1780 y 330–960, rows 1–4, "140 × 90 mm" filled).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #pmin, row 1 value 140 × 90 mm |
| 0.00 | — | — | highlight moves to row 2 on "Roll" |
| 0.40 | push-in 6% on #roll-rows | — | — |
| 3.00 | — | — | "100 mm" pops |
| 5.37 | — | — | highlight moves to row 3 |
| 7.75 | — | — | ink diameter arrow draws across the roll end (end-centre) on "diameter" |
| 8.62 | — | — | "170 mm" pops |
| 9.40 | back to zoom 1 by 10.4 | — | — |

## s033
Continues: s032
Section label: PART 2 · WEIGHT AND SIZE
Idea: ±2 mm tolerance on minimums; then Girth = the girdle round breadth and thickness. In: cut. Framing: wide, still.
Component: key-term — red stamp-edged card "Girth" (big English) with Hindi meaning line "parcel का घेरा" (no official form); meaning card replaced by `dimension-box`; no exam pill, no chain.
Layout: #pmin as s032. Shot #girth (5.23): key-term card x 120–720 y 280–760; `dimension-box` scale 1.5 (960×630) x 800–1760 y 240–870, Hindi labels "चौड़ाई" by #wid, "मोटाई" by #ht (44 px).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #pmin, rows 1–3 filled |
| 0.25 | — | — | highlight moves to row 4 |
| 1.85 | — | — | "± 2 mm" pops on "2" |
| 5.23 | — | — | cut to #girth: key-term card + box drawing on screen; "Girth" pops |
| 6.21 | — | — | Hindi "parcel का घेरा" fades |
| 7.17 | — | — | #girth-loop draws on (yellow) on "घेरा" |
| 8.19 | — | — | #wid arrow draws + "चौड़ाई" fades |
| 9.88 | — | — | #ht arrow draws + "मोटाई" fades |
| 10.53 | — | — | #girth-loop pulses on "चारों" |

## s034
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: worked example: a 100 × 40 × 30 cm parcel. In: cut. Framing: wide, still.
Component: formula-card — left stamp replaced by `dimension-box`; right white working card only.
Layout: `dimension-box` scale 1.375 (880×578) x 120–1000 y 250–828, value labels 52 px by its arrows ("100 cm" #len, "40 cm" #wid, "30 cm" #ht). Working card white, #ead9a8 border, x 1060–1800 y 220–960: red title "Girth का हिसाब" 44 px y 290; Georgia lines 56 px at y 400 / 560 / 720, each with a grey Hindi tag (36 px) under it: "चौड़ाई + मोटाई", "दो गुना", "लंबाई + Girth".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | box drawing + empty working card with title |
| 1.38 | — | — | box pulses on "Parcel" |
| 2.49 | — | — | #len arrow draws + "100 cm" pops |
| 4.43 | — | — | #wid arrow + "40 cm" |
| 6.49 | — | — | #ht arrow + "30 cm" |
| 8.43 | — | — | tag "चौड़ाई + मोटाई" fades |
| 10.50 | — | — | line 1 "40 + 30" types on "जोड़" |

## s035
Continues: s034
Section label: PART 2 · WEIGHT AND SIZE
Idea: girth = 2 × 70 = 140 cm; length + girth = 100 + 140 = 240 cm. In: cut. Framing: wide, still.
Layout: exactly as s034 (box x 120–1000 with three values; working card x 1060–1800, line 1 "40 + 30").
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried box + card; "= 70 cm" types on line 1 |
| 1.57 | — | — | #girth-loop draws on (yellow) on box |
| 2.19 | — | — | line 2 "Girth = 2 × 70" types + tag "दो गुना" |
| 4.95 | — | — | "= 140 cm" types |
| 6.71 | — | — | tag "लंबाई + Girth" fades |
| 8.06 | — | — | line 3 "100 + 140" types |
| 11.10 | — | — | "= 240 cm" types, then highlight on it |

## s036
Continues: s035
Section label: PART 2 · WEIGHT AND SIZE
Idea: both size checks pass (100 ≤ 150 cm, 240 ≤ 300 cm); other conditions still apply. In: cut. Framing: wide, still.
Layout: as s035, plus two green-bordered chips under the box y 850–970: x 120–540 "100 ≤ 150 cm", x 580–1000 "240 ≤ 300 cm" (48 px Georgia, green tick each); green round postmark "पास" r 80 at (1680, 830) on the working card; grey Hindi line "बाकी शर्तें अपनी जगह" 36 px at x 1100 y 900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried box, working card with all three lines |
| 0.75 | — | — | chip 1 pops on "150" |
| 2.62 | — | — | chip 1 tick draws on "अंदर" |
| 4.17 | — | — | chip 2 pops on "300" |
| 5.73 | — | — | chip 2 tick draws |
| 8.06 | — | — | postmark "पास" stamps on "पास" |
| 9.50 | — | — | grey line fades on "शर्तें" |

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

## s040
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: a light but bulky item is not a Document just because the scale reads low; example 300 g gross / 450 g volumetric. In: cut. Framing: wide, still.
Layout: shot #bulky: `parcel-scale` 1.4 x 200–984 base y 900, big `speed-post-parcel` 1.3 resting on it; right x 1100–1800: Hindi "तराज़ू पर कम वजन" 44 px y 380, "Document" 72 px bold y 540, "नहीं बन जाता" 44 px y 640. Shot #example (7.22): title "उदाहरण" 48 px red y 210; white cards y 270–560: x 140–900 "Gross Weight" + value, x 1020–1780 "Volumetric Weight" + value (80 px); lower area y 620–960 kept for s041–s042.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | scale with big parcel on it |
| 1.58 | — | — | parcel pulses on "फूला" |
| 3.28 | — | — | Hindi line fades |
| 5.04 | — | — | "Document" types |
| 5.52 | — | — | slate strike on "Document"; "नहीं बन जाता" fades 6.20 |
| 7.22 | — | — | cut to #example: title + both cards' labels |
| 9.54 | — | — | "300 g" pops |
| 12.26 | — | — | "450 g" pops |

## s041
Continues: s040
Section label: PART 2 · WEIGHT AND SIZE
Idea: charge on 450 g; then case 2: volumetric 600 g? In: cut. Framing: wide, still.
Layout: #example as s040; green pill x 560–1360 y 620–760 "Charge → 450 g" (56 px); case-2 strip sand x 140–1780 y 800–960: "Volumetric Weight 600 g" left, "?" 72 px at x 1600.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried title, 300 g and 450 g cards |
| 1.00 | — | — | highlight "450 g" card value; green pill pops |
| 4.24 | — | — | case-2 strip reveals (left) |
| 5.38 | — | — | "600 g" pops |
| 6.62 | — | — | "?" pops |

## s042
Continues: s041
Section label: PART 2 · WEIGHT AND SIZE
Idea: gross only 300 g, yet over the Document limit; then counter checks before accepting a parcel. In: cut. Framing: wide, still.
Layout: #example as s041; "?" swaps to "> 500 g · Document" with slate strike on "Document". Shot #counter (6.69): `booking-counter` 1.5 (960×630) x 480–1440 y 300–930; `speed-post-parcel` 0.7 resting on its ledge; red Hindi heading "parcel लेने से पहले की जाँच" 52 px y 220.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried cards, pill, case-2 strip with "?" |
| 1.76 | — | — | highlight "300 g" on Gross card |
| 4.36 | — | — | "?" swaps to "> 500 g · Document" |
| 5.78 | — | — | slate strike on "Document" on "बाहर" |
| 6.69 | — | — | cut to #counter: counter on screen |
| 7.55 | — | — | parcel fades in resting on ledge |
| 8.61 | — | — | heading types |

## s043
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: acceptance checks, card 1 of 2 (checks 1–3, all shown). In: cut. Framing: wide, still.
Component: step-list — 3 rows, red number badges, Hindi only, no closing chip; grey pill "1–3 / 6".
Layout: title "Parcel लेने से पहले · 6 जाँच" red 48 px y 220, pill x 1600. Rows white x 140–1780: y 290–490 (1) "सामान देखकर सही category और ज़रूरी declaration", sub grey "Merchandise → merchandise के रूप में declare"; y 520–720 (2) "वजन और नाप, लागू सीमा में"; y 750–950 (3) "Packing तय नियमों जैसी", sub "नहीं तो parcel मना". Titles 44 px, subs 36 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title + pill |
| 1.44 | — | — | three row cards with titles slide up, stagger 0.15 |
| 3.12 | — | — | highlight row 1 |
| 7.74 | — | — | row 1 sub-line fades |
| 11.48 | — | — | underline "declare" |

## s044
Continues: s043
Section label: PART 2 · WEIGHT AND SIZE
Idea: checks 2–3, then card 2 of 2 (checks 4–6, all shown). In: cut. Framing: wide, still.
Layout: #list1 as s043. Shot #list2 (7.00): same design, pill "4–6 / 6"; rows (4) "\"Speed Post Parcel\" लिखा हो", sub "paid value additions भी", small `speed-post-parcel` 0.5 at x 1540 on the row; (5) "Postage पूरा पहले", sub slot; (6) "Domestic parcel declaration", sub "administrative instructions वाला".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #list1, row 1 highlighted; highlight moves to row 2 |
| 3.10 | — | — | highlight moves to row 3 |
| 6.42 | — | — | row 3 sub-line fades + slate cross on "मना" |
| 7.00 | — | — | cut to #list2: title, pill, three row titles |
| 8.26 | — | — | highlight row 4 |
| 9.98 | — | — | "Speed Post Parcel" types on the small parcel's label |

## s045
Continues: s044
Section label: PART 2 · WEIGHT AND SIZE
Idea: paid value additions shown too; postage fully prepaid, deferral only by special permission. In: cut. Framing: wide, still.
Layout: #list2 exactly as s044 (rows 4–6, small parcel with label).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #list2, row 4 highlighted |
| 1.66 | — | — | row 4 sub "paid value additions भी" fades |
| 3.88 | — | — | highlight moves to row 5 on "Postage" |
| 5.24 | — | — | underline "पहले" |
| 7.46 | — | — | row 5 sub part 1 "बाद में: छूट सिर्फ" fades |

## s046
Continues: s045
Section label: PART 2 · WEIGHT AND SIZE
Idea: deferral only when the Director General specially allows; payment modes. In: cut. Framing: wide, still.
Layout: #list2 as s045; row 5 sub part 2 "Director General की खास इजाज़त से" beside part 1. Shot #pay (2.96): red title "भुगतान · पूरा पहले" y 220; four white tiles y 320–900 x 140–1780 (380 wide, 40 gaps), icon top, English 48 bold + Hindi 36: `rupee-deposit` "Cash · नकद"; `otp-phone` 0.6 "Digital · डिजिटल"; drawn blank perforated stamp "Postage stamps · डाक टिकट"; `franking-impression` 0.6 "Franking impression · मान्य".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #list2 with row 5 sub part 1 |
| 0.76 | — | — | sub part 2 fades on "Director" |
| 2.96 | — | — | cut to #pay: title + four empty tiles |
| 4.06 | — | — | tile 1 icon + label pop |
| 4.92 | — | — | tile 2 |
| 5.88 | — | — | tile 3 |
| 8.44 | — | — | tile 4 on "franking" |

## s047
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: check 6: domestic parcel declaration per administrative instructions; the Regulations give no form number. In: cut. Framing: wide, still.
Layout: `declaration-tag` 2.2 (704×484) x 140–844 y 300–784, "Declaration" white 44 px on its strip; grey pill "6 / 6" at x 140 y 220. Right x 940–1800: "Domestic parcel" 60 px bold y 400, Hindi "के साथ ज़रूरी" 40 px y 470, "administrative instructions वाला" 40 px y 560. Sand strip x 140–1800 y 830–960: "Form No." 48 px + slate cross + Hindi "Regulations में नहीं दिया".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | tag with "Declaration", pill |
| 0.84 | — | — | "Domestic parcel" types |
| 1.78 | — | — | Hindi line fades |
| 2.18 | — | — | "administrative instructions वाला" fades |
| 5.66 | — | — | sand strip reveals |
| 8.58 | — | — | "Form No." fades |
| 9.26 | — | — | slate cross draws + Hindi fades on "नहीं" |

## s048
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: express delivery does not make prohibited items allowed; the five barred kinds. In: cut. Framing: wide, still.
Layout: banner sand x 140–1780 y 190–360: "Express delivery" 56 px bold + Hindi "माँगने से मना सामान" + "allowed" 48 px. Five white tiles y 430–900, 300 wide, x 140–1780 (35 gaps), simple ink icon + slate cross corner + label: dynamite sticks "Explosives / विस्फोटक"; flask with hazard triangle "खतरनाक पदार्थ"; capsule "Prohibited drugs / प्रतिबंधित drugs"; sealed packet with slate band "अश्लील सामान"; bare blade "नुकीले औज़ार / (बिना सुरक्षा)".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner with "Express delivery" |
| 1.82 | — | — | Hindi + "allowed" fade |
| 2.88 | — | — | slate strike on "allowed" |
| 4.24 | — | — | tile 1 pops, cross draws |
| 5.52 | — | — | tile 2 |
| 7.42 | — | — | tile 3 |
| 9.02 | — | — | tile 4 |
| 11.94 | — | — | tile 5 |

## s049
Continues: s048
Section label: PART 2 · WEIGHT AND SIZE
Idea: those are not accepted; allowed items barred from air go under surface conditions. In: cut. Framing: wide, still.
Layout: #barred as s048 plus slate round postmark "नहीं लिए जाते" r 90 at (1640, 275). Shot #surface (1.58): `speed-post-parcel` 0.85 x 120–426 base y 720 with green tick + "allowed" 48 px; `transport-icons` x 600–1680 y 420–660 (#plane, #truck, #train); slate cross on plane, Hindi "हवाई जहाज़ में मना" under it; green bracket under truck + train, "Surface · सतही रास्ता" 48/36 px, "शर्तों से जाता है" 40 px y 860.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried banner + five crossed tiles |
| 0.58 | — | — | postmark stamps |
| 1.58 | — | — | cut to #surface: parcel + three icons |
| 2.64 | — | — | green tick + "allowed" pop |
| 4.18 | — | — | Hindi under plane fades |
| 5.24 | — | — | slate cross draws on plane |
| 6.50 | — | — | green bracket draws + "Surface" label |
| 7.34 | — | — | "शर्तों से जाता है" fades |

## s050
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: exam angle, Document: 500 g incl. volumetric; 420 × 297 × 24 mm. In: cut. Framing: wide, still.
Component: key-fact-stamp (piece) — "500 g", Hindi "volumetric weight मिलाकर".
Layout: red pill "EXAM ANGLE · परीक्षा की नज़र से" x 140 y 190; stamp x 140–700 y 300–640; `domestic-envelope` 1.0 x 900–1660 y 290–690 with ink dimension arrows (bottom edge, right edge, small thickness tick at top-right); white strip #ead9a8 border x 140–1780 y 780–940: Georgia 72 px "420 × 297 × 24 mm".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | pill + envelope |
| 1.04 | — | — | envelope pulses on "Document" |
| 1.70 | — | — | stamp "500 g" stamps in |
| 3.28 | — | — | stamp's Hindi line fades |
| 6.42 | — | — | strip reveals |
| 7.74 | — | — | bottom arrow draws + "420" types |
| 9.30 | — | — | right arrow + "× 297" |
| 11.52 | — | — | thickness tick + "× 24 mm" |

## s051
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: exam angle, ordinary parcel: 35 kg, length 1.5 m, length + girth 3 m; charge on the greater weight. In: cut. Framing: wide, still.
Component: key-fact-stamp (piece) — "35 kg", Hindi "Ordinary parcel".
Layout: same pill x 140 y 190; stamp x 140–700 y 300–640; `dimension-box` 1.1 (704×462) x 960–1664 y 270–732, label "1.5 m" by #len, chip "लंबाई + Girth = 3 m" 48 px under box y 740; sand band x 140–1780 y 830–960: "Charge" 52 px bold + "gross और volumetric में जो ज़्यादा" 40 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | pill + box drawing |
| 1.10 | — | — | stamp "35 kg" stamps in |
| 3.10 | — | — | #len arrow draws; "1.5 m" pops 3.98 |
| 5.20 | — | — | #girth-loop draws |
| 6.66 | — | — | chip "लंबाई + Girth = 3 m" pops |
| 7.82 | — | — | band reveals with "Charge" |
| 8.84 | — | — | Hindi line words in |
| 11.48 | — | — | highlight "जो ज़्यादा" |

## s052
Continues: no
Section label: PART 2 · WEIGHT AND SIZE
Idea: trap: an option writing length + breadth + thickness for length + girth is wrong. In: cut. Framing: wide, still.
Component: exam-trap — banner "EXAM TRAP · परीक्षा का जाल" with Hindi line "Option में गलत जोड़"; two cards, no stamps, no remember bar.
Layout: banner x 120–1800 y 190–360. Left white card x 140–920 y 420–900: "लंबाई + Girth" 64 px bold, Georgia sub "Girth = 2 × (चौड़ाई + मोटाई)" 40 px, green tick. Right card yellow border x 1000–1780: "लंबाई + चौड़ाई + मोटाई" 56 px, slate cross slot.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner on screen |
| 0.80 | — | — | left card pops with "लंबाई + Girth" |
| 1.64 | — | — | Georgia sub fades on "girth" |
| 2.68 | — | — | right card pops, words in (gap 0.4) |
| 5.48 | — | — | green tick draws on left card |
| 5.96 | — | — | slate strike on right line + slate cross on "गलत" |

## s053
Continues: no
Section label: RECAP · PARTS 1–2
Idea: recap of Parts 1–2 begins: Speed Post's two classes. In: wipe (from right). Framing: wide, still.
Component: recap-card — 5 rows (moulded from 3–4), seal "5", flap "RECAP · दोहराव" + red title "Parts 1–2 · भाग 1 और 2"; rows: English term 48 px bold, Hindi 36 px under, yellow fact pill right x 820–1360, green tick x 1380.
Layout: card x 140–1400 y 170–990, flap y 170–320, rows 130 tall from y 330. `speed-post-emblem` 0.65 x 1450–1790 base y 960.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card with flap, title, seal; emblem |
| 1.58 | — | — | seal pulses on "ऊपर" |
| 6.56 | — | — | row 1 "Document · Parcel" / "दस्तावेज · पार्सल" fades |
| 7.96 | — | — | pill "दो classes" pops |
| 10.48 | — | — | row 1 tick draws green |

## s054
Continues: s053
Section label: RECAP · PARTS 1–2
Idea: commercial item under 500 g is still a parcel; Document limits. In: cut. Framing: wide, still.
Layout: exactly as s053 (card x 140–1400, emblem right); row 2 y 460–590, row 3 y 590–720.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried card, row 1 ticked; row 2 "Commercial item" / "व्यापारिक सामान" fades |
| 1.70 | — | — | pill "500 g से कम भी → Parcel" pops |
| 4.28 | — | — | row 2 tick draws |
| 5.20 | — | — | row 3 "Speed Post Document" / "स्पीड पोस्ट दस्तावेज" fades |
| 5.62 | — | — | pill "500 g" pops |
| 7.82 | — | — | pill extends with "· 420 × 297 × 24 mm" (types) |
| 11.96 | — | — | row 3 tick draws |

## s055
Continues: s054
Section label: RECAP · PARTS 1–2
Idea: Parcel limits and chargeable weight close the recap. In: cut. Framing: wide, still.
Layout: exactly as s054; row 4 y 720–850, row 5 y 850–980.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried card, rows 1–3 ticked; row 4 "Speed Post Parcel" / "स्पीड पोस्ट पार्सल" fades |
| 0.90 | — | — | pill "35 kg" pops |
| 2.96 | — | — | pill types "· 1.5 m" |
| 6.20 | — | — | pill types "· L + Girth 3 m" |
| 7.10 | — | — | row 4 tick draws |
| 7.54 | — | — | row 5 "Charge" / "charge वाला वजन" fades |
| 8.50 | — | — | pill "gross / volumetric: जो ज़्यादा" pops |
| 11.04 | — | — | row 5 tick draws |
## s056
Continues: no
Section label: PART 3 · TARIFF
Idea: Part 3 opens; the postage depends on three things (product, chargeable weight, distance/area category). In: fade. Framing: wide, still.
Component: chapter-title — kicker "PART 3 · भाग 3", title "Speed Post / Tariff", Hindi "स्पीड पोस्ट का शुल्क" (yellow underline draws on), subtitle "Postage कैसे तय होता है", dots "भाग 3 / 11"; stamp window holds `speed-post-emblem`, value "03". Shot #title 0–4.27.
Layout: shot #title as the component. Shot #factors (4.27): heading "Postage · तीन बातें" (red, 56 px) at y 230; three white cards 500×320 at x 140, 710, 1280, y 290–610 (kept there in s057), each a red number badge, an ink icon (envelope+parcel, `parcel-scale`, small `india-outline-map`) and words beneath: "Product · उत्पाद", "charge वाला वजन", "दूरी / इलाके की category".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title fades in with stamp and title |
| 0.80 | — | — | Hindi title underline draws |
| 1.69 | — | — | subtitle fades |
| 4.27 | — | — | cut to #factors: heading + card 1 "Product" pop |
| 4.84 | — | — | card 2 "charge वाला वजन" pop |
| 6.95 | — | — | card 3 "दूरी / इलाके की category" pop |
| 8.48 | — | — | "category" highlight |

## s057
Continues: s056
Section label: PART 3 · TARIFF
Idea: customer type (retail / contractual bulk) also matters; one product's tariff never applies to another. In: cut. Framing: wide, still.
Layout: #factors exactly as s056 (heading y 230, cards y 290–610). Sand strip #cust x 140–1780, y 640–760: "Customer:" (Hindi 40) + two pills "retail · खुदरा" and "contractual bulk · अनुबंध (थोक)". White rule line #one y 800–960: tag "Speed Post Document" → arrow → tag "Speed Post Parcel", Hindi caption "एक product का tariff, दूसरे पर नहीं".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading and three factor cards carried over; strip #cust fades with "retail" pill |
| 1.27 | — | — | "contractual bulk" pill pop |
| 3.69 | — | — | Hindi "इससे भी फ़र्क पड़ता है" fades in strip's right end |
| 5.43 | — | — | tag "Speed Post Document" pop |
| 6.88 | — | — | arrow draws, tag "Speed Post Parcel" pop |
| 8.17 | — | — | arrow strike (slate) + slate cross; Hindi caption fades |

## s058
Continues: no
Section label: PART 3 · TARIFF
Idea: each product has its own table in Schedule I; the six-row list on screen; Table IV A for the ordinary document. In: cut. Framing: wide, still.
Layout: document card #sched (white, #ead9a8 border) x 120–1800, y 175–985. Title "Schedule I · Tariff tables" (Georgia 50, red) y 230. Header row y 270–320 grey caps: "PRODUCT · उत्पाद" / "TABLE" / "से लागू". Six rows 100 px each from y 330 (English 46 bold, Hindi 36 beneath; table Georgia 56 at x 1300; date x 1560): 1 Ordinary Speed Post Document · साधारण दस्तावेज · IV A · 1 Oct 2025; 2 Speed Post Parcel (retail + contractual) · पार्सल · IV · 1 Aug 2026; 3 24 Speed Post Document (retail) · IV B · 1 Aug 2026; 4 48 Speed Post Document (retail) · IV C · 1 Aug 2026; 5 24 Speed Post Parcel · IV D · 17 Mar 2026; 6 24 & 48 Document (contractual bulk) · IV E, IV F · 1 Aug 2026. Source y 955 grey 28: "Post Office Regulations 2024, Schedule I, as amended 2025–2026".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card #sched with title and header row already on |
| 2.12 | — | — | "Schedule I" underline |
| 3.46 | — | — | six rows fade in, stagger 0.2 |
| 4.96 | — | — | source line fades |
| 7.67 | — | — | row 1 highlight band |
| 10.17 | — | — | "IV A" pulse |

## s059
Continues: s058
Section label: PART 3 · TARIFF
Idea: Table IV for the parcel (retail and contractual); the ordinary document tariff from 1 October 2025. In: cut. Framing: wide, still.
Layout: #sched exactly as s058 (row 1 band on).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Schedule I card, all six rows, row 1 band |
| 1.09 | — | — | row 2 highlight band |
| 2.21 | — | — | "IV" (row 2) pulse |
| 3.11 | — | — | underline words "retail" in row 2 |
| 4.12 | — | — | underline words "contractual" in row 2 |
| 7.50 | — | — | row 1 date "1 Oct 2025" highlight |
| 8.26 | — | — | hand-drawn circle round "1 Oct 2025" (the one annotation) |

## s060
Continues: s059
Section label: PART 3 · TARIFF
Idea: parcel and premium documents from 1 August 2026; then the document's weight slabs begin. In: cut. Framing: wide, still.
Layout: shot #sched as s059 (0–6.81). Shot #matrix (6.81): white card #m-card x 100–1820, y 180–980; red band y 180–260 "Ordinary Speed Post Document · Table IV A" (white 44); left column x 120–420 with corner label "वजन ↓ · दूरी →" (Hindi 36) at y 330; grid lines for 6 columns (226 px from x 440) and 3 rows (y 410–560, 570–720, 730–880), all blank; source grey y 930 "Post Office Regulations 2024, Schedule I".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Schedule I card as before |
| 1.49 | — | — | row 2 date "1 Aug 2026" highlight |
| 3.76 | — | — | dates of rows 3, 4, 6 highlight, stagger 0.2 |
| 6.81 | — | — | cut to #matrix: card, red band and empty grid |
| 9.41 | — | — | corner label "वजन ↓" fades, left column tinted #f3ead6 |

## s061
Continues: s060
Section label: PART 3 · TARIFF
Idea: three weight slabs and six distance categories form the table's grid. In: cut. Framing: wide, still.
Layout: #matrix as s060. Slab labels in left column (English 48 bold): r1 "50 g तक", r2 "51–250 g", r3 "251–500 g". Column headers y 280–400 (two lines, 40/36 px): Local · स्थानीय | 200 km तक | 201–500 km | 501–1000 km | 1001–2000 km | 2000 km से ऊपर.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | empty grid with header band; "50 g तक" types in r1 |
| 1.32 | — | — | "51–250 g" types in r2 |
| 4.62 | — | — | "251–500 g" types in r3 |
| 7.20 | — | — | header row tinted #f3ead6 fades |
| 8.14 | — | — | six column headers pop, stagger 0.15 |

## s062
Continues: s061
Section label: PART 3 · TARIFF
Idea: from local up to above 2000 km; in the first 50 g the non-local postage is the same at every distance. In: cut. Framing: wide, still.
Layout: #matrix as s061 (all labels on).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | full grid with slabs and six headers; "Local" header highlight |
| 1.50 | — | — | "2000 km से ऊपर" header highlight |
| 4.63 | — | — | r1 label "50 g तक" underline |
| 6.47 | — | — | yellow band #r1-band (soft #fde9a6) grows left→right across r1's five non-local cells (x 666–1796) |
| 8.89 | — | — | four "=" signs (ink 56) pop at the cell borders inside the band, stagger 0.1 |

## s063
Continues: s062
Section label: PART 3 · TARIFF
Idea: "One India One Rate": a non-local document up to 50 g is ₹47 at any distance. In: cut. Framing: wide, still.
Layout: #matrix as s062. Pill #oior in the red header band, right end x 1300–1780, y 196–246: yellow #f2b705 with "One India One Rate" ink 40 bold. ₹47 (Inter 60 bold, ink) centred in each of r1's five non-local cells, between the "=" signs.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grid, r1 band with "=" signs |
| 0.48 | — | — | #oior stamp in header band |
| 4.68 | — | — | r1 band pulse |
| 7.58 | — | — | ₹47 pops in five cells, stagger 0.08 |

## s064
Continues: s063
Section label: PART 3 · TARIFF
Idea: heavier documents: the distance slab changes the postage; next, what "local" means. In: cut. Framing: wide, still.
Layout: #matrix as s063. Across rows 2–3 (empty cells) an ink arrow #dist-arrow from x 470 to 1780 at y 725 (on the row line), with Hindi 44 "दूरी का slab बढ़े → postage बदले" centred above it at y 680 (white backing chip).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grid with ₹47 row and One India One Rate pill |
| 0.80 | — | — | r2 and r3 labels highlight |
| 2.18 | — | — | #dist-arrow draws left→right, 1.0 s |
| 4.14 | — | — | Hindi chip fades on the arrow |
| 5.59 | — | — | "Local" column header pulse + underline |

## s065
Continues: no
Section label: PART 3 · TARIFF
Idea: "local" in three situations: metro (identified PIN codes), other cities (municipal limits), small towns / mofussil (same PIN-code delivery jurisdiction). In: cut. Framing: wide, still.
Layout: heading "Local · स्थानीय — तीन हालात" (red 52) y 220. Three white cards 520×480, x 130 / 700 / 1270, y 290–770, each: ink icon 200 px tall (metro skyline with PIN pins; city buildings inside a dashed boundary; two small houses with one PIN pin), English 48 bold name, Hindi 36 lines beneath. Card 1 "Metro" / "तय PIN codes के अंदर booking और delivery"; card 2 "दूसरे शहर" / "municipal सीमा के अंदर"; card 3 "छोटे towns / mofussil" / "उसी PIN code का delivery इलाका".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading + card 1 with icon and "Metro" |
| 1.58 | — | — | card 1 line "तय PIN codes के अंदर…" fades |
| 4.46 | — | — | card 2 pop with icon and "दूसरे शहर" |
| 6.28 | — | — | card 2 line "municipal सीमा के अंदर" fades; dashed boundary draws |
| 8.88 | — | — | card 3 pop with "छोटे towns / mofussil" |
| 11.92 | — | — | card 3 line "उसी PIN code का delivery इलाका" fades |

## s066
Continues: s065
Section label: PART 3 · TARIFF
Idea: case 3 is only for towns with no separate town delivery area; an option saying "every item within the State is local" is wrong. In: cut. Framing: wide, still.
Layout: three cards as s065 (y 290–770). Note inside card 3 bottom y 700–760 (amber 36): "जहाँ अलग town delivery area नहीं". Option band #opt x 220–1700, y 820–950: white card with slate left bar, grey label "Option:" and Hindi 44 "उसी State के अंदर हर item local".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three local cards carried over |
| 0.42 | — | — | card 3 yellow outline draws |
| 3.04 | — | — | card 3 note fades |
| 5.52 | — | — | option band #opt slides up |
| 6.82 | — | — | "उसी State के अंदर हर item local" words in |

## s067
Continues: s066
Section label: PART 3 · TARIFF
Idea: that option is wrong; then four document examples (GST extra), table on screen. In: cut. Framing: wide, still.
Component: compare-table — one table, header row red: "वजन" | "दूरी" | "Postage"; four rows, no outline yet; source line "Schedule I, Table IV A · GST अलग".
Layout: shot #local (s066 layout, 0–2.36). Shot #examples (2.36): title "Ordinary Speed Post Document · 4 उदाहरण" (red 50) y 220, yellow chip "GST अलग" at x 1500–1780 y 190–250; table x 160–1760, y 290–950, header y 290–370, rows 140 px: 50 g तक · Local | 50 g तक · non-local | 55 g · Local | 500 g · 2000 km से ऊपर; Postage cells (x 1350–1720) blank.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | local cards and option band carried over |
| 0.46 | — | — | option strike (slate) + slate cross at right |
| 2.36 | — | — | cut to #examples: title and table header |
| 3.88 | — | — | "GST अलग" chip pop |
| 5.33 | — | — | four rows fade in, stagger 0.15 (weight and distance only) |
| 7.19 | — | — | row 1 highlight band |

## s068
Continues: s067
Section label: PART 3 · TARIFF
Idea: ₹19 local and ₹47 non-local up to 50 g; 55 g local is ₹24 because it falls in the 51–250 g slab. In: cut. Framing: wide, still.
Layout: #examples as s067. Postage values Inter 64 bold red in the right column. In row 3's weight cell a small amber 36 line under "55 g": "→ 51–250 g slab".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table with four rows, row 1 band; "₹19" pops in row 1 |
| 1.57 | — | — | band moves to row 2 |
| 4.55 | — | — | "₹47" pops in row 2 |
| 6.25 | — | — | band moves to row 3 |
| 9.12 | — | — | "₹24" pops in row 3 |
| 11.64 | — | — | "→ 51–250 g slab" fades under "55 g" |
| 14.45 | — | — | "slab" underline |

## s069
Continues: s068
Section label: PART 3 · TARIFF
Idea: the fourth example: a 500 g document beyond 2000 km. In: cut. Framing: wide, still.
Layout: #examples as s068 (₹19, ₹47, ₹24 in, slab note under 55 g).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table with three amounts filled |
| 0.29 | — | — | band moves to row 4 |
| 2.43 | — | — | underline "2000 km से ऊपर" in row 4 |

## s070
Continues: s069
Section label: PART 3 · TARIFF
Idea: ₹93; then adding services raises the amount, starting from a ₹19 local document. In: cut. Framing: wide, still.
Layout: shot #examples (0–4.95). Shot #sum (4.95): white receipt-style card x 360–1560, y 190–970 (ink outline, dashed tear line at its foot); title "Services जोड़िए → रकम बढ़ती है" (red 50) y 260; line 1 y 380: "50 g · Local Speed Post Document" (English 46) left, amount right-aligned at x 1460 (Inter 64).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table; "₹93" pops in row 4 |
| 0.90 | — | — | "₹93" pulse (key fact holds to 4.95) |
| 4.95 | — | — | cut to #sum: card, title, line 1 text |
| 7.55 | — | — | "₹19" pops at line 1's right |

## s071
Continues: s070
Section label: PART 3 · TARIFF
Idea: + registration ₹5 + OTP delivery ₹5 = ₹29 before GST. In: cut. Framing: wide, still; slow push-in 5% on #total from 7.1, back to 1 by 10.2.
Layout: #sum as s070. Line 2 y 520: "+ Registration" (46 bold) with "पंजीकरण" (36) beneath, "₹5" right. Line 3 y 660: "+ OTP delivery" with "OTP से वितरण" beneath, "₹5" right. Ink rule y 760 (x 420–1500). #total y 850: "कुल" (Hindi 48) left, "₹29" (Inter 80 red) right; chip "GST से पहले" (amber on #fde9a6) beside it at x 900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | sum card with line 1 and ₹19 |
| 1.26 | — | — | line 2 "+ Registration" fades |
| 2.72 | — | — | "₹5" pops |
| 4.56 | — | — | line 3 "+ OTP delivery" fades |
| 5.90 | — | — | "₹5" pops |
| 7.10 | — | — | rule draws; "कुल" fades |
| 7.46 | — | — | "₹29" counts from 19 |
| 8.84 | — | — | "GST से पहले" chip pop |

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

## s075
Continues: s074
Section label: PART 3 · TARIFF
Idea: then metro; example: a retail parcel up to 500 g (GST extra): Local ₹28, Within State ₹76. In: cut. Framing: wide, still.
Layout: shot #areas (s074 layout, 0–1.38). Shot #parcel-eg (1.38): left `parcel-scale` scale 1.0 at x 160–720, base y 900, with `speed-post-parcel` placed on its top; display reads "500 g" (white). Right: heading "Retail · Speed Post Parcel" (red 48) x 860 y 250, "500 g तक" (Hindi 44) y 310, chip "GST अलग" x 1500 y 300. Two `key-fact-stamp` cards scale 0.8 (448×272): x 860–1308 and 1340–1788, y 420–692: "₹28" over "Local · स्थानीय", "₹76" over "Within State · राज्य के अंदर".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | areas screen; arrow draws, "Metro" pill pops on "metro" at 0.46 |
| 1.38 | — | — | cut to #parcel-eg: scale with parcel placed, heading |
| 2.32 | — | — | "Retail" highlight |
| 4.06 | — | — | "500 g" counts on the display; "500 g तक" fades |
| 5.70 | — | — | "GST अलग" chip pop |
| 8.20 | — | — | stamp "₹28 Local" stamps in |
| 10.86 | — | — | stamp "₹76 Within State" stamps in |

## s076
Continues: s075
Section label: PART 3 · TARIFF
Idea: these are parcel amounts; the document's ₹19 and ₹47 are separate; the ordinary document's table is separate. In: cut. Framing: wide, still.
Component: compare-cards — two white cards (no question line): left red band "Speed Post Document · दस्तावेज" with "₹19 · ₹47" big, chip slot "Table IV A"; right sand band "Speed Post Parcel · पार्सल" with "₹28 · ₹76", chip slot "Table IV"; disc "≠" between; no takeaway.
Layout: shot #parcel-eg (0–2.14). Shot #cmp (2.14): cards 760×600 at x 140–900 and 1020–1780, y 260–860; disc at x 960 y 560; chips y 780.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel example with two stamps |
| 0.30 | — | — | "Retail · Speed Post Parcel" underline |
| 2.14 | — | — | cut to #cmp: right card with ₹28 · ₹76; left card band "Speed Post Document" |
| 2.90 | — | — | "₹19" pops (left) |
| 4.14 | — | — | "₹47" pops |
| 7.04 | — | — | "≠" disc pop |
| 9.76 | — | — | left chip "Table IV A" types |

## s077
Continues: s076
Section label: PART 3 · TARIFF
Idea: the document table runs separately from the parcel tables; two special points, the first about Army Postal Service offices. In: cut. Framing: wide, still.
Layout: shot #cmp (0–3.08). Shot #special (3.08): heading "दो खास बातें" (red 52) y 220. Card 1 #sp1 x 140–1780, y 280–580: red badge "1", "Army Postal Service (APS) offices" (English 52 bold) x 260 y 380, "सेना डाक सेवा के offices को भेजी booking" (Hindi 40) y 450; right end slot for an arrow and pill. Card 2 slot y 620–960 empty until s078.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | compare cards; right chip "Table IV" types at 0.98 |
| 1.62 | — | — | "≠" disc pulse |
| 3.08 | — | — | cut to #special: heading only |
| 3.48 | — | — | badge "1" pops |
| 4.88 | — | — | card 1 fades with "Army Postal Service (APS) offices" |
| 7.18 | — | — | Hindi line words in |

## s078
Continues: s077
Section label: PART 3 · TARIFF
Idea: APS bookings may be treated as Other States, from anywhere; in NCR the municipal limits of five areas count as local. In: cut. Framing: wide, still.
Layout: #special as s077. In card 1 right x 1260–1740: arrow, pill "Other States · अन्य राज्य", grey Hindi 36 "मानी जा सकती है · booking कहीं से भी". Card 2 #sp2 x 140–1780, y 620–960: badge "2", "NCR" (52 bold) + "राष्ट्रीय राजधानी क्षेत्र" (36), arrow, sand pill "Local · स्थानीय" with Hindi "पाँच इलाकों की municipal सीमा"; chip row slot y 870–940.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card 1; arrow draws, "Other States" pill pop |
| 1.42 | — | — | "मानी जा सकती है" fades |
| 2.72 | — | — | "booking कहीं से भी" fades |
| 4.50 | — | — | card 2 fades with badge "2" |
| 4.88 | — | — | "NCR" types; Hindi fades |
| 6.18 | — | — | "पाँच इलाकों की municipal सीमा" fades |
| 8.92 | — | — | arrow draws, "Local" pill pop |

## s079
Continues: s078
Section label: PART 3 · TARIFF
Idea: the five NCR areas; exam angle: identify the product first, then its tariff table. In: cut. Framing: wide, still.
Layout: shot #special: chip row in card 2 y 870–940, five white chips (English 44): Delhi, Faridabad, Ghaziabad, Gurgaon, Gautam Budh Nagar. Shot #exam (6.26): red band x 140–1780, y 220–320 "EXAM ANGLE · परीक्षा की नज़र से" (pale yellow caps 44); two big white step cards 700×420 at x 180 and 1040, y 400–820, red badges "1" / "2": "Product पहचानिए" with emblem icon; "फिर Tariff table" with small table icon; ink arrow between.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both special cards; "Delhi" chip pop |
| 0.70 | — | — | "Faridabad" chip pop |
| 1.86 | — | — | "Ghaziabad" chip pop |
| 3.04 | — | — | "Gurgaon" chip pop |
| 4.56 | — | — | "Gautam Budh Nagar" chip pop |
| 6.26 | — | — | cut to #exam: band |
| 8.00 | — | — | step 1 card pop |
| 9.44 | — | — | arrow draws, step 2 card pop |

## s080
Continues: no
Section label: PART 3 · TARIFF
Idea: remember the tariff: ordinary document slabs and the first slab's local ₹19. In: cut. Framing: wide, still.
Component: recap-card — flap label "याद रखें", title "Tariff", seal "3"; three rows (sized 1600×780, x 160–1760, y 190–970): row 1 "Ordinary Speed Post Document / साधारण स्पीड पोस्ट दस्तावेज" with a second line of three slab chips (50 g तक · 51–250 g · 251–500 g) and pill "₹19 · ₹47" right; row 2 "Speed Post Parcel / पार्सल", pill "retail ≠ contractual"; row 3 "Local / स्थानीय", pill "तय PIN codes / municipal सीमा".
Layout: flap y 190–340; rows y 360–600, 620–780, 800–960. Rows 2–3 hidden until s081.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope with flap, title, seal; row 1 term fades |
| 1.08 | — | — | chip "50 g तक" pop |
| 2.92 | — | — | chip "51–250 g" pop |
| 5.52 | — | — | chip "251–500 g" pop |
| 8.30 | — | — | "पहला slab" chip "50 g तक" highlight |
| 9.68 | — | — | pill appears with "₹19" |

## s081
Continues: s080
Section label: PART 3 · TARIFF
Idea: non-local ₹47 (GST extra); parcel retail and contractual tariffs differ; local = within identified PIN codes or municipal limits. In: cut. Framing: wide, still.
Layout: recap-card as s080; row 1 pill reads "₹19 · ₹47" with small "GST अलग" (grey 36) under it.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope with row 1, slab chips, pill "₹19" |
| 0.56 | — | — | "· ₹47" fades into the pill |
| 2.02 | — | — | "GST अलग" fades; row 1 green tick draws |
| 3.14 | — | — | row 2 "Speed Post Parcel" fades |
| 4.68 | — | — | pill "retail ≠ contractual" pop |
| 6.44 | — | — | row 2 tick |
| 7.30 | — | — | row 3 "Local" fades |
| 8.58 | — | — | pill "तय PIN codes / municipal सीमा" pop |
| 13.18 | — | — | row 3 tick |
## s082
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: Part 4 opens, then what the booking office does: takes the item, records it, hands a receipt. In: fade (0.5). Framing: wide, still.
Component: chapter-title — kicker "PART 4 · भाग 4", title "Booking, Transmission & Tracking", Hindi "बुकिंग, प्रेषण और ट्रैकिंग", progress "Part 4 of 11 · भाग 4 / 11"; stamp holds `speed-post-emblem`, value "04".
Layout: shot #title (whole frame). Shot #counter: `booking-counter` x 120–856, y 440–923 (scale 1.15), `speed-post-parcel` (scale 0.5) on its ledge; 3-step card right x 960–1800, y 200–760 (red badges, Hindi 44 px); yellow note strip x 960–1800, y 800–940.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title fades in, stamp emblem drawn |
| 0.36 | — | — | Hindi title underline draws |
| 2.56 | — | — | cut to #counter: counter, parcel on ledge, step 1 "eligible item लेना" |
| 3.08 | — | — | step 2 "booking दर्ज करना" pops |
| 4.72 | — | — | step 3 "receipt देना" pops |
| 4.98 | — | — | `receipt-slip` (scale 0.6) slides up out of the opening onto the ledge |
| 6.30 | — | — | note "Receipt: जाँचिए और संभालिए" reveals; 7.68 underline "संभालिए" |

## s083
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: the receipt carries the article number: needed for tracking, the proof in a complaint or claim; it has 13 characters. In: cut. Framing: wide, still.
Layout: shot #why: `receipt-slip` scale 1.7 left x 160–602, y 250–896 (barcode band outlined yellow); term block right x 720–1780, y 220–420 ("Article number" Inter 72 bold, Hindi "हर item की अलग पहचान संख्या" 40 px); three chips in a row y 520–640 (x 720/1080/1440, 320 wide); red round postmark "सबूत" x 1500, y 800. Shot #count: `key-fact-stamp` centred x 680–1240, y 170–510; 13 white tiles (110×140, gap 12) x 166–1754, y 620–760, tiny grey 1–13 under each.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | receipt slip on the left |
| 0.44 | — | — | "Article number" reveals; barcode band highlight; Hindi fades 0.90 |
| 1.88 | — | — | chip "Tracking" pops |
| 4.04 | — | — | chip "Complaint" pops |
| 5.30 | — | — | chip "Claim" pops |
| 6.60 | — | — | postmark "सबूत" stamps |
| 7.60 | — | — | cut to #count: empty tile row outlines |
| 9.52 | — | — | stamp pops "13", pale-yellow line "characters" |
| 9.90 | — | — | tiles fill white with ink outline, stagger 0.06 (count left to right) |

## s084
Continues: s083
Section label: PART 4 · BOOKING AND TRACKING
Idea: alphanumeric = letters and digits, so "13-digit number" is wrong. In: cut. Framing: wide, still.
Component: exam-trap — banner "13-digit number कहना गलत"; two cards: left (green tick) "13 characters" with "letters + digits"; right, the trap (yellow border) "13-digit number"; no numbers invented, no sample article number.
Layout: 0–4.40 shot #count kept from s083 (stamp x 680–1240, y 170–510; tiles y 620–760); "Alphanumeric" Inter 60 bold centred y 850, Hindi "letters भी + digits भी" 44 px y 920. Shot #trap from 4.40: banner x 100–1820, y 170–330; cards x 140–900 and 1020–1780, y 400–900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: "13 characters" stamp and the 13 tiles |
| 0.10 | — | — | "Alphanumeric" reveals under the tiles |
| 0.84 | — | — | Hindi line words in |
| 1.62 | — | — | highlight "letters" |
| 3.34 | — | — | highlight "digits" |
| 4.40 | — | — | cut to #trap: banner and left card "13 characters ✓" |
| 5.90 | — | — | right card "13-digit number" pops (yellow border) |
| 7.40 | — | — | slate strike on "13-digit", slate cross draws |

## s085
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: 24-hour booking only at some chosen offices in big cities, not every post office. In: cut. Framing: wide, still.
Layout: term top-left x 140–1100: "24-hour booking" Inter 72 bold y 250, Hindi "चौबीसों घंटे बुकिंग" 40 px y 320; Hindi line "बड़े शहरों के कुछ चुने offices में" 44 px y 420. Five `booking-counter` windows (scale 0.45, 288×189) in a row x 160–1760, y 560–750. Slate line "हर post office में नहीं" 44 px centred y 880.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "24-hour booking" term on screen |
| 0.50 | — | — | Hindi translation fades in |
| 1.16 | — | — | five counter windows fade in, stagger 0.1 |
| 1.88 | — | — | Hindi line words in |
| 2.86 | — | — | windows 2 and 4 get a yellow band behind and a small "24h" tag pops above each |
| 4.98 | — | — | the other three dim to grey |
| 6.28 | — | — | slate line "हर post office में नहीं" reveals |

## s086
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: Click N Book is online booking for Speed Post and registration services; online booking and online tracking are two different things. In: cut. Framing: wide, still.
Layout: shot #cnb: drawn browser window x 900–1780, y 200–900 (sand title bar, `speed-post-parcel` scale 0.6 inside, red "Book" button); left: "Click N Book" Inter 80 bold x 140 y 320, Hindi "ऑनलाइन बुकिंग" 44 px y 400; two chips x 140–760 at y 520 and y 660. Shot #pair (from 5.70): two white cards x 140–900 and 1020–1780, y 220–860, left red header "Online booking" / "ऑनलाइन बुकिंग", right sand header "Online tracking" / "ऑनलाइन ट्रैकिंग" (headers y 220–380, body left empty for s087); "≠" disc x 960 y 540; line "दो अलग चीज़ें" 48 px y 940.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | browser window and "Click N Book" on screen |
| 0.66 | — | — | Hindi line fades in |
| 1.74 | — | — | chip "Speed Post" pops |
| 2.98 | — | — | chip "Registration वाली services" pops |
| 5.70 | — | — | cut to #pair: left card |
| 7.02 | — | — | right card pops |
| 8.22 | — | — | "≠" disc pops; "दो अलग चीज़ें" words in |

## s087
Continues: s086
Section label: PART 4 · BOOKING AND TRACKING
Idea: booking = arranging for the item to be accepted; tracking = the journey of a booked item. Then transmission: Document and Parcel go by air. In: cut. Framing: wide, still.
Layout: 0–7.64 shot #pair as s086 (cards x 140–900 / 1020–1780, y 220–860, "≠" disc, bottom line). Meaning lines in Hindi 44 px at y 470–560 in each card; small icon below (left `booking-counter` scale 0.4, right dotted route line with a parcel). Shot #route from 7.64: "Transmission" Inter 64 bold x 140 y 230, Hindi "प्रेषण" 40 px y 295; chips x 140–640: "Speed Post Document" (red) y 400–500, "Speed Post Parcel" (sand) y 540–640; air lane right: dashed arc x 760–1760 peaking y 330, plane (`transport-icons` #plane, scale 1) on it; road lane space y 700–820 left empty for s088.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: the two cards, "≠", "दो अलग चीज़ें" |
| 0.78 | — | — | left: "item स्वीकार कराने का इंतज़ाम" words in; counter icon fades |
| 3.70 | — | — | right: "booked item का सफ़र" words in; route line draws |
| 7.64 | — | — | cut to #route: "Transmission" and Hindi |
| 9.02 | — | — | chip "Speed Post Document" pops |
| 10.72 | — | — | chip "Speed Post Parcel" pops |
| 11.44 | — | — | air arc draws, plane pops on it, label "हवाई रास्ता" 44 px fades above |

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

## s091
Continues: s090
Section label: PART 4 · BOOKING AND TRACKING
Idea: the list holds article numbers and their booking offices, the total at the bottom; the receiving office checks the articles against it. In: cut. Framing: wide, still.
Layout: shot #bag carried (bag x 160–560, y 300–640 with label; list sheet x 1000–1608, y 190–988). On the sheet: column heads Inter 36 bold "Article No." (x 1040) and "Booking office" (x 1300), five rows of grey placeholder bars (no real numbers), y 340–760; total row y 840–900 "कुल संख्या" 40 px. Left lower: `booking-counter` scale 0.5 x 200–520, y 740–950, label "पाने वाला office" 40 px y 1000.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: bag, label, list sheet "Speed Post list" |
| 0.50 | — | — | "Article No." head types; its five bars draw, stagger 0.12 |
| 2.74 | — | — | "Booking office" head types; bars draw |
| 5.00 | — | — | total row reveals |
| 5.54 | — | — | highlight "कुल संख्या" |
| 6.58 | — | — | receiving counter fades in, label 7.62 |
| 9.60 | — | — | green ticks draw beside the five rows, stagger 0.2 |

## s092
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: tracking: Track and trace runs on the internet; enter the article number, see the recorded events of the journey. In: cut. Framing: wide; slow push-in 5% on #events from 6.14, back to 1 before the cut.
Layout: left x 140–760: "Track and trace" Inter 72 bold y 300, Hindi "internet पर item का पता" 44 px y 380; chip "internet" with globe line icon y 500. Right: drawn browser window x 820–1780, y 200–960: search field y 270–350 with 13 small tiles, red button; event list #events y 420–900: three rows with ink dots on a vertical line: "Booking", "सफ़र में", "Delivery" (44 px).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | browser window (empty) on the right |
| 1.20 | — | — | "Track and trace" reveals |
| 1.70 | — | — | Hindi line fades |
| 2.14 | — | — | "internet" chip pops |
| 4.52 | — | — | search tiles fill, left to right |
| 5.38 | — | — | button pulses |
| 6.14 | — | — | push-in starts; event line draws |
| 7.60 | — | — | three event rows fade, stagger 0.3 |
| 9.30 | — | — | camera back to 1 |

## s093
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: SMS informs about events such as booking, journey and delivery; then an exam angle: a 2023 paper's key on "SMS based Track and Trace". In: cut. Framing: wide, still.
Layout: shot #sms: `otp-phone` scale 2 x 220–660, y 180–1020; three message bubbles (white, ink 3 px, 360 wide, Hindi 40 px) drawn on its screen over the OTP boxes: "Booking", "सफ़र में", "Delivery". Right x 820–1780: "SMS" Inter 96 bold y 380, Hindi "घटनाओं की जानकारी देता है" 48 px y 480. Shot #key from 6.60: white card (#ead9a8 border) x 260–1660, y 220–820: grey label "2023 · एक paper की key" 40 px, quoted line Georgia 64 "\"SMS based Track and Trace\"" y 520.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | phone and "SMS" on screen |
| 0.84 | — | — | bubble "Booking" slides up |
| 1.94 | — | — | bubble "सफ़र में" slides up |
| 2.98 | — | — | bubble "Delivery" slides up |
| 4.58 | — | — | Hindi line words in |
| 6.60 | — | — | cut to #key: empty card |
| 7.10 | — | — | label fades |
| 9.90 | — | — | quoted line types |

## s094
Continues: s093
Section label: PART 4 · BOOKING AND TRACKING
Idea: the key didn't count it as a Speed Post feature; remember the right facts: Track and trace is internet based, SMS gives delivery information. In: cut. Framing: wide, still.
Layout: 0–2.22 shot #key carried (card x 260–1660, y 220–820); verdict line "Speed Post feature: नहीं माना" 48 px y 720 inside card. Shot #remember from 2.22: cream card x 160–1760, y 200–940, red heading "सही बात याद रखिए" 56 px y 290; two rows: "Track and trace" Inter 56 bold → "internet based" (y 480), "SMS" Inter 56 bold → "delivery की जानकारी" 44 px (y 720), green tick at right of each.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: the 2023 key card and quoted line |
| 0.68 | — | — | verdict line reveals |
| 0.90 | — | — | underline "नहीं" |
| 2.22 | — | — | cut to #remember: card and heading |
| 4.04 | — | — | row 1 "Track and trace" fades |
| 5.98 | — | — | "internet based" reveals; tick draws 7.14 |
| 7.96 | — | — | row 2 "SMS" fades |
| 8.32 | — | — | "delivery की जानकारी" reveals; tick draws 10.62 |

## s095
Continues: no
Section label: PART 4 · BOOKING AND TRACKING
Idea: SMS and POD differ: SMS only gives status; POD is proof of delivery the sender asks for separately. In: cut. Framing: wide, still.
Component: compare-cards — no question line; left red header "SMS" / "संदेश", right sand header "POD" with "Proof of Delivery · वितरण का प्रमाण"; one fact each in Hindi 44 px; VS disc becomes "≠"; takeaway area becomes the bottom strip used in s096.
Layout: cards x 140–900 and 1020–1780, y 180–700 (headers y 180–330); "≠" disc x 960 y 440; `pod-card` scale 0.45 inside the POD card lower right; bottom cream strip x 140–1780, y 760–980.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | SMS card |
| 0.82 | — | — | POD card pops; Hindi name fades 1.30 |
| 1.64 | — | — | "≠" pops |
| 3.38 | — | — | SMS fact "सिर्फ status बताता है" words in |
| 4.24 | — | — | highlight "status" |
| 5.70 | — | — | POD fact "delivery का सबूत" words in; pod-card fades |
| 8.42 | — | — | second POD line "sender अलग से माँगता है" fades |
| 10.86 | — | — | strip fades in with "SMS आ गया…" 44 px at left |

## s096
Continues: s095
Section label: PART 4 · BOOKING AND TRACKING
Idea: an SMS doesn't prove registration, insurance or paid POD was taken; then the exam angle list starts: article number, 13 alphanumeric characters. In: cut. Framing: wide, still.
Component: step-list — moulded to five single-line rows (red numbered badges, row height 130, English terms bold Inter 44, Hindi 40 px), title "Exam angle" with Hindi "परीक्षा की नज़र से", no closing chip; rows build across s096–s098.
Layout: 0–6.66 cards and strip carried from s095; strip: "→ साबित नहीं:" then three slate-outlined chips x 820/1140/1460. Shot #exam from 6.66: title y 220–300 x 140; list card x 140–1780, y 330–1000, rows at y 380/510/640/770/900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: SMS / POD cards, "≠", strip "SMS आ गया…" |
| 0.80 | — | — | "→ साबित नहीं:" reveals |
| 2.06 | — | — | chip "Registration" pops |
| 3.28 | — | — | chip "Insurance" pops |
| 4.40 | — | — | chip "paid POD" pops |
| 6.66 | — | — | cut to #exam: title and empty list card |
| 8.28 | — | — | row 1 "Article number · 13 alphanumeric characters" slides in |
| 9.22 | — | — | highlight "13 alphanumeric" |

## s097
Continues: s096
Section label: PART 4 · BOOKING AND TRACKING
Idea: exam angle continues: 24-hour booking at chosen big-city offices; air route with the faster-surface exception; surface Speed Post Parcel ahead of India Post Parcel. In: cut. Framing: wide, still.
Layout: shot #exam carried (title, list card x 140–1780, y 330–1000, row 1 at y 380). Rows 2–4 at y 510/640/770, each one line: "24-hour booking · बड़े शहरों के चुने offices", "हवाई रास्ता · तेज़ surface route अपवाद", "Surface Speed Post Parcel · India Post Parcel से पहले".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: title, row 1 (highlight on "13 alphanumeric") |
| 0.10 | — | — | row 2 slides in; row 1 dims to grey |
| 2.34 | — | — | highlight "चुने offices" |
| 3.96 | — | — | row 3 slides in; row 2 dims |
| 7.12 | — | — | highlight "अपवाद" |
| 8.36 | — | — | row 4 slides in; row 3 dims |
| 12.26 | — | — | underline "पहले" |

## s098
Continues: s097
Section label: PART 4 · BOOKING AND TRACKING
Idea: last exam point: SMS information is not POD. In: cut. Framing: wide, still.
Layout: shot #exam carried (title, list card, rows 1–4 at y 380/510/640/770). Row 5 at y 900: "SMS की जानकारी" 40 px, then a slate "≠", then "POD" Inter 44 bold.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: title and rows 1–4 (row 4 with underline on "पहले") |
| 0.10 | — | — | row 5 slides in with "SMS की जानकारी"; row 4 dims |
| 1.64 | — | — | "POD" fades |
| 2.40 | — | — | slate "≠" pops between them |

## s099
Continues: no
Section label: RECAP · PARTS 3–4
Idea: recap of tariff and booking: Document first slab, local ₹19, non-local ₹47. In: wipe (from right). Framing: wide, still.
Component: recap-card — flap "RECAP · दोहराव", title "Tariff और Booking", seal "3"; three rows (row height 200); rows 2–3 come in s100.
Layout: envelope card x 260–1660, y 170–990 (flap y 170–330); rows at y 350/550/750; `speed-post-emblem` scale 0.35 at the flap right x 1420–1600, y 190–316. Row 1: "Speed Post Document" Inter 48 bold, Hindi "स्पीड पोस्ट दस्तावेज" 40 px; pill right x 1180–1620: "local ₹19 · non-local ₹47".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card with flap, title, seal and emblem |
| 1.44 | — | — | highlight "Tariff" on the title |
| 2.68 | — | — | highlight "Booking" |
| 6.28 | — | — | row 1 term fades; Hindi 6.78; small grey "पहला slab" 7.56 |
| 8.84 | — | — | pill part "local ₹19" pops |
| 11.32 | — | — | pill part "non-local ₹47" pops |
| 12.00 | — | — | green tick draws on row 1 |

## s100
Continues: s099
Section label: RECAP · PARTS 3–4
Idea: Local is set by fixed PIN codes or municipal limits; article number has 13 alphanumeric characters. In: cut. Framing: wide, still.
Layout: envelope card carried (x 260–1660, y 170–990, row 1 ticked at y 350). Row 2 y 550: "Local" Inter 48 bold, Hindi "स्थानीय" 40 px; pill "PIN codes / municipal सीमा". Row 3 y 750: "Article number" Inter 48 bold, Hindi "हर item की पहचान" 40 px; pill "13 alphanumeric".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: envelope card, row 1 ticked green |
| 0.10 | — | — | row 2 "Local" fades; Hindi 0.60 |
| 1.42 | — | — | pill "PIN codes / municipal सीमा" pops |
| 4.44 | — | — | green tick on row 2 |
| 4.80 | — | — | row 3 "Article number" fades; Hindi 5.30 |
| 5.54 | — | — | pill "13 alphanumeric" pops |
| 7.98 | — | — | green tick on row 3 |

## s101
Continues: no
Section label: RECAP · PARTS 3–4
Idea: recap, second envelope: air route with the faster-surface exception; SMS gives status, POD gives proof. In: cut. Framing: wide, still.
Component: recap-card — flap "RECAP · दोहराव", title "Transmission और Tracking", seal "2"; two rows (row height 220), card sized for them.
Layout: envelope card x 160–1300, y 200–900 (flap y 200–360); rows at y 400 and y 640; `speed-post-emblem` scale 0.9 right x 1360–1828, y 380–704, resting on a light ground line y 704. Row 1: "Transmission" Inter 48 bold, Hindi "प्रेषण" 40 px; pill "हवाई · तेज़ surface अपवाद". Row 2: "SMS · POD" Inter 48 bold; two pills "SMS = status" and "POD = सबूत".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card and emblem; row 1 "Transmission" with Hindi |
| 0.50 | — | — | pill part "हवाई" pops |
| 1.56 | — | — | pill part "तेज़ surface अपवाद" pops |
| 3.74 | — | — | green tick on row 1 |
| 4.40 | — | — | row 2 term fades; pill "SMS = status" pops 4.78 |
| 6.66 | — | — | pill "POD = सबूत" pops |
| 8.20 | — | — | green tick on row 2 |
## s102
Continues: no
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Part 5 opens; the five business facilities start as a numbered list, first Free pickup. In: fade (0.5). Framing: wide, still. Sub-shots: #title 0, #list 2.56.
Component: chapter-title — "PART 5 · भाग 5", title "Business customers", Hindi "व्यापारिक ग्राहक और volume discount", progress "Part 5 of 11 · भाग 5 / 11", `speed-post-emblem` in the stamp window, value "05".
Photo: india-post-delivery-van — cut-out (white border, 1° tilt, grey caption "Pickup") in the detail card; drawn ink van if missing.
Layout: #list: left list card x 100–940, five rows at y 230/400/570/740/910 (red number badge 64 px at x 100, English term 48 bold from x 190, Hindi 36 beneath). Right detail card x 1000–1820, y 180–980 (photo y 220–560, text y 620–720, chips y 800–900).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title kicker, emblem stamp, English title on screen |
| 0.40 | — | — | Hindi title fades, yellow underline draws |
| 1.46 | — | — | subtitle "5 सुविधाएँ" fades on "पाँच" |
| 2.56 | cut to #list | — | list card with five number badges (1 red, 2–5 grey) |
| 3.32 | — | — | row 1 "Free pickup" fades; "मुफ़्त pickup" at 3.68 |
| 4.48 | — | — | detail card + van photo pop; "Corporate और bulk customers के यहाँ से" words |
| 7.66 | — | — | chip "on-call · बुलाने पर" pops |
| 8.30 | — | — | chip "regular collection · नियमित संग्रह" pops |

## s103
Continues: s102
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Facility 2, BNPL: credit by agreement, paid by set billing, not at the counter each time. In: cut. Framing: wide, still. Sub-shots: #list 0 (list card), #d2 1.22 (new detail card, same place x 1000–1820).
Layout: list card as s102. #d2: `invoice-sheet` (scale 0.8, header "Bill") at x 1040–1280, y 240–560; lines right of it x 1310–1790 at y 330/430; bottom rows full card width at y 720 and 840.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | list card carried (row 1 done), van detail card carried; row 1 colours to grey #6f6a63, badge 2 turns red |
| 1.22 | cut to #d2 | — | row 2 "Book Now Pay Later" fades; #d2 card with invoice-sheet |
| 3.16 | — | — | "(BNPL)" pill pops beside row 2; Hindi "अभी बुक, बाद में भुगतान" fades 3.50 |
| 5.38 | — | — | "Department से agreement" words |
| 6.40 | — | — | "credit की सुविधा" yellow chip pops |
| 9.54 | — | — | "हर booking पर counter पर भुगतान" fades |
| 10.24 | — | — | slate strike on it |
| 11.28 | — | — | "तय billing से भुगतान" fades with green tick (12.44) |

## s104
Continues: s103
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Facilities 3 and 4: Volume discount for eligible contractual customers; National Account Facility, centralised account and billing. In: cut. Framing: wide, still. Sub-shots: #d2 0 (carried), #d3 1.18, #d4 5.20 (each a detail card at x 1000–1820).
Layout: list card as s102. #d3: `rupee-deposit` (scale 1.6) top centre y 240–500; text y 600–760. #d4: drawn ink office-building icon (3 px, sand fill) y 240–520; text y 600; two chips y 760–880.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | list (rows 1–2) and BNPL detail card carried; row 2 colours grey at 0.20 |
| 1.18 | cut to #d3 | — | row 3 "Volume discount" + "मात्रा छूट" fades; #d3 card with rupee-deposit |
| 2.66 | — | — | "eligible contractual customers को" words |
| 5.20 | cut to #d4 | — | row 3 grey; #d4 card with building icon |
| 6.12 | — | — | row 4 "National Account Facility" fades; "राष्ट्रीय खाता सुविधा" 6.64 |
| 8.28 | — | — | "Corporate customer के लिए" words |
| 10.06 | — | — | chip "centralised account · केंद्रीकृत खाता" pops |
| 12.18 | — | — | chip "billing" pops |

## s105
Continues: s104
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Facility 5, COD; the Post Office collects a set sum from the addressee on delivery. In: cut. Framing: wide, still. Sub-shots: #list 0 (list card + #d4 card), #cod 4.59.
Layout: #cod: title "Cash on Delivery (COD)" 56 bold y 210, Hindi "डिलीवरी पर नकद भुगतान" 40 y 268. Flow left→right at y 470: round ink nodes (dia 200) Addressee x 340, Post Office x 960, Sender x 1580, labels under each (English 44 + Hindi 36: प्राप्तकर्ता / डाकघर / प्रेषक). Lower band y 700–960 kept free for s106.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | list (rows 1–4) and NAF detail card carried; row 4 colours grey at 0.40 |
| 1.44 | — | — | row 5 "Cash on Delivery" fades, badge 5 red |
| 3.30 | — | — | "(COD)" pill pops; Hindi "डिलीवरी पर नकद" 3.60 |
| 4.59 | cut to #cod | — | COD title + Post Office node (post-box icon) |
| 5.79 | — | — | Post Office node pulse |
| 7.53 | — | — | Addressee node (house icon) pops |
| 8.75 | — | — | arrow Addressee → Post Office draws; `rupee-deposit` pops on it |
| 9.15 | — | — | "तय रकम" label fades above the arrow |

## s106
Continues: s105
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: The money goes on to the sender; COD needs an agreement with the postal authority and no prohibited goods. In: cut. Framing: wide, still.
Layout: #cod as s105. Lower band: two condition cards (white, #ead9a8 border) x 120–930 and x 990–1800, y 700–960, each an icon at left and two lines of Hindi 40.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | COD title, three-node flow with Addressee and Post Office nodes, rupee on the first arrow, "तय रकम" carried |
| 0.44 | — | — | Sender node (person-with-envelope ink icon) pops |
| 0.98 | — | — | arrow Post Office → Sender draws; second rupee-deposit pops on it |
| 2.12 | — | — | card 1 fades: small document icon |
| 2.80 | — | — | "postal authority से agreement" words |
| 4.50 | — | — | green tick on card 1 |
| 6.10 | — | — | card 2 fades: parcel icon; "Item में मना सामान" words |
| 7.26 | — | — | slate cross on the parcel icon; "नहीं" in slate |

## s107
Continues: no
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: COD and Insurance are different: COD collects money, Insurance (the sender's own choice) covers eligible loss or damage. In: cut. Framing: wide, still.
Component: compare-cards — drop the question and the takeaway; left card COD (red band, "Cash on Delivery", Hindi "डिलीवरी पर नकद"), right Insurance (yellow band, "बीमा"); one fact each, Hindi 40; VS disc between.
Layout: cards x 140–900 and x 1020–1780, y 220–960; band y 220–360; icon y 420–620; fact y 700–860.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both card frames and VS disc; COD band filled; Insurance band name pops |
| 1.60 | — | — | chip "sender चुन सकता है · वैकल्पिक" pops under Insurance band |
| 3.12 | — | — | COD: `rupee-deposit` pops |
| 3.98 | — | — | "पैसा वसूलता है" words |
| 5.22 | — | — | Insurance: `insured-envelope-emblem` pops |
| 6.40 | — | — | "eligible loss या damage से बचाता है" words; highlight "बचाता" at 8.08 |

## s108
Continues: no
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: The BNPL condition: ₹10,000 of Speed Post Document business a month at one booking office. In: cut. Framing: wide, still.
Layout: left x 140–900: "BNPL" 72 bold y 250, "Book Now Pay Later" 44 y 315, "अभी बुक करें, बाद में भुगतान" 38 y 370; three condition rows with ink icons at y 520/650/780 (Hindi 40). Right: `key-fact-stamp` (scale 1.2, 672×408) x 1060–1732, y 280–688; source grey 30 y 760 "BNPL instructions, 16 Dec 2024". Space y 820–940 under the stamp kept for s109.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | BNPL title block on screen |
| 1.58 | — | — | "शर्त" label (red caps) fades above the rows |
| 2.12 | — | — | row 1 building icon + "एक booking office पर" |
| 4.00 | — | — | row 2 calendar icon + "हर महीने" |
| 5.44 | — | — | key-fact-stamp stamps in: "₹10,000" white 150 px, pale-yellow "हर महीने का business" |
| 6.38 | — | — | row 3 envelope icon + "Speed Post Document" 48 bold |
| 7.62 | — | — | source line fades |

## s109
Continues: s108
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Don't match BNPL's ₹10,000 with any discount-table limit; BNPL agreement, discount slab and any special concession are separate. In: cut. Framing: wide, still. Sub-shots: #bnpl 0, #three 3.74.
Layout: #bnpl: as s108, plus a slate chip under the stamp x 1060–1732, y 830–920. #three: three white cards (#ead9a8 border) x 130–650, 700–1220, 1270–1790, y 300–800, ink icon top (y 360–540), term English 48 + Hindi 38 at y 620/680; y 180–260 free for s110's heading.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | BNPL block, three condition rows, ₹10,000 stamp, source carried |
| 0.36 | — | — | slate chip "discount table की सीमा" with small table icon fades |
| 2.64 | — | — | slate strike on the chip |
| 3.74 | cut to #three | — | card 1 "BNPL agreement" / "BNPL समझौता" (handshake-paper icon) |
| 5.96 | — | — | card 2 "Discount slab" / "छूट की श्रेणी" (table icon) pops |
| 8.28 | — | — | card 3 "कोई खास छूट" (Hindi 44, tag icon) pops |

## s110
Continues: s109
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: The three are separate conditions; then Volume discount: lowers eligible postage by the customer's business. In: cut. Framing: wide, still. Sub-shots: #three 0, #vd 2.02.
Component: key-term — red stamp "Volume discount" / "मात्रा छूट"; meaning card holds two Hindi lines; drop the exam pill, chips and chain panel (the lower band is used in s111).
Layout: #vd: stamp x 120–760, y 200–620; meaning card x 820–1800, y 200–620 (lines y 340/470, Hindi 44); lower band y 680–960 empty until s111.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three cards carried |
| 0.52 | — | — | heading "तीनों अलग शर्तें" 48 red fades y 220 |
| 0.78 | — | — | dashed dividers draw between the cards |
| 2.02 | cut to #vd | — | stamp with "Volume discount" stamps in; "मात्रा छूट" 2.40 |
| 3.88 | — | — | meaning card fades; "customer के business के हिसाब से" words |
| 6.28 | — | — | "eligible postage घटाता है" words |
| 7.86 | — | — | highlight "घटाता" |

## s111
Continues: s110
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: The discount leaves the weight limit and delivery conditions unchanged; then the Ordinary Speed Post Document contractual discount table. In: cut. Framing: wide, still. Sub-shots: #vd 0, #table 5.66.
Layout: #vd lower band: two sand chips x 120–900 and x 1020–1800, y 720–860; round red postmark between at x 960 y 900. #table: title English 48 bold y 205 x 110, Hindi 36 y 252; grey source right "From 1 Oct 2025 · Schedule I" 30 px. Table card x 110–1810, y 290–1000: header y 290–400 (col 1 "Monthly revenue" 44 + "महीने की revenue (GST के बिना)" 36, x 110–1210; NTD sand header x 1210–1510; TD red header x 1510–1810); six rows 100 px each y 400–1000, 44 px. Rows: ₹2,00,000 तक · 0% · 0% / ₹2,00,000 से ऊपर – ₹9,00,000 · 10% · 20% / ₹9,00,000 – ₹45,00,000 · 20% · 25% / ₹45,00,000 – ₹1,30,00,000 · 30% · 30% / ₹1,30,00,000 – ₹6,50,00,000 · 40% · 35% / ₹6,50,00,000 से ऊपर · 50% · 40%.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Volume discount stamp and meaning card carried |
| 0.54 | — | — | chip "Product की वजन सीमा" pops |
| 2.08 | — | — | chip "Delivery की शर्तें" pops |
| 4.36 | — | — | postmark "नहीं बदलतीं" stamps in |
| 5.66 | cut to #table | — | title "Ordinary Speed Post Document" types |
| 8.08 | — | — | Hindi "contractual discount · अनुबंध वाले customers की छूट" fades; source fades |
| 9.74 | — | — | table card: header, then all six rows reveal from top (dur 0.5) |

## s112
Continues: s111
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Monthly revenue is counted without GST; two short forms, TD = Town Delivery. In: cut. Framing: wide, still. Sub-shots: #table 0, #forms 6.58.
Layout: #table as s111. #forms: two stamp cards: TD (postal red) x 160–900, NTD (sand, ink text) x 1020–1760, y 260–820; short form 150 px bold y 450; English full form 52 y 600; Hindi 40 y 670.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | full discount table carried (title, header, six rows) |
| 1.64 | — | — | highlight "महीने की revenue" in the header |
| 3.06 | — | — | yellow underline under "GST के बिना" |
| 6.58 | cut to #forms | — | both blank stamp cards |
| 7.88 | — | — | "TD" pops on the red card |
| 8.94 | — | — | "Town Delivery" fades; "नगर वितरण" (pale yellow) 9.30 |

## s113
Continues: s112
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: NTD = Non-Town Delivery; the full six-slab table; up to ₹2 lakh, no discount. In: cut. Framing: wide, still. Sub-shots: #forms 0, #table 3.25.
Layout: #forms and #table as s112. A yellow outline rect #row-hl (row-sized, 1700×100) used from here.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | TD card complete, NTD card blank; "NTD" pops |
| 1.80 | — | — | "Non-Town Delivery" fades; "नगर से बाहर वितरण" 2.20 |
| 3.25 | cut to #table | — | full table (as s112) |
| 4.85 | — | — | yellow outline draws round the whole table |
| 6.67 | — | — | #row-hl draws round row 1 "₹2,00,000 तक" |
| 8.61 | — | — | the two "0%" cells pulse |

## s114
Continues: s113
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: ₹2–9 lakh: NTD 10%, TD 20%; at the top slab NTD reaches 50%. In: cut. Framing: wide, still.
Layout: table as s111, #row-hl on row 1.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | full table, table outline, #row-hl on row 1 |
| 0.20 | — | — | #row-hl moves to row 2 (soft) |
| 4.46 | — | — | row 2 NTD "10%" colours amber #8a5d00 + pulse |
| 6.16 | — | — | row 2 TD "20%" colours amber + pulse |
| 7.96 | — | — | #row-hl moves to row 6 |
| 10.18 | — | — | row 6 NTD "50%" colours amber + pulse |

## s115
Continues: s114
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: TD tops at 40%; the slab is set by TD + NTD eligible revenue together. In: cut. Framing: wide, still. Sub-shots: #table 0, #sum 4.71.
Layout: #sum: heading "Slab · छूट की श्रेणी" 48 red y 210. Sum row y 290–490: box "TD revenue" (red outline) x 120–560, "+" x 620, box "NTD revenue" (sand) x 680–1120, "=" x 1180, box "कुल eligible revenue" (yellow border) x 1240–1800. Chip "→ Slab" y 540–620 under the total box. Lower band y 700–960 free for s116.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table with #row-hl on row 6, NTD 50% amber |
| 2.54 | — | — | row 6 TD "40%" colours amber + pulse |
| 4.71 | cut to #sum | — | "Slab" heading |
| 5.59 | — | — | TD revenue box pops |
| 7.51 | — | — | "+" and NTD revenue box pop |
| 8.79 | — | — | "=" and total box pop; highlight "कुल" 8.79 |
| 10.63 | — | — | arrow + "Slab तय" chip draws |

## s116
Continues: s115
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: TD rate on TD revenue, NTD rate on NTD revenue; then the example: ₹6,00,000, all NTD. In: cut. Framing: wide, still. Sub-shots: #sum 0, #ex 7.17.
Component: formula-card — left red stamp holds the given (kicker "EXAMPLE · उदाहरण", Hindi line, big figure, chips); right white card holds the working (Georgia, s117–s118); cream note bar under both (s118).
Layout: #sum lower band: two cards x 120–930 (red edge) and x 990–1800 (sand edge), y 720–940, Hindi 40. #ex: stamp x 120–760, y 190–760; working card x 820–1800, y 190–760; note bar x 120–1800, y 800–980.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Slab heading, sum row and Slab chip carried |
| 0.22 | — | — | card "TD वाली rate → TD revenue पर" fades |
| 3.68 | — | — | card "NTD वाली rate → NTD revenue पर" fades |
| 7.17 | cut to #ex | — | stamp with "EXAMPLE · उदाहरण"; empty working card frame |
| 7.99 | — | — | "महीने की eligible document revenue" Hindi 38 fades |
| 11.65 | — | — | "₹6,00,000" white 110 px pops |
| 13.15 | — | — | sand chip "सारी NTD" pops |

## s117
Continues: s116
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: NTD at 10% gives ₹60,000; the same revenue all TD takes 20%. In: cut. Framing: wide, still.
Layout: #ex as s116. Working lines in Georgia 54 at y 330 and 520, each with a short-form pill at x 850 (NTD sand / TD red); answer green pills at the right end.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | example stamp (₹6,00,000, "सारी NTD") and empty working card |
| 0.46 | — | — | line 1 "NTD  ₹6,00,000 × 10%" types |
| 2.38 | — | — | "=" fades |
| 3.70 | — | — | green pill "₹60,000" pops |
| 5.44 | — | — | red chip "या सारी TD" pops under the NTD chip |
| 7.74 | — | — | line 2 "TD  ₹6,00,000 × 20% =" types |

## s118
Continues: s117
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: TD gives ₹1,20,000; no other concession is added here; the advance-payment concession is separate. In: cut. Framing: wide, still.
Layout: #ex as s117; note bar y 800–980, two Hindi lines 40 at y 870 and 940.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp, both working lines, ₹60,000 pill |
| 1.98 | — | — | green pill "₹1,20,000" pops |
| 2.86 | — | — | note bar fades; "इसमें कोई अलग छूट नहीं जोड़ी गई" words |
| 6.82 | — | — | line 2 "Advance payment की छूट — अलग से" words |
| 8.48 | — | — | highlight "अलग से" |

## s119
Continues: no
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Advance payment concession: 1% for advance deposit or pay-at-booking customers; a second tier for over ₹25 lakh a month. In: cut. Framing: wide, still. Sub-shots: #adv 0.
Layout: heading "Advance payment" 56 bold y 220, "अग्रिम भुगतान की छूट" 40 y 280. Two `key-fact-stamp` (scale 1.0, 560×340): left x 200–760, right x 1160–1720, y 350–690. Under each, Hindi 38 condition lines y 760–900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on screen |
| 1.56 | — | — | left condition "Advance deposit या booking पर भुगतान" words (under-left) |
| 3.40 | — | — | "eligible customers" grey line fades |
| 5.08 | — | — | left stamp stamps in: "1%" white 150 px |
| 7.32 | — | — | right condition "महीने की eligible revenue" words |
| 8.98 | — | — | "₹25 लाख से ज़्यादा" 48 bold fades; right stamp frame fades blank 10.64 |

## s120
Continues: s119
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Over ₹25 lakh: 2%, on set terms; bulk booking data must be given electronically in the set format. In: cut. Framing: wide, still. Sub-shots: #adv 0, #data 3.82.
Layout: #data: heading "Bulk booking data" 52 bold y 210, "थोक booking का data" 38 y 265. Centre block x 660–1260: drawn ink laptop with a file-grid on screen y 320–620; chips y 680 and 780 (Hindi 40). Right x 1280–1820 and left space free for s121–s122.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading, both condition blocks, 1% stamp, blank right stamp |
| 0.52 | — | — | "2%" white 150 px pops on the right stamp; key fact holds to 3.82 |
| 1.40 | — | — | "तय शर्तों के साथ" grey 38 fades under it |
| 3.82 | cut to #data | — | heading + laptop icon |
| 5.52 | — | — | chip "electronic रूप में" pops |
| 7.06 | — | — | chip "तय format में" pops |
| 7.90 | — | — | green tick beside the chips |

## s121
Continues: s120
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Only a paper manifest, no soft copy? In: cut. Framing: wide, still.
Layout: #data; laptop block moves to x 140–740; `invoice-sheet` (scale 1.1, header "Manifest" 36 bold) x 800–1130, y 300–740.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading, laptop, two chips, tick |
| 0.36 | — | — | laptop block moves left by 520 (soft) |
| 1.10 | — | — | invoice-sheet "Manifest" pops; "कागज़" label 40 under it |
| 2.76 | — | — | slate cross draws over the laptop; "soft copy नहीं" slate 40 under it |
| 3.14 | — | — | "?" 90 ink beside the manifest |

## s122
Continues: s121
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Then the discount is halved; General walk-in discount is closed; document and parcel discounts differ. In: cut. Framing: wide, still. Sub-shots: #data 0, #dp 5.57.
Layout: #data adds a `key-fact-stamp` (scale 0.95) x 1270–1802, y 300–623; bottom band (sand) x 110–1810, y 830–960. #dp: Document card (red header) x 140–860, Parcel card (sand header) x 1060–1780, y 300–940; "≠" slate disc x 960 y 600; y 180–280 free for s123's arrow.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | laptop (crossed), chips, manifest, "?" |
| 0.96 | — | — | key-fact-stamp stamps in: "½" white 160 px, "discount आधा" pale yellow |
| 2.67 | — | — | band: "General walk-in discount" 48 bold fades |
| 4.29 | — | — | slate strike on it; "बंद" slate 44 fades at its right |
| 5.57 | cut to #dp | — | both card frames |
| 5.83 | — | — | "Document discount" / "दस्तावेज़ की छूट" fades in the red header |
| 7.35 | — | — | "Parcel discount" / "पार्सल की छूट" fades in the sand header |
| 8.87 | — | — | "≠" disc pops |

## s123
Continues: s122
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: India Post Parcel and Speed Post Parcel have their own discount scheme; the document discount doesn't apply to parcels by itself. In: cut. Framing: wide, still.
Layout: #dp as s122. Parcel card rows y 460 and 560 (English 48 bold), Hindi line y 700, `speed-post-parcel` (scale 0.5) at the card's lower right y 740–890; the Document card body holds an ink envelope icon y 440–640. Dashed red arc above the cards from x 500 to x 1420, y 200–280.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both cards with headers, "≠" disc |
| 0.12 | — | — | "India Post Parcel" fades in the Parcel card |
| 1.64 | — | — | "Speed Post Parcel" fades under it; speed-post-parcel pops 2.22 |
| 3.10 | — | — | "अपना discount इंतज़ाम" Hindi 40 fades; highlight "अपना" |
| 5.24 | — | — | envelope icon draws in the Document card |
| 6.80 | — | — | dashed arc Document → Parcel draws |
| 8.36 | — | — | slate cross on the arc's middle; "अपने आप नहीं" slate 40 under it |

## s124
Continues: no
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: Exam angle: TD and NTD are separate columns; up to ₹2 lakh 0%; ₹2–9 lakh NTD 10%. In: cut. Framing: wide, still.
Component: exam-trap — banner "EXAM TRAP · परीक्षा का जाल" with "TD और NTD की rates अलग"; three cards instead of two (slab label, short-form tag, red stamp with the %); the TD card carries the yellow border; remember bar at the bottom (two lines, s125).
Layout: banner x 110–1810, y 180–330. Cards y 370–770: A x 110–640, B x 695–1225, C x 1280–1810. Remember bar (sand) y 800–990.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner with kicker |
| 2.64 | — | — | trap line "Discount table: TD और NTD अलग" words |
| 5.32 | — | — | card A: "₹2 लाख तक" fades |
| 6.78 | — | — | card A stamp "0%" stamps in |
| 8.04 | — | — | cards B and C: "₹2 लाख – ₹9 लाख" labels fade |
| 11.32 | — | — | card B: sand "NTD" tag pops |
| 11.94 | — | — | card B stamp "10%" stamps in |

## s125
Continues: s124
Section label: PART 5 · BUSINESS CUSTOMERS
Idea: TD 20%; at ₹6 lakh each rate goes on its own revenue; General walk-in discount is closed. In: cut. Framing: wide, still.
Layout: as s124; remember bar line 1 y 870, line 2 y 945 (Hindi 40, English terms 44 bold).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner, cards A–B complete, card C label; card C red "TD" tag pops |
| 0.50 | — | — | card C stamp "20%" stamps in; yellow border draws round card C |
| 1.92 | — | — | bar line 1: "₹6 लाख:" bold fades |
| 3.58 | — | — | "TD या NTD की rate, उसी की revenue पर" words; highlight "उसी की revenue" 6.16 |
| 7.30 | — | — | bar line 2: "General walk-in discount" fades |
| 8.80 | — | — | slate strike on it; "बंद" slate fades 9.42 |
## s126
Continues: no
Section label: PART 6 · DELIVERY
Idea: Part 6 opens; then Ordinary Speed Post goes to the given address. In: fade. Framing: wide, still.
Component: chapter-title — kicker "PART 6 · भाग 6", title "Delivery", Hindi "वितरण: registration, OTP, POD और प्रयास", dots "Part 6 of 11 · भाग 6 / 11", stamp holds `speed-post-emblem`, value "06".
Layout: A: title x 120–1100, stamp x 1240–1760, y 220–900. B (cut 2.40): one white card x 560–1360, y 200–940, red band "Ordinary Speed Post" (Hindi "साधारण स्पीड पोस्ट"), `domestic-envelope` ×0.85 inside, term + lines below.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter-title in (kicker, English title, stamp) |
| 0.44 | — | — | Hindi title fades, yellow underline draws |
| 1.62 | — | — | subtitle + dots fade |
| 2.40 | cut B | — | card with red band + envelope |
| 4.58 | — | — | "address-specific" (Inter 60 bold) pops |
| 6.22 | — | — | Hindi "दिए गए पते पर delivery" words |
| 7.16 | — | — | #addressee-lines highlight yellow |
| 8.04 | — | — | grey note "जब तक कोई और शर्त न हो" fades |

## s127
Continues: s126
Section label: PART 6 · DELIVERY
Idea: Registration makes it addressee-specific (compare with address-specific). In: cut. Framing: wide, still.
Component: compare-cards — no question line; left = the carried card, right = "+ Registration" (yellow band, Hindi "रजिस्ट्री"); no VS disc, a red "+" between.
Layout: left card moves to x 120–900; right card x 1020–1800, y 200–940; flat ink ID-card icon (blank photo box) inside, 300×200.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s126 card (envelope, address-specific, lines) moves by [-440,0] |
| 0.40 | — | — | right card pops with band "+ Registration" |
| 2.50 | — | — | "addressee-specific" (Inter 60 bold) pops |
| 4.62 | — | — | Hindi "addressee या उसके authorised व्यक्ति को ही" words |
| 6.42 | — | — | ID-card icon draws |
| 7.54 | — | — | yellow underline under "को ही" |

## s128
Continues: no
Section label: PART 6 · DELIVERY
Idea: Registration ₹5 per item + GST; with OTP delivery the item is handed over only when the addressee gives the OTP. In: cut. Framing: wide, still.
Layout: left `key-fact-stamp` x 120–680, y 260–600, chip below y 640–720. Right: heading x 820–1800, y 200–280; `otp-phone` ×1.2 at x 860–1124, y 320–824; arrow; `speed-post-parcel` x 1400–1760, y 440–740, label under it y 780–850.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp (empty) with pale-yellow "Registration · per item" |
| 0.98 | — | — | big "₹5" pops in stamp |
| 2.84 | — | — | grey chip "GST अलग" fades |
| 4.33 | — | — | heading "OTP delivery" + Hindi "OTP से वितरण" |
| 4.69 | — | — | otp-phone draws |
| 6.49 | — | — | parcel pops; label "तभी मिलेगा" |
| 8.65 | — | — | #otp-1..6 fill "•" (stagger 0.1) |
| 10.01 | — | — | arrow phone → parcel draws, small label "delivery staff को OTP" |
| 10.97 | — | — | green tick on parcel |

## s129
Continues: no
Section label: PART 6 · DELIVERY
Idea: OTP fee: Ordinary Speed Post ₹5 per item + GST; Premium products: OTP included. In: cut. Framing: wide, still.
Component: compare-cards — no question; left red band "Ordinary Speed Post" (Hindi "साधारण स्पीड पोस्ट"), right yellow band "Premium products" with small badges "24" (red) and "48" (deep red); one fact each; no VS disc; source line under.
Layout: cards x 120–900 and 1020–1800, y 200–860; grey line "Reg. 136A · Post Office Regulations 2024" y 900–950 on a white #ead9a8 strip.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card with band |
| 1.70 | — | — | "OTP" label; source strip fades |
| 2.56 | — | — | big "₹5" pops |
| 3.78 | — | — | "per item" |
| 4.82 | — | — | grey chip "GST अलग" |
| 6.14 | — | — | right card pops (band + 24/48 badges) |
| 7.44 | — | — | "OTP" label |
| 9.12 | — | — | green pill "✓ शामिल" pops |

## s130
Continues: no
Section label: PART 6 · DELIVERY
Idea: Registration fixes the right person; OTP adds a password check; choosing one doesn't bring the others. In: cut. Framing: wide, still.
Layout: two white tiles x 120–900 and 1020–1800, y 200–620 (term big, Hindi line, small ink icon: ID card / keypad-lock). Chip row y 720–840: four sand chips "Registration · OTP · SMS · POD", 380 wide, gaps 60; caption y 880–950.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left tile "Registration" + ID-card icon |
| 0.92 | — | — | Hindi "सही व्यक्ति तय" words |
| 3.28 | — | — | right tile "OTP" pops + lock icon draws |
| 4.40 | — | — | Hindi "password की जाँच" words |
| 7.02 | — | — | chip row pops (stagger 0.12) |
| 8.12 | — | — | dashed "+" links between chips draw |
| 9.88 | — | — | slate crosses on the "+" links; caption "अपने आप नहीं मिलतीं" |

## s131
Continues: no
Section label: PART 6 · DELIVERY
Idea: POD = Proof of Delivery, proof for the sender; domestic accountable item's sender can ask for it at ₹10 per item. In: cut. Framing: wide, still.
Component: key-term — red stamp "POD", "Proof of Delivery", Hindi "वितरण का प्रमाण"; meaning card only (no chain, no chips, no exam pill), `pod-card` ×0.6 in it.
Layout: A: stamp x 120–760, meaning card x 860–1800, y 220–860. B (cut 6.60): label y 200–290 full width; `key-fact-stamp` x 120–680, y 360–700; `pod-card` ×1.4 (band reads "POD") x 960–1688, y 330–806.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | red stamp "POD" |
| 1.36 | — | — | "Proof of Delivery" fades; Hindi 0.5 s later |
| 2.70 | — | — | meaning card: "delivery के बाद sender को मिलने वाला सबूत" words; pod-card draws |
| 6.60 | cut B | — | pod-card |
| 6.70 | — | — | label "Domestic accountable item का sender" words |
| 10.36 | — | — | stamp pops "₹10", pale-yellow "per item" |

## s132
Continues: s131
Section label: PART 6 · DELIVERY
Idea: tax extra; on the POD the addressee/authorised person signs in ink; a refusal sends a refusal statement. In: cut. Framing: wide, still.
Layout: as s131 B; caption under pod-card y 830–900; statement note (white, slate 3 px border, 520×120) x 140–660, y 760–880 with arrow to pod-card.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried: label, ₹10 stamp, pod-card; stamp line types "· tax अलग" |
| 1.20 | — | — | pod-card pulse |
| 2.24 | — | — | caption "addressee / authorised व्यक्ति" fades |
| 5.10 | — | — | ink signature path draws in #sign-box (dur 1.1) |
| 9.20 | — | — | statement note slides from left |
| 10.18 | — | — | note text "मना करने का statement"; arrow draws |

## s133
Continues: no
Section label: PART 6 · DELIVERY
Idea: DG may fix other POD methods; a paper POD moves like an accountable item. In: cut. Framing: wide, still.
Layout: white document card (#ead9a8 border) x 120–1100, y 200–900: Georgia header "Regulation 136", source grey beneath "Post Office Regulations 2024", grey "सार (gist)" label, two Hindi gist lines (44 px). `pod-card` ×1.1 x 1220–1792, y 280–654; red pill y 720–800.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | document card header + source; pod-card |
| 1.64 | — | — | gist 1 "Director General, POD के दूसरे तरीके भी तय कर सकते हैं" words |
| 4.98 | — | — | gist 2 "कागज़ वाला POD → accountable item की तरह" words |
| 6.76 | — | — | red pill "accountable item" pops under pod-card |
| 8.62 | — | — | yellow band sweeps behind gist 2 |

## s134
Continues: no
Section label: PART 6 · DELIVERY
Idea: two receipts: attested copy of the original receipt at the set fee; signed receipt of a registered item at a scheduled fee. In: cut. Framing: wide, still.
Layout: `receipt-slip` ×1.3 at x 140–478 and 1000–1338, y 280–774; texts beside each (x 510–900 and 1370–1800): English term 52 px, Hindi 40 px, fee pill (sand, 300×80) at y 640.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left slip + "Original receipt" |
| 1.48 | — | — | "attested copy" + Hindi "प्रमाणित प्रति" |
| 3.54 | — | — | pill "तय fee" pops |
| 5.16 | — | — | right slip pops + "registered item" |
| 6.60 | — | — | "signed receipt" + Hindi "हस्ताक्षरित रसीद" |
| 7.92 | — | — | pill "scheduled fee: —" pops (value blank) |

## s135
Continues: s134
Section label: PART 6 · DELIVERY
Idea: signed receipt ₹2; insured item's sender gets signed POD free; if it doesn't arrive, a delivery certificate on request. In: cut. Framing: wide, still.
Layout: A as s134. B (cut 3.50): `insured-envelope-emblem` ~420 wide x 120–540, y 320–620 (label beneath); arrow; `pod-card` x 660–1180, y 280–620 (band "POD"); certificate card (white, red band) x 1320–1800, y 260–660.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried slips; right pill swaps to "₹2" (yellow highlight) |
| 3.50 | cut B | — | insured envelope + label "Insured item · sender" |
| 3.60 | — | — | arrow draws; pod-card pops |
| 4.42 | — | — | green pill "free · मुफ़्त" |
| 5.94 | — | — | pod-card fades to grey; slate cross "न पहुँचे" |
| 7.90 | — | — | certificate card pops "delivery certificate", Hindi "वितरण प्रमाणपत्र", grey "माँगने पर" |

## s136
Continues: s135
Section label: PART 6 · DELIVERY
Idea: certificate is electronic, given by the delivery office's Postmaster/officer in charge; domestic POD ≠ international advice of delivery. In: cut. Framing: wide, still.
Component: compare-cards (sub-shot C) — no question, left red "Domestic POD" (Hindi "देश के भीतर"), right sand "International advice of delivery" (Hindi "अंतरराष्ट्रीय"), slate "≠" disc, no facts rows.
Layout: B as s135; label y 700–840 under certificate. C (cut 7.30): cards x 120–860 and 1060–1800, y 260–780; disc at 960, 520.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried B; tag "electronic रूप में" + small screen icon on certificate |
| 2.62 | — | — | "delivery office" label |
| 3.72 | — | — | "Postmaster / officer in charge देता है" words |
| 7.30 | cut C | — | empty card frames |
| 8.02 | — | — | left card text |
| 9.52 | — | — | right card text |
| 12.24 | — | — | "≠" disc pops |

## s137
Continues: no
Section label: PART 6 · DELIVERY
Idea: accountable item: attempt 1 fails → one more; after 2 failed attempts, arrival notice. Left → right. In: cut. Framing: wide, still.
Layout: title y 180–260; three tiles y 300–740: x 120–620 (ink door + parcel icon, "प्रयास 1"), 710–1210 ("प्रयास 2"), 1300–1800 (white card red band "Arrival notice", Hindi "आगमन सूचना"); arrows between. Doc tag (white, #ead9a8) "Reg. 42 · Post Office Regulations 2024" x 120–700, y 880–960.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title "Accountable item · delivery प्रयास"; tile 1; doc tag |
| 2.48 | — | — | slate cross on tile 1 |
| 3.46 | — | — | arrow + tile 2 pop ("1 और प्रयास") |
| 5.80 | — | — | slate cross on tile 2; caption "2 नाकाम प्रयास" |
| 7.32 | — | — | arrow + arrival-notice tile pop |

## s138
Continues: s137
Section label: PART 6 · DELIVERY
Idea: addressee collects from the post office; deposit usually 7 days, counted from when the search for the addressee fails. In: cut. Framing: wide, still.
Layout: A adds chip (ink post-office icon + text) x 1300–1800, y 800–940. B (cut 2.90): heading y 190–270; `key-fact-stamp` x 120–680, y 330–670; doc tag "Reg. 64 · Post Office Regulations 2024" x 120–680, y 720–800; timeline x 820–1800, y 420–700, three nodes.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried tiles |
| 0.66 | — | — | arrow down draws; chip "post office से ले" pops |
| 2.90 | cut B | — | heading "Item, deposit में" |
| 5.48 | — | — | stamp pops "7 दिन", pale-yellow "आम तौर पर"; doc tag fades |
| 8.16 | — | — | track draws; node 1 "addressee की पूछताछ" |
| 10.74 | — | — | node 2 "नाकाम" + slate cross |
| 12.98 | — | — | node 3 red "दिन 1 → 7 गिनती" pops |

## s139
Continues: no
Section label: PART 6 · DELIVERY
Idea: an addressee's own hold request is a separate arrangement; then the cases of non-delivery start listing. In: cut. Framing: wide, still.
Layout: left white card x 120–860, y 220–720 (Inter "Addressee", Hindi line, sand tag below). Right panel (sand #f3ead6) x 960–1800, y 220–940: heading + three row slots (y 340, 520, 700, each 150 tall, slate bullet).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card "Addressee" |
| 1.14 | — | — | Hindi "खुद item रोकने को कहे" words |
| 3.82 | — | — | sand tag "अलग इंतज़ाम" pops |
| 4.90 | — | — | right panel fades, heading "अगर…" |
| 5.34 | — | — | row 1 "Item मना हुआ" |
| 6.36 | — | — | row 2 "notice के बाद भी नहीं लिया" |

## s140
Continues: s139
Section label: PART 6 · DELIVERY
Idea: third case: addressee left without a new address. In: cut. Framing: wide, still.
Layout: as s139.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried left card + panel with rows 1–2 |
| 0.72 | — | — | row 3 "addressee बिना नया पता दिए चला गया" words |
| 2.84 | — | — | small ink open-door icon draws at row 3's right |

## s141
Continues: no
Section label: PART 6 · DELIVERY
Idea: sender's address clear outside → back to sender, else Returned Letter Office; unknown recipient → staff may ask for identity. In: cut. Framing: wide, still.
Photo: return-to-sender-envelope — paper cut-out, white border, tilt −2°, caption grey.
Layout: B: photo x 120–760, y 300–726; question x 860–1800, y 220–300; two branches y 380–560 ("हाँ" green → "sender को") and y 620–860 ("नहीं" ink → "Returned Letter Office", Hindi "लौटी डाक का कार्यालय"). C (cut 7.60): line y 190–270; ink ID-card icon (blank photo box) x 120–620, y 330–700; right column x 760–1800 empty for s142.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | photo |
| 1.58 | — | — | question "sender का पता बाहर साफ़?" |
| 4.00 | — | — | green branch "हाँ → sender को" draws |
| 5.82 | — | — | branch "नहीं → Returned Letter Office" + Hindi |
| 7.60 | cut C | — | ID-card icon |
| 7.74 | — | — | "Recipient अनजान" |
| 9.82 | — | — | "→ delivery staff पहचान माँग सकता है" words |

## s142
Continues: s141
Section label: PART 6 · DELIVERY
Idea: passport, PAN card, driving licence items need ID; then suspected tampering of the cover. In: cut. Framing: wide, still.
Layout: C as s141; chips x 760–1800 at y 330–470 / 500–640 / 670–810 (English 52 bold, Hindi beneath); green round postmark on ID card. D (cut 6.20): heading y 190–270; `speed-post-parcel` ×1.4 x 160–664, y 400–820.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried C; chip "Passport · पासपोर्ट" |
| 0.88 | — | — | chip "PAN card · पैन कार्ड" |
| 1.72 | — | — | chip "Driving licence · ड्राइविंग लाइसेंस" |
| 3.00 | — | — | grey caption "accountable items" above chips |
| 4.54 | — | — | green postmark "पहचान ज़रूरी" stamps on ID card |
| 6.20 | cut D | — | parcel |
| 6.30 | — | — | heading "Cover से छेड़छाड़ का शक" |
| 6.90 | — | — | slate zigzag tear draws across the tape |

## s143
Continues: s142
Section label: PART 6 · DELIVERY
Idea: opened before the Postmaster; inventory in 2 copies signed by addressee; one copy goes with the unsigned POD. In: cut. Framing: wide, still.
Layout: D as s142; red pill under parcel x 160–664, y 850–920; `inventory-sheet` x 800–1160, y 320–780, label y 810–880; `pod-card` ×0.8 x 1300–1716, y 400–672 (band "POD"), label y 700–760.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried heading, torn parcel |
| 0.44 | — | — | red pill "Postmaster के सामने खुलता है" |
| 3.18 | — | — | inventory-sheet pops; "Inventory" |
| 4.22 | — | — | label "2 copies" (#copy-back highlight) |
| 6.80 | — | — | ink signature draws on #sign-line |
| 7.90 | — | — | arrow from #copy-back; pod-card pops |
| 9.26 | — | — | label "बिना signature" (sign box stays empty) |

## s144
Continues: s143
Section label: PART 6 · DELIVERY
Idea: that copy goes to the sender; a damaged domestic accountable item → notice to come within 7 days. In: cut. Framing: wide, still.
Photo: damaged-parcel — paper cut-out, white border, tilt 2°, caption "खराब हालत में पहुँचा item".
Layout: D as s143 + pill "→ sender" y 790–860 under pod-card. B (cut 1.10): photo x 120–860, y 300–790; heading x 960–1800, y 220–300; `key-fact-stamp` x 1000–1560, y 380–720.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried D; pill "→ sender" pops |
| 1.10 | cut B | — | photo |
| 2.90 | — | — | heading "domestic accountable item" |
| 6.62 | — | — | stamp pops "7 दिन" |
| 8.10 | — | — | pale-yellow "में आने का notice" types in stamp |

## s145
Continues: no
Section label: PART 6 · DELIVERY
Idea: exam angle: Registration ₹5, OTP ₹5, GST extra on both; OTP given at delivery. In: cut. Framing: wide, still.
Component: exam-trap — only its red banner, "EXAM ANGLE · परीक्षा की नज़र से", no trap sentence; cards replaced by row cards.
Layout: banner x 120–1800, y 170–260; white row cards x 160–1760, 150 tall, at y 300 and 470 (term left, Hindi under, value right); bracket chip right; note under row 2 y 630–690. Rows 3–4 come in s146 at y 720 and 870.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner |
| 1.08 | — | — | row 1 "Registration · रजिस्ट्री" |
| 2.08 | — | — | "₹5" pops |
| 3.16 | — | — | row 2 "OTP" |
| 3.90 | — | — | "₹5" pops |
| 5.94 | — | — | bracket rows 1–2 + grey chip "GST अलग" |
| 7.16 | — | — | note "delivery के समय देना" |
| 8.22 | — | — | yellow band behind "delivery के समय" |

## s146
Continues: s145
Section label: PART 6 · DELIVERY
Idea: POD ₹10, free on insured items; 2 delivery attempts; Registration, OTP, SMS, POD are four separate facilities. In: cut. Framing: wide, still.
Layout: as s145 + row cards y 720 and 870 (each 130). B (cut 7.60): four tiles x 120–500, 547–927, 993–1373, 1420–1800, y 340–700; caption y 800–880.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried banner, rows 1–2; row 3 "POD" |
| 0.36 | — | — | "₹10" pops |
| 3.72 | — | — | green pill "insured item: free" |
| 4.46 | — | — | row 4 "Accountable item · delivery प्रयास" |
| 5.84 | — | — | "2" pops |
| 7.60 | cut B | — | tile "Registration" (red bar, icon) |
| 8.90 | — | — | tile "OTP" |
| 9.98 | — | — | tile "SMS" |
| 10.98 | — | — | tile "POD" |
| 11.66 | — | — | caption "चार अलग सुविधाएँ"; yellow underline at 12.72 |

## s147
Continues: no
Section label: RECAP · PARTS 5–6
Idea: recap of Part 5 (business): BNPL. In: wipe (from right). Framing: wide, still.
Component: recap-card — flap "RECAP · दोहराव", title "Part 5 · Business", seal "3"; 3 rows; `speed-post-emblem` small at flap's right.
Layout: envelope x 260–1660, y 170–980; rows at y 430, 610, 790 (180 each); pills right.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope, flap, title, seal, emblem |
| 1.54 | — | — | flap subline "business और delivery" fades |
| 6.70 | — | — | row 1 "BNPL" + Hindi "अभी बुक, बाद में भुगतान" |
| 7.66 | — | — | pill "1 office" |
| 10.76 | — | — | pill extends "· ₹10,000 / महीना" |
| 11.68 | — | — | pill "· Document"; green tick draws at 12.04 |

## s148
Continues: s147
Section label: RECAP · PARTS 5–6
Idea: discount: up to ₹2 lakh 0%; up to ₹9 lakh NTD 10%, TD 20%. In: cut. Framing: wide, still.
Layout: as s147; row 2 has two pill lines (y 590, 650); NTD chip sand, TD chip red.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried envelope + row 1; row 2 "Discount · छूट" |
| 0.68 | — | — | pill "₹2 लाख तक: 0%" |
| 3.32 | — | — | line 2 "₹9 लाख तक:" |
| 5.34 | — | — | sand chip "NTD" |
| 6.56 | — | — | "10%" |
| 8.86 | — | — | red chip "TD" |
| 9.32 | — | — | "20%"; green tick |

## s149
Continues: s148
Section label: RECAP · PARTS 5–6
Idea: paper manifest only → half discount; then Part 6: Registration ₹5, OTP ₹5, POD ₹10, 2 attempts then arrival notice. In: cut. Framing: wide, still.
Component: recap-card (second, sub-shot B) — title "Part 6 · Delivery", seal "3", same position.
Layout: A as s148. B (cut 3.40): same envelope frame, rows y 430, 610, 790.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried rows 1–2 |
| 0.60 | — | — | row 3 "Paper manifest" + Hindi "सिर्फ कागज़ का" |
| 2.86 | — | — | pill "discount ½ · आधा"; tick |
| 3.40 | cut B | — | new envelope, flap, title, seal |
| 3.52 | — | — | row 1 "Registration · OTP" |
| 4.20 | — | — | pill "₹5 +"; "₹5" at 6.06; tick |
| 7.58 | — | — | row 2 "POD"; pill "₹10" 7.98; tick |
| 8.30 | — | — | row 3 "Delivery प्रयास"; pill "2" |
| 11.54 | — | — | pill "→ arrival notice"; tick 12.04 |
## s150
Continues: no
Section label: PART 7 · SERVICE STANDARDS
Idea: Part 7 opens; a service standard is the expected time from booking to delivery, with conditions. In: fade. Framing: wide, still.
Component: chapter-title — kicker "PART 7 · भाग 7", English "Service / Standards", Hindi red "Ordinary Speed Post के delivery मानक" with yellow underline, progress "Part 7 of 11 · भाग 7 / 11"; stamp holds `speed-post-emblem`, value "07". Grey subtitle replaced by a bottom definition band.
Layout: text block x 140–1100, y 220–700; stamp x 1260–1760, y 220–720; sand definition band x 140–1780, y 780–960: chip "posting / booking" (x 200–600) → ink arrow (x 640–1160) with "अपेक्षित समय" above it → chip "delivery" (x 1200–1500) → yellow chip "+ शर्तें" (x 1540–1740).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | kicker, English title, stamp with emblem and "07", progress dots (fade in) |
| 0.38 | — | — | Hindi title fades; yellow underline draws |
| 1.42 | — | — | band slides up; chip "posting / booking" pops |
| 3.20 | — | — | arrow draws; chip "delivery" pops |
| 4.28 | — | — | "अपेक्षित समय" fades above the arrow |
| 6.50 | — | — | "+ शर्तें" chip pops |
| 7.76 | — | — | grey line under title: "Ordinary Speed Post · published दिन" (fade) |

## s151
Continues: no
Section label: PART 7 · SERVICE STANDARDS
Idea: the ordinary Speed Post service standards table, all five rows (Citizens' Charter 2021). In: cut. Framing: wide, still.
Component: compare-table — one value column: header "ROUTE · मार्ग" | "दिन"; five rows, no alternating outline; yellow band rect #hl moves row to row.
Layout: red title "Ordinary Speed Post · service standards" y 205; white table x 140–1780, y 245–920; header y 245–320; rows 120 tall from y 320 (Local · स्थानीय / Metro to metro · मेट्रो से मेट्रो / Within the same State · उसी State के अंदर / State capital to State capital · राजधानी से राजधानी / Rest of the country · बाकी देश), English 48 bold at x 190 + Hindi 36 under, value 64 bold centred x 1500 (1–2, 1–3, 1–4, 1–4, 4–5 दिन); grey source y 960 "Citizens' Charter 2021 · India Post".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title |
| 1.04 | — | — | table card pops; all five rows fade in, stagger 0.15 |
| 2.82 | — | — | #hl band sweeps onto Local row |
| 5.28 | — | — | #hl moves to Metro row |
| 8.48 | — | — | #hl moves to same-State row |
| 10.44 | — | — | #hl moves to State capital row |

## s152
Continues: s151
Section label: PART 7 · SERVICE STANDARDS
Idea: both 1–4 days, rest 4–5; then the six metros, local as in tariff. In: cut. Framing: wide, still. Sub-shots: #table 0, #map 5.12.
Layout: #table exactly as s151. #map: `india-outline-map` scale 0.95 at x 160–844, y 200–960, six red pins at its anchors with Hindi labels 36 (दिल्ली, मुंबई, कोलकाता, चेन्नई, हैदराबाद, बेंगलुरु); `key-fact-stamp` x 1100–1660, y 260–600: "6" 140 + "Metros" 56 white, pale-yellow "अपनी city सीमा के अंदर"; sand panel x 1040–1720, y 680–860: "Local = वही अर्थ, जो tariff में था" 44.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table as s151, #hl on State capital row |
| 0.10 | — | — | second band #hl2 sweeps onto same-State row too (both 1–4) |
| 0.94 | — | — | the two "1–4" values pulse |
| 1.90 | — | — | #hl2 moves to Rest of the country row |
| 3.16 | — | — | "4–5" pulses |
| 5.12 | cut to #map | — | map and stamp frame already in place |
| 5.92 | — | — | six pins pop, stagger 0.12; "6" stamps in |
| 7.36 | — | — | Hindi line on stamp fades |
| 8.60 | — | — | sand panel slides up with its line |

## s153
Continues: s152
Section label: PART 7 · SERVICE STANDARDS
Idea: local means the tariff meaning; then the five counting conditions, all on screen. In: cut. Framing: wide, still. Sub-shots: #map 0, #conditions 1.89.
Layout: #map as s152. #conditions: red title "दिन गिनने की 5 शर्तें" y 205; white card x 120–1800, y 240–980; red number badges x 180; main lines 44 at x 260; rows y 250 / 380 / 510 / 640 / 770 (row 5 to 970 for two grey sub-lines). Rows: 1 "Cut-off के बाद booking → posting का दिन नहीं गिनता"; 2 "रविवार और छुट्टियाँ नहीं गिनी जातीं"; 3 "Branch Office पर booking या delivery → 1 दिन extra"; 4 "Item की शर्तें, पता और PIN code सही हों"; 5 "बस से बाहर की घटनाएँ असर डाल सकती हैं". Yellow band #hl behind the current row's main line.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | map, 6-Metros stamp, Local panel as s152 |
| 0.58 | — | — | "tariff" in the panel underlined |
| 1.89 | cut to #conditions | — | card and title (words) |
| 4.15 | — | — | all five main lines fade in, stagger 0.15 |
| 5.47 | — | — | #hl sweeps onto row 1 |

## s154
Continues: s153
Section label: PART 7 · SERVICE STANDARDS
Idea: counter open does not mean that day's dispatch is pending; Sundays and holidays not counted. In: cut. Framing: wide, still.
Layout: #conditions card exactly as s153 (rows y 250 / 380 / 510 / 640 / 770), #hl on row 1. Row 1 grey sub-line 36 at x 260, y +88: "Counter खुला है, इसका मतलब उस दिन का dispatch बाकी है, ऐसा नहीं". Row 2 right: small slate calendar icon with a slate cross, x 1640.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | conditions card, all five main lines, #hl on row 1 |
| 0.38 | — | — | row 1 grey sub-line reveals from left |
| 4.16 | — | — | "ऐसा नहीं" in the sub-line turns slate (color) |
| 5.16 | — | — | #hl moves to row 2 |
| 7.30 | — | — | slate calendar icon with cross draws at row 2 right |

## s155
Continues: s154
Section label: PART 7 · SERVICE STANDARDS
Idea: Branch Office adds 1 day; item conditions, address and PIN code must be right. In: cut. Framing: wide, still.
Layout: #conditions card exactly as s154 (row 1 sub-line, row 2 slate icon kept). Row 3 right: red stamp-edged chip "+1 दिन" 220×90 at x 1540–1760. Row 4 right: small ink envelope icon with "PIN" box at x 1640.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card as s154, #hl on row 2 |
| 0.10 | — | — | #hl moves to row 3 |
| 3.10 | — | — | "+1 दिन" chip stamps in |
| 4.50 | — | — | #hl moves to row 4 |
| 7.76 | — | — | envelope icon with PIN box draws at row 4 right |

## s156
Continues: s155
Section label: PART 7 · SERVICE STANDARDS
Idea: events beyond control (all six from the notes); then the worked example begins: Monday after cut-off, Tuesday a holiday. In: cut. Framing: wide, still. Sub-shots: #conditions 0, #calendar 7.40.
Layout: #conditions as s155; row 5 grey sub-lines 36 at x 260, y 860 "curfew · bandh · strike · transport रद्द होना" and y 915 "carrier का off-loading या non-carriage · force majeure". #calendar: red title "उदाहरण" y 205; `calendar-strip` scale 1.5, x 150–1770, y 300–690, tile centres x 330 / 750 / 1170 / 1590; each tile's day name (Hindi 44 white on its red band) and centre text (44) grouped with its #day-N, popped as one; tiles 3–4 come in s157; band space y 800–950 kept empty.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card as s155, #hl on row 4 |
| 0.56 | — | — | #hl moves to row 5; sub-line 1 reveals |
| 2.98 | — | — | sub-line 2 reveals |
| 7.40 | cut to #calendar | — | title "उदाहरण" |
| 8.58 | — | — | #day-1 "सोमवार" pops |
| 9.72 | — | — | its centre text "cut-off के बाद booking" fades |
| 11.80 | — | — | #day-2 "मंगलवार" pops |
| 12.80 | — | — | its centre text "public holiday" fades |

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

## s160
Continues: s159
Section label: PART 7 · SERVICE STANDARDS
Idea: same State and State capitals 1–4 days; rest 4–5; Branch Office +1 day. In: cut. Framing: wide, still.
Layout: #exam card exactly as s159 (rows 1–2 with chips); rows 3–5 fill y 490–850.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | exam card, Local and Metro rows with chips |
| 0.10 | — | — | row 3 "Same State · State capitals" fades |
| 2.26 | — | — | chip "1–4 दिन" pops |
| 4.16 | — | — | row 4 "Rest of the country" fades |
| 5.12 | — | — | chip "4–5 दिन" pops |
| 7.28 | — | — | row 5 "Branch Office" fades |
| 8.04 | — | — | chip "+1 दिन" pops |

## s161
Continues: s160
Section label: PART 7 · SERVICE STANDARDS
Idea: ordinary standards and premium promises are different. In: cut. Framing: wide, still.
Layout: #exam card exactly as s160, all five rows. Sand band x 140–1780, y 880–970: "Ordinary standards ≠ premium वादे · दोनों अलग" 48.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | exam card, five rows with chips |
| 0.10 | — | — | band slides up; text words in (gap 0.25) |
| 2.54 | — | — | highlight on "अलग" |

## s162
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: Part 8 opens: premium Speed Post services started 17 March 2026, separate products alongside ordinary Speed Post. In: fade. Framing: wide, still.
Component: chapter-title — kicker "PART 8 · भाग 8", English "24 & 48 / Speed Post", Hindi red "प्रीमियम Speed Post सेवाएँ" with yellow underline, progress "Part 8 of 11 · भाग 8 / 11"; stamp holds `speed-post-emblem`, value "08"; add a red round postmark "17 MAR 2026" overlapping the stamp's lower-left corner.
Layout: text block x 140–1100, y 220–700; stamp x 1260–1760, y 220–720; postmark dia 220 at (1280, 700); grey subtitle lines 40 at y 790 and 860, x 140–1180.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | kicker, English title, stamp, progress (fade in) |
| 0.30 | — | — | Hindi title fades; underline draws |
| 2.30 | — | — | postmark "17 MAR 2026" stamps |
| 6.22 | — | — | subtitle "ordinary Speed Post के साथ चलने वाले" fades |
| 9.14 | — | — | "अलग products" added on the line with yellow highlight |

## s163
Continues: s162
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: each has its own promise; the three premium products table, all rows at once; 24 SP Document first. In: cut. Framing: wide, still. Sub-shots: #title 0, #premium 2.32.
Layout: #title exactly as s162; second subtitle line y 920 "अपने खास वादों के साथ". #premium: red title "तीन premium products · 17 March 2026 से" y 205; white table x 120–1800, y 250–900; header y 250–330 ("Product" | "Delivery" | "वज़न सीमा"); rows 190 tall: 24 Speed Post Document (red "24" badge) / 48 Speed Post Document (deep-red "48") / 24 Speed Post Parcel (red "24"), English 48 bold at x 260 + Hindi 36; delivery col x 880–1480: "अगला दिन (D+1)" / "2 working days के अंदर" / "अगला दिन" 44 + grey "तय routes पर" 36; weight col centred x 1630: 500 g / 500 g / 5 kg 64 bold. Grey source y 950 "Post Office Regulations 2024, Schedule I (amended 2026)". Yellow band #hl behind a row.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chapter title as s162 |
| 0.96 | — | — | second subtitle line fades |
| 2.32 | cut to #premium | — | title, table frame, header |
| 2.69 | — | — | three product names fade, stagger 0.2 |
| 3.95 | — | — | delivery and weight cells fade, stagger 0.1 |
| 5.26 | — | — | #hl sweeps onto row 1 |
| 9.73 | — | — | "अगला दिन (D+1)" row 1 pulses |

## s164
Continues: s163
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: 24 SP Document up to 500 g; 48 SP Document within 2 working days, 500 g. In: cut. Framing: wide, still.
Layout: #premium table exactly as s163, #hl on row 1.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | premium table, all rows, #hl on row 1 |
| 0.10 | — | — | row 1 "500 g" pulses |
| 1.88 | — | — | #hl moves to row 2 |
| 6.00 | — | — | underline on "2 working days" |
| 8.16 | — | — | row 2 "500 g" pulses |

## s165
Continues: s164
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: 24 SP Parcel next day, up to 5 kg; D+1 = the day after the booking date. In: cut. Framing: wide, still. Sub-shots: #premium 0, #dplus 6.80.
Layout: #premium as s164. #dplus: title "D+1" 72 bold ink + " का मतलब" 52, y 210; two white day tiles 500×440 with red top bands: x 300–800 ("D" white 64 on band, centre "booking की तारीख" 44) and x 1120–1620 ("D+1", centre "अगला दिन" 44 bold); ink arrow x 830–1090 at y 540.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | premium table, underline on row 2, #hl on row 2 |
| 0.11 | — | — | #hl moves to row 3 |
| 4.66 | — | — | "5 kg" pulses |
| 6.80 | cut to #dplus | — | title "D+1 का मतलब" |
| 7.82 | — | — | tile "D" pops with its text |
| 9.56 | — | — | arrow draws |
| 10.08 | — | — | tile "D+1" pops |

## s166
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: 24 Speed Post does not mean delivery in exactly 24 hours; booking office, route, cut-off and operational conditions matter. In: cut. Framing: wide, still.
Component: myth-fact — Hindi-only pills "भ्रम" (slate) and "सही" (green); fact card carries four chips instead of reason lines; postmark "सही".
Layout: myth card x 140–1780, y 220–480: line 52 "24 Speed Post = हर booking से ठीक 24 घंटे में delivery", slate cross at x 1680. Fact card (sand) x 140–1780, y 540–960: line 48 "Delivery इन सब पर निर्भर:" y 620; four white chips 370×150 at x 180 / 580 / 980 / 1380, y 690–840: "Booking office" / "Route" / "Cut-off" (English 44 bold + Hindi 36: बुकिंग कार्यालय / मार्ग / कट-ऑफ समय) and "संचालन की स्थिति" 40; green postmark dia 160 at (1660, 900).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | myth card with pill; line words in (gap 0.3) |
| 4.98 | — | — | strike on "ठीक 24 घंटे"; slate cross draws |
| 5.86 | — | — | fact card fades with its line; chip 1 pops |
| 7.22 | — | — | chip 2 pops |
| 7.72 | — | — | chip 3 pops |
| 8.88 | — | — | chip 4 pops |
| 10.42 | — | — | postmark "सही" stamps |

## s167
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: premium documents keep the ordinary document limits: 500 g incl. volumetric weight; 420 × 297 × 24 mm. In: cut. Framing: wide, still.
Layout: title y 205: "Premium documents" 52 bold + "= ordinary document की शर्तें" 48. `domestic-envelope` scale 1.1 at x 300–1136, y 330–770; length arrow above it y 300 label "420 mm" 48; breadth arrow x 270 label "297 mm" right-aligned x 250; side-view slab 836×48 at y 840–888 under it, vertical arrow right "24 mm". Pill "सामान वही" 44 at x 300, y 930. `key-fact-stamp` x 1240–1800, y 330–670: "500 g" white 120, pale-yellow "volumetric weight मिलाकर" 36.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "Premium documents" |
| 1.48 | — | — | "= ordinary document की शर्तें" words in |
| 4.60 | — | — | envelope pops; "सामान वही" pill fades |
| 5.76 | — | — | key-fact stamp pops with "500 g" |
| 6.66 | — | — | Hindi line fades |
| 9.48 | — | — | length arrow draws, "420 mm" |
| 10.88 | — | — | breadth arrow draws, "297 mm" |
| 12.56 | — | — | slab and thickness arrow draw, "24 mm" |

## s168
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: first phase: identified routes among six big metros (list on screen); Regulations allow extension to other cities. In: cut. Framing: wide, still.
Layout: `india-outline-map` scale 0.95 at x 160–844, y 200–960, red pins at its six metro anchors; thin red route lines between Delhi–Mumbai, Mumbai–Bengaluru, Bengaluru–Chennai, Chennai–Hyderabad, Kolkata–Delhi. White list card x 1000–1780, y 220–780, red header "पहला चरण · 6 शहर", six rows 44 (दिल्ली, मुंबई, चेन्नई, कोलकाता, बेंगलुरु, हैदराबाद) in two columns of three. Soft-yellow chip x 1000–1780, y 830–950: "+ दूसरे शहर: विस्तार की अनुमति (Regulations)".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | map |
| 1.22 | — | — | six pins pop, stagger 0.12 |
| 3.30 | — | — | route lines draw, stagger 0.1 |
| 4.54 | — | — | list card pops with all six names |
| 6.60 | — | — | yellow chip slides up |
| 9.14 | — | — | highlight on "विस्तार की अनुमति" |

## s169
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: retail and agreement-holding bulk or corporate customers can both take premium documents; where they are booked is the question. In: cut. Framing: wide, still.
Layout: two white cards y 230–620: left x 140–900 "Retail customers" 52 bold + "खुदरा ग्राहक" 36, ink counter-window icon; right x 1020–1780 "Bulk / Corporate customers" 48 bold + "agreement वाले ग्राहक" 36, ink building icon. Green tick circles dia 90 at each card's top right. Line 48 centred y 700: "दोनों premium documents ले सकते हैं". Sand band x 140–1780, y 800–960: question at x 180–1100 "Ordinary और premium documents कहाँ book होंगे?" 44; right half kept for s170.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card |
| 2.04 | — | — | right card pops with "agreement वाले ग्राहक" |
| 3.12 | — | — | "Bulk" highlighted |
| 4.02 | — | — | "Corporate" highlighted |
| 5.74 | — | — | centre line fades |
| 7.12 | — | — | green ticks draw, stagger 0.2 |
| 8.04 | — | — | band slides up; question words in |

## s170
Continues: s169
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: Circle Heads decide those offices; then what premium services give: OTP delivery for premium documents and 24 SP Parcel. In: cut. Framing: wide, still. Sub-shots: #customers 0, #benefits 3.53.
Layout: #customers exactly as s169; answer in band x 1160–1740: "Circle Heads" 48 bold, "सर्किल प्रमुख तय करते हैं" 36. #benefits: red title "Premium services में क्या मिलता है?" y 205; white card x 120–1800, y 250–960, four rows 170 tall from y 260 (icons x 160–300, text x 330, pills x 1150–1760). Row 1: `otp-phone` scale 0.35, "OTP delivery" 52 bold; pills "Premium documents" and "24 Speed Post Parcel" (sand, 40).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both cards, ticks, line, question band |
| 1.00 | — | — | "Circle Heads" + Hindi pop in band |
| 3.53 | cut to #benefits | — | title words in, empty card |
| 5.61 | — | — | row 1 phone and "OTP delivery" pop |
| 7.37 | — | — | pill "Premium documents" pops |
| 9.33 | — | — | pill "24 Speed Post Parcel" pops |

## s171
Continues: s170
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: registration on premium documents is a separate value-added service, ₹5 + GST; real-time tracking and SMS alerts; delivery on Sundays and holidays. In: cut. Framing: wide, still.
Layout: #benefits card exactly as s170 (row 1 with pills). Row 2 (y 430): `rupee-deposit` scale 0.5, "Registration" 52 bold + "अलग value-added service" 36; red chip "₹5" + grey "GST अलग". Row 3 (y 600): ink handset-with-map-pin icon, "Real-time tracking · SMS alerts" 48 bold. Row 4 (y 770): ink calendar icon, "रविवार और छुट्टियों पर भी delivery" 44.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | benefits card, title, row 1 with both pills |
| 1.50 | — | — | row 2 "Registration" pops |
| 2.92 | — | — | its sub-line fades |
| 5.38 | — | — | "₹5" chip pops |
| 6.22 | — | — | "GST अलग" fades |
| 8.46 | — | — | row 3 pops |
| 11.12 | — | — | row 4 pops |

## s172
Continues: s171
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: except three national holidays: Republic Day, Independence Day, Gandhi Jayanti; then business customers' list starts with BNPL. In: cut. Framing: wide, still. Sub-shots: #benefits 0, #holidays 0.36, #business 7.10.
Layout: #benefits as s171. #holidays: title "सिवाय 3 राष्ट्रीय छुट्टियों के" 52 y 210; three white cards 500×520 at x 160 / 710 / 1260, y 300–820, red top band: "Republic Day" / "Independence Day" / "Gandhi Jayanti" English 52 bold + Hindi 40 (गणतंत्र दिवस / स्वतंत्रता दिवस / गांधी जयंती), slate cross + "delivery नहीं" 40 at the card bottom. #business: red title "Business customers के लिए" y 205; white card x 120–1800, y 250–960, five rows 140 tall from y 260 (s173 adds rows 2–5); row 1: ink rupee-note icon, "BNPL" 56 bold + "अभी booking, भुगतान बाद में" 36.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | benefits card, four rows |
| 0.36 | cut to #holidays | — | title words in |
| 3.22 | — | — | card 1 pops |
| 4.52 | — | — | card 2 pops |
| 6.28 | — | — | card 3 pops; three slate crosses draw, stagger 0.15 |
| 7.10 | cut to #business | — | title, card frame |
| 9.00 | — | — | row 1 "BNPL" pops |
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

## s176
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: the premium tariff table, every row on screen; row 1 values land. In: cut. Framing: wide, still (table holds through s179).
Component: compare-table — 3 columns (product · weight · tariff), 3 rows, no scheme header; yellow outline moves row to row; source line beneath.
Layout: title "Premium tariff · प्रीमियम शुल्क" y 200 (red 52 px, Hindi 38 px right). White table x 120–1800, y 250–920; red header row y 250–330 "Product · उत्पाद" / "Weight · वज़न" / "Tariff · शुल्क"; columns x 140–820 / 820–1200 / 1200–1780. Rows y 340–520 / 530–710 / 720–910: (1) "24 Speed Post Document" + "retail" | "50 g तक" | "Local ₹38" / "बाकी हर दूरी ₹94"; (2) "48 Speed Post Document" + "retail" | "50 g तक" | "Non-local ₹61"; (3) "24 Speed Post Parcel" | "500 g तक" / "4,501–5,000 g" | "₹200" / "₹990". Names 48 px, values 52 px. Grey source y 965: "GST अलग · Post Office Regulations 2024, Schedule I (as amended 2025–2026)".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title, table, all row names and weights, source line (no prices yet) |
| 1.36 | — | — | yellow outline #ol-1 draws round row 1 |
| 3.58 | — | — | underline "retail" in row 1 |
| 4.96 | — | — | highlight "50 g तक" row 1 |
| 7.00 | — | — | "Local ₹38" pops |
| 10.70 | — | — | "बाकी हर दूरी ₹94" pops |

## s177
Continues: s176
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: row 2, 48 Speed Post Document retail up to 50 g. In: cut. Framing: wide, still.
Layout: s176's table exactly as placed, row 1 prices shown.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried table (row 1 complete, #ol-1 round row 1); #ol-1 colours to #ead9a8; yellow outline #ol-2 draws round row 2 |
| 2.54 | — | — | underline "retail" in row 2 |
| 3.46 | — | — | highlight "50 g तक" row 2 |

## s178
Continues: s177
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: row 2 price; move on to row 3. In: cut. Framing: wide, still.
Layout: same table as s177.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried table, #ol-2 round row 2; "Non-local" fades in in row 2 tariff cell |
| 1.22 | — | — | "₹61" pops beside "Non-local" |
| 2.16 | — | — | #ol-2 colours to #ead9a8; yellow outline #ol-3 draws round row 3 |

## s179
Continues: s178
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: row 3, 24 Speed Post Parcel prices; full table holds to the cut. In: cut. Framing: wide, still.
Layout: same table as s178.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried table, #ol-3 round row 3; highlight "500 g तक" row 3 |
| 1.44 | — | — | "₹200" pops |
| 3.02 | — | — | highlight "4,501–5,000 g" |
| 7.16 | — | — | "₹990" pops |
| 9.42 | — | — | hold: every row complete, readable to the cut |

## s180
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: 24 Speed Post Document from Ahmedabad, started 15 Oct 2026, to Mumbai, Navi Mumbai, Thane. In: cut. Framing: wide, still.
Layout: title y 190–300: red badge "24" at x 120, "24 Speed Post Document" 56 px bold, "24 स्पीड पोस्ट दस्तावेज" 36 px beneath. Red round postmark (dia 240) at (1640, 250): "15 Oct 2026" + "से". Origin pill (white, red 4 px border, 520×170) at (420, 620): "Ahmedabad" 60 px, "अहमदाबाद" 38 px. Ink arrow x 700–1060, y 620. Destinations card x 1080–1800, y 400–840: rows y 500 / 620 / 740 "Mumbai" / "Navi Mumbai" / "Thane" 52 px with red pin dots. Grey chip under card y 900: "तय destination PIN codes तक".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title with "24" badge |
| 2.54 | — | — | Ahmedabad pill pops |
| 3.70 | — | — | postmark stamps in |
| 7.18 | — | — | arrow draws left→right; destinations card fades in |
| 8.18 | — | — | "Mumbai" pops |
| 8.88 | — | — | "Navi Mumbai" pops |
| 10.10 | — | — | "Thane" pops |
| 11.22 | — | — | chip "तय destination PIN codes तक" fades in |

## s181
Continues: no
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: Ahmedabad's three booking centres. In: cut. Framing: wide, still.
Layout: grey kicker "Ahmedabad · 24 Speed Post Document" 36 px y 200; heading "Booking centres" 56 px red y 270, Hindi "बुकिंग केंद्र" 38 px beside it; red round badge "3" (dia 110) at (1700, 250). Three white cards (540×520) at x 120 / 690 / 1260, y 370–890: ink post-office building icon (200 px) top, name 50 px bold, two lines where needed.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | kicker and heading |
| 0.72 | — | — | badge "3" pops |
| 1.86 | — | — | card 1 pops; icon draws; "Ahmedabad GPO" |
| 3.86 | — | — | card 2 pops; "Navrangpura BD Cell" |
| 6.18 | — | — | card 3 pops; "Business Post Centre," |
| 7.80 | — | — | second line "Shahibaug" fades in on card 3 |

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

## s185
Continues: s184
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: exam angle rows 3–4: 48 SP Document in 2 working days; Ahmedabad's destinations. In: cut. Framing: wide, still.
Layout: s184's #exam card as placed. Row 3: "48 Speed Post Document" + "48 स्पीड पोस्ट दस्तावेज", stamp "2" with "working days में" 36 px beside. Row 4: "Ahmedabad से" 48 px at x 180, "Mumbai · Navi Mumbai · Thane" 48 px at x 820.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried #exam card: banner, rows 1–2 with 500 g and 5 kg stamps; row 3 term fades in |
| 1.44 | — | — | stamp "2" stamps in |
| 2.56 | — | — | "working days में" fades in |
| 4.16 | — | — | row 4 "Ahmedabad से" fades in |
| 5.78 | — | — | "Mumbai" fades in |
| 6.44 | — | — | "· Navi Mumbai" fades in |
| 7.72 | — | — | "· Thane" fades in |

## s186
Continues: s185
Section label: PART 8 · 24 AND 48 SPEED POST
Idea: the trap: an option saying 24 Speed Post Parcel limit 35 kg is wrong; the answer is 5 kg. In: cut. Framing: wide, still.
Layout: s185's card as placed; trap bar (sand, slate left edge) x 120–1800, y 820–960: "Option: 24 Speed Post Parcel की सीमा" 44 px at x 180, "35 kg" 60 px bold at x 1250; slate cross (dia 90) at x 1560; "गलत" 48 px slate at x 1660.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | carried card, rows 1–4 complete; trap bar fades in with "Option:" |
| 0.72 | — | — | "24 Speed Post Parcel की सीमा" words |
| 3.20 | — | — | "35 kg" pops |
| 5.48 | — | — | strike (slate) on "35 kg"; slate cross draws; "गलत" fades in |
| 5.90 | — | — | row 2's "5 kg" stamp pulses; highlight row 2 term |

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

## s192
Continues: s191
Section label: PART 9 · INSURANCE
Idea: both "always" are wrong; then the four-limit table goes on screen. In: cut. Framing: wide, still. Sub-shots: #cards 0 (s191 cards + pills), #limits 4.65.
Layout: #cards: s191 cards unchanged; pills y 860–960 at x 300–860 and 1060–1620. #limits: title y 170–230 "Insurance की चार limits · चार सीमाएँ"; white table x 100–1340 y 250–860 (red header y 250–320 "LIMIT · सीमा" | "कितनी · शर्त"; 4 rows ~135 each, label x 130–800 English 46 bold + Hindi 36, value x 830–1320). Rows: 1 "General Speed Post insurance" / "तय booking centres, post offices पर" → "₹5,00,000 तक" + grey "1 April 2026 से"; 2 "Currency / bank notes" / "insured post से" → "₹20,000 तक"; 3 "Insured value" / "बीमित मूल्य" → "असली value से ज़्यादा नहीं"; 4 "Documents" / "जिनकी value बनाने में है" → "दोबारा बनाने का खर्च तक". Right column x 1380–1820: `insured-envelope-emblem` scale 0.84 y 250–550.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s191 cards as left |
| 0.14 | — | — | pill "हमेशा ज़रूरी" pops; strike (slate) + slate cross 1.40 |
| 2.42 | — | — | pill "हमेशा वैकल्पिक" pops; strike + cross 3.76 |
| 4.65 | cut to #limits | — | title, table header, emblem |
| 5.01 | — | — | 4 rows reveal down, stagger 0.15 |
| 7.33 | — | — | highlight row 1 label |

## s193
Continues: s192
Section label: PART 9 · INSURANCE
Idea: general ceiling ₹5,00,000 at identified centres, from 1 April 2026. In: cut. Framing: wide, still.
Layout: s192 #limits exactly (table x 100–1340 y 250–860, emblem x 1380–1820 y 250–550); add `key-fact-stamp` scale 0.78 at x 1380–1820 y 600–870: "₹5 लाख" white, pale-yellow "General insurance ceiling".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table with 4 rows, row 1 label highlighted, emblem |
| 0.18 | — | — | highlight "तय booking centres" (words) in row 1 Hindi |
| 3.66 | — | — | highlight "₹5,00,000 तक"; key-fact-stamp stamps |
| 5.12 | — | — | stamp's Hindi line fades |
| 5.70 | — | — | highlight "1 April 2026 से" in row 1 |

## s194
Continues: s193
Section label: PART 9 · INSURANCE
Idea: currency/bank notes by insured post ₹20,000; insured value not above real value. In: cut. Framing: wide, still.
Layout: s193 exactly (table, emblem, ₹5 लाख stamp unchanged).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table, emblem, ₹5 लाख stamp as in s193 |
| 1.40 | — | — | highlight row 2 label "Currency / bank notes" |
| 3.64 | — | — | highlight "₹20,000 तक" |
| 4.84 | — | — | highlight row 3 label "Insured value" |
| 7.10 | — | — | underline "असली value" in row 3 value |

## s195
Continues: s194
Section label: PART 9 · INSURANCE
Idea: documents insured up to the cost of making them again; sender writes the real value at booking. In: cut. Framing: wide, still.
Layout: s194 exactly; add a sand strip x 100–1340 y 885–985: `receipt-slip` scale 0.4 at left x 120–230, text "Sender, booking पर असली value लिखता है" 40 at x 260.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table, emblem, ₹5 लाख stamp as in s194 |
| 0.68 | — | — | highlight row 4 label "Documents" |
| 4.64 | — | — | highlight "दोबारा बनाने का खर्च तक" |
| 8.18 | — | — | strip slides in from left with receipt-slip |
| 8.98 | — | — | strip text words |
| 10.64 | — | — | highlight "असली value" in strip |

## s196
Continues: no
Section label: PART 9 · INSURANCE
Idea: precious metals/stones/jewellery insured at real value; currency, coins, bank notes in a set special way. In: cut. Framing: wide, still.
Photo: gold-jewellery — cut-out, 400 wide, tilted −1.5°, grey caption.
Layout: left white card x 120–920 y 170–820: photo y 200–480; chips rows y 510–580 / 600–670; pill y 710–790. Right white card x 1000–1800 y 170–820: `rupee-deposit` scale 1.6 y 210–466; chips y 510–580 / 600–670; pill y 710–790. Band y 850–990 empty for s197.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card with photo; chip "Precious metals" pops |
| 0.96 | — | — | chip "कीमती पत्थर" pops |
| 2.68 | — | — | chip "Jewellery" pops |
| 3.46 | — | — | sand pill "असली value पर insured" fades |
| 6.08 | — | — | right card pops with rupee-deposit; chip "Currency notes" |
| 7.36 | — | — | chip "Coins" |
| 8.80 | — | — | chip "Bank notes" |
| 9.98 | — | — | pill "तय खास तरीके से" fades (left half of pill row) |

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

## s200
Continues: s199
Section label: PART 9 · INSURANCE
Idea: ₹12 + ₹4 = ₹16 fee; then risks not covered. In: cut. Framing: wide, still. Sub-shots: #work 0, #risks 6.01.
Layout: #work: s199 #work exactly. #risks: red-headed white panel centred x 540–1380 y 170–990, header "Cover से बाहर · बीमा में शामिल नहीं"; 4 rows ~190 each, each with a slate cross icon and Hindi 38: 1 "Acts of God · प्राकृतिक आपदा"; 2 "युद्ध · दंगे · civil commotion"; 3 "कानूनी प्रक्रिया में गिरफ़्तारी, रोक या ज़ब्ती"; 4 "सरकारी आदेश, रोक या मनाही".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp + working card with lines 1–2; "= ₹12" pops on line 2 |
| 1.36 | — | — | line 3 "₹4 + ₹12" types |
| 4.28 | — | — | "= ₹16" and green pill "insurance fee ₹16" pop |
| 6.01 | cut to #risks | — | panel and header; row 1 fades |
| 7.21 | — | — | row 2 fades |
| 9.51 | — | — | rows 3–4 fade, stagger 0.3 (the full list) |

## s201
Continues: s200
Section label: PART 9 · INSURANCE
Idea: full risk list held; four items get loss-only cover. In: cut. Framing: wide, still.
Layout: s200 #risks panel (x 540–1380), which moves to x 100–940 at 3.62. Right white panel x 980–1820 y 170–990, red header "इन चार पर"; 4 rows ~140 each (Hindi 40), pill area y 780–900, fee line y 920–970.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | risks panel, all 4 rows |
| 1.26 | — | — | underline the panel header ("पूरी list") |
| 3.62 | — | — | risks panel moves by [−440, 0]; right panel slides from right; "Liquids · तरल" fades |
| 4.60 | — | — | "जल्दी पिघलने वाले पदार्थ" fades |
| 6.74 | — | — | "जल्दी खराब होने वाली चीज़ें (perishables)" fades |

## s202
Continues: s201
Section label: PART 9 · INSURANCE
Idea: fragile too; on these four, insurance covers loss only, not damage; fee on the same scale. In: cut. Framing: wide, still.
Layout: s201 exactly (risks x 100–940, right panel x 980–1820 with 3 rows); row 4 at y 640; pills y 780–880: green "Loss ✓" x 1020–1330, "Damage" x 1400–1780; grey line y 940 "fee: वही scale".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both panels as in s201 |
| 0.48 | — | — | row 4 "Fragile सामान · नाज़ुक" fades |
| 3.68 | — | — | label "सिर्फ" fades over pills |
| 4.72 | — | — | green pill "Loss ✓" pops |
| 6.36 | — | — | pill "Damage" pops; slate strike + cross at 6.98 |
| 7.84 | — | — | grey line "fee: वही scale" fades; highlight "वही" at 8.04 |

## s203
Continues: no
Section label: PART 9 · INSURANCE
Idea: compensation is capped by the insured amount and by the real loss/damage; for loss the sender gives full details. In: cut. Framing: wide, still.
Photo: damaged-parcel — cut-out, 300 wide in card 2, tilted 1°, grey caption.
Layout: red header pill "Compensation · क्षतिपूर्ति" x 610–1310 y 170–270. Two white cards y 320–740: card 1 x 120–940 (`insured-envelope-emblem` scale 0.55 top, "insured रकम से ज़्यादा नहीं" 44); card 2 x 980–1800 (photo top, "असली loss या damage से ज़्यादा नहीं" 44). Sand strip x 120–1800 y 790–990: `declaration-tag` scale 0.5 left, text "Loss में: sender देता है → सामान + उसकी value की पूरी details" 40.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header pill |
| 1.18 | — | — | card 1 pops with emblem and text |
| 3.90 | — | — | card 2 pops with photo and text |
| 7.60 | — | — | strip slides from left with tag; "Loss में:" |
| 8.44 | — | — | rest of strip text words |
| 11.14 | — | — | highlight "पूरी details" |

## s204
Continues: no
Section label: PART 9 · INSURANCE
Idea: insured ₹50,000, proved damage ₹6,000 → compensation up to ₹6,000. In: cut. Framing: wide, still.
Layout: title "Example · उदाहरण" y 170–230 with `speed-post-parcel` scale 0.35 at x 1640. Ink baseline x 560 from y 280 to 900. Three rows, labels x 120–520, bars from x 560: row 1 y 300–420 "Insured · बीमित", red bar to 1660 (₹50,000 at end); row 2 y 500–620 "साबित damage", sand bar 132 px, "₹6,000" after it; row 3 y 700–820 "Compensation · क्षतिपूर्ति", green bar 132 px, "₹6,000 तक".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title, parcel, baseline |
| 0.86 | — | — | row 1 label fades |
| 2.32 | — | — | red bar grows from left; "₹50,000" pops at end |
| 4.64 | — | — | row 2 label fades |
| 6.50 | — | — | sand bar grows; "₹6,000" pops |
| 7.94 | — | — | row 3 label fades; dashed ink cap line draws down from bar 2's end |
| 9.56 | — | — | green bar grows to the cap; "₹6,000 तक" pops |

## s205
Continues: no
Section label: PART 9 · INSURANCE
Idea: sender may leave the claim to the addressee; then exam angle: general ceiling ₹5 lakh. In: cut. Framing: wide, still. Sub-shots: #waive 0, #exam 6.34.
Layout: #waive: white cards x 140–660 and 1260–1780, y 300–760: "Sender" 60 bold / "प्रेषक" 40; "Addressee" / "प्राप्तकर्ता"; ink arrow x 700–1220 y 530; red pill "Compensation claim" above sender card at y 200–270, x 160–640. #exam: header "Exam angle · परीक्षा की नज़र से" y 170–240; `key-fact-stamp` scale 1 at x 100–660 y 400–740 ("₹5 लाख", "General insurance ceiling"); white list card x 720–1820 y 260–990, 4 row slots ~180 (filled in s206–s207).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Sender card |
| 0.54 | — | — | grey "चाहे तो" under Sender |
| 1.50 | — | — | claim pill pops above Sender |
| 3.56 | — | — | Addressee card pops |
| 4.52 | — | — | arrow draws |
| 4.98 | — | — | claim pill moves by [1100, 0] to over Addressee |
| 6.34 | cut to #exam | — | header; empty list card frame |
| 8.94 | — | — | key-fact-stamp stamps "₹5 लाख" |

## s206
Continues: s205
Section label: PART 9 · INSURANCE
Idea: exam angle: notes ₹20,000; fee ₹4 up to ₹200, above that ₹4 + 1.50%. In: cut. Framing: wide, still.
Layout: s205 #exam exactly. List rows: row 1 y 280–440 "Currency / bank notes" 44 bold → "₹20,000" 56 right; row 2 y 460–640 "Fee" → line a "₹200 तक: ₹4", line b "ऊपर: ₹4 + ऊपर वाले हिस्से का 1.50%" (40).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header, ₹5 लाख stamp, list card |
| 0.00 | — | — | row 1 label fades |
| 2.34 | — | — | "₹20,000" pops |
| 3.14 | — | — | row 2 "Fee" fades |
| 3.80 | — | — | line a fades |
| 6.08 | — | — | line b words |
| 10.52 | — | — | highlight "1.50%" |

## s207
Continues: s206
Section label: PART 9 · INSURANCE
Idea: fragile, liquid, perishable: loss-only cover; insurance is no guarantee of the full insured sum. In: cut. Framing: wide, still.
Layout: s206 exactly; row 3 y 660–800 "Fragile · Liquid · Perishable" 44 bold → "सिर्फ loss का cover" 40; row 4 y 820–970 "Insurance" bold → "पूरी insured रकम की guarantee नहीं" 40.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header, stamp, rows 1–2 |
| 0.00 | — | — | row 3 label words (Fragile, Liquid 0.78, Perishable 1.76) |
| 2.84 | — | — | "सिर्फ loss का cover" fades; highlight "loss" 3.32 |
| 4.82 | — | — | row 4 "Insurance" fades |
| 6.00 | — | — | "पूरी insured रकम की guarantee" fades |
| 7.72 | — | — | "नहीं" fades and is underlined |

## s208
Continues: no
Section label: PART 10 · COMPENSATION
Idea: Part 10 opens; the Act and Rules accept compensation on set conditions. In: fade 0.5. Framing: wide, still.
Component: chapter-title — kicker "PART 10 · भाग 10", title "Compensation & Complaint", Hindi "क्षतिपूर्ति और शिकायत" (yellow underline), subtitle replaced by two sand chips "Post Office Act 2023" and "Post Office Rules 2024" plus a grey line "तय शर्तों के साथ compensation"; dots "Part 10 of 11 · भाग 10 / 11"; stamp value "10" with `speed-post-emblem`.
Layout: text block x 120–1060 (title y 260–480, Hindi y 520, chips y 640–720, grey line y 780, dots y 900); stamp x 1180–1780 y 220–900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | kicker, title, stamp with emblem |
| 0.50 | — | — | Hindi title fades, underline draws |
| 0.54 | — | — | chip "Post Office Act 2023" pops |
| 3.62 | — | — | chip "Post Office Rules 2024" pops |
| 6.50 | — | — | grey line words "तय शर्तों के साथ compensation" |

## s209
Continues: no
Section label: PART 10 · COMPENSATION
Idea: the Regulations' table of domestic Speed Post amounts; delay = Speed Post postage paid. In: cut. Framing: wide, still.
Layout: document card (white, #ead9a8 border) x 100–1820 y 170–860; heading band "Domestic Speed Post · Compensation" (Georgia, red) y 170–240; column heads "स्थिति" | "Compensation" y 250–310; 3 rows ~180, left x 130–760 (English Georgia 44 + Hindi gist 36), right x 790–1790. Row 1 "Delay" / "देरी" → "Speed Post postage paid" / "दिया गया Speed Post postage". Row 2 "Uninsured: loss, damage or part damage" / "बिना insurance: loss, damage या आंशिक damage" → "Twice the postage or ₹1,000, whichever is less; within actual loss" / "postage का दोगुना या ₹1,000, जो कम; असली नुकसान तक". Row 3 "Insured" / "बीमित" → "Within the insured amount, not above actual loss" / "insured रकम के अंदर, असली नुकसान तक". Grey source y 900: "Post Office Regulations 2024 · Schedule I, Table V (as amended) · Hindi: सार (gist)".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card, heading, column heads, source line |
| 2.50 | — | — | underline "Schedule I, Table V" in source |
| 3.78 | — | — | 3 rows reveal down, stagger 0.2 |
| 6.16 | — | — | highlight row 1 left |
| 7.68 | — | — | highlight row 1 right Hindi "दिया गया Speed Post postage" |

## s210
Continues: s209
Section label: PART 10 · COMPENSATION
Idea: row 2: uninsured loss, damage or part damage. In: cut. Framing: slow push-in 5% on #row2; ends pushed in, next scene continues.
Layout: s209 document card exactly, all rows, highlights kept.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide → push-in to 1.05 on #row2 by 2.0 | — | table as in s209; highlight row 2 Hindi "बिना insurance" |
| 2.00 | — | — | highlight "loss, damage" in row 2 Hindi |
| 3.54 | — | — | highlight "आंशिक damage" |

## s211
Continues: s210
Section label: PART 10 · COMPENSATION
Idea: row 2 amount (twice postage or ₹1,000, the lower, within real loss); row 3 insured. In: cut. Framing: starts at 1.05 on #row2, eases back to 1 by 8.0, still to the cut.
Layout: s210 exactly.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | 1.05 on #row2 | — | table as in s210; highlight "postage का दोगुना" (row 2 right Hindi) |
| 2.40 | — | — | highlight "₹1,000" |
| 4.02 | — | — | highlight "जो कम" |
| 5.54 | — | — | highlight "असली नुकसान तक" |
| 7.40 | ease back to 1 by 8.0 | — | — |
| 8.04 | — | — | highlight row 3 left "बीमित" |
| 9.54 | — | — | highlight "insured रकम के अंदर" |
| 11.58 | — | — | highlight row 3 "असली नुकसान तक" |

## s212
Continues: no
Section label: PART 10 · COMPENSATION
Idea: Pilferage = theft of part of the contents = part loss; "twice" is of postage, not of the item's value. In: cut. Framing: wide, still.
Component: key-term — term "Pilferage" / "सामग्री की आंशिक चोरी"; meaning card one Hindi line + one yellow chip "= part loss"; drop the exam pill; replace the chain panel with the bottom "दोगुना किसका?" row.
Layout: red stamp card x 100–760 y 190–620; white meaning card x 820–1820 y 190–620 ("अंदर का कुछ सामान चोरी होना" 44, chip y 480–560). Bottom row y 680–980: grey "दोगुना किसका?" x 120–560; green pill "postage का ✓" x 620–1120; pill "सामान की value का" x 1180–1780.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp card with "Pilferage" |
| 0.50 | — | — | "सामग्री की आंशिक चोरी" fades |
| 1.36 | — | — | meaning card pops; line words |
| 4.88 | — | — | chip "= part loss" pops |
| 5.84 | — | — | "दोगुना किसका?" fades |
| 6.78 | — | — | green pill "postage का ✓" pops |
| 8.42 | — | — | pill "सामान की value का" pops; slate strike + cross at 9.78 |
## s213
Continues: no
Section label: PART 10 · COMPENSATION
Idea: worked examples of the uninsured rule as a held table that fills row by row (s213–s215). In: cut. Framing: wide, still.
Component: formula-card — dropped the left stamp; kept only the working idea as a 4-column table, answers on green pills
Layout: red heading "उदाहरण · बिना insurance नुकसान" (x 140, y 200, 52 px). Sand rule strip x 140–1780, y 240–320: "दोगुना postage या ₹1,000 — जो कम · असली नुकसान तक" (40 px). White table card x 140–1780, y 360–960: red header row y 360–450 with columns "Postage" (140–520) · "साबित नुकसान" (520–900) · "दोगुना postage" (900–1340) · "Compensation" (1340–1780); three rows y 450–620 / 620–790 / 790–960, values 56 px.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading, rule strip, table card with header row and empty ruled rows on screen |
| 0.62 | — | — | row 1 "₹80" pops on "₹80" |
| 2.98 | — | — | "₹500" pops in the loss column on "₹500" |
| 5.56 | — | — | "2 × ₹80 = ₹160" types in (Georgia) on "₹160" |
| 8.02 | — | — | green pill "₹160" stamps in the Compensation column on "₹160" |

## s214
Continues: s213
Section label: PART 10 · COMPENSATION
Idea: second example: doubling gives ₹1,200 but the ceiling caps it. In: cut. Framing: wide, still.
Layout: as s213, identical places.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s213 table held: heading, rule strip, row 1 complete (₹80 · ₹500 · 2 × ₹80 = ₹160 · green ₹160) |
| 0.68 | — | — | row 2 "₹600" pops on "₹600" |
| 4.08 | — | — | "₹5,000" pops in the loss column |
| 5.78 | — | — | "2 × ₹600 = ₹1,200" types in |
| 7.26 | — | — | rule strip: highlight words "₹1,000" on "ceiling" |

## s215
Continues: s214
Section label: PART 10 · COMPENSATION
Idea: answer ₹1,000; third case capped by actual loss ₹700; then premium products follow the same rules. In: cut. Framing: wide, still.
Layout: shot #table as s213. Shot #premium: "Premium products" (Inter 64 px, x 140, y 230) with "प्रीमियम उत्पाद" (40 px) beneath; three badges y 340–480 at x 400 / 960 / 1520 (240×130): red "24 · Document", deep red "48 · Document", red "24 · Parcel"; white card x 140–1780, y 540–960 with three lines at y 610 / 740 / 870 (44 px Hindi).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s214 table held; green pill "₹1,000" stamps into row 2 Compensation on "₹1,000" |
| 2.04 | — | — | row 3: grey "₹600" and "₹700" (loss) pop on "₹700"; "दोगुना" cell "₹1,200 → ₹1,000" fades |
| 3.38 | — | — | green pill "₹700" stamps; rule strip highlight words "असली नुकसान तक" |
| 5.02 | cut to #premium | — | heading and three badges on screen (shot opens with them) |
| 6.42 | — | — | line 1: green tick + "Compensation के यही नियम" fades on "यही" |
| 8.82 | — | — | line 2: "देरी → पूरे postage का refund" words in; "refund" highlight on "refund" |

## s216
Continues: s215
Section label: PART 10 · COMPENSATION
Idea: no insurance of contents for premium; then six key no-compensation cases, first three. In: cut. Framing: wide, still.
Layout: #premium as s215. Shot #excl-1: red heading "Compensation नहीं मिलता · 6 ज़रूरी हालात" (x 140, y 210, 52 px), red stamp "6" (120×140) at x 1620, y 150; grey "1–3 / 6 · पूरी list इससे लंबी" at x 140, y 280 (36 px). Three white cards x 140–1780, h 180, at y 330 / 540 / 750, each a red number badge left, Hindi 44 px, small slate cross right.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #premium held: heading, badges, lines 1–2 |
| 0.76 | — | — | line 3: slate cross + "सामान का insurance नहीं" fades on "insurance" |
| 2.17 | cut to #excl-1 | — | heading on screen at the cut |
| 3.93 | — | — | stamp "6" stamps on "छह" |
| 5.87 | — | — | three cards fade in, stagger 0.3: "1 कम postage या product की शर्तें पूरी न होना" · "2 मना या गैर-कानूनी रूप से रोका गया सामान" · "3 सामान की अपनी खराबी या प्राकृतिक गिरावट" |
| 7.41 | — | — | grey "1–3 / 6 · पूरी list इससे लंबी" fades on "list" |

## s217
Continues: s216
Section label: PART 10 · COMPENSATION
Idea: two to note — short postage / product conditions, and a bad address; the list's second half. In: cut. Framing: wide, still.
Layout: #excl-1 as s216. Shot #excl-2: same heading and stamp "6" in the same places, grey "4–6 / 6"; three cards in the same slots.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #excl-1 held: heading, stamp 6, cards 1–3 |
| 1.72 | — | — | card 1 highlight words "कम postage" on "कम" |
| 3.52 | — | — | card 1 highlight words "product की शर्तें" on "product" |
| 5.60 | cut to #excl-2 | — | heading, stamp, "4–6 / 6" and three cards on screen at the cut, stagger 0.2: "4 पता अधूरा, गलत, पढ़ने लायक नहीं, असुरक्षित, खाली या पहुँच से बाहर" (two lines) · "5 सूचना के बाद holding period में item न लेना" · "6 विभाग के बस से बाहर की घटनाएँ, force majeure भी" |
| 6.56 | — | — | card 4 highlight words "पता अधूरा, गलत" on "अधूरा" |

## s218
Continues: s217
Section label: PART 10 · COMPENSATION
Idea: Force majeure defined; delay from it gets no compensation. In: cut. Framing: wide, still.
Component: key-term — term "Force Majeure" on the red stamp (no official Hindi; meaning line only), drop the exam pill and fact chips, replace the chain panel with a sand rule strip
Layout: #excl-2 as s217. Shot #fm: red stamp card x 140–760, y 220–620 ("Force Majeure" white 72 px, two lines); white meaning card x 820–1780, y 220–620 (Hindi 44 px, three lines); sand strip x 140–1780, y 700–900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #excl-2 held; card 6 highlight words "force majeure" on "Force" |
| 1.04 | cut to #fm | — | stamp card with "Force Majeure" on screen; meaning card empty |
| 2.54 | — | — | meaning "बस से बाहर की ऐसी घटना," words in on "बस" |
| 5.22 | — | — | "जो लागू शर्तों में मानी गई हो" words in; highlight "लागू शर्तों" on "शर्तों" |
| 7.80 | — | — | sand strip: "Force majeure से हुई देरी →" fades on "Force" |

## s219
Continues: s218
Section label: PART 10 · COMPENSATION
Idea: no compensation for it; sender's negligence and bad packing can end a claim; who may complain. In: cut. Framing: wide, still.
Photo: damaged-parcel-cutout — paper cut-out, white border, 2° tilt, caption "गलत packing" small grey
Layout: #fm as s218. Shot #claim-end: heading "Claim खत्म हो सकता है" (y 210, 52 px); two white cards x 140–900 and x 1020–1780, y 300–900. Shot #who: heading "Complaint कौन कर सकता है?" (y 210); Sender card x 160–860, y 290–620; Addressee card x 1060–1760, y 290–620; sand strip x 140–1780, y 690–950.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #fm held; strip adds slate cross + "compensation नहीं" on "compensation" |
| 1.72 | cut to #claim-end | — | heading and left card: ink pencil icon + "Sender की लापरवाही" (48 px) |
| 3.78 | — | — | right card: photo cut-out fades, label "गलत packing" under it |
| 4.78 | — | — | slate strike draws across "Claim" chip under both cards: "claim खत्म" |
| 6.81 | cut to #who | — | heading on screen; left card: ink envelope-out icon |
| 7.33 | — | — | "Sender" (56 px) pops, "भेजने वाला" fades under it 0.5 s later |

## s220
Continues: s219
Section label: PART 10 · COMPENSATION
Idea: the addressee may complain too; compensation usually goes to the sender, with transfer of right. In: cut. Framing: wide, still.
Layout: #who as s219.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #who held: heading, Sender card |
| 0.66 | — | — | right card: ink house icon, "Addressee" (56 px) pops, "पाने वाला" fades 0.5 s later |
| 2.16 | — | — | strip: "Compensation" (48 px) fades at left |
| 4.04 | — | — | ink arrow draws to green pill "आम तौर पर Sender को"; Sender card border turns green |
| 6.00 | — | — | grey pill "हक transfer करने के प्रावधान भी" fades on "transfer" |

## s221
Continues: no
Section label: PART 10 · COMPENSATION
Idea: the time-limits table, all four rows. In: cut. Framing: wide, still.
Component: compare-table — one value column; four rows; yellow band moves row by row; no source line
Layout: heading "समय-सीमाएँ" (x 140, y 200, 56 px). Table x 140–1780, y 260–885: red header y 260–350 "किस बात की" (x 140–760) · "समय-सीमा" (760–1780); four rows 134 tall (Hindi 40 px, numbers bold). Sand note strip x 140–1780, y 905–990 (used s222).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on screen |
| 1.10 | — | — | table pops with all rows, stagger 0.15: "Item न मिलने की complaint" · "booking के 15 दिन बाद, 60 दिन के अंदर" / "Damage या सामान गायब" · "item मिलने के 2 दिन के अंदर" / "Claim" · "posting के 60 दिन बाद नहीं" / "Settlement" · "complaint या claim मिलने से 30 दिन" |
| 2.72 | — | — | soft-yellow band on row 1 |
| 4.52 | — | — | row 1 highlight words "15 दिन बाद" |
| 6.22 | — | — | row 1 highlight words "60 दिन के अंदर" |
| 8.24 | — | — | band moves to row 2 |
| 11.76 | — | — | row 2 highlight words "2 दिन" |

## s222
Continues: s221
Section label: PART 10 · COMPENSATION
Idea: claim and settlement rows; the 15 days is only when the non-receipt complaint can be made. In: cut. Framing: wide, still.
Layout: as s221.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s221 table held, band on row 2; band moves to row 3 on "Claim" |
| 1.18 | — | — | row 3 highlight words "60 दिन" |
| 2.96 | — | — | band moves to row 4 |
| 6.56 | — | — | row 4 highlight words "30 दिन" |
| 7.46 | — | — | band back on row 1; underline words "15 दिन बाद" |
| 9.14 | — | — | note strip fades: "15 दिन बाद = सिर्फ न मिलने की complaint का समय," |

## s223
Continues: s222
Section label: PART 10 · COMPENSATION
Idea: not a delivery promise; what a claim needs; five complaint channels. In: cut. Framing: wide, still.
Layout: table as s222. Shot #needs: heading "Claim के लिए" (y 210); receipt-slip scale 1.4 at x 300–660, y 300–830 with label right of it; drawn ink letter sheet (lines + signature) x 1100–1460, y 300–800. Shot #channels: heading "Complaint के 5 रास्ते"; complaint-channel-icons x 210–1710, y 380–620; labels on 300 px centres, y 680–800 (English term 44 px, Hindi 36 px).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table held; strip adds slate cross + "delivery का वादा नहीं" |
| 2.12 | cut to #needs | — | heading and receipt-slip on screen |
| 3.94 | — | — | label "booking का valid सबूत" fades on "सबूत" |
| 4.86 | — | — | letter sheet draws; label "लिखित माँग" fades |
| 5.64 | cut to #channels | — | heading on screen |
| 7.72 | — | — | five icons with labels fade, stagger 0.25: "Complaints book · काम के घंटों में" · "Web portal · वेब पोर्टल" · "Social media · तय चैनल" · "Toll-free number · मुफ़्त नंबर" · "लिखित complaint" |
| 10.04 | — | — | highlight "Complaints book" |

## s224
Continues: s223
Section label: PART 10 · COMPENSATION
Idea: portal and toll-free named; then the question — when is an item lost? In: cut. Framing: wide, still.
Layout: #channels as s223. Shot #lost: question two lines at x 140, y 230 and y 320 (56 px); speed-post-parcel scale 0.8 at top right x 1480–1770, y 150–390 with a red "?" beside it; lower area x 140–1780, y 420–940 kept for s225–s226.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #channels held; highlight "Web portal" |
| 1.70 | — | — | highlight "Toll-free number" |
| 2.87 | cut to #lost | — | parcel on screen; "Final delivery status न हो —" words in |
| 4.81 | — | — | "तो item lost कब माना जाए?" words in, "lost" bold red |
| 5.53 | — | — | red "?" pops beside the parcel |

## s225
Continues: s224
Section label: PART 10 · COMPENSATION
Idea: lost = 60 days from booking or 30 days from complaint, whichever is later; complaint must be in time. In: cut. Framing: wide, still.
Layout: #lost as s224, adding: block A x 140–1280, y 420–560; block B x 140–1280, y 600–740 (white cards, Hindi 48 px, numbers bold); ink bracket at x 1300 joining A and B; yellow pill x 1360–1780, y 530–630; condition chip x 140–1280, y 800–920; right slot x 1360–1780, y 800–920 for s226.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #lost held: question and parcel |
| 0.96 | — | — | block A "Booking से 60 दिन" pops on "60" |
| 3.26 | — | — | block B "Complaint मिलने से 30 दिन" pops on "30" |
| 4.54 | — | — | bracket draws; pill "जो बाद में आए" pops |
| 6.74 | — | — | sand chip "शर्त: complaint समय पर की गई हो" fades on "complaint" |

## s226
Continues: s225
Section label: PART 10 · COMPENSATION
Idea: payment within 10 days, then the day-50 example on a timeline. In: cut. Framing: wide, still.
Component: timeline — one track, four markers by day number, no years; key marker (day 80) yellow
Layout: #lost as s225. Shot #example: heading "उदाहरण" (y 210); track x 200–1720, y 560 (15 px per day): day 0 x 200, day 50 x 950, day 60 x 1100, day 80 x 1400, payment end x 1550; day numbers 56 px above, Hindi labels 36 px below.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #lost held with A, B, pill, condition chip |
| 1.98 | — | — | green chip "फिर 10 दिन में payment" pops in the right slot on "payment" |
| 2.96 | cut to #example | — | heading; track draws |
| 5.00 | — | — | marker "day 0 · Booking" pops |
| 5.74 | — | — | marker "day 50 · Complaint पहुँची" pops |
| 7.94 | — | — | marker "day 60" pops; 8.46 slate strike on it ("नहीं") |
| 10.02 | — | — | yellow marker "day 80 · Lost (50 + 30)" pops |
| 11.18 | — | — | green arrow grows from day 80 to the payment end: "+10 दिन → payment" |

## s227
Continues: no
Section label: PART 10 · COMPENSATION
Idea: two separate rules not to mix; a late item is not a lost item. In: cut. Framing: wide, still.
Component: exam-trap — banner "दो अलग नियम: 30 दिन settlement ≠ lost मानने का नियम" (Hindi only, no English line); cards: "Settlement · निपटारा" ("complaint या claim मिलने से", stamp "30") and tricky "Lost item · खोया माना" ("booking से 60 या complaint से 30, जो बाद में", stamp "60"); remember bar Hindi only
Layout: banner x 100–1820, y 160–330; cards x 140–930 and x 990–1780, y 370–760; sand bar x 140–1780, y 800–960.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner on screen (triangle, "EXAM TRAP · परीक्षा का जाल") |
| 0.90 | — | — | Settlement card slides up on "settlement" |
| 2.20 | — | — | Lost card slides up on "lost" |
| 3.76 | — | — | banner highlight words "अलग" |
| 5.02 | — | — | remember bar words in: "देर से पहुँचा item, अपने आप lost item नहीं" |
| 8.28 | — | — | underline words "नहीं" |

## s228
Continues: no
Section label: PART 10 · COMPENSATION
Idea: exam angle for compensation, card 1: delay and uninsured loss. In: cut. Framing: wide, still.
Component: recap-card — flap label "EXAM ANGLE · परीक्षा की नज़र से", red title "Compensation", seal "2"; two tall rows; the right side a white panel instead of a pill for the longer rule
Layout: envelope card x 200–1720, y 170–960; flap y 170–360; rows y 380–600 and 620–940: term (English 52 px, Hindi 36 px) x 260–760, value panel x 800–1580, tick x 1620.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card with flap, label, title |
| 1.06 | — | — | row 1 "Delay · देरी" pops on "Delay" |
| 2.84 | — | — | panel "Speed Post postage जितना" fades; green tick draws 3.32 |
| 4.46 | — | — | row 2 "Uninsured loss / damage · बिना insurance नुकसान" pops |
| 6.94 | — | — | panel line "2 × postage" types in |

## s229
Continues: s228
Section label: PART 10 · COMPENSATION
Idea: finish row 2, then card 2: non-receipt complaint window. In: cut. Framing: wide, still.
Layout: shot #card1 as s228. Shot #card2: same envelope card and places, title "समय-सीमाएँ", seal "3", three rows y 380–560 / 580–760 / 780–940.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #card1 held; panel adds "या ₹1,000" |
| 1.16 | — | — | "जो कम," fades |
| 1.98 | — | — | "असली नुकसान तक" fades; green tick draws 3.36 |
| 3.68 | cut to #card2 | — | card on screen; row 1 "Non-receipt complaint · न मिलने की complaint" |
| 6.02 | — | — | value "booking के 15 दिन बाद" fades |
| 7.24 | — | — | "60 दिन के अंदर" fades; green tick 8.42 |

## s230
Continues: s229
Section label: PART 10 · COMPENSATION
Idea: damage 2 days; lost rule and 10-day payment. In: cut. Framing: wide, still.
Layout: #card2 as s229.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #card2 held with row 1 ticked; row 2 "Damage · सामान गायब/damage" pops |
| 1.98 | — | — | value "item मिलने के 2 दिन में"; green tick 2.52 |
| 3.08 | — | — | row 3 "Lost item · खोया माना item" pops |
| 4.90 | — | — | value line 1 "booking से 60 दिन या complaint से 30" fades |
| 7.86 | — | — | "जो बाद में" highlight band |
| 9.52 | — | — | line 2 "payment 10 दिन में" fades; green tick 10.14 |

## s231
Continues: no
Section label: PART 10 · COMPENSATION
Idea: ₹1,000 is a ceiling, not a fixed payment. In: cut. Framing: slow push-in 5% on #stamp, back to 1 before cut.
Layout: key-fact-stamp scale 1.15 at x 240–884, y 340–730 ("₹1,000" white 140 px, "ऊपरी सीमा" pale yellow 44 px); right column x 1000–1720: line 1 y 470, line 2 y 650 (56 px).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp with "₹1,000" stamps in on "₹1,000" |
| 1.40 | push-in starts | — | line 1 green tick + "Ceiling" pops |
| 2.34 | — | — | line 2 "तय payment" fades |
| 3.08 | back to 1 by 3.80 | — | slate strike on "तय payment" + slate cross |

## s232
Continues: no
Section label: PART 11 · EMS
Idea: Part 11 opener: International Speed Post = EMS; documents and merchandise. In: fade (0.5 s). Framing: wide, still.
Component: chapter-title — kicker "PART 11 · भाग 11", English "International / Speed Post", Hindi "अंतरराष्ट्रीय स्पीड पोस्ट", progress "Part 11 of 11 · भाग 11 / 11", stamp value "11" with speed-post-emblem in the window; add an EMS pill and two content chips
Layout: left x 140–1100: kicker y 230, title y 330/420 (80 px), Hindi y 510 (52 px), EMS pill y 580–700, chips y 760–860, dots y 940. Stamp x 1200–1740, y 220–900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | kicker, English title, stamp with emblem on screen |
| 1.50 | — | — | Hindi title fades; yellow underline draws |
| 3.41 | — | — | red pill "EMS · Express Mail Service" pops; grey "दुनिया भर में यही नाम" under it 0.5 s later |
| 5.96 | — | — | chip "Documents · दस्तावेज़" pops |
| 8.26 | — | — | chip "Merchandise · सामान" pops |

## s233
Continues: no
Section label: PART 11 · EMS
Idea: EMS table, first four rows on screen together (valuables and customs follow in s234–s237). In: cut. Framing: wide, still.
Component: compare-table — one value column, four rows, no header row, yellow band moves row by row
Layout: globe-icon scale 0.4 at x 140–268, y 165–293; heading "EMS · मुख्य बातें" x 300, y 240 (56 px); table x 140–1780, y 310–960, four rows 160 tall: term (English 48 px + Hindi 36 px) x 160–620, value (Hindi 40 px) x 660–1760.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | globe, heading; table pops, rows stagger 0.15: "Contents · सामग्री" · "documents और merchandise" / "Booking · बुकिंग" · "सभी post offices" / "Weight · वज़न" · "35 kg gross, या destination देश की कम सीमा" / "Size · आकार" · "कोई एक नाप 1.5 m तक · लंबाई + सबसे बड़ा घेरा 3 m तक" |
| 1.49 | — | — | band on row 2 |
| 4.65 | — | — | band moves to row 3 |
| 6.57 | — | — | highlight words "35 kg" |
| 9.47 | — | — | highlight words "कम सीमा" |

## s234
Continues: s233
Section label: PART 11 · EMS
Idea: size limits, then valuables — six kinds, first three. In: cut. Framing: wide, still.
Photo: gold-jewellery-cutout — paper cut-out, white border, 2° tilt, caption "Jewellery"
Layout: table as s233. Shot #val-a: heading "Valuables" (64 px, x 140, y 230) with "कीमती चीज़ें" (40 px) beneath; red stamp "6" at x 1640, y 160; grey "1–3 / 6" at x 600, y 230; three chips x 140–1100, h 150 at y 360 / 540 / 720 (Hindi 48 px); photo x 1180–1760, y 330–850.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s233 table held; band moves to row 4 |
| 2.07 | — | — | highlight words "1.5 m" |
| 6.47 | — | — | highlight words "3 m" |
| 8.32 | cut to #val-a | — | heading on screen |
| 8.90 | — | — | stamp "6" stamps; "1–3 / 6" fades |
| 10.08 | — | — | chips fade, stagger 0.3: "कीमती धातुएँ" · "कीमती पत्थर" · "Jewellery · गहने"; photo fades with the third |

## s235
Continues: s234
Section label: PART 11 · EMS
Idea: the other three valuables; only by insured EMS, insured up to ₹1,00,000. In: cut. Framing: wide, still.
Layout: #val-a as s234. Shot #val-b: same heading and stamp, grey "4–6 / 6"; chips x 140–960 at y 360 / 540 / 720, small icons inside (rupee-deposit scale 0.5 by notes, security-certificate scale 0.25 by securities); right x 1040–1780: green pill y 340–440, key-fact-stamp scale 1.1 at y 500–874.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #val-a held |
| 0.62 | — | — | highlight "Jewellery" chip |
| 1.40 | cut to #val-b | — | heading, stamp and chips on screen, stagger 0.2: "सिक्के" · "Currency notes · नोट" · "Bearer securities · धारक प्रतिभूतियाँ" |
| 1.58 | — | — | highlight "Currency notes" |
| 3.58 | — | — | highlight moves to "Bearer securities" |
| 5.78 | — | — | green pill "सिर्फ insured EMS से" pops |
| 9.02 | — | — | key-fact-stamp "₹1,00,000" stamps, "तक insured" pale yellow under it |

## s236
Continues: no
Section label: PART 11 · EMS
Idea: customs declaration; SDR named; up to 300 SDR → CN 22. In: cut. Framing: wide, still.
Component: key-term — two compact cards (no exam pill, chips or chain): white "Customs declaration" card and red SDR stamp
Layout: white card x 140–860, y 180–440 ("Customs declaration" 52 px, "सीमा-शुल्क घोषणा" 40 px); red stamp x 920–1780, y 180–440 ("SDR" 110 px, "Special Drawing Right" 40 px, meaning "विशेष आहरण अधिकार" pale yellow 36 px). Value line x 200–1720, y 600 with mark at x 960; declaration-tag scale 0.9 at x 336–624, y 700–900 (left) and x 1296–1584 (right, s237).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | customs card frame on screen; "Customs declaration" pops at 0.18, Hindi 0.5 s later |
| 1.76 | — | — | SDR stamp pops with "SDR" |
| 3.58 | — | — | "Special Drawing Right" words in; Hindi meaning fades 0.5 s later |
| 5.80 | — | — | value line draws; label "Declared value · घोषित मूल्य" above it |
| 6.64 | — | — | mark + "300 SDR" pops at x 960 |
| 8.30 | — | — | "300 SDR तक" label fades over the left half |
| 9.16 | — | — | left tag pops with "CN 22" on its red strip |

## s237
Continues: s236
Section label: PART 11 · EMS
Idea: above 300 SDR → CN 23; exactly 300 takes CN 22. In: cut. Framing: wide, still.
Layout: as s236.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s236 held: both cards, value line, 300 mark, left tag CN 22 |
| 1.76 | — | — | "300 SDR से ऊपर" label fades over the right half |
| 2.78 | — | — | right tag pops with "CN 23" |
| 4.46 | — | — | 300 mark pulses; yellow band on "300 SDR" ("ठीक") |
| 6.50 | — | — | ink arrow draws from the mark down to the CN 22 tag |
| 7.60 | — | — | green tick pops on CN 22 tag |

## s238
Continues: no
Section label: PART 11 · EMS
Idea: exam angle for EMS: booking and weight, valuables. In: cut. Framing: wide, still.
Component: recap-card — flap label "EXAM ANGLE · परीक्षा की नज़र से", title "EMS", seal "3"; three rows with pills
Layout: envelope card x 200–1720, y 170–960; flap y 170–360; rows y 380–560 / 580–760 / 780–940: term x 260–760 (English 52 px, Hindi 36 px), pill x 800–1580, tick x 1620.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card with flap, label, title "EMS" |
| 1.22 | — | — | row 1 "EMS · अंतरराष्ट्रीय Speed Post" pops |
| 1.90 | — | — | pill "सभी post offices पर booking" fades |
| 4.58 | — | — | pill adds "· 35 kg तक"; green tick 5.64 |
| 6.48 | — | — | row 2 "Valuables · कीमती चीज़ें" pops |
| 7.44 | — | — | pill "सिर्फ insured EMS" fades |

## s239
Continues: s238
Section label: PART 11 · EMS
Idea: the ₹1 lakh cap; CN 22 / CN 23 split. In: cut. Framing: wide, still.
Layout: as s238.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s238 card held; row 2 pill adds "· ₹1 लाख तक" |
| 1.08 | — | — | green tick on row 2 |
| 2.30 | — | — | row 3 "CN 22 / CN 23 · customs declaration" pops |
| 3.74 | — | — | pill "300 SDR तक → CN 22" fades |
| 5.56 | — | — | pill adds "ऊपर → CN 23" |
| 6.76 | — | — | green tick on row 3 |
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

## s243
Continues: no
Section label: KEY POINTS
Idea: what "local" means, then the article number: 13 alphanumeric characters. In: cut. Framing: wide, still.
Layout: left white card x 100–900, y 190–960: header "Local / स्थानीय" (English 64 px, Hindi beneath); two lines with ink pin/boundary icons at y 520 "तय PIN codes (Metro)" and y 720 "या municipal सीमा के अंदर". Right: `key-fact-stamp` scale 1.3 at x 1000–1728, y 190–632: "13 characters", "अक्षर + अंक (alphanumeric)"; under it y 700–940 a white strip of 13 blank boxes x 1000–1820 and slate text "13-digit" y 900.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card with "Local / स्थानीय" header on screen |
| 1.28 | — | — | PIN line + pin icon reveal |
| 2.70 | — | — | municipal line + boundary icon reveal; highlight "अंदर" at 4.04 |
| 5.14 | — | — | stamp pops with "Article number" label above |
| 5.56 | — | — | "13" stamp text, 13 boxes reveal left→right |
| 6.28 | — | — | "13-digit" fades, slate strike; Hindi line fades |

## s244
Continues: no
Section label: KEY POINTS
Idea: surface Speed Post Parcel goes ahead of India Post Parcel; discount slabs start. In: cut. Framing: wide, still. Sub-shot group #a holds all of this (s245 continues it).
Layout: left white card x 100–860, y 190–960: `transport-icons` #truck only, scale 1.2, at y 330–560; under it two `speed-post-parcel` (scale 0.6) in a queue, Speed Post Parcel on the right (ahead, red label "पहले"), India Post Parcel behind on the left; labels y 880. Right white table x 940–1820, y 190–760: red header "Monthly revenue (GST के बिना) · NTD · TD"; row 1 "₹2 लाख तक · 0% · 0%" y 440; row 2 "₹2–9 लाख · 10% · 20%" y 600; grey source "1 Oct 2025 से".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card with truck on screen |
| 1.12 | — | — | Speed Post Parcel pops at the front, label fades |
| 2.86 | — | — | India Post Parcel pops behind |
| 4.28 | — | — | "पहले" stamp on the front parcel |
| 5.22 | — | — | table slides from right with header |
| 5.84 | — | — | row 1 label; 7.46 both "0%" pop |
| 8.64 | — | — | row 2 label reveals |
| 9.50 | — | — | NTD column highlight; 10.38 "10%" pops |

## s245
Continues: s244
Section label: KEY POINTS
Idea: TD 20%, then the add-on fees: Registration ₹5, OTP ₹5, POD ₹10, POD free on an insured item. In: cut. Framing: wide, still. Sub-shots: #a (0), #fees (3.38).
Layout: #a = s244's cards exactly; row 2 TD cell at x 1700, y 600. #fees: three red stamp-edge cards (480×440) at x 140, 720, 1300, y 220–660: "Registration / पंजीकरण ₹5", "OTP ₹5", "POD / वितरण का प्रमाण ₹10" (values 110 px white); sand band x 140–1780, y 760–940: "Insured item / बीमित वस्तु → POD" + green pill "free".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | truck/parcels card and discount table carried over |
| 1.02 | — | — | TD column highlight; 1.66 "20%" pops, row 2 yellow outline |
| 3.38 | — | — | cut to #fees: Registration card pops; 4.20 "₹5" pops |
| 5.22 | — | — | OTP card pops; 5.92 "₹5" pops |
| 7.18 | — | — | POD card pops; 7.78 "₹10" pops |
| 9.42 | — | — | band reveals "Insured item → POD" |
| 11.36 | — | — | green pill "free" stamps |

## s246
Continues: no
Section label: KEY POINTS
Idea: ordinary service standards: local 1–2 days, rest of the country 4–5 days, Branch Office one day extra. In: cut. Framing: wide, still.
Layout: one white card x 160–1760, y 190–960: red header "Ordinary Speed Post / सामान्य स्पीड पोस्ट" + grey "Service standards · सेवा मानक" y 190–360; three rows (190 tall) at y 470, 660, 850: "Local / स्थानीय" · pill "1–2 दिन"; "बाकी देश" · pill "4–5 दिन"; "Branch Office / शाखा डाकघर" · yellow pill "+1 दिन"; pills right x 1340–1700; grey source "Citizens' Charter 2021" under the card.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card with header on screen |
| 1.76 | — | — | Local row reveals; 2.30 "1–2 दिन" pops |
| 4.10 | — | — | "बाकी देश" row reveals; 4.88 "4–5 दिन" pops |
| 7.24 | — | — | Branch Office row reveals |
| 8.48 | — | — | "+1 दिन" stamps (yellow = added) |

## s247
Continues: no
Section label: KEY POINTS
Idea: the three premium products side by side. In: cut. Framing: wide, still.
Layout: three white cards (520×700) at x 120, 700, 1280, y 200–900, each topped by a badge: red "24", deep red "48", red "24" + small `speed-post-parcel` (scale 0.5). Names (48 px): "24 Speed Post Document", "48 Speed Post Document", "24 Speed Post Parcel"; facts big below: "अगले दिन (D+1)", "2 working days में", "5 kg तक"; grey line under the cards "17 Mar 2026 से · पहचाने गए routes".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card 1 with "24" badge on screen |
| 0.44 | — | — | card 1 name fades |
| 1.32 | — | — | "अगले दिन (D+1)" reveals |
| 2.80 | — | — | card 2 pops with "48" badge; 3.68 name fades |
| 4.78 | — | — | "2 working days में" reveals |
| 7.40 | — | — | card 3 pops with "24" badge + parcel; 7.84 name fades |
| 9.38 | — | — | "5 kg तक" stamps (perforated stamp chip) |

## s248
Continues: no
Section label: KEY POINTS
Idea: insurance ceilings, then compensation for delay and uninsured loss. In: cut. Framing: wide, still.
Layout: left two `key-fact-stamp` (560×340) at x 120–680: y 190–530 "₹5 लाख" / "Insurance की अधिकतम सीमा"; y 610–950 "₹20,000" / "currency notes की सीमा". Right white card x 780–1820, y 190–860: red header "Compensation / मुआवज़ा"; row 1 y 420 "Delay / देरी" → "दिया गया postage"; row 2 y 640 "Uninsured loss / बिना insurance हानि" → "2 × postage या ₹1,000" (row 2's "जो कम हो" pill lands in s249 at y 760).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | top stamp shell with "Insurance ceiling" kicker on screen |
| 1.06 | — | — | "₹5 लाख" pops, Hindi fades +0.5 |
| 2.78 | — | — | lower stamp pops; 4.22 "₹20,000" pops |
| 4.88 | — | — | compensation card slides from right, row 1 term |
| 6.30 | — | — | "दिया गया postage" reveals |
| 7.84 | — | — | row 2 term reveals |
| 10.16 | — | — | "2 × postage" reveals; 12.50 "या ₹1,000" pops |

## s249
Continues: s248
Section label: KEY POINTS
Idea: "whichever is less", then when a lost item is settled. In: cut. Framing: wide, still. Sub-shots: #a (0, s248's layout), #lost (1.46).
Layout: #a = s248's stamps and compensation card exactly; yellow pill "जो कम हो" at x 1200–1560, y 720–800. #lost: white card x 120–1800, y 190–960: red title "Lost item / खोई वस्तु" y 250; row A y 420 "Booking से" + red bar x 560–1180 + "60 दिन"; row B y 580 "Complaint से" + red bar + "30 दिन"; bracket at x 1300 spanning both, "जो बाद में" right of it; sand band y 760–920 "फिर 10 दिन में payment".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | insurance stamps and compensation card carried over |
| 0.58 | — | — | "जो कम हो" pill pops on row 2 |
| 1.46 | — | — | cut to #lost: card with title on screen |
| 2.26 | — | — | row A label; 3.10 bar grows from left, "60 दिन" fades |
| 4.50 | — | — | row B label; 5.34 bar grows, "30 दिन" fades |
| 6.38 | — | — | bracket draws, "जो बाद में" highlight |
| 7.54 | — | — | band reveals "फिर 10 दिन में"; 8.42 "payment" underline |

## s250
Continues: no
Section label: KEY POINTS
Idea: complaint time limits: non-receipt after 15 and within 60 days of booking; damage within 2 days of receipt. In: cut. Framing: wide, still.
Layout: top white card x 120–1800, y 190–560: title "न मिलने की complaint" y 250; track x 220–1700, y 430 with ticks "Booking (0)", "15 दिन", "60 दिन"; soft-yellow window between 15 and 60. Bottom: white card x 120–1160, y 620–960 "Damage की complaint" / "item मिलने के बाद"; `key-fact-stamp` scale 0.9 at x 1240–1744, y 640–946: "2 दिन" / "मिलने के अंदर".
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | top card with title and empty track on screen |
| 1.70 | — | — | "Booking (0)" tick draws |
| 2.42 | — | — | "15 दिन" tick pops; 3.10 "बाद" arrow draws right |
| 3.62 | — | — | "60 दिन" tick pops; 4.22 window grows 15→60, "अंदर" label |
| 5.40 | — | — | bottom card pops with "Damage की complaint" |
| 6.84 | — | — | "item मिलने के बाद" fades |
| 8.54 | — | — | "2 दिन" stamp pops |

## s251
Continues: no
Section label: CLOSE
Idea: get the product and the class right at the counter and half the Speed Post question is solved. In: fade (0.5 s). Framing: slow push-in 5% on #lesson from 3.72; the video ends pushed in.
Layout: `speed-post-emblem` scale 1.2 at x 140–764, y 340–772; kicker "Counter पर" y 260 above it. Right (#lesson) x 900–1800: pill "सही product" y 360–480 and pill "सही class" y 540–660, each with a green tick at the right; ink line y 720; "Speed Post का आधा सवाल" y 820 (64 px) and "वहीं हल" y 920 (72 px, red).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | emblem and "Counter पर" kicker on screen |
| 1.08 | — | — | "सही product" pill reveals; 1.44 green tick draws |
| 2.46 | — | — | "सही class" pill reveals; 3.32 green tick draws |
| 3.72 | push-in starts (5%, ease) | — | ink line draws |
| 4.24 | — | — | "Speed Post का आधा सवाल" words in |
| 5.36 | — | — | highlight on "आधा" |
| 6.40 | — | — | "वहीं हल" fades; 7.32 underline on "हल" |
