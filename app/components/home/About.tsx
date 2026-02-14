"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Laptop, Palette } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('home_sections.about');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const stats = [
        { label: t('stats.experience'), value: "3+" },
        { label: t('stats.projects'), value: "20+" },
        { label: t('stats.clients'), value: "15+" },
    ];

    const services = [
        { icon: <Laptop size={32} />, title: t('services.webdev.title'), desc: t('services.webdev.desc') },
        { icon: <Palette size={32} />, title: t('services.uiux.title'), desc: t('services.uiux.desc') },
        { icon: <Code2 size={32} />, title: t('services.backend.title'), desc: t('services.backend.desc') },
        { icon: <Globe size={32} />, title: t('services.saas.title'), desc: t('services.saas.desc') },
    ];

    return (
        <section ref={containerRef} className="max-w-3xl mx-auto px-6 py-20 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.h2
                        {...({
                            initial: { opacity: 0, x: -50 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: true },
                            className: "text-4xl sm:text-5xl font-heading font-bold"
                        } as any)}
                    >
                        {t('title_part1')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-green">{t('title_part2')}</span>
                    </motion.h2>

                    <motion.div
                        {...({
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true },
                            transition: { delay: 0.2 },
                            className: "text-lg text-muted-foreground space-y-4"
                        } as any)}
                    >
                        <p>
                            {t('p1')}
                        </p>
                        <p>
                            {t('p2')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                {...({
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: { opacity: 1, y: 0 },
                                    viewport: { once: true },
                                    transition: { delay: 0.4 + index * 0.1 }
                                } as any)}
                            >
                                <div className="text-3xl sm:text-4xl font-bold font-heading mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual/Services Grid */}
                <motion.div
                    style={{ y } as any}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {services.map((service, index) => (
                        <GlassCard
                            key={index}
                            className={`p-6 ${index === 1 || index === 3 ? 'sm:translate-y-12' : ''}`}
                            hoverEffect={true}
                        >
                            <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 text-electric-blue">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </GlassCard>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
