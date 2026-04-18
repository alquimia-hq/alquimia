import {
  AlquimiaDivider,
  InteligenciaIcon,
  AutomatizacionIcon,
  ProductividadIcon,
  QuoteOrnament,
} from "./icons";
import { SITE_CONTENT } from "@/lib/constants";
import { ScrollReveal } from "./scroll-reveal";
import { DiscordCta } from "./discord-cta";

const PILLAR_ICONS = {
  inteligencia: InteligenciaIcon,
  automatizacion: AutomatizacionIcon,
  productividad: ProductividadIcon,
} as const;

export function HeroSection() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-14 py-12 pb-18 text-center max-lg:px-8 max-md:px-5 max-md:py-8 max-md:pb-14">
      {/* Eyebrow */}
      <div
        className="animate-entrance animate-fade-down font-[family-name:var(--font-im-fell)] tracking-[0.42em] text-[11px] text-ink-3 uppercase flex items-center gap-4 mb-4"
        style={{ "--delay": "200ms" } as React.CSSProperties}
      >
        <span className="w-14 h-px bg-rule" />
        <span className="w-[5px] h-[5px] bg-gold rotate-45" />
        <span>{SITE_CONTENT.hero.eyebrow}</span>
        <span className="w-[5px] h-[5px] bg-gold rotate-45" />
        <span className="w-14 h-px bg-rule" />
      </div>

      {/* Title */}
      <h1
        className="animate-entrance animate-fade-up font-[family-name:var(--font-cormorant)] font-normal text-[clamp(3.5rem,8vw+0.5rem,7.5rem)] leading-[0.9] tracking-[-0.03em] m-0 text-ink"
        style={{ "--delay": "300ms" } as React.CSSProperties}
      >
        {SITE_CONTENT.hero.title}
        <em className="italic font-light text-gold">
          {SITE_CONTENT.hero.titleAccent}
        </em>
      </h1>

      {/* Ornament Divider */}
      <div
        className="animate-entrance animate-scale-x flex items-center justify-center gap-4.5 my-6 w-full max-w-[520px]"
        style={{ "--delay": "500ms" } as React.CSSProperties}
      >
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-rule to-transparent" />
        <AlquimiaDivider className="w-7 h-7 text-gold" />
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-rule to-transparent" />
      </div>

      {/* Subtitle */}
      <p
        id="manifiesto"
        className="animate-entrance animate-fade-in font-[family-name:var(--font-cormorant)] italic font-light text-[clamp(1.15rem,1.5vw+0.5rem,1.625rem)] leading-[1.4] text-ink-2 max-w-[620px] m-0 mb-6"
        style={{ "--delay": "600ms" } as React.CSSProperties}
      >
        {SITE_CONTENT.hero.subtitle}
      </p>

      {/* CTA Button */}
      <DiscordCta />

      {/* Pillars */}
      <ScrollReveal className="mt-20 w-full" id="pilares">
        <div className="grid grid-cols-3 gap-0 border-t border-b border-rule-2 max-md:grid-cols-1">
          {SITE_CONTENT.pillars.map((pillar, index) => {
            const IconComponent =
              PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS];
            return (
              <div
                key={pillar.id}
                className={`px-8 py-8 text-center ${
                  index < SITE_CONTENT.pillars.length - 1
                    ? "border-r border-rule-2 max-md:border-r-0 max-md:border-b"
                    : ""
                }`}
              >
                <IconComponent className="w-6 h-6 text-gold mb-3.5 mx-auto" />
                <div className="font-[family-name:var(--font-im-fell)] tracking-[0.24em] text-[11px] uppercase text-ink mb-1.5">
                  {pillar.title}
                </div>
                <div className="font-[family-name:var(--font-eb-garamond)] italic text-[13px] text-ink-3">
                  {pillar.description}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Quote */}
      <ScrollReveal className="mt-24 max-w-[620px] w-full">
        <figure className="text-left flex flex-col items-start gap-4.5 max-md:text-center max-md:items-center">
          <QuoteOrnament className="w-8 h-8 text-gold opacity-80" />
          <blockquote className="m-0 p-0 font-[family-name:var(--font-cormorant)] italic font-light text-[clamp(1.15rem,1.2vw+0.5rem,1.375rem)] leading-[1.5] text-ink-2">
            &ldquo;{SITE_CONTENT.quote.text}&rdquo;
          </blockquote>
          <figcaption className="font-[family-name:var(--font-im-fell)] tracking-[0.3em] text-[11px] text-ink-3 uppercase flex items-center gap-2.5">
            <span className="w-6 h-px bg-rule" />— {SITE_CONTENT.quote.author}
          </figcaption>
        </figure>
      </ScrollReveal>
    </main>
  );
}
