import { MapPin, DollarSign, Shield, HeadphonesIcon } from "lucide-react";

export function WhyChooseSection() {
  const benefits = [
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Proudly based in New Zealand, serving local businesses and individuals with personalized care.",
      testId: "local-expertise"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Transparent and competitive rates with no hidden costs. Get the best value for your investment.",
      testId: "affordable-pricing"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Your domains and emails are protected with the latest security technology and best practices.",
      testId: "security-first"
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Friendly support team ready to assist you whenever you need help with your domains or emails.",
      testId: "dedicated-support"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="why-choose-title">
            Why Choose GMR Solutions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="why-choose-subtitle">
            We combine local expertise with global standards to deliver exceptional service
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center" data-testid={benefit.testId}>
                <div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`${benefit.testId}-title`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`${benefit.testId}-description`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
