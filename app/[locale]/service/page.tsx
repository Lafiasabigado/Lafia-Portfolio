'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { services } from '@/lib/services';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { Code2, Rocket, ShoppingCart, Palette, Zap, Wrench, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4" />,
  Rocket: <Rocket className="w-4 h-4" />,
  ShoppingCart: <ShoppingCart className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
};

const serviceKeys = ['webdev', 'saas', 'ecommerce', 'uiux', 'webapps', 'maintenance'] as const;

export default function ServicePage() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <div className="pt-24 sm:pt-28 pb-24 relative">
      <div className="container-custom">
        {/* Header aligned with DA */}
        <Reveal>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-white/[0.02] mb-3">
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-[11px] font-mono text-fg-soft uppercase tracking-wider">
                {locale === 'en' ? 'Offerings & Capabilities' : 'Expertise & Solutions'}
              </span>
            </div>

            <SectionTitle
              eyebrow="services"
              title={
                <span>
                  {locale === 'en' ? 'Services & Engineering' : 'Services & Ingénierie'}
                  <span className="text-accent">.</span>
                </span>
              }
              subtitle={
                locale === 'en'
                  ? 'End-to-end web software engineering, SaaS architecture, and high-performance user interfaces tailored for growth.'
                  : 'Développement d’applications web, architecture SaaS et interfaces utilisateur haute performance pensées pour l’impact.'
              }
            />
          </div>
        </Reveal>

        {/* Services Grid: 2 columns matching homepage DA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {services.map((service, idx) => {
            const key = serviceKeys[idx];
            const icon = iconMap[service.icon] || <Code2 className="w-4 h-4" />;

            return (
              <Reveal key={service.id} delay={idx * 0.05}>
                <div className="h-full p-1.5 bg-card-ring rounded-[20px] shadow-glow hover:shadow-glow-lift transition-all duration-300 flex flex-col group">
                  <div className="h-full p-4 sm:p-5 bg-bg-elevated rounded-[16px] border border-white/[0.04] flex flex-col justify-between">
                    <div>
                      {/* Icon & Index Badge */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-8 h-8 rounded-[10px] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                          {icon}
                        </div>
                        <span className="text-[10px] font-mono text-muted/70">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-heading text-base font-bold text-white mb-1.5 group-hover:text-accent transition-colors">
                        {t(`items.${key}.title`)}
                      </h3>
                      <p className="text-xs text-fg-soft/80 leading-relaxed mb-4">
                        {t(`items.${key}.description`)}
                      </p>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-1.5 pt-3 border-t border-line/40">
                      {[0, 1, 2, 3].map((i) => {
                        const feature = t(`items.${key}.features.${i}`);
                        if (feature.includes(`items.${key}.features.${i}`)) return null;
                        return (
                          <li key={i} className="text-[11px] text-muted flex items-start gap-2">
                            <Check className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA Banner matching homepage aesthetic */}
        <Reveal delay={0.3}>
          <div className="p-6 sm:p-8 rounded-[20px] bg-bg-elevated border border-line relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                {locale === 'en' ? 'Start a project' : 'Démarrer un projet'}
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight mb-2">
                {t('cta.title')}
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {t('cta.description')}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="font-handwritten text-lg px-7 py-2.5 rounded-full bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all inline-flex items-center gap-2"
              >
                <span>{t('cta.button')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
