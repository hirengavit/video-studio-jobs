# Fix animated scene s088

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s088" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s088), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s087.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s088.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The slate `strike` on "wax = अकेला authorised तरीका" never plays: the line is still unstruck at 4.7 s, and the check sees nothing move from 3.24 s to 6.22 s. A viewer is left reading the opposite of the rule. Make the strike run at 4.78 s in slate #4b4f58 (before the cut at 6.47 s), and `draw` a slate cross at the line's end at 5.30 s.
2. The line is small grey text floating under the chip with no container. Set it in ink #2b2622, Hindi 46, centred at y 900 as planned, so the struck claim reads on a phone.
3. After the cut to shot #cover (6.47 s), the left two-thirds stay empty until ~8 s. Start the `draw` of #paper at 6.60 s, right after the cut, and pop the term at 6.80 s, so the screen is anchored on "Insured letter".
4. The steps "मज़बूत cover" and "अच्छे से बंद" render as small grey text (~32 px). Set them in ink #2b2622 at Hindi 44, each with a small red numbered badge like s086's steps, at y 500 and y 600.

The scene lasts 11.50 s: every time in it is between 0 and 11.50.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s088.html`: one `<section class="vs-scene" id="s088" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
