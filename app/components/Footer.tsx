'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: navT('about'), href: '/about' },
    { name: navT('services'), href: '/service' },
    { name: navT('projects'), href: '/projects' },
    { name: navT('contact'), href: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Lafiasabigado' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/' },
    { name: 'X', href: 'https://x.com/lafiasabigado' },
  ];

  return (
    <footer className="relative border-t border-line mt-12 z-10 bg-black/40">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-xs">
          {/* Identity & quote */}
          <div className="space-y-2.5">
            <Link
              href="/"
              className="inline-flex items-center group py-0.5"
              aria-label="Accueil"
            >
              <Image
                src="/logo-icon.png"
                alt="ALSG Logo"
                width={86}
                height={22}
                className="h-5 sm:h-5.5 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
              />
            </Link>
            <p className="text-muted text-xs leading-relaxed max-w-xs font-sans">
              {t('craftedWith')}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 sm:text-center">
            <p className="text-[11px] uppercase tracking-wider text-fg-soft font-mono">
              {t('navigation')}
            </p>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-2 sm:text-right">
            <p className="text-[11px] uppercase tracking-wider text-fg-soft font-mono">
              {t('connect')}
            </p>
            <ul className="space-y-1">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-line/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted gap-2">
          <p>© {currentYear} Lafia Sabi Gado. {t('rights')}</p>
          <p className="font-handwritten text-sm text-muted/70">
            {t('signature')}
          </p>
        </div>
      </div>
    </footer>
  );
}
