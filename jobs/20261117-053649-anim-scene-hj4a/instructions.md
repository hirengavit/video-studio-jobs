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

The chips and the line "किसी खास mail से जाना हो" come on their words, and card #rule30 arrives on "mail के बंद होने" (7.3 s). But the scene's whole point, "at least 30 minutes before", is a thin strip of small text at the bottom of the card. "30 minutes" is barely bigger than the rest, and the 1.06 push-in doesn't make it readable on a phone. The chips' Hindi is under 32 px, as in s183.
1. Make #rule30 the big element: about 960×200 across the card's lower half (x 820–1780, y 760–960). Set "30 minutes" at 96 px bold in deep amber #8a5d00 on the soft #fde9a6 band. Put "mail बंद होने से" (38 px) before or above it and "कम से कम … पहले" (38 px) after it. Keep the `count` to 30 at 9.76 s.
2. To make room, tighten the four chips into 2×2 (sized as in the s183 fix), and move "किसी खास mail से जाना हो" up under them at 40 px.
3. Keep the push-in on #rule30 (zoom 1.06) at 9.76 s. Check that the bigger card's edges stay in frame at that zoom, and that the camera returns to zoom 1 by 11.08 s.
4. Chips "Value-payable / वी.पी." and "Certificate of posting / पोस्टिंग प्रमाणपत्र": set the Hindi to 34 px, and let "Certificate of posting" wrap to two lines rather than shrink.

The scene lasts 11.64 s: every time in it is between 0 and 11.64.

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
