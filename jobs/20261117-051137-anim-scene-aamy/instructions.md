# Fix animated scene s134

Read `inputs/CRAFT.md` (rules every scene follows), `inputs/storyboard.md` (the parts for this scene: "Shared",
"Continuity", its section "## s134" and its neighbours'; follow its section closely), `inputs/SCENES.md` (the narration and word times for
s134), `inputs/SCENE-API.md` (how to write a scene file on the engine), `inputs/kit.json` (the channel
kit) and `inputs/pieces.md` (library pieces:
place them with `<use href="piece:<id>" transform="..."/>` and animate their parts by id; and sets: places with
named spots and framings, pictured in `inputs/sets/<id>.jpg` with the spots marked). If the storyboard puts
this scene in a set, build it on the set (see SCENE-API.md, "Sets"): the character and props on its spots, the
camera on its framings.

**The header is drawn by the app.** A fixed frame (section, series) sits above every scene: never draw a section label, a series tag or anything in the top band (y < 150). Instead put the words on your <section>: `data-section="…"` and `data-series="…"` (from the storyboard).

**Continuity.** The scene before this one, as finally written, is `inputs/previous/s133.html`. Where the storyboard continues its layout, keep the same positions, sizes and colours, and start from the camera framing it ended on (a zoom that is held at its end continues here, or it returns before the cut). Reuse its element ids and pieces rather than redrawing them differently.

**Components.** The storyboard asks for `compare-cards` (Compare cards): their code is in `inputs/components/`. It is a starting point, never a template to fill in: mould it to this moment. Change anything (layout, size, number of items, wording, motion, timing to the words, how it combines with the rest of the scene), remove every part that doesn't serve the idea, add what's missing, and improve it wherever you can see how. Use only the parts that help; if it doesn't fit once you're writing, build something better instead. Easiest to change: compare-cards: question (English + Hindi), the two names, full names and Hindi names, two labelled facts per card (dates, who, limit, rule), the takeaway; which band is red or yellow; no right/wrong colours unless one is actually wrong (then slate strike, green tick).

## What to change

The current file is `inputs/current/s134.html`. Change it as follows, and keep everything else that works. Fix crowding by moving or resizing things, never by deleting what the storyboard planned to show:

The director asked for these fixes:

This scene works. The branch 3 recap is on "नुकसान का शक" and the underline on "Head of the Circle" (2.6 s). The cut to the compare cards lands on "अब खुली भेजी जाने वाली डाक" (about 4.3 s). The green outline round all four envelope edges sells "हर तरफ़ से लगातार बंद", and the green line sits on its words. The empty Book Post card is planned for s135. Two small things:

1. Keep shot A's tree identical to the end of the fixed s133: the same box sizes, Hindi lines at 32 px or more, and only branch 3 yellow (with branch 2's border returning to normal over 0.4 s at 0.00 s rather than snapping).
2. Bring in the green "हर तरफ़ से लगातार बंद" pill at 9.30 s, on "हर तरफ़ से", not at 9.92 s after the words. Leave everything else as it is.

The scene lasts 10.88 s: every time in it is between 0 and 10.88.

**No character.** This channel has NO recurring character: never place the host rig (no data-rig, no rigs block) and plan no person on screen. Present ideas the way a great lecture deck would, but animated: exact-word document cards (highlighted phrase by phrase), points that build one at a time, timelines, side-by-side compare cards, one key term in focus, icons and small drawn objects, quick checks and recap cards, in the kit's colours and fonts, with the fixed places the channel's rules name. Every element lands on the word it belongs to, then holds long enough to read. Clarity first: big readable text and elements that use the frame (even margins, never a small card in a big empty canvas), nothing cramped or cut off at the frame edge.

Write `out/s134.html`: one `<section class="vs-scene" id="s134" …>` with the SVG and a
`<script type="text/scene">` block. Use the engine's
physical actions (hold, pour, fall, place, level) instead of building them yourself.

**Look at your own frames before you finish.** Run `node look.mjs`: it renders your scene with the real engine
and writes `out/look.jpg`, six moments across the scene, plus `out/look.json` with the engine's warnings.
Open the picture and check it like a viewer on a phone would: is every word readable, on its own background,
inside its card, inside the frame? Does each thing arrive on its word and hold? Nothing missing, nothing
doubled, nothing squashed? Fix what you see, run `node look.mjs` again, and only then run `node check.mjs`
and fix what it reports.
