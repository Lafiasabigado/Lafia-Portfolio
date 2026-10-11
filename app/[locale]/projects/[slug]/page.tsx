import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { projects, getProjectBySlug } from '@/content/projects';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  routing.locales.forEach((locale) => {
    projects.forEach((project) => {
      params.push({ locale, slug: project.slug });
    });
  });
  return params;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const tagline = locale === 'en' ? project.tagline_en : project.tagline;
  const description = locale === 'en' ? project.description_en : project.description;
  const sections = project.sections;

  return (
    <article className="pt-24 sm:pt-28 pb-24 relative">
      <div className="container-custom">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{locale === 'en' ? 'Back to all projects' : 'Retour aux projets'}</span>
          </Link>
        </div>

        {/* Category & Status Eyebrow */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider border border-line bg-white/[0.03] text-fg-soft">
            {project.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-line bg-white/[0.03] text-muted">
            {project.year}
          </span>
        </div>

        {/* Main Title & Tagline */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-3">
            {project.name}
            <span className="text-accent">.</span>
          </h1>
          <p className="text-base sm:text-lg text-fg-soft leading-relaxed max-w-2xl font-normal">
            {tagline}
          </p>
        </header>

        {/* Action Buttons: Live Demo & Source Code */}
        {(project.links.demo || project.links.repo) && (
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-handwritten text-lg px-6 py-2 rounded-full bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all inline-flex items-center gap-2"
              >
                <span>{locale === 'en' ? 'Live demo' : 'Démo en ligne'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full border border-line bg-white/[0.02] text-white hover:border-white/30 hover:bg-white/[0.06] transition-all inline-flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{locale === 'en' ? 'Source code' : 'Code source'}</span>
              </a>
            )}
          </div>
        )}

        {/* Featured Cover Card with DA Double-Ring */}
        {project.cover && (
          <div className="mb-12">
            <div className="p-1.5 bg-card-ring rounded-[22px] shadow-glow">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 rounded-[18px] border border-white/[0.04]">
                <Image
                  src={project.cover}
                  alt={project.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 760px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        )}

        {/* Technical Metadata Strip */}
        <div className="p-4 sm:p-5 rounded-[18px] bg-bg-elevated border border-line mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <span className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-1">
                {locale === 'en' ? 'Timeline' : 'Année'}
              </span>
              <span className="text-sm font-semibold text-white">{project.year}</span>
            </div>

            <div>
              <span className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-1">
                {locale === 'en' ? 'Domain' : 'Catégorie'}
              </span>
              <span className="text-sm font-semibold text-white">{project.category}</span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-1">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <Badge key={tech} className="text-[10px] py-0.5 px-1.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Editorial Content */}
        <div className="space-y-10 mb-16 max-w-2xl">
          {/* Overview Section */}
          <section className="space-y-2.5">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{locale === 'en' ? 'Project Overview' : 'Aperçu du projet'}</span>
            </h2>
            <p className="text-sm sm:text-base text-fg-soft leading-relaxed">
              {description}
            </p>
          </section>

          {/* Context */}
          {sections?.context && (
            <section className="space-y-2.5">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{locale === 'en' ? 'Context & Vision' : 'Contexte & Vision'}</span>
              </h2>
              <p className="text-sm sm:text-base text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.context.en : sections.context.fr}
              </p>
            </section>
          )}

          {/* Problem */}
          {sections?.problem && (
            <section className="space-y-2.5">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{locale === 'en' ? 'The Problem' : 'Le Problème'}</span>
              </h2>
              <p className="text-sm sm:text-base text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.problem.en : sections.problem.fr}
              </p>
            </section>
          )}

          {/* Solution */}
          {sections?.solution && (
            <section className="space-y-2.5">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{locale === 'en' ? 'The Solution' : 'La Solution'}</span>
              </h2>
              <p className="text-sm sm:text-base text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.solution.en : sections.solution.fr}
              </p>
            </section>
          )}

          {/* Features */}
          {sections?.features && (
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{locale === 'en' ? 'Key Features' : 'Fonctionnalités clés'}</span>
              </h2>
              <ul className="grid grid-cols-1 gap-2.5 pt-1">
                {(locale === 'en' ? sections.features.en : sections.features.fr).map(
                  (feature, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-[12px] bg-bg-elevated border border-line/60 flex items-start gap-2.5 text-xs sm:text-sm text-fg-soft"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

          {/* Tech Choices */}
          {sections?.techChoices && (
            <section className="space-y-2.5">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{locale === 'en' ? 'Architecture & Technical Choices' : 'Architecture & Choix Techniques'}</span>
              </h2>
              <p className="text-sm sm:text-base text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.techChoices.en : sections.techChoices.fr}
              </p>
            </section>
          )}

          {/* Learnings */}
          {sections?.learnings && (
            <section className="space-y-2.5">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{locale === 'en' ? 'Takeaways' : 'Enseignements'}</span>
              </h2>
              <p className="text-sm sm:text-base text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.learnings.en : sections.learnings.fr}
              </p>
            </section>
          )}
        </div>

        {/* Footer Navigation: Next Project Card */}
        {nextProject && (
          <div className="pt-8 border-t border-line">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase font-mono tracking-wider text-muted">
                {locale === 'en' ? 'Next Project' : 'Projet Suivant'}
              </span>
              <span className="text-xs font-mono text-muted">
                {nextProject.year}
              </span>
            </div>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group block p-4 sm:p-5 rounded-[18px] bg-bg-elevated border border-line hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {nextProject.name}
                  </h3>
                  <p className="text-xs font-mono text-muted mt-1">
                    {locale === 'en' ? nextProject.tagline_en : nextProject.tagline}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
