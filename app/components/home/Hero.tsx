// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Lafiasabigado' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com' },
];

export default function Hero() {
    const [name] = useState("Lafia Sabi Gado");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-14">

            {/* Container with max-w-3xl centré */}
            <div className="max-w-3xl w-full mx-auto relative z-10">

                {/* Grid responsive amélioré */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,0.7fr] gap-6 sm:gap-8 md:gap-10 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

                        {/* Badge "Available for work" */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-3 sm:mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-[11px] text-emerald-400 font-medium tracking-wide">Available for projects</span>
                        </motion.div>

                        {/* Name - Responsive sizes */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="mb-2"
                        >
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                                style={{ fontFamily: 'var(--font-pixel)', lineHeight: '1.15' }}
                            >
                                {name.split(" ").map((word, index) => (
                                    <span key={index} className="inline-block mr-2 sm:mr-2.5 md:mr-3">
                                        {word.split("").map((char, charIndex) => (
                                            <motion.span variants={child} key={charIndex} className="inline-block">
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </h1>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl font-light mb-3 sm:mb-4 text-neutral-300"
                            style={{ fontFamily: 'var(--font-space-mono)' }}
                        >
                            Creative Developer
                        </motion.p>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-sm sm:text-base text-neutral-400 mb-5 sm:mb-6 leading-relaxed max-w-md mx-auto lg:mx-0"
                            style={{ fontFamily: 'var(--font-space-mono)' }}
                        >
                            I build pixel-perfect, engaging, and accessible digital experiences.
                            Specialized in <span className="text-white font-medium">Next.js</span> and{' '}
                            <span className="text-white font-medium">Design Engineering</span>.
                        </motion.p>

                        {/* Buttons - Stack on mobile, row on larger */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-6 sm:mb-8 w-full sm:w-auto"
                        >
                            <Link href="#projects" className="group relative w-full sm:w-auto">
                                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                                <div className="relative px-6 py-2.5 bg-white text-black rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                                    <span>View Projects</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link
                                href="/contact"
                                className="px-6 py-2.5 rounded-full font-semibold text-sm text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
                            >
                                Get in Touch
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

                    {/* Right Column: Profile Image - Responsive sizes */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Glow effects */}
                            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500/15 via-purple-500/15 to-pink-500/15 blur-2xl animate-pulse" />
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-xl" />

                            <motion.div
                                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-60 lg:h-60 xl:w-64 xl:h-64"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Border ring animé */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-neutral-900" />
                                </div>

                                {/* Image container */}
                                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
                                    <img
                                        src="/lafiapro1.png"
                                        alt="Lafia Sabi Gado"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>

                {/* Scroll Indicator - Hidden on mobile */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1"
                >
                    <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-medium">Scroll</span>
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
}