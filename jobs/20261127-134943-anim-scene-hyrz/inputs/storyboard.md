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

