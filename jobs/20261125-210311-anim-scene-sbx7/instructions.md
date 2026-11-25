# Fix animated scene s203

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s203" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s203), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s202.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s203.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s202 is clean (same card, same rows). "₹5,000 → ₹80" builds in two steps on the spoken numbers (₹80 by 2.2 s), "₹20,000 → ₹235" lands by 4.2 s, and the tick follows. Row 4's pill swaps "· POD" → "· POD ₹10" on "₹10" (about 9.5 s). Problems: the small two-line fee pill from s202 is still on screen for the whole scene. At 6.3 s, row 4's empty container sits on screen with no words for about 1.5 s, before "दो प्रयास" arrives. The pill also starts with a stray "·" ("· POD"), which reads as a typo.

1. Apply s202's fix here too: row 2's "₹6,500 से ऊपर" pill becomes one line of at least 40 px, and rows are 96 px tall with 40–44 px pill text (the card must match s202 at the seam).
2. Row 4: bring the "दो प्रयास" label in with its container at 6.6 s (on "Delivery के"), so the row never shows empty. Bring the pill in at 8.8 s on "domestic POD".
3. Row 4 pill: remove the leading "·", so it reads "POD" and then swaps to "POD ₹10" on "₹10".

The scene lasts 10.30 s: every time in it is between 0 and 10.30.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s203.html`: one `<section class="vs-scene" id="s203" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
