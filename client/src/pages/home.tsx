import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { DomainExtensionsSection } from "@/components/domain-extensions-section";
import { PricingSection } from "@/components/pricing-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { TrustSection } from "@/components/trust-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <DomainExtensionsSection />
      <TrustSection />
      <PricingSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
