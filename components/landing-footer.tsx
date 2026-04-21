import Link from "next/link";
import { SITE_CONTENT } from "@/lib/constants";

export function LandingFooter() {
  return (
    <footer
      className="animate-entrance animate-fade-in px-14 py-10 flex justify-between items-center font-[family-name:var(--font-eb-garamond)] italic text-ink-3 text-[13px] border-t border-rule-2 max-lg:px-8 max-md:flex-col max-md:gap-2.5 max-md:px-5 max-md:text-center"
      style={{ "--delay": "900ms" } as React.CSSProperties}
    >
      <div>{SITE_CONTENT.footer.tagline}</div>
      <div className="flex items-center gap-5 font-[family-name:var(--font-im-fell)] not-italic tracking-[0.36em] text-[10px]">
        <Link
          href="/brand"
          className="nav-link transition-colors duration-200 hover:text-gold"
        >
          {SITE_CONTENT.footer.marca}
        </Link>
        <span>{SITE_CONTENT.footer.year}</span>
      </div>
      <div>{SITE_CONTENT.footer.craft}</div>
    </footer>
  );
}
