import { Search, UserCheck, Zap, Shield } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Choose Your Domain",
      description: "Tell us your desired domain name and we'll help you find the perfect extension including .co.nz, .com, .net and more.",
      testId: "choose-domain"
    },
    {
      icon: UserCheck,
      title: "Register & Verify",
      description: "Complete the registration process with secure payment and verify your contact information for domain ownership.",
      testId: "register-verify"
    },
    {
      icon: Zap,
      title: "Set Up Email",
      description: "Create professional email addresses instantly and configure them with your favorite email client or app.",
      testId: "setup-email"
    },
    {
      icon: Shield,
      title: "Secure & Manage",
      description: "Your domain and emails are secured with advanced protection. Manage everything through our intuitive dashboard.",
      testId: "secure-manage"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="how-it-works-title">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="how-it-works-subtitle">
            Get your domain and professional email up and running in just four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center" data-testid={step.testId}>
                <div className="relative mb-6">
                  <div className="feature-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`${step.testId}-title`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`${step.testId}-description`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}