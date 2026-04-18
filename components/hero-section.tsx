import { Button } from "@/components/ui/button";
import {
  AlquimiaDivider,
  DiscordIcon,
  InteligenciaIcon,
  AutomatizacionIcon,
  ProductividadIcon,
  QuoteOrnament,
} from "./icons";
import { SITE_CONTENT } from "@/lib/constants";

const PILLAR_ICONS = {
  inteligencia: InteligenciaIcon,
  automatizacion: AutomatizacionIcon,
  productividad: ProductividadIcon,
} as const;

export function HeroSection() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-14 py-12 pb-18 text-center max-md:px-5 max-md:py-8 max-md:pb-14">
      {/* Eyebrow */}
      <div className="font-[family-name:var(--font-im-fell)] tracking-[0.42em] text-[11px] text-ink-3 uppercase flex items-center gap-4 mb-8">
        <span className="w-14 h-px bg-rule" />
        <span className="w-[5px] h-[5px] bg-gold rotate-45" />
        <span>{SITE_CONTENT.hero.eyebrow}</span>
        <span className="w-[5px] h-[5px] bg-gold rotate-45" />
        <span className="w-14 h-px bg-rule" />
      </div>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-cormorant)] font-normal text-[120px] leading-[0.9] tracking-[-0.03em] m-0 text-ink max-md:text-[72px] [text-shadow:0_0_60px_rgba(217,154,61,0.15)]">
        {SITE_CONTENT.hero.title}
        <em className="italic font-light text-gold">
          {SITE_CONTENT.hero.titleAccent}
        </em>
      </h1>

      {/* Ornament Divider */}
      <div className="flex items-center justify-center gap-4.5 my-9 w-full max-w-[520px]">
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-rule to-transparent" />
        <AlquimiaDivider className="w-7 h-7 text-gold" />
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-rule to-transparent" />
      </div>

      {/* Subtitle */}
      <p
        id="manifiesto"
        className="font-[family-name:var(--font-cormorant)] italic font-light text-[26px] leading-[1.4] text-ink-2 max-w-[620px] m-0 mb-9 max-md:text-[20px]"
      >
        {SITE_CONTENT.hero.subtitle}
      </p>

      {/* CTA Button */}
      <div className="flex flex-col items-center">
        <Button
          asChild
          className="btn-discord inline-flex items-center gap-4.5 px-11 py-5 h-auto bg-gold text-primary-foreground border border-gold font-[family-name:var(--font-im-fell)] tracking-[0.3em] uppercase text-[13px] cursor-pointer"
        >
          <a href="#">
            <DiscordIcon className="w-[18px] h-[18px]" />
            <span>{SITE_CONTENT.cta.button}</span>
            <span className="font-serif text-[20px] tracking-normal italic">
              ⟶
            </span>
          </a>
        </Button>
        <p className="font-[family-name:var(--font-eb-garamond)] italic text-[13px] text-ink-3 mt-4.5">
          <span className="inline-block w-[3px] h-[3px] bg-gold rotate-45 mx-2.5 align-middle" />
          {SITE_CONTENT.cta.note}
          <span className="inline-block w-[3px] h-[3px] bg-gold rotate-45 mx-2.5 align-middle" />
        </p>
      </div>

      {/* Pillars */}
      <div
        id="pilares"
        className="grid grid-cols-3 gap-0 border-t border-b border-rule-2 mt-14 max-md:grid-cols-1"
      >
        {SITE_CONTENT.pillars.map((pillar, index) => {
          const IconComponent =
            PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS];
          return (
            <div
              key={pillar.id}
              className={`px-6 py-5.5 text-center ${
                index < SITE_CONTENT.pillars.length - 1
                  ? "border-r border-rule-2 max-md:border-r-0 max-md:border-b"
                  : ""
              }`}
              style={{ minWidth: "200px" }}
            >
              <IconComponent className="w-[22px] h-[22px] text-gold mb-2.5 mx-auto" />
              <div className="font-[family-name:var(--font-im-fell)] tracking-[0.24em] text-[11px] uppercase text-ink mb-1">
                {pillar.title}
              </div>
              <div className="font-[family-name:var(--font-eb-garamond)] italic text-[13px] text-ink-3">
                {pillar.description}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote */}
      <figure className="mt-18 max-w-[620px] text-center flex flex-col items-center gap-4.5">
        <QuoteOrnament className="w-8 h-8 text-gold opacity-80" />
        <blockquote className="m-0 p-0 font-[family-name:var(--font-cormorant)] italic font-light text-[22px] leading-[1.45] text-ink-2">
          &ldquo;{SITE_CONTENT.quote.text}&rdquo;
        </blockquote>
        <figcaption className="font-[family-name:var(--font-im-fell)] tracking-[0.3em] text-[11px] text-ink-3 uppercase flex items-center gap-2.5">
          <span className="w-6 h-px bg-rule" />— {SITE_CONTENT.quote.author}
        </figcaption>
      </figure>
    </main>
  );
}
