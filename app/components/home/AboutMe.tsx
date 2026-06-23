'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
    const t = useTranslations('home_sections.about.personal');

    const interests = [
        { index: '01', label: t('label1'), text: t('p1') },
        { index: '02', label: t('label2'), text: t('p2') },
        { index: '03', label: t('label3'), text: t('p3') },
    ];

    return (
        <section className="py-24 md:py-32 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-10">

                <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
                    {/* Left Column: Header (Sticky for desktop) */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32"
                        >
                            <p className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4">
                                {t('eyebrow')}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
                                {t('title')}
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Column: Thread layout */}
                    <div className="relative pl-px mt-4 md:mt-0">
                        {/* Vertical line — the thread */}
                        <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/10 to-transparent" />

                        <div className="space-y-16">
                            {interests.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                                    className="relative pl-8 md:pl-12"
                                >
                                    {/* Dot on the thread */}
                                    <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                                    {/* Index + label row */}
                                    <div className="flex items-baseline gap-4 mb-3">
                                        <span className="font-mono text-xs text-blue-500 font-semibold tabular-nums">
                                            {item.index}
                                        </span>
                                        <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Body text */}
                                    <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
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