# MSRX News

Short, neutral, sourced briefs on AI and technology news, published at
[news.msrx.co.in](https://news.msrx.co.in). A sister site to
[MSRX Articles](https://articles.msrx.co.in) and part of [MSRX](https://www.msrx.co.in).

Next.js 16 (App Router) + Tailwind CSS 4, statically generated, deployed on Vercel.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## How it works

Every story is one entry in `lib/news.ts`. The front page, each story page (`app/[slug]`),
its social card, the RSS feed, the sitemap and `llms.txt` are all generated from that list —
there is no per-story page to write.

## Adding a story

1. Add an entry at the **top** of `stories` in `lib/news.ts` (newest first). Choose the `slug`
   carefully; it becomes the URL.
2. Fill in: `headline`, `standfirst`, `category`, `published`/`updated`, `place`, `body`
   (short attributed paragraphs), `keyDates`, `confirmed`, `unclear`, `sources`, `updates`.
3. Run `npm run lint && npm run build`, check the page, then commit and push to `main`.
   Vercel deploys automatically.

## House rules

- **Neutral wording.** Report what was said and who said it. No adjectives of our own.
- **Attribute everything.** Every fact traces to a listed source; quotes are exact.
- **Say what isn’t known.** If a time, a cause or a detail wasn’t reported, put it under
  `unclear` instead of guessing.
- **Briefs, not original reporting.** Keep stories short and send readers to the sources.
- **Corrections are public.** Change `updated` and add a line to `updates` whenever a story
  changes.
