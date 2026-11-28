# Fix animated scene s072

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s072" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s072), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s071.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s072.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The seam from s071 is exact, and "4%" with "सालाना" and its source pops on the voice. The NRI panel with English "NRI" over "अनिवासी भारतीय" follows the kit's term rule. Two things a viewer would notice: the crossed rupee coin is so small (about 70 px, with the cross covering it) that it reads as a crossed-out box, and the source line under 4% wraps into two lines of about 32 px.

1. piece:rupee-coin: scale 1.0 instead of 0.6 (120 px), placed at x 940, base y 960, inside the panel. Draw the slate cross at 3 px across the coin's edge after it lands (9.76), so the ₹ stays visible under it.
2. Source line "1 Oct–31 Dec 2026 · Source: SB Order 12/2026": set it at 40 px grey, on two clean lines ("1 Oct–31 Dec 2026" / "Source: SB Order 12/2026") at y 800 and 850. Move "4%" + "सालाना" up to y 640, so the source doesn't press against the card's bottom edge (the card ends at y 880).
3. The NRI panel sits mostly empty from 3.4 s to 7.3 s. Bring in "maturity के बाद" at 6.90 (the voice says "खाते पर" at 6.9 and "maturity के बाद" just after) instead of 7.32, and keep "कोई ब्याज नहीं" at 9.30.

The scene lasts 10.66 s: every time in it is between 0 and 10.66.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s072.html`: one `<section class="vs-scene" id="s072" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
