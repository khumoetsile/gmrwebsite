import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Founder, Kiwi Crafts",
      company: "Auckland",
      rating: 5,
      text: "GMR Solutions made setting up our professional email addresses incredibly easy. The whole process took less than an hour, and now we look so much more professional to our clients.",
      testId: "sarah-mitchell"
    },
    {
      name: "James Robinson",
      role: "IT Manager, Robinson & Associates",
      company: "Wellington",
      rating: 5,
      text: "Transferred 15 domains to GMR Solutions last year. Their support team guided us through everything step-by-step. Zero downtime and excellent ongoing service.",
      testId: "james-robinson"
    },
    {
      name: "Maria Santos",
      role: "Director, Santos Consulting",
      company: "Christchurch",
      rating: 5,
      text: "The email hosting is rock solid - no more spam issues and perfect sync across all our devices. Customer support is genuinely helpful, not just scripted responses.",
      testId: "maria-santos"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-accent fill-accent" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            Real feedback from New Zealand businesses who trust GMR Solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border shadow-lg" data-testid={testimonial.testId}>
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-primary mr-3" />
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <blockquote className="text-foreground mb-6 leading-relaxed" data-testid={`${testimonial.testId}-text`}>
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground" data-testid={`${testimonial.testId}-name`}>
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`${testimonial.testId}-role`}>
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary font-medium" data-testid={`${testimonial.testId}-company`}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Join hundreds of satisfied customers</p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            data-testid="button-get-started"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}