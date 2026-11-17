# Fix animated scene s157

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s157" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s157), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s156.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:franking-machine-photo` (and `photo:franking-machine-photo-cutout`, its subject cut out): A real desktop postage franking machine (postage meter), whole machine visible, side or three-quarter view, plain background if possible (Machine à affranchir Pitney Bowes DM400c à Lyon, France), 1920×1436. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s157.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The photo cut-out is a good change of picture after the tables, but the franking impression and the two columns are small, and the right half of the frame is mostly empty.

1. `franking-impression`: scale it from about 0.8 to 1.4 and centre it at about x 1300, y 330, so the imprint everyone is talking about is the second-biggest thing on screen (it's tiny now). Put the "छाप सही ✓" chip under it at y 470 instead of floating to its right.
2. Columns "भुगतान का तरीका" and "posting का तरीका": widen them to x 960–1360 and x 1400–1800, y 560–960. The headings fill the card width edge to edge now; give them 24px inner padding at 36px.
3. Column 1 has an empty divider line where column 2 has its sub-line "डाक देने का तरीका". Remove the divider and centre the ₹ icon so the two columns look deliberate.

The scene lasts 8.72 s: every time in it is between 0 and 8.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s157.html`: one `<section class="vs-scene" id="s157" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
