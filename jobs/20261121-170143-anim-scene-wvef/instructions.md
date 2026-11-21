# Fix animated scene s035

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s035" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s035), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s034.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s035.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The "जोड़ · 900 mm तक" row comes in at 5.34 and the shot changes to `#option` at 6.66. The row is on screen for about 1.3 s and never appears in a sampled frame (it is missing at 5.1 s, and the option card is up at 7.4 s), so the non-roll sum limit, which is the scene's key fact, gets no reading hold. The kit asks for at least 3 s. Both shots also leave the lower half of the frame empty.

Fixes:
1. Bring row 2 "जोड़ · 900 mm तक" in at 4.40 (on "जोड़"), with `count` reaching 900 by 5.3, and move the `#option` cut from 6.66 to 7.00 (on "Option"). That gives about 2.6 s of hold. Keep the `type` of "600 × 300 × 300 mm" from 8.2.
2. Match whatever new size and position s034's `#rule` group gets (centred, about 1.4×), so the Roll + Non-roll pairs fill the frame below the header instead of the top 45%.
3. `#option`: centre the option card vertically (centre about y 560), widen it to about x 260–1660, and set the size line at about 96 px, so the line that gets struck in s036 is big and central. s036 must start on the same layout.

The scene lasts 12.30 s: every time in it is between 0 and 12.30.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s035.html`: one `<section class="vs-scene" id="s035" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
