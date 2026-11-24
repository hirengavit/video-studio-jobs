# Fix animated scene s059

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s059" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s059), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s058.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s059.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

1. The packet label's text changes from "Cecogrammes" to "Envois pour les aveugles" at about 1.1 s. That French wording is in neither the script nor the screen notes, and it contradicts the term just taught. Keep the label lettered "Cecogrammes" (40 px bold Inter) as it was at the end of s058. Do not `swap` the text, only `move` the label.
2. The label does not reach the top-right corner. It ends straddling the top centre of the packet, over the string. Move it to the packet's top-right corner (label's right edge 24 px inside the packet's right edge, top edge 24 px below the packet top, clear of the tag string) on "ऊपर दाहिने कोने" (move 1.06–2.2 s). Then draw the circle round it at 2.66 s as planned.
3. "From: sender का पता" plus "ज़रूरी" sits as a separate box under the globe (bottom-left of the screen), detached from the packet. The voice and storyboard put the sender's address on the packet, bottom-left. Write it inside the packet's front, at the bottom-left quarter, as two ink lines at 32–36 px. Put the "ज़रूरी" chip beside the packet's lower-left edge at 7.4 s ("दिखना ज़रूरी है").
4. The "ज़रूरी" chip is green. Green means correct or allowed in this kit. Make it a yellow highlight chip (#fde9a6 fill, #8a5d00 text), since it marks a must-have.
5. The note "सामने, ऊपर दाहिने कोने में" (red, about 32 px) sits right on the packet top and touches the label's circle. Once the label is in the corner, place the note to the right of the packet, beside the circled label (x ≥ 1700, 36–40 px). If space is tight, place it above the packet with 24 px clear.

The scene lasts 8.54 s: every time in it is between 0 and 8.54.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s059.html`: one `<section class="vs-scene" id="s059" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
