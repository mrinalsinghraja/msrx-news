# CLAUDE.md — MSRX News

Writing, updating or correcting a brief? Follow `docs/PROMPT.md` step by step. It
is the standard brief for every story, and `README.md` and `/standards` have the
house rules.

Non-negotiables, enforced by the build or the monthly link check:
- Neutral and attributed: report who said what, with no opinions of our own.
- 5–10 sources per brief, each opened and read; `[n]` markers after every
  sentence, and every source cited.
- Exact dates, times with timezone, and places, as the sources give them; say
  so when something was not reported. Quotes word for word.
- Corrections change `updated` and add a dated `updates` entry saying what
  changed.
- Publishing = `npm run lint && npm run build`, then `git push origin main`
  (Vercel deploys), then verify the live brief.
