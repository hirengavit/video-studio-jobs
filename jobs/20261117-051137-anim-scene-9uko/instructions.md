# Fix animated scene s130

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s130" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s130), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s129.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s130.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s129 matches. The strike lands on "नहीं बढ़ता" and the highlight on "वापस" lands on "वापस जाता है". The check's "frozen" flag is just too strict: the row, the strike and the highlight all appear on their words. The real problem is the new "→ addressee / पाने वाला" row. It sits on action box 2's bottom border at about y 890–905, half outside the box, with the grey "पाने वाला" about 26 px. Text is touching a card edge, which the kit forbids.

1. Make action box 2 the taller y 680–960 from the s129 fix and move the "→ addressee" row inside it at y 920 (baseline), with 16 px clearance above the bottom border. Keep the row in the box's group.
2. Set "→ addressee" to 34 px Inter. Put "पाने वाला" either beside it or directly beneath it at 34 px 'Noto Sans Devanagari', in #6f6a63, never under 32 px.
3. Draw the slate strike (#4b4f58, 3 px, round caps) across the English "→ addressee" only. Don't run it over the Hindi translation, so the translation stays readable.
4. Keep the RLO pill pulse at 5.78 s ("RLO" is said at about 5.6 s) and the "वापस" highlight at 7.16 s. Don't add any other motion.

The scene lasts 8.63 s: every time in it is between 0 and 8.63.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s130.html`: one `<section class="vs-scene" id="s130" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
