# Fix animated scene s014

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s014" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s014), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s013.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s014.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. Row 2's sub-line has a gap of about 90 px between "सामान न गिरे," and "छेड़छाड़ का साफ़ निशान…", so it looks like two broken pieces. Put part 2 straight after part 1, one space after the comma: set its x to the end of part 1 plus about 12 px, or make the sub-line one text element with two tspans that `fade` at 1.08 s and 2.86 s. Keep the `highlight` on "साफ़ निशान" at 3.42 s.
2. The 38 px grey sub-lines in rows 2 and 3 sit almost on the bottom edge of their cards. Make rows 2 and 3 about 16 px taller, or move each sub-line up 8 px, so that about 12 px of card shows below the Hindi. Don't shrink the text: the kit forbids shrinking Hindi to fit.
3. The row 3 sub-line "बिना ढका धारदार औज़ार नहीं" fades in very pale and only reaches full strength at the end. Make its `fade` last 0.5 s at 10.66 s to the same grey #6f6a63 as row 2's sub-line, so it reads on its words.

The scene lasts 13.52 s: every time in it is between 0 and 13.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s014.html`: one `<section class="vs-scene" id="s014" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
