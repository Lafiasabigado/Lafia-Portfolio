import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectCard from './ProjectCard'
import { ArrowDownIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

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
      name: "BrainWritor",
      image: "/projects/brainwritor.png",
      description: "Assistant rédactionnel IA",
      link: "https://brainwritor.vercel.app/",
      github: "https://github.com/Lafiasabigado/BrainWritor.git",
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

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setHidden(true);
      else setHidden(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className='w-full overflow-hidden py-4 md:py-6 lg:py-8'>
      <ArrowDownIcon
        className={`w-12 h-12 mx-auto mb-12 transition-opacity duration-500 ${
          hidden ? "opacity-0" : "opacity-100 animate-bounce"
        }`}
      />
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12' data-aos="fade-up">
          <h2 className='text-2xl font-medium tracking-tight mb-2 text-gray-900 dark:text-white'>
            Projets Sélectionnés
          </h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Quelques réalisations récentes.
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
        <div className='mt-12' data-aos="fade-up" data-aos-delay="400">
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