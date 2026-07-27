// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="w-full max-w-5xl mx-auto px-6 md:px-10 py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Text Content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-6"
                        >
                            {t('tagline')} · Bénin
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight tracking-tight mb-6"
                        >
                            {t('greeting')}{' '}
                            <span className="text-blue-500">Lafia Sabi Gado</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10 max-w-md"
                        >
                            {t('bio')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/projects"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
                            >
                                {t('viewProjects')}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="https://kloo.me/resumelafia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
                            >
                                {t('downloadCV')}
                                <Download className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Photo — clearly visible, properly framed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-[26rem] md:w-80 md:h-[30rem] lg:w-[22rem] lg:h-[32rem] rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_60px_rgba(37,99,235,0.15)]">
                            <Image
                                src="/ablafia.png"
                                alt="Lafia Sabi Gado"
                                fill
                                priority
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 300px, 400px"
                            />
                            {/* Subtle blue glow at the bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Decorative elements behind the photo */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border border-blue-500/20 rounded-2xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-xl -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}