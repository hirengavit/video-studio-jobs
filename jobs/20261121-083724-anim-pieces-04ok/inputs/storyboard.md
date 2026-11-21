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

## s001
Continues: no
Section label: LETTERS, LETTER CARDS & POSTCARDS
Idea: the three forms of sending a message. Transition: cut (first scene). Framing: wide, slow push 1.00 → 1.05.
Layout: `three-forms-icons` at (260, 330) scale 1, already fully drawn at 0.00 (the hook: three big icons read at
once). Labels under each icon (y 820): English Inter 72 bold, Hindi 44 grey beneath. Bottom line y 960 Hindi 52.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | {zoom:1} | — | icons shown; `pulse` all three lightly |
| 1.22 | — | — | `type` "Letter" under envelope; 1.70 `fade` "पत्र"; `color` #fill-letter → #f3ead6 |
| 2.60 | — | — | `type` "Letter Card"; 3.10 `fade` "पत्र कार्ड"; #fill-ilc → #f3ead6 |
| 4.22 | — | — | `type` "Postcard"; 4.70 `fade` "पोस्टकार्ड"; #fill-postcard → #f3ead6 |
| 7.96 | — | — | `words` "डाक से संदेश भेजने के तीन रूप"; `underline` words "तीन रूप" |
| 9.50 | {zoom:1.05} | — | hold |

## s002
Continues: no
Section label: LETTERS, LETTER CARDS & POSTCARDS
Idea: where the rules live. Transition: cut. Framing: wide.
Layout: `regulations-book` lettered "Post Office Regulations 2024" left at (330, 250) scale 1.6; right a Hindi
line "देश के अंदर के नियम" (x 1000, y 330, 56 px); a red pill "Chapter V" (x 1000, y 520) with "अध्याय V" grey under it;
`round-postmark` at (1380, 640) scale 1.1, ring lettered "IN FORCE · लागू".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `fade` "देश के अंदर के नियम" line (anchor) |
| 2.76 | — | — | `pop` book; 3.42 `highlight` its title words "Regulations 2024" |
| 5.66 | — | — | `pop` "Chapter V" pill; 6.16 `fade` "अध्याय V" |
| 8.24 | — | — | `stamp` postmark; `type` "16 December" in its centre |

## s003
Continues: s002
Section label: LETTERS, LETTER CARDS & POSTCARDS
Idea: in force on 16 December 2024; then the big picture in two lines. Sub-shots: `#dated` 0, `#two-lines` 2.59.
`#dated` = s002's layout; `#two-lines`: a sand panel (x 140–1780, y 220–960) with two numbered rows: row 1 (y 380)
"हर रूप की अपनी शर्तें" and a row of 4 chips (y 520): वज़न · size · बनावट · postage; row 2 (y 780) reserved for s004.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `type` "2024" under "16 December" in the postmark |
| 1.44 | — | — | `pop` green pill "लागू" beside postmark |
| 2.59 | — | — | shot `#two-lines`: panel shown with badge "1" and badge "2" (empty row 2 faint dashed) |
| 4.89 | — | — | `words` "हर रूप की अपनी शर्तें" |
| 7.21 | — | — | `pop` chip "वज़न"; 7.97 `pop` chip "size" |

## s004
Continues: s003
Section label: LETTERS, LETTER CARDS & POSTCARDS
Idea: conditions; breach → fixed charge; then the plan of the video. Sub-shots: `#two-lines` 0, `#agenda` 7.51.
`#agenda`: white table card (x 120–1800, y 170–990), two columns of five rows, each row a red number badge + the
Part heading verbatim (Hindi/English mix as the script has it, 40 px): left Parts 1–5, right Parts 6–10:
1 तीन रूप, product और service · 2 Letter का वज़न और size · 3 Letter का envelope · 4 Window envelope · 5 Inland Letter
Card · 6 Postcard की शर्तें · 7 Postcard की एक category और उसकी पहचान · 8 First-class, second-class mail और हवाई डाक ·
9 Counter पर जाँच और due रकम · 10 कुछ और नियम.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `pop` chip "बनावट"; 1.38 `pop` chip "postage" |
| 2.48 | — | — | row 2 `words` "कोई शर्त टूटे" |
| 4.42 | — | — | `fade` arrow → and chip "charge: तय हिसाब से" (yellow `highlight` at 5.40 on "तय हिसाब") |
| 7.51 | — | — | shot `#agenda`: card + header "इस lecture में"; rows 1–5 `fade` stagger 0.25 |
| 9.16 | — | — | rows 6–7 `fade` stagger 0.25 |

## s005
Continues: s004
Section label: LETTERS, LETTER CARDS & POSTCARDS
Idea: the rest of the plan. Same `#agenda` card; rows 1–7 dim to grey #6f6a63 at 0.00.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `color` rows 1–7 text → #6f6a63 |
| 1.00 | — | — | row 8 `fade`; `highlight` words "First-class, second-class" |
| 1.95 | — | — | `highlight` row 8 words "हवाई डाक" |
| 3.62 | — | — | row 9 `fade`; 4.40 `highlight` words "due रकम" |
| 4.90 | — | — | row 10 `fade`; hold to cut |

## s006
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: what a letter carries. Transition: fade 0.5. Component: chapter-title — kicker "PART 1 · भाग 1", English
title "Three forms, product & service", Hindi "तीन रूप, product और service", stamp icon = envelope, value "01",
progress "Part 1 of 10 · भाग 1 / 10". Shown only 0–3.5 as sub-shot `#opener`, then `#letter` at 3.50.
`#letter`: `three-forms-icons` small at top (x 560, y 170, scale 0.57; letter lit, others grey) and a doc card
(x 160–1760, y 450–950): "current and personal correspondence" in Georgia 64; sub-line Hindi "किसी व्यक्ति के नाम,
अभी का और निजी पत्र-व्यवहार"; source "Post Office Regulations 2024, Reg. 2".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener shown; `type` "Letter" big below the stamp at 0.00 |
| 0.68 | — | — | the opener's yellow underline under the Hindi title draws on |
| 3.50 | — | — | shot `#letter`: icons + doc card with Georgia text; `highlight` words "current" (on card) |
| 4.00 | — | — | `highlight` words "personal correspondence" |
| 5.18 | — | — | `fade` Hindi line |
| 9.10 | — | — | `fade` chip row: "सुरक्षित बंद" (9.10), "postage" chip at 11.78 |

## s007
Continues: s006
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: prepaid; then the Letter Card is one folded, gummed sheet. Sub-shots: `#letter` 0, `#ilc` 1.84.
`#ilc`: icons strip at top (ILC lit), `letter-card-open` centre (x 960, y 640, scale 1.2); term "Letter Card"
(x 160, y 280, 72 bold) + "पत्र कार्ड" beneath.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chip "postage पहले से चुका" `pop` (completes s006 row) |
| 1.84 | — | — | shot `#ilc`: icons, `type` "Letter Card"; 2.34 `fade` "पत्र कार्ड" |
| 2.86 | — | — | `draw` letter-card-open sheet |
| 4.76 | — | — | `pop` label "एक sheet" with arrow to sheet |
| 6.72 | — | — | `draw` the dashed fold lines; label "मोड़ा" |
| 8.24 | — | — | `color` flap gum bands → #f2b705; label "गोंद" |

## s008
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: Postcard = open message on a fixed-size card; then "easy to tell apart". Transition: cut.
Layout: icons strip top (postcard lit); `service-postcard` big centre (x 960, y 620, scale 1.6); term "Postcard"
left (x 160, y 280) + "पोस्टकार्ड". A dimension bracket drawn round the card ("तय size").

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | icons strip; `type` "Postcard"; 0.50 `fade` "पोस्टकार्ड"; `pop` postcard |
| 1.02 | — | — | `draw` size brackets; label "तय size" |
| 2.18 | — | — | `pop` tag "आयताकार card" |
| 4.04 | — | — | `pop` tag "खुला संदेश" (yellow `highlight`) |
| 5.58 | {zoom:1} → 6.0 {zoom:0.98} | — | `pulse` all three strip icons (tag "बाहर से पहचान" fades at 6.38) |

