'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import GlassCard from '@/app/components/ui/GlassCard';
import * as LucideIcons from 'lucide-react';
import { useTranslations } from 'next-intl';

const ServicePage = () => {
    const t = useTranslations('services');

    // Helper function to get Lucide icon component
    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName];
        return Icon ? <Icon className="w-12 h-12" /> : null;
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const item: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    // Service keys mapping for translations
    const serviceKeys = [
        'webdev',
        'saas',
        'ecommerce',
        'uiux',
        'webapps',
        'maintenance'
    ];

    return (
        <div className='py-16 pt-32 border-t border-gray-100 dark:border-gray-800 min-h-screen'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='mb-16 text-center'
                >
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-gray-900 dark:text-white'>
                        {t('title')}
                    </h1>
                    <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>
                        {t.rich('subtitle', {
                            nextjs: (chunks) => <span className='text-gray-900 dark:text-white font-medium'>{chunks}</span>,
                            react: (chunks) => <span className='text-gray-900 dark:text-white font-medium'>{chunks}</span>,
                            typescript: (chunks) => <span className='text-gray-900 dark:text-white font-medium'>{chunks}</span>,
                        })}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={container}
                    initial='hidden'
                    animate='visible'
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                    {services.map((service, idx) => {
                        const key = serviceKeys[idx];
                        return (
                            <motion.div key={service.id} variants={item}>
                                <GlassCard className='group relative overflow-hidden p-6 h-full border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300'>
                                    {/* Background Gradient on Hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />

                                    {/* Content */}
                                    <div className='relative z-10'>
                                        {/* Icon */}
                                        <div className='mb-4 text-gray-900 dark:text-white transform group-hover:scale-110 transition-transform duration-300'>
                                            {getIcon(service.icon)}
                                        </div>

                                        {/* Title */}
                                        <h3 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>
                                            {t(`items.${key}.title`)}
                                        </h3>

                                        {/* Description */}
                                        <p className='text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>
                                            {t(`items.${key}.description`)}
                                        </p>

                                        {/* Features List */}
                                        <ul className='space-y-2'>
                                            {/* We can iterate over features if we handle them as an array in JSON or just a specific count */}
                                            {[0, 1, 2, 3].map((i) => {
                                                const feature = t(`items.${key}.features.${i}`);
                                                if (feature.includes(`items.${key}.features.${i}`)) return null; // Avoid showing missing keys
                                                return (
                                                    <li
                                                        key={i}
                                                        className='text-xs text-gray-500 dark:text-gray-500 flex items-start gap-2'
                                                    >
                                                        <span className='text-gray-400 dark:text-gray-600 mt-0.5'>•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className='mt-20 text-center'
                >
                    <div className='bg-gray-50 dark:bg-gray-900/50 p-8 sm:p-12 rounded-3xl border border-gray-200 dark:border-gray-800'>
                        <h2 className='text-2xl sm:text-3xl font-semibold mb-4 text-gray-900 dark:text-white'>
                            {t('cta.title')}
                        </h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto'>
                            {t('cta.description')}
                        </p>
                        <a
                            href='/contact'
                            className='inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:opacity-90 transition-opacity'
                        >
                            {t('cta.button')}
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicePage;
