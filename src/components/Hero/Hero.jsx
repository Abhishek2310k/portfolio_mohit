import React from 'react'
import {ReactTyped} from "react-typed";

import './Hero.scss'
const Hero = () => {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
          <h1>Mohit</h1>
          <p>I'm a{" "}
          <ReactTyped
            strings={["Innovater", "Engineer", "Developer"]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
        />
        </p>
        </div>
    </section>
  )
}

export default Hero