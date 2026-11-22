# Storyboard: Letters, Letter Cards and Postcards (Postal Exams)

No character in any scene: no rig, no person. Lecture-deck style, animated. Pose / face column is always "—".

## Shared

**Series tag:** PRODUCTS (one value for the whole video; the app's frame draws it top right).
**Section label:** given per scene, English only, uppercase in the frame (top left).

**Screen grid (every scene).** Frame header y 0–130 (app). Content area x 100–1820, y 160–1000. Main card fills
most of it with even 100 px side margins. English terms Inter bold; their Hindi translation directly beneath,
smaller, #6f6a63, fading in ~0.5 s after the English. All other text Hindi only ('Noto Sans Devanagari', ≥ 40 px,
line height ×1.3). Numbers Inter bold.

**House cards (drawn in scenes, same look every time):**
- *Doc card*: white #ffffff, 4 px #ead9a8 border, radius 18, exact words in Georgia 54–64 px, source in grey
  Inter 30 px beneath, Hindi "सार (gist)" line under it in #6f6a63. Highlight band #fde9a6 behind the phrase said.
- *Fact stamp*: perforated postal-red #9e1b1b stamp card (cardLine #b8403a inner rule), big white number, Hindi
  label in #fde9a6.
- *Limit row*: white row card, English label left (Inter 52 bold) + Hindi under, value pill right (sand #f3ead6,
  ink numbers 64 px). The key one gets a yellow #f2b705 outline drawn round it.
- *Verdict*: `round-postmark` stamped: green #2e7d4f "PASS · पास" for allowed/passed, slate #4b4f58 "FAIL · फ़ेल"
  plus a slate cross and strike-through for wrong/rejected. Red never means wrong.
- *Keyword chip*: sand pill with 3–5 words, the keywords the notes list.

