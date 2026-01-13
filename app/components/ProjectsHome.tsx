import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { featuredProjects } from '@/lib/projects'

const ProjectsHome = () => {
  return (
    <div className='w-full overflow-hidden py-16 border-t border-gray-100 dark:border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-2xl font-medium tracking-tight mb-2 text-gray-900 dark:text-white'>
            Projets Sélectionnés
          </h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Quelques réalisations récentes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className='mt-12'>
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
            Voir tous les projets
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsHome