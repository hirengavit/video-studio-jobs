# Fix animated scene s069

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s069" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s069), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s068.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s069.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s068 is clean, and the five office icons stagger in on "पाँच शहरों". The new elements are squeezed under the card at the bottom edge, though. The office icons are only about 80 px tall and the caption is small, while the big card keeps empty space. The grey note "उस समय के नाम" sits under the red 50 tile, far from the offices it belongs to. The voice says "उस समय के नाम card पर हैं", but no names are shown. City names aren't in the inputs, so don't invent any, but the note must at least point at the offices.

Fixes:
1. Scale the five `post-office-front` icons to about 130 px tall and lay them out evenly across x 100–1000 at y 820–950. Put the caption "5 शहरों के चुने हुए offices" (Noto Sans Devanagari 44 px, ink) directly beneath them, inside the content area (bottom ≤ 1000).
2. Move "उस समय के नाम" off the 50 tile. Place it as a grey (#6f6a63) 36 px note right under the office caption, in the same group as the row, entering at 4.4 s (on "उस समय के नाम").
3. To make room, raise the big old-Guide card's bottom edge to about y 780. Keep the 50 tile and the book inside it at the same scale.
4. Bring the `registration-envelope` chip "Ordinary registered letter mail" in at 6.62 s at x 1060–1820, y 820–950. Keep the English at 44 px or larger and the Hindi beneath it at 36 px.

The scene lasts 8.98 s: every time in it is between 0 and 8.98. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s069.html`: one `<section class="vs-scene" id="s069" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
