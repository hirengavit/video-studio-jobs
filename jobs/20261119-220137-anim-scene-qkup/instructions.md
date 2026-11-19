# Fix animated scene s214

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s214" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s214), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s213.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s214.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s213 matches exactly. Row 5 MARKED DUE fades in at 1.62, and the tick and the yellow highlight on "Refused" at 6.08 land right after the voice says "Refused" (5.9). The card holds to the wipe into Part 10, as planned.

1. Row 5 pill "दें · मना करें तो Refused": its Hindi is shrunk to about 30 px, below the kit's 32 px floor ("do not shrink Hindi to make a card fit"). Widen the pill leftward to about x 1000–1700 and set its text to the shared pill size (at least 40 px; Hindi in Noto Sans Devanagari).
2. Row 5 pill timing: pop the pill with "दें" at 2.40, then reveal "· मना करें तो Refused" as words from 3.80 (on "मना करे तो"). Right now "मना करें तो Refused" is on screen about 1.5 s before it is spoken. Keep the tick and highlight at 6.08.
3. Rows 1–4: keep the pill sizes and positions exactly as in s213 (including the fixed, wider row 4 pill), so the cut from s213 doesn't jump.

The scene lasts 7.36 s: every time in it is between 0 and 7.36.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s214.html`: one `<section class="vs-scene" id="s214" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
