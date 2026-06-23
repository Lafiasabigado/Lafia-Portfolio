'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import * as LucideIcons from 'lucide-react';
import { useTranslations } from 'next-intl';

const ServicePage = () => {
    const t = useTranslations('services');

    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName];
        return Icon ? <Icon className="w-6 h-6" /> : null;
    };

    const serviceKeys = ['webdev', 'saas', 'ecommerce', 'uiux', 'webapps', 'maintenance'];

    return (
        <div className='py-32 min-h-screen bg-background text-white'>
            <div className='max-w-5xl mx-auto px-6 md:px-10'>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='mb-12'
                >
                    <h1 className='text-3xl md:text-4xl font-heading font-bold text-white tracking-tight mb-3'>
                        {t('title')}
                    </h1>
                    <p className='text-neutral-400 max-w-xl leading-relaxed'>
                        {t.rich('subtitle', {
                            nextjs: (chunks) => <span className='text-blue-500 font-medium'>{chunks}</span>,
                            react: (chunks) => <span className='text-blue-500 font-medium'>{chunks}</span>,
                            typescript: (chunks) => <span className='text-blue-500 font-medium'>{chunks}</span>,
                        })}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {services.map((service, idx) => {
                        const key = serviceKeys[idx];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className='p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors group'
                            >
                                <div className='w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors'>
                                    {getIcon(service.icon)}
                                </div>
                                <h3 className='text-base font-bold text-white mb-2'>
                                    {t(`items.${key}.title`)}
                                </h3>
                                <p className='text-sm text-neutral-400 mb-4 leading-relaxed'>
                                    {t(`items.${key}.description`)}
                                </p>
                                <ul className='space-y-1.5'>
                                    {[0, 1, 2, 3].map((i) => {
                                        const feature = t(`items.${key}.features.${i}`);
                                        if (feature.includes(`items.${key}.features.${i}`)) return null;
                                        return (
                                            <li key={i} className='text-xs text-neutral-500 flex items-start gap-2'>
                                                <span className='text-blue-500 mt-0.5'>•</span>
                                                <span>{feature}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className='mt-16'
                >
                    <div className='bg-white/[0.03] border border-white/5 p-8 md:p-10 rounded-2xl text-center'>
                        <h2 className='text-xl md:text-2xl font-heading font-bold text-white mb-3'>
                            {t('cta.title')}
                        </h2>
                        <p className='text-neutral-400 mb-6 max-w-md mx-auto text-sm'>
                            {t('cta.description')}
                        </p>
                        <a
                            href='/contact'
                            className='inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors'
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
