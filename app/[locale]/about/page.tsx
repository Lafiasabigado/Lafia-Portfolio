'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Download, Brain, Gamepad2, Laptop } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('about');

  const link = [
    "https://kloo.me/resumelafia",
    "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
    "https://github.com/Lafiasabigado",
    "https://wa.me/22956259632"
  ]

  const socials = [
    { id: 4, label: t('downloadCV'), icon: Download, link: link[0] },
    { id: 3, label: t('whatsapp'), icon: FaWhatsapp, link: link[3] },
    { id: 2, label: t('linkedin'), icon: FaLinkedin, link: link[1] },
    { id: 1, label: t('github'), icon: FaGithub, link: link[2] },
  ]

  const highlights = [
    { icon: <Laptop className="w-5 h-5" />, title: "UX & Dev", text: t('intro') },
    { icon: <Brain className="w-5 h-5" />, title: "Veille IA", text: t('education') },
    { icon: <Gamepad2 className="w-5 h-5" />, title: "Lifestyle", text: t('passion') },
  ];

  return (
    <div className='py-32 min-h-screen bg-background text-white'>
      <div className='max-w-5xl mx-auto px-6 md:px-10'>
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <h1 className='text-4xl md:text-5xl font-heading font-bold tracking-tight text-white mb-4'>
                {t('title')}
            </h1>
            <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </motion.div>

        <div className='grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20'>
          
          {/* Left Column: Image & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <Image 
                    src="/ablafia.png" 
                    alt="Lafia Sabi Gado" 
                    fill 
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" 
                    sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-1">Lafia Sabi Gado</h3>
                    <p className="text-sm text-blue-400">Ingénieur Logiciel</p>
                </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              {socials.map((element) => (
                <Link href={element.link} key={element.id} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className='rounded-lg text-xs h-10 px-4 border-white/10 bg-white/[0.02] hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all'>
                    <element.icon className='mr-2 h-4 w-4' />
                    {element.label}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Text & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='space-y-12'
          >
            {/* The Highlights (replacing standard paragraphs with a cleaner layout) */}
            <div className="space-y-8">
                {highlights.map((item, idx) => (
                    <div key={idx} className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-neutral-300 leading-relaxed text-[15px] md:text-base">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20">
                <p className='text-white font-medium text-lg mb-4'>{t('cta')}</p>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors">
                    Me Contacter
                </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About