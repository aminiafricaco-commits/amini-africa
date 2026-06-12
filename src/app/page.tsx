import { HeroSection } from "@/components/sections/hero";
import { MobileHero } from "@/components/sections/hero-mobile";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { FeaturedCaseStudies } from "@/components/sections/featured-case-studies";
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
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialCarousel />
      <FeaturedCaseStudies />
      <FinalCTA />
    </>
  );
}
