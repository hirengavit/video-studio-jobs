# Fix animated scene s033

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s033" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s033), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s032.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s033.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s032 works: the stamp lifts and leaves its postmark on the envelope, and "दबाव सह ले" lands on its words. The mail-bag beat reads well, with "दबाव" and "रगड़" coming in on their words. The still stretches are reading holds and are intended. The problem is the #layers cut-away. It is small and sits in the left half of the card (about x 100–1000, y 420–760), with the right half empty until the labels arrive, though this is the idea that both this scene and s034 depend on.

1. #layers: scale the cut-away group up about 1.4× and centre it under the heading, filling about x 120–1180, y 300–900. Move the label stack ("Wax-cloth / मोमजामा", "अंदर का cover") to start at x ≈ 1260, with an even 80 px margin to the card's right edge.
2. Bring "भीतर की सामग्री" up to at least 48 px to match the bigger box. Keep the leader line from the inner layer to the Wax-cloth label tied to the inner layer's new edge.
3. Bring the "अंदर का cover" pill in on "cover" (≈ 9.6 s), not before it, and hold it still to the end.

The scene lasts 11.54 s: every time in it is between 0 and 11.54. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s033.html`: one `<section class="vs-scene" id="s033" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
