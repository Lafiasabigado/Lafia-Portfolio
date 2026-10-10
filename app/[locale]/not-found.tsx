'use client';

import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const locale = useLocale();

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md text-center">
        <p className="font-handwritten text-4xl text-accent mb-2">404</p>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
          {locale === 'en' ? 'this page left the chat.' : 'cette page a quitté le chat.'}
        </h1>
        <p className="text-muted text-base mb-8 leading-relaxed">
          {locale === 'en'
            ? 'The link you followed might be broken or the page was moved.'
            : 'Le lien que tu as suivi est peut-être cassé ou la page a été déplacée.'}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-handwritten text-[22px] px-8 py-3 rounded-[18px] bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all duration-200"
        >
          {locale === 'en' ? 'back to home' : 'retour à l’accueil'}
        </Link>
      </div>
    </div>
  );
}
