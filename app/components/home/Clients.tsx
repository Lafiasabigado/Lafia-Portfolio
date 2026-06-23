'use client';

import { motion } from 'framer-motion';

const clients = [
    "Adtechgroup",
    "AIC Bénin",
    "Tikonna",
    "Apex Football",
    "Afriglot",
    "Kamischool",
];

export default function Clients() {
    return (
        <section className="py-12 border-y border-white/5 bg-background">
            <div className="max-w-6xl mx-auto px-8 md:px-12">
                <p className="text-center text-sm font-medium text-neutral-500 uppercase tracking-widest mb-8">
                    Ils m'ont fait confiance pour leur croissance numérique
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl md:text-2xl font-display font-bold text-white tracking-tight"
                        >
                            {client}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
