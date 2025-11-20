"use client";

import React, { useState, Suspense, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaTelegram, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
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
    "https://github.com/Lafiasabigado",
    "https://wa.me/22956259632"
  ];

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBotBlinking(true);
      setTimeout(() => setIsBotBlinking(false), 300);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className='w-full overflow-hidden relative pt-20 pb-10'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-[1fr_auto] gap-8 items-center'>
          <div className='order-2 md:order-1'>
            <h1 className='font-medium text-3xl sm:text-4xl tracking-tight mb-4 text-gray-900 dark:text-white'>
              Lafia Sabi Gado
            </h1>
            <p className='text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              Développeur web full stack résidant au Bénin, passionné par l'Intelligence Artificielle. Je conçois des expériences numériques minimalistes et performantes.
            </p>

            <div className='flex flex-wrap items-center gap-4'>
              <Link href={'/contact'}>
                <Button className='bg-black dark:bg-white text-white dark:text-black hover:opacity-80 rounded-full px-6 transition-opacity'>
                  Me Contacter
                </Button>
              </Link>
              <div className='flex gap-4 text-gray-500'>
                <Link href={link[0]} className="hover:text-black dark:hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </Link>
                <Link href={link[1]} className="hover:text-black dark:hover:text-white transition-colors">
                  <FaGithub size={20} />
                </Link>
                <Link href={link[2]} className="hover:text-black dark:hover:text-white transition-colors">
                  <FaWhatsapp size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className='order-1 md:order-2 flex justify-center md:justify-end'>
            <div className='relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800'>
              <Image
                src='/lafialogo2.png'
                alt='Lafia'
                fill
                className='object-cover'
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
