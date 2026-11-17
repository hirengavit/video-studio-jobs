# Fix animated scene s110

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s110" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s110), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s109.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s110.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam is exact, and each row pops on its word with steady 1.5–2 s spacing. By 8.4 s, though, the screen holds the book panel, six list rows, the "Inland डाक" row and the green stamp. That breaks the kit's limit of five items per screen, which says to fade earlier points to the supporting colour when a screen gets busy. The last row is also squeezed against the list.

1. At 6.64 s, as "Inland डाक" arrives, `color` the text of the six list rows to #6f6a63 (dur 0.4) and their icons likewise, so the inland verdict is the only strong element. Don't remove any row.
2. Give the "Inland डाक" row its own space: set it 28 px lower than now, with a 24 px gap under "Currency / bank notes", and make it the same height as the other rows. Use a 44 px label, filled with #f3ead6, so it reads as a verdict strip rather than a seventh row.
3. Put the green "सिर्फ़ insured" stamp inside that strip with at least 20 px clear of its right edge and the "Inland डाक" text. Keep the text in the stamp at 40 px or more.

The scene lasts 10.02 s: every time in it is between 0 and 10.02.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s110.html`: one `<section class="vs-scene" id="s110" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
