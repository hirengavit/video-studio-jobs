# Fix animated scene s150

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s150" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s150), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s149.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s150.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The voice ends on "Business Reply permit:" and the scene then holds. The "frozen" note means only that the changes here are small: the "bill मिलने के 7 दिन" line, its tick, and row 5 coming in. That is fine for a 3 s bridge.

1. "bill मिलने के 7 दिन" is already fully shown at 0.2 s, while the voice says it from 0.0 to about 1.4 s. Bring it in at 0.3 s with a short fade-up (0.3 s) so it lands on "bill", and keep the row 4 tick at 1.38 s.
2. The 7-day line is jammed under "> 500 copies" in the same cell, at about 26 px. Give row 4 two proper lines in the "संख्या / शर्त" column: "> 500 copies" at 40 px, then "bill मिलने के 7 दिन" at 32 px with a line height of about 1.3, using the taller rows set up in s148.
3. The row 5 term "Business Reply permit" comes in at about 2.5 s and is set smaller than the other row terms. Use the same 44 px term size and 32 px Hindi subline as the rows above it.

The scene lasts 4.14 s: every time in it is between 0 and 4.14. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s150.html`: one `<section class="vs-scene" id="s150" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
