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

## s001
Continues: no
Section label: INTRODUCTION
Idea: today's topic, hooked by a real letter box; then the definition starts. In: fade 0.3. Wide.
Photo: india-post-letter-box-cutout, paper cut-out with white border, left x 160–720, y 200–990, tilt -1.5°, credit beneath.
Shot #topic (0): right, title "Letter boxes" Inter bold 110 px ink at (1200, 430); "और letter-box peon के कर्तव्य" 56 px red under it.
Shot #def (5.22): drawn `letter-box-pillar` scale 1.7 left, base (480, 960); WHITE CARD x 820–1780, y 300–820: TERM-style heading "Letter box" + "पत्र पेटी"; line "fully prepaid डाक" building.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | photo and "Letter boxes" already on screen (hook) |
| 2.76 | — | — | "letter-box peon" chip pops under the title, highlight on "peon" at 3.52 |
| 4.34 | — | — | "के कर्तव्य" words in |
| 5.22 | cut to #def | — | box + card heading "Letter box" visible; "पत्र पेटी" fades 5.7 |
| 8.36 | — | — | "fully prepaid डाक" words in; highlight "fully prepaid" 8.68 |

## s002
Continues: s001
Section label: INTRODUCTION
Idea: what a letter box is for and where it stands. Cut, same #def layout at 0.
Shot #where (2.18): three icon tiles in a row on cream panels (x 180–1740, y 330–760): `post-office-front` "Post office", a sorting-office building "Mail office", a street lamp + kerb "Public जगह", each English with Hindi gloss under it.
Shot #post (8.34): `letter-box-pillar` scale 1.6 at (700, 960); a `domestic-envelope` (scale 0.35) above the slot; label right "Public डाक डालती है".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | definition card holds; "भेजने के लिए डाली जाती है" line words in 0.2 |
| 2.18 | cut #where | — | tile 1 pops on "post" 2.54 |
| 4.02 | — | — | tile 2 pops "mail office" |
| 6.00 | — | — | tile 3 pops "public" |
| 8.34 | cut #post | — | label words in |
| 9.68 | — | — | envelope `fall` by 260 into the mouth (slot), hides behind the box |
| 11.26 | — | — | `attendant-badge` pops at right (1450, 640), caption "postal कर्मचारी" |

## s003
Continues: s002
Section label: INTRODUCTION
Idea: the employee empties the box into the postal system; that is "clearance". Cut.
Layout: left → right flow at y 620: `letter-box-pillar` (380), arrow, `collection-bag` (900), arrow, `post-office-front` (1450) captioned "डाक व्यवस्था".
Shot #term (5.42): TERM centre x 560–1360, y 380–700: "Clearance" / "निकासी"; under it white line "Box खोलकर डाक निकालना".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | box + badge carried over; bag draws on at 0.44 ("खाली") |
| 1.82 | — | — | arrow 2 draws, office pops on "डाक व्यवस्था" 3.42 |
| 5.42 | cut #term | — | stamp card shown; line "Box खोलकर" words 5.96, "डाक निकालना" 7.34 |
| 8.58 | — | — | "Clearance" `tracking` in; "निकासी" fades 9.1 |

## s004
Continues: no
Section label: INTRODUCTION
Idea: posting and clearance are two separate events; the man who clears is the letter-box peon. Cut.
Shot #two (0): two WHITE CARDs side by side (x 160–900 and 1020–1760, y 300–880), red number badges 1 and 2: card 1 envelope dropping into a slot icon + "डाक डालना" ; card 2 open box icon + "Clearance".
Shot #who (6.43): `attendant-badge` scale 1.4 left (520, 600); right a blank name plate where the term lands.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | both cards empty frames with badges 1 and 2 |
| 0.78 | — | — | card 1 icon draws, "डाक डालना" words in; "एक घटना" chip 1.48 |
| 3.58 | — | — | card 2 icon draws, "Clearance" in 4.24; "दूसरी" chip 4.92 |
| 6.43 | cut #who | — | badge pops; "Box clear करने वाला कर्मचारी" words in |
| 10.63 | — | — | TERM "Letter-box peon" pops right |

## s005
Continues: s004
Section label: INTRODUCTION
Idea: the Manual's official name for him. Cut, same #who.
At 1.92 a DOC CARD slides up under the term (x 820–1760, y 600–960): source "Postal Manual · Volume 6 · Part 3"; postmark "Vol 6 · Pt 3" stamps at 4.24.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | "Letter-box peon" + "लेटर-बॉक्स पियून" gloss holding; "आम नाम" grey tag |
| 1.92 | — | — | doc card slides from down; source words in |
| 4.24 | — | — | postmark `stamp` |
| 6.04 | — | — | "Letter-box attendant" Inter bold 64 px words in on card; highlight 7.48; "आधिकारिक नाम" tag |

## s006
Continues: s005
Section label: INTRODUCTION
Idea: both names = one employee; then the whole picture in two lines. Cut.
Shot #same (0): the two names as chips left and right of the badge, joined by "=" in amber.
Shot #lines (2.96): two long WHITE CARD strips (x 160–1760), y 330–560 and 620–850, numbered 1 and 2.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | peon chip left, attendant chip right already; "=" pops 0.52 |
| 1.30 | — | — | "एक ही कर्मचारी" words in under the badge |
| 2.96 | cut #lines | — | both strips (empty) |
| 5.34 | — | — | strip 1: "Posting के नियम" bold, → "box में क्या डाला जा सकता है" words in 7.34 |

## s007
Continues: s006
Section label: INTRODUCTION
Idea: second line, then the seven-part map. Cut.
Shot #map (7.81): seven numbered WHITE CARDs, 4 on top row (y 300–560), 3 below (y 620–880), centred, each with a red number badge 1–7 and an empty label area.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | strip 2: "Attendant के नियम" bold in |
| 2.04 | — | — | "box कब और कैसे खाली होगा" words in |
| 5.46 | — | — | ", जाँच कौन करेगा" words in |
| 7.81 | cut #map | — | header "7 parts" pops; cards pop stagger 0.08 from 8.51 ("सात") |

## s008
Continues: s007
Section label: INTRODUCTION
Idea: map labels 1 and 2 fill as named. Cut, same map.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | map holds |
| 0.68 | — | — | card 1: "Box में कौन सी डाक" words in + mini box icon |
| 3.86 | — | — | card 2: "Counter पर कौन सी डाक" words in; highlight "Counter" 7.12 |

## s009
Continues: s008
Section label: INTRODUCTION
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | map holds |
| 0.36 | — | — | card 3: "समय और hour plate" in |
| 3.50 | — | — | card 4: "चाबी, bag, collection" in |
| 8.26 | — | — | card 5: "Electronic record" in |

## s010
Continues: s009
Section label: INTRODUCTION
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | map holds |
| 0.42 | — | — | card 6: "पैसे और stamps" in |
| 3.46 | — | — | card 7: "Postmaster की जाँच + extra काम" in |
| 6.00 | push 4% toward card 1 | — | card 1 highlight (where Part 1 starts) at 8.2 |

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

## s014
Continues: no
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: five kinds that are NOT put in the letter box. Cut.
Layout: header "Letter box में नहीं" red; five slate-bordered chips in a column (x 420–1500, y 260–980, 130 px each), English bold + Hindi under; a slate cross circle at each chip's right.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | header + chip 1 "Accountable" |
| 0.60 | — | — | chip 2 "Franked" |
| 1.60 | — | — | chip 3 "Registered newspaper" |
| 3.76 | — | — | chip 4 "Periodical post"; "अपनी रोक" note 5.92 |
| 8.00 | — | — | chip 5 "Small packets"; crosses draw on all five, stagger 0.1, at 10.02 |

