import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  return (
    <div className='gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-2 items-center pt-5'>
      <div className=''>
         <p 
         className='uppercase text-5xl font-bold my-2 py-2'>
          <span className=''>hi, i am</span><br />
          <span className='pb-4'>Lafia Sabi Gado.</span>
         </p>
         <p className='text-gray-300'>
          A Benin based full-stack developer passionate about building accessible and user friendly websites.
         </p>
         <div className='flex items-center space-x-4 pt-5'>
            <Button className='bg-blue-400 border rounded-full'>Contact Me</Button>
            <div className='text-blue-400'>
             <Link href={"https://linkedin.com/in/lafia-sabi-gado-03910a292/"}>
               <Linkedin />
             </Link>
            </div>
            <div className='text-blue-400'>
              <Link href={"https://github.com/LafiaSabiGado"}>
                <Github />
              </Link>
            </div>
         </div>
      </div>
      <div className='rounded-xl flex justify-center items-center w-full h-full border' style={{backgroundColor:"#C7C7C7"}}>
        <Image 
        src='/logo1.png' 
        alt='Lafia' 
        width={500} 
        height={500}
        className='' 
        />
      </div>
    </div>
  )
}

export default About