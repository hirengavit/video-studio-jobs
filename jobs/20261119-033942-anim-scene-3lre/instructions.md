# Fix animated scene s184

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s184" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s184), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s183.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s184.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The collapse of rows II–IV, the seven tabs on "7 sections" (1.14, voice about 1.5), "Control" at 3.08, and the reference line at 8.16 all land on their words, and the seam matches s183. The fixes are about readability:
1. "नियंत्रण" under "Control" in tab 1 is about 30 px, below the 32 px minimum for Hindi. Make the tabs taller (row 560–800, each about 150 wide) and set "Control" to 44 px and "नियंत्रण" to 34 px, with 1.3 line height and clear of the tab edge.
2. The "7 sections" tag is about 40 px. Set it to 44 px. Keep its pill inside the same group as the text.
3. "reference पहचानने में मदद" is about 38 px grey and sits right on the collapsed grey lines. Set it to 40 px, and move it to y ≈ 800 with at least 24 px of space above the thin lines (or move the thin lines down to 880–980).
4. Match Part I's description size in the header row ("inland postal rules और regulations") to the 44 px used in s182 and s183.

The scene lasts 10.48 s: every time in it is between 0 and 10.48.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s184.html`: one `<section class="vs-scene" id="s184" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
