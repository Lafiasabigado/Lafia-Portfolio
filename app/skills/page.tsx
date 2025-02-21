import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGit, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiDjango, SiPrisma, SiTailwindcss, SiVuedotjs, SiPython, SiVercel } from "react-icons/si";

const Skills = () => {
    const skills = [
        { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { id: 4, name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { id: 5, name: "React", icon: <FaReact className="text-cyan-500" /> },
        { id: 6, name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { id: 7, name: "Django", icon: <SiDjango className="text-green-500" /> },
        { id: 8, name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { id: 9, name: "VueJs", icon: <SiVuedotjs className="text-green-500 dark:text-white" /> },
        { id: 10, name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
        { id: 11, name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { id: 12, name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        { id: 13, name: "Git", icon: <FaGit className="text-red-500" /> },
        { id: 14, name: "Python", icon: <SiPython className="text-blue-500 dark:text-white" /> },
        { id: 15, name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
    ];
      
  return (
    <div className='pt-10'>
        <hr className='pt-20 text-zinc-700'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-2 gap-8'>
               <h2 className='text-3xl font-bold uppercase pb-4' data-aos="fade-right">Mes Compétences</h2>
               <div className='flex-col space-y-6'>
                  <div className='bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl' data-aos="fade-up">
                    <p className='dark:text-gray-300 leading-relaxed'>
                      J'aime apprendre de nouvelles choses et développer mes compétences. Actuellement, je maîtrise les technologies suivantes :
                    </p>
                  </div>
                  <div className='flex flex-wrap gap-4' data-aos="fade-up" data-aos-delay="100">
                    {skills.map((skill, index) => (
                      <div 
                        key={skill.id} 
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className='flex items-center border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110'
                      >
                          {skill.icon}
                          <span className='ml-2'>{skill.name}</span>
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