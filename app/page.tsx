import React from 'react'
import Presentation from './components/Presentation'
import Projects from './projects/page'
import About from './about/page'

const Page = () => {
  return (
    <div className=''>
      <Presentation />
      <Projects />
      <About />
    </div>
  )
}

export default Page