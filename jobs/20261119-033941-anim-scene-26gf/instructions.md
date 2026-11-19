# Fix animated scene s119

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s119" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s119), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s118.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s119.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The split back into "Dadra and Nagar Haveli" / "Daman and Diu" under "पुराने questions", then the two arrows into the green-ticked "Gujarat Postal Circle", say "either way, Gujarat Postal Circle" clearly. The example chain also starts on "example". Stage 1 is overcrowded, though: the designation plate is tiny, its lettering "Postal employee" runs past the plate's edges (it reads "ostal employe"), and "डाक कर्मचारी" is squeezed against the card's bottom edge at about 24 px. That frame carries into all of s120.

1. Give stage 1 room. Move the pin and "Daman" / "दमन" into the top half of the card (pin y 330–430, "Daman" 56 px at y 480, "दमन" 34 px at y 525), and scale icon-designation-plate up (one scale, about 1.6) to sit at y 600–700. Its lettering "Postal employee" should be 30 px and fit inside the plate with ≥ 12 px side padding.
2. Put "डाक कर्मचारी" at 34 px at y 760, at least 40 px above the card's bottom edge (900).
3. On the split, keep the Hindi under each half ("दादरा और नगर हवेली" / "दमन और दीव", 34 px) so the merged card's Hindi line doesn't simply vanish at 1.74 s.
4. Delay the pin's `draw` start so no stray stroke shows above "Daman" before the pin is visible (start the pin's draw at 10.55 s with "Daman" fading in together, not before it).

The scene lasts 13.45 s: every time in it is between 0 and 13.45.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s119.html`: one `<section class="vs-scene" id="s119" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
