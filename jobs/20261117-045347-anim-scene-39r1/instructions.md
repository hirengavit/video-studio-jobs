# Fix animated scene s078

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s078" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s078), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s077.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s078.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The air-only versus fully-banned pair is clear: the plane plus slate cross on "हवाई रास्ते से मना", then the letter box with its cross on "पूरी तरह मना". Both crosses come after their words. The old/new beat is too quick, though. "नया" fades in at 9.12 and the shot leaves at 9.70, so it's on screen for about 0.6 s and many viewers won't see it. The #os card then shows only its tag until 11.34.

1. Bring "पुराना" in at 7.95 and "नया" at 8.75. The voice says "पुराना और नया" between 7.9 and 9.7, so each label gets about a second.
2. Move the #os shot from 9.70 to 9.95: shots [..,[7.94,'#on'],[9.95,'#os']]. Also move the `stamp` tag "पुराना Guide" earlier, to 10.0, on "पुराने Guide", so the big card arrives with its first item.
3. Keep "Osmic acid" `type` at 11.34 and "खास packing" at 12.14. These match the voice.

The scene lasts 13.88 s: every time in it is between 0 and 13.88.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s078.html`: one `<section class="vs-scene" id="s078" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
