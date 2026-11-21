# Fix animated scene s045

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s045" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s045), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s044.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s045.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The "unpaid" pill lands at about 1.7 s on "unpaid" in the highlight yellow, which is the right role for an added point. It extends to "× 2 charge" at about 3.1 s. The "frozen" note is a false alarm: the pill appears and grows.

Fixes:
1. The row 5 tick is set at 3.82 s, which is the very end of the scene. Only a dot of it shows before the cut (it is visible as a stray dot in s046's "previous scene" frame). Move the tick to 3.0 s, right after "दोगुना charge", so it draws fully and holds for about a second.
2. The grown pill "unpaid / × 2 charge" wraps to two lines and nearly touches the envelope's bottom edge. Keep it on one line ("unpaid · × 2 charge"): let the pill grow to the left over the row's spare space, or move it to start at x≈1180 with a width of about 380. Alternatively, extend the envelope's bottom by 30 px for the whole recap (and in s042–s044 too) so the pill has at least 20 px of padding.
3. Set the series slot to "LETTER BOXES". It is already correct here; keep it consistent once s042 and s043 are fixed.

The scene lasts 4.28 s: every time in it is between 0 and 4.28.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s045.html`: one `<section class="vs-scene" id="s045" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
