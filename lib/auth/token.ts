export const SESSION_COOKIE_NAME = 'lafia_dashboard_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

export interface SessionPayload {
  email: string;
  exp: number;
  iat: number;
}

/**
 * Helper to get the secret key for HMAC SHA-256 signing
 */
export function getAuthSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('AUTH_SECRET environment variable is missing.');
    }
    return 'default-dev-secret-key-at-least-32-chars-long';
  }
  return secret;
}

/**
 * Creates a base64url encoded HMAC-SHA256 signature
 */
async function sign(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  const hashArray = Array.from(new Uint8Array(signature));
  const base64 = btoa(String.fromCharCode.apply(null, hashArray));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Verifies a base64url encoded HMAC-SHA256 signature with constant-time equality
 */
async function verify(data: string, signature: string, secret: string): Promise<boolean> {
  const expected = await sign(data, secret);
  if (expected.length !== signature.length) return false;
  let result = 0;
  for (let i = 0; i < expected.length; i++) {
    result |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Create a signed session token
 */
export async function createSessionToken(email: string): Promise<string> {
  const secret = getAuthSecret();
  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = {
    email: email.toLowerCase().trim(),
    iat: now,
    exp: now + SESSION_MAX_AGE,
  };
  const payloadBase64 = btoa(JSON.stringify(payload))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const signature = await sign(payloadBase64, secret);
  return `${payloadBase64}.${signature}`;
}

/**
 * Verify a signed session token and return the payload if valid and unexpired
 */
export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [payloadBase64, signature] = parts;
  const secret = getAuthSecret();

  const isValid = await verify(payloadBase64, signature, secret);
  if (!isValid) return null;

  try {
    const rawJson = atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/'));
    const payload: SessionPayload = JSON.parse(rawJson);

    const now = Math.floor(Date.now() / 1000);
    if (!payload.exp || payload.exp < now) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
