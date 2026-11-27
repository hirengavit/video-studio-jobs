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

