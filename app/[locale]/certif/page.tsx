"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifs = [
    { id: 1, name: "React", image: "/certif/react.png" },
    { id: 2, name: "Django", image: "/certif/django.png" },
    { id: 3, name: "JavaScript", image: "/certif/js.png" },
    { id: 4, name: "Python", image: "/certif/python.png" },
    { id: 5, name: "Django REST Framework", image: "/certif/djangorest.png" },
    { id: 6, name: "API REST", image: "/certif/apirest.png" },
    { id: 7, name: "HTML & CSS", image: "/certif/htmlcss.png" },
    { id: 8, name: "Web Fundamentals", image: "/certif/web.png" },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="pt-28 md:pt-36 pb-32">
      <div className="container-custom">
        <div className="mb-12">
          <p className="font-handwritten text-muted text-2xl mb-1">certifications</p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Certifications & Formations
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certifs.slice(0, visibleCount).map((certif) => (
            <div
              key={certif.id}
              className="group p-1.5 bg-card-ring rounded-[20px] shadow-glow hover:shadow-glow-lift transition-all"
            >
              <div className="aspect-[4/3] relative rounded-[14px] overflow-hidden bg-bg-elevated border border-white/[0.04]">
                <Image
                  src={certif.image}
                  alt={certif.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {visibleCount < certifs.length && (
          <div className="flex justify-center mt-12">
            <Button
              variant="ghost"
              className="rounded-full px-8 py-3 font-medium text-sm border-line hover:border-white/30"
              onClick={handleShowMore}
            >
              Voir plus
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;