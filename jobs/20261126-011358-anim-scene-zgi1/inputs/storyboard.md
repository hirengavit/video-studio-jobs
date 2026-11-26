# Storyboard: Poste Restante, Recall, Alteration of address (Postal Exams, Hindi)

No character anywhere: no host rig. Every screen is a lecture slide built on its words, on the cream canvas (#fbf7ee), under the app's fixed frame. Content area: x 100–1820, y 150–1000 (the frame header sits above y 130). Hindi text 'Noto Sans Devanagari' ≥ 48 px; English terms Inter bold, translation beneath ~0.5 s after the term. Kit moves only (no smear/ticker/scatter/spin/float/wiggle/shake/bounce/flip/letters). Transitions: `cut` inside a part, `wipe` (from right) at each new part, `fade` for recaps and the close.

## Shared

Series tag: DELIVERY RULES (every scene).

Section labels (English, the kit's frame `section` slot):
- s001–s007: TOPIC · BIG PICTURE
- s008–s032: PART 1 · POSTE RESTANTE
- s033–s047: PART 2 · HOLDING PERIOD
- s048–s050: RECAP
- s051–s079: PART 3 · IDENTITY CARD
- s080–s095: PART 4 · SENDER'S RECALL
- s096–s098: RECAP
- s099–s113: PART 5 · CANCELLATION
- s114–s136: PART 6 · ADDRESSEE'S REDIRECTION
- s137–s139: RECAP
- s140–s169: PART 7 · INTERNATIONAL
- s170–s183: KEY POINTS

Places and props (each made once):
- **po-counter** (set, new): the recurring picture. Back: `pigeonhole-rack` (new) at x 510–1410, y 150–560; front: `posting-counter` (library) at translate(510 560) scale 1 (sign plate y 582–678, counter top y 730, red front to y 977). Spots: `counter-left` (700, 730), `counter-centre` (960, 730), `counter-right` (1220, 730), `rack-slot` (960, 360, the centre pigeonhole), `customer-side` (1640, 990, floor right of the counter, where a `person-icon` stands). Framings: `wide` (whole set), `medium` (counter top + rack, zoom 1.35 on y 600), `close` (envelope on the counter, zoom 2 on counter-centre). Scenes: s001, s008, s029, s051, s066, s067, s183.
- **pigeonhole-rack** (piece, new): sand (#f3ead6) wooden rack 900×410, 3 rows × 5 open slots with 3 px ink lines, white envelope corners peeking from 6 slots, a blank white label strip under each row. Anchors: base, top. Parts: #slots, #slot-centre (row 2, slot 3), #labels. Scenes: po-counter scenes, s029.
- **postmark-ring** (piece, new): round postal-red (#9e1b1b) postmark 220×220, double ring 4 px, five wavy cancel lines running right (to x 420), blank centre band for the scene's words (POSTE RESTANTE, a date, a regulation number). Anchors: base. Parts: #ring, #band, #cancels. Every part (sources go on postmarks: Reg. 54 in Part 3; Regs. 55–58, Schedule I Table VI in Parts 4–5; Reg. 23A, S.O. 3891(E), 15.07.2026 in Part 5; Regs. 55–58, 69 in Part 6; Reg. 119A, Regs. 126–127, Schedule III Table XI in Part 7).
- **domestic-envelope** (library): the recurring letter, white, 760×400; scenes letter its address lines. Rests on `counter-centre` in the set. Most scenes.
- **post-office-icon** (piece, new): small flat post office 320×300: white walls, postal-red roof band, blank sand sign band (x 40–280, y 70–110), door, a small red post box beside the door, ground line; no emblem. Anchors: base. Parts: #building, #sign-band, #door, #postbox. Scenes: s002, s009, s012, s025, s034, s043, s060–s062, s090, s119–s123, s128–s131, s141–s144.
- **house-icon** (piece, new): flat ink house 220×220, sand walls, red roof, door, blank white number plate. Anchors: base. Parts: #roof, #walls, #door, #plate. Scenes: s003, s012, s025, s033, s043–s044, s081, s090, s116–s124, s130–s131, s162–s163.
- **written-request** (piece, new): white letter sheet 420×560, 3 px ink outline, a blank header line, five grey ruled lines, a signature line bottom right and a small blank chip at bottom left (for a fee). Anchors: base, grip. Parts: #sheet, #header, #lines, #sign-line, #chip. Scenes: s068, s083–s087, s103, s122–s123, s126, s130–s132, s142.
- **letter-scale** (piece, new): flat ink postal scale 360×300, sand body, steel platform on top (top anchor), blank white display window (#display) for the scene's weight. Anchors: top, base. Parts: #platform, #body, #display. Scenes: s155–s158, s169, s182.
- **day-strip** (piece, new): a row of 12 square day tiles 1320×130 (100 px tiles, 10 px gaps), white with 3 px ink outline, blank for the scene's day numbers. Anchors: base. Parts: #tile-1 … #tile-12. Scenes: s152, s155, s157–s158, s164, s168, s181.
- **icon-plane** (piece, new): small flat ink aeroplane 200×120, white with a red tail band. Anchors: base. Scenes: s141, s143, s151–s153, s161, s162.
- Library pieces reused: `posting-counter`, `domestic-envelope`, `person-icon`, `id-card`, `receipt-slip`, `cod-parcel-face`, `rupee-deposit`, `regulations-book`, `key-fact-card` (every Exam angle), `icon-circle-office`, `browser-window`, `booking-counter`, `icon-globe`, `insured-letter-bag`, `mail-bag`, `camp-bag`, `book-packet-icon`, `parcel-bag`.

Recurring layouts (drawn by the scene, kept identical where they return):
- **Exam angle**: `key-fact-card` at translate(140 190) scale 1 (1640×780 → x 140–1780, y 190–970); kicker strip lettered "Exam angle · परीक्षा की बात"; up to 5 white lines (52 px Hindi, English terms inline) with yellow bullets, each landing on its spoken words; earlier lines stay white.
- **Four bars** (Part 4 and Part 6): four slate-outlined white bars 1500×120 stacked at x 210, y 330/480/630/780, each with a slate stop-hand icon at left and the term in English 60 px with Hindi 44 px beside it.
- **Recap envelope** (component recap-card, 5 rows): see s048.
- Real photos used: `Photo: postman-delivering-parcel-cutout` (s090), `Photo: newspaper-bundle-tied-cutout` (s154), `Photo: india-post-parcel-cutout` (s129). New ones are in materials.json; every scene that names one also works with the drawn piece named beside it.

## Continuity

No character, so continuity is about cards and the recurring envelope. The envelope is always the same white `domestic-envelope` with a red `postmark-ring` "POSTE RESTANTE" at its upper right; in Parts 4–7 it carries a curved slate return arrow (recall, always curving back to the LEFT, toward the sender) or a forked arrow (redirection, the second branch always going RIGHT to a second `house-icon`). Screen direction: sender and office of posting on the LEFT, delivery post office and addressee on the RIGHT, in every flow. Scenes marked `Continues` cut with no change; a new part arrives with a wipe from the right; recaps and the close fade. Every scene's last frame holds its full content until the cut.

## s035
Continues: no
Section label: PART 2 · HOLDING PERIOD
Idea: what COD is: the office collects from the addressee and sends it to the sender. Transition: cut.
Layout: key term strip y 180–330: "COD (Cash on Delivery)" 72 px ink, Hindi "डिलीवरी पर भुगतान" 48 px; flow y 420–940: `person-icon` "addressee" right (x 1500), `post-office-icon` centre, `person-icon` "sender" left (x 300), `rupee-deposit` moves along red arrows right → centre → left.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | key term strip on |
| 0.92 | — | — | Hindi line `fade` |
| 2.36 | — | — | office and addressee `pop` |
| 5.28 | — | — | arrow addressee → office `draw`; rupee notes `pop` at the office |
| 7.24 | — | — | sender `pop`; arrow office → sender `draw` |
| 9.74 | — | — | grey pill "value-added service" `pop` under the term |

## s036
Continues: s035
Section label: PART 2 · HOLDING PERIOD
Idea: COD rules give no separate period for Poste Restante and no automatic paid extension. The flow stays where s035 left it but turns grey; a white rules card (#ead9a8 border) slides up over its lower half, x 200–1720, y 500–990, title "COD के नियम" 48 px red, rows at y 600 / 730 / 860 (52 px), each with a mark at right (s037 adds row 3 and a sand banner inside the card's foot).
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s035 ends |
| 1.26 | — | — | flow `color` to grey; rules card `slide` from down |
| 2.78 | — | — | row 1 "Poste Restante के लिए अलग अवधि" `fade`; 5.58 slate cross `draw` |
| 6.98 | — | — | row 2 "fee देकर अवधि अपने आप बढ़ना" `fade`; 10.14 slate cross `draw` |

## s037
Continues: s036
Section label: PART 2 · HOLDING PERIOD
Idea: a COD service's special period comes from that service's own instruction; then a look-alike rule is announced.
| time | camera | character | actions |
|---|---|---|---|
| 0.00 | wide | — | as s036 ends |
| 1.62 | — | — | row 3 "खास अवधि → उसी service का लागू निर्देश" 52 px `fade`, green tick at right |
| 7.97 | — | — | the COD term strip `out`; in its place a sand banner y 180–300 "मिलता-जुलता नियम, अलग रखिए" 52 px `slide` from up |
| 9.44 | — | — | `highlight` {words: 'अलग'} |

