# Fix animated scene s187

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s187" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s187), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s186.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s187.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:
The "jump at 2 s" is the planned cut to #ipp at 1.82 and is fine. The parcel rests on the counter ledge, and its scale next to the window is believable.
1. The "INDIA POST PARCEL" label typed at 5.08 renders at about 20 px, so it can't be read on a phone, yet "उस पर India Post Parcel लिखा होना चाहिए" is the point of this scene. Set the label text to Inter bold 44 or larger, on two lines ("INDIA POST" / "PARCEL"). If it doesn't fit the label, raise the parcel-box scale to 1.5 and keep its base on the ledge top at x 620.
2. At 6.48, alongside the "उस पर लिखा हो ✓" chip, `draw` one ink underline (dur 0.5) under the parcel's label, so the eye goes from the chip to the label.
3. The cut at 1.82 leaves the right column empty until 2.68. `fade` the "India Post Parcel" term in at about 2.3 (the voice reaches "India Post" at about 3.1), so the new screen doesn't open as a bare counter.

The scene lasts 11.52 s: every time in it is between 0 and 11.52.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s187.html`: one `<section class="vs-scene" id="s187" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
