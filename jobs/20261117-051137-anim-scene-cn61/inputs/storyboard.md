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

## s128
Continues: s127
Section label: PART 5 · PINS & OPEN MAIL
Idea: three-branch decision card: where the fault was caught; branch 1. In: cut. Framing: wide; still.
Layout: root top centre; question node y 380; three branch columns x 140–660 / 700–1220 / 1260–1780: condition box y 470–590, arrow, action box y 680–900.
Component: mind-map moulded as a three-branch tree (red root, white branches).
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | still | — | root + "क्या करें?" |
| 1.02 | — | — | `fade` grey tag beside root "Guide की procedure · आज भी लागू" |
| 4.72 | — | — | `type` node "गलती कहाँ पकड़ी गई?" |
| 6.56 | — | — | `draw` branch 1 line; `pop` box "Posting office में" + "बुकिंग डाकघर" |
| 9.24 | — | — | `draw` arrow down |
| 10.14 | — | — | `pop` action "sender को तुरंत वापस" + `icon-envelope-letter` |

## s129
Continues: s128
Section label: PART 5 · PINS & OPEN MAIL
Idea: branch 2: caught later → remove pins, return via RLO. In: cut. Framing: wide; still.
Layout: as s128; branch 2 column x 700–1220.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | still | — | `draw` branch 2 line; `pop` box "बाद में पकड़ी गई" |
| 1.98 | — | — | action box `fade` "1. pins निकालिए" |
| 4.26 | — | — | `type` "2. Returned Letter Office से वापस" |
| 4.80 | — | — | `fade` Hindi under "वापसी पत्र कार्यालय" |
| 9.52 | — | — | `stamp` red pill "RLO" on the action box |

## s130
Continues: s129
Section label: PART 5 · PINS & OPEN MAIL
Idea: even pin-free, it doesn't go on to the addressee; back via RLO. In: cut. Framing: wide; still.
Layout: as s129; small row inside action box 2: "→ addressee" text, y 870.
| time | camera | character pose / face | actions |
|---|---|---|---|
| 0.00 | still | — | tree as left |
| 2.54 | — | — | `fade` "→ addressee" + Hindi "पाने वाला" |
| 4.40 | — | — | `strike` "→ addressee" (slate) |
| 5.78 | — | — | `pulse` RLO pill |
| 7.16 | — | — | `highlight` "वापस" in action 2 |

