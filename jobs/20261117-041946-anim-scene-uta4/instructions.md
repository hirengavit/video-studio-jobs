# Fix animated scene s020

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s020" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s020), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s019.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s020.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
Shot A's whole point is that stamps and date stamps go on the outer paper, but the stamp that pops at 0.00 is tiny (about 30 px) and sits on the bottom edge of the brown layer. The date stamp at 3.70 is a faint small circle. On a phone neither reads. Shot B (6.14) is a loose layout (open book left, parcel right, text floating above), and s021 opens on a framed card with the book and parcel in other places, so the seam jumps on a scene marked Continues.
1. Shot A: scale the `postage-stamp` up to about 0.9 (about 110×135 px) and place it fully on the outer brown band, top-right of the parcel (about x 1150, y 470), not on the band's lower edge. Keep the `pop` at 0.00.
2. Shot A: `stamp` the `postal-date-stamp` at 3.70 at about 140 px wide, overlapping the stamp's left edge on the brown paper. Give it ink #2b2622 at full opacity so it reads, and keep "Date stamp · तारीख़ की मुहर" beside it on the right, outside the parcel. Don't let it hang below the parcel.
3. Shot B: build it in the exact layout s021 opens on, so the cut into s021 doesn't jump. That means a white card x 80–1840 with a divider, the book left with "पुराना आम निर्देश" under it, and on the right "कम से कम 2 post offices की date stamps" on one line above the parcel at s021's positions and sizes, with the parcel's two dashed stamp spots in the same places.
4. Shot B: make the parcel and book fill the card (parcel about 640 px wide, book about 440 px) so the canvas isn't half empty, and keep "post offices की date stamps" at 40 px or more.

The scene lasts 11.94 s: every time in it is between 0 and 11.94.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s020.html`: one `<section class="vs-scene" id="s020" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
