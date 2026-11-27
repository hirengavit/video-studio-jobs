# Storyboard: Retail and citizen services at the post office (Postal Exams, Hindi)

No character, no rigs. Calm annotated slides in the kit's colours: cream canvas #fbf7ee, ink #2b2622, postal red cards, yellow only for highlights, green only for correct/allowed, slate + strike for wrong. Kit denies: smear, ticker, scatter, spin, float, wiggle, shake, bounce, flip, letters. Transitions: cut (same layout / same part), fade (new part, recap), wipe (`{"from":"right"}`, change of topic inside a part).

## Shared

**Series tag:** PRODUCTS (top-right pill, every scene, never animated).

**Section labels** (top-left, English, change only with the part):
- s001–s010: `RETAIL & CITIZEN SERVICES`
- s011–s038: `PART 1 · RETAIL POST`
- s039–s041: `RECAP · PART 1`
- s042–s070: `PART 2 · AADHAAR`
- s071–s072: `RECAP · PART 2`
- s073–s098: `PART 3 · AADHAAR FEES`
- s099–s115: `PART 4 · POPSK`
- s116–s118: `RECAP · PARTS 3–4`
- s119–s138: `PART 5 · CSC & RETAIL`
- s139–s164: `PART 6 · JEEVAN PRAMAAN`
- s165–s167: `RECAP · PARTS 5–6`
- s168–s190: `PART 7 · GANGAJAL & PRASADAM`
- s191–s202: `PART 8 · DAK GHAR NIRYAT KENDRA`
- s203–s205: `RECAP · PARTS 7–8`
- s206–s211: `PART 9 · DAK CHAUPAL`
- s212–s229: `KEY POINTS`
- s230: `RETAIL & CITIZEN SERVICES`

**Safe area:** the app's header (label + pill) owns y 0–130. Content lives in x 100–1820, y 160–1000, even margins.

