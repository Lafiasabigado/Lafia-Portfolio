"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Download } from 'lucide-react';
import { Github,Linkedin } from 'lucide-react'
import { useEffect } from "react";
import "aos/dist/aos.css";


const About = () => {

  const link = [
    "https://drive.google.com/file/d/1RWYI8TM3-R3ns8IMfZ1pwe4MeqeMdAcP/view?usp=sharing",
    "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
    "https://github.com/Lafiasabigado",
  ]

   const elements = [
    { id: 3, label: "Download Resume", icon: Download, link: link[0] },
    { id: 2, label: "Linkdin", icon: Linkedin, link: link[1] },
    { id: 1, label: "Github", icon: Github, link: link[2] },
  ]

  return (
    <div className='pt-10'>
        <hr className='pt-20 text-zinc-700'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4'>
          <div className='grid md:grid-cols-2 '>
          <h1 className='text-3xl font-bold uppercase pb-4 sm:pb-0'>About Me</h1>
          <div className='flex-col'>
            <p className='text-2xl font-semibold'>
             I am a full-stack developer based in Benin. 
            </p>
            <p className='py-4'>
              Hi there! I’m a 20-year-old full-stack developer from Benin, studying management IT.
              I pay close attention to details and always try to deliver the best results. Solving problems excites me, and I’m always motivated to learn new things.
              When I’m not coding, I enjoy playing football, and catching up on movies and TV shows.
              Feel free to reach out if you’d like to collaborate on something great!
            </p>
              <div className='sm:flex grid grid-cols-1 items-center justify-start py-2 sm:space-x-4'>
              {elements.map((element) => (
                <Link href={element.link} key={element.id} className='py-2'>
                  <Button className='bg-blue-400  uppercase border rounded-full'>
                    {element.label}
                    <element.icon className='h-4 w-4 ml-1' />
                  </Button>
                </Link>
            ))}
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About