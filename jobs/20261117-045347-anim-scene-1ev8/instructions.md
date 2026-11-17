# Fix animated scene s079

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s079" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s079), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s078.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s079.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

This is a good cut-away build. The capsule is drawn on "capsule", the tin and sand come on "रेत भरे tin case", and the dimension arrow and "≥ 4.3 cm रेत" come on "4.3 centimetre". Everything sits inside the tin, nothing floats, and the seam with s078 matches. The long still from 3.19 s is the hold while the voice describes the packing, so it's fine. Two readability problems: the Hindi gist "काँच का airtight capsule" is about 26–28 px, under the kit's 32 px minimum, and the label column is small next to a mostly empty left half of the card.

1. Raise the Hindi gist "काँच का airtight capsule" to 34 px, in the supporting colour, with line height of 1.3.
2. Raise the label rows ("Airtight glass capsule", "Tin case + रेत", "≥ 4.3 cm रेत") to about 48 px. Space them at y 520 / 640 / 760 so they fill the card's left half.
3. Leave room for s080's wooden box. Scale the tin drawing to about 0.85 around its centre so a margin of about 70 px stays clear inside the card. Then s080 can draw the box around it without changing the layout.

The scene lasts 10.60 s: every time in it is between 0 and 10.60.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s079.html`: one `<section class="vs-scene" id="s079" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
