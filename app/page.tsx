import { BackgroundEffects } from "@/components/background-effects";
import { HeroSection } from "@/components/hero-section";
import { LandingFooter } from "@/components/landing-footer";
import { LandingHeader } from "@/components/landing-header";

export default function Home() {
  return (
    <>
      <BackgroundEffects />

      <div className="relative z-[4] flex min-h-screen flex-col">
        <LandingHeader />
        <HeroSection />
        <LandingFooter />
      </div>
    </>
  );
}
