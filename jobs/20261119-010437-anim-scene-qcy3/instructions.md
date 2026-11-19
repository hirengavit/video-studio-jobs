# Fix animated scene s120

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s120" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s120), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s119.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `cause-chain` (Chain of stages): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: cause-chain: 3 to 4 stages; swap the icons (envelope, sorting rack, van, house) for any flat ink icon; the bottom note in English plus Hindi; which card is the outcome.

## What to change

The current file is `inputs/current/s120.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The chain fills on its words: "Gujarat Circle" on 0 s, "Headquarters" and "Ahmedabad" around 3.3 s, "Division" on 6.5 s, "Sub-division" on 8.1 s, and "supervise" on 9.2 s. It reads as one path from Daman to the offices. The stills are reading holds. What still hurts on a phone: stage 1's designation plate lettering overflows (carried from s119), and the "supervise" note strip is thin, with small grey Hindi.

1. Match stage 1 to the fixed s119 last frame: the plate scaled up (about 1.6) with "Postal employee" at 30 px inside it, and "डाक कर्मचारी" at 34 px clear of the card's bottom edge.
2. Make the note strip y 930–1010 and centre "supervise" (EN 40 px, highlight band #fde9a6) with "इनके ज़रिए देखरेख" at 36 px ink (not light grey) beside it. Or move the strip directly under stage 4 (x 1400–1820) so it sits next to the Division / Sub-division boxes it explains.
3. Raise the Hindi in stages 2–4 ("गुजरात परिमंडल", "मुख्यालय", "अहमदाबाद", "मंडल", "उप-मंडल") to ≥ 32 px. "अहमदाबाद" inside the Ahmedabad pill is now about 22 px.

The scene lasts 10.60 s: every time in it is between 0 and 10.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s120.html`: one `<section class="vs-scene" id="s120" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
