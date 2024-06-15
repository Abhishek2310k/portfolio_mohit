import React from 'react'
import './Highlights.scss'
import { CiFaceSmile } from "react-icons/ci";
import { PiNotepad } from "react-icons/pi";
import { MdOutlineHeadsetMic } from "react-icons/md";

const Facts = () => {
  return (
    <section id="facts" class="facts">
      <div class="container">

        <div class="section-title">
          <h2>Highlights</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row no-gutters">

          <div class="fact_part" data-aos="fade-up">
            <div class="count-box">
              <CiFaceSmile style={{fontSize:"80px", color:"#149ddd"}}/>
              <div className='stat_meaning'>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
              </div>
            </div>
            <div class="count-box">
              <PiNotepad style={{fontSize:"80px", color:"#149ddd"}}/>
              <div className='stat_meaning'>
                <span data-purecounter-start="0" data-purecounter-end="531" data-purecounter-duration="1" class="purecounter"></span>
                <p><strong>Projects</strong> <span>Completed Projects</span></p>
              </div>
            </div>
            <div class="count-box">
              <MdOutlineHeadsetMic style={{fontSize:"80px", color:"#149ddd"}}/>
              <div className='stat_meaning'>
                <span data-purecounter-start="0" data-purecounter-end="241" data-purecounter-duration="1" class="purecounter"></span>
                <p><strong>Hours of Support</strong> <span>consequuntur quae</span></p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Facts