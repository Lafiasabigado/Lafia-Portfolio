"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Download } from 'lucide-react';
import { FaTelegram,FaGithub,FaLinkedin,FaTwitter,FaWhatsapp } from 'react-icons/fa'
import { useEffect } from "react";
import "aos/dist/aos.css";


const About = () => {

  const link = [
    "https://drive.google.com/file/d/1RWYI8TM3-R3ns8IMfZ1pwe4MeqeMdAcP/view?usp=sharing",
    "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
    "https://github.com/Lafiasabigado",
    "https://wa.me/22956259632"
  ]

   const elements = [
    { id: 4, label: "Télécharger CV", icon: Download, link: link[0] },
    { id: 3, label: "WhatsApp", icon: FaWhatsapp, link: link[3] },
    { id: 2, label: "LinkedIn", icon: FaLinkedin, link: link[1] },
    { id: 1, label: "Github", icon: FaGithub, link: link[2] },
  ]

  return (
    <div className='pt-10 pb-4'>
      <hr className='pt-20 text-zinc-700'/>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          <h1 className='text-3xl font-bold uppercase pb-4'>À Propos de Moi</h1>
          <div className='flex-col space-y-6'>
            <div data-aos="fade-up" data-aos-duration="1000" className='bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl'>
              <p className='text-xl leading-relaxed'>
                Je suis un développeur passionné avec une expertise en développement web.
                Mon objectif est de créer des solutions numériques innovantes qui répondent aux besoins
                de mes clients.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-duration="1000" className='bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl'>
              <p className='leading-relaxed'>
                Etudiant en informatique de gestion,
                Je porte une attention particulière aux détails et m'efforce toujours de livrer les meilleurs résultats.
              </p>
              <p className='mt-4'>
                La résolution de problèmes me passionne, et je suis toujours motivé pour apprendre de nouvelles choses.
                  En dehors des heures de code, j'aime jouer au football ou regarder des films et séries.
              </p>
              <p className='mt-4 text-blue-500 dark:text-blue-400'>
                N'hésitez pas à me contacter si vous souhaitez collaborer sur quelque chose d'intéressant !
              </p>
            </div>

            <div className='flex flex-wrap gap-4 pt-4 text-white dark:text-gray-100' data-aos="fade-left" data-aos-delay="100">
              {elements.map((element) => (
                <Link href={element.link} key={element.id}>
                  <Button className='bg-blue-500 hover:bg-blue-600 transition-colors duration-200 uppercase rounded-full'>
                    {element.label}
                    <element.icon className='text-3xl ml-2' />
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