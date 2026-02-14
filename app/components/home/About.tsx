'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Laptop, Palette } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "15+" },
];

const services = [
    { icon: <Laptop size={32} />, title: "Web Development", desc: "Fast, accessible, and SEO-friendly websites using Next.js." },
    { icon: <Palette size={32} />, title: "UI/UX Design", desc: "Modern, aesthetic, and user-centric interfaces." },
    { icon: <Code2 size={32} />, title: "Backend Solutions", desc: "Scalable APIs and database management." },
    { icon: <Globe size={32} />, title: "SaaS Products", desc: "Full-cycle development from idea to launch." },
];

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="max-w-3xl mx-auto px-6 py-20 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.h2
                        {...({
                            initial: { opacity: 0, x: -50 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: true },
                            className: "text-4xl sm:text-5xl font-heading font-bold"
                        } as any)}
                    >
                        More than just <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-green">coding.</span>
                    </motion.h2>

                    <motion.div
                        {...({
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true },
                            transition: { delay: 0.2 },
                            className: "text-lg text-muted-foreground space-y-4"
                        } as any)}
                    >
                        <p>
                            I'm a passionate developer based in Benin, obsessed with creating digital experiences that feel alive.
                            My approach combines technical precision with artistic direction.
                        </p>
                        <p>
                            I believe that a website shouldn't just be functional; it should be memorable.
                            Whether it's a SaaS platform or a portfolio, I aim for the "WOW" effect.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                {...({
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: { opacity: 1, y: 0 },
                                    viewport: { once: true },
                                    transition: { delay: 0.4 + index * 0.1 }
                                } as any)}
                            >
                                <div className="text-3xl sm:text-4xl font-bold font-heading mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual/Services Grid */}
                <motion.div
                    style={{ y } as any}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {services.map((service, index) => (
                        <GlassCard
                            key={index}
                            className={`p-6 ${index === 1 || index === 3 ? 'sm:translate-y-12' : ''}`}
                            hoverEffect={true}
                        >
                            <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 text-electric-blue">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </GlassCard>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
