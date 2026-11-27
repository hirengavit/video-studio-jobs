# Fix animated scene s135

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s135" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s135), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s134.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s135.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The "₹2" swap lands on its word at 0 s with a yellow highlight, which is correct. The cut to B at 3.5 s follows "Insured item … sender". "free · मुफ़्त" lands at about 4.4 s and the POD greys with a slate cross at about 6 s on "न पहुँचे". The certificate arrives at 7.9 s, near "delivery certificate". Problems: in B every element sits in the top half (y 280–660), so the bottom 40% of the frame is empty and the pieces are small for a phone. The grey "माँगने पर" on the certificate is about 26 px.
1. B: scale the envelope / pod-card / certificate row by 1.25 around its centre and place it at y 300–780 (envelope x 100–620, pod-card x 700–1200, certificate x 1300–1820), with labels and pills below at y 820–940.
2. Certificate card: "माँगने पर" at 36 px in supporting #6f6a63 at full opacity, and "वितरण प्रमाणपत्र" at 40 px.
3. "न पहुँचे" caption: 38 px, placed under the pill with a 16 px gap so it never touches it.
4. The ₹2 swap: make sure the old "scheduled fee" text has fully left before "₹2" appears (swap with no overlap; about 0.15 s out, then in), because frame 0.2 shows both at once.

The scene lasts 9.70 s: every time in it is between 0 and 9.70.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s135.html`: one `<section class="vs-scene" id="s135" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
