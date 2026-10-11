'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  title_en: string;
  desc: string;
  desc_en: string;
  tags: string[];
}

export default function ServicesSection() {
  const locale = useLocale();

  const servicesList: ServiceItem[] = [
    {
      id: 'webdev',
      num: '01',
      title: 'Applications web sur-mesure',
      title_en: 'Custom Web Applications',
      desc: 'Plateformes SaaS et sites modernes, ultra-rapides et optimisés SEO avec Next.js et React.',
      desc_en: 'Modern SaaS platforms and web apps, fast and SEO-ready using Next.js & React.',
      tags: ['Next.js', 'TypeScript', 'SEO'],
    },
    {
      id: 'ai',
      num: '02',
      title: 'Outils et produits IA',
      title_en: 'AI Tools & Products',
      desc: 'Intégration d’agents intelligents, pipelines LLM et assistants automatisant vos processus métier.',
      desc_en: 'AI agent integrations, LLM workflows and assistants streamlining business tasks.',
      tags: ['LLM', 'Python', 'OpenAI'],
    },
    {
      id: 'africa',
      num: '03',
      title: 'Solutions marché africain',
      title_en: 'West African Market Solutions',
      desc: 'Paiements Mobile Money (FedaPay, MTN, Moov), interfaces WhatsApp et langues locales.',
      desc_en: 'Mobile Money payments (FedaPay, MTN, Moov), WhatsApp workflows and local languages.',
      tags: ['Mobile Money', 'WhatsApp', 'PWA'],
    },
    {
      id: 'security',
      num: '04',
      title: 'Audit de sécurité web passif',
      title_en: 'Passive Security Audits',
      desc: 'Inspection des vulnérabilités de configuration, en-têtes HTTP de sécurité et certificats SSL.',
      desc_en: 'Configuration vulnerability scans, HTTP security headers inspection and SSL audits.',
      tags: ['HTTP Headers', 'SSL', 'CLI'],
    },
  ];

  return (
    <section id="services" className="section-spacing relative scroll-mt-20">
      <div className="container-custom">
        <SectionTitle
          eyebrow="services"
          title={locale === 'en' ? "What I can build for you." : "Ce que je peux faire pour toi."}
          subtitle={
            locale === 'en'
              ? "Fast, resilient solutions built to convert and deliver high performance."
              : "Des solutions pensées pour convertir, résister à la charge et offrir une expérience fluide."
          }
        />

        {/* 2x2 Grid Desktop, 1 Col Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {servicesList.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.05}>
              <div className="group h-full p-1.5 bg-card-ring rounded-[20px] shadow-glow hover:shadow-glow-lift transition-all duration-300">
                <div className="h-full bg-bg-elevated rounded-[16px] p-5 sm:p-6 border border-white/[0.04] group-hover:border-accent/40 transition-colors duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-handwritten text-2xl font-bold text-accent">
                        {service.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2">
                      {locale === 'en' ? service.title_en : service.title}
                    </h3>

                    <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {locale === 'en' ? service.desc_en : service.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line/40">
                    {service.tags.map((tag) => (
                      <Badge key={tag} className="text-[11px] py-0.5 px-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA to contact */}
        <div className="mt-6 text-left">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted hover:text-white transition-colors group"
          >
            <span>{locale === 'en' ? "let's discuss your project" : "discutons de ton projet"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
