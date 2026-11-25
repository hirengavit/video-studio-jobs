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

## s001
Continues: no
Section label: INTRODUCTION
Idea: title hook. A parcel with a ₹ coin beside it: pay when it arrives. In: cut (video start). Framing: wide, still.
Layout: parcel-icon scale 2.4 at (460, 640) base on a thin ink ground line y 760 (x 160–760); rupee-coin scale 1.3 at (700, 720). Right column x 860–1800: red kicker "आज का topic" y 250 (52 px); stamp card A "Value Payable Articles" (white on red, 84 px) at y 300–470; stamp card B "Cash on Delivery (COD)" (96 px) at y 540–720 with "वितरण पर नकद भुगतान" (54 px) under it at y 800.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel, coin, ground line and kicker already on screen (hook readable) |
| 1.24 | — | — | `pop` card A |
| 4.22 | — | — | `pop` card B |
| 5.44 | — | — | `fade` Hindi line under B |
| 7.36 | — | — | `draw` a short ink arrow from coin toward parcel; `pulse` coin |

## s002
Continues: no
Section label: INTRODUCTION
Idea: the service began in 1877 under the name Value Payable Post (VP / VPP). In: cut. Framing: wide, still.
Layout: left: round red postmark (Ø 460) "1877" (white, 150 px) with wavy cancel lines, centred (520, 590); grey "शुरुआत" (48 px) under it at y 880. Right x 980–1800: "पुराना नाम" grey label y 330; "Value Payable Post" Inter 700 96 px (two lines, y 430/540); two red pills "VP" and "VPP" (72 px) at y 660–760, x 1000 and 1260.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `stamp` postmark 1877 (on the spoken number) |
| 1.70 | — | — | `fade` "शुरुआत" |
| 3.16 | — | — | `fade` "पुराना नाम" |
| 3.78 | — | — | `words` "Value Payable Post" |
| 6.72 | — | — | `pop` VP pill |
| 7.90 | — | — | `pop` VPP pill |

## s003
Continues: no
Section label: INTRODUCTION
Idea: today's name is Cash on Delivery (COD); its whole frame is in the Post Office Regulations 2024. In: cut. Framing: wide.
Sub-shots: #name 0.00, #book 5.08.
#name: grey "Value Payable Post (VP)" (64 px) at left (x 140–820, y 520); ink arrow x 860–1020; right stamp card "Cash on Delivery" (100 px) x 1060–1800 y 400–600, red pill "COD" (88 px) under it at y 650; "वितरण पर नकद भुगतान" (52 px) y 800.
#book: regulations-book scale 1.45 at (420, 900) base on a ground line y 900; its title panel lettered "Post Office Regulations 2024"; right x 860–1800: "COD का पूरा ढाँचा" (64 px) at y 420.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grey old name visible |
| 1.58 | — | — | `draw` arrow; `pop` Cash on Delivery card |
| 3.86 | — | — | `stamp` COD pill; +0.5 `fade` Hindi |
| 5.08 | — | — | cut to #book: "COD का पूरा ढाँचा" already set; book `slide` from down |
| 7.12 | — | — | `highlight` book title panel |

## s004
Continues: s003
Section label: INTRODUCTION
Idea: it sits in Regulation 135; the Regulations apply from 16 December 2024. Framing: wide, still.
Layout: book stays at left as in s003 #book; "COD का पूरा ढाँचा" stays at y 420. Under it: red stamp tag "Regulation 135" (84 px) at x 900–1500, y 500–640. Right-lower: round postmark (Ø 360) at (1540, 820) "16 December 2024" (Inter 52 px, two lines) and "से लागू" (52 px) to its left at (1120, 840).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s003 end frame |
| 1.00 | — | — | `pop` Regulation 135 tag |
| 1.94 | — | — | `pulse` the number |
| 4.70 | — | — | `stamp` postmark |
| 7.54 | — | — | `fade` "से लागू" |

## s005
Continues: no
Section label: INTRODUCTION
Idea: the whole picture in two lines: item goes sender → addressee; money comes addressee → sender. In: cut. Framing: wide, still.
Layout: cod-flow-diagram at translate(160 300) (step markers hidden until s015). person-icon (sand) at (250, 760) labelled "Sender" (Inter 52) / "प्रेषक" (44) beneath; second person-icon at (1670, 760) "Addressee" / "प्राप्तकर्ता". Heading "पूरी तस्वीर, दो lines में" (60 px) at y 220. parcel-icon scale 0.6 at the item-line start (400, 470); rupee-coin scale 0.8 on the money line at (1520, 690).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading and both person icons with labels visible |
| 1.16 | — | — | `draw` #line-item and #line-money (dur 0.8) |
| 2.04 | — | — | `pop` parcel at sender end |
| 3.86 | — | — | `move` parcel by [1080, 0] (spring soft) |
| 6.04 | — | — | `pop` coin at addressee end |
| 7.78 | — | — | `move` coin by [−1080, 0] |

## s006
Continues: no
Section label: INTRODUCTION
Idea: the COD category decides the limit, the charges and the procedure; nine parts ahead. In: cut. Framing: wide.
Layout: centre-top stamp card "COD category" (96 px) / "COD श्रेणी" (52 px), x 560–1360, y 190–440. Below, three white cards 460×200 at y 560, x 160 / 730 / 1300: "सीमा", "Charges", "प्रक्रिया" (60 px), joined to the stamp by ink lines. Round postmark "9 हिस्से" (Ø 220) at (1680, 890).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp card visible |
| 2.80 | — | — | `draw` three connector lines |
| 3.54 | — | — | `pop` card सीमा |
| 4.46 | — | — | `pop` card Charges |
| 5.92 | — | — | `pop` card प्रक्रिया |
| 8.02 | — | — | `stamp` postmark "9 हिस्से" |

## s007
Continues: no
Section label: INTRODUCTION
Idea: the lecture map, parts 1–3 (screen notes: nine parts as numbered Hindi lines, same wording as spoken). In: cut. Framing: wide, still.
Layout: white card 1600×760 at (160, 200), red header strip "इस lecture के नौ हिस्से" (56 px, white). Rows at y 400 / 560 / 720, each a red numbered disc (Ø 90, white numeral) at x 260 and the line (60 px) from x 340: 1 "COD का मतलब"; 2 "Agreement, वसूली की सीमा, और insurance"; 3 "Booking, forms और declaration".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card with header; `pop` disc 1; `reveal` row 1 |
| 2.62 | — | — | `pop` disc 2; `reveal` row 2 |
| 8.14 | — | — | `pop` disc 3; `reveal` row 3 |

## s008
Continues: s007
Section label: INTRODUCTION
Idea: map, parts 4–6. Same card and header; three new row elements in the same slots (rows 1–3 are not carried over).
Rows: 4 "Booking की बाकी शर्तें, और APO"; 5 "COD fee का हिसाब"; 6 "Delivery, वसूली और POD".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card + header; `pop` disc 4; `reveal` row 4 |
| 4.98 | — | — | `pop` disc 5; `reveal` row 5 |
| 8.10 | — | — | `pop` disc 6; `reveal` row 6 |

## s009
Continues: s008
Section label: INTRODUCTION
Idea: map, parts 7–8 (same card, new rows in slots 1–2).
Rows: 7 "Sender को पैसा भेजना, और रकम बदलना"; 8 "VP article कितने दिन रुकता है, और वापसी".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card + header; `pop` disc 7; `reveal` row 7 |
| 5.04 | — | — | `pop` disc 8; `reveal` row 8 |

## s010
Continues: s009
Section label: INTRODUCTION
Idea: map, part 9 joins rows 7–8 in the third slot.
Row: 9 "Complaints, और धोखाधड़ी से सुरक्षा".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s009 end frame; `pop` disc 9; `reveal` row 9 |
| 3.84 | — | — | `highlight` row 9 (soft yellow); hold to the cut |

## s011
Continues: no
Section label: PART 1 · WHAT COD IS
Idea: the exact definition. In: wipe from right. Framing: wide, still.
Component: quote-card. Mould: full-width (x 140–1780, y 170–880); source label "Post Office Regulations 2024 · Reg. 135"; Georgia 52 px, four lines: "Cash on delivery (COD) is a value-added postal service in which the Post Office collects a specified amount from the addressee when delivering an item and remits the amount to the sender."; postmark "REG. 135 · 2024"; gist panel "सार: delivery पर वसूली, sender को भुगतान" (hidden until s012).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card and Georgia text on screen |
| 1.80 | — | — | `highlight` words "value-added postal service" |
| 5.75 | — | — | `highlight` words "collects a specified amount from the addressee" |
| 8.92 | — | — | `stamp` postmark |

## s012
Continues: s011
Section label: PART 1 · WHAT COD IS
Idea: …and remits it to the sender; three words to learn, first Sender.
Sub-shots: #quote 0.00 (s011 frame), #terms 3.41.
#terms: three stamp cards 500×560 at x 140 / 710 / 1280, y 220: "Sender" / "प्रेषक"; "Addressee" / "प्राप्तकर्ता"; "Remit" / "धन प्रेषण" (English 84 px white, Hindi 50 px pale yellow); under each a white meaning strip (y 800–960, 44 px Hindi). Cards 2 and 3 arrive in s013.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | quote card holds |
| 1.89 | — | — | `highlight` words "remits the amount to the sender" |
| 2.75 | — | — | `fade` gist panel |
| 3.41 | — | — | cut to #terms (three faint dashed slot outlines) |
| 4.55 | — | — | `pop` Sender card; +0.5 Hindi |
| 6.15 | — | — | `fade` strip line "item post करता है" |
| 9.35 | — | — | `fade` second line "वसूली की रकम तय करता है" |

## s013
Continues: s012
Section label: PART 1 · WHAT COD IS
Idea: Addressee and Remit complete the three cards.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | Sender card holds; `pop` Addressee card; +0.5 Hindi |
| 2.20 | — | — | `fade` strip "जिसके नाम item भेजा गया" |
| 4.10 | — | — | `pop` Remit card; +0.5 Hindi |
| 5.14 | — | — | `fade` strip "वसूला पैसा हकदार तक भेजना" |

## s014
Continues: no
Section label: PART 1 · WHAT COD IS
Idea: example: a Gujarat supplier sends ordered goods; the customer doesn't pay in advance. In: cut. Framing: wide.
Layout: heading "एक example" (56 px, red) y 210. Left icon-firm scale 1.1 at (360, 760) base, sign band "Supplier", "Gujarat" pill under it (48 px). Right person-icon scale 1.4 at (1560, 760) labelled "Customer" / "ग्राहक". Thin ink line y 600 between them. Photo: india-post-parcel (cut-out style, white border, tilted −2°, about 360×270) rides the line if found; otherwise parcel-icon scale 0.9.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading visible |
| 1.66 | — | — | `slide` firm from left; `pop` Gujarat pill |
| 3.86 | — | — | `fade` customer icon + label |
| 4.82 | — | — | `pop` small white slip "order" above customer |
| 6.02 | — | — | parcel `pop` at firm, then `move` by [900, 0] (dur ~1.2) |
| 8.44 | — | — | `pop` slate-crossed coin beside customer; grey "पहले से पैसा नहीं" (44 px) |

## s015
Continues: s014
Section label: PART 1 · WHAT COD IS
Idea: he pays when it's delivered; the Post Office passes the money to the supplier; then the route in four steps, step 1.
Sub-shots: #example 0.00 (s014 frame), #route 7.47.
#route: cod-flow-diagram at translate(160 300) with person-icons Sender (left) / Addressee (right) as in s005; heading "रास्ता, चार steps में" y 220. Step labels (Hindi 44 px) under markers.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | example holds |
| 1.62 | — | — | `out` the crossed coin; `pop` a plain coin at the customer |
| 5.98 | — | — | coin `move` by [−900, 0] to the firm |
| 7.47 | — | — | cut to #route (lines and icons on) |
| 9.41 | — | — | `pop` #step-1; parcel at sender end |
| 13.25 | — | — | `fade` label "COD के साथ booking" under step 1 |

## s016
Continues: s015
Section label: PART 1 · WHAT COD IS
Idea: step 2 carriage to the delivery office; step 3 collection at delivery.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #route frame; `pop` #step-2 |
| 1.84 | — | — | parcel `move` by [500, 0] |
| 2.82 | — | — | `fade` label "delivery office तक" |
| 5.30 | — | — | `pop` #step-3; parcel `move` by [500, 0] to addressee |
| 9.42 | — | — | `pop` coin at addressee; label "देते समय वसूली" |

## s017
Continues: s016
Section label: PART 1 · WHAT COD IS
Idea: step 4 accounting and remittance; item one way, money the other.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s016 end frame; `pop` #step-4 |
| 4.52 | — | — | coin `move` by [−1080, 0] to sender; label "हिसाब, फिर sender को" |
| 7.29 | — | — | `color` #line-item stroke to #f2b705 |
| 9.25 | — | — | `color` #line-money stroke to #f2b705 |

