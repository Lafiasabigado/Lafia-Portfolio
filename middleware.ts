import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { verifySessionToken, SESSION_COOKIE_NAME } from './lib/auth/token';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if this is a dashboard route
  const isDashboardRoute =
    pathname === '/dashboard' ||
    pathname.startsWith('/dashboard/') ||
    Boolean(pathname.match(/^\/(fr|en)\/dashboard(\/.*)?$/));

  if (isDashboardRoute) {
    const isLoginPage =
      pathname === '/dashboard/login' ||
      pathname === '/fr/dashboard/login' ||
      pathname === '/en/dashboard/login';

    const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    const session = token ? await verifySessionToken(token) : null;
    const allowedEmail = (process.env.DASHBOARD_ALLOWED_EMAIL || '').toLowerCase().trim();
    const isAuthenticated = Boolean(
      session && (!allowedEmail || session.email === allowedEmail)
    );

    // Determine locale prefix
    const localeMatch = pathname.match(/^\/(fr|en)(\/|$)/);
    const currentLocale = localeMatch ? localeMatch[1] : routing.defaultLocale;

    if (isLoginPage) {
      if (isAuthenticated) {
        const dashboardUrl = new URL(
          currentLocale === 'en' ? '/dashboard' : `/${currentLocale}/dashboard`,
          request.url
        );
        return NextResponse.redirect(dashboardUrl);
      }
    } else {
      if (!isAuthenticated) {
        const loginUrl = new URL(
          currentLocale === 'en' ? '/dashboard/login' : `/${currentLocale}/dashboard/login`,
          request.url
        );
        return NextResponse.redirect(loginUrl);
      }
    }
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames and exclude internal Next.js assets
  matcher: ['/', '/(fr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
