"use client";

import React, { useState, Suspense, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Bot } from 'lucide-react';

const ChatBox = dynamic(() => import('./ChatBox'), {
  ssr: false,
  loading: () => <div className="text-center p-4">Chargement de Lafia AI...</div>
});

const Presentation = () => {
  const [showChat, setShowChat] = useState(false);
  const [isBotBlinking, setIsBotBlinking] = useState(false);
  const link = [
    "https://linkedin.com/in/lafia-sabi-gado-03910a292/",
    "https://github.com/Lafiasabigado"
  ];

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBotBlinking(true);
      setTimeout(() => setIsBotBlinking(false), 300);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className='w-full overflow-hidden relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='gap-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-2 items-center pt-32'>
          <div className=''>
            <p className='uppercase text-2xl sm:text-4xl font-bold my-2 py-2'>
              <span className=''>Salut, je suis</span><br />
              <span className='pb-4'>Lafia Sabi Gado.</span>
            </p>
            <p className='dark:text-gray-300'>
              Développeur web full stack résidant au Bénin, passionné par l'Intelligence Artificielle.
            </p>

            <div className='flex flex-wrap items-center gap-4 pt-5'>
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
            </div>
          </div>

          <div className='pt-5 sm:pt-0'>
            <div className='w-full sm:w-[300px] h-full rounded-xl bg-transparent hover:bg-transparent flex justify-center drop-shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out items-center'>              <Image 
                src='/lafiapro.png' 
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

      {/* Sticker robot animé */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <Bot
            size={36}
            className={`text-blue-500 transition-opacity duration-300 ${isBotBlinking ? 'opacity-40' : 'opacity-100'}`}
          />
        </button>
        <div className="mt-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
          Causer avec Lafia AI
        </div>
      </div>

      {/* Boîte de chat */}
      <Suspense fallback={<div className="text-center p-4">Initialisation de Lafia AI...</div>}>
        {showChat && <ChatBox onClose={() => setShowChat(false)} />}
      </Suspense>
    </section>
  );
};

export default Presentation;
