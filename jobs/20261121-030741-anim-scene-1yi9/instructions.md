# Fix animated scene s113

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s113" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s113), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s112.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s113.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut to #hp at 3.2 s matches "Head Postman" (3.4 s) and the condition pill fills on "उपलब्ध" as it should. The still stretches are reading holds, so they're fine. The real problem is the layout: from 3.2 s to the end, the Head Postman chip, the arrow and the card sit in one thin row in the upper third, and the pill sits small under it. Most of the content area below the header is empty, and the card's Hindi line is small on a phone.

1. Scale the whole #hp group (chip, arrow, card, condition pill) by about 1.4 and centre it in the content area. Put the chip/arrow/card row at about y 470 and the pill at about y 720, so the group fills x 160–1760 with even margins.
2. Make the text in "Attendants / के काम की जाँच" at least 56 px, and the pill text "शर्त: उपलब्ध हो" at least 52 px. Make the card and pill wider to fit, so nothing touches an edge.
3. Move the arrow and the "attendants के काम की जाँच" card from about 4.5 s to 5.7 s, so the card lands on the spoken word "attendants" (5.8 s) and doesn't come before it.

The scene lasts 12.39 s: every time in it is between 0 and 12.39.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s113.html`: one `<section class="vs-scene" id="s113" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
