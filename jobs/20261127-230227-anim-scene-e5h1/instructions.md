# Fix animated scene s174

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s174" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s174), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s173.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s174.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

Both traps land on their words. "₹201 = हर बोतल" appears and is struck on "हर बोतल की नहीं" (0.5–1.1 s). "GST नहीं" is highlighted on "GST नहीं लगता" (3.1 s). "+ GST %" appears and is struck on "GST percentage … मत जोड़िए" (6.4–7.4 s). Slate is used for the wrong ideas and red stays the brand, as the kit asks. "Frozen" here is the intended calm hold.

1. Use s171's corrected table geometry and type sizes (Hindi 34 px, header y 240–370, rows 370–505 / 505–640 / 640–775), so this cut from s173 is seamless.
2. The wrong line "₹201 = हर बोतल" is struck only 0.58 s after it appears, before it can be read. Move the `strike` and the slate cross from 1.08 s to 1.5 s.
3. Give "+ GST %" the same slate cross as the first trap, drawn at 7.6 s about 30 px right of its strike, so both rejected ideas are marked the same way.
4. Raise both slate lines from 44/48 px to 48/52 px and move them up to y 925, so the struck text still reads on a phone.

The scene lasts 8.85 s: every time in it is between 0 and 8.85.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s174.html`: one `<section class="vs-scene" id="s174" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
