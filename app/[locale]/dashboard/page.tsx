import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';
import { getPostHogDashboardData } from '@/lib/analytics/posthog-api';
import DashboardView from './DashboardView';

export const metadata: Metadata = {
  title: 'PostHog Analytics Dashboard — Lafia Sabi Gado',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale === 'en' ? 'en' : 'fr') as 'fr' | 'en';

  // Server-side authentication check
  const session = await getSession();
  if (!session) {
    const loginUrl = locale === 'en' ? '/dashboard/login' : `/${locale}/dashboard/login`;
    redirect(loginUrl);
  }

  // Pre-fetch initial 7 days dataset from PostHog
  const initialData = await getPostHogDashboardData('7d', locale);

  return (
    <DashboardView
      initialData={initialData}
      locale={locale}
      userEmail={session.email}
    />
  );
}
