# Storyboard: Letter boxes and the letter-box attendant's duties (Postal Exams, Hindi)

## Shared

**Series tag:** LETTER BOXES (top-right pill, every scene, never animated).

**No character, no sets.** Every scene is an animated lecture slide on the cream canvas #fbf7ee. The app draws
the frame (section label top-left, series pill top-right); content lives in **x 120–1800, y 190–1000**.

**Layout vocabulary used by every scene** (so the writers build the same things the same way):
- **TERM** – a perforated postal-red stamp card (#9e1b1b, #b8403a inner line): the postal term in English,
  Inter bold 96–110 px white, lands on its spoken word; its Hindi gloss 52 px #fde9a6 beneath fades in 0.5 s later.
- **WHITE CARD** – #ffffff, 3 px #ead9a8 border, radius 24, soft vs-shadow. Rows inside are 120–150 px tall,
  Hindi at 48–56 px (never under 44), English terms Inter bold.
- **DOC CARD** – a WHITE CARD with a postal-red top edge, the source (manual, volume, rule) in grey 34 px under it,
  used for every Postal Manual rule; a round red postmark names the rule number.
- **YES / NO** – allowed: green #2e7d4f round tick badge; rejected: slate #4b4f58 strike + slate cross in a circle.
  Red never means wrong.
- **HIGHLIGHT** – the engine `highlight` in #fde9a6 behind the phrase being said; key word amber #8a5d00.
- **TRAP BANNER** – the exam-trap component's red banner ("EXAM TRAP · परीक्षा का जाल", yellow triangle) across
  the top of the content area, y 200–330, with the trap line in white.
- **RECAP ENVELOPE** – the recap-card component (white envelope, V flap with "RECAP · दोहराव", seal with the
  count), 3–5 rows; each row's green tick draws on as it is said.
- One hand-drawn annotation per screen at most. Text: `words`/`fade`/`reveal`; cards: `pop`/`slide`/`fade`;
  icons: `draw`; verdict postmarks: `stamp`. Denied moves (bounce, flip, float, shake, spin, wiggle, letters,
  scatter, smear, ticker) are never used.

**Transitions:** `fade` 0.4 s at the start of each Part, recap and the close; `cut` everywhere else.
Sub-shots inside a scene are hard cuts.

**Recurring pieces** (library ids; full list in shared.json):
- `letter-box-pillar` (reuse) – the hero box, 200×420, scale 1.4–1.8; anchors base, top, mouth (slot). Its
  blank cream #collection-plate carries the hour plate or a box notice (FOR LETTERS ONLY, AIRMAIL, QMS).
  s001–s004, s011, s016–s019, s024, s032, s037, s050–s055, s064–s066, s094, s111, s138.
- `hour-plate` (new) – small white enamel plate 180×80, red rim, blank time area, two screw dots; anchors base,
  top. Sits on the pillar's collection plate. s050–s055, s057, s062, s075, s131, s138.
- `box-key` (new) – flat ink key, brass #f2b705 fill, 160×60; anchors grip. s057–s059, s063, s076, s132.
- `padlock` (new) – ink padlock, slate body, 90×120, shackle open/closed parts (#shackle); anchors base. s053–s055, s062.
- `collection-bag` (new) – open-mouthed sand canvas bag with a drawstring, 260×300; anchors base, mouth, grip.
  s003, s057, s061, s063.
- `letter-box-door-open` (new) – the same red pillar box, front door swung open to the right, letters stacked
  inside, a small white barcode label (#barcode) on the inside of the door; 360×420; anchors base, top.
  s082, s086, s087, s094.
- `rented-post-box` (new) – a wall of four small numbered brass-door lockers on a cream panel, one door ajar
  with a letter inside, 360×300; anchors base. s015, s016, s127.
- `key-cabinet` (new) – small wall key cabinet, postal-red frame, glass door, three hooks; 240×300; anchors
  base, mouth. s058–s060, s076, s132.
- `clock-face` (new) – round ink clock 200×200, cream face, no numbers on the dial (hands only, set per scene);
  parts #hand-h, #hand-m. s047–s049, s074–s075, s092, s131.
- `attendant-badge` (new) – round postal-red badge with a white letter-box symbol, stands for the letter-box
  attendant (never a person); 200×200. s004–s006, s037, s046, s123.
- `gps-pin` (new) – ink map pin in postal red with a white dot, 120×160; anchors base. s083, s085, s089, s091.
- `mis-sheet` (new) – white report sheet with three grey relative bars and a small table, no numbers; 240×300.
  s085, s090.
- Library reuse also: posting-counter, post-counter-icon, post-office-front, mail-van, mobile-post-van,
  franchisee-outlet, booking-kiosk, phone-screen, booking-receipt, parcel-box, domestic-envelope,
  registration-envelope, franking-impression, embossed-envelope, record-book, calendar-sheet, special-mail-bag,
  rmfs-server, icon-circle-office.

**Photo:** `india-post-letter-box-cutout` (library) as a white-bordered paper cut-out, tilted 1.5°, credit under it:
s001 (hook) and s138 (close). Nothing new to fetch.

## Continuity

- No character anywhere. The "attendant" is the `attendant-badge`; the "Postmaster" is a labelled
  `post-counter-icon` or text chip. No one is drawn.
- Screen direction: mail always flows **left → right** (box → bag → office → server → report). The letter box
  sits on the left whenever it appears beside text.
- The hour-plate story: s052 sets a 10:00 plate, s053 replaces it with 14:00 (same box, same place, cut).
- Scenes that continue one card or one list are marked `Continues:`; they cut with the layout identical.
- The seven-part map built in s007–s010 uses the same numbering as the Part labels (1–7).

**Section labels** (English only, as the frame shows them):
s001–s010 INTRODUCTION · s011–s022 PART 1 · WHAT GOES IN THE LETTER BOX · s023–s041 PART 2 · COUNTER, NOT THE BOX ·
s042–s045 RECAP · PARTS 1 AND 2 · s046–s055 PART 3 · TIMES AND HOUR PLATE · s056–s073 PART 4 · KEYS, BAG AND ROUND ·
s074–s077 RECAP · PARTS 3 AND 4 · s078–s093 PART 5 · ELECTRONIC RECORD · s094–s106 PART 6 · MONEY, STAMPS, VALUABLES ·
s107–s108 RECAP · PARTS 5 AND 6 · s109–s124 PART 7 · CHECKS AND EXTRA DUTIES · s125–s137 KEY POINTS · s138 CLOSE.

## s011
Continues: no
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: the letter box is one authorised way of posting, and where boxes stand. In: fade 0.4.
Shot #way (0): `letter-box-pillar` scale 1.6 left (420, 960); WHITE CARD right: heading "Posting के authorised तरीके", row "Letter box" with a soft highlight.
Shot #places (4.42): five icon tiles in a row (x 140–1780, y 340–800, each 300 wide): `post-office-front` "Post offices", sorting building "Mail offices", street lamp "Public जगहें", `mobile-post-van` "Mobile Post Offices", a steamer drawn in ink "Steamers" (English bold 44 px, Hindi gloss under).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | box + card heading; "Letter box" row in 0.0 |
| 1.92 | — | — | highlight "authorised"; "एक तरीका" chip 3.40 |
| 4.42 | cut #places | — | tile 1 pops 5.06, tile 2 6.46 |
| 8.34 | — | — | tile 3 pops |
| 10.40 | — | — | tile 4 pops; tile 5 at 12.44 |

## s012
Continues: no
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: the five groups that go in the box. Cut.
Layout: header "5 groups · box में" red 56 px; WHITE CARD x 260–1660, y 260–990, five rows 140 px, each a small ink icon (envelope, folded letter card, blue-edged aerogramme, postcard, printed sheet, braille dots) + English term bold + Hindi gloss under it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header + empty card with five number badges |
| 2.12 | — | — | row 1 "Letters & letter cards" / "पत्र और पत्र कार्ड" |
| 4.77 | — | — | row 2 "Aerogrammes" / "एयरोग्राम" |
| 6.20 | — | — | row 3 "Postcards" / "पोस्टकार्ड" |
| 7.91 | — | — | row 4 "Printed mail" / "मुद्रित डाक" |
| 9.62 | — | — | row 5 "Literature for the blind" / "दृष्टिबाधितों के लिए साहित्य" |

## s013
Continues: no
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: one condition – fully prepaid; but that alone doesn't make every article fit. Cut.
Shot #cond (0): perforated red key-fact card centre (x 460–1460, y 300–760): "शर्त" kicker, "Fully prepaid" 100 px, "पूरा postage पहले से" gloss.
Shot #but (6.14): left `domestic-envelope` with stamp, right `letter-box-pillar`; between them a big amber "≠"; line under: "पूरा postage ≠ हर article box में".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "शर्त" kicker on screen |
| 1.01 | — | — | card pops; "Fully prepaid" lands 4.97 (prepaid), gloss 5.45 |
| 6.14 | cut #but | — | envelope + box on |
| 8.74 | — | — | "≠" pops; line words in 9.36 |

