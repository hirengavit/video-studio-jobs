# Fix animated scene s071

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s071" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s071), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s070.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s071.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The caption "खुशबू डिब्बे में ही" fades in at about 10.47 s, at the cut. The voice says "अपने डिब्बे में ही रहे" from 7.4 s. Fade it in at 8.93 s, as the storyboard says, so it holds for about 1.5 s.
2. The "airtight" chip is green #2e7d4f, but the kit keeps green only for correct answers and allowed rules. This chip is a term, so give it the term style: white fill with a #ead9a8 border, English "airtight" in ink, Inter bold, and "हवा-बंद" in grey #6f6a63 beneath.
3. The chip's text is too small for a phone: "हवा-बंद" renders at about 24 px, which is under the kit's 32 px minimum for Hindi. Make the chip about 300×110 with "airtight" at Inter 44 and "हवा-बंद" at 34. To keep it clear of "tin या metal case", put it on its own row between the term card and the "हवा न आए-जाए" card, moving that card down as needed.
4. The scent curls are drawn on the outside of the tin body, so they can read as smell leaking out, which is the opposite of the point. Draw them smaller (scale about 0.6), inside the body outline and below the lid seam. As they finish (about 7.9 s), give `#sealed-seam` a short second `highlight`, so it reads as the smell held in by the seal.

The scene lasts 10.52 s: every time in it is between 0 and 10.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s071.html`: one `<section class="vs-scene" id="s071" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
