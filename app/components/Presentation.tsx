"use client";

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const ChatBox = dynamic(() => import('./ChatBox'), {
  ssr: false,
  loading: () => <div className="text-center p-4">Chargement de Lafia AI...</div>
});

const Presentation = () => {
  const [showChat, setShowChat] = useState(false);
  const link = [
    "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
    "https://github.com/Lafiasabigado"
  ];

  return (
    <section className='w-full overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='gap-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-2 items-center pt-32'>
          <div className=''>
            <p className='uppercase text-2xl sm:text-4xl font-bold my-2 py-2'>
              <span className=''>Salut, je suis</span><br />
              <span className='pb-4'>Lafia Sabi Gado.</span>
            </p>
            <p className='dark:text-gray-300'>
              Développeur web full stack résidant au Bénin. Passionné par la création de sites web optimisés et modernes.
            </p>

            <div className='flex items-center space-x-4 pt-5'>
              <Link href={'/contact'}>
                <Button className='bg-blue-500 text-white hover:bg-blue-600 rounded-full'>
                  Me Contacter
                </Button>
              </Link>
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
              <Button
                onClick={() => setShowChat(!showChat)}
                className='bg-gray-800 text-white hover:bg-gray-700 rounded-full'
              >
                {showChat ? 'Fermer Lafia AI' : 'Causer avec Lafia AI'}
              </Button>
            </div>
          </div>

          <div className='pt-5 sm:pt-0'>
            <div className='w-full sm:w-[300px] h-full rounded-xl bg-gray-100 hover:bg-gray-50 dark:bg-gray-800/50 dark:hover:bg-gray-800 flex justify-center drop-shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out items-center'>
              <Image 
                src='/abdias.png' 
                alt='Lafia' 
                width={300} 
                height={400}
                className='rounded-xl' 
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Ajout de Suspense pour gérer le chargement */}
      <Suspense fallback={<div>Chargement...</div>}>
        {showChat && <ChatBox onClose={() => setShowChat(false)} />}
      </Suspense>
    </section>
  );
};

export default Presentation;