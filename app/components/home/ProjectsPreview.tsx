// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects';
import { useTranslations, useLocale } from 'next-intl';

export default function ProjectsPreview() {
    const t = useTranslations('home_sections.projects_preview');
    const locale = useLocale();
    const displayProjects = projects.slice(0, 4);

    return (
        <section className="py-24" id="projects">
            <div className="max-w-5xl mx-auto px-6 md:px-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight"
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-neutral-400 mt-2"
                        >
                            {t('subtitle')}
                        </motion.p>
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium text-sm transition-colors group"
                    >
                        {t('see_all')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayProjects.map((project, index) => {
                        const description = locale.startsWith('en') ? project.description_en : project.description;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/projects/${project.id}`} className="group block">
                                    <div className="aspect-video relative rounded-xl overflow-hidden bg-neutral-900 border border-white/5 mb-4">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors tracking-tight">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-neutral-400 mt-1 line-clamp-1">{description}</p>
                                    <div className="flex gap-2 mt-3">
                                        {project.tools.split(',').slice(0, 3).map((tool, i) => (
                                            <span key={i} className="text-xs text-neutral-500 bg-white/5 px-2.5 py-1 rounded-md">
                                                {tool.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
