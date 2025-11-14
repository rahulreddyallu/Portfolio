// ============================================================================
// VALIDATION SCHEMAS - ZOD-BASED FORM VALIDATION
// ============================================================================

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' })
    .regex(/^[a-zA-Z\s'-]+$/, { message: 'Name contains invalid characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),
  subject: z
    .string()
    .min(3, { message: 'Subject must be at least 3 characters' })
    .max(200, { message: 'Subject must be less than 200 characters' })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(5000, { message: 'Message must be less than 5000 characters' }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}
