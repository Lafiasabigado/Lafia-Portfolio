'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { GraduationCap, Brain, Gamepad2, Sparkles } from 'lucide-react';

export default function AboutMe() {
    const t = useTranslations('home_sections.about.personal');

    const interests = [
        { icon: <GraduationCap size={20} />, text: t('p1') },
        { icon: <Brain size={20} />, text: t('p2') },
        { icon: <Gamepad2 size={20} />, text: t('p3') },
    ];

    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    
                    {/* Left: Decorative or Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center">
                            {/* Inner rings for decoration */}
                            <div className="absolute inset-4 rounded-full border border-blue-500/20" />
                            <div className="absolute inset-8 rounded-full border border-white/5 bg-white/[0.01]" />
                            <Sparkles className="w-12 h-12 text-blue-500" />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="w-full md:w-2/3">
                        <motion.h2 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight mb-8"
                        >
                            {t('title')}
                        </motion.h2>

                        <div className="space-y-6">
                            {interests.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed pt-1">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
