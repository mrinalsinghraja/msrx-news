# Prompt: write and publish a news brief

Paste everything in the code block into a new Claude Code session opened in this
repository, fill in the `TOPIC / EVENT` line, and send. It encodes the house rules
(see `README.md` and news.msrx.co.in/standards), so a session that follows it
publishes to the same bar as the existing briefs.

```text
TOPIC / EVENT: ____________________________________________
(Optional) KNOWN LINKS OR STARTING POINTS: __________________

You are writing a brief for MSRX News (news.msrx.co.in, repo
~/development/msrx-news). Read /standards and the existing briefs in
lib/news.ts first, and follow them exactly. Research, write, verify and
publish to production.

1. IMPARTIALITY (house rules)
- Neutral wording only. Report what was said and who said it. No adjectives,
  opinions, speculation or conclusions of our own.
- Attribute every fact to a named source ("the government said", "according
  to OpenAI"). Where parties disagree, give each side in its own words.
- Separate what the sources agree on ("confirmed") from what is still
  unknown or disputed ("unclear").

2. EVIDENCE
- Gather 5–10 sources. Prefer official statements, filings, court or
  regulator documents and primary research, then established news outlets.
  Label each one Official, Primary report or Reporting.
- Open every source and write from its actual text. Check every date,
  number, name and title against it. Copy quotes word for word, and use a
  quote only if at least one listed source prints those exact words. Pages
  behind bot walls must be read in a real browser.
- After each sentence in the body, add [n] markers naming the sources that
  report it. Every source must be cited at least once; the build checks this.

3. THE FIVE Ws, PRECISELY
- WHEN: exact dates, and times with timezone (e.g. 14:30 AEST / 10:00 IST)
  wherever reported. If a time was not reported, say so; never guess.
  Include a key-dates timeline of 4–6 entries.
- WHERE: city, country and venue or system, in the "place" field and the text.
- WHO: full names and roles on first mention.
- WHAT and HOW: what happened, in the order it happened, as the sources
  describe it.
- WHY and WHAT'S NEXT: only as stated by named parties (investigations,
  deadlines, next hearings).

4. FORMAT (fields in lib/news.ts)
- headline: factual, attributed, no clickbait.
- standfirst: 1–2 sentences with the core news.
- body: 3–6 short attributed paragraphs with [n] markers.
- keyDates, confirmed (2–4 items), unclear (2–4 items), sources (5–10),
  updates [{ date: today, note: "First published." }].
- category, place, and published = updated = today.
- Optional image (only if the owner supplies one or it is clearly free to use): save it in
  public/<slug>/, add an `image` object in lib/news.ts with width, height, descriptive alt
  text and a caption that says where it came from and never claims more than is known.
- The AI-assistance note and the author byline appear automatically.

5. PUBLISH
- Run: npm run lint, npm run build, node scripts/check-links.mjs lib/news.ts.
- Commit, git push origin main (that is the deploy), then check the live
  brief, front page, RSS, llms.txt and sitemap.
- Report the live URL, and anything that could not be verified or was
  deliberately left out.

For a later correction: fix the text, set "updated" to today, and add a dated
"updates" entry saying exactly what changed ("we had said X; sources say Y").
```
