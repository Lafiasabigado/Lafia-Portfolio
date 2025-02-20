"use client"

import React from 'react'
import Presentation from './components/Presentation'
import Projects from './projects/page'
import About from './about/page'
import Skills from './skills/page'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
      easing: "ease-out", 
    });
  }, []);
  return (
    <div className=''>
      <Presentation />
      <Projects />
      <About />
      <Skills />
    </div>
  )
}

export default Page