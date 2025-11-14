// ============================================================================
// RATE LIMITING - IN-MEMORY STORE (PRODUCTION: USE REDIS)
// ============================================================================

import { RATE_LIMIT } from './constants';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetAt: number;
  };
}

const store: RateLimitStore = {};

export async function rateLimit(
  identifier: string
): Promise<{ success: boolean; remaining?: number }> {
  const now = Date.now();
  const record = store[identifier];

  // Clean up expired records
  if (record && now > record.resetAt) {
    delete store[identifier];
  }

  // Check if limit exceeded
  if (record && record.count >= RATE_LIMIT.maxRequests) {
    return { success: false };
  }

  // Update or create record
  if (record) {
    record.count++;
  } else {
    store[identifier] = {
      count: 1,
      resetAt: now + RATE_LIMIT.windowMs,
    };
  }

  return {
    success: true,
    remaining: RATE_LIMIT.maxRequests - (store[identifier]?.count || 0),
  };
}
