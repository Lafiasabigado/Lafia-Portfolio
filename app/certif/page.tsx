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

  const [visibleCount, setVisibleCount] = useState(2);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 2); 
  };

  return (
    <div className='py-10'>
      <hr className='pt-10 text-zinc-700' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10'>
        <h2 className='text-2xl sm:text-3xl font-bold uppercase pb-10'>Mes Certifications</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {certifs.slice(0, visibleCount).map((certif) => (
            <div               
            data-aos="fade-up"
            data-aos-delay={certif.id * 200}
            className='group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-2 shadow-lg hover:shadow-xl transition-all duration-300' key={certif.id}>
              <Image src={certif.image} 
                     alt={certif.name} 
                     width={800} 
                     height={600}
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     priority 
              />
            </div>
          ))}
        </div>
        {visibleCount < certifs.length && (
          <Button className='bg-blue-500 rounded-full py-4 px-12 mx-auto mt-6' onClick={handleShowMore}>
            Voir Plus
          </Button>
        )}
      </div>
    </div>
  );
}

export default Certifications;