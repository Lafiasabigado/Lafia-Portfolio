'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
    SiPostgresql, SiFramer, SiThreedotjs, SiDocker, SiAmazonwebservices, 
    SiFigma, SiGit, SiPython, SiDjango 
} from 'react-icons/si';

const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Framer", icon: SiFramer },
    { name: "Three.js", icon: SiThreedotjs },
    { name: "Docker", icon: SiDocker },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Figma", icon: SiFigma },
    { name: "Git", icon: SiGit },
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
];

export default function Skills() {
    const t = useTranslations('home_sections.skills');

    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight mb-2">{t('title')}</h2>
                    <p className="text-neutral-400">{t('subtitle')}</p>
                </motion.div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="flex flex-col items-center gap-2.5 py-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group cursor-default"
                            >
                                <Icon className="text-2xl text-neutral-500 group-hover:text-blue-500 transition-colors" />
                                <span className="text-xs text-neutral-500 group-hover:text-white transition-colors font-medium">{skill.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
