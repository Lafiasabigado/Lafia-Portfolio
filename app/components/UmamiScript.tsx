'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function UmamiScript() {
  const pathname = usePathname();

  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  // Do not load if env vars are missing
  if (!scriptUrl || !websiteId) {
    return null;
  }

  // Do not load on private dashboard routes or login
  const isDashboardRoute =
    pathname?.includes('/dashboard') ||
    pathname === '/login' ||
    pathname?.endsWith('/login');

  if (isDashboardRoute) {
    return null;
  }

  return (
    <Script
      src={scriptUrl}
      data-website-id={websiteId}
      data-do-not-track="true"
      strategy="afterInteractive"
    />
  );
}
