# Fix animated scene s160

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s160" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s160), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s159.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s160.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The #fee half works. The "Detention charge / रोकने का charge" stamp card lands on the cut, and the "Operational instructions" sheet slides up with its arrow on "operational instructions" (6.1 s). The first 1.66 s does not match the plan.
1. The green "यही छूट" pill is missing: the frame at 0.2 s has none, and the check finds nothing moving from 0.25 s to 1.5 s. At 0.1 s, `pop` a green (#2e7d4f) pill "यही छूट" (Noto Sans Devanagari, 48 px, white) just below the day-14 marker's arrow, at about (1640, 990) (or left of the marker if it would cross the frame edge), so it lands on "तब भी यही छूट".
2. Seam: the first frame must equal s159's last frame. Here the day-14 "Sunday / holiday" marker jumps up by about 80 px and right, and the flag's "या intimation" shrinks. Copy s159's end positions for the marker and the flag text exactly, and draw only the new arrow from the marker's bottom edge.
3. Let the arrow from the day-14 marker point at something: run it from the marker (bottom) toward the "यही छूट" pill, 4 px ink with an arrowhead, drawn 0.0–0.4 s before the pill pops.

The scene lasts 8.78 s: every time in it is between 0 and 8.78.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s160.html`: one `<section class="vs-scene" id="s160" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
