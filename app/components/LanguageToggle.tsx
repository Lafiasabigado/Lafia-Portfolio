'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageToggleProps {
    placement?: 'top' | 'bottom';
}

export default function LanguageToggle({ placement = 'bottom' }: LanguageToggleProps) {
    const locale = useLocale();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Change language"
            >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: placement === 'bottom' ? -10 : 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: placement === 'bottom' ? -10 : 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute right-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg overflow-hidden min-w-[120px] ${placement === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'
                            }`}
                    >
                        <Link
                            href={pathname}
                            locale="en"
                            onClick={() => setIsOpen(false)}
                            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-white/10 transition-colors flex items-center gap-2 ${locale === 'en' ? 'bg-white/5 font-medium' : ''
                                }`}
                        >
                            <span className="text-lg">🇬🇧</span>
                            <span>English</span>
                        </Link>
                        <Link
                            href={pathname}
                            locale="fr"
                            onClick={() => setIsOpen(false)}
                            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-white/10 transition-colors flex items-center gap-2 ${locale === 'fr' ? 'bg-white/5 font-medium' : ''
                                }`}
                        >
                            <span className="text-lg">🇫🇷</span>
                            <span>Français</span>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