## s015
Continues: no
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: letter box vs rented post box (compare-cards). Component: compare-cards – drop the facts rows; each card carries its picture and one Hindi line; title "दो नामों का फ़र्क".
Layout: left card (red band) "Letter box" with `letter-box-pillar`; right card (yellow band) "Post box (rented)" with `rented-post-box`; VS disc between.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | title and both empty cards |
| 1.75 | — | — | left: box draws; "बाहर जाने वाली डाक" 2.75; "collection के लिए" 5.75 |
| 7.22 | — | — | right: lockers draw; "Post box (rented)" in 7.88 |
| 9.12 | — | — | "renter के नाम आई डाक" 9.12, "लेने के लिए" 10.60 |

## s016
Continues: s015
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: two separate facilities; an option saying they're the same is wrong. Then read the box's notice. Cut.
Shot #notice (7.63): `letter-box-pillar` scale 1.8 left (520, 990); camera pushes toward its collection plate.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | compare holds; VS disc `pulse` 1.22 "दोनों अलग" |
| 3.24 | — | — | bottom strip "Option: दोनों एक ही चीज़" words in |
| 6.40 | — | — | strip `strike` slate + slate cross 6.66 ("गलत") |
| 7.63 | cut #notice | — | box on screen; "Box पर लिखा निर्देश" label right |
| 10.19 | push to 1.12 on plate | — | plate border `pulse` |

## s017
Continues: s016
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: "For letters only" box takes letters and postcards; not book packets or other classes.
Layout: plate reads "FOR LETTERS ONLY" (Inter bold); right WHITE CARD with two columns: ✓ (green) and ✗ (slate).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | holds push | — | "FOR LETTERS ONLY" `reveal` on the plate |
| 2.12 | — | — | ✓ "Letters" |
| 2.90 | — | — | ✓ "Postcards" |
| 5.34 | — | — | ✗ "Book packets" (slate) |
| 6.52 | — | — | ✗ "बाकी classes" (slate) |

## s018
Continues: s017
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: the trap – postcards ARE allowed here; then special-service boxes. Cut.
Shot #special (6.12): heading "खास service के boxes" with two empty pillar outlines side by side.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card holds; ✗ rows dim to grey 0.6 |
| 1.00 | — | — | TRAP BANNER slides from up: "इस box में postcard मना नहीं" |
| 3.98 | — | — | underline (one annotation) under ✓ "Postcards" |
| 6.12 | cut #special | — | heading words in; outlines visible |

## s019
Continues: s018
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: airmail box and QMS box take only the class written on them.
Layout: two `letter-box-pillar`s scale 1.5 at x 600 and 1320; plates lettered "AIRMAIL" and "QMS".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | outlines from s018 |
| 1.02 | — | — | box 1 draws; plate "AIRMAIL" |
| 3.54 | — | — | box 2 draws; "Quick Mail Service" label under it |
| 6.04 | — | — | plate "QMS" + highlight |
| 7.96 | — | — | bottom band "सिर्फ वही class जो box पर लिखी है" words in |

## s020
Continues: no
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: another class posted there is liable to detention; that doesn't mean automatic return. Cut.
Shot #term (0): TERM "Liable to detention" / "रोका जा सकता है" centred top (y 260–560); WHITE CARD under it (y 620–940) for the meaning.
Shot #myth (7.30): myth card (slate pill "MYTH · भ्रम"): "हर गलत article अपने आप लौटेगा".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "दूसरा article" chip with a slate class tag |
| 2.30 | — | — | TERM pops; gloss 3.72 |
| 4.34 | — | — | meaning "आगे भेजने में रोक लग सकती है" words in |
| 7.30 | cut #myth | — | myth card on; line words in 8.72 |

## s021
Continues: s020
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: "or confiscated" also struck; QMS articles need the full PIN under the town name.
Shot #pin (1.30): `domestic-envelope` scale 1.8 centred; addressee line 1 "Town", line 2 six blank PIN boxes beneath.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | myth adds "या ज़ब्त होगा" 0.60; whole myth `strike` slate 0.96 |
| 1.30 | cut #pin | — | envelope on; "QMS article" tag |
| 3.02 | — | — | "destination town" line writes |
| 5.22 | — | — | six PIN boxes pop stagger 0.06; highlight 5.80 "पूरा PIN" |
| 7.77 | — | — | caption "तो एक line में" grey |

## s022
Continues: no
Section label: PART 1 · WHAT GOES IN THE LETTER BOX
Idea: Part 1 in one line each. Cut.
Layout: two WHITE CARD strips y 320–580 and 640–900, each with a mini box icon left.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | strip 1 "आम box" label |
| 1.08 | — | — | "list वाली, पूरी prepaid डाक" words in |
| 3.72 | — | — | strip 2 "Special box" (AIRMAIL/QMS mini plates) |
| 4.84 | — | — | "सिर्फ लिखी हुई class" words in; highlight "लिखी" 7.10 |

## s023
Continues: no
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: what an accountable item is. In: fade 0.4.
Layout: TERM left (x 140–780, y 300–720) "Accountable item" / "हिसाब वाली डाक"; right a 3-step column on cream: receipt icon "Receipt पर accept", track arrow "Tracking", pen + phone "Signature (ink / digital)".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | TERM on screen |
| 2.20 | — | — | step 1 + `booking-receipt` small |
| 4.26 | — | — | step 2 |
| 5.74 | — | — | step 3; "ink" 8.12, "digital" 9.08; "सबूत" chip 9.70 |
| 10.98 | — | — | bottom chip "Speed Post" pops |

## s024
Continues: s023
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: examples, then the rule: not the box, the counter.
Shot #rule (4.46): left `letter-box-pillar` with a slate cross; arrow right to `posting-counter` (scale 0.9) with sign "Counter".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chips "India Post Parcel" 0.0, "Accountable services" 1.82 |
| 4.46 | cut #rule | — | box on; cross draws 6.58 ("नहीं") |
| 8.10 | — | — | arrow draws; counter pops 9.14; green tick on counter 10.04 |

## s025
Continues: s024
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: the sender gets a receipt; then the wrong shortcuts begin.
Shot #wrong (4.26): three cards in a row (x 160–1760, y 300–820): envelope with "Registered" handwritten; envelope covered in extra stamps; letter box.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | counter holds |
| 2.58 | — | — | `booking-receipt` slides up from the counter top, "Receipt" label |
| 4.26 | cut #wrong | — | card 1 envelope; "Registered" `write` 5.14 |
| 7.04 | — | — | card 2: extra stamps pop stagger 0.08 |

## s026
Continues: s025
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: none of these is counter acceptance; full postage doesn't replace booking.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card 3 box + envelope at slot 0.46 |
| 1.80 | — | — | slate cross on each card, stagger 0.3 |
| 3.80 | — | — | line "counter acceptance पूरी नहीं" words in beneath |
| 6.70 | — | — | TRAP BANNER: "पूरा postage ≠ proper booking" (≠ amber) slides from up; highlight "proper booking" 9.92 |

## s027
Continues: no
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: domestic registration is a value-added service on Speed Post documents and parcels. Cut.
Layout: TERM left "Domestic registration" / "घरेलू रजिस्ट्री"; right `registration-envelope` and `parcel-box` with "Speed Post" tags.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "Registration" kicker |
| 2.78 | — | — | TERM pops; gloss 3.3 |
| 4.56 | — | — | envelope "Speed Post documents" |
| 6.58 | — | — | parcel "Speed Post parcels" |
| 8.14 | — | — | chip "Value-added service" pops under both |

## s028
Continues: s027
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: delivery only to the named addressee; still accountable.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | layout holds |
| 1.42 | — | — | arrow from envelope to a name-line card "Addressee" |
| 2.76 | — | — | line "उसी को, जिसके नाम article है" words in; highlight "उसी" |
| 6.34 | — | — | red pill "Accountable" on the envelope |

## s029
Continues: no
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: not in the box; don't mix with international registered letter; parcels regulation date. Cut.
Shot #mix (1.98): two chips with amber "≠": "Domestic registration" vs "International registered letter".
Shot #date (7.29): `parcel-box` left; round red postmark "16 Dec 2024" right; label "Regulations लागू".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | mini box with slate cross + "letter box में नहीं" |
| 1.98 | cut #mix | — | chip 1; chip 2 3.82; "≠" 5.98 |
| 7.29 | cut #date | — | parcel draws |
| 9.47 | — | — | postmark `stamp`; "Regulations" in 12.11 |

