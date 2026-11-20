# Fix animated scene s209

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s209" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s209), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s208.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s209.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s208 is clean, and the case, the "मज़बूत लकड़ी / या metal case" pill and the band all land on their words. The stills in check-notes are the intended reading holds. Problems:

1. At 5.94 s the storyboard's `color` on the point-4 rows never runs: rows 1–4 stay full ink while the band comes in, so the screen holds six items at full weight (kit: at most five; fade earlier points to the supporting colour). Add `[5.94, 'color', <row label and pill texts of rows 1–4>, {to: '#6f6a63', dur: 0.4}]` and leave the badges and ticks as they are, so the band is the only thing in ink.
2. "notes की अलग limit:" (9.58 s) sits raised and small above the band's baseline and stays alone with no value for about 2 s. Set it to 34 px #6f6a63, on its own line in the band's right part, centred on the band's upper half (about y 905). Leave the lower half (about y 960) free for the ₹20,000 that pops in s210, so the pair reads as one label and its value.
3. ₹5,00,000 is a limit shown with no source (kit: limits only with their source). Add a 28 px #6f6a63 line "Source: Post Office Regulations, 2024" inside the band's bottom-right corner, or just under the band (y ≈ 1000). Fade it in with the band at 5.94 s.

The scene lasts 11.92 s: every time in it is between 0 and 11.92.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s209.html`: one `<section class="vs-scene" id="s209" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
