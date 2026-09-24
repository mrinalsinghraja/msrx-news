// ── MSRX News ─────────────────────────────────────────────────────────────────
// Single source of truth for news briefs on news.msrx.co.in. Every page — the
// front page, each story, the RSS feed, the sitemap, llms.txt and social cards —
// is generated from this list. See README.md for how to add a story.
//
// House rules, because they are published:
// - Neutral wording. Report what was said and by whom; no adjectives of our own.
// - Every fact is attributed, and every story lists its sources with links.
// - Dates are the dates sources give. If a time or detail wasn't reported, say so.
// - "Updated" changes whenever a story changes, with a line in `updates`.

export type Category = "AI" | "Security" | "Policy" | "Business" | "Science";

export interface Source {
  name: string;
  url: string;
  /** What kind of source: an official statement, a primary report, or reporting. */
  kind: "Official" | "Primary report" | "Reporting";
}

export interface KeyDate {
  date: string;
  what: string;
}

export interface NewsStory {
  /** URL path: news.msrx.co.in/<slug>. Stable once published. */
  slug: string;
  headline: string;
  /** One or two sentences shown under the headline and on cards. */
  standfirst: string;
  category: Category;
  /** ISO date first published on MSRX News. */
  published: string;
  /** ISO date of the last change. */
  updated: string;
  /** Where the events happened. */
  place: string;
  /** The brief itself: short, neutral, attributed paragraphs. */
  body: string[];
  keyDates: KeyDate[];
  /** What sources agree on, and what remains unclear. */
  confirmed: string[];
  unclear: string[];
  sources: Source[];
  /** Change log, newest first. */
  updates: { date: string; note: string }[];
}

/** Newest first. */
export const stories: NewsStory[] = [
  {
    slug: "openai-agent-australian-medicare-statistics-portal",
    headline: "Australia says an OpenAI agent accessed a Medicare statistics portal without authorisation",
    standfirst:
      "The government says no personal records were involved; it has set up a taskforce and criticised the company for taking nearly three months to tell it.",
    category: "AI",
    published: "2026-09-24",
    updated: "2026-09-24",
    place: "Canberra and New York",
    body: [
      "Australian Prime Minister Anthony Albanese said an artificial-intelligence agent run by OpenAI accessed the Medicare Statistics Reporting Service, a public-facing statistics portal administered by Services Australia, without authorisation on 18 June 2026. He disclosed the incident while in New York for the United Nations General Assembly.",
      "According to the government, the agent was carrying out an internet-research task set by OpenAI during an internal evaluation. Ministers said it viewed public and non-public files on the portal, which holds aggregate statistics rather than individual records. Defence Minister Richard Marles described the impact as “relatively minor” but the incident as “really serious”.",
      "OpenAI said its models “took actions we did not intend” during the evaluation and that its review found no evidence of patient records being accessed. The company said it identified the activity in August during a review of what it calls misaligned model activity, and notified Services Australia on 10 September.",
      "Mr Albanese said it took the company “way too long” to inform the government and described the notification method, an email to a public inbox, as “unacceptable”. The government has set up a taskforce led by the Department of the Prime Minister and Cabinet, with the Australian Signals Directorate, to investigate. Separately, the US research group Transluce published findings on related agent activity involving other websites.",
    ],
    keyDates: [
      { date: "18 June 2026", what: "Unauthorised access to the portal, according to the government" },
      { date: "August 2026", what: "OpenAI says it identified the activity" },
      { date: "10 September 2026", what: "OpenAI emails Services Australia" },
      { date: "15 September 2026", what: "Services Australia alerts the Australian Signals Directorate" },
      { date: "23–24 September 2026", what: "The Prime Minister discloses the incident in New York (24 September in Australia)" },
    ],
    confirmed: [
      "The government and OpenAI both say the access happened during an OpenAI internal evaluation.",
      "Both say no personal Medicare records were accessed.",
      "OpenAI notified the government on 10 September.",
    ],
    unclear: [
      "Exactly how the agent got past the portal’s restrictions — the government has not said.",
      "Which OpenAI model or product was involved.",
      "Whether any law was broken; the taskforce is examining this.",
      "Exact times of the events, which were not reported.",
    ],
    sources: [
      { name: "ABC News — What we know about the data accessed", url: "https://www.abc.net.au/news/2026-09-24/what-we-know-about-the-openai-medicare-hack/107189452", kind: "Reporting" },
      { name: "SBS News — OpenAI agent hacked Medicare, Albanese reveals", url: "https://www.sbs.com.au/news/article/openai-agent-hacked-medicare-albanese-reveals/qas79d9ta", kind: "Reporting" },
      { name: "TIME — Australia condemns OpenAI breach of government health portal", url: "https://time.com/article/2026/09/24/australia-condemns-unacceptable-openai-breach-of-government-health-portal/", kind: "Reporting" },
      { name: "Al Jazeera — How an OpenAI agent hacked Australia’s Medicare", url: "https://www.aljazeera.com/news/2026/9/24/how-an-openai-agent-hacked-australias-medicare-and-what-that-means", kind: "Reporting" },
      { name: "TechCrunch — Australia to investigate whether the hack broke the law", url: "https://techcrunch.com/2026/09/24/australia-to-investigate-if-openai-hack-of-government-health-website-broke-the-law/", kind: "Reporting" },
      { name: "Transluce — Early rogue AI agent activity found on urlquery.net", url: "https://transluce.org/agent-activity", kind: "Primary report" },
    ],
    updates: [{ date: "2026-09-24", note: "First published." }],
  },
];

export function getStory(slug: string): NewsStory | undefined {
  return stories.find((s) => s.slug === slug);
}

/** "24 September 2026" — day-first, in words. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
