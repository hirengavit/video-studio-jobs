# Fix animated scene s023

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s023" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s023), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s022.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Real photos and clips** for this scene (SCENE-API.md, "Real photos and clips"; the files are in `inputs/materials/`, open them to see what they show): `photo:printed-invoice-bill`: a printed business bill or invoice on paper, the whole sheet visible and readable as a bill (rows of items and a total), no real company branding prominent (Print/drawing, Wallpaper Invoice for the firm of Arthur et Robert, 1793) (shown in the scene before; use it where this scene continues that frame), 1772×2400. **They were found, so use them:** the storyboard's plan for them applies, and any "no photo" alternative it describes does not. Show them in the way that suits this moment.

## What to change

The current file is `inputs/current/s023.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s022 is exact. Line 2 reveals on "concerned postal authority से agreement" and gist line 2 on "शर्तें और fees". The still stretches (1.49–3.47 s and 3.72–8.67 s) are reading time. Two problems: the text stays as small as in s022, and the card is loaded with marks (four yellow highlight bands, a red underline, and a yellow band inside the gist). The kit allows one hand-drawn annotation per screen and keeps the highlight moving.

1. Match the s022 fix: Georgia lines at 48 px (line 1 at y 540, line 2 at y 680), gist panel y 780–950 with Hindi at 40 px. This keeps the seam with s022.
2. Remove the highlight bands from line 1 ("bills or other payments", "third party") at 0.0 s with a 0.4 s `fade` as line 2 starts. Only the phrase being explained stays highlighted.
3. Drop the `underline` on "Agreement" (2.22 s), or fade the highlight on "concerned postal authority" first. One annotation per screen.
4. Move the gist line 2 `fade` from 3.62 s to 4.3 s, when the voice says "शर्तें और fees" (the kit says nothing shows before the voice reaches it). Start the highlight on "administrative instructions" at 5.0 s, inside the spoken words (4.3–7.4 s).

The scene lasts 9.20 s: every time in it is between 0 and 9.20.

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
