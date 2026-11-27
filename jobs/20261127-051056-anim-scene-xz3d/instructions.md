# Fix animated scene s096

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s096" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s096), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s095.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `step-list` (Step list): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: step-list: 3 to 4 steps (bilingual screens hold fewer); the closing chip (a rate with its quarter, a fee, a time limit) or drop it; move the highlight to the key word, written as its own text so the band fits.

## What to change

The current file is `inputs/current/s096.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s095 is exact. The three chips pop on "registration", "insurance" and "paid POD". The cut to #exam lands on "Exam angle", and row 1 slides in on "Article number" with "13 alphanumeric" highlighted. Row 1 is the key fact the screen notes give for this point (13 characters · letters + digits). The flagged stills are reading holds; the empty rows are planned to fill in s097–s098. The bottom strip is the weak spot. "→ साबित नहीं:" and the three chips render at about 28 px, well under the kit's minimum (Hindi ≥ 36 px, English terms ≥ 48 px, nothing under 44 px). On a phone these three key words won't read.

1. Strip: set "SMS आ गया…" and "→ साबित नहीं:" to 44 px. Put the three slate-outlined chips on a second line inside the strip (y 880–950) with labels "Registration", "Insurance" and "paid POD" in Inter 44 bold. Size the chips at about 300×76 at x 300/660/1020, grow the strip to y 740–990 so the text has room, and keep each chip's `pop` time.
2. Strip: the chips mean "not proven", so keep them slate-outlined and add one small slate cross after "साबित नहीं:" as the screen's single annotation (no red), so the meaning reads at a glance.
3. #exam: move the "13 alphanumeric" highlight from 9.22 to 9.60, so the band sweeps when "13 alphanumeric" is spoken, not before.

The scene lasts 12.54 s: every time in it is between 0 and 12.54.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s096.html`: one `<section class="vs-scene" id="s096" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
