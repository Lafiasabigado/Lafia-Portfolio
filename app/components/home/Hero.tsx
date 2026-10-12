'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-12 md:pt-16 pb-6 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-2xl text-left">
          {/* Main Title with Inline Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 sm:mb-6"
          >
            <h1 className="tracking-tight">
              {/* Line 1: Main entry point */}
              <span className="block text-3xl sm:text-4xl md:text-5xl font-pixel-grid font-bold text-white leading-[1.18]">
                <span>{t('titleLine1')}</span>
                {/* Inline Avatar - enlarged (52-56px), tighter crop, brighter on dark */}
                <motion.span
                  className="inline-block align-middle mx-[0.22em] relative"
                  whileHover={{ rotate: 4, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                >
                  <span className="relative inline-block w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] md:w-[56px] md:h-[56px] rounded-[14px] p-[2.5px] bg-[#1c1c22] border border-white/20 shadow-glow -rotate-3 overflow-hidden align-middle ring-1 ring-white/10">
                    <Image
                      src="/ablafia.png"
                      alt="Lafia Sabi Gado"
                      fill
                      priority
                      sizes="56px"
                      className="rounded-[11px] object-cover object-[50%_12%] scale-115 brightness-[1.08] contrast-[1.04]"
                    />
                  </span>
                </motion.span>
                <span>{t('name')}</span>
                <span className="text-accent">.</span>
              </span>

              {/* Line 2: ~80% size, 'builder.' in blue accent */}
              <span className="block text-2xl sm:text-[1.75rem] md:text-[2.35rem] font-pixel-grid font-bold leading-[1.2] mt-1.5 sm:mt-2">
                <span className="text-white/95">
                  {t('titleLine2').replace(/builder\.?$/i, '')}
                </span>
                <span className="text-accent">builder.</span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle - lightened to #A8ADB5 with extra breathing room */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#A8ADB5] text-sm sm:text-base leading-relaxed mb-2.5 max-w-xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* Location & Bio - harmonized to sans-serif with subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#A8ADB5]/80 text-xs sm:text-sm mb-6"
          >
            {t('locationBio')}
          </motion.p>

          {/* Action buttons - 2 clean buttons without competing social pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projets"
              className="inline-flex items-center justify-center font-handwritten text-lg px-5 py-2 rounded-full bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all duration-200"
              data-umami-event="hero_cta_click"
              data-umami-event-location="hero"
            >
              {t('ctaWelcome')}
            </a>

            <a
              href="https://kloo.me/resumelafia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border border-line text-white hover:bg-white/[0.05] hover:border-white/20 transition-all"
              data-umami-event="cv_download"
              data-umami-event-location="hero"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t('downloadCV')}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}