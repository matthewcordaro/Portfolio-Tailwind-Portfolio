import React from "react"
import { FaSquareGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { TbWorldWww } from "react-icons/tb"

function ProjectCard({ img, url, github, title, text }) {
  return (
    <article className='gb-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64'
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-400 hover:text-matt-blue-800 duration-300' />
          </a>
          <a href={github}>
            <FaSquareGithub className='h-8 w-8 text-slate-400 hover:text-matt-blue-800 duration-300' />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
