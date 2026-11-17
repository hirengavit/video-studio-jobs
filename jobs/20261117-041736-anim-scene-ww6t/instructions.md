# Fix animated scene s016

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s016" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s016), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s015.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s016.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is an exact carry-over from s015, and every line types on its word (निशान highlight 1.16, row 3 at 6.30, blade with slate cross at 9.96). The automatic check's "frozen" is wrong: the scene types and pops steadily, as intended. The problem is that row 2's second line and row 3's lines are too small and scattered to read on a phone.

1. Row 2 second line: "साफ़ निशान छोड़े बिना" and "सामान निकाला न जा सके" render at about 30 px, below the kit's 32 px minimum for Hindi. Raise both to 38 px, and raise row 2's first line ("कसकर बंद हो", "सामान न गिरे") to 44 px so the row holds two clear lines in its 150 px.
2. Row 2: "सामान निकाला न जा सके" floats at about x 1000 and lines up with nothing. Start it right after "छोड़े बिना" on the same baseline (about 20 px gap), so the condition reads as one sentence: "साफ़ निशान छोड़े बिना सामान निकाला न जा सके".
3. Row 3: raise "खुला नुकीला किनारा" to 44 px. Raise "या बिना ढका धारदार औज़ार" from about 30 px grey to 38 px in ink (#2b2622), not the supporting grey: it is half of the condition, not a side note.
4. Row 3 blade icon (x about 1620): scale it up about 1.4× so it is the same size as the press-arrows and box icons in rows 1–2, and keep the slate cross on the blade.

The scene lasts 10.42 s: every time in it is between 0 and 10.42.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s016.html`: one `<section class="vs-scene" id="s016" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
