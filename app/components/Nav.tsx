"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="text-lg font-bold text-gray-900 dark:text-white uppercase">
            Lafia Sabi Gado
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex space-x-6">
              <Link href="/projects" className="text-gray-800 dark:text-white hover:text-blue-500">
                Projects
              </Link>
              <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500">
                About
              </Link>
              <Link href="/skills" className="text-gray-800 dark:text-white hover:text-blue-500">
                Skills
              </Link>
              <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>


          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden space-y-4 py-4">
            <Link href="/projects" className="block text-gray-800 dark:text-white text-center">
              Projects
            </Link>
            <Link href="/about" className="block text-gray-800 dark:text-white text-center">
              About
            </Link>
            <Link href="/skills" className="block text-gray-800 dark:text-white text-center">
              Skills
            </Link>
            <Link href="/contact" className="block text-gray-800 dark:text-white text-center">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
