"use client";

import { motion } from 'framer-motion';
import { Code2, Globe, Laptop, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('home_sections.about');

    const stats = [
        { label: t('stats.experience'), value: "3+" },
        { label: t('stats.projects'), value: "20+" },
        { label: t('stats.clients'), value: "15+" },
    ];

    const services = [
        { icon: <Laptop size={22} />, title: t('services.webdev.title'), desc: t('services.webdev.desc') },
        { icon: <Palette size={22} />, title: t('services.uiux.title'), desc: t('services.uiux.desc') },
        { icon: <Code2 size={22} />, title: t('services.backend.title'), desc: t('services.backend.desc') },
        { icon: <Globe size={22} />, title: t('services.saas.title'), desc: t('services.saas.desc') },
    ];

    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Text */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight mb-6"
                        >
                            {t('title_part1')}{' '}
                            <span className="text-blue-500">{t('title_part2')}</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-neutral-400 space-y-4 leading-relaxed mb-10"
                        >
                            <p>{t('p1')}</p>
                            <p>{t('p2')}</p>
                        </motion.div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-sm font-bold text-white mb-1.5">{service.title}</h3>
                                <p className="text-xs text-neutral-500 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
