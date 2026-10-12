'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/content/projects';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';

const categories = ["Tous", "Web Apps", "Outils & CLI", "Mobile", "IA"] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const locale = useLocale();
  const t = useTranslations('projects');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "Tous" || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        (project.tagline &&
          project.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.tagline_en &&
          project.tagline_en.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 sm:pt-28 pb-24 relative">
      <div className="container-custom">
        {/* Header aligned with DA */}
        <Reveal>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-white/[0.02] mb-3">
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-[11px] font-mono text-fg-soft uppercase tracking-wider">
                {locale === 'en' ? 'Portfolio Archive' : 'Archives de Projets'}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/10 text-white">
                {projects.length}
              </span>
            </div>

            <SectionTitle
              eyebrow="projets"
              title={
                <span>
                  {locale === 'en' ? 'All projects' : 'Tous mes projets'}
                  <span className="text-accent">.</span>
                </span>
              }
              subtitle={
                locale === 'en'
                  ? 'A comprehensive archive of software, SaaS applications, tools, and experiments I’ve built.'
                  : 'Une archive complète des logiciels, plateformes SaaS, outils et expérimentations que j’ai construits.'
              }
            />
          </div>
        </Reveal>

        {/* Filters & Search Toolbar */}
        <Reveal delay={0.05}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            {/* Category Filter Pills */}
            <div
              className="flex flex-wrap gap-1.5"
              role="tablist"
              aria-label="Filtrer les projets"
            >
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
                        layoutId="activeFilterPillProjectsArchive"
                        className="absolute inset-0 bg-white rounded-full z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={locale === 'en' ? 'Search stack or name...' : 'Filtrer (stack, nom)...'}
                className="w-full bg-bg-elevated border border-line rounded-full pl-8 pr-3 py-1 text-xs text-white placeholder:text-muted/60 outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
        </Reveal>

        {/* Projects Grid: 2 columns in compact container */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-line rounded-[20px] p-8">
            <p className="text-muted text-sm font-mono mb-2">
              {locale === 'en' ? 'No projects match your search.' : 'Aucun projet ne correspond à votre recherche.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory("Tous");
                setSearchQuery("");
              }}
              className="text-xs text-accent underline underline-offset-4 hover:text-white transition-colors"
            >
              {locale === 'en' ? 'Reset filters' : 'Réinitialiser les filtres'}
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => {
                const displayedTags = project.stack.slice(0, 3);
                const remainingCount = project.stack.length - 3;
                const tagline = locale === 'en' ? project.tagline_en : project.tagline;
                const description = locale === 'en' ? project.description_en : project.description;

                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.3) }}
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

                          {/* Top initial badge */}
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
        )}
      </div>
    </div>
  );
}