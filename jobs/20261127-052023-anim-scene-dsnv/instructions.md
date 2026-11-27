# Fix animated scene s123

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s123" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s123), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.
`inputs/screen-notes.md` is the script writer's notes for the visuals: what goes on screen that the voice
doesn't read (full tables, lists, document cards, on-screen words). Where the narration says something is on screen
("the table is on screen", "screen पर है"), show every row or item the notes give for it, complete, spelled as the notes give them and readable: never only the ones the voice names. Fit it on screen (smaller rows, two columns), never let it run off the frame.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s122.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s123.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The seam with s122 is good and the Parcel card fills on its words. The scene's key point, "अपने आप नहीं" (the document discount doesn't apply to parcels by itself), is the smallest text on screen, squeezed between the dashed arc and the card tops. Both card bodies are also mostly empty.

1. Make "अपने आप नहीं" slate 48 bold (now about 32 px). Centre it on the cross at x 960, y 262, with a cream (#fbf7ee) backing pill 300×58 so the dashed arc doesn't run through it. Enlarge the slate cross on the arc to 44 px with a 5 px stroke.
2. Scale the Document card's envelope icon up about 1.6× so it fills y 420–760 of the card, centred at x 500. The card then isn't a big white box with a small icon at the top.
3. Scale `speed-post-parcel` from 0.5 to 0.8, sitting on the card's lower right at y 700–900. Make "अपना discount इंतज़ाम" 44 (from about 36), at y 680, clear of the parcel.
4. Start the arc draw at 7.3 (voice "parcel पर नहीं" 7.5–8.7) and the cross plus label at 8.5, so the "no" lands on "नहीं लगता" with a beat to read before the scene ends.

The scene lasts 9.53 s: every time in it is between 0 and 9.53.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s123.html`: one `<section class="vs-scene" id="s123" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
