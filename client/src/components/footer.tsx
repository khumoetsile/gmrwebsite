export function Footer() {
  const services = [
    { name: "Domain Registration", href: "#" },
    { name: "Custom Email", href: "#" },
    { name: "DNS Management", href: "#" },
    { name: "Enterprise Plans", href: "#" }
  ];

  const support = [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "System Status", href: "#" }
  ];

  const company = [
    { name: "About Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Blog", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-logo">
              GMR Solutions
            </h3>
            <p className="text-background/80 mb-4" data-testid="footer-description">
              Your trusted partner for domain registration and custom email services in New Zealand.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="services-heading">
              Services
            </h4>
            <ul className="space-y-2 text-background/80">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="hover:text-background transition-colors"
                    data-testid={`footer-service-${index}`}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="support-heading">
              Support
            </h4>
            <ul className="space-y-2 text-background/80">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="hover:text-background transition-colors"
                    data-testid={`footer-support-${index}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="company-heading">
              Company
            </h4>
            <ul className="space-y-2 text-background/80">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="hover:text-background transition-colors"
                    data-testid={`footer-company-${index}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center space-y-2">
          <p className="text-background/80" data-testid="footer-copyright">
            © 2025 GMR Solutions | Domain Registration & Custom Email Services | New Zealand
          </p>
          <p className="text-background/60 text-sm">
            Website Design by{" "}
            <a 
              href="https://khumo.co.bw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-background transition-colors underline"
              data-testid="footer-designer-link"
            >
              Khumo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