**Set `citizen-counter`** (new, the recurring picture): a simple ink post-office counter window, 3 px ink, rounded ends. Built from `counter-window`. Pieces: a sand (#f3ead6) counter top across the lower frame (x 160–1760, top edge y 760, front face to y 860, ink outline); above it, centred, a white-framed window opening 640×400 (x 640–1280, y 330–730) with a thin cream glass panel, a small half-round speaking hole at its bottom edge and a sill (y 730); a blank postal-red sign board above the window (x 700–1220, y 200–290) for the scene's words. No logo, no lettering in the piece. Spots: `window` [960, 700] (a part's icon rests on the inner sill, centred in the glass), `sign` [960, 245] (centre of the sign board, for text), `counter-left` [470, 760], `counter-right` [1450, 760], `counter-centre` [960, 760]. Framings: `wide` (zoom 1), `medium` (zoom 1.3 on the window), `close` (zoom 1.7 on the window). Used for the opening hook, the intro's nine-part list, and each part's opener, where that part's icon rests in the window (`place` on spot `window`) and the part title is on the sign:
- Part 1: `invoice-calendar-icon` (bill with rupee; reuse) · Part 2–3: `id-card-icon` (new) · Part 4: `passport-icon` (reuse) · Part 5: `system-screen-icon` (reuse) · Part 6: `pensioner-phone-icon` (new) · Part 7: `gangajal-bottle` (new) with `temple-bell-parcel` (new) · Part 8: `globe-parcel` (new) · Part 9: `mobile-post-van` (reuse; rests on `counter-centre`, too big for the window).

**New pieces** (flat ink icons, 3 px ink, kit colours, no lettering):
- `counter-window`: the window + sign board + counter top above, as one piece (1920×1080 viewBox, real size). Anchors: base, top, window, sign. Scenes: set citizen-counter.
- `id-card-icon`: a plain white ID card 360×230, red top strip, grey photo box at left (simple bust silhouette), three grey lines, a small square QR-like block bottom right; never an Aadhaar design or emblem. Anchors: base, top, grip. Parts: #card, #strip, #photo, #lines, #qr.
- `pensioner-phone-icon`: an old man's head-and-shoulders silhouette in ink (white hair, glasses, simple, no face detail) beside a phone 140×260 with a green tick on its screen. 400×400. Anchors: base. Parts: #pensioner, #phone, #tick.
- `fingerprint-scanner`: a slate fingerprint scanner (rounded box 260×160, glass oval with a drawn fingerprint whorl in ink), cable stub. Anchors: base, top. Parts: #body, #glass, #print.
- `gangajal-bottle`: a clear plastic bottle 120×300 with a pale blue water level (#cfe3ee fill, ink outline), red cap, a blank white label band. Anchors: base, top, grip. Parts: #bottle, #water, #cap, #label.
- `temple-bell-parcel`: a brass temple bell (#d9a514 with ink) hanging over a small brown-paper parcel tied with string. 400×400. Anchors: base. Parts: #bell, #parcel.
- `globe-parcel`: a parcel 280×200 with a round globe tag (meridian lines in ink, pale blue) tied to it. Anchors: base, top. Parts: #parcel, #tag, #globe.
- `phone-sms`: a phone 220×420, cream screen with a white chat bubble (blank grey lines) and a small speech-tail; for SMS / app moments. Anchors: base, screen. Parts: #phone, #screen, #bubble.
- `temple-icon`: a simple ink temple outline (shikhara spire, flag, steps), sand fill, 320×360, no specific real temple. Anchors: base. Parts: #temple, #flag.

**Library pieces reused:** `invoice-calendar-icon`, `passport-icon`, `system-screen-icon`, `mobile-post-van`, `regulations-book` (Act/Rules/Regulations book stack), `icon-circle-office` (Circle Head), `offer-leaflet` (Direct Post), `passbook` (Dak Chaupal), `india-outline-map` (POPSK network, Gujarat pin by approximate position; no state lines), `registration-envelope` (registration definition), `invoice-sheet` (tax invoice / acknowledgement / PBE form), `system-screen-icon` also for portals (myAadhaar, Digital Sewa, DNK portal, Passport Seva) with its name typed on the screen.

**Drawn in scenes (not pieces):** document cards, stamp-edge term cards, postmarks, pills, tables, envelopes for recaps, ticks and crosses.

**Components** (starting points, moulded per scene): `chapter-title` (part openers when not on the counter), `key-term`, `rule-card` / `quote-card` (Act s.3, Rules 3/4/2(1)(c), Reg. 105/104/174(3)), `compare-cards` (e-Payment vs Retail Post), `exam-trap` (every "trap" line), `myth-fact`, `step-list` (operator's 5 steps, POPSK 5 steps), `timeline` (POPSK and CSC dates), `big-number` (13,352 · 452 · 1,013), `compare-table` (Aadhaar update types, fees, Gangajal prices, Prasadam e-MO, PBE grid), `cause-chain` / `mail-flow` (DLC flow, ONDC Click & Book), `mind-map` (what Retail Post covers, Dak Chaupal), `glossary-list` (PoI/PoA/PoR/PDB), `recap-card` (all recaps).

**Real photos** (library first; each scene must also work drawn if the photo is missing): `photo:post-office-counter-scale` (opening), `photo:india-post-letter-box-cutout` (close), `photo:india-post-parcel-cutout` (Speed Post delivery moments), `photo:postman-delivering-parcel-cutout` (doorstep DLC, Prasadam by Speed Post; no face prominent), `photo:printed-invoice-bill` (bills / e-Payment), `photo:speed-post-barcode-label-cutout` (registration), `photo:india-post-delivery-van-cutout` (Dak Chaupal), `photo:business-mailroom` / `photo:parcel-sorting-hub` (DNK export). New ones are in materials.json: `aadhaar-enrolment-kit`, `passport-seva-kendra-sign`, `fingerprint-scanner-device`, `gangajal-bottles-photo`, `mobile-phone-qr-payment`, `gangotri-bhagirathi`, `somnath-temple`, `kashi-vishwanath-temple`. All photos as paper cut-outs (white border, `url(#vs-cutout)` or a white frame + soft shadow, tilt 1–2°) with a small grey caption, unless a scene says otherwise. No photos of identifiable people.

## Continuity

- No character, so continuity is layout: each **part opener** is the citizen-counter set (wide → medium push-in on the window icon); the cards that follow cut in (`cut` while one card holds across scenes, `wipe` from right to a new card within a part, `fade` into a new part and into each recap).
- Long cards hold across scenes: a document card or table that the voice keeps explaining carries over with `Continues: sNNN`; the next scene starts on its exact last frame (same positions, highlights already made stay).
- Screen direction: flows and timelines run left → right; "wrong" on the left/top struck in slate, "right" on the right/bottom in green.
- Same colour meanings in every scene: e-Payment and Retail Post are both neutral cards (e-Payment always with a postal-red header band, Retail Post always with a yellow header band, as in compare-cards); green and slate appear only when one option is right or wrong.
- Recap envelopes look identical each time (same envelope, same row style, ticks green as said, one-second hold after the last keyword).
## s001
Continues: no
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: wide, slow push 1.0→1.05 (camera ends: returns, next is a cut)
Idea: the hook: a real post-office counter seen through our counter window, the topic title already up. Photo: post-office-counter-scale — fitted inside the window glass (600×360, white border, tilt 1°, grey caption); if missing, `invoice-calendar-icon` rests on spot `window`.
Layout: set citizen-counter. Sign: "POST OFFICE" white 48px. Left column x 120–600: "Retail &" / "Citizen" / "Services" bold ink 72px (y 360–520), Hindi "खुदरा और" / "नागरिक सेवाएँ" red 44px (y 580–640). Right column x 1320–1800: "Post Office" / "Act, 2023" bold 56px (y 360–430), "डाकघर अधिनियम, 2023" 40px (y 490); `regulations-book` (scale 0.55, panel lettered "ACT 2023") on spot counter-right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set, photo, sign, English title already on screen |
| 0.50 | push to 1.05 by 10.0 | — | `fade` Hindi title |
| 2.50 | — | — | `highlight` "Retail &" |
| 3.62 | — | — | `highlight` "Citizen Services" lines |
| 5.58 | — | — | `place` #act-book on counter-right |
| 6.70 | — | — | `type` "Post Office Act, 2023"; 7.20 `fade` its Hindi |

## s002
Continues: no
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: static (camera ends: returns)
Idea: the three legal sources as three document cards; then "not only mail" with the word "only" struck.
Layout: three white cards (#ead9a8 border) 500×340, x 120–620 / 710–1210 / 1300–1800, y 200–540: Georgia 48px two lines, Hindi 40px beneath, source year grey. Card 1 "Post Office / Act, 2023" "डाकघर अधिनियम"; card 2 "Post Office / Rules, 2024" "डाकघर नियम"; card 3 "Post Office / Regulations, 2024" "डाकघर विनियम". Sand panel x 120–1800, y 640–960: grey label "पूरी तस्वीर, दो lines में" 40px (y 700); drawn ink envelope (180×120) at x 300; Hindi line "सिर्फ डाक लेना और बाँटना" 56px at x 520, y 840.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | card 1 (Act) on screen, as s001 ended |
| 1.82 | — | — | `slide` card 2 from right; 2.32 `fade` its Hindi |
| 2.72 | — | — | `slide` card 3 from right; 3.22 `fade` its Hindi |
| 4.11 | — | — | `pop` sand panel + `fade` label |
| 7.01 | — | — | `draw` envelope; `type` Hindi line |
| 7.39 | — | — | `strike` words "सिर्फ" (slate) |

## s003
Continues: no
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: static
Idea: the three jobs of the counter, as three labelled icons (THE TRIO, reused in s004–s006).
Layout: three white cards 500×540, x 120–620 / 710–1210 / 1300–1800, y 230–770; icon top (centre y 400, ~240 px), Hindi verb 56px red (y 600), Hindi line 40px grey (y 680). Card 1: drawn parcel with a red price tag "₹" — "बेचना" / "दूसरों के products". Card 2: `invoice-calendar-icon` — "जमा करना" / "दूसरों के bills". Card 3: `id-card-icon` — "मदद करना" / "सरकारी सेवाएँ".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | card 1 frame with its parcel icon |
| 0.98 | — | — | `fade` "दूसरों के products" |
| 1.28 | — | — | `words` "बेचना" |
| 3.60 | — | — | `pop` card 2, `draw` bill icon; 3.80 `words` "जमा करना" |
| 4.22 | — | — | `fade` "दूसरों के bills" |
| 5.42 | — | — | `pop` card 3, `draw` ID card; 6.02 `fade` "सरकारी सेवाएँ" |
| 8.02 | — | — | `words` "मदद करना" |

## s004
Continues: s003
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: static
Idea: every service has its own body, rules and charge; so one question comes first.
Layout: trio cards as s003 (y 230–770). Sand band x 120–1800, y 820–960: three pills (white, ink 3 px) centred x 420 / 860 / 1300: "अपनी संस्था" · "अपने नियम" · "अपना charge" Hindi 44px; red round badge "?" 90 px at x 1680.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | trio as s003 ended |
| 1.06 | — | — | `pop` sand band + pill "अपनी संस्था" |
| 2.68 | — | — | `pop` pill "अपने नियम" |
| 4.38 | — | — | `pop` pill "अपना charge" |
| 6.53 | — | — | `pop` red "?" badge |
| 7.57 | — | — | `pulse` "?" badge |

## s005
Continues: no
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: static
Idea: the key question, answered by the same trio as three labelled options.
Layout: question y 200–280: "Counter पर असल में काम क्या है?" red bold 56px, centred. Trio as three circle tiles (white, r 150) centred x 420 / 960 / 1500, y 500, same icons as s003 (parcel-tag, `invoice-calendar-icon`, `id-card-icon`). Labels under each (y 720–800) Hindi 48px: "कुछ बिक रहा है?" · "किसी और के लिए जमा?" · "सरकारी सेवा में मदद?"
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | `words` question (gap 0.25), first word visible at 0 |
| 3.56 | — | — | `pop` tile 1 + `draw` parcel-tag |
| 4.06 | — | — | `fade` label 1 |
| 5.94 | — | — | `pop` tile 2 + `draw` bill icon |
| 6.48 | — | — | `fade` label 2 |
| 9.24 | — | — | `pop` tile 3 + `draw` ID card |
| 9.84 | — | — | `fade` label 3 |

## s006
Continues: s005
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: shot 1 static; shot 2 set citizen-counter wide
Idea: name the job and the service name follows; then the nine parts start building on the counter.
Sub-shots: #trio @ 0.00, #parts @ 5.86.
Layout: #trio = s005 plus a red stamp-edge chip under each label (y 860–960): "Retail Post" / "e-Payment" / "Citizen services" bold 44px, Hindi 34px beneath ("खुदरा डाक", "ई-भुगतान", "नागरिक सेवाएँ"). #parts = set: sign "नौ हिस्से" white 48px; left panel tiles 220×200 at (130,320) (390,320) (130,540) (390,540), right panel (1310,320) (1570,320) (1310,540) (1570,540), each a white tile with red disc numeral 44px and its part icon (~150 px); caption on counter front centred y 815 English bold 56px, Hindi 40px grey at y 910.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s005's last frame |
| 3.34 | — | — | `slide` three chips up (stagger 0.2); 3.84 `fade` Hindi |
| 5.86 | wide | — | cut to #parts: empty set |
| 6.68 | — | — | `type` sign "नौ हिस्से" |
| 7.90 | — | — | `pop` tile 1 (bill icon); `place` `invoice-calendar-icon` on spot window |
| 9.96 | — | — | `type` caption "Retail Post & e-Payment"; 10.46 `fade` "कानूनी आधार · खुदरा डाक · ई-भुगतान" |

## s007
Continues: s006
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: wide (set citizen-counter)
Idea: parts 2 and 3 join the list.
Layout: as s006 #parts. Window icons change with `swap` (new element each part).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | s006's last frame (tile 1, bill in window, Part 1 caption) |
| 1.34 | — | — | `pop` tile 2 (`id-card-icon`); window `swap` to `id-card-icon` |
| 1.82 | — | — | caption `swap` to "Aadhaar: enrolment, update, forms"; 2.32 Hindi `swap` "आधार नामांकन · अद्यतन · forms" |
| 5.68 | — | — | `pop` tile 3 (`id-card-icon` with a drawn ₹ coin) |
| 6.42 | — | — | window `swap` to ID card + ₹ coin; caption `swap` "Aadhaar fees"; 6.92 Hindi `swap` "fees · free सेवाएँ · घर पर सेवा" |

## s008
Continues: s007
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: wide (set citizen-counter)
Idea: parts 4 and 5.
Layout: as s006 #parts.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | s007's last frame (tiles 1–3) |
| 1.24 | — | — | `pop` tile 4 (`passport-icon`); window `swap` to `passport-icon` |
| 1.90 | — | — | caption `swap` "Post Office Passport Seva Kendra"; 2.40 Hindi `swap` "डाकघर पासपोर्ट सेवा केंद्र" |
| 4.80 | — | — | `pop` tile 5 in right panel (`system-screen-icon`); window `swap` to screen |
| 5.52 | — | — | caption `swap` "Common Service Centre"; 6.02 Hindi `swap` "सामान्य सेवा केंद्र" |
| 7.76 | — | — | Hindi `swap` "सामान्य सेवा केंद्र · दूसरी retail सुविधाएँ" |

## s009
Continues: s008
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: wide (set citizen-counter)
Idea: parts 6 and 7.
Layout: as s006 #parts. Tile 7 shows `gangajal-bottle` only; the window holds `gangajal-bottle` beside `temple-bell-parcel` (both scale ~0.45, base on the sill).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | s008's last frame (tiles 1–5) |
| 1.34 | — | — | `pop` tile 6 (`pensioner-phone-icon`); window `swap` to it |
| 1.90 | — | — | caption `swap` "Jeevan Pramaan" |
| 3.32 | — | — | caption `swap` "Jeevan Pramaan · Digital Life Certificate"; 3.82 Hindi `swap` "डिजिटल जीवन प्रमाण पत्र" |
| 6.20 | — | — | `pop` tile 7 (bottle); window `swap` to bottle + bell parcel |
| 6.70 | — | — | caption `swap` "Gangajal & Prasadam" |
| 8.12 | — | — | Hindi `swap` "गंगाजल और प्रसाद" |

## s010
Continues: s009
Section label: RETAIL & CITIZEN SERVICES
In: cut · Framing: wide (set citizen-counter)
Idea: parts 8 and 9; the list is complete: the right service for every need.
Layout: as s006 #parts. Part 9: `mobile-post-van` (scale 0.5) rests on spot counter-centre in front of the window; no tile.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | s009's last frame (tiles 1–7) |
| 0.84 | — | — | `pop` tile 8 (`globe-parcel`); window `swap` to globe-parcel |
| 1.74 | — | — | caption `swap` "Dak Ghar Niryat Kendra"; 2.24 Hindi `swap` "डाक घर निर्यात केंद्र" |
| 4.78 | — | — | `place` van on counter-centre (red disc "9" on its #sign) |
| 5.76 | — | — | caption `swap` "Dak Chaupal"; 6.26 Hindi `swap` "डाक चौपाल" |
| 7.78 | — | — | sign `swap` to "हर ज़रूरत, सही सेवा" |
| 8.98 | — | — | `pulse` sign |

## s011
Continues: no
Section label: PART 1 · RETAIL POST
In: fade · Framing: wide → medium on the window, then sub-shot (camera returns: #act is static)
Idea: Part 1 opens on the counter: the bill icon in the window, the Act on the counter; then Section 3 of the Act. Component: rule-card — label "SECTION · धारा", number 3, "Post Office Act, 2023" / "डाकघर अधिनियम"; drop the postmark and chips.
Sub-shots: #open @ 0.00, #act @ 4.38.
Layout: #open = set: `invoice-calendar-icon` on spot window, sign "Retail Post" white 52px, counter front "कानूनी आधार · Retail Post · e-Payment" Hindi 40px; `regulations-book` (scale 0.55, panel "ACT 2023") on counter-left. #act = stamp x 120–620, y 200–900; white document card x 680–1800, y 200–900: Georgia 52px "Services prescribed by the Central Government." (y 420–560), source grey 30px "Post Office Act, 2023 · Section 3" (y 640), "सार (gist)" 32px label + "post office वो services देगा जो Central Government तय करे" 40px (y 740–840).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set with icon, sign, counter line |
| 0.38 | medium by 2.0 | — | — |
| 1.48 | — | — | `place` act-book on counter-left |
| 4.38 | static | — | cut to #act: stamp + empty card |
| 4.72 | — | — | `pop` "3" |
| 6.38 | — | — | `reveal` Georgia text + source |
| 9.62 | — | — | `highlight` "Central Government" |
| 10.52 | — | — | `fade` gist |

## s012
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: Rule 3 counts three kinds of services; the first one. Component: quote-card — three numbered Georgia lines, red postmark "RULE 3", a sand gist panel.
Layout: white card x 120–1800, y 180–960, #ead9a8 border, red top edge. Source label red 36px "Post Office Rules, 2024 · Rule 3" (y 240); postmark r 70 at (1680, 270). Lines Georgia 44px from x 260 at y 400 / 520 / 640 with red discs 1–3 at x 200. Line 1: "Citizen-centric services authorised by the Central Government". Gist panel y 760–920: "सार (gist)" 32px grey; keywords 40px x 400 / 900 / 1400.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | card, label and postmark |
| 3.06 | — | — | `pop` discs 1–3 (stagger 0.15) |
| 5.46 | — | — | `pulse` disc 1 |
| 6.48 | — | — | `reveal` line 1 |
| 7.94 | — | — | `highlight` "authorised" |
| 9.82 | — | — | `highlight` "Citizen-centric"; `pop` gist panel + `fade` keyword 1 "केंद्र सरकार" |

## s013
Continues: s012
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: kinds two and three on the same Rule 3 card, the highlight moving down.
Layout: as s012. Line 2: "Services offered by State or Local Governments". Line 3: "Services through collaboration with public or private entities".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s012's last frame (line 1, its highlights, gist 1) |
| 1.20 | — | — | `reveal` line 2 |
| 2.38 | — | — | `highlight` "State or Local Governments" |
| 3.72 | — | — | `fade` keyword 2 "राज्य / स्थानीय सरकार" |
| 5.06 | — | — | `reveal` line 3 |
| 6.30 | — | — | `highlight` "public or private" |
| 7.34 | — | — | `fade` keyword 3 "public / private साझेदारी" |

## s014
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: Rule 4: the Director General introduces, modifies, discontinues products and makes collaborations. Component: rule-card — label "RULE · नियम", number 4, "Post Office Rules, 2024" / "डाकघर नियम"; no postmark, no chips.
Layout: stamp x 120–560, y 200–920. Document card x 620–1800, y 200–920: term "Director General" bold 64px (y 290), "महानिदेशक" 40px (y 350); Georgia 44px "may introduce, modify or discontinue products" (y 480) and "and enter into collaborations." (y 560); source grey 30px "Post Office Rules, 2024 · Rule 4" (y 640); gist y 720–860.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | stamp with "4" and empty card |
| 0.72 | — | — | `type` "Director General"; 1.26 `fade` "महानिदेशक" |
| 1.74 | — | — | `reveal` Georgia line 1 + source |
| 2.84 | — | — | `highlight` words "introduce" |
| 4.80 | — | — | `highlight` words "modify" |
| 6.52 | — | — | `highlight` words "discontinue" |
| 9.54 | — | — | `reveal` line 2; 9.80 `highlight` "collaborations" |
| 11.26 | — | — | `fade` gist: "सार (gist): products शुरू, बदलना, बंद करना; collaborations भी — Director General" |

## s015
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: the term Retail Post, Regulation 105: the post office offers its own products and services. Component: key-term — drop the exam pill and the chain.
Layout: red stamp-edge term card x 120–820, y 200–760: kicker "Post Office Regulations, 2024" pale yellow 32px, "Retail Post" white bold 96px, "खुदरा डाक" pale yellow 48px; postmark "REG. 105" at its lower right. White meaning card x 880–1800, y 200–760: heading "लोगों की सुविधा के लिए" red 48px (y 280); row 1 (y 420) drawn post-box icon + "अपने products और services" 44px; row 2 (y 580) reserved.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | term card with kicker; empty meaning card |
| 0.18 | — | — | `type` "Retail Post"; 0.68 `fade` "खुदरा डाक" |
| 1.98 | — | — | `stamp` postmark "REG. 105" |
| 4.56 | — | — | `fade` heading "लोगों की सुविधा के लिए" |
| 6.52 | — | — | `draw` post-box icon; `fade` row 1 |
| 8.34 | — | — | `highlight` "अपने" |

## s016
Continues: s015
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: and other bodies' products too: departmental and third-party.
Layout: as s015, plus row 2 (y 580): drawn building icon + "दूसरी संस्थाओं के भी" 44px. Band x 120–1800, y 800–960: two white stamp-edge chips 800 wide: "Departmental" bold 56px / "विभागीय" 40px (x 120–900) and "Third-party" bold 56px / "तीसरे पक्ष के" 40px (x 1020–1800).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s015's last frame |
| 0.54 | — | — | `draw` building icon; `fade` row 2 |
| 3.18 | — | — | `pulse` "Retail Post" |
| 4.76 | — | — | `slide` chip "Departmental" up; 5.26 `fade` Hindi |
| 6.52 | — | — | `slide` chip "Third-party" up; 7.02 `fade` Hindi |
| 8.20 | — | — | `underline` "products और services" in row 1 |

## s017
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: a third-party product belongs to another body; the post office is only the authorised way to sell or give it.
Layout: title "Third-party product" bold 64px (y 220), "तीसरे पक्ष का product" 40px (y 285). Left card x 160–820, y 380–900: drawn company building (sand, ink, no lettering) + "दूसरी संस्था" 48px red + "product इसका है" 40px. Red arrow x 860–1060 (y 640). Right card x 1100–1760: small drawn counter window + "Post office" bold 56px + "बस authorised रास्ता" 44px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | title on screen |
| 0.50 | — | — | `fade` title Hindi |
| 2.56 | — | — | `pop` left card, `draw` building |
| 3.02 | — | — | `fade` "दूसरी संस्था" + "product इसका है" |
| 4.36 | — | — | `draw` arrow; `pop` right card, `draw` counter |
| 5.62 | — | — | `fade` "Post office" + "बस authorised रास्ता" |
| 7.54 | — | — | `highlight` words "authorised" |

## s018
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: Regulation 105's four points on one document card, held to s021 with the highlight moving through. Component: quote-card — four numbered points, no postmark.
Layout: white card x 100–1220, y 170–940: red label 34px "Post Office Regulations, 2024 · Reg. 105 Retail Post" (y 220); four rows from y 300, 150 each, red disc + Georgia 36px (wraps to two lines) + Hindi keyword 34px grey. Source grey 28px beneath card (y 975). Right column x 1270–1820: `regulations-book` (scale 0.5, panel "REGULATIONS 2024") y 180–380; space y 420–960 kept for Circle Head (s019).
Point 1: "Departmental products: by administrative instructions" / "विभागीय products: प्रशासनिक निर्देश".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | card with label and source; book |
| 0.40 | — | — | `pop` discs 1–4 (stagger 0.15) |
| 2.60 | — | — | `reveal` point 1 |
| 4.82 | — | — | `highlight` "administrative instructions" |
| 6.76 | — | — | `fade` keyword 1 |

## s019
Continues: s018
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: points 2 and 3: third-party products by agreement; the Circle Head signs it.
Layout: as s018. Point 2: "Third-party products: by agreement with public or private sector" / "third-party: public/private से agreement". Point 3: "The Circle Head enters into agreements" / "agreement: Circle Head". Right column panel x 1270–1820, y 420–960 (white, red top band): `icon-circle-office` (scale 0.45) + "Circle Head" bold 56px + "डाक परिमंडल प्रमुख" 40px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s018's last frame |
| 0.00 | — | — | `reveal` point 2 |
| 4.50 | — | — | `highlight` "agreement"; 5.00 `fade` keyword 2 |
| 6.62 | — | — | `reveal` point 3 |
| 8.74 | — | — | `highlight` "Circle Head"; `pop` panel + `draw` building |
| 9.40 | — | — | `type` "Circle Head"; 9.90 `fade` Hindi; `fade` keyword 3 |

## s020
Continues: s019
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: point 4, then who is the Circle Head: Rule 2(1)(c) grows into the right panel.
Layout: as s019. Point 4: "Charges and conditions: by administrative instructions" / "charges, शर्तें: प्रशासनिक निर्देश". Panel's lower part (y 700–940) gets a small document inset (white, #ead9a8 border): Georgia 30px "Circle Head means the Chief Postmaster General concerned or an officer exercising those powers in the Circle." + grey 26px "Post Office Rules, 2024 · Rule 2(1)(c)".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s019's last frame |
| 0.28 | — | — | `reveal` point 4 |
| 2.98 | — | — | `highlight` "administrative instructions"; 3.48 `fade` keyword 4 |
| 6.78 | — | — | points 1, 2, 4 `color` to #6f6a63; `pulse` panel |
| 7.52 | — | — | `pop` inset + `reveal` Georgia definition + source |
| 9.38 | — | — | `highlight` words "Chief Postmaster General" |

## s021
Continues: s020
Section label: PART 1 · RETAIL POST
In: cut · Framing: static, then sub-shot
Idea: "or an officer exercising those powers"; then e-Payment, Regulation 104 begins. Component: quote-card (for #reg104) — term block + postmark.
Sub-shots: #reg105 @ 0.00, #reg104 @ 4.74.
Layout: #reg105 = s020. #reg104 = white card x 120–1800, y 170–960, red top edge: label red 34px "Post Office Regulations, 2024 · Reg. 104" (y 230); term "e-Payment" bold 88px (y 360), "ई-भुगतान" 44px (y 430); postmark r 70 at (1680, 300); Georgia lines y 540 / 650 (s022–s023); gist panel y 760–930.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s020's last frame |
| 0.66 | — | — | `highlight` words "or an officer exercising those powers" |
| 2.68 | — | — | `underline` words "in the Circle" |
| 4.74 | static | — | cut to #reg104: card with label |
| 5.22 | — | — | `type` "e-Payment"; 5.72 `fade` "ई-भुगतान" |
| 6.66 | — | — | `stamp` postmark "REG. 104" |

## s022
Continues: s021
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: e-Payment = collecting a third party's bills or payments through the post office. Photo: printed-invoice-bill — small cut-out (220×300, white border, tilt 2°) at the card's right x 1500–1720, y 520–820; if missing, `invoice-calendar-icon` there.
Layout: as s021 #reg104. Georgia 44px line 1 (y 540, x 200–1440): "Collection of bills or other payments for a third party".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #reg104 as s021 ended |
| 1.14 | — | — | `reveal` line 1 |
| 1.78 | — | — | `highlight` "third party" |
| 2.80 | — | — | `pop` bill photo cut-out |
| 3.82 | — | — | `highlight` "bills or other payments" |
| 6.38 | — | — | `pop` gist panel + `fade` "सार (gist): third party के bills या payments, post office से जमा" |

## s023
Continues: s022
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: the body makes an agreement with the concerned postal authority; terms and fees come by administrative instructions.
Layout: as s022. Georgia line 2 (y 650): "Agreement with the concerned postal authority". Gist panel line 2 (Hindi 40px): "शर्तें और fees: administrative instructions से".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s022's last frame |
| 0.00 | — | — | `reveal` line 2 |
| 1.24 | — | — | `highlight` "concerned postal authority" |
| 2.22 | — | — | `underline` "Agreement" |
| 3.62 | — | — | `fade` gist line 2 |
| 6.42 | — | — | `highlight` words "administrative instructions" in gist line 2 |

## s024
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: the difference by example: an electricity bill collected = e-Payment. Component: compare-cards — two cards only, no labelled facts; e-Payment red band left, Retail Post yellow band right (s025).
Layout: heading "फ़र्क: एक example" red 52px (y 210). e-Payment card 760×620 starts centred x 580–1340, y 270–890: red header band (y 270–400) for "e-Payment" white 64px + "ई-भुगतान" pale yellow 34px; body: drawn bulb beside `invoice-calendar-icon` (y 450–640), "बिजली का bill जमा" 48px (y 700), pill "company के लिए collection" 40px (y 800).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | heading |
| 1.72 | — | — | `pop` card with empty band |
| 2.74 | — | — | `draw` bulb + bill icon |
| 3.88 | — | — | `fade` "बिजली का bill जमा" |
| 6.70 | — | — | `pop` collection pill |
| 8.60 | — | — | `type` "e-Payment" on band; 9.10 `fade` "ई-भुगतान" |

## s025
Continues: s024
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: a college form sold = Retail Post; both are convenience but different work.
Layout: e-Payment card moves to x 120–880; Retail Post card x 1040–1800, y 270–890: yellow header band "Retail Post" ink 64px + "खुदरा डाक" 34px; body `invoice-sheet` (scale 0.5) with a drawn ₹ tag, "college का form बेचा" 48px, pill "बिक्री" 40px. Ink "VS" disc r 50 at (960, 580). Takeaway band y 910–990: "दोनों में सुविधा, पर काम अलग" 44px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | `move` e-Payment card by [-460, 0] (soft); `slide` Retail Post card from right, band blank |
| 1.22 | — | — | `draw` form + tag; `pop` VS disc |
| 2.76 | — | — | `fade` "college का form बेचा" |
| 4.04 | — | — | `pop` pill "बिक्री" |
| 5.58 | — | — | `type` "Retail Post"; 6.08 `fade` "खुदरा डाक" |
| 7.04 | — | — | `fade` takeaway |
| 9.32 | — | — | `highlight` words "काम अलग" |

## s026
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: citizen-centric collaborations: the post office lends its network to many partners. Component: mind-map — centre stamp + four corner branches (fourth in s027).
Layout: title "Citizen-centric collaborations" bold 60px (y 200), "नागरिक-केंद्रित साझेदारी" 40px (y 260). Centre red stamp disc r 150 at (960, 600): "Post office" white 44px + "network" 36px. Branch cards 520×170: TL (120,320) "Central Government" + "Ministries · Departments" grey; TR (1280,320) "State Governments" + "राज्य सरकारें"; BL (120,780) "Local bodies" + "स्थानीय निकाय"; BR (1280,780) reserved. English 48px bold, Hindi 36px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | centre disc |
| 0.58 | — | — | `type` title; 1.18 `fade` Hindi |
| 4.18 | — | — | `pulse` centre disc |
| 4.70 | — | — | `draw` link TL; `pop` TL card |
| 5.96 | — | — | `fade` "Ministries · Departments" |
| 10.36 | — | — | `draw` link TR; `pop` TR card |
| 11.80 | — | — | `draw` link BL; `pop` BL card |

## s027
Continues: s026
Section label: PART 1 · RETAIL POST
In: cut · Framing: static, then sub-shot
Idea: public or private partners too; then Regulation 174(3): who sets the partnerships' charges and procedures.
Sub-shots: #map @ 0.00, #reg174 @ 4.72.
Layout: #map = s026 + BR card "Public / private" + "संस्थाएँ". #reg174 = white card x 120–1800, y 180–940, red label 36px "Post Office Regulations, 2024 · Reg. 174(3)" (y 240); Georgia 52px over three lines (y 400–620): "The Director General issues instructions on charges, operating procedures and accounting procedures for partnerships."; source grey 30px (y 700); gist panel y 770–910 (s028).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s026's last frame |
| 0.70 | — | — | `draw` link BR; `pop` BR card |
| 3.18 | — | — | `pulse` centre disc |
| 4.72 | static | — | cut to #reg174: card with label |
| 4.92 | — | — | `reveal` Georgia text + source |
| 5.90 | — | — | `highlight` words "charges" |
| 7.02 | — | — | `highlight` words "operating procedures" |
| 9.28 | — | — | `highlight` words "accounting procedures" |

## s028
Continues: s027
Section label: PART 1 · RETAIL POST
In: cut · Framing: static, then sub-shot
Idea: the DG issues them; then the exam trap: agreement = Circle Head, partnership instructions = Director General. Component: exam-trap — banner + two cards (no stamps), remember bar used in s029.
Sub-shots: #reg174 @ 0.00, #trap @ 2.65.
Layout: #trap: red banner x 120–1800, y 170–320: "EXAM TRAP · परीक्षा का जाल" pale yellow 32px, "यहीं confusion होता है" white 48px. Cards 820×340, y 360–700: left x 120–940 "Retail Post agreement" bold 48px / "खुदरा डाक का समझौता" 36px → arrow → "Circle Head" bold 60px / "डाक परिमंडल प्रमुख" 36px; right x 980–1800 "Partnership instructions" / "साझेदारी के निर्देश" → "Director General" / "महानिदेशक". Sand bar y 740–960 (s029).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | `highlight` words "Director General" on Reg. 174(3) |
| 1.12 | — | — | `fade` gist "सार (gist): partnerships की instructions — Director General" |
| 2.65 | static | — | cut to #trap: banner |
| 5.51 | — | — | `pop` left card, top line |
| 7.35 | — | — | `draw` arrow; `type` "Circle Head"; 7.85 Hindi |
| 8.41 | — | — | `pop` right card, top line |
| 12.59 | — | — | `draw` arrow; `type` "Director General"; 13.09 Hindi |

## s029
Continues: s028
Section label: PART 1 · RETAIL POST
In: cut · Framing: static, then sub-shot
Idea: an option pairing Retail Post agreement with the Director General is wrong; then: what does Retail Post include?
Sub-shots: #trap @ 0.00, #what @ 5.83.
Layout: #trap sand bar y 740–960: wrong option "Retail Post agreement → Director General" ink 52px (y 830), slate cross r 40 at x 1700. #what = s030's layout start: centre red stamp disc r 160 at (960, 580): "Retail Post" white bold 52px + "खुदरा डाक" 36px; question "क्या-क्या आता है?" red 52px (y 210).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s028's last frame |
| 0.00 | — | — | `pop` sand bar + `type` wrong option (cps 30) |
| 4.92 | — | — | `strike` wrong option (slate); `draw` slate cross; left card's "Circle Head" `color` to #2e7d4f |
| 5.83 | static | — | cut to #what: centre disc |
| 7.19 | — | — | `words` "क्या-क्या आता है?" |

## s030
Continues: s029
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: what Retail Post covers, branch by branch. Component: mind-map — four corner cards, a fifth bottom-centre in s031.
Layout: as s029 #what. Cards 520×170, each a small ink icon at left + text: TL (120,300) `invoice-sheet` + "Application forms की बिक्री"; TR (1280,300) drawn ticket + "Railway reservation tickets"; BL (120,620) drawn envelope with rakhi + "Rakhi envelopes"; BR (1280,620) drawn house + magnifier + "Authorised address-verification services". English bold 44px, Hindi 36px under where needed ("आवेदन फ़ॉर्म", "रेल आरक्षण टिकट", "राखी लिफ़ाफ़े", "पता सत्यापन").
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | centre disc + question |
| 0.00 | — | — | `draw` link; `pop` TL card |
| 2.16 | — | — | `draw` link; `pop` TR card |
| 4.28 | — | — | `draw` link; `pop` BL card |
| 6.22 | — | — | `draw` link; `pop` BR card |
| 7.46 | — | — | `highlight` "Authorised" |

## s031
Continues: s030
Section label: PART 1 · RETAIL POST
In: cut · Framing: static, then sub-shot
Idea: bill and tax collection too; then Retail Post as a one-stop shop at select offices.
Sub-shots: #map @ 0.00, #shop @ 4.50.
Layout: #map + bottom-centre card (680–1240, 800–960): `invoice-calendar-icon` + "Bill और tax collection". #shop: term "One-stop shop" bold 88px (y 240), "एक ही जगह सब" 44px (y 310), grey "Select post offices पर" 40px (y 380). Sand shelf x 120–1800, y 520–880 with five white tiles 300×300 at x 140 / 480 / 820 / 1160 / 1500: icon + English 40px: "Third-party products", "Bills", "Taxes", "Fees", "Application forms".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | `draw` link; `pop` bottom card |
| 1.18 | — | — | `highlight` "tax collection" |
| 4.50 | static | — | cut to #shop: sand shelf |
| 5.00 | — | — | `type` "One-stop shop"; 6.84 `fade` Hindi |
| 7.98 | — | — | `fade` "Select post offices पर" |
| 9.90 | — | — | `pop` tile 1 (parcel-tag) |
| 11.34 | — | — | `pop` tile 2 (bill) |
| 11.88 | — | — | `pop` tile 3 (₹ seal) |
| 13.06 | — | — | `pop` tile 4 (receipt) |

## s032
Continues: s031
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: forms too, all in one place; but which service you get depends on the service and the office.
Layout: as s031 #shop. Tile 5: `invoice-sheet` + "Application forms". Note band x 120–1800, y 900–990: "कौन सी service? → उस service और उस office पर निर्भर" 44px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s031's last frame |
| 0.68 | — | — | `pop` tile 5 |
| 2.80 | — | — | `underline` under the shelf (one hand-drawn line) |
| 3.80 | — | — | `pop` note band + `fade` text |
| 7.82 | — | — | `highlight` words "उस office" |
| 8.54 | — | — | `highlight` words "निर्भर" |

## s033
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: two names that sound like Retail Post; first, Media Post: advertising on postal stationery and premises.
Layout: heading "Retail Post जैसे दो नाम" red 52px (y 210). Media Post card 800×600 starts centred x 560–1360, y 280–880: red header band "Media Post" white 72px + "विज्ञापन डाक सेवा" pale yellow 36px; "advertising की service" 44px (y 520); two icons with captions (y 600–840): drawn postcard with an ad strip "postal stationery", drawn post-office wall with poster "postal premises" (English 40px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | heading |
| 0.46 | — | — | `pulse` heading |
| 4.02 | — | — | `pop` card; `type` "Media Post" |
| 4.52 | — | — | `fade` Hindi |
| 5.20 | — | — | `fade` "advertising की service" |
| 7.46 | — | — | `draw` postcard + caption |
| 9.22 | — | — | `draw` wall + caption |
| 11.34 | — | — | `highlight` "advertising" |

## s034
Continues: s033
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: Direct Post distributes unaddressed promotional material: brochures, pamphlets. Three jobs, three names.
Layout: Media Post card moves to x 120–920. Direct Post card x 1000–1800, y 280–880: red band "Direct Post" + "बिना पते की प्रचार डाक"; "बिना पते वाली प्रचार सामग्री बाँटना" 44px; two `offer-leaflet` (scale 0.6) captioned "brochures", "pamphlets". Band y 910–990: "तीन काम, तीन नाम" 44px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | `move` Media Post card by [-440, 0]; `slide` Direct Post card from right with "Direct Post" |
| 0.50 | — | — | `fade` Hindi |
| 1.06 | — | — | `fade` meaning line |
| 2.04 | — | — | `highlight` "बिना पते" |
| 5.06 | — | — | `pop` leaflet 1 + caption |
| 6.36 | — | — | `pop` leaflet 2 + caption |
| 7.48 | — | — | `fade` band |

## s035
Continues: no
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: three situations, three names.
Layout: three white cards 520×700, x 120–640 / 700–1220 / 1280–1800, y 220–920. Top: icon (y 280–480); Hindi situation 44px (y 560); red arrow down; red stamp-edge chip (y 700–880): term bold 56px + Hindi 36px. Card 1: drawn rakhi envelope, "Rakhi envelope बेचा" → "Retail Post" / "खुदरा डाक". Card 2: drawn wall with poster, "दीवार पर advertisement" → "Media Post" / "विज्ञापन डाक सेवा". Card 3: `offer-leaflet`, "बिना पते का leaflet बाँटा" → "Direct Post" / "बिना पते की प्रचार डाक".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | card 1 with its envelope |
| 1.74 | — | — | `fade` situation 1 |
| 2.58 | — | — | `draw` arrow; `stamp` chip "Retail Post" |
| 3.98 | — | — | `pop` card 2 + `draw` wall |
| 5.58 | — | — | `fade` situation 2 |
| 6.76 | — | — | `draw` arrow; `stamp` chip "Media Post" |
| 8.30 | — | — | `pop` card 3 + leaflet; 10.34 `fade` situation 3 |
| 11.30 | — | — | `draw` arrow; `stamp` chip "Direct Post" |

## s036
Continues: no
Section label: PART 1 · RETAIL POST
In: wipe from right · Framing: static
Idea: what India Post does not give (credit card) and what it does (green list begins).
Layout: heading "India Post: क्या देता है, क्या नहीं" red 52px (y 200). Left card x 120–760, y 270–880: slate header "नहीं देता" 44px; drawn credit card (slate outline) + "Credit card" bold 60px + "क्रेडिट कार्ड" 40px; slate cross. Right card x 820–1800, y 270–880: green header "देता है" 44px; rows y 380 / 540 / 720 with green tick badges: row 1 "Jan Suraksha schemes" bold 48px + "जन सुरक्षा योजनाएँ" 36px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | heading |
| 1.62 | — | — | `pop` right card + green header |
| 3.28 | — | — | `pop` left card + slate header |
| 4.82 | — | — | `draw` credit card; `type` "Credit card"; 5.32 Hindi |
| 5.60 | — | — | `strike` "Credit card" (slate); `draw` slate cross |
| 6.78 | — | — | `pop` tick 1; `type` "Jan Suraksha schemes" |
| 7.66 | — | — | `fade` Hindi |

## s037
Continues: s036
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: mutual funds and ECS are given; mutual funds only UTI.
Layout: as s036. Row 2 (y 540): "Mutual funds" bold 48px + "म्यूचुअल फंड" 36px; yellow chip right of it "सिर्फ UTI" 40px with "Unit Trust of India" grey 30px under. Row 3 (y 720): "ECS" bold 56px + "Electronic Clearance Service" 36px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s036's last frame |
| 0.00 | — | — | `pop` tick 2; `type` "Mutual funds"; 0.50 Hindi |
| 1.68 | — | — | `pop` tick 3; `type` "ECS" |
| 3.70 | — | — | `fade` "Electronic Clearance Service" |
| 7.54 | — | — | `highlight` "Mutual funds" |
| 9.22 | — | — | `pop` chip "सिर्फ UTI" |
| 11.48 | — | — | `fade` "Unit Trust of India" |

## s038
Continues: s037
Section label: PART 1 · RETAIL POST
In: cut · Framing: static
Idea: UTI funds only at designated post offices, sold by NISM or EUIN certified staff.
Layout: as s037. Sand strip x 120–1800, y 900–990 with grey lead "Mutual funds:" and three one-line white pills: "designated post offices" · "NISM / EUIN" · "certified staff" (English 40px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s037's last frame |
| 1.10 | — | — | `pop` sand strip + "Mutual funds:" |
| 2.02 | — | — | `pop` pill "designated post offices" |
| 4.06 | — | — | `pop` pill "NISM / EUIN"; `highlight` words "NISM" |
| 6.76 | — | — | `highlight` words "EUIN" |
| 8.76 | — | — | `pop` pill "certified staff" |
| 9.80 | — | — | `pulse` row 2 tick |

## s039
Continues: no
Section label: RECAP · PART 1
In: fade · Framing: static
Idea: the Part 1 recap envelope; keywords tick green as said. Component: recap-card — five rows, seal "5", title "Retail Post" on the flap.
Layout: envelope x 260–1660, y 170–990: flap V y 170–330 with "RECAP · दोहराव" pale yellow 30px + "Part 1 · Retail Post" red 44px, wax seal "5" at the V tip. Rows 120 tall from y 360: English bold 48px + Hindi 36px under (x 340); yellow fact pills 36px (x 980); green tick at x 1580. Row 1 "Retail Post" / "खुदरा डाक", pill "बेचता है". Row 2 "e-Payment" / "ई-भुगतान", pill "किसी और के लिए जमा".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | envelope, flap words and seal |
| 6.34 | — | — | `fade` row 1 term; 6.84 Hindi |
| 7.22 | — | — | `pop` pill "बेचता है"; 7.78 `draw` tick 1 (green) |
| 8.80 | — | — | `fade` row 2 term; 9.30 Hindi |
| 10.28 | — | — | `pop` pill "किसी और के लिए जमा" |
| 11.08 | — | — | `draw` tick 2 |

## s040
Continues: s039
Section label: RECAP · PART 1
In: cut · Framing: static
Idea: Circle Head for the agreement, Director General for partnership instructions; Rakhi envelope is Retail Post; wall ad begins.
Layout: as s039. Row 3 "Circle Head" / "डाक परिमंडल प्रमुख", pills "Retail Post agreement" and sand pill "partnership instructions: Director General". Row 1 gains a second pill "Rakhi envelope". Row 4 "Media Post" / "विज्ञापन डाक सेवा", pill "दीवार का advertisement".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s039's last frame |
| 0.00 | — | — | `fade` row 3 term; 0.50 Hindi; 0.78 `pop` pill "Retail Post agreement" |
| 2.30 | — | — | `draw` tick 3 |
| 5.56 | — | — | `pop` sand pill "partnership instructions: Director General" |
| 7.32 | — | — | `pop` pill "Rakhi envelope" in row 1 |
| 8.42 | — | — | `pulse` row 1 tick |
| 10.44 | — | — | `fade` row 4 term + Hindi; 10.74 `pop` pill "दीवार का advertisement" |

## s041
Continues: s040
Section label: RECAP · PART 1
In: cut · Framing: static
Idea: Media Post ticks; Direct Post completes the envelope; hold.
Layout: as s040. Row 5 "Direct Post" / "बिना पते की प्रचार डाक", pill "बिना पते का leaflet".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s040's last frame |
| 0.24 | — | — | `draw` tick 4 |
| 1.28 | — | — | `fade` row 5 term; 1.78 Hindi |
| 2.22 | — | — | `pop` pill "बिना पते का leaflet" |
| 3.78 | — | — | `draw` tick 5; hold still to the cut (1 s+) |
## s042
Continues: no
Section label: PART 2 · AADHAAR
In: fade · Framing: wide → medium (camera ends: medium; s043 is a fresh wipe)
Idea: Part 2 opens at the counter: a plain ID card rests in the window; 2017 decision, private agencies removed.
Layout: set citizen-counter. `id-card-icon` on spot `window`. Sign text "AADHAAR" (Inter bold 72, white) with "आधार" (44, pale yellow) beneath, inside the sign group. In medium view: left, round red postmark r 120 at [420, 470] "2017"; under it Hindi "भारत सरकार का फ़ैसला" (44) at [420, 640]. Right, white card 340×220 at [1500, 470]: "private agencies" (Inter bold 52) + "Aadhaar services वाली" (40).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | counter set, `place` #idcard on `window` (already resting) |
| 0.20 | medium (to 1.50, inOut) | — | `type` #sign-en "AADHAAR"; 0.70 `fade` #sign-hi |
| 1.64 | — | — | `stamp` #pm-2017 |
| 3.12 | — | — | `fade` #gov-line |
| 8.02 | — | — | `pop` #agencies-card |
| 9.10 | — | — | `strike` #agencies-name (slate #4b4f58); 9.40 `draw` #slate-cross |

## s043
Continues: no
Section label: PART 2 · AADHAAR
In: wipe from right · Framing: static, slow push {zoom 1.05} over the scene
Idea: In their place, Aadhaar Enrolment and Update Centres in banks and post offices; Department of Posts gets the mandate.
Layout: top-left slate chip at [330, 200] "private agencies" already struck (carried idea). Title x 160–1760, y 250–380: "Aadhaar Enrolment & Update Centres" (Inter bold 64) + "आधार नामांकन और अद्यतन केंद्र" (44, red) beneath. Two white cards 640×340 at x 260–900 and 1020–1660, y 420–760: left a drawn ink bank building + "banks" (Hindi line "बैंक", 44); right a small drawn post-office counter window + "post offices" / "डाकघर". Bottom strip y 800–960: red pill "Department of Posts" (56) / "डाक विभाग" (40), round red postmark "mandate" to its right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | struck chip + two empty card frames on screen |
| 0.78 | — | — | `draw` #bank-icon; 1.00 `fade` #bank-label |
| 1.94 | — | — | `draw` #po-icon; 2.26 `fade` #po-label |
| 3.16 | — | — | `type` #title-en; 3.84 `fade` #title-hi |
| 7.16 | — | — | `slide` #dop-pill from left; 7.66 `fade` #dop-hi |
| 10.60 | {zoom 1.05} | — | `stamp` #mandate-postmark |

## s044
Continues: no
Section label: PART 2 · AADHAAR
In: wipe from right · Framing: static
Idea: UIDAI runs Aadhaar; Department of Posts gives authorised enrolment and update through its network. Photo: aadhaar-enrolment-kit — paper cut-out 640×440, white border, tilt −1.5°, soft shadow, grey caption "Aadhaar enrolment kit" + credit. If missing: draw `fingerprint-scanner` beside `system-screen-icon` at the same spot.
Layout: left red stamp-edge card x 120–860, y 200–900: kicker "Aadhaar को चलाता है" (40, pale yellow); "UIDAI" (Inter bold 120, white); "Unique Identification Authority of India" (44, white, two lines); "भारतीय विशिष्ट पहचान प्राधिकरण" (40, pale yellow). Right x 960–1800: "Department of Posts" (56 bold) / "डाक विभाग" (40) at y 230; photo at [1380, 560]; two chips below y 860: green "authorised" / "अधिकृत", yellow "enrolment + update".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | red card with kicker on screen |
| 1.24 | — | — | `pop` #uidai |
| 4.50 | — | — | `type` #uidai-full; 7.12 `fade` #uidai-hi |
| 8.38 | — | — | `type` #dop-en; 8.90 `fade` #dop-hi |
| 10.44 | — | — | `fade` #kit-photo (dur 0.6) |
| 11.36 | — | — | `pop` #chip-auth |
| 11.98 | — | — | `pop` #chip-enrol; 13.40 `highlight` words "update" |

## s045
Continues: no
Section label: PART 2 · AADHAAR
In: wipe from right · Framing: static
Idea: 13,352 Aadhaar Centres; full service only at Head and Sub Post Offices. Component: big-number — number card left, breakdown card right moulded into a "where" list (no counts per row); drop the date postmark (no date given), small grey line "डाक network में".
Layout: left red stamp card x 120–820, y 200–960: "13,352" (Inter bold 150, white), "AADHAAR CENTRES" (56 white) / "आधार केंद्र" (44 pale yellow), "डाक network में" (40). Right white card x 880–1800, y 200–960 (4 rows × 170 below a header y 200–280): header "पूरी enrolment + update सेवा" (44); row 1 "Head Post Office" (56 bold) / "प्रधान डाकघर" (40) + green tick; row 2 "Sub Post Office" / "उप डाकघर" + green tick; rows 3–4 filled in s046–s047.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | red card with "डाक network में", empty white card frame with header outline |
| 1.46 | — | — | `pop` #big-num |
| 3.18 | — | — | `fade` #centres-en; 3.68 `fade` #centres-hi |
| 4.89 | — | — | `type` #full-service header |
| 7.91 | — | — | `slide` #row-ho from right; 8.40 `fade` #row-ho-hi; 8.47 `draw` #tick-ho |
| 9.47 | — | — | `slide` #row-so from right; 9.97 `fade` #row-so-hi; 10.09 `draw` #tick-so |

## s046
Continues: s045
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Branch Post Office (GDS): only mobile number and email ID update; children's enrolment via IPPB's CELC.
Layout: as s045. Row 3 (y 620–790): "Branch Post Office (GDS)" (56 bold) / "शाखा डाकघर" (40); two yellow chips right: "mobile number", "email ID" (44 bold). Row 4 (y 790–960): "IPPB · CELC" (56 bold) / "बच्चों का enrolment" (40), room for the full name beside CELC in s047.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s045 last frame |
| 0.58 | — | — | `slide` #row-bo from right; 1.08 `fade` #row-bo-hi |
| 2.26 | — | — | `pop` #chip-mobile |
| 3.94 | — | — | `pop` #chip-email |
| 6.30 | — | — | `slide` #row-celc from right (Hindi line "बच्चों का enrolment" first) |
| 8.22 | — | — | `fade` #ippb |
| 9.80 | — | — | `pop` #celc; 10.10 `highlight` #celc |

## s047
Continues: s046
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: CELC = Child Enrolment Lite Client; then "two words": enrolment makes a new Aadhaar record.
Sub-shots: #centres @ 0, #twowords @ 4.19.
Layout: #centres = s046 frame; "Child Enrolment Lite Client" (44 bold) types beside CELC in row 4. #twowords: two white term cards 780×640, x 140–920 and 1000–1780, y 240–880, red top band each. Left: "Aadhaar enrolment" (64 bold) / "आधार नामांकन" (44 red), meaning "नया Aadhaar record" (48), `id-card-icon` (scale 0.9) below with a small yellow "नया" pill. Right card frame only (filled in s048).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #centres as s046 ended |
| 0.72 | — | — | `type` #celc-full (cps 26) |
| 4.19 | — | — | cut to #twowords: both card frames already drawn, bands red |
| 5.03 | — | — | `type` #enrol-en; 5.53 `fade` #enrol-hi |
| 6.39 | — | — | `fade` #enrol-mean |
| 7.09 | — | — | `pop` #new-card (id-card-icon); 7.75 `pop` #new-pill |

## s048
Continues: s047
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Update changes an existing record; three types in a table; demographic row shows all six fields. Component: compare-table — 2 columns, 3 rows.
Sub-shots: #twowords @ 0, #table @ 3.87.
Layout: #twowords right card: "Aadhaar update" (64 bold) / "आधार अद्यतन" (44 red), meaning "पहले से बने record में बदलाव" (48), `id-card-icon` with one line yellow (changed). #table: white card x 120–1800, y 170–840: red header y 170–240 "UPDATE · अद्यतन" | "क्या बदलता है" (40); rows 200 high; left col x 140–700 (English 56 bold + Hindi 40), right col x 740–1780 chips in 2 lines of 3 (Inter 48, sand). Strip y 870–990 kept clear for s050.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | `type` #upd-en (cps 30); 0.48 `fade` #upd-hi |
| 2.30 | — | — | `fade` #upd-mean; `pop` #upd-card; 2.76 `color` #changed-line to #f2b705 |
| 3.87 | — | — | cut to #table: card + header on screen |
| 7.55 | — | — | `slide` #r1 label "Demographic update" from left; 8.05 `fade` "जनसांख्यिकीय अद्यतन" |
| 9.55 | — | — | `fade` #r1 chips {stagger 0.12}: Name · Gender · Date of birth · Address · Mobile · Email |
| 11.73 | — | — | `highlight` #chip-name; 12.41 #chip-address; 13.33 #chip-mobile |

## s049
Continues: s048
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Biometric update row (photo, 10 fingerprints, both irises); document update row (PoI, PoA).
Layout: as s048 #table. Row 2 y 440–640, row 3 y 640–840.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s048 last frame; `slide` #r2 "Biometric update" from left; 0.50 `fade` "बायोमेट्रिक अद्यतन" |
| 1.58 | — | — | `pop` #chip-photo "Photograph" |
| 2.94 | — | — | `pop` #chip-fp "10 fingerprints" |
| 4.96 | — | — | `pop` #chip-iris "Both irises" |
| 6.50 | — | — | `slide` #r3 "Document update" from left; 7.00 `fade` "दस्तावेज अद्यतन" |
| 8.20 | — | — | `pop` #chip-poi "Proof of Identity (PoI)" |
| 9.88 | — | — | `pop` #chip-poa "Proof of Address (PoA)" |

## s050
Continues: s049
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Document update ≠ demographic update: new documents do not mean name or address changed.
Layout: as s049; sand note strip y 870–990, x 120–1800: left half the wrong idea "नए documents = name या address बदला" (44, ink), right half kept for s051's correct line. The struck line's slate cross is the screen's one annotation.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s049 last frame; `draw` #outline-r3 (yellow #f2b705, 4 px) |
| 1.92 | — | — | `draw` #outline-r1 (yellow) |
| 2.88 | — | — | `pop` #ne-badge "अलग" (red pill, left margin between the outlined rows) |
| 4.06 | — | — | `reveal` #strip; 4.26 `type` #wrong-line (cps 28) |
| 6.48 | — | — | `strike` #wrong-line words "name या address बदला" (slate); 6.80 `draw` #slate-cross |

## s051
Continues: s050
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Documents only support details already recorded; then the forms screen: who it is for.
Sub-shots: #table @ 0, #forms @ 3.69.
Layout: #table: right half of strip, green "पहले से दर्ज details को support" (44) with green tick. #forms: heading x 140, y 200 "Aadhaar forms" (72 bold) / "आधार के forms" (44 red). Two pills top right, y 190–330: "Resident Indians" (52 bold) / "भारतीय निवासी" (40); "NRIs" (52 bold) / "जिनके पास India का Proof of Address" (40). Rows y 360–850 (3 × 163): red stamp badge x 140–440 "FORM 1/3/5" (64 white), Hindi age at x 500 (56). Note strip y 870–990.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #table as s050 ended |
| 0.56 | — | — | `type` #right-line (green #2e7d4f); 2.28 `draw` #green-tick |
| 3.69 | — | — | cut to #forms; 3.87 `type` #forms-title; 4.37 `fade` #forms-hi |
| 4.63 | — | — | `pop` #pill-resident; 5.13 `fade` #pill-resident-hi |
| 7.57 | — | — | `pop` #pill-nri; 8.07 `fade` #pill-nri-hi |

## s052
Continues: s051
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Form 1: 18 and above; Form 3: 5 to under 18.
Layout: as s051 #forms.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s051 last frame |
| 0.40 | — | — | `highlight` #pill-nri-hi words "Proof of Address" |
| 2.00 | — | — | `stamp` #badge-f1 "FORM 1" |
| 3.36 | — | — | `type` #age-f1 "18 साल और ऊपर" |
| 5.74 | — | — | `stamp` #badge-f3 "FORM 3" |
| 6.70 | — | — | `type` #age-f3 "5 से 18 साल से कम" |

## s053
Continues: s052
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Form 5: under 5; each form has its own category; outside it, fill the form of your own status.
Layout: as s052. Note strip y 870–990 (sand): "हर form की अपनी category · बाहर वाले: अपनी status वाला form" (44).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | `stamp` #badge-f5 "FORM 5" |
| 1.24 | — | — | `type` #age-f5 "5 साल से कम" |
| 3.48 | — | — | `pulse` #badge-f1, #badge-f3, #badge-f5 {stagger 0.15} |
| 4.16 | — | — | `reveal` #note-strip; 4.40 `type` #note-a "हर form की अपनी category" |
| 6.26 | — | — | `type` #note-b "बाहर वाले: अपनी status वाला form" |
| 7.50 | — | — | `highlight` #note-b words "अपनी status" |

## s054
Continues: s053
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: For an update the applicant says what to change and gives the existing Aadhaar number.
Sub-shots: #forms @ 0, #update @ 1.18.
Layout: #update: white card x 260–1660, y 200–940, red top band with "Aadhaar update" (64 bold, white) / "आधार अद्यतन" (40 pale yellow). Two rows below: row 1 y 420–620, red badge "1" + "applicant बताता है: क्या बदलना है" (52); row 2 y 660–880, `id-card-icon` (scale 0.6) at left + "मौजूदा Aadhaar number देता है" (52).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #forms as s053 ended |
| 1.18 | — | — | cut to #update: card and band words on screen |
| 2.48 | — | — | `pop` #badge-1; `type` #row1 (cps 26) |
| 4.92 | — | — | `highlight` #row1 words "क्या बदलना है" |
| 6.14 | — | — | `pop` #idcard-small; 6.42 `type` #row2 |
| 7.48 | — | — | `highlight` #row2 words "Aadhaar number" |

## s055
Continues: no
Section label: PART 2 · AADHAAR
In: wipe from right · Framing: static
Idea: Four short document names. Component: glossary-list — 2×2 grid, no meaning lines; each card: stamp tile icon, short name, English full name, Hindi in red.
Layout: kicker y 200: "Documents" (64 bold) / "चार short नाम" (40, red). Cards 800×300 at x 140–940 / 980–1780, y 270–570 and 590–890; each: stamp tile 160 at left (icons: ID card, house, two linked rings, calendar), short name (Inter bold 88), full name (52), Hindi (40 red). Strip y 910–990 kept for s056. PoI "पहचान का प्रमाण", PoA "पते का प्रमाण", PoR "संबंध का प्रमाण", PDB "जन्म तिथि का प्रमाण".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | kicker "Documents" on screen; 0.94 `fade` #kicker-hi |
| 2.32 | — | — | `pop` #card-poi (tile + "PoI") |
| 3.36 | — | — | `type` #poi-full; 4.22 `fade` #poi-hi |
| 5.28 | — | — | `pop` #card-poa; 6.40 `type` #poa-full; 7.28 `fade` #poa-hi |
| 8.22 | — | — | `pop` #card-por; 9.32 `type` #por-full; 10.10 `fade` #por-hi |

## s056
Continues: s055
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: PDB = Proof of Date of Birth; a document must be valid in UIDAI's list for that same purpose.
Layout: as s055; sand strip y 910–990: "Document उसी काम के लिए UIDAI की list में मान्य हो" (44) with a green tick at its right end.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s055 last frame; `pop` #card-pdb |
| 1.04 | — | — | `type` #pdb-full; 2.40 `fade` #pdb-hi |
| 3.32 | — | — | `reveal` #strip; 3.50 `type` #strip-line (cps 28) |
| 5.60 | — | — | `highlight` #strip-line words "UIDAI की list" |
| 7.64 | — | — | `draw` #strip-tick (green) |

## s057
Continues: no
Section label: PART 2 · AADHAAR
In: wipe from right · Framing: static
Idea: The operator's five steps, all on screen; the highlight starts at step 1. Component: step-list — moulded to 5 full-width rows, no closing chip; rows start grey, the current one turns ink with a soft yellow band.
Layout: title y 200: "Operator के पाँच steps" (64, red heading). Rows x 140–1780, y 270–960, 5 × 138: red round badge 1–5 at x 190, Hindi step (48) from x 290, exactly per screen-notes: 1 "काम पहचानें, सही form" · 2 "details originals से मिलाएँ, QR या online जाँच" · 3 "details और biometrics capture, applicant को दिखाएँ" · 4 "consent, signature, authentication (exception में supervisor)" · 5 "originals लौटाएँ, acknowledgement दें". Row 1 right side x 1150: sand chip "enrolment या update?" (44).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | title on screen |
| 1.80 | — | — | `pop` #badges {stagger 0.12} |
| 2.74 | — | — | `fade` #step-texts {stagger 0.12} (grey #6f6a63) |
| 4.26 | — | — | `color` #step1 to #2b2622; `highlight` #row1 (#fde9a6) |
| 6.12 | — | — | `pop` #chip-kind |
| 7.66 | — | — | `underline` #chip-kind words "update" |

## s058
Continues: s057
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Step 1 ends with the right form; step 2: match details with originals.
Layout: as s057.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s057 last frame |
| 2.30 | — | — | `highlight` #step1 words "सही form" (#f2b705) |
| 4.00 | — | — | `color` #step2 to #2b2622; `highlight` #row2 (#fde9a6); `color` #step1 to #6f6a63 |
| 5.98 | — | — | `highlight` #step2 words "originals से मिलाएँ" |

## s059
Continues: s058
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: QR or online check where possible; step 3: capture details and biometrics.
Layout: as s057.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s058 last frame |
| 1.50 | — | — | `highlight` #step2 words "QR या online जाँच" |
| 4.90 | — | — | `color` #step3 to #2b2622; `highlight` #row3 (#fde9a6); `color` #step2 to #6f6a63 |
| 6.34 | — | — | `highlight` #step3 words "biometrics capture" |

## s060
Continues: s059
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Show the entry to the applicant; step 4: consent, signature, authentication, supervisor for biometric exception.
Layout: as s057.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s059 last frame |
| 1.08 | — | — | `highlight` #step3 words "applicant को दिखाएँ" |
| 2.56 | — | — | `color` #step4 to #2b2622; `highlight` #row4 (#fde9a6); `color` #step3 to #6f6a63 |
| 3.02 | — | — | `highlight` #step4 words "consent, signature" |
| 6.88 | — | — | `highlight` #step4 words "authentication" |
| 11.42 | — | — | `underline` #step4 words "supervisor" |

## s061
Continues: s060
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Step 5: return originals, give acknowledgement; then the enrolment acknowledgement slip: enrolment number, date, time.
Sub-shots: #steps @ 0, #ack @ 8.29.
Layout: #ack: `invoice-sheet` (scale 1.8) as the slip at left, x 160–700, y 220–940; scene-drawn header text "Enrolment acknowledgement" (48 bold) / "नामांकन पावती" (40). Three fields on its rows (labels only, grey blank lines for values, no numbers): "Enrolment number" / "नामांकन संख्या", "Date" / "तारीख", "Time" / "समय" (44 bold + 36 Hindi). Right half x 900–1800 kept for s062.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #steps; `color` #step5 to #2b2622; `highlight` #row5 (#fde9a6); `color` #step4 to #6f6a63 |
| 1.12 | — | — | `highlight` #step5 words "originals लौटाएँ" |
| 3.42 | — | — | `highlight` #step5 words "acknowledgement दें" |
| 8.29 | — | — | cut to #ack: slip + header on screen |
| 10.79 | — | — | `fade` #f-enrol; `highlight` #f-enrol (yellow) |
| 12.73 | — | — | `fade` #f-date |
| 14.13 | — | — | `fade` #f-time |

## s062
Continues: s061
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: The enrolment number is for checking status; the exam trap is here.
Layout: as s061 #ack. Right: `system-screen-icon` (scale 1.1, base at [1350, 470], so it spans y ~200–470), "status" (56 bold) typed on its screen, an ink arrow from the enrolment field to it. y 500–790 on the right stays clear for s063's stamp. Red banner "EXAM TRAP · परीक्षा का जाल" (48, pale yellow, yellow triangle) x 900–1800, y 820–940.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s061 last frame; `draw` #arrow |
| 0.28 | — | — | `pop` #status-screen; 0.50 `type` #status-word |
| 1.48 | — | — | `slide` #trap-banner from right |
| 2.92 | — | — | `pulse` #trap-banner |

## s063
Continues: s062
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Key fact: Enrolment number ≠ Aadhaar number (stamp, one-second hold); then children under 5: photograph and demographic details are taken. Component: exam-trap — the key-fact stamp only.
Sub-shots: #ack @ 0, #child @ 3.16.
Layout: #ack: perforated red stamp card x 820–1800, y 500–790, between the status screen and the trap banner: "Enrolment number ≠ Aadhaar number" (64 bold white), "नामांकन संख्या, आधार संख्या नहीं" (44 pale yellow). #child: heading "5 साल से कम के बच्चे" (64, red) y 200; two cards 760×520 at x 140–900 (green edge, "लिए जाते हैं") and 1020–1780 (slate edge, "नहीं लिए जाते"), y 300–820; bottom strip y 850–990 kept for CELC.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #ack as s062 ended |
| 1.84 | — | — | `stamp` #keyfact (holds to 3.16, over 1 s after "है" at 2.30) |
| 3.16 | — | — | cut to #child: heading + both card frames and their labels |
| 5.88 | — | — | `fade` #yes-photo "Photograph" + green tick |
| 7.24 | — | — | `fade` #yes-demo "Demographic details" + green tick |

## s064
Continues: s063
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Fingerprints and iris are not taken; in CELC the parent authenticates.
Layout: as s063 #child. Slate card items "Fingerprints", "Iris" (56 bold) each with a slate cross. Bottom strip (sand) y 850–990: "Child Enrolment Lite Client (CELC)" (52 bold) / "बाल नामांकन" (36) at left; chip right x 1300: "parent authenticate" (44).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s063 last frame |
| 0.42 | — | — | `fade` #no-fp; 2.22 `fade` #no-iris |
| 2.88 | — | — | `draw` #slate-crosses {stagger 0.2} |
| 4.64 | — | — | `reveal` #celc-strip; `type` #celc-en (cps 30); 5.40 `fade` #celc-hi |
| 7.52 | — | — | `pop` #chip-parent |

## s065
Continues: s064
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Relationship proved by a document; MBU at 5, then at 15.
Sub-shots: #child @ 0, #mbu @ 3.22.
Layout: #child: second chip "रिश्ता: document से" beside the parent chip. #mbu: top card y 190–420: "Mandatory Biometric Update (MBU)" (64 bold) / "अनिवार्य बायोमेट्रिक अद्यतन" (44 red). Age track: cream line x 220–1700 at y 600; red stamp markers "5 साल" at x 640 and "15 साल" at x 1280 (Inter 64 white on red circles r 90). Area y 720–990 kept for s066.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #child as s064 ended |
| 0.84 | — | — | `pop` #chip-relation |
| 3.22 | — | — | cut to #mbu: track already drawn, top card frame on screen |
| 3.62 | — | — | `stamp` #m5 |
| 5.22 | — | — | `type` #mbu-en (cps 30); 6.80 `fade` #mbu-hi |
| 8.06 | — | — | `highlight` #mbu-en words "MBU" |
| 10.16 | — | — | `stamp` #m15 |

## s066
Continues: s065
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Photo, fingerprints and irises taken or renewed; the Aadhaar number stays the same.
Sub-shots: #mbu @ 0, #celc @ 7.46.
Layout: #mbu: chip row y 720–800 centred: "Photo" · "Fingerprints" · "Irises" (48 bold, sand); strip y 850–980: `id-card-icon` (scale 0.45) at left + "Aadhaar number वही रहता है" (52). #celc: left red stamp card x 120–820, y 200–700: "CELC" (Inter bold 140 white); right white card x 880–1800, y 200–700 header "किससे होता है" (44).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #mbu; `pop` #c-photo |
| 0.36 | — | — | `pop` #c-fp; 1.53 `pop` #c-iris |
| 2.97 | — | — | `highlight` #chip-row (#fde9a6) |
| 4.88 | — | — | `pop` #same-card; 5.09 `type` #same-line |
| 5.95 | — | — | `highlight` #same-line words "वही" |
| 7.46 | — | — | cut to #celc: both cards on screen; `pop` #celc-big |

## s067
Continues: s066
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: CELC's full name; done through IPPB, selected post offices and postal staff. Component: key-term — red card + meaning card.
Layout: as s066 #celc. Under "CELC": "Child Enrolment Lite Client" (48 white, two lines), "बाल नामांकन" (40 pale yellow). Right card rows (3 × 150): "IPPB" (56 bold) / "इंडिया पोस्ट पेमेंट्स बैंक" (40); "चुने हुए post offices" (48); "postal staff" (48). Area y 740–960 kept for s068.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s066 last frame; `type` #celc-full (cps 28) |
| 1.88 | — | — | `fade` #celc-hi |
| 3.44 | — | — | `slide` #row-ippb from right; 3.94 `fade` #ippb-hi |
| 4.80 | — | — | `slide` #row-po from right |
| 7.16 | — | — | `slide` #row-staff from right |

## s068
Continues: s067
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: CELC does child enrolment and Aadhaar mobile number update; a limited facility; not every BO does every update. Component: myth-fact (for #limited).
Sub-shots: #celc @ 0, #limited @ 5.14.
Layout: #celc: two yellow chips y 760–900: "बच्चों का enrolment" (48) x 140–860, "Aadhaar mobile number update" (48) x 900–1800. #limited: sand bar y 170–270 "ये सीमित सुविधा है" (56, red). Myth card x 140–1780, y 300–560, slate "MYTH · भ्रम" pill: "हर Branch Post Office पर हर update" (56). Fact card y 600–960 (s069).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #celc as s067 ended |
| 1.08 | — | — | `pop` #chip-child |
| 2.38 | — | — | `pop` #chip-mobile |
| 5.14 | — | — | cut to #limited: myth card frame on screen; 5.44 `type` #limited-line |
| 7.64 | — | — | `pop` #myth-pill |
| 8.94 | — | — | `type` #myth-line (cps 26) |

## s069
Continues: s068
Section label: PART 2 · AADHAAR
In: cut · Framing: static
Idea: Myth struck; then what Aadhaar proves: identity via authentication or offline verification. Component: quote-card — three Georgia lines from screen-notes, each with a grey "सार (gist)" Hindi line; no source line or postmark (none given), red label "AADHAAR · आधार".
Sub-shots: #limited @ 0, #doc @ 3.08.
Layout: #limited fact card: green "FACT · सही" pill, "Branch Post Office: mobile number · email ID" (52). #doc: white card x 140–1780, y 180–980, #ead9a8 border, red top edge; heading "Aadhaar क्या साबित करता है" (52). Three blocks 220 high: L1 "Identity, subject to authentication or offline verification" (Georgia 48) + gist "सार (gist): authentication या offline verification से पहचान" (36 grey) + green tick at right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | #limited; `strike` #myth-line (slate) at 0.46; 1.00 `draw` #myth-cross |
| 1.62 | — | — | `fade` #fact-card |
| 3.08 | — | — | cut to #doc: card + label; 4.28 `type` #doc-heading |
| 7.64 | — | — | `fade` #L1; `highlight` #L1 words "authentication" |
| 9.16 | — | — | `highlight` #L1 words "offline verification" |
| 12.16 | — | — | `fade` #L1-gist; `draw` #tick-L1 (green) |

## s070
Continues: s069
Section label: PART 2 · AADHAAR
In: cut · Framing: static, push {zoom 1.04} over the scene
Idea: Not proof of citizenship or domicile; not conclusive proof of date of birth.
Layout: as s069 #doc. L2 "Not proof of citizenship or domicile" (Georgia 48) + gist "सार (gist): नागरिकता या domicile का proof नहीं" + slate cross circle at right. L3 "Not conclusive proof of date of birth" + gist "सार (gist): जन्म तिथि का पक्का proof नहीं" + slate cross.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s069 last frame |
| 0.22 | — | — | `fade` #L2 |
| 1.38 | — | — | `highlight` #L2 words "citizenship" |
| 3.08 | — | — | `highlight` #L2 words "domicile"; 4.12 `fade` #L2-gist; `draw` #cross-L2 (slate) |
| 5.82 | — | — | `fade` #L3 |
| 6.42 | — | — | `highlight` #L3 words "date of birth" |
| 9.40 | {zoom 1.04} | — | `fade` #L3-gist; `draw` #cross-L3 (slate) |

## s071
Continues: no
Section label: RECAP · PART 2
In: fade · Framing: static
Idea: Recap envelope, row 1: Forms 1, 3, 5 — adults, children, under 5. Component: recap-card — 3 rows, seal "3", flap title "Aadhaar".
Layout: envelope card x 260–1660, y 170–980; flap with "RECAP · दोहराव" (40) and "Aadhaar" (56, red); seal at V tip. Rows 220 high from y 380: English term (56 bold) + Hindi (40) at left, yellow fact pill at right (x 1000–1560), green tick at x 1600. Row 1: "Forms 1, 3, 5" / "आधार के forms"; pill "बड़े · बच्चे · 5 से कम" (44).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | envelope, flap words and seal on screen |
| 5.80 | — | — | `type` #r1-en; 6.30 `fade` #r1-hi |
| 8.34 | — | — | `pop` #r1-pill with `fade` #p-bade "बड़े" |
| 9.32 | — | — | `fade` #p-bacche "· बच्चे" |
| 10.74 | — | — | `fade` #p-under5 "· 5 से कम" |
| 11.34 | — | — | `draw` #tick-1 (green) |

## s072
Continues: s071
Section label: RECAP · PART 2
In: cut · Framing: static
Idea: Rows 2–3: MBU at 5 and 15, Aadhaar number same; enrolment number → status, Aadhaar number is different. One-second hold after the last tick.
Layout: as s071. Row 2: "MBU 5 और 15" / "अनिवार्य बायोमेट्रिक अद्यतन"; pill "Aadhaar number वही". Row 3: "Enrolment number → status" / "नामांकन संख्या"; pill "≠ Aadhaar number".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s071 last frame; `type` #r2-en; 0.50 `fade` #r2-hi |
| 2.58 | — | — | `pop` #r2-pill |
| 3.52 | — | — | `draw` #tick-2 (green) |
| 4.66 | — | — | `type` #r3-en; 5.16 `fade` #r3-hi |
| 7.92 | — | — | `pop` #r3-pill |
| 8.74 | — | — | `draw` #tick-3 (green); hold to the cut (1.28 s) |
## s073
Continues: no
Section label: PART 3 · AADHAAR FEES
In: fade · Framing: wide (camera ends: medium; next scene wipes to a new screen)
Idea: Part 3 opener on the counter: ID card in the window, a rupee coin on the counter; enrolment is free, updates have charges and exemptions.
Layout: set `citizen-counter`; `id-card-icon` scale 0.9 on spot `window`; sign text "AADHAAR FEES" (Inter 64 white) on `sign`; drawn rupee coin (sand disc 140, ink "₹") on `counter-right`. Left zone x 180–600 y 380–700; right zone x 1320–1740 y 380–700.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set, ID card in window, sign "AADHAAR FEES", rupee coin on counter-right |
| 1.44 | — | — | `pop` sand pill (left, y 400) "transaction पहचानिए" (Hindi 44) |
| 4.32 | medium (slow, to 7.0) | — | `type` "Aadhaar enrolment" (Inter bold 56, left, y 520); 4.82 `fade` "आधार नामांकन" (40, grey) |
| 6.94 | — | — | `stamp` green pill "Free · हर उम्र" under it (y 640) |
| 7.86 | — | — | `pop` white card (right, y 400–700) "Updates" (Inter bold 56) |
| 8.46 | — | — | `pop` sand chip "charges" in it; `pulse` rupee coin |
| 9.72 | — | — | `pop` yellow chip "छूट" beside it; hold |

## s074
Continues: no
Section label: PART 3 · AADHAAR FEES
In: wipe from right · Framing: static
Idea: The demographic fee does not ride along on biometric or document updates; the schedule starts 1 Oct 2025.
Layout: top row (y 180–560): left card "Demographic update" x 140–700; arrow x 720–900 with slate cross; right stack x 920–1780: "Biometric update", "Document update". Bottom date strip y 680–900 x 140–1780: "लागू" label, start date left, end slot right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | left card "Demographic update" (Inter bold 60) with "जनसांख्यिकीय अद्यतन" (40) beneath, fee tag "fee" sand |
| 2.64 | — | — | `slide` from right card "Biometric update" + "बायोमेट्रिक अद्यतन" |
| 3.70 | — | — | `slide` card "Document update" + "दस्तावेज अद्यतन" below it |
| 4.48 | — | — | `draw` arrow left→right; 5.32 slate cross on arrow `pop`; `fade` "अपने आप नहीं लगती" (44, grey) under arrow |
| 6.50 | — | — | `draw` date strip (white card, #ead9a8 border), label "Fee schedule · लागू" |
| 7.40 | — | — | `type` "1 Oct 2025" (Inter bold 72, left of strip); `draw` arrow → right slot (empty dash line); hold |

## s075
Continues: s074
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Validity ends 30 Sept 2028; amounts include tax; then the fees table (screen 1 of 2) appears.
Sub-shots: `#dates` @ 0.00 · `#table1` @ 6.29.
Layout `#table1`: table card x 140–1780 y 170–960: header band red y 170–280 "Aadhaar fees · आधार शुल्क" white; grey line beneath "1 Oct 2025 – 30 Sept 2028 · taxes included" y 300; column heads y 340 "Service · सेवा" | "Fee · शुल्क" (x 1300); three row slots y 390–950 (186 each); "Source: UIDAI" grey 30 px y 985.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s074 last frame |
| 0.66 | — | — | `type` "30 Sept 2028" in the right slot (Inter bold 72) |
| 4.64 | — | — | `pop` yellow pill under strip "tax शामिल" (44) |
| 6.29 | cut to `#table1` | — | table card with header, validity line, column heads, source (rows empty, ruled) |
| 8.33 | — | — | `pop` small sand tag at header right "counter · 1/2"; hold |

## s076
Continues: s075
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Rows 1–3 land on their amounts.
Layout: each row: left English bold 56 (x 180), Hindi 40 beneath; right amount Inter bold 72 (x 1300) with Hindi note 36 under it.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s075 last frame (empty table) |
| 0.70 | — | — | `type` row 1 "New enrolment"; 1.20 `fade` "नया नामांकन" |
| 1.60 | — | — | `pop` green "Free"; `fade` "सभी उम्र" under it |
| 2.70 | — | — | `type` row 2 "Demographic update"; 3.20 `fade` "जनसांख्यिकीय अद्यतन" |
| 3.86 | — | — | `pop` "₹75"; 5.96 `fade` "एक या कई fields"; 7.98 `highlight` it |
| 9.86 | — | — | `type` row 3 "Biometric update"; 10.36 `fade` "बायोमेट्रिक अद्यतन" |
| 11.20 | — | — | `pop` "₹125"; hold |

## s077
Continues: s076
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Row 3's note lands; then screen 2 of the table (documents and print) opens.
Sub-shots: `#table1` @ 0.00 · `#table2` @ 4.48.
Layout `#table2`: same card, header, validity line, source; tag "documents · print · 2/2"; three empty ruled rows.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s076 last frame |
| 0.00 | — | — | `fade` row 3 note "demographic के साथ या बिना" (36) under ₹125 |
| 2.78 | — | — | `highlight` "साथ या बिना" |
| 4.48 | cut to `#table2` | — | same table, rows empty; tag "documents · print · 2/2" |
| 6.52 | — | — | `type` row 4 "PoI/PoA update at Aadhaar Centre" (52); 7.80 `fade` "पहचान/पते का दस्तावेज, Aadhaar Centre पर" (36); hold |

## s078
Continues: s077
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Row 4 = ₹75; row 5 myAadhaar online = Free in its window.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s077 last frame; `pop` "₹75" row 4 |
| 1.84 | — | — | `type` row 5 "PoI/PoA update on myAadhaar"; 3.16 `fade` "online दस्तावेज अद्यतन" |
| 4.60 | — | — | `type` under amount slot "15 June 2026 – 14 June 2027" (36, grey) |
| 10.28 | — | — | `pop` green "Free" row 5; hold |

## s079
Continues: s078
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Row 6 label: search, download, A4 colour print.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s078 last frame |
| 0.54 | — | — | `type` row 6 "Search, download, A4 colour print" (52); 1.04 `fade` "खोज, download, A4 रंगीन print" (36); hold |

## s080
Continues: s079
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Row 6 = ₹40; then the Free MBU card: 5–7 years, first biometric update free.
Sub-shots: `#table2` @ 0.00 · `#mbu` @ 1.90.
Layout `#mbu`: left red stamp-edge term card x 140–620 y 200–600 "Free MBU" (Inter bold 80 white), "Mandatory Biometric Update" (34 white), "अनिवार्य बायोमेट्रिक अद्यतन" (40 pale yellow). Right white card x 680–1780 y 200–660 (stamp area y 720–960 kept free for s082), three rows of 150 (age 60 bold left, Hindi line 40, green "Free"/pill right).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | `pop` "₹40" row 6; hold |
| 1.90 | cut to `#mbu` | — | white rows card (empty ruled), term card frame |
| 2.80 | — | — | `type` "Free MBU"; 3.30 `fade` English + Hindi lines |
| 5.28 | — | — | `type` row 1 "5–7 साल" |
| 6.98 | — | — | `fade` "पहला biometric update" |
| 8.76 | — | — | `pop` green pill "Free"; hold |

## s081
Continues: s080
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: 15–17 years: first or second free; 7–15 years: fee exemption on first MBU.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s080 last frame; `type` row 2 "15–17 साल" |
| 2.50 | — | — | `fade` "पहला या दूसरा biometric update" |
| 4.78 | — | — | `pop` green "Free" |
| 6.06 | — | — | `type` row 3 "7–15 साल" |
| 8.36 | — | — | `fade` "पहले MBU पर छूट" |
| 10.40 | — | — | `pop` yellow pill "छूट"; hold |

## s082
Continues: s081
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Exemption runs to 30 Sept 2027; then the condition stamp "Free MBU = अकेला transaction".
Layout: (planned from s080) the rows card spans y 200–660 (three rows of 150); the stamp area is x 680–1780 y 720–960 below it.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s081 last frame |
| 0.48 | — | — | `type` row 3 date "30 Sept 2027 तक" (36, grey) beside its pill |
| 3.56 | — | — | `fade` grey label above stamp area "ज़रूरी शर्त" (40) on "शर्त" 5.42 |
| 6.02 | — | — | `stamp` red perforated card "Free MBU = अकेला transaction" (white 56) |
| 8.06 | — | — | `underline` "अकेला" (yellow); hold |

## s083
Continues: s082
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Nothing else is added to a free MBU; but an ordinary (paid) biometric update absorbs demographic changes at no extra fee.
Sub-shots: `#mbu` @ 0.00 · `#combo` @ 3.42.
Layout `#combo`: stamp copy at top (x 380–1540 y 180–330, same red card). Two cards y 400–940: left "Ordinary biometric update ₹125" x 140–900; right "Free MBU" x 1020–1780.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s082 last frame |
| 1.04 | — | — | `pop` slate chip "+ दूसरा काम" beside stamp; 1.92 `strike` it (slate) |
| 3.42 | cut to `#combo` | — | top stamp; both cards' frames with headers: left "Ordinary biometric update" + "₹125", right "Free MBU" + "Free" (green) |
| 5.80 | — | — | left card `fade` "+ demographic बदलाव" (44) |
| 7.74 | — | — | `pop` green line "अलग fee नहीं" with green tick; hold |

## s084
Continues: s083
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: That exemption isn't usable with a free MBU; then mixed-update sums begin: Address + Mobile.
Sub-shots: `#combo` @ 0.00 · `#sums` @ 6.48.
Layout `#sums`: title "मिले-जुले updates" (red 56) y 200; sum row 1 y 360–520 (white card x 140–1780): "Address" + "Mobile" chips then "= …" slot; row 2 slot y 600–760 empty; note area y 820–960.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s083 last frame |
| 1.22 | — | — | right card `fade` "+ दूसरी service" (44) |
| 5.24 | — | — | `strike` it slate; `pop` slate cross |
| 6.48 | cut to `#sums` | — | title "मिले-जुले updates का हिसाब"; empty sum rows |
| 8.80 | — | — | `pop` chip "Address" (Inter bold 56) |
| 9.52 | — | — | `pop` "+ Mobile"; hold |

## s085
Continues: s084
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Both changed together: one demographic fee.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s084 last frame |
| 0.96 | — | — | `fade` "एक साथ" (40, grey) under the two chips |
| 2.16 | — | — | `fade` note below row 1 "Demographic fee: एक बार" (44); 4.32 `underline` "एक बार"; hold |

## s086
Continues: s085
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: "Address + Mobile = ₹75" (not per field); "Photo + Mobile = ₹125" as a chargeable biometric update.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | `pop` "= ₹75" (Inter bold 80) row 1 |
| 1.88 | — | — | slate chip "₹75 + ₹75" beside it `pop`; 2.94 `strike` |
| 4.40 | — | — | row 2 `pop` "Photo" chip (adult) |
| 5.54 | — | — | `pop` "+ Mobile" |
| 7.48 | — | — | `fade` row 2 note "chargeable biometric update" (40 grey) |
| 10.42 | — | — | `pop` "= ₹125"; hold |

## s087
Continues: s086
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: No separate demographic fee; then channel matters: myAadhaar document update free.
Sub-shots: `#sums` @ 0.00 · `#channel` @ 3.81.
Layout `#channel`: title "Free सुविधाएँ: कौन सा channel?" y 200; three cards in a row y 330–900 (x 140–660, 700–1220, 1260–1780): `system-screen-icon` scale 0.8 with "myAadhaar" typed on screen; drawn counter window mini with "Aadhaar Centre"; `phone-sms` scale 0.6 "Aadhaar app". Each card label + fee line beneath icon.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s086 last frame |
| 2.02 | — | — | row 2 slate chip "+ ₹75" `pop`; 2.84 `strike` |
| 3.81 | cut to `#channel` | — | title; three empty card frames |
| 6.25 | — | — | `draw` monitor in card 1; `type` "myAadhaar" on its screen |
| 7.48 | — | — | `fade` "document update" (40) |
| 8.36 | — | — | `pop` green "Free"; hold |

## s088
Continues: s087
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Same work at an Aadhaar Centre = ₹75; email update via the mobile app.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s087 last frame |
| 0.38 | — | — | card 2 `draw` mini counter window; `type` "Aadhaar Centre" |
| 1.65 | — | — | `fade` "वही document update" (40) |
| 2.39 | — | — | `pop` "₹75" (Inter bold 72) |
| 5.08 | — | — | card 3 `draw` phone; `type` "Aadhaar app" |
| 7.22 | — | — | `fade` "email address update" (40); hold |

## s089
Continues: s088
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: App email update free to 31 Dec 2026; the app's exemption doesn't make counter demographic charges free.
Layout: bottom band y 920–990 x 140–1780 (sand) for the note.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s088 last frame; `pop` green "Free" card 3 |
| 0.74 | — | — | `type` "31 Dec 2026 तक" (36 grey) |
| 3.79 | — | — | `highlight` card 3 label "Aadhaar app" |
| 6.21 | — | — | `fade` bottom band "counter के demographic charges: छूट नहीं" (44) |
| 9.13 | — | — | `underline` "छूट नहीं"; hold |

## s090
Continues: no
Section label: PART 3 · AADHAAR FEES
In: wipe from right · Framing: static
Idea: Home enrolment and update: who is eligible.
Layout: left: drawn house (ink, sand walls, red roof) 420×400 at x 180–600 y 300–700 with `id-card-icon` scale 0.45 at its door; title y 200 "घर पर enrolment और update" (red 60). Right card x 700–1780 y 300–940: three rows with small ink icons (walking stick, bed, wheelchair-free simple figure symbol: hand-and-heart).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | title and house with ID card |
| 2.62 | — | — | `pop` white card "किसके लिए" header |
| 3.84 | — | — | `pop` row 1 icon + "वरिष्ठ नागरिक" (48) |
| 5.52 | — | — | `pop` row 2 "बिस्तर पर या अशक्त" (48) |
| 8.78 | — | — | `pop` row 3 "दिव्यांग जन" (48); hold |

## s091
Continues: s090
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Prior approval from UIDAI's Regional Office; then proof of eligibility.
Sub-shots: `#who` @ 0.00 · `#proof` @ 6.64.
Layout: approval postmark (red round, 220) on the house's roof right (x 520, y 330). `#proof`: title "Request + पात्रता का सबूत" y 200; three tall white cards x 140–660, 700–1220, 1260–1780, y 330–860, each an ink icon + Hindi label 44.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s090 last frame |
| 0.76 | — | — | `stamp` postmark "UIDAI Regional Office" (red) |
| 4.54 | — | — | `fade` under house "पहले से approval" (44); 5.26 `underline` "पहले से" |
| 6.64 | cut to `#proof` | — | title; three empty card frames |
| 7.54 | — | — | `highlight` "पात्रता का सबूत" |
| 9.46 | — | — | card 1 `draw` calendar icon; `fade` "उम्र का proof"; hold |

## s092
Continues: s091
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Medical certificate or disability ID; then home service charge ₹700 first person, ₹350 each next at the same address.
Sub-shots: `#proof` @ 0.00 · `#charge` @ 4.83.
Layout `#charge`: title "Home service charge · घर पर सेवा शुल्क" y 200; two rows y 340–560 and 600–820 (white cards x 140–1780): ink person icon(s) left, Hindi label, amount Inter bold 96 right (x 1400); footer y 880–960 for notes.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | card 2 `draw` document icon; `fade` "medical certificate" |
| 2.00 | — | — | card 3 `draw` ID icon; `fade` "disability ID" |
| 3.82 | — | — | `fade` grey line "जो लागू हो" under cards |
| 4.83 | cut to `#charge` | — | title, two empty rows |
| 5.83 | — | — | row 1 `pop` person icon; `fade` "पहला व्यक्ति" |
| 7.29 | — | — | `pop` "₹700" |
| 8.91 | — | — | row 2 `pop` two-people icon; `fade` "उसी Aadhaar address पर हर अगला" |
| 11.97 | — | — | `pop` "₹350"; hold |

## s093
Continues: s092
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: GST included; charged on top of the normal fee; paid at the time, tax invoice given.
Layout: footer left x 140–1100 y 860–960; `invoice-sheet` scale 0.45 at x 1500, base y 990 (right of footer).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s092 last frame |
| 0.86 | — | — | `pop` yellow pill on row 1 "GST शामिल" |
| 2.90 | — | — | `fade` footer "+ normal demographic या biometric fee" (44) |
| 6.90 | — | — | `highlight` "+ normal" ("ऊपर से") |
| 9.42 | — | — | `pop` invoice sheet |
| 11.48 | — | — | `type` on its header "Tax invoice" (Inter bold 40); hold |

## s094
Continues: no
Section label: PART 3 · AADHAAR FEES
In: wipe from right · Framing: static
Idea: Worked example: one person, approved home visit, ordinary biometric update: ₹700 + ₹125 = ₹825.
Layout: kicker "Example · उदाहरण" (red 48) y 200; three icons row y 300–560: person, house with green tick, `id-card-icon` 0.5; sum card white x 140–1780 y 640–940: "₹700" x 400, "+ ₹125" x 900, "= ₹825" x 1450 (Inter bold 110), small Hindi labels under each.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | kicker and empty sum card |
| 1.22 | — | — | `pop` person icon "एक व्यक्ति" |
| 1.92 | — | — | `pop` house + green tick "approved home visit" |
| 4.72 | — | — | `pop` ID card "ordinary biometric update" |
| 7.20 | — | — | `pop` "₹700"; `fade` "home visit" under |
| 9.20 | — | — | `pop` "+ ₹125"; `fade` "biometric" under |
| 11.38 | — | — | `stamp` "= ₹825" (yellow band behind); hold |

## s095
Continues: no
Section label: PART 3 · AADHAAR FEES
In: wipe from right · Framing: static
Idea: Another route for National Social Assistance Programme pensioners: State Government Registrar in camp mode, no home-service charge.
Layout: top card x 140–1780 y 180–420: "National Social Assistance Programme" (Inter bold 60), "राष्ट्रीय सामाजिक सहायता कार्यक्रम · pension" (40) beneath. Flow row y 500–820: "State Government Registrar" card x 140–760 → arrow → "camp mode" card x 860–1360 → green chip x 1400–1780.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | top card with English name |
| 0.50 | — | — | `fade` Hindi line |
| 3.48 | — | — | `pop` yellow pill "एक और रास्ता" |
| 5.50 | — | — | `pop` card "State Government Registrar" |
| 7.34 | — | — | `draw` arrow; `pop` "camp mode" (tent icon) |
| 8.68 | — | — | `pop` green chip "home-service charge नहीं"; hold |

## s096
Continues: s095
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Only if the Registrar agrees and pension sanction is proved; a possibility, not automatic.
Layout: (planned from s095) flow cards span y 500–820; condition chips sit under them y 860–960; the slate line sits in the top card's right end (x 1300–1760 y 330–400).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s095 last frame |
| 0.30 | — | — | `pop` chip under Registrar "अगर Registrar तैयार" (40) |
| 2.28 | — | — | `pop` chip under camp mode "pension sanction का सबूत" (40) |
| 5.16 | — | — | `swap` top pill "एक और रास्ता" → "एक संभावना" |
| 6.08 | — | — | `fade` slate line top right "हर home visit = छूट"; 8.66 `strike` it; hold |

## s097
Continues: no
Section label: PART 3 · AADHAAR FEES
In: wipe from right · Framing: static
Idea: Home enrolment ≠ IPPB's CELC doorstep service; CELC mobile number update ₹75.
Layout: left card x 140–760 y 200–940: house icon + "Home enrolment" (UIDAI approval). "≠" disc x 860. Right card x 960–1780: red stamp-edge header "CELC" (Inter bold 80), "Child Enrolment Lite Client" (36), "बाल नामांकन" (40); rows y 600–900.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | left card "Home enrolment" + "घर पर नामांकन" |
| 1.68 | — | — | right card `pop`: header "IPPB" tag; 3.00 `type` "CELC"; 3.50 `fade` full name + Hindi |
| 4.06 | — | — | `fade` "doorstep सुविधा" |
| 5.42 | — | — | `pop` "≠" disc |
| 8.44 | — | — | row 1 `type` "mobile number update" |
| 9.90 | — | — | `pop` "₹75"; hold |

## s098
Continues: s097
Section label: PART 3 · AADHAAR FEES
In: cut · Framing: static
Idea: Child enrolment free at enabled places.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s097 last frame |
| 0.76 | — | — | row 2 `type` "child enrolment"; `fade` "enabled जगहों पर" (36 grey) |
| 3.46 | — | — | `pop` green "Free"; hold |

## s099
Continues: no
Section label: PART 4 · POPSK
In: fade · Framing: wide (camera ends: wide; next continues)
Idea: Part 4 opener on the counter: passport booklet in the window; POPSK = Post Office Passport Seva Kendra; a DoP–MEA initiative. Photo: passport-seva-kendra-sign — paper cut-out, white border, tilt −2°, x 170–590 y 300–620, caption "Passport Seva Kendra" grey 28 + credit; if missing, the left zone stays clear (the window icon carries the scene).
Layout: set `citizen-counter`; `passport-icon` scale 1.1 on `window`; sign "POPSK" on `sign`; full name strip below counter y 880–990; chips resting on counter-left / counter-right (bottom edge y 760).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set, passport in window, blank red sign |
| 0.40 | — | — | `type` "POPSK" on sign (white 72) |
| 2.58 | — | — | `type` below counter "Post Office Passport Seva Kendra" (Inter bold 56); 3.08 `fade` "डाकघर पासपोर्ट सेवा केंद्र" (40) |
| 4.78 | — | — | `fade` photo cut-out |
| 5.82 | — | — | `place` chip "Department of Posts" on `counter-left` |
| 7.86 | — | — | `place` chip "Ministry of External Affairs" on `counter-right`; hold |

## s100
Continues: s099
Section label: PART 4 · POPSK
In: cut · Framing: wide
Idea: MEA; joint initiative; aim: passport services near the citizen; pilots began 25 Jan 2017.
Sub-shots: `#counter` @ 0.00 · `#timeline` @ 3.84.
Layout `#timeline` (Component: timeline — two events only, red track y 520, x 200–1720): title y 200 "मकसद: passport services नागरिक के पास" (red 52); event 1 at x 520 (year above, cards below y 580–960); event 2 slot at x 1400 empty.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s099 last frame |
| 0.70 | — | — | `swap` right chip → "Ministry of External Affairs (MEA)" |
| 2.34 | — | — | `pop` yellow pill above counter-centre "साझा पहल" |
| 3.84 | cut to `#timeline` | — | track drawn grey; title `type` from 4.52 |
| 8.34 | — | — | `grow` red track to event 1 |
| 8.94 | — | — | `type` "25 Jan 2017" (Inter bold 64, above track); `fade` "pilot centres" (40) under it; hold |

## s101
Continues: s100
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: The two pilots: Metagali PO, Mysuru, Karnataka · Dahod HPO, Gujarat; aim to cut distance.
Layout: two white cards stacked under event 1, x 200–900, y 580–760 and y 790–960; chips at x 1000–1280 y 600–760, leaving event 2's slot (x 1400) free.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s100 last frame |
| 0.34 | — | — | `pop` card 1 "Metagali PO" (bold 48); 1.92 `fade` "Mysuru, Karnataka" (40) |
| 4.74 | — | — | `pop` card 2 "Dahod HPO" (bold 48); 6.76 `fade` "Gujarat" |
| 8.96 | — | — | `fade` chip "दूरी ↓" (x 1000–1280 y 600); hold |

## s102
Continues: s101
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: Time and cost down; then the key point: POPSK is where passport formalities are done.
Sub-shots: `#timeline` @ 0.00 · `#role` @ 4.05.
Layout `#role`: two cards side by side y 240–900: left yellow-header "POPSK" x 140–900; right red-header "MEA · passport administration" x 1020–1780 (empty body until s103).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | `fade` chip "समय ↓" under "दूरी ↓" |
| 1.10 | — | — | `fade` chip "खर्च ↓" |
| 4.05 | cut to `#role` | — | both card frames with headers |
| 6.11 | — | — | left body `type` "passport की formalities की जगह" (48) |
| 7.23 | — | — | `highlight` "formalities"; hold |

## s103
Continues: s102
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: Department of Posts is not the issuing authority; processing and grant stay with MEA's passport administration.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s102 last frame |
| 1.30 | — | — | left card lower `fade` slate line "Passport authority: Department of Posts" |
| 3.98 | — | — | `strike` it slate; slate cross `pop` |
| 6.40 | — | — | right body `pop` "processing" (green-tick row) |
| 7.46 | — | — | `pop` "grant" (green-tick row) |
| 8.40 | — | — | `highlight` header "MEA"; hold |

## s104
Continues: no
Section label: PART 4 · POPSK
In: wipe from right · Framing: static
Idea: What happens at a POPSK: applications, document verification, biometric capture, PCC applications. Photo: passport-seva-kendra-sign — cut-out at right x 1300–1760 y 260–640, tilt 2°, caption; if missing, `passport-icon` scale 1.2 stands there instead.
Layout: title "POPSK में क्या होता है?" (red 56) y 200; list card x 140–1220 y 290–960, four rows.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | title, photo (or passport icon), empty list card |
| 1.68 | — | — | row 1 `pop` "Passport applications" |
| 4.46 | — | — | row 2 `pop` "Document verification" |
| 6.70 | — | — | row 3 `pop` "Biometric capture" |
| 8.92 | — | — | row 4 `type` "Police Clearance Certificate (PCC)" (bold 48); 9.42 `fade` "पुलिस अनापत्ति प्रमाण पत्र" (40) |
| 12.48 | — | — | `fade` "applications" chip beside row 4; hold |

## s105
Continues: no
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: Timeline returns: Dec 2024, PCC across POPSKs; then PCC's right meaning vs the wrong one.
Sub-shots: `#timeline` @ 0.00 · `#pcc` @ 6.68.
Layout `#timeline`: as s102's timeline (both pilot cards, chips). `#pcc`: left slate card x 140–900 y 300–700, right green card x 1020–1780 y 300–700; fee area y 780–960 below the right card.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | timeline with 2017 event, pilots, chips |
| 1.70 | — | — | `grow` red track to event 2 (x 1400); `type` "Dec 2024" (Inter bold 64) |
| 3.74 | — | — | `fade` under it "PCC · देश भर के POPSKs" (40) |
| 6.68 | cut to `#pcc` | — | two empty card frames |
| 7.80 | — | — | right card `type` "Police Clearance Certificate" (bold 56, green border, green tick) |
| 9.86 | — | — | left card `type` "Passport Clearance Certificate" (slate) |
| 11.52 | — | — | `strike` it slate; slate cross; hold |

## s106
Continues: s105
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: PCC fee ₹500; other passport fees depend on category; then the applicant's 5 steps screen.
Sub-shots: `#pcc` @ 0.00 · `#steps` @ 7.92.
Layout `#steps` (Component: step-list — five rows instead of four, no closing chip): title "Applicant के steps" (red 56) y 190; five white rows x 140–1780, each 140 high from y 270 (gap 12), red numbered badge left, text 48.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s105 last frame |
| 1.76 | — | — | `stamp` red perforated card under right card "PCC fee ₹500" |
| 3.64 | — | — | `fade` under left card "बाकी passport fees: category पर निर्भर" (40 grey) |
| 7.92 | cut to `#steps` | — | title, five empty rows with badges 1–5 drawn |
| 9.62 | — | — | `fade` subtitle "क्रम से" (40 grey); hold |

## s107
Continues: s106
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: Steps 1 and 2.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s106 last frame; `pulse` badge 1 |
| 1.07 | — | — | row 1 `type` "Passport Seva registration, online application" (46) |
| 6.31 | — | — | `pulse` badge 2 |
| 7.66 | — | — | row 2 `type` "online fee" (46) |
| 11.72 | — | — | row 2 `type` ", appointment" ; hold |

## s108
Continues: s107
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: Steps 3 and 4.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s107 last frame; `pulse` badge 3 |
| 1.29 | — | — | row 3 `type` "originals + self-attested copies" (46) |
| 6.59 | — | — | `pulse` badge 4 |
| 8.00 | — | — | row 4 `type` "document check, photo या biometric" (46); hold |

## s109
Continues: s108
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: Step 5: passport administration (MEA) checks, police verification where needed, and decides.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s108 last frame; `pulse` badge 5 |
| 1.90 | — | — | row 5 `type` "police verification और फैसला:" (46) |
| 4.76 | — | — | `underline` "police verification" |
| 8.48 | — | — | row 5 `type` second line "passport administration (MEA)" (bold 46) |
| 9.11 | — | — | `highlight` it; hold |

## s110
Continues: no
Section label: PART 4 · POPSK
In: wipe from right · Framing: static
Idea: SMS is enough as appointment proof; the receipt print isn't required just for that.
Layout: left: `phone-sms` scale 1.4 at x 480 base y 900; green label above. Right: `invoice-sheet` scale 1.2 at x 1400 base y 900, header typed "Application receipt".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | title "Appointment का सबूत" (red 56) y 200 |
| 1.76 | — | — | `pop` phone; `type` "SMS" in bubble |
| 2.14 | — | — | `pop` green pill "काफ़ी है ✓" |
| 3.85 | — | — | `pop` invoice sheet; `type` header "Application receipt" |
| 5.24 | — | — | `fade` "print" label |
| 8.54 | — | — | `fade` slate pill "सिर्फ appointment के लिए ज़रूरी नहीं"; `strike` "print"; hold |

## s111
Continues: no
Section label: PART 4 · POPSK
In: wipe from right · Framing: static
Idea: Two rules: online payment is required for a POPSK appointment; no Tatkaal at POPSK.
Layout: title "दो नियम" y 200; rule card 1 x 140–1780 y 300–560; rule card 2 y 620–880.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | title "दो नियम याद रखिए" |
| 2.18 | — | — | card 1 `pop` "POPSK appointment" (bold 52) |
| 4.62 | — | — | `fade` "online payment ज़रूरी" (48); 5.54 `underline` "ज़रूरी" |
| 7.22 | — | — | card 2 `pop` "POPSK" |
| 8.50 | — | — | `type` "Tatkaal" (bold 56) |
| 9.46 | — | — | `strike` "Tatkaal" slate; slate cross; hold |

## s112
Continues: s111
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: For Tatkaal choose a centre that handles it; then the network: 452 POPSKs in 23 Postal Circles.
Sub-shots: `#rules` @ 0.00 · `#network` @ 5.79.
Layout `#network` (Component: big-number — no breakdown, no postmark date): red stamp card x 140–860 y 200–760 with "452" (white 180), "POPSKs"; under it sand strip y 800–960 "23 Postal Circles". Right: `india-outline-map` scale 0.82 at x 1000–1590 y 200–856; band area y 880–980 x 980–1780 kept free for s113.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s111 last frame |
| 2.04 | — | — | card 2 `fade` green note "Tatkaal वाला centre चुनें" |
| 5.79 | cut to `#network` | — | map drawn, empty stamp card |
| 7.73 | — | — | `count` "452"; `fade` "POPSKs" at 8.75 |
| 10.31 | — | — | `count` "23" in strip; `fade` "Postal Circles"; hold |

## s113
Continues: s112
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: 25 in Gujarat; target of one centre per Lok Sabha constituency.
Layout: Gujarat pin on map at map coords (100, 383); pin label right; target band y 880–980 x 980–1780 under the map.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s112 last frame |
| 0.64 | — | — | `pop` red pin on Gujarat; `type` "Gujarat 25" (bold 52) beside it |
| 1.06 | — | — | soft yellow tint circle under pin `fade` |
| 2.98 | — | — | `fade` band "लक्ष्य: हर Lok Sabha constituency में एक centre" (40) |
| 6.98 | — | — | `highlight` "लक्ष्य"; hold |

## s114
Continues: s113
Section label: PART 4 · POPSK
In: cut · Framing: static
Idea: Not every constituency has one yet; the count is no legal limit, it changes.
Layout: slate line at the band's right end (x 1500–1780); the count note goes inside the stamp card under "POPSKs", y 600–740.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s113 last frame |
| 0.70 | — | — | `fade` slate line on band right "हर जगह बन चुका" |
| 2.82 | — | — | `strike` it slate |
| 4.52 | — | — | `fade` in stamp card "गिनती: कानूनी सीमा नहीं" (pale yellow 40) |
| 8.44 | — | — | `fade` "बदलती है" beneath; hold |

## s115
Continues: no
Section label: PART 4 · POPSK
In: wipe from right · Framing: static
Idea: Exam trap: appointment and document capture at POPSK ≠ passport granted; grant is by MEA's passport administration. Component: exam-trap — two cards: left (yellow border) "POPSK: appointment + document capture", right "MEA: passport administration · Grant"; no stamp numbers; remember bar "Grant = MEA".
Layout: banner y 170–330; cards y 370–820 (x 140–900, 1020–1780); bar y 850–980.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | banner "EXAM TRAP · परीक्षा का जाल" |
| 1.18 | — | — | left card `pop` "POPSK" |
| 2.88 | — | — | `fade` "appointment + document capture" |
| 5.90 | — | — | `fade` slate line "= passport मिल गया"; 7.68 `strike` it |
| 8.42 | — | — | right card `pop` "Grant" (green tick) |
| 9.02 | — | — | `fade` "MEA का passport administration" |
| 11.96 | — | — | bar `fade` "Grant = MEA · passport administration"; hold |

## s116
Continues: no
Section label: RECAP · PARTS 3–4
In: fade · Framing: static
Idea: Recap envelope, five rows. Component: recap-card — five rows (not 3–4), seal "5", title "Aadhaar fees · POPSK".
Layout: envelope x 240–1680 y 170–990; flap y 170–320 ("RECAP · दोहराव", red title); rows 125 high from y 340: English bold 50 left (x 320), Hindi 36 beneath, yellow pill right (x 1300), green tick x 1580.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | envelope, flap, title, seal; rows empty |
| 6.06 | — | — | row 1 `fade` "Aadhaar enrolment" / "आधार नामांकन" |
| 7.06 | — | — | `pop` pill "Free"; `draw` green tick |
| 8.82 | — | — | row 2 "Demographic update" / "जनसांख्यिकीय अद्यतन" |
| 9.52 | — | — | pill "₹75"; tick |
| 11.06 | — | — | row 3 "Biometric update" / "बायोमेट्रिक अद्यतन" |
| 11.92 | — | — | pill "₹125"; tick; hold |

## s117
Continues: s116
Section label: RECAP · PARTS 3–4
In: cut · Framing: static
Idea: Home service ₹700 + ₹350.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s116 last frame |
| 3.42 | — | — | row 4 `fade` "Home service" / "घर पर सेवा" |
| 4.22 | — | — | `pop` pill "₹700 + ₹350" |
| 6.64 | — | — | `draw` green tick; hold |

## s118
Continues: s117
Section label: RECAP · PARTS 3–4
In: cut · Framing: static
Idea: POPSK with MEA; PCC ₹500; one-second hold after the last tick.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | — | — | s117 last frame; row 5 `fade` "POPSK" / "डाकघर पासपोर्ट सेवा केंद्र" |
| 2.68 | — | — | `fade` small grey "MEA के साथ" beside English |
| 5.84 | — | — | `pop` pill "PCC ₹500"; `draw` green tick |
| 6.88 | — | — | hold still to the cut (≥1 s after last tick) |
## s119
Continues: no
Section label: PART 5 · CSC & RETAIL
In: fade · Framing: wide (camera ends: returns, stays wide)
Idea: Part 5 opener on the counter: the computer screen rests in the window; CSC named on the sign, its full name on the counter front.
Layout: set citizen-counter. `system-screen-icon` scale 1.3 on spot `window`. Sign text "CSC" white 72px at spot `sign`. Counter front (y 775–850): "Common Service Centre" ink 60px bold centred x 960; Hindi "सामान्य सेवा केंद्र" 44px grey at y 915. Screen text "digital services" ink 40px inside #screen.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | counter set already drawn; sign board blank red |
| 0.16 | — | — | `place` #screen-icon spot `window` (fade in, settles); `type` #sign-csc "CSC" |
| 1.74 | — | — | `type` #csc-full "Common Service Centre" |
| 2.30 | — | — | `fade` #csc-hi |
| 3.46 | {zoom 1.05} slow | — | hold |
| 6.28 | — | — | `type` #screen-text "digital services" |
| 8.40 | — | — | `pulse` #screen-icon (मदद) |
| 9.20 | — | — | hold to cut |

## s120
Continues: no
Section label: PART 5 · CSC & RETAIL
In: wipe from right · Framing: static
Idea: PO-CSC as a key term: Post Office Common Service Centre; the same help through the postal network; Department of Posts and its partner. Component: key-term — red stamp card left (term), white meaning card right, envelope panel below holding the partner chain; drop the exam pill and chips.
Layout: stamp card x 120–820, y 180–560 (full name white 48px two lines at top, "PO-CSC" 96px, Hindi "डाकघर सामान्य सेवा केंद्र" 42px pale yellow). Meaning card x 880–1800, y 180–560. Envelope panel x 120–1800, y 610–980: node A card x 160–620 "Department of Posts" 52px / "डाक विभाग" 40px; red arrow + label "साथी" 40px; node B card x 760–1300 (name 40px, two lines).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | red stamp card and empty panel; `type` #full "Post Office Common Service Centre" |
| 2.10 | — | — | `fade` #full-hi |
| 3.94 | — | — | `stamp` #po-csc "PO-CSC" |
| 5.58 | — | — | `fade` meaning card; `words` #help "यही मदद, postal network से" (52px) |
| 6.76 | — | — | `underline` #help {words:'postal network'} |
| 8.86 | — | — | `pop` #nodeA; 9.40 `fade` #nodeA-hi |
| 10.76 | — | — | `draw` #arrow-AB; `fade` #saathi "साथी" |
| 11.56 | — | — | `pop` #nodeB card; `type` #nodeB-1 "CSC" |

## s121
Continues: s120
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: The partner's full name completes, then MeitY lands in the meaning card under the first line.
Layout: as s120. Node B: "CSC e-Governance Services India Limited" (40px, two lines), Hindi "साथी company" 36px. Meaning card second block from y 300: "MeitY" red 68px, "Ministry of Electronics and Information Technology" 36px ink (two lines), Hindi "इलेक्ट्रॉनिकी और सूचना प्रौद्योगिकी मंत्रालय" 36px grey.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s120's last frame |
| 0.00 | — | — | `type` #nodeB-2 "e-Governance Services India Limited" (finishes ~1.9) |
| 2.40 | — | — | `fade` #nodeB-hi |
| 3.18 | — | — | `pop` #meity "MeitY" |
| 5.30 | — | — | `type` #meity-full "Ministry of Electronics and Information Technology" |
| 8.40 | — | — | `fade` #meity-hi |
| 9.30 | — | — | hold to cut |

## s122
Continues: s121
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: MeitY promotes the partner (arrow down); the platform, Digital Sewa portal, joins the chain; then a hard cut to the start-dates timeline. Component: timeline — two events only (see s123).
Layout: #partners = s121 layout; "promote" arrow from meity block down to node B; node C x 1360–1780 in panel: `system-screen-icon` scale 0.7 with "Digital Sewa" typed on screen, label "Digital Sewa portal" 44px / "डिजिटल सेवा portal" 36px. #timeline: title "PO-CSC की शुरुआत" red 56px y 210; cream track y 470 x 200–1720; event 1 at x 520.
Sub-shots: #partners @ 0, #timeline @ 6.30.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s121's last frame (#partners) |
| 0.18 | — | — | `draw` #promote-arrow; `fade` #promote "promote" (36px) |
| 3.50 | — | — | `pop` #nodeC screen icon |
| 4.54 | — | — | `type` #ds-screen "Digital Sewa"; 5.36 `fade` #nodeC-label + Hindi |
| 6.30 | — | — | shot #timeline: title already typed, empty track |
| 7.10 | — | — | `fade` #two-dates "दो तारीखें" grey 40px |
| 9.44 | — | — | `grow` #track to 0.4 {axis:x, origin:left}; `fade` #ev1-card "Pilot" / "पायलट" |
| 9.78 | — | — | `type` #ev1-date "4 May 2020" (red 72px) |

## s123
Continues: s122
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Pilot: 22 offices in 11 Circles; then the agreement on 15 Dec 2020 with CSC-SPV, the key event in yellow. Component: timeline — 2 events, key event yellow and larger.
Layout: ev1 card x 220–820, y 520–800 (lines 44px). ev2 at x 1360: date above track, card x 1040–1700, y 520–830 yellow: "Agreement" 52px / "समझौता" 40px, "CSC-SPV" 52px. Caption band y 870–970 (s124).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s122's last frame (event 1 date + card) |
| 0.00 | — | — | `type` #ev1-circles "11 Circles" |
| 1.32 | — | — | `type` #ev1-offices "22 post offices" |
| 3.28 | — | — | `grow` #track to 1 {axis:x, origin:left} |
| 5.06 | — | — | `pop` #ev2-card; `type` #ev2-spv "CSC-SPV" |
| 6.68 | — | — | `fade` #ev2-agree "Agreement"; 7.20 `fade` #ev2-agree-hi |
| 7.40 | — | — | `type` #ev2-date "15 Dec 2020" (yellow card, red 80px) |
| 9.38 | — | — | hold |

## s124
Continues: s123
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Caption: these are start facts, not today's count. Then cut to the services table: G2C row arrives. Component: compare-table — 2 rows, 2 columns (type | services), no source line.
Layout: #timeline band y 870–970 sand: "शुरुआत के तथ्य · आज की गिनती नहीं" 44px. #services: title "Services दो तरह की" red 56px y 200; white table x 120–1800, y 260–900 (band space below for s127); col 1 x 120–620, col 2 x 640–1780. Row G2C y 270–560 (cream), row B2C y 570–890 (white). Row label "G2C" red 84px, "Government to Citizen" 40px, Hindi "सरकार से नागरिक" 36px.
Sub-shots: #timeline @ 0, #services @ 4.77.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s123's last frame |
| 0.24 | — | — | `reveal` #band {from:'left'} "शुरुआत के तथ्य" |
| 3.04 | — | — | `fade` #band-2 "· आज की गिनती नहीं"; `underline` it |
| 4.77 | — | — | shot #services: table card with empty rows |
| 5.31 | — | — | `type` #svc-title "Services दो तरह की" |
| 7.11 | — | — | `pop` #g2c "G2C" |
| 9.09 | — | — | `type` #g2c-full "Government to Citizen"; 11.60 `fade` #g2c-hi |

## s125
Continues: s124
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: G2C's three services build in col 2; then B2C row label and its first item.
Layout: G2C col 2 lines at y 330 / 410 / 490, 46px each with a small red dot. B2C col 2 a 2×2 grid: cells x 660–1200 and 1220–1780, y 600–760 and 780–940 (item 46px + grey example 36px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s124's last frame |
| 0.00 | — | — | `words` #g2c-1 "सरकारी schemes की applications" |
| 3.18 | — | — | `words` #g2c-2 "e-District services" |
| 5.38 | — | — | `words` #g2c-3 "election card services" |
| 7.52 | — | — | `pop` #b2c "B2C" |
| 9.58 | — | — | `type` #b2c-full "Business to Citizen or Customer" |
| 12.20 | — | — | `fade` #b2c-hi "व्यापार से नागरिक / ग्राहक" |
| 12.78 | — | — | `fade` #b2c-1 "utility bills" (cell 1) |

## s126
Continues: s125
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: B2C cells fill; the utility-bill examples appear grey under cell 1.
Layout: as s125.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s125's last frame |
| 0.00 | — | — | `fade` #b2c-2 "insurance premium" |
| 1.94 | — | — | `fade` #b2c-3 "loan की किस्तें" |
| 3.94 | — | — | `fade` #b2c-4 "travel tickets" |
| 5.62 | — | — | `fade` #ex-util-1 "बिजली" (grey 36px, under cell 1) |
| 6.42 | — | — | `fade` #ex-util-2 "· gas" |
| 7.82 | — | — | `fade` #ex-util-3 "· पानी"; `highlight` #b2c-1 |
| 9.26 | — | — | hold |

## s127
Continues: s126
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Travel examples and loan applications added; then a band: the service must be enabled at office and on portal.
Layout: as s126, except the table card was sized from s124 to end at y 900 (B2C row y 570–890) so a sand band fits at x 120–1800, y 915–995: "Service: office ✓ + portal ✓ → दोनों जगह enabled" 40px, ticks green.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s126's last frame (table ends y 900) |
| 0.00 | — | — | `fade` #ex-travel "flight" grey under cell 4 |
| 1.14 | — | — | `fade` #ex-travel-2 "· train"; 2.34 `fade` #ex-travel-3 "· bus" |
| 4.22 | — | — | `fade` #ex-loan "+ loan applications" grey under cell 3 |
| 6.68 | — | — | `reveal` #band {from:'left'} "Service:" |
| 7.72 | — | — | `pop` #office "office ✓" (tick green) |
| 9.14 | — | — | `pop` #portal "portal ✓" |
| 9.96 | — | — | `fade` #both "दोनों जगह enabled"; 11.28 `underline` it |

## s128
Continues: no
Section label: PART 5 · CSC & RETAIL
In: wipe from right · Framing: static
Idea: Exam trap: the operator only helps; the decision belongs to the service's responsible body. Component: exam-trap — banner with trap line, two cards (Operator | ज़िम्मेदार संस्था, the second with the yellow border), stamps hold short Hindi words; remember bar used in s129.
Layout: banner x 120–1800, y 170–330. Cards y 370–760: left x 120–920, right x 1000–1800. Each: caps label 36px, name 60px, Hindi 40px. Remember bar y 790–980 sand (s129).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | red banner with triangle drawn |
| 0.72 | — | — | `type` #kicker "EXAM TRAP · परीक्षा का जाल" |
| 2.28 | — | — | `pop` #card-op; `fade` #op-name "Operator" |
| 3.18 | — | — | `words` #op-line "बस digital काम में मदद" |
| 5.76 | — | — | `pop` #card-body; `stamp` #stamp-decide "फैसला" |
| 7.64 | — | — | `words` #body-line "उस service की ज़िम्मेदार संस्था" |
| 8.34 | — | — | `highlight` #body-line {words:'ज़िम्मेदार संस्था'} |
| 9.34 | — | — | hold |

## s129
Continues: s128
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Example in the remember bar: help with the loan application or paying an instalment, which is not the post office giving the loan (slate strike).
Layout: remember bar x 120–1800, y 790–980: left half "मदद की · किस्त जमा की" ink 44px; right half "Post office ने loan दिया" 44px, struck slate + slate cross at x 1740.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s128's last frame |
| 0.00 | — | — | `reveal` #bar {from:'left'} |
| 1.08 | — | — | `fade` #ex-head "Loan application:" (grey 36px) |
| 2.18 | — | — | `fade` #ex-help "मदद की" |
| 3.88 | — | — | `fade` #ex-pay "· किस्त जमा की" |
| 7.20 | — | — | `type` #ex-wrong "Post office ने loan दिया" |
| 8.70 | — | — | `strike` #ex-wrong {color:'#4b4f58'}; `draw` #cross (slate) |
| 9.73 | — | — | hold |

## s130
Continues: no
Section label: PART 5 · CSC & RETAIL
In: wipe from right · Framing: static
Idea: Retail facilities as three stacked cards: application forms; railway tickets through PRS; access to financial products.
Layout: title "Retail सुविधाएँ" red 56px y 200. Cards x 120–1800: #c1 y 260–440, #c2 y 470–720, #c3 y 750–900. Each: red number badge left, main line 52px, chips right.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | title "Retail सुविधाएँ" already on |
| 1.82 | — | — | `slide` #c1 {from:'right'}; `pop` #chip-edu "education" |
| 3.20 | — | — | `pop` #chip-rec "recruitment" |
| 5.12 | — | — | `type` #c1-main "Application forms"; 5.70 `fade` #c1-hi "आवेदन पत्र" |
| 7.20 | — | — | `slide` #c2 {from:'right'}; `fade` #c2-main "Railway tickets" |
| 8.24 | — | — | `type` #prs "PRS · Passenger Reservation System"; 9.80 `fade` #prs-hi "यात्री आरक्षण प्रणाली" |
| 10.28 | — | — | `pop` #chip-po "चुने हुए post offices" |
| 12.10 | — | — | hold |

## s131
Continues: s130
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Classes chip, third card (financial products); then cut to IPPB's 1 Sept 2026 announcement.
Layout: #retail = s130 layout. #ippb: left red stamp card x 120–700, y 200–600: "IPPB" 96px white, Hindi "इंडिया पोस्ट पेमेंट्स बैंक" 40px pale yellow, postmark "1 SEPT 2026" (red ring, 150px) at [620, 580]. Right column x 780–1800 reserved for two platform cards (s132). Under left card y 640–980 free for s133.
Sub-shots: #retail @ 0, #ippb @ 5.90.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s130's last frame |
| 0.22 | — | — | `pop` #chip-class "अलग-अलग classes" |
| 2.02 | — | — | `slide` #c3 {from:'right'}; `words` #c3-main "Financial products तक पहुँच" |
| 5.90 | — | — | shot #ippb: red stamp card on |
| 6.22 | — | — | `stamp` #postmark "1 SEPT 2026" |
| 8.52 | — | — | `type` #ippb "IPPB"; 9.10 `fade` #ippb-hi |
| 10.00 | — | — | `fade` #two "दो platforms घोषित" (white 40px in stamp card) |
| 11.54 | — | — | hold |

## s132
Continues: s131
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: The two platforms as two white cards; band: access to insurance and investment products.
Layout: right column cards x 780–1800: #p1 y 200–440, #p2 y 470–710 (English 52px bold, Hindi 38px). Band x 780–1800, y 740–860 sand.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s131's last frame |
| 0.00 | — | — | `slide` #p1 {from:'right'}; `type` #p1-en "Digital Insurance Technology Platform" |
| 2.30 | — | — | `fade` #p1-hi "डिजिटल बीमा टेक्नोलॉजी प्लेटफॉर्म" |
| 3.14 | — | — | `slide` #p2 {from:'right'}; `type` #p2-en "Digital Mutual Fund Platform" |
| 5.10 | — | — | `fade` #p2-hi "डिजिटल म्यूचुअल फंड प्लेटफॉर्म" |
| 5.50 | — | — | `reveal` #band {from:'left'} |
| 6.02 | — | — | `words` #band-t "insurance और investment products तक पहुँच" |
| 9.26 | — | — | `highlight` #band-t {words:'पहुँच'} |

## s133
Continues: s132
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Partner products are not POSB deposits (slate strike, under the IPPB card); then cut to the payments-bank limit.
Layout: #ippb under-left block x 120–700, y 640–980: "partner products" 48px ink; "≠ POSB deposits" 44px slate, struck; Hindi "Post Office Savings Bank के deposits नहीं" 34px grey. #cards: title "Payments bank" 72px bold, Hindi "पेमेंट्स बैंक · एक सीमा" 40px grey, y 200–300; two cards y 340–720: left x 120–900 (credit, s134), right x 1020–1800 (debit).
Sub-shots: #ippb @ 0, #cards @ 6.41.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s132's last frame |
| 0.54 | — | — | `fade` #pp "partner products" |
| 1.96 | — | — | `type` #posb "POSB deposits" |
| 4.68 | — | — | `strike` #posb {color:'#4b4f58'}; `draw` #posb-cross (slate) |
| 5.32 | — | — | `fade` #posb-hi |
| 6.41 | — | — | shot #cards: empty title band |
| 6.61 | — | — | `type` #pb "Payments bank" |
| 7.77 | — | — | `fade` #pb-hi "पेमेंट्स बैंक · एक सीमा" |

## s134
Continues: s133
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Debit card ✓ (green, right), permitted products ✓; Credit card ✗ (slate strike, left); then a band: taking card payment is not issuing a card. Photo: mobile-phone-qr-payment — paper cut-out 320×210, tilt 2°, caption "card/phone से payment" grey 28px, in the band's left; if missing, `phone-sms` piece scale 0.4 there.
Layout: right card x 1020–1800: "ATM / Debit card ✓" 60px green tick, Hindi "दे सकता है" 40px; line 2 "permitted financial products" 44px + "बेच सकता है ✓". Left card x 120–900: "Credit card" 64px, Hindi "नहीं दे सकता" 40px. Band y 760–980 sand x 120–1800; photo at x 140–460.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s133's last frame |
| 0.74 | — | — | `pop` #debit-card; `type` #debit "ATM / Debit card" |
| 1.66 | — | — | `draw` #debit-tick (green); `fade` #debit-hi |
| 2.98 | — | — | `fade` #perm "permitted financial products"; 4.68 `fade` #perm-hi + tick |
| 6.28 | — | — | `pop` #credit-card; `type` #credit "Credit card" |
| 7.44 | — | — | `strike` #credit {color:'#4b4f58'}; `draw` #credit-cross; `fade` #credit-hi |
| 8.30 | — | — | `reveal` #band {from:'left'}; `pop` #photo-pay |
| 9.62 | — | — | `words` #take "card से payment लेना" (44px) |

## s135
Continues: s134
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Band completes (≠ card जारी करना). Cut to Click N Book: online postal booking, not passport / money order / staff quarters (slate strikes). Component: key-term — stamp card + meaning card, chips row below.
Layout: #cards band right: "≠ card जारी करना" 44px. #book: stamp card x 120–820, y 200–560 "Click N Book" 80px white; Hindi "क्लिक एन बुक" 40px. Meaning card x 880–1800, y 200–560: "online डाक booking की सुविधा" 52px. Chips row y 640–800: three sand chips x 160–640 / 720–1200 / 1280–1760, 44px.
Sub-shots: #cards @ 0, #book @ 2.22.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s134's last frame |
| 0.44 | — | — | `fade` #neq "≠ card जारी करना" |
| 2.22 | — | — | shot #book: empty stamp + meaning cards |
| 4.18 | — | — | `type` #cnb "Click N Book"; 5.40 `fade` #cnb-hi |
| 5.84 | — | — | `words` #cnb-mean |
| 8.62 | — | — | `pop` #chip-pass "passport" |
| 9.72 | — | — | `pop` #chip-mo "money order"; 11.20 `pop` #chip-sq "staff quarters" |
| 12.50 | — | — | `strike` .chip-no {stagger:0.12, color:'#4b4f58'} + slate crosses |

## s136
Continues: no
Section label: PART 5 · CSC & RETAIL
In: wipe from right · Framing: static
Idea: ONDC Click and Book in three small steps along a route. Component: mail-flow — 3 stops (phone-sms → mobile-post-van → rupee coin drawn), labels in Hindi, last stop soft yellow.
Layout: title "ONDC · Click and Book" 72px bold y 230, Hindi "ONDC का Click and Book model" 40px grey y 290. Stops (round 220px, icon inside) at x 360 / 960 / 1560, cy 540; labels y 720–880 (English 48px, Hindi 40px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | title band area with ONDC route line faint |
| 0.00 | — | — | `type` #ondc "ONDC" |
| 1.38 | — | — | `type` #cab "· Click and Book"; 2.40 `fade` #title-hi |
| 3.96 | — | — | `pop` #stop1 with `phone-sms`; `fade` #s1-who "Seller" |
| 5.18 | — | — | `words` #s1-lab "pickup की request, online" |
| 8.28 | — | — | `draw` #arrow12; `pop` #stop2 with `mobile-post-van` |
| 8.66 | — | — | `type` #s2-en "Department of Posts" |
| 9.92 | — | — | `fade` #s2-hi "= logistics provider" |

## s137
Continues: s136
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: Stop 3: postage paid at pickup. Cut to the registration definition: registration-envelope beside a white definition card.
Layout: #ondc = s136; stop 3 at x 1560 (yellow), label "postage, pickup पर जमा" 44px. #reg: `registration-envelope` scale 1.5 at x 140–740, y 300–900. Definition card white, #ead9a8 border, x 820–1800, y 200–960: "Registration" 84px bold, Hindi "रजिस्ट्रेशन" 40px, then lines 46px.
Sub-shots: #ondc @ 0, #reg @ 4.31.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s136's last frame |
| 0.62 | — | — | `draw` #arrow23; `pop` #stop3 (rupee coin) ; `fade` #s3-lab |
| 2.92 | — | — | `highlight` #s3-lab {words:'pickup पर'} |
| 4.31 | — | — | shot #reg: envelope and empty card on |
| 8.13 | — | — | `type` #reg "Registration"; 8.70 `fade` #reg-hi |
| 9.93 | — | — | `fade` #reg-rp "= Registered Post" |
| 11.31 | — | — | `words` #reg-sp "Speed Post documents और parcels" |
| 14.79 | — | — | `fade` #reg-va "की value-added service" |

## s138
Continues: s137
Section label: PART 5 · CSC & RETAIL
In: cut · Framing: static
Idea: The definition finishes: delivery is addressee-specific; postmark "1 OCT 2025 से".
Layout: card lines below y 640: "delivery: addressee-specific" 52px, Hindi "सिर्फ पाने वाले को delivery" 40px; red postmark 170px at [1620, 860].
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s137's last frame |
| 1.38 | — | — | `fade` #del "delivery:" |
| 3.02 | — | — | `type` #addr "addressee-specific"; 3.60 `fade` #addr-hi |
| 3.50 | — | — | `highlight` #addr |
| 4.88 | — | — | `stamp` #postmark "1 OCT 2025 से" |
| 6.96 | — | — | `pulse` #registration-band (envelope) |
| 7.38 | — | — | hold to cut |

## s139
Continues: no
Section label: PART 6 · JEEVAN PRAMAAN
In: fade · Framing: wide (camera ends: returns)
Idea: Part 6 opener on the counter: the pensioner with phone rests in the window; Jeevan Pramaan on the sign; DLC named on the counter front.
Layout: set citizen-counter. `pensioner-phone-icon` scale 0.95 on spot `window`. Sign "Jeevan Pramaan" white 52px. Pills on the counter top: "Aadhaar-based" (spot `counter-left`), "biometric" (spot `counter-right`), 44px sand pills. Counter front: "Digital Life Certificate (DLC)" 56px bold; Hindi "डिजिटल जीवन प्रमाण पत्र" 40px grey y 905; line "pensioner साबित करता है: वो जीवित है" 40px y 965.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | counter set drawn, blank sign |
| 0.18 | — | — | `type` #sign-jp "Jeevan Pramaan"; `place` #pensioner spot `window` |
| 2.68 | — | — | `place` #pill-aadhaar spot `counter-left` |
| 3.86 | — | — | `place` #pill-bio spot `counter-right` |
| 5.32 | — | — | `type` #dlc-full "Digital Life Certificate" |
| 7.68 | — | — | `pop` #dlc "(DLC)"; 8.20 `fade` #dlc-hi |
| 8.88 | — | — | `words` #alive |
| 11.70 | — | — | `pulse` #tick (green tick on phone) |

## s140
Continues: no
Section label: PART 6 · JEEVAN PRAMAAN
In: wipe from right · Framing: static
Idea: No need to carry a paper certificate to the pension office (slate strike); IPPB helps make DLC through the postal network — first of three "who" cards.
Layout: top strip x 120–1800, y 180–360: `invoice-sheet` scale 0.4 at x 150; "office जाकर paper life certificate" 48px. Three cards y 410–980: #ippb x 120–660, #post x 690–1230, #nic x 1260–1800 (term 60px, Hindi 38px, line 40px).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | top strip with paper sheet on |
| 0.00 | — | — | `words` #paper-line |
| 4.22 | — | — | `strike` #paper-line {color:'#4b4f58'}; `draw` #paper-cross |
| 5.03 | — | — | `pop` #ippb-card; `type` #ippb "IPPB"; 5.60 `fade` #ippb-hi |
| 6.21 | — | — | `words` #ippb-line "postal network से" |
| 8.09 | — | — | `fade` #ippb-line2 "DLC बनवाने में मदद" |
| 10.37 | — | — | hold |

## s141
Continues: s140
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Second card: Postmen and GDS, at the pensioner's home too. Third card: NIC builds and runs the Jeevan Pramaan application. Photo: postman-delivering-parcel-cutout — small cut-out 220 px tall inside #post card bottom-right, tilt 2°; if missing, a drawn ink house icon.
Layout: #post card: "Postmen" 56px / "डाकिया"; "Gramin Dak Sevaks" 48px / "ग्रामीण डाक सेवक" 36px; "घर जाकर भी" 40px. #nic card: "NIC" 80px; line "Jeevan Pramaan application" 40px; "बनाता और चलाता" 40px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s140's last frame |
| 0.00 | — | — | `pop` #post-card; `type` #postmen "Postmen"; 0.50 `fade` hi |
| 1.04 | — | — | `type` #gds "Gramin Dak Sevaks"; 2.40 `fade` hi |
| 3.74 | — | — | `fade` #home "घर जाकर भी"; `pop` #photo-postman |
| 5.14 | — | — | `pop` #nic-card; `words` #jp-app "Jeevan Pramaan application" |
| 7.22 | — | — | `stamp` #nic "NIC" |
| 8.16 | — | — | `fade` #nic-line "बनाता और चलाता" |
| 9.86 | — | — | hold |

## s142
Continues: s141
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: NIC expanded; then the service is for both IPPB and non-IPPB customers (pill in the top strip, right of the struck line).
Layout: #nic card: "National Informatics Centre" 40px under NIC, Hindi "राष्ट्रीय सूचना विज्ञान केंद्र" 36px. Top strip right x 1200–1780: pill "IPPB + non-IPPB" 44px, Hindi "दोनों customers" 40px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s141's last frame |
| 0.48 | — | — | `type` #nic-full "National Informatics Centre" |
| 2.70 | — | — | `fade` #nic-hi |
| 4.44 | — | — | `pop` #pill-both; `type` #pb-1 "IPPB" |
| 6.25 | — | — | `type` #pb-2 "+ non-IPPB" |
| 7.29 | — | — | `fade` #pb-hi "दोनों customers" |
| 8.88 | — | — | hold |

## s143
Continues: no
Section label: PART 6 · JEEVAN PRAMAAN
In: wipe from right · Framing: static
Idea: Conditions checklist: an IPPB account is not required (slate strike); the pension body must be onboarded on Jeevan Pramaan (green tick).
Layout: title "शर्तें" red 56px y 200. White card x 160–1760, y 250–990, five rows ~145 each, divided by thin lines; text 48px, tick/cross circle at x 1680.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | title and empty card on |
| 0.01 | — | — | `type` #r1 "IPPB account ज़रूरी" |
| 1.79 | — | — | `strike` #r1 {color:'#4b4f58'}; `draw` #r1-cross; `fade` #r1-note "शर्त नहीं" (slate 40px) |
| 2.75 | — | — | `words` #r2 "Pension sanction या disburse करने वाली संस्था" |
| 6.61 | — | — | `fade` #r2b "Jeevan Pramaan पर onboarded" (second line, 44px) |
| 8.17 | — | — | `draw` #r2-tick (green) |
| 9.17 | — | — | hold |

## s144
Continues: s143
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Three more ticked rows: Aadhaar number, an active mobile number, Aadhaar registered with the pension agency.
Layout: as s143; rows 3–5.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s143's last frame |
| 1.18 | — | — | `fade` #r3 "Aadhaar number"; `draw` #r3-tick |
| 3.28 | — | — | `fade` #r4 "चालू mobile number"; 3.96 `draw` #r4-tick |
| 5.83 | — | — | `words` #r5 "Aadhaar, pension agency के पास" |
| 9.61 | — | — | `fade` #r5b "पहले से registered" |
| 10.26 | — | — | `draw` #r5-tick |
| 10.59 | — | — | hold |

## s145
Continues: no
Section label: PART 6 · JEEVAN PRAMAAN
In: wipe from right · Framing: static
Idea: The five pension details as a numbered card, the voice reads them in order.
Layout: title "पाँच pension details" red 56px y 200 (left); white card x 160–1760, y 260–990, five rows 140px each: red badge 1–5 at x 220; English term 52px bold, Hindi 38px grey beneath.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | `fade` #title; empty card with five badges grey |
| 3.54 | — | — | `pulse` #card ("screen पर") |
| 4.24 | — | — | `color` #b1 {to:'#9e1b1b'}; `type` #d1 "Pension का type" |
| 6.04 | — | — | `color` #b2 to red; `type` #d2 "Sanctioning authority" |
| 6.60 | — | — | `fade` #d2-hi "sanction करने वाली authority का नाम" |
| 9.52 | — | — | hold |

## s146
Continues: s145
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Rows 3–5: disbursing agency, PPO number (Pension Payment Order), pension account number with bank or post office details.
Layout: as s145.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s145's last frame |
| 0.00 | — | — | `color` #b3 to red; `type` #d3 "Disbursing agency"; 0.60 `fade` #d3-hi "disburse करने वाली agency का नाम" |
| 3.78 | — | — | `color` #b4 to red; `type` #d4 "PPO number" |
| 5.92 | — | — | `type` #d4-full "Pension Payment Order" (40px beside); 8.00 `fade` #d4-hi "पेंशन भुगतान आदेश" |
| 8.82 | — | — | `color` #b5 to red; `type` #d5 "Pension account number" |
| 10.86 | — | — | `fade` #d5-hi "bank या post office की details के साथ" |
| 13.48 | — | — | hold |

## s147
Continues: s146
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: A note beside the title (filled from a previous DLC, must be correct); then cut to who doesn't get it: remarried or re-employed pensioners.
Layout: #details: note right of title x 1000–1760, y 175–245: "पिछले DLC से भर सकती हैं · सही होना ज़रूरी" 36px grey. #notelig: title "किसे नहीं मिलती?" red 60px y 240; white card x 260–1660, y 330–760, two slate rows "Remarried pensioners" / "Re-employed pensioners" 60px with slate crosses; line y 820–900 (s148).
Sub-shots: #details @ 0, #notelig @ 5.43.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s146's last frame |
| 0.00 | — | — | `fade` #note-1 "पिछले DLC से भर सकती हैं" |
| 3.14 | — | — | `fade` #note-2 "· सही होना ज़रूरी"; 3.48 `underline` {words:'सही'} |
| 5.43 | — | — | shot #notelig: `type` #q "किसे नहीं मिलती?" |
| 6.59 | — | — | `fade` #n1 "Remarried pensioners"; `draw` #n1-cross (slate) |
| 8.25 | — | — | `fade` #n2 "Re-employed pensioners"; `draw` #n2-cross |
| 9.57 | — | — | hold |

## s148
Continues: s147
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Not in the eligibility conditions; then cut to the DLC flow: six cards in two rows (left→right, elbow arrow from 3 down to 4); card 1 lands. Component: cause-chain — moulded to six stages in a 2×3 grid, numbered red badges, ink icons, last card yellow.
Layout: #notelig line y 820–900: "Jeevan Pramaan की पात्रता शर्तों में ये सुविधा नहीं" 44px. #flow: title "DLC कैसे बनता है?" red 52px y 200; cards 520×340: cols x 120 / 700 / 1280, rows y 250–590 and 640–980; each: badge, icon 120px top-left, English 44px bold, Hindi 36px.
Sub-shots: #notelig @ 0, #flow @ 4.90.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s147's last frame |
| 1.50 | — | — | `words` #notelig-line |
| 4.90 | — | — | shot #flow: six empty card outlines (light) + title |
| 6.82 | — | — | `pop` #f1; `draw` #f1-icon (post office building + small house) |
| 7.72 | — | — | `fade` #f1-a "नज़दीकी post office" |
| 9.06 | — | — | hold |

## s149
Continues: s148
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Card 1 adds the home-visit option; card 2: the operator enters or confirms identity and pension details.
Layout: as s148. Card 1 line 2 "या घर पर visit की request" 36px. Card 2 icon `invoice-sheet` scale 0.3; "Operator" 44px bold; "पहचान + pension details" 36px; "डालता या confirm करता" 36px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s148's last frame |
| 0.54 | — | — | `fade` #f1-b "या घर पर visit की request" |
| 2.94 | — | — | `draw` #arrow12; `pop` #f2; `type` #f2-op "Operator" |
| 4.82 | — | — | `fade` #f2-a "पहचान + pension details" |
| 6.74 | — | — | `fade` #f2-b "डालता" |
| 8.18 | — | — | `fade` #f2-c "या confirm करता" |
| 9.10 | — | — | hold |

## s150
Continues: s149
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Card 3: Aadhaar authentication by fingerprint or face. Card 4 (row 2 left, via elbow arrow): a unique Pramaan ID. Photo: fingerprint-scanner-device — small cut-out 200×130 in card 3's icon place, tilt 2°; if missing, the `fingerprint-scanner` piece scale 0.5.
Layout: card 3: "Aadhaar authentication" 44px / "आधार प्रमाणीकरण" 36px; chips "fingerprint" · "face" 36px. Card 4: "Pramaan ID" 64px bold in a yellow-edged pill; "unique" 36px grey.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s149's last frame |
| 1.06 | — | — | `draw` #arrow23; `pop` #f3; `type` #f3-en "Aadhaar authentication"; 2.40 `fade` #f3-hi |
| 3.34 | — | — | `pop` #photo-scanner; `fade` #chip-fp "fingerprint" |
| 4.66 | — | — | `fade` #chip-face "· face" |
| 6.00 | — | — | `draw` #arrow34 (elbow down to row 2) |
| 7.04 | — | — | `pop` #f4; `fade` #f4-uni "unique" |
| 7.40 | — | — | `stamp` #f4-id "Pramaan ID" |
| 8.96 | — | — | hold |

## s151
Continues: s150
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Card 5: NIC sends the acknowledgement as an SMS to the pensioner's mobile. Card 6 (yellow): DLC reaches the pension authority electronically.
Layout: card 5 icon `phone-sms` scale 0.35; "NIC का SMS" 44px bold; "acknowledgement, सीधे mobile पर" 36px. Card 6 yellow: "Pension authority" 44px bold; "DLC पहुँचा · electronically" 36px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s150's last frame |
| 0.00 | — | — | `draw` #arrow45; `pop` #f5; `type` #f5-en "NIC का SMS" |
| 1.50 | — | — | `pop` #bubble (on phone); `fade` #f5-a "acknowledgement" |
| 2.94 | — | — | `fade` #f5-b "सीधे pensioner के mobile पर" |
| 5.58 | — | — | `draw` #arrow56; `pop` #f6 |
| 6.52 | — | — | `type` #f6-en "Pension authority"; `fade` #f6-a "DLC पहुँचा" |
| 8.20 | — | — | `fade` #f6-b "electronically" |
| 9.78 | — | — | hold |

## s152
Continues: s151
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Pramaan ID also lets the pensioner download it (chip on card 4). Then a belief appears in card 6's foot: "physical copy देनी ज़रूरी" (struck in s153).
Layout: as s151. Card 4 chip "download" 36px with a small ink down-arrow. Card 6 foot y 910–960: "physical copy देनी ज़रूरी?" 36px ink.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s151's last frame |
| 1.10 | — | — | `pulse` #f4-id |
| 2.76 | — | — | `pop` #chip-dl "download"; `draw` #dl-arrow |
| 4.89 | — | — | `color` #f1,#f2,#f3 text {to:'#6f6a63'} (busy screen eases) |
| 5.83 | — | — | `fade` #copy-q "Postal staff ने बनाया →" (36px, card 6 foot) |
| 7.37 | — | — | `fade` #copy "physical copy देनी ज़रूरी?" |
| 8.73 | — | — | hold |

## s153
Continues: s152
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: The belief is struck (slate). Cut to two separate steps: making the DLC vs approving it — approval is the pension authority's job. Component: compare-cards — two neutral cards (red band left "बनना", yellow band right "मंज़ूर होना"), no VS right/wrong colours.
Layout: #flow as s152. #steps: title "दो अलग steps" red 60px y 210; cards y 300–860: left x 120–900, right x 1020–1800, band 100px, big Hindi 64px, detail 44px; VS disc at x 960.
Sub-shots: #flow @ 0, #steps @ 1.10.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s152's last frame |
| 0.60 | — | — | `strike` #copy {color:'#4b4f58'}; `draw` #copy-cross |
| 1.10 | — | — | shot #steps: empty two cards |
| 1.36 | — | — | `type` #make "बनना"; `fade` #make-d "postal staff / IPPB" |
| 2.74 | — | — | `type` #approve "मंज़ूर होना" |
| 3.88 | — | — | `pop` #vs; `fade` #steps-title |
| 8.30 | — | — | `type` #approve-d "Pension authority" |
| 9.56 | — | — | `highlight` #approve-d |

## s154
Continues: no
Section label: PART 6 · JEEVAN PRAMAAN
In: wipe from right · Framing: static
Idea: Wrong details → DLC rejected → talk to the disbursing agency → new DLC with correct details. Component: cause-chain — 4 stages, last card yellow, no bottom strip.
Layout: title "DLC reject हो तो?" red 56px y 210. Four cards x 120–1800 (each 380 wide, gap 40), y 300–900, red arrows between; icons: invoice-sheet with slate cross, slate stamp ring, `system-screen-icon` small, green tick (on last). Text Hindi 44px, terms 48px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | title on; four empty card outlines |
| 0.00 | — | — | `pop` #c1; `fade` #c1-t "Pension details" |
| 0.98 | — | — | `fade` #c1-b "गलत" (slate) |
| 2.42 | — | — | `draw` #a12; `pop` #c2; `type` #c2-t "DLC reject" |
| 4.98 | — | — | `draw` #a23; `pop` #c3; `type` #c3-t "Disbursing agency" |
| 7.96 | — | — | `fade` #c3-b "से बात करें" |
| 9.24 | — | — | `draw` #a34; `pop` #c4; `fade` #c4-t "सही details" |
| 10.56 | — | — | `fade` #c4-b "नया DLC"; 11.28 `draw` #c4-tick (green) |

## s155
Continues: no
Section label: PART 6 · JEEVAN PRAMAAN
In: wipe from right · Framing: static
Idea: Exam trap: Pramaan ID is not valid for life (slate strike), a one-second hold, then the fact: validity is set by the sanctioning authority's rules. Component: exam-trap — banner kicker; one myth card (slate) and one sand fact card in place of the two stamp cards; no remember bar.
Layout: banner x 120–1800, y 170–320. Myth card white x 120–1800, y 360–600: "Pramaan ID: ज़िंदगी भर valid" 64px, slate cross x 1720. Fact card sand x 120–1800, y 640–980: line 1 "Certificate की validity" 52px, line 2 "pension sanction करने वाली authority के नियम" 48px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | red banner with triangle on |
| 0.38 | — | — | `type` #kicker "EXAM TRAP · परीक्षा का जाल" |
| 1.48 | — | — | `pop` #myth; `type` #myth-t "Pramaan ID: ज़िंदगी भर valid" |
| 4.50 | — | — | `strike` #myth-t {color:'#4b4f58'}; `draw` #myth-cross |
| 4.92 | — | — | hold still (one-second pause) |
| 6.24 | — | — | `pop` #fact; `words` #fact-1 "Certificate की validity" |
| 8.32 | — | — | `words` #fact-2 |
| 10.90 | — | — | `highlight` #fact-2 {words:'authority के नियम'} |

## s156
Continues: s155
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Fact card adds: validity over → new certificate and new Pramaan ID. Then cut to the charges card: row 1, IPPB normal charge ₹70 per successful DLC.
Layout: #trap fact card line 3 y 900: "Validity ख़त्म → नया certificate + नई Pramaan ID" 44px. #charges: title "DLC charges" 64px bold y 205 + Hindi "शुल्क" 40px grey; white card x 120–1800, y 260–990 with three rows: R1 y 270–480, R2 y 495–760, R3 y 775–985 (sand dividers). R1: left label "IPPB normal" 48px bold; red perforated stamp "₹70" 80px white at x 560–800; chips right x 840–1780.
Sub-shots: #trap @ 0, #charges @ 6.45.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s155's last frame |
| 1.04 | — | — | `fade` #f3a "Validity ख़त्म →" |
| 2.58 | — | — | `fade` #f3b "नया certificate" |
| 4.30 | — | — | `fade` #f3c "+ नई Pramaan ID" |
| 6.45 | — | — | shot #charges: title + empty card |
| 7.77 | — | — | `type` #r1-lab "IPPB normal" |
| 10.33 | — | — | `fade` #r1-per "हर सफल DLC पर" (40px under stamp) |
| 11.59 | — | — | `stamp` #r1-fee "₹70" |

## s157
Continues: s156
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Row 1 chips: GST/cess included; no separate doorstep charge; for IPPB and non-IPPB.
Layout: R1 chips at x 840–1780 in two lines (y 320, y 420), 40px sand pills.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s156's last frame |
| 0.00 | — | — | `pop` #chip-gst "GST / cess शामिल" |
| 2.56 | — | — | `pop` #chip-door "घर आने का अलग charge नहीं" |
| 4.94 | — | — | `underline` #chip-door {words:'नहीं'} |
| 5.78 | — | — | `pop` #chip-both "IPPB" |
| 7.76 | — | — | `fade` #chip-both-2 "+ non-IPPB, दोनों" |
| 9.76 | — | — | hold |

## s158
Continues: s157
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Two special arrangements where it is free; row 2 opens: EPS.
Layout: small yellow kicker between R1 and R2 at x 1400, y 488: "दो खास व्यवस्थाएँ: free" 36px. R2: left "EPS" 72px bold, "Employees' Pension Scheme" 36px, Hindi "कर्मचारी पेंशन योजना" 34px (x 140–720); right x 760–1780 for green pill and conditions.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s157's last frame |
| 0.70 | — | — | `fade` #kicker "दो खास व्यवस्थाएँ" |
| 2.26 | — | — | `fade` #kicker-free ": free" (green) |
| 4.08 | — | — | `pop` #eps "EPS" |
| 5.88 | — | — | `type` #eps-full "Employees' Pension Scheme" |
| 8.06 | — | — | `fade` #eps-hi |
| 9.00 | — | — | hold |

## s159
Continues: s158
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Row 2: EPFO and IPPB doorstep arrangement, from 1 Dec 2025, free (green pill).
Layout: R2 right: line "EPFO + IPPB doorstep" 44px at y 525; postmark "1 DEC 2025 से" 130px at x 1680, y 560; green pill "Free" 44px at x 760–920, y 600.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s158's last frame |
| 0.00 | — | — | `type` #epfo "EPFO" |
| 1.86 | — | — | `type` #epfo-2 "+ IPPB doorstep" |
| 5.18 | — | — | `stamp` #pm-eps "1 DEC 2025 से" |
| 9.76 | — | — | `pop` #free-eps "Free" (green pill) |
| 10.06 | — | — | hold |

## s160
Continues: s159
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Row 2 conditions as chips: made through IPPB and successful; due or due within 30 days.
Layout: R2 condition chips at y 680–740, x 940–1780: "शर्तें:" 36px grey label, chips 38px sand.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s159's last frame |
| 0.00 | — | — | `fade` #cond-lab "शर्तें:" |
| 2.06 | — | — | `pop` #cond1 "IPPB से बना, सफल" |
| 5.52 | — | — | `pop` #cond2 "due" |
| 7.86 | — | — | `fade` #cond2b "या 30 दिन में due"; 8.32 `highlight` {words:'30 दिन'} |
| 9.98 | — | — | hold |

## s161
Continues: s160
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: static
Idea: Third condition: EPFO approval. Row 3 opens: Gujarat Government's covered retired pensioners.
Layout: R2 chip 3 after cond2 (or second chip line y 640 if needed). R3: left "Gujarat Govt" 56px bold, Hindi "गुजरात सरकार के covered retired pensioners" 36px (x 140–720, two lines).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s160's last frame |
| 0.80 | — | — | `pop` #cond3 "EPFO approval" |
| 2.22 | — | — | `fade` #cond3-hi "जाँच के बाद" (34px) |
| 7.27 | — | — | `type` #guj "Gujarat Govt" |
| 8.71 | — | — | `fade` #guj-hi |
| 10.59 | — | — | hold |

## s162
Continues: s161
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: {on:'#row3', zoom:1.1} slow from 0.50 (camera ends: next continues, returns in s164)
Idea: Row 3: free home DLC from 1 May to 31 July 2026; covered pensioners in other States too.
Layout: R3 right x 760–1780, line A y 810: date postmark "1 MAY – 31 JULY 2026" pill (red outline, 40px); green pill "घर पर DLC free" 40px; chip "दूसरे States से भी" 36px; line B y 900 reserved for s163.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s161's last frame |
| 0.50 | {on:'#row3', zoom:1.1} | — | `type` #guj-date "1 May – 31 July 2026" |
| 4.60 | — | — | `fade` #guj-home "घर पर DLC" |
| 5.78 | — | — | `pop` #guj-free "free" (green) |
| 9.18 | — | — | `pop` #guj-states "दूसरे States से भी" |
| 10.02 | — | — | hold |

## s163
Continues: s162
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: {on:'#row3', zoom:1.1} held
Idea: Row 3 line B: through a nearby post office or Postman; the pensioner gave Aadhaar, mobile number and a PPO or e-PPO copy.
Layout: R3 line B y 900–960: "post office / Postman" 36px grey at left x 760; chips "Aadhaar" · "mobile number" · "PPO / e-PPO copy" 38px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {on:'#row3', zoom:1.1} | — | s162's last frame |
| 1.28 | — | — | `fade` #guj-via "post office" |
| 2.64 | — | — | `fade` #guj-via2 "/ Postman" |
| 6.00 | — | — | `pop` #doc1 "Aadhaar" |
| 7.02 | — | — | `pop` #doc2 "mobile number" |
| 8.84 | — | — | `pop` #doc3 "PPO" |
| 10.44 | — | — | `type` #doc3b "/ e-PPO copy" |

## s164
Continues: s163
Section label: PART 6 · JEEVAN PRAMAAN
In: cut · Framing: returns to static (zoom 1) by 1.5
Idea: That was only for that period: a grey postmark "सिर्फ उस समय की व्यवस्था" on row 3; not a permanent free service for every pensioner.
Layout: grey postmark 150px at x 1650, y 850 (over R3's empty right end); full card back in view.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {on:'#row3', zoom:1.1} | — | s163's last frame |
| 0.20 | {zoom 1, x 0, y 0} inOut over 1.5 s | — | camera eases back to the whole card |
| 0.76 | — | — | `stamp` #pm-only "सिर्फ उस समय" (grey ring) |
| 4.36 | — | — | `underline` #guj-free {words:'free'} (grey) |
| 6.12 | — | — | hold to cut |

## s165
Continues: no
Section label: RECAP · PARTS 5–6
In: fade · Framing: static
Idea: Recap envelope with five keyword rows; each ticks green as said. Component: recap-card — five rows (moulded from four), seal "5".
Layout: envelope x 260–1660, y 170–990; flap y 170–320 with "RECAP · दोहराव" and red title "CSC · Jeevan Pramaan" 48px; seal "5" at V tip. Rows y 330–980, 130 each: English term 52px bold, Hindi 34px beneath (x 320–900); yellow pill right (x 960–1520, 38px); tick circle x 1580. Rows: PO-CSC / डाकघर सामान्य सेवा केंद्र · Digital Sewa / डिजिटल सेवा portal · Debit ✓ Credit ✗ / payments bank · DLC ₹70 / हर सफल DLC · Pramaan ID validity / वैधता.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | envelope with flap, title, seal and five row terms already on (grey ticks empty) |
| 6.72 | — | — | `highlight` #row1-term; 7.40 `draw` #tick1 (green) |
| 8.90 | — | — | `highlight` #row2-term |
| 10.50 | — | — | `draw` #tick2 (green) |
| 11.22 | — | — | `pop` #pill1 "साथी: MeitY वाली CSC company" |
| 14.46 | — | — | hold |

## s166
Continues: s165
Section label: RECAP · PARTS 5–6
In: cut · Framing: static
Idea: Row 2 pill G2C · B2C with a grey line on who decides; row 3 ticks on debit yes, credit no.
Layout: as s165. Row 2 pill "G2C · B2C" ; grey 32px line under pill "loan का फैसला: ज़िम्मेदार संस्था". Row 3 pill "debit हाँ · credit नहीं".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s165's last frame |
| 0.00 | — | — | `pop` #pill2 "G2C · B2C" |
| 3.66 | — | — | `fade` #row2-note "loan का फैसला: ज़िम्मेदार संस्था" |
| 6.70 | — | — | `highlight` #row3-term |
| 8.86 | — | — | `pop` #pill3 "debit हाँ" |
| 10.72 | — | — | `fade` #pill3b "· credit नहीं"; `draw` #tick3 (green) |
| 11.44 | — | — | hold |

## s167
Continues: s166
Section label: RECAP · PARTS 5–6
In: cut · Framing: static
Idea: Row 4 DLC ₹70 ticks; row 5 Pramaan ID validity ticks; one-second hold after the last.
Layout: as s166. Row 4 pill "₹70 · घर आने का अलग charge नहीं"; row 5 pill "sanction authority के नियम".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | static | — | s166's last frame |
| 1.08 | — | — | `pop` #pill4 "₹70" |
| 3.06 | — | — | `draw` #tick4 (green) |
| 5.00 | — | — | `fade` #pill4b "· घर आने का अलग charge नहीं" |
| 6.48 | — | — | `highlight` #row5-term |
| 9.80 | — | — | `pop` #pill5 "sanction authority के नियम" |
| 12.42 | — | — | `draw` #tick5 (green) |
| 12.80 | — | — | hold still to cut (about a second after the last tick) |
## s168
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: fade · Framing: wide (camera stays wide)
Idea: Part 7 opens at the counter: the Gangajal bottle rests in the window, the temple-bell parcel waits on the counter; two ways India Post gives it.
Layout: set citizen-counter. Sign text "Gangajal · Prasadam" (white Inter 56 bold) on `sign`. `gangajal-bottle` scale 1 on `window`. `temple-bell-parcel` scale 0.5 on `counter-right`. Left chip (white, red outline, 420×110) at x 180–600, y 400–510: "चुने हुए post offices" (Hindi 40). Right chip x 1320–1740, y 400–510: "online channels" (Inter 44 bold) + small screen glyph.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set drawn; sign board with "Gangajal · Prasadam"; `temple-bell-parcel` already on `counter-right` |
| 0.18 | — | — | `place` #bottle on spot `window`; `pulse` #bottle at 0.6 |
| 2.74 | — | — | `pop` left chip "चुने हुए post offices" |
| 5.48 | — | — | `pop` right chip "online channels" |
| 6.98 | — | — | `highlight` (soft yellow) behind #bottle's label band; hold to cut |

## s169
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}, slow push to {zoom 1.05} by end (next scene returns)
Idea: Where it comes from and how much: Gangotri → one bottle of 250 ml. Photo: gangotri-bhagirathi — paper cut-out, tilt −1.5°, caption "गंगोत्री" (fallback: ink mountains with a pale-blue river drawn in the same frame). Photo: gangajal-bottles-photo — cut-out at right (fallback: `gangajal-bottle` piece scale 1.8).
Layout: Gangotri cut-out x 140–960, y 200–740, caption y 790. Bottle(s) x 1180–1600, y 220–820. Big "250 ml" (Inter 96 bold, ink) centred under the bottle, x 1180–1600, y 900. Bottom-left line "दो तरह से ले सकते हैं" (Hindi 48, red) at x 140, y 920.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | bottle(s) cut-out at right already on screen |
| 0.28 | — | — | `fade` Gangotri cut-out; `fade` caption "गंगोत्री" at 0.78 |
| 3.34 | — | — | `pop` "250 ml" under the bottle; `underline` it at 3.92 |
| 6.57 | {zoom 1.05} slow | — | `words` "दो तरह से ले सकते हैं"; hold |

## s170
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: Two ways to buy, priced differently. Component: compare-cards — two cards, no right/wrong colours; one takeaway. Photo: india-post-parcel-cutout on the right card (fallback: drawn brown parcel with a red Speed Post-style band, no lettering).
Layout: question "Gangajal कैसे लें?" (Hindi 52, red) y 200. Left card (red band) x 160–900, y 270–760: band "Counter" (Inter 64 white) / "डाकघर के counter से खरीदें" (Hindi 40); small `gangajal-bottle` scale 0.6. Right card (yellow band) x 1020–1760: band "Delivery" / "pack order, डाक से घर तक"; parcel cut-out. VS disc at x 960, y 515. Takeaway band x 160–1760, y 820–960: "दोनों की कीमतें अलग — मिलाइए मत" (Hindi 52).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | question line already shown |
| 0.58 | — | — | `pop` left card with its band + bottle |
| 2.46 | — | — | `pop` right card; parcel `fade` at 4.72 ("घर") |
| 5.90 | — | — | `pop` VS disc; `words` takeaway band |
| 7.08 | — | — | `highlight` words "अलग" |
| 8.32 | — | — | `underline` words "मिलाइए मत"; hold |

## s171
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: The Gangajal price table (held s171–s174). Component: compare-table — 3 columns, 3 rows, values land one per spoken price.
Layout: title "Gangajal की कीमतें" (Hindi 52, red) x 160, y 200; source "Source: India Post" (grey 32) right-aligned x 1760, y 200. Table x 160–1760, y 240–760: header (red) y 240–350 — col 1 "मात्रा" x 160–760, col 2 "Counter" / "काउंटर पर" centre x 1010, col 3 "Delivered" / "घर तक delivery" centre x 1510. Rows (cream/white) 120 high: row1 y 350–490 "1 बोतल · 250 ml" (Hindi 44) + grey "Gangotri" 32; row2 y 490–630 "Pack of 2" (Inter 48 bold) / "2 बोतलों का pack"; row3 y 630–760 "Pack of 4" / "4 बोतलों का pack". Note band (sand) x 160–1760, y 790–870 for s173. Bottom free y 890–990.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | title, source line, table card with red header row already on screen |
| 0.82 | — | — | `reveal` row labels, `{stagger: 0.25}` (all three rows, values empty) |
| 2.30 | — | — | `highlight` header cell "Counter" |
| 3.24 | — | — | `highlight` row1 label "1 बोतल · 250 ml"; hold |

## s172
Continues: s171
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: Prices land on their words: ₹30 counter, ₹121 delivered, ₹201 per pack.
Layout: as s171. Values Inter 72 bold, ink, centred in cells; "per pack" grey Inter 32 under pack values; "—" grey 56 for empty counter cells.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s171's last frame |
| 0.05 | — | — | `pop` "₹30" in row1 · Counter |
| 1.26 | — | — | `highlight` header cell "Delivered" |
| 4.46 | — | — | `pop` "₹121" in row1 · Delivered |
| 7.02 | — | — | `fade` "—" in row2 · Counter |
| 8.78 | — | — | `pop` "₹201" in row2 · Delivered; `fade` "per pack" under it at 9.28; hold |

## s173
Continues: s172
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: Last row, the note, then trap 1: ₹201 is the whole pack.
Layout: as s171. Note band text "Speed Post शामिल · GST नहीं" (Hindi/Inter 44) centred y 830. Trap pill "EXAM TRAP · परीक्षा का जाल" (red, pale-yellow caps 32) x 1300–1760, y 900–970.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s172's last frame; `fade` "—" in row3 · Counter |
| 1.40 | — | — | `pop` "₹321" in row3 · Delivered; `fade` "per pack" at 1.90 |
| 4.08 | — | — | `reveal` note band (from left) |
| 5.84 | — | — | `highlight` words "Speed Post शामिल" |
| 8.73 | — | — | `pop` trap pill |
| 9.63 | — | — | yellow outline `draw` round row2 · Delivered cell (₹201) |
| 11.43 | — | — | `highlight` "per pack" under ₹201; hold |

## s174
Continues: s173
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: Not per bottle; and no GST to add.
Layout: as s173. Slate line "₹201 = हर बोतल" (Hindi 44, slate) x 160–700, y 935. Slate line "+ GST %" (Inter 48, slate) x 800–1100, y 935.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s173's last frame |
| 0.50 | — | — | `fade` slate "₹201 = हर बोतल" |
| 1.08 | — | — | `strike` it (slate) + slate cross |
| 3.14 | — | — | `highlight` words "GST नहीं" in the note band |
| 6.42 | — | — | `fade` slate "+ GST %" |
| 7.36 | — | — | `strike` it (slate); hold to cut |

## s175
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: How to order: a participating post office, or the Department's e-Postoffice / e-commerce channel, giving delivery details.
Layout: title "Order कैसे करें?" (Hindi 52, red) y 200. Left card x 160–860, y 270–780: drawn small post-office front (ink, sand) + "Participating post office" (Inter 52 bold, two lines) / "भाग लेने वाला डाकघर" (Hindi 40). "या" (Hindi 56 grey) at x 960, y 520. Right card x 1060–1760: `system-screen-icon` scale 0.9, screen types "e-Postoffice"; chip below "e-commerce channel" / "ई-कॉमर्स चैनल". Bottom band x 160–1760, y 830–960: "delivery details दें" (Hindi 48).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | title shown |
| 1.10 | — | — | `pop` left card; Hindi line `fade` at 1.60 |
| 6.10 | — | — | `fade` "या" |
| 6.42 | — | — | `pop` right card with screen |
| 7.84 | — | — | `type` "e-Postoffice" on the screen |
| 9.68 | — | — | `pop` chip "e-commerce channel"; Hindi at 10.18 |
| 10.88 | — | — | `reveal` bottom band; `underline` "delivery details" at 11.54; hold |

## s176
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: New term: Holy Blessings = Temple Prasadam. Component: key-term — two stacked stamp-edged red term cards on the left, picture on the right; drop the chain and chips.
Layout: card 1 x 160–940, y 200–440: "Holy Blessings" (Inter 80 white bold) / "पवित्र भेंट की सेवा" (Hindi 44 pale yellow). "यानी" (Hindi 44 grey) x 550, y 500. Card 2 x 160–940, y 560–800: "Temple Prasadam" / "मंदिर का प्रसाद". Right: `temple-icon` scale 1.4 at x 1180–1630, y 200–700; `temple-bell-parcel` scale 0.6 at x 1300, base y 960. Label "Prasad और भेंट, डाक से" (Hindi 44) x 1060–1760, y 760.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | card 1 red stamp shape already on screen (empty) |
| 0.20 | — | — | `type` "Holy Blessings"; Hindi `fade` at 0.70 |
| 1.36 | — | — | `fade` "यानी" |
| 2.14 | — | — | `pop` card 2 "Temple Prasadam"; Hindi `fade` at 2.64 |
| 5.26 | — | — | `draw` temple-icon |
| 7.72 | — | — | `place` temple-bell-parcel; `words` label; hold |

## s177
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: Delivery usually by Speed Post; then the difference: Gangajal = bottled water, Prasadam = temple offering. Photo: postman-delivering-parcel-cutout (fallback: india-post-parcel-cutout, else drawn parcel).
Layout: top strip y 180–500: `temple-icon` scale 0.7 at x 200–420 → ink arrow → photo cut-out x 700–1100 (tilt 1.5°) + pill "Speed Post" (Inter 52 bold) / "स्पीड पोस्ट" at x 1180–1520 → arrow → small drawn house x 1600–1760. Bottom: two cards y 560–960: left x 160–900 "Gangajal" (Inter 64) / "बोतल वाला पानी" (Hindi 48) + bottle icon; right x 1020–1760 "Prasadam" / "मंदिर की भेंट" + bell-parcel icon. "≠" between (grey 72).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | temple-icon at left of the top strip |
| 0.70 | — | — | `draw` arrow; `fade` photo cut-out |
| 3.46 | — | — | `pop` "Speed Post" pill; Hindi at 3.96; `draw` arrow + house at 4.44 |
| 5.40 | — | — | `pop` left card "Gangajal"; Hindi `fade` at 6.16 |
| 7.64 | — | — | `pop` right card "Prasadam"; `fade` "≠"; Hindi at 8.80; hold |

## s178
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: Booking and prices differ; every temple has its own arrangement — no single amount or payee.
Layout: top row y 180–280: "Gangajal ≠ Prasadam" chips (Inter 44) x 160–760; right of them "booking अलग · कीमतें अलग" (Hindi 44) x 820–1760. Title "हर मंदिर की अपनी व्यवस्था" (Hindi 52, red) y 350. Three `temple-icon` scale 0.8 at centres x 440 / 960 / 1480, y 420–700. Slate pills y 880–960: "एक booking amount" x 260–860; "एक पाने वाला" x 1060–1660.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | "Gangajal ≠ Prasadam" chips shown |
| 0.56 | — | — | `words` "booking अलग · कीमतें अलग"; `highlight` "कीमतें अलग" at 1.44 |
| 3.20 | — | — | `words` title |
| 3.80 | — | — | `draw` three temples, `{stagger: 0.25}` |
| 5.64 | — | — | `fade` slate pill "एक booking amount" |
| 7.76 | — | — | `fade` slate pill "एक पाने वाला"; hold |

## s179
Continues: s178
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: Not one for all: some by e-Money Order, some by the temple's own online or offline channel.
Layout: as s178. Labels under temples y 730–840: temple 1 "e-Money Order" (Inter 48 bold) / "ई-मनी ऑर्डर" (Hindi 36); temple 2 "मंदिर का online channel" (Hindi 40); temple 3 "मंदिर का offline channel".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s178's last frame |
| 0.94 | — | — | `strike` both slate pills, `{stagger: 0.2}` + slate cross |
| 2.60 | — | — | `pop` label 1 "e-Money Order"; Hindi `fade` at 3.10 |
| 5.42 | — | — | `pop` label 2 |
| 6.68 | — | — | `pop` label 3 |
| 8.35 | — | — | `highlight` (soft yellow tile) behind temple 1 + label 1 |
| 12.41 | — | — | `pulse` label 1; hold |

## s180
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: Prasadam e-Money Order table, row 1: Somnath. Component: compare-table — 3 columns, 2 tall rows, temple photos as row thumbnails. Photo: somnath-temple, kashi-vishwanath-temple — small cut-outs 200×150 (fallback: temple-icon scale 0.45).
Layout: title "Prasadam · e-Money Order" (Inter 52 red) / "ई-मनी ऑर्डर से प्रसाद" (Hindi 36 grey) y 190–250. Table x 140–1780, y 280–960: header (red) y 280–370: "Temple · मंदिर" x 140–760, "Amount · राशि" centre x 905, "Payee · पाने वाला" x 1060–1780. Row1 y 370–665, row2 y 665–960. Temple cell: thumbnail + "Shri Somnath Temple" (Inter 44 bold, 2 lines). Amount Inter 80 bold. Payee 3 lines Inter 38: "Manager, Shri Somnath Trust," / "Prabhas Patan," / "Gujarat 362268".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | title, table card and header row shown |
| 0.36 | — | — | `fade` Somnath thumbnail; `type` "Shri Somnath Temple" |
| 1.52 | — | — | `pop` "₹270" |
| 3.68 | — | — | `reveal` payee line 1 |
| 6.90 | — | — | `reveal` line 2 "Prabhas Patan," |
| 8.32 | — | — | `reveal` line 3 "Gujarat 362268" |
| 9.94 | — | — | `fade` Kashi thumbnail; `type` "Shri Kashi Vishwanath Temple"; hold |

## s181
Continues: s180
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: Row 2: Kashi Vishwanath ₹251 to SSPO, Varanasi East Division.
Layout: as s180; row2 payee lines: "Senior Superintendent of" / "Post Offices, Varanasi East" / "Division, Varanasi 221001".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s180's last frame |
| 0.05 | — | — | `pop` "₹251" |
| 2.76 | — | — | `reveal` payee line 1 |
| 4.68 | — | — | `reveal` line 2 |
| 6.58 | — | — | `highlight` words "Varanasi East" |
| 7.80 | — | — | `reveal` line 3 "Division, Varanasi 221001"; hold |

## s182
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: At Somnath the sender writes a message on the e-Money Order. Photo: somnath-temple — cut-out, tilt −1.5°, caption "Shri Somnath Temple" (fallback: temple-icon scale 1.2).
Layout: photo x 140–720, y 200–620, caption y 670. e-MO form (white card, #ead9a8 border) x 800–1780, y 190–600: red header "e-Money Order" (Inter 52 white) / "ई-मनी ऑर्डर" (Hindi 36); field rows: "₹270" · "Manager, Shri Somnath Trust" (Inter 36 grey); message box (dashed ink) y 470–570. Label "sender लिखता है:" (Hindi 40) x 820, y 450.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | Somnath cut-out + caption shown |
| 0.40 | — | — | `pop` e-MO form with header and two filled rows |
| 1.33 | — | — | `fade` "sender लिखता है:" |
| 2.44 | — | — | `highlight` form header "e-Money Order" |
| 3.33 | — | — | `draw` empty message box; hold |

## s183
Continues: s182
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: Message "Booking for Prasad"; the Trust sends Prasad by Speed Post; the packet was 400 g. Photo: india-post-parcel-cutout (fallback: drawn brown parcel).
Layout: as s182 plus bottom row y 660–990: ink arrow from form down; parcel cut-out x 900–1260, y 680–980; pill "Speed Post" (Inter 52 bold) / "स्पीड पोस्ट" x 1320–1760, y 720–860; round red postmark-stamp "400 g" (Inter 56) on the parcel's corner.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s182's last frame |
| 0.05 | — | — | `type` "Booking for Prasad" (Georgia 48) in the message box |
| 3.31 | — | — | `highlight` "Manager, Shri Somnath Trust" row |
| 5.00 | — | — | `draw` arrow; `fade` parcel cut-out; `pop` Speed Post pill (Hindi at 5.50) |
| 8.87 | — | — | `stamp` "400 g" on the parcel; hold |

## s184
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: What was in Somnath's 400 g packet; only Somnath's, not every Prasadam.
Layout: header card (red) x 160–1760, y 180–300: "Somnath packet · 400 g" (Inter 56 white) + small temple-bell-parcel at right. Three rows (white, 130 high) y 330–740: "Magas Laddoo" | "200 g"; "तिल Chikki" | "100 g"; "मूंगफली Chikki" | "100 g" (names Inter/Hindi 52, weights Inter 64 bold right-aligned x 1700). Bottom y 790–960: yellow chip "सिर्फ Somnath का packet" (Hindi 48) x 160–900; slate "हर Prasadam में यही" (Hindi 44) x 1000–1700.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | header card shown; `pop` row 1 weight "200 g" at 0.05 |
| 1.00 | — | — | `fade` row 1 name "Magas Laddoo" |
| 2.26 | — | — | `pop` row 2 |
| 4.80 | — | — | `pop` row 3 |
| 7.48 | — | — | `pop` yellow chip "सिर्फ Somnath का packet" |
| 9.95 | — | — | `fade` slate "हर Prasadam में यही" |
| 11.15 | — | — | `strike` it + slate cross; hold |

## s185
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: Kashi Vishwanath: e-Money Order → SSPO Varanasi East Division → Speed Post → the given address. Component: mail-flow — 4 stops. Photo: kashi-vishwanath-temple — cut-out top-left, tilt 1.5° (fallback: temple-icon scale 0.8).
Layout: photo x 140–600, y 180–480, caption "Shri Kashi Vishwanath Temple" (Inter 40 bold) x 660, y 330. Flow y 560–960, four round stops (diameter 200) at x 340 / 760 / 1180 / 1600, y 680; labels under (y 820–940): 1 form icon "e-Money Order" / "ई-मनी ऑर्डर"; 2 drawn post-office "SSPO" / "Varanasi East Division" (grey 32); 3 parcel "Speed Post" / "स्पीड पोस्ट"; 4 (soft yellow) house "दिया गया पता" (Hindi 40).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | photo + caption shown |
| 1.88 | — | — | `pop` stop 1 + label |
| 4.88 | — | — | `draw` arrow; `pop` stop 2 "SSPO"; sub-line at 5.38 |
| 8.56 | — | — | `draw` arrow; `pop` stop 3 |
| 10.78 | — | — | `draw` arrow; `pop` stop 4; hold |

## s186
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: Kashi's Prasad: the whole list (six items), then what the sender writes in both.
Layout: header "Kashi Vishwanath · Prasad में (जैसे)" (Inter/Hindi 48, red) y 200, small temple-icon left. Grid 3×2 of white chips (500×150) x 160–1760, y 260–620: मंदिर की तस्वीर · Rudraksh · Bhabhuti / Raksha Sutra · dry fruits · Mishri (Hindi/Inter 48). Band (sand) x 160–1760, y 700–960: "दोनों में sender लिखे:" (Hindi 44) + chip slots; "पूरा पता" chip x 760–1100, y 760–880.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | header + empty chip grid outlines |
| 0.42 | — | — | `pop` "मंदिर की तस्वीर" |
| 1.92 | — | — | `pop` "Rudraksh" |
| 3.22 | — | — | `pop` "Mishri" |
| 5.36 | — | — | `pop` "Bhabhuti", "Raksha Sutra", "dry fruits", `{stagger: 0.3}` |
| 7.54 | — | — | `reveal` band "दोनों में sender लिखे:" |
| 9.14 | — | — | `pop` chip "पूरा पता"; hold |

## s187
Continues: s186
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: PIN code and mobile number; SMS with Speed Post details; then a different route: TTD.
Sub-shots: #list @ 0.00, #ttd @ 8.42.
Layout: #list = s186 frame; chips "PIN code" x 1140–1440, "mobile number" x 1480–1740 on the band y 760–880; `phone-sms` scale 0.45 at x 1580, base y 690 over the grid's right column (grid chips fade to grey first). #ttd: `temple-icon` scale 1.1 x 160–520, y 220–620; "Tirumala Tirupati Devasthanam" (Inter 64 bold, 2 lines) x 600–1760, y 300–460; "(TTD)" pill red at y 520.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s186's last frame |
| 0.05 | — | — | `pop` chip "PIN code" |
| 1.48 | — | — | `pop` chip "mobile number" |
| 3.80 | — | — | `color` grid chips to supporting grey; `slide` phone-sms from right |
| 5.96 | — | — | `pop` SMS bubble, text "Speed Post details" (Inter 32) |
| 8.42 | — | — | shot #ttd: temple-icon shown; `draw` it |
| 10.12 | — | — | `type` "Tirumala Tirupati Devasthanam"; `pop` "(TTD)" at 11.44; hold |

## s188
Continues: s187
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: TTD: order + payment through TTD's own online/offline channel; then Prasadam by Speed Post.
Layout: #ttd from s187 moves up: title block stays y 220–560 (temple scale shrink not needed). Flow row y 640–960: box 1 x 160–620 "order + payment" (Inter 48); box 2 x 720–1240 "TTD का अपना channel" (Hindi 44) with pills "online" · "offline"; box 3 x 1340–1760 parcel icon + "Speed Post" (Inter 48 bold) / "स्पीड पोस्ट".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s187's last frame (#ttd) |
| 1.52 | — | — | `pop` box 1 "order"; `type` "+ payment" at 2.72 |
| 3.62 | — | — | `draw` arrow; `pop` box 2 |
| 5.36 | — | — | `pop` pill "online"; `pop` "offline" at 6.22 |
| 8.44 | — | — | `draw` arrow; `pop` box 3; Hindi at 9.60 |
| 10.13 | — | — | `pulse` box 3; hold |

## s189
Continues: no
Section label: PART 7 · GANGAJAL & PRASADAM
In: wipe from right · Framing: static {zoom 1}
Idea: One temple's e-Money Order way doesn't carry to another; each temple has its own payee, payment way and offering.
Layout: top row y 190–520: card A x 160–760 "Somnath" (Inter 56 bold) + "e-Money Order ₹270" (Inter 40); arrow x 800–1120 (ink); card B x 1160–1760 "Kashi Vishwanath" + "e-Money Order ₹251". Bottom y 600–960: heading "हर मंदिर का अपना:" (Hindi 52 red) y 640; three chips y 720–880: "पाने वाला" x 160–660, "payment तरीका" x 710–1210, "भेंट" x 1260–1760 (Hindi/Inter 48).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | card A shown |
| 3.02 | — | — | `pop` card B; `draw` arrow A→B |
| 4.78 | — | — | slate cross on the arrow; `strike` the arrow (slate) |
| 5.85 | — | — | `words` heading "हर मंदिर का अपना:" |
| 7.18 | — | — | `pop` chip "पाने वाला" |
| 8.94 | — | — | `pop` chip "payment तरीका"; hold |

## s190
Continues: s189
Section label: PART 7 · GANGAJAL & PRASADAM
In: cut · Framing: static {zoom 1}
Idea: …and its own offering.
Layout: as s189.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s189's last frame |
| 0.92 | — | — | `pop` chip "भेंट"; hold to cut |

## s191
Continues: no
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: fade · Framing: wide (stays wide)
Idea: Part 8 opens at the counter: a globe-tagged parcel in the window — DNK helps commercial exporters export by post.
Layout: set citizen-counter. `globe-parcel` scale 1 on `window`. Sign text "DNK" (Inter 80 white bold). Left block x 180–620, y 360–600: "Dak Ghar" / "Niryat Kendra" (Inter 56 bold) / "डाक घर निर्यात केंद्र" (Hindi 40 grey). Right chip x 1300–1740, y 380–520: "commercial exporters" (Inter 44 bold) / "व्यावसायिक निर्यातक" (Hindi 36); under it y 560–640: "postal channel से export" (Hindi 40).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set drawn; `globe-parcel` already on `window` |
| 0.18 | — | — | `type` "DNK" on the sign |
| 1.80 | — | — | `words` "Dak Ghar Niryat Kendra"; Hindi `fade` at 3.68 |
| 4.28 | — | — | `pop` chip "commercial exporters"; Hindi at 4.78 |
| 6.26 | — | — | `words` "postal channel से export" |
| 7.62 | — | — | `pulse` #globe on the parcel; hold |

## s192
Continues: no
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: wipe from right · Framing: static {zoom 1}
Idea: Who DNK serves: six groups on two screens of three; then the partner, CBIC.
Sub-shots: #groupsA @ 0.00, #groupsB @ 4.58, #partner @ 8.82.
Layout: #groupsA/#groupsB: heading "छोटे producers के लिए" (Hindi 52 red) y 200; three cards (500×520) x 160–660 / 710–1210 / 1260–1760, y 300–820, each a simple ink icon (top) + name. A: कारीगर · बुनकर · छोटे व्यापारी (Hindi 56). B: "MSMEs" (Inter 72) / "सूक्ष्म, लघु और मध्यम उद्यम" (Hindi 36) · महिला उद्यमी · "Self-Help Groups" / "स्वयं सहायता समूह". Footer "पूरी list: 6 समूह" (Hindi 40 grey) y 900 on B. #partner: two cards x 160–860 and 1060–1760, y 300–700, "+" (ink 96) at 960: left "Department of Posts" / "डाक विभाग"; right "CBIC" (Inter 120 bold red).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | #groupsA heading + three empty card frames |
| 2.48 | — | — | `pop` "कारीगर" |
| 3.34 | — | — | `pop` "बुनकर"; `pop` "छोटे व्यापारी" at 3.98 |
| 4.58 | — | — | shot #groupsB: `pop` "MSMEs" first; Hindi at 5.08; others `pop` `{stagger: 0.4}` from 5.6 |
| 7.24 | — | — | `fade` footer "पूरी list: 6 समूह" |
| 8.82 | — | — | shot #partner: left card shown; `pop` it at 9.34 |
| 11.72 | — | — | `fade` "+"; `pop` "CBIC"; hold |

## s193
Continues: s192
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: CBIC spelled out; then 1,013 DNKs across the country. Component: big-number — stamp card only, no breakdown, no date/postmark (notes give none).
Sub-shots: #partner @ 0.00, #count @ 5.16.
Layout: #partner as s192; under CBIC card y 720–960: "Central Board of Indirect Taxes and Customs" (Inter 44 bold, 2 lines) / "केंद्रीय अप्रत्यक्ष कर और सीमा शुल्क बोर्ड" (Hindi 36). #count: red perforated stamp card x 360–1100, y 220–820 with "1,013" (Inter 180 white), "DNKs" (Inter 72 pale yellow) under; `globe-parcel` scale 1 at x 1200–1700, base y 760; line "देश भर में चल रहे" (Hindi 52) x 360–1700, y 920.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s192's last frame |
| 0.48 | — | — | `reveal` full name under CBIC; Hindi `fade` at 4.32 |
| 5.16 | — | — | shot #count: stamp card + globe-parcel shown |
| 6.08 | — | — | `pop` "1,013" |
| 6.94 | — | — | `fade` "DNKs" |
| 7.88 | — | — | `words` "देश भर में चल रहे"; hold |

## s194
Continues: no
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: wipe from right · Framing: static {zoom 1}
Idea: DNK joins two things: staff help at an authorised postal facility, and online documentation.
Layout: heading "DNK = दो चीज़ें साथ" (Inter/Hindi 52 red) y 200. Left panel (white, red band) x 160–900, y 260–960: band "Authorised postal facility" (Inter 44 white) / "अधिकृत डाक सुविधा" (Hindi 36); under band "staff की मदद" (Hindi 48) y 420; list area y 470–940 (filled in s195). "+" at 960, y 520. Right panel (yellow band) x 1020–1760, y 260–960: band "Online documentation" / "ऑनलाइन दस्तावेज़"; `system-screen-icon` scale 0.5 at top-right of panel, screen types "DNK portal".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | heading "DNK" part shown |
| 0.96 | — | — | `words` "= दो चीज़ें साथ" |
| 2.62 | — | — | `pop` left panel band; Hindi at 3.12 |
| 4.90 | — | — | `fade` "staff की मदद" |
| 6.10 | — | — | `fade` "+" |
| 6.88 | — | — | `pop` right panel band; screen `type` "DNK portal" at 7.38; hold |

## s195
Continues: s194
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: What staff guide on: documents, packing, prohibited and restricted goods, other export conditions.
Layout: as s194; left list rows (Hindi/Inter 44, 100 high) y 480–900, each with a small ink tick-bullet: "documents" · "packing" · "Prohibited और restricted goods" (Inter 40 bold) / "निषिद्ध और प्रतिबंधित वस्तुएँ" (Hindi 34) · "export की बाकी शर्तें".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s194's last frame; `pulse` "staff की मदद" |
| 1.24 | — | — | `pop` row "documents" |
| 2.82 | — | — | `pop` row "packing" |
| 3.76 | — | — | `pop` row "Prohibited और restricted goods"; Hindi at 5.50 |
| 7.96 | — | — | `pop` row "export की बाकी शर्तें"; hold |

## s196
Continues: s195
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: The exporter on the portal: self-booking, labels, invoices, online payment, tracking; then the new term PBE. Component: key-term (shot #pbe) — stamp card + white meaning card, no chain.
Sub-shots: #dnk @ 0.00, #pbe @ 7.99.
Layout: #dnk = s195 frame; right panel rows y 520–940 as chips in 2 columns (Inter 44): self-booking · labels / invoices · online payment / tracking. #pbe: red stamp card x 160–820, y 200–700: "Postal Bill of Export" (Inter 72 white, 2 lines) / "डाक निर्यात बिल" (Hindi 44 pale yellow); pill "PBE" (Inter 64) y 620. White meaning card x 880–1760, y 200–700 (empty until s197).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s195's last frame |
| 0.72 | — | — | `color` left list to supporting grey; `pulse` screen |
| 2.08 | — | — | `pop` "self-booking" |
| 3.18 | — | — | `pop` "labels"; `pop` "invoices" at 4.22 |
| 5.38 | — | — | `pop` "online payment"; `pop` "tracking" at 6.56 |
| 7.99 | — | — | shot #pbe: stamp card shown; `type` "Postal Bill of Export" at 8.19; Hindi at 9.90 |
| 10.97 | — | — | `pop` "PBE" pill; hold |

## s197
Continues: s196
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: PBE = the export declaration for commercial goods sent by post; needs a valid IEC.
Layout: #pbe; meaning card lines (Hindi 44, 3 lines): "postal channel से भेजे गए" / "commercial goods का" / "export declaration" (Inter 52 bold). Chip row y 780–960: yellow chip "valid IEC" (Inter 64 bold) x 160–620; slot right x 680–1760 for its full name (s198).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s196's last frame |
| 0.54 | — | — | `words` line 1; line 2 at 2.48 |
| 4.04 | — | — | `words` "export declaration" |
| 4.62 | — | — | `highlight` "export declaration" |
| 8.30 | — | — | `pop` chip "valid IEC"; hold |

## s198
Continues: s197
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: IEC = Import-Export Code; then the PBE grid: form depends on filing (manual or electronic) and type of export. Component: compare-table — 2×2 grid with row and column heads (held s198–s201).
Sub-shots: #pbe @ 0.00, #grid @ 2.85.
Layout: #pbe chip right: "Import-Export Code" (Inter 56 bold) / "आयात-निर्यात कोड" (Hindi 36). #grid: title "PBE का form · दो बातें" (Inter/Hindi 48 red) y 190. Grid card x 160–1760, y 230–820: header row y 230–350 (red): col e-commerce x 640–1180, col other commercial x 1200–1760; row heads x 160–620: row Manual y 350–585, row Electronic y 585–820. Cells empty. Band y 850–990 left free for s201.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s197's last frame |
| 0.96 | — | — | `reveal` "Import-Export Code"; Hindi at 1.46 |
| 2.85 | — | — | shot #grid: title + empty grid card |
| 7.29 | — | — | `highlight` row-head column |
| 7.77 | — | — | `pop` row head "Manual" (Inter 56) / "at Foreign Post Office" (Inter 36) / "विदेश डाकघर पर" (Hindi 34) |
| 9.07 | — | — | `pop` row head "Electronic" / "on DNK portal" / "DNK portal पर"; hold |

## s199
Continues: s198
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: Second axis: e-commerce or other commercial; then focus the manual row.
Layout: #grid as s198.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s198's last frame |
| 1.86 | — | — | `pop` column head "e-commerce" (Inter 52 white) / "ई-कॉमर्स" (Hindi 34 pale yellow) |
| 4.06 | — | — | `pop` column head "Other commercial" / "अन्य व्यावसायिक" |
| 7.36 | — | — | soft yellow `highlight` behind row head "Manual · at Foreign Post Office" |
| 8.90 | — | — | `pulse` "Manual"; hold |

## s200
Continues: s199
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: Manual: PBE-I / PBE-II; electronic on DNK portal: PBE-3.
Layout: #grid; cell values Inter 96 bold ink, centred.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s199's last frame |
| 1.10 | — | — | `pop` "PBE-I" (Manual × e-commerce) |
| 4.14 | — | — | `pop` "PBE-II" (Manual × other commercial) |
| 6.42 | — | — | `highlight` moves: soft yellow behind row head "Electronic · on DNK portal" |
| 11.00 | — | — | `pop` "PBE-3" (Electronic × e-commerce); hold |

## s201
Continues: s200
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: PBE-4 completes the grid; then who doesn't file a PBE.
Layout: #grid; band (sand) x 160–1760, y 850–990: "कौन PBE नहीं भरता?" (Hindi 48, red) x 190; answer at x 900: "आम व्यक्ति · personal gift" (Hindi/Inter 48) with green tick.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s200's last frame |
| 1.16 | — | — | `pop` "PBE-4"; yellow outline `draw` round the Electronic row (PBE-3, PBE-4) at 1.80 |
| 3.62 | — | — | `reveal` band with "कौन PBE नहीं भरता?" |
| 6.00 | — | — | `words` "आम व्यक्ति" |
| 7.08 | — | — | `words` "· personal gift"; green tick `draw` at 7.82; hold |

## s202
Continues: no
Section label: PART 8 · DAK GHAR NIRYAT KENDRA
In: cut · Framing: static {zoom 1}
Idea: Not a firm or company. Trap: PBE exemption doesn't remove customs declaration or restrictions. Component: myth-fact — wrong belief struck in slate, fact on green pill.
Layout: top card (white) x 160–1760, y 180–400: green tick + "PBE नहीं: आम व्यक्ति · personal gift" (Hindi/Inter 48); slate chip "firm / company" x 1300–1700. Myth card x 160–1760, y 440–660: slate pill "भ्रम"; "PBE से छूट = customs declaration और restrictions खत्म" (Hindi/Inter 44). Fact card (sand) x 160–1760, y 700–980: green pill "सही"; "Customs declaration और restrictions लागू रहते हैं" (Inter/Hindi 52).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | top card shown (carries s201's answer) |
| 0.05 | — | — | `fade` slate chip "firm / company"; `strike` it + slate cross at 1.36 |
| 2.36 | — | — | `pop` myth card |
| 4.34 | — | — | `strike` words "खत्म" (slate) + slate cross |
| 5.14 | — | — | `pop` fact card; `highlight` "Customs declaration" |
| 7.16 | — | — | `highlight` "restrictions"; hold |

## s203
Continues: no
Section label: RECAP · PARTS 7–8
In: fade · Framing: static {zoom 1}
Idea: Recap envelope, Parts 7–8: five keywords tick green as said. Component: recap-card — 5 rows (flap title "Gangajal · Prasadam · DNK", seal "5").
Layout: envelope x 260–1660, y 170–990; flap y 170–330 ("RECAP · दोहराव" pale yellow 32, title Inter 48 red). Rows 130 high y 340–990, each: English term (Inter 48 bold) + Hindi (36) left x 300; yellow pill right x 1250–1560; tick x 1600. Row 1 "Gangajal · Counter" / "काउंटर पर" pill "₹30", grey sub-line "Gangotri · 250 ml · GST नहीं" (Hindi/Inter 32). Row 2 "Delivery" / "घर तक" pill "₹121". Row 3 "Somnath" / "e-Money Order" pill "₹270". Row 4 "Kashi Vishwanath" / "e-Money Order" pill "₹251". Row 5 "DNK electronic" / "डाक घर निर्यात केंद्र" pill "PBE-3, PBE-4".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope with flap, title and seal shown |
| 5.56 | — | — | `pop` row 1 term "Gangajal · Counter" |
| 6.76 | — | — | `words` sub-line (Gangotri, 250 ml at 8.00) |
| 10.80 | — | — | `pop` pill "₹30"; green tick `draw` |
| 11.76 | — | — | `highlight` "GST नहीं" in the sub-line; hold |

## s204
Continues: s203
Section label: RECAP · PARTS 7–8
In: cut · Framing: static {zoom 1}
Idea: Delivery prices, then the two temple e-MOs, by Speed Post.
Layout: as s203; row 2 grey sub-line "₹201 · ₹321 हर pack" (32); rows 3–4 grey sub-line "Speed Post से" (32).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s203's last frame; `pop` row 2 term "Delivery" |
| 0.68 | — | — | `pop` pill "₹121"; green tick `draw` |
| 2.44 | — | — | `words` sub-line "₹201 · ₹321 हर pack" (₹321 at 4.16) |
| 7.94 | — | — | `pop` row 3 term "Somnath" |
| 8.72 | — | — | `pop` pill "₹270"; green tick `draw` |
| 10.50 | — | — | `pop` row 4 term "Kashi Vishwanath" |
| 11.84 | — | — | `pop` pill "₹251"; green tick `draw` |
| 13.98 | — | — | `fade` "Speed Post से" under rows 3 and 4; hold |

## s205
Continues: s204
Section label: RECAP · PARTS 7–8
In: cut · Framing: static {zoom 1}
Idea: DNK electronic: PBE-3 e-commerce, PBE-4 the rest — last tick, then a one-second hold.
Layout: as s204; row 5 pill "PBE-3, PBE-4"; grey sub-line "e-commerce · बाकी" (32).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s204's last frame; `pop` row 5 term "DNK electronic" |
| 1.14 | — | — | `pop` pill text "PBE-3" |
| 3.66 | — | — | `words` sub-line "e-commerce" |
| 4.04 | — | — | `type` ", PBE-4" in the pill; green tick `draw` at 4.40 |
| 5.34 | — | — | `words` "· बाकी"; hold still to the cut (≥1 s after the last tick) |

## s206
Continues: no
Section label: PART 9 · DAK CHAUPAL
In: fade · Framing: wide (stays wide)
Idea: Part 9 opens at the counter: the mobile post van on the counter — Dak Chaupal, a public outreach programme; staff go among people.
Layout: set citizen-counter. `mobile-post-van` scale 0.85 on `counter-centre`. Sign text "Dak Chaupal" (Inter 64 white). Left block x 180–600, y 360–640: "Public outreach programme" (Inter 52 bold, 3 lines) / "जन संपर्क कार्यक्रम" (Hindi 40 grey). Right chips x 1320–1740, stacked y 340–720 (90 high, white, red outline, Hindi 40): "लोगों के बीच जाकर" · "services समझाना" (s207 adds two).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | set drawn; van already on `counter-centre` |
| 0.16 | — | — | `type` "Dak Chaupal" on the sign |
| 2.04 | — | — | `words` "Public outreach programme"; Hindi `fade` at 2.94 |
| 5.80 | — | — | `pop` chip "लोगों के बीच जाकर" |
| 7.38 | — | — | `pop` chip "services समझाना"; hold |

## s207
Continues: s206
Section label: PART 9 · DAK CHAUPAL
In: cut · Framing: wide, then flat {zoom 1} after the sub-shot
Idea: Talks with people, brings government and postal facilities close; its aims: financial inclusion, Digital India, reach to villages.
Sub-shots: #counter @ 0.00, #aims @ 5.99.
Layout: #counter = s206 + chips "बात करना" (y 540) and "सरकारी और postal सुविधाएँ पास" (y 640). #aims: heading "मकसद" (Hindi 56 red) y 200; three cards (500×560) x 160–660 / 710–1210 / 1260–1760, y 280–840, each with an ink icon: rupee coin, phone with tick, village hut. Card 1 "Financial inclusion" (Inter 52 bold) / "वित्तीय समावेशन" (Hindi 40); card 2 "Digital India" / "डिजिटल इंडिया"; card 3 "गाँव, दूर-दराज़ और पिछड़े इलाकों तक पहुँच" (Hindi 44, 3 lines).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | s206's last frame |
| 0.53 | — | — | `pop` chip "बात करना" |
| 3.32 | — | — | `pop` chip "सरकारी और postal सुविधाएँ पास" |
| 5.99 | {zoom 1} | — | shot #aims: heading "मकसद" shown |
| 6.95 | — | — | `pop` card 1; Hindi at 7.45 |
| 8.91 | — | — | `pop` card 2; Hindi at 9.41 |
| 10.69 | — | — | `pop` card 3 with icon + "गाँव,"; hold |

## s208
Continues: s207
Section label: PART 9 · DAK CHAUPAL
In: cut · Framing: static {zoom 1}
Idea: Reach to remote and backward areas; services explained there — all seven, on two screens (4 + 3).
Sub-shots: #aims @ 0.00, #servicesA @ 3.06, #servicesB @ 8.14.
Layout: heading "Dak Chaupal में समझाई जाने वाली सेवाएँ" (Hindi/Inter 48 red) y 200 on both service shots. #servicesA: 2×2 cards (780×300) x 160–940 / 980–1760, y 260–560 / 600–900: "Savings accounts" / "बचत खाते" (+ `passbook` scale 0.35) · "PLI और RPLI" / "डाक जीवन बीमा · ग्रामीण डाक जीवन बीमा" · "IPPB" / "इंडिया पोस्ट पेमेंट्स बैंक" · "Direct Benefit Transfer" / "प्रत्यक्ष लाभ अंतरण". #servicesB: three cards (500×560) x 160–660 / 710–1210 / 1260–1760, y 280–840: "Aadhaar" / "आधार" · "e-commerce" / "ई-कॉमर्स" · "Export facilities" / "निर्यात सुविधाएँ"; footer "4 + 3 = 7 सेवाएँ" (Hindi 40 grey) y 920. English Inter 52 bold, Hindi 36–40.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s207's last frame; `reveal` card 3's rest "दूर-दराज़ और पिछड़े इलाकों तक पहुँच" at 0.05 |
| 3.06 | — | — | shot #servicesA: heading + empty card frames |
| 3.44 | — | — | `pop` "Savings accounts" + passbook |
| 4.98 | — | — | `pop` "PLI और RPLI"; Hindi at 6.50 |
| 7.00 | — | — | `pop` "IPPB", "Direct Benefit Transfer", `{stagger: 0.35}` |
| 8.14 | — | — | shot #servicesB: `pop` "Aadhaar" |
| 8.74 | — | — | `pop` "e-commerce", "Export facilities", `{stagger: 0.35}`; `fade` footer at 10.26; hold |

## s209
Continues: s208
Section label: PART 9 · DAK CHAUPAL
In: cut · Framing: static {zoom 1}
Idea: Full list stays; service camps hand out passbooks or policy bonds; Gujarat's Mobile Theatre Van campaign. Photo: india-post-delivery-van-cutout — optional cut-out standing in the van's place (fallback: `mobile-post-van` piece).
Sub-shots: #servicesB @ 0.00, #camp @ 1.79, #van @ 8.16.
Layout: #camp: card x 160–1760, y 200–960: "Service camps" (Inter 72 bold) / "सेवा शिविर" (Hindi 44) top-left; `passbook` scale 1 at x 400–640, base y 820; `invoice-sheet` scale 0.8 as a policy bond (sand header) at x 1100–1340, base y 820; labels "passbooks" / "policy bonds" (Inter 44) under each y 870; "बाँटे जा सकते हैं" (Hindi 44) x 160–1760 centred y 940. #van: van (piece scale 1.15 or photo) x 160–900, base y 860; "Gujarat में" (Hindi 48) x 1000, y 220; "Mobile Theatre Van" (Inter 72 bold) / "campaign" / "मोबाइल थिएटर वैन अभियान" (Hindi 40) x 1000–1760, y 280–520 (postmark and route join in s210 below, y 560–910).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s208's last frame (#servicesB, all three + footer) |
| 1.05 | — | — | `pulse` footer "4 + 3 = 7 सेवाएँ" |
| 1.79 | — | — | shot #camp: "Service camps" heading shown; Hindi `fade` at 2.21 |
| 4.25 | — | — | `place` passbook; label `fade` |
| 5.49 | — | — | `place` policy-bond sheet; label `fade` |
| 6.38 | — | — | `words` "बाँटे जा सकते हैं" |
| 8.16 | — | — | shot #van: van shown; `words` "Gujarat में" |
| 10.06 | — | — | `type` "Mobile Theatre Van"; "campaign" at 11.34; Hindi at 11.82; hold |

## s210
Continues: s209
Section label: PART 9 · DAK CHAUPAL
In: cut · Framing: static {zoom 1}
Idea: Started 14 Oct 2026 from Navrangpura HPO, Ahmedabad; the van goes to fixed places in the Circle.
Layout: #van as s209. Red round postmark (diameter 320, double ring, wavy cancel lines) at x 1000–1320, y 560–880: "14 Oct 2026" (Inter 44 bold) across the centre, "Navrangpura HPO, Ahmedabad" (Inter 32 bold) on the ring. Route: dashed ink line x 1380–1760, y 700 with three red pins (40 tall) at x 1420 / 1590 / 1740. Label "Circle की तय जगहें" (Hindi 36) x 1380–1760, y 780.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s209's last frame |
| 0.72 | — | — | `stamp` postmark with "14 Oct 2026" |
| 2.70 | — | — | `reveal` ring text "Navrangpura HPO, Ahmedabad" (Ahmedabad lands by 4.98) |
| 6.56 | — | — | `pulse` van |
| 7.58 | — | — | `draw` dashed route; `pop` three pins `{stagger: 0.2}` |
| 8.22 | — | — | `fade` "Circle की तय जगहें"; hold |

## s211
Continues: s210
Section label: PART 9 · DAK CHAUPAL
In: cut · Framing: static {zoom 1}
Idea: At every stop, a Dak Chaupal.
Layout: as s210; under the route label a yellow pill x 1380–1760, y 830–910: "हर पड़ाव पर Dak Chaupal" (Hindi/Inter 36); small yellow dots ring each pin.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s210's last frame |
| 0.74 | — | — | `pulse` the three pins `{stagger: 0.12}` |
| 1.42 | — | — | `pop` pill "हर पड़ाव पर Dak Chaupal"; hold to cut |
## s212
Continues: no
Section label: KEY POINTS
In: fade · Framing: static {zoom 1} (camera ends: returns)
Idea: The closing summary starts: one envelope recap card per topic group; group 1 = Retail Post. Component: recap-card — moulded to one full-frame envelope with 4 row slots, part icon at top-left, Hindi "ज़रूरी बातें" instead of 'RECAP · दोहराव'.
Layout (the KEY POINTS envelope, identical in s212–s229): white envelope #env x 140–1780, y 160–990, 3 px ink, flap #f3ead6 V from (140,160) to tip (960,330) to (1780,160); red seal #seal r 38 at the tip holding the row count in white; on the flap the group title (English bold 56 px #9e1b1b, y 210) with Hindi 40 px grey (y 262); part icon #icon ~150 px at x 180–330, y 180–330; grey 36 px "ज़रूरी बातें" right-aligned at x 1720, y 220. Body rows share y 360–920 evenly (4 rows = 140 each, thin #ead9a8 dividers): English term bold 60 px ink at x 220, Hindi 40 px grey beneath; yellow pill (#fde9a6, #f2b705 edge, text #8a5d00 44 px, two lines at 40 px if needed) x 900–1600; green tick circle at x 1680. Footer y 965: grey 32 px source/date line where given.
This card: title "Retail Post · e-Payment" / "खुदरा डाक · ई-भुगतान", icon invoice-calendar-icon, seal "4".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, flap title, icon, seal, "ज़रूरी बातें" already on (fade in) |
| 2.80 | — | — | `fade` #r1-en "Retail Post" |
| 3.28 | — | — | `fade` #r1-hi "खुदरा डाक" |
| 3.94 | — | — | `pop` #r1-pill, `type` #r1-pill-t "departmental + third-party products" (cps 14) |
| 6.74 | — | — | `draw` #r1-tick (green) |
| 8.46 | — | — | `fade` #r2-en "Circle Head", 8.96 `fade` #r2-hi "डाक परिमंडल प्रमुख" |
| 8.88 | — | — | `pop` #r2-pill "agreement करता है" |
| 10.08 | — | — | `draw` #r2-tick |

## s213
Continues: s212
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: Same Retail Post envelope fills rows 3 and 4. Component: recap-card (as s212).
Layout: exactly s212's last frame; rows 3–4 land in slots y 640–780 and 780–920.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s212's last frame: rows 1–2 with green ticks |
| 0.00 | — | — | `fade` #r3-en "e-Payment", 0.50 `fade` #r3-hi "ई-भुगतान" |
| 1.44 | — | — | `pop` #r3-pill two lines "third party के" / "bills और payments जमा" |
| 4.68 | — | — | `draw` #r3-tick |
| 5.64 | — | — | `pop` #r4-pill two lines "partnerships के charges और" / "accounting की instructions" |
| 9.46 | — | — | `fade` #r4-en "Director General", 9.96 `fade` #r4-hi "महानिदेशक" |
| 10.72 | — | — | `draw` #r4-tick |

## s214
Continues: no
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: Second Retail Post card: Media Post, Direct Post, what is not sold (credit card) and what is (UTI mutual funds). Component: recap-card (as s212).
Layout: the s212 envelope; title "Retail Post" / "खुदरा डाक", icon invoice-calendar-icon, seal "4". Row 3 is the wrong-style row: slate term, slate pill, slate cross in the tick place.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, icon, seal on |
| 0.00 | — | — | `fade` #r1-en "Media Post", 0.50 `fade` #r1-hi "विज्ञापन डाक सेवा" |
| 0.94 | — | — | `pop` #r1-pill "advertising"; 1.78 `draw` #r1-tick |
| 2.72 | — | — | `fade` #r2-en "Direct Post", 3.22 `fade` #r2-hi "बिना पते की प्रचार डाक" |
| 3.80 | — | — | `pop` #r2-pill "बिना पते का प्रचार"; 4.84 `draw` #r2-tick |
| 6.44 | — | — | `fade` #r3-en "Credit card" (slate), 6.94 `fade` #r3-hi "क्रेडिट कार्ड" |
| 7.24 | — | — | `pop` #r3-pill (slate edge, slate text) "India Post नहीं देता"; 7.58 `strike` #r3-en, `draw` #r3-cross (slate) |
| 8.48 | — | — | `fade` #r4-en "Mutual funds", 8.98 `fade` #r4-hi "म्यूचुअल फंड" |
| 9.60 | — | — | `pop` #r4-pill "सिर्फ UTI के"; 10.30 `draw` #r4-tick |

## s215
Continues: no
Section label: KEY POINTS
In: wipe from right · Framing: static {zoom 1} (camera ends: returns)
Idea: Aadhaar group, card 1: the two update types. Component: recap-card (as s212).
Layout: the s212 envelope; title "Aadhaar" / "आधार", icon id-card-icon, seal "2". Two rows share y 360–920 (280 each): term 68 px, Hindi 44 px, pill x 900–1600 height 150.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title "Aadhaar", id-card icon, seal on |
| 1.36 | — | — | `fade` #r1-en "Demographic update", 1.88 `fade` #r1-hi "जनसांख्यिकीय अद्यतन" |
| 2.82 | — | — | `pop` #r1-pill "personal details" |
| 4.14 | — | — | `type` #r1-pill-2 "बदलता है" (second pill line); 4.78 `draw` #r1-tick |
| 5.52 | — | — | `fade` #r2-en "Biometric update", 6.02 `fade` #r2-hi "बायोमेट्रिक अद्यतन" |
| 7.22 | — | — | `pop` #r2-pill with `fade` #r2-a "photo" |
| 8.20 | — | — | `fade` #r2-b "· fingerprints" |
| 9.44 | — | — | `fade` #r2-c "· irises"; 9.80 `draw` #r2-tick |

## s216
Continues: no
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: Aadhaar card 2: forms, the under-5 rule, MBU ages, free MBU alone. Component: recap-card (as s212).
Layout: the s212 envelope, 4 rows; title "Aadhaar" / "आधार", icon id-card-icon, seal "4". Row 2's term is Hindi only (bold 52 px, no line beneath).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, icon, seal on; `fade` #r1-en "Aadhaar forms", 0.50 `fade` #r1-hi "आधार फ़ॉर्म" |
| 0.58 | — | — | `pop` #r1-pill with "Form 1"; 1.14 `fade` "· 3"; 1.92 `fade` "· 5"; 2.20 `draw` #r1-tick |
| 2.52 | — | — | `fade` #r2-term "5 साल से कम" |
| 4.82 | — | — | `pop` #r2-pill "fingerprints और iris नहीं"; 6.16 `draw` #r2-tick |
| 6.96 | — | — | `fade` #r3-en "MBU", 7.46 `fade` #r3-hi "अनिवार्य बायोमेट्रिक अद्यतन" |
| 7.70 | — | — | `pop` #r3-pill "5 और 15 साल"; 8.98 `draw` #r3-tick |
| 9.72 | — | — | `fade` #r4-en "Free MBU", 10.22 `fade` #r4-hi "मुफ़्त MBU" |
| 11.00 | — | — | `pop` #r4-pill "अकेला transaction"; 12.20 `draw` #r4-tick |

## s217
Continues: no
Section label: KEY POINTS
In: wipe from right · Framing: static {zoom 1} (camera ends: returns)
Idea: Aadhaar fees: CELC, then the three main fees; at "home service" a hard cut to fees card 2. Component: recap-card (as s212).
Layout: #fees1 = s212 envelope, title "Aadhaar fees" / "आधार शुल्क", icon id-card-icon, seal "4", footer "1 Oct 2025 – 30 Sept 2028 · taxes सहित · Source: UIDAI". #fees2 = same envelope, title "Aadhaar fees · status" / "आधार शुल्क · स्थिति", seal "4", same footer.
Sub-shots: #fees1 @ 0.00, #fees2 @ 14.20.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | #fees1 envelope, title, icon, seal, footer on; `fade` #f1-r1-en "CELC" |
| 2.16 | — | — | `pop` #f1-r1-pill, `type` "Child Enrolment Lite Client" (cps 12); 2.66 `fade` #f1-r1-hi "बाल नामांकन"; 4.80 `draw` tick |
| 5.22 | — | — | `fade` #f1-r2-en "New enrolment", 5.72 `fade` #f1-r2-hi "नया नामांकन" |
| 6.46 | — | — | `pop` #f1-r2-pill "Free"; 6.90 `draw` tick |
| 8.52 | — | — | `fade` #f1-r3-en "Demographic update", 9.02 `fade` hi "जनसांख्यिकीय अद्यतन" |
| 9.16 | — | — | `pop` #f1-r3-pill "₹75"; 9.70 `draw` tick |
| 11.00 | — | — | `fade` #f1-r4-en "Biometric update", 11.50 `fade` hi "बायोमेट्रिक अद्यतन" |
| 11.78 | — | — | `pop` #f1-r4-pill "₹125"; 12.40 `draw` tick |
| 14.20 | — | — | cut to #fees2 (envelope, title, seal, footer on); `fade` #f2-r1-en "Home service", 14.44 `fade` hi "घर पर सेवा" |
| 14.88 | — | — | `pop` #f2-r1-pill with `fade` #f2-r1-a "₹700" (grey 32 px "पहला व्यक्ति" under it) |

## s218
Continues: s217
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: Fees card 2 completes: ₹350, document update, myAadhaar free, enrolment number vs Aadhaar number. Component: recap-card (as s212).
Layout: s217's last frame (#fees2). Row 3 pill carries a small grey date line "15 June 2026 – 14 June 2027" under its words.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | #fees2 with row 1 "Home service", pill "₹700" |
| 0.54 | — | — | `fade` #f2-r1-b "+ ₹350" (grey "हर अगला" under it); 1.10 `draw` #f2-r1-tick |
| 2.12 | — | — | `pop` #f2-r2-pill "Centre पर" |
| 2.96 | — | — | `fade` #f2-r2-en "Document update", 3.46 `fade` hi "दस्तावेज अद्यतन" |
| 3.92 | — | — | `fade` #f2-r2-fee "₹75" in pill; 4.30 `draw` tick |
| 6.02 | — | — | `fade` #f2-r3-en "myAadhaar", 6.52 `fade` hi "माय आधार" |
| 6.80 | — | — | `pop` #f2-r3-pill "तय समय में free" + date line; 7.84 `draw` tick |
| 8.32 | — | — | `fade` #f2-r4-en "Enrolment number", 8.82 `fade` hi "नामांकन संख्या" |
| 9.92 | — | — | `pop` #f2-r4-pill line 1 "status देखें" |
| 11.36 | — | — | `fade` #f2-r4-pill-2 "Aadhaar number अलग"; 12.24 `draw` #f2-r4-tick (holds ~1 s) |

## s219
Continues: no
Section label: KEY POINTS
In: wipe from right · Framing: static {zoom 1} (camera ends: returns)
Idea: POPSK card 1: who runs it, pilots, PCC and its fee, no Tatkaal. Component: recap-card (as s212).
Layout: s212 envelope; title "POPSK" / "डाकघर पासपोर्ट सेवा केंद्र", icon passport-icon, seal "4". Row 3 term line "PCC · Police Clearance Certificate" bold 52 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, passport icon, seal on; `fade` #r1-en "POPSK", 0.50 `fade` #r1-hi "डाकघर पासपोर्ट सेवा केंद्र" |
| 1.14 | — | — | `pop` #r1-pill, `type` "Department of Posts + MEA" (cps 14) |
| 4.02 | — | — | `fade` #r1-pill-2 "की पहल"; 4.40 `draw` #r1-tick |
| 4.86 | — | — | `fade` #r2-en "Pilots", 5.36 `fade` hi "पायलट" |
| 5.36 | — | — | `pop` #r2-pill "Mysuru"; 6.64 `fade` "· Dahod"; 7.18 `draw` tick |
| 7.72 | — | — | `fade` #r3-en "PCC" |
| 9.02 | — | — | `type` #r3-full "· Police Clearance Certificate" (cps 22); 9.60 `fade` hi "पुलिस अनापत्ति प्रमाण पत्र" |
| 11.36 | — | — | `pop` #r3-pill "fee ₹500"; 11.80 `draw` tick |
| 12.38 | — | — | `fade` #r4-en "Tatkaal", 12.88 `fade` hi "तत्काल" |
| 13.82 | — | — | `pop` #r4-pill "POPSK पर नहीं"; 14.38 `draw` tick |

## s220
Continues: no
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: POPSK card 2: who grants the passport, and the network numbers. Component: recap-card (as s212).
Layout: s212 envelope; title "POPSK" / "डाकघर पासपोर्ट सेवा केंद्र", icon passport-icon, seal "3"; three rows share y 360–920 (~187 each). Row 3 term Hindi only "गुजरात में" bold 52 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, icon, seal on; `fade` #r1-en "Passport grant", 0.50 `fade` hi "पासपोर्ट जारी करना" |
| 1.41 | — | — | `pop` #r1-pill "MEA" |
| 2.64 | — | — | `fade` #r1-pill-2 "passport administration"; 4.70 `draw` tick |
| 5.48 | — | — | `fade` #r2-en "POPSKs", 5.98 `fade` hi "देश में" |
| 6.18 | — | — | `pop` #r2-pill, `count` #r2-num "452" (dur 0.9); 7.20 `draw` tick |
| 8.48 | — | — | `fade` #r3-term "गुजरात में" |
| 9.60 | — | — | `pop` #r3-pill "25"; 10.00 `draw` tick |

## s221
Continues: no
Section label: KEY POINTS
In: wipe from right · Framing: static {zoom 1} (camera ends: returns)
Idea: CSC group: PO-CSC portal, partner, pilot size (row 4 follows in s222). Component: recap-card (as s212).
Layout: s212 envelope, 4 slots; title "CSC" / "सामान्य सेवा केंद्र", icon system-screen-icon, seal "4".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, screen icon, seal on; `fade` #r1-en "PO-CSC", 0.50 `fade` hi "डाकघर सामान्य सेवा केंद्र" |
| 0.76 | — | — | `pop` #r1-pill "Digital Sewa portal"; 2.02 `draw` tick |
| 2.34 | — | — | `fade` #r2-en "CSC company", 2.84 `fade` #r2-hi "साथी कंपनी" |
| 3.12 | — | — | `pop` #r2-pill "MeitY वाली"; 4.54 `draw` tick |
| 5.40 | — | — | `fade` #r3-en "Pilot", 5.90 `fade` hi "पायलट" |
| 6.30 | — | — | `pop` #r3-pill "11 Circles"; 7.70 `fade` "· 22 post offices"; 8.94 `draw` tick |

## s222
Continues: s221
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: CSC row 4 (G2C/B2C, loan decision), then a hard cut to the Jeevan Pramaan card. Component: recap-card (as s212).
Layout: #csc = s221's last frame. #jp1 = s212 envelope, title "Jeevan Pramaan" / "जीवन प्रमाण", icon pensioner-phone-icon, seal "4".
Sub-shots: #csc @ 0.00, #jp1 @ 5.64 (a cut, since sub-shots can't wipe).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | #csc rows 1–3 ticked; `fade` #r4-en "G2C · B2C", 0.96 `fade` hi "सरकार से नागरिक · व्यापार से नागरिक" |
| 1.96 | — | — | `pop` #r4-pill two lines "loan का फैसला:" / "ज़िम्मेदार संस्था" |
| 4.68 | — | — | `draw` #r4-tick |
| 5.64 | — | — | cut to #jp1 (envelope, title, icon, seal on); `fade` #j1-en "Jeevan Pramaan" |
| 6.96 | — | — | `pop` #j1-pill "Digital Life Certificate"; 7.46 `fade` #j1-hi "डिजिटल जीवन प्रमाण पत्र"; 8.54 `draw` tick |
| 9.88 | — | — | `fade` #j2-en "IPPB" |
| 10.64 | — | — | `fade` #j2-en-2 "+ non-IPPB" |

## s223
Continues: s222
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: Jeevan Pramaan card fills: both kinds of pensioners, NIC sends the Pramaan ID, the ₹70 charge. Component: recap-card (as s212).
Layout: s222's last frame (#jp1). Footer "GST/cess सहित" grey 32 px.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | #jp1: row 1 ticked, row 2 "IPPB + non-IPPB" |
| 1.02 | — | — | `pop` #j2-pill "दोनों के लिए"; 1.52 `fade` #j2-hi "आईपीपीबी और गैर-आईपीपीबी"; 1.80 `draw` tick |
| 2.28 | — | — | `fade` #j3-en "NIC", 2.78 `fade` hi "राष्ट्रीय सूचना विज्ञान केंद्र" |
| 3.48 | — | — | `pop` #j3-pill, `type` "Pramaan ID सीधे भेजता है" (cps 10); 6.58 `draw` tick |
| 7.20 | — | — | `fade` #j4-en "₹70", `pop` #j4-pill line 1 "हर सफल DLC"; 7.70 `fade` #footer |
| 9.96 | — | — | `fade` #j4-pill-2 "घर आने का अलग charge नहीं" |
| 12.14 | — | — | `draw` #j4-tick |

## s224
Continues: no
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: Jeevan Pramaan card 2: Gujarat's free DLC was for a fixed period; who decides Pramaan ID validity. Component: recap-card (as s212).
Layout: s212 envelope; title "Jeevan Pramaan" / "जीवन प्रमाण", icon pensioner-phone-icon, seal "2". Two rows (280 each, term 68 px, Hindi 44 px). Row 1 pill has a small grey date "1 May – 31 July 2026" under its words.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, icon, seal on; `fade` #r1-en "Free DLC" |
| 0.50 | — | — | `fade` #r1-hi "गुजरात में मुफ़्त DLC" |
| 2.50 | — | — | `pop` #r1-pill "तय अवधि के लिए थी" + date line; 3.58 `draw` tick |
| 4.14 | — | — | `fade` #r2-en "Pramaan ID validity", 4.64 `fade` hi "प्रमाण ID की वैधता" |
| 6.36 | — | — | `pop` #r2-pill, `type` two lines "sanction करने वाली" / "authority तय करती है" (cps 14) |
| 9.34 | — | — | `draw` #r2-tick |

## s225
Continues: no
Section label: KEY POINTS
In: wipe from right · Framing: static {zoom 1} (camera ends: returns)
Idea: Gangajal card: source and size, counter price, delivered prices, no GST. Component: recap-card (as s212).
Layout: s212 envelope; title "Gangajal" / "गंगाजल", icon gangajal-bottle, seal "4", footer "Source: India Post". Row 3 pill shows three prices with small grey labels under each: "1 bottle · pack of 2 · pack of 4".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, bottle icon, seal, footer on; `fade` #r1-en "Gangajal", 0.50 `fade` hi "गंगाजल" |
| 0.28 | — | — | `pop` #r1-pill "Gangotri"; 1.64 `fade` "· 250 ml"; 2.18 `draw` tick |
| 3.72 | — | — | `fade` #r2-en "Counter", 4.22 `fade` hi "काउंटर पर" |
| 4.56 | — | — | `pop` #r2-pill "₹30"; 5.00 `draw` tick |
| 5.88 | — | — | `fade` #r3-en "Delivery", 6.38 `fade` hi "घर तक" |
| 6.42 | — | — | `pop` #r3-pill with "₹121"; 8.34 `fade` "₹201"; 9.70 `fade` "₹321"; 10.20 `draw` tick |
| 11.56 | — | — | `fade` #r4-en "GST", `pop` #r4-pill "नहीं"; 12.10 `draw` tick |

## s226
Continues: no
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: Prasadam card: comes by Speed Post, the two e-MO amounts, what the order needs. Component: recap-card (as s212).
Layout: s212 envelope; title "Temple Prasadam" / "मंदिर का प्रसाद", icon temple-bell-parcel, seal "4".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, bell-parcel icon, seal on; `fade` #r1-en "Prasadam", 0.50 `fade` hi "प्रसाद" |
| 0.78 | — | — | `pop` #r1-pill "Speed Post से"; 2.76 `draw` tick |
| 3.30 | — | — | `fade` #r2-en "Somnath", 3.80 `fade` hi "सोमनाथ" |
| 3.98 | — | — | `pop` #r2-pill "₹270"; 4.50 `draw` tick |
| 5.94 | — | — | `fade` #r3-en "Kashi Vishwanath", 6.44 `fade` hi "काशी विश्वनाथ" |
| 7.24 | — | — | `pop` #r3-pill "₹251"; 7.80 `draw` tick |
| 9.54 | — | — | `fade` #r4-term "पूरा पता" (Hindi only, bold 52 px), `pop` #r4-pill with "पता" |
| 10.78 | — | — | `fade` "· PIN"; 11.68 `fade` "· mobile"; 12.10 `draw` tick |

## s227
Continues: no
Section label: KEY POINTS
In: wipe from right · Framing: static {zoom 1} (camera ends: returns)
Idea: DNK card: purpose, count, the two electronic bills. Component: recap-card (as s212).
Layout: s212 envelope; title "Dak Ghar Niryat Kendra" / "डाक घर निर्यात केंद्र", icon globe-parcel, seal "4". Rows 3–4 terms "PBE-3" / "PBE-4", Hindi "डाक निर्यात बिल".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, globe-parcel icon, seal on; `fade` #r1-en "DNK", 0.50 `fade` hi "डाक घर निर्यात केंद्र" |
| 1.04 | — | — | `pop` #r1-pill "export में मदद"; 2.54 `draw` tick |
| 2.76 | — | — | `fade` #r2-en "DNKs", `pop` #r2-pill, `count` #r2-num "1,013" (dur 1.2); 3.26 `fade` hi "डाक घर निर्यात केंद्र"; 4.78 `draw` tick |
| 5.64 | — | — | `pop` #r3-pill "Electronic" |
| 6.62 | — | — | `fade` #r3-en "PBE-3", 7.12 `fade` hi "डाक निर्यात बिल" |
| 7.70 | — | — | `fade` #r3-pill-2 "· e-commerce"; 8.72 `draw` tick |
| 8.94 | — | — | `fade` #r4-en "PBE-4", 9.44 `fade` hi "डाक निर्यात बिल" |
| 10.56 | — | — | `pop` #r4-pill "बाकी के लिए"; 11.30 `draw` tick |

## s228
Continues: no
Section label: KEY POINTS
In: wipe from right · Framing: static {zoom 1} (camera ends: returns)
Idea: Dak Chaupal card: the van, where it started, fees in camps (row 4 in s229). Component: recap-card (as s212).
Layout: s212 envelope, 4 slots; title "Dak Chaupal" / "डाक चौपाल", icon mobile-post-van (scaled to ~170 px wide), seal "4".
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | envelope, title, van icon, seal on; `fade` #r1-en "Dak Chaupal", 0.50 `fade` hi "डाक चौपाल" |
| 1.58 | — | — | `pop` #r1-pill "Mobile Theatre Van"; 2.54 `draw` tick |
| 2.92 | — | — | `fade` #r2-en "Navrangpura HPO", 3.42 `fade` hi "नवरंगपुरा प्रधान डाकघर" |
| 4.78 | — | — | `pop` #r2-pill "Ahmedabad से चली"; 5.76 `draw` tick |
| 6.04 | — | — | `fade` #r3-en "Camp", 6.54 `fade` hi "कैंप" |
| 7.34 | — | — | `pop` #r3-pill two lines "हर service की" / "अपनी fee और शर्तें"; 9.22 `draw` tick |

## s229
Continues: s228
Section label: KEY POINTS
In: cut · Framing: static {zoom 1} (camera ends: returns)
Idea: Last key point: a service is available only where the office has it enabled; then a one-second hold on the full card. Component: recap-card (as s212).
Layout: s228's last frame; row 4 in slot y 780–920.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | {zoom 1} | — | s228's last frame: rows 1–3 ticked |
| 0.60 | — | — | `fade` #r4-en "Service", 1.10 `fade` hi "सेवा" |
| 2.08 | — | — | `pop` #r4-pill two lines "वहीं मिलती है, जहाँ" / "office पर enabled हो" |
| 3.94 | — | — | `draw` #r4-tick (green), then the whole card holds still to the cut (1.4 s) |

## s230
Continues: no
Section label: RETAIL & CITIZEN SERVICES
In: fade · Framing: wide → slow push-in (camera ends: zoomed, holds; video ends)
Idea: Back at the citizen counter: the counter that sends every citizen to the right service; the closing line is written on the window glass. Photo: india-post-letter-box-cutout — paper cut-out (white border, soft shadow, tilt 1.5°) standing on spot counter-right, ~360 px tall (x ~1380–1560, y ~400–760), tiny grey caption "India Post letter box" with credit; if missing, draw a plain red pillar box (ink, no lettering) there.
Layout: set citizen-counter. On the counter's front face (y 770–850) a strip of nine small white perforated stamp tiles (84 px, x 420–1500, 120 px apart), each holding one part icon at ~0.2 scale, in part order: invoice-calendar-icon, id-card-icon (Parts 2–3), passport-icon, system-screen-icon, pensioner-phone-icon, gangajal-bottle, temple-bell-parcel, globe-parcel, mobile-post-van. Sign board: white Hindi 52 px "सही service" at spot sign. Window glass: closing sentence, ink 52 px Hindi, two centred lines at y 480 and 570.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | counter set, window, blank red sign, letter-box cut-out on counter-right (fade in) |
| 0.20 | {zoom 1.08, x 0, y -20} over 8 s, inOut | — | slow push toward the window |
| 1.52 | — | — | `pop` #tiles (nine stamp tiles, stagger 0.1) |
| 2.20 | — | — | `type` #sign-t "सही service" |
| 4.50 | — | — | `type` #close-1 "उसके counter से कोई" (cps 18) |
| 5.62 | — | — | `type` #close-2 "ख़ाली हाथ नहीं लौटता।" (cps 11) |
| 7.64 | — | — | `underline` #close-2 words "ख़ाली हाथ नहीं" (yellow); holds to the end |
