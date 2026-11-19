# Fix animated scene s021

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s021" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s021), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s020.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `rule-card` (Rule / section card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: rule-card: the label (SECTION/RULE/ARTICLE · धारा/नियम/अनुच्छेद), the number, the act name in English and Hindi, heading, 2 to 4 Georgia lines, highlighted phrase, Hindi gist, postmark text (in-force date, notification, or act number), the two chips (definition, what it replaced, exceptions) or drop them.

## What to change

The current file is `inputs/current/s021.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade in suits a new idea. The heading "Prepayment का नियम" is up while it is spoken. The Regulation badge slides in on "Regulation 5" (1.92), with the "5" popping on its word. The gist fades on "postage और item पर", and the highlight on "पहले देना ज़रूरी" lands on its words. The timing is good.

The problem is the empty card. The white card is drawn at full height (y 180–1000) from frame one, but for the whole 9 s it holds only the heading and one two-line gist at the top. About 60% of the screen's main card is blank white, which breaks the rule that a card is sized for what it holds. The gist is also smaller than the screen allows for the scene's one rule.

Fixes:
1. Draw the right card at y 180–560 in this scene, sized for the heading and the gist. In s022, grow it to y 180–1000 at 0.0 (see s022).
2. Raise the gist line to 52 px, keeping the two lines with about 1.3× line height. Place it at y 300–470 inside the card, with the "सार" tag left of the first line.
3. Keep the badge at full height (y 180–1000) as it is. The badge is the anchor that fills the left.

The scene lasts 9.08 s: every time in it is between 0 and 9.08.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s021.html`: one `<section class="vs-scene" id="s021" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
