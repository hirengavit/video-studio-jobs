# Fix animated scene s131

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s131" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s131), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s130.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s131.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s130 matches. The branch line, the "Postmaster" box and "staff / डाक को नुकसान" land on their words (1.4 s, 3.3 s, 8.1 s). The long still from 2 s to 10 s is the reading hold, so it's fine. The problem is the branch 3 condition box. "Postmaster · डाकपाल" is about 30 px on one line with a dot, and "को ठोस शक" and "staff / डाक को नुकसान" are about 26–28 px. Boxes 1 and 2 use a 44 px bold title, so the third branch reads as a footnote. It also breaks the kit's term rule: the English term first, with its translation directly beneath.

1. Lay out the branch 3 condition box like boxes 1 and 2. Put "Postmaster" in bold 40 px Inter, ink #2b2622, and "डाकपाल" directly beneath at 32 px 'Noto Sans Devanagari', in #6f6a63. Drop the "·" join.
2. Put "को ठोस शक" on its own line at 34 px 'Noto Sans Devanagari', bold ink, as the condition's key words, at 3.34 s.
3. Grow the three condition boxes from y 470–590 to y 470–640 (and shift the arrows and action boxes down 50 px in all tree scenes) so box 3 holds four lines at a 1.3 line height without touching its edges. If the height won't fit, move "staff / डाक को नुकसान" to a 34 px line under the box instead.
4. Set "staff / डाक को नुकसान" to at least 32 px, in #6f6a63, faded in at 8.10 s as now.

The scene lasts 10.04 s: every time in it is between 0 and 10.04.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s131.html`: one `<section class="vs-scene" id="s131" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
