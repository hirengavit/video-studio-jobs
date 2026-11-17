# Fix animated scene s075

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s075" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s075), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s074.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `myth-fact` (Myth vs fact): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: myth-fact: the myth (strike one word with words:, or the whole line dimmed), the Hindi wrong-reasoning line, the fact, the highlighted word, one or two reason lines (English + Hindi), the postmark word.

## What to change

The current file is `inputs/current/s075.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The myth-fact screen reads well: the slate MYTH pill, a strike plus a slate cross, then the green FACT card. But the answer to the "biggest trap" is cut away almost at once. The fact card pops at 6.22 and the shot switches to #dg at 7.12, so "मनाही बनी रहती है" is on screen for only about 0.9 s. That's far under the kit's 3 s reading hold, on the most important line of the part.

1. Move the shot change from 7.12 to 7.75: shots [[0,'#mf'],[7.75,'#dg']]. Move `type` "Dangerous goods" to 7.8, on the word, and `fade` "खतरनाक सामान" to 8.3. This gives the fact card about 1.5 s plus its build.
2. Bring the fact card in on "नहीं बन जाती" itself: move the `strike` and slate cross to 5.6, and the green "FACT · सही" `pop` with its `type` "मनाही बनी रहती है" to 5.9. With fix 1, the fact holds for about 1.9 s.
3. Start the myth line's `type` at 2.75 instead of 2.06, so "अच्छी packing" isn't on screen before the voice says it (2.8). The kit's don't-list forbids showing anything before the voice reaches it.
4. Keep the "EXAM TRAP" `stamp` at 1.62. It lands on "trap" and gives the empty myth card a first item.

The scene lasts 8.76 s: every time in it is between 0 and 8.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s075.html`: one `<section class="vs-scene" id="s075" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
