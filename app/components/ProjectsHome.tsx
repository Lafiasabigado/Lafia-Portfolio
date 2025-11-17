import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectCard from './ProjectCard'

const ProjectsHome = () => {
  const projects = [
    {
      id: 0,
      name: "Doczi",
      image: "/projects/doczi.png",
      description: "Générateur de documents administratifs Intelligents",
      link: "https://doczi.vercel.app/",
      github: "https://github.com/Lafiasabigado/Doczi.git",
      tools: "React,NextJs,Prisma",
      year: "2025"
    },
    {
      id: 1,
      name: "Freelanceprop",
      image: "/projects/freelanceprop.png",
      description: "Générateur IA de devis pour freelances",
      link: "https://freelanceprop.vercel.app/",
      github: "https://github.com/Lafiasabigado/Freelanceprop.git",
      tools: "React,NextJs",
      year: "2025"
    },
    {
      id: 2,
      name: "Foothub",
      image: "/projects/foothubcommunity.png",
      description: "FootHub est une plateforme sociale dédiée aux passionnés de football. Elle permet de suivre l'actualité des matchs, de publier du contenu, de suivre d'autres utilisateurs etc.",
      link: "https://foothubcommunity.vercel.app/",
      github: "https://github.com/Lafiasabigado/Foothub.git",
      tools: "React,NextJs,Django",
      year: "2025"
    },
    {
      id: 3,
      name: "Apex Football",
      image: "/projects/apexfootball.png",
      description: "Apex Football est une agence qui accompagne les joueurs de Football professionnels dans leur carrière de footballeur.",
      link: "https://apexfootball.vercel.app/",
      github: "https://github.com/Lafiasabigado/Apex-Foot.git",
      tools: "React,NextJs,Django",
      year: "2025"
    }
  ]

  return (
    <div className='pt-20 w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <div className='mb-16 text-center' data-aos="fade-up">
          <h2 className='text-4xl font-bold uppercase mb-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent'>
            Mes Projets
          </h2>
          <p className='text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto'>
            Une sélection de projets qui démontrent ma passion pour le développement full-stack
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className='flex justify-center' data-aos="fade-up" data-aos-delay="400">
          <Link href="/projects">
            <Button 
              size="lg"
              className='bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group'
            >
              Voir Plus de Projets
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsHome