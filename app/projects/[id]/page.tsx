import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Github, ArrowUpRightIcon, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { JSX } from 'react'
import { getProjectById, projects } from '@/lib/projects'

export type ParamsType = { id: string };

// Cette fonction génère les routes statiques
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  return projects.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ParamsType>
}): Promise<Metadata> {
  const { id } = await params
  const projectId = Number.parseInt(id, 10)
  const project = getProjectById(projectId)

  if (!project) {
    return {
      title: 'Projet introuvable',
      robots: { index: false, follow: false },
    }
  }

  const title = `${project.name} — Projet`
  const description = (project.fullDescription ?? project.description).slice(0, 160)

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: project.image,
          alt: project.name,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.image],
    },
  }
}

const ProjectDetail = async ({ params }: { params: Promise<ParamsType> }): Promise<JSX.Element> => {
  const { id } = await params
  const projectId = Number.parseInt(id, 10)
  const project = getProjectById(projectId)

  if (!project) {
    return <div className='min-h-screen flex items-center justify-center'>
      <p>Projet non trouvé</p>
    </div>
  }

  return (
    <div className='min-h-screen py-24'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className='mr-2 h-4 w-4' />
          Retour aux projets
        </Link>

        {/* Hero Image */}
        <div
          className="relative rounded-xl overflow-hidden mb-10 aspect-video bg-gray-100 dark:bg-gray-800"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className='grid md:grid-cols-[2fr_1fr] gap-12'>
          {/* Main Content */}
          <div className='space-y-10'>
            <div>
              <h1 className="text-3xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white">
                {project.name}
              </h1>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed text-lg'>
                {project.fullDescription ?? project.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className='text-xl font-medium mb-4 text-gray-900 dark:text-white'>
                Fonctionnalités principales
              </h2>
              <ul className='space-y-3'>
                {project.features?.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-start text-gray-600 dark:text-gray-400'
                  >
                    <span className='mr-3 mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0' />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            {/* Project Info */}
            <div>
              <h3 className='text-sm font-medium uppercase tracking-wider text-gray-500 mb-4'>
                Informations
              </h3>

              <div className='space-y-6'>
                <div>
                  <p className='text-xs text-gray-500 mb-1'>Année</p>
                  <p className='text-gray-900 dark:text-white font-medium'>{project.year}</p>
                </div>

                <div>
                  <p className='text-xs text-gray-500 mb-2'>Technologies</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tools.split(',').map((tool, index) => (
                      <span
                        key={index}
                        className='px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md text-xs'
                      >
                        {tool.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='space-y-3 mt-8'>
                <Link href={project.link} target='_blank' className='block'>
                  <Button className='w-full bg-black dark:bg-white text-white dark:text-black hover:opacity-80 rounded-full h-11 transition-opacity'>
                    Démo en Direct
                    <ArrowUpRightIcon className='ml-2 h-4 w-4' />
                  </Button>
                </Link>

                <Link href={project.github} target='_blank' className='block'>
                  <Button
                    variant="outline"
                    className='w-full rounded-full h-11 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  >
                    Voir sur Github
                    <Github className='ml-2 h-4 w-4' />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail