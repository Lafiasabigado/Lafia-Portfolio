import React from 'react'
import Link from 'next/link'
import { FaTelegram,FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const link = "https://drive.google.com/file/d/1RWYI8TM3-R3ns8IMfZ1pwe4MeqeMdAcP/view?usp=sharing"

  const socials = [
    { id: 1, name: "Telegram", icon: <FaTelegram className="text-blue-500 rounded-lg" />, link: "https://t.me/lafia_sabi_gado" },
    { id: 2, name: "Github", icon: <FaGithub className="text-blue-500 rounded-lg" />, link: "https://github.com/Lafiasabigado" },
    { id: 3, name: "Linkedin", icon: <FaLinkedin className="text-blue-500 rounded-lg" />, link: "https://linkedin.com/in/lafia-sabi-gado-03910a292/" },
    { id: 4, name: "Twitter", icon: <FaTwitter className="text-blue-500 rounded-lg" />, link: "https://twitter.com/LafiaSabiGado" },
  ]
  return (
    <div className='pt-10'>
        <hr className='pt-20 text-zinc-700'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2'>
            <div className='flex-col'>
              <h2 className='text-2xl sm:text-4xl font-bold uppercase'>Let's connect</h2>
              <p className='py-2'>Say hello at <span className='underline'>lafiasabigado97@gmail.com</span></p>
              <p className='py-2'>For more info, here's <Link href={link}><span className='underline'>my resume</span></Link></p>
              <div className='flex justify-start sm:space-x-4 gap-2 py-2'>
                {socials.map((social) => (
                  <Link key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className='text-4xl py-2'>
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className='flex-col py-4' data-aos="fade-up">
              <form action="" className='shadow-lg space-y-4'>
                  <label htmlFor="name" className='py-2'>Name</label>
                  <input type="text" name="name" id="name" className='border-none w-full p-2 rounded-lg py-2' />
                  <label htmlFor="email" className='py-2'>Email Adress</label>
                  <input type="email" name="email" id="email" className='border-none w-full px-2 py-2 rounded-lg' />
                  <label htmlFor="" className='py-2'>Subject</label>
                  <input type="text" id='subject' className='border-none w-full p-2 rounded-lg'/>
                  <label htmlFor="message" className='py-2'>Message</label>
                  <textarea name="message" id="message" rows={5} className='border-none w-full p-2 rounded-lg'></textarea>
                  <button type="submit" className='w-64 mx-auto p-2 bg-blue-500 text-white rounded-full'>Submit</button>
              </form>
            </div>
          </div>
          <p className='p-2'>© 2025 Lafia Sabi Gado.</p>
        </div>
    </div>
  )
}

export default Contact