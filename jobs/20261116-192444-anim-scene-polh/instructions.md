# Fix animated scene s101

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s101" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s101), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s100.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s101.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s100 is clean. The card travelling back to the firm is the right literal picture, and the cut to the charge card at 7.94 s comes where the voice moves on. Two places break the kit's language rule (postal terms in English with their translation beneath), and the rupee floats.

1. Under "Permit holder" (the firm label from 2.32 s), add its Hindi translation "परमिट धारक" in the supporting grey #6f6a63, at least 32 px. Put it where "संस्था" was, so the label stays a term pair like every other icon label.
2. "= Addressee" (3.38 s) is English only and small. Make it a term pair: "= Addressee" at about 40 px with "प्राप्तकर्ता" beneath at 32 px in supporting grey.
3. The `rupee-cash` (4.52 s) hangs in mid-air under the arrow, between the firm and the letter-box. Set it on the base of the Permit holder card (bottom-right corner of the firm box, its base on the box's bottom edge), so it reads as the firm paying.
4. In #charge, the heading "हर लौटे जवाब पर" appears at 7.94 s, before its words (about 8.6 s). Move its entrance to 8.6 s.

The scene lasts 12.70 s: every time in it is between 0 and 12.70. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s101.html`: one `<section class="vs-scene" id="s101" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
