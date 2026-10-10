'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

interface MarqueeProject {
  slug: string;
  name: string;
  subtitle: string;
  subtitle_en: string;
  width: string; // varied widths: 280px to 460px
  image?: string;
  gradient: string;
}

const marqueeItems: MarqueeProject[] = [
  {
    slug: 'afriglot',
    name: 'Afriglot',
    subtitle: 'Traducteur de langues africaines',
    subtitle_en: 'African languages translator',
    width: 'w-[360px] md:w-[420px]',
    image: '/projects/afriglot.png',
    gradient: 'from-blue-950 via-slate-900 to-black',
  },
  {
    slug: 'fonika-translate',
    name: 'Fonika Translate',
    subtitle: 'Package Flutter & Reconnaissance vocale',
    subtitle_en: 'Flutter package & voice synthesis',
    width: 'w-[290px] md:w-[330px]',
    gradient: 'from-sky-950 via-slate-900 to-black',
  },
  {
    slug: 'securio',
    name: 'Securio',
    subtitle: 'Suite d’audit de sécurité web passif',
    subtitle_en: 'Passive web security audit suite',
    width: 'w-[320px] md:w-[380px]',
    image: '/projects/doczi.png',
    gradient: 'from-indigo-950 via-neutral-900 to-black',
  },
  {
    slug: 'ai-funnel-builder',
    name: 'AI Funnel Builder',
    subtitle: 'Funnels WhatsApp & Mobile Money par IA',
    subtitle_en: 'WhatsApp funnels & Mobile Money with AI',
    width: 'w-[340px] md:w-[440px]',
    image: '/projects/brainwritor.png',
    gradient: 'from-blue-900 via-neutral-950 to-black',
  },
  {
    slug: 'grace-branco',
    name: 'Grâce Branco',
    subtitle: 'Portfolio interactif sur-mesure',
    subtitle_en: 'Bespoke interactive portfolio',
    width: 'w-[280px] md:w-[320px]',
    image: '/projects/freelanceprop.png',
    gradient: 'from-slate-900 via-stone-900 to-black',
  },
];

export default function ProjectMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const locale = useLocale();

  // Duplicate items for infinite marquee loop
  const duplicatedList = useMemo(() => [...marqueeItems, ...marqueeItems], []);

  return (
    <section className="relative w-full mt-14 md:mt-20 overflow-x-clip" aria-label="Aperçu des projets">
      <div
        className={cn(
          "w-full py-4",
          !shouldReduceMotion && "overflow-hidden"
        )}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          className={cn(
            "flex gap-6 items-center",
            shouldReduceMotion
              ? "overflow-x-auto snap-x snap-mandatory px-6"
              : "w-max animate-marquee"
          )}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            animationDuration: '40s',
          }}
        >
          {duplicatedList.map((item, idx) => {
            const subtitleText = locale === 'en' ? item.subtitle_en : item.subtitle;
            return (
              <Link
                key={`${item.slug}-${idx}`}
                href={`/projects/${item.slug}`}
                className={cn(
                  "group relative shrink-0 h-[380px] md:h-[420px] rounded-[28px] p-2 bg-card-ring shadow-glow hover:shadow-glow-lift transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02] outline-none",
                  item.width,
                  shouldReduceMotion && "snap-center"
                )}
              >
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-bg-elevated border border-white/[0.04]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 300px, 460px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={cn(
                        "w-full h-full bg-gradient-to-br flex flex-col justify-center items-center p-8 text-center",
                        item.gradient
                      )}
                    >
                      <span className="font-heading text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
                        {item.name}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-muted mt-2 font-mono">
                        {locale === 'en' ? 'Case Study' : 'Étude de cas'}
                      </span>
                    </div>
                  )}

                  {/* Glassmorphic label bar on hover */}
                  <div className="absolute inset-x-3 bottom-3 p-4 rounded-[18px] bg-black/75 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:translate-y-0 translate-y-1 group-hover:bg-black/85">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-base font-semibold text-white tracking-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted line-clamp-1 mt-0.5">
                          {subtitleText}
                        </p>
                      </div>
                      <span className="text-xs font-handwritten text-accent shrink-0 text-right">
                        {locale === 'en' ? 'Explore →' : 'Voir →'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
