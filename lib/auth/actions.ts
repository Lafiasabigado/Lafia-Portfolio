'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { checkRateLimit, recordFailedAttempt, resetRateLimit } from './rate-limit';
import { createSessionToken, setSessionCookie, clearSessionCookie } from './session';

export interface LoginActionState {
  error?: string;
  success?: boolean;
}

/**
 * Extracts client IP from request headers
 */
async function getClientIp(): Promise<string> {
  const headerStore = await headers();
  const forwardedFor = headerStore.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIp = headerStore.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return '127.0.0.1';
}

/**
 * Server Action for authenticating the dashboard user
 */
export async function loginAction(
  _prevState: LoginActionState | null,
  formData: FormData
): Promise<LoginActionState> {
  const email = (formData.get('email') as string || '').toLowerCase().trim();
  const password = (formData.get('password') as string || '').trim();
  const locale = (formData.get('locale') as string || 'fr').toLowerCase();

  const ip = await getClientIp();
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    const errorMsg =
      locale === 'en'
        ? `Too many failed attempts. Please try again in ${rateLimit.resetInMinutes} minutes.`
        : `Trop de tentatives. Veuillez réessayer dans ${rateLimit.resetInMinutes} minutes.`;
    return { error: errorMsg };
  }

  const allowedEmail = (process.env.DASHBOARD_ALLOWED_EMAIL || '').toLowerCase().trim();
  const allowedPassword = (process.env.DASHBOARD_PASSWORD || '').trim();

  // If no password is configured in env, reject login
  if (!allowedEmail || !allowedPassword) {
    return {
      error:
        locale === 'en'
          ? 'Dashboard credentials are not properly configured in environment.'
          : 'Les identifiants du dashboard ne sont pas configurés dans les variables d’environnement.',
    };
  }

  // Generic rejection if email or password do not match
  if (email !== allowedEmail || password !== allowedPassword) {
    recordFailedAttempt(ip);
    return {
      error:
        locale === 'en'
          ? 'Invalid email or password.'
          : 'Identifiants invalides.',
    };
  }

  // Success: reset rate limit & issue signed session cookie
  resetRateLimit(ip);
  const token = await createSessionToken(email);
  await setSessionCookie(token);

  // Redirect to dashboard (with locale if applicable)
  const dashboardPath = locale === 'en' ? '/dashboard' : `/${locale}/dashboard`;
  redirect(dashboardPath);
}

/**
 * Server Action for logging out of the dashboard
 */
export async function logoutAction(locale: string = 'fr'): Promise<void> {
  await clearSessionCookie();
  const loginPath = locale === 'en' ? '/dashboard/login' : `/${locale}/dashboard/login`;
  redirect(loginPath);
}
