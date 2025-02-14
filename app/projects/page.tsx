import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { link } from 'fs'

export const Projects = () => {
  const projects = [
    {id:1,
     name:"Ballamas",
     image:"/ballamas.png",
     description:"",
     linkdn:"",
     github:"",
     tools:"",
     year:""
    },
    {   id:2,
        name:"Ballamas",
        image:"/ballamas.png",
        description:"",
        linkdn:"",
        github:"",
        tools:"",
        year:""
    },
    {   id:3,
        name:"Ballamas",
        image:"/ballamas.png",
        description:"",
        linkdn:"",
        github:"",
        tools:"",
        year:""
    }
  ]
  return (
    <div className='pt-20'>
        <hr className='pt-5 text-zinc-700'/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5'>
           <h2 className='text-4xl font-bold uppercase'> Featured Projects</h2>
           <p className='dark:text-gray-300 py-2'>Here are some of the selected projects that showcase my passion for front-end development.</p>
        </div>
    </div>
  )
}
