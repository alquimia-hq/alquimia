import { BackgroundEffects } from "@/components/background-effects";
import { LandingHeader } from "@/components/landing-header";
import { HeroSection } from "@/components/hero-section";
import { LandingFooter } from "@/components/landing-footer";

export default function Home() {
  return (
    <>
      <BackgroundEffects />

      <div className="relative z-[4] min-h-screen flex flex-col">
        <LandingHeader />
        <HeroSection />
        <LandingFooter />
      </div>
    </>
  );
}
