# Fix animated scene s152

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s152" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s152), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s151.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s152.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Card 2 builds well on its words: kiosk and term on "Self-booking kiosk", "सिर्फ तय items," and "तय post offices में" on their words, the REGIONAL HEAD chip on "Regional Head", and card 1's note greys out. But route card 3's white card vanishes at about 0.5–2.0 s, and only its red badge "3" is left floating on the cream for the rest of the scene. s153 needs that card. The REGIONAL HEAD chip is also wider than card 2 and pokes past its right edge.

1. Keep route card 3 on screen. Something in this scene hides or fades the third card's rect at about 0.5 s; it's probably the `color`/`fade` meant for card 1's note or the Hindi `fade` at 0.50 picking up the wrong selector. Aim the grey `color` only at card 1's note text and the `fade` only at card 2's Hindi line. Card 3 (rect and badge) stays at opacity 1 from 0.0 to the end, as in the previous frame.
2. Fit the REGIONAL HEAD chip inside card 2 (card x 690–1230): chip width at most 480 px, centred at x 960, 24 px above the card's bottom edge. Split it into two lines: "REGIONAL HEAD" 34 px Inter bold, "तय करते हैं" 34 px Noto Sans Devanagari below, height about 110 px. That keeps Hindi at 34 px and nothing crosses the card edge. Keep the `underline` on "तय करते हैं" at 7.70.
3. When card 1's note turns grey at 0.0, also take its highlight band on "इजाज़त दें" down (fade the band to opacity 0, or to #fde9a6 at 40 %). Otherwise the brightest thing on screen is the old point, not the kiosk.

The scene lasts 9.16 s: every time in it is between 0 and 9.16.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s152.html`: one `<section class="vs-scene" id="s152" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
