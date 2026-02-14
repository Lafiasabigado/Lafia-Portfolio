'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageToggleProps {
    placement?: 'top' | 'bottom';
}

export default function LanguageToggle({ placement = 'bottom' }: LanguageToggleProps) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
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
                        className={`absolute right-0 bg-white dark:bg-black border border-border/50 rounded-xl shadow-lg overflow-hidden min-w-[120px] ${placement === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'
                            }`}
                    >
                        <button
                            onClick={() => switchLocale('en')}
                            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors flex items-center gap-2 ${locale === 'en' ? 'bg-gray-50 dark:bg-gray-900/50 font-medium' : ''
                                }`}
                        >
                            <span className="text-lg">🇬🇧</span>
                            <span>English</span>
                        </button>
                        <button
                            onClick={() => switchLocale('fr')}
                            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors flex items-center gap-2 ${locale === 'fr' ? 'bg-gray-50 dark:bg-gray-900/50 font-medium' : ''
                                }`}
                        >
                            <span className="text-lg">🇫🇷</span>
                            <span>Français</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
