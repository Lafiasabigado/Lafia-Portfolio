'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-20 md:pt-28 pb-12 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl text-left">
          {/* Staggered entrance */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-6">
              <span>{t('titleLine1')}</span>
              {/* Inline Avatar */}
              <motion.span
                className="inline-block align-middle mx-[0.15em] relative"
                whileHover={{ rotate: 4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
              >
                <span className="relative inline-block w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-[14px] p-[3px] bg-card-ring border border-line shadow-glow -rotate-4 overflow-hidden align-middle">
                  <Image
                    src="/ablafia.png"
                    alt="Lafia Sabi Gado"
                    fill
                    priority
                    sizes="56px"
                    className="rounded-[11px] object-cover object-top"
                  />
                </span>
              </motion.span>
              <span>{t('name')}</span>
              <span className="text-accent">.</span>
              <br />
              <span className="text-white">
                {t('titleLine2').replace('& builder.', '& ')}
              </span>
              <span className="text-accent">builder.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted text-lg sm:text-xl max-w-[520px] leading-relaxed mb-4"
          >
            {t('subtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted/80 text-sm mb-10 flex items-center gap-2"
          >
            <span>{t('locationBio')}</span>
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projets"
              className="inline-flex items-center justify-center font-handwritten text-[22px] px-7 py-3 rounded-[18px] bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all duration-200"
            >
              {t('ctaWelcome')}
            </a>

            <a
              href="https://kloo.me/resumelafia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-3 rounded-[18px] border border-line text-fg hover:border-white/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>{t('downloadCV')}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}