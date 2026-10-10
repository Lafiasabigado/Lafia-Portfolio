import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { projects, getProjectBySlug } from '@/content/projects';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react';
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
    <article className="pt-28 md:pt-36 pb-24">
      <div className="container-custom">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{locale === 'en' ? 'All projects' : 'Tous les projets'}</span>
        </Link>

        {/* Header: Title & Subtitle */}
        <header className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white tracking-tight mb-4">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl text-muted font-normal leading-relaxed">
            {tagline}
          </p>
        </header>

        {/* Metadata bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-[22px] bg-bg-elevated border border-line mb-12">
          <div>
            <span className="block text-xs uppercase tracking-wider font-mono text-muted mb-1">
              {locale === 'en' ? 'Year' : 'Année'}
            </span>
            <span className="text-sm font-semibold text-white">{project.year}</span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-wider font-mono text-muted mb-1">
              {locale === 'en' ? 'Category' : 'Catégorie'}
            </span>
            <span className="text-sm font-semibold text-white">{project.category}</span>
          </div>

          <div className="col-span-2 md:col-span-2 flex flex-col justify-between">
            <span className="block text-xs uppercase tracking-wider font-mono text-muted mb-1.5">
              Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech} className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* External links: Demo & Repo */}
        {(project.links.demo || project.links.repo) && (
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-handwritten text-[22px] px-6 py-2.5 rounded-[18px] bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift transition-all inline-flex items-center gap-2"
              >
                <span>{locale === 'en' ? 'Live demo' : 'Démo en ligne'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-5 py-2.5 rounded-[18px] border border-line text-white hover:bg-white/[0.04] transition-all inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>{locale === 'en' ? 'Source code' : 'Code source'}</span>
              </a>
            )}
          </div>
        )}

        {/* Large Cover in Card */}
        {project.cover && (
          <div className="mb-16">
            <Card radius="xl" interactive={false} className="p-2.5">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 rounded-[26px]">
                <Image
                  src={project.cover}
                  alt={project.name}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className="object-cover object-top"
                />
              </div>
            </Card>
          </div>
        )}

        {/* Case Study Sections (only rendered if content is present) */}
        <div className="max-w-3xl space-y-16 mb-24">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-white mb-4">
              {locale === 'en' ? 'Overview' : 'Aperçu'}
            </h2>
            <p className="text-lg text-fg-soft leading-relaxed">{description}</p>
          </section>

          {/* Context */}
          {sections?.context && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                {locale === 'en' ? 'Context' : 'Contexte'}
              </h2>
              <p className="text-lg text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.context.en : sections.context.fr}
              </p>
            </section>
          )}

          {/* Problem */}
          {sections?.problem && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                {locale === 'en' ? 'Problem' : 'Problème'}
              </h2>
              <p className="text-lg text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.problem.en : sections.problem.fr}
              </p>
            </section>
          )}

          {/* Solution */}
          {sections?.solution && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                {locale === 'en' ? 'Solution' : 'Solution'}
              </h2>
              <p className="text-lg text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.solution.en : sections.solution.fr}
              </p>
            </section>
          )}

          {/* Features */}
          {sections?.features && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                {locale === 'en' ? 'Key Features' : 'Fonctionnalités clés'}
              </h2>
              <ul className="space-y-3">
                {(locale === 'en' ? sections.features.en : sections.features.fr).map(
                  (feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-fg-soft text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

          {/* Tech Choices */}
          {sections?.techChoices && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                {locale === 'en' ? 'Tech Stack & Architecture' : 'Stack et choix techniques'}
              </h2>
              <p className="text-lg text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.techChoices.en : sections.techChoices.fr}
              </p>
            </section>
          )}

          {/* Learnings */}
          {sections?.learnings && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                {locale === 'en' ? 'Learnings & Takeaways' : 'Ce que j’ai appris'}
              </h2>
              <p className="text-lg text-fg-soft leading-relaxed">
                {locale === 'en' ? sections.learnings.en : sections.learnings.fr}
              </p>
            </section>
          )}
        </div>

        {/* Footer Navigation: Next Project */}
        {nextProject && (
          <div className="pt-12 border-t border-line flex items-center justify-between">
            <span className="text-xs uppercase font-mono tracking-wider text-muted">
              {locale === 'en' ? 'Next project' : 'Projet suivant'}
            </span>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xl font-heading font-bold text-white hover:text-accent transition-colors group"
            >
              <span>{nextProject.name}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
