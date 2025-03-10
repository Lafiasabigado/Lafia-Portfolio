import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github,ArrowUpRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'


const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Apex Football",
      image: "/projects/apexfootball.png",
      description: "Apex Football est une agence qui accompagne les joueurs de Football professionnelles dans leur carrière de footballeur.Cette agence aident lesdits joueurs à se faire repérer, à développer leur image et à booster leur carrière grâce à leur expertise et leur réseau de partenaires.",
      link: "https://apexfootball.vercel.app/",
      github: "https://github.com/Lafiasabigado/Apex-Foot.git",
      tools: "React,NextJs,Django",
      year: "2025"
    },
    {
        id: 2,
        name: "Ballamas",
        image: "/projects/ballamas.png",
        description: "Ballamas est une plateforme e-commerce moderne dédiée à la vente de vêtements. Grâce à une interface intuitive et une expérience utilisateur optimisée, les clients peuvent explorer une large gamme de tenues tendances, passer des commandes en toute simplicité et bénéficier d'un service client réactif.",
        link: "https://figma-to-code-ed2-week2-one.vercel.app/",
        github: "https://github.com/Lafiasabigado/Figma_to_code_ed2_week2.git",
        tools: "Vue.js,Bootstrap",
        year: "2024"
    },
    {
        id: 3,
        name: "Apex Food",
        image: "/projects/apex-food.png",
        description: "Apex Food est une plateforme intuitive pour découvrir et commander des repas délicieux. Elle dispose d'une interface conviviale, d'un suivi des commandes en temps réel et d'une gestion fluide des restaurants.",
        link: "https://apex-food.vercel.app/",
        github: "https://github.com/Lafiasabigado/Apex_food.git",
        tools: "Vue.js,Tailwind",
        year: "2024"
    },
    {
      id:4,
      name:"Travel Agency",
      image:"/projects/travel-agency.png",
      description:"Travel Agency est une application web qui permet aux utilisateurs de planifier leurs voyages en ligne, en offrant des options de billets d'avion, de hôtels et de voitures, avec des fonctionnalités de recherche et de réservation.",
      link:"https://travel-agency-psi-ashen.vercel.app/",
      github:"https://github.com/Lafiasabigado/Travel-Agency.git",
      tools:"React,Tailwind",
      year:"2025"
    }
]

  return (
    <div className='pt-20 w-full overflow-hidden'>
        <hr className='pt-5 text-zinc-700'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5'>
           <h2 className='text-2xl sm:text-4xl font-bold uppercase' data-aos="fade-right">Mes Projets</h2>
           <p className='dark:text-gray-300 py-2' data-aos="fade-up">
             Voici une sélection de projets qui démontrent ma passion pour le développement full-stack.
           </p>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className='items-center grid grid-cols-1 md:grid-cols-2 gap-6 py-16'
            >
              <div className='group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-2 shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    width={800} 
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
              <div className='space-y-4'>
                <h2 className='text-bold text-3xl text-gray-900 dark:text-white'>{project.name}</h2>
                <div className='bg-white dark:bg-gray-800/50 shadow-sm p-6 rounded-xl'>
                  <p className='text-gray-600 dark:text-gray-300'>{project.description}</p>
                </div>
                <div className='bg-white dark:bg-gray-800/50 shadow-sm p-6 rounded-xl space-y-4'>
                  <p className='text-xl font-semibold text-gray-900 dark:text-gray-300'>Informations du Projet</p>
                  <div className='flex justify-between items-center'>
                    <p className='text-gray-600 dark:text-gray-300'>Année</p>
                    <p className='text-gray-800 dark:text-gray-200'>{project.year}</p>
                  </div>
                  <hr className='border-gray-200 dark:border-gray-700'/>
                  <div className='flex justify-between items-center'>
                    <p className='text-gray-600 dark:text-gray-300'>Outils</p>
                    <p className='text-gray-800 dark:text-gray-200'>{project.tools}</p>
                  </div>
                </div>
                <div className='flex flex-wrap gap-4 pt-4 text-white dark:text-gray-100'>
                  <Link href={project.github} target='_blank'>
                    <Button className='bg-blue-500 hover:bg-blue-600 transition-colors duration-200 rounded-full'>
                      Voir sur Github
                      <Github className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                  <Link href={project.link} target='_blank'>
                    <Button className='bg-blue-500 hover:bg-blue-600 transition-colors duration-200 rounded-full'>
                      Démo en Direct
                      <ArrowUpRightIcon className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
export default Projects