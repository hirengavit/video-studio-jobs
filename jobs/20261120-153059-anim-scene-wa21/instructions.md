# Fix animated scene s181

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s181" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s181), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s180.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s181.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam and the timing are good: slate chip + cross on "post office के बंद होने से नहीं", hands at 5 o'clock and "17:00" on "17:00", "16:30" on "16:30". But the labels crowd the "30 मिनट" block. "16:30" (centred at x 1200, y ~660) runs into the "30" of "30 मिनट" from x ~1250, and its underline at 7.6 cuts across the top of "30". That's an overlap a viewer will notice.

Fixes:
1. Move "16:30" above the strip: centre it at x 1200, baseline y 575, so it sits over the bracket's left end. That space is empty, and the Mail closing card starts at x ~1320. Keep the green dot on the strip at (1200, 600).
2. Draw the `underline` for "16:30" at 7.60 at its new place (y ~588, x 1140–1260), so it can't touch "30 मिनट".
3. Move "17:00" a little right and up (text-anchor start at x 1675, baseline y 650, beside the marker's foot) so it clears "मिनट" by at least 20 px.

The scene lasts 8.60 s: every time in it is between 0 and 8.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s181.html`: one `<section class="vs-scene" id="s181" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
