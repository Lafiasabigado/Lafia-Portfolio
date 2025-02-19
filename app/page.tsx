"use client"

import React from 'react'
import Presentation from './components/Presentation'
import Projects from './projects/page'
import About from './about/page'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true, 
      easing: "ease-out", 
    });
  }, []);
  return (
    <div className=''>
      <Presentation />
      <Projects />
      <About />
    </div>
  )
}

export default Page