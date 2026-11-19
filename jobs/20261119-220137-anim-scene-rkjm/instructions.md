# Fix animated scene s167

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s167" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s167), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s166.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s167.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s166 is clean. Row 3 and its tick land on "Card खुला भेजिए", and row 4 with its two crossed icons on "मोड़िए नहीं … cover में मत रखिए". Row 5 and the "initials" highlight come on "छपे stamp पर initials" (6.3–7.9), and the green tick lands on "छूट" at about 9.9. The timing is good. The problem is size: the rows use the top half of the right panel and the icons are tiny, so on a phone the crossed folded card and envelope don't read.

1. Right panel rows: spread them over the full panel height (row 3 y 420–560, row 4 y 580–790, row 5 y 810–980), matching the larger left rows from the s166 fix.
2. Row 4: scale the folded-card and the envelope icons about 2× (about 130 px each), with the slate × 40 px at each one's lower-right corner. Set "न मोड़ें, न cover में" to 44 px on one line.
3. Row 5: scale the `perforated-initials-stamp` about 2× (about 110 px). Set "छपे stamp पर initials के छोटे छेद: छूट" to 40 px on two lines with 1.3 line height, keeping the green tick at the right.
4. Row 3: set "खुला भेजें" to 48 px.

The scene lasts 10.41 s: every time in it is between 0 and 10.41.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s167.html`: one `<section class="vs-scene" id="s167" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
