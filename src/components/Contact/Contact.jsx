import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import './Contact.scss'
const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <div className='container'>
            <div class="section-title">
                <h2>Contact</h2>
            </div>
            <div className='row'>
                <div className='comp email'>
                    <SiGmail style={{color:'#149ddd'}}/>
                    <a href='mailto:example@gmail.com' style={{textDecoration:'none',color:'black'}}><span>example@gmail.com</span></a>
                </div>
                <div className='comp phone_number'>
                    <FaPhoneAlt style={{color:'#149ddd'}}/>
                    <span>+91 87654321</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact