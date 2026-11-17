# Fix animated scene s057

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s057" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s057), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s056.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s057.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The beats land on their words (pill on "पुराना", "3 कदम" on "तीन कदम", step 1 on "पहला", the grey examples on "bottle, flask"), and the long still holds suit the kit's calm, read-it-then-hold style, so the check-note stills are intended. Things a viewer will notice:

1. The "पुराना Guide · Inland parcel" pill is far too small: its lettering renders at about 22–24 px, under the kit's 32 px minimum for Hindi, so it can't be read on a phone. Redraw it as a tab at x 120, y 146–200 (height 54, rx 27, same slate fill, white text), with its text at font-size 34, weight 600, Hindi in 'Noto Sans Devanagari'. Keep `stamp` at 2.40. s058–s062 have to copy the new size exactly.
2. The protective box already shows its sawdust filling (#filling: tan with dots) although filling is step 3 and isn't mentioned until s059. Steps 1–3 then read wrong: the "space between" that s058 asks for is already full. Hide `#filling` in this scene, e.g. `style="opacity:0"` on the group. Put a plain inner shape (fill #fbf7ee, ink 3 px outline) behind it, inside the #outer walls, so the empty space reads as an empty box rather than solid grey metal. The s056 file should match, so the seam doesn't change.
3. Make the grey examples line "bottle · flask · कोई ठीक container" at least 34 px (it renders at about 30 px), with line-height room above step row 2.

The scene lasts 12.38 s: every time in it is between 0 and 12.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s057.html`: one `<section class="vs-scene" id="s057" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
