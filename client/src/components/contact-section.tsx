import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Pre-fill form based on URL parameters and custom events
  useEffect(() => {
    const checkUrlParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const subject = urlParams.get('subject');
      const message = urlParams.get('message');
      
      if (subject || message) {
        setFormData(prev => ({
          ...prev,
          subject: subject || prev.subject,
          message: message || prev.message
        }));
        
        // Clear URL parameters after setting form data
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }
    };

    // Handle custom prefill events (for immediate form filling)
    const handlePrefillEvent = (event: CustomEvent) => {
      const { subject, message } = event.detail;
      if (subject || message) {
        setFormData(prev => ({
          ...prev,
          subject: subject || prev.subject,
          message: message || prev.message
        }));
      }
    };

    // Check URL parameters on mount (for page refresh scenarios)
    checkUrlParams();

    // Listen for custom prefill events
    window.addEventListener('prefillContact', handlePrefillEvent as EventListener);

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', checkUrlParams);

    return () => {
      window.removeEventListener('prefillContact', handlePrefillEvent as EventListener);
      window.removeEventListener('popstate', checkUrlParams);
    };
  }, []);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      description: "Based in New Zealand",
      testId: "location"
    },
    {
      icon: Mail,
      title: "Email",
      description: "info@gmrsolutions.co.nz",
      testId: "email"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+64 (example number)",
      testId: "phone"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Have questions or ready to get started? We're here to help!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-center space-x-4" data-testid={`contact-${info.testId}`}>
                  <div className="feature-icon w-12 h-12 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground" data-testid={`${info.testId}-title`}>
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`${info.testId}-description`}>
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-lg border border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      data-testid="input-firstName"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      data-testid="input-lastName"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    data-testid="input-email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+64 21 123 456"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    data-testid="input-phone"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={(value) => handleInputChange("subject", value)} 
                    data-testid="select-subject"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Starter Package Inquiry">Starter Package Inquiry</SelectItem>
                      <SelectItem value="Business Package Inquiry">Business Package Inquiry</SelectItem>
                      <SelectItem value="Premium Package Inquiry">Premium Package Inquiry</SelectItem>
                      <SelectItem value="Enterprise Plan Inquiry">Enterprise Plan Inquiry</SelectItem>
                      <SelectItem value=".co.nz Domain Registration Inquiry">.co.nz Domain Registration Inquiry</SelectItem>
                      <SelectItem value=".com Domain Registration Inquiry">.com Domain Registration Inquiry</SelectItem>
                      <SelectItem value=".org Domain Registration Inquiry">.org Domain Registration Inquiry</SelectItem>
                      <SelectItem value=".net Domain Registration Inquiry">.net Domain Registration Inquiry</SelectItem>
                      <SelectItem value=".biz Domain Registration Inquiry">.biz Domain Registration Inquiry</SelectItem>
                      <SelectItem value=".info Domain Registration Inquiry">.info Domain Registration Inquiry</SelectItem>
                      <SelectItem value="Custom Email Setup">Custom Email Setup</SelectItem>
                      <SelectItem value="Technical Support">Technical Support</SelectItem>
                      <SelectItem value="General Question">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    data-testid="textarea-message"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-3 font-semibold" 
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
