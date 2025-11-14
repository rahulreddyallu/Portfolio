// ============================================================================
// EMAIL SERVICE - SENDGRID OR NODEMAILER
// ============================================================================

import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  // Option 1: SendGrid (preferred for production)
  if (process.env.SENDGRID_API_KEY) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: options.to,
      from: options.from,
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
    });
    return;
  }

  // Option 2: SMTP (Nodemailer fallback)
  if (process.env.SMTP_HOST) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      to: options.to,
      from: options.from,
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
    });
    return;
  }

  throw new Error('No email service configured. Set SENDGRID_API_KEY or SMTP credentials.');
}
