import heroImg from "../assets/hero.svg"
import { FaSquareGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import React from "react"

function Hero() {
  return (
    <div className='bg-matt-blue-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>Matthew Cordaro</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Full Stack Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning any idea into reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/matthewcordaro'>
              <FaSquareGithub className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/matthewcordaro/'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://x.com/MatthewCordaro'>
              <FaXTwitter className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  )
}

export default Hero