## s018
Continues: no
Section label: PART 1 · WHAT COD IS
Idea: COD = delivery plus collection plus remittance; keep three amounts apart. In: cut. Framing: wide, still.
Layout: "COD में" (64 px, red) y 230. Three white cards 480×300 at y 330, x 160 / 720 / 1280 with "+" signs between: "Delivery" (parcel-icon 0.6), "वसूली" (rupee-coin), "Remittance" (coin with a left arrow). Bottom band (#f3ead6) x 160–1760, y 760–900: "तीन रकमें अलग रखिए" (60 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading visible |
| 1.54 | — | — | `pop` card Delivery |
| 3.66 | — | — | `pop` card वसूली |
| 4.80 | — | — | `pop` card Remittance |
| 6.99 | — | — | `reveal` bottom band |

## s019
Continues: no
Section label: PART 1 · WHAT COD IS
Idea: the three amounts: collected amount (for the sender), postage, COD fee. In: cut. Framing: wide, still.
Layout: three tall white cards 500×560 at y 250, x 140 / 710 / 1280; each an icon on top (rupee-deposit; parcel-icon with a stamp; small ₹ tag) and its label (56 px) under it: "वसूली गई रकम" + grey "sender के लिए"; "Postage" + grey "item ढोने का"; "COD fee" + grey "सुविधा की".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card 1 with its icon |
| 1.96 | — | — | `fade` card 1 label lines |
| 3.04 | — | — | `pop` card 2; 4.32 its label |
| 6.34 | — | — | `pop` card 3; 8.08 its label |

## s020
Continues: s019
Section label: PART 1 · WHAT COD IS
Idea: the three are not one; a COD item is an accountable item: receipt at booking, a record of its journey.
Sub-shots: #three 0.00, #acc 2.27.
#acc: stamp card "Accountable item" (96 px) / "हिसाब वाली डाक" (grey gist, 50 px) x 160–900, y 300–560. Right: invoice-sheet scale 1.1 lettered "Booking receipt" at (1250, 640); dotted route line x 1000–1760, y 840 with three small check dots.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three cards |
| 0.92 | — | — | `pop` two slate "≠" signs between cards |
| 2.27 | — | — | cut to #acc, stamp card on |
| 3.59 | — | — | `highlight` "Accountable item" |
| 6.01 | — | — | `slide` receipt from right |
| 8.83 | — | — | `draw` route line; `pop` dots (stagger 0.15); label "सफ़र का record" |

## s021
Continues: no
Section label: PART 1 · WHAT COD IS
Idea: delivery needs the signature of the addressee or an authorised person, in ink or digital. In: cut. Framing: wide.
Layout: heading "Signature ज़रूरी" (60 px) y 220. Left: two person-icons at (360, 760) and (760, 760) labelled "Addressee" and "Authorised person" (48 px), "या" between. Right: signature-slip scale 1.2 at (1200, 860) label "स्याही" (52 px); drawn tablet (white, ink outline 300×400) with an ink scribble at (1620, 860) label "Digital".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | addressee icon visible |
| 2.66 | — | — | `pop` second icon + "या" |
| 4.04 | — | — | `fade` heading |
| 6.14 | — | — | `slide` signature-slip up; `draw` #signature |
| 8.30 | — | — | `pop` tablet; `draw` its scribble |

## s022
Continues: no
Section label: PART 1 · WHAT COD IS
Idea: records join booking, delivery and the money; and COD does not insure the contents. In: cut. Framing: wide.
Sub-shots: #records 0.00, #noins 7.11.
#records: three white nodes 420×220 at y 440, x 180 / 750 / 1320: "Booking", "Delivery", "वसूली गई रकम" with icons (receipt, signature tick, coin); ink link line through them.
#noins: parcel-icon scale 2 at (560, 820); drawn shield "Insurance" (Inter 60) at (1300, 560); statement (60 px) y 880: "COD से अंदर का सामान insure नहीं होता".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three nodes visible |
| 5.54 | — | — | `draw` link line (dur 1) |
| 7.11 | — | — | cut to #noins: parcel and shield on |
| 10.47 | — | — | `fade` statement |
| 11.57 | — | — | `draw` slate cross on the shield |

## s023
Continues: s022
Section label: PART 1 · WHAT COD IS
Idea: collecting the sale price is one job, protection from loss/damage another; the exam angle opens.
Sub-shots: #noins 0.00, #two 0.52, #exam 6.86.
#two: two cards 780×520 at y 280, x 140 and 1000: left (red) "COD" / "बिक्री की रकम वसूलना" with coin; right (#f3ead6) "Insurance" / "loss या damage से सुरक्षा" with shield; red discs "1" and "2" at their top-left.
#exam: exam-angle card (Shared), row 1 "COD: addressee से वसूली".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #noins holds |
| 0.52 | — | — | cut to #two, left card on |
| 3.70 | — | — | `pop` right card |
| 6.86 | — | — | cut to #exam: card + kicker |
| 11.60 | — | — | row 1 lands |

## s024
Continues: s023
Section label: PART 1 · WHAT COD IS
Idea: exam rows: …and sends to the sender; COD item is accountable; VP/VPP is Value Payable Post.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | exam card, row 1 |
| 0.44 | — | — | row 1 completes: "→ sender को भेजना" `fade` |
| 3.36 | — | — | row 2 "COD item = Accountable item" |
| 5.50 | — | — | row 3 "VP / VPP" |
| 7.80 | — | — | row 3 adds "= Value Payable Post"; `highlight` row 3 |

## s025
Continues: no
Section label: PART 1 · WHAT COD IS
Idea: an option saying COD insures the goods is wrong. In: cut. Framing: wide, still.
Component: myth-fact. Mould: myth card "Option: COD से सामान insure हो जाता है" (60 px); fact card "COD ≠ insurance" with "insurance अलग से" on an amber band; drop the reason lines; green postmark "सही".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | myth card with its text |
| 2.60 | — | — | `highlight` "insure" |
| 4.46 | — | — | `strike` myth line (slate); `pop` slate cross; +0.4 `fade` fact card; `stamp` postmark |

## s026
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: every COD customer, retail included, signs an agreement with the postal authority. In: wipe from right. Framing: wide, still.
Layout: left person-icon scale 1.4 at (360, 800) "Customer"; right post-counter-icon scale 1.4 at (1560, 820) with sign plate "Postal authority"; centre invoice-sheet scale 1.2 at (960, 820) lettered "Agreement" in its header, a red seal-dot on the signature line. Green pill "Retail customer भी" (52 px) at (960, 300). Grey line (44 px) y 940 hidden for s027.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | customer icon visible |
| 2.52 | — | — | `fade` counter icon + its sign |
| 5.14 | — | — | `slide` agreement sheet up; `draw` a signature scribble on it |
| 7.28 | — | — | `pop` green pill with a tick |
| 10.18 | — | — | `pop` slip "सिर्फ request" (white, 44 px) beside customer |

## s027
Continues: s026
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: a request alone does not make an item COD-eligible; the agreement and administrative instructions set the working.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s026 frame |
| 1.92 | — | — | `strike` the "सिर्फ request" slip (slate); slate cross |
| 3.29 | — | — | `pulse` agreement sheet |
| 5.25 | — | — | `slide` a second sheet "Administrative instructions" beside it (x 1180) |
| 7.49 | — | — | `fade` line under both: "→ काम का तरीका" (56 px) y 960 |

## s028
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: what they decide: which product, how much, how the money is sent; then: the limit depends on the COD category. In: cut. Framing: wide.
Layout: heading "Agreement तय करता है" (60 px) y 220. Three white cards 500×300 at y 340, x 140 / 710 / 1280 with icons (parcel, ₹ tag, arrow-coin): "कौन सा product", "कितनी वसूली", "पैसा किस तरीके से". Bottom band (#f3ead6) y 760–920: "वसूली की सीमा → COD category पर निर्भर" (56 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading + card 1 |
| 1.32 | — | — | `pop` card 2 |
| 3.18 | — | — | `pop` card 3 |
| 6.44 | — | — | `reveal` bottom band |
| 9.56 | — | — | `highlight` words "COD category" |

## s029
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: the limits table (screen notes table 1), row 1: Retail COD ₹10,000 per item. In: cut. Framing: wide, still.
Component: compare-table. Mould: title "वसूली की सीमा" (red); white table x 140–1780, y 220–820; header row (red) "Category · श्रेणी" | "Product" | "सीमा"; two rows only: "Retail COD" | "Speed Post Parcel / India Post Parcel" | "₹10,000 per item"; "Contractual COD" | same products | "₹50,000 per item"; values 72 px. Source line grey y 880: "Admin. instructions on Parcel, 27 Dec 2024".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title, header row and source visible |
| 1.44 | — | — | row 1 product cell `fade` |
| 5.68 | — | — | row 1 label "Retail COD" `fade` |
| 7.56 | — | — | `pop` "₹10,000 per item" |

## s030
Continues: s029
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: row 2: Contractual COD ₹50,000 per item; it is contractual and per article.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 holds; row 2 product cell `fade` |
| 1.42 | — | — | row 2 label "Contractual COD" |
| 3.44 | — | — | `pop` "₹50,000 per item" |
| 7.28 | — | — | yellow outline draws round row 2 |
| 10.64 | — | — | `underline` "per item" in row 2 |

## s031
Continues: s030
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: not a sender's daily total; retail stays ₹10,000; "retail ₹50,000" in an option is wrong.
Layout add: under the table (y 900–990, x 140–1780) a slate note strip, left "रोज़ की कुल सीमा" and right "Retail = ₹50,000".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table holds |
| 1.54 | — | — | `fade` "रोज़ की कुल सीमा"; 3.00 `strike` it + slate cross |
| 5.94 | — | — | `pulse` "₹10,000" in row 1; `highlight` it |
| 9.88 | — | — | `fade` "Retail = ₹50,000" (slate) |
| 11.46 | — | — | `strike` it + slate cross |

## s032
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: ₹50,000 is not written in the Regulations as a fixed limit; the Regulations leave the amount to administrative instructions. In: cut. Framing: wide.
Layout: regulations-book scale 1.4 at (440, 880) "Post Office Regulations 2024"; ink arrow x 700–1100 y 620; invoice-sheet scale 1.3 at (1440, 900) lettered "Administrative instructions". Chip "₹50,000" (72 px, red stamp) at (440, 300); slate note "पक्की सीमा नहीं" (52 px) under it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | book visible |
| 1.54 | — | — | `pop` ₹50,000 chip above book |
| 6.22 | — | — | `fade` slate "पक्की सीमा नहीं" |
| 7.66 | — | — | `draw` arrow |
| 10.38 | — | — | `slide` admin sheet in from right |

## s033
Continues: s032
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: ₹50,000 comes from there; in contractual COD the amount must be whole rupees.
Sub-shots: #source 0.00, #whole 3.03.
#whole: stamp card "Contractual COD" (88 px) x 160–900 y 260–480; white rule card x 160–1760 y 560–760 "वसूली की रकम पूरे रुपयों में" (64 px). Two chips y 820–960 for s034: left "₹10,000" (green tick), right "₹10,000.50" (slate).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | ₹50,000 chip `move` by [1000, 0] onto the admin sheet (dur 0.8) |
| 3.03 | — | — | cut to #whole: stamp card on |
| 5.15 | — | — | `reveal` rule card |
| 6.47 | — | — | `highlight` words "पूरे रुपयों" |

## s034
Continues: s033
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: ₹10,000 fine, ₹10,000.50 not (paise); then COD is a facility on eligible products.
Sub-shots: #whole 0.00, #products 8.17.
#products: centre red tag "COD" (96 px) at (960, 330) on a string; below, a white band "eligible postal products के साथ सुविधा" (56 px) y 520; two empty product slots (520×260) at y 640, x 300 and 1100 for s035.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` "₹10,000" chip; 0.34 green tick |
| 1.92 | — | — | `pop` "₹10,000.50" chip |
| 3.76 | — | — | `strike` it (slate) + cross |
| 6.26 | — | — | `underline` ".50" (slate); grey "पैसे का हिस्सा" under it |
| 8.17 | — | — | cut to #products: COD tag on |
| 10.43 | — | — | `reveal` band |

## s035
Continues: s034
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: e.g. India Post Parcel and Speed Post services on their terms; from 1 August 2026 also India Post Parcel Last Mile.
Layout add: product card 1 "India Post Parcel" (parcel icon), card 2 "Speed Post" (parcel with speed lines) in the slots; calendar-sheet scale 1.0 at (1700, 980) header "AUG 2026", date "1"; third card "India Post Parcel Last Mile" replaces nothing: it pops at the right edge (x 1300–1780, y 640–900) after slots shift: slots sit at x 140 / 720 / 1300 instead.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | tag and band hold |
| 0.46 | — | — | `pop` card India Post Parcel |
| 2.70 | — | — | `pop` card Speed Post |
| 4.80 | — | — | grey "अपनी शर्तों पर" under both |
| 6.52 | — | — | `pop` calendar sheet (top right of slot 3, y 300) |
| 10.12 | — | — | `pop` card "Last Mile" in slot 3 |

## s036
Continues: s035
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: Last Mile gets COD, same fee as India Post Parcel; then prohibited goods can't go COD.
Sub-shots: #products 0.00, #prohib 7.12.
#prohib: parcel-icon scale 1.6 at (420, 760); stamp card "Prohibited" / "निषिद्ध सामान" x 820–1760 y 260–480; slate "COD item में नहीं" (60 px) y 600; space below for s037 list.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` green tick "COD ✓" on Last Mile |
| 2.30 | — | — | `fade` chip "fee = India Post Parcel वाली" under Last Mile |
| 7.12 | — | — | cut to #prohib: parcel on |
| 8.40 | — | — | `pop` Prohibited card |
| 9.58 | — | — | `fade` slate line + slate cross over parcel |

## s037
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: specifically: coupons, tickets, certificates or introductions made to sell goods by the Snowball System. In: cut. Framing: wide, still.
Layout: stamp card "Snowball System" (88 px, name only, no definition) x 140–900 y 220–420; grey "से सामान बेचने के लिए बने" (52 px) y 500. Four white cards 380×260 in a row y 620, x 140 / 560 / 980 / 1400, each a small ink icon (coupon, ticket, certificate, card with a handshake line) and label: "Coupons", "Tickets", "Certificates", "Introductions".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grey kicker "खास तौर पर" at y 180 |
| 1.46 | — | — | `pop` Snowball System card |
| 3.60 | — | — | `fade` grey line |
| 5.04 | — | — | `pop` Coupons |
| 6.24 | — | — | `pop` Tickets |
| 7.28 | — | — | `pop` Certificates |
| 8.88 | — | — | `pop` Introductions |

## s038
Continues: s037
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: the ban is on items for that purpose only, not every coupon or ticket; then insurance isn't compulsory just for COD.
Sub-shots: #snow 0.00, #ins 7.86.
#ins: insured-envelope-emblem scale 1.3 at (520, 820); right x 1000–1780: stamp card "Insurance" / "बीमा" y 260–460; statement (60 px) y 600 "सिर्फ COD होने से"; pill "ज़रूरी नहीं" (green outline, 56 px) y 720.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s037 frame |
| 2.28 | — | — | `highlight` grey line "बेचने के लिए बने" |
| 4.26 | — | — | `fade` band y 920 "हर coupon / ticket पर रोक नहीं" (52 px) |
| 7.86 | — | — | cut to #ins: emblem + Insurance card |
| 8.48 | — | — | `fade` statement |
| 12.02 | — | — | `pop` "ज़रूरी नहीं" pill |

## s039
Continues: s038
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: not even for a big amount; sender may choose insurance; but the kind of goods must be checked separately.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #ins frame |
| 0.98 | — | — | `fade` grey "रकम बड़ी हो, तब भी" beside pill |
| 3.44 | — | — | `fade` green line y 820 "Sender चाहे, तो ले सकता है" |
| 6.74 | — | — | `reveal` amber band y 920 "सामान की किस्म: अलग से देखें" |

## s040
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: some precious metals, stones and jewellery must be insured at their real value. In: cut. Framing: wide with a slow 4 % push-in on the photo, held at the cut (s041 is a fresh cut).
Layout: Photo: gold-jewellery-cutout, standing on the page (filter vs-cutout), x 120–900, y 260–860, credit line grey 32 px under it. Right x 980–1780: three term rows (Inter 64 px) y 300 / 420 / 540: "Precious metals", "Precious stones", "Jewellery"; red stamp key fact y 680–900: "असली value पर insure ज़रूरी" (60 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide → push 1.04 by 8.79 | — | photo visible |
| 0.27 | — | — | `fade` Precious metals |
| 1.77 | — | — | `fade` Precious stones |
| 3.87 | — | — | `fade` Jewellery |
| 5.53 | — | — | `pop` key-fact card; `highlight` words "असली value" |

## s041
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: this condition comes from the goods, not from COD; example: a ₹5,000 watch returned after repair. In: cut. Framing: wide.
Sub-shots: #rule 0.00, #watch 4.07.
#rule: two cards: left white "सामान से" with green tick, right white "COD से" with slate cross (each 700×360, y 340).
#watch: watch-icon scale 1.6 at (480, 820); heading "एक example" (56 px, red) y 220; right column x 900–1780: line "घड़ी की कीमत ₹5,000" (64 px) y 380; grey "repair के बाद मालिक को" y 480.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "ये शर्त आती है" (56 px) |
| 0.77 | — | — | `pop` left card |
| 2.36 | — | — | `pop` right card; 3.19 slate cross draws |
| 4.07 | — | — | cut to #watch |
| 5.55 | — | — | `fade` price line; `count` 5,000 |
| 8.43 | — | — | `fade` grey line |

## s042
Continues: s041
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: repair cost ₹500, the recovery can be ₹500; but the value for insurance is the watch's.
Layout add (right column): "Repair खर्च ₹500" y 600; two chips y 760: "वसूली ₹500" (white) and "Insured value → घड़ी की" (red stamp).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #watch frame |
| 1.22 | — | — | `fade` "Repair खर्च ₹500" |
| 3.88 | — | — | `pop` chip "वसूली ₹500" |
| 6.80 | — | — | `pop` chip "Insured value"; 8.02 `pulse` watch |

## s043
Continues: s042
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: i.e. ₹5,000; recovery amount and insured value need not be equal; "Exam angle" closes it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chip "Insured value" gains "= ₹5,000" (`fade` at 1.02) |
| 2.30 | — | — | `highlight` chip "वसूली ₹500" |
| 4.36 | — | — | `highlight` chip "Insured value ₹5,000" |
| 5.54 | — | — | `pop` slate "≠" between chips; grey "बराबर ज़रूरी नहीं" under them (52 px) |
| 7.98 | — | — | hold (exam card opens next scene) |

## s044
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: exam angle: agreement always; retail ₹10,000, contractual ₹50,000 per item. In: cut. Framing: wide, still.
Layout: exam-angle card (Shared). Rows: 1 "Agreement ज़रूरी: retail हो या contractual"; 2 "Parcel · Retail COD ₹10,000 / item"; 3 "Contractual COD ₹50,000 / item".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card + kicker |
| 2.04 | — | — | row 1 |
| 3.56 | — | — | row 2; 5.82 `highlight` "₹10,000" |
| 6.56 | — | — | row 3; 8.20 `highlight` "₹50,000" |

## s045
Continues: s044
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: rows 4–5: contractual whole rupees; insurance optional just for COD, prohibited stays prohibited.
Rows: 4 "Contractual: पूरे रुपये"; 5 "Insurance optional (सिर्फ COD से) · Prohibited = prohibited".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–3 fade to grey (supporting) |
| 0.00 | — | — | row 4 lands |
| 3.98 | — | — | row 5 first half |
| 6.24 | — | — | row 5 second half; `highlight` row 5 |

## s046
Continues: no
Section label: PART 2 · AGREEMENT, LIMITS AND INSURANCE
Idea: the recovery limit and the insurance limit are two separate limits. In: cut. Framing: wide, still.
Component: compare-cards. Mould: drop the question; left card (red band) "वसूली की सीमा" with coin icon; right card (yellow band) "Insurance की सीमा" with shield icon; no facts rows; takeaway band "दो अलग सीमाएँ" (60 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card |
| 2.02 | — | — | right card |
| 3.62 | — | — | VS disc becomes "≠"; `reveal` takeaway band |

## s047
Continues: no
Section label: RECAP
Idea: recap Parts 1–2, row 1. In: fade 0.5. Framing: wide, still.
Component: recap-card. Mould: title "Part 1 और Part 2"; seal "5"; five rows (one more than the sample; 56 px Hindi): 1 "COD" · pill "delivery पर वसूली → sender को"; 2 "Accountable item"; 3 "Agreement" · pill "retail के लिए भी"; 4 "Retail ₹10,000 · Contractual ₹50,000" · pill "per item"; 5 "Insurance" · pill "सिर्फ COD से ज़रूरी नहीं". Rows appear on their words.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope card with flap title |
| 5.40 | — | — | row 1 |
| 9.48 | — | — | row 1 green tick |

## s048
Continues: s047
Section label: RECAP
Idea: rows 2–4.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2; 2.36 tick |
| 3.62 | — | — | row 3; 7.00 tick |
| 7.64 | — | — | row 4; 13.30 tick |

## s049
Continues: s048
Section label: RECAP
Idea: row 5.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 5 |
| 4.14 | — | — | row 5 tick; hold |

## s050
Continues: no
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: at the counter three things must be clear: product, COD category, amount. In: wipe from right. Framing: wide.
Layout: Photo: post-office-counter-scale, framed (white border, tilt −1.5°, soft shadow) x 120–860, y 220–775 (keeps 4:3), credit grey 32 px under it; if missing, booking-counter scale 1.1. Right x 960–1780: heading "Counter पर साफ़" (60 px) y 240; three numbered rows y 400 / 560 / 720: "कौन सा product", "कौन सी COD category", "कितनी रकम वसूलनी".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | photo visible |
| 0.72 | — | — | `fade` heading |
| 3.67 | — | — | row 1 |
| 5.03 | — | — | row 2 |
| 6.88 | — | — | row 3; `highlight` "रकम" |

## s051
Continues: no
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: the booking record must carry sender, addressee, destination and COD amount correctly; a wrong amount means a wrong recovery. In: cut. Framing: wide.
Layout: form-register scale 2.0 at (960, 980) base (spans x 400–1520, y 220–980): #header-left "Booking record"; four entries written on the right page rows (52 px): "Sender", "Addressee", "Destination", "COD रकम". Slate strip y 940 hidden.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | register with header |
| 1.51 | — | — | `type` Sender |
| 2.41 | — | — | `type` Addressee |
| 3.55 | — | — | `type` Destination |
| 5.10 | — | — | `type` COD रकम; 6.46 green tick column |
| 8.39 | — | — | `color` COD रकम row to slate; `fade` slate strip "रकम गलत → वसूली गलत" |

## s052
Continues: no
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: correct address is not enough; the official also checks contents permitted and packing per the product's terms. In: cut. Framing: wide.
Layout: left parcel-icon scale 2 at (440, 800) with a green tick on its label; grey "सही पता, तब भी" y 300. Right checklist card (white) x 900–1780 y 260–900 headed "Official देखता है" (56 px), rows y 420 / 580 / 740 with tick boxes: "अंदर का सामान permitted", "Packing: product की शर्तें", "Declaration साथ में" (third in s053).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel + grey line |
| 3.55 | — | — | `fade` checklist card |
| 6.45 | — | — | row 1 + green tick |
| 7.71 | — | — | row 2 + green tick |

## s053
Continues: s052
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: the declaration goes with the item; an accountable item must be addressed to a specific person, firm or institution.
Sub-shots: #check 0.00, #named 3.26.
#named: stamp card "Accountable item" (80 px) y 220–380 centred; three cards 460×420 at y 480, x 180 / 730 / 1280: person-icon "व्यक्ति", icon-firm "Firm", a drawn columned building "Institution".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3 lands |
| 2.22 | — | — | row 3 tick |
| 3.26 | — | — | cut to #named, stamp card on |
| 5.36 | — | — | `pop` person card |
| 6.32 | — | — | `pop` firm card |
| 7.50 | — | — | `pop` institution card |
| 8.70 | — | — | `fade` grey "किसी खास के नाम" y 960 |

## s054
Continues: no
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: COD Retail forms; booking and destination office must both be eMO offices. In: cut. Framing: wide.
Layout: heading "COD Retail" (red stamp, 80 px) y 200–320 centred. Two post-counter-icons scale 1.3 at (440, 820) and (1480, 820), plates "Booking office", "Destination office"; ink line between at y 640; yellow-bordered badges "eMO" (64 px) above each at y 420.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading |
| 2.51 | — | — | `fade` booking office |
| 3.93 | — | — | `fade` destination office; `draw` line |
| 6.29 | — | — | `pop` both eMO badges (stagger 0.2) |
| 7.89 | — | — | grey "दोनों" (52 px) on the line's middle |

## s055
Continues: no
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: the sender fixes the remittance amount and signs CDF-2, the COD Retail declaration and booking form. In: cut. Framing: wide.
Layout: left person-icon scale 1.3 at (300, 820) "Sender" with a ₹ chip "रकम तय" above at (300, 380). Centre-right: stamp key-fact card x 700–1760, y 260–560: "CDF-2" (120 px) and "declaration और booking form" (56 px). Space y 620–960 for s056's card.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | sender icon |
| 1.25 | — | — | `pop` ₹ chip |
| 4.12 | — | — | `pop` CDF-2 card (number only) |
| 5.39 | — | — | `draw` a signature scribble on the card's corner |
| 10.10 | — | — | `fade` "declaration और booking form"; `highlight` it |

## s056
Continues: s055
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: for a parcel, CDF-1 too; the paper CDF-1 is kept 90 days from booking.
Layout add: second stamp card x 700–1500, y 620–940: "CDF-1" (110 px) / "parcel के साथ" (52 px); calendar-sheet scale 1 at (1640, 960) date "90 दिन".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s055 frame |
| 1.31 | — | — | `pop` CDF-1 card |
| 3.54 | — | — | `fade` "parcel के साथ" |
| 6.73 | — | — | `pop` calendar "90 दिन" |

## s057
Continues: no
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: markings on the item: upper left "COD retail" and the amount in words and figures. In: cut. Framing: wide → medium on the upper-left zone.
Layout: cod-parcel-face scale 1.5 centred (960, 1000) base: spans x 240–1680, y 100–1000. #zone-cod lettered (Inter 48): "COD retail" line 1, "₹____" line 2, grey "(शब्दों और अंकों में)" line 3.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel face |
| 2.08 | {on: '#zone-cod', zoom: 1.35} | — | `pulse` #zone-cod |
| 4.12 | — | — | `type` "COD retail" |
| 6.34 | — | — | `type` "₹____" |
| 7.26 | — | — | `fade` grey line; `highlight` it |

## s058
Continues: s057
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: lower left the sender's full name and address (a clear stamp impression is fine); then the money order form's place of payment.
Sub-shots: #face 0.00, #mo 7.84.
#mo: Photo: money-order-form-india framed left (x 120–940, y 220–900, keep its proportions) with a credit; if missing, mo-form scale 1.4 at (530, 860). Right x 1020–1780: "Money order form" (64 px) y 300; field box "Payment की जगह" y 440; three chips stacked y 560/660/760 (52 px) for "शहर", "कस्बा", "गाँव".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | {on: '#zone-sender', zoom: 1.35} (pan down, 0.8 s) | — | `pulse` #zone-sender |
| 1.72 | — | — | `type` "Sender का पूरा नाम-पता" |
| 5.68 | — | — | `stamp` a round grey impression in the zone corner |
| 7.84 | wide | — | cut to #mo |
| 9.20 | — | — | `pop` field box |
| 11.08 | — | — | `pop` "शहर" |

## s059
Continues: s058
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: town or village must match the place of booking; the sender gets a receipt; then what the declaration means.
Sub-shots: #mo 0.00, #decl 7.34.
#decl: white document card x 200–1720, y 200–900, header "Declaration" (Inter 64, red) and "Sender लिखकर देता है" (52 px grey) under it; two empty line slots for s060–s061.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` "कस्बा"; 1.20 `pop` "गाँव" |
| 1.80 | — | — | `fade` "= booking की जगह" (green outline) beside the chips |
| 5.80 | — | — | `slide` small receipt slip (invoice-sheet 0.5) in at lower right |
| 7.34 | — | — | cut to #decl: header |
| 9.20 | — | — | `fade` grey line |

## s060
Continues: s059
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: declaration line 1: sent on a bona fide order; bona fide order = a real order the sender received.
Layout add: line 1 (Hindi 56 px) y 440 "Item, एक bona fide order पर भेजा जा रहा है"; key-term chip (red stamp) under it y 560–720 at x 260–1000: "Bona fide order" / "असली order"; right of it grey "sender को मिला असली order".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header holds |
| 0.40 | — | — | `fade` line 1 |
| 1.58 | — | — | `highlight` words "bona fide order" |
| 4.78 | — | — | `pop` key-term chip; +0.5 Hindi |
| 8.82 | — | — | `fade` grey meaning |

## s061
Continues: s060
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: declaration line 2: no Snowball System goods; then a lesser-known point: recovery isn't only on goods sold.
Sub-shots: #decl 0.00, #docs 3.37.
#docs: left parcel-icon scale 1.6 at (480, 760) labelled "बिकने वाला सामान"; right drawn white document (ink outline, folded corner, 300×380) at (1440, 760) with a ₹ coin linked by a dashed line.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `fade` line 2 y 820 "Snowball System का सामान नहीं" |
| 2.30 | — | — | slate cross icon at its end |
| 3.37 | — | — | cut to #docs: heading "कम लोग जानते हैं" (56 px, red) y 220 |
| 6.63 | — | — | `fade` parcel + label |
| 9.55 | — | — | `fade` grey "सिर्फ इसी पर नहीं" under the parcel |

## s062
Continues: s061
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: a document can be linked to a payment even if the paper itself is worth little; eight kinds on screen (screen 1 of 2: four).
Sub-shots: #docs 0.00, #list1 8.50.
#list1: Component: glossary-list. Mould: kicker "ऐसे 8 तरह के documents · 1/2"; four cards, English term only (no Hindi meaning lines; each 72 px) with ink icons: "Legal documents", "Bonds", "Insurance policies", "Promissory notes".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` document at right |
| 2.30 | — | — | `draw` dashed link; `pop` coin |
| 6.32 | — | — | grey "अपनी value कम" under the document |
| 8.50 | — | — | cut to #list1, all four cards pop (stagger 0.15) |

## s063
Continues: s062
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: e.g. legal documents, bonds, bills of lading; switch to screen 2 of the list.
Sub-shots: #list1 0.00, #list2 3.14.
#list2: same layout, kicker "2/2": "Railway goods receipts", "Parcel receipts", "Bills of lading", "Bills for collection".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | screen 1 holds |
| 0.36 | — | — | `highlight` Legal documents |
| 1.96 | — | — | `highlight` Bonds |
| 3.14 | — | — | cut to #list2; `highlight` Bills of lading |
| 6.32 | — | — | `highlight` Railway goods receipts |

## s064
Continues: s063
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: railway receipt / bill of lading can relate to goods sent on a real order; other documents need the real order to be for sending that document.
Sub-shots: #list2 0.00, #diff 4.98.
#diff: Component: compare-cards. Mould: no question; left (red band) "Railway receipt · Bill of lading" → "असली order: सामान का"; right (yellow band) "बाकी documents" → "असली order: document भेजने का"; no takeaway band.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | screen 2 with two highlights |
| 2.66 | — | — | `underline` "Railway goods receipts" and "Bills of lading" |
| 4.98 | — | — | cut to #diff, left card on |
| 6.64 | — | — | `pop` right card |
| 8.66 | — | — | `highlight` "document भेजने का" |

## s065
Continues: no
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: exam angle: CDF-2; CDF-1 on parcels, kept 90 days. In: cut. Framing: wide, still.
Layout: exam-angle card (Shared). Rows: 1 "CDF-2: COD Retail का declaration और booking form"; 2 "CDF-1: parcel पर, 90 दिन रखा जाता".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card + kicker |
| 1.22 | — | — | row 1 |
| 7.48 | — | — | row 2; 10.64 `highlight` "90 दिन" |

## s066
Continues: s065
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: rows 3–5: both offices eMO; amount set by sender; MO place of payment…
Rows: 3 "COD Retail: दोनों offices eMO offices"; 4 "रकम sender तय करता है"; 5 "Money order में payment की जगह = booking की जगह".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rows 1–2 turn grey; row 3 |
| 4.94 | — | — | row 4 |
| 7.04 | — | — | row 5 (first half, "Money order में payment की जगह") |

## s067
Continues: s066
Section label: PART 3 · BOOKING, FORMS AND DECLARATION
Idea: …must match the place of booking.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 5 completes "= booking की जगह" |
| 1.18 | — | — | `highlight` row 5; hold |

## s068
Continues: no
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: both offices must do money order work; offices marked "D" in the List of Post Offices don't. In: wipe from right. Framing: wide.
Layout: left: two small post-counter-icons scale 0.9 at (300, 640) and (700, 640) with green "MO" tick badges, grey "दोनों offices" y 760. Right: registered-list-sheet scale 1.7 at (1340, 990) base (x 1068–1612, y 276–990), band lettered "List of Post Offices" (white 40 px); one row on it gets a yellow "D" badge (Ø 70) and, beside the sheet, a slate note "money order का काम नहीं" (s069).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | two offices visible |
| 1.10 | — | — | `pop` MO badges (stagger 0.2) |
| 4.14 | — | — | `slide` list sheet up; `draw` its rows |
| 7.58 | — | — | `stamp` "D" badge on row 3 |

## s069
Continues: s068
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: "D" offices don't do this; the sender fills the printed form in ink and signs the declaration.
Sub-shots: #list 0.00, #form 2.08.
#form: mo-form scale 1.5 at (620, 900) (no lettering) with an ink pen drawn across its lower right; right x 1160–1780: "छपा form · स्याही से" (60 px) y 420; signature-slip scale 0.9 at (1460, 900) label "Declaration पर signature".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `fade` slate note beside D row + slate cross |
| 2.08 | — | — | cut to #form: form on |
| 3.66 | — | — | `fade` right line; `draw` ink lines filling form rows (dur 1) |
| 5.90 | — | — | `slide` signature-slip up |
| 7.00 | — | — | `draw` #signature |

## s070
Continues: no
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: in offices notified by the Director General one more declaration: that the thing may be sent as a value payable article. In: cut. Framing: wide.
Layout: left stamp card "Director General" / "महानिदेशक" x 140–820 y 240–460; under it a cluster of three small post-counter-icons (scale 0.7) labelled grey "notify किए offices" y 860. Right: white document card x 920–1780 y 260–900 header "एक और declaration" (56 px, red); body (Hindi 52 px, 3 lines): "ये चीज़ value payable article की तरह भेजी जा सकती है".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | DG card |
| 1.24 | — | — | `fade` office cluster + label |
| 4.34 | — | — | `slide` document card from right with header |
| 6.90 | — | — | `fade` body |
| 7.56 | — | — | `highlight` words "value payable article" |

## s071
Continues: no
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: the item needs room for official labels; if size, writing or sealing wax prevents them… In: cut. Framing: wide.
Layout: cod-parcel-face scale 1.0 at (620, 900) base (x 140–1100, y 300–900) with two dashed white label rectangles drawn on it ("labels की जगह", grey 44 px). Right column x 1200–1780: three rows y 380 / 540 / 700 with small icons: "Size", "लिखावट", "Sealing wax" (56 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel face |
| 0.62 | — | — | `draw` dashed label spaces + grey caption |
| 3.66 | — | — | row Size |
| 4.34 | — | — | row लिखावट |
| 5.68 | — | — | row Sealing wax |
| 7.48 | — | — | dashed label spaces `color` stroke slate |

## s072
Continues: s071
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: …the item is refused; the fix is a big clear address label tied to it; then the bulk facility.
Layout add: slate stamp "नहीं लिया जाता" (round, Ø 240) over the parcel's upper right; address-label-tag scale 1.2 at (900, 980) tied to the parcel's string, with a green tick; captions sit at y 260 above the right column (52 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s071 frame |
| 0.82 | — | — | `stamp` slate "नहीं लिया जाता" |
| 2.64 | — | — | `fade` caption "हल:" (red) y 260 |
| 4.84 | — | — | `slide` address label up to the parcel; `draw` its string loop |
| 7.00 | — | — | green tick on the label; caption "बड़ा, साफ़, बँधा हुआ" |

## s073
Continues: no
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: bulk facility for firms or institutions posting at least 10 uninsured VP articles a day. In: cut. Framing: wide.
Layout: heading "Bulk सुविधा" (64 px red) y 220. Left icon-firm scale 1.3 at (420, 880) sign "Firm / Institution". Right: big red stamp card x 900–1500 y 300–700 with "10" (200 px white) and "रोज़ कम से कम" (52 px pale yellow); right of it a stack of five parcel-icons (scale 0.5) at x 1620. Under the card, white strip y 760–880: "Uninsured value payable articles" (56 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading |
| 0.49 | — | — | `slide` firm from left |
| 2.50 | — | — | `pop` stamp card label |
| 3.99 | — | — | `count` "10" (from 0, dur 0.6) |
| 4.78 | — | — | `reveal` white strip; `highlight` "Uninsured" |
| 7.12 | — | — | `pop` parcel stack (stagger 0.1) |

## s074
Continues: s073
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: no extra charge; enquiries with the local Superintendent of Post Offices.
Layout add: green pill "कोई extra charge नहीं" y 940 under the strip (x 900–1500); stamp chip at lower left "Superintendent of Post Offices" / "डाकघर अधीक्षक" replaces nothing: it sits at x 120–760, y 300–480 above the firm.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s073 frame |
| 2.85 | — | — | `pop` green pill |
| 4.57 | — | — | grey "पूछताछ" kicker above chip |
| 5.73 | — | — | `pop` Superintendent chip; +0.5 Hindi |

## s075
Continues: no
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: from 1 October 2025 registration is a value addition of Speed Post documents and parcels. In: cut. Framing: wide.
Layout: left calendar-sheet scale 1.6 at (400, 860) header "OCT 2025", date "1"; right x 820–1780: stamp card "Registration" / "रजिस्ट्रेशन" y 260–460; line (56 px) y 580 "Speed Post documents और parcels"; yellow-soft band y 700 "की value addition".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp card "Registration" visible |
| 1.28 | — | — | `pop` calendar |
| 4.62 | — | — | `fade` Speed Post line |
| 7.26 | — | — | `reveal` band |

## s076
Continues: s075
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: fee ₹5 over postage, GST extra; COD booking runs on each eligible product's own booking system.
Sub-shots: #reg 0.00, #own 5.67.
#own: centre: three product cards (Speed Post Parcel, India Post Parcel, Last Mile) 480×300 at y 560, x 160 / 720 / 1280, each with its own small booking-counter icon; a red "COD" tag clipped to each; heading (56 px) y 260 "COD booking: हर product की अपनी booking व्यवस्था".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` fee chip "₹5" (red stamp) y 840 at x 820 |
| 2.12 | — | — | `fade` "+ postage" |
| 4.23 | — | — | `fade` grey "GST अलग" |
| 5.67 | — | — | cut to #own: heading |
| 7.31 | — | — | cards `pop` (stagger 0.2) |
| 9.38 | — | — | COD tags `pop` (stagger 0.15) |

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

## s080
Continues: s079
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: the destination bar doesn't end with the rename; exam angle: "D" offices don't do MO work.
Sub-shots: #rename 0.00, #exam 3.47.
#exam: exam-angle card (Shared). Row 1 "\"D\" offices: money order का काम नहीं".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` APO tag with padlock |
| 1.57 | — | — | `fade` slate "रोक खत्म नहीं" |
| 3.47 | — | — | cut to #exam |
| 4.87 | — | — | row 1 |

## s081
Continues: s080
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: rows 2–3: bulk VP (≥10 uninsured a day, no extra charge); APO address: no VP articles or money orders.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2 "Bulk VP: रोज़ ≥ 10 uninsured articles" |
| 5.50 | — | — | row 2 adds "· बिना extra charge" |
| 7.48 | — | — | row 3 "APO पता: VP articles और money orders नहीं" |

## s082
Continues: s081
Section label: PART 4 · MORE BOOKING CONDITIONS AND APO
Idea: row 4: a correct APO address is not COD permission.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 4 "APO का सही पता ≠ COD की इजाज़त" |
| 2.66 | — | — | `highlight` row 4; hold |

## s083
Continues: no
Section label: PART 5 · COD FEE
Idea: the collected amount is not the Post Office's income; its income is the COD fee. In: wipe from right. Framing: wide, still.
Layout: two white cards 760×560 at y 260, x 140 and 1020. Left: rupee-deposit scale 1.2, label "वसूली गई रकम" (60 px), arrow to a small person-icon "Sender की". Right: red stamp ₹ tag icon, "COD fee" (88 px), "= Post Office की कमाई" (56 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card |
| 2.28 | — | — | `fade` slate line "Post Office की कमाई" under left card |
| 4.08 | — | — | `strike` it (slate) |
| 5.42 | — | — | `pop` right card |
| 6.78 | — | — | `highlight` "COD fee" |

## s084
Continues: no
Section label: PART 5 · COD FEE
Idea: the fee is in Schedule IV, Table III, charged over postage; two slabs (screen notes table 2), row 1 opens. In: cut. Framing: wide.
Sub-shots: #src 0.00, #table 6.74.
#src: round postmark (Ø 380) "Schedule IV · Table III" at (520, 560); right: stack of two blocks: "Postage" (#f3ead6) and "+ COD fee" (red stamp) at x 1000–1700, y 420–760.
#table: Component: compare-table. Mould: title "COD fee · दो slabs"; two columns "वसूली की रकम" | "COD fee"; two rows (Hindi 60 px): "₹6,500 तक (6,500 समेत)" | "वसूली का 1.6%"; "₹6,500 से ऊपर" | "₹100 + 6,500 से ऊपर वाली रकम का 1%"; grey line under the table "Postage, charges, tax अलग"; source "Post Office Regulations 2024, Schedule IV, Table III". Table x 140–1780, y 220–800.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | postmark |
| 4.68 | — | — | `pop` Postage block, then +0.4 COD fee block on top |
| 6.74 | — | — | cut to #table: title, header, source |
| 10.60 | — | — | row 1 label |
| 14.50 | — | — | soft yellow band on "(6,500 समेत)" |

## s085
Continues: s084
Section label: PART 5 · COD FEE
Idea: row 1 value 1.6%; row 2 label.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | table holds |
| 2.06 | — | — | `pop` "वसूली का 1.6%" |
| 2.68 | — | — | row 2 label "₹6,500 से ऊपर" |

## s086
Continues: s085
Section label: PART 5 · COD FEE
Idea: row 2 value ₹100 + 1% of the excess; postage, charges and taxes are separate.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` "₹100 +" |
| 0.89 | — | — | `fade` "6,500 से ऊपर वाली रकम का 1%" |
| 2.53 | — | — | `highlight` words "6,500 से ऊपर वाली" |
| 5.83 | — | — | `fade` grey line "Postage, charges, tax अलग" |

## s087
Continues: no
Section label: PART 5 · COD FEE
Idea: base COD fee only; example 1: ₹5,000, first slab, 5,000 × 1.6 ÷ 100. In: cut. Framing: wide.
Component: formula-card. Mould (the calculation card used through s096, same place every time): left stamp card x 120–700, y 220–900: "Base COD fee" / slab rules in Georgia (two short lines "≤ 6,500: 1.6%", "> 6,500: ₹100 + 1% (ऊपर वाली रकम)"); right white card x 760–1800, y 220–900: example heading (64 px) and Georgia working lines (60 px) at y 420 / 540 / 660, green answer pill y 790. Drop the question text and the cream box.
Example 1: heading "पहला हिसाब · ₹5,000"; chip "पहला slab"; line "5,000 × 1.6 ÷ 100".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card, right card empty with grey "सिर्फ base COD fee" |
| 3.13 | — | — | `type` heading |
| 6.01 | — | — | `pop` chip "पहला slab"; `highlight` left rule line 1 |
| 7.81 | — | — | `type` working line (cps 14) |

## s088
Continues: s087
Section label: PART 5 · COD FEE
Idea: fee ₹80; example 2: exactly ₹6,500 ("तक" includes 6,500).
Sub-shots: #ex1 0.00, #ex2 1.85 (same card layout, new heading and lines).
#ex2: heading "दूसरा · ठीक ₹6,500"; soft yellow band text "\"तक\" में 6,500 शामिल" y 420.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` green pill "₹80" |
| 1.85 | — | — | cut to #ex2: heading types |
| 5.17 | — | — | `reveal` band line |
| 8.38 | — | — | `highlight` "शामिल" |

## s089
Continues: s088
Section label: PART 5 · COD FEE
Idea: so first slab: 6,500 × 1.6 ÷ 100 = ₹104; the second slab applies only when…
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` chip "पहला slab" |
| 1.86 | — | — | `type` "6,500 × 1.6 ÷ 100" y 540 |
| 6.48 | — | — | `pop` green pill "₹104" |
| 7.69 | — | — | `highlight` left rule line 2 |

## s090
Continues: s089
Section label: PART 5 · COD FEE
Idea: …the amount is above 6,500; use the slab as written, no home-made formula; example 3: ₹20,000.
Sub-shots: #ex2 0.00, #ex3 7.53.
#ex3: heading "तीसरा · ₹20,000".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `underline` "> 6,500" on left card |
| 1.93 | — | — | `fade` grey strip under right card y 940 "slab, लिखे आँकड़ों से" |
| 5.79 | — | — | slate small "अपना formula ✗" beside it |
| 7.53 | — | — | cut to #ex3: heading types |

## s091
Continues: s090
Section label: PART 5 · COD FEE
Idea: second slab, three steps; step 1: how much above 6,500?
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` chip "दूसरा slab · 3 steps" |
| 3.32 | — | — | `fade` step label "1 · 6,500 से ऊपर कितना?" y 420 (52 px) |

## s092
Continues: s091
Section label: PART 5 · COD FEE
Idea: 20,000 − 6,500 = 13,500; step 2: 1% = ₹135.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `type` "20,000 − 6,500" y 500 |
| 3.76 | — | — | `type` "= 13,500" |
| 4.90 | — | — | `type` "2 · 1% = ₹135" y 600 |
| 8.34 | — | — | `highlight` "₹135" |

## s093
Continues: s092
Section label: PART 5 · COD FEE
Idea: step 3: add ₹100, fee ₹235; here is the trap: someone takes 1% of the whole 20,000…
Sub-shots: #ex3 0.00, #trap 4.98.
#trap: Component: exam-trap. Mould: banner "यहीं trap है" (single Hindi line; drop the English line); one slate card only (x 300–1620, y 420–780): wrong method in Georgia "₹100 + 1% × 20,000" and "= ₹300" (y 700); remember bar "1% सिर्फ 6,500 से ऊपर वाली रकम पर" (amber, for s094).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `type` "3 · ₹100 + ₹135" y 680 |
| 2.98 | — | — | `pop` green pill "₹235" |
| 4.98 | — | — | cut to #trap: banner |
| 7.70 | — | — | `type` "₹100 + 1% × 20,000" (slate) |

## s094
Continues: s093
Section label: PART 5 · COD FEE
Idea: …adds ₹100 = ₹300, which is wrong; 1% only on the amount above 6,500.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | trap card |
| 3.38 | — | — | `type` "= ₹300" |
| 5.18 | — | — | `strike` both lines (slate); `pop` slate cross |
| 6.40 | — | — | `reveal` remember bar |
| 8.26 | — | — | `highlight` "6,500 से ऊपर" |

## s095
Continues: no
Section label: PART 5 · COD FEE
Idea: example 4: ₹50,000 (possible on one contractual COD article); above 6,500: 43,500. In: cut (same calculation card layout as s087). Framing: wide.
Layout: formula-card as in s087; heading "चौथा · ₹50,000"; grey chip "contractual · एक article" y 330.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `type` heading |
| 2.24 | — | — | `fade` grey chip |
| 6.88 | — | — | `type` "50,000 − 6,500" |
| 9.54 | — | — | `type` "= 43,500" |

## s096
Continues: s095
Section label: PART 5 · COD FEE
Idea: 1% = ₹435; + ₹100 = ₹535; taxes and other charges on top.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `type` "1% = ₹435" y 600 |
| 3.48 | — | — | `type` "₹100 + ₹435" y 700 |
| 5.70 | — | — | `pop` green pill "₹535" |
| 7.68 | — | — | `fade` grey "Taxes, बाकी charges: ऊपर से" y 940 |

## s097
Continues: no
Section label: PART 5 · COD FEE
Idea: four separate amounts in one COD booking. In: cut. Framing: wide, still.
Layout: heading "एक COD booking, चार रकमें" (60 px) y 220. Four boxes 380×420 in a row at y 360, x 140 / 560 / 980 / 1400: "वसूली की रकम" (coin, white), "COD fee" (red stamp), "Postage" (#f3ead6), "Tax" (#f3ead6); thin dividers, no plus signs.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading |
| 5.16 | — | — | `pop` box 1 |
| 6.60 | — | — | `pop` box 2 |
| 8.22 | — | — | `pop` box 3 |
| 9.68 | — | — | `pop` box 4 |

## s098
Continues: no
Section label: PART 5 · COD FEE
Idea: exam angle: COD fee over postage; up to ₹6,500 1.6%; above, ₹100 + 1% of the excess. In: cut. Framing: wide, still.
Layout: exam-angle card (Shared). Rows: 1 "COD fee: postage के ऊपर"; 2 "₹6,500 तक: 1.6%"; 3 "ऊपर: ₹100 + बढ़ी हुई रकम का 1%".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card + kicker |
| 1.24 | — | — | row 1 |
| 4.18 | — | — | row 2 |
| 7.92 | — | — | row 3 (first half) |

## s099
Continues: s098
Section label: PART 5 · COD FEE
Idea: rows 4–5: ₹5,000 → ₹80; ₹20,000 → ₹235.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3 completes "1%" |
| 1.22 | — | — | row 4 "₹5,000 → ₹80" (₹80 on a green pill) |
| 4.32 | — | — | row 5 "₹20,000 → ₹235" (green pill) |

## s100
Continues: no
Section label: RECAP
Idea: recap Parts 3–5, envelope card A. In: fade 0.5. Framing: wide, still.
Component: recap-card. Mould: title "Part 3, 4 और 5"; seal "4"; rows: 1 "CDF-2" · pill "declaration"; 2 "CDF-1" · pill "parcel पर · 90 दिन"; 3 "eMO offices" · pill "COD Retail: दोनों"; 4 "Bulk VP" · pill "रोज़ ≥ 10 uninsured".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + flap title |
| 5.66 | — | — | row 1; 6.86 tick |
| 7.92 | — | — | row 2; 10.60 tick |

## s101
Continues: s100
Section label: RECAP
Idea: rows 3–4.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3; 4.88 tick |
| 6.16 | — | — | row 4; 10.08 tick |

## s102
Continues: no
Section label: RECAP
Idea: envelope card B: APO, fee slabs. In: cut (same envelope layout, new rows). Framing: wide, still.
Component: recap-card. Mould: same title; seal "2"; rows: 1 "APO" · pill "VP नहीं"; 2 "COD fee" · pill "≤ 6,500: 1.6% · ऊपर: ₹100 + 1%".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope; row 1 |
| 1.80 | — | — | row 1 tick |
| 3.28 | — | — | row 2 |
| 10.92 | — | — | row 2 tick |

## s103
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: a COD item goes to the addressee or an authorised person, and the amount is collected with the delivery. In: wipe from right. Framing: wide, still.
Layout: the recurring picture: cod-flow-diagram at translate(160 300), all four markers shown, #step-3 yellow; person-icons Sender (left) and, on the right, two icons side by side (1600 and 1760, scale 0.8) labelled "Addressee" / "Authorised person" (44 px). parcel-icon 0.6 at the addressee end; heading "Delivery + वसूली, एक साथ" (60 px) y 220.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | diagram and parcel at the addressee end |
| 1.42 | — | — | `pulse` addressee icon |
| 3.00 | — | — | `fade` authorised person icon + label |
| 5.92 | — | — | `color` #step-3 to yellow; `fade` heading |
| 8.06 | — | — | `pop` coin at step 3 |

## s104
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: a signature alone can't replace the collection; an official who doesn't know the receiver may ask for identity. In: cut. Framing: wide.
Layout: left: signature-slip scale 1.3 at (400, 760), slate "≠" at (760, 600), rupee-coin scale 1.4 at (1000, 600) labelled "वसूली". Right: id-card-icon scale 1.6 at (1500, 760) with caption "पहचान माँग सकता है" (52 px) y 860.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | signature-slip |
| 1.96 | — | — | `pop` coin + label |
| 2.96 | — | — | `pop` slate "≠"; grey "सिर्फ signature काफ़ी नहीं" y 300 |
| 7.61 | — | — | `slide` id card up; `fade` caption |

## s105
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: signature and delivery record tie the item to the person who took it; next: delivery attempts. In: cut. Framing: wide.
Layout: chain across y 600: signature-slip (scale 0.9) at x 380, parcel-icon (scale 1.1) at x 960, person-icon (scale 1.2) at x 1540 labelled "जिसने लिया"; ink link lines between them. Bottom band y 860: "अब: delivery के प्रयास" (56 px red) for the turn.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | signature-slip + parcel |
| 1.18 | — | — | `pop` small record sheet behind the slip (invoice-sheet 0.4) |
| 4.14 | — | — | `draw` link lines; `fade` person + label |
| 6.90 | — | — | `reveal` bottom band |

## s106
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: if the first delivery fails the item goes once more; after two failures there's no third. In: cut. Framing: wide.
Layout: Photo: postman-delivering-parcel framed (white border, −1.5°) x 120–860, y 220–780 with credit; if missing, a drawn door with parcel-icon. Right x 960–1780: three attempt rows y 360 / 540 / 720, each a disc with the number and a label: "पहला प्रयास", "दूसरा प्रयास", "तीसरा".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | photo |
| 0.52 | — | — | row 1; 1.50 slate cross on it |
| 3.82 | — | — | row 2 |
| 6.70 | — | — | slate cross on row 2 |
| 8.36 | — | — | row 3; 9.16 `strike` it (slate) + "नहीं जाता" |

## s107
Continues: s106
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: then a notice of arrival; the addressee, or through an authorised person, can collect it from the post office.
Layout add: rows stay where they are. intimation-slip scale 1.2 at (1640, 990) base (x 1460–1820, y 774–990) lettered on its strip "Notice of arrival" (44 px white); grey caption "post office से ले सकते हैं" (48 px) at (1370, 280), above the rows.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | s106 frame |
| 0.30 | — | — | `slide` slip up |
| 3.26 | — | — | `fade` caption |
| 6.90 | — | — | `pulse` slip |

## s108
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: the holding period applies; then office work: the delivery office scans and invoices accountable items. In: cut. Framing: wide.
Sub-shots: #hold 0.00, #office 3.69.
#hold: calendar-sheet scale 1.4 at (960, 880), header "Holding", date-area "अवधि"; caption "लागू holding period" (56 px) y 260.
#office: heading "Delivery office" (60 px red) y 220; left: a drawn hand scanner beam over parcel-icon (scale 1.3) at (520, 760) label "Scan"; right: invoice-sheet scale 1.4 at (1380, 920) header "Invoice"; third slot (x 1700) empty for s109.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | calendar + caption |
| 3.69 | — | — | cut to #office: heading |
| 6.91 | — | — | `fade` parcel |
| 8.17 | — | — | `draw` scan beam; label "Scan" |
| 8.95 | — | — | `slide` invoice up |

## s109
Continues: s108
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: …and prepares the delivery slip; when the official returns, the office matches three things.
Sub-shots: #office 0.00, #match 4.92.
#match: three white cards 500×420 at y 360, x 140 / 710 / 1280 with icons: "Delivery के नतीजे" (tick list), "बिना delivery लौटे items" (parcel with return arrow), "वसूली गई रकम" (cash-bag); "=" signs between; heading "Office मिलाता है" (60 px) y 220.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` registered-list-sheet (scale 0.9) at x 1700 lettered "Delivery slip" |
| 4.92 | — | — | cut to #match: heading |
| 6.78 | — | — | `pop` card 1 |
| 8.48 | — | — | `pop` card 2 |
| 11.14 | — | — | `pop` card 3; `fade` "=" signs |

## s110
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: non-delivery reasons are written with fixed standard remarks; an item shown delivered must have proof of delivery. In: cut. Framing: wide.
Layout: two white panels 780×640 at y 240, x 140 and 1000. Left: parcel-icon with a grey tag lettered "Remark" and four grey ruled lines; caption "तय standard remarks" (52 px). Right: parcel-icon with a green tick and a signature-slip (0.6); caption "Delivered → सबूत ज़रूरी".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left panel with parcel |
| 2.72 | — | — | `pop` Remark tag; `fade` caption |
| 5.49 | — | — | right panel `fade` |
| 9.45 | — | — | `slide` signature-slip in; caption; `highlight` "सबूत" |

## s111
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: a COD item shown delivered must link to its collection and remittance records; an undelivered item stays recorded in deposit… In: cut. Framing: wide.
Layout: top row y 260–560: parcel-icon with green tick (x 300) → link line → two record cards "वसूली record" (x 800) and "Remittance record" (x 1300). Bottom row y 660–960: parcel-icon with grey return mark (x 300) → branch: card "Deposit में दर्ज" (x 800) and a second slot (x 1300) for s112.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | top parcel |
| 3.40 | — | — | `draw` link; `pop` वसूली record |
| 4.26 | — | — | `pop` Remittance record |
| 7.78 | — | — | bottom parcel `fade` |
| 9.22 | — | — | `draw` branch; `pop` "Deposit में दर्ज" |

## s112
Continues: s111
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: …or goes for the next authorised action; then three papers: the booking receipt shows the Post Office accepted the item.
Sub-shots: #records 0.00, #papers 3.73.
#papers: Component: cause-chain. Mould: title "तीन कागज़" (Hindi only); three tall white cards (not four) at x 140 / 710 / 1280 with icons: invoice-sheet "Booking receipt", signature-slip "Receiver's receipt", a POD card "POD"; each detail line in Hindi: "item स्वीकार हुआ", "delivery दर्ज", "sender को सबूत"; drop the arrows (these are three papers, not stages); the POD card in yellow; drop the note strip.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` "अगली authorised कार्रवाई" in slot 2 |
| 3.73 | — | — | cut to #papers: title |
| 5.11 | — | — | card 1 term |
| 8.89 | — | — | card 1 detail "item स्वीकार हुआ" |

## s113
Continues: s112
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: the receiver's receipt records delivery; a separately requested POD gives the sender proof of delivery.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card 2 term "लेने वाले की receipt" |
| 1.68 | — | — | card 2 detail |
| 5.12 | — | — | card 3: "POD" / "Proof of Delivery" (key term, 44 px under) |
| 6.98 | — | — | card 3 detail; `highlight` it |

## s114
Continues: s113
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: the booking receipt does not prove delivery or remittance; on a domestic accountable item the sender may ask for POD…
Sub-shots: #papers 0.00, #pod 4.87.
#pod: stamp card "POD" (120 px) / "Domestic accountable item" (52 px) x 140–900 y 260–620; right: white fee card x 1000–1780 y 260–620 (empty until s115); lower band y 720–940 for the free / not-free rows.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | three cards |
| 1.30 | — | — | slate line under card 1 "delivery / remittance का सबूत नहीं" |
| 3.72 | — | — | slate cross on it |
| 4.87 | — | — | cut to #pod: stamp card |
| 7.35 | — | — | grey "sender माँग सकता है" under it |

## s115
Continues: s114
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: ₹10 per item, over postage and other fees; POD free on an insured item.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` "₹10" (140 px) / "per item" in the fee card |
| 2.12 | — | — | grey "postage और fees के ऊपर" |
| 5.26 | — | — | lower band row 1 (green): "Insured item → POD free" |
| 7.52 | — | — | green tick |

## s116
Continues: s115
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: COD does not make POD free; a paper POD travels like an accountable item; the Director General may set other proofs of delivery.
Layout add: lower band row 2 (slate): "COD → POD free नहीं"; two lines inside the fee card under ₹10 (y 480 / 560, 44 px): "Paper POD = accountable item की तरह" and "Director General: सबूत के दूसरे तरीके".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2 `fade` |
| 2.70 | — | — | `strike` "free" in row 2 (slate) + slate cross |
| 3.80 | — | — | fee card line "Paper POD = accountable item की तरह" |
| 8.24 | — | — | fee card line "Director General: सबूत के दूसरे तरीके" |

## s117
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: if the cover looks tampered with, a special procedure: opened at the post office in the Postmaster's presence. In: cut. Framing: wide.
Layout: sealed-insured-cover scale 1.3 at (520, 820) with a drawn ink magnifier over a torn-looking seam mark; caption "छेड़छाड़ का शक" (56 px) y 260. Right: post-counter-icon scale 1.4 at (1400, 860), sign plate "Post office"; stamp chip "Postmaster की मौजूदगी में" (52 px) y 300 at x 1100–1780.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | cover |
| 1.12 | — | — | `draw` magnifier; caption |
| 3.08 | — | — | grey "खास प्रक्रिया" under caption |
| 5.64 | — | — | `fade` counter |
| 7.16 | — | — | `pop` Postmaster chip |

## s118
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: an inventory in two copies, signed by the addressee; one signed copy with the unsigned POD goes… In: cut. Framing: wide.
Layout: inventory-sheet scale 1.5 at (560, 960) (x 290–830, y 270–960) with #copy-back visible; label "Inventory · 2 copies" (56 px) y 220. Right: a POD card (white, 320×200, "POD" lettered, grey "बिना signature") at (1300, 640); arrow toward a sender person-icon at (1700, 860) (arrow drawn in s119).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | inventory sheet + label |
| 0.52 | — | — | `pulse` #copy-back |
| 2.84 | — | — | `draw` signature on #sign-line |
| 5.42 | — | — | small copy (0.5 scale duplicate) `pop` at (1300, 840) |
| 8.24 | — | — | `pop` POD card beside it |

## s119
Continues: s118
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: …to the sender; without ID, the identity the delivery office asks for is needed; this is only for suspected tampering.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `draw` arrow; `fade` sender icon "Sender" |
| 1.38 | — | — | `pop` id-card-icon (0.8) at (1000, 360) with "पहचान ज़रूरी" |
| 6.73 | — | — | `reveal` soft yellow band x 900–1780, y 180–260: "सिर्फ छेड़छाड़ के शक में" (52 px) |

## s120
Continues: no
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: this gives no right to open every COD parcel before paying; exam angle opens. In: cut. Framing: wide.
Sub-shots: #myth 0.00, #exam 6.44.
#myth: Component: myth-fact. Mould: myth "हर COD parcel: पैसे देने से पहले खोलकर देखने का हक" (56 px); fact "खास प्रक्रिया: सिर्फ छेड़छाड़ के शक में"; drop reasons.
#exam: exam-angle card; row 1 "COD delivery: addressee या authorised person को, वसूली के साथ".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | myth card |
| 5.18 | — | — | `strike` myth (slate) + cross; +0.3 fact card |
| 6.44 | — | — | cut to #exam |
| 7.88 | — | — | row 1 |

## s121
Continues: s120
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: rows 2–3: two attempts, no third, then notice; domestic POD ₹10, free on insured.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 completes "वसूली के साथ" |
| 1.94 | — | — | row 2 "दो प्रयास · तीसरा नहीं · फिर notice" |
| 5.78 | — | — | row 3 "Domestic POD ₹10 · insured पर free" |

## s122
Continues: s121
Section label: PART 6 · DELIVERY, COLLECTION AND POD
Idea: rows 4–5: tampering → Postmaster, inventory in two copies; booking receipt only proves acceptance.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 4 "छेड़छाड़ का शक: Postmaster की मौजूदगी, inventory 2 copies" |
| 6.10 | — | — | row 5 "Booking receipt = सिर्फ स्वीकार का सबूत" |
| 7.90 | — | — | `highlight` row 5 |

## s123
Continues: no
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: COD is complete only when both delivery and money records are right. In: wipe from right. Framing: wide, still.
Layout: two white record cards 640×420 at y 300, x 200 and 1080: "Delivery record" (parcel + tick), "पैसे का record" (coin + tick); below a red stamp strip y 800–920 "COD पूरा = दोनों ठीक" (60 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading-less; left card |
| 4.32 | — | — | right card |
| 6.32 | — | — | green ticks on both (stagger 0.2) |
| 7.04 | — | — | `reveal` strip |

## s124
Continues: no
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: after collection the official accounts for the money; then the office sends it to the sender by the booking's method. In: cut. Framing: wide.
Layout: the recurring picture as in s103 (diagram, Sender left, Addressee right, parcel at the addressee end, coin at step 3); #step-4 to be highlighted. cash-bag scale 0.8 at (1500, 860) labelled "हिसाब".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | diagram |
| 2.02 | — | — | `pop` cash-bag + label |
| 3.70 | — | — | `color` #step-4 to yellow |
| 6.80 | — | — | coin `move` by [−1080, 0] to the sender |

## s125
Continues: s124
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: three separate events: delivery, collection, reaching the sender; so a sender can complain of delay even after delivery.
Layout: steps 2, 3, 4 each get a label chip (52 px) "Delivery", "वसूली", "Sender तक"; all markers back to white before the sweep.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | #step-4 `color` back to white |
| 2.56 | — | — | `color` #step-2 yellow; chip "Delivery" |
| 4.80 | — | — | `color` #step-3 yellow; chip "वसूली" |
| 7.34 | — | — | `color` #step-4 yellow; chip "Sender तक" |
| 13.20 | — | — | `pop` small speech-bubble card "देरी की complaint" (52 px) above the sender |

## s126
Continues: s125
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: two ways to send the money: contractual COD → ePayment.
Sub-shots: #flow 0.00, #two 1.53.
#two: Component: compare-cards. Mould: question "पैसा भेजने के दो रास्ते" (Hindi only); left (red band) "Contractual COD" → big "ePayment"; right (yellow band) "COD Retail" → big "eMO" with "electronic money order" under it (s127); fact rows dropped; takeaway band "पहले category, फिर तरीका" (held for s130).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | complaint bubble holds |
| 1.53 | — | — | cut to #two: question |
| 3.79 | — | — | left card |
| 7.01 | — | — | `pop` "ePayment" |

## s127
Continues: s126
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: COD Retail: after delivery an eMO is booked; the office has fixed steps.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | right card |
| 1.64 | — | — | grey "delivery के बाद" |
| 2.92 | — | — | `pop` "eMO" |
| 4.46 | — | — | `fade` "electronic money order" |
| 7.92 | — | — | grey "steps तय हैं" under right card |

## s128
Continues: no
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: eMO steps for COD Retail (screen notes): item number डालें → data निकालें → details जाँचें → eMO book करें. In: cut. Framing: wide, still.
Component: step-list. Mould: title "COD Retail · eMO के steps"; four steps, Hindi only (60 px): "Item number डालें", "Data निकालें", "Details जाँचें", "eMO book करें"; last step green tick badge; drop the chip and highlight.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title + step 1 |
| 2.42 | — | — | step 2 |
| 4.32 | — | — | step 3 |
| 6.40 | — | — | step 4 + tick |

## s129
Continues: no
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: "COD money goes by ePayment" is right for contractual COD, not for every COD Retail. In: cut. Framing: wide.
Layout: white statement card x 140–1780 y 240–440: "\"COD का पैसा ePayment से जाता है\"" (60 px). Two verdict cards below 760×380 at y 520, x 140 and 1020: "Contractual COD" + green tick "सही"; "COD Retail" + slate cross "हर बार नहीं".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | statement card |
| 4.46 | — | — | left card; 6.28 green tick |
| 7.62 | — | — | right card; 9.36 slate cross |

## s130
Continues: s129
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: identify the category first, then the method; the remitting official links the remittance to the delivered item.
Sub-shots: #verdict 0.00, #link 3.64.
#link: left parcel-icon with green tick (x 420, y 700) "Delivered item"; right a coin with arrow card "Remittance" (x 1500); ink link line between; official checklist card under it y 820–980 for s131 (two rows).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `reveal` grey band y 920–1000 under both cards: "पहले category, फिर तरीका" (56 px) |
| 3.64 | — | — | cut to #link: Remittance card |
| 6.48 | — | — | parcel `fade` |
| 7.86 | — | — | `draw` link |

## s131
Continues: s130
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: checks the sender/payee details and amount; the COD Regulations set no single remittance period for every agreement.
Sub-shots: #link 0.00, #period 4.94.
#period: regulations-book scale 1.3 at (440, 900); right: clock-and-calendar chip "पैसा भेजने की एक तय अवधि?" (56 px) y 360 at x 860–1780; slate "हर agreement के लिए नहीं" y 500.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | checklist row 1 "Sender / payee details ✓" |
| 2.74 | — | — | row 2 "रकम ✓" |
| 4.94 | — | — | cut to #period: book |
| 8.54 | — | — | chip |
| 10.66 | — | — | slate line + cross |

## s132
Continues: s131
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: administrative instructions and the service set it; the holding period is no licence to hold money after collection.
Layout add: invoice-sheet (0.9) "Administrative instructions" at (1100, 900) and a second "Service व्यवस्था" at (1500, 900), with an arrow from the chip. Then a white row card x 860–1780, y 600–720 (below the slate line): "रखने की अवधि ≠ पैसा रोकने की छूट" (52 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `slide` admin sheet up |
| 2.96 | — | — | `slide` service sheet up |
| 5.36 | — | — | `fade` row "रखने की अवधि" |
| 9.80 | — | — | `fade` "≠ पैसा रोकने की छूट"; `highlight` it |

## s133
Continues: no
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: posting an item doesn't recover its price; nor does the sender get that price from the Department automatically. In: cut. Framing: wide, still.
Layout: two slate myth rows on white cards (1640×260) at y 300 and 640: "Item post किया = कीमत वसूल" and "Department से कीमत अपने आप"; each struck with a slate cross on its word.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 |
| 3.34 | — | — | `strike` row 1 + slate cross |
| 6.12 | — | — | row 2 |
| 9.58 | — | — | `strike` row 2 + slate cross |

## s134
Continues: no
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: insurance covers loss or damage on its own terms; if the customer never took delivery the sale price doesn't come from insurance. In: cut. Framing: wide.
Layout: left card (#f3ead6) 760×560 at (140, 260): shield "Insurance" + "loss या damage" (green tick). Right card white at (1020, 260): parcel-icon with grey return arrow + "Delivery नहीं ली" and slate line "बिक्री की रकम insurance से नहीं".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card |
| 2.16 | — | — | `fade` "loss या damage"; green tick |
| 4.68 | — | — | right card |
| 7.08 | — | — | slate line; 9.00 slate cross |

## s135
Continues: no
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: changing or waiving the amount: on the sender's written request the Postmaster may deliver an inland VP article without recovery… In: cut. Framing: wide.
Layout: left: person-icon "Sender" (x 260) with a letter "लिखित request" → arrow → stamp card "Postmaster" (x 760–1200, y 300–480). Right x 1260–1780: parcel-icon "Inland VP article" and two option chips y 640 / 780: "बिना रकम वसूले" and "रकम बदलना" (s136).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "रकम बदलना या छोड़ना" (60 px) y 200 |
| 3.34 | — | — | sender + letter |
| 5.44 | — | — | `draw` arrow; `pop` Postmaster |
| 6.72 | — | — | parcel + label |
| 8.20 | — | — | chip "बिना रकम वसूले" |

## s136
Continues: s135
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: …or change it; two conditions: request via the office of posting; reaching the delivery office before the article has gone back.
Sub-shots: #who 0.00, #cond 2.26.
#cond: heading "दो शर्तें" (60 px red) y 220; two numbered white cards 1640×260 at y 340 and 660: 1 "Request, office of posting के ज़रिए"; 2 "Delivery office तक तब पहुँचे, जब article office of posting को लौटा न हो".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | chip "रकम बदलना" |
| 2.26 | — | — | cut to #cond: heading |
| 3.40 | — | — | card 1; 4.42 `highlight` "office of posting" |
| 7.02 | — | — | card 2 |
| 12.10 | — | — | `highlight` "लौटा न हो" |

## s137
Continues: no
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: the counter official can't waive or change the amount by himself; exam angle: the amount collected must go to the sender. In: cut. Framing: wide.
Sub-shots: #counter 0.00, #exam 5.71.
#counter: booking-counter scale 1.6 at (960, 900) (x 448–1472, y 228–900) labelled above "Counter official" (56 px) y 200; two slate chips on the ledge: "छोड़ना ✗", "बदलना ✗".
#exam: exam-angle card; row 1 "वसूली की रकम, sender को भेजनी ही है".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | counter + label |
| 2.90 | — | — | chip "छोड़ना" + slate cross |
| 4.38 | — | — | chip "बदलना" + slate cross |
| 5.71 | — | — | cut to #exam |
| 6.99 | — | — | row 1 |

## s138
Continues: s137
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: rows 2–4: contractual ePayment; COD Retail eMO after delivery with data checked; changing the amount: Postmaster on the sender's written request…
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2 "Contractual COD: ePayment" |
| 3.02 | — | — | row 3 "COD Retail: delivery के बाद eMO, data जाँचकर" |
| 8.36 | — | — | row 4 "रकम बदलना: Postmaster, sender की लिखित request पर" |

## s139
Continues: s138
Section label: PART 7 · PAYMENT TO SENDER AND CHANGING THE AMOUNT
Idea: …through the office of posting; the holding period is not a remittance deadline.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 4 completes "· office of posting के ज़रिए" |
| 2.40 | — | — | row 5 "Article रखने की अवधि ≠ पैसा भेजने की deadline" |
| 5.32 | — | — | `highlight` row 5 |

## s140
Continues: no
Section label: RECAP
Idea: recap Parts 6–7, row 1. In: fade 0.5. Framing: wide, still.
Component: recap-card. Mould: title "Part 6 और Part 7"; seal "5"; rows: 1 "Delivery" · pill "वसूली के साथ"; 2 "दो प्रयास" · pill "फिर notice"; 3 "POD ₹10" · pill "insured पर free"; 4 "ePayment / eMO" · pill "Contractual / COD Retail"; 5 "Postmaster" · pill "रकम बदलने का अधिकार".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope |
| 6.00 | — | — | row 1 |
| 10.88 | — | — | row 1 tick |

## s141
Continues: s140
Section label: RECAP
Idea: rows 2–4.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2; 1.38 tick |
| 1.70 | — | — | row 3; 5.18 tick |
| 5.94 | — | — | row 4; 10.74 tick |

## s142
Continues: s141
Section label: RECAP
Idea: row 5.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 5 |
| 2.40 | — | — | row 5 tick; hold |

## s143
Continues: no
Section label: PART 8 · RETENTION AND RETURN
Idea: two words: Retention (keeping an undelivered item for the allowed period) and Demurrage (the charge for keeping it longer, where a rule fixes one). In: wipe from right. Framing: wide, still.
Layout: two stamp cards 780×340 at y 220, x 140 and 1000: "Retention" / "रोककर रखना"; "Demurrage" / "विलंब शुल्क". Under each a white meaning card 780×240 at y 600 (Hindi 50 px, 3 lines): "Undelivered item को अनुमति वाली अवधि तक post office में रखना"; "उससे ज़्यादा रोकने का charge, जहाँ नियम तय करे".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "पहले दो शब्द" (grey 48 px) y 180 |
| 0.88 | — | — | `pop` Retention card; +0.5 Hindi |
| 2.30 | — | — | `fade` meaning 1 |
| 8.08 | — | — | `pop` Demurrage card; +0.5 Hindi |
| 9.50 | — | — | `fade` meaning 2 |
| 11.94 | — | — | `highlight` words "जहाँ नियम तय करे" |

## s144
Continues: s143
Section label: PART 8 · RETENTION AND RETURN
Idea: not every day of retention is chargeable; being willing to pay doesn't let an item stay indefinitely.
Layout change: the meaning cards end at y 840 (they were sized for this in s143) and their text turns grey; a cream band x 140–1780, y 870–990 holds two short lines side by side (44 px): left "हर दिन charge वाला ज़रूरी नहीं"; right "charge देकर भी अनगिनत दिन नहीं".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `color` meaning texts to #6f6a63 (dur 0.4) |
| 1.48 | — | — | `reveal` band; left line `fade` |
| 3.82 | — | — | `underline` "ज़रूरी नहीं" |
| 5.54 | — | — | right line `fade` |
| 8.14 | — | — | `underline` "अनगिनत दिन नहीं" |

## s145
Continues: no
Section label: PART 8 · RETENTION AND RETURN
Idea: return of undelivered COD; COD is accountable mail; it goes back in three situations. In: cut. Framing: wide.
Layout: left parcel-icon scale 1.8 at (420, 820) with a grey return arrow (curving left) above it; stamp chip "Accountable mail" (64 px) at x 140–760, y 260–380. Right x 880–1780: heading "वापसी के तीन हालात" (60 px red) y 280; three empty numbered slots y 420 / 600 / 780 for s146.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel |
| 1.92 | — | — | `draw` return arrow |
| 3.60 | — | — | `pop` chip |
| 7.64 | — | — | `fade` heading + three number discs |

## s146
Continues: s145
Section label: PART 8 · RETENTION AND RETURN
Idea: addressee refuses; doesn't take it after notice; doesn't take it within the time set by administrative instructions; the reason is recorded with a fixed remark.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | slot 1 "Addressee मना करे" |
| 1.74 | — | — | slot 2 "Notice के बाद न ले" |
| 3.96 | — | — | slot 3 "तय समय में न ले" |
| 7.90 | — | — | grey tag "Remark" on the parcel; caption "तय remark से दर्ज" (44 px) under it |

## s147
Continues: no
Section label: PART 8 · RETENTION AND RETURN
Idea: if the sender's name and address is clear on the outside, it goes back to the sender; if not, to the Returned Letter Office (RLO). In: cut. Framing: wide.
Layout: left parcel-icon scale 1.6 at (360, 700) with its label visible; a fork: upper branch → person-icon "Sender" at (1100, 520) with green tick, caption "नाम-पता साफ़"; lower branch → stamp card "RLO" (100 px) / "Returned Letter Office" (48 px) at x 1000–1780, y 700–940, caption "न हो, तो".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | parcel |
| 0.98 | — | — | `highlight` parcel label; caption "नाम-पता साफ़" |
| 3.64 | — | — | `draw` upper branch; `pop` sender + tick |
| 6.36 | — | — | `draw` lower branch; caption "न हो, तो" |
| 7.34 | — | — | `pop` RLO card |

## s148
Continues: no
Section label: PART 8 · RETENTION AND RETURN
Idea: from 17 August 2026 the returned item is delivered to the sender; the POD attached is not given back… In: cut. Framing: wide.
Layout: left calendar-sheet scale 1.5 at (360, 860) header "AUG 2026", date "17"; centre parcel-icon scale 1.4 at (900, 800) with a POD card (white 220×140, "POD") clipped on; right person-icon "Sender" at (1560, 820). Caption strip y 240: "लौटा item → sender को deliver".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` calendar |
| 3.02 | — | — | `fade` caption; parcel + POD card |
| 4.08 | — | — | parcel `move` by [420, 0] toward the sender; POD card stays (it is a separate group, unclipped at 7.50) |
| 8.90 | — | — | slate "वापस नहीं" over the POD card |

## s149
Continues: s148
Section label: PART 8 · RETENTION AND RETURN
Idea: it is destroyed; if it can't be given even to the sender, the item goes to the RLO; then: the COD Regulations, for inland COD…
Sub-shots: #ret 0.00, #regs 7.75.
#regs: regulations-book scale 1.4 at (440, 900); right x 860–1780: two slate-outlined cards y 300 and 520: "एक ही holding period", "एक ही demurrage दर" (56 px); y 760–940 left free for s150.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `strike` POD card (slate); `fade` "नष्ट" |
| 1.80 | — | — | small RLO badge `pop` at (1560, 360) with grey "Sender को भी न दे सके" |
| 7.75 | — | — | cut to #regs: book |

## s150
Continues: s149
Section label: PART 8 · RETENTION AND RETURN
Idea: no single holding period or demurrage rate; each COD product's own operational instructions apply.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` card "एक ही holding period" |
| 2.58 | — | — | `pop` card "एक ही demurrage दर" |
| 3.90 | — | — | slate crosses on both |
| 4.98 | — | — | three small invoice-sheets (0.5) fan in at y 900, x 1000 / 1260 / 1520, captioned "हर product की operational instructions" |

## s151
Continues: s150
Section label: PART 8 · RETENTION AND RETURN
Idea: international demurrage charges are not applied to inland COD; now the VP article rule.
Sub-shots: #regs 0.00, #vp 5.50.
#vp: the retention day line (same place in s151–s159, s164): retention-day-line at translate(150 540) → day ticks at x 210 + (n−1)·107 (day 1 = 210, day 7 = 852, day 8 = 959, day 14 = 1601, day 15 = 1708), line y 660, numerals 1–15 (Inter 40, grey) under the ticks at y 720; bands go in y 570–650. Above (y 200–500): stamp card "VP article" x 140–700, y 220–360; rule text area x 760–1780.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | slate chip "International demurrage → inland COD ✗" (48 px) in the free right column, y 760–860 |
| 4.06 | — | — | slate cross on chip |
| 5.50 | — | — | cut to #vp: day line drawn, numerals visible |
| 7.76 | — | — | `pop` VP article card |

## s152
Continues: s151
Section label: PART 8 · RETENTION AND RETURN
Idea: kept 7 days, counted from the first offer for delivery, or from the intimation of arrival to the addressee or agent.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `grow` green-tinted band (#2e7d4f at 25 %) days 1–7 (x 210–852, axis x, origin left); band label "रखना · 7 दिन" (52 px) y 520 |
| 3.18 | — | — | flag marker at day 1 tick: "पहली बार पेश" (44 px) at y 300 with a thin leader |
| 6.98 | — | — | second line under the flag: "या intimation" |
| 11.02 | — | — | `highlight` "intimation" |

## s153
Continues: s152
Section label: PART 8 · RETENTION AND RETURN
Idea: if not taken, the article returns on day 8; before that, the addressee may give a written application…
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | day line holds |
| 2.22 | — | — | `stamp` round postmark "वापसी · 8वाँ दिन" (Ø 200) above day 8 at (959, 420) |
| 5.71 | — | — | rule text area: "लौटने से पहले: लिखित application" (52 px) at (1080, 260) |

## s154
Continues: s153
Section label: PART 8 · RETENTION AND RETURN
Idea: …and pay the set fee; then it stays longer, from day 8, at most 7 days (yellow days 8–14: "extension: लिखित application + fee").
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | rule text gains "+ fee" |
| 2.72 | — | — | postmark `out` (dur 0.3) |
| 5.12 | — | — | `grow` yellow band days 8–14 (x 959–1601); label above "extension: लिखित application + fee" (48 px, amber) y 520 |
| 8.34 | — | — | `pop` chip "ज़्यादा से ज़्यादा 7 दिन" at (1280, 800) |

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

## s158
Continues: s157
Section label: PART 8 · RETENTION AND RETURN
Idea: for village-postman articles counting starts at intimation; if day 7 is a Sunday or postal holiday…
Layout add: icon-village-post-office scale 0.6 at (1500, 400) with caption "Village postman: intimation से" (44 px) beside it at (1120, 300).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `fade` village icon |
| 2.90 | — | — | `fade` caption; `highlight` "intimation" |
| 6.56 | — | — | `pulse` day 7 tick |
| 8.26 | — | — | `pop` small red-outlined marker "Sunday / holiday" on day 7 (above the band, y 470) |

## s159
Continues: s158
Section label: PART 8 · RETENTION AND RETURN
Idea: …it stays until the next working day, with no demurrage for those days; same if the extension's last day is a Sunday or holiday.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `draw` a small ink arrow from the day 7 marker toward day 8 |
| 1.28 | — | — | label "अगला working day" (44 px) |
| 5.24 | — | — | green pill "demurrage नहीं" (44 px) under it |
| 7.02 | — | — | `pulse` day 14 tick |
| 9.40 | — | — | `pop` second marker "Sunday / holiday" on day 14 |

## s160
Continues: s159
Section label: PART 8 · RETENTION AND RETURN
Idea: the same relief; then charges: the detention charge comes from that COD booking's operational instructions.
Sub-shots: #line 0.00, #fee 1.66.
#fee: left stamp card "Detention charge" / "रोकने का charge" x 140–860, y 240–520; right invoice-sheet scale 1.3 at (1380, 900) lettered "Operational instructions"; arrow between; space y 620–980 on the left for s161–s162 rows.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | arrow from the day 14 marker; green pill "यही छूट" |
| 1.66 | — | — | cut to #fee: stamp card |
| 6.14 | — | — | `slide` instructions sheet up; `draw` arrow |

## s161
Continues: s160
Section label: PART 8 · RETENTION AND RETURN
Idea: detention fee paid is not refunded; if the article finally returns, the sender pays the dues and signs the form, giving a receipt.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 (white card, slate cross icon) "दी गई detention fee: वापस नहीं" y 640 |
| 3.56 | — | — | row 2 "Article लौटे: sender बकाया charges देता है" y 780 |
| 8.76 | — | — | `pop` signature-slip (0.6) at the row 2 end; `draw` #signature |
| 10.38 | — | — | grey "+ receipt" |

## s162
Continues: s161
Section label: PART 8 · RETENTION AND RETURN
Idea: fees paid earlier don't come back just because it returns; then Poste Restante: mail kept at the post office…
Sub-shots: #fee 0.00, #pr 6.68.
#pr: stamp card "Poste Restante" (96 px) / "डाकघर में रखी डाक" (52 px) x 140–1000, y 240–520; meaning (Hindi 52 px) at y 600: "post office पर रखी डाक, जिसे जाकर लेना है"; right column x 1080–1780 free for s163 compare.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3 "पहले दी fees: सिर्फ लौटने से वापस नहीं" y 920 |
| 5.52 | — | — | slate cross on row 3 |
| 6.68 | — | — | cut to #pr: stamp card |
| 10.66 | — | — | meaning `fade` (first half) |

## s163
Continues: s162
Section label: PART 8 · RETENTION AND RETURN
Idea: …that must be collected; a Poste Restante VP article stays at most 7 days; other Poste Restante mail gets up to 1 month…
Layout add: two cards on the right (x 1080–1780): y 260–520 green "VP article · 7 दिन तक"; y 600–860 grey "बाकी डाक · 1 महीने तक".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | meaning completes "जिसे जाकर लेना है" |
| 4.24 | — | — | `pop` VP card |
| 6.50 | — | — | `highlight` "7 दिन" |
| 8.16 | — | — | `pop` grey card |
| 11.30 | — | — | `underline` "1 महीने" |

## s164
Continues: s163
Section label: PART 8 · RETENTION AND RETURN
Idea: …which a VP article doesn't get; exam angle: VP article 7 days, return on day 8; extension: written application, fee, not over 7 days.
Sub-shots: #pr 0.00, #exam 1.62.
#exam: exam-angle card. Rows: 1 "VP article: 7 दिन · 8वें दिन वापसी"; 2 "Extension: लिखित application + fee · 7 दिन से ज़्यादा नहीं".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | slate grey line on the grey card "VP article को नहीं" |
| 1.62 | — | — | cut to #exam |
| 2.78 | — | — | row 1 |
| 7.28 | — | — | row 2 |

## s165
Continues: s164
Section label: PART 8 · RETENTION AND RETURN
Idea: rows 3–5: detention fee not refunded; VP Poste Restante max 7 days; "after 7 days" means where VP detention terms apply…
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3 "Detention fee: वापस नहीं" |
| 2.98 | — | — | row 4 "VP Poste Restante: ज़्यादा से ज़्यादा 7 दिन" |
| 7.06 | — | — | row 5 "\"7 दिन के बाद\": जहाँ VP detention की शर्तें लगें" |

## s166
Continues: s165
Section label: PART 8 · RETENTION AND RETURN
Idea: …extra holding charge from day 8.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 5 completes "→ charge 8वें दिन से" |
| 1.98 | — | — | `highlight` "8वें दिन"; hold |

## s167
Continues: no
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: first name the problem: item never arrived; contents damaged or missing; delivery or collection wrong; or money collected… In: wipe from right. Framing: wide.
Layout: heading "गड़बड़ क्या है?" (64 px red) y 220. Four white cards 800×300 in a 2×2 grid (x 140 / 980, y 320 / 660), each an icon + Hindi line (56 px): parcel with "?" "Item पहुँचा ही नहीं"; open parcel "सामान खराब या गायब"; parcel + coin with slate mark "Delivery या वसूली गलत"; coin stopped before a sender icon "पैसा sender तक नहीं" (s168).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading |
| 2.52 | — | — | `pop` card 1 |
| 4.20 | — | — | `pop` card 2 |
| 7.02 | — | — | `pop` card 3 |
| 9.92 | — | — | card 4 icon `fade` |

## s168
Continues: s167
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …but not passed to the sender; each case's proof and time limit can differ; both sender and addressee can complain.
Sub-shots: #grid 0.00, #who 7.06.
#who: two person-icons scale 1.4 at (620, 820) "Sender" and (1300, 820) "Addressee", each with a small complaint-letter icon above; heading "Complaint कौन कर सकता है" (56 px) y 220.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card 4 text `fade` |
| 2.16 | — | — | grey caption under the heading: "हर हालत: सबूत और समय-सीमा अलग" (44 px) y 290 |
| 7.06 | — | — | cut to #who |
| 7.54 | — | — | sender + letter `pop` |
| 9.80 | — | — | addressee + letter `pop` |

## s169
Continues: no
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: details that help a COD payment complaint: item number, booking details, delivery information… In: cut. Framing: wide, still.
Layout: white checklist card x 140–1200, y 220–980, header "COD payment complaint में" (56 px red); five rows y 360 / 480 / 600 / 720 / 840 (52 px) with tick boxes. Right x 1280–1780: three stacked chips (s170) "Delivery?", "वसूली?", "Payment?".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card + header |
| 4.70 | — | — | row 1 "Item number" + tick |
| 5.80 | — | — | row 2 "Booking की details" + tick |
| 7.58 | — | — | row 3 "Delivery की जानकारी" + tick |

## s170
Continues: s169
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: collected amount, remittance reference if any; these show whether the problem is in delivery, collection…
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 4 "वसूली गई रकम" + tick |
| 1.66 | — | — | row 5 "Remittance reference (अगर हो)" + tick |
| 6.24 | — | — | `pop` chip "Delivery?" |
| 7.58 | — | — | `pop` chip "वसूली?" |

## s171
Continues: s170
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …or payment to the sender; domestic time limits (screen notes table 3), row 1 opens.
Sub-shots: #check 0.00, #table 2.40.
#table: Component: compare-table. Mould: title "Complaint की समय-सीमा"; two columns "हालत" | "कब"; three rows (Hindi 56 px): "Item न मिला" | "booking के 15 दिन बाद, 60 दिन के अंदर"; "अंदर damage या loss" | "item मिलने के 2 दिन के अंदर"; "Compensation claim" | "posting के 60 दिन बाद नहीं"; source "Post Office Regulations 2024". Table x 140–1780, y 220–860.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` chip "Payment?" |
| 2.40 | — | — | cut to #table: title, header, source |
| 6.12 | — | — | row 1 label |
| 7.96 | — | — | row 1 value first half "booking के 15 दिन बाद" |

## s172
Continues: s171
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …and within 60 days; row 2 label.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 value completes ", 60 दिन के अंदर" |
| 2.20 | — | — | row 2 label |

## s173
Continues: s172
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: within 2 days of receiving the item; no compensation claim after 60 days from posting; where counting starts is the real point.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2 value |
| 2.82 | — | — | row 3 label + value |
| 8.02 | — | — | grey band under the table y 900 "गिनती कहाँ से शुरू होती है?" (52 px) |

## s174
Continues: s173
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: from booking, from receipt of the item, from posting; a remittance complaint can arise even after delivery.
Sub-shots: #table 0.00, #remit 4.29.
#remit: the recurring picture (diagram as in s124) with #step-3 marked done (green tick) and #step-4 yellow; speech card "Remittance complaint" (52 px) above the sender; caption "delivery के बाद भी" (52 px) y 240.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `highlight` "booking" in row 1 |
| 0.96 | — | — | `highlight` "item मिलने" in row 2 |
| 2.90 | — | — | `highlight` "posting" in row 3 |
| 4.29 | — | — | cut to #remit |
| 5.85 | — | — | caption `fade` |

## s175
Continues: s174
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: the 15-day wait for a missing item is no reason to delay a money complaint; five ways to complain.
Sub-shots: #remit 0.00, #ways 7.17.
#ways: complaint-channel-icons at translate(210 300) (icons y 300–540); five label slots under each icon at y 620 (Hindi/English 44 px, two lines max); heading "Complaint के पाँच रास्ते" (60 px) y 220.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grey strip at bottom y 940: "15 दिन का इंतज़ार ≠ पैसे की शिकायत टालना" (48 px) `fade` |
| 4.92 | — | — | `highlight` "≠" part |
| 7.17 | — | — | cut to #ways: heading |
| 8.31 | — | — | `pop` "5" badge (red, Ø 100) beside heading |

## s176
Continues: s175
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: complaint book at the post office in working hours; Post Office web portal; social media websites.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` #book; label "Suggestion and complaints book" + grey "working hours में" |
| 4.74 | — | — | `pop` #portal; label "Web portal" |
| 7.06 | — | — | `pop` #social; label "Social media" |

## s177
Continues: s176
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: toll-free numbers and a written complaint; keep the booking receipt and delivery/payment records; in damage or loss, the cover, packing…
Sub-shots: #ways 0.00, #keep 4.42.
#keep: heading "संभालकर रखिए" (60 px red) y 220; three items on a white card x 140–1780, y 320–940: invoice-sheet (0.8) "Booking receipt"; registered-list-sheet (0.6) "Delivery / payment records"; sealed-insured-cover (0.5) "Cover, packing" (s178 adds "गायब सामान की जानकारी").
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` #phone; label "Toll-free numbers" |
| 2.48 | — | — | `pop` #letter; label "लिखित complaint" |
| 4.42 | — | — | cut to #keep: heading + receipt |
| 6.20 | — | — | records `pop` |
| 12.88 | — | — | cover `pop` + label |

## s178
Continues: s177
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …and details of missing goods; a compensation claim needs valid booking proof and a written demand; when is an item lost?
Sub-shots: #keep 0.00, #claim 3.72.
#claim: stamp card "Compensation claim" (80 px) x 140–900, y 240–460; two white rows x 140–1780 y 560 / 720: "Booking का valid सबूत" and "लिखित माँग" (56 px); grey band y 900 "Item lost कब माना जाता है?" (52 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grey caption "+ गायब सामान की जानकारी" under the cover |
| 3.72 | — | — | cut to #claim |
| 5.62 | — | — | row 1 |
| 8.20 | — | — | row 2 |
| 10.03 | — | — | `reveal` grey band |

## s179
Continues: no
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: without final delivery status, the later of two dates: 60 days from booking or 30 days from the complaint. In: cut. Framing: wide.
Layout: heading "Final delivery status नहीं, तो" (56 px) y 220. Two date cards 760×380 at y 340, x 140 and 1020: calendar-sheet (0.8) with "60 दिन" + "Booking से"; calendar-sheet with "30 दिन" + "Complaint मिलने से". Below, a soft yellow band y 800–920 "जो बाद में आए" (60 px); s180 adds a grey line under it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading |
| 2.94 | — | — | grey "दो तारीखें" kicker |
| 4.52 | — | — | `reveal` band "जो बाद में आए" |
| 5.76 | — | — | `pop` left card |
| 8.10 | — | — | `pop` right card |

## s180
Continues: s179
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: provided the complaint was made in time; once declared lost, compensation is paid within 10 days.
Layout add: grey condition line under the band y 960 "शर्त: complaint तय समय में" (44 px); round red postmark "10 दिन के अंदर · Compensation" (Ø 260) at (1640, 300) over the right card's top corner.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | condition line `fade` |
| 3.60 | — | — | grey "Lost घोषित" chip near postmark spot |
| 6.64 | — | — | `stamp` postmark |

## s181
Continues: no
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: these are compensation periods, not COD remittance periods; then VP enquiries: full details of each article… In: cut. Framing: wide.
Sub-shots: #not 0.00, #enq 6.35.
#not: two cards side by side 780×420 at y 300: left red "Compensation की अवधियाँ" (green tick); right white "COD पैसा भेजने की अवधि" (slate cross).
#enq: heading "VP की पूछताछ" (64 px red) y 220; complaint letter (domestic-envelope scale 1.4 at (620, 900)) for s182 stamps; right x 1180–1780 rows y 380 / 540 / 700.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left card |
| 2.68 | — | — | right card; 5.48 slate cross |
| 6.35 | — | — | cut to #enq: heading + envelope |
| 8.67 | — | — | row 1 "हर article की पूरी details" |

## s182
Continues: s181
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: a set enquiry fee per article, paid by postage stamps on the complaint letter; refunded if the complaint is right.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2 "हर article की तय enquiry fee" |
| 5.02 | — | — | three small stamps `pop` onto the envelope's frank zone (stagger 0.15) |
| 7.62 | — | — | row 3 (green) "Complaint सही → fee वापस" |

## s183
Continues: s182
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: the result is told by letter; then fraud protection: the addressee complains right after receiving a VP article…
Sub-shots: #enq 0.00, #fraud 2.88.
#fraud: heading "धोखाधड़ी से सुरक्षा" (64 px red) y 220; left person-icon "Addressee" (x 360, y 860) with parcel-icon (0.7) beside it; complaint card (white, x 760–1780, y 360–620): "VP article मिलने के तुरंत बाद complaint" (52 px); second line for s184.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grey "नतीजा: letter से" under row 3 |
| 2.88 | — | — | cut to #fraud: heading |
| 5.01 | — | — | addressee + parcel |
| 7.23 | — | — | complaint card; `highlight` "तुरंत" |

## s184
Continues: s183
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: that it was sent dishonestly or by fraud; the matter can go to the Head of the Circle, who, seeing a prima facie basis, until the inquiry ends…
Sub-shots: #fraud 0.00, #hoc 4.70.
#hoc: left: icon-circle-office scale 1.2 at (460, 760) + key-term stamp card "Head of the Circle" / "डाक परिमंडल प्रमुख" at x 140–900, y 800–990; right: scales-icon scale 1.2 at (1340, 620); grey "पहली नज़र में आधार" (52 px) under it y 720; outcome slot y 800–960 (s185).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | line 2 "बेईमानी या धोखे से भेजा" |
| 4.70 | — | — | cut to #hoc: building + key-term card; +0.5 Hindi |
| 7.66 | — | — | `pop` scales |
| 8.90 | — | — | `fade` grey line |

## s185
Continues: s184
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …can stop the sender's payment; if fraud is fully proved, two orders: the article back to the sender…
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | outcome card 1 (stamp) "Payment रोकना (जाँच तक)" at x 1000–1780, y 790–880 |
| 2.38 | — | — | grey line "धोखा पूरी तरह साबित हो, तो" above the scales, y 300 |
| 6.44 | — | — | `pop` "दो आदेश" pill beside it |
| 8.42 | — | — | outcome card 2 (white) at y 900–990, first half "Article → sender को" |

## s186
Continues: s185
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …and the collected amount back to the addressee; a complaint alone doesn't let the counter official refund.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | outcome 2 completes "· रकम → addressee को" |
| 3.43 | — | — | slate chip "Counter official: सिर्फ complaint पर रकम वापस नहीं" (44 px) over the building's top-left, y 300 |
| 8.06 | — | — | slate cross on chip |

## s187
Continues: no
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: in a VP payment complaint the VP money order is not usually shown; that needs an allegation of fraud or deceit. In: cut. Framing: wide.
Layout: mo-form scale 1.5 at (620, 920) (x 170–1070, y 320–920) with a grey "VP money order" label y 260. Right x 1160–1780: slate row y 400 "आम तौर पर नहीं दिखाया जाता"; red-outlined condition card y 560–760 "धोखाधड़ी या छल का आरोप चाहिए".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | form + label |
| 4.44 | — | — | slate row |
| 6.94 | — | — | condition card `pop` |

## s188
Continues: s187
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: permission to see it only at a post office convenient to the Department; two more short facts often asked.
Sub-shots: #mo 0.00, #facts 8.03.
#facts: heading "दो छोटे तथ्य" (64 px red) y 220; two numbered white cards 1640×320 at y 320 and 680 (empty until s189).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grey row y 840 "देखने की अनुमति: Department की सुविधा वाले post office में" (44 px) |
| 6.42 | — | — | `highlight` "Department की सुविधा" |
| 8.03 | — | — | cut to #facts: heading + numbered discs |

## s189
Continues: s188
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: fact 1: a redirected VP article → intimation to the office of posting; fact 2: refused or unclaimed VP article…
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card 1: parcel with bent arrow icon + "VP article redirect" |
| 3.36 | — | — | card 1 adds "→ intimation, office of posting को" |
| 7.36 | — | — | card 2: "VP article मना / कोई लेने न आए" |

## s190
Continues: s189
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …the money order form's upper part is destroyed; the lower part, with the sender's certificate, is filed.
Layout add: inside card 2 at its right end, mo-form scale 0.55 (330×220) at (1520, 980) base.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `pop` mo-form in card 2 |
| 2.30 | — | — | `highlight` #upper; slate label "ऊपरी हिस्सा: नष्ट" beside |
| 3.20 | — | — | `out` #upper (dur 0.5) |
| 4.86 | — | — | label "निचला हिस्सा + sender का certificate" |

## s191
Continues: s190
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …filed; exam angle opens: item not received…
Sub-shots: #facts 0.00, #exam 1.26.
#exam: exam-angle card; rows (s191–s194): 1 "Item न मिला: booking के 15 दिन बाद, 60 दिन के अंदर"; 2 "Damage या गायब: मिलने के 2 दिन के अंदर"; 3 "Claim: posting के 60 दिन बाद नहीं"; 4 "Complaint के 5 रास्ते"; 5 "धोखाधड़ी: Head of the Circle, VP payment रोक सकते".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grey "→ file" on card 2 |
| 1.26 | — | — | cut to #exam |
| 2.35 | — | — | row 1 first half "Item न मिला:" |

## s192
Continues: s191
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: rows 1–2 complete.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 completes "booking के 15 दिन बाद, 60 दिन के अंदर" |
| 4.88 | — | — | row 2 |

## s193
Continues: s192
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: rows 3–5.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3 |
| 3.85 | — | — | row 4 |
| 5.87 | — | — | row 5 first half "धोखाधड़ी, पहली नज़र में आधार:" |

## s194
Continues: s193
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: row 5 completes; then delivery, collection, remittance and compensation are four separate events (the recurring picture, step being said in yellow).
Sub-shots: #exam 0.00, #four 4.05.
#four: cod-flow-diagram as in s124 (Sender left, Addressee right); chips over #step-2 "Delivery", #step-3 "वसूली", #step-4 "Remittance"; a fourth grey stamp chip "Compensation" with scales-icon (0.4) at (960, 920) below the diagram; heading "चार अलग घटनाएँ" (60 px) y 220 (s194 end).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 5 completes "Head of the Circle, VP payment रोक सकते" |
| 4.05 | — | — | cut to #four; `color` #step-2 yellow + chip |
| 5.23 | — | — | `color` #step-3 yellow + chip |
| 6.38 | — | — | `color` #step-4 yellow + chip |
| 7.85 | — | — | `pop` Compensation chip |
| 8.65 | — | — | `fade` heading |

## s195
Continues: s194
Section label: PART 9 · COMPLAINTS AND FRAUD SAFEGUARD
Idea: …each with its own records and conditions.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | small grey record icons (invoice-sheet 0.25) `pop` under each chip (stagger 0.15) |
| 0.78 | — | — | grey line under heading "अपने records और शर्तों के साथ" (48 px); hold |

## s196
Continues: no
Section label: RECAP
Idea: the whole topic together, envelope card A (4 rows). In: fade 0.5. Framing: wide, still.
Component: recap-card. Mould: title "याद रखने वाली बातें · 1"; seal "4"; rows: 1 "COD" · pill "addressee से वसूली → sender को"; 2 "Accountable item"; 3 "Insurance" · pill "COD से नहीं"; 4 "VP / VPP · Value Payable Post" · pill "1877".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + title |
| 3.82 | — | — | row 1; 10.00 tick |
| 10.58 | — | — | row 2; 13.28 tick |

## s197
Continues: s196
Section label: RECAP
Idea: rows 3–4.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3; 3.02 tick |
| 3.68 | — | — | row 4; 9.56 `pop` "1877" pill; 11.76 tick |

## s198
Continues: no
Section label: RECAP
Idea: envelope card B (6 rows): agreement; limits. In: cut (same envelope, new rows). Framing: wide, still.
Component: recap-card. Mould: title "याद रखने वाली बातें · 2"; seal "6"; six rows (48 px English, 44 px Hindi): 1 "Agreement" · pill "हर COD customer"; 2 "Retail ₹10,000 · Contractual ₹50,000" · pill "per item"; 3 "Contractual COD" · pill "पूरे रुपये"; 4 "Insurance" · pill "ज़रूरी नहीं · jewellery असली value पर"; 5 "CDF-2 · CDF-1" · pill "parcel पर 90 दिन"; 6 "eMO offices · Bulk VP" · pill "रोज़ ≥ 10 uninsured".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope; row 1; 3.12 tick |
| 3.28 | — | — | row 2 first part "Retail ₹10,000" |
| 7.08 | — | — | row 2 adds "· Contractual" |

## s199
Continues: s198
Section label: RECAP
Idea: row 2 completes; row 3; row 4 starts.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 2 "₹50,000" + pill; 2.00 tick |
| 2.24 | — | — | row 3; 5.68 tick |
| 5.98 | — | — | row 4 "Insurance · ज़रूरी नहीं" |

## s200
Continues: s199
Section label: RECAP
Idea: row 4 completes (jewellery); row 5.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 4 pill adds "jewellery असली value पर"; 3.90 tick |
| 4.16 | — | — | row 5; 11.28 tick |

## s201
Continues: s200
Section label: RECAP
Idea: row 6.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 6 "eMO offices" |
| 3.60 | — | — | row 6 adds "· Bulk VP" + pill; 8.62 tick |

## s202
Continues: no
Section label: RECAP
Idea: envelope card C (4 rows): APO; fee. In: cut (same envelope, new rows). Framing: wide, still.
Component: recap-card. Mould: title "याद रखने वाली बातें · 3"; seal "4"; rows: 1 "APO" · pill "VP articles / money orders नहीं"; 2 "COD fee" · pill "≤ 6,500: 1.6% · ऊपर: ₹100 + 1%"; 3 "₹5,000 → ₹80 · ₹20,000 → ₹235"; 4 "दो प्रयास · POD ₹10".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope; row 1; 4.32 tick |
| 4.70 | — | — | row 2; 13.52 tick |

## s203
Continues: s202
Section label: RECAP
Idea: rows 3–4.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3; 3.94 tick |
| 5.88 | — | — | row 4; 9.38 tick |

## s204
Continues: no
Section label: RECAP
Idea: envelope card D (5 rows): money routes, retention, complaints, fraud. In: cut (same envelope, new rows). Framing: wide, still.
Component: recap-card. Mould: title "याद रखने वाली बातें · 4"; seal "5"; rows: 1 "ePayment / eMO" · pill "Contractual / COD Retail"; 2 "VP article" · pill "7 दिन · 8वें दिन वापसी"; 3 "Extension" · pill "7 दिन तक · लिखित application + fee"; 4 "Complaint (item न मिला)" · pill "15 दिन बाद · 60 दिन के अंदर"; 5 "Head of the Circle" · pill "payment रोक सकते".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope; row 1; 5.74 tick |
| 6.04 | — | — | row 2; 9.26 tick |
| 10.36 | — | — | row 3 |

## s205
Continues: s204
Section label: RECAP
Idea: row 3 completes; row 4.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 3 pill; 2.68 tick |
| 3.36 | — | — | row 4; 8.88 tick |

## s206
Continues: s205
Section label: RECAP
Idea: row 5.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 5 |
| 4.42 | — | — | row 5 tick; hold |

## s207
Continues: no
Section label: RECAP
Idea: the close: one amount written right at the counter and the same amount honestly taken at the door build trust in COD. In: fade 0.6. Framing: wide, slow push-in to 1.04 by the end (held; last scene).
Layout: left: booking-counter scale 1.1 at (480, 760) with a white slip on its ledge lettered "₹" and a red underline; right: a drawn front door (sand, ink, 360×560) at (1440, 760) base with parcel-icon (0.6) and rupee-coin (0.7) in front; thin ink line between the two at y 800 with the same "₹" chip at both ends. Bottom stamp band y 860–980: "यही COD पर भरोसा बनाता है" (60 px white on red).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide → 1.04 by 9.44 | — | counter + slip |
| 1.72 | — | — | `underline` slip ₹ |
| 2.70 | — | — | door + parcel `fade` |
| 5.40 | — | — | `pop` coin; `draw` the connecting line |
| 8.08 | — | — | `reveal` stamp band; hold |

