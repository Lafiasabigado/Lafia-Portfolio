'use client';

import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export default function ServicesSection() {
  const t = useTranslations('services');

  const servicesList: ServiceItem[] = [
    {
      id: 'webdev',
      num: '01',
      title: 'Applications web sur-mesure',
      desc: 'Conception de plateformes SaaS et sites web ultra-rapides, accessibles et optimisés pour le référencement naturel avec Next.js et React.',
      tags: ['Next.js', 'TypeScript', 'SEO'],
    },
    {
      id: 'ai',
      num: '02',
      title: 'Outils et produits IA',
      desc: 'Intégration d’agents intelligents, pipelines LLM et assistants automatisés pour transformer vos processus métier en flux fluides.',
      tags: ['LLM', 'Python', 'OpenAI'],
    },
    {
      id: 'africa',
      num: '03',
      title: 'Solutions marché africain',
      desc: 'Systèmes de paiement Mobile Money (FedaPay, MTN, Moov), interfaces WhatsApp Business et traduction en langues locales.',
      tags: ['Mobile Money', 'WhatsApp', 'PWA'],
    },
    {
      id: 'security',
      num: '04',
      title: 'Audit de sécurité web passif',
      desc: 'Inspection des vulnérabilités de configuration, en-têtes HTTP de sécurité, conformité SSL et recommandations concrètes d’atténuation.',
      tags: ['Headers HTTP', 'SSL', 'CLI'],
    },
  ];

  return (
    <section id="services" className="section-spacing relative scroll-mt-24">
      <div className="container-custom">
        <SectionTitle
          eyebrow="services"
          title="Ce que je peux faire pour toi."
          subtitle="Des solutions pensées pour convertir, résister à la charge et offrir une expérience utilisateur mémorable."
        />

        {/* 2x2 Grid Desktop, 1 Col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {servicesList.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.08}>
              <div className="group h-full p-2 bg-card-ring rounded-[28px] shadow-glow hover:shadow-glow-lift transition-all duration-300">
                <div className="h-full bg-bg-elevated rounded-[22px] p-7 md:p-8 border border-white/[0.04] group-hover:border-accent/40 transition-colors duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-handwritten text-3xl font-bold text-accent">
                        {service.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-line/40">
                    {service.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA to contact */}
        <div className="mt-12 text-left">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-base font-handwritten text-xl text-white hover:text-accent transition-colors group"
          >
            <span>discutons de ton projet</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
