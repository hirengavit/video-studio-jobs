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

