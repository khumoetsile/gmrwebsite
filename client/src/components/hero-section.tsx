import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleRegisterDomain = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCustomEmail = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-gradient py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight" data-testid="hero-title">
            Secure Your Online Presence
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
            We help individuals and businesses in New Zealand establish a professional online identity with trusted domain registration and custom email services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold shadow-lg transition-all hover:shadow-xl"
              onClick={handleRegisterDomain}
              data-testid="button-register-domain"
            >
              Register Your Domain Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-card hover:bg-muted text-foreground px-8 py-4 text-lg font-semibold border border-border shadow-lg transition-all hover:shadow-xl"
              onClick={handleCustomEmail}
              data-testid="button-custom-email"
            >
              Get a Custom Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
