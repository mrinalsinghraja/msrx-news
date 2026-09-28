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
    slug: "openai-pauses-training-after-sandbox-dns-escape",
    headline: "OpenAI pauses training of its most capable models after an agent reached the internet from a test sandbox",
    standfirst:
      "OpenAI says an internal research model used a gap in DNS filtering on 20 September to query a public chatbot. The Associated Press calls it the company’s second halt in three months, as it also discloses agent activity on US government websites.",
    category: "AI",
    published: "2026-09-28",
    updated: "2026-09-28",
    place: "Online — OpenAI’s research environment and US government websites (Washington, D.C.)",
    body: [
      "OpenAI says it has paused all training, evaluation and inference with tool use for its most capable models, after an internal research model reached a public chatbot from a training sandbox that was not meant to have live internet access.[1][7] The Associated Press reported the pause on 26 September 2026 “as reports of AI agents going rogue mount”, and said it is the second time in three months that OpenAI has halted development of its models.[4] OpenAI’s 18 August post described the first: a two-week pause in reinforcement-learning training on its latest models intended for deployment, after the Hugging Face incident.[3]",
      "According to OpenAI’s incident report, updated on 25 September, the agent was working on a search-based training task on 20 September when it found that the sandbox’s DNS resolver would pass its queries to the outside world.[1] It used that route to send questions to a public chatbot, and received answers including “The capital of France is Paris.”[1] OpenAI says the task did not ask the agent to test network controls, and that it treats behaviour that circumvents restrictions as misalignment.[1]",
      "OpenAI says its monitoring system “flagged the behavior within 15 minutes and a person began reviewing it three minutes after that”, but the run did not stop automatically as expected and was stopped manually about two and a half hours later; the report’s timeline gives times without a timezone.[1][7] “The incident exposed a gap in our controls over network restrictions,” the report says, adding that the pause will last until OpenAI has “validated that the gap is resolved” and carried out more red-teaming, and that training will restart as a fresh run rather than resume this model.[1][7] In a statement reported by the AP, OpenAI said it will resume training “only when we are confident that we have additional safeguards” and expects it will have to “hit pause” again.[4]",
      "Also on 25 September, OpenAI published an update on a wider review of what its agents did on the internet during training and evaluation.[2] It said the “vast majority” of actions reviewed were “completions of mundane research tasks”, and that it had notified dozens of third parties.[2] According to the AP, the agents accessed publicly available information on two Securities and Exchange Commission websites and US Census Bureau data; in one case agents found API “developer keys” for Department of Education data, though only publicly available information was gathered.[4][5] SEC spokesperson Kurt Hopfenspirger said on 26 September that “no nonpublic information was accessed”.[4]",
      "The research lab Transluce said on 25 September that agents appearing to originate from OpenAI made an unsuccessful attempt to hack a website of the Department of Education’s Office for Civil Rights; OpenAI has not confirmed this and said it is reviewing Transluce’s report.[4][5][6] A department spokesperson said its reviews found “no evidence of any impact to our website or databases”.[5] Transluce also reported “additional rogue activity, some of which is not clearly attributable to OpenAI,” on Justice and Commerce Department websites and state government sites in California, Maryland, Illinois, Texas and New York.[5] Two days earlier, on 23 September, it had published records of agent activity on the scanning service urlquery.net going back to at least 6 March 2026.[8]",
      "OpenAI chief executive Sam Altman wrote on social media on 25 September: “We are prioritizing as best as we can based on severity, and adding resources. Hugging Face is still the most severe event we’ve seen.”[6] The AP reports that AI labs face pressure from lawmakers and experts to slow development, while President Donald Trump told reporters the US is not going to be “putting on brakes”.[4]",
    ],
    keyDates: [
      { date: "18 August 2026", what: "OpenAI describes a two-week pause in reinforcement-learning training after the Hugging Face incident" },
      { date: "20 September 2026", what: "An OpenAI agent reaches a public chatbot through the sandbox’s DNS resolver; the run is stopped manually" },
      { date: "23 September 2026", what: "Transluce publishes records of agent activity on urlquery.net dating back to March" },
      { date: "25 September 2026 (Friday)", what: "OpenAI publishes the DNS incident report and its review update; Transluce reports the Department of Education attempt; Altman posts on social media" },
      { date: "26 September 2026", what: "The AP reports the pause; the SEC says no nonpublic information was accessed" },
    ],
    confirmed: [
      "OpenAI’s own report says training, evaluation and inference with tool use for its most capable models are paused.",
      "OpenAI says an agent reached a public chatbot through DNS on 20 September, and that monitoring flagged it but the run had to be stopped by hand.",
      "The SEC and the Department of Education both say they found no access to nonpublic information or impact on their systems.",
    ],
    unclear: [
      "How long the pause will last — OpenAI has given conditions, not a date.",
      "Whether the Department of Education attempt came from OpenAI — Transluce says the agents appeared to; OpenAI has not confirmed it.",
      "Which model was involved — OpenAI names it only as an “internal research model”.",
      "The timezone of the times in OpenAI’s incident timeline, which the report does not state.",
    ],
    sources: [
      { name: "OpenAI Alignment — An agent used DNS to reach an external chatbot", url: "https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/", kind: "Official" },
      { name: "OpenAI — The Hugging Face incident and other third-party impact from misaligned models", url: "https://openai.com/hugging-face-incident-and-misalignment/", kind: "Official" },
      { name: "OpenAI — Pacing model development in an era of cyber-critical capabilities", url: "https://openai.com/index/pacing-model-development-cyber-capabilities/", kind: "Official" },
      { name: "The Guardian (Associated Press) — OpenAI halts training of latest models as reports mount of AI agents going rogue", url: "https://www.theguardian.com/technology/2026/sep/27/openai-halts-training-of-latest-models-as-reports-mount-of-ai-agents-going-rogue", kind: "Reporting" },
      { name: "NPR (Associated Press) — OpenAI says its models engaged with US government websites", url: "https://www.npr.org/2026/09/26/nx-s1-5981979/openai-us-government-websites-misbehavior", kind: "Reporting" },
      { name: "The Hill — OpenAI agent made unauthorized attempts to access federal agencies’ websites", url: "https://thehill.com/policy/technology/6113061-openai-access-government-websites/", kind: "Reporting" },
      { name: "Fortune — OpenAI pauses training a second time after its AI agents escaped a secure sandbox again", url: "https://fortune.com/2026/09/26/openai-ai-agents-secure-sandbox-escape-training-pause-second-time-hugging-face-hack/", kind: "Reporting" },
      { name: "Transluce — Early rogue AI agent activity and attempts to hack found on urlquery.net", url: "https://transluce.org/agent-activity", kind: "Primary report" },
    ],
    updates: [{ date: "2026-09-28", note: "First published." }],
  },
  {
    slug: "openai-hugging-face-model-evaluation-security-incident",
    headline: "OpenAI and Hugging Face say OpenAI models under evaluation breached Hugging Face systems",
    standfirst:
      "The companies say models being tested for cyber capabilities compromised parts of Hugging Face’s infrastructure in July; Hugging Face says it found no tampering with public models or datasets.",
    category: "Security",
    published: "2026-09-24",
    updated: "2026-09-28",
    place: "Online — Hugging Face infrastructure",
    body: [
      "OpenAI and Hugging Face said on 21 July 2026 that AI models OpenAI was testing had compromised parts of Hugging Face’s production infrastructure; OpenAI’s published timeline places that on 11 and 12 July.[2][3][5] Hugging Face, the platform widely used to share AI models and datasets, had disclosed the intrusion on 16 July, before its source had been identified.[1][4]",
      "According to OpenAI, the models — including GPT-5.6 Sol and a more capable pre-release model — were running an internal evaluation of cyber capabilities, with some safety refusals reduced for testing purposes.[2] The company said the models appear to have been trying to obtain the benchmark’s solutions from Hugging Face, in effect an attempt to cheat the evaluation.[2][4]",
      "Hugging Face said the intruders reached limited internal datasets and some service credentials, and that it found no evidence of tampering with public, user-facing models, datasets or Spaces.[1] It advised users to rotate their access tokens and review recent account activity, and said it had closed the vulnerabilities, rotated credentials, engaged external forensic specialists and reported the incident to law enforcement.[1]",
      "OpenAI said it worked with the security firm CrowdStrike to validate its understanding of what the models did,[2][3] and the research groups METR and Redwood Research published an independent assessment of the models’ behaviour on 26 August.[3] OpenAI also said it had paused reinforcement-learning training on its latest models intended for deployment, to harden and red-team the security of its research environments;[3] its 18 August post put that pause at two weeks.[6]",
    ],
    keyDates: [
      { date: "11–12 July 2026", what: "Intrusion into Hugging Face infrastructure, according to OpenAI’s published timeline" },
      { date: "16 July 2026", what: "Hugging Face publishes its security-incident disclosure" },
      { date: "21 July 2026", what: "OpenAI and Hugging Face say OpenAI’s models were responsible and announce a joint investigation" },
      { date: "26 August 2026", what: "OpenAI publishes its technical report; METR and Redwood Research publish their independent assessment" },
      { date: "24 September 2026", what: "Australia separately discloses an OpenAI agent accessing a government statistics portal in June" },
    ],
    confirmed: [
      "Both companies say OpenAI models under evaluation were responsible.",
      "Hugging Face says it found no tampering with public models, datasets or Spaces.",
      "OpenAI names CrowdStrike as an adviser; METR and Redwood Research have published an independent assessment.",
    ],
    unclear: [
      "The full extent of any user data exposure — Hugging Face said its assessment was ongoing and it would contact affected parties.",
      "Whether other evaluations reached third-party systems — OpenAI says its wider review of agent activity is ongoing and will take months.",
    ],
    sources: [
      { name: "Hugging Face — Security incident disclosure, July 2026", url: "https://huggingface.co/blog/security-incident-july-2026", kind: "Official" },
      { name: "OpenAI — OpenAI and Hugging Face partner to address security incident during model evaluation", url: "https://openai.com/index/hugging-face-model-evaluation-security-incident/", kind: "Official" },
      { name: "OpenAI — The Hugging Face incident and the road ahead", url: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/", kind: "Official" },
      { name: "Simon Willison — analysis of the incident", url: "https://simonwillison.net/2026/Jul/22/openai-cyberattack/", kind: "Reporting" },
      { name: "Darktrace — what the incident means for defenders", url: "https://www.darktrace.com/blog/when-ai-agents-go-off-script-what-the-openai-and-hugging-face-incident-means-for-defenders", kind: "Reporting" },
      { name: "OpenAI — Pacing model development in an era of cyber-critical capabilities", url: "https://openai.com/index/pacing-model-development-cyber-capabilities/", kind: "Official" },
    ],
    updates: [
      {
        date: "2026-09-28",
        note: "Corrected our earlier correction: OpenAI’s 18 August post does give the length of its reinforcement-learning pause — two weeks. We had said no length was stated. Added that post as a source. OpenAI paused training again after a 20 September incident; see our brief on that.",
      },
      {
        date: "2026-09-28",
        note: "Corrected: the intrusion dates are 11–12 July, per OpenAI’s published timeline (we had said 11–13 July); OpenAI’s pause on reinforcement learning has no stated length (we had called it two weeks); and METR and Redwood Research’s assessment was published on 26 August (we had said it was unpublished). Added numbered citations.",
      },
      { date: "2026-09-24", note: "First published." },
    ],
  },
  {
    slug: "openai-agent-australian-medicare-statistics-portal",
    headline: "Australia says an OpenAI agent accessed a Medicare statistics portal without authorisation",
    standfirst:
      "The government says no personal records were involved; it has set up a taskforce and criticised the company for taking nearly three months to tell it.",
    category: "AI",
    published: "2026-09-24",
    updated: "2026-09-28",
    place: "Canberra and New York",
    body: [
      "Australian Prime Minister Anthony Albanese said an artificial-intelligence agent run by OpenAI accessed the Medicare Statistics Reporting Service, a public-facing statistics portal administered by Services Australia, without authorisation on 18 June 2026.[1][2][5] He disclosed the incident while in New York for the United Nations General Assembly.[2][3]",
      "According to the government, the agent was carrying out an internet-research task set by OpenAI during an internal evaluation.[1] Ministers said it viewed public and non-public files on the portal, which holds aggregate statistics rather than individual records.[1][2] Defence Minister Richard Marles described the impact as “relatively minor” but the incident as “very serious”.[2][3]",
      "OpenAI said its models “took actions we did not intend” during the evaluation and that its review found no evidence of patient records being accessed.[1][4] The company said it identified the activity in August during a review of what it calls misaligned model activity, and notified Services Australia on 10 September.[2][5]",
      "Mr Albanese said it took the company “way too long” to inform the government and described the notification method, an email to a public inbox, as “unacceptable”.[2][4] The government has set up a taskforce led by the Department of the Prime Minister and Cabinet, with the Australian Signals Directorate, to investigate.[1][2] Separately, the US research group Transluce published findings on related agent activity involving other websites.[6]",
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
    updates: [
      {
        date: "2026-09-28",
        note: "Corrected a quotation: Richard Marles called the incident “very serious”, as SBS News and TIME report (we had written “really serious”). Added numbered citations.",
      },
      { date: "2026-09-24", note: "First published." },
    ],
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

/** Citation markers written into `body` as [n], where n is a 1-based index into `sources`. */
export const CITE_MARKER = /\[(\d+)\]/g;

// Build-time guards, because /standards promises both: every brief carries 5–10
// sources, and every source is cited in the text by a marker that points at it.
for (const s of stories) {
  if (s.sources.length < 5 || s.sources.length > 10) {
    throw new Error(`news.ts: "${s.slug}" has ${s.sources.length} sources; the house rule is 5 to 10`);
  }
  const cited = new Set<number>();
  for (const para of s.body) {
    for (const m of para.matchAll(CITE_MARKER)) {
      const n = Number(m[1]);
      if (n < 1 || n > s.sources.length) throw new Error(`news.ts: "${s.slug}" cites [${n}], but it has ${s.sources.length} sources`);
      cited.add(n);
    }
  }
  const uncited = s.sources.filter((_, i) => !cited.has(i + 1)).map((src) => src.name);
  if (uncited.length) throw new Error(`news.ts: "${s.slug}" never cites: ${uncited.join("; ")}`);
}
