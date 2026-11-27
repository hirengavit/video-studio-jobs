# Fix animated scene s107

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s107" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s107), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s106.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s107.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s106 is exact. Badge 1 pulses at 0 s and badge 2 at 6.31 s. "online fee" lands on "online pay" and ", appointment" on "appointment" (11.7 s). The stills are reading holds on long spoken steps, which is correct for this style. The flaw: row 1 already shows its full text in grey, but `type` first wipes that text away and then types it again letter by letter (at 3.0 s it reads "Passport Seva regist"). Row 2 does the same at 7.66 s, falling back to "online fee" before ", appointment" comes back. Text that disappears and returns reads like a glitch.

1. Row 1: replace `type` at 1.07 s with `color` on the row's text, `{to: '#2b2622', dur: 0.4}`, so the grey line turns ink on "registration" instead of being erased and retyped.
2. Row 2: replace both `type` lines with one `color` `{to: '#2b2622', dur: 0.4}` at 7.66 s, plus `highlight` `{words: 'appointment', color: '#fde9a6'}` at 11.72 s, so the word still lands on its spoken word without the text being cut back.
3. Make the same subtitle fix as s106 ("क्रम से" 40 px on the title's baseline, to the right of the title), so the seam stays identical.

The scene lasts 13.52 s: every time in it is between 0 and 13.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s107.html`: one `<section class="vs-scene" id="s107" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
