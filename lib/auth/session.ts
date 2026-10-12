import { cookies } from 'next/headers';
import {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
  type SessionPayload,
  createSessionToken,
  verifySessionToken,
} from './token';

export {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
  type SessionPayload,
  createSessionToken,
  verifySessionToken,
};

/**
 * Sets the httpOnly session cookie
 */
export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });
}

/**
 * Clears the session cookie
 */
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

/**
 * Retrieves and validates the current active session on the server
 */
export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = await verifySessionToken(token);
  if (!payload) return null;

  const allowedEmail = (process.env.DASHBOARD_ALLOWED_EMAIL || '').toLowerCase().trim();
  if (allowedEmail && payload.email !== allowedEmail) {
    return null;
  }

  return payload;
}
