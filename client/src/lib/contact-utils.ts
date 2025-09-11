// Utility functions for pre-filling contact form

export function navigateToContactWithData(subject: string, message: string) {
  // Dispatch custom event for immediate form pre-filling
  const event = new CustomEvent('prefillContact', {
    detail: { subject, message }
  });
  window.dispatchEvent(event);
  
  // Add URL parameters for form pre-filling (backup for page refresh)
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (message) params.set('message', message);
  
  // Update URL with parameters - stay on home page
  const newUrl = `/?${params.toString()}`;
  window.history.pushState({}, document.title, newUrl);
  
  // Scroll to contact section
  setTimeout(() => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}

export function getPackageInquiryData(packageName: string, price: string) {
  return {
    subject: `${packageName} Package Inquiry`,
    message: `Hi GMR Solutions,

I'm interested in learning more about the ${packageName} package (${price}/year). Could you please provide more details about:

- The registration process
- Setup timeline
- Any additional features or benefits
- Next steps to get started

Thank you!`
  };
}

export function getDomainInquiryData(extension: string, price: string) {
  return {
    subject: `${extension} Domain Registration Inquiry`,
    message: `Hi GMR Solutions,

I'm interested in registering a ${extension} domain (${price}/year). Could you please help me with:

- Domain availability check
- Registration process
- Setup and configuration
- Any additional services you recommend

Thank you!`
  };
}