## s009
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: letter = separate envelope; letter card folds into its own cover. Transition: cut.
Layout: two panels side by side (each x-width 760, y 200–960, sand #f3ead6): left `domestic-envelope` with a white
sheet half out of it; right `letter-card-open` small then `letter-card-folded`. Captions under each (Hindi 48).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | left panel and envelope shown; small heading "Letter" |
| 1.96 | — | — | `move` sheet by [0, 120] into envelope (sheet is a plain prop, not physical) |
| 2.44 | — | — | caption "अलग envelope" `fade` |
| 4.30 | — | — | right panel: "Letter Card" heading, `letter-card-open` shown |
| 4.80 | — | — | `out` open card (dur 0.3); 5.00 `pop` `letter-card-folded` |
| 7.62 | — | — | caption "खुद अपना cover" `fade`; `underline` "cover" |

## s010
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: postcard is open, not secret; then the key word "letter post". Sub-shots: `#open` 0, `#term` 4.77.
`#open`: `service-postcard` centre, message side lines visible; an eye icon; line "बात गोपनीय नहीं".
`#term`: Component: key-term — red stamp-edged card "Letter Post" (English big) with "पत्र डाक" beneath; meaning card
right: "बड़ा शब्द: इसमें कई तरह की डाक"; drop the exam pill and chain.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | postcard shown; `pop` tag "खुला" |
| 2.04 | — | — | `pop` eye icon; 3.08 `words` "बात गोपनीय नहीं" |
| 4.77 | — | — | shot `#term`: red card shown empty-titled |
| 7.07 | — | — | `type` "Letter Post"; 7.57 `fade` "पत्र डाक" |
| 8.39 | — | — | meaning card `slide` from right, `words` "बड़ा शब्द" |
| 9.49 | — | — | `fade` line "इसमें कई तरह की डाक" |

## s011
Continues: s010
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: not every item in letter post is a letter. Layout: the key-term card moves up (s010's `#term` restyled):
under it an umbrella line and two white cards: "Postcard" (+ पोस्टकार्ड) and "Book Post" (+ बुक पोस्ट), each
"अलग product" tag.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `#term` held |
| 1.76 | — | — | `pop` slate line "हर item = letter" then 2.56 `strike` it |
| 4.60 | — | — | `slide` card "Postcard" from down |
| 6.38 | — | — | `slide` card "Book Post" from down |
| 7.56 | — | — | `pop` tag "अलग products" bridging both; `highlight` it |

## s012
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: two questions to keep separate. Transition: cut. Layout: two tall white cards side by side (x 140–900 and
1020–1780, y 220–960) with red number badges "1", "2"; a divider between. Card 1 heading "Product?".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | top line `fade` "दोनों की अपनी शर्तें" (y 190, grey) |
| 2.14 | — | — | both cards `pop` empty with badges; 3.76 `draw` divider |
| 5.00 | — | — | card 1: `type` "Product?"; 5.50 Hindi under "पहला सवाल" |
| 6.44 | — | — | card 1 line "ये कौन सा product है?" `words` |

## s013
Continues: s012
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | cards held |
| 0.98 | — | — | card 1 adds line "नाम → कौन सी शर्तें" `fade`; 3.40 `highlight` "शर्तें" |
| 4.96 | — | — | card 2: `type` "Service?"; 5.44 `fade` "दूसरा सवाल" |
| 6.46 | — | — | card 2 line "किस service में book हुआ?" `words` |

## s014
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: the service decides booking, tracking, proof; accountable items get a receipt. Transition: cut.
Layout: top row three icon tiles (booking desk, magnifier-route, tick-document) with Hindi labels; lower a term
card left "Accountable item" + "जवाबदेह वस्तु" and `booking-receipt` right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading "Service तय करती है" shown |
| 1.00 | — | — | tile "booking" `pop`; 1.94 tile "tracking"; 3.30 tile "delivery का सबूत" |
| 5.66 | — | — | term card `slide` from left; `type` "Accountable item"; 6.16 Hindi |
| 7.84 | — | — | `pop` booking-receipt; label "receipt" |

## s015
Continues: s014
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: tracking; signature on delivery (ink or digital) is proof. Sub-shots: `#svc` 0, `#sign` 1.90.
`#sign`: `signature-slip` centre (x 960, y 560, scale 1.6), two tags "ink" and "digital" under it, a stamp
"सबूत" spot right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `pop` tag "track and trace" on receipt |
| 1.90 | — | — | shot `#sign`; heading "Delivery पर" |
| 2.70 | — | — | `write` #ink-sign (dur 0.9) |
| 4.54 | — | — | `pop` tag "ink"; 5.90 `pop` tag "digital" |
| 9.46 | — | — | `stamp` green postmark "सबूत" |

## s016
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: non-accountable = unaccountable; recognising a letter doesn't settle the service. Transition: cut.
Sub-shots: `#terms` 0, `#env` 5.16.
`#terms`: two term cards: "Accountable" (green border) and "Unaccountable item" + "गैर-जवाबदेह वस्तु".
`#env`: `domestic-envelope` big centre; tag "Letter ✓" (product) and empty tag "Service ?".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | "Accountable" card shown; slate line "नहीं" ready |
| 2.72 | — | — | `pop` "Unaccountable item"; 3.22 Hindi |
| 5.16 | — | — | shot `#env`, envelope shown |
| 6.56 | — | — | `pop` tag "Letter" with green tick |
| 8.98 | — | — | `pop` tag "Service ?"; 9.66 `pulse` it; line "अभी तय नहीं" |

## s017
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: APT 2.0 barcodes unaccountable mail for induction and invoicing. Transition: cut.
Layout: a flow: envelope with `linear-barcode` (left, x 300) → arrow → two boxes "Induction", "Invoicing" (right).
Term "APT 2.0" pill top left.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope shown left |
| 0.16 | — | — | `draw` barcode on it |
| 1.36 | — | — | `pop` pill "APT 2.0" |
| 3.38 | — | — | tag "Unaccountable mail" `fade` under envelope |
| 5.98 | — | — | `draw` arrow; `pop` box "Induction" |
| 7.26 | — | — | `pop` box "Invoicing" |
| 9.06 | — | — | under "Induction": Hindi "system में article की entry" `words` (10.18) |

## s018
Continues: s017
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: delivery recorded in Dak Sewa App; bulk mailers print the given barcode series. Sub-shots: `#flow` 0,
`#bulk` 3.78. `#flow` adds `phone-app` at right (x 1600). `#bulk`: heading "Bulk mailers" + "थोक डाक भेजने वाले";
a stack of envelopes each with a barcode; a numbered list card (step 1 of 3).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `pop` phone-app; `type` "Dak Sewa App" under it (1.28) |
| 2.76 | — | — | `pop` green tick on phone screen; "दर्ज" tag |
| 3.78 | — | — | shot `#bulk`; heading types |
| 7.74 | — | — | row 1 "दी गई barcode series छापें" `fade`; barcodes `draw` stagger 0.15 |

## s019
Continues: s018
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: or paste pre-printed barcodes; give booking data in Excel; still unaccountable.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 "या पहले से छपे barcodes चिपकाएँ" `fade` |
| 3.70 | — | — | row 3 "booking data → Excel file" `fade`; 5.36 `pop` `excel-sheet-icon` |
| 7.02 | — | — | all three rows dim grey; big verdict line "फिर भी: Unaccountable mail" `words` 8.14 |
| 9.66 | — | — | `highlight` words "Unaccountable mail" |

## s020
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: barcode ≠ accountable. Transition: cut. Component: myth-fact — myth card: "Barcode लगा = accountable"
(strike on "accountable" in slate, slate cross); fact card: "Barcode ≠ accountable" big with keyword chip, reason
Hindi "Booking की service और शर्तें अलग से देखें". English reason line dropped.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | myth card shown with "Ordinary mail + barcode" |
| 1.06 | — | — | `draw` small barcode on myth card |
| 3.18 | — | — | `type` "= accountable"; 4.06 `strike` it; slate cross `pop` |
| 5.36 | — | — | fact card `slide` up; "Barcode ≠ accountable" `type` |
| 7.12 | — | — | reason line `words`; 8.12 `highlight` "अलग से" |

## s021
Continues: no
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: prepayment is the rule; PO stationery can carry a printed stamp. Transition: cut.
Layout: term "Prepayment" + "पूर्व भुगतान" top left; rule pill "आम नियम: postage पहले"; right `letter-card-folded`
and `service-postcard` overlapping with their printed stamps circled.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading area shown; 0.62 `type` "Prepayment"; 1.12 Hindi |
| 2.16 | — | — | rule pill `pop`; 3.44 `highlight` "आम नियम" |
| 5.80 | — | — | stationery cards `slide` from right; label "Post Office stationery" |
| 7.72 | — | — | `draw` circle round printed stamps; tag "छपा stamp" |

## s022
Continues: s021
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE
Idea: top up with extra stamps; then the Part 1 summary begins (letter). Sub-shots: `#stamps` 0, `#sum` 7.62.
`#stamps`: postcard big with printed stamp + two `adhesive-stamp` landing beside it; sum row "ज़रूरी − छपी value
= फ़र्क → extra stamps". `#sum`: `three-forms-icons` at top (scale 0.6, y 170), three summary rows below (one per
form, y 560/700/840) plus a 4th row for accountable (s023).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | postcard shown; 1.88 `highlight` printed stamp value area |
| 3.72 | — | — | sum row `fade` "फ़र्क" |
| 5.10 | — | — | `fall` adhesive stamps `by: 200` stagger 0.2 onto card |
| 7.62 | — | — | shot `#sum`; letter lit; row 1 "Letter: व्यक्ति के नाम, current और personal" `words` |

## s023
Continues: s022
Section label: PART 1 · THREE FORMS, PRODUCT & SERVICE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | ILC lit; row 2 "Letter Card: मुड़ी, गोंद लगी sheet" `words` |
| 4.06 | — | — | postcard lit; row 3 "Postcard: खुला संदेश" `words` |
| 6.78 | — | — | row 4 "Accountable item: receipt + delivery का सबूत" `words`; 9.34 small receipt icon `pop`, 11.38 green tick |

## s024
Continues: no
Section label: PART 2 · LETTER WEIGHT & SIZE
Idea: max weight 500 g; size is a separate check. Transition: fade 0.5. Component: chapter-title only 0–1.4 as
`#opener` (PART 2 · भाग 2, "Letter weight & size", Hindi "Letter का वज़न और size", stamp icon scales, value "02").
`#weight` at 1.40: `postal-scale` left (x 480, y 620, scale 1.3) with an envelope on its pan; Fact stamp right
"500 g" with "maximum वज़न".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener shown |
| 1.40 | — | — | shot `#weight`: scale with envelope placed (`place` env on scale) |
| 2.54 | — | — | `count` "500" (dur 0.6) on fact stamp + "grams" |
| 4.60 | — | — | green tick on scale tag "वज़न ठीक" |
| 5.38 | — | — | line "काफ़ी नहीं" `fade` |
| 6.60 | — | — | second card "Size की जाँच" `slide` from right with ruler icon |

## s025
Continues: s024
Section label: PART 2 · LETTER WEIGHT & SIZE
Idea: both checks must pass; letter has two forms. Sub-shots: `#weight` 0, `#forms` 2.39.
`#forms`: two cards: "Roll" with `postal-roll` drawing, "Non-roll" (+ "roll के अलावा") with a flat packet.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | two check boxes "वज़न ✓" "Size ✓" `pop`; 1.40 `pulse` both |
| 2.39 | — | — | shot `#forms`; heading "Letter के दो रूप" |
| 4.05 | — | — | roll card `pop` (anchor before s026's "roll") |

## s026
Continues: s025
Section label: PART 2 · LETTER WEIGHT & SIZE
Idea: roll vs non-roll; roll measured by length and diameter. Sub-shots: `#forms` 0, `#roll` 2.56.
`#roll`: `postal-roll` big centre (x 960, y 560, scale 1.6); measure arrow along the body "लंबाई", arrow across the
round end "diameter"; definition chip under.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `type` "Roll" label; 1.14 `pop` card "Non-roll · roll के अलावा" |
| 2.56 | — | — | shot `#roll` |
| 3.14 | — | — | `draw` length arrow; label "लंबाई" |
| 4.36 | — | — | `draw` diameter arrow on #roll-end; label "Diameter · व्यास" |
| 7.30 | — | — | chip "गोल सिरे के आर-पार की दूरी" `fade` |

## s027
Continues: no
Section label: PART 2 · LETTER WEIGHT & SIZE
Idea: non-roll: length, width, thickness; roll limits begin. Transition: cut. Sub-shots: `#box` 0, `#table` 4.52.
`#box`: a flat packet in 3/4 view with three arrows. `#table`: Component: compare-table — the letter dimensions
table, two columns "Roll · रोल" and "Non-roll · बाकी letters", rows: "कोई एक माप" (min/max), "जोड़" (L+2D or
L+W+T), "सामने की सतह"; source line "Reg. 87 · Post Office Regulations 2024". Values fill on their words.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | packet shown |
| 1.04 | — | — | `draw` arrow "लंबाई"; 1.90 "चौड़ाई"; 2.94 "मोटाई" |
| 4.52 | — | — | shot `#table`: header + row labels shown, values empty |
| 5.06 | — | — | `highlight` column "Roll" header |
| 8.64 | — | — | row 1 Roll cell `type` "min 100 mm" |

## s028
Continues: s027
Section label: PART 2 · LETTER WEIGHT & SIZE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | table held |
| 1.30 | — | — | row 1 Roll cell adds "max 800 mm" `type` |
| 2.94 | — | — | row 2 Roll label "लंबाई + 2 × diameter" `fade` |
| 7.14 | — | — | row 2 Roll cell `type` "170" |
| 8.04 | — | — | `type` "– 1000 mm"; `pulse` cell |

## s029
Continues: s028
Section label: PART 2 · LETTER WEIGHT & SIZE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `highlight` column "Non-roll" header (Roll column text dims to grey) |
| 3.66 | — | — | row 1 Non-roll label "कोई एक माप" `pulse` |
| 6.58 | — | — | Non-roll cell `type` "max 600 mm" |
| 7.96 | — | — | row 2 Non-roll label "लंबाई + चौड़ाई + मोटाई" `fade` |
| 11.98 | — | — | cell `type` "max 900 mm" |

## s030
Continues: s029
Section label: PART 2 · LETTER WEIGHT & SIZE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 "सामने की सतह" `pulse` |
| 1.94 | — | — | cell `type` "min 140 × 90 mm" |
| 5.58 | — | — | small yellow chip "± 2 mm" `pop` beside it |
| 7.48 | — | — | hold (table complete; source line visible) |

## s031
Continues: no
Section label: PART 2 · LETTER WEIGHT & SIZE
Idea: worked example: roll 750 mm, diameter 125 mm. Transition: cut. Layout: `postal-roll` top (x 960, y 330,
scale 1.3) with labels; a white working card below (x 260–1660, y 560–980) in Georgia 64, lines aligned on "=".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | roll shown, heading "एक roll लेकर देखिए" |
| 2.28 | — | — | length arrow `draw`; `count` "750 mm" |
| 6.18 | — | — | diameter arrow `draw`; `count` "125 mm" |
| 8.38 | — | — | working line 1 "जोड़ = 750 + 2 × 125" `type` (9.58 onward) |
| 13.68 | — | — | line 2 "= 750 + 250" `type` |

## s032
Continues: s031
Section label: PART 2 · LETTER WEIGHT & SIZE
Idea: total 1000 → pass; diameter 130 → 1010.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.38 | — | — | line 3 "= 1000 mm" `count`; green tick `pop`; postmark green "PASS · पास" `stamp` 2.30 |
| 4.20 | — | — | earlier working dims grey; diameter label `swap` "125" → "130" |
| 7.36 | — | — | new line "जोड़ = 750 + 260" `type` (8.34) |
| 12.40 | — | — | "= 1010 mm" `count` |

## s033
Continues: s032
Section label: PART 2 · LETTER WEIGHT & SIZE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `highlight` "750" with tag "लंबाई < 800 ✓" (green) |
| 4.28 | — | — | slate cross `pop`; postmark slate "FAIL · फ़ेल" `stamp` at 5.26 |
| 7.22 | — | — | `underline` "1010" slate; chip "जोड़ > 1000" |

## s034
Continues: no
Section label: PART 2 · LETTER WEIGHT & SIZE
Idea: don't pass a roll on length alone; the roll rule. Transition: cut. Sub-shots: `#warn` 0, `#rule` 4.10.
`#warn`: line "सिर्फ लंबाई देखकर पास नहीं" with a ruler icon struck. `#rule`: Fact stamp card left "Roll"; two
limit rows right: "एक माप · 800 mm तक", "जोड़ · 1000 mm तक".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | ruler icon shown; 1.00 line `words`; 2.50 `strike` words "पास" |
| 4.10 | — | — | shot `#rule`: "Roll" stamp |
| 5.36 | — | — | row 1 `slide` from right, `count` 800 |
| 8.94 | — | — | row 2 `slide`, `count` 1000 |

## s035
Continues: s034
Section label: PART 2 · LETTER WEIGHT & SIZE
Idea: non-roll rule; then an exam option "600 × 300 × 300". Sub-shots: `#rule` 0, `#option` 6.66.
`#rule` adds a second stamp "Non-roll" row pair under (600 / 900). `#option`: a white exam-option card "Option:
Letter का size 600 × 300 × 300 mm".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | Non-roll stamp `pop`; 2.04 row "एक माप · 600 mm तक"; 5.34 row "जोड़ · 900 mm तक" |
| 6.66 | — | — | shot `#option`: option card, label "Option" |
| 8.18 | — | — | `type` "600 × 300 × 300 mm" |

## s036
Continues: s035
Section label: PART 2 · LETTER WEIGHT & SIZE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.36 | — | — | `strike` the size (slate); slate cross; tag "गलत" |
| 3.14 | — | — | line "ऐसा कोई formula नहीं" `words`; hold |

## s037
Continues: no
Section label: PART 3 · LETTER ENVELOPE
Idea: envelope letters carry envelope conditions too; 600 mm doesn't replace them. Transition: fade 0.5.
Component: chapter-title as `#opener` 0–1.5 (PART 3 · भाग 3, "Letter envelope", "Letter का envelope", icon
envelope, "03"). `#layers` at 1.52: `domestic-envelope` centre (scale 1.4); two stacked labels left: "Letter की
शर्तें" (grey) and "+ Envelope की शर्तें" (yellow highlight).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener |
| 1.52 | — | — | shot `#layers`; envelope; label 1 shown |
| 2.34 | — | — | label 2 `slide` up; 3.98 `highlight` |
| 5.24 | — | — | chip "600 mm (आम सीमा)" `pop` |
| 9.06 | — | — | arrow from chip to label 2 `draw`; 10.38 slate cross on the arrow + line "जगह नहीं लेती" `fade` |

## s038
Continues: no
Section label: PART 3 · LETTER ENVELOPE
Idea: envelope min 140×90, max 458×324. Transition: cut. Layout: two nested envelope outlines (small one inside a
large one, drawn to scale, left-aligned bottom) centre-left; two limit rows right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading "Envelope का size" |
| 0.92 | — | — | `draw` small outline; row "Minimum" `slide`; 1.62 `type` "140 × 90 mm" |
| 5.98 | — | — | `draw` large outline; row "Maximum"; 6.62 `type` "458 × 324 mm" |

## s039
Continues: s038
Section label: PART 3 · LETTER ENVELOPE
Idea: ±2 mm on both; the 8 envelope conditions table starts. Sub-shots: `#size` 0, `#eight` 3.56.
`#eight`: white table card, two columns: left "Size और कागज़" (3 rows), right "बनावट" (5 rows). Rows: 1 Size:
140 × 90 से 458 × 324 mm (± 2) · 2 कागज़: कम से कम 70 GSM · 3 मोटाई: 0.15 – 0.5 mm · 4 Flap · 5 सतह · 6 सभी तरफ़
लगातार बंद · 7 Metal clip / staple नहीं · 8 लचीलापन. Source "Post Office Regulations 2024, Chapter V".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `pop` chip "± 2 mm" against both rows |
| 3.56 | — | — | shot `#eight`: card + title "Envelope की 8 शर्तें" |
| 6.40 | — | — | left column rows 1–3 `fade` stagger 0.6 |

## s040
Continues: s039
Section label: PART 3 · LETTER ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.92 | — | — | right header "बनावट" `fade` |
| 2.18 | — | — | row 4 Flap; 3.04 row 5 सतह; 4.02 row 6 बंद करना; 5.48 row 7 clips नहीं; 6.92 row 8 लचीलापन (`fade` each) |
| 8.12 | {on:'#row6', zoom:1.15} | — | `highlight` row 6 "सभी तरफ़ लगातार बंद" |

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

## s044
Continues: no
Section label: PART 3 · LETTER ENVELOPE
Idea: two separate measures; then a special packing rule. Transition: cut. Sub-shots: `#neq` 0, `#film` 7.79.
`#neq`: two chips "GSM" and "मोटाई" with ≠ between; keyword chip "GSM और मोटाई अलग". `#film`: `film-packet` centre
(scale 1.6); term "Safety cinematograph film" + "सुरक्षा सिनेमा फ़िल्म".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | two chips shown; 0.78 `pop` "≠" |
| 2.26 | — | — | line "एक पूरी ≠ दूसरी पूरी" `words`; 6.14 keyword chip `pop` |
| 7.79 | — | — | shot `#film`: packet `pop` |
| 10.35 | — | — | `type` term; 10.85 Hindi |

## s045
Continues: s044
Section label: PART 3 · LETTER ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.66 | {on:'#film-label', zoom:1.25} | — | `pulse` #film-label; tag "सफ़ेद label" |
| 2.84 | — | — | label border `draw`; tag "साफ़, बड़े अक्षर" |

## s046
Continues: s045
Section label: PART 3 · LETTER ENVELOPE
Idea: the exact label words; the label doesn't lift bans. Camera returns to {zoom:1} by 3.2.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | label text "SAFETY FILMS" `type` (Georgia caps), 1.78 "NON-INFLAMMABLE" `type` |
| 3.24 | {zoom:1} | — | doc line under: source "Post Office Regulations 2024" |
| 3.82 | — | — | slate line "खतरनाक चीज़ों की रोक नहीं हटती" `words` |
| 7.98 | — | — | slate line "मना item letter के लायक नहीं बनता" `words` |

## s047
Continues: no
Section label: PART 3 · LETTER ENVELOPE
Idea: summary: paper meets both GSM and thickness; closed on all sides, no clip/staple. Transition: cut.
Layout: `domestic-envelope` centre with two check rows left and right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope shown |
| 1.62 | — | — | row "GSM ✓" green; 3.60 row "मोटाई ✓"; 4.28 `highlight` "दोनों" |
| 6.62 | — | — | envelope edges `draw` in green (closed all sides) |
| 8.62 | — | — | `clip-and-staple` `pop` then 9.80 slate cross |

## s048
Continues: no
Section label: RECAP · PARTS 1–3
Idea: recap four points. Transition: fade 0.5. Component: recap-card — title "Part 1–3", seal "4", four rows:
1 "Barcode ≠ accountable" (pill "ordinary mail"), 2 "Letter" + "पत्र" (pill "max 500 g"), 3 "Roll / बाकी letters"
(pill "800/1000 · 600/900 mm"), 4 "Envelope paper" + "कागज़" (pill "70 GSM + 0.15–0.5 mm"). Each row ticks green
as said, then holds.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope card shown, seal "4" |
| 1.48 | — | — | row 1 `fade`; 4.16 pill; 5.48 tick |
| 6.26 | — | — | row 2 `fade`; 7.92 pill `count` 500; 8.46 tick |

## s049
Continues: s048
Section label: RECAP · PARTS 1–3

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 `fade`; 0.32 pill "800 / 1000"; 4.56 "· 600 / 900 mm"; 6.54 tick |
| 7.80 | — | — | row 4 `fade`; 9.02 pill "70 GSM"; 12.06 "+ 0.15 –" |

## s050
Continues: s049
Section label: RECAP · PARTS 1–3

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | pill completes "0.5 mm"; 1.76 tick row 4 |
| 2.40 | — | — | hold (all four green, ≥1 s) |

## s051
Continues: no
Section label: PART 4 · WINDOW ENVELOPE
Idea: a window envelope shows the address printed on the paper inside. Transition: fade 0.5. Component:
chapter-title as `#opener` 0–1.8 (PART 4 · भाग 4, "Window envelope", Hindi "Window envelope (खिड़की वाला लिफ़ाफ़ा)",
icon envelope with window, "04"). `#win` at 1.84: `window-envelope` big (x 240, y 240, scale 2.4); term chip
"Panel" top left; a white sheet with printed address lines sits behind the window.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener |
| 1.84 | — | — | shot `#win`; `draw` #window outline; tag "Panel · पारदर्शी खिड़की" |
| 3.94 | — | — | inner sheet `slide` up behind window (masked) |
| 5.96 | — | — | `highlight` #address-block |
| 10.20 | — | — | keyword chip "सिर्फ address block दिखे" `pop` |

## s052
Continues: s051
Section label: PART 4 · WINDOW ENVELOPE
Idea: with the barcode; paper must not shift; on top of the general envelope rules.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `highlight` #barcode inside window; chip adds "+ barcode" |
| 1.84 | — | — | inner sheet `move` by [-14, 0] then back (soft, a nudge) |
| 3.94 | — | — | tag "कागज़ न खिसके" `fade` |
| 7.00 | — | — | bottom strip: "Envelope की आम 8 शर्तें" (grey) with "+ Window की शर्तें" (yellow) `slide` up |

## s053
Continues: no
Section label: PART 4 · WINDOW ENVELOPE
Idea: window size: width 35–50, length 80–125 mm. Transition: cut. Layout: close drawing of the window only (a
large rounded rectangle, x 460–1460, y 330–730) with measure arrows; values beside them.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | window shape shown; heading "Window का size" |
| 1.60 | — | — | `draw` vertical arrow "चौड़ाई"; 2.12 `type` "35"; 3.26 "– 50 mm" |
| 4.84 | — | — | `draw` horizontal arrow "लंबाई"; 5.68 `type` "80"; 7.98 "– 125 mm" |

## s054
Continues: no
Section label: PART 4 · WINDOW ENVELOPE
Idea: window materials table. Transition: cut. Layout: white table card (x 160–1760, y 200–960), header "Window
का material" with 4 rows: Glassine paper · 35 GSM | Cellophane paper · 40 GSM | PVC · 15 micron | BOPP · 15 micron.
English terms bold; Hindi only where needed.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card + header shown |
| 4.48 | — | — | row 1 `fade`; 5.62 value `type` "35 GSM" |
| 8.16 | — | — | row 2 `fade`; 9.20 value "40 GSM" |

## s055
Continues: s054
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.76 | — | — | rows 3–4 values "15 micron मोटाई" `fade` |
| 2.84 | — | — | row 3 "PVC" `type`; 4.46 row 4 "BOPP" `type` |
| 5.50 | — | — | under PVC: "Polyvinyl Chloride" `fade` (grey 40 px) |

## s056
Continues: s055
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.62 | — | — | under BOPP: "Biaxially Oriented Polypropylene" `fade` |
| 5.06 | — | — | bottom band: small window-envelope icon: body tagged "कागज़", window tagged "ये materials" |
| 8.90 | — | — | `highlight` "window" tag |

## s057
Continues: no
Section label: PART 4 · WINDOW ENVELOPE
Idea: a fully transparent envelope isn't posted; then window position. Transition: cut. Sub-shots: `#clear` 0,
`#pos` 5.01. `#clear`: a fully transparent envelope outline (pale blue) with slate cross. `#pos`: `window-envelope`
big (x 240, y 240, scale 2.4) with margin arrows to come.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | transparent envelope shown |
| 3.62 | — | — | slate cross `pop`; line "डाक में नहीं" |
| 5.01 | — | — | shot `#pos`; heading "Window की जगह" |
| 7.49 | — | — | `draw` arrow from left edge to window |

## s058
Continues: s057
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.20 | — | — | left arrow label `type` "≥ 15 mm" |
| 2.72 | — | — | `draw` bottom arrow; 5.52 label "≥ 15 mm" |
| 7.30 | — | — | `draw` top arrow; 9.98 label "≥ 40 mm"; `highlight` it |

## s059
Continues: s058
Section label: PART 4 · WINDOW ENVELOPE
Idea: the rest of the face: logo top left, stamps/franking top right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.10 | — | — | margin arrows dim grey |
| 2.02 | — | — | `highlight` #logo-zone; tag "Sender का नाम + logo" |
| 7.12 | — | — | `pop` `adhesive-stamp` in #postage-zone; 8.20 `franking-impression` beside it (scale 0.4) |

## s060
Continues: s059
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | tag "ऊपर right" on postage zone |
| 1.52 | — | — | `draw` arrow between postage zone and address block; 5.26 label "≥ 10 mm" |
| 6.50 | — | — | `highlight` #barcode-zone; 7.92 label "नीचे 15 mm" |

## s061
Continues: no
Section label: PART 4 · WINDOW ENVELOPE
Idea: the bottom 15 mm for barcode; four code conditions table. Transition: cut. Sub-shots: `#strip` 0, `#code` 2.54.
`#code`: left `qr-code-tile` (x 260, y 330, scale 1.4) with a dashed quiet zone; right a 4-row white card "Code की 4
शर्तें": 1 quiet space · 5 mm चारों तरफ़ | 2 Logo · 25 × 50 mm तक | 3 QR code · कम से कम 18 × 18 mm | 4 Window में code +
quiet zone · कम से कम 60 × 10 mm.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope bottom strip with `linear-barcode` `draw` |
| 2.54 | — | — | shot `#code`; card + all four row labels `fade` stagger 0.3 (values empty) |
| 5.00 | — | — | `pop` qr tile; tag "2D barcode / QR code" |
| 7.58 | — | — | `draw` #quiet-zone |

## s062
Continues: s061
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 1 value `type` "5 mm"; `highlight` row 1 |
| 2.78 | — | — | term "Quiet space" + "खाली जगह" `fade` beside tile |
| 7.32 | — | — | row 2 `highlight`; 8.76 value "25 × 50 mm तक" `type` |

## s063
Continues: s062
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 `highlight`; 2.48 value `type` "18 × 18 mm" |
| 5.38 | — | — | row 4 `highlight` (value waits for s064) |

## s064
Continues: s063
Section label: PART 4 · WINDOW ENVELOPE
Idea: code with quiet zone ≥ 60 mm × 10 mm, clearly visible; then three separate checks begin.

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.30 | — | — | row 4 value `type` "60 mm" ; 3.56 "× 10 mm" |
| 5.80 | — | — | tag "साफ़ दिखे" `pop` |
| 7.72 | — | — | three chips across the bottom: "Window size" (7.72), "QR size" (8.90), "Code की जगह" (11.38) `pop` |

## s065
Continues: s064
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `words` "तीन अलग जाँच" above the chips |
| 2.50 | — | — | chip 1 turns green tick |
| 4.56 | — | — | chips 2–3 get "?" ; line "अपने आप पूरी नहीं" `words` (5.92) |

## s066
Continues: no
Section label: PART 4 · WINDOW ENVELOPE
Idea: three more points about the transparent panel. Transition: cut. Layout: `window-envelope` left (x 120, y 300,
scale 1.5); right a 3-row point list (y 340/540/740), numbered badges.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope + heading "Panel की 3 बातें" |
| 3.33 | — | — | point 1 "सबसे लंबी side के parallel" `fade`; `draw` a parallel arrow along the long edge |
| 8.07 | — | — | point 2 "address साफ़ पढ़ा जाए" `fade`; `highlight` #address-block |

## s067
Continues: s066
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.50 | — | — | point 3 "date stamp में रुकावट नहीं" `fade`; small `round-postmark` `pop` near window |
| 3.41 | — | — | bottom tip line "अंदर का कागज़ ऐसे मोड़ें कि address न छिपे" `words`; sheet edge `move` by [0,-8] |

## s068
Continues: no
Section label: PART 4 · WINDOW ENVELOPE
Idea: breach of letter size or envelope rule → double letter postage. Transition: cut. Layout: left a
`domestic-envelope` with a slate cross; right a working card: "शर्त टूटी → letter postage × 2".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope shown, heading "शर्त टूटने पर" |
| 2.48 | — | — | tags "size" and "envelope" `pop`; 4.72 slate cross |
| 6.08 | — | — | card line "letter postage × 2" `type`; 7.36 `highlight` "× 2" |

## s069
Continues: s068
Section label: PART 4 · WINDOW ENVELOPE
Idea: prepaid postage is credited; then the Part 4 summary begins. Sub-shots: `#breach` 0, `#sum4` 4.41.
`#sum4`: `window-envelope` top (x 560, y 200, scale 1.3) with three summary lines below.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card line 2 "− दिया हुआ postage (credit)" `type`; 3.14 `highlight` "credit" |
| 4.41 | — | — | shot `#sum4`; line 1 "सिर्फ address block + barcode" `words` |

## s070
Continues: s069
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | line 2 "Window: चौड़ाई 35–50" `fade`; 2.96 "· लंबाई 80–125 mm" |
| 6.12 | — | — | line 3 "ऊपर 40 mm" `fade`; arrows on envelope `draw` |

## s071
Continues: s070
Section label: PART 4 · WINDOW ENVELOPE

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | line 3 adds "· left / नीचे 15–15 mm"; hold |

## s072
Continues: no
Section label: PART 5 · INLAND LETTER CARD
Idea: the letter card defined; called ILC. Transition: fade 0.5. Component: chapter-title as `#opener` 0–4.6
(PART 5 · भाग 5, "Inland Letter Card", Hindi "अंतर्देशीय पत्र कार्ड", icon folded letter card, "05"). `#def` at
4.72: doc card left (x 120–1000, y 220–960): Georgia "a sheet of ordinary letter paper, suitably folded and
gummed", source "Post Office Regulations 2024, Reg. 2", Hindi gist; right `letter-card-folded` (x 1080, y 420,
scale 1.1) and term "ILC" big under it.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener; `three-forms-icons` not shown (stamp carries the icon) |
| 4.72 | — | — | shot `#def`; doc card text shown; `highlight` words "sheet" |
| 5.50 | — | — | `highlight` words "folded"; 6.70 words "gummed" |
| 9.60 | — | — | `pop` letter-card-folded; 12.20 `type` "ILC" big + "Inland Letter Card" |

## s073
Continues: no
Section label: PART 5 · INLAND LETTER CARD
Idea: message written on the same sheet, folded shut. Transition: cut. Layout: `letter-card-open` centre (scale
1.4) with handwriting lines `write` on the inner panel; then folded card replaces it.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | open card shown |
| 0.64 | — | — | three handwriting lines `write` stagger 0.3 (scribble paths, no words) |
| 3.30 | — | — | flaps `color` → gum yellow; 4.16 open card `out` |
| 4.40 | — | — | `pop` letter-card-folded in its place; tag "लिखा हुआ अंदर" 7.20 |

## s074
Continues: no
Section label: PART 5 · INLAND LETTER CARD
Idea: unlike a letter in an envelope; three main conditions. Transition: cut. Sub-shots: `#vs` 0, `#three` 3.92.
`#vs`: small envelope+sheet left, folded card right, "≠" between. `#three`: three tall stamp-edged cards (x 140,
720, 1300; w 480, h 700) with icons: rupee, scale, paper.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | both icons shown; 2.48 `pop` "≠" |
| 3.92 | — | — | shot `#three`; heading "3 मुख्य शर्तें"; cards `pop` stagger 0.2 (icons only) |
| 6.44 | — | — | card 1 "Postage पूरा prepaid" `fade` |

## s075
Continues: s074
Section label: PART 5 · INLAND LETTER CARD

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.50 | — | — | card 2 big "5 g" `count`; "से ज़्यादा नहीं" |
| 4.62 | — | — | card 3 big "70 GSM"; "कम से कम" |
| 6.67 | — | — | bottom chip "Size में flaps भी गिने जाते हैं" `fade`; 7.43 `highlight` "flaps" |

## s076
Continues: no
Section label: PART 5 · INLAND LETTER CARD
Idea: open card size. Transition: cut. Layout: `letter-card-open` left (x 120, y 260, scale 1.0) with outline
brackets; right a 2-row limit card "खुला card": Minimum 282 × 182 mm | Maximum 300 × 210 mm.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | open card + label "खुला card" |
| 1.00 | — | — | row Minimum `fade`; 1.58 `type` "282 × 182 mm" |
| 5.40 | — | — | row Maximum `fade`; 6.08 `type` "300 × 210 mm" |

## s077
Continues: s076
Section label: PART 5 · INLAND LETTER CARD
Idea: folded size. Layout gains a second limit card under, with `letter-card-folded` small icon.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | open-card rows dim grey; folded icon `pop`; label "मुड़ा card" |
| 1.36 | — | — | row Minimum; 1.80 `type` "152 × 90 mm" |
| 5.30 | — | — | row Maximum; 5.90 `type` "210 × 100 mm" |

## s078
Continues: s077
Section label: PART 5 · INLAND LETTER CARD
Idea: remember the folded max; three flaps usually. Sub-shots: `#sizes` 0, `#flaps` 6.44. `#flaps`:
`letter-card-open` big centre (x 960, y 600, scale 1.5) with flap callouts to come.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | {on:'#fold-max', zoom:1.2} | — | yellow outline `draw` round "210 × 100 mm"; 4.72 tag "खास याद रखिए" |
| 6.44 | {zoom:1} | — | shot `#flaps`; heading "आम तौर पर 3 flaps" |
| 7.98 | — | — | `pulse` #flap-left, #flap-right, #flap-top stagger 0.2 |

## s079
Continues: s078
Section label: PART 5 · INLAND LETTER CARD

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `highlight` #flap-left; callout "Left flap · 15 × 100 mm तक" `fade` (0.88) |
| 4.26 | — | — | #flap-right; callout "Right flap · 15 × 100 mm तक" (5.38) |
| 7.88 | — | — | #flap-top; callout "Top flap · 15 × 210 mm तक" (8.94) |

## s080
Continues: no
Section label: PART 5 · INLAND LETTER CARD
Idea: flaps may be dropped if another way seals it; private letter cards allowed. Transition: cut. Sub-shots:
`#noflap` 0, `#private` 6.54. `#noflap`: open card without flaps + a continuous gum line. `#private`: a plain
folded card labelled "Private letter card" + "निजी तौर पर बना" with a green "allowed" pill.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card without flaps shown |
| 0.66 | — | — | `draw` gum edge line; tag "असरदार तरीका" |
| 4.02 | — | — | tag "flaps छोड़े जा सकते हैं" `fade` |
| 6.54 | — | — | shot `#private`; term `type`; 8.76 green pill `pop` |

## s081
Continues: s080
Section label: PART 5 · INLAND LETTER CARD
Idea: same conditions; properly folded; closed on three sides. Layout: private card centre, check list right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.56 | — | — | check rows "size ✓" "कागज़ ✓" "बाकी शर्तें ✓" `fade` stagger 0.6 |
| 4.88 | — | — | row "ठीक से मुड़ा" |
| 6.60 | — | — | three card edges `draw` in amber (sealed sides); row "3 sides पर पूरा बंद" |

## s082
Continues: s081
Section label: PART 5 · INLAND LETTER CARD
Idea: continuous gum/glue/adhesive; "Letter Card" printed top left of the address side; then the biggest rule.
Sub-shots: `#seal` 0, `#title` 4.70, `#big` 10.71. `#title`: `letter-card-folded` big (scale 2.2) with
#ilc-title-spot. `#big`: a red full-width banner "सबसे बड़ी शर्त".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | tags "गोंद · glue · adhesive" `fade` stagger 0.7 on the sealed edges |
| 4.70 | — | — | shot `#title`; 6.62 `highlight` top-left corner |
| 8.42 | — | — | `type` "LETTER CARD" in the title spot |
| 10.71 | — | — | shot `#big`: banner `reveal` from left |

## s083
Continues: no
Section label: PART 5 · INLAND LETTER CARD
Idea: nothing inside, nothing added. Transition: cut. Layout: `letter-card-folded` centre (scale 1.8); three
items around it: a loose sheet, `photograph-print` (scale 0.5), a small object; keyword chip "न अंदर, न ऊपर".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card shown |
| 0.86 | — | — | arrow "अंदर" `draw` into card; 1.60 slate cross |
| 3.30 | — | — | arrow "ऊपर" onto card; 4.76 slate cross |
| 6.02 | — | — | sheet `pop`; 6.94 photo `pop`; 8.30 object `pop` (all slate-tinted) |
| 9.60 | — | — | `strike` all three; keyword chip `stamp` at 10.34 |

## s084
Continues: no
Section label: PART 5 · INLAND LETTER CARD
Idea: postcard's thin-picture allowance doesn't apply to letter card; an option trap. Transition: cut. Sub-shots:
`#cmp` 0, `#opt` 7.60. `#cmp`: Component: compare-cards — left "Postcard" (yellow band) "बहुत पतला चित्र: छूट ✓"
(green), right "Letter Card" (red band) "छूट नहीं" (slate cross); drop labelled facts and takeaway. `#opt`: white
exam-option card.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | both cards shown with headers |
| 1.00 | — | — | left: thin photo icon `pop`; 3.42 green tick |
| 5.26 | — | — | right: line "छूट नहीं" `fade`; 6.66 slate cross |
| 7.60 | — | — | shot `#opt`: label "Option"; 9.76 `type` "वज़न 5 grams के अंदर हो, तो" |

## s085
Continues: s084
Section label: PART 5 · INLAND LETTER CARD
Idea: "can hold a separate sheet" → wrong; breach → treated as a letter; double the deficiency on delivery.
Sub-shots: `#opt` 0, `#rule` 3.98. `#rule`: folded card with an arrow → envelope icon "Letter"; a pill "कमी × 2".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | option line 2 `type` "अलग sheet रख सकते हैं" |
| 2.50 | — | — | `strike` both lines; slate cross; tag "गलत" |
| 3.98 | — | — | shot `#rule`; card shown, 5.58 arrow `draw` + envelope "Letter" `pop` |
| 8.18 | — | — | pill "Delivery पर: कमी × 2" `pop`; 9.76 `highlight` "× 2" |

## s086
Continues: s085
Section label: PART 5 · INLAND LETTER CARD
Idea: deficiency defined; an example begins. Sub-shots: `#rule` 0, `#sum` 5.82. `#sum`: worked card (Georgia, lines
aligned on "=") right, `letter-card-folded` left with a "₹2.50" printed-stamp tag.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | term "कमी · Deficiency" + definition "letter postage − दिया postage" `words` (1.00) |
| 5.82 | — | — | shot `#sum`; heading "उदाहरण" |
| 8.40 | — | — | stamp tag `count` "₹2.50" |
| 10.70 | — | — | small sheet `fall` by 120 into card (slate) |

## s087
Continues: s086
Section label: PART 5 · INLAND LETTER CARD

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.64 | — | — | card tag `swap` "Letter card" → "अब Letter" |
| 3.46 | — | — | line 1 "Letter postage = ₹5" `type` |
| 6.20 | — | — | line 2 "कमी = ₹5 − ₹2.50 = ₹2.50" `type` |
| 8.18 | — | — | line 3 "दोगुना = ₹5" `type`; 9.56 `count` 5; 10.10 green pill |

## s088
Continues: s087
Section label: PART 5 · INLAND LETTER CARD
Idea: ₹5 collected on delivery; letter card is domestic — its printed postage isn't enough abroad. Sub-shots:
`#sum` 0, `#abroad` 3.24. `#abroad`: card left with printed stamp circled; arrow to a globe icon with slate cross.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `stamp` postmark "DELIVERY पर ₹5"; hold 1 s |
| 3.24 | — | — | shot `#abroad`; card + tag "देश के अंदर का product" (5.86) |
| 8.70 | — | — | `draw` circle on printed stamp; 10.16 arrow to globe `draw` |
| 12.06 | — | — | slate cross on arrow; line "विदेश के लिए काफ़ी नहीं" |

## s089
Continues: no
Section label: PART 5 · INLAND LETTER CARD
Idea: outgoing foreign item unpaid/short → not forwarded, returned to sender free. Transition: cut. Layout: a
route line left → right: post office → (blocked) → globe; return arrow back to "Sender".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | route line + globe shown; item icon at left |
| 1.74 | — | — | tag "unpaid" `pop`; 3.76 tag "कम postage" |
| 5.78 | — | — | barrier `pop` on the route; line "आगे नहीं जाता" |
| 7.84 | — | — | return arrow `draw` to "Sender" box |

## s090
Continues: s089
Section label: PART 5 · INLAND LETTER CARD
Idea: … free of charge; then the Part 5 summary starts with private cards. Sub-shots: `#route` 0, `#sum5` 3.97.
`#sum5`: `letter-card-folded` left (scale 1.2); four summary lines right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | green pill "बिना charge" `pop` on return arrow |
| 3.97 | — | — | shot `#sum5`; line 1 "Private letter cards: allowed, शर्तों के साथ" `words` |

## s091
Continues: s090
Section label: PART 5 · INLAND LETTER CARD

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | line 2 "Maximum 5 g" `fade`; 2.12 "· मुड़ा 210 × 100 mm तक" |
| 6.70 | — | — | line 3 keyword chip "न अंदर, न ऊपर" `pop` |

## s092
Continues: s091
Section label: PART 5 · INLAND LETTER CARD

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | line 4 "\"Letter Card\" शब्द: address side, top left" `words`; card's title spot `highlight` 3.58 |

## s093
Continues: no
Section label: RECAP · PARTS 4–5
Idea: recap four points. Transition: fade 0.5. Component: recap-card — title "Part 4–5", seal "4", rows: 1 "Window"
+ "खिड़की" (pill "सिर्फ address block + barcode"), 2 "Window size ≠ barcode place" (pill "अलग-अलग जाँच"),
3 "Letter Card" + "पत्र कार्ड" (pill "5 g · 70 GSM · 210 × 100"), 4 "Letter Card" (pill "न अंदर, न ऊपर").

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope card shown |
| 1.52 | — | — | row 1 `fade`; 2.44 pill; 4.78 tick |
| 5.84 | — | — | row 2 `fade`; 7.26 pill; 9.78 tick |

## s094
Continues: s093
Section label: RECAP · PARTS 4–5

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 `fade`; 0.86 pill builds; 6.02 tick |
| 6.96 | — | — | row 4 `fade`; 8.10 pill; 9.94 tick; hold |

## s095
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: postcard defined; printed stamp of fixed value. Transition: fade 0.5. Component: chapter-title `#opener`
0–1.0 (PART 6 · भाग 6, "Postcard conditions", "Postcard की शर्तें", icon postcard, "06"). `#def` at 1.04: doc card
top (x 120–1800, y 190–470): Georgia "an open message on a rectangular card of prescribed size", source "Post
Office Regulations 2024, Reg. 2"; below, `service-postcard` (x 960, y 760, scale 1.3), band lettered "50 p".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener |
| 1.04 | — | — | shot `#def`; card text shown; `highlight` words "prescribed size" |
| 3.64 | — | — | `highlight` words "open message" |
| 5.82 | — | — | `pop` postcard; 6.82 `draw` circle round its stamp; tag "तय value का छपा stamp" |

## s096
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: message visible to all; not a closed letter; five conditions begin. Transition: cut. Sub-shots: `#open` 0,
`#five` 6.96. `#five`: postcard left (x 100, y 300, scale 1.2); a 5-row checklist card right (x 1000–1820,
y 200–980).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | postcard message side, eye icon `pop` 0.96 |
| 3.88 | — | — | line "बंद या गोपनीय पत्र नहीं" `words` |
| 6.96 | — | — | shot `#five`; heading "Postcard की 5 शर्तें" |
| 9.02 | — | — | row 1 "वज़न: 5 g तक" `fade` |

## s097
Continues: s096
Section label: PART 6 · POSTCARD CONDITIONS

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 "Size: 140 × 90 mm" `fade`; 3.68 "(14 × 9 cm)" grey |
| 6.44 | — | — | row 3 "Postage पूरा prepaid" `fade` |
| 8.58 | — | — | row 4 "Address side पर \"POST CARD\"" `fade`; postcard `type` "POST CARD" (9.60) |

## s098
Continues: s097
Section label: PART 6 · POSTCARD CONDITIONS
Idea: in English or Hindi; card not thinner or more flexible (Reg. 91); private postcards too.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 adds "English या Hindi"; postcard adds "पोस्टकार्ड" under "POST CARD" (1.38) |
| 2.80 | — | — | row 5 doc chip Georgia "neither thinner nor more flexible" + "Reg. 91"; 5.64 `highlight` |
| 8.42 | — | — | footer pill "Private postcard: यही शर्तें" `fade` |

## s099
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: card-like stiffness needed; thin paper cut to size isn't a postcard. Transition: cut. Layout: left a stiff card
(buff, thick edge) with green tick; right a thin sheet curling, cut by a dashed scissor line to postcard size.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | stiff card shown; 1.60 tag "card जैसी मज़बूती" + green tick 3.02 |
| 4.34 | — | — | thin sheet `fade` right; 6.66 `draw` dashed cut line to postcard outline |

## s100
Continues: s099
Section label: PART 6 · POSTCARD CONDITIONS
Idea: not a postcard; but "not thinner" ≠ exactly equal thickness; it's a minimum stiffness.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | slate cross on thin sheet; tag "postcard नहीं" |
| 2.00 | — | — | bottom band: line "बराबर मोटाई ज़रूरी" `fade`; 5.42 `strike` it (slate) |
| 8.28 | — | — | new line "बस minimum मज़बूती" `fade`; 9.08 `highlight` "minimum" |

## s101
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: weight and size rules still apply; then the address-side layout. Transition: cut. Sub-shots: `#still` 0,
`#side` 4.54. `#side`: the standard postcard view: `service-postcard` address side at (300, 172) scale 2.2 (right
half x 960–1620), heading "Address side" top left.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | two chips "वज़न ✓" "size ✓" shown; line "फिर भी लगती हैं" `fade` 2.78 |
| 4.54 | — | — | shot `#side`; postcard `pop` |
| 7.18 | — | — | `draw` dashed divider brighter; 8.44 right half tinted #fde9a6 (`fade` a rect behind) |

## s102
Continues: s101
Section label: PART 6 · POSTCARD CONDITIONS
Idea: right-hand half is for three things. Keyword chip "Right-hand half: address, postage" at bottom.
Photo: `franking-machine-photo-cutout` small (h 220) as a cut-out beside the card at 6.70, with caption "stamping
machine" and credit; if missing, the drawn `franking-impression` alone.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.66 | — | — | badge "3" `pop` on right half |
| 2.62 | — | — | address rules `highlight`; tag "1 · पाने वाले का address" |
| 4.72 | — | — | `adhesive-stamp` `pop` top right; tag "2 · Postage stamps" |
| 6.70 | — | — | photo cut-out `slide` from right; `franking-impression` (scale 0.45) `fade` on card 7.90 |
| 9.30 | — | — | tag "3 · Postal directions"; keyword chip `pop` at 10.24 |

## s103
Continues: s102
Section label: PART 6 · POSTCARD CONDITIONS
Idea: stamp top right corner; its place may be shown by lines or dots. Camera close on the corner.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | {on:'#service-postcard-stamp', zoom:1.5} | — | tags from s102 dim; photo stays |
| 2.74 | — | — | `pulse` stamp; label "ऊपर right-hand corner" |
| 5.52 | — | — | dotted box `draw` beside stamp; label "lines / dots से जगह" |
| 10.52 | {zoom:1} | — | camera returns before cut |

## s104
Continues: s103
Section label: PART 6 · POSTCARD CONDITIONS
Idea: left half and back side are for the message; ads allowed there. Sub-shots: `#side` 0, `#back` 2.46.
`#back`: two small cards side by side: address side (left half tinted) and back side (whole tinted), label
"संदेश के लिए".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | left half tinted sand; tag "Left-hand half" (1.38) |
| 2.46 | — | — | shot `#back`; 3.28 back card tag "पीछे की side" |
| 4.22 | — | — | message scribbles `write` on both tinted areas |
| 6.26 | — | — | small coloured ad block `pop` on back (one colour), 8.24 a second (multi-colour) — tag "छपा advertisement" |

## s105
Continues: s104
Section label: PART 6 · POSTCARD CONDITIONS
Idea: sender's address at top left of the back; only four things may be attached.

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.14 | — | — | back card: `highlight` top-left; tag "Sender का address" + small lines `draw` |
| 6.93 | — | — | bottom banner "Postcard पर सिर्फ 4 चीज़ें जुड़ सकती हैं" `words` |

## s106
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: the 4 permitted attachments table. Transition: cut. Layout: white table card (x 140–1780, y 190–980), header
"Postcard पर जुड़ सकती हैं (Reg. 91)", four numbered rows with a small icon each: 1 stamp — "Postage / postal fees के
stamps · सिर्फ address side" | 2 label — "पाने वाले के नाम-पते का gummed label · पूरा चिपका" | 3 small label — "Sender
के नाम-पते का label · पूरा चिपका · 50 × 20 mm तक" | 4 photo — "बहुत पतले कागज़ पर engravings, illustrations, drawings,
photographs · पूरे चिपके". All rows' numbers + icons visible from 0.00, text lands on words.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card, header, badges 1–4 and icons |
| 1.74 | — | — | row 1 text `fade`; 6.54 `highlight` "सिर्फ address side" |
| 9.00 | — | — | row 2 first half `fade` "पाने वाले के" |

## s107
Continues: s106
Section label: PART 6 · POSTCARD CONDITIONS

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 completes; 1.74 `highlight` "पूरा चिपका" |
| 3.80 | — | — | row 3 `fade`; 7.84 `highlight` "50 × 20 mm तक" |

## s108
Continues: s107
Section label: PART 6 · POSTCARD CONDITIONS
Idea: row 4; both address labels go on the back or left half.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 `fade` (words list), 6.98 `highlight` "पूरे चिपके" |
| 9.34 | — | — | rows 2–3 get an amber note "→ पीछे की side" `fade` |

## s109
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: labels on back or left half; right half keeps its job; folding, covering, cutting, altering forbidden.
Transition: cut. Sub-shots: `#labels` 0, `#banned` 7.50. `#labels`: standard postcard view with two label strips.
`#banned`: four slate tiles in a row (fold, envelope, scissors, pencil-edit icons) with Hindi words.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | postcard; label strip `place` on left half (1.80) |
| 3.50 | — | — | right half tint `pulse`; tag "अपने तय कामों के लिए" |
| 7.50 | — | — | shot `#banned`; 8.28 "मोड़ना"; 9.06 "cover में रखना"; 10.40 "काटना"; 11.38 "बदलना" tiles `pop` |
| 11.96 | — | — | all four get slate crosses `pop` stagger 0.1; tag "मना" |

## s110
Continues: s109
Section label: PART 6 · POSTCARD CONDITIONS
Idea: one allowance: perforated initials in the printed stamp; postcard in an envelope doesn't go as a postcard.
Sub-shots: `#banned` 0, `#perf` 1.46, `#inenv` 5.90. `#perf`: close printed stamp (scale 3) with tiny holes forming
dots (drawn circles) and a green tick. `#inenv`: postcard sliding into `domestic-envelope`.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | line "बस एक छूट" `fade` above tiles |
| 1.46 | — | — | shot `#perf`; 3.14 holes `pop` stagger 0.05; 4.54 green tick + tag "initials के छेद ✓" |
| 5.90 | — | — | shot `#inenv`; 7.58 postcard `move` by [0, 160] into envelope |
| 8.74 | — | — | tag "खुले postcard की तरह नहीं" + slate cross 10.14 |

## s111
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: a folded card isn't a postcard just because it says "Post Card"; then a size trap. Transition: cut.
Sub-shots: `#folded` 0, `#trap` 5.48. `#folded`: folded card with "POST CARD" written; slate strike. `#trap`:
Component: exam-trap — banner "Size पर trap"; card 1 "Envelope" + "± 2 mm छूट" (stamp "±2"), card 2 (tricky,
yellow border) "Domestic postcard" + "छूट नहीं" (stamp "0"); remember bar for s112.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | folded card shown; 2.04 `type` "POST CARD" on it |
| 3.70 | — | — | `strike` it; line "postcard नहीं बनता" |
| 5.48 | — | — | shot `#trap`: banner `reveal` |
| 7.46 | — | — | card 1 `slide` up; 8.66 stamp "±2" `stamp` |

## s112
Continues: s111
Section label: PART 6 · POSTCARD CONDITIONS

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card 2 `slide` up; 1.52 `underline` "छूट नहीं" |
| 2.36 | — | — | line under card 2 "size बिना छूट के तय: 140 × 90 mm" `fade` |
| 7.08 | — | — | remember bar `fade` "2 mm की छूट: International postcard पर" ; 9.58 `highlight` "International" |

## s113
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: international postcard sizes. Transition: cut. Layout: two nested outlines (min inside max) left; limit
card right "International postcard · अंतरराष्ट्रीय पोस्टकार्ड": Maximum 120 × 235 mm | Minimum 90 × 140 mm (± 2 mm chip).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | term `type`; 0.50 Hindi |
| 1.88 | — | — | `draw` large outline; row Maximum `type` "120 × 235 mm" (2.48) |
| 6.10 | — | — | `draw` small outline; row Minimum `type` "90 × 140 mm" (6.58) |

## s114
Continues: s113
Section label: PART 6 · POSTCARD CONDITIONS
Idea: same sizes for airmail postcards; directions that may be written. Sub-shots: `#intl` 0, `#dir` 4.52.
`#dir`: standard postcard view; handwritten directions in Caveat on the address side (left of the address).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chip "Airmail postcards भी" `pop` (1.58) |
| 4.52 | — | — | shot `#dir`; heading "लिखे जा सकते हैं" |
| 8.34 | — | — | `write` "Air Mail" (Caveat 56) |
| 11.42 | — | — | `write` "Late Fee Paid" |

## s115
Continues: s114
Section label: PART 6 · POSTCARD CONDITIONS

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.04 | — | — | term chip "Poste restante" + "डाकघर में रुकी डाक" `fade` |
| 3.64 | — | — | `write` "To await arrival" on card |
| 5.66 | — | — | green pill "postcard poste restante जा सकता है" `pop` |

## s116
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: breach → treated as letter; double the difference on delivery. Transition: cut. Layout: postcard icon →
arrow → envelope icon "Letter" (top row, y 300); a formula card below (Georgia): "दोगुना × (letter postage −
दिया postage)".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | postcard icon with slate cross shown, heading "शर्त टूटने पर" |
| 1.48 | — | — | arrow `draw`; 3.32 envelope "Letter" `pop` |
| 5.58 | — | — | formula card `slide` up; `type` formula (6.64) |
| 10.58 | — | — | `highlight` "दोगुना" |

