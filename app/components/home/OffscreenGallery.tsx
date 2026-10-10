'use client';

import { useLocale } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { cn } from '@/lib/utils';
import { Camera } from 'lucide-react';

interface GalleryItem {
  id: string;
  caption_fr: string;
  caption_en: string;
  aspect: string;
  rotation: string;
  placeholderHint: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'workspace',
    caption_fr: 'mon coin de travail & beaucoup de café',
    caption_en: 'my desk & plenty of coffee',
    aspect: 'aspect-[4/5]',
    rotation: '-rotate-2',
    placeholderHint: 'Bureau / Setup de dév',
  },
  {
    id: 'hackathon',
    caption_fr: 'un hackathon de plus avec la commu',
    caption_en: 'another hackathon with the tech community',
    aspect: 'aspect-[16/10]',
    rotation: 'rotate-2',
    placeholderHint: 'Hackathon / Événement tech',
  },
  {
    id: 'benin-streets',
    caption_fr: 'le Bénin, quoi. Couleurs & vibe locale',
    caption_en: 'Benin vibes & local energy',
    aspect: 'aspect-square',
    rotation: '-rotate-1',
    placeholderHint: 'Ambiance Bénin / Paysage',
  },
  {
    id: 'night-coding',
    caption_fr: 'session nocturne, terminal sous la main',
    caption_en: 'late-night terminal session',
    aspect: 'aspect-[3/4]',
    rotation: 'rotate-3',
    placeholderHint: 'Capture / Écran de code nocturne',
  },
  {
    id: 'meetup',
    caption_fr: 'partager autour de l’IA & de l’open source',
    caption_en: 'sharing thoughts on AI & open-source',
    aspect: 'aspect-[16/10]',
    rotation: '-rotate-2',
    placeholderHint: 'Présentation / Meetup',
  },
  {
    id: 'chill',
    caption_fr: 'pause animés & musique pour recharger',
    caption_en: 'anime & rap music break',
    aspect: 'aspect-[4/5]',
    rotation: 'rotate-1',
    placeholderHint: 'Moment chill / Playlist',
  },
];

export default function OffscreenGallery() {
  const locale = useLocale();

  return (
    <section className="section-spacing relative">
      <div className="container-custom">
        <SectionTitle
          eyebrow="hors écran"
          title="Hors écran."
          subtitle={
            locale === 'en'
              ? "Glimpses of life beyond code — setups, community meetups and daily life in Benin."
              : "Des bribes de vie quand je ne suis pas le nez dans le code."
          }
        />

        {/* Desktop Asymmetric Grid / Mobile Horizontal Scroll-Snap Carousel */}
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 no-scrollbar">
          {galleryItems.map((item) => {
            const caption = locale === 'en' ? item.caption_en : item.caption_fr;

            return (
              <div
                key={item.id}
                className={cn(
                  "shrink-0 w-[270px] sm:w-[320px] md:w-auto snap-center transition-transform duration-300 hover:scale-[1.02] hover:rotate-0",
                  item.rotation
                )}
              >
                {/* Thick Card frame */}
                <div className="p-2 bg-card-ring rounded-[28px] shadow-glow hover:shadow-glow-lift transition-all duration-300">
                  <div
                    className={cn(
                      "w-full rounded-[22px] overflow-hidden bg-bg-elevated border border-white/[0.04] relative flex flex-col items-center justify-center p-6 text-center group",
                      item.aspect
                    )}
                  >
                    {/* Placeholder surface */}
                    <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-muted mb-3 group-hover:text-accent transition-colors">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-muted/80 uppercase tracking-widest">
                      {item.placeholderHint}
                    </span>
                    <span className="text-[11px] text-muted/50 mt-1 font-mono">
                      /public/offscreen/{item.id}.jpg
                    </span>
                  </div>
                </div>

                {/* Handwritten Caveat caption */}
                <p className="font-handwritten text-lg sm:text-xl text-muted text-center mt-3 tracking-wide select-none">
                  {caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
