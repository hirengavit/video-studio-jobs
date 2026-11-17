# Fix animated scene s029

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s029" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s029), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s028.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `chapter-title` (Chapter title stamp): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: chapter-title: part number and total; English and Hindi title; subtitle; the icon in the stamp (post box, envelope, parcel, scales, building) and the small word beside the value.

## What to change

The current file is `inputs/current/s029.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The wipe into the Part 2 chapter title is clean, and REGULATION 88 stamps on its word (about 2.0). In shot #closed the envelope is too small: it is about 420 px wide, floating in a 1160 px sand panel. That makes the green "closed on all sides" outline a thin line rather than the point of the screen. The same envelope carries into s030, where the gap, gum blots, clip and staples must read on it.

1. Shot #closed envelope-article: change scale 1.6 to about 2.6 (one scale number), centred at (700, 590), so it fills most of the sand panel (x 120–1280, y 260–900) with even margins of about 80 px.
2. #seal-outline: redraw it to the new envelope edges, keeping the 8 px green stroke and `draw` at 7.72 (dur 0.7), so it still traces all four sides exactly.
3. Right card: move #c-line "सभी तरफ़ से" and #c-line2 "लगातार बंद" up about 40 px each, so the card's lower third isn't empty, or grow both to 60 px. Keep the timings.

The scene lasts 9.28 s: every time in it is between 0 and 9.28.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s029.html`: one `<section class="vs-scene" id="s029" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
