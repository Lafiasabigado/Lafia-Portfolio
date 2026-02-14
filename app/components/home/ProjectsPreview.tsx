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

    // Show 4 projects for a balanced 2x2 grid
    const displayProjects = projects.slice(0, 4);

    return (
        <section className="py-24 px-6" id="projects">
            <div className="max-w-3xl mx-auto">

                {/* Header section - CENTERED */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-medium text-foreground"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {displayProjects.map((project, index) => {
                        const description = locale.startsWith('en') ? project.description_en : project.description;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/projects/${project.id}`} className="group block h-full">
                                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-500 h-full flex flex-col">

                                        {/* Image - Fixed Aspect Ratio 4/3 */}
                                        <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                                                {project.name}
                                            </h3>

                                            {/* Description truncated */}
                                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                                                {description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                                {project.tools.split(',').slice(0, 3).map((tool, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                                                    >
                                                        {tool.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA "See all projects" - CENTERED */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group text-lg"
                    >
                        {t('see_all')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
