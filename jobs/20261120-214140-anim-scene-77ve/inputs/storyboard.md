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

## s050
Continues: no
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: the changeable hour plate. Cut.
Layout: `letter-box-pillar` scale 1.9 left (520, 1000), `hour-plate` on its collection plate; right WHITE CARD.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | box on screen; "Hour plate" heading on the card |
| 1.02 | — | — | `hour-plate` pops on the box (blank) |
| 2.16 | — | — | TERM-line "Changeable hour plate" words in; gloss 3.2 |
| 4.72 | — | — | "बदलने वाली पट्टी" 5.40; "clearance का समय" 7.82; arrow annotation from text to plate |

## s051
Continues: s050
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: after clearance, old plate off, next-clearance plate on; tells the public when mail leaves next.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | push 1.08 on box | — | card text dims |
| 1.30 | — | — | old plate `out` (label "पुरानी") 2.32 |
| 3.80 | — | — | new `hour-plate` slides from right onto the plate 4.30, label "अगली clearance" 6.00 |
| 8.16 | return to wide | — | card line "डाक डालने वाले को पता: अगली बार डाक कब निकलेगी" words in |

## s052
Continues: no
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: worked example – box cleared at 10:00 and 14:00. Cut.
Layout: same box left with blank hour plate; right a cream "उदाहरण · सिर्फ समझने के लिए" tag and a schedule card with two time rows.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | box + tag |
| 4.80 | — | — | schedule card; "10:00" pops 5.20 |
| 6.26 | — | — | "14:00" pops |
| 8.98 | — | — | 10:00 row dims to grey with an ink tick, "पूरी" 10.20 |

