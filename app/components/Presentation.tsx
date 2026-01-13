"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const Presentation = () => {
  const link = [
    "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
    "https://github.com/Lafiasabigado",
    "https://wa.me/22956259632"
  ];

  const stack = ["Next.js", "TypeScript", "Tailwind", "Prisma", "IA"]

  return (
    <section className='w-full overflow-hidden relative pt-24 pb-16 md:pb-28'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-[1fr_auto] gap-8 items-center'>
          <div className='order-2 md:order-1'>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2'>
              <MapPin className='h-4 w-4' />
              Bénin · Remote
            </p>

            <h1 className='font-medium text-4xl sm:text-5xl tracking-tight mb-4 text-gray-900 dark:text-white'>
              Développeur web full‑stack            
            </h1>
            <p className='text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-[60ch]'>
              Je conçois des expériences numériques minimalistes, performantes et accessibles avec Next.js.
              Focus produit, SEO technique et qualité d'exécution.
            </p>

            <div className='flex flex-wrap gap-2 mb-7'>
              {stack.map((item) => (
                <span
                  key={item}
                  className='inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 px-3 py-1 text-xs text-gray-600 dark:text-gray-300'
                >
                  {item}
                </span>
              ))}
            </div>

            <div className='flex flex-wrap items-center gap-4'>
              <Link href={'/contact'}>
                <Button className='bg-black dark:bg-white text-white dark:text-black hover:opacity-80 rounded-full px-6 transition-opacity'>
                  Me Contacter
                </Button>
              </Link>

              <Link href={'/projects'}>
                <Button variant="outline" className='rounded-full px-6 border-gray-200 dark:border-gray-800'>
                  Voir mes projets
                </Button>
              </Link>
            </div>
          </div>

          <div className='order-1 md:order-2 flex justify-center md:justify-end'>
            <div className='relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800'>
              <Image
                src='/lafialogo2.png'
                alt='Lafia'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
