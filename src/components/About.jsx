import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"

import React from "react"

function About() {
  return (
    <section id='about'>
      <SectionTitle text='About' />
      <img src={aboutSvg} />
    </section>
  )
}

export default About
