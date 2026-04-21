import { BackgroundEffects } from "@/components/background-effects";
import { ColorSwatches } from "@/components/brand/color-swatches";
import { LogoCard } from "@/components/brand/logo-card";
import { TypographySpecimens } from "@/components/brand/typography-specimens";
import { LandingFooter } from "@/components/landing-footer";
import { LandingHeader } from "@/components/landing-header";
import { LOGO_VARIANTS } from "@/lib/brand/tokens";
import { SITE_CONTENT } from "@/lib/constants";

export default function BrandPage() {
  const copy = SITE_CONTENT.brandPage;

  return (
    <>
      <BackgroundEffects />

      <div className="relative z-[4] flex min-h-screen flex-col">
        <LandingHeader />

        <main className="flex-1 px-14 pt-10 pb-24 max-md:px-6 max-lg:px-8">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-20">
            {/* Intro */}
            <header className="flex animate-entrance animate-fade-up flex-col items-center gap-3 text-center">
              <span className="font-[family-name:var(--font-im-fell)] text-[11px] text-ink-3 uppercase tracking-[0.4em]">
                {copy.eyebrow}
              </span>
              <h1
                className="text-[clamp(44px,7vw,88px)] text-ink"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {copy.title}
              </h1>
              <p className="max-w-xl font-[family-name:var(--font-eb-garamond)] text-[16px] text-ink-3 italic leading-relaxed">
                {copy.subtitle}
              </p>
            </header>

            {/* Logo */}
            <Section title={copy.sections.logo}>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {LOGO_VARIANTS.map((v) => (
                  <LogoCard key={v.id} variant={v.id} />
                ))}
              </div>
            </Section>

            {/* Colors */}
            <Section title={copy.sections.colors}>
              <ColorSwatches />
            </Section>

            {/* Typography */}
            <Section title={copy.sections.typography}>
              <TypographySpecimens />
            </Section>
          </div>
        </main>

        <LandingFooter />
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-rule" />
        <h2 className="font-[family-name:var(--font-im-fell)] text-[12px] text-ink-2 uppercase tracking-[0.4em]">
          {title}
        </h2>
        <span className="h-px flex-1 bg-rule" />
      </div>
      {children}
    </section>
  );
}