## s030
Continues: s029
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: every India Post Parcel is accountable → counter with booking, never the box; then a table.
Shot #table (9.51): compare-table frame (Component: compare-table – 3 rows, columns "Article", "Letter box में?", "डाल दिया तो"; no source line, no quarter).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | "हर India Post Parcel" words in; "Accountable" red pill 1.72 |
| 3.24 | — | — | `posting-counter` slides from right, tick on it 4.92 |
| 7.80 | — | — | small box with slate cross ("कभी नहीं") |
| 9.51 | cut #table | — | table header row and empty rows on screen |

## s031
Continues: s030
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: three articles that are not for the box; if posted there, treated as unpaid.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 1 "Franked article" |
| 1.58 | — | — | row 2 "Registered newspaper item" |
| 3.78 | — | — | row 3 "Periodical post item" |
| 5.88 | — | — | column 2: slate crosses stagger 0.2 |
| 8.30 | — | — | column 3: "Unpaid" in amber on each row; yellow outline round column 10.14 |

## s032
Continues: no
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: a franking impression shows postage paid, but gives no permission for the ordinary box. Cut.
Layout: `domestic-envelope` scale 1.5 left (x 160–1300); `franking-impression` scale 0.5 in its frank zone; right column for notes.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope on screen |
| 1.30 | — | — | impression `stamp` in frank zone; TERM-chip "Franking impression" 1.80 |
| 3.52 | — | — | note "postage चुका है" words in |
| 6.34 | — | — | small `letter-box-pillar` right with slate cross at 10.32 ("छूट नहीं") |

## s033
Continues: s032
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: franked mail goes only through its authorised acceptance; every day, not just Sundays/holidays.
Shot #days (5.22): three `calendar-sheet`s (header "Sunday", "Holiday", "हर दिन").
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | arrow from envelope to `post-counter-icon` "Authorised acceptance" 1.78 |
| 5.22 | cut #days | — | sheets 1 and 2 pop 6.38 / 7.36 |
| 8.72 | — | — | sheet 3 "हर दिन" pops with highlight; line "रोक हर दिन" |

## s034
Continues: no
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: the charge on unpaid/short-paid domestic items (rule card that holds s034–s036). Cut.
Layout: WHITE CARD x 160–1760, y 240–990: heading "Unpaid charge · domestic items"; row A y 380, row B y 560, rows C/D reserved below.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading on screen |
| 3.72 | — | — | row A: "Unpaid item →" |
| 5.26 | — | — | "prepaid rate × 2" in; highlight "× 2" 6.72 |
| 7.42 | — | — | row B: "कम postage →" |
| 9.32 | — | — | "कमी × 2" in; highlight 10.04 |

## s035
Continues: s034
Section label: PART 2 · COUNTER, NOT THE BOX
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | under row B a cream formula strip: "कमी = चाहिए था − लगा" words in 0.46 |
| 4.92 | — | — | highlight "अंतर" on the strip |
| 5.82 | — | — | row C: "Postage या airmail fee की वसूली" words in |

## s036
Continues: s035
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: minimum ₹1; paid by the addressee on delivery, or by the sender on return.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row C adds a perforated chip "कम से कम ₹1" at 0.58 |
| 3.08 | — | — | row D left: house icon "Delivery पर → addressee" words in 4.40 |
| 7.04 | — | — | row D right: return arrow "लौटाते समय → sender" 9.50 |

## s037
Continues: no
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: the attendant neither fixes nor collects the charge; a large article that won't fit. Cut.
Shot #not (0): `attendant-badge` left (420, 600); right two lines "charge तय करना", "charge वसूलना".
Shot #big (6.02): `letter-box-pillar` scale 1.6 left; a large flat `domestic-envelope` scale 0.9 held at the slot, visibly wider than it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | badge + "Letter-box attendant" label |
| 2.68 | — | — | line 1 in; `strike` slate 3.28 |
| 4.16 | — | — | line 2 in; `strike` slate 4.72 |
| 6.02 | cut #big | — | box + oversize envelope; "बड़ा ordinary article" label 6.52 |
| 8.42 | — | — | slate cross at the slot ("न समाए") |

## s038
Continues: s037
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: hand it in at the window; it stays ordinary.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | arrow draws from envelope to `post-counter-icon` right (1450, 760), sign "Window" 1.76 |
| 3.08 | — | — | bottom WHITE CARD "हाथ में देने से service नहीं बदलती" words in |
| 5.96 | — | — | grey pill "Ordinary" pops on the envelope; highlight 6.64 |

## s039
Continues: no
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: three more ways to post besides box and counter. Cut.
Layout: header "Posting के तीन और रास्ते"; three tall WHITE CARDs (x 160–700, 690–1230, 1220–1760, y 280–960), numbered 1–3, empty.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | small box + counter icons with "और" |
| 2.34 | — | — | header in; three empty numbered cards pop 3.52 |
| 5.54 | — | — | card 1: `franchisee-outlet` draws 6.38, "Franchisee outlet" 7.06 |
| 8.02 | — | — | line "administrative instructions में तय items" words in |

## s040
Continues: s039
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: self-booking kiosk in chosen offices; offices chosen by the Regional Head, not the Circle Head.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card 1 dims to grey 0.4 |
| 1.34 | — | — | card 2: `booking-kiosk` draws; "Self-booking kiosk" |
| 2.78 | — | — | "तय post offices में" |
| 5.24 | — | — | ✓ green "Regional Head" |
| 8.02 | — | — | ✗ slate "Circle Head" with strike 8.76 |

## s041
Continues: s040
Section label: PART 2 · COUNTER, NOT THE BOX
Idea: kiosks opened on World Post Day, 9 Oct 2023; third way: web portal or app.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | on card 2 |
| 2.04 | — | — | red postmark "World Post Day · 9 Oct 2023" `stamp` 4.08 |
| 6.76 | — | — | card 3: `phone-screen` draws; "Web portal" 8.82, "Mobile app" 10.30 |
| 8.04 | — | — | label "authorised" chip |

## s042
Continues: no
Section label: RECAP · PARTS 1 AND 2
Idea: recap envelope, rows tick as said. Component: recap-card – 5 rows (one more than usual: rows 120 px), seal "5", title "Part 1 और 2"; pills hold short Hindi.
Layout: envelope x 260–1660, y 220–1000.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + flap title (fade in) |
| 2.16 | — | — | row 1 "Letter box" · pill "list वाली prepaid डाक"; tick 5.70 |
| 6.42 | — | — | slate small chip "small packets ✗" on row 1 |
| 8.32 | — | — | row 2 "For letters only" · pill "letters + postcards"; tick 11.22 |

## s043
Continues: s042
Section label: RECAP · PARTS 1 AND 2
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 "Special box" · pill "दूसरी class: detention"; tick 3.84 |
| 4.48 | — | — | row 4 "Accountable + India Post Parcels" · pill "counter + receipt" |

## s044
Continues: s043
Section label: RECAP · PARTS 1 AND 2
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 tick at 0.42 |
| 1.10 | — | — | row 5 "Franked · Reg. newspaper · Periodical" words in |

## s045
Continues: s044
Section label: RECAP · PARTS 1 AND 2
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 5 holds |
| 1.52 | — | — | pill "unpaid" |
| 2.28 | — | — | pill extends "× 2 charge"; tick 3.82 |

## s046
Continues: no
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: Rule 116 – the attendant must know three times. In: fade 0.4.
Component: rule-number-card – keep only the left stamp: "RULE · नियम", huge "116", "Letter-box attendant"; drop the right document panels and the remember card; the right half instead holds three empty `clock-face` slots in a row.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | `attendant-badge` + "attendant का काम" |
| 3.16 | — | — | stamp card slides from left; "116" pops 3.72 |
| 6.42 | — | — | three clock slots pop stagger 0.12; "तीन समय" label 6.92 |

