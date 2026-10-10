'use client';

import { useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md text-center">
        <p className="font-handwritten text-4xl text-accent mb-2">oups</p>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
          {locale === 'en'
            ? 'something went sideways.'
            : 'un petit bug dans la matrice.'}
        </h1>
        <p className="text-muted text-base mb-8 leading-relaxed">
          {locale === 'en'
            ? 'An unexpected error occurred. You can retry or head back home.'
            : 'Une erreur inattendue s’est produite. Tu peux réessayer ou revenir à l’accueil.'}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="font-handwritten text-[22px] px-7 py-2.5 rounded-[18px] bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift transition-all"
          >
            {locale === 'en' ? 'try again' : 'réessayer'}
          </button>
          <Link
            href="/"
            className="text-sm font-medium px-5 py-3 rounded-[18px] border border-line text-white hover:bg-white/[0.04] transition-all"
          >
            {locale === 'en' ? 'back home' : 'retour à l’accueil'}
          </Link>
        </div>
      </div>
    </div>
  );
}
