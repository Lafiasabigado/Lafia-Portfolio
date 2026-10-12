'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/content/projects';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

const categories = ["Tous", "Web Apps", "Outils & CLI", "Mobile", "IA"] as const;

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const locale = useLocale();

  const filteredProjects = (
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
  ).slice(0, 6);

  return (
    <section id="projets" className="section-spacing relative scroll-mt-20">
      <div className="container-custom">
        <SectionTitle
          eyebrow="projets"
          title={locale === 'en' ? "What I've built." : "Ce que j'ai construit."}
          subtitle={
            locale === 'en'
              ? "A selection of web apps, mobile tools, and AI prototypes."
              : "Une sélection d'applications web, outils mobiles et prototypes d'IA."
          }
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Filtrer les projets">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-colors duration-200 outline-none focus-visible:outline-2 focus-visible:outline-accent",
                  isActive
                    ? "text-black font-semibold"
                    : "text-muted hover:text-white border border-line bg-white/[0.02]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-white rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 2 columns in compact container */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const displayedTags = project.stack.slice(0, 3);
              const remainingCount = project.stack.length - 3;
              const tagline = locale === 'en' ? project.tagline_en : project.tagline;
              const description = locale === 'en' ? project.description_en : project.description;

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col h-full"
                >
                  <div className="flex flex-col h-full p-1.5 bg-card-ring rounded-[20px] shadow-glow hover:shadow-glow-lift transition-all duration-300">
                    <div className="flex flex-col h-full bg-bg-elevated rounded-[16px] overflow-hidden border border-white/[0.04]">
                      {/* Image header - 16/10 aspect ratio */}
                      <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden border-b border-line/40">
                        {project.cover ? (
                          <Image
                            src={project.cover}
                            alt={project.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 360px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center p-3">
                            <span className="font-heading text-lg font-bold text-muted/60">
                              {project.name}
                            </span>
                          </div>
                        )}

                        {/* Top pastille badge with initial */}
                        <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] font-bold font-mono text-white">
                          {project.name.charAt(0)}
                        </div>

                        {/* Year badge */}
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-muted">
                          {project.year}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-heading text-base font-bold text-white mb-0.5 group-hover:text-accent transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-[11px] font-mono text-muted mb-2 line-clamp-1">
                            {tagline}
                          </p>
                          <p className="text-xs text-fg-soft/80 line-clamp-2 leading-relaxed mb-4">
                            {description}
                          </p>
                        </div>

                        <div>
                          {/* Tags: 3 + "+N" */}
                          <div className="flex flex-wrap items-center gap-1 mb-3.5">
                            {displayedTags.map((tag) => (
                              <Badge key={tag} className="text-[10px] py-0.5 px-1.5">
                                {tag}
                              </Badge>
                            ))}
                            {remainingCount > 0 && (
                              <span className="text-[10px] text-muted font-mono px-1">
                                +{remainingCount}
                              </span>
                            )}
                          </div>

                          {/* Link to Case Study */}
                          <Link
                            href={`/projects/${project.slug}`}
                            data-umami-event="project_open"
                            data-umami-event-project={project.slug}
                            className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-accent transition-colors"
                          >
                            <span>{locale === 'en' ? 'Read case study' : 'Lire l’étude de cas'}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 font-handwritten text-lg sm:text-xl px-7 py-2.5 rounded-full bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all group"
          >
            <span>{locale === 'en' ? 'Explore all projects' : 'Voir tous les projets'}</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/10 text-black font-semibold">
              {projects.length}
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
