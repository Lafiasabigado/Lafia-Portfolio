'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import GlassCard from '@/app/components/ui/GlassCard';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/projects';
import { useTranslations } from 'next-intl';

const categories = ["All", "SaaS Platform", "Web App", "E-commerce", "Website"];

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "All": return t('all');
      case "SaaS Platform": return t('saas');
      case "Web App": return t('webapp');
      case "E-commerce": return t('ecommerce');
      case "Website": return t('website');
      default: return category;
    }
  };

  return (
    <div className="min-h-screen py-32 relative overflow-hidden">
      {/* Background Elements removed - using global */}

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "mb-16 text-center"
          } as any)}
        >
          <h1 className="text-5xl sm:text-7xl font-heading font-bold mb-6">{t('title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === category ? 'text-background' : 'text-foreground hover:text-electric-blue'
                }`}
            >
              {activeCategory === category && (
                <motion.div
                  {...({
                    layoutId: "activeFilter",
                    className: "absolute inset-0 bg-foreground rounded-full -z-10",
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                  } as any)}
                />
              )}
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Grid */}
        {/* Grid */}
        <motion.div
          {...({
            layout: true,
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          } as any)}
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                {...({
                  layout: true,
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.9 },
                  transition: { duration: 0.5 }
                } as any)}
              >
                <GlassCard className="group relative overflow-hidden p-0 h-[400px] border-0">
                  <Link href={`/projects/${project.id}`} className="block w-full h-full">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Placeholder */}
                    <div className="absolute inset-0 bg-neutral-900/50 group-hover:bg-neutral-900/40 transition-colors duration-500" />

                    {/* Use inline style for BG image if real image is missing, or next/image as preferred */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/10 text-6xl font-bold uppercase tracking-tighter group-hover:scale-110 transition-transform duration-700">
                      {getCategoryLabel(project.category).split(' ')[0]}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-sm font-medium text-electric-blue mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{getCategoryLabel(project.category)}</span>
                        <h3 className="text-3xl font-heading font-bold text-white mb-2">{project.name}</h3>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <ArrowUpRight className="text-white w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}