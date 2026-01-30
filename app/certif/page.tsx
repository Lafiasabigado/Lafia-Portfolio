"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';


const Certifications = () => {
  const certifs = [
    { id: 1, name: "react", image: "/certif/react.png" },
    { id: 2, name: "django", image: "/certif/django.png" },
    { id: 3, name: "js", image: "/certif/js.png" },
    { id: 4, name: "python", image: "/certif/python.png" },
    { id: 5, name: "djangorest", image: "/certif/djangorest.png" },
    { id: 6, name: "apirest", image: "/certif/apirest.png" },
    { id: 7, name: "htmlcss", image: "/certif/htmlcss.png" },
    { id: 8, name: "web", image: "/certif/web.png" }
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <div className='py-16 border-t border-gray-100 dark:border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-medium tracking-tight mb-8 text-gray-900 dark:text-white'>Certifications</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {certifs.slice(0, visibleCount).map((certif) => (
            <div
              data-aos="fade-up"
              data-aos-delay={certif.id * 100}
              className='group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700' key={certif.id}>
              <div className='aspect-[4/3] relative'>
                <Image src={certif.image}
                  alt={certif.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
        {visibleCount < certifs.length && (
          <div className='flex justify-center mt-8'>
            <Button variant="outline" className='rounded-full px-6 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800' onClick={handleShowMore}>
              Voir Plus
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certifications;