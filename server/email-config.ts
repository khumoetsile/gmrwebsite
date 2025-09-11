// Email configuration - easily configurable for future email integration
export const EMAIL_CONFIG = {
  // From address for outgoing emails
  FROM_EMAIL: process.env.FROM_EMAIL || "info@gmrsolutions.co.nz",
  FROM_NAME: process.env.FROM_NAME || "GMR Solutions",
  
  // Admin notification email
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "admin@gmrsolutions.co.nz",
  
  // Email service settings (can be changed later)
  EMAIL_SERVICE: process.env.EMAIL_SERVICE || "disabled", // smtp, sendgrid, disabled
  
  // SMTP settings (for future use)
  SMTP_HOST: process.env.SMTP_HOST || "",
  SMTP_PORT: parseInt(process.env.SMTP_PORT || "587"),
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",
  
  // SendGrid settings (for future use)
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "",
};

// Email templates
export const EMAIL_TEMPLATES = {
  CONTACT_INQUIRY: {
    subject: "New Contact Inquiry - GMR Solutions",
    getHtml: (data: any) => `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${data.subject || 'General Inquiry'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  }
};

// Future email sending function (placeholder)
export async function sendEmail(template: string, data: any): Promise<boolean> {
  if (EMAIL_CONFIG.EMAIL_SERVICE === "disabled") {
    console.log("Email service disabled. Would send:", template, data);
    return true; // Simulate success for now
  }
  
  // TODO: Implement actual email sending based on EMAIL_CONFIG.EMAIL_SERVICE
  // This can be extended later with SMTP, SendGrid, or other providers
  
  return false;
}