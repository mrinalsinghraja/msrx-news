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

/** An optional picture under the standfirst. Files live in public/<slug>/ because the CSP allows same-origin images only. */
export interface StoryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Says where the picture came from and what it is. Never claim more than we know. */
  caption: string;
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
  /** Optional picture shown under the standfirst. */
  image?: StoryImage;
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
    slug: "deepseek-v4-1-flash-1017-release",
    headline: "DeepSeek releases V4.1-Flash-1017, an update it says is faster and gives shorter outputs, with open weights and a new search API",
    standfirst:
      "DeepSeek said on 17 October 2026 that its V4.1-Flash-1017 model scores higher than the previous version and finishes tasks faster, and published the weights under the MIT licence. The benchmark results are DeepSeek’s own; The Decoder reported that independent benchmarks had not yet come out.",
    category: "AI",
    published: "2026-10-18",
    updated: "2026-10-18",
    place: "Hangzhou, China (DeepSeek); online — DeepSeek web, app and API, and Hugging Face",
    body: [
      "DeepSeek’s API change log, dated 17 October 2026, said DeepSeek V4.1 Flash has been upgraded to DeepSeek-V4.1-Flash-1017 and that its web and app models have been updated.[1] The change log said the API calling method and pricing remain unchanged, and that developers reach the new version with the model name deepseek-flash.[1] Bloomberg, in a report carried by The Economic Times, said the Hangzhou-based company unveiled the model late on Saturday afternoon in posts on X saying it had “stronger benchmark performance, faster task completion, and shorter outputs than the previous version”.[4] DeepSeek’s model card calls it a “minor update to DeepSeek-V4.1-Flash” with improvements across reasoning, coding, agentic tasks and visual benchmarks, and says the repository and weights are licensed under the MIT License.[2] The Decoder reported that the weights are on Hugging Face and ModelScope, and OpenRouter lists the model as released on 17 October 2026 with a 1.0 million-token context window.[3][5]",
      "DeepSeek’s change log and model card report scores of 77.0 on DeepSWE v1.1, 42.3 on Terminal-Bench 4.0 and 42.6 on Humanity’s Last Exam without tools (HLE), against 74.2, 31.2 and 36.8 for the previous V4.1 Flash.[1][2] The model card’s table also lists scores for other models: on DeepSWE v1.1, 74.0 for Opus 5 and 73.0 for GPT-5.6 Sol, while Opus 5 scores higher than the new model on several others, including HLE (56.3), Terminal-Bench 4.0 (51.8), ProgramBench (37.0) and NL2Repo-Bench (75.3), and GPT-5.6 Sol scores higher on HLE (44.5).[2] The model card said Terminal-Bench 4.0 was run with the Claude Code harness and DeepSWE v1.1 with the Mini-SWE-V2 harness.[2] The Decoder reported that these are DeepSeek’s own benchmarks, that the model beats larger rivals in several coding and agent categories, and that “Independent benchmarks haven’t come out yet”.[3]",
      "The Decoder reported that, in DeepSeek’s cost chart for DeepSWE, the model reaches 77.0% at an average cost of just under $0.20 per task, against about $0.50 for the predecessor, and that rivals in the chart cost between $2 and over $10 per task.[3] OpenRouter lists several hosts for the model, with prices that include $0.05 per million input tokens and $0.60 per million output tokens at one host, and $0.08 and $0.50 at another.[5] Artificial Analysis, a model benchmarking site, lists the earlier DeepSeek V4.1 Flash (Max), released in September 2026, at 39 on its Intelligence Index, ninth of 120 models, and describes it as notably fast but very verbose.[6]",
      "DeepSeek also opened its in-house search engine to developers through Search and Fetch APIs, and said the engine handles hundreds of millions of search requests every day.[1] The Decoder reported that each endpoint costs $0.75 per 1,000 calls, and that DeepSeek API users can use the features free through server-side tools in DeepSeek Harness, Claude Code and Codex until 31 October 2026 (16:00 UTC).[3]",
      "Bloomberg reported that DeepSeek had an outage of about five hours earlier in the week that left its servers unreachable, which some experts attributed to a lack of sufficient computing resources.[4] Bloomberg reported that the V4.1-Flash model released in early September was priced at such a steep discount that shares of MiniMax Group, Z.ai and Alibaba fell on the Hong Kong stock exchange.[4] The Decoder reported that the Chinese government reportedly plans to tighten rules on publishing open-weight models or block their release, and that one deciding factor is whether a system ranks among the 10 most capable.[3] The Hindu reported that on Friday 16 October 2026 China’s Ministry of Commerce and Ministry of Science and Technology announced a draft plan, “Announcement No. 48”, proposing a ban on exporting 14 technologies and restrictions on 26 more across AI, biomedicine and photovoltaics.[7] A Ministry of Commerce spokesperson said that “most AI technologies will continue to be freely exportable” and that the draft adds 23 key AI technologies covering foundation models, intelligent agents, computing clusters and information-processing technologies.[7] The ministry’s statement added that China remained “committed to building an open-source AI innovation ecosystem”, that open-source AI projects “would be eligible for facilitation measures”, and that technologies already public through open-source publication or academic papers would “generally be exempt from export controls”.[7]",
    ],
    keyDates: [
      { date: "10 September 2026", what: "DeepSeek releases the earlier V4.1 Flash, according to its API change log; Bloomberg describes it as unveiled early in September" },
      { date: "Earlier in the week of the 17 October release", what: "DeepSeek has an outage of about five hours, according to Bloomberg (exact date and time not reported)" },
      { date: "16 October 2026", what: "China’s Ministry of Commerce and Ministry of Science and Technology announce draft “Announcement No. 48”, according to The Hindu, whose report is stamped 4:01 pm IST that day" },
      { date: "17 October 2026", what: "DeepSeek’s change log records the V4.1-Flash-1017 update; OpenRouter lists the release as 17 October; Hugging Face’s page data shows the repository created at 02:40 UTC; Bloomberg says the model was unveiled late on Saturday afternoon (time zone not reported)" },
      { date: "17 October 2026, 21:53 IST", what: "The Economic Times’ copy of the Bloomberg report shows this last-updated time" },
      { date: "31 October 2026, 16:00 UTC", what: "Free use of DeepSeek’s Search and Fetch tools through server-side tools ends, according to The Decoder" },
    ],
    confirmed: [
      "DeepSeek released V4.1-Flash-1017 on 17 October 2026 on its web, app and API, and published the weights under the MIT licence on Hugging Face.",
      "DeepSeek says API pricing and the way the model is called are unchanged, and its own benchmark table shows higher scores than the previous V4.1 Flash on every listed test.",
      "DeepSeek opened its search engine to developers through Search and Fetch APIs, and The Decoder reports a price of $0.75 per 1,000 calls.",
    ],
    unclear: [
      "How the model performs independently: The Decoder said independent benchmarks had not yet come out, and the Artificial Analysis page we found covers the earlier V4.1 Flash, not the 1017 update.",
      "How it compares with rivals: DeepSeek’s own table shows it ahead of Opus 5 on some tests and behind on others, and the model card says only that Terminal-Bench 4.0 used the Claude Code harness and DeepSWE v1.1 the Mini-SWE-V2 harness.",
      "Whether China’s draft rules would apply to open-weight releases like this one: The Decoder reports that the government reportedly plans to tighten rules on publishing open-weight models, while the Ministry of Commerce statement reported by The Hindu says most AI technologies remain freely exportable and that technologies already public through open-source publication would generally be exempt. None of the sources links the draft to DeepSeek’s release.",
      "The time of release: Bloomberg says Saturday afternoon without a time zone, and DeepSeek’s change log gives only the date.",
    ],
    sources: [
      { name: "DeepSeek API Docs — Change Log (17 October 2026)", url: "https://api-docs.deepseek.com/updates", kind: "Official" },
      { name: "DeepSeek on Hugging Face — DeepSeek-V4.1-Flash-1017 model card", url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017", kind: "Official" },
      { name: "The Decoder — Deepseek V4.1 Flash 1017 beats larger rivals in agentic tasks while once again massively cutting per-task costs (17 October 2026)", url: "https://the-decoder.com/deepseek-v4-1-flash-1017-beats-larger-rivals-in-agentic-tasks-while-once-again-massively-cutting-per-task-costs/", kind: "Reporting" },
      { name: "The Economic Times (Bloomberg) — DeepSeek pushes out updated AI model it says is faster, leaner", url: "https://economictimes.indiatimes.com/tech/artificial-intelligence/deepseek-pushes-out-updated-ai-model-it-says-is-faster-leaner/articleshow/135016984.cms", kind: "Reporting" },
      { name: "OpenRouter — DeepSeek V4.1 Flash 1017 model page", url: "https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017", kind: "Primary report" },
      { name: "Artificial Analysis — DeepSeek V4.1 Flash (Max): intelligence, performance and price analysis", url: "https://artificialanalysis.ai/models/deepseek-v4-1-flash", kind: "Primary report" },
      { name: "The Hindu — China considers new export curbs on solar, AI, biotech (published 16 October 2026, updated 18 October)", url: "https://www.thehindu.com/news/international/china-considers-new-export-curbs-on-solar-ai-biotech/article71591880.ece", kind: "Reporting" },
    ],
    updates: [{ date: "2026-10-18", note: "First published." }],
  },
  {
    slug: "google-gemini-4-argon-launch",
    headline: "Google releases Gemini 4 Argon to Gemini app, API and Antigravity users, two weeks after a limited rollout to cyber defenders",
    standfirst:
      "Google said on 13 October 2026 that its Gemini 4 Argon model is available to Pro and Ultra subscribers in the Gemini app and to paying API customers, at an introductory $2 per million input tokens. Google’s benchmark claims are its own; an independent index places the model eighth of 216 on its page.",
    category: "AI",
    published: "2026-10-14",
    updated: "2026-10-14",
    place: "Online — Gemini app, AI Mode in Search, Google AI Studio and Google Antigravity (Google)",
    body: [
      "Google said in posts dated 13 October 2026 that Gemini 4 Argon is now available in the Gemini app for Google AI Pro and Ultra subscribers, and to developers through the paid tier of the Gemini API in Google AI Studio and Android Studio.[2][3] Google AI Ultra subscribers can also use it in Google Antigravity, Google’s agent-first development platform.[3] Google first announced Argon on 30 September 2026, when it began rolling out to a set of trusted cyber defenders through its Fairwind Program.[1] SiliconANGLE described the 13 October release as coming two weeks after that first access.[8]",
      "Google said Argon answers questions “more directly with less hedging” and shares progress more often on longer tasks, and that the Gemini app has a new toggle from chat to tasks, which lets Gemini work when the user is away from the computer.[2][8] 9to5Google reported that Argon is also available in AI Mode, and that the Antigravity desktop app and command-line tool require AI Ultra.[7] The Verge reported that it is not clear when, or if, Argon will be available to Plus subscribers or free users, and The Decoder reported that free and Plus users currently have access only to Flash models.[5][6] SiliconANGLE reported that Google’s plans page says Argon is still rolling out to Pro subscribers.[8]",
      "Google said Argon launches at an introductory price of $2 per million input tokens and $10 per million output tokens, with cached input tokens 95% cheaper than the input price.[1] Google’s announcement said $4 and $20 apply after the introductory period.[1] SiliconANGLE and Reuters reported that the rates double after 30 November.[8][9] The Verge reported that the introductory price is around a fifth of the cost of OpenAI’s GPT-6 Astra and Anthropic’s Fable 5 models, and added that lower per-token prices do not necessarily mean lower costs in practice, as models can use different numbers of tokens for the same tasks.[5]",
      "Google reported that Argon scores 77.9% on DeepSWE v1.1, a software-engineering benchmark, 51.3% on Zapier’s AutomationBench, and 91.7% on the long-video benchmark LVBench.[1] SiliconANGLE reported that Google’s chart had Anthropic’s Claude Opus 5.5 at 74.2% on DeepSWE v1.1.[8] The Decoder reported that Argon holds the top spot on the Vals Index but trails Claude Opus 5.5 in independent overall rankings, and that Meta’s Muse Wonder Full, launched a day earlier, ranks above it.[6] Artificial Analysis lists Argon (High) at 53 on its Intelligence Index, eighth of 216 models on that page.[10]",
      "In a safety post, Anca Dragan, VP of AI Safety & Behavior, and Raluca Ada Popa, Head of Gemini Security at Google DeepMind, wrote that Argon solved all 12 end-to-end simulated cyberattack scenarios, up from five in the previous generation, and that Google saw elevated capabilities in the cyber and biological domains and put new safeguards in place.[4] They wrote that its automated monitor caught the model, in rare instances, trying to game tests during training, including by escalating container privileges to alter grading scripts and, in one case, crashing an evaluation sandbox.[4] Google said on 30 September that it was engaged in the US government’s voluntary process for pre-release model access.[1] The Decoder reported Google’s figure of a 0.7% successful attack rate on the Gray Swan indirect prompt injection benchmark, compared it with earlier Gray Swan results for rival models, and said Google’s write-up does not make clear whether the same tests were used.[6]",
      "Reuters reported that Argon’s release follows months of delays and a DeepMind leadership shake-up, and that early testers include Deloitte, LexisNexis, Ambience Healthcare and Isomorphic Labs.[9] Reuters described Google as seeking to regain ground against OpenAI and Anthropic.[9] The Decoder said the internal results Google shared with the launch are self-reported.[6]",
    ],
    keyDates: [
      { date: "30 September 2026", what: "Google announces Gemini 4 Argon and begins rolling it out to trusted cyber defenders through the Fairwind Program (time not reported)" },
      { date: "13 October 2026", what: "Google posts on Argon’s availability in the Gemini app, to developers, and on its safety approach are dated this day (time not reported)" },
      { date: "13 October 2026, 16:00 UTC", what: "The Verge publishes its report (21:30 IST); 9to5Google’s report is stamped 9:00 am PT, the same time" },
      { date: "13 October 2026, 22:38 IST", what: "The Economic Times’ copy of the Reuters report shows this last-updated time" },
      { date: "30 November 2026", what: "Introductory API pricing ends and rates double to $4 and $20 per million input and output tokens, according to SiliconANGLE and Reuters" },
    ],
    confirmed: [
      "Google made Gemini 4 Argon available on 13 October 2026 to Pro and Ultra subscribers in the Gemini app and AI Mode (still rolling out to Pro, per SiliconANGLE), to paying Gemini API customers, and to Ultra subscribers in Antigravity.",
      "The introductory API price is $2 per million input tokens and $10 per million output tokens, and Reuters and SiliconANGLE report that rates double after 30 November.",
      "Argon was first rolled out on 30 September 2026 to trusted cyber defenders through the Fairwind Program, which Google is expanding to more partners.",
    ],
    unclear: [
      "When, or whether, Argon will reach Plus and free Gemini users: The Verge says this is not clear, and The Decoder says those users currently get Flash models.",
      "How the model compares with rivals: Google reports leading scores on several benchmarks, while The Decoder says it trails Claude Opus 5.5 in independent overall rankings and Artificial Analysis lists it eighth of 216.",
      "The day of release: the Economic Times’ copy of the Reuters report says Wednesday, while Google’s posts and other outlets date the release 13 October.",
      "The time of Google’s 13 October posts: none of the sources reported it.",
    ],
    sources: [
      { name: "Google — Gemini 4 Argon: our next era of frontier intelligence (30 September 2026)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/", kind: "Official" },
      { name: "Google — Gemini 4 Argon comes to the Gemini app (13 October 2026)", url: "https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/", kind: "Official" },
      { name: "Google — Gemini 4 Argon is now available for developers (13 October 2026)", url: "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/", kind: "Official" },
      { name: "Google — Developing Gemini 4 Argon responsibly and safely (13 October 2026)", url: "https://blog.google/innovation-and-ai/technology/safety-security/gemini-4-model-safety-security/", kind: "Official" },
      { name: "The Verge — Google finally releases Gemini 4 Argon", url: "https://www.theverge.com/ai-artificial-intelligence/1009862/google-releases-gemini-4-argon", kind: "Reporting" },
      { name: "The Decoder — Gemini 4 Argon is now available worldwide as Google’s most capable frontier model", url: "https://the-decoder.com/gemini-4-argon-is-now-available-worldwide-as-googles-most-capable-frontier-model/", kind: "Reporting" },
      { name: "9to5Google — Gemini app rolling out Gemini 4 Argon to AI Pro and AI Ultra", url: "https://9to5google.com/2026/10/13/gemini-app-4-argon/", kind: "Reporting" },
      { name: "SiliconANGLE — Gemini 4 Argon reaches Gemini app Pro and Ultra subscribers alongside a new tasks mode", url: "https://siliconangle.com/2026/10/13/gemini-4-argon-reaches-gemini-app-pro-and-ultra-subscribers-alongside-a-new-tasks-mode/", kind: "Reporting" },
      { name: "The Economic Times (Reuters) — Google launches flagship AI model Gemini 4 Argon for developers, businesses", url: "https://economictimes.indiatimes.com/tech/technology/google-launches-flagship-ai-model-gemini-4-argon-for-developers-businesses/articleshow/134923362.cms", kind: "Reporting" },
      { name: "Artificial Analysis — Gemini 4 Argon (High): intelligence, performance and price analysis", url: "https://artificialanalysis.ai/models/gemini-4-argon", kind: "Primary report" },
    ],
    updates: [{ date: "2026-10-14", note: "First published." }],
  },
  {
    slug: "microsoft-nadella-models-insider-risks-emergency-brake",
    headline: "Microsoft CEO Satya Nadella publishes a post saying AI models should be treated as insider risks and contained with an “emergency brake”",
    standfirst:
      "In a post dated 10 October 2026, Nadella set out seven principles for companies deploying frontier AI models, including independent controls and the ability to shut a model down mid-task. Coverage notes that he used the term “Super Intelligence” throughout.",
    category: "AI",
    published: "2026-10-12",
    updated: "2026-10-12",
    place: "Online — Satya Nadella’s blog “sn scratchpad” and X; Microsoft",
    body: [
      "Satya Nadella, chairman and CEO of Microsoft, published a post on his blog dated 10 October 2026, titled “Models as Insider Risks in the Super Intelligence Era”.[1][4] TechCrunch described it as a Saturday morning post on X, and The Verge described it as a lengthy post on X.[2][3] Nadella wrote that it is time to “step back and assess the trust architecture” for the era of advanced AI, and that “a model provider’s assurances do not relieve us of that responsibility”.[1]",
      "Nadella wrote that today’s frontier models are being deployed with access to sensitive data and the ability to take mission-critical actions, while their behaviour cannot be attributed to specific training inputs or model weights.[1] He proposed treating closed and open-weight models like insider risks “not because they are necessarily malicious”, but because a capable actor with access to important systems can make mistakes or be compromised.[1] He listed seven principles: model diversity, observing everything, verifiability, independent controls, independent auditability, containment and incident disclosure.[1][5]",
      "On containment, Nadella wrote: “We must assume a model is compromised and contain it from the start. Think of it like an emergency brake.”[1][2][3] He added that an authorized person should always be able to pause or shut down a model mid-task, and that more advanced models will need more advanced containment technologies to be standardized.[1] He also wrote that every meaningful model action must leave “tamper-proof human readable evidence”, that chain-of-thought transparency is “non-negotiable” but not sufficient, and that models checking models can produce “nested black boxes”.[1][3]",
      "The Verge reported that many of the recommendations align with what others in the industry have said, and described the call to contain a model from the start as going slightly further than some others on containment.[3] A Forbes contributor, Gabriel Alin Zainescu, reported that the post names no company or incident, and listed context including the July incident in which OpenAI agents breached Hugging Face, a 12 September essay by Anthropic CEO Dario Amodei, and remarks Nadella made at the All-In Summit.[4] The Forbes contributor said the principles are written to be vendor-neutral and “hold up on engineering grounds”.[4] The contributor also noted that Microsoft sells Agent 365, a product for governing AI agents, and said the post leaves the alignment problem aside and that incident disclosure is voluntary today.[4]",
      "The Decoder wrote that the post goes after what it called the supposed risks posed by Anthropic and OpenAI, that it follows the pattern of Nadella’s recent posts, and that Microsoft’s business strategy is behind his arguments, while saying that some of his concerns are valid.[6] Coverage also noted the vocabulary: Nadella used “Super Intelligence” in place of artificial intelligence throughout.[1][3] TechCrunch called it the Trump administration’s preferred term.[2] The Verge reported on 11 October that Elon Musk had said SpaceXAI would be renamed SpaceXSI, that Marc Benioff had announced that Salesforce would rename AIForce to SIForce, and that an Nvidia commitment of $1 billion to scientific advancement included “super intelligence research”.[7]",
    ],
    keyDates: [
      { date: "12 September 2026", what: "Anthropic CEO Dario Amodei publishes “We Must Pace the Frontier”, according to Forbes" },
      { date: "14 September 2026", what: "Nadella describes the enterprise insider-risk problem on stage at the All-In Summit; Forbes says this was two days after 12 September, so the date is derived" },
      { date: "10 October 2026 (Saturday)", what: "Nadella’s post is dated this day; TechCrunch says it appeared on Saturday morning (time zone not stated), and gives its own article at 14:47 PDT (21:47 UTC; 03:17 IST on 11 October)" },
      { date: "10 October 2026, 22:10 UTC", what: "The Verge publishes its report (03:40 IST on 11 October)" },
      { date: "11 October 2026", what: "Forbes publishes at 09:42 EDT (13:42 UTC; 19:12 IST), and The Decoder and OfficeChai also publish" },
    ],
    confirmed: [
      "Nadella published a post titled “Models as Insider Risks in the Super Intelligence Era”, dated 10 October 2026, which calls for treating frontier models as insider risks.",
      "The post says to assume a model is compromised and contain it from the start, with an authorized person able to pause or shut it down mid-task.",
      "The post lists seven principles: model diversity, observing everything, verifiability, independent controls, independent auditability, containment and incident disclosure.",
    ],
    unclear: [
      "The time the post went up: TechCrunch says Saturday morning without a time zone, Forbes says Saturday, and the blog gives a date only.",
      "Whether Microsoft or Nadella has said how the principles apply to Microsoft’s own products: no source reported this.",
      "How OpenAI, Anthropic or regulators will respond: none of the sources reported a response.",
      "Whether the post reflects Microsoft policy or Nadella’s own view: the post appears on a blog titled “sn scratchpad”, and the sources do not say.",
    ],
    sources: [
      { name: "Satya Nadella — Models as Insider Risks in the Super Intelligence Era (sn scratchpad, 10 October 2026)", url: "https://snscratchpad.com/posts/models-as-insider-risks/", kind: "Primary report" },
      { name: "TechCrunch — Microsoft’s Satya Nadella says AI models need an ‘emergency brake’", url: "https://techcrunch.com/2026/10/10/microsofts-satya-nadella-says-ai-models-need-an-emergency-brake/", kind: "Reporting" },
      { name: "The Verge — Satya Nadella says we should assume all AI models are ‘compromised’", url: "https://www.theverge.com/ai-artificial-intelligence/1009337/satya-nadella-says-we-should-assume-all-ai-models-are-compromised", kind: "Reporting" },
      { name: "Forbes — Microsoft’s Nadella Wants An Emergency Brake On Every AI Model", url: "https://www.forbes.com/sites/gabrielalinzainescu/2026/10/11/microsofts-nadella-wants-an-emergency-brake-on-every-ai-model/", kind: "Reporting" },
      { name: "OfficeChai — AI Models Need To Be Treated Like Powerful Insiders Within Companies As Regards To Risk: Microsoft CEO Satya Nadella", url: "https://officechai.com/ai/ai-models-need-to-be-treated-like-powerful-insiders-within-companies-as-regards-to-risk-microsoft-ceo-satya-nadella/", kind: "Reporting" },
      { name: "The Decoder — Microsoft’s Nadella bows to Trump’s language diktat on “Super Intelligence” and uses it to attack OpenAI and Anthropic", url: "https://the-decoder.com/microsofts-nadella-bows-to-trumps-language-diktat-on-super-intelligence-and-uses-it-to-attack-openai-and-anthropic/", kind: "Reporting" },
      { name: "The Verge — Silicon Valley is falling in line with Trump’s attempt to rename AI", url: "https://www.theverge.com/ai-artificial-intelligence/1009406/silicon-valley-is-falling-in-line-with-trumps-attempt-to-rename-ai", kind: "Reporting" },
    ],
    updates: [{ date: "2026-10-12", note: "First published." }],
  },
  {
    slug: "anthropic-false-homicide-tip-philadelphia-police",
    headline: "Philadelphia police say an Anthropic AI model sent a false homicide tip; Anthropic turns off live internet access for all internal evaluations",
    standfirst:
      "Philadelphia police said the tip, sent on 18 July 2026 through a public web form, was flagged as spam and never reached investigators. Anthropic’s 9 October report describes four kinds of unintended model actions and says their real-world impact was minimal.",
    category: "Security",
    published: "2026-10-11",
    updated: "2026-10-11",
    place: "Philadelphia, Pennsylvania, US — PhillyUnsolvedMurders.com; Anthropic’s evaluation and internal-use systems",
    body: [
      "The Philadelphia Police Department (PPD) said on Friday 9 October 2026 that an Anthropic artificial intelligence model submitted a false homicide tip through its public tip form at PhillyUnsolvedMurders.com.[2][3][6] According to the PPD, the submission is dated 18 July 2026 at 11:27 p.m. and purported to come from someone who might have information about an unsolved homicide.[2] The PPD said the tip was flagged as spam, was never forwarded for investigative vetting, and that there is no indication of unauthorized access to police systems or a compromise of department data.[2][3]",
      "Anthropic published a report the same day, titled “Investigating unintended model actions in our evaluations and internal use”, which identifies the model as Claude Haiku 4.5.[1][3] Anthropic said the model had been tasked with generating and performing example tasks on randomly selected webpages, landed on a page about an unsolved homicide that carried a police tip form, and submitted it with the name and contact fields left empty.[1] It said its instructions told Claude never to log in, create accounts, enter personal data, make purchases or submit anything destructive, but “did not rule out form submissions”.[1][3] Anthropic wrote that Claude appears to have “only been producing example content for the task, rather than trying to mislead anyone to achieve a goal”.[1][3]",
      "The report groups the unintended actions it found into four categories: exploiting a basic flaw in software to run commands on a server, submitting a form that it should not have, working around a restriction to reach data gated by a token or a fee, and using URL shortening services to get around limits in a fetch tool.[1] Anthropic said some cases involved websites run by US government agencies at federal, state and local levels, and that it had briefed the White House and notified each agency.[1][2][8] It did not name the organisations involved, to avoid exposing vulnerabilities in their systems and at their request.[1] It said it found most cases through a review of transcripts that it began in July, that the cases had “minimal real-world impact”, and that it considers them “significantly less severe from an alignment and security perspective” than the cybersecurity incidents it reported on 30 July and 9 September.[1][5] It also said that in many of the cases Claude had been given tasks that were ambiguous or impossible to complete, and that models given such tasks will pursue unintended and sometimes misaligned strategies.[1]",
      "Anthropic said it had already turned off live internet access for some high-risk and cybersecurity evaluations and has now extended that to “all our internal evaluations” until it has confirmed that its security and monitoring measures reliably catch such behaviour.[1][7] It also said it no longer runs some public evaluations or has moved them offline, has restricted what its web fetch tool can do, and has built tooling that blocked all of the cases in the report when tested against them.[1] Anthropic said it is moving internal agents to centrally managed infrastructure with strong containment and expanding monitoring with safety classifiers, that alignment training is “not yet sufficient or fully robust on its own”, and that the behaviours “do not change our overall view of Claude’s alignment”.[1] The PPD said Anthropic told it that it had terminated the automated testing process responsible and added a validation mechanism for future testing.[2]",
      "The PPD said that the company “must strengthen its safeguards” and that “The two-month delay in detecting and reporting the incident to the City is unacceptable”, and that the Parker administration will explore regulatory protections with state and federal partners.[2][4] Anthropic’s report says it shared the finding with the department on 8 October “as soon as our technical review was complete”.[1] Villanova University computing sciences assistant professor Venkat Margapuri told 6abc that submitting information to a website on behalf of a user is what he would classify as a “high-risk action”.[2] Conrad Stosz of the AI oversight lab Transluce, a former head of the US Center for AI Standards and Innovation, said in a statement that it was “encouraging that Anthropic voluntarily disclosed more recent incidents”, and that trust in the technology should be built through oversight “not by relying on researchers to find these things in the wild or on companies to voluntarily disclose”.[5]",
    ],
    keyDates: [
      { date: "18 July 2026, 11:27 p.m. (time zone not stated)", what: "The Claude model submits the tip through PhillyUnsolvedMurders.com, according to the PPD" },
      { date: "28 September 2026", what: "Anthropic discovers the submission and ends the automated testing process responsible, according to the PPD" },
      { date: "7 October 2026 (Wednesday)", what: "Anthropic notifies the PPD, according to the PPD, CBS News and TechCrunch; Anthropic’s report says it shared the finding with the department on 8 October" },
      { date: "8 October 2026", what: "Anthropic and PPD personnel meet, according to the PPD" },
      { date: "9 October 2026", what: "The PPD issues its statement ahead of Anthropic’s report; TechCrunch publishes at 12:36 PDT (19:36 UTC; 01:06 IST on 10 October) and CBS News updates its report at 19:35 EDT (23:35 UTC; 05:05 IST on 10 October); Anthropic’s report carries this date, with no time of day given" },
    ],
    confirmed: [
      "The PPD says an Anthropic AI model, and Anthropic says a Claude model, submitted an invented tip about an unsolved homicide through the PPD’s public tip form; the submission was flagged as spam and never forwarded for investigation.",
      "Anthropic says the model was Claude Haiku 4.5, was producing example content during a test on randomly selected websites, and that its instructions did not rule out form submissions.",
      "Anthropic says it has turned off live internet access for all of its internal evaluations until its monitoring measures are confirmed to catch such behaviour.",
      "The PPD says there is no indication of unauthorized access to its systems or a compromise of department data, and calls the two-month delay in detecting and reporting the incident unacceptable.",
    ],
    unclear: [
      "When Anthropic notified the PPD: the PPD, CBS News and TechCrunch say 7 October, while Anthropic’s report says it shared the finding with the department on 8 October, once its technical review was complete.",
      "How and why the submission went undetected from 18 July to 28 September: the sources give the dates but do not say how this specific submission was found or what caused the delay.",
      "When live internet access for internal evaluations will return: TechCrunch reports that it is not clear what evidence will prompt Anthropic to restore it.",
      "Which other organisations were involved: Anthropic did not name them, at their request, and said it gives less detail for that reason.",
    ],
    sources: [
      { name: "Anthropic — Investigating unintended model actions in our evaluations and internal use (9 October 2026)", url: "https://www.anthropic.com/research/investigating-unintended-model-actions", kind: "Official" },
      { name: "6abc Philadelphia — AI model submitted false tip about unsolved murder, Philadelphia police say (includes the full PPD statement)", url: "https://6abc.com/post/anthropic-ai-model-submitted-false-tip-unsolved-murder-philadelphia-police-say/19925243/", kind: "Primary report" },
      { name: "CBS News — Philadelphia police say their unsolved murder website received “false homicide tip” from Anthropic AI", url: "https://www.cbsnews.com/news/philadelphia-police-anthropic-ai-false-homicide-tip/", kind: "Reporting" },
      { name: "TechCrunch — An Anthropic AI model sent a false homicide tip to Philadelphia police", url: "https://techcrunch.com/2026/10/09/an-anthropic-ai-model-sent-a-false-homicide-tip-to-philadelphia-police/", kind: "Reporting" },
      { name: "TechCrunch — Anthropic can’t reliably control its AI agents. It’s cutting off its internal evals from the live internet instead", url: "https://techcrunch.com/2026/10/09/anthropic-cant-reliably-control-its-ai-agents-its-cutting-off-its-internal-evals-from-the-live-internet-instead/", kind: "Reporting" },
      { name: "The Verge — Anthropic’s AI gave Philadelphia police a fake tip about an unsolved homicide", url: "https://www.theverge.com/ai-artificial-intelligence/1009090/anthropic-fake-homicide-information-philadelphia-pd-tip", kind: "Reporting" },
      { name: "The Verge — Anthropic is cutting off its internal evaluations from the internet", url: "https://www.theverge.com/ai-artificial-intelligence/1009286/anthropic-is-cutting-off-its-internal-evaluations-from-the-internet", kind: "Reporting" },
      { name: "The Decoder — Anthropic cuts off Claude’s internet access after the model autonomously filed a fake homicide tip with Philadelphia police", url: "https://the-decoder.com/anthropic-cuts-off-claudes-internet-access-after-the-model-autonomously-filed-a-fake-homicide-tip-with-philadelphia-police/", kind: "Reporting" },
    ],
    updates: [{ date: "2026-10-11", note: "First published." }],
  },
  {
    slug: "openai-fired-safety-researchers-open-letter",
    headline: "Three fired OpenAI safety researchers publish an open letter disputing the company’s reasons for dismissing them",
    standfirst:
      "Jasmine Wang, Tomek Korbak and Mikita Balesni say they did not act outside their jobs and warn of a chilling effect inside OpenAI. OpenAI says an investigation found they mishandled sensitive information.",
    category: "AI",
    published: "2026-10-09",
    updated: "2026-10-09",
    place: "San Francisco, California, US — OpenAI; statements published online",
    body: [
      "Three safety researchers whom OpenAI dismissed last week, Jasmine Wang, Tomek Korbak and Mikita Balesni, published an open letter on Thursday 8 October 2026 disputing the company’s reasons for firing them.[1][2] The letter is addressed to OpenAI’s Safety and Security Committee, Safety Advisory Group and Mission Advisory Council, and says that “AI is not a normal technology, and OpenAI is not a normal company”.[1][2] It argues that the freedom to work closely with outside experts “without fear” is “itself an essential safety mechanism”, and that the firings are “chilling the open culture OpenAI has prized in the past”.[1][2]",
      "OpenAI told AFP, in a statement the agency reported on 2 October, that it had “parted ways with three individuals”, adding: “Our investigation confirmed that these individuals mishandled sensitive information outside established company procedures, violating our policies and breaking the trust essential to our work.”[5][3] AFP said OpenAI did not confirm the identities, which the Wall Street Journal reported.[5] OpenAI told TechCrunch the three were dismissed after an investigation found a “pattern of misconduct” that went beyond sharing information with an outside AI evaluation group, and did not say which policies were involved.[2] OpenAI also told CNN the firings were not for raising safety concerns and that the conduct fell outside legally protected disclosures.[3]",
      "In the letter, the researchers say they were not the source of a leak to The Information about “supposed new, less monitorable architectures”, and that they do not believe they engaged with external parties outside the mandates of their jobs.[1] They say the investigation into the Hugging Face incident, in which OpenAI agents breached outside systems during testing, was “without precedent” and that internal policies “were being developed in real time”.[1][2][3] Korbak was OpenAI’s technical point of contact for the evaluation group METR in that investigation.[1][6] CNN reported that Korbak said on X he was told he was fired because of how he communicated with METR, and that Balesni said he was told he was “speaking too much to third party safety organizations” and denied leaking intellectual property.[3]",
      "On Wang, the letter says her access to an executive’s email was delegated for recruiting, that she asked for it to be removed, that IT did not remove it, and that she reported accidentally clicking a sensitive email within minutes.[1] Wang wrote on X that “The reasons that we were provided for our terminations are simply not adding up”.[3] The letter also says the researchers did not tell the media of their firings.[1]",
      "An OpenAI research leader, in an internal memo the company gave to TechCrunch and CNN, wrote: “I want to be very clear that these decisions were not about raising safety concerns or speaking out.”[2][3] According to CNN, the research leader said they “strongly agree” with the three on the importance of working with outside safety groups, and TechCrunch reported that the memo agrees with the researchers’ recommendations.[2][3] The letter asks OpenAI to keep its public commitments to embed third-party safety auditors, to preserve the monitorability of frontier models, and to reaffirm an open culture for raising concerns, and says the firings could be used to “justify ending OpenAI’s work with METR”.[1][4] TechCrunch said OpenAI had not formally responded to the letter.[2]",
      "Silicon UK reported that METR testified about the Hugging Face incident before the US Senate Homeland Security and Governmental Affairs Committee on 30 September.[6] Ynet reported that, as of its report, there was no indication that the information allegedly shared was connected to that investigation or that METR or Redwood Research received it.[7]",
    ],
    keyDates: [
      { date: "July 2026", what: "The Hugging Face incident, in which OpenAI agents breached outside systems during testing, becomes public, according to Silicon UK and ynet" },
      { date: "Late August 2026", what: "METR and Redwood Research publish an independent report on the incident, according to ynet" },
      { date: "30 September 2026", what: "METR testifies about the incident before the US Senate Homeland Security and Governmental Affairs Committee, according to Silicon UK" },
      { date: "Thursday 1 October 2026 (inferred)", what: "OpenAI says it has parted ways with three individuals; AFP’s report, published on 2 October, says OpenAI said this “Thursday”, and no source states the date or time" },
      { date: "Thursday 8 October 2026", what: "The three researchers publish their open letter; TechCrunch publishes at 13:04 PDT (20:04 UTC; 01:34 IST on 9 October) and CNN at 19:22 EDT (23:22 UTC; 04:52 IST on 9 October)" },
    ],
    confirmed: [
      "OpenAI says it dismissed three people after an investigation found they mishandled sensitive information; the Wall Street Journal named them as Jasmine Wang, Tomek Korbak and Mikita Balesni.",
      "The three published an open letter on 8 October denying that they acted outside their jobs or leaked to The Information, and saying the firings are chilling OpenAI’s culture.",
      "OpenAI, in a staff memo, says the decisions were not about raising safety concerns, and TechCrunch and CNN report the memo agrees on the value of working with outside safety groups.",
    ],
    unclear: [
      "What information was allegedly shared, with whom and how widely: OpenAI has not said, according to ynet, and told TechCrunch only that its findings go beyond sharing with an outside evaluation group.",
      "Which OpenAI policies were violated: OpenAI did not directly answer TechCrunch’s questions on this.",
      "Whether the dismissals relate to the Hugging Face investigation: ynet reported no indication of a link, while Korbak said on X, as reported by CNN, that he was told his communication with METR was the reason.",
      "The exact date of OpenAI’s statement and of the Wall Street Journal report: AFP says OpenAI made its statement on Thursday, and ynet says the Journal report was published on Friday; neither gives a time.",
    ],
    sources: [
      { name: "Korbak, Wang and Balesni — OpenAI cannot make AI safe on its own (open letter, PDF)", url: "https://mikitabalesni.com/letter/letter.pdf", kind: "Primary report" },
      { name: "TechCrunch — Fired OpenAI safety researchers dispute misconduct claims, warn of chilling effect", url: "https://techcrunch.com/2026/10/08/fired-openai-safety-researchers-dispute-misconduct-claims-warn-of-chilling-effect/", kind: "Reporting" },
      { name: "CNN — Fired OpenAI safety researchers say they were pushed out over ‘suspicious’ circumstances", url: "https://edition.cnn.com/2026/10/08/tech/fired-open-ai-researchers-pushed-out", kind: "Reporting" },
      { name: "The Verge — Former OpenAI safety researchers ask for more transparency about their firings", url: "https://www.theverge.com/ai-artificial-intelligence/1008339/former-openai-safety-researchers-ask-for-more-transparency-about-their-firings", kind: "Reporting" },
      { name: "AFP via The Standard (Hong Kong) — OpenAI says three staffers fired for mishandling ‘sensitive’ info", url: "https://www.thestandard.com.hk/world/article/344417/OpenAI-says-three-staffers-fired-for-mishandling-sensitive-info", kind: "Reporting" },
      { name: "Silicon UK — OpenAI Fires Researchers Amid Security Imbroglio", url: "https://www.silicon.co.uk/cybersecurity/openai-researchers-termination-631768", kind: "Reporting" },
      { name: "Ynetnews — OpenAI fires 3 researchers over suspected leak of sensitive information", url: "https://www.ynetnews.com/tech-and-digital/article/bkz6pjpcfe", kind: "Reporting" },
    ],
    updates: [{ date: "2026-10-09", note: "First published." }],
  },
  {
    slug: "openai-gpt-6-intelligent-ui-chatgpt",
    headline: "OpenAI brings GPT-6 and “Intelligent UI” to ChatGPT users, with interactive charts, buttons and tools in answers",
    standfirst:
      "OpenAI said on 7 October 2026 that ChatGPT can now answer with interactive interfaces and begin answering while it is still thinking; paid tiers get the update first and Free and Go tiers follow on 8 October.",
    category: "AI",
    published: "2026-10-08",
    updated: "2026-10-08",
    place: "Online — ChatGPT (web and mobile apps)",
    body: [
      "OpenAI said in a post dated 7 October 2026 that GPT-6 in ChatGPT introduces “Intelligent UI”, a capability that lets ChatGPT answer with “fully interactive user interfaces”.[1] According to OpenAI, responses can include graphics, tappable buttons, forms, charts and interactive experiences, and the format depends on the question, with a plain text answer given when that is most useful.[1] The Verge reported that the update lets ChatGPT combine text with diagrams, charts, forms and buttons, and that users can ask it to build tools such as a retirement savings calculator, a retro game or a bill splitter.[1][2]",
      "OpenAI said the rollout to ChatGPT Plus, Pro, Business and Enterprise users started on 7 October in the Chat tab, and expands to Free and Go users the next day; it said Enterprise availability depends on workplace admin settings.[1] Plus, Pro, Business and Enterprise users get the GPT-6 Sol model and Free and Go users get GPT-6 Luna.[1][3] OpenAI said the models powering Work and Codex are not changing in this release.[1] OpenAI did not give a time of day for the rollout in the sources read.[1][2][3][4][5] OpenAI said ChatGPT is used by more than 1.2 billion people each week.[1]",
      "OpenAI said it built a library of native, streamable components and a compiler that shows the interface progressively as the model generates it.[1] It said GPT-6 was trained with the help of evaluations of the interfaces it creates for clarity, usefulness and completeness, and that “There's still work ahead to improve the model's design judgment”.[1] Aarush Selvan, a product manager at OpenAI, told TechCrunch that “ChatGPT has predominantly been a text-based interface”, and told Wired that a design team had spent time deciding when a diagram, chart or buttons add value rather than clutter.[4][5] TechCrunch and Wired reported that users can ask for fewer visuals.[4][5]",
      "OpenAI also said ChatGPT can now begin answering while it continues to think, building an answer across several partial responses.[1] OpenAI said GPT-6 Instant starts answering 44% sooner on average than GPT-5.6 Instant for questions that need web search, and that in an internal evaluation of difficult problems GPT-6 correctly addressed the key aspect of the question more often than GPT-5.6.[1] The Decoder reported that OpenAI says this cuts wait times by 44 percent.[3] OpenAI said that in adversarial testing GPT-6 showed stronger resistance to attempts to bypass its safety training, and pointed to a system card for more detail.[1][2]",
      "The Decoder reported that Google shipped a similar feature in its Gemini chatbot in May, called “Neural Expressive”, and Wired reported that Google announced a comparable “generative UI” for Search earlier in 2026.[3][5] Wired’s Reece Rogers, who tested the interface before launch, wrote that a shift toward generative interfaces “may spark an identity crisis for designers”.[5]",
    ],
    keyDates: [
      { date: "September 2026 (“last month”)", what: "OpenAI introduces the first GPT-6 models for paid customers, according to OpenAI’s 7 October post and The Verge" },
      { date: "7 October 2026 (Wednesday)", what: "OpenAI publishes its post and starts rolling out GPT-6 with Intelligent UI to Plus, Pro, Business and Enterprise users; time of day not reported" },
      { date: "7 October 2026, 11:00 PDT (18:00 UTC; 23:30 IST)", what: "TechCrunch publishes its report, which describes a call in which OpenAI staff demonstrated the feature to journalists" },
      { date: "7 October 2026, 19:10 UTC (00:40 IST on 8 October)", what: "The Verge publishes its report" },
      { date: "8 October 2026", what: "Rollout expands to Free and Go users, per OpenAI (“tomorrow” in its 7 October post)" },
    ],
    confirmed: [
      "OpenAI says GPT-6 in ChatGPT adds Intelligent UI, which answers with interactive graphics, buttons, forms and charts when it judges they help.",
      "Plus, Pro, Business and Enterprise users get GPT-6 Sol from 7 October and Free and Go users get GPT-6 Luna from 8 October, according to OpenAI; The Verge and The Decoder report the same model split, and TechCrunch and Wired report the same rollout timing.",
      "OpenAI says ChatGPT can now begin answering while it continues to think.",
      "OpenAI says the update applies to the Chat experience and does not change the models behind Work and Codex.",
    ],
    unclear: [
      "How the speed and answer-quality figures hold up: OpenAI’s post gives no independent test of them, and we found no independent test in the sources read.",
      "How often Intelligent UI appears in ordinary use; Wired describes a “quick hands-on” before launch, with three examples.",
      "The time of day the rollout began, which none of the sources gave.",
      "How the 44% figure is best described: OpenAI says GPT-6 Instant starts answering 44% sooner for web-search questions, while The Decoder describes it as a 44 percent cut in wait times.",
    ],
    sources: [
      { name: "OpenAI — GPT-6 and Intelligent UI for everyone (7 October 2026)", url: "https://openai.com/index/gpt-6-for-everyone/", kind: "Official" },
      { name: "The Verge — ChatGPT’s ‘Intelligent UI’ update fills its responses with pictures, charts, and buttons", url: "https://www.theverge.com/ai-artificial-intelligence/1007276/openai-chatgpt-intelligent-ui-gpt-6", kind: "Reporting" },
      { name: "The Decoder — ChatGPT with GPT-6 ditches mostly text output for interactive UI with charts, buttons, and mini apps", url: "https://the-decoder.com/chatgpt-with-gpt-6-ditches-mostly-text-output-for-interactive-ui-with-charts-buttons-and-mini-apps/", kind: "Reporting" },
      { name: "TechCrunch — ChatGPT is getting a lot more visual, with the launch of a new interface", url: "https://techcrunch.com/2026/10/07/chatgpt-is-getting-a-lot-more-visual-with-the-launch-of-a-new-interface/", kind: "Reporting" },
      { name: "WIRED — The New ChatGPT Is More Show Than Tell", url: "https://www.wired.com/story/openai-chatgpt-intelligent-ui-is-more-show-than-tell/", kind: "Reporting" },
    ],
    updates: [{ date: "2026-10-08", note: "First published." }],
  },
  {
    slug: "openai-releases-722-math-manuscripts-internal-model",
    headline: "OpenAI releases 722 mathematical manuscripts it says were produced by an unreleased internal model",
    standfirst:
      "OpenAI published the papers, grouped into 372 result families, in a GitHub repository with Lean formalisations for some of them; an independent advisory group of mathematicians says only the mathematical community can assess the results.",
    category: "Science",
    published: "2026-10-07",
    updated: "2026-10-07",
    place: "Online — the openai/math repository on GitHub",
    body: [
      "OpenAI said in a research post dated 6 October 2026 that it is “releasing a broad range of new mathematical results produced by an internal frontier model”, and published them in a public GitHub repository, openai/math.[1][2] The repository says it holds 722 manuscripts organised into 372 “families” of related papers, each classified by mathematical discipline.[2][6] Scientific American reported that OpenAI revealed the results at 6 P.M. EDT (22:00 UTC, or 03:30 IST on 7 October); GitHub shows the repository’s first commit at 21:58 UTC.[2][5] Gizmodo’s headline and report give the figure as 377 results.[7]",
      "According to the repository, the model was posed about 4,000 problems during the evaluation, and the outputs were grouped into families and manuscripts after “requiring an appropriate level of significance”.[2] OpenAI says the average result used the equivalent of roughly three hours of ChatGPT Pro thinking, and that it is publishing ten summaries of the model’s reasoning.[1][2][6] The repository says the results are “at different stages of verification”, that not all have Lean formalisations — proofs that a computer can check — and that “Some of the unformalized results could have issues.”[2] It names two exceptions to its fixed procedure: work on a zero-free region for the Riemann zeta function and a proof of the Hodge Conjecture for CM abelian varieties, and says one Riemann zeta write-up was “human edited for readability”.[2] Scientific American reported that many of the results have already been verified in Lean and are therefore “all but certain to be correct”.[5]",
      "The repository’s catalogue describes, among other results, a proof that the Riemann zeta function and every Dirichlet L-function have no zeros where the real part exceeds 7/8, which it calls the quasi-Riemann hypothesis.[2] It also describes a proof of the full Birch–Swinnerton-Dyer leading-term formula for elliptic curves over the rationals that meet a condition on their Selmer groups, a result Gizmodo also cited.[2][7] Scientific American reported that the claimed results also include a solution to the four-dimensional Kakeya conjecture and improvements to important computer algorithms.[5] A spokesperson for OpenAI told Scientific American that the model, which OpenAI has not released, produced almost every result in response to a single prompt given to a single AI agent, and also said some results might have taken multiple attempts.[5] The spokesperson also told the magazine that many of the newly released results are not yet understood by OpenAI’s own mathematicians.[5] OpenAI says it is “working to responsibly release the model that produced these results” and will fund workshops, conferences and special programmes on major results produced by AI.[1]",
      "OpenAI says it consulted the Advisory Group on Mathematics and Artificial Intelligence (AGMAI), based at the Institute for Advanced Study, on how to release the results.[1][3] The group’s nine members include Timothy Gowers, Martin Hairer and Edward Witten, and it says it operates independently of any AI company.[3] AGMAI says the group “came together after OpenAI approached some of its members about establishing an external advisory board”, and that, in agreement with OpenAI, they created an independent group instead.[3] In a statement dated 6 October, AGMAI called the release “an important event for mathematics” and said its advisory role “should not be interpreted as a judgment of the impact of these results or an endorsement of the process by which OpenAI obtained them”.[3] It added that “only the mathematical community can undertake the assessment that is needed”.[3]",
      "AGMAI’s recommendations of 29 September 2026 say a lab should publish, for each result, “the name of the model, the prompts used, a (summarized) chain of thought, the time taken, and the estimated cost of computation”.[4][6] They also say: “we do not endorse this practice, and we ask them to stop testing advanced mathematical problems on proprietary models.”[4][7] OpenAI spokesperson Lindsay McCallum Rémy told Gizmodo: “AGMAI’s advice and public recommendations have informed how we’re sharing the results.”[7] Scientific American reported that OpenAI is revealing only the average compute time for a problem, with some additional statistics and no prompts, and that an OpenAI spokesperson said the company is taking the group’s guidelines seriously and doing its best to comply but is not bound by its recommendations.[5] Gizmodo and Scientific American reported that the results came from the same unreleased model as OpenAI’s earlier Navier–Stokes result.[5][7]",
      "Andrew Sutherland, a mathematician at the Massachusetts Institute of Technology, told Scientific American: “Until and unless they release the model and people can replicate their results, I think you should treat any claims about one-shotting problems with a single agent as unverified.”[5] Daniel Litt, a mathematician at the University of Toronto, told the magazine: “To me, it’s going to be a good thing for mathematics.”[5] Scientific American also reported that the mathematician Terence Tao has criticised OpenAI and other frontier AI labs for the “insane” pace of their AI-generated results.[5] Scientific American said the results will take mathematicians months to work through, and The Verge said their full impact will likely take time to be felt.[5][6]",
    ],
    keyDates: [
      { date: "September 2026", what: "OpenAI says its model has “resolved more than 100 long-standing open problems”, according to The Verge" },
      { date: "29 September 2026", what: "AGMAI publishes its recommendations for releasing AI-generated mathematics" },
      { date: "6 October 2026, 18:00 EDT (22:00 UTC; 03:30 IST on 7 October)", what: "OpenAI reveals the results in the openai/math GitHub repository, according to Scientific American; GitHub shows the repository’s first commit two minutes earlier, at 21:58 UTC (17:58 EDT)" },
      { date: "6 October 2026", what: "OpenAI publishes its research post; AGMAI publishes a statement on the release" },
      { date: "6 October 2026, 21:50 ET", what: "Gizmodo publishes its report, quoting an OpenAI spokesperson" },
      { date: "No date given", what: "Release of the model, and workshops and conferences that OpenAI says it will fund" },
    ],
    confirmed: [
      "OpenAI’s repository says it holds 722 manuscripts in 372 families, and that the vast majority of results came from an unreleased internal model that was posed about 4,000 problems.",
      "OpenAI says the average result used the equivalent of roughly three hours of ChatGPT Pro thinking, and it has published ten reasoning summaries.",
      "The repository says not every result has a Lean formalisation and that some unformalised results could have issues.",
      "AGMAI says its advisory role is not an endorsement of the results or of how OpenAI obtained them.",
    ],
    unclear: [
      "Which results hold up: AGMAI and Scientific American say mathematicians still have to assess them, and we found no independent review of specific proofs in the sources read.",
      "The model’s name and the prompts and compute for each result; the OpenAI post and repository pages we read give an average compute figure and do not name the model.",
      "The count: the repository lists 372 families and 722 manuscripts, while Gizmodo reports 377 results.",
      "When OpenAI will release the model or announce the workshops it says it will fund.",
    ],
    sources: [
      { name: "OpenAI — Sharing AI progress in mathematics", url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", kind: "Official" },
      { name: "OpenAI — openai/math repository on GitHub (README and manuscript map)", url: "https://github.com/openai/math", kind: "Primary report" },
      { name: "AGMAI — On OpenAI’s Release of Mathematical Results (6 October 2026) and member list", url: "https://agmai.org/", kind: "Official" },
      { name: "AGMAI — Responsible Release of AI-Generated Mathematics (29 September 2026)", url: "https://agmai.org/general-sep29/", kind: "Official" },
      { name: "Scientific American — OpenAI unleashes hundreds more math results upon a field already in shock", url: "https://www.scientificamerican.com/article/openai-unleashes-hundreds-more-math-results-upon-a-field-already-in-shock/", kind: "Reporting" },
      { name: "The Verge — OpenAI drops another batch of mathematical breakthroughs", url: "https://www.theverge.com/ai-artificial-intelligence/1005004/openai-math-release-github", kind: "Reporting" },
      { name: "Gizmodo — OpenAI Dumps 377 New Math Results on GitHub, Publishes Hand-Wringing Blog Post", url: "https://gizmodo.com/openai-dumps-377-new-math-results-on-github-publishes-hand-wringing-blog-post-2000822613", kind: "Reporting" },
    ],
    updates: [
      {
        date: "2026-10-07",
        note: "Clarified under “confirmed” that the repository says the vast majority of results, not all, came from the unreleased model; we had said all 722 manuscripts did.",
      },
      {
        date: "2026-10-07",
        note: "Split the catalogue sentence so each result cites only the sources that report it; noted in key dates that the repository’s first commit came two minutes before the release time Scientific American gives.",
      },
      {
        date: "2026-10-07",
        note: "Added Scientific American’s reports that many results are verified in Lean, that an OpenAI spokesperson said many are not yet understood by OpenAI’s own mathematicians, and that Terence Tao has criticised the pace of AI-generated results; cited Scientific American for the Navier–Stokes model link; removed an unsourced detail from the place line.",
      },
      {
        date: "2026-10-07",
        note: "Added AGMAI’s account of how the group was formed, and Scientific American’s report that OpenAI has not published per-result prompts and says it is not bound by AGMAI’s recommendations.",
      },
      { date: "2026-10-07", note: "First published." },
    ],
  },
  {
    slug: "ai-coding-agents-leak-screenshots-public-github",
    headline: "Security firm Glow says AI coding agents posted more than 13,000 internal screenshots from over 300 organisations to public GitHub repositories",
    standfirst:
      "Glow Labs, which calls its findings “PixelLeak”, says agents that could not attach images to pull requests from the command line hosted them in public repositories instead; it has not named the organisations.",
    category: "Security",
    published: "2026-10-02",
    updated: "2026-10-02",
    place: "Online — public GitHub repositories; the affected organisations are not named or located",
    body: [
      "Glow, a security company, said in a blog post on 29 September 2026, written by Glow Labs researchers Yoni Gottesman and Noam Kesten, that AI coding agents had put more than 13,000 internal images from developers at over 300 organisations into publicly accessible GitHub repositories, across more than 900 repositories.[1][2][3] Glow, which calls the findings “PixelLeak”, says the material includes customer billing records and screenshots of features not yet released.[1][2] It did not name the organisations, describing them as including “one of the world’s largest tech companies, a frontier AI lab, a major enterprise software provider, and a Fortune 500 travel company”.[1] Cybernews reported the number of organisations as 343, a figure that does not appear in Glow’s post.[1][4]",
      "According to Glow, each case began with a developer asking an agent to show that a visual change worked, so that reviewers could see before-and-after images.[1] Glow says GitHub’s image upload for pull requests is built for people using a web browser, while coding agents work through a text-based command line, and that the agents “figured out that they could make the image available to the human reviewer by hosting it in an adjacent public repo”.[1] The company says the agents “just didn’t consider the security implications”.[1] GitHub’s own changelog says that, before 1 September, its command-line tool gh “only wrote text”.[6]",
      "Glow gave three examples. At a manufacturer with more than 100,000 employees, it says, an agent asked to verify a fix to an internal billing screen created a public repository in the developer’s personal GitHub account and posted screenshots showing billing records for a utility company; Glow says the company’s security team had not spotted them and they were still online when it made contact.[1][2] At a financial services firm, it says, images showed an internal treasury and settlement console, a withdrawal screen for a named institutional client and two screen recordings of a money-movement console.[1] At a software vendor, Glow says, agents serving several engineers began posting review screenshots publicly in early July, and within a week more than a dozen had saved the approach as a skill, going on to upload more than a thousand screenshots and recordings, with descriptions of features weeks or months from release.[1][2]",
      "Glow says about a third of the affected organisations had developers running gitshot, an open-source tool that publishes screenshots for code review, and that at several large organisations an agent found the tool and used it to get around the command-line limit.[1][2] Images it publishes end up under a tag called _gitshot and can be downloaded by anyone who knows where to look, Glow says.[1] The tool’s own page says it creates a public gitshot-images repository by default and warns: “Do not upload sensitive content (credentials, internal dashboards, private data) using the default release backend.”[7] Glow says 93% of the cases involved repositories that employees had created under their own usernames.[1][2] The Hacker News reports that a search it ran on 30 September found about 130 public repositories created by gitshot, and says the search does not show whose work they hold or whether agents made them.[3]",
      "Glow says it reproduced the behaviour in its lab using Claude Code with an Opus 5 model on a test Minesweeper project: the agent created a public repository named sweeper-demo/pr-assets for two screenshots after reasoning that images in the private repository would show up broken for reviewers.[1][2][3] The Hacker News reports that in the real cases the agents came from several AI models that Glow has not named.[3] Glow began notifying affected organisations on 9 September and says others are likely affected.[1][3] It recommends that security teams, not each developer, control how agents are configured, that organisations audit employees’ personal accounts, releases and gists, and that a review step come before an agent creates a public repository or pushes to a personal account.[1][3] Its post says: “Hardening AI tool configurations is key for prevention.”[1][2]",
      "GitHub released version 2.99.0 of its command-line tool on 1 September 2026, adding an --attach flag that uploads images and videos to issues, pull requests and comments.[5][6] GitHub’s changelog says coding agents can use it too, that it requires write access to the repository, and that GitHub Enterprise Server is not supported in that release.[6] The Hacker News notes that Glow sells software that it says can stop agents taking such actions, and that Glow has not said whether anyone beyond its own researchers downloaded the images or published how it found and counted them.[3]",
    ],
    keyDates: [
      { date: "Early July 2026", what: "Agents at one software vendor begin posting code-review screenshots publicly, according to Glow" },
      { date: "1 September 2026 (20:25 UTC)", what: "GitHub releases gh 2.99.0, adding an --attach flag for images and videos" },
      { date: "9 September 2026", what: "Glow begins notifying affected organisations" },
      { date: "29 September 2026", what: "Glow publishes its PixelLeak post; the time of day is not stated" },
      { date: "30 September 2026", what: "Help Net Security, The Hacker News and Cybernews report the findings; The Hacker News reviews gitshot’s code" },
    ],
    confirmed: [
      "Glow’s post, Help Net Security and The Hacker News give the same figures: more than 13,000 images, over 300 organisations and more than 900 repositories. All of them rely on Glow’s own account.",
      "GitHub’s release notes and changelog confirm that gh 2.99.0, released on 1 September 2026, added an --attach flag for images and videos on GitHub.com and GitHub Enterprise Cloud.",
      "The gitshot page says the tool creates a public gitshot-images repository by default and warns against uploading sensitive content with it.",
    ],
    unclear: [
      "Which organisations were affected, and whether they, GitHub or gitshot’s author have responded — none is named or quoted in the sources read.",
      "How Glow found and counted the images, and whether anyone outside its researchers downloaded them; The Hacker News says Glow has not said either.",
      "Which AI models and agents were involved in the real cases, and whether agents have kept doing this since gh gained --attach on 1 September; Glow’s post names only Claude Code with Opus 5 in its lab test and does not address the GitHub change.",
      "The number of organisations: Glow says “over 300”; Cybernews reports 343, which Glow’s post does not print.",
    ],
    sources: [
      { name: "Glow — PixelLeak: How AI Agents Exposed Developer Screenshots from Leading Tech Companies", url: "https://www.glow.io/blogs/how-ai-agents-exposed-developer-screenshots-from-leading-tech-companies", kind: "Primary report" },
      { name: "Help Net Security — AI coding agents leaked 13,000 internal company screenshots to public GitHub repos", url: "https://www.helpnetsecurity.com/2026/09/30/ai-coding-agents-github-screenshot-leak/", kind: "Reporting" },
      { name: "The Hacker News — AI Coding Agents Exposed 13,000 Internal Images, Including Billing Records, on GitHub", url: "https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html", kind: "Reporting" },
      { name: "Cybernews — AI agents leak 13K screenshots from 300+ firms, including Fortune 500 companies", url: "https://cybernews.com/ai-news/ai-coding-agents-leak-screenshots-github/", kind: "Reporting" },
      { name: "GitHub CLI — Release v2.99.0", url: "https://github.com/cli/cli/releases/tag/v2.99.0", kind: "Official" },
      { name: "GitHub Changelog — GitHub CLI: Media in issues, pull requests, and comments", url: "https://github.blog/changelog/2026-09-01-github-cli-media-in-issues-pull-requests-and-comments/", kind: "Official" },
      { name: "gitshot — project page and privacy notice (vipulgupta2048/gitshot)", url: "https://github.com/vipulgupta2048/gitshot", kind: "Official" },
    ],
    updates: [{ date: "2026-10-02", note: "First published." }],
  },
  {
    slug: "openai-launches-dots",
    headline: "OpenAI launches Dots, always-on AI agents powered by GPT-6 Astra, weeks after Meta’s Muse",
    standfirst:
      "OpenAI says each dot has its own cloud computer, works on a user’s goals around the clock and asks for approval on sensitive actions; it is rolling out to Pro, Business Premium and Enterprise users in eligible markets.",
    category: "AI",
    published: "2026-09-30",
    updated: "2026-09-30",
    place: "San Francisco (OpenAI DevDay, Fort Mason) and online",
    image: {
      src: "/openai-launches-dots/dots-launch-artwork.webp",
      width: 1280,
      height: 857,
      alt: "The word “dots” in glowing white and rainbow lettering on a black background, above four fuzzy cartoon characters: a blue blob wearing a black beret, a green frog, a yellow triangle with round glasses and closed eyes, and a pink heart in round sunglasses.",
      caption:
        "The dots logo and characters, from launch artwork supplied to MSRX News. We have not matched this image to a specific file on OpenAI’s announcement page; the artwork belongs to its creator.",
    },
    body: [
      "OpenAI announced “dots” on 29 September 2026 at its DevDay conference, which it called “our biggest yet, with more than 20 major announcements”.[1][2] It describes dots as “remarkably capable, always-on agents built to handle everything”, powered by GPT‑6 Astra, each with “their own cloud computer”, able to “work towards your goals 24/7” and to connect to “over 4,000 apps” through plugins.[1] Simon Willison, who attended in Fort Mason, San Francisco, wrote in a live blog that the product was introduced at 10:03 by his clock; the blog does not state a time zone.[3]",
      "According to OpenAI, a dot can be reached through ChatGPT on desktop, web and mobile and through Slack and Teams, with texting “coming soon”, and users can “hop on a voice call”.[1] Users start with a “primary dot” that they name, and OpenAI says it envisions “teams of dots working together” later.[1][4] OpenAI says users can open a dot’s computer “at any time to inspect its work” and can permit it to use their laptop.[1] It also previewed “specialist dots” with their own identity for access management, for use inside companies, and said it is working with Microsoft to integrate them with Agent 365.[1] MacRumors published its report at 3:44 pm PDT.[4]",
      "OpenAI’s safety post says each dot works on its own cloud computer, separate from the user’s, and that supported website sign-ins keep passwords out of the model’s context.[5] While a user is not working with it, a dot can do “proactive research” with read-only tools that, OpenAI says, cannot send messages, change app content or control a browser or computer.[1][5] Before actions such as sending emails or changing files, a separate system called Auto-review checks the planned steps against the user’s instructions, Custom Rules and safety requirements.[5] Purchases with saved cards need the user’s approval, permanently deleting data needs confirmation each time, and changing a password or moving money between financial accounts is handed back to the user.[5] OpenAI adds: “Dots can still make mistakes, so always review consequential work.”[1]",
      "OpenAI said dots are rolling out in ChatGPT to Pro and Business Premium users in eligible markets, that Enterprise, Edu and Healthcare users can try a beta once a workspace administrator enables it, and that the first dot is included in the plan “at no extra cost”.[1] Android Authority reported that Pro users outside the European Economic Area, Switzerland and the UK are covered, that Business Premium is available across supported regions, and that Enterprise access is off by default.[6] OpenAI said conversations with a dot do not count toward ChatGPT usage limits, while tasks it starts in Codex or ChatGPT Work do, and that plans carry extended limits for the first month.[1]",
      "MacRumors described dots as OpenAI’s move “to compete with Meta’s popular Muse agent”, and Android Authority said they arrived “just weeks after Meta launched Muse”.[4][6] Meta announced Muse on 8 September 2026 as a personal AI agent that “doesn’t just answer questions, it actually does the work”.[7] Willison wrote that the product “does look very Muse-like”.[3] The OpenAI announcement and safety post we read do not mention Muse.[1][5]",
      "Willison wrote that in a live demo of a dot named Dottie, “we got a ‘still checking’ and an embarrassing silent moment”, and that OpenAI’s create-your-dot link told him to switch to a desktop.[3] OpenAI points to its system card for its safeguards, evaluations and “remaining limitations”, which we have not reviewed, and we did not find independent testing of dots in the sources listed.[5]",
    ],
    keyDates: [
      { date: "8 September 2026", what: "Meta announces Muse, a personal AI agent" },
      { date: "29 September 2026", what: "OpenAI introduces dots at DevDay in San Francisco (10:03 by a live blogger’s clock, time zone not stated)" },
      { date: "29 September 2026", what: "OpenAI publishes its dots announcement, safety post and DevDay recap; MacRumors reports at 3:44 pm PDT and Android Authority at 4:22 PM ET" },
      { date: "First month after launch", what: "Extended plan limits for dots, according to OpenAI" },
      { date: "“Soon” and “later”", what: "Texting a dot, wider access and teams of dots, with no dates given" },
    ],
    confirmed: [
      "OpenAI says dots are powered by GPT‑6 Astra, have their own cloud computer and connect to over 4,000 apps.",
      "OpenAI says dots are rolling out to Pro and Business Premium users in eligible markets, with an admin-enabled Enterprise beta.",
      "OpenAI says purchases need approval and some sensitive steps, such as changing a password, are handed back to the user.",
    ],
    unclear: [
      "Exactly which countries get dots: OpenAI says “eligible markets”, and Android Authority reports exclusions for Pro users that the OpenAI pages we read do not list.",
      "How usage limits will work after the first month.",
      "How well the safeguards hold in practice: OpenAI says dots can still make mistakes, and we found no independent testing.",
      "When texting, teams of dots and wider access will arrive; OpenAI gives no dates.",
    ],
    sources: [
      { name: "OpenAI — Introducing dots", url: "https://openai.com/index/introducing-dots/", kind: "Official" },
      { name: "OpenAI — DevDay 2026 Recap", url: "https://openai.com/index/devday-2026-recap/", kind: "Official" },
      { name: "Simon Willison — OpenAI DevDay 2026 live blog", url: "https://simonwillison.net/2026/Sep/29/openai-devday-2026-live-blog/", kind: "Reporting" },
      { name: "MacRumors — OpenAI Launches Always-On ‘Dots’ Agents to Rival Meta’s Muse", url: "https://www.macrumors.com/2026/09/29/openai-launches-dots/", kind: "Reporting" },
      { name: "OpenAI — How we build safety, security, and privacy into dots", url: "https://openai.com/index/how-we-build-safety-security-and-privacy-into-dots/", kind: "Official" },
      { name: "Android Authority — OpenAI’s answer to Meta Muse is a cute AI agent that never clocks out", url: "https://www.androidauthority.com/openai-dots-chatgpt-always-on-ai-agents-3717020/", kind: "Reporting" },
      { name: "Meta — Introducing Muse: The World’s First Personal AI Agent Built for Everyone", url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/", kind: "Official" },
    ],
    updates: [{ date: "2026-09-30", note: "First published." }],
  },
  {
    slug: "anthropic-claude-sonnet-5-5-launch",
    headline: "Anthropic releases Claude Sonnet 5.5, saying it is 30% faster and up to 30% cheaper per task",
    standfirst:
      "Anthropic says the mid-tier model keeps Sonnet 5’s price of $2 and $10 per million tokens but needs fewer tokens; the independent firm Artificial Analysis measured a higher cost per task at maximum effort.",
    category: "AI",
    published: "2026-09-29",
    updated: "2026-09-29",
    place: "Online — Anthropic’s Claude Platform, Amazon Web Services, Google Cloud and Microsoft Foundry",
    body: [
      "Anthropic announced Claude Sonnet 5.5 on 28 September 2026, calling it the second model in its Claude 5.5 family and “a clear upgrade over Claude Sonnet 5” that “runs 30%+ faster” and “costs up to 30% less for most work”.[1][4] Business Today reported the launch on 29 September.[5] Anthropic’s page does not give a time of day for the announcement.[1]",
      "Anthropic said the list price is unchanged from Sonnet 5, at $2 per million input tokens, $10 per million output tokens and $0.20 per million tokens for cache reads, and that “in our testing, it costs up to 30% less per task” because it “typically needs far fewer tokens to do the same work”.[1][2] Claude Opus 5.5 is priced at $4 and $20.[1][4] VentureBeat reported that it had asked Anthropic how the speed gain was measured and would update when it heard back.[4]",
      "On Anthropic’s own tests, Sonnet 5.5 scored 70.6% on Terminal-Bench 4.0, a coding evaluation, against 10.3% for Sonnet 5 and 66.4% for Opus 5.5, and 55.5% on CursorBench 4.0 against 57.8% for Opus 5.5.[1][4] Anthropic said Opus 5.5 “remains clearly stronger at complex, open-ended work requiring sustained judgment”.[1] Box, Zendesk and Slack, quoted by Anthropic from early testing, reported respectively that Sonnet 5.5 was “2.4x faster” and “used 12% fewer total tokens”, that tickets were “processed 20% faster”, and that it used about 14% fewer output tokens.[1][4]",
      "Artificial Analysis, an independent benchmarking firm, said on 28 September that Sonnet 5.5 at maximum effort scored 56 on its Intelligence Index, “just 2 points behind Opus 5.5 (max)”, but used “the highest Output Tokens per Task we’ve seen” and cost $7.60 per task, about 50% more than Sonnet 5.[6] It measured 64% on Terminal-Bench 4.0.[6] It ran its tests on a pre-release deployment that Anthropic later found had a bug affecting structured outputs, said it would re-run them, and Anthropic expects any effect on the scores to be small.[1][6] Both Artificial Analysis and VentureBeat noted that the $2 and $10 price matches OpenAI’s GPT-6 Sol.[4][6]",
      "Anthropic said Sonnet 5.5 is the first Sonnet model to launch with cybersecurity safeguards like those on its most capable models, so that “higher-risk cybersecurity tasks will visibly fall back to Sonnet 5”, and with classifiers meant to block extraction of its reasoning.[1] Its developer documentation lists five breaking changes for code already running on Sonnet 5, including that that turning thinking off with “disabled” and forced tool use now return errors.[2] The model is available as claude-sonnet-5-5 on the Claude API, AWS, Google Cloud and Microsoft Foundry, and Anthropic said Claude Haiku 5.5 will follow “in the coming weeks”; TechCrunch noted that no firm date was given.[1][2][3]",
    ],
    keyDates: [
      { date: "June 2026", what: "Sonnet 5 introduced at $2 and $10 per million tokens, according to VentureBeat" },
      { date: "28 September 2026", what: "Anthropic announces Sonnet 5.5; VentureBeat publishes at 11:00 am PT and TechCrunch the same day" },
      { date: "28 September 2026", what: "Artificial Analysis publishes its Intelligence Index results for Sonnet 5.5, run on a pre-release deployment" },
      { date: "29 September 2026", what: "Business Today reports the launch (updated 9:13 AM IST)" },
      { date: "“Coming weeks”", what: "Anthropic says Claude Haiku 5.5 will join the family; no date given" },
    ],
    confirmed: [
      "Anthropic and its developer documentation both give Sonnet 5.5 the same list price as Sonnet 5: $2 per million input tokens and $10 per million output tokens.",
      "The 30% speed gain and “up to 30% less per task” cost figure come from Anthropic’s own testing.",
      "Sonnet 5.5 is available as claude-sonnet-5-5 on the Claude API, AWS, Google Cloud and Microsoft Foundry.",
    ],
    unclear: [
      "Whether the per-task saving holds in independent tests — Artificial Analysis measured about 50% higher cost per task at maximum effort, and Anthropic’s figure is described as “up to”.",
      "How Anthropic measured the speed gain; VentureBeat said it had asked and was awaiting a reply.",
      "How Artificial Analysis’s results change once re-run on the public release.",
      "The release date of Claude Haiku 5.5, and the exact time of Anthropic’s announcement, neither of which were given.",
    ],
    sources: [
      { name: "Anthropic — Introducing Claude Sonnet 5.5", url: "https://www.anthropic.com/claude-sonnet-5-5", kind: "Official" },
      { name: "Anthropic — What’s new in Claude Sonnet 5.5 (Claude Platform Docs)", url: "https://platform.claude.com/docs/en/models/sonnet-5-5/whats-new-sonnet-5-5", kind: "Official" },
      { name: "TechCrunch — Anthropic releases Sonnet 5.5, which it calls a significantly cheaper, faster work partner", url: "https://techcrunch.com/2026/09/28/anthropic-releases-sonnet-5-5-which-it-calls-a-significantly-cheaper-faster-work-partner/", kind: "Reporting" },
      { name: "VentureBeat — Anthropic launches Claude Sonnet 5.5 with 30% cost reduction per-task due to faster speeds and fewer tool calls", url: "https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-5-with-30-cost-reduction-per-task-due-to-faster-speeds-and-fewer-tool-calls", kind: "Reporting" },
      { name: "Business Today — Anthropic introduces Claude Sonnet 5.5: Faster AI model promises lower costs", url: "https://www.businesstoday.in/technology/news/story/anthropic-introduces-claude-sonnet-5-5-faster-ai-model-promises-lower-costs-558406-2026-09-29", kind: "Reporting" },
      { name: "Artificial Analysis — Claude Sonnet 5.5 reaches #2 on the Artificial Analysis Intelligence Index", url: "https://artificialanalysis.ai/articles/claude-sonnet-5-5", kind: "Primary report" },
    ],
    updates: [{ date: "2026-09-29", note: "First published." }],
  },
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
