import { getStory, stories } from "@/lib/news";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "MSRX News story";
export const size = ogSize;
export const contentType = "image/png";

// One static card per story; unknown slugs 404 rather than render on demand.
export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getStory(slug);
  return renderOg({ eyebrow: s ? `MSRX News · ${s.category}` : "MSRX News", title: s?.headline ?? "MSRX News", subtitle: s?.standfirst });
}
