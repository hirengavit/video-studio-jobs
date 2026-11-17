# Fix animated scene s189

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s189" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s189), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s188.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s189.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The postmark and the "DEFACE" term land on "deface", and "आगे भेजा" lands on its words. The problems are physics and leftovers:

1. After the `move` at 0.84 s, the envelope hangs in front of the counter: its bottom edge is about 35 px below the counter shelf, and it covers the window. Change the move so the envelope's bottom edge sits on the shelf line (about y 790), lying on the counter top: roughly by [520,-10]. Or scale it to 0.85 so it rests on the shelf without covering the whole window.
2. The label "ऊँची value stamps" stays at the old position, over empty space, once the envelope has left. Put it in the envelope's group so it moves with the envelope, or fade it out with the move at 0.84 s.
3. The "DEFACE · निशान लगाकर रद्द" card and the "लाने वाले के सामने ही" pill almost touch the top of the counter. Move both up by 30 px so there's a clear gap.
4. The envelope's final `move` by [260,0] at 9.18 s leaves it half off the counter and clipped by the counter edge. Use [180,0] so it stays on the counter, or move it off frame to the right in a single 0.6 s move, so it clearly "goes on".

The scene lasts 11.04 s: every time in it is between 0 and 11.04.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s189.html`: one `<section class="vs-scene" id="s189" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
