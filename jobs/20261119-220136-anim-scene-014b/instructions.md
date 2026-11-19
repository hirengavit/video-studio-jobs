# Fix animated scene s099

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s099" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s099), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s098.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s099.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The timing works: row 2 on "Service stamp", the underline on "सिर्फ authorised", the band moving to row 3 at ~4.3, the tick on "मंज़ूर", and line 2 on "अगर देश और value". The still stretches are reading holds, so they're intended. The problems are sizes.

1. Row 3, line 2 "अगर देश और value पढ़े जा सकें" renders at ~28 px, under the kit's 32 px minimum for Hindi. Set it to 38 px as the storyboard asks, give it a 1.3 line height under line 1, and keep it inside the highlight band (grow row 3's band by ~20 px if needed).
2. Row 3 icon `perforated-initials-stamp`: it's washed out in pale yellow, so the punched initials can't be seen. Draw it at full opacity, ~130 px, so the holes read. The holes are what this row is about.
3. Row 1 icon: it's still a blank outlined square that reads as a checkbox. Use the full `postage-stamp` look at ~130 px (same fix as s098).
4. Row 2 SERVICE stamp icon: the "SERVICE" lettering is unreadable at this size. Scale it to ~130 px, like the other icons.

The scene lasts 10.72 s: every time in it is between 0 and 10.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s099.html`: one `<section class="vs-scene" id="s099" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
