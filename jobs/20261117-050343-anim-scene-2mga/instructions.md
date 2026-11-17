# Fix animated scene s112

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s112" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s112), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s111.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s112.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is exact, and card 1 is typed on "Articles of gold or silver". The point of the scene is "wholly or partly", and that appears as the smallest text on screen. It's a thin highlighted line squeezed onto the card's divider rule, while the card's lower half stays empty and the screen is otherwise still from 2.2 s to 9.6 s.

1. Move "पूरी या कुछ हिस्से में" below card 1's divider, into the empty lower half (about 40 px under the rule), and set it at 48 px, bold, in #8a5d00. Show it with `words` at 5.88 s, then `highlight` (color #fde9a6, opacity 1) at 6.6 s so the band sweeps behind the words after they land.
2. Keep the highlight band clear of the divider line and the card's edges (at least 12 px). It now overlaps the rule.
3. To give the long hold a purpose, `pulse` card 1's ring icon (amount 0.1) at 8.0 s, on "सोने या चाँदी की", once. Nothing else moves.
4. Make the kicker's subline "मतलब रोज़ से थोड़ा अलग" 44 px (it carries over from s111 and is below the readable size now).

The scene lasts 9.66 s: every time in it is between 0 and 9.66.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s112.html`: one `<section class="vs-scene" id="s112" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
