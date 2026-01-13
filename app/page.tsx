import React from 'react'
import Presentation from './components/Presentation'
import ProjectsHome from './components/ProjectsHome'
import About from './about/page'
import Skills from './skills/page'
import Contact from './contact/page'
import Certifications from './certif/page'

const Page = () => {
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