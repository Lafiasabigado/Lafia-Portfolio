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
        <p 
        className='uppercase text-2xl sm:text-4xl font-bold my-2 py-2'>
          <span className=''>Salut,  je suis</span><br />
          <span className='pb-4'>Lafia Sabi Gado.</span>
        </p>
        <p className='dark:text-gray-300'>
          Développeur Full Stack résidant au Bénin, passionné par la création de sites web accessibles et conviviaux.
        </p>
        <div data-aos="fade-right"
           data-aos-delay="100"
           className='flex items-center space-x-4 pt-5'>
           <Button
           className='bg-blue-500 border rounded-full'
           >Me Contacter
           </Button>
           <div className='text-blue-500'>
            <Link href={link[0]}>
              <Linkedin />
            </Link>
           </div>
           <div className='text-blue-500'>
             <Link href={link[1]}>
               <Github />
             </Link>
           </div>
        </div>
      </div>
      <div className='pt-5 sm:pt-0'>
        <div 
         className='w-full sm:w-[300px] h-full hover:bg-zinc-800 rounded-xl flex justify-center drop-shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out items-center bg-bgdarkPrimary'>
          <Image 
          src='/logo1.png' 
          alt='Lafia' 
          width={300} 
          height={400}
          className='rounded-xl' 
          />
        </div>
      </div> 
    </div>
  )
}

export default Presentation