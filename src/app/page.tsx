import { HeroSection } from "@/components/sections/hero";
import { MobileHero } from "@/components/sections/hero-mobile";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      {/* Mobile hero: visible below lg breakpoint */}
      <div className="block lg:hidden">
        <MobileHero />
      </div>
      {/* Desktop hero: visible at lg and above */}
      <div className="hidden lg:block">
        <HeroSection />
      </div>
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
