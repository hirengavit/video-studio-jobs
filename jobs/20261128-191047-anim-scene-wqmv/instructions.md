# Fix animated scene s100

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s100" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s100), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s099.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s100.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The zone B card (x 1060–1760, y 700–980) has to hold four lines and is too tight for them: "Post Office Savings Account" fills its whole width, the Hindi "डाकघर बचत खाता" looks smaller than 44 px, and the struck "5-year TD की तय दर" touches the bottom border. Grow the card as the lines arrive (CRAFT: grow the card): resize it to x 1000–1760, y 680–1040 at 0.58, over 0.4 s. Then lay the lines out as caption "maturity से पहले बंद" 44 px grey at y 730, "Post Office Savings Account" Inter bold 52 px at y 810, "डाकघर बचत खाता" 44 px (no smaller) at y 865, and "5-year TD की तय दर" 48 px at y 960.
2. At 0.58 the caption "maturity से पहले बंद" jumps from the card's centre to its top in a single frame. Move it with a 0.4 s ease, starting at 0.40, so it is in place before "Post Office Savings Account" starts tracking at 0.58.
3. The "जल्दी बंद करने" label above the bar ends right next to the "Maturity" label. Right-align it at x 1380 instead of on the "4 साल" mark, so there is at least 40 px between it and "Maturity" (it gets longer in s101).

The scene lasts 9.64 s: every time in it is between 0 and 9.64.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s100.html`: one `<section class="vs-scene" id="s100" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
