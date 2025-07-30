# EmailJS Setup Guide for WAGUS Services Contact Form

The contact form has been integrated with EmailJS to enable real email sending. Follow these steps to complete the setup:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - {{from_name}}

New contact form submission from WAGUS Services website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Website: {{website}}
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}
How they heard about us: {{hear_about}}

Message:
{{message}}

---
This email was sent from the WAGUS Services contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key**

## 5. Update the Code

In `src/pages/Contact.tsx`, replace these placeholders with your actual values:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## 6. Test the Form

1. Save your changes
2. Test the contact form on your website
3. Check your email inbox for the test message

## Security Notes

- EmailJS public keys are safe to use in frontend code
- Set up domain restrictions in EmailJS dashboard for added security
- Monitor your EmailJS usage to stay within free tier limits (200 emails/month)

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Emails not received**: Verify your email service setup and template
- **Rate limiting**: EmailJS has usage limits on free accounts

## Alternative: Quick Demo Setup

For immediate testing, you can use these demo credentials (limited functionality):
- These will log to console instead of sending real emails
- Replace with your own credentials for production use

The form will gracefully handle errors and show appropriate messages to users.