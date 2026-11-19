# Fix animated scene s152

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s152" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s152), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s151.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s152.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is correct: row 3 greys out and row 4 slides in at 0.0 on "Domestic letter card". The row text builds with the voice, through "address side के top-left" and "Letter Card छपा हो" on 7.8. The scene's whole idea is *where* "Letter Card" is printed, but the picture that shows it is a 180 px icon with 18 px lettering. On a phone that is a grey blur, so the viewer has to rely on the words alone.

1. Add a larger detail of the card for this point. At 3.08, instead of the tiny icon's pop, pop a second, inline-grouped copy of the folded `letter-card` at scale 0.9 (about 360×180) in the empty row-5 slot at x 1400–1760, y 815–995. Join it to the row 4 icon with a thin grey leader line. (s153 must remove the detail at its 0.0, before row 5 slides in.)
2. Draw the yellow (#f2b705) outline box at 4.64 on the detail card's top-left corner (about 150×44 px), not on the small icon.
3. Type "LETTER CARD" at 6.92 inside that box at 26 px bold Inter, ink #2b2622. Keep the row 4 highlight on "Letter Card" at the same time.
4. Leave the small row icon as it is (scale 0.5), so row 4 matches rows 1–3.

The scene lasts 8.56 s: every time in it is between 0 and 8.56.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s152.html`: one `<section class="vs-scene" id="s152" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
