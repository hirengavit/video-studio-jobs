# Fix animated scene s012

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s012" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s012), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s011.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s012.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The "remits the amount to the sender" highlight lands on its words, the cut to #terms comes on "तीन शब्द", and the Sender card pops on "Sender" at 4.55 s. Two problems: the gist panel the screen notes ask for ("सार: delivery पर वसूली, sender को भुगतान") is not readable in this scene, and the Sender card's second meaning line arrives late.

1. Bring the gist panel in sooner: `fade` it at 1.0 s instead of 2.75 s, so it holds about 2.4 s before the 3.41 cut. It isn't visible at 2.5 s on the sheet. Place it inside the quote card, below the definition and left of the postmark (about x 200–1300, y 740–840). Use Hindi 48 px with a grey "सार" label, on a soft #fde9a6 panel.
2. Move the second strip line "वसूली की रकम तय करता है" from 9.35 s to 7.7 s, where the voice says "वसूली की रकम". At 9.35 s it lands after the words.
3. Make the Hindi in the meaning strip 44 px or larger (it reads at about 40 px on the sheet) and give the strip 24 px inner padding. That way the two lines don't sit against the strip's edges on a phone.

The scene lasts 10.97 s: every time in it is between 0 and 10.97.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s012.html`: one `<section class="vs-scene" id="s012" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
