# Fix animated scene s087

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s087" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s087), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s086.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s087.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s086 is clean. Shot B builds the chain on its words ("Head of Logistics" at 5.4 s, "Head of Circle" at 6.8 s, and the arrow and "report करते हैं" at 8.1–8.3 s), and the stills are reading holds. Two things a viewer would notice:
1. The envelope band "logistics से जुड़े establishments भी" only appears at about 1.5–2 s and is cut away at 3.39 s, which is under 2 s to read a 5-word line (the kit asks for at least 3 s). Bring the band up at 0.2 s (the voice starts "साथ में logistics…" at 0.0) and start the five cards fading to grey at the same moment, so it holds for about 3 s.
2. "सर्कल प्रमुख" under "Head of Circle" is set in highlight yellow on red. In the kit, yellow is only for highlights and added material. Set it in white at 0.85 opacity, 36 px, matching how "लॉजिस्टिक्स प्रमुख" reads under the other head.
3. At the sub-shot cut, the two empty outline boxes sit alone for 2 s and look unfinished. Draw the outlines with the title at 3.39 s, but give them the ink line at 3 px in #ead9a8 with the heading-red top edge on #hoc, so they read as slots. Alternatively, bring #hol's words in at 3.9 s on "कड़ी" instead of 5.41 s. Either works.

The scene lasts 9.59 s: every time in it is between 0 and 9.59.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s087.html`: one `<section class="vs-scene" id="s087" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
