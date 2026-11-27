# Fix animated scene s193

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s193" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s193), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s192.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `big-number` (Big number with postmark): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: big-number: the number (written in Indian grouping; it pops in, since the engine's count move formats en-US), the Hindi reading, the takeaway, 2 to 4 breakdown rows or none, the postmark date and the source.

## What to change

The current file is `inputs/current/s193.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam from s192 holds (same #partner frame), and the cut to #count at 5.16 is the planned shot change, so the "jump at 5.19" is intended. The stills (0.99–4.2 s, 7.16–8.64 s) are reading holds on the full name and the count, which is right for this kit. The count is popped on its word and "DNKs" / "देश भर में चल रहे" land on the voice. Two things a viewer would notice:

1. The Hindi translation of the full name never really shows. It is planned to `fade` at 4.32, but the frame at 3.7 s has only the English, and the scene cuts to #count at 5.16, so the Hindi is on screen for under a second. The kit says English first with the official translation beneath. Fade "केंद्रीय अप्रत्यक्ष कर और सीमा शुल्क बोर्ड" (Hindi 36, supporting grey, under the English at about y 900) at **2.4 s**, once the English `reveal` has finished, so it holds for about 2.7 s before the cut.
2. The `globe-parcel` in #count is about 280 px wide, so it looks like a small afterthought beside the 740 px stamp card. Set it to the planned box, x 1200–1700 with its base on y 760 (scale it up to about 1.7), so the two halves of the frame balance and the empty space on the right closes.

The scene lasts 9.19 s: every time in it is between 0 and 9.19.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s193.html`: one `<section class="vs-scene" id="s193" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
