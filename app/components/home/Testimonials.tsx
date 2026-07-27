'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
    const t = useTranslations('testimonials');
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            name: "Abdou",
            role: "CEO, Tikonna",
            text: t('items.abdou'),
            avatar: "A"
        },
        {
            name: "Marc",
            role: "Directeur, Adtechgroup",
            text: t('items.marc'),
            avatar: "M"
        },
        {
            name: "Sarah",
            role: "Founder, Afriglot",
            text: t('items.sarah'),
            avatar: "S"
        },
        {
            name: "Jean-Paul",
            role: "Tech Lead, AIC Bénin",
            text: t('items.jeanpaul'),
            avatar: "JP"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-24 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">

                    {/* Left: Header */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Quote className="w-8 h-8 text-blue-500 mb-4" />
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight mb-3">
                                {t('title')}
                            </h2>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {t('subtitle')}
                            </p>
                        </motion.div>

                        {/* Navigation — Avatars */}
                        <div className="flex gap-3 mt-8">
                            {testimonials.map((t, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`w-10 h-10 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                                        current === idx
                                            ? 'bg-blue-600 text-white scale-110'
                                            : 'bg-white/5 text-neutral-500 hover:bg-white/10'
                                    }`}
                                >
                                    {t.avatar}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Testimonial Card */}
                    <div className="relative min-h-[200px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 w-full"
                            >
                                <p className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-8 font-medium">
                                    "{testimonials[current].text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                                        {testimonials[current].avatar}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">{testimonials[current].name}</div>
                                        <div className="text-neutral-500 text-xs">{testimonials[current].role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
