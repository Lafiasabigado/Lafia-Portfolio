'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/content/projects';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

const categories = ["Tous", "Web Apps", "Outils & CLI", "Mobile", "IA"] as const;

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const locale = useLocale();

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projets" className="section-spacing relative scroll-mt-24">
      <div className="container-custom">
        <SectionTitle
          eyebrow="projets"
          title="Là où atterrit tout ce que je construis."
          subtitle={
            locale === 'en'
              ? "Where everything I build ends up — the best alongside the experiments."
              : "Là où atterrit tout ce que je construis, le meilleur comme le moins bon."
          }
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12" role="tablist" aria-label="Filtrer les projets">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-200 outline-none focus-visible:outline-2 focus-visible:outline-accent",
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col h-full"
                >
                  <div className="flex flex-col h-full p-2 bg-card-ring rounded-[28px] shadow-glow hover:shadow-glow-lift transition-all duration-300">
                    <div className="flex flex-col h-full bg-bg-elevated rounded-[22px] overflow-hidden border border-white/[0.04]">
                      {/* Image header - 16/10 aspect ratio */}
                      <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden border-b border-line/40">
                        {project.cover ? (
                          <Image
                            src={project.cover}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center p-4">
                            <span className="font-heading text-2xl font-bold text-muted/60">
                              {project.name}
                            </span>
                          </div>
                        )}

                        {/* Top pastille badge with initial */}
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-bold font-mono text-white">
                          {project.name.charAt(0)}
                        </div>

                        {/* Year badge */}
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-muted">
                          {project.year}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-xs font-mono text-muted mb-3 line-clamp-1">
                            {tagline}
                          </p>
                          <p className="text-sm text-fg-soft/80 line-clamp-3 leading-relaxed mb-6">
                            {description}
                          </p>
                        </div>

                        <div>
                          {/* Tags: 3 + "+N" */}
                          <div className="flex flex-wrap items-center gap-1.5 mb-5">
                            {displayedTags.map((tag) => (
                              <Badge key={tag} className="text-[11px] py-0.5 px-2">
                                {tag}
                              </Badge>
                            ))}
                            {remainingCount > 0 && (
                              <span className="text-[11px] text-muted font-mono px-1.5">
                                +{remainingCount}
                              </span>
                            )}
                          </div>

                          {/* Link to Case Study */}
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-accent transition-colors"
                          >
                            <span>{locale === 'en' ? 'Read case study' : 'Lire l’étude de cas'}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
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
      </div>
    </section>
  );
}
