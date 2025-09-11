import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { navigateToContactWithData, getPackageInquiryData } from "@/lib/contact-utils";

export function PricingSection() {
  const packages = [
    {
      icon: "🌱",
      name: "Starter Package",
      price: "19.99",
      features: [
        "1 Domain Registration (.co.nz or .com)",
        "1 Custom Email Address (5GB mailbox)",
        "Basic DNS Management",
        "Standard Support"
      ],
      buttonText: "Choose Starter",
      testId: "starter",
      popular: false
    },
    {
      icon: "💼",
      name: "Business Package",
      price: "49.99",
      features: [
        "1 Domain Registration (.co.nz, .com, or .net)",
        "Up to 5 Custom Email Addresses (10GB each)",
        "Advanced DNS Management",
        "Priority Support"
      ],
      buttonText: "Choose Business",
      testId: "business",
      popular: true
    },
    {
      icon: "🚀",
      name: "Premium Package",
      price: "99.99",
      features: [
        "1 Domain Registration (any extension available)",
        "Up to 10 Custom Email Addresses (20GB each)",
        "Premium DNS & Security Features",
        "24/7 Dedicated Support"
      ],
      buttonText: "Choose Premium",
      testId: "premium",
      popular: false
    }
  ];

  const handlePackageSelect = (packageName: string, price: string) => {
    const inquiryData = getPackageInquiryData(packageName, price);
    navigateToContactWithData(inquiryData.subject, inquiryData.message);
  };

  const handleEnterpriseContact = () => {
    const inquiryData = {
      subject: "Enterprise Plan Inquiry",
      message: `Hi GMR Solutions,

I'm interested in discussing an enterprise plan for my organization. We have specific requirements that may need a custom solution.

Could you please contact me to discuss:
- Our current needs and scale
- Custom pricing options
- Enterprise features and support
- Implementation timeline

Thank you!`
    };
    navigateToContactWithData(inquiryData.subject, inquiryData.message);
  };

  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="pricing-title">
            Pricing Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="pricing-subtitle">
            Choose the perfect plan for your needs - transparent pricing with no hidden costs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.testId}
              className={`pricing-card bg-card p-8 rounded-xl shadow-lg border relative ${
                pkg.popular ? "border-2 border-primary shadow-xl" : "border-border"
              }`}
              data-testid={`pricing-${pkg.testId}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium" data-testid="popular-badge">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{pkg.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`${pkg.testId}-name`}>
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-primary" data-testid={`${pkg.testId}-price`}>
                  NZD {pkg.price}
                </div>
                <div className="text-muted-foreground">/ year</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center" data-testid={`${pkg.testId}-feature-${featureIndex}`}>
                    <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 font-semibold transition-colors ${
                  pkg.popular 
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground" 
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
                onClick={() => handlePackageSelect(pkg.name.replace(' Package', ''), `NZD ${pkg.price}`)}
                data-testid={`button-${pkg.testId}`}
              >
                {pkg.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4" data-testid="enterprise-text">
            Need something bigger?
          </p>
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 font-semibold transition-colors"
            onClick={handleEnterpriseContact}
            data-testid="button-enterprise"
          >
            Contact us for an enterprise plan
          </Button>
        </div>
      </div>
    </section>
  );
}
