# Fix animated scene s025

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s025" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s025), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s024.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `myth-fact` (Myth vs fact): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: myth-fact: the myth (strike one word with words:, or the whole line dimmed), the Hindi wrong-reasoning line, the fact, the highlighted word, one or two reason lines (English + Hindi), the postmark word.

## What to change

The current file is `inputs/current/s025.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The myth card reads well and "insure" is highlighted on time. But the fact card is still fading in at 4.9 s and has not reached full strength when the scene cuts. The previous-scene frame on the s026 sheet shows "COD ≠ insurance" and the "सही" postmark still pale. So the answer the scene exists to give is never shown clearly. Also, the card sits in the top third and the lower 60% of the frame is empty for the first 4.4 s.

1. Move the answer to the word "गलत" (narration 3.4 s): `strike` the myth line and `pop` the slate cross at 3.5 s, `fade` the fact card in at 3.9 s (dur 0.4) and `stamp` the "सही" postmark at 4.4 s. Fact card and postmark must be at full opacity by 4.8 s and hold until the cut.
2. Centre the pair vertically: myth card y 260–500 and fact card y 560–800, both x 240–1680, so the empty lower half goes.
3. Close the uneven gaps in the myth line ("COD से सामान · insure · हो जाता है"). Keep the highlighted word inline with normal word spacing, about 0.3 em, not the wide gaps now on each side of "insure".
4. Keep the strike line inside the card's padding. It now starts at the card's left border; start it at the text's left edge.

The scene lasts 5.43 s: every time in it is between 0 and 5.43.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s025.html`: one `<section class="vs-scene" id="s025" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
