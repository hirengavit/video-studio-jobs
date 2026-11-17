# Storyboard: Packing, sealing and posting (Postal Exams, Hindi)

## Shared

Series tag: PACKING & POSTING (top-right pill, the whole video). Section labels are given per scene (English caps, top left).
No character and no sets: every scene is a lecture-deck screen on the cream canvas, using x 80–1840, y 150–1000 below the app's header. All pieces use kit colours with 3 px rounded ink outlines.

Library pieces reused:
- `parcel-with-tag`: brown-paper parcel with string and blank tag. Anchors base, top.
- `envelope-article`: white envelope, red stripe, address rules. Anchors base, top.
- `icon-envelope-letter`: small envelope icon. Anchors base, grip.
- `registration-envelope`, `postcard-blank`: letter items for the letter-box scenes. Anchor base.
- `postal-date-stamp`, `franking-impression`: impressions on covers. Anchor base.
- `licence-certificate`: franking licence. Anchors base, top.
- `post-counter-icon`: the post office counter (window). Anchors top, base.
- `post-office-front`: a post office. Anchors base, top.
- `old-book-stack`: always stands for the old Post Office Guide (grey). Anchors base, top.
- `signature-slip`, `newspaper-bundle`, `icon-pin-tag`: delivery signature, registered newspaper, PIN.

New pieces (made once for the library):
- `regulations-book`: closed red hard-cover book, blank white title panel (scene letters "Post Office Regulations 2024"), 300×400. Anchors base, top. Always stands for today's rules.
- `postage-stamp`: one perforated stamp, red frame, blank cream centre, 120×150. Anchor base.
- `window-envelope`: white DL envelope 600×300 with a transparent window (address block + barcode) and dashed logo / postage / barcode zones; parts #paper #window #address-block #barcode #logo-zone #postage-zone #barcode-zone. Anchors base, top.
- `wax-seal`: red sealing-wax blob with a blank device ring, 120×120. Anchor base.
- `glass-bottle`: capped glass bottle, pale blue #liquid, 140×300. Anchors base, top, grip.
- `protective-box`: cut-away box with a central cavity and sawdust-dot filling; parts #outer #filling #cavity, 420×360. Anchors base, mouth.
- `airtight-tin` (220×240), `wooden-case` (360×240), `ceramic-cup` (180×160), `straight-pin` (200×30): small ink objects. Anchors base (+ top).
- `letter-box-icon`: flat red pillar letter box with slot, blank plate, 220×420. Anchors base, mouth.
- `booking-receipt` (260×380), `clock-face` (260×260, parts #hour-hand #minute-hand), `phone-app` (200×380), `booking-kiosk` (240×460). Anchor base.

Photos: `india-post-letter-box-cutout` (s142) and `franking-machine-photo-cutout` (s157) from the library; new `wax-seal-letter` (s085; if it isn't found the scene uses the drawn `wax-seal`). Cut-outs get a white border, a 1–2° tilt and a small credit.

## Continuity

- No character, so there are no positions to carry. Scenes marked `Continues: sNNN` keep the previous scene's card exactly (same positions, same items) and cut; they only add items or move highlights.
- Each part opens on its chapter-title stamp (s008, s029, s054, s083, s125, s142, s177, s202) with a wipe or fade; recaps (s050, s121, s171, s211) fade in; other fresh cards cut or fade.
- The fixed header (section label, series tag) never moves; it changes only at section boundaries.
- Colour meanings stay fixed: yellow = highlight/changed, green = allowed/correct, slate + strike = forbidden/wrong, red = brand cards only.
- Old vs new is always the grey `old-book-stack` (old Guide) against the red `regulations-book` (today's Regulations).

## s046
Continues: s045
Section label: PART 2 · LETTER ENVELOPE
Idea: postage on the right; a separate space for the code; at least 10 mm from stamps/franking to the address block. In: cut. Framing: wide; still.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | still | — | s045 last frame (#zones) |
| 1.02 | — | — | `color` #postage-zone to #fde9a6; `fade` #lbl-post `POSTAGE` + `डाक शुल्क` right of envelope |
| 2.20 | — | — | `color` #barcode-zone to #fde9a6; `fade` #lbl-code `CODE · अलग जगह` below envelope |
| 4.76 | — | — | `pop` #stamp `postage-stamp` (scale 0.9) in #postage-zone |
| 7.72 | — | — | `pulse` #address-block |
| 10.10 | — | — | `draw` #dim-gap arrow stamp → address block; `pop` #val-gap `≥ 10 mm` |

## s047
Continues: s046
Section label: PART 2 · LETTER ENVELOPE
Idea: 15 mm at the bottom for the barcode; other sizes on the diagram; then: breaking a Regulation 87 or 88 condition brings a charge. In: cut. Framing: wide; still.
Layout: s046 diagram. Shot #charge (6.57): two red perforated stamp badges (360×420) `REGULATION 87` / `REGULATION 88` at x 260 and 700, y 300; right white card x 1180–1760, y 300–820.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | still | — | s046 last frame |
| 0.44 | — | — | `draw` #dim-bc vertical arrow on #barcode-zone height |
| 1.52 | — | — | `pop` #val-bc `15 mm` |
| 4.62 | — | — | `pulse` all dimension values (stagger 0.1) |
| 6.57 | — | — | shot #charge: card shows `शर्त टूटे →` (52) |
| 8.35 | — | — | `stamp` #charge-pill `CHARGE · शुल्क` on card |
| 10.15 | — | — | `pop` #b87 badge `87` |
| 12.05 | — | — | `pop` #b88 badge `88` |
| 13.71 | — | — | `fade` #cond `तय शर्त` under badges; 14.75 `strike` #cond (slate) |

## s048
Continues: s047
Section label: PART 2 · LETTER ENVELOPE
Idea: double postage is charged, counting the postage already paid; example: correct postage ₹10, ₹10 of stamps on it. In: cut. Framing: wide; still.
Layout: s047 #charge shot. Shot #calc (6.72): white calculation card x 360–1560, y 180–960; rows y 300/430 (labels x 420 Hindi 52, values x 1440 right-aligned Inter 72); `postage-stamp` at (1640 430) outside card right.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | still | — | s047 last frame |
| 0.46 | — | — | `stamp` #double `DOUBLE POSTAGE` on card; 1.00 `fade` `दोगुना डाक शुल्क` |
| 3.08 | — | — | `fade` #paid-note `पहले से चुकाया postage गिना जाता है` (44); 5.38 `underline` words `गिना` |
| 6.72 | — | — | shot #calc: card + title `उदाहरण` |
| 7.60 | — | — | `fade` #l1 `सही postage` |
| 8.56 | — | — | `pop` #v1 `₹10` |
| 9.78 | — | — | `fade` #l2 `लगे stamps` |
| 10.12 | — | — | `pop` #v2 `₹10`; 11.00 `pop` #stamp |

