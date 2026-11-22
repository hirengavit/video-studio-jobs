# Fix animated scene s197

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s197" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s197), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s196.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s197.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s196 is right (same layout, it just continues). The cut to `#open` at 3.46 is the "jump" the check found; it's a planned sub-shot, so it's intended. The prepaid (3.8) and अच्छी तरह बंद (about 5.5) checks, the open envelope with "खुला unpaid letter" (7.7), the "बंद करना = booking की अनुमति" chip (10.1) and its strike plus slate cross (11.9) all land on their words.

1. Scope line: "सेवा देते हैं" is already on screen at 0.2 s, but the voice says it at about 1.7–2.0 s ("जहाँ इसके post offices [1.7] सेवा देते हैं"). Start its `fade` (or `type`) at 1.7 s, lasting 0.4 s, so it doesn't appear before it's spoken (the kit says nothing shows before the voice reaches it).
2. In `#open`, the open envelope card is small for the scene's main picture. `fade` it in at 7.68 at about scale 1.15 (keeping its left edge at the same x as the "prepaid" check) so the envelope and its "खुला unpaid letter" tag read on a phone. Shift the arrow and the "बंद करना = booking की अनुमति" chip right to keep the same gap, and keep the chip inside the right margin.

The scene lasts 13.14 s: every time in it is between 0 and 13.14.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s197.html`: one `<section class="vs-scene" id="s197" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