## s117
Continues: s116
Section label: PART 6 · POSTCARD CONDITIONS
Idea: minimum ₹1; round up paise; then the Part 6 summary starts. Sub-shots: `#rule` 0, `#sum6` 7.71. `#sum6`:
standard postcard view small left (scale 1.2, x 100, y 300), three summary lines right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chip "minimum ₹1" `pop` (1.46) |
| 2.88 | — | — | chip "paise → अगला पूरा रुपया" `fade` |
| 7.71 | — | — | shot `#sum6`; line 1 "140 × 90 mm" (8.33), "· max 5 g" (12.17) |

## s118
Continues: s117
Section label: PART 6 · POSTCARD CONDITIONS

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | keyword chip "Right-hand half: address, postage" `pop`; right half tint `pulse` |
| 3.62 | — | — | chip adds "+ postal directions" |
| 5.22 | — | — | line 3 "बहुत पतली photo: तभी ठीक, जब पूरी चिपकी" `words`; `photograph-print` tiny `place` on card |

## s119
Continues: no
Section label: PART 6 · POSTCARD CONDITIONS
Idea: allowed on postcard ≠ allowed on letter card. Transition: cut. Layout: postcard left with green tick
"allowed"; folded letter card right; an arrow between with slate cross; line below.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | both cards shown |
| 2.14 | — | — | green tag "allowed" on postcard |
| 3.44 | — | — | arrow `draw` to letter card; 5.12 slate cross; line "अपने आप allowed नहीं" |

