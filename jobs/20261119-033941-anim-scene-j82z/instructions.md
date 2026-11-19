# Fix animated scene s115

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s115" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s115), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s114.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `key-term` (Key term): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: key-term: the term, its translation and abbreviation; the meaning line; the chips; replace the chain with an example or a rule line; drop the exam pill.

## What to change

The current file is `inputs/current/s115.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The chips "Circle की सीमा = राज्य की सीमा", then "आम बात है" and "नियम नहीं" follow the voice well, and greying the term card helps the screen settle. After the red box grows (9.8 s on), though, the diagram gets cramped. The grown dashed box runs against the white card's right edge, and the inner boxes shrink so much that "केंद्र शासित प्रदेश" is below the kit's 32 px minimum and hard to read on a phone. Around 7.4 s the whole diagram also dims almost to nothing while "नियम नहीं" is spoken.

1. Keep the grown red dashed box inside the meaning card with even margins: x 940–1740, y 360–780 (it now touches the right edge near x 1800). Put the "Circle" label at its top left and keep the original "राज्य" box at 940–1260 inside it.
2. Size the two added boxes to fill the grown area: "दूसरा राज्य" 1290–1720 × 380–540 (Hindi 40 px), and "Union Territory" 1290–1720 × 570–760 (EN 44 px, with "केंद्र शासित प्रदेश" at 34 px beneath it and line height 1.3).
3. Run the 7.22 `grow` without fading the diagram. The boxes should stay at full opacity and the red box should simply widen to the right (`grow` x, ease-out 0.6 s), so the picture never goes pale while the voice is still on it.
4. Move the chip row to y 830–900 with 40 px Hindi so it clears the grown box's bottom edge by at least 40 px.

The scene lasts 12.33 s: every time in it is between 0 and 12.33.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s115.html`: one `<section class="vs-scene" id="s115" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
