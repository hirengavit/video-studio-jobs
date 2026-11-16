# Fix animated scene s065

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s065" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s065), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s064.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s065.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The idea reads: the old panel shows the three grey minimums, then "Counter पर cash" + "सामान्य minimum" gets a slate strike and "नहीं" on "minimum नहीं" (8.8 s). The stills are deliberate reading holds. The problem is continuity: s064 and s066–s071 all carry the section label "PART 4 · BULK CASH (OLD GUIDE)", but this scene switches to "BULK CASH PREPAYMENT" and s066 switches it back. Also, this old/new split doesn't match the one in s066, so the panels jump at the cut.

Fixes:
1. Section label: set the frame's section slot to "PART 4 · BULK CASH (OLD GUIDE)", the same as s064 and s066, so the label doesn't flicker between scenes in one section (kit: the label changes only with the section).
2. NOW panel header: match s066's header. Use an envelope-cream (#f3ead6) header band at the top of the right panel with "NOW" (Inter bold, #9e1b1b) and "अब" under it (Noto Sans Devanagari 32 px, #6f6a63). Give the left panel the same band. Then the split looks identical when s066 cuts in.
3. "सामान्य minimum" pill: raise the text to at least 44 px and use ink #2b2622 rather than the light grey, so the slate strike at 8.18 s reads as a rejection on a phone. Keep "नहीं" at the same size beside it.

The scene lasts 9.52 s: every time in it is between 0 and 9.52. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s065.html`: one `<section class="vs-scene" id="s065" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
