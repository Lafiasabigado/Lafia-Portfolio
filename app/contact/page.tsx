"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { FaTelegram, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { CheckCircle2, XCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus({
        type: 'error',
        message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const link = "https://drive.google.com/file/d/1IoUslE116HEUImbIFc-zTzcVAS9cewvr/view?usp=drive_link"

  const socials = [
    { id: 1, name: "WhatsApp", icon: <FaWhatsapp className="text-blue-500 rounded-lg" />, link: "https://wa.me/22956259632" },
    { id: 2, name: "Telegram", icon: <FaTelegram className="text-blue-500 rounded-lg" />, link: "https://t.me/Abdiaslafia" },
    { id: 3, name: "Github", icon: <FaGithub className="text-blue-500 rounded-lg" />, link: "https://github.com/Lafiasabigado" },
    { id: 4, name: "Linkedin", icon: <FaLinkedin className="text-blue-500 rounded-lg" />, link: "https://linkedin.com/in/lafia-sabi-gado-03910a292/" },
    { id: 5, name: "Twitter", icon: <FaTwitter className="text-blue-500 rounded-lg" />, link: "https://x.com/abdiaslafia97" },
  ]
  return (
    <div className='py-16 border-t border-gray-100 dark:border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-[1fr_2fr] gap-12'>
          <div className='flex-col'>
            <h2 className='text-2xl font-medium tracking-tight mb-6 text-gray-900 dark:text-white'>Contact</h2>
            <div className='space-y-4'>
              <p className='text-gray-600 dark:text-gray-400'>
                Un projet en tête ? <br />
                <a href="mailto:lafiasabigado97@gmail.com" className='text-gray-900 dark:text-white font-medium hover:underline'>lafiasabigado97@gmail.com</a>
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                <Link href={link} className='hover:text-gray-900 dark:hover:text-white transition-colors underline decoration-gray-300 underline-offset-4'>Télécharger mon CV</Link>
              </p>
              <div className='flex gap-4 pt-2'>
                {socials.map((social) => (
                  <Link
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className=''>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <label htmlFor="name" className='block text-xs font-medium text-gray-500 uppercase tracking-wider'>Nom</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full p-2 bg-transparent border-b border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400'
                    placeholder="Votre nom"
                  />
                </div>
                <div className='space-y-1'>
                  <label htmlFor="email" className='block text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full p-2 bg-transparent border-b border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400'
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div className='space-y-1'>
                <label htmlFor="subject" className='block text-xs font-medium text-gray-500 uppercase tracking-wider'>Sujet</label>
                <input
                  type="text"
                  id='subject'
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full p-2 bg-transparent border-b border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400'
                  placeholder="Sujet de votre message"
                />
              </div>
              <div className='space-y-1'>
                <label htmlFor="message" className='block text-xs font-medium text-gray-500 uppercase tracking-wider'>Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full p-2 bg-transparent border-b border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400 resize-none'
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className='px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:opacity-80 transition-opacity'
              >
                Envoyer le message
              </button>

              {status.type && (
                <div
                  className={`mt-4 p-3 rounded text-sm flex items-center gap-2 ${status.type === 'success'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                    }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className='mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 text-center'>
          <p className='text-sm text-gray-400'>© {new Date().getFullYear()} Lafia Sabi Gado. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact