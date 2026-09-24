import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { formatDate, getStory, stories } from "@/lib/news";
import { abs, AUTHOR, breadcrumbJsonLd, JsonLd, MAIN_SITE, metaDescription, ORG_ID, SITE_NAME } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

// Every story is known at build time, so every page is static HTML.
export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) return {};
  const description = metaDescription(s.standfirst);
  return {
    title: s.headline,
    description,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: s.headline, description, url: abs(`/${s.slug}`), siteName: SITE_NAME, type: "article", publishedTime: s.published, modifiedTime: s.updated },
    twitter: { card: "summary_large_image", title: s.headline, description },
  };
}

const KIND_STYLE = {
  Official: { c: "var(--fig-green)", s: "var(--fig-green-soft)" },
  "Primary report": { c: "var(--fig-violet)", s: "var(--fig-violet-soft)" },
  Reporting: { c: "var(--fig-cyan)", s: "var(--fig-cyan-soft)" },
} as const;

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) notFound();

  const trail = [
    { name: "MSRX", path: MAIN_SITE },
    { name: "News", path: "/" },
    { name: s.category, path: `/${s.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: s.headline,
          description: s.standfirst,
          url: abs(`/${s.slug}`),
          mainEntityOfPage: abs(`/${s.slug}`),
          datePublished: s.published,
          dateModified: s.updated,
          articleSection: s.category,
          contentLocation: { "@type": "Place", name: s.place },
          citation: s.sources.map((src) => src.url),
          author: { "@type": "Person", ...AUTHOR },
          publisher: { "@id": ORG_ID },
        }}
      />

      <article className="max-w-3xl mx-auto px-5 sm:px-6 pt-8 pb-16">
        <Breadcrumbs trail={trail} />
        <p className="mono text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--violet-deep)]">{s.category}</p>
        <h1 className="display text-[clamp(28px,5vw,46px)] text-[var(--text-primary)] mt-2">{s.headline}</h1>
        <p className="mt-4 text-[19px] leading-relaxed text-[var(--text-secondary)]">{s.standfirst}</p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] text-[var(--text-tertiary)]">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} aria-hidden="true" /> Published <time dateTime={s.published}>{formatDate(s.published)}</time>
            {s.updated !== s.published && <> · updated <time dateTime={s.updated}>{formatDate(s.updated)}</time></>}
          </span>
          <span className="inline-flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" /> {s.place}</span>
          <span>By {AUTHOR.name}</span>
        </div>

        <div className="rule-fade my-8" />

        <div className="space-y-5 text-[17px] leading-[1.75] text-[var(--text-secondary)]">
          {s.body.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
        </div>

        <section aria-labelledby="dates" className="mt-10">
          <h2 id="dates" className="display-sm text-[21px] text-[var(--text-primary)] mb-3">Key dates</h2>
          <ol className="relative ml-2 border-l-2 border-[var(--border-strong)] space-y-3">
            {s.keyDates.map((d) => (
              <li key={d.date} className="relative pl-5">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--violet-deep)]" aria-hidden="true" />
                <p className="mono text-[12.5px] font-semibold text-[var(--text-primary)]">{d.date}</p>
                <p className="text-[14.5px] text-[var(--text-secondary)]">{d.what}</p>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-[12.5px] text-[var(--text-tertiary)]">Dates as reported by the sources below.</p>
        </section>

        <section aria-labelledby="status" className="mt-10 grid sm:grid-cols-2 gap-3">
          <h2 id="status" className="sr-only">What is confirmed and what is unclear</h2>
          <div className="rounded-[var(--radius)] border-2 p-4" style={{ borderColor: "var(--fig-green)", background: "var(--fig-green-soft)" }}>
            <p className="text-[14.5px] font-bold" style={{ color: "var(--fig-green)" }}>✓ Sources agree</p>
            <ul className="mt-2 space-y-1.5 text-[14px] text-[var(--text-primary)]">
              {s.confirmed.map((c) => <li key={c}>• {c}</li>)}
            </ul>
          </div>
          <div className="rounded-[var(--radius)] border-2 p-4" style={{ borderColor: "var(--fig-amber)", background: "var(--fig-amber-soft)" }}>
            <p className="text-[14.5px] font-bold" style={{ color: "var(--fig-amber)" }}>? Still unclear</p>
            <ul className="mt-2 space-y-1.5 text-[14px] text-[var(--text-primary)]">
              {s.unclear.map((c) => <li key={c}>• {c}</li>)}
            </ul>
          </div>
        </section>

        <section aria-labelledby="sources" className="mt-10">
          <h2 id="sources" className="display-sm text-[21px] text-[var(--text-primary)] mb-3">Sources</h2>
          <ul className="space-y-2">
            {s.sources.map((src) => {
              const k = KIND_STYLE[src.kind];
              return (
                <li key={src.url}>
                  <a href={src.url} rel="noopener" className="flex items-start gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] px-4 py-3 hover:bg-[var(--paper-tint)]">
                    <span className="mono text-[10.5px] font-semibold uppercase tracking-[0.1em] rounded px-1.5 py-0.5 shrink-0 mt-0.5" style={{ color: k.c, background: k.s }}>{src.kind}</span>
                    <span className="flex-1 text-[14.5px] text-[var(--text-primary)]">{src.name}</span>
                    <ExternalLink size={15} className="text-[var(--text-tertiary)] shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="changes" className="mt-10 text-[13px] text-[var(--text-tertiary)]">
          <h2 id="changes" className="font-semibold text-[var(--text-secondary)] mb-1">Updates</h2>
          <ul>
            {s.updates.map((u) => <li key={u.date + u.note}>{formatDate(u.date)} — {u.note}</li>)}
          </ul>
          <p className="mt-4">
            This brief summarises published reporting and statements; it is not original reporting. See something wrong? <a href={`${MAIN_SITE}/contact`} className="underline underline-offset-4 hover:text-[var(--text-primary)]">Send a correction</a>.
          </p>
        </section>

        <Link href="/" className="mt-10 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--violet-deep)] hover:underline underline-offset-4">
          <ArrowLeft size={14} aria-hidden="true" /> All news
        </Link>
      </article>
    </>
  );
}
