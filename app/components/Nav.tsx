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
    <nav className='fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link
            href="/"
            className='text-base font-medium tracking-tight text-gray-900 dark:text-white hover:opacity-70 transition-opacity duration-200'
          >
            Abdias Lafia Sabi Gado
          </Link>

          {/* Menu Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            {links.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className='text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Menu Burger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div id="mobile-menu" className='md:hidden space-y-4 py-4 bg-white dark:bg-gray-900'>
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className='block text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2'
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
