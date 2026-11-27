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

