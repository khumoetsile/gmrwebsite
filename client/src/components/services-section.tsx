import { Globe, Mail, Check } from "lucide-react";

export function ServicesSection() {
  const domainFeatures = [
    "Secure your unique domain name with ease",
    "Wide range of extensions (.co.nz, .com, .net, .org, and more)",
    "Fast, reliable, and affordable registration process",
    "Domain management tools to keep everything in one place"
  ];

  const emailFeatures = [
    "Create professional email addresses (yourname@yourbusiness.co.nz)",
    "Boost credibility and trust with clients and partners",
    "Secure and reliable email hosting",
    "Easy setup with your devices and applications"
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            Complete digital identity solutions for your business success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Domain Registration Service */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border" data-testid="service-domain">
            <div className="feature-icon w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="domain-title">
              Domain Registration
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {domainFeatures.map((feature, index) => (
                <li key={index} className="flex items-center" data-testid={`domain-feature-${index}`}>
                  <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom Email Service */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border" data-testid="service-email">
            <div className="feature-icon w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="email-title">
              Custom Email Addresses
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {emailFeatures.map((feature, index) => (
                <li key={index} className="flex items-center" data-testid={`email-feature-${index}`}>
                  <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
