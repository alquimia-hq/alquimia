import { SITE_CONTENT } from "@/lib/constants";
import { FONT_TOKENS, type FontToken } from "@/lib/brand/tokens";

export function TypographySpecimens() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {FONT_TOKENS.map((f) => (
        <Specimen key={f.name} font={f} />
      ))}
    </div>
  );
}

function Specimen({ font }: { font: FontToken }) {
  const copy = SITE_CONTENT.brandPage;
  const fontFamily = `var(${font.cssVar})`;

  return (
    <article className="flex flex-col gap-4 rounded-sm border border-rule bg-bg-2 p-6">
      <header className="flex items-baseline justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-[family-name:var(--font-im-fell)] text-[10px] tracking-[0.3em] uppercase text-ink-3">
            {copy.typographyRoles[font.role]}
          </span>
          <h3
            className="text-[22px] text-ink"
            style={{ fontFamily }}
          >
            {font.name}
          </h3>
        </div>
        <a
          href={font.googleHref}
          target="_blank"
          rel="noreferrer"
          className="font-[family-name:var(--font-im-fell)] text-[10px] tracking-[0.3em] uppercase text-ink-3 transition-colors hover:text-gold"
        >
          {copy.googleFontsLabel} ↗
        </a>
      </header>

      <div className="flex flex-col gap-3 border-t border-rule pt-4">
        {font.role === "ornament" ? (
          <p
            className="text-[22px] uppercase tracking-[0.22em] text-ink-2"
            style={{ fontFamily }}
          >
            {copy.pangram}
          </p>
        ) : font.role === "mono" ? (
          <p
            className="text-[14px] text-ink-2"
            style={{ fontFamily }}
          >
            {copy.pangram}
          </p>
        ) : (
          <p
            className="text-[20px] leading-snug text-ink-2"
            style={{ fontFamily, fontStyle: font.role === "body" ? "italic" : "normal" }}
          >
            {copy.pangram}
          </p>
        )}

        <div className="flex flex-wrap gap-x-5 gap-y-1 font-[family-name:var(--font-jetbrains)] text-[10px] text-ink-3">
          <span>{font.cssVar}</span>
        </div>
      </div>
    </article>
  );
}
