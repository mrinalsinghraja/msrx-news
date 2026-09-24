import { stories } from "@/lib/news";
import { AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";

// RSS 2.0, generated from the same list that renders the site.
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc822 = (iso: string) => new Date(`${iso}T00:00:00Z`).toUTCString();

export function GET() {
  const items = stories
    .map(
      (s) => `    <item>
      <title>${esc(s.headline)}</title>
      <link>${SITE_URL}/${s.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/${s.slug}</guid>
      <pubDate>${rfc822(s.published)}</pubDate>
      <category>${esc(s.category)}</category>
      <description>${esc(s.standfirst)}</description>
    </item>`,
    )
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE_NAME)}</title>
    <link>${SITE_URL}/</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Short, neutral, sourced briefs on AI and technology news.</description>
    <language>en</language>
    <managingEditor>mrinalsinghraja@gmail.com (${esc(AUTHOR.name)})</managingEditor>
${stories[0] ? `    <lastBuildDate>${rfc822(stories[0].updated)}</lastBuildDate>\n` : ""}${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
