# Fix animated scene s136

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s136" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s136), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s135.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `mail-flow` (Mail flow): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: mail-flow: 3 to 5 stops with their icons, English and Hindi labels; which stop is highlighted; the bottom note or drop it..

## What to change

The current file is `inputs/current/s136.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The wipe is a clean change of topic. The route with its stops is a new picture for this part, and the stops land on "seller" and "Department of Posts". "= logistics provider" lands on its words. Stop 3 is left for s137. Two problems: the kit's English-first, Hindi-beneath rule is missed for the postal term "Department of Posts", and the grey labels are small for a phone.

1. Under #s2-en "Department of Posts", add the Hindi term "डाक विभाग" at 40 px in grey #6f6a63, `fade` at 9.20 (just after the name, before "logistics provider"). Move #s2-hi "= logistics provider" down one line to 44 px, keeping 1.3 line spacing (labels y 720–900).
2. #s1-lab "pickup की request, online" and #title-hi "ONDC का Click and Book model": raise them from about 32 px to 40 px, as planned. Keep #s1-lab within x 200–560 so it doesn't run under the arrow.
3. #arrow12: start `draw` at 8.10 and `pop` #stop2 at 8.40, so the arrow leads and the van arrives after it (cause before effect), still landing on "Department of Posts" (about 8.5).

The scene lasts 12.32 s: every time in it is between 0 and 12.32.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s136.html`: one `<section class="vs-scene" id="s136" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
