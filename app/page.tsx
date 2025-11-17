"use client"

import React from 'react'
import Presentation from './components/Presentation'
import ProjectsHome from './components/ProjectsHome'
import About from './about/page'
import Skills from './skills/page'
import Contact from './contact/page'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Certifications from './certif/page'

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
      easing: "ease-out", 
    });
  }, []);
  return (
    <div className='w-full overflow-hidden text-zinc-800 dark:text-zinc-100'>
      <Presentation />
      <ProjectsHome />
      <About />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  )
}

export default Page