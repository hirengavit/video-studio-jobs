# Fix animated scene s093

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s093" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s093), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s092.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s093.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. In `#fewest`, the six small stamps on the left envelope sit as a tidy 3×2 grid above the address lines, so the envelope still looks roomy. The point that many stamps eat the address space doesn't read. Raise the `adhesive-stamp` scale from 0.45 to about 0.6 and let the second row run down over the top two address rules, so they visibly cover part of the address area. s094 should redraw it the same way.
2. The franking strip "जगह के ये नियम franking पर भी" appears only after 2.2 s and is cut away at 4.98 s, which leaves it about 2 s to read. Slide it up at 1.7 s, on "जगह के ये नियम", so it holds about 3.3 s before the cut.
3. `#fewest` leaves the bottom 40% of the screen empty for 5.6 s, and the envelopes are small for a phone. Raise the two envelopes from scale 0.95 to about 1.1, keeping the left at x 180 and the right ending at x 1740, with captions at y 690. That still leaves y 720–980 free for s094's cards.
4. Move the green tick about 20 px left so it sits on the right envelope's top-right edge rather than floating in the gap beside it.

The scene lasts 10.66 s: every time in it is between 0 and 10.66.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s093.html`: one `<section class="vs-scene" id="s093" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
