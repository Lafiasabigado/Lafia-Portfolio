import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'

interface ProjectCardProps {
  project: {
    id: number
    name: string
    image: string
    description: string
    tools: string
    year: string
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className='group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 h-full'>
        {/* Image Container */}
        <div className='relative aspect-[16/10] overflow-hidden'>
          <Image 
            src={project.image} 
            alt={project.name} 
            width={800} 
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
          
          {/* Year badge */}
          <div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
            {project.year}
          </div>

          {/* Hover icon */}
          <div className='absolute bottom-4 right-4 bg-white dark:bg-gray-900 rounded-full p-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500'>
            <ArrowUpRightIcon className='h-5 w-5 text-blue-500' />
          </div>
        </div>

        {/* Content */}
        <div className='p-6 space-y-3'>
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300'>
            {project.name}
          </h3>
          
          <p className='text-gray-600 dark:text-gray-300 line-clamp-2 text-sm leading-relaxed'>
            {project.description}
          </p>

          {/* Tools tags */}
          <div className='flex flex-wrap gap-2 pt-2'>
            {project.tools.split(',').map((tool, index) => (
              <span 
                key={index}
                className='px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium'
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