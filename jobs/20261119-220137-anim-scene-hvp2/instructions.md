# Fix animated scene s239

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s239" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s239), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s238.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s239.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

"पूरा चिपका हुआ" with the green tick lands on its words. Row A's "prior permission" is highlighted on the spoken phrase, and the slate-struck "Refund" pill matches the kit's wrong colour. Two problems. The voice says unused stamps are *normally* not refunded, but the screen shows only a struck "Refund", which drops a qualifier an exam cares about. The text in the two lower boxes is about 36 px English and 34 px Hindi, which is small on a phone. The badge and dots also differ from s233–s235.

1. In row B, add "सामान्यतः" (grey #6f6a63, 40 px) just before the "Refund" pill, fading in at 9.30 on "normally". Then the pill pops and is struck at 10.12 as planned.
2. Raise row A's and row B's text to 44 px (Hindi line height 1.3), and raise the "Refund" pill to 44 px text with a matching pill height. The boxes have room at y 760–980.
3. Badge continuity: replace the squat "4 · चौथी" pill badge with the storyboard's tall red perforated stamp card at x100–460, y200–620, with a white "4" (about 200 px) above "चौथी" (44 px), as in s233–s235.
4. Progress dots: put the seven dots at y 700, x 140–420. Only dot 4 is yellow #f2b705; the others use s233–s235's pale grey (no red finished dots).

The scene lasts 11.38 s: every time in it is between 0 and 11.38.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s239.html`: one `<section class="vs-scene" id="s239" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
