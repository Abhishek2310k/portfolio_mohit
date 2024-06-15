import React from 'react'
import { LuBriefcase } from "react-icons/lu";
import './Others.scss'
const Services = () => {
  return (
    <section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <h2>Others</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <div class="icon"> <LuBriefcase style={{fontSize:"25px"}}/> </div>
          <div className='content'>
          <h4 class="title"><a href="">Lorem Ipsum</a></h4>
          <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <div class="icon"><LuBriefcase style={{fontSize:"25px"}}/></div>
          <div className='content'>
          <h4 class="title"><a href="">Lorem Ipsum</a></h4>
          <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <div class="icon"><LuBriefcase style={{fontSize:"25px"}}/></div>
          <div className='content'>
          <h4 class="title"><a href="">Lorem Ipsum</a></h4>
          <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <div class="icon"><LuBriefcase style={{fontSize:"25px"}}/></div>
          <div className='content'>
          <h4 class="title"><a href="">Lorem Ipsum</a></h4>
          <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Services