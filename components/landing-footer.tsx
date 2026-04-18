import { SITE_CONTENT } from "@/lib/constants";

export function LandingFooter() {
  return (
    <footer className="px-14 py-6 flex justify-between items-center font-[family-name:var(--font-eb-garamond)] italic text-ink-3 text-[13px] border-t border-rule-2 max-md:flex-col max-md:gap-2.5 max-md:px-5 max-md:text-center">
      <div>{SITE_CONTENT.footer.tagline}</div>
      <div className="font-[family-name:var(--font-im-fell)] not-italic tracking-[0.36em] text-[10px]">
        {SITE_CONTENT.footer.year}
      </div>
      <div>{SITE_CONTENT.footer.craft}</div>
    </footer>
  );
}
