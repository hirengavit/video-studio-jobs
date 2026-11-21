# Fix animated scene s079

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s079" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s079), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s078.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

## What to change

The current file is `inputs/current/s079.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The series pill at top right changes from "LETTER BOXES" to "POST OFFICE RULES" at this cut, even though the storyboard sets LETTER BOXES on every scene. The kit says the pill changes only with the section. That jump is visible at the seam with s078. The scene's own content follows the plan: the "Doorstep Service" app name reveals on the phone at about 2.6 s, and the DOC card arrives at about 5.8 s with "Electronic clearance + monitoring software" on its words. But the planned highlight on the app name doesn't show, and the right half of the frame is empty for almost 6 s.

1. Series pill: set the frame's series slot for this scene to "LETTER BOXES" (the same value as s073–s078), not "POST OFFICE RULES".
2. Add the planned `highlight` on the "Doorstep Service" app name at 3.58 s (colour #fde9a6, opacity about 0.8, pad 8). No highlight is visible at 4.4 s.
3. Make the phone panel bigger while it is alone. Scale the phone and its envelope panel up about 1.3× and centre it in x 120–760, so the app name reads larger (the title is now about 44 px; aim for 56 px or more).
4. DOC card: add the source line under "Postal Manual" in grey #6f6a63 at 34 px (as the storyboard's DOC CARD specifies), and keep the red top edge. Don't make up a volume or rule number if the script doesn't give one.

The scene lasts 10.86 s: every time in it is between 0 and 10.86.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s079.html`: one `<section class="vs-scene" id="s079" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
