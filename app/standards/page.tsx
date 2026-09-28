import type { Metadata } from "next";
import Link from "next/link";
import { abs, AUTHOR, breadcrumbJsonLd, JsonLd, MAIN_SITE, SITE_NAME } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const path = "/standards";
const DESCRIPTION =
  "How MSRX News reports: neutral wording, every fact attributed, 5–10 linked sources per brief, what is confirmed kept apart from what is unclear, and a dated log of every change.";

export const metadata: Metadata = {
  title: "Editorial standards",
  description: DESCRIPTION,
  alternates: { canonical: path },
  openGraph: { title: `Editorial standards — ${SITE_NAME}`, description: DESCRIPTION, url: abs(path), siteName: SITE_NAME, type: "website" },
};

const trail = [
  { name: "MSRX", path: MAIN_SITE },
  { name: "News", path: "/" },
  { name: "Editorial standards", path },
];

export default function Standards() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <div className="max-w-3xl mx-auto px-5 sm:px-6 pt-8 pb-20">
        <Breadcrumbs trail={trail} />
        <h1 className="display text-[clamp(32px,5vw,52px)] text-[var(--text-primary)] mt-8 mb-4">Editorial standards</h1>
        <p className="text-[18px] leading-relaxed text-[var(--text-secondary)] mb-10">
          The rules every brief on {SITE_NAME} follows, and how to tell us when we get something wrong.
        </p>

        <div className="article-prose">
          <h2 id="neutral">Neutral and attributed</h2>
          <p>
            Briefs report what was said and who said it. We don’t add adjectives or opinions of our own. Every fact is attributed to a named source: a company’s statement, a government, a primary report, or published reporting.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Every brief ends with <strong>five to ten sources</strong>, each linked and labelled by type: <em>Official</em> (a statement from someone involved), <em>Primary report</em> (original research or data), or <em>Reporting</em> (other news organisations). Where we can, we link the official statement rather than coverage of it.
          </p>

          <h2 id="certainty">What is known, and what isn’t</h2>
          <p>
            Each brief keeps what the sources agree on apart from what is still unclear. Dates are the dates the sources give. If a time or a detail wasn’t reported, we say so instead of guessing.
          </p>

          <h2 id="updates">Updates and corrections</h2>
          <p>
            Stories change. Whenever a brief changes, its <em>Updated</em> date changes and a dated line is added to the <em>Updates</em> log at the bottom of the brief, saying what changed.
          </p>
          <p>
            Spotted an error? <a href={`${MAIN_SITE}/contact`}>Tell us</a>, with a link to a source if you have one.
          </p>

          <h2 id="independence">Independence</h2>
          <p>
            Briefs are written by {AUTHOR.name}. {SITE_NAME} is independent and is not affiliated with the companies or governments it reports on.
          </p>
        </div>

        <p className="mt-12">
          <Link href="/" className="font-semibold text-[var(--text-primary)] underline underline-offset-4">
            All news
          </Link>
        </p>
      </div>
    </>
  );
}
