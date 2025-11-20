"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Download } from 'lucide-react';
import { FaTelegram, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
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
    <div className='py-16 border-t border-gray-100 dark:border-gray-800'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-[1fr_2fr] gap-12'>
          <h2 className='text-2xl font-medium tracking-tight text-gray-900 dark:text-white'>À Propos</h2>
          <div className='space-y-6'>
            <div className='text-gray-600 dark:text-gray-400 leading-relaxed space-y-4'>
              <p>
                Je suis un développeur passionné avec une expertise en développement web.
                Mon objectif est de créer des solutions numériques innovantes qui répondent aux besoins
                de mes clients.
              </p>
              <p>
                Etudiant en informatique de gestion,
                Je porte une attention particulière aux détails et m'efforce toujours de livrer les meilleurs résultats.
              </p>
              <p>
                La résolution de problèmes me passionne, et je suis toujours motivé pour apprendre de nouvelles choses.
                En dehors des heures de code, j'aime jouer au football ou regarder des films et séries.
              </p>
              <p className='text-gray-900 dark:text-white font-medium'>
                N'hésitez pas à me contacter si vous souhaitez collaborer sur quelque chose d'intéressant !
              </p>
            </div>

            <div className='flex flex-wrap gap-3 pt-2'>
              {elements.map((element) => (
                <Link href={element.link} key={element.id}>
                  <Button variant="outline" className='rounded-full text-xs h-9 px-4 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
                    {element.label}
                    <element.icon className='ml-2 h-3 w-3' />
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