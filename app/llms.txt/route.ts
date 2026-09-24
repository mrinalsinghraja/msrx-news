import { stories } from "@/lib/news";
import { MAIN_SITE, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# MSRX News

> Short, neutral briefs on AI and technology news. Each brief summarises published reporting and official statements, attributes every fact, and links its sources. Part of MSRX (${MAIN_SITE}).

## Stories

${stories.map((s) => `- [${s.headline}](${SITE_URL}/${s.slug}) — ${s.standfirst} (${s.category}, ${s.published})`).join("\n")}

## Elsewhere

- [MSRX Articles](https://articles.msrx.co.in): in-depth AI explainers.
- [RSS feed](${SITE_URL}/feed.xml)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
