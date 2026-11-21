# Fix animated scene s096

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s096" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s096), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s095.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s096.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The 2×2 grid of four cases pops on "चार cases", and card 1 fills on "ढीले ordinary stamps" with "उखड़ गए" on its word. The cut to #c1 at 7.3 s is the problem. The new strip shows one small white step card (about 350×360 px) at the far left of a large empty envelope panel. Its text, "किस article के?" (about 30 px) and "पहले: article ढूँढना" (about 22 px), is below the 32 px Hindi floor and unreadable on a phone. For the scene's last 2–3 s the screen looks empty while the voice explains the first step, and nothing says this is case 1.

1. Scale the #c1 step card up so it carries the screen: about 520×560 px, with the loose-stamp icon and search glass at about 200 px. Set "किस article के?" to 52 px ink and "पहले: article ढूँढना" to 44 px supporting grey, line height 1.3.
2. Shorten the envelope strip panel so it starts just behind step 1 and holds only what is there, instead of a mostly empty bar. Keep its left→right direction for s097's steps.
3. Add a small heading over the strip at the cut, "Case 1 · ढीले ordinary stamps" (48 px, postal red), so the cut from the grid reads as zooming into case 1.
4. In the grid, set card 1's "ढीले ordinary stamps" to 48 px (it is about 36 px now) and the "उखड़ गए" tag to 40 px. The cards have room to spare.

The scene lasts 8.78 s: every time in it is between 0 and 8.78.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s096.html`: one `<section class="vs-scene" id="s096" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
