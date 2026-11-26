# Fix animated scene s061

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s061" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s061), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s060.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s061.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam with s060 matches, and the "जारी करता है" pill arrives on its words. By 7.4 s, though, the screen holds about nine items: two buildings, the Sub-Postmaster pill, the arrow, the application, the id-card, the issuer band, the "Exam confusion" pill and the trap line. The kit allows at most five. The issuer band nearly touches the application's lower edge, and the trap bar sits only a few px under the band. The trap line also shows its words before the voice says them.
1. At 4.91, when "Exam confusion" comes on, fade the s060 material to the supporting colour at about 40 % opacity: the "Sub-Postmaster पूछताछ करता है" pill, the arrow and the application. The issuer band and "जारी करता है" then stay the focus.
2. Move the "Head Post Office / Head Postmaster" band and the "जारी करता है" pill to one centred line at y 820, at least 40 px below the application and id-card. Put the trap line at y 940, so there is a 40 px gap or more between the band and the trap bar.
3. Fade the trap line in at 8.50 (on "Option कहे कि … Sub Office"), not 7.38. The kit says nothing goes on screen before the voice reaches it.
4. Size the trap line's grey bar to its text plus 32 px padding, centred, instead of a wide bar with the text pushed to the left half.
5. Change the pill to "Exam में confusion" so the label follows the Hindi-language rule (the narration uses these exact words).

The scene lasts 10.79 s: every time in it is between 0 and 10.79.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s061.html`: one `<section class="vs-scene" id="s061" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
