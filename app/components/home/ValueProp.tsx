'use client';

import { motion } from 'framer-motion';
import { Zap, Target, ShieldCheck } from 'lucide-react';

const values = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "Orienté Conversion",
        description: "Je ne fais pas que de beaux sites. Je construis des tunnels de vente et des interfaces pensés pour transformer vos visiteurs en clients fidèles."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Performances Extrêmes",
        description: "Un site lent fait fuir les clients. J'utilise Next.js pour garantir des temps de chargement instantanés et un score SEO parfait sur Google."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Fiabilité & Code Propre",
        description: "Votre application est le cœur de votre business. J'écris un code robuste, sécurisé et facile à maintenir pour que vous dormiez sur vos deux oreilles."
    }
];

export default function ValueProp() {
    return (
        <section className="py-24 px-8 md:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 tracking-tight"
                    >
                        Pourquoi me confier votre projet ?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-400"
                    >
                        Investir dans un développeur freelance ne devrait pas être un pari. Voici ce que vous gagnez concrètement en travaillant avec moi.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                            className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 mb-6">
                                {val.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{val.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{val.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
