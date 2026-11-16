# Fix animated scene s090

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s090" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s090), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s089.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `myth-fact` (Myth vs fact): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: myth-fact: the myth (strike one word with words:, or the whole line dimmed), the Hindi wrong-reasoning line, the fact, the highlighted word, one or two reason lines (English + Hindi), the postmark word.

## What to change

The current file is `inputs/current/s090.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The section label reads "BULK CASH PREPAYMENT" while s089 says "PART 5 · REGISTERED NEWSPAPERS" and s091 "PART 5 · REGULATION 95"; the topic didn't change, so set this scene's label to "PART 5 · REGULATION 95" (as s091) so the label doesn't flip on every cut.
2. The content sits in the top 60% and the bottom third of the frame is empty: make the fact, myth and band rows about 120 px tall with 28 px gaps and centre the stack below the header, so the margins are even.
3. The "Licence cancel" postmark is a small dotted box and its "हो सकता है" line is under 32 px: make it a round postmark about 260 px across beside the band, "Licence cancel" at 44 px and "हो सकता है" at 34 px, brought in with `stamp` at 5.54.
4. The "समय पर न चुकाया" band shows (faded) at about 1.9 s, before the voice says it (2.5 s): move its entry to 2.5.

The scene lasts 8.53 s: every time in it is between 0 and 8.53. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s090.html`: one `<section class="vs-scene" id="s090" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
