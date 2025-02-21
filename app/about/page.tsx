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
    { id: 3, label: "Télécharger CV", icon: Download, link: link[0] },
    { id: 2, label: "LinkedIn", icon: Linkedin, link: link[1] },
    { id: 1, label: "Github", icon: Github, link: link[2] },
  ]

  return (
    <div className='pt-10'>
      <hr className='pt-20 text-zinc-700'/>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          <h1 className='text-3xl font-bold uppercase pb-4'>À Propos de Moi</h1>
          <div className='flex-col space-y-6'>
            <div className='bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl'>
              <p className='text-xl leading-relaxed'>
                Je suis un développeur passionné avec une expertise en développement web.
                Mon objectif est de créer des solutions numériques innovantes qui répondent aux besoins
                de mes clients.
              </p>
            </div>
            
            <div className='bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl'>
              <p className='leading-relaxed'>
                Salut ! Je suis un développeur full-stack de 20 ans originaire du Bénin, étudiant en informatique de gestion.
                Je porte une attention particulière aux détails et m'efforce toujours de livrer les meilleurs résultats.
              </p>
              <p className='mt-4'>
                La résolution de problèmes me passionne, et je suis toujours motivé pour apprendre de nouvelles choses.
                Quand je ne code pas, j'aime jouer au football et regarder des films et séries.
              </p>
              <p className='mt-4 text-blue-500 dark:text-blue-400'>
                N'hésitez pas à me contacter si vous souhaitez collaborer sur quelque chose d'intéressant !
              </p>
            </div>

            <div className='flex flex-wrap gap-4 pt-4'>
              {elements.map((element) => (
                <Link href={element.link} key={element.id}>
                  <Button className='bg-blue-500 hover:bg-blue-600 transition-colors duration-200 uppercase rounded-full'>
                    {element.label}
                    <element.icon className='h-4 w-4 ml-2' />
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