# Fix animated scene s164

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s164" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s164), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s163.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s164.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Seam is exact (both charge panels carry over). Timing works: stamp chip, "कम से कम ₹1" on "₹1", Delivery → addressee, then Item लौटे → sender around 9 s. The long "still" from 4.7 s is mostly a reading hold with small fades inside it, and the tail (9.5–12.4 s, "Parcels के बारे में एक और बात") is a bridge that rightly holds. The bottom strip is cramped and its small text won't read on a phone.

1. Payer strip: the Hindi glosses "(पाने वाला)" and "(भेजने वाला)" are tiny grey text pushed to the far right edge (≈24 px, below the kit's 32 px floor). Drop the brackets and set them 34–36 px #6f6a63 directly after the bold term, as the storyboard asks ("Hindi 34 after").
2. Payer strip lines: raise both lines to the storyboard's Hindi 44 (they render near 36) at y 830 and y 920 so they fill the 210 px strip; align the "→" arrows in one column at x ≈ 1000.
3. Stamp chip: "Postage / airmail fee वसूली" renders ≈30 px and is crammed against the perforation. Set it to 40 px (Hindi line-height 1.3), on two lines if needed, keeping "कम से कम ₹1" (₹1 Inter bold 96) beneath with ≥ 20 px margin to the perforated edge.

The scene lasts 12.44 s: every time in it is between 0 and 12.44.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s164.html`: one `<section class="vs-scene" id="s164" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
