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
    <div className='py-16 pt-32 min-h-screen'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-[1fr_2fr] gap-12'>
          <div className='flex-col'>
            <h2 className='text-3xl font-heading font-bold mb-8 text-white'>{t('title')}</h2>
            <div className='space-y-6'>
              <div className='text-muted-foreground'>
                <p className='font-medium text-white mb-2'>{t('haveProject')}</p>
                <a href="mailto:lafiasabigado97@gmail.com" className='hover:text-white transition-colors underline decoration-white/30 underline-offset-4'>
                  lafiasabigado97@gmail.com
                </a>
              </div>

              <div className='text-muted-foreground'>
                <p className='font-medium text-white mb-2'>{t('resume')}</p>
                <Link href={link} className='inline-flex items-center gap-2 hover:text-white transition-colors underline decoration-white/30 underline-offset-4'>
                  {t('downloadCV')} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className='pt-4'>
                <p className='font-medium text-white mb-4'>{t('socials')}</p>
                <div className='flex gap-4'>
                  {socials.map((social) => (
                    <Link
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full'
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='bg-card/50 p-8 rounded-3xl border border-border'>
            <form action="https://formspree.io/f/maqdekbd" method="POST" className='space-y-6'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label htmlFor="name" className='block text-xs font-semibold text-muted-foreground uppercase tracking-wider'>{t('form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className='w-full p-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-white outline-none transition-all text-white placeholder-muted-foreground'
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="email" className='block text-xs font-semibold text-muted-foreground uppercase tracking-wider'>{t('form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className='w-full p-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-white outline-none transition-all text-white placeholder-muted-foreground'
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label htmlFor="subject" className='block text-xs font-semibold text-muted-foreground uppercase tracking-wider'>{t('form.subject')}</label>
                <input
                  type="text"
                  id='subject'
                  name="subject"
                  required
                  className='w-full p-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-white outline-none transition-all text-white placeholder-muted-foreground'
                  placeholder={t('form.subjectPlaceholder')}
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor="message" className='block text-xs font-semibold text-muted-foreground uppercase tracking-wider'>{t('form.message')}</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className='w-full p-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-white outline-none transition-all text-white placeholder-muted-foreground resize-none'
                  placeholder={t('form.messagePlaceholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                className='w-full px-8 py-4 bg-white text-black rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 max-w-xs ml-auto'
              >
                {t('form.send')} <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        <div className='mt-20 pt-8 border-t border-border text-center'>
          <p className='text-sm text-muted-foreground'>© {new Date().getFullYear()} Lafia Sabi Gado. {t('footer')}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact