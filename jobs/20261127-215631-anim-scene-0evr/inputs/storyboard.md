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

