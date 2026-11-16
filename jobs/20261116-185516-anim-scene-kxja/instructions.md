# Fix animated scene s002

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s002" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s002), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s001.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `timeline` (Timeline): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: timeline: the number of events (3 to 4 on a bilingual screen) and their spacing; which event is the key one; the caption band (English line with Hindi under it) or drop it.

## What to change

The current file is `inputs/current/s002.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The date on the postmark ("16.12.2024") is about 24 px, so it can't be read on a phone, and it is the fact the voice says at 3.9–5.8 s. Scale the `postal-date-stamp` on the right node up to about 1.4 (roughly 220 px across) and set the date bar text to at least 48 px, bold, ink #2b2622.
2. The lower half of the frame (y 600–1000) is empty for the first 8 s, and the whole layout sits in the top half. Move the track down from about y 650 to y 700 and put the right node card under it at y 760–960 (x 1100–1720), sized for its two lines, as the storyboard plans. Then the content fills the frame with even margins.
3. The "Post Office Regulations" card only shows clearly near the end (it is visible at 9.8 s), but the voice says it at 8.5 s. Start its slide-up at 8.16 s as the storyboard says, run it over 0.4 s, and have it fully settled by 8.6 s.
4. The left node on the track is a bare grey dot with nothing beside it for this whole scene. Either leave it out until s003 brings in its card, or draw it at 1.78 s in s003 together with the "Post Office Guide Part I" card, so no unlabelled marker sits there for 10 s.

The scene lasts 9.88 s: every time in it is between 0 and 9.88. Shared states (use with level/pour {state}): "deposit".

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s002.html`: one `<section class="vs-scene" id="s002" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