## s120
Continues: no
Section label: PART 7 · ONE POSTCARD CATEGORY
Idea: domestic tariff has one postcard category. Transition: fade 0.5. Component: chapter-title as `#opener`
0–1.9 (PART 7 · भाग 7, "One postcard category", "Postcard की एक category और उसकी पहचान", icon postcard, "07").
`#one` at 1.98: a big "1" stamp card left; right heading "Domestic tariff · घरेलू दरें".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener |
| 1.98 | — | — | shot `#one`; heading `fade` |
| 3.34 | — | — | stamp "1" `stamp`; 4.16 tag "category" |

## s121
Continues: s120
Section label: PART 7 · ONE POSTCARD CATEGORY
Idea: Postcard, 50 paise; printed message or advertisement. Keyword chip "एक Postcard · 50 paise". Source line
"Source: Post Office Regulations 2024, Schedule I".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `type` "Postcard" big in the right panel |
| 1.76 | — | — | Fact stamp "50 paise" `pop`; "प्रति postcard" 3.20; source line `fade` |
| 4.66 | — | — | two small chips "छपा संदेश" (5.28) and "advertisement" (7.08) with "= वही category" |

## s122
Continues: no
Section label: PART 7 · ONE POSTCARD CATEGORY
Idea: rules stay the same whatever is printed; a single postcard carries one message. Transition: cut.
Sub-shots: `#same` 0, `#single` 5.94. `#same`: four check chips round a postcard: size, वज़न, जगह, attachment.
`#single`: one postcard with a "1 संदेश" tag.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | postcard shown; chips `pop` 0.54 / 1.54 / 2.52 / 3.34 |
| 4.58 | — | — | line "वही रहती हैं" `fade` |
| 5.94 | — | — | shot `#single`; term "Single postcard"; 7.32 tag "एक संदेश" |

