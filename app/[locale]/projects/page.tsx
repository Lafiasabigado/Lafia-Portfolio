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
    <div className="min-h-screen py-32 bg-background text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-12"
          } as any)}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight mb-3">{t('title')}</h1>
          <p className="text-neutral-400 max-w-xl">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          {...({
            layout: true,
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          } as any)}
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                {...({
                  layout: true,
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  transition: { duration: 0.4 }
                } as any)}
              >
                <Link href={`/projects/${project.id}`} className="group block">
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-neutral-900 border border-white/5 mb-3">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="text-white w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-xs text-blue-500 font-medium">{getCategoryLabel(project.category)}</span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-blue-500 transition-colors tracking-tight">{project.name}</h3>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}