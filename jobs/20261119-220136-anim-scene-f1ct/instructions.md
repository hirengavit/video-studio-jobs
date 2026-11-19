# Fix animated scene s013

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s013" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s013), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s012.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `rule-card` (Rule / section card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: rule-card: the label (SECTION/RULE/ARTICLE · धारा/नियम/अनुच्छेद), the number, the act name in English and Hindi, heading, 2 to 4 Georgia lines, highlighted phrase, Hindi gist, postmark text (in-force date, notification, or act number), the two chips (definition, what it replaced, exceptions) or drop them.

## What to change

The current file is `inputs/current/s013.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The owner asked for this change: The seam with s012 is good. "दिया जा चुका है" completes and the green tick lands. The two grey chips and their strike fit "बस एक picture या label नहीं है". The cut to #sec4 at 6.66 s (the check's "jump") is the planned sub-shot cut. The problem: from 6.66 s to 10.06 s the narrow red badge sits at the far left, its middle empty where the "4" will go, and the right two-thirds of the screen is bare cream for 3.4 s. It reads as a half-built or broken screen.

1. Start #sec4's badge group centred: give its group a starting transform of translate(630 0) so it sits at x 730–1190. Keep the "4" pop at 9.66 s on "section 4". At 10.2 s add a `move` on the badge group, by [-630, 0] with spring 'soft', to take it to x 100–560. Move the right card and heading fade from 10.06 s to 10.5 s so the card arrives after the badge has made room.
2. On the #proof line, close the double-width gap between "postal service का पैसा" and "दिया जा चुका है". Shift the completion `<text>` about 14 px left so the two parts read as one sentence with a normal single space, and keep the tick after it, moved left by the same amount.

The scene lasts 11.20 s: every time in it is between 0 and 11.20.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s013.html`: one `<section class="vs-scene" id="s013" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
