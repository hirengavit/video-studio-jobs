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

