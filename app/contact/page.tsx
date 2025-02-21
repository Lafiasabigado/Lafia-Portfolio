import React from 'react'
import Link from 'next/link'
import { FaTelegram,FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const link = "https://drive.google.com/file/d/1RWYI8TM3-R3ns8IMfZ1pwe4MeqeMdAcP/view?usp=sharing"

  const socials = [
    { id: 1, name: "Telegram", icon: <FaTelegram className="text-blue-500 rounded-lg" />, link: "https://t.me/lafia_sabi_gado" },
    { id: 2, name: "Github", icon: <FaGithub className="text-blue-500 rounded-lg" />, link: "https://github.com/Lafiasabigado" },
    { id: 3, name: "Linkedin", icon: <FaLinkedin className="text-blue-500 rounded-lg" />, link: "https://linkedin.com/in/lafia-sabi-gado-03910a292/" },
    { id: 4, name: "Twitter", icon: <FaTwitter className="text-blue-500 rounded-lg" />, link: "https://x.com/abdiaslafia97" },
  ]
  return (
    <div className='pt-10'>
        <hr className='pt-20 text-zinc-700'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12'>
            <div className='flex-col' data-aos="fade-right">
              <h2 className='text-2xl sm:text-4xl font-bold uppercase'>Contactez-moi</h2>
              <div className='mt-8 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl'>
                <p className='py-2 text-lg'>Dites bonjour à <span className='text-blue-500 hover:underline cursor-pointer'>lafiasabigado97@gmail.com</span></p>
                <p className='py-2'>Pour plus d'informations, voici <Link href={link}><span className='text-blue-500 hover:underline'>mon CV</span></Link></p>
                <div className='flex justify-start gap-6 pt-4'>
                  {socials.map((social) => (
                    <Link 
                      key={social.id} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className='text-3xl hover:scale-110 transition-transform duration-200'
                      data-aos="zoom-in"
                      data-aos-delay={social.id * 100}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex-col' data-aos="fade-up">
              <form action="" className='bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl space-y-6'>
                <div className='space-y-2'>
                  <label htmlFor="name" className='block text-sm font-medium'>Nom</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className='w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200'
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="email" className='block text-sm font-medium'>Adresse Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className='w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200'
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="subject" className='block text-sm font-medium'>Sujet</label>
                  <input 
                    type="text" 
                    id='subject' 
                    className='w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200'
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="message" className='block text-sm font-medium'>Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5} 
                    className='w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200'
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className='w-full p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200'
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          <p className='p-4 text-center text-gray-500 dark:text-gray-400'>© 2025 Lafia Sabi Gado.</p>
        </div>
    </div>
  )
}

export default Contact