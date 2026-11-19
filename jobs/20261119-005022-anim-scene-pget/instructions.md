# Fix animated scene s067

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s067" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s067), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s066.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s067.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Shot 1 completes the table well: row 6 "RMS Sub-division", then "IRM / ASRM" on its word. The cut at 5.92 to the book is right. In shot 2, though, the book is small and its lettering won't read on a phone, and the lower third of the frame stays empty.
1. Scale the regulations-book up from 360×480 to about 500×667 (one scale number, about 1.39) and place it at x 160–660, y 300–967, so it fills the left of the frame with even margins.
2. On the book's title panel, set "Post Office Rules 2024" to at least 52 px Inter bold and the Hindi "डाकघर नियम 2024" to at least 36 px Noto Sans Devanagari (now about 20 px, below the kit's 32 px minimum), with line height about 1.3.
3. Move the right text block down to centre it on the book: y 420–860, card at x 760–1820. Keep "इन heads की" and "exact definitions" at 64 px or larger.
4. Bring the right block's `words` "इन heads की" forward to 8.2 s (on "इन heads", about 7.6–8.4) instead of about 9.0, so the right side isn't empty for 3 s after the cut.

The scene lasts 11.76 s: every time in it is between 0 and 11.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s067.html`: one `<section class="vs-scene" id="s067" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
