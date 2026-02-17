"use client";
import React from 'react'
import Link from 'next/link'
import { FaTelegram, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('contact');
  const link = "https://kloo.me/resumelafia"

  const socials = [
    { id: 1, name: t('socials'), icon: <FaWhatsapp className="text-blue-500 rounded-lg text-xl" />, link: "https://wa.me/22956259632" },
    { id: 2, name: t('socials'), icon: <FaTelegram className="text-blue-500 rounded-lg text-xl" />, link: "https://t.me/Abdiaslafia" },
    { id: 3, name: t('socials'), icon: <FaGithub className="text-blue-500 rounded-lg text-xl" />, link: "https://github.com/Lafiasabigado" },
    { id: 4, name: t('socials'), icon: <FaLinkedin className="text-blue-500 rounded-lg text-xl" />, link: "https://linkedin.com/in/lafia-sabi-gado-03910a292/" },
    { id: 5, name: t('socials'), icon: <FaTwitter className="text-blue-500 rounded-lg text-xl" />, link: "https://x.com/abdiaslafia97" },
  ]

  return (
    <div className='py-16 pt-32 border-t border-gray-100 dark:border-gray-800 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-[1fr_2fr] gap-12'>
          <div className='flex-col'>
            <h2 className='text-3xl font-medium tracking-tight mb-8 text-gray-900 dark:text-white'>{t('title')}</h2>
            <div className='space-y-6'>
              <div className='text-gray-600 dark:text-gray-400'>
                <p className='font-medium text-gray-900 dark:text-white mb-2'>{t('haveProject')}</p>
                <a href="mailto:lafiasabigado97@gmail.com" className='hover:text-black dark:hover:text-white transition-colors underline decoration-gray-300 underline-offset-4'>
                  lafiasabigado97@gmail.com
                </a>
              </div>

              <div className='text-gray-600 dark:text-gray-400'>
                <p className='font-medium text-gray-900 dark:text-white mb-2'>{t('resume')}</p>
                <Link href={link} className='inline-flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors underline decoration-gray-300 underline-offset-4'>
                  {t('downloadCV')} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className='pt-4'>
                <p className='font-medium text-gray-900 dark:text-white mb-4'>{t('socials')}</p>
                <div className='flex gap-4'>
                  {socials.map((social) => (
                    <Link
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full'
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl'>
            <form action="https://formspree.io/f/maqdekbd" method="POST" className='space-y-6'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label htmlFor="name" className='block text-xs font-semibold text-gray-500 uppercase tracking-wider'>{t('form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className='w-full p-3 bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400'
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="email" className='block text-xs font-semibold text-gray-500 uppercase tracking-wider'>{t('form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className='w-full p-3 bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400'
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label htmlFor="subject" className='block text-xs font-semibold text-gray-500 uppercase tracking-wider'>{t('form.subject')}</label>
                <input
                  type="text"
                  id='subject'
                  name="subject"
                  required
                  className='w-full p-3 bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400'
                  placeholder={t('form.subjectPlaceholder')}
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor="message" className='block text-xs font-semibold text-gray-500 uppercase tracking-wider'>{t('form.message')}</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className='w-full p-3 bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none'
                  placeholder={t('form.messagePlaceholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                className='w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 max-w-xs ml-auto'
              >
                {t('form.send')} <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        <div className='mt-20 pt-8 border-t border-gray-100 dark:border-gray-800 text-center'>
          <p className='text-sm text-gray-400'>© {new Date().getFullYear()} Lafia Sabi Gado. {t('footer')}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact