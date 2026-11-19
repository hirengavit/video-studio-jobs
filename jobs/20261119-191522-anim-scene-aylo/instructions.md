# Fix animated scene s023

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s023" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s023), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s022.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `exam-trap` (Exam trap): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: exam-trap: the banner sentence, the two cards' labels, names, Hindi lines and stamp numbers or short codes (up to about 4 characters), which card is the trap, the underlined words, the remember bar.

## What to change

The current file is `inputs/current/s023.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The fade in to the exam-trap banner suits a new idea. The banner and "फर्क याद रखिए" are on screen as they are spoken. The left card slides up on "वसूली का नियम", and the right card on "unpaid posting की आम छूट".

The problem is that the verdict is cut away almost as soon as it lands. The slate strike and cross come at 5.94 on "छूट नहीं देता", and the cut to #prepaid comes at 6.76. The trap's answer, which is the point of this exam beat, is on screen for under a second (the 6.97 "jump" is that cut). The #prepaid sub-shot is fine: the tick and label land on "पूरा prepaid", and the chip lands on "जल्दी से जल्दी वाली".

Fixes:
1. Move the cut to #prepaid from 6.76 to 7.6, on "जो article", so the strike and cross hold for about 1.7 s. Shift nothing else in #prepaid: the tick is at 8.60 and the chip at 11.28.
2. Bring the strike forward to 5.70, on "छूट", and draw the slate cross at 5.95 (`draw`, dur 0.4), so the verdict is complete by "नहीं देता".
3. Make the strike clearly visible: a slate #4b4f58 line 5 px wide across both lines of "Unpaid posting की आम छूट". Put a slate cross about 90 px wide at the card's top right. Change the right card's border from yellow to slate #4b4f58 on the strike (`color`, prop stroke, 0.3 s), because yellow means highlight and this idea is rejected.

The scene lasts 13.24 s: every time in it is between 0 and 13.24.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s023.html`: one `<section class="vs-scene" id="s023" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
