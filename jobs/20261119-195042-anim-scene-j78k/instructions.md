# Fix animated scene s136

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s136" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s136), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s135.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s136.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade suits a new screen, and the carried pill "35 g letter = ₹10" anchors the first frame. The equation (envelope ₹5 + valid stamps ₹5 = ₹10) builds on its words and ends on a strong ₹10 chip. Two readability and kit problems need fixing:

1. The "छपा" caption is tiny (about 30 px) and sits on the embossed circle, half under the red ₹5 tag, so it can't be read on a phone. Move it outside the envelope, directly under the right edge of the ₹5 tag (about x 600, y 470), in Noto Sans Devanagari 40 px #6f6a63.
2. "Domestic embossed envelope" has no Hindi under it, but the kit puts postal terms in English first with the translation beneath. Add "देशी छपे टिकट वाला लिफ़ाफ़ा" (Noto Sans Devanagari 36 px, #6f6a63) on the line under the term, fading in 0.5 s after it, the same treatment as "valid stamps" / "मान्य टिकट".
3. The equation row is a little small for the space and leaves about 200 px empty at the bottom. Scale the row group up about 1.1× around its centre, or move it down 40 px, keeping "=" and the ₹10 chip inside x ≤ 1800.

The scene lasts 10.46 s: every time in it is between 0 and 10.46.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s136.html`: one `<section class="vs-scene" id="s136" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
