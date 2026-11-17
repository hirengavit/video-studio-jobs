# Fix animated scene s070

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s070" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s070), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s069.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s070.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
This is a cut to a new table, and the card and title are there at once. The row names slide in on "List screen पर है", and row 1 is highlighted on "कपड़ा या ऊनी". The timing is good. The problem is row 1's detail cell: three lines are packed into the 180 px row, and the Hindi under "Strong wrapper" renders below the kit's 32 px minimum.
1. Row 1 detail: set "मज़बूत लपेट" to 40px (the storyboard's size) with a 1.3 line height, and "Strong wrapper" to 48px. Then lay out the cell as English y row-top+44, Hindi y +92, and the covering line y +146, so nothing touches the row line at the bottom.
2. Swap `type` for `fade` on the Hindi texts (the title "4 और तरह का सामान" and "+ बाहर मोटे गत्ते या कपड़े का covering"). Typing shows broken half-syllables partway through ("4 और त", "…या कर"), which breaks Devanagari conjuncts. Keep the same start times (0.00 and 9.44, about 0.4 s each).
3. Have "+ बाहर मोटे गत्ते या कपड़े का covering" start on "बाहर मोटे गत्ते" at 9.0 s instead of 9.44, so it lands with its words.

The scene lasts 12.02 s: every time in it is between 0 and 12.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s070.html`: one `<section class="vs-scene" id="s070" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