**Pieces** (all ink 3 px rounded outlines, kit palette):
- `three-forms-icons` (NEW, 1400×420): the recurring picture: three big flat ink icons in a row on the cream page,
  centres x 233 / 700 / 1167 of the piece: a closed envelope (#icon-letter, fill part #fill-letter), a folded
  Inland Letter Card with its three flaps showing (#icon-ilc, #fill-ilc), an open postcard with a printed stamp
  (#icon-postcard, #fill-postcard). Fills start white; the one being taught turns envelope #f3ead6 (`color`), the
  others' fills and strokes go warm grey #6f6a63 at 40 %. Anchors: base. Scenes s001, s006–s011, s022–s023, s072,
  s095, s120, s136, s158, s161–s163, s189–s190, s205.
- `domestic-envelope` (library, reuse): letter envelope; s009, s016, s020, s037–s041, s047, s143, s179.
- `window-envelope` (library, reuse): Part 4 drawings, s051–s070, s093, s202.
- `service-postcard` (library, reuse): the domestic postcard: its red stamp band is lettered "50 p", and the scene
  letters "POST CARD" at top left of the right half. s008, s010, s095–s119, s121–s132, s181, s204, s208.
- `letter-card-open` (NEW, 900×600): Inland Letter Card unfolded: sand #f3ead6
  sheet with ink outline, two fold lines (dashed), three flaps (#flap-left, #flap-right, #flap-top, each a slightly
  darker sand strip with a gum band), printed stamp top right of the address panel (#ilc-stamp), blank address
  rules (#ilc-rules), blank "Letter Card" title spot top left of the address panel (#ilc-title-spot). Anchors:
  base, top. s007, s072–s083, s091–s092, s180, s203.
- `letter-card-folded` (NEW, 630×300 = 210×100 mm at 3 px/mm): the same card folded shut, address side up, three
  flap edges visible, printed stamp top right, title spot top left, address rules. Anchors: base, top. s009, s073,
  s077–s078, s081–s085, s087, s091–s092, s094, s163, s180, s188, s203.
- `postal-roll` (NEW, 800×200): a rolled document tied with string, cylinder seen from the side with an elliptical
  round end at the right (#roll-end) and the body (#roll-body). Anchors: base, top. s025–s028, s031–s034.
- `postal-scale` (NEW, 500×420): flat ink letter scale, sand body, round dial with a needle (#needle), flat pan on
  top (top anchor = pan). Anchors: base, top. s024, s048, s075, s147–s148, s189.
- `round-postmark` (NEW, 300×300): red double-ring postmark with three wavy cancel lines at its right, blank centre
  and blank ring band for scene lettering; recolourable (#ring, #cancel). Anchors: base. Many scenes (dates, verdicts).
- `paper-sheet-swatch` (NEW, 360×460): a corner-lifted sheet of paper with a thickness edge visible (#edge) for GSM /
  thickness beats. Anchors: base. s042–s043, s047, s049–s050, s201.
- `clip-and-staple` (NEW, 320×200): a metal paper clip (#clip) and a staple (#staple) side by side, slate ink.
  Anchors: base. s040–s041, s047.
- `film-packet` (NEW, 640×400): a flat sealed packet holding a film reel shape, sand wrap, a blank white label
  (#film-label, x120–520 y120–280) for scene lettering. Anchors: base. s044–s046.
- `qr-code-tile` (library, reuse): s061–s064. `adhesive-stamp` (library, reuse): extra stamps s022, s164.
- `photograph-print` (library, reuse): s083–s084, s108, s118. `franking-impression` (library, reuse): s059, s102.
- `regulations-book` (library, reuse, title lettered "Post Office Regulations 2024"): s002, s006.
- `linear-barcode` (NEW, 420×120): plain ink 1D barcode bars on white, no digits. Anchors: base. s017–s020, s048,
  s051–s052, s061, s205.
- `booking-receipt` (NEW, 300×420): a small printed counter receipt, white, torn top edge, grey rules, a short
  barcode at the foot. Anchors: base. s014, s023.
- `signature-slip` (NEW, 520×300): a delivery slip with a signature line and a phone-like signing pad beside it
  (#ink-sign path to `write`, #pad). Anchors: base. s015, s023.
- `phone-app` (NEW, 300×560): a plain phone with a blank light screen (#screen) and a green tick spot. No app
  logo. Anchors: base. s018.
- `excel-sheet-icon` (NEW, 320×380): a generic spreadsheet file icon (green corner fold, grid of cells), no brand
  logo. Anchors: base. s019.
- `transport-icons` (NEW, 1200×300): three ink icons, train (#rail), road van (#road), plane (#air), on one ground
  line. Anchors: base. s133–s135, s138, s140, s159.
- `airmail-label` (NEW, 360×160): blue (#2456a6) rectangular label, white border, blank for lettering. Anchors:
  base. s138, s149, s159.
- `limited-airlift-label` (NEW, 640×200): white label with blue border, blank for lettering the exact words.
  Anchors: base. s151–s152.
- `qms-letter-box` (NEW, 360×600): red pillar letter box with two bright yellow #f2b705 bands round it and a
  blank plate. Anchors: base. s154–s157.
- `newspaper-bundle` (library, reuse): s139–s141, s192.
- `business-reply-card` (library, reuse): s125–s127.
- `post-counter-icon` (library, reuse): Part 9 counter, s161, s166, s185.
- `postage-due-mark` (NEW, 280×200): a slate rectangular "due" handstamp frame with a blank value box (scene letters
  "DUE ₹ …"). Anchors: base. s169–s172, s183–s185.
- `specimen-box` (NEW, 360×300): a sealed small box with a vial shape on its label panel, ink outline. Anchors:
  base. s198.

**Photos:** library `india-post-letter-box-cutout` (s165), `franking-machine-photo-cutout` (s102). New:
`first-postcard-austria-1869`, `east-india-postcard-1879` (s127–s128). Each scene also works drawn (a stamp-edge
card with the date) if a photo is missing.

**Components used:** chapter-title (part openers), recap-card (recaps), compare-cards, myth-fact, timeline,
step-list, compare-table, quote-card, big-number, exam-trap. Each scene says how to mould it.

**state.json:** `{}` (nothing physical changes across scenes; the "which form is lit" choice is per scene).

## Continuity

No character, no set. One recurring layout: `three-forms-icons` centred at y 520 (piece scale 1, x 260). Scenes
inside a part that keep the same card **cut** (`data-in="cut"`, `Continues: sNNN`). A new part opens with
`fade` 0.5. Worked sums keep one card across their scenes and cut. Screen direction: flows read left → right
(posting → delivery, booking → counter). Recaps (s048, s093, s130, s192) open with `fade`, the closing summary
s200 with `fade`, s208 with `fade`. The postcard always has its address side to the right half (right-hand half
= address/postage) — keep it identical in every postcard scene: card centre x 960, scale 2.2 unless noted.

## s041
Continues: no
Section label: PART 3 · LETTER ENVELOPE
Idea: no metal clip, no staple; then two paper conditions. Transition: cut. Sub-shots: `#clip` 0, `#paper` 6.99.
`#clip`: `domestic-envelope` with `clip-and-staple` on its edge; slate cross. `#paper`: two empty cards "1" "2"
headed "कागज़ की दो शर्तें".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope + clip shown; 1.18 staple `pop` |
| 2.60 | — | — | slate cross `pop` over both; tag "मना" |
| 3.74 | — | — | line "Staple की आदत: यहाँ नहीं" `words` |
| 6.99 | — | — | shot `#paper`, title `type`; cards `pop` stagger 0.3 |

## s042
Continues: s041
Section label: PART 3 · LETTER ENVELOPE
Idea: thickness 0.15–0.5 mm; at least 70 GSM. Layout: card 1 holds `paper-sheet-swatch` with an edge caliper arrow;
card 2 holds a swatch on a tiny scale.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.70 | — | — | card 1 label "मोटाई"; `draw` caliper on #edge |
| 2.00 | — | — | `type` "0.15"; 4.80 `type` "– 0.5 mm" |
| 6.92 | — | — | card 2 label "कागज़" |
| 8.38 | — | — | `type` "कम से कम 70 GSM" |

## s043
Continues: s042
Section label: PART 3 · LETTER ENVELOPE
Idea: GSM = grams per square metre; thickness in mm. Layout: same cards; a definition strip under card 2.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `pop` term "GSM" under card 2 + "ग्राम प्रति वर्ग मीटर" |
| 2.10 | — | — | square drawn (1 m²) beside swatch; label "1 m² sheet का वज़न, grams में" `words` 4.30 |
| 6.16 | — | — | card 1 `pulse`; tag "mm में" |

