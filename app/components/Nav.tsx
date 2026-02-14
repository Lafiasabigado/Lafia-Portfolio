// @ts-nocheck
'use client';

import { Link, usePathname } from '@/i18n/routing';
import { Home, FolderGit2, Cpu, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';

export default function Nav() {
  const pathname = usePathname();
  const t = useTranslations('nav');

  const navItems = [
    { name: t('home'), path: '/', icon: <Home size={20} /> },
    { name: t('projects'), path: '/projects', icon: <FolderGit2 size={20} /> },
    { name: t('services'), path: '/service', icon: <Cpu size={20} /> },
    { name: t('contact'), path: '/contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Desktop Nav (Top Pill) */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-border/50 rounded-full px-6 py-3 shadow-lg flex items-center gap-8"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-accent"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicatorDesktop"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <div className="h-4 w-px bg-border/50" />
          <LanguageToggle />
        </motion.div>
      </nav>

      {/* Mobile Nav (Bottom Dock) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-border/50 rounded-2xl px-6 py-4 shadow-2xl flex items-center justify-between"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative p-2 rounded-full transition-all duration-300 flex flex-col items-center gap-1",
                  isActive ? "text-accent" : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                )}
              >
                <div className="relative">
                  {item.icon}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicatorMobile"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
          <div className="h-6 w-px bg-border/50 mx-2" />
          <LanguageToggle placement="top" />
        </motion.div>
      </nav>
    </>
  );
}
