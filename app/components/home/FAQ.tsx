'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: "Combien de temps faut-il pour créer un site web ou une application ?",
        a: "Cela dépend de la complexité de votre projet. Un site vitrine ou portfolio classique prend généralement 2 à 4 semaines. Pour une application web sur-mesure ou un SaaS, comptez entre 1 et 3 mois. Je fournis toujours un calendrier détaillé après notre premier appel."
    },
    {
        q: "Quels sont vos tarifs ?",
        a: "Chaque projet est unique. Plutôt que d'avoir des prix fixes, j'étudie vos besoins précis pour vous proposer un devis personnalisé. Mes tarifs reflètent la qualité, la performance et l'attention aux détails que j'apporte à chaque création. Contactez-moi pour en discuter !"
    },
    {
        q: "Faites-vous uniquement du développement ou aussi du design ?",
        a: "Les deux ! J'interviens sur tout le cycle de vie du produit : de la recherche UX et la conception UI sur Figma, jusqu'au développement Front-end et Back-end. Vous avez ainsi un interlocuteur unique pour tout votre projet."
    },
    {
        q: "Serais-je propriétaire de mon code source ?",
        a: "Absolument. Une fois le projet terminé et la facture finale réglée, l'intégralité du code source et de la propriété intellectuelle vous est transférée. Je peux même vous accompagner pour le déploiement sur vos propres serveurs."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-8 md:px-12 bg-background border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 tracking-tight"
                    >
                        Questions Fréquentes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-400"
                    >
                        Tout ce que vous devez savoir avant que nous commencions à travailler ensemble.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-white/10 rounded-2xl bg-neutral-900/50 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                                <ChevronDown 
                                    className={`w-6 h-6 text-neutral-500 transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180 text-white' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
