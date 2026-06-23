'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Stratégie & Maquette",
        desc: "Nous définissons ensemble vos objectifs commerciaux. Je crée ensuite des maquettes interactives (Figma) pour valider l'expérience utilisateur avant d'écrire la moindre ligne de code."
    },
    {
        num: "02",
        title: "Développement Sur-Mesure",
        desc: "Je code votre plateforme avec les technologies les plus robustes du marché (React, Next.js, Django). Vous avez accès à un lien privé pour suivre l'avancement en temps réel."
    },
    {
        num: "03",
        title: "Lancement & Suivi",
        desc: "Après des tests rigoureux, nous lançons votre produit. Je reste à vos côtés pour la maintenance, l'optimisation SEO et les futures évolutions de la plateforme."
    }
];

export default function Process() {
    return (
        <section className="py-24 px-8 md:px-12 bg-neutral-950">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 tracking-tight"
                        >
                            Un processus transparent et sans surprise
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-neutral-400"
                        >
                            De l'idée initiale au lancement, voici comment nous allons collaborer.
                        </motion.p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="relative group"
                        >
                            {/* Connection line for desktop */}
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-24 right-0 h-[1px] bg-white/10 group-hover:bg-emerald-400/50 transition-colors duration-500" />
                            )}
                            
                            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-display font-bold text-neutral-500 mb-8 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-colors duration-500">
                                {step.num}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-neutral-400 leading-relaxed pr-4">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