## s047
Continues: s046
Section label: PART 3 · TIMES AND HOUR PLATE
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | clock 1 draws; "Clearance" + "box कब खाली" 2.92 |
| 4.90 | — | — | clock 2 draws; "Dispatch" + "office से कब जाती" 7.08 |
| 8.44 | — | — | clock 3 draws; "Delivery" 10.90 |

## s048
Continues: s047
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: three times are linked; mail from the box must reach the office on time.
Shot #flow (4.55): `letter-box-pillar` left → `collection-bag` → `post-office-front` (right), with a `clock-face` above the office.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | "(डाक कब आती)" under clock 3 |
| 1.59 | — | — | link lines draw between clocks 1–2–3 |
| 4.55 | cut #flow | — | box + bag on; arrow draws 5.47 |
| 6.12 | — | — | office pops 6.99; "समय पर" chip on the arrow |

## s049
Continues: s048
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: so it isn't left behind for processing and dispatch → clear punctually.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `mail-van` slides in right of the office ("dispatch" 1.89) |
| 4.06 | — | — | grey note "पीछे न रहे" |
| 5.28 | — | — | TERM bottom-centre "Punctually" pops 7.04; gloss "बिल्कुल ठीक समय पर" 9.69 |

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

## s053
Continues: s052
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: the 14:00 plate goes up; then the box is locked.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | "14:00" written on the box's hour plate at 1.00; highlight on schedule row 14:00 |
| 3.76 | — | — | band "Plate = अगली clearance" words in |
| 7.10 | — | — | `padlock` pops on the box door 8.70 ("ताला"), shackle closes |

## s054
Continues: s053
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: plate and lock must both be right and secure; a phone entry doesn't finish the job.
Shot #phone (4.84): `phone-screen` left with a green-check "entry" line; "≠"; right "काम पूरा" chip.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | ticks beside plate and lock ("ठीक से", "सुरक्षित" 3.54) |
| 4.84 | cut #phone | — | phone on; "electronic entry" typed 5.82 |
| 7.74 | — | — | "≠" pops; "काम खत्म नहीं" 8.72 |

## s055
Continues: no
Section label: PART 3 · TIMES AND HOUR PLATE
Idea: the three physical jobs. Cut.
Layout: three icon cards in a row: open box with letters, `hour-plate`, `padlock`; green ticks as said.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | all three cards; card 1 "डाक निकालना" |
| 1.02 | — | — | tick 1 |
| 2.02 | — | — | card 2 "plate बदलना"; tick 3.42 |
| 4.26 | — | — | card 3 "box सुरक्षित"; tick 5.48 |

## s056
Continues: no
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: Rule 117 – what the attendant is handed for the round. In: fade 0.4.
Layout: left red stamp "RULE · नियम 117"; right: `post-counter-icon` labelled "Postmaster / responsible Assistant" at top, three empty slots below.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp card with "117" |
| 1.86 | — | — | "Round पर क्या मिलता है" words in |
| 5.52 | — | — | counter icon + label pops; "responsible Assistant" 6.70 |
| 8.58 | — | — | three slots pop ("तीन चीज़ें") |

## s057
Continues: s056
Section label: PART 4 · KEYS, BAG AND ROUND
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | slot 1 `box-key` draws; "Keys · चाबियाँ" 0.96 |
| 1.84 | — | — | slot 2 `hour-plate`; "Changeable hour plates" |
| 3.34 | — | — | small note "जहाँ लगती हैं" |
| 5.94 | — | — | slot 3 `collection-bag`; "Bag" 6.14, "मिले articles के लिए" 7.88 |

## s058
Continues: no
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: keys and plates stay in the Postmaster's custody, not with the attendant. Cut.
Layout: `attendant-badge` left with a slate cross on an empty keyring; `key-cabinet` right with key and plate inside; label "Postmaster / responsible Assistant".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | key + plate icons sit by the badge |
| 2.72 | — | — | slate cross by the badge ("पास नहीं") |
| 3.98 | — | — | key and plate `move` into the cabinet (left → right) |
| 7.98 | — | — | TERM-chip "Custody" over the cabinet; gloss "अभिरक्षा" |

## s059
Continues: s058
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: handed only at the fixed time for a round; not kept between rounds.
Shot #day (0): a day track (x 160–1760, y 620) with two red blocks "Round 1" and "Round 2 (शाम)"; key icon above each block; between them the key sits in a small cabinet icon.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | cut #day | — | track drawn |
| 1.18 | — | — | Round 1 block grows; key pops above it 2.00 |
| 6.42 | — | — | gap between rounds highlighted; mini cabinet + "पास नहीं रखता" 9.52 |
| 10.48 | — | — | Round 2 block grows, label "शाम" 11.06 |

## s060
Continues: s059
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: handing over for a round ≠ custody. Then the round's steps.
Shot #steps (5.82): Component: step-list – title "Round का क्रम", first three step cards (1–3) as the frame, empty.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | track holds |
| 1.00 | — | — | bottom band: "सौंपना" chip ≠ "Custody" chip; ≠ 3.92 |
| 5.82 | cut #steps | — | title + three empty cards |

## s061
Continues: s060
Section label: PART 4 · KEYS, BAG AND ROUND
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | step 1 "हर box पर तय clearance समय पर" words in, small clock |
| 5.47 | — | — | step 2 "Box खोलना → डाक collection bag में"; bag icon 7.35 |

## s062
Continues: s061
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: step 3 record; then a second card set for steps 4–5.
Shot #steps2 (4.25): steps 1–3 replaced by cards 4–6 (same layout, numbers continue).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | step 3 "Electronic clearance record" + phone icon 0.45 |
| 4.25 | cut #steps2 | — | step 4 "Hour plate बदलना" 4.53 |
| 5.87 | — | — | step 5 "ठीक से ताला" + padlock 7.61 |

## s063
Continues: s062
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: after the last box, straight back and hand everything over.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | step 6 card "आखिरी box के बाद बिना देर लौटना" words in 0.62 |
| 3.66 | — | — | small `post-office-front` in step 6 |
| 5.80 | — | — | in a cream tray under step 6: key 5.80, plate 7.04, bag 7.85 pop |
| 8.42 | — | — | step 6 green tick badge ("वापस") |

## s064
Continues: s063
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: who receives them; then the attendant also checks the box's condition.
Shot #check (5.46): `letter-box-pillar` scale 1.8 centre-left; an ink magnifier (annotation) over its door.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | tray holds; label "Postmaster / responsible attendant लेते हैं" 1.76 |
| 5.46 | cut #check | — | box; "box की हालत" label right 7.26 |
| 7.82 | — | — | magnifier draws |

## s065
Continues: s064
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: damage or defect → tell the Postmaster; three examples; mail at risk.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | right card "Damage / defect" 1.26 |
| 3.38 | — | — | arrow → chip "Postmaster को report" 4.04 |
| 6.16 | — | — | three small rows: "टूटा दरवाज़ा" 6.16, "खराब ताला" 7.42, "ढीली fitting" 8.82 |
| 9.92 | — | — | amber note "डाक खतरे में" |

## s066
Continues: no
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: defect report is part of the clearance duty; then Sundays and holidays. Cut.
Shot #duty (0): wide band "Defect report = clearance duty का हिस्सा".
Shot #closed (4.60): two `calendar-sheet`s left ("Sunday", "Holiday"); right `post-office-front` with sign "Post Office" and a grey "बंद" plate on the door.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | band words in; highlight "हिस्सा" 3.48 |
| 4.60 | cut #closed | — | sheet 1 4.76, sheet 2 5.80 |
| 7.62 | — | — | office pops; "बंद" plate 9.50 |

## s067
Continues: s066
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: Mobile Post Offices also closed; Night Post Offices excluded; no street-box clearance.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `mobile-post-van` beside the office, its #shutter shown and grown down (closed) |
| 1.68 | — | — | `post-office-front` (2nd) sign "Night Post Office", green tag "इसमें नहीं" 4.02 |
| 5.08 | — | — | bottom strip: small street box + "उस दिन clearance नहीं" 7.44 |

