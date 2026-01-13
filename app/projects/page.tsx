import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '@/lib/projects'

const ProjectsPage = () => {
  return (
    <div className='min-h-screen py-24'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12'>
          <h1 className='text-2xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white'>
            Tous les Projets
          </h1>
          <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
            Découvrez l'ensemble de mes réalisations en développement web et applications full-stack.
            Chaque projet reflète mon engagement pour la qualité et l'innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <div
              key={project.id}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className='mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <p className='text-3xl font-medium text-gray-900 dark:text-white mb-1'>{projects.length}</p>
            <p className='text-sm text-gray-500'>Projets</p>
          </div>
          <div className='text-center'>
            <p className='text-3xl font-medium text-gray-900 dark:text-white mb-1'>5+</p>
            <p className='text-sm text-gray-500'>Technologies</p>
          </div>
          <div className='text-center'>
            <p className='text-3xl font-medium text-gray-900 dark:text-white mb-1'>5</p>
            <p className='text-sm text-gray-500'>Ans d'expérience</p>
          </div>
          <div className='text-center'>
            <p className='text-3xl font-medium text-gray-900 dark:text-white mb-1'>100%</p>
            <p className='text-sm text-gray-500'>Passion</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage