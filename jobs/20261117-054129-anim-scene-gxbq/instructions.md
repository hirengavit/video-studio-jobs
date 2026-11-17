# Fix animated scene s196

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s196" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s196), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s195.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `rule-card` (Rule / section card): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: rule-card: the label (SECTION/RULE/ARTICLE · धारा/नियम/अनुच्छेद), the number, the act name in English and Hindi, heading, 2 to 4 Georgia lines, highlighted phrase, Hindi gist, postmark text (in-force date, notification, or act number), the two chips (definition, what it replaced, exceptions) or drop them.

## What to change

The current file is `inputs/current/s196.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The route shot carries over cleanly, and the cut at 5.25 s (the "jump" at 5.44 s) is the intended cut to the Regulation 23A shot. Timing problems:
1. The "23A" badge is stamped at 6.47 s, but "Regulation 23A" is said at about 7.1–7.6 s. Worse, from 5.25 s to 6.47 s the badge shows a big empty red middle that looks broken. Have "23A" already on the badge at the cut (5.25 s), since the heading "Booking cancel" arrives with "booking cancel करना". Or keep the stamp, but move it to 7.15 s and pop the whole badge then rather than showing it empty.
2. The chip "छूट: कानून के तहत ज़ब्त" pops at 1.46 s with "ज़ब्त" already written, though the word is only said at about 3.8 s (the kit: nothing shows before the voice reaches it). Pop the chip as "छूट: कानून के तहत" at 1.46 s, then `fade` "ज़ब्त" into the chip at 3.8 s, with the existing `underline` right after, at 4.1 s.
3. The white right card is about 80 % empty from 5.25 s to the end of the scene (about 4.5 s). Draw its three faint row rules (y 420/560/720), already shown at the start of s197, at the cut, so the card reads as a form waiting for its rows rather than a blank box.

The scene lasts 9.93 s: every time in it is between 0 and 9.93.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s196.html`: one `<section class="vs-scene" id="s196" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
