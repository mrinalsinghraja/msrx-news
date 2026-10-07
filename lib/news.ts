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
