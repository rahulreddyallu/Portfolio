// ============================================================================
// CONTACT API TESTS - VALIDATION & RESPONSE
// ============================================================================

import { contactFormSchema } from '@/lib/validation';

describe('/api/contact', () => {
  describe('Validation Schema', () => {
    it('validates correct contact form data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, this is a test message.',
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('rejects empty name', () => {
      const invalidData = {
        name: '',
        email: 'john@example.com',
        message: 'Hello',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects invalid email', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Hello',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects empty message', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: '',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects message that is too short', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hi', // Too short
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('API Route Integration (mocked)', () => {
    it('placeholder for future API route tests', () => {
      // TODO: Add integration tests with msw or similar
      expect(true).toBe(true);
    });
  });
});
