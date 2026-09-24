import { ogSize, renderOg } from "@/lib/og";

export const alt = "MSRX News";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "MSRX News", title: "AI and technology, sourced", subtitle: "Short, neutral briefs. Every fact attributed; every story linked to its sources." });
}
