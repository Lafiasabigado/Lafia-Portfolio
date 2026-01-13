import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGit, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiDjango, SiPrisma, SiTailwindcss, SiVuedotjs, SiPython, SiVercel } from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { id: 4, name: "React", icon: <FaReact className="text-cyan-500" /> },
    { id: 5, name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { id: 6, name: "Django", icon: <SiDjango className="text-green-500" /> },
    { id: 7, name: "VueJs", icon: <SiVuedotjs className="text-green-500 dark:text-white" /> },
    { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { id: 9, name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { id: 10, name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { id: 11, name: "Git", icon: <FaGit className="text-red-500" /> },
    { id: 12, name: "Python", icon: <SiPython className="text-blue-500 dark:text-white" /> },
    { id: 13, name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  ];

  return (
    <div className='py-16 border-t border-gray-100 dark:border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-[1fr_2fr] gap-12'>
          <h2 className='text-2xl font-medium tracking-tight text-gray-900 dark:text-white'>Compétences</h2>
          <div className='space-y-6'>
            <div className=''>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                J'aime apprendre de nouvelles choses et développer mes compétences. Actuellement, je maîtrise les technologies suivantes :
              </p>
            </div>
            <div className='flex flex-wrap gap-3'>
              {skills.map((skill, index) => (
                <div
                  key={skill.id}
                  className='flex items-center bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-full py-1.5 px-4 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500'
                >
                  <div className='text-lg'>
                    {skill.icon}
                  </div>
                  <span className='ml-2 text-sm font-medium text-gray-700 dark:text-gray-200'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills