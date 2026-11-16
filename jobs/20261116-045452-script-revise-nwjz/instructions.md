# Change a script for Postal Exams

The person making the video asked for this change:

> Three changes:
> 
> 1. Part 1 re-teaches what an earlier lecture of this series (on payment of postage) already taught in full: what prepayment is and that it is required, the payment methods, stamp placement on the address side, choosing larger denominations, adding only the balance on embossed stationery, and that revenue stamps and charity labels don't pay postage. Cut those to a short recap of a few plain lines with the key facts. Don't name or point to any other lecture; just say the facts briefly. Keep everything in Part 1 that is new in this material and wasn't taught there.
> 
> 2. Don't speak old Post Office Guide clause numbers anywhere (for example clause 12, 23 and 26, and the closing match-up of old clauses with current rules). Say "पुराने Guide में" in the voice and put each clause number on the old-vs-new card or table in Production notes. Keep current Regulation, Rule, Table and Act numbers as they are. Section titles in the narration should not carry clause numbers either (for example "Part 4 · Guide clause 12").
> 
> 3. Leave everything else as it is.

`inputs/script.md` is the current script. Make **only** that change, and whatever it forces nearby so
the script still flows. Keep everything else word for word. Keep Postal Exams's voice
(`inputs/channel/voice.md`, `inputs/channel/long-form.md`).

Write the whole updated script to **`out/script-final.md`**, same format (title, promise, chapters,
Production notes), and replace the `## What changed` section at the end with 1–4 lines about this change.
Keep the length the material needs.

Then run `node check.mjs` and fix what it reports until it prints PASS.
