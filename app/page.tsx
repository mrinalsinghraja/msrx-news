import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, stories } from "@/lib/news";
import { abs, breadcrumbJsonLd, JsonLd, MAIN_SITE, SITE_NAME } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — AI and technology, sourced` },
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
};

const trail = [
  { name: "MSRX", path: MAIN_SITE },
  { name: "News", path: "/" },
];

export default function NewsFront() {
  const [lead, ...rest] = stories;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: SITE_NAME,
          numberOfItems: stories.length,
          itemListElement: stories.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: abs(`/${s.slug}`), name: s.headline })),
        }}
      />

      <div className="border-b border-[var(--border)]" style={{ background: "var(--stage)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-8 pb-12">
          <Breadcrumbs trail={trail} tone="stage" />
          <h1 className="display text-[clamp(34px,6vw,58px)] mb-3" style={{ color: "var(--stage-text-primary)" }}>
            News
          </h1>
          <p className="display-sm text-[clamp(17px,2.4vw,21px)] max-w-2xl" style={{ color: "var(--stage-text-secondary)" }}>
            Short, neutral briefs on AI and technology. Every fact attributed; every story linked to its sources.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-14">
        {lead && (
          <Link href={`/${lead.slug}`} className="card-hover group block rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--card)] p-7 sm:p-10">
            <p className="mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-tertiary)]">
              <span className="text-[var(--violet-deep)] font-semibold">{lead.category}</span> · {formatDate(lead.published)} · {lead.place}
            </p>
            <h2 className="display text-[clamp(26px,4vw,42px)] text-[var(--text-primary)] mt-3 max-w-4xl group-hover:underline underline-offset-4 decoration-2">
              {lead.headline}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--text-secondary)] max-w-3xl">{lead.standfirst}</p>
            <p className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--violet-deep)]">
              Read the brief · {lead.sources.length} sources <ArrowRight size={15} aria-hidden="true" />
            </p>
          </Link>
        )}

        {rest.length > 0 && (
          <ul className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {rest.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="block py-5 group">
                  <p className="mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--text-tertiary)]">
                    {s.category} · {formatDate(s.published)}
                  </p>
                  <h2 className="display-sm text-[20px] text-[var(--text-primary)] mt-1 group-hover:underline underline-offset-4">{s.headline}</h2>
                  <p className="mt-1 text-[14.5px] text-[var(--text-secondary)]">{s.standfirst}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-12 text-[14px] text-[var(--text-tertiary)] max-w-2xl">
          MSRX News summarises reporting and official statements; it does not do original reporting. Follow the <a href="/feed.xml" className="underline underline-offset-4 hover:text-[var(--text-primary)]">RSS feed</a>, and for deeper explainers see <a href="https://articles.msrx.co.in" className="underline underline-offset-4 hover:text-[var(--text-primary)]">MSRX Articles</a>.
        </p>
      </div>
    </>
  );
}
