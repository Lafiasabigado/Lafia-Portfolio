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
  width: string;
  image?: string;
  gradient: string;
}

const marqueeItems: MarqueeProject[] = [
  {
    slug: 'afriglot',
    name: 'Afriglot',
    subtitle: 'Traducteur de langues africaines',
    subtitle_en: 'African languages translator',
    width: 'w-[230px] sm:w-[260px]',
    image: '/projects/afriglot.png',
    gradient: 'from-blue-950 via-slate-900 to-black',
  },
  {
    slug: 'securio',
    name: 'Securio',
    subtitle: 'Suite d’audit de sécurité web',
    subtitle_en: 'Passive web security audit suite',
    width: 'w-[220px] sm:w-[250px]',
    image: '/projects/securio.png',
    gradient: 'from-indigo-950 via-neutral-900 to-black',
  },
  {
    slug: 'brainwritor',
    name: 'Brainwritor',
    subtitle: 'Assistant de rédaction & génération de contenu IA',
    subtitle_en: 'AI writing assistant & content generation',
    width: 'w-[230px] sm:w-[260px]',
    image: '/projects/brainwritor.png',
    gradient: 'from-slate-950 via-indigo-950 to-black',
  },
  {
    slug: 'tikonna',
    name: 'Tikonna',
    subtitle: 'Plateforme e-learning & insertion professionnelle',
    subtitle_en: 'E-learning & professional insertion platform',
    width: 'w-[210px] sm:w-[230px]',
    image: '/projects/tikonna.png',
    gradient: 'from-blue-950 via-blue-900 to-black',
  },
  {
    slug: 'localshare',
    name: 'LocalShare',
    subtitle: 'App de transfert de fichiers entre différents appareils',
    subtitle_en: 'File transfer app between different devices',
    width: 'w-[230px] sm:w-[260px]',
    image: '/projects/localshare.png',
    gradient: 'from-blue-950 via-blue-900 to-black',
  },
  {
    slug: 'kamischool',
    name: 'KamiSchool',
    subtitle: 'Plateforme de gestion scolaire',
    subtitle_en: 'School management platform',
    width: 'w-[230px] sm:w-[260px]',
    image: '/projects/kamischool.png',
    gradient: 'from-blue-950 via-blue-900 to-black',
  },
  {
    slug: 'foothub',
    name: 'FootHub',
    subtitle: 'Réseau social de passionnés de foot',
    subtitle_en: 'Social network for football fans',
    width: 'w-[230px] sm:w-[260px]',
    image: '/projects/foothubcommunity.png',
    gradient: 'from-blue-950 via-blue-900 to-black',
  },
  {
    slug: 'adtechgroup',
    name: 'AdtechGroup',
    subtitle: 'Site web de l\'entreprise AdtechGroup',
    subtitle_en: 'AdtechGroup company website',
    width: 'w-[230px] sm:w-[260px]',
    image: '/projects/adtechgroup.png',
    gradient: 'from-blue-950 via-blue-900 to-black',
  },
  {
    slug: 'aicbenin',
    name: 'AIC-Bénin',
    subtitle: 'Site web de l\'entreprise AIC-Bénin',
    subtitle_en: 'AIC-Bénin company website',
    width: 'w-[230px] sm:w-[260px]',
    image: '/projects/aicbenin.png',
    gradient: 'from-blue-950 via-blue-900 to-black',
  },
  {
    slug: 'ballamas',
    name: 'Ballamas',
    subtitle: 'Site e-commerce de vente de vêtements',
    subtitle_en: 'E-commerce website for selling clothes',
    width: 'w-[230px] sm:w-[260px]',
    image: '/projects/ballamas.png',
    gradient: 'from-blue-950 via-blue-900 to-black',
  },
];

export default function ProjectMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const locale = useLocale();

  const duplicatedList = useMemo(() => [...marqueeItems, ...marqueeItems], []);

  return (
    <section className="relative w-full mt-6 md:mt-8 overflow-hidden" aria-label="Aperçu des projets">
      <div className="container-custom">
        <div
          className={cn(
            "w-full py-3",
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
              "flex gap-4 items-center",
              shouldReduceMotion
                ? "overflow-x-auto snap-x snap-mandatory px-4"
                : "w-max animate-marquee"
            )}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: '34s',
            }}
          >
            {duplicatedList.map((item, idx) => {
              const subtitleText = locale === 'en' ? item.subtitle_en : item.subtitle;
              return (
                <Link
                  key={`${item.slug}-${idx}`}
                  href={`/projects/${item.slug}`}
                  data-umami-event="project_open"
                  data-umami-event-project={item.slug}
                  className={cn(
                    "group relative shrink-0 h-[240px] sm:h-[260px] rounded-[18px] p-1.5 bg-card-ring shadow-glow hover:shadow-glow-lift transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02] outline-none",
                    item.width,
                    shouldReduceMotion && "snap-center"
                  )}
                >
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-bg-elevated border border-white/[0.04]">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="320px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={cn(
                          "w-full h-full bg-gradient-to-br flex flex-col justify-center items-center p-6 text-center",
                          item.gradient
                        )}
                      >
                        <span className="font-heading text-xl sm:text-2xl font-bold text-white/90 tracking-tight">
                          {item.name}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-muted mt-1.5 font-mono">
                          {locale === 'en' ? 'Case Study' : 'Étude de cas'}
                        </span>
                      </div>
                    )}

                    {/* Compact Glassmorphic label bar */}
                    <div className="absolute inset-x-2 bottom-2 p-2.5 sm:p-3 rounded-[10px] bg-black/80 backdrop-blur-md border border-white/10 transition-all duration-200">
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="font-heading text-xs sm:text-sm font-semibold text-white tracking-tight truncate">
                            {item.name}
                          </h3>
                          <p className="text-[10px] sm:text-[11px] text-muted line-clamp-1 mt-0.5">
                            {subtitleText}
                          </p>
                        </div>
                        <span className="text-[11px] sm:text-xs font-handwritten text-accent shrink-0">
                          {locale === 'en' ? 'View →' : 'Voir →'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
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
          animation: marquee 34s linear infinite;
        }
      `}</style>
    </section>
  );
}
