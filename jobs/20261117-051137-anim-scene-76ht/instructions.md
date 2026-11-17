# Fix animated scene s133

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s133" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s133), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s132.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s133.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The recap beats sit on their words (branch 1 at 0.0 s, the "sender को वापस" underline at 1.98 s, branch 2 at 3.92 s, "pins निकालिए" at 5.02 s, RLO at 6.72 s). The seam breaks, though. s132 ends with all six boxes outlined in yellow, and this scene's first frame has only branch 1 yellow, so five borders snap back to white on the cut. A viewer sees it as a flicker.

1. Open with all six box borders yellow (#f2b705), exactly as s132 ends. Then at 0.00 s `color` the five boxes other than branch 1's condition back to their normal border over 0.4 s, so the focus narrows onto branch 1 instead of jumping.
2. When branch 2's condition turns yellow at 3.92 s, return branch 1's condition border to normal in the same 0.4 s move, so only the branch being said is yellow. That's one highlight meaning at a time. Keep the "sender को तुरंत वापस" underline as the one annotation, or fade it to #6f6a63 when the second underline draws at 5.02 s.
3. Use the same box sizes and text sizes as the fixed s129–s132 (Hindi lines at 32 px or more, the taller action boxes) so nothing jumps at the seam.

The scene lasts 8.78 s: every time in it is between 0 and 8.78.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s133.html`: one `<section class="vs-scene" id="s133" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
