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

