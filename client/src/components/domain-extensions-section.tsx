import { Globe } from "lucide-react";
import { navigateToContactWithData, getDomainInquiryData } from "@/lib/contact-utils";

export function DomainExtensionsSection() {
  const extensions = [
    {
      extension: ".co.nz",
      price: "NZD 29.99",
      description: "Perfect for New Zealand businesses",
      popular: true,
      testId: "co-nz"
    },
    {
      extension: ".com",
      price: "NZD 19.99",
      description: "World's most popular domain extension",
      popular: false,
      testId: "com"
    },
    {
      extension: ".net",
      price: "NZD 24.99",
      description: "Great for tech and network companies",
      popular: false,
      testId: "net"
    },
    {
      extension: ".org",
      price: "NZD 22.99",
      description: "Ideal for organizations and nonprofits",
      popular: false,
      testId: "org"
    },
    {
      extension: ".biz",
      price: "NZD 26.99",
      description: "Professional choice for businesses",
      popular: false,
      testId: "biz"
    },
    {
      extension: ".info",
      price: "NZD 18.99",
      description: "Perfect for information websites",
      popular: false,
      testId: "info"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="extensions-title">
            Choose Your Perfect Domain Extension
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="extensions-subtitle">
            From local New Zealand domains to global extensions, find the perfect fit for your brand
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensions.map((ext, index) => (
            <div 
              key={index} 
              className={`bg-card p-6 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 ${
                ext.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
              data-testid={ext.testId}
            >
              {ext.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full inline-block mb-4" data-testid="popular-badge">
                  Most Popular in NZ
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className="feature-icon w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground" data-testid={`${ext.testId}-extension`}>
                    {ext.extension}
                  </h3>
                  <div className="text-lg font-semibold text-primary" data-testid={`${ext.testId}-price`}>
                    {ext.price}/year
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6" data-testid={`${ext.testId}-description`}>
                {ext.description}
              </p>
              
              <button 
                onClick={() => {
                  const inquiryData = getDomainInquiryData(ext.extension, ext.price);
                  navigateToContactWithData(inquiryData.subject, inquiryData.message);
                }}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                  ext.popular 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                }`}
                data-testid={`${ext.testId}-register`}
              >
                Register {ext.extension}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a different extension?</p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We support over 100 domain extensions including country-specific domains like .com.au, .uk, and many more. 
            Contact us to check availability for your preferred extension.
          </p>
        </div>
      </div>
    </section>
  );
}