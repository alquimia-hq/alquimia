import Link from "next/link";
import { SITE_CONTENT } from "@/lib/constants";
import { HeaderLogoTrigger } from "./brand/header-logo-trigger";

export function LandingHeader() {
  return (
    <header
      className="grid animate-entrance animate-fade-in grid-cols-[1fr_auto_1fr] items-center px-14 py-7 max-md:grid-cols-[1fr_auto] max-md:px-6 max-md:py-5 max-lg:px-8"
      style={{ "--delay": "900ms" } as React.CSSProperties}
    >
      {/* Brand */}
      <HeaderLogoTrigger />

      {/* Center - Year */}
      <div className="flex items-center justify-center gap-3.5 text-center font-[family-name:var(--font-im-fell)] text-[10px] text-ink-3 tracking-[0.4em] max-md:hidden">
        <span className="h-1 w-1 rotate-45 bg-gold" />
        <span>{SITE_CONTENT.year}</span>
        <span className="h-1 w-1 rotate-45 bg-gold" />
      </div>

      {/* Navigation */}
      <nav className="flex justify-end gap-2 font-[family-name:var(--font-im-fell)] text-[10px] text-ink-3 tracking-[0.3em]">
        <Link
          className="nav-link px-3 py-2 transition-colors duration-200 hover:text-gold"
          href="/brand"
        >
          {SITE_CONTENT.nav.marca}
        </Link>
      </nav>
    </header>
  );
}
