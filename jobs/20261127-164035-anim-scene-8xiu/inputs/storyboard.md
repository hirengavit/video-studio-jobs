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

