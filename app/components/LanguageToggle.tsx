'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center text-xs font-mono rounded-full border border-line p-1 bg-white/[0.02]">
      <Link
        href={pathname}
        locale="fr"
        className={cn(
          "px-2.5 py-1 rounded-full transition-all duration-200",
          locale === 'fr'
            ? "bg-white text-black font-semibold shadow-sm"
            : "text-muted hover:text-white"
        )}
        aria-label="Passer en Français"
      >
        FR
      </Link>
      <Link
        href={pathname}
        locale="en"
        className={cn(
          "px-2.5 py-1 rounded-full transition-all duration-200",
          locale === 'en'
            ? "bg-white text-black font-semibold shadow-sm"
            : "text-muted hover:text-white"
        )}
        aria-label="Switch to English"
      >
        EN
      </Link>
    </div>
  );
}