## s123
Continues: s122
Section label: PART 7 · ONE POSTCARD CATEGORY
Idea: departmental single card has a printed stamp; reply rule: ordinary postcard isn't folded.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `draw` circle on printed stamp; tag "तय value का छपा stamp" |
| 5.02 | — | — | heading "जवाब के लिए" `fade` |
| 7.40 | — | — | folded-card icon `pop` beside; 9.34 slate cross + "मोड़ा नहीं" |

## s124
Continues: s123
Section label: PART 7 · ONE POSTCARD CATEGORY

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.08 | — | — | second card icon attached to first `pop`; 2.40 slate cross + "दूसरा card नहीं" |
| 3.68 | — | — | separate reply postcard `slide` from right; tag "अलग reply: postcard की शर्तें" (6.12) |
| 8.70 | — | — | green tick on the reply card |

## s125
Continues: no
Section label: PART 7 · ONE POSTCARD CATEGORY
Idea: printed message, advertisement, competition reply: same tariff; don't mix with Business Reply Service.
Transition: cut. Sub-shots: `#three` 0, `#brs` 7.83. `#three`: terminology card (white, three rows): "Printed
postcard · machine-printed text or images (cyclostyling भी)", "Meghdoot · address के पास ad, 4 रंग तक, 140 × 90 mm",
"Competition · TV, radio, press, magazine…: सिर्फ students नहीं", footer "एक ही tariff · 50 paise (20 Dec 2024 से)".
`#brs`: Component: compare-cards — left "Postcard" (yellow band), right "Business Reply Service" (red band) with
`business-reply-card` drawn; facts arrive in s126.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card + row 1 `fade` |
| 1.16 | — | — | row 2 `fade`; 3.02 row 3 `fade` |
| 4.70 | — | — | footer `fade`; 5.88 `highlight` "एक ही tariff" |
| 7.83 | — | — | shot `#brs`; both headers; 9.63 "≠" disc `pop` |

