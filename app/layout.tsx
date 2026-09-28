import type { Metadata, Viewport } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import { ArrowUpRight } from "lucide-react";
import "./globals.css";
import { MsrxWordmark } from "@/components/MsrxLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { AUTHOR, MAIN_SITE, SITE_NAME, SITE_URL } from "@/lib/site";

// Same faces as the main MSRX site and MSRX Articles.
// Self-hosted from @fontsource-variable (OFL) rather than next/font/google: the
// Google variant downloads the fonts during `next build`, and on 28 Sep 2026 that
// download failed on Vercel's builder and failed a git-push deploy of MSRX Articles.
const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});
const bricolage = localFont({
  src: "../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-standard-normal.woff2",
  weight: "200 800",
  variable: "--font-bricolage",
  display: "swap",
});

const DESCRIPTION = "Short, neutral, sourced briefs on AI and technology news from MSRX. Every fact attributed, every story linked to its sources.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — AI and technology, sourced`, template: `%s — ${SITE_NAME}` },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [AUTHOR],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,
  category: "news",
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: { title: SITE_NAME, description: DESCRIPTION, url: SITE_URL, siteName: SITE_NAME, locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", creator: "@mrinalsinghraja", site: "@mrinalsinghraja" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#101017" },
  ],
};

// Runs before first paint so the saved or system theme applies with no flash.
const themeInit = `(function(){try{var t=localStorage.getItem("msrx-theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <header className="sticky top-0 z-50 nav-blur border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between gap-4">
            <Link href="/" aria-label={`${SITE_NAME} — home`} className="flex items-center gap-2.5">
              <MsrxWordmark uid="nav" />
              <span className="mono text-[11px] tracking-[0.16em] uppercase text-[var(--text-tertiary)] pt-0.5">News</span>
            </Link>
            <div className="flex items-center gap-1 sm:gap-2">
              <a
                href="https://articles.msrx.co.in"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--paper-tint)] transition-colors"
              >
                Articles
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href={MAIN_SITE}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--paper-tint)] transition-colors"
              >
                MSRX apps
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-[13.5px] text-[var(--text-tertiary)]">
            <p>
              © {new Date().getFullYear()} {AUTHOR.name} · Part of <a href={MAIN_SITE} className="hover:text-[var(--text-primary)] underline underline-offset-4">MSRX</a> · Briefs summarise others’ reporting; follow the sources.
            </p>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/" className="hover:text-[var(--text-primary)]">All news</Link>
              <a href="/feed.xml" className="hover:text-[var(--text-primary)]">RSS</a>
              <a href={`${MAIN_SITE}/privacy`} className="hover:text-[var(--text-primary)]">Privacy</a>
              <a href={`${MAIN_SITE}/contact`} className="hover:text-[var(--text-primary)]">Corrections</a>
            </nav>
          </div>
        </footer>

        <SiteAnalytics />
      </body>
    </html>
  );
}
