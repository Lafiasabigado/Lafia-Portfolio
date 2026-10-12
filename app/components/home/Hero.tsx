'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-16 sm:pt-20 pb-10 sm:pb-14 overflow-hidden">
      {/* Subtle ambient glow behind centered hero */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] h-[160px] sm:h-[200px] bg-accent/[0.06] rounded-full blur-[100px] -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center">
          {/* Main Title with Inline Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="tracking-tight">
              {/* Line 1: Main entry point */}
              <span className="block text-[1.65rem] sm:text-3xl md:text-[2.25rem] font-pixel-grid font-bold text-white leading-[1.25]">
                <span>{t('titleLine1')}</span>
                {/* Inline Avatar - refined compact scale */}
                <motion.span
                  className="inline-block align-middle mx-1.5 sm:mx-2 relative"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                >
                  <span className="relative inline-block w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-[11px] p-[2px] bg-[#1c1c22] border border-white/20 shadow-glow -rotate-2 overflow-hidden align-middle ring-1 ring-white/10">
                    <Image
                      src="/ablafia.png"
                      alt="Lafia Sabi Gado"
                      fill
                      priority
                      sizes="42px"
                      className="rounded-[9px] object-cover object-[50%_12%] scale-115 brightness-[1.08] contrast-[1.04]"
                    />
                  </span>
                </motion.span>
                <span>{t('name')}</span>
                <span className="text-accent">.</span>
              </span>

              {/* Line 2: Same size as Line 1, 'builder.' with delicate brush stroke paint */}
              <span className="block text-[1.65rem] sm:text-3xl md:text-[2.25rem] font-pixel-grid font-bold leading-[1.25] mt-1 sm:mt-1.5">
                <span className="text-white/95">
                  {t('titleLine2').replace(/builder\.?$/i, '')}
                </span>
                <span className="relative inline-block text-accent">
                  <span className="relative z-10">builder.</span>
                  {/* Organic brush stroke animation */}
                  <svg
                    viewBox="0 0 240 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-[9px] sm:h-[12px] pointer-events-none overflow-visible"
                    aria-hidden="true"
                  >
                    {/* Primary smooth paint stroke */}
                    <motion.path
                      d="M3 13C60 4 150 3 236 10"
                      stroke="url(#brush-gradient)"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {/* Secondary artistic return sweep */}
                    <motion.path
                      d="M232 11C165 16 75 17 8 19"
                      stroke="url(#brush-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.7 }}
                      transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <defs>
                      <linearGradient id="brush-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle - Poetic, restrained, wrapping gracefully */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-neutral-400 text-[14.5px] sm:text-[15px] leading-relaxed mt-4 sm:mt-5 max-w-md mx-auto px-1 sm:px-0"
          >
            {t('subtitle')}
          </motion.p>

          {/* Action buttons - Clean, slim, elegant duo */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-7 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3"
          >
            <a
              href="#projets"
              className="inline-flex items-center justify-center h-10.5 sm:h-11 px-5.5 sm:px-6 rounded-full bg-white text-black font-handwritten text-[17px] sm:text-lg font-semibold hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all duration-200"
              data-umami-event="hero_cta_click"
              data-umami-event-location="hero"
            >
              {t('ctaWelcome')}
            </a>

            <a
              href="https://kloo.me/resumelafia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-10.5 sm:h-11 px-4.5 sm:px-5 rounded-full border border-white/12 bg-white/[0.03] text-[13px] font-medium text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              data-umami-event="cv_download"
              data-umami-event-location="hero"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>{t('downloadCV')}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}