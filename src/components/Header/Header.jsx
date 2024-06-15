import React from 'react';
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
import profileImage from './profile_img.jpg';
import './Header.scss';

const Header = () => {
  const [visible, setVisible] = useState('orig_header');

  const changeState = () => {
    if (visible === 'orig_header') setVisible('shifted_header');
    else setVisible('orig_header');
  };

  return (
    <div className='header_net'>
      <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={changeState}><TiThMenu /></i>

      <header id='header' className={visible}>
        <div className="d-flex flex-column">
          <div className='profile'>
            <img src={profileImage} alt="Profile" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="/">Mohit</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter"><i><FaXTwitter /></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook"><i><ImLinkedin2 /></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram"><i><FaFacebookF /></i></a>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="google-plus"><i><SiLeetcode /></i></a>
            </div>
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i><IoHomeOutline style={{ color: '#149ddd' }} /> <span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i><CgProfile style={{ color: '#149ddd' }} /> <span>About</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i><MdOutlineWebAsset style={{ color: '#149ddd' }} /> <span>Portfolio</span></a></li>
                <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i><BsMenuButtonWideFill style={{ color: '#149ddd' }} /> <span>Services</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i><MdMailOutline style={{ color: '#149ddd' }} /> <span>Contact</span></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
