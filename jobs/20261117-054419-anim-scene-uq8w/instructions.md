# Fix animated scene s208

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s208" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s208), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s207.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s208.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from the map to the new "तीन और facts" screen is right. The letter box stands on its panel's ground line, and the five chips slide in one by one on their words ("Post offices" about 5 s, "Mail offices" about 6.1 s, "Public places" about 7.3 s, "Mobile Post Offices" about 10.6 s, "Steamers" about 12.6 s). The layout is the problem:

1. The Hindi meaning on each chip is about 26 px and pushed to the chip's right end, far from its term. The kit wants the translation directly beneath the English term, at 32 px or more. In each chip, put the English term at 44 px bold (baseline chip top + 50) and the Hindi beneath it at 32 px #6f6a63 (baseline chip top + 92). Make the chips 120 px tall with 20 px gaps from y 290 (five chips end at about 970).
2. The label "पुराना Guide · letter box list" sits on top of the letter box's base and hides it. Move the label pill below the panel at (480, 990) or onto the panel's top edge above the box, at 34 px, so the box stands visibly on its ground line.
3. The heading "तीन और facts" with its 1·2·3 tabs is about 40 px and sits small in the top-left corner while the screen is otherwise empty for the first 1.9 s. Make the heading 56 px and the tabs 48 px pills, so the first second shows a clear new-section opener.

The scene lasts 14.76 s: every time in it is between 0 and 14.76.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s208.html`: one `<section class="vs-scene" id="s208" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
