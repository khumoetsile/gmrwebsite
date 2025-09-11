import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does domain registration take?",
      answer: "Domain registration is typically instant for most extensions like .com, .net, and .org. For .co.nz domains, activation usually takes 1-2 hours after registration.",
      testId: "registration-time"
    },
    {
      question: "Can I transfer my existing domain to GMR Solutions?",
      answer: "Yes! We make domain transfers simple and seamless. The process typically takes 5-7 days and we'll guide you through every step to ensure zero downtime for your website and email.",
      testId: "domain-transfer"
    },
    {
      question: "What's included with custom email addresses?",
      answer: "Each custom email includes secure hosting, spam protection, mobile sync, webmail access, and easy setup with popular email clients like Outlook, Apple Mail, and Gmail.",
      testId: "email-features"
    },
    {
      question: "Do you offer website hosting services?",
      answer: "While we specialize in domain registration and email services, we can recommend trusted New Zealand hosting providers that integrate seamlessly with your GMR Solutions domain.",
      testId: "hosting-services"
    },
    {
      question: "What happens if I forget to renew my domain?",
      answer: "We send renewal reminders 60, 30, and 7 days before expiration. If your domain expires, you have a 30-day grace period to renew at standard rates, followed by a redemption period with additional fees.",
      testId: "domain-renewal"
    },
    {
      question: "Can I upgrade or downgrade my email package?",
      answer: "Absolutely! You can upgrade or downgrade your email package anytime from your account dashboard. Changes take effect immediately and billing is prorated.",
      testId: "package-changes"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="faq-subtitle">
            Everything you need to know about our domain and email services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg border border-border shadow-sm" data-testid={faq.testId}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
                data-testid={`${faq.testId}-button`}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4" data-testid={`${faq.testId}-question`}>
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed" data-testid={`${faq.testId}-answer`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
            data-testid="button-contact-us"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}