## s126
Continues: s125
Section label: PART 7 · ONE POSTCARD CATEGORY

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.58 | — | — | BRS fact 1 "Authorised business" `fade` |
| 2.58 | — | — | `business-reply-card` `pop` in BRS card; tag "खास reply stationery" |
| 6.38 | — | — | BRS fact 2 "जवाब मिलने पर charges: वही business" `fade`; 8.34 `highlight` |

## s127
Continues: s126
Section label: PART 7 · ONE POSTCARD CATEGORY
Idea: an ordinary sender can't make a reply postage-free; then history: first postcard, Austria, 1 Oct 1869.
Sub-shots: `#brs` 0, `#hist` 6.34. `#hist`: Component: timeline — two events only: "1 October 1869 · Austria ·
दुनिया का पहला postcard" and "1879 · East India Postcard · भारत का पहला" (second waits for s128); track fills red.
Photo: `first-postcard-austria-1869` as a paper cut-out (tilted −2°, white border, credit) above the first event;
if missing, a stamp-edge card with "1869".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | Postcard card fact "आम sender: reply लिखकर free नहीं" `fade`; 4.70 slate strike on "free" |
| 6.34 | — | — | shot `#hist`; title "थोड़ा इतिहास" ; track `draw` |
| 8.92 | — | — | event 1 card `slide` up; photo `fade` 9.40 |
| 10.24 | — | — | `type` "1 October"; 11.18 year "1869" `pop`; 13.38 "Austria" |

## s128
Continues: s127
Section label: PART 7 · ONE POSTCARD CATEGORY
Photo: `east-india-postcard-1879` cut-out above event 2 (fallback: stamp-edge card "1879").

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | track fills to event 2 (`grow` axis x) |
| 2.18 | — | — | event 2 card `slide` up "East India Postcard"; photo `fade` |
| 3.90 | — | — | year "1879" `pop`; hold |
| 6.42 | {zoom:1.0} | — | caption band `fade` "तीनों तरह के संदेश: एक ही Postcard tariff" |

## s129
Continues: s128
Section label: PART 7 · ONE POSTCARD CATEGORY

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `stamp` a Fact stamp "50 paise" over the caption band's right end; hold |

## s130
Continues: no
Section label: RECAP · PARTS 6–7
Idea: recap four points. Transition: fade 0.5. Component: recap-card — title "Part 6–7", seal "4", rows: 1 "Postcard"
+ "पोस्टकार्ड" (pill "140 × 90 mm · 5 g · ±2 नहीं"), 2 "Right-hand half" + "दायाँ आधा" (pill "address · postage ·
postal directions"), 3 "मना" row (pill "मोड़ना · cover · काटना ✗ / initials के छेद ✓"), 4 "Postcard tariff" (pill
"एक category · 50 paise").

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card shown |
| 1.74 | — | — | row 1 `fade`; 2.30 pill builds; 8.50 tick |
| 9.14 | — | — | row 2 `fade` |

## s131
Continues: s130
Section label: RECAP · PARTS 6–7

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 pill builds; 2.68 tick |
| 4.00 | — | — | row 3 `fade`; pill "मोड़ना · cover · काटना ✗" 4.00–6.52; 8.02 "initials के छेद ✓"; 11.10 tick |

## s132
Continues: s131
Section label: RECAP · PARTS 6–7

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 `fade`; 2.82 pill "50 paise"; 3.20 tick; hold |

## s133
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: admin instructions decide how unaccountable mail moves: surface. Transition: fade 0.5. Component:
chapter-title as `#opener` 0–2.5 (PART 8 · भाग 8, "Mail classes & airmail", "First-class, second-class mail और हवाई
डाक", icon plane over envelope, "08"). `#how` at 2.56: `transport-icons` across the middle (x 360, y 520), rail and
road lit, air grey; term "Surface · ज़मीन से" left.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener |
| 2.56 | — | — | shot `#how`; chip "Administrative instructions" `fade` (3.16) |
| 7.96 | — | — | envelope icon "Ordinary unaccountable mail" `pop` left |
| 9.84 | — | — | `type` "Surface" + Hindi; #rail and #road `pulse` |

## s134
Continues: s133
Section label: PART 8 · MAIL CLASSES & AIRMAIL

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | tag under #rail "लंबी दूरी" (0.64) |
| 2.52 | — | — | tag under #road "शहर के अंदर" |
| 3.92 | — | — | #air `color` → ink; tag "सिर्फ खास cases" (4.88) |
| 7.54 | — | — | chip "भूगोल की मजबूरी" `pop`; 10.20 chip "department का फ़ैसला" |

## s135
Continues: s134
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: first-class ≠ free airlift. Keyword chip "First-class ≠ free airlift".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chips hold |
| 2.60 | — | — | envelope tag `swap` → "First-class mail" |
| 6.52 | — | — | dashed arrow envelope → #air `draw`; 8.16 slate cross on it |
| 8.44 | — | — | keyword chip `stamp` at bottom |

## s136
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: first-class has three; the rest are second-class. Transition: cut. Layout: Component: compare-cards — left
"First-class mail" + "प्रथम श्रेणी डाक" (red band) with `three-forms-icons` small inside (scale 0.45); right
"Second-class mail" + "द्वितीय श्रेणी डाक" (yellow band) "बाकी classes"; drop facts and takeaway.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | left card shown |
| 2.76 | — | — | icon "Letters" fill lit; 3.66 "postcards"; 5.60 "inland letter cards" (labels `fade`) |
| 7.58 | — | — | right card `slide` from right; 8.80 header `type` |

## s137
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: Guide's sorting terminology list — not today's booking menu; letter ≠ letter mail ≠ first-class mail.
Transition: cut. Sub-shots: `#list` 0, `#three` 7.64. `#list`: white table card "Guide sorting terminology · छँटाई
की शब्दावली" with a grey stamp-tag "शब्दावली, booking menu नहीं"; two columns: First-class (3: letters, postcards,
inland letter cards) | Second-class (7: book and pattern packets; printed-book packets; periodical packets; blind
literature packets; registered newspapers; sample packets; parcels); footer "कुल 10 · letter mail 9 · parcel mail 1".
`#three`: three term chips "Letter" / "Letter mail" / "First-class mail" with "≠" between.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card + column heads; first-class rows shown |
| 0.78 | — | — | second-class rows `fade` stagger 0.3 |
| 3.30 | — | — | footer `fade` |
| 4.04 | — | — | grey tag `stamp` "booking menu नहीं" |
| 7.64 | — | — | shot `#three`; chips `pop` 7.64 / 8.28 / 9.50; "≠" `pop` 10.96 |

## s138
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: second-class can fly with two conditions. Transition: cut. Layout: a parcel/packet icon centre-left with
`airmail-label` and a surcharge stamp; two condition rows right numbered 1, 2.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | packet "Second-class" shown with `transport-icons` #air small above |
| 2.86 | — | — | heading "दो शर्तें" |
| 4.50 | — | — | row 1 "हवाई डाक का निशान" `fade`; `airmail-label` `place` on packet, lettered "AIR MAIL" |
| 7.90 | — | — | row 2 "ज़रूरी air surcharge" `fade`; small stamp `pop` on packet |

## s139
Continues: s138
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: airmail not closed to second-class; registered newspaper is second-class. Sub-shots: `#air2` 0, `#news` 4.32.
`#news`: `newspaper-bundle` centre-left (scale 1.6); term "Registered newspaper" + "पंजीकृत समाचार पत्र"; tag
"Second-class".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | green pill "बंद नहीं" `pop` (3.04) |
| 4.32 | — | — | shot `#news`; bundle `pop`; term `type` |
| 7.92 | — | — | tag "Second-class mail" `pop` |
| 10.64 | — | — | small sorting-rack icon `fade` right with tag "sorting" |

## s140
Continues: s139
Section label: PART 8 · MAIL CLASSES & AIRMAIL

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | tag "First-class जैसा treatment" `fade` beside rack |
| 3.10 | — | — | plane icon `pop`, 3.62 slate cross "free airlift नहीं" |
| 5.46 | — | — | chip "हवा से = surcharge देना होगा" `fade` |

## s141
Continues: s140
Section label: PART 8 · MAIL CLASSES & AIRMAIL

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `highlight` words "Registered" in the term |
| 1.74 | — | — | note "= newspaper का postal registration" `fade` |
| 5.48 | — | — | chip "First-class mail" with slate strike; line "कोई लेना-देना नहीं" |

## s142
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: a facility for greeting cards and printed invitations in a book packet. Transition: cut. Layout:
`domestic-envelope` lettered "BOOK PACKET" top centre (scale 1.5, x 390, y 220); a greeting card and an invitation
icon beside it; route chip below.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope shown |
| 0.40 | — | — | greeting card icon `pop`; 1.68 invitation icon `pop` |
| 3.78 | — | — | `type` "BOOK PACKET" on envelope |
| 4.74 | — | — | tag "सिर्फ ये हों" `fade` |
| 8.78 | — | — | chip "First-class mail + registered newspapers के साथ" `fade` |

## s143
Continues: s142
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: they go by surface; the exact marking under "Book Packet": "Greetings" or "Invitations".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chip adds "→ surface"; #road icon small `pop` |
| 1.74 | {on:'#env', zoom:1.3} | — | `highlight` "BOOK PACKET" |
| 4.76 | — | — | under it, Georgia "Greetings" `type` (7.32); "or" grey; "Invitations" `type` (8.72) |

## s144
Continues: s143
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: surface facility, not free airlift; then airmail fee. Sub-shots: `#bp` 0, `#fee` 4.21. Camera back to zoom 1
at 0.00 (cut resets). `#fee`: heading "Airmail fee · हवाई डाक शुल्क", an item icon on `postal-scale`; plane icon.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | {zoom:1} | — | chip "surface की सुविधा" green; 2.28 plane icon + slate cross "free airlift नहीं" |
| 4.21 | — | — | shot `#fee`; heading `type` |
| 5.61 | — | — | item + tag "हवा से भेजने के लिए स्वीकार" `fade` |

## s145
Continues: s144
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: fee is on top of postage and other fees; separate from the department's routing decision.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | stacked bar: "Postage" + "बाकी fees" blocks shown; 0.60 "Airmail fee" block `slide` down on top (yellow) |
| 2.50 | — | — | tag "ऊपर से" |
| 5.92 | — | — | right: chip "Department का फ़ैसला: जहाज़ से?" `fade`; "≠" between (8.78) |

## s146
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: the domestic airmail rate. Transition: cut. Layout: Fact stamp left "₹2" "पहले 50 g (या हिस्सा)"; right
stamp "₹1" "हर अगले 50 g (या हिस्सा)"; source "Source: Post Office Regulations 2024, Schedule I".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading "Domestic airmail fee" shown |
| 3.08 | — | — | left stamp `pop`; 5.92 `count` "₹2" |
| 6.58 | — | — | right stamp `pop`; 10.06 `count` "₹1"; source `fade` |

## s147
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: worked sum: 120 g → 50 + 50 + 20 blocks. Transition: cut. Layout: a horizontal bar (x 200–1720, y 380, h 120)
for 120 g split into three blocks; fee coins under each block; total line below.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading "एक हिसाब" + empty bar outline |
| 1.32 | — | — | `count` "120 g" on the bar label |
| 3.90 | — | — | block 1 "50 g" `grow` x; 5.26 "₹2" `pop` under it |
| 5.82 | — | — | block 2 "50 g" `grow`; 7.92 "₹1" `pop` |

## s148
Continues: s147
Section label: PART 8 · MAIL CLASSES & AIRMAIL

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | block 3 "20 g" `grow` (shorter, dashed outline of the full 50 g around it) |
| 1.48 | — | — | tag "अगले 50 का हिस्सा"; 3.84 "₹1" `pop` |
| 5.68 | — | — | total "₹2 + ₹1 + ₹1 = ₹4" `type`; 6.74 `count` 4; green pill |
| 8.42 | — | — | grey line "postage और बाकी fees के अलावा" `fade`; hold 1 s |

## s149
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: blue airmail label, top left of the address side. Transition: cut. Layout: `domestic-envelope` big (scale
1.8, x 276, y 250) with `airmail-label` lettered "AIR MAIL".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | envelope shown, tag "Surcharge वाला airmail article" |
| 3.12 | — | — | `airmail-label` `place` at top left (dx/dy) |
| 3.66 | — | — | label text `type` "AIR MAIL"; tag "नीला label" |
| 7.00 | — | — | `highlight` corner; tag "address side · top left" |

## s150
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: parcels: full airmail fee prepaid; attached acknowledgement card's weight counts. Transition: cut. Layout:
parcel box on `postal-scale` left; a small acknowledgement card tied to it; two rule lines right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | parcel on scale shown |
| 0.70 | — | — | line 1 "पूरी airmail fee पहले" `fade`; 2.62 `highlight` "पहले" |
| 5.16 | — | — | ack card `place` on parcel; tag "Acknowledgement card" |
| 7.56 | — | — | line 2 "इसका वज़न भी air fee में" `fade`; `highlight` "भी" |

## s151
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: limited airlift: air over one hard stretch, cheaper fee; rest by surface. Transition: cut. Layout: a route
line across the frame: A — (road) — hard stretch (mountain icons, dashed plane arc) — (road) — B.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | term "Limited airlift · सीमित हवाई ढुलाई" + route line shown |
| 2.38 | — | — | mountains `pop` in middle; 3.16 tag "मुश्किल हिस्सा" |
| 4.34 | — | — | plane arc `draw` over mountains |
| 6.14 | — | — | chip "कम air fee" `pop` |
| 7.50 | — | — | road segments `color` → ink with tag "बाकी: surface" |

## s152
Continues: s151
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: the label names the two places. Exact words on `limited-airlift-label`: "For Limited air lifts between ……
and …… only" (Georgia, blanks as dotted lines; never real place names).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | label `slide` up under the route |
| 0.42 | — | — | label text `type` |
| 1.52 | — | — | dotted blanks `pulse`; tag "दो जगहें" pointing at the arc's ends |
| 6.02 | — | — | line "पूरे सफ़र का airmail नहीं" `fade`; slate strike on "पूरे सफ़र" 9.16 |

## s153
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: full prepayment is the rule; Book Now Pay Later customers pay via credit. Transition: cut. Layout: left rule
pill "पूरा prepayment · आम नियम"; right term card "Book Now Pay Later" + "अभी बुक करें, बाद में भुगतान" with a credit
icon.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | rule pill shown |
| 2.68 | — | — | term card `slide` from right; `type` term |
| 4.30 | — | — | tag "Authorised customer" `fade` |
| 6.84 | — | — | credit icon `pop`; tag "credit सुविधा से भुगतान" |

## s154
Continues: s153
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: a separate authorised arrangement; then QMS and where it runs. Sub-shots: `#bnpl` 0, `#qms` 3.81. `#qms`:
`qms-letter-box` left (x 260, y 300, scale 1.2); term "Quick Mail Service (QMS)" + "त्वरित डाक सेवा" right; three
place chips.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chip "अलग, authorised व्यवस्था" `pop` |
| 3.81 | — | — | shot `#qms`; term `type`; 6.23 "QMS" big `pop` |
| 7.81 | — | — | chips "State capitals" (7.81), "Union Territories" (9.25), "कुछ important towns" (11.13) |

## s155
Continues: s154
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: QMS conditions: first-class, fully prepaid, PIN at the end, in the yellow-striped box before clearance.
Layout: chips dim; a 3-row step list right (Component: step-list, 3 steps, no closing chip).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | step 1 "First-class + पूरा prepaid" `fade` |
| 4.03 | — | — | step 2 "Address के आखिर में delivery office का PIN" `fade` |
| 7.62 | — | — | step 3 "पीली धारियों वाला QMS box" `fade`; box's yellow bands `pulse` 8.62 |
| 11.18 | — | — | step 3 adds "तय clearance time से पहले"; small clock icon `pop` |

## s156
Continues: s155
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: QMS mail handled quickly; airlift where instructions allow; no extra QMS charge. Sub-shots: `#steps` 0,
`#perks` 3.08. `#perks`: QMS box left stays; right two cards: "जल्दी निपटान" (fast-forward icon), "Airlift: जहाँ
transmission instructions allow करें" (plane icon, amber outline), and a green chip "Extra QMS charge: नहीं".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | step list dims grey; chip "Posting पर जल्दी निपटान" `pop` (1.41) |
| 3.08 | — | — | shot `#perks`; airlift card `slide` up; 5.30 `highlight` "allow" |
| 8.88 | — | — | green chip `pop`; 9.76 `underline` "नहीं" |

## s157
Continues: s156
Section label: PART 8 · MAIL CLASSES & AIRMAIL

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.36 | — | — | card "Destination पर delivery: आम डाक के साथ" `fade` |
| 4.58 | — | — | airlift card `pulse`; tag "अपने आप का हक नहीं" with slate strike on "हक" (7.56) |

## s158
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: three separate things: sorting priority, surface with first-class, free airlift; first-class members.
Transition: cut. Sub-shots: `#three` 0, `#fc` 9.94. `#three`: three white chips in a row with "≠" between: "Sorting
priority", "First-class के साथ surface", "Free airlift" (slate, dashed). `#fc`: `three-forms-icons` big (all lit)
with heading "First-class mail".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chip 1 shown (anchor) with its text at 0.54 |
| 1.94 | — | — | chip 2 `pop`; 5.60 chip 3 `pop` |
| 7.38 | — | — | "≠" signs `pop` stagger 0.2; line "तीन अलग चीज़ें" |
| 9.94 | — | — | shot `#fc`; labels under icons 10.58 "Letters", 11.50 "Postcards", 13.08 "Letter cards" |

## s159
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: ordinary mail: rail far, road in town; second-class by air needs mark + surcharge. Transition: cut. Layout:
top half `transport-icons` with tags; bottom half packet with `airmail-label` + surcharge stamp and two ticks.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | top half shown, heading "Ordinary डाक" |
| 1.36 | — | — | tag "लंबी दूरी: rail"; 3.06 tag "शहर: road" |
| 4.66 | — | — | bottom half `slide` up, heading "Second-class हवा से" |
| 6.70 | — | — | tick "निशान"; 8.16 tick "surcharge" (green) |

## s160
Continues: no
Section label: PART 8 · MAIL CLASSES & AIRMAIL
Idea: airmail fee recap. Transition: cut. Same two-stamp layout as s146 (₹2 / ₹1) with source line.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading "Airmail fee" + both stamps outlines |
| 1.64 | — | — | left "पहले 50 g"; 2.46 "₹2" `pop` |
| 4.04 | — | — | right "हर 50 g"; 5.08 "₹1" `pop`; hold |

## s161
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: lower rate only if product conditions met; five counter steps. Transition: fade 0.5. Component:
chapter-title as `#opener` 0–5.1 (PART 9 · भाग 9, "Counter checks & dues", "Counter पर जाँच और due रकम", icon post
counter, "09"). `#steps` at 5.17: Component: step-list moulded to 5 steps — `post-counter-icon` small at left
(x 120, y 260, scale 0.7); five numbered rows right (x 560–1800, y 200/360/520/680/840), each Hindi. Steps fill on
their words in s161–s165.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener; 1.39 line under subtitle "कम rate = शर्तें पूरी" `fade` |
| 5.17 | — | — | shot `#steps`; counter icon + five empty numbered badges |
| 7.71 | — | — | step 1 "Product पहचानिए" `fade`; `three-forms-icons` mini row in it (scale 0.3) |

## s162
Continues: s161
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | mini icons: letter lit + "बंद"; 1.32 ILC + "मुड़ा"; 3.36 postcard + "खुला" |
| 4.80 | — | — | step 2 "वज़न और size की सीमा" `fade`; step 1 dims |

## s163
Continues: s162
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | step 3 "बनावट देखिए" `fade`; step 2 dims |
| 2.50 | — | — | sub-line "Letter: envelope, बंद करना" |
| 4.95 | — | — | sub-line "Letter card: न अंदर, न ऊपर" (keyword chip) |

## s164
Continues: s163
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | sub-line "Postcard: सिर्फ allowed बदलाव / चीज़ें" |
| 4.61 | — | — | step 4 "Postage मिलाइए" `fade`; step 3 dims |
| 7.45 | — | — | sub-line "ज़रूरी = छपा + extra valid stamps"; tiny `adhesive-stamp` `pop` 11.31 |

## s165
Continues: s164
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: step 5: posting method; fully prepaid ordinary letters, letter cards, postcards may go in the letter box.
Photo: `india-post-letter-box-cutout` (h 420) as a paper cut-out standing at the right edge (x 1500), caption
"Letter box" + credit; drawn red pillar box if missing. Steps column narrows to x 560–1400.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | step 5 "Posting का तरीका" `fade`; step 4 dims |
| 2.61 | — | — | sub-line "पूरे prepaid ordinary: letter, letter card, postcard" |
| 7.68 | — | — | photo `slide` from right; tag "letter box ✓" |

## s166
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: accountable items only at the counter; a big ordinary item handed in stays ordinary. Transition: cut.
Layout: `post-counter-icon` centre-left (scale 1.4); receipt icon; right a large envelope tag.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | counter shown; tag "Accountable items" `fade` |
| 2.93 | — | — | `booking-receipt` `pop` on desk; tag "सिर्फ counter पर" |
| 4.65 | — | — | big packet icon right; tag "बड़ा ordinary item" |
| 7.29 | — | — | small slot icon + slate cross "box में नहीं जाता"; 8.47 arrow packet → counter `draw` |

## s167
Continues: s166
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: stays ordinary; then two different reasons a charge arises. Sub-shots: `#counter` 0, `#why` 3.01. `#why`:
Component: compare-cards — two cards "वजह 1" and "वजह 2" (both neutral bands, red/yellow), no VS judgement.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | packet tag `swap` → "फिर भी ordinary" |
| 3.01 | — | — | shot `#why`; heading "charge की दो वजहें" |
| 6.13 | — | — | card 1 "Postage कम लगा" `fade` |

## s168
Continues: s167
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: reason 2: a product condition broke; check which; deficiency defined. Sub-shots: `#why` 0, `#def` 7.78.
`#def`: Component: key-term — red card "Deficiency" + "कमी"; meaning card "ज़रूरी postage − दिया गया postage".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card 2 "Product की शर्त टूटी" `fade` |
| 3.70 | — | — | line "पहले: charge किस वजह से?" `words`; 6.14 `highlight` "किस वजह" |
| 7.78 | — | — | shot `#def`; `type` "Deficiency"; 8.30 "कमी" `fade` |
| 10.28 | — | — | meaning `words` |

## s169
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: general rule (domestic, short): unpaid → double the prepaid rate. Transition: cut. Layout: two rule rows
(y 400 / 680): row 1 icon item with no stamp + `postage-due-mark`; row 2 for s170. Heading "आम नियम · domestic".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading shown |
| 4.54 | — | — | row 1 label "Unpaid item" `fade` |
| 6.10 | — | — | "= prepaid rate × 2" `type`; 7.78 `highlight` "× 2" |

## s170
Continues: s169
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 label "कम postage" `fade`; 2.08 "= कमी × 2" `type` |
| 3.86 | — | — | chip "minimum ₹1" `pop` |
| 6.50 | — | — | footer chip "Unpaid / कम airmail fee: यही नियम" `fade` |

## s171
Continues: s170
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: collected from the addressee on delivery; if undelivered, from the sender on return. Sub-shots: `#rule` 0,
`#who` 1.62. `#who`: left house icon "Addressee · पाने वाला" with arrow "delivery पर"; right return arrow to "Sender"
with "लौटाते समय".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | footer chip `pulse` |
| 1.62 | — | — | shot `#who`; 2.26 arrow + house `draw`; 3.08 label |
| 4.72 | — | — | slate cross on delivery arrow (not delivered) 5.74; return arrow `draw` 6.94; 7.94 "Sender" label |

## s172
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: worked sum: needed ₹5, paid ₹3 → deficiency ₹2 → ₹4. Transition: cut. Layout: working card centre (Georgia 64,
lines aligned on "="), `postage-due-mark` right lettered "DUE ₹4" at the end.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading "एक हिसाब" |
| 0.88 | — | — | line 1 "चाहिए ₹5" `type`; 3.60 line 2 "लगे ₹3" |
| 5.00 | — | — | line 3 "कमी = ₹2" `type` |
| 6.60 | — | — | line 4 "× 2 = ₹4" `type`; 7.92 `count` 4; green pill; `stamp` due mark 8.40 |

## s173
Continues: s172
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: double the deficiency ≠ double the full postage. Layout: a slate line "पूरे postage का दोगुना = ₹10" with
strike, beside the ₹4 result.

| time | camera | pose / face | actions |
|---|---|---|---|
| 1.04 | — | — | `highlight` "कमी × 2" in line 4 |
| 2.40 | — | — | slate line `fade`; 4.54 `strike`; slate cross |
| 5.62 | — | — | line "हमेशा देखिए: कौन सा नियम?" `words` |

## s174
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: the three breach calculations, side by side. Transition: cut. Component: compare-table moulded to three
columns: "Letter (size / envelope)", "Letter Card", "Postcard"; rows: "क्या माना जाता है" | "हिसाब" | "Minimum / paise";
footer "Source: Post Office Regulations 2024, Chapter V". Cells fill on their words in s174–s176.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | title "शर्त टूटने के 3 हिसाब" |
| 2.34 | — | — | table card + headers + row labels `fade` |
| 4.24 | — | — | column 1 header `highlight` |
| 8.24 | — | — | col 1 "हिसाब": "letter postage × 2 − दिया (credit)" `type` (8.68); row 1 "Letter" |

## s175
Continues: s174
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | column 2 header `highlight` (col 1 dims) |
| 2.04 | — | — | col 2 row 1 "Letter" `type` |
| 4.28 | — | — | col 2 row 2 "(letter postage − दिया) × 2" `type` |

## s176
Continues: s175
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | column 3 header `highlight` |
| 2.08 | — | — | col 3 row 1 "Letter" `type`; 3.64 row 2 "फ़र्क × 2" |
| 4.92 | — | — | col 3 row 3 "minimum ₹1" `type`; 6.54 "paise → पूरा रुपया" |

## s177
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: the rates for these sums. Transition: cut. Layout: rate card (white, three rows) with source line "Source: Post
Office Regulations 2024, Schedule I": "Letter · पहले 20 g तक ₹5 · हर अगले 20 g ₹5" | "Letter Card · ₹2.50" | "Postcard
· 50 paise".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card + heading "Rates" + source |
| 2.28 | — | — | row 1 "Letter" `fade`; 4.56 "₹5" `pop`; 8.80 "+ ₹5 हर 20 g" `fade` |

## s178
Continues: s177
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: rows 2–3; then example 1 starts. Sub-shots: `#rates` 0, `#ex1` 5.84. `#ex1`: three example columns (one per
example, x 120–660 / 690–1230 / 1260–1800), each with an icon on top and Georgia working; all three columns' headers
visible: "1 · Letter", "2 · Letter Card", "3 · Postcard"; column 1 lit.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 "Letter Card · ₹2.50" (1.78 value `pop`) |
| 3.40 | — | — | row 3 "Postcard · 50 paise" (4.00 `pop`) |
| 5.84 | — | — | shot `#ex1`; heading "तीन उदाहरण"; column headers `fade` stagger 0.2 |
| 8.54 | — | — | col 1 icon envelope + slate cross (10.90) |

