import React from 'react'
import './Skills.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
const Skills = () => {
  return (
    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row skills-content">

          <div class="skill_col col-lg-6" data-aos="fade-up">

            <div class="progress">
              <span class="skill">HTML <i class="val">100%</i></span>
              <ProgressBar now={100}/>
            </div>

            <div class="progress">
              <span class="skill">CSS <i class="val">90%</i></span>
              <ProgressBar now={90}/>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">75%</i></span>
              <ProgressBar now={75}/>
            </div>

          </div>

          <div class="skill_col col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div class="progress">
              <span class="skill">PHP <i class="val">80%</i></span>
              <ProgressBar now={80}/>
            </div>

            <div class="progress">
              <span class="skill">WordPress/CMS <i class="val">90%</i></span>
              <ProgressBar now={90}/>
            </div>

            <div class="progress">
              <span class="skill">Photoshop <i class="val">55%</i></span>
              <ProgressBar now={55}/>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills