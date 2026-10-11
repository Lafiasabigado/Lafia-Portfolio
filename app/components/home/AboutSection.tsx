'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
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
      className="inline-flex items-center justify-center w-5 h-5 rounded-[6px] bg-white/10 border border-white/15 text-white align-baseline mx-1 cursor-help"
      style={{ rotate: `${rotation}deg` }}
      whileHover={{ y: -2, rotate: -rotation, scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      title={title}
      aria-label={title}
    >
      {icon}
    </motion.span>
  );
}

export default function AboutSection() {
  const tHome = useTranslations('home_sections.about');
  const locale = useLocale();

  const stats = [
    { value: "3+", label: tHome('stats.experience') },
    { value: "15+", label: tHome('stats.projects') },
    { value: "10+", label: tHome('stats.clients') },
  ];

  return (
    <section id="a-propos" className="section-spacing relative scroll-mt-20">
      <div className="container-custom">
        <SectionTitle
          eyebrow={tHome('eyebrow')}
          title={
            <span>
              {tHome('title_part1')}{' '}
              <span className="text-accent">{tHome('title_part2')}</span>
            </span>
          }
        />

        <div className="max-w-2xl">
          <Reveal>
            <div className="text-sm sm:text-base text-fg-soft leading-[1.75] font-normal space-y-4">
              {locale === 'en' ? (
                <>
                  <p>
                    Software, AI
                    <InlineIcon icon={<Cpu className="w-3 h-3" />} title="AI" rotation={5} />,
                    and a lot of curiosity.
                  </p>

                  <p>
                    I like building things, exploring ideas, breaking stuff, figuring out why they broke, and turning experiments into products people can actually use. I&apos;m interested in software engineering
                    <InlineIcon icon={<Code2 className="w-3 h-3" />} title="Software Engineering" rotation={-5} />,
                    artificial intelligence, and the endless possibilities at the intersection of both
                    <InlineIcon icon={<Layers className="w-3 h-3" />} title="Design & Architecture" rotation={4} />.
                  </p>

                  <p>
                    Outside of code, you&apos;ll probably find me watching anime
                    <InlineIcon icon={<Sparkles className="w-3 h-3" />} title="Anime" rotation={-5} />,
                    talking football
                    <InlineIcon icon={<Gamepad2 className="w-3 h-3" />} title="Football & Gaming" rotation={6} />,
                    exploring new tech, or overthinking an idea that could have waited until tomorrow
                    <InlineIcon icon={<Coffee className="w-3 h-3" />} title="Coffee" rotation={-4} />.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Je construis des choses. Du code, surtout
                    <InlineIcon icon={<Code2 className="w-3 h-3" />} title="Code" rotation={-5} />.
                    Des produits, des idées parfois un peu ambitieuses, et quelques bugs qui auraient pu attendre le lendemain
                    <InlineIcon icon={<Coffee className="w-3 h-3" />} title="Café" rotation={-4} />.
                  </p>

                  <p>
                    Je m’intéresse au développement logiciel, à l’intelligence artificielle
                    <InlineIcon icon={<Cpu className="w-3 h-3" />} title="IA & Machine Learning" rotation={5} />{' '}
                    et à tout ce qui permet de transformer une idée en quelque chose de concret, d’utile et de bien conçu. J’aime explorer, expérimenter et comprendre comment les choses fonctionnent, quitte à toucher à plusieurs domaines en même temps
                    <InlineIcon icon={<Layers className="w-3 h-3" />} title="Design & Architecture" rotation={4} />.
                  </p>

                  <p>
                    Quand je ne code pas, je regarde probablement un animé
                    <InlineIcon icon={<Sparkles className="w-3 h-3" />} title="Animé" rotation={-5} />,
                    je parle football
                    <InlineIcon icon={<Gamepad2 className="w-3 h-3" />} title="Football & Gaming" rotation={6} />,
                    je découvre de nouveaux outils ou je réfléchis à un projet que je n’aurais probablement pas dû commencer à minuit.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          {/* Compact Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mt-6 sm:mt-8">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.06}>
                <Card radius="md" interactive={false} className="p-1 shadow-none">
                  <div className="p-3 text-center">
                    <span className="font-handwritten text-2xl sm:text-3xl font-bold text-accent block leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-muted font-medium line-clamp-1">
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
