import { MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="about-title">
            About GMR Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            At GMR Solutions, we believe your online identity starts with the right domain name and a professional email address.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed" data-testid="about-description-1">
              Based in New Zealand, we provide reliable and affordable domain registration services, along with tailored email solutions designed to give your brand credibility and trust.
            </p>
            <p className="text-lg text-foreground leading-relaxed" data-testid="about-description-2">
              Whether you're a small business, a startup, or an individual, our mission is simple: make it easy for you to own your space online.
            </p>
            <div className="flex items-center space-x-4 text-secondary">
              <MapPin className="h-8 w-8" />
              <span className="text-lg font-medium text-foreground" data-testid="location-text">
                Proudly serving New Zealand businesses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
