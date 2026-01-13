import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className='group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700'>
        {/* Image Container */}
        <div className='relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800'>
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className='p-5'>
          <div className='flex justify-between items-start mb-2'>
            <h3 className='text-lg font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors'>
              {project.name}
            </h3>
            <span className='text-xs text-gray-500 font-mono'>{project.year}</span>
          </div>

          <p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4'>
            {project.description}
          </p>

          {/* Tools tags */}
          <div className='flex flex-wrap gap-2'>
            {project.tools.split(',').map((tool, index) => (
              <span
                key={index}
                className='text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md'
              >
                {tool.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard