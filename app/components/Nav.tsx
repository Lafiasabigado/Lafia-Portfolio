'use client';

import { Link, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and focus trap for mobile menu
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
      icon: <FaGithub className="w-4 h-4" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/',
      icon: <FaLinkedinIn className="w-4 h-4" />,
    },
    {
      name: 'X',
      href: 'https://x.com/lafiasabigado',
      icon: <FaXTwitter className="w-4 h-4" />,
    },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 h-[72px] transition-all duration-300",
          scrolled
            ? "bg-black/75 backdrop-blur-md border-b border-line shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="text-xl font-heading font-bold text-white tracking-tight flex items-center hover:opacity-90 transition-opacity"
            >
              Lafia<span className="text-accent text-2xl leading-none">.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.route;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-[15px] font-medium transition-colors relative py-1.5 scroll-smooth",
                      isActive ? "text-white" : "text-muted hover:text-white"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right side: i18n & Socials */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 pr-2 border-r border-line">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <LanguageToggle />

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-8 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div>
              <div className="flex items-center justify-between pb-8 border-b border-line">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-bold text-white tracking-tight"
                >
                  Lafia<span className="text-accent">.</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2 rounded-lg hover:bg-white/[0.05]"
                  aria-label="Fermer le menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[28px] font-heading font-bold text-fg-soft hover:text-white hover:translate-x-2 transition-transform duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-line flex items-center justify-between">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-white p-2"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <LanguageToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
