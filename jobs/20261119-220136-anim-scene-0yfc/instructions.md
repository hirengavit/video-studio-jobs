# Fix animated scene s065

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s065" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s065), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s064.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s065.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The header and the two numbered groups land on their words ("दो groups" 4.1, "collection" ~5, "stamps" ~8.7). The still stretches at 0.75–3.98 and 5.47–8.71 are reading holds on "list screen पर है" and the first group, so they're intended. The real problem: two tall white columns (y360–990) arrive at 4.08 and stay almost empty for about 9 s, until their examples land at 1.8 s into s066. Most of the screen is blank white boxes.

1. Make #g1 and #g2 start as short heading tabs: rect height 170 (y360–530) at 4.08. Grow them to the full y360–990 with a 0.4 s ease only when their examples arrive. In this scene they stay short; s066 grows them at 1.6 s. Set the grow in `update()` as a pure function of t, and keep the 40 px gap between the columns.
2. With the columns short, centre the header strip and tabs together: header strip y200–345 and tabs y400–570. The screen then reads as one block, not a header over a void.
3. "फिलेटलिक सामग्री" (44 px) sits on the strip's bottom perforation. Raise it about 12 px (baseline ≈ y296), so there's at least 14 px between the matras and the perforated edge.
4. Raise the group headings from 48 px to 54 px. The badge circles should grow to match (r 26), so the groups read on a phone while they're the only content.

The scene lasts 10.00 s: every time in it is between 0 and 10.00.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s065.html`: one `<section class="vs-scene" id="s065" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
