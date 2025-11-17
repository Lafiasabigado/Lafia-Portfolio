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
    <div className='min-h-screen pt-24 pb-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-16' data-aos="fade-up">
          <h1 className='text-3xl font-bold uppercase mb-6 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent'>
            Tous Mes Projets
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-xl max-w-3xl'>
            Découvrez l'ensemble de mes réalisations en développement web et applications full-stack. 
            Chaque projet reflète mon engagement pour la qualité et l'innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8' data-aos="fade-up">
          <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg'>
            <p className='text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>{projects.length}</p>
            <p className='text-gray-600 dark:text-gray-300'>Projets</p>
          </div>
          <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg'>
            <p className='text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2'>5+</p>
            <p className='text-gray-600 dark:text-gray-300'>Technologies</p>
          </div>
          <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg'>
            <p className='text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2'>5</p>
            <p className='text-gray-600 dark:text-gray-300'>ans d'expériences</p>
          </div>
          <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg'>
            <p className='text-4xl font-bold text-green-600 dark:text-green-400 mb-2'>100%</p>
            <p className='text-gray-600 dark:text-gray-300'>Passion</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage