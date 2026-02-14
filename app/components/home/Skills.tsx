'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const skills = [
    { name: "Next.js", level: "Expert", color: "text-white", bg: "bg-black" },
    { name: "React", level: "Expert", color: "text-blue-400", bg: "bg-blue-900/20" },
    { name: "TypeScript", level: "Expert", color: "text-blue-600", bg: "bg-blue-900/20" },
    { name: "Tailwind CSS", level: "Expert", color: "text-cyan-400", bg: "bg-cyan-900/20" },
    { name: "Node.js", level: "Advanced", color: "text-green-500", bg: "bg-green-900/20" },
    { name: "PostgreSQL", level: "Advanced", color: "text-blue-300", bg: "bg-blue-900/20" },
    { name: "Framer Motion", level: "Advanced", color: "text-purple-500", bg: "bg-purple-900/20" },
    { name: "Three.js", level: "Intermediate", color: "text-white", bg: "bg-black" },
    { name: "Docker", level: "Intermediate", color: "text-blue-500", bg: "bg-blue-900/20" },
    { name: "AWS", level: "Intermediate", color: "text-orange-500", bg: "bg-orange-900/20" },
    { name: "Figma", level: "Advanced", color: "text-pink-500", bg: "bg-pink-900/20" },
    { name: "Git", level: "Expert", color: "text-red-500", bg: "bg-red-900/20" },
    { name: "Python", level: "Advanced", color: "text-yellow-500", bg: "bg-yellow-900/20" },
    { name: "Django", level: "Advanced", color: "text-green-500", bg: "bg-green-900/20" },
];

export default function Skills() {
    return (
        <section className="max-w-3xl mx-auto px-6 py-20">
            <motion.div
                {...({
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    className: "text-center mb-16"
                } as any)}
            >
                <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Technical Arsenal</h2>
                <p className="text-muted-foreground text-lg">The tools I use to bring ideas to life.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
}

function SkillCard({ skill, index }: { skill: any, index: number }) {
    return (
        <motion.div
            {...({
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: index * 0.05 },
                className: "h-[120px]"
            } as any)}
        >
            <GlassCard className="w-full h-full flex flex-col items-center justify-center gap-2 hover:border-electric-blue/50 transition-colors group">
                <span className={`text-3xl font-bold ${skill.color} group-hover:scale-110 transition-transform`}>{skill.name.slice(0, 2)}</span>
                <span className="font-medium text-sm">{skill.name}</span>
            </GlassCard>
        </motion.div>
    );
}
