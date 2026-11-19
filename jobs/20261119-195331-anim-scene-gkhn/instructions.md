# Fix animated scene s137

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s137" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s137), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s136.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s137.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s136 is clean (same equation held), the slate strike lands on "नहीं देने", the green Credit chip arrives on "credit में गिना" and the cut to `#reg2` comes on "Registration envelope". The stills flagged by the check are the reading holds after each beat, and they're intended. One real problem: the Credit chip is too small to read and covers the envelope it is crediting.

1. `#sum` Credit chip: "जमा" renders about 26–28 px, under the kit's 32 px minimum, and can't be read on a phone. Set the Hindi to 36 px (line height 1.3) and make the chip about 300 × 110 px so "Credit" (44 px) and "जमा" both fit with padding.
2. Move the Credit chip off the envelope's face to just below the envelope, between the envelope and its caption "Domestic embossed envelope" (centred at about x 380, y 640; push the caption down by about 60 px). Right now it covers the envelope drawing and looks pasted over it. Keep `pop` at 4.62, with "जमा" fading 0.5 s later.
3. Slate line "पूरे ₹10 दोबारा": raise it from 44 px to 52 px and centre it under the whole equation (x 960) instead of under the stamps, so the struck idea reads as being about the sum.

The scene lasts 10.59 s: every time in it is between 0 and 10.59.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s137.html`: one `<section class="vs-scene" id="s137" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