## s179
Continues: s178
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | col 1 "Postage ₹5 · दिए ₹5" `type` |
| 4.54 | — | — | "₹5 × 2 = ₹10" `type` |
| 5.40 | — | — | "− ₹5 credit" `type` |
| 8.58 | — | — | "= ₹5 और" `type`; `count` 5; green pill; hold |

## s180
Continues: s179
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | col 1 dims; col 2 lit; letter-card icon with a sheet inside (2.36) |
| 3.98 | — | — | "दिए ₹2.50 · letter ₹5" `type` |
| 7.82 | — | — | "कमी ₹2.50" `type` |
| 10.32 | — | — | "× 2 = ₹5" `type`; 11.22 green pill |

## s181
Continues: s180
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | col 2 dims; col 3 lit; postcard icon with a cut corner (2.58) |
| 4.20 | — | — | "दिए 50 paise · letter ₹5" `type` |
| 7.68 | — | — | "कमी ₹4.50" `type` (9.04) |
| 10.98 | — | — | "× 2 = ₹9" `type`; 11.60 green pill; hold 1 s (all three totals visible) |

## s182
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: two different calculations; letter uses the first. Transition: cut. Component: compare-cards — left "हिसाब 1:
दोगुना postage − credit" (red band), right "हिसाब 2: कमी का दोगुना" (yellow band); each gets an applies-to chip.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | left card shown, 0.96 text `type` |
| 2.41 | — | — | right card `slide` from right, 2.93 text `type` |
| 4.39 | — | — | "≠" disc `pop` |
| 6.84 | — | — | left chip "Letter" `pop` with envelope icon |

## s183
Continues: s182
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: letter card and postcard use the second; who marks postage due. Sub-shots: `#calc` 0, `#who` 3.50. `#who`:
`postage-due-mark` top centre lettered "POSTAGE DUE"; heading "निशान कौन लगाता है?"; a 2×2 grid of role cards (badge
icons, no people): "Postmaster", "Supervisor (संबंधित)", "Delivery officials", "Postman / authorised delivery person".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | right chip "Letter Card + Postcard" `pop` |
| 3.50 | — | — | shot `#who`; mark `stamp`; heading `words` |
| 6.08 | — | — | card "Postmaster" `pop`; 8.24 "Supervisor"; 9.84 "Delivery officials" |

## s184
Continues: s183
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: postman / authorised delivery person; in a Branch Office: BPM and delivering GDS. Sub-shots: `#who` 0,
`#bo` 4.12. `#bo`: a small branch-office building icon left; two role cards "Branch Postmaster (BPM)" + "शाखा
डाकपाल", "GDS (delivery)" + "ग्रामीण डाक सेवक".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.32 | — | — | card 4 "Postman / authorised delivery person" `pop` |
| 4.12 | — | — | shot `#bo`; "Branch Office" + "शाखा डाकघर" `type` |
| 5.66 | — | — | BPM card `pop`; 6.16 Hindi |
| 8.82 | — | — | GDS card `pop`; 9.32 Hindi |

## s185
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: dues first, delivery after; never put in the letter delivery box without collecting. Transition: cut.
Layout: left-to-right flow: item with due mark → rupee coin "रकम" → hand-over icon "deliver"; below, a letter
delivery box with slate cross. Keyword chip "Dues पहले, delivery बाद".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | item + due mark shown |
| 2.76 | — | — | arrow + rupee `pop`; 4.40 arrow + deliver icon `pop` |
| 5.96 | — | — | delivery box icon `fade` below; 7.98 arrow item → box `draw`; 9.22 slate cross |
| 9.80 | — | — | keyword chip `stamp` |

## s186
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: foreign-bound unpaid/short items, letter cards and postcards too, aren't forwarded. Transition: cut. Same
route drawing as s089 (post office → barrier → globe), item icons for letter card and postcard added.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | heading "दो खास बातें" + badge "1" |
| 1.82 | — | — | route + globe; 3.34 tags "unpaid / कम postage" |
| 6.94 | — | — | barrier `pop`; "आगे नहीं जाता" |
| 8.44 | — | — | mini letter-card and postcard icons `pop` beside item (9.42) |

## s187
Continues: s186
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: returned free; domestic dues rule doesn't apply; then point 2: disposal of undelivered mail.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | return arrow `draw` to Sender; 0.60 green pill "बिना charge" |
| 4.18 | — | — | chip "domestic वसूली नियम" `fade`; 6.30 `strike` |
| 7.48 | — | — | badge "2" `pop`; line "Undelivered डाक का निपटान" `words` |

## s188
Continues: no
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: undelivered unpaid postcards and letter cards are destroyed at once — a rule for undelivered items.
Transition: cut. Layout: postcard + folded letter card centre with tags "Undelivered" and "Unpaid"; a slate X
across both; rule pill below.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | both cards shown; tag "Undelivered" |
| 0.80 | — | — | tag "Unpaid" `pop` |
| 3.34 | — | — | slate strike lines across both; tag "तुरंत नष्ट" |
| 6.04 | — | — | rule pill "Undelivered items का नियम" `fade`; `highlight` "Undelivered" |

## s189
Continues: s188
Section label: PART 9 · COUNTER CHECKS & DUES
Idea: not every short-paid card is destroyed on sight; then the Part 9 summary. Sub-shots: `#und` 0, `#sum9` 5.05.
`#sum9`: three weight stamps in a row (Letter 500 g · Letter Card 5 g · Postcard 5 g) under `three-forms-icons`
(scale 0.6, y 170).

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | line "हर कम postage वाला card नहीं" `fade`; 3.50 `underline` "नहीं" |
| 5.05 | — | — | shot `#sum9`; heading "Maximum वज़न" |
| 6.39 | — | — | stamp 1 `pop` "500 g"; 8.73 stamp 2 "5 g" |

## s190
Continues: s189
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | stamp 3 "5 g" `pop` |
| 2.00 | — | — | bottom line "आम नियम: कमी × 2, minimum ₹1" `fade` |
| 6.74 | — | — | ILC and postcard icons lit; tag "शर्त टूटे →" |

## s191
Continues: s190
Section label: PART 9 · COUNTER CHECKS & DUES

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | tag completes "= letter"; letter icon lit |
| 1.86 | — | — | keyword chip "Dues पहले, delivery बाद" `stamp`; hold |

## s192
Continues: no
Section label: RECAP · PARTS 8–9
Idea: recap four points. Transition: fade 0.5. Component: recap-card — title "Part 8–9", seal "4", rows: 1
"First-class mail" + "प्रथम श्रेणी" (pill "free airlift नहीं"), 2 "Registered newspaper" (pill "second-class · sorting
में first-class जैसा"), 3 "Letter" (pill "दोगुना postage − credit"), 4 "Letter Card / Postcard" (pill "letter · फ़र्क
× 2").

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card shown |
| 1.36 | — | — | row 1 `fade`; 2.88 pill; 3.90 tick |
| 4.98 | — | — | row 2 `fade`; 6.12 pill builds |

## s193
Continues: s192
Section label: RECAP · PARTS 8–9

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 pill completes; 0.60 tick |
| 1.36 | — | — | row 3 `fade`; 3.44 pill; 5.94 tick |
| 7.10 | — | — | row 4 `fade`; 9.22 pill "letter" |

## s194
Continues: s193
Section label: RECAP · PARTS 8–9

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 pill adds "· फ़र्क × 2"; 0.84 tick; hold |

## s195
Continues: no
Section label: PART 10 · OTHER RULES
Idea: Guide Part I has two sections on this. Transition: fade 0.5. Component: chapter-title as `#opener` 0–1.0
(PART 10 · भाग 10, "Other rules", "कुछ और नियम", icon book, "10"). `#guide` at 1.00: two document cards side by
side: "Section I · General matters" (sub "clauses 1–95") and "Section II · Letter and Parcel Post" (sub "clause 96
से"), headed "Post Office Guide · Part I".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | opener |
| 1.00 | — | — | shot `#guide`; header `type` (0.00→ by 1.6) |
| 2.78 | — | — | both cards `pop` with "Section I" / "Section II" labels |
| 5.56 | — | — | card 1 "General matters" `type` |
| 9.32 | — | — | card 2 "Letter and Parcel Post" `type` |

## s196
Continues: no
Section label: PART 10 · OTHER RULES
Idea: Inland Post = the Central Government's post, by land, sea or air, within India and to places abroad where
its post offices serve. Transition: cut. Layout: Component: key-term — term "Inland Post" + "अंतर्देशीय डाक";
meaning card "Central Government की डाक"; the chain panel replaced by three transport chips (land / sea / air) and a
map-free scope line.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | term `type`; 0.50 Hindi |
| 1.72 | — | — | meaning `words` |
| 4.52 | — | — | chips "ज़मीन" (4.52), "समुद्र" (5.26), "हवा" (6.66) `pop` |
| 8.24 | — | — | scope line "भारत के अंदर" `fade`; 9.86 "+ बाहर, जहाँ इसके post offices" |

## s197
Continues: s196
Section label: PART 10 · OTHER RULES
Idea: scope completes; letter must be prepaid and well closed; sealing an open unpaid letter isn't permission to book.
Sub-shots: `#ip` 0, `#open` 3.46. `#open`: open unpaid envelope with flap up; hand-drawn arrow to "बंद करना"; slate
cross on "booking की अनुमति".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | scope line completes "… सेवा देते हैं" |
| 3.46 | — | — | shot `#open`; two checks "prepaid ✓" "अच्छी तरह बंद ✓" (3.79 / 5.51) |
| 7.68 | — | — | open envelope `pop`; tag "खुला unpaid letter" |
| 10.11 | — | — | chip "बंद करना = booking की अनुमति" `fade`; 11.92 `strike` + slate cross |

## s198
Continues: no
Section label: PART 10 · OTHER RULES
Idea: biological specimens: check permission and packing under the rules; don't take them like a letter.
Transition: cut. Layout: `specimen-box` centre-left (scale 1.4); two check rows right.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | box shown; term "Biological specimens" + "जैविक नमूने" `type` |
| 3.44 | — | — | row "अनुमति" `fade`; 4.80 row "packing" `fade` |
| 7.52 | — | — | envelope icon "आम letter" with slate cross |

## s199
Continues: s198
Section label: PART 10 · OTHER RULES
Idea: Recorded Delivery is not a current service. Layout: a slate chip over the bottom.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chip "Recorded Delivery" `fade` |
| 1.44 | — | — | `strike` it; tag "चालू service नहीं" |

## s200
Continues: no
Section label: KEY POINTS
Idea: the whole topic at once: letter 500 g; roll and non-roll limits. Transition: fade 0.5. Layout: Component:
recap-card restyled as a longer list over s200–s207: an envelope card that holds four rows at a time, then cuts to a
second and third card (sub-shots per scene). This scene: card A rows "Letter · max 500 g", "Roll · 800 / 1000 mm",
"बाकी letters · 600 / 900 mm".

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card A shown, title "पूरे topic की ज़रूरी बातें" |
| 3.80 | — | — | row 1 `fade`; 5.28 pill `count` 500; tick 6.32 |
| 7.14 | — | — | row 2; 8.16 "800"; 9.74 "1000"; tick 10.18 |
| 11.42 | — | — | row 3; 12.94 "600"; 14.02 "900"; tick 14.42 |

## s201
Continues: s200
Section label: KEY POINTS

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 "Envelope कागज़" `fade` with `paper-sheet-swatch` mini |
| 1.30 | — | — | pill "70 GSM"; 4.42 "+ 0.15 –"; 6.80 "0.5 mm"; tick 8.94 |

## s202
Continues: no
Section label: KEY POINTS
Idea: window rules. Transition: cut. Card B (same envelope card style) with `window-envelope` mini on its flap.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card B shown; row 1 "सिर्फ address block + barcode" `fade` |
| 3.54 | — | — | tick row 1 |
| 4.06 | — | — | row 2 "Window size ≠ barcode जगह: अलग जाँच" `fade`; 9.30 tick |

## s203
Continues: s202
Section label: KEY POINTS

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 "Letter Card" + pill "5 g · मुड़ा 210 × 100 mm"; tick 5.64 |
| 6.34 | — | — | row 4 keyword pill "न अंदर, न ऊपर"; tick 9.38 |

## s204
Continues: no
Section label: KEY POINTS
Idea: postcard points. Transition: cut. Card C with the standard postcard mini on its flap.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card C; row 1 "Postcard" + pill "140 × 90 mm · 5 g" |
| 4.04 | — | — | row 2 "Right-hand half: address, postage"; tick 8.24 |
| 8.24 | — | — | row 3 "एक category" + pill "50 paise" (10.04); tick 10.76 |

## s205
Continues: no
Section label: KEY POINTS
Idea: first-class and barcode points. Transition: cut. Card D with `three-forms-icons` mini.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card D; row 1 "First-class: letters, postcards, letter cards" `fade` |
| 3.68 | — | — | pill "free airlift नहीं"; tick 6.56 |
| 6.88 | — | — | row 2 "Barcode ≠ accountable" `fade` (with `linear-barcode` mini) |

## s206
Continues: s205
Section label: KEY POINTS

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | tick row 2 (1.52) |
| 1.98 | — | — | row 3 "Letter: दोगुना postage − credit"; tick 7.52 |
| 7.84 | — | — | row 4 "Letter Card / Postcard" `fade` |

## s207
Continues: s206
Section label: KEY POINTS

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 pill "= letter · फ़र्क × 2"; 2.68 tick; hold |

## s208
Continues: no
Section label: CLOSE
Idea: next time a postcard comes to the counter, look at its right-hand half. Transition: fade 0.5. Layout: the
standard postcard view (address side at (300, 172) scale 2.2); camera pushes onto the right half.

| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | {zoom:1} | — | postcard shown; line "अगली बार counter पर…" at top `fade` |
| 3.60 | {on:'#service-postcard-rules', zoom:1.25} | — | right half tint `fade` #fde9a6; address, stamp, directions `pulse` stagger 0.2 |
| 5.52 | — | — | line "आधी जाँच वहीं" `words`; `underline` "आधी जाँच"; holds to the end (camera stays) |
