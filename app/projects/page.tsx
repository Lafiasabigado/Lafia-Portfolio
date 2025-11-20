import React from 'react'
import ProjectCard from '../components/ProjectCard'

const ProjectsPage = () => {
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
      description: "Apex Football est une agence qui accompagne les joueurs de Football professionnels dans leur carrière de footballeur. Cette agence aide lesdit joueurs à se faire repérer, à développer leur image et à booster leur carrière grâce à leur expertise et leur réseau de partenaires.",
      link: "https://apexfootball.vercel.app/",
      github: "https://github.com/Lafiasabigado/Apex-Foot.git",
      tools: "React,NextJs,Django",
      year: "2025"
    },
    {
      id: 4,
      name: "Ballamas",
      image: "/projects/ballamas.png",
      description: "Ballamas est une plateforme e-commerce moderne dédiée à la vente de vêtements. Grâce à une interface intuitive et une expérience utilisateur optimisée, les clients peuvent explorer une large gamme de tenues tendances.",
      link: "https://figma-to-code-ed2-week2-one.vercel.app/",
      github: "https://github.com/Lafiasabigado/Figma_to_code_ed2_week2.git",
      tools: "Vue.js,Bootstrap",
      year: "2024"
    },
    {
      id: 5,
      name: "Apex Food",
      image: "/projects/apex-food.png",
      description: "Apex Food est une plateforme intuitive pour découvrir et commander des repas délicieux. Elle dispose d'une interface conviviale, d'un suivi des commandes en temps réel et d'une gestion fluide des restaurants.",
      link: "https://apex-food.vercel.app/",
      github: "https://github.com/Lafiasabigado/Apex_food.git",
      tools: "Vue.js,Tailwind",
      year: "2024"
    },
    {
      id: 6,
      name: "Travel Agency",
      image: "/projects/travel-agency.png",
      description: "Travel Agency est une application web qui permet aux utilisateurs de planifier leurs voyages en ligne, en offrant des options de billets d'avion, de hôtels et de voitures.",
      link: "https://travel-agency-psi-ashen.vercel.app/",
      github: "https://github.com/Lafiasabigado/Travel-Agency.git",
      tools: "React,Tailwind",
      year: "2025"
    }
  ]

  return (
    <div className='min-h-screen py-24'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12' data-aos="fade-up">
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
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className='mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-8' data-aos="fade-up">
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