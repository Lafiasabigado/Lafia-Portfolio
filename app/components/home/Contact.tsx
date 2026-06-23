'use client';

import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('home_sections.contact');

    return (
        <section id="contact" className="py-24 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight mb-4">{t('title')}</h2>
                        <p className="text-neutral-400 leading-relaxed mb-10 max-w-md">
                            {t('subtitle')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-0.5">Email</p>
                                    <a href="mailto:lafiasabigado@gmail.com" className="text-sm text-white hover:text-blue-500 transition-colors">lafiasabigado@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-0.5">Localisation</p>
                                    <p className="text-sm text-white">Parakou, Bénin (Remote)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/[0.03] rounded-2xl p-6 md:p-8 border border-white/5"
                    >
                        <form action="https://formspree.io/f/maqdekbd" method="POST" className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs text-neutral-500 uppercase tracking-wider font-medium mb-2">{t('form.name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-neutral-500 uppercase tracking-wider font-medium mb-2">{t('form.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-600"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-neutral-500 uppercase tracking-wider font-medium mb-2">{t('form.message')}</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-neutral-600"
                                    placeholder="Parlez-moi de votre projet..."
                                />
                            </div>

                            <MagneticButton>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
                                >
                                    {t('form.send')} <Send size={16} />
                                </button>
                            </MagneticButton>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
