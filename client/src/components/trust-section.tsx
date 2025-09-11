import { Shield, Award, Clock, Users } from "lucide-react";

export function TrustSection() {
  const trustIndicators = [
    {
      icon: Users,
      value: "10,000+",
      label: "Satisfied Customers",
      description: "Businesses trust us with their online presence",
      testId: "customers"
    },
    {
      icon: Clock,
      value: "15+ Years",
      label: "Industry Experience",
      description: "Proven expertise in domain and email services",
      testId: "experience"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable service you can count on",
      testId: "uptime"
    },
    {
      icon: Award,
      value: "24/7",
      label: "Expert Support",
      description: "New Zealand-based team ready to help",
      testId: "support"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="trust-title">
            Trusted by New Zealand Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="trust-subtitle">
            Join thousands of businesses who rely on GMR Solutions for their domain and email needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50" data-testid={indicator.testId}>
                <div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2" data-testid={`${indicator.testId}-value`}>
                  {indicator.value}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`${indicator.testId}-label`}>
                  {indicator.label}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`${indicator.testId}-description`}>
                  {indicator.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}