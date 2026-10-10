'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { Code2, Coffee, Gamepad2, Sparkles, Layers, Cpu } from 'lucide-react';

interface InlineIconProps {
  icon: React.ReactNode;
  title: string;
  rotation?: number;
}

function InlineIcon({ icon, title, rotation = 4 }: InlineIconProps) {
  return (
    <motion.span
      className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/10 border border-white/15 text-white align-baseline mx-1.5 cursor-help"
      style={{ rotate: `${rotation}deg` }}
      whileHover={{ y: -3, rotate: -rotation, scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      title={title}
      aria-label={title}
    >
      {icon}
    </motion.span>
  );
}

export default function AboutSection() {
  const t = useTranslations('about');
  const tHome = useTranslations('home_sections.about');

  const stats = [
    { value: "3+", label: tHome('stats.experience') },
    { value: "15+", label: tHome('stats.projects') },
    { value: "10+", label: tHome('stats.clients') },
  ];

  return (
    <section id="a-propos" className="section-spacing relative scroll-mt-24">
      <div className="container-custom">
        <SectionTitle
          eyebrow="à propos"
          title={
            <span>
              Plus que du <span className="text-accent">code</span>.
            </span>
          }
        />

        <div className="max-w-3xl">
          <Reveal>
            <div className="text-lg sm:text-xl md:text-2xl text-fg-soft leading-[1.8] font-normal space-y-6">
              <p>
                Je construis des trucs, du code surtout
                <InlineIcon icon={<Code2 className="w-3.5 h-3.5" />} title="Code" rotation={-5} />
                parfois du design
                <InlineIcon icon={<Layers className="w-3.5 h-3.5" />} title="Design & Architecture" rotation={4} />
                et de temps en temps les deux à 2h du matin avec une bonne tasse de café
                <InlineIcon icon={<Coffee className="w-3.5 h-3.5" />} title="Café" rotation={-4} />
                sans raison valable.
              </p>

              <p>
                J’aime concevoir des produits qui parlent aux gens d’ici : traducteurs de langues locales, intégrations Mobile Money, interfaces optimisées pour WhatsApp et modèles d’intelligence artificielle
                <InlineIcon icon={<Cpu className="w-3.5 h-3.5" />} title="IA & Machine Learning" rotation={5} />.
              </p>

              <p>
                Quand je ne code pas, je suis probablement en train d’explorer un nouvel animé
                <InlineIcon icon={<Sparkles className="w-3.5 h-3.5" />} title="Animé" rotation={-5} />
                de faire une session de jeu
                <InlineIcon icon={<Gamepad2 className="w-3.5 h-3.5" />} title="Jeux vidéo" rotation={6} />
                ou d’organiser un hackathon pour la communauté tech au Bénin.
              </p>
            </div>
          </Reveal>

          {/* Compact Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-12 md:mt-16">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.08}>
                <Card radius="md" interactive={false} className="p-1.5 shadow-none">
                  <div className="p-4 sm:p-5 text-center">
                    <span className="font-handwritten text-3xl sm:text-4xl font-bold text-accent block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-muted font-medium line-clamp-1">
                      {stat.label}
                    </span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