## s068
Continues: s067
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: unless authorised; posting ≠ same-day clearance; check the box notice and the office's notified arrangement.
Shot #check (8.34): two WHITE CARDs: box plate icon "Box पर लिखी जानकारी"; notice-sheet icon "Office की notified व्यवस्था".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | chip "जब तक authorised व्यवस्था न हो" by the strip |
| 2.80 | — | — | myth line "Box में डाला = उसी दिन clearance" words in |
| 5.94 | — | — | `strike` slate ("नहीं") |
| 8.34 | cut #check | — | card 1 8.88; card 2 11.62; tick on each 13.88 |

## s069
Continues: no
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: where authorised late arrangements apply, at fixed hours. Cut.
Layout: heading "तय घंटों में arrangements"; three cards: building "RMS offices", `post-office-front` "चुने हुए offices", `mail-van` "RMS mail vans के letter boxes".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading + small clock |
| 6.50 | — | — | card 1 |
| 7.98 | — | — | card 2 |
| 9.78 | — | — | card 3 (mail-van draws) |

## s070
Continues: no
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: letters with full postage + fixed late fee; registered newspapers without late fee. Cut.
Layout: two WHITE CARD rows y 300–560 and 640–900.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 envelope icon + "Letters" |
| 3.18 | — | — | chip "पूरा postage" ; "+" ; chip "Late fee" 5.12, highlight "पहले से" 5.80 |
| 7.10 | — | — | row 2 "Registered newspapers" + "packets" 9.60 |

## s071
Continues: s070
Section label: PART 4 · KEYS, BAG AND ROUND
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 chip "बिना late fee" (late fee struck in slate 1.34) |
| 3.08 | — | — | bottom three chips: "Press Sorting Offices", "RMS offices" 5.10, "Night Post Offices" 7.22 |

## s072
Continues: no
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: this is an acceptance facility, not permission for the ordinary box; machine-franked to their authorised counter. Cut.
Layout: left: "Acceptance की सुविधा" chip ≠ small box "छूट"; right: franked envelope → `posting-counter` "Authorised counter".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "Acceptance की सुविधा" |
| 2.36 | — | — | ≠ + box with slate cross 4.30 |
| 5.88 | — | — | "Machine-franked" envelope with `franking-impression` |
| 7.38 | — | — | arrow → counter, green tick 8.98 |

## s073
Continues: no
Section label: PART 4 · KEYS, BAG AND ROUND
Idea: Sunday/holiday opening and its transactions can be decided by Circle Head or Regional Head. Cut.
Layout: `calendar-sheet` "Sunday / Holiday" left with an open office; right two `icon-circle-office` cards "Circle Head" and "Regional Head", each with a green tick.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | calendar + "office खोलना" 1.94 |
| 3.64 | — | — | "उस दिन के transactions" |
| 5.42 | — | — | card 1 + tick |
| 7.60 | — | — | card 2 + tick; "या" between; "तय कर सकते हैं" 8.42 |

## s074
Continues: no
Section label: RECAP · PARTS 3 AND 4
Idea: recap envelope. Component: recap-card – 5 rows, seal "5", title "Part 3 और 4". In: fade 0.4.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + flap |
| 1.03 | — | — | row 1 "तीन समय" with three mini `clock-face`s |

## s075
Continues: s074
Section label: RECAP · PARTS 3 AND 4
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 1 pill "Clearance · Dispatch · आना" (words 0, 1.03, 2.65); tick 3.48 |
| 4.39 | — | — | row 2 "Hour plate" · pill "अगली clearance"; tick 6.43 |
| 6.89 | — | — | row 3 "चाबी · plates · bag" words in |

## s076
Continues: s075
Section label: RECAP · PARTS 3 AND 4
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 pill "round के लिए, लौटकर वापस"; tick 2.23 |
| 3.00 | — | — | row 4 "Custody" · pill "Postmaster / responsible Assistant"; tick 8.00 |

## s077
Continues: s076
Section label: RECAP · PARTS 3 AND 4
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 5 "आखिरी box के बाद" · pill "बिना देर लौटना"; tick 2.13 |
| 3.55 | — | — | pill extends "defect report → Postmaster"; tick 4.59 |

## s078
Continues: no
Section label: PART 5 · ELECTRONIC RECORD
Idea: the electronic clearance record and what it tells. In: fade 0.4.
Layout: `phone-screen` scale 2.0 left (x 160–760); right WHITE CARD "Clearance record" with five field rows (label + blank value line).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | phone + card heading |
| 2.84 | — | — | row 1 "Box clear हुआ?" (ink tick / slate cross mini icons) 4.66 |
| 6.82 | — | — | row 2 "कहाँ" + pin icon; row 3 "कब" + clock 7.60 |
| 8.60 | — | — | row 4 "कितने letters" |
| 10.32 | — | — | row 5 "किसने किया" 11.28 |

## s079
Continues: no
Section label: PART 5 · ELECTRONIC RECORD
Idea: regular clearance uses the Doorstep Service app; the Manual names a software. Cut.
Layout: left `phone-screen` with app title bar "Doorstep Service"; right DOC CARD "Postal Manual" with a blank name plate.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | phone; "Regular letter box clearance" heading |
| 2.58 | — | — | app name `reveal` on screen; highlight 3.58 |
| 5.82 | — | — | DOC CARD slides from right; "Electronic clearance + monitoring software" 7.22 |

## s080
Continues: s079
Section label: PART 5 · ELECTRONIC RECORD
Idea: its name is Nanyatha; it checks barcode, location, count.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | "Nanyatha" Inter bold 96 px `tracking` in on the plate; grey tag "software का नाम" 0.6 |
| 2.10 | — | — | chip "Barcode" |
| 3.12 | — | — | chip "Location" |
| 4.70 | — | — | chip "Letter count"; highlight "Nanyatha" 6.28 |

## s081
Continues: no
Section label: PART 5 · ELECTRONIC RECORD
Idea: exam angle: Nanyatha = letter box clearance, not parcel booking or post-box allotment. Cut.
Layout: TRAP BANNER "Exam angle: Nanyatha"; three cards: "Letter box clearance" (green tick), "Parcel booking" (slate cross), "Post box allotment" (slate cross).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | banner |
| 2.18 | — | — | card 1 3.96; tick 5.28 |
| 6.26 | — | — | card 2 + cross |
| 8.16 | — | — | card 3 + cross 9.66 |

## s082
Continues: no
Section label: PART 5 · ELECTRONIC RECORD
Idea: six steps; the first two at the box – open it, scan the barcode inside the door. Cut.
Layout throughout s082–s085: a step counter strip at top (six small numbered dots, x 560–1360, y 210), the current dot filled red; picture below.
Shot #box (4.18): `letter-box-door-open` scale 1.6 left (500, 990); `phone-screen` scale 0.8 right of the door.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "Nanyatha · 6 steps" heading; six dots pop stagger 0.08 at 1.60 |
| 4.18 | cut #box | — | dots 1–2 bracket "Box पर" |
| 7.12 | — | — | dot 1 fills; door box shown; "Box खोलना" label 7.94 |
| 8.90 | — | — | dot 2 fills; barcode label `pulse` 10.96; phone `move` by [-120, 0] toward door 11.52, scan line grows across |

## s083
Continues: s082
Section label: PART 5 · ELECTRONIC RECORD
Idea: scan via the handset's Android app; count typed by hand; data to server; location check.
Shot #send (8.38): phone left (x 300), `rmfs-server` right (x 1500), dashed arc between.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | push 1.1 on phone | — | label "Android app" on phone 1.30 |
| 3.24 | — | — | dot 3 fills; phone screen field "Letters: __" with a typing caret, "खुद type" 5.78 |
| 8.38 | cut #send | — | dot 4 fills; arc draws 8.92 |
| 10.88 | — | — | dot 5 fills; `gps-pin` pops over server "Location check" |

