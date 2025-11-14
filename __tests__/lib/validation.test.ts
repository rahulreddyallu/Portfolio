import { contactFormSchema } from '@/lib/validation';

describe('validation', () => {
  it('validates contact form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello world',
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
