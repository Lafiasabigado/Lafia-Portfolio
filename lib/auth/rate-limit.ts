interface RateLimitEntry {
  count: number;
  firstAttemptTime: number;
}

// Global in-memory map to store login attempts per IP
const attemptsMap = new Map<string, RateLimitEntry>();

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Clean up expired rate limit entries older than the window
 */
function cleanupExpiredEntries(now: number): void {
  for (const [ip, entry] of attemptsMap.entries()) {
    if (now - entry.firstAttemptTime > WINDOW_MS) {
      attemptsMap.delete(ip);
    }
  }
}

/**
 * Checks if an IP is currently rate-limited
 */
export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetInMinutes: number;
} {
  const now = Date.now();
  cleanupExpiredEntries(now);

  const entry = attemptsMap.get(ip);
  if (!entry) {
    return {
      allowed: true,
      remaining: MAX_ATTEMPTS,
      resetInMinutes: 15,
    };
  }

  const elapsed = now - entry.firstAttemptTime;
  if (elapsed > WINDOW_MS) {
    attemptsMap.delete(ip);
    return {
      allowed: true,
      remaining: MAX_ATTEMPTS,
      resetInMinutes: 15,
    };
  }

  const remaining = Math.max(0, MAX_ATTEMPTS - entry.count);
  const resetInMinutes = Math.ceil((WINDOW_MS - elapsed) / 60000);

  return {
    allowed: entry.count < MAX_ATTEMPTS,
    remaining,
    resetInMinutes,
  };
}

/**
 * Records a failed login attempt for the given IP
 */
export function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const entry = attemptsMap.get(ip);

  if (!entry || now - entry.firstAttemptTime > WINDOW_MS) {
    attemptsMap.set(ip, {
      count: 1,
      firstAttemptTime: now,
    });
  } else {
    entry.count += 1;
  }
}

/**
 * Resets the attempt counter upon successful login
 */
export function resetRateLimit(ip: string): void {
  attemptsMap.delete(ip);
}
