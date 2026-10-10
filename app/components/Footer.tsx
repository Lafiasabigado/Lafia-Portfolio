'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

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
    <footer className="relative border-t border-line mt-24 z-10 bg-black">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Zone 1: Identity & quote */}
          <div className="space-y-3">
            <Link href="/" className="text-xl font-heading font-bold text-white tracking-tight inline-block">
              Lafia<span className="text-accent text-2xl leading-none">.</span>
            </Link>
            <p className="text-muted text-sm max-w-xs leading-relaxed font-sans">
              {t('craftedWith')}
            </p>
          </div>

          {/* Zone 2: Navigation Links */}
          <div className="space-y-3 md:text-center">
            <p className="text-xs uppercase tracking-wider text-fg-soft font-mono">
              {t('navigation')}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone 3: Social Links */}
          <div className="space-y-3 md:text-right">
            <p className="text-xs uppercase tracking-wider text-fg-soft font-mono">
              {t('connect')}
            </p>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
          <p>© {currentYear} Lafia Sabi Gado. {t('rights')}</p>
          <p className="font-handwritten text-base text-muted/80">
            {t('signature')}
          </p>
        </div>
      </div>
    </footer>
  );
}
