"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      path: "/",
      name: "Accueil",
    },
    {
      path: "/about",
      name: "À propos",
    },
    {
      path: "/projects",
      name: "Projets",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link 
            href="/" 
            className='text-lg font-bold uppercase hover:text-blue-500 transition-colors duration-200'
            data-aos="fade-right"
          >
            Lafia Sabi Gado
          </Link>

          {/* Menu Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            {links.map((link, index) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className='hover:text-blue-500 transition-colors duration-200'
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                {link.name}
              </Link>
            ))}
            <div data-aos="fade-left">
              <ThemeToggle />
            </div>
          </div>

          {/* Menu Burger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='md:hidden hover:text-blue-500 transition-colors duration-200'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className='md:hidden space-y-4 py-4 bg-white dark:bg-gray-900'>
            {links.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className='block hover:text-blue-500 transition-colors duration-200 py-2'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className='py-2'>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
