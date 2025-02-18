import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { link } from 'fs'

const Projects = () => {
  const projects = [
    {
        id: 1,
        name: "Ballamas",
        image: "/ballamas.png",
        description: "Ballamas is a dynamic web application designed for managing sports tournaments efficiently. It allows users to create, organize, and track competitions with real-time updates and rankings.",
        link: "https://figma-to-code-ed2-week2-one.vercel.app/",
        github: "https://github.com/Lafiasabigado/Figma_to_code_ed2_week2.git",
        tools: "Vue.js, Tailwind CSS, Firebase",
        year: "2024"
    },
    {
        id: 2,
        name: "Apex Food",
        image: "/apex-food.png",
        description: "Apex Food is an intuitive platform for discovering and ordering delicious meals. It features a user-friendly interface, real-time order tracking, and seamless restaurant management.",
        link: "https://apex-food.vercel.app/",
        github: "https://github.com/Lafiasabigado/Apex_food.git",
        tools: "Vue.js, Django, PostgreSQL",
        year: "2024"
    },
    {
        id: 3,
        name: "Footplayers API",
        image: "/footplayers-api.png",
        description: "Footplayers API is a RESTful service providing detailed information on professional football players, including stats, teams, and career history, making it ideal for sports applications and analysis.",
        link: "https://foot-api-0gcy.onrender.com/",
        github: "https://github.com/Lafiasabigado/Foot-Api.git",
        tools: "Django REST Framework, PostgreSQL, Redis",
        year: "2024"
    }
]

  return (
    <div className='pt-20'>
        <hr className='pt-5 text-zinc-700'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5'>
           <h2 className='text-4xl font-bold uppercase'> Featured Projects</h2>
           <p className='dark:text-gray-300 py-2'>Here are some of the selected projects that showcase my passion for full-stack development.</p>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5'>
        {projects.map((project) => (
          <div key={project.id} className='items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                <div className='my-4'>
                  <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={700} 
                  height={700}
                  className='rounded-md transition-transform duration-300 ease-in-out hover:scale-105'
                   />
                </div>
                 <div className=''>
                    <h2 className='text-bold text-3xl'>{project.name}</h2>
                    <p className='dark:text-gray-300 py-2'>{project.description}</p>
                    <p className='text-2xl font-semibold dark:text-gray-300 py-2'>Project Infos</p>
                    
                 </div>
              </div>
        ))}
        </div>
    </div>
  )
}
export default Projects