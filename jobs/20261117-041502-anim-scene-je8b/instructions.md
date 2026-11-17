# Fix animated scene s002

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s002" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s002), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s001.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s002.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The old-and-new comparison reads clearly and lands on its words. Four things break the kit or the overlap rules: the old Guide is drawn cream instead of grey, the "पहले" pill is overlapped by the book, the pill says "now" in English, and the Hindi name of the Guide appears before its English name is typed.

1. Look and continuity: tint #old-book-stack grey (the storyboard says the old Guide is always grey). Apply the supporting/slate fill (#6f6a63 or #4b4f58 at about 0.35 opacity over the pages, slate cover) so old and new read as grey against red.
2. Overlap: the "पहले" pill sits behind the top of the open book (seen at 5.2 s to 8.6 s). Move the pill up so its bottom is 24 px above the book's top edge (about y 560), and put it in front of the book in the group order.
3. Kit language rule: change the green pill text "अब यहाँ · now" to "अब यहाँ" only, Noto Sans Devanagari 36 px white. The English "now" is a plain word, not a postal term.
4. Text order: at 6.9 s "डाकघर गाइड भाग I" is already fully shown while "Post Office Guide Part I" is still typing. Move the `fade` of the Hindi line from 6.52 s to 7.40 s, after the `type` finishes.
5. Arrow: the old → new arrow is short (about 190 px) and sits high. Redraw it from x 820 to x 1160 at y 680 (mid-height of both books), stroke 4 px with a rounded head, and keep the `draw` at 7.16 s.

The scene lasts 8.70 s: every time in it is between 0 and 8.70.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s002.html`: one `<section class="vs-scene" id="s002" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
