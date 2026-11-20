# Fix animated scene s218

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s218" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s218), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s217.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s218.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade from the recap card into the counter window works as a close (new place, new section label "CLOSE"). The reveals land on their words: the parcel at 1.58 on "कोई parcel", the ring at 4.52 on "packing", the arrow and route at 6.42 / 6.76 on "रास्ते". The still stretches the check notes (0.25–1.49, 1.74–4.73, 4.98–6.97) are holds between the three spoken beats, so they're intended. The parcel rests on the ledge, which is right. Problems come in the last beat:

1. The van floats: the dashed route (y 620) runs through the middle of the van's body instead of under its wheels, so the van hangs in the air above the line. Move the van outline down so its wheel bottoms sit on the route line (the van's base at y 620, roughly +40 px down from where it is now), or lower the route to the wheel line and end it under the van's rear wheel.
2. Two hand-drawn annotations on one screen (the yellow ring and the arrow) go against the kit's "at most one hand-drawn annotation per screen", and red is the brand colour, not a signal. Draw the arrow as a plain ink line instead (class `ink-line`, stroke #2b2622, 3 px, round caps) so it reads as part of the route drawing and the ring stays the one annotation.
3. The arrow starts inside the ring and cuts across the window frame and glass. Start it at the ring's right edge (about x 1015, y 700, at the ledge height), and run it out over the window's right side to meet the start of the route at x 1180, y 620, so it doesn't cross the parcel or the glazing bars.
4. The van is small next to the 1.5× counter (about 200 px wide against a 1020 px window), so the end goal reads weakly on a phone. Scale the van group by 1.4 around its base (x 1560–1840, keeping its wheels on the route) so it reads as the destination during the hold to the end.

The scene lasts 7.52 s: every time in it is between 0 and 7.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s218.html`: one `<section class="vs-scene" id="s218" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
