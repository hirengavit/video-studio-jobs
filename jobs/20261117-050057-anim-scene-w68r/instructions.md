# Fix animated scene s102

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s102" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s102), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s101.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `key-term` (Key term): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: key-term: the term, its translation and abbreviation; the meaning line; the chips; replace the chain with an example or a rule line; drop the exam pill.

## What to change

The current file is `inputs/current/s102.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

The cut to shot B at 2.8 s is the planned shot change (the 'jump' at 2.96 s is intended). The key-term card "Private device / निजी निशान" lands on its words, and the three wax seals and "एक ही तरह का wax" arrive on cue. The opening beat is what needs work: the contrast it sets up gets about a second on screen.

1. "लकड़ी या metal का case" arrives word by word from 0.00 s and is only complete at about 1.6 s, then the screen cuts at 2.8 s, so it holds about 1.2 s. Use `fade` (0.3 s) at 0.00 s so the whole line is up at once and holds about 2.8 s.
2. The slate strike on "गत्ते" (1.30 s) is a hairline on small text and is barely visible before the cut. Move it to 0.6 s with `strike` width 5, colour #4b4f58, dim 0.45. Also dim the green tick on that pill to the slate colour, so green doesn't contradict the strike.
3. After the cut, the right card holds only "sender का अपना निशान" from about 5 s to 9.1 s, with its lower two thirds empty. Pop the three seals with the text at about 6.0 s (still staggered 0.15), then keep the "एक ही तरह का wax" line on its word (about 10.6 s, ideally on "wax" ≈ 11.5 s). That way the card isn't mostly empty for four seconds.

The scene lasts 13.12 s: every time in it is between 0 and 13.12.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s102.html`: one `<section class="vs-scene" id="s102" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
