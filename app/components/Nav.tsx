'use client';

import { Link, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { useState, useEffect, useRef } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Do not render public navbar on private dashboard routes
  if (pathname?.includes('/dashboard')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: t('about'), href: pathname === '/' ? '#a-propos' : '/about', route: '/about' },
    { name: t('services'), href: pathname === '/' ? '#services' : '/service', route: '/service' },
    { name: t('projects'), href: pathname === '/' ? '#projets' : '/projects', route: '/projects' },
    { name: t('contact'), href: pathname === '/' ? '#contact' : '/contact', route: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Lafiasabigado',
      icon: <FaGithub className="w-3.5 h-3.5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/',
      icon: <FaLinkedinIn className="w-3.5 h-3.5" />,
    },
    {
      name: 'X',
      href: 'https://x.com/lafiasabigado',
      icon: <FaXTwitter className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 h-[60px] transition-all duration-300",
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-line shadow-xs"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-7">
            <Link
              href="/"
              className="group flex items-center py-1 transition-opacity hover:opacity-90"
              aria-label="Accueil"
            >
              <Image
                src="/logo-icon.png"
                alt="ALSG Logo"
                width={86}
                height={22}
                priority
                className="h-5 sm:h-5.5 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.22)]"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.route;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-xs font-medium transition-colors relative py-1",
                      isActive ? "text-white font-semibold" : "text-muted hover:text-white"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right side: i18n & Socials */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-line">
              {socialLinks.map((social) => {
                const eventName =
                  social.name === 'GitHub'
                    ? 'github_click'
                    : social.name === 'LinkedIn'
                    ? 'linkedin_click'
                    : 'x_click';
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-muted hover:text-white transition-colors"
                    aria-label={social.name}
                    data-umami-event={eventName}
                    data-umami-event-location="navbar"
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>

            <LanguageToggle />

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-1.5 rounded-lg hover:bg-white/[0.05] transition-colors"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-6 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-line">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center py-1"
                  aria-label="Accueil"
                >
                  <Image
                    src="/logo-icon.png"
                    alt="ALSG Logo"
                    width={90}
                    height={23}
                    className="h-5.5 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-1.5 rounded-lg hover:bg-white/[0.05]"
                  aria-label="Fermer le menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-heading font-bold text-fg-soft hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-line flex items-center justify-between">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const eventName =
                    social.name === 'GitHub'
                      ? 'github_click'
                      : social.name === 'LinkedIn'
                      ? 'linkedin_click'
                      : 'x_click';
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white p-1.5"
                      aria-label={social.name}
                      data-umami-event={eventName}
                      data-umami-event-location="navbar"
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
              <LanguageToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
