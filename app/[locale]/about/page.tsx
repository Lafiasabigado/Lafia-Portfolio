'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { Download, Brain, Gamepad2, Laptop, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { useTranslations, useLocale } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');
  const tHome = useTranslations('home_sections.contact');
  const locale = useLocale();

  const resumeLink = "https://kloo.me/resumelafia";

  const socials = [
    { label: t('downloadCV'), icon: <Download className="w-3.5 h-3.5" />, link: resumeLink },
    { label: t('whatsapp'), icon: <FaWhatsapp className="w-3.5 h-3.5" />, link: "https://wa.me/22956259632" },
    { label: t('linkedin'), icon: <FaLinkedinIn className="w-3.5 h-3.5" />, link: "https://linkedin.com/in/lafia-sabi-gado-03910a292/" },
    { label: t('github'), icon: <FaGithub className="w-3.5 h-3.5" />, link: "https://github.com/Lafiasabigado" },
  ];

  const highlights = [
    {
      icon: <Laptop className="w-4 h-4" />,
      title: locale === 'en' ? 'Craft & Code' : 'Du code & des produits',
      text: t('intro'),
    },
    {
      icon: <Brain className="w-4 h-4" />,
      title: locale === 'en' ? 'Software & AI' : 'Logiciel & Intelligence Artificielle',
      text: t('education'),
    },
    {
      icon: <Gamepad2 className="w-4 h-4" />,
      title: locale === 'en' ? 'Beyond The Screen' : 'Hors de l’écran',
      text: t('passion'),
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-24 relative">
      <div className="container-custom">
        {/* Header aligned with DA */}
        <Reveal>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-white/[0.02] mb-3">
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-[11px] font-mono text-fg-soft uppercase tracking-wider">
                {locale === 'en' ? 'Biography & Ethos' : 'Parcours & Vision'}
              </span>
            </div>

            <SectionTitle
              eyebrow="à propos"
              title={
                <span>
                  {locale === 'en' ? 'Behind the screen' : 'Derrière l’écran'}
                  <span className="text-accent">.</span>
                </span>
              }
              subtitle={
                locale === 'en'
                  ? 'A software builder crafting purposeful applications, AI experiments, and memorable digital experiences.'
                  : 'Un artisan du code concevant des produits utiles, des expérimentations IA et des expériences web mémorables.'
              }
            />
          </div>
        </Reveal>

        {/* Content Grid: Photo & Links (Left) + Editorial Highlights (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-4 mb-12">
          {/* Left Column: Portrait Card & Social Links */}
          <div className="md:col-span-5 space-y-3.5">
            <Reveal delay={0.05}>
              <Card radius="md" interactive={false} className="p-1 group overflow-hidden">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-neutral-900 border border-line/40">
                  <Image
                    src="/ablafia.png"
                    alt="Lafia Sabi Gado"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-tight">
                      Lafia Sabi Gado
                    </h3>
                    <p className="text-[11px] text-muted font-mono mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span>{tHome('location')}</span>
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Social Pills */}
            <div className="grid grid-cols-2 gap-2">
              {socials.map((item, idx) => (
                <Reveal key={item.label} delay={0.1 + idx * 0.03}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-[12px] bg-bg-elevated border border-line hover:border-white/30 hover:bg-bg-soft transition-all flex items-center gap-2 text-xs text-muted hover:text-white group"
                  >
                    <span className="text-accent group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-[11px] font-mono truncate">{item.label}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Highlights */}
          <div className="md:col-span-7 space-y-4">
            {highlights.map((item, idx) => (
              <Reveal key={item.title} delay={0.08 + idx * 0.05}>
                <div className="p-4 sm:p-5 rounded-[18px] bg-bg-elevated border border-line hover:border-white/20 transition-all group">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-7 h-7 rounded-[8px] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-fg-soft leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <Reveal delay={0.25}>
          <div className="p-6 sm:p-8 rounded-[20px] bg-bg-elevated border border-line relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="max-w-md">
              <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                {locale === 'en' ? 'Get in Touch' : 'Travaillons Ensemble'}
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight mb-1.5">
                {t('cta')}
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {locale === 'en'
                  ? 'Always excited to discuss software engineering, new product concepts, and ambitious ideas.'
                  : 'Toujours ouvert pour échanger sur le développement, de nouveaux concepts produit et des idées ambitieuses.'}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="font-handwritten text-lg px-7 py-2.5 rounded-full bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all inline-flex items-center gap-2"
              >
                <span>{locale === 'en' ? 'Send a message' : 'Me Contacter'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}