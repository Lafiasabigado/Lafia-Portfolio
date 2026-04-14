// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, memo } from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Lafiasabigado' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com' },
];

const Hero = memo(function Hero() {
    const t = useTranslations('hero');

    const wordAnim = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.12,
                type: "spring",
                damping: 14,
                stiffness: 100,
            },
        }),
    };

    const nameWords = "Lafia Sabi Gado".split(" ");

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-5 sm:px-8 pt-24 pb-16">

            <div className="max-w-3xl w-full mx-auto relative z-10">

                {/* Single column on mobile + tablet / two-column on desktop */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

                    {/* Avatar — top on mobile/tablet, right on desktop */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex justify-center mb-8 lg:mb-0 lg:order-2 lg:flex-shrink-0"
                    >
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500/15 via-purple-500/15 to-pink-500/15 blur-2xl animate-pulse" />
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-xl" />
                            <motion.div
                                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-neutral-900" />
                                </div>
                                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
                                    <img
                                        src="/lafiapro1.png"
                                        alt="Lafia Sabi Gado"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Content — centered on mobile/tablet, left on desktop */}
                    <div className="flex-1 min-w-0 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-[11px] text-emerald-400 font-medium tracking-wide">{t('badge')}</span>
                        </motion.div>

                        {/* Name */}
                        <h1
                            className="mb-3 text-[1.8rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.15] text-white flex flex-wrap justify-center lg:justify-start gap-x-3"
                            style={{ fontFamily: 'var(--font-draft-cartoon), sans-serif' }}
                        >
                            {nameWords.map((word, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={wordAnim}
                                    initial="hidden"
                                    animate="visible"
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg font-light mb-4 text-neutral-300"
                        >
                            {t('tagline')}
                        </motion.p>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-sm sm:text-base text-neutral-400 mb-6 leading-relaxed"
                        >
                            {t.rich('bio', {
                                nextjs: (chunks) => <span className="text-white font-medium">{chunks}</span>,
                                design: (chunks) => <span className="text-white font-medium">{chunks}</span>
                            })}
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
                        >
                            <Link href="/projects" className="group relative">
                                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                                <div className="relative px-6 py-2.5 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2 transition-all duration-300 group-hover:scale-105">
                                    <span>{t('viewProjects')}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-2.5 rounded-full font-semibold text-sm text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                            >
                                {t('getInTouch')}
                            </Link>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center gap-4 justify-center lg:justify-start"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                </div>

                {/* Scroll Indicator - desktop/large tablet only */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1"
                >
                    <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-neutral-500"
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
});

export default Hero;