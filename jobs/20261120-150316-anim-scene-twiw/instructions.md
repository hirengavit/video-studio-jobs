# Fix animated scene s094

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s094" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s094), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s093.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s094.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The green chip "Post Office के official labels ✓" pops at 4.8 s, before "Post Office" is said (about 5.7 s), which breaks the kit's "nothing before the voice reaches it". Move its `pop` to 5.8 s.
2. The chip is small and wedged into the title row, and "अलग बात" sits under it at about 30 px, almost touching the window envelope's top edge (9.4 s frame). Put "अलग बात" on the title row instead, to the chip's left (x about 900–1220, y as the title, grey 40 px, right-aligned). Set the chip text to 40 px and give the chip 14 px of padding inside x 1260–1780, y 160–290.
3. Time "अलग बात" to the word: `fade` at 9.1 s ("अलग"), not 8.82 s.
4. The title changes from "ये envelopes नहीं" to "रोक" in a hard jump at the cut. Open with the old title and `swap` it to "Insured letter: रोक" at 0.3 s, so the change is seen, not a glitch.

The scene lasts 11.69 s: every time in it is between 0 and 11.69.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s094.html`: one `<section class="vs-scene" id="s094" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
