"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["projects", "about", "skills", "contact"];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="text-lg font-bold uppercase hover:text-blue-500">
            Lafia Sabi Gado
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link key={link} href={`/${link}`} className="hover:text-blue-500">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Menu Burger Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden space-y-4 py-4 text-center">
            {links.map((link) => (
              <Link key={link} href={`/${link}`} className="block hover:text-blue-500">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}
