"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Presentation = () => {
  const link = [
    "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
    "https://github.com/Lafiasabigado"
  ]
  return (
    <div className='gap-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-2 items-center pt-32'>
      <div className=''>
        <p className='uppercase text-2xl sm:text-4xl font-bold my-2 py-2 text-gray-900 dark:text-white'>
          <span className=''>Salut, je suis</span><br />
          <span className='pb-4'>Lafia Sabi Gado.</span>
        </p>
        <p className='text-gray-600 dark:text-gray-300'>
          Développeur Full Stack résidant au Bénin, passionné par la création de sites web accessibles et conviviaux.
        </p>
        <div data-aos="fade-right"
           data-aos-delay="100"
           className='flex items-center space-x-4 pt-5'>
           <Button
           className='bg-blue-500 hover:bg-blue-600 text-white border-none rounded-full transition-all duration-200'>
           Me Contacter
           </Button>
           <div className='flex gap-4'>
             {[
               { icon: <Linkedin className="h-6 w-6" />, link: link[0] },
               { icon: <Github className="h-6 w-6" />, link: link[1] }
             ].map((social, index) => (
               <Link 
                 key={index} 
                 href={social.link}
                 className='text-blue-500 hover:text-blue-600 transition-colors duration-200'
                 target="_blank"
               >
                 {social.icon}
               </Link>
             ))}
           </div>
        </div>
      </div>
      <div className='pt-5 sm:pt-0'>
        <div 
         className='w-full sm:w-[300px] h-full bg-gradient-to-br from-blue-100 to-blue-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-xl flex justify-center items-center shadow-lg hover:scale-105 transition-all duration-300'>
          <Image 
          src='/logo1.png' 
          alt='Lafia' 
          width={300} 
          height={400}
          className='rounded-xl p-4' 
          priority
          />
        </div>
      </div> 
    </div>
  )
}

export default Presentation