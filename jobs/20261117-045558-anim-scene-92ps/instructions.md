# Fix animated scene s088

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s088" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s088), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s087.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `rule-card` (Rule / section card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: rule-card: the label (SECTION/RULE/ARTICLE · धारा/नियम/अनुच्छेद), the number, the act name in English and Hindi, heading, 2 to 4 Georgia lines, highlighted phrase, Hindi gist, postmark text (in-force date, notification, or act number), the two chips (definition, what it replaced, exceptions) or drop them.

## What to change

The current file is `inputs/current/s088.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
1. "कई दिन" and the sun with "बहुत गर्म इलाके" (1.32 s / 2.54 s) are squeezed small into the gap between the title and the cards (y about 300): text under 32 px, sun about 40 px. Put them inside the tip card under "सावधानी" as one row: the `draw` ink sun at about 90 px, then the "कई दिन" pill and "बहुत गर्म इलाके" at 44 px.
2. In shot B, `regulations-book` is drawn much smaller than in s081, so its cover lettering "Post Office Regulations 2024" can't be read. Scale it to match s081 (fill x 160–520, y 260–900).
3. The document card's lines are small (about 36 px) and stop halfway down, leaving the lower half empty for the whole shot. Set "Insured items: packing की detailed शर्तें" to 48 px, "Administrative instructions" to 60 px and "प्रशासनिक निर्देश" to 44 px. Space the rows (badge, line, term) to about y 420 / 600 / 760 so the card fills evenly.
The "jump" at 4.97 s is the planned cut to shot B and is fine.

The scene lasts 17.93 s: every time in it is between 0 and 17.93.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s088.html`: one `<section class="vs-scene" id="s088" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
