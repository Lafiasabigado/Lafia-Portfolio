'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github, Calendar, Layers } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import GlassCard from '../../components/ui/GlassCard';
import MagneticButton from '../../components/ui/MagneticButton';
import { projects } from '@/lib/projects';

export default function ProjectDetail() {
  const params = useParams();
  const id = Number(params.id);
  const project = projects.find(p => p.id === id);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center text-muted-foreground">
      Project not found
    </div>
  );

  const stack = project.tools ? project.tools.split(',').map(t => t.trim()) : [];

  return (
    <div ref={containerRef} className="min-h-screen relative selection:bg-neon-green/30">

      {/* Hero Section */}
      <section className="h-[70vh] relative overflow-hidden flex items-end pb-20">
        <motion.div
          {...({
            className: "absolute inset-0 z-0",
            initial: { scale: 1.1 },
            animate: { scale: 1 },
            transition: { duration: 1.5, ease: "easeOut" }
          } as any)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
          <div
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </motion.div>

        <div className="relative z-20 max-w-3xl mx-auto px-6 w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Projects
          </Link>

          <motion.div
            {...({
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2 }
            } as any)}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold mb-6">{project.name}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 pb-32">

        {/* Main Info */}
        <div className="space-y-12">
          <motion.div
            {...({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-xl sm:text-2xl leading-relaxed text-muted-foreground"
            } as any)}
          >
            {project.fullDescription || project.description}
          </motion.div>

          {/* Features List as a substitute for Gallery for now */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features?.map((feature: string, idx: number) => (
                <GlassCard key={idx} className="p-4 bg-white/5 border-white/5">
                  <span className="text-electric-blue mr-2">•</span> {feature}
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <motion.div
          style={{ y } as any}
          className="lg:sticky lg:top-32 h-fit space-y-8"
        >
          <GlassCard className="p-8 space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Calendar size={16} /> Year
              </h3>
              <p className="text-xl font-medium">{project.year}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Layers size={16} /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <MagneticButton>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-colors">
                  Live Demo <ArrowUpRight size={20} />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-colors">
                  View Github <Github size={20} />
                </a>
              </MagneticButton>
            </div>
          </GlassCard>
        </motion.div>

      </article>

    </div>
  );
}