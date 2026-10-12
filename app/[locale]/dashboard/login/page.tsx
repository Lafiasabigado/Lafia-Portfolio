import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Connexion Dashboard — Lafia Sabi Gado',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LoginForm locale={locale} />;
}