## s084
Continues: s083
Section label: PART 5 · ELECTRONIC RECORD
Idea: the record and its data; sent by GPRS to the central server.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | small record card by the server "record बनता है" 0.46 |
| 1.84 | — | — | packet card on the arc: "Box detail" 2.86, "Clearance समय" 4.02, "Letter count" 6.02 |
| 7.76 | — | — | label "GPRS" on the arc (amber) 8.08; "Central server" under server 9.36 |

## s085
Continues: s084
Section label: PART 5 · ELECTRONIC RECORD
Idea: server checks location by the box's GPS coordinates; record updated; MIS made.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | pin label "GPS coordinates" 1.22; green tick on pin 3.22 |
| 4.54 | — | — | dot 6 fills; record card tick "update" 5.56 |
| 6.58 | — | — | `mis-sheet` slides from right of server; "MIS" 7.02 |

## s086
Continues: no
Section label: PART 5 · ELECTRONIC RECORD
Idea: what the record holds; why the barcode is inside the door. Cut.
Shot #rec (0): WHITE CARD with four field rows: "तारीख", "समय", "Letters की गिनती", "Clear करने वाले का detail".
Shot #why (7.05): `letter-box-door-open` left; right question "Barcode दरवाज़े के अंदर क्यों?".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | card + row 1 0.64 |
| 1.24 | — | — | row 2; row 3 2.08; row 4 4.30 |
| 7.05 | cut #why | — | box + question words in; barcode `pulse` 8.67 |
| 9.69 | — | — | answer "scan से पहले box खोलना ही पड़े" words in; highlight "खोलना ही" 12.73 |

## s087
Continues: s086
Section label: PART 5 · ELECTRONIC RECORD
Idea: a label outside proves nothing; the barcode only identifies the box.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | answer dims; myth chip "बाहर लगा label scan" |
| 2.16 | — | — | slate cross + "दरवाज़ा खुला था, सबूत नहीं" 2.72 |
| 5.93 | — | — | chip "Barcode का काम: सिर्फ box पहचानना" words in; highlight "पहचानना" 8.33 |

## s088
Continues: s087
Section label: PART 5 · ELECTRONIC RECORD
Idea: it doesn't count letters; the attendant enters the real count. Then "three words".
Shot #three (8.38): three empty WHITE CARDs in a row, headed "GPS", "GPRS", "MIS" (Inter bold 80 px).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | line "Letters अपने आप नहीं गिनता" with slate cross 1.46 |
| 2.18 | — | — | `attendant-badge` + "गिनती खुद दर्ज" 6.26; green tick 7.34 |
| 8.38 | cut #three | — | three cards pop stagger 0.3 |

## s089
Continues: s088
Section label: PART 5 · ELECTRONIC RECORD
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card GPS: `gps-pin` draws; "Location coordinates" 2.58; "box की जाँच" grey |
| 5.10 | — | — | card GPRS: phone→server mini arc; "Data: handset → server" 7.22 |

## s090
Continues: s089
Section label: PART 5 · ELECTRONIC RECORD
Idea: MIS card; then the confusion line.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card MIS: `mis-sheet` small; "Management की जानकारी" 2.10 |
| 4.36 | — | — | TRAP BANNER slides from up over the top |
| 7.16 | — | — | banner line "GPS → location" |

## s091
Continues: s090
Section label: PART 5 · ELECTRONIC RECORD
Idea: GPRS → data; handset coordinates matched with the box's saved coordinates; saved info may hold the schedule.
Shot #match (2.42): two pins side by side: red pin "Handset" and grey outline pin "Saved box location"; under them a saved-info card.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | banner adds "GPRS → data" |
| 2.42 | cut #match | — | handset pin pops 3.30 |
| 5.08 | — | — | saved pin pops; handset pin `move` onto it 7.58; tick |
| 9.12 | — | — | saved card "तय clearance समय" + `clock-face` 11.14 |

## s092
Continues: s091
Section label: PART 5 · ELECTRONIC RECORD
Idea: actual time matched with scheduled time; work and record agree.
Shot #time (0): two `clock-face`s "असल समय" and "तय समय", "=" between (amber).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | cut #time | — | clock 1 draws 0.64 |
| 1.40 | — | — | clock 2 draws; "=" pops 2.42 |
| 4.08 | — | — | band "असली काम = electronic record" words in; highlight "मेल खाएँ" 7.90 |

## s093
Continues: no
Section label: PART 5 · ELECTRONIC RECORD
Idea: the four things the record guarantees. Cut.
Layout: WHITE CARD with four rows, green ticks as said.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | row 1 "Box खुले" tick 0.38 |
| 1.20 | — | — | row 2 "डाक निकले" tick 1.62 |
| 2.40 | — | — | row 3 "सही गिनती दर्ज" tick 3.42 |
| 4.66 | — | — | row 4 "सही box के नाम पर" tick 7.26 |

## s094
Continues: no
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: money or valuables found in the box; Postal Manual Vol 5, Rule 154. In: fade 0.4.
Layout: `letter-box-door-open` left with a small note and coin drawn among the letters; right DOC CARD.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | box open, letters inside |
| 1.84 | — | — | note + coin pop among letters; "पैसा / कीमती चीज़" label 2.94 |
| 5.12 | — | — | DOC CARD "Postal Manual · Volume 5" slides in |
| 7.56 | — | — | postmark "Rule 154" `stamp` 7.72 |

## s095
Continues: s094
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: handed to the Postmaster for disposal; what next depends on what was found.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | arrow from box to a chip "Postmaster" 0.82 |
| 3.14 | — | — | TERM-chip "Disposal" + "निपटारा" |
| 4.92 | — | — | line "आगे क्या? → मिला क्या है" words in; highlight "मिला क्या" 8.30 |

## s096
Continues: no
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: four cases; case 1 loose ordinary stamps. Cut.
Shot #grid (0): 2×2 grid of WHITE CARDs numbered 1–4 (x 200–1720, y 240–990), empty.
Shot #c1 (7.30): case-1 flow strip across the frame: loose stamp icon → "किस article के?" (search icon) → … (continues s097).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | grid pops stagger 0.1 at 0.36 |
| 2.14 | — | — | card 1: loose stamp icons + "ढीले ordinary stamps" 2.80; "उखड़ गए" 6.44 |
| 7.30 | cut #c1 | — | stamp icon; "पहले: article ढूँढना" words in 7.74 |

## s097
Continues: s096
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: not found → shown to Postmaster or Head Sorting Assistant → pasted against an entry in Error Book / Daily Report → defaced.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | step 1 holds; "पता न चले" slate fork 2.26 |
| 3.32 | — | — | step 2 chip "Postmaster / Head Sorting Assistant" |
| 7.96 | — | — | step 3 `record-book` labelled "Error Book / Daily Report"; stamp `move` onto an entry line 11.76 |
| 12.52 | — | — | step 4: cancel lines draw across the stamp; "Deface" label |

## s098
Continues: s097
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: deface = make it unusable again; then case 2.
Shot #c2 (5.73): `domestic-envelope` (private, with two stamps) and a postcard with a stamp, red "2" badge.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | TERM-chip "Deface" `pulse`; meaning "दोबारा न चले" 3.84 |
| 5.73 | cut #c2 | — | badge "Case 2" |
| 6.47 | — | — | "बिना इस्तेमाल का private envelope" 7.99; postcard 9.87 |

## s099
Continues: s098
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: cut out the stamped portion; then recorded and defaced the same way.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | stamps on both highlighted |
| 1.96 | — | — | dashed cut line draws round the stamp corner 3.56; that corner `move` up and right |
| 5.10 | — | — | mini chain "दर्ज → deface" from case 1 pops; cancel lines on the cut piece 7.70 |

## s100
Continues: no
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: case 3 – unused departmental postcard or blank unused embossed envelope. Cut.
Layout: badge "Case 3"; left a departmental postcard (drawn); right `embossed-envelope` scale 1.4; TERM bottom.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | badge |
| 1.94 | — | — | postcard draws; "Departmental postcard" |
| 4.34 | — | — | envelope draws |
| 5.80 | — | — | TERM "Embossed envelope" |
| 9.80 | — | — | gloss "उभरे मुद्रांक वाला लिफ़ाफ़ा"; ring annotation round the embossed stamp 10.72 |

