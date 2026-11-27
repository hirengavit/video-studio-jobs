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

