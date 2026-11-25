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

## s155
Continues: s154
Section label: PART 8 · RETENTION AND RETURN
Idea: the extension isn't automatic nor an unlimited right in every COD contract; don't confuse it with a registered item's deposit.
Sub-shots: #line 0.00, #cmp 8.19.
#cmp: Component: compare-cards. Mould: question "दोनों अलग नियम · दोनों सही" (Hindi only); left (red band) "Registered item" with domestic-envelope icon; right (yellow band) "VP article" with parcel icon; one fact per card (Hindi 52 px): "पूछताछ असफल होने के बाद 7 दिन"; "पेश करने या intimation के बाद 7 दिन"; no right/wrong colouring until the green ticks; takeaway dropped.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grey "अपने आप नहीं" under the chip (44 px) |
| 3.10 | — | — | second grey line "हर contract में असीमित हक नहीं" |
| 8.19 | — | — | cut to #cmp: question + both card heads |

## s156
Continues: s155
Section label: PART 8 · RETENTION AND RETURN
Idea: registered item: 7 days after the enquiry fails; VP article: 7 days after first offer…
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pulse` left head |
| 1.52 | — | — | left fact `fade`; 2.48 `highlight` "पूछताछ असफल" |
| 6.22 | — | — | `pulse` right head |
| 7.78 | — | — | right fact `fade`; 9.66 `highlight` "पेश करने" |

## s157
Continues: s156
Section label: PART 8 · RETENTION AND RETURN
Idea: …or intimation; two different rules, both correct; counting rules: VP counting does not start at booking.
Sub-shots: #cmp 0.00, #line 5.71 (the day line as left in s154, flags and bands kept).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `highlight` "intimation" on the right card |
| 4.66 | — | — | green ticks on both cards (stagger 0.2) |
| 5.71 | — | — | cut to #line |
| 8.77 | — | — | slate marker "Booking" left of day 1 at (120, 420) |
| 9.77 | — | — | slate cross on it |

