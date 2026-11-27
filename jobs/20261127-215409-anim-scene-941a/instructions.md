# Fix animated scene s021

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s021" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s021), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s020.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `quote-card` (Quote card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: quote-card: the source label, the Georgia lines (2 to 5, one optional italic lead line), the postmark text (rule/section number and year), the highlighted phrase, the Hindi gist (always labelled as gist unless it is the official Hindi text); drop the postmark for a long quote.

## What to change

The current file is `inputs/current/s021.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The first half carries on with s020. The highlight on "or an officer exercising those powers" is timed to "या वो officer जो … powers", but it sweeps tiny inset text that a phone viewer can't read. The sub-shot to Reg. 104 on "अब e-Payment" (5.2 s) is right, but at 5.2 s the new card is still a small box in the top-left corner, growing in, while the rest of the frame is blank. The second still stretch (5.95–8.67 s) is a fine hold on the term.

1. Carry the s020 inset fix (definition at Georgia 36 px in the enlarged inset). The highlight on "or an officer exercising those powers" (0.66 s) and the underline on "in the Circle" (2.68 s) then land on readable words.
2. At the cut to #reg104 (4.74 s), show the full white card (x 120–1800, y 170–960) with its red top edge and label on the first frame, with no grow-in from a small box (`cut`, or a 0.3 s `fade` of the whole card). The `type` of "e-Payment" then follows at 5.22 s as planned.
3. Pull the `stamp` of the postmark "REG. 104" from 6.66 s to 6.2 s. That puts the postmark well before the scene ends, so it doesn't share the beat with the s022 line reveal.

The scene lasts 8.72 s: every time in it is between 0 and 8.72.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s021.html`: one `<section class="vs-scene" id="s021" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