## s101
Continues: s100
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: also in case 3: stamp booklet or sheet, currency note, current coin; shown to the Postmaster.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | postcard + envelope shrink up into a row (move) |
| 1.20 | — | — | new row icons: stamp booklet, sheet 2.76, currency note 3.56, coin 5.24 |
| 7.06 | — | — | arrow → "Postmaster" chip |

## s102
Continues: s101
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: their value goes to unclassified receipts; postcard/embossed envelope to the Treasurer against a receipt in the Error Book.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | note+coin row → TERM-chip "Unclassified receipts" 1.08; gloss "अवर्गीकृत प्राप्तियाँ" |
| 5.16 | — | — | postcard+envelope row → `record-book` "Error Book" 7.94 |
| 9.22 | — | — | "receipt" tag; arrow → chip "Treasurer" 10.18 |

## s103
Continues: no
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: case 4 – other coins or valuables that couldn't be accounted at once → Postmaster's personal custody. Cut.
Layout: badge "Case 4"; left coin + small ring/watch icon; right `key-cabinet` labelled "Postmaster".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | badge |
| 1.70 | — | — | coins 1.70, valuable 2.54 |
| 3.78 | — | — | grey line "तुरंत account में नहीं" |
| 6.80 | — | — | items `move` into cabinet; "Personal custody" chip 8.34 |

## s104
Continues: s103
Section label: PART 6 · MONEY, STAMPS, VALUABLES
Idea: disposal orders from the Head of the Circle; then three pairs to remember.
Shot #pairs (4.60): WHITE CARD with three rows (left term → right action).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | `icon-circle-office` pops right, name band "Head of the Circle" 1.92; "orders" chip |
| 4.60 | cut #pairs | — | title "तीन जोड़ियाँ" 5.98 |
| 7.64 | — | — | row 1 "पहचान न हुए ढीले stamps" → "दर्ज + deface" 9.96 |

## s105
Continues: s104
Section label: PART 6 · MONEY, STAMPS, VALUABLES
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 "Currency" → "Unclassified receipts" 0.66 |
| 2.68 | — | — | row 3 "Account में न आई कीमती चीज़" |

## s106
Continues: s105
Section label: PART 6 · MONEY, STAMPS, VALUABLES
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 → "Postmaster की custody" |
| 2.16 | — | — | "+ Circle Head के orders"; highlight 3.18 |

## s107
Continues: no
Section label: RECAP · PARTS 5 AND 6
Idea: recap envelope. Component: recap-card – 5 rows, seal "5", title "Part 5 और 6". In: fade 0.4.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | envelope + flap |
| 1.18 | — | — | row 1 "Nanyatha" · pill "letter box electronic clearance"; tick 6.30 |
| 7.18 | — | — | row 2 "Barcode" · pill "दरवाज़े के अंदर" ; tick 8.62 |
| 9.78 | — | — | row 2 pill extends "+ गिनती attendant"; tick 11.32 |

## s108
Continues: s107
Section label: RECAP · PARTS 5 AND 6
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 "GPS · GPRS" · pill "location · data"; tick 3.04 |
| 3.86 | — | — | row 4 "Currency" · pill "Unclassified receipts"; tick 7.36 |
| 7.84 | — | — | row 5 "कीमती चीज़ें" · pill "Postmaster custody → Circle Head orders"; tick 13.40 |

## s109
Continues: no
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: what the Postmaster checks (a checklist that holds s109–s110). In: fade 0.4.
Layout: left label chip "Postmaster की जाँच" over `post-counter-icon`; right WHITE CARD x 760–1760, y 240–990, four rows.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | left chip + empty card |
| 2.40 | — | — | row 1 "Office का letter box · ठीक समय पर" 3.86 |
| 6.42 | — | — | row 2 "बाहर के boxes · अपने तय समय पर" 8.02 |

## s110
Continues: s109
Section label: PART 7 · CHECKS AND EXTRA DUTIES
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card holds |
| 2.46 | — | — | row 3 `hour-plate` mini + "सही और समय पर बदलीं" 3.28 |
| 6.34 | — | — | row 4 "Attendant: तय समय पर निकला" 8.30, "लौटा" 10.64 |

## s111
Continues: no
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: the test letter. Cut.
Layout: `letter-box-pillar` scale 1.6 left (480, 980); right `domestic-envelope` scale 0.9 with addressee line "Postmaster".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | box + "बाहर का box परखना" heading |
| 3.52 | — | — | envelope pops right; "Test letter" chip 5.58 |
| 6.32 | — | — | envelope `move` to above the slot, then `fall` by 220 into the mouth 6.88 |
| 7.58 | — | — | addressee line (shown beside as a big card) "खुद Postmaster के नाम"; highlight 8.22 |

## s112
Continues: s111
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: result recorded in the Postmaster's order book; trap: Error Book is a different book.
Shot #books (6.22): two `record-book`s side by side, labels "Order Book" and "Error Book".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | "नतीजा" chip by the box 0.62 |
| 2.92 | — | — | `record-book` "Postmaster's order book" slides from right |
| 6.22 | cut #books | — | TRAP BANNER "Exam में यहीं confusion" |
| 8.72 | — | — | Error Book highlighted; under it "Irregular posting" 9.58 |

## s113
Continues: s112
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: irregular posting = wrongly posted mail; Head Postman may also check, if available.
Shot #hp (3.19): chip "Head Postman" (badge-style, no person) with an arrow to "Attendants के काम की जाँच"; condition pill.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | under Error Book "गलत तरीके से डाली गई डाक" words in |
| 3.19 | cut #hp | — | "Head Postman" pops |
| 4.53 | — | — | arrow + "attendants के काम की जाँच" |
| 8.41 | — | — | amber pill "शर्त: उपलब्ध हो" 11.19 |

## s114
Continues: no
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: extra duties; some offices have town sub offices or branch offices attached. Cut.
Layout: `post-office-front` large centre-left (x 520) "Office"; two smaller `post-office-front`s right (y 380 and 760) "Town sub office", "Branch office", joined by lines.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | "Attendant के extra काम" heading |
| 2.24 | — | — | main office pops |
| 3.64 | — | — | town SO + line |
| 5.62 | — | — | BO + line; `attendant-badge` pops by main office 8.42 |

## s115
Continues: s114
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: carrying mails to and from them; packer work, which includes stamping.
Shot #packer (5.26): WHITE CARD "Packer का काम" with list rows (up to 4, filled s115–s117).
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | small `special-mail-bag` `move` along the line to the SO 1.52, and back 3.24 |
| 5.26 | cut #packer | — | card title; "Packer" TERM-chip 5.72 |
| 8.02 | — | — | row 1 "Articles पर stamping" + rubber-stamp icon 10.16 |

## s116
Continues: s115
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: facing, for sorting and checking; what facing means.
Shot #facing (3.64): left a messy stack of envelopes (addresses various ways); right the same envelopes in a neat row, all address-side up and the same way; arrow between.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 "Sorting और जाँच के लिए facing" 2.44 |
| 3.64 | cut #facing | — | TERM "Facing" top |
| 4.72 | — | — | messy stack draws |
| 6.10 | — | — | arrow; neat row pops stagger 0.1; caption "पता लिखा हिस्सा एक ही दिशा में" 7.80 |

## s117
Continues: s116
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: packing mails, help closing and sealing bags; but none of this removes the duty of punctual clearance.
Shot #duty (6.02): `clock-face` + small box at centre, bold "समय पर clearance" stays; extra-duty chips grey around it.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | cut back to #packer | — | row 3 "Mails की packing" 0.82 |
| 2.60 | — | — | row 4 `special-mail-bag` mini; "bags बंद और seal" ; seal `pulse` 4.48 |
| 6.02 | cut #duty | — | centre group on; grey chips around 6.86 |
| 9.22 | — | — | highlight "ज़िम्मेदारी नहीं हटती" under the clock 10.02 |

## s118
Continues: no
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: wrong mail out of the box; some services need counter booking, fixed details or a receipt. Cut.
Layout: open box left with one article tagged amber "?"; right three chips.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | box + "box से निकली गलत डाक" heading |
| 3.76 | — | — | chip "Counter booking" |
| 4.86 | — | — | chip "तय details" |
| 6.76 | — | — | chip "Receipt" |

## s119
Continues: s118
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: such an article's acceptance isn't complete; brought to the office for the correct action.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | article tagged; line "Acceptance पूरी नहीं" with slate cross 5.46 |
| 6.28 | — | — | arrow → `post-office-front` 6.74 |
| 8.78 | — | — | chip "सही कार्रवाई" with green tick 9.16 |

## s120
Continues: no
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: COD – money taken from the addressee on delivery and sent to the sender. Cut.
Layout: TERM top "Cash on Delivery (COD)"; below a left→right flow: house "Addressee" → ₹ note → envelope icon "Sender".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | TERM pops; "COD" chip 1.80 |
| 4.60 | — | — | house "Addressee" 5.84; ₹ note pops 6.80 ("रकम") |
| 8.16 | — | — | arrow draws; "Sender" 8.62 |

## s121
Continues: s120
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: retail and other customers sign an agreement with the postal authority; COD items are accountable.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | flow dims; plain agreement sheet icon (blank lines, signature line) centre-right |
| 4.70 | — | — | "Agreement" label; signature line `draw` 5.60 |
| 7.28 | — | — | red pill "COD = Accountable" 8.52 |

## s122
Continues: s121
Section label: PART 7 · CHECKS AND EXTRA DUTIES
Idea: not the box but the counter with a receipt; then four strands that tie the duty together.
Shot #map (5.19): Component: mind-map – centre stamp "Letter-box duty" / "लेटर-बॉक्स ड्यूटी"; four corner cards (no example lines), empty at first.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | small box slate cross "नहीं" 1.16; `posting-counter` + receipt tick 2.92 |
| 5.19 | cut #map | — | centre pops; four empty cards 5.53 |
| 8.01 | — | — | card 1 "Posting के नियम" · "box में क्या" 9.51 |

## s123
Continues: s122
Section label: PART 7 · CHECKS AND EXTRA DUTIES
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card 2 "Attendant duties" |
| 1.78 | — | — | "समय · punctuality · defect report" words in |
| 6.46 | — | — | card 3 "Clearance की प्रक्रिया" · "सामान लेना · electronic record" 8.24 |

## s124
Continues: s123
Section label: PART 7 · CHECKS AND EXTRA DUTIES
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | card 3 adds "· बिना देर लौटना" |
| 2.32 | — | — | card 4 "Extra duties" · "mails लाना-ले जाना" 4.30, "packer" 6.58 |

## s125
Continues: no
Section label: KEY POINTS
Idea: Key point 1 – what goes in the box. In: fade 0.4.
Layout for every key point (s125–s137): left red perforated stamp (x 140–600, y 260–960) with a huge number and the point's title in white; right WHITE CARD (x 680–1780) with up to 4 rows, each ticking green as said.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | heading "सबसे ज़रूरी बातें" |
| 3.38 | — | — | stamp "1" + "Box में क्या" |
| 6.36 | — | — | row 1 "Letter box: list वाली, पूरी prepaid डाक"; tick 9.26 |

## s126
Continues: s125
Section label: KEY POINTS
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 1 adds slate "small packets ✗" |
| 1.82 | — | — | row 2 "For letters only: letters + postcards"; tick 5.10 |
| 6.08 | — | — | row 3 "Airmail · QMS: सिर्फ अपनी class"; tick 9.18 |

## s127
Continues: s126
Section label: KEY POINTS
Idea: row 4, then key point 2 begins.
Shot #p2 (6.74): stamp "2" + "Counter पर क्या"; empty card.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 "Letter box: डालना · Post box: लेना"; tick 5.98 |
| 6.74 | cut #p2 | — | stamp 2 on |

## s128
Continues: s127
Section label: KEY POINTS
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 1 "Accountable · COD · सारे India Post Parcels" (0, 1.84, 3.98) |
| 6.28 | — | — | row 1 pill "counter + receipt"; tick 7.94 |
| 8.88 | — | — | row 2 "Franked · Reg. newspaper · Periodical post" |

## s129
Continues: s128
Section label: KEY POINTS
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 2 pill "box में = unpaid"; tick 1.42 |
| 2.42 | — | — | row 3 "Domestic unpaid: prepaid rate × 2" ; highlight "× 2" 5.80 |
| 6.36 | — | — | pill "कम से कम ₹1"; tick 7.38 |

## s130
Continues: s129
Section label: KEY POINTS
Shot #p3 (4.75): stamp "3" + "समय और hour plate"; empty card.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 "Self-booking kiosk offices: Regional Head"; tick 3.38 |
| 4.75 | cut #p3 | — | stamp 3 on |

## s131
Continues: s130
Section label: KEY POINTS
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 1 three mini `clock-face`s "Clearance · Dispatch · आना" (0, 1.22, 2.78); tick 4.66 |
| 5.62 | — | — | row 1 adds "punctual"; highlight 6.08 |
| 7.36 | — | — | row 2 `hour-plate` mini "अगली clearance का समय"; tick 10.14 |

## s132
Continues: s131
Section label: KEY POINTS
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 `box-key` + plate "custody: Postmaster / responsible Assistant"; tick 4.30 |
| 6.14 | — | — | row 3 adds "+ round के लिए bag" 7.08 |
| 8.34 | — | — | row 4 "आखिरी box → बिना देर लौटना" 10.98 |

## s133
Continues: s132
Section label: KEY POINTS
Shot #p4 (6.68): stamp "4" + "Electronic record"; empty card.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 4 adds "तीनों वापस"; tick 1.36 |
| 2.20 | — | — | row 5 "Defect → Postmaster को"; tick 5.14 |
| 6.68 | cut #p4 | — | stamp 4 on 7.54 |

## s134
Continues: s133
Section label: KEY POINTS
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 1 "Regular clearance: Doorstep Service app" 1.56; tick 4.46 |
| 5.48 | — | — | row 2 "Nanyatha: box खुले → scan → count" (7.48, 9.10, 10.36); tick 11.18 |

## s135
Continues: s134
Section label: KEY POINTS
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 "Barcode दरवाज़े के अंदर · गिनती attendant खुद"; tick 5.04 |
| 6.22 | — | — | row 4 "GPS → location · GPRS → data" (6.22, 7.78); tick 9.18 |

## s136
Continues: no
Section label: KEY POINTS
Idea: Key point 5 – found items and checks. Cut, same key-point layout.
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | stamp "5" + "मिली चीज़ें और जाँच" |
| 3.54 | — | — | row 1 "Currency → Unclassified receipts"; tick 6.34 |
| 6.74 | — | — | row 2 "कीमती चीज़ें → Postmaster, Circle Head के orders तक" (9.42, 11.30); tick 12.36 |

## s137
Continues: s136
Section label: KEY POINTS
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | — | — | row 3 "Test letter (अपने नाम) → order book"; tick 5.96 |
| 6.72 | — | — | row 4 "Irregular posting → Error Book"; tick 10.32 |

## s138
Continues: no
Section label: CLOSE
Idea: next time you see an hour plate, you'll know the duty behind it. In: fade 0.4.
Photo: india-post-letter-box-cutout, paper cut-out left (x 160–720, y 200–990), tilt -1.5°, credit beneath.
Layout: right a large drawn `hour-plate` (scale 2.2, centre (1250, 420)); below it four quiet chips in a 2×2: "समय", "चाबी", "Record", "जाँच".
| time | camera | pose / face | actions |
|---|---|---|---|
| 0.00 | wide | — | photo on screen; "अगली बार…" line grey |
| 2.06 | — | — | hour plate pops; highlight on its time area 2.48 |
| 4.68 | slow push 1.05 to 8.4 | — | four chips fade in stagger 0.3 ("पीछे") |
| 6.88 | — | — | underline annotation under "सोची-समझी duty" caption; holds to the end |
