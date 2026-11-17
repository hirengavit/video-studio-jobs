# Fix animated scene s105

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s105" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s105), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s104.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s105.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s104 is clean, and the crosses land on "जगह न बचे". The problem is that after shot B starts (2.26 s), the screen shows only the small book and its title on an empty canvas for about 3.3 s (the check's still from 2.49 s to 5.48 s), while the voice is already moving towards the label.

1. Bring the shot B parcel panel in sooner: `pop` the parcel and tag panel (`parcel-with-tag`) at 3.6 s, on "छूट है" / just before "काफ़ी", instead of 5.54 s. Keep the tag `pulse` at 5.0 s, on "बड़ा और साफ़", so the lower two thirds of the screen are never empty for long.
2. Make the panel and note fill the space under the header. Scale the parcel panel group about 1.25× and the note to match, and spread them across x 160–1760 with even margins. They now sit in a block about 1600 px wide that leaves roughly 300 px empty at the bottom.
3. The "पता label · बड़ा और साफ़" line touches the note card's left and right edges. Widen the note card's rect by about 120 px (or set the text's x with 32 px padding each side), and keep the Hindi at 40 px or more. Never shrink it to fit.
4. Move the "जगह न बचे" slate pill down about 30 px so it doesn't touch the bottom edge of the envelope's frame at 2.0 s.

The scene lasts 8.76 s: every time in it is between 0 and 8.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s105.html`: one `<section class="vs-scene" id="s105" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
