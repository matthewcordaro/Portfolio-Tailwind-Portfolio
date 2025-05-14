import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"

import React from "react"

function About() {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Matt' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            cupiditate consequatur provident voluptates nobis fugiat assumenda
            beatae repellendus sequi non omnis corrupti, ut inventore eius ea
            rerum? Vitae, repellat dolorem.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
