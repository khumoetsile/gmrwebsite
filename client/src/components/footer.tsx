export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "About", action: () => scrollToSection("about") },
    { name: "Services", action: () => scrollToSection("services") },
    { name: "Pricing", action: () => scrollToSection("pricing") },
    { name: "Contact", action: () => scrollToSection("contact") }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-logo">
              GMR Solutions
            </h3>
            <p className="text-background/80 mb-6" data-testid="footer-description">
              Your trusted partner for domain registration and custom email services in New Zealand. 
              Professional online presence made simple.
            </p>
            <div className="text-background/80">
              <p className="mb-2">📍 Based in New Zealand</p>
              <p className="mb-2">📧 info@gmrsolutions.co.nz</p>
              <p>☎ +64 (example number)</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="quick-links-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-background/80">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="hover:text-background transition-colors text-left"
                    data-testid={`footer-link-${index}`}
                  >
                    {link.name}
                  </button>
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
