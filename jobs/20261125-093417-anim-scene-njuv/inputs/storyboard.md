# Storyboard: Value Payable Articles and Cash on Delivery (COD)

Channel: Postal Exams. No character, no rig: every scene is an animated lecture slide in the kit's colours.
Hindi voice; on screen, postal terms in English (Inter bold) with their translation beneath; everything else in Hindi.

## Shared

**Fixed frame.** Series tag: PRODUCTS (every scene). Section labels (English, top left) are given per scene.
Content area below the header: x 100–1820, y 150–1000. Nothing important outside it.

**House style for every scene (so sections stay short):**
- Term pair: English term Inter 700, 84–110 px, ink or white on red; its Hindi 48–56 px directly under it, fading in about 0.5 s after the English lands.
- Hindi lines: Noto Sans Devanagari, 44–56 px (never under 40 px on a main card), line height 1.3×.
- Key-fact card: postal-red perforated stamp card (white text). Document card: white, #ead9a8 border, Georgia, source in grey beneath.
- Exam-angle card ("परीक्षा के लिए" kicker, red stamp tab at left): a white card 1560×760 at (180, 190); rows of 60 px Hindi/English, each row lands with `fade`+0.2 s `slide from left dist 40` on its word; earlier rows stay ink; the row being read gets a soft yellow band (`highlight`). Never more than five rows.
- Recap: `Component: recap-card` (envelope), rows tick green on their words.
- Wrong / rejected: slate #4b4f58 `strike` plus a slate cross; correct / allowed: green tick. Red is never "wrong".
- Allowed transitions: cut, fade, wipe. A new Part opens with `wipe` (from right, 0.5 s); recaps open with `fade` 0.5 s; everything else `cut`.
- Camera: still by default; a slow push-in (≤ 6 %) only where named, always returning or holding to the cut (no carry-over unless stated).
- Allowed moves only (kit denies smear, ticker, scatter, spin, float, wiggle, shake, bounce, flip, letters).

**New pieces (made once for the library):**
- `cod-flow-diagram` (symbol, 1600×560): THE recurring picture. Two thin ink lines (3 px) across: item line y 170 (x 240–1360) with a small arrowhead at its right end, money line y 390 (x 240–1360) with its arrowhead at the left end. Four round numbered step markers (white disc, 3 px ink, red numeral, Ø 84): #step-1 at (300, 170) booking, #step-2 at (800, 170) carriage, #step-3 at (1300, 280) collection (between the lines at the addressee end), #step-4 at (800, 390) remittance. Clear zones at x 0–200 and 1400–1600 for the person icons. Parts: #line-item, #line-money, #arrow-item, #arrow-money, #step-1…#step-4 (each disc a group so a scene can `color` it yellow #f2b705). Anchors: base, top. Placed at translate(160 300) for full width. Scenes: s005, s015, s016, s017, s024, s047, s103, s124, s125, s194, s195, s196.
- `parcel-icon` (prop, 220×180): flat parcel box, kraft #f3ead6 fill, 3 px ink outline, ink string crossed over it, small blank white label on the front. Anchors: base, top. Scenes: s001, s005, s014, s015, s017, s018, s020, s022, s023, s103, s105, s124, s125, s194, s196, s207 and any scene naming "item".
- `rupee-coin` (prop, 120×120): round white coin, double ink rim, ink ₹ in the centre. Anchors: base. Scenes: same as parcel-icon wherever money moves.
- `cod-parcel-face` (prop, 960×600): the big front face of a parcel (kraft #f3ead6, ink outline, ink string crossing at the centre-right) with three blank white zones: #zone-cod upper left (x 40–420, y 40–210), #zone-sender lower left (x 40–420, y 400–560), #zone-address right (x 520–920, y 280–520, three grey rule lines). Anchors: base, top. Scenes: s057, s058, s071, s072.
- `mo-form` (prop, 600×400): white money order form with ink outline, a dashed perforation line across at y 250 splitting #upper (blank grey rule lines, one blank field box #field-place at x 40–300, y 150–210) from #lower (a coupon with two rule lines). No lettering. Anchors: base, top. Scenes: s058, s059, s066, s187, s188, s190.
- `retention-day-line` (prop, 1620×220): thin grey (#6f6a63) 4 px line x 30–1590 at y 120 with 15 small ticks, #tick-1…#tick-15 at x = 60 + (n−1)·107; blank space above (y 0–100) for shaded bands and markers and below (y 140–220) for the scene's day numerals. Anchors: base. Scenes: s151–s159, s164.
- `scales-icon` (symbol, 360×320): flat ink balance scales, two pans level, sand fill, 3 px ink. Anchors: base. Scenes: s184, s185, s186, s194, s206.
- `address-label-tag` (prop, 380×240): large white address label with three blank rule lines, a reinforced hole at the left end and an ink string loop. Anchors: base, top. Scenes: s072.
- `complaint-channel-icons` (symbol, 1500×240): five flat ink icons in a row on 300 px centres, each in its own group: #book (open bound book), #portal (browser window), #social (speech bubbles), #phone (handset), #letter (envelope with pen). No lettering. Anchors: base. Scenes: s175, s176, s177, s193.
- `id-card-icon` (prop, 260×170): flat identity card, white with ink outline, grey photo square (no face, just a sand silhouette) and blank lines. Anchors: base. Scenes: s104, s119.
- `watch-icon` (prop, 220×300): flat ink wrist watch, white dial, sand strap. Anchors: base. Scenes: s041, s042, s043.

**Library pieces reused:** `person-icon` (sender, addressee, customer, authorised person; tinted sand, labelled by the scene), `regulations-book`, `calendar-sheet`, `form-register`, `invoice-sheet`, `signature-slip`, `inventory-sheet`, `intimation-slip`, `registered-list-sheet`, `cash-bag`, `rupee-deposit`, `icon-firm`, `icon-circle-office`, `icon-village-post-office`, `post-counter-icon`, `booking-counter`, `insured-envelope-emblem`, `sealed-insured-cover`, `domestic-envelope`, `record-book`.

**Photos:** library `post-office-counter-scale` (s050), `gold-jewellery-cutout` (s040). New: `money-order-form-india` (s058), `india-post-parcel` (s014), `postman-delivering-parcel` (s106). Each scene that uses one works with the drawn piece if the photo is missing.

## Continuity

No character, so continuity is layout: a scene marked `Continues: sNNN` keeps the previous scene's last frame exactly (same cards, same positions) and cuts. Direction never changes: the item always travels left → right (sender left, addressee right), money always right → left. Sender is always the left person-icon, addressee the right one. Part openers wipe from the right; recaps fade. The retention day line (Part 8) and the fee calculation cards (Part 5) keep the same position in every scene that shows them.

## s077
Continues: no
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: APO = Army Post Office; VP articles and money orders are not booked to an APO address. In: cut. Framing: wide.
Layout: left stamp card "APO" (140 px) / "Army Post Office" (56 px) / "सेना डाकघर" (48 px) x 140–820 y 240–700. Right x 940–1780: two white cards y 300 and 560: parcel-icon + "VP articles", mo-form (0.4) + "Money orders"; arrow from them to a small "APO" badge; slate verdict (round, 56 px) y 840 "book नहीं होते".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | APO letters |
| 1.85 | — | — | `fade` "Army Post Office"; +0.5 Hindi |
| 5.81 | — | — | `pop` VP articles card |
| 8.00 | — | — | `pop` Money orders card |
| 9.00 | — | — | slate cross on both; `stamp` verdict |

## s078
Continues: no
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: the address rule for defence personnel: service number, rank, name, unit, care of 56 APO or 99 APO. In: cut. Framing: wide.
Layout: address-envelope scale 2.0 at (960, 1000) base (x 320–1600, y 200–1000). Lines lettered above #line-1..#line-4 (Inter 52): "Service number · Rank", "Name", "Unit", "C/o 56 APO / 99 APO". Heading "Defence personnel का पता" (56 px red) in the envelope's empty upper-left (x 380, y 320).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + heading |
| 3.43 | — | — | `type` line 1 (Service number); 4.43 "· Rank" |
| 4.97 | — | — | `type` line 2 |
| 5.53 | — | — | `type` line 3 |
| 6.61 | — | — | `type` line 4; 7.25 `highlight` "56 APO"; 9.91 `highlight` "99 APO" |

## s079
Continues: s078
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: this address rule is not permission for COD; and the VP → COD rename…
Sub-shots: #addr 0.00, #rename 5.08.
#rename: left grey "VP" (120 px) → ink arrow → red "COD" (120 px), y 420; under it a destination tag "APO" with a slate padlock (drawn) at (960, 760), grey caption for s080.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope holds |
| 1.38 | — | — | heading `out`; grey note in the same top-left slot (new element): "पता लिखने का नियम" `fade` |
| 3.31 | — | — | `fade` slate "COD की अनुमति नहीं" under it + slate cross |
| 5.08 | — | — | cut to #rename: "VP" |
| 7.29 | — | — | `draw` arrow; `pop` "COD" |

