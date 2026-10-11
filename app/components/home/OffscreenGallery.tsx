'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: string;
  image: string;
  caption_fr: string;
  caption_en: string;
  aspect: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'workspace',
    image: '/offscreen/workspace.jpg',
    caption_fr: 'mon setup de code & café',
    caption_en: 'my dev desk & coffee',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'hackathon',
    image: '/offscreen/hackathon.jpg',
    caption_fr: 'hackathon avec la communauté',
    caption_en: 'hackathon with the community',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'benin',
    image: '/offscreen/benin.jpg',
    caption_fr: 'le Bénin, ambiance & soleil',
    caption_en: 'Benin vibes & sunshine',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'night-coding',
    image: '/offscreen/night-coding.jpg',
    caption_fr: 'session nocturne sur le terminal',
    caption_en: 'late-night terminal session',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'meetup',
    image: '/offscreen/meetup.jpg',
    caption_fr: 'partager autour de l’open source & IA',
    caption_en: 'tech meetup & AI discussions',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'chill',
    image: '/offscreen/chill.jpg',
    caption_fr: 'pause musique & animés pour recharger',
    caption_en: 'rap music & anime recharge',
    aspect: 'aspect-[16/10]',
  },
];

export default function OffscreenGallery() {
  const locale = useLocale();

  return (
    <section className="section-spacing relative">
      <div className="container-custom">
        <SectionTitle
          eyebrow="hors écran"
          title={locale === 'en' ? "Off screen." : "Hors écran."}
          subtitle={
            locale === 'en'
              ? "Glimpses of daily life beyond the screen — setups, hackathons, and moments in Benin."
              : "Des bribes de vie quand je ne suis pas le nez dans le code."
          }
        />

        {/* 3-Column compact grid with actual images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {galleryItems.map((item) => {
            const caption = locale === 'en' ? item.caption_en : item.caption_fr;

            return (
              <div
                key={item.id}
                className="group flex flex-col"
              >
                <div className="p-1 bg-card-ring rounded-[16px] shadow-glow hover:shadow-glow-lift transition-all duration-300">
                  <div
                    className={cn(
                      "w-full rounded-[12px] overflow-hidden bg-bg-elevated border border-white/[0.04] relative group-hover:border-white/20 transition-all",
                      item.aspect
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={caption}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark gradient on bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                    {/* Subtle overlay caption on hover */}
                    <div className="absolute inset-x-2 bottom-2 p-1 text-center">
                      <span className="text-[11px] font-handwritten text-white leading-none drop-shadow-md">
                        {caption}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
