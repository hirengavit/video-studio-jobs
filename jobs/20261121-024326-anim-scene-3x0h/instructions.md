# Fix animated scene s039

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s039" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s039), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s038.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s039.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The three numbered cards and the outlet drawing on card 1 work, and they land on "तीन और रास्ते" and "franchisee outlet". The problem is the opening. For the first 2.3 s, while the voice says "Letter box और counter के अलावा", the screen is blank except a tiny box + counter pair (about 60 px) under the series pill. That is close to a blank screen, and the hook is weak.

1. Open on a large anchor: a centred group with the letter-box and counter icons at about 300 px tall and "और" between them, plus "के अलावा" in 56 px Hindi beneath, all visible from 0. At 2.2 `out` that group {dur: 0.35}, and `fade` the small corner pair in at 2.34. A new element is needed because `out` can't come back.
2. Move the small corner pair down and left so it doesn't crowd the series pill: put it at the header's right end on the header baseline (about x 1600, y 300) and leave 24 px above it.
3. The line "administrative instructions में तय items" is about 36–40 px and grey. Set it to 44 px, ink #2b2622 (supporting grey is too faint for the key fact), wrapped in two lines in the card's width at y ≈ 800 and 860, words in from 8.02.
4. Under "Franchisee outlet", add its Hindi translation in a smaller, lighter line (32–36 px, supporting colour) at 7.3, as the kit asks for postal terms.

The scene lasts 12.86 s: every time in it is between 0 and 12.86.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s039.html`: one `<section class="vs-scene" id="s039" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
