import Link from "next/link";
import { AlquimiaLogo } from "./icons";
import { SITE_CONTENT } from "@/lib/constants";

export function LandingHeader() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center px-14 py-7 max-md:grid-cols-[1fr_auto] max-md:px-6 max-md:py-5">
      {/* Brand */}
      <div className="flex items-center gap-3 font-[family-name:var(--font-im-fell)] tracking-[0.34em] uppercase text-[11px] text-ink">
        <AlquimiaLogo className="w-[26px] h-[26px] text-gold" />
        <span>{SITE_CONTENT.brand}</span>
      </div>

      {/* Center - Year */}
      <div className="font-[family-name:var(--font-im-fell)] tracking-[0.4em] text-[10px] text-ink-3 text-center flex items-center justify-center gap-3.5 max-md:hidden">
        <span className="w-1 h-1 bg-gold rotate-45" />
        <span>{SITE_CONTENT.year}</span>
        <span className="w-1 h-1 bg-gold rotate-45" />
      </div>

      {/* Navigation */}
      <nav className="flex justify-end font-[family-name:var(--font-im-fell)] tracking-[0.3em] text-[10px] text-ink-3 gap-7">
        <Link
          href="#manifiesto"
          className="hover:text-gold transition-colors duration-200"
        >
          {SITE_CONTENT.nav.manifiesto}
        </Link>
        <Link
          href="#pilares"
          className="hover:text-gold transition-colors duration-200"
        >
          {SITE_CONTENT.nav.pilares}
        </Link>
      </nav>
    </header>
  );
}
