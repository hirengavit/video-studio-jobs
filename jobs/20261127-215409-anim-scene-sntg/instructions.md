# Fix animated scene s019

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s019" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s019), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s018.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s019.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut from s018 is seamless. The highlight on "agreement" and its keyword follow the voice (5.7 s), and the Circle Head panel lands on "Circle Head" (8.4–10.2 s). The still stretch from 0.25 to 8.56 s is a long hold, but it is the reading time for point 2 and is intended. The problems are the same small text as s018, and keyword 2 sitting tight against "private sector".

1. Match the s018 fix: point text 44 px Georgia, rows at y 300 / 465 / 630 / 795, Hindi keywords 36 px. This keeps the seam exact with s018's last frame.
2. Move keyword 2 ("third-party: public/private से agreement") down so it has a 12 px gap below the second line "private sector". Right now it almost touches that line.
3. Make the Circle Head panel title "Circle Head" 64 px and the Hindi "डाक परिमंडल प्रमुख" 40 px (it reads near 36 px now). Scale `icon-circle-office` from 0.45 to 0.6 so the panel's upper half is filled. The lower half stays free for the s020 inset.
4. Start the highlight on "Circle Head" in point 3 on the spoken word at 8.4 s (not before), then pop the panel 0.3 s later, so the highlight and the panel don't land on the same frame.

The scene lasts 10.56 s: every time in it is between 0 and 10.56.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s019.html`: one `<section class="vs-scene" id="s019" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
