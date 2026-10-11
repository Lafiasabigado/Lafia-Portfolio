'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  const quickLinks = [
    { name: 'GitHub', href: 'https://github.com/Lafiasabigado', icon: <FaGithub className="w-3.5 h-3.5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/', icon: <FaLinkedinIn className="w-3.5 h-3.5" /> },
    { name: 'WhatsApp', href: 'https://wa.me/22956259632', icon: <FaWhatsapp className="w-3.5 h-3.5" /> },
  ];

  return (
    <section className="relative pt-12 md:pt-16 pb-6 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-2xl text-left">
          {/* Main Title with Inline Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-pixel-grid font-bold text-white tracking-tight leading-[1.2] mb-3">
              <span>{t('titleLine1')}</span>
              {/* Inline Avatar with subtle blue halo */}
              <motion.span
                className="inline-block align-middle mx-[0.2em] relative"
                whileHover={{ rotate: 4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
              >
                <span className="relative inline-block w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-[12px] p-[2px] bg-card-ring border border-line shadow-glow -rotate-3 overflow-hidden align-middle">
                  <Image
                    src="/ablafia.png"
                    alt="Lafia Sabi Gado"
                    fill
                    priority
                    sizes="48px"
                    className="rounded-[10px] object-cover object-top"
                  />
                </span>
              </motion.span>
              <span>{t('name')}</span>
              <span className="text-accent">.</span>
              <br />
              <span className="text-white/95">
                {t('titleLine2').replace(/builder\.?$/, '')}
              </span>
              <span className="text-accent">builder.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted text-sm sm:text-base leading-relaxed mb-2.5 max-w-xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* Location & Bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted/70 text-xs sm:text-sm mb-5 font-mono"
          >
            {t('locationBio')}
          </motion.p>

          {/* Action buttons & compact social pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <a
              href="#projets"
              className="inline-flex items-center justify-center font-handwritten text-lg px-5 py-1.5 rounded-full bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all duration-200"
            >
              {t('ctaWelcome')}
            </a>

            <a
              href="https://kloo.me/resumelafia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full border border-line text-white hover:bg-white/[0.05] hover:border-white/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t('downloadCV')}</span>
            </a>

            <div className="flex items-center gap-1.5 pl-1 sm:pl-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-line bg-white/[0.02] text-xs text-muted hover:text-white hover:border-white/20 transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                  <span className="text-[11px] font-mono">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}