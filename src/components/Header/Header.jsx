import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWebAsset } from "react-icons/md";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import './Header.scss'
const Header = () => {

  const [visible,setVisible] = useState('orig_header');
  const changeState = () => {
    if (visible === 'orig_header') setVisible('shifted_header');
    else setVisible('orig_header');
  }

  return (
    <div className='header_net'>
    <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={changeState}> <TiThMenu/> </i>

    <header id='header' className={visible}>
        <div class="d-flex flex-column">
            <div className='profile'>
                <img src="profile-img.jpg" alt="" class="img-fluid rounded-circle"/>
                <h1 class="text-light"><a href="/">Mohit</a></h1>
                <div class="social-links mt-3 text-center">
                    <a href="#" class="twitter"><i class="bx bxl-twitter"><FaXTwitter/></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook"><ImLinkedin2/></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"><FaFacebookF/></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"><SiLeetcode/></i></a>
                </div>
                <nav id="navbar" class="nav-menu navbar">
                  <ul>
                    <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <IoHomeOutline style={{color:'#149ddd'}}/> <span>Home</span></a></li>
                    <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <CgProfile style={{color:'#149ddd'}}/> <span>About</span></a></li>
                    <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <MdOutlineWebAsset style={{color:'#149ddd'}}/> <span>Portfolio</span></a></li>
                    <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <BsMenuButtonWideFill style={{color:'#149ddd'}}/> <span>Services</span></a></li>
                    <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <MdMailOutline style={{color:'#149ddd'}}/> <span>Contact</span></a></li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header