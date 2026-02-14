'use client';

import React from 'react'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useTranslations } from 'next-intl';


const About = () => {
  const t = useTranslations('about');

  const link = [
    "https://drive.google.com/file/d/1RWYI8TM3-R3ns8IMfZ1pwe4MeqeMdAcP/view?usp=sharing",
    "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
    "https://github.com/Lafiasabigado",
    "https://wa.me/22956259632"
  ]

  const elements = [
    { id: 4, label: t('downloadCV'), icon: Download, link: link[0] },
    { id: 3, label: t('whatsapp'), icon: FaWhatsapp, link: link[3] },
    { id: 2, label: t('linkedin'), icon: FaLinkedin, link: link[1] },
    { id: 1, label: t('github'), icon: FaGithub, link: link[2] },
  ]

  return (
    <div className='py-16 pt-32 border-t border-gray-100 dark:border-gray-800'>
      <div className='max-w-3xl mx-auto px-6'>
        <div className='grid md:grid-cols-[1fr_2fr] gap-12'>
          <h2 className='text-2xl font-medium tracking-tight text-gray-900 dark:text-white'>{t('title')}</h2>
          <div className='space-y-6'>
            <div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-4'>
              <p>
                {t('intro')}
              </p>
              <p>
                {t('education')}
              </p>
              <p>
                {t('passion')}
              </p>
              <p className='text-gray-900 dark:text-white font-medium'>
                {t('cta')}
              </p>
            </div>

            <div className='flex flex-wrap gap-3 pt-2'>
              {elements.map((element) => (
                <Link href={element.link} key={element.id}>
                  <Button variant="outline" className='rounded-full text-xs h-9 px-4 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
                    {element.label}
                    <element.icon className='ml-2 h-3 w-3' />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About