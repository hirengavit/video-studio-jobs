# Fix animated scene s008

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s008" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s008), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s007.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s008.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The postcard, the size brackets, "तय size", "आयताकार card" and "खुला संदेश" (with its connector to the message lines) all land on their words. The stills at 2.5–4.0 and 6.24–8.49 are reading holds, so they are intended. Problems: the postcard misses its planned lettering, the "बाहर से पहचान" tag is tucked into a corner, and the icon strip shifts at the cut from s007.

1. `service-postcard`: add the planned lettering "POST CARD" (Inter bold, about 40 px, ink) at the top left of the right half, and "50 p" in white on the stamp's red band. The storyboard asks for both in every postcard scene, and they are what makes the card recognisable "बाहर से".
2. The "बाहर से पहचान" tag sits squeezed at the top right, beside the series pill. Move it to a sand chip centred at about (960, 960), below the card's bottom bracket (shift the card up 20 px if needed). Make it at least 44 px and keep the fade at 6.38.
3. Icon strip continuity: in s007 the strip sits at about y 300–440 and is slightly larger; here it jumps up to about y 250–360. Use the same strip position and scale as s007 so the cut doesn't make the strip hop.
4. Give "आयताकार card" the same sand chip as "तय size" and "खुला संदेश" (it is plain text now), so the three tags read as one set.
5. Term colour: "Postcard" is ink but s007's "Letter Card" is postal red #9e1b1b. Set this term to #9e1b1b to match.

The scene lasts 8.54 s: every time in it is between 0 and 8.54.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s008.html`: one `<section class="vs-scene" id="s008" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
