# Fix animated scene s071

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s071" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s071), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s070.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s071.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The bottom chips arrive ahead of the voice. "RMS offices" is said at 6.5 but is on screen by 5.4. "Night Post Offices" starts at about 7.8 ("और"), but its chip is up at 7.22. The chips also hang loose under the cards, about 36 px text at the frame's bottom edge, with nothing saying they are the places where these articles are accepted. Together with the two rows, the chip and the strike, the screen holds about eight items, more than the kit's five. The slate strike on "late fee" inside "बिना late fee" is a double negative: slate means wrong or rejected, so a viewer may think the chip itself is wrong.

1. Retime the bottom chips to their words: "RMS offices" at 6.4 s and "Night Post Offices" at 7.9 s. Keep "Press Sorting Offices" at 3.3 s.
2. Lower the load once row 2 is the focus: at 3.0 s, fade row 1 (Letters, chips, "पहले से") to the supporting colour #6f6a63 at about 50% opacity, as the kit's "fade earlier points" rule says.
3. Tie the chips to row 2: put them inside a cream #f3ead6 panel directly under row 2, with a small ink pin icon at its left, so they read as "where". Enlarge the chip text to 44 px or more and keep about 60 px of bottom margin.
4. Drop the slate strike on "late fee". Instead, show "बिना late fee" as a green #2e7d4f chip with a small tick at 1.34 s, because this is an allowed rule. Green is the kit's colour for allowed and passed rules.

The scene lasts 8.94 s: every time in it is between 0 and 8.94.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s071.html`: one `<section class="vs-scene" id="s071" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
