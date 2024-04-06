// import React from 'react'
import "./navbar.css"
import { FaBars,FaTimes, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
import React, { useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import './navbar2.css'

const Navbar2 = (scrollToSection) => {


    // const [click, setClick] = useState(false);
    // const handleClick = () => {
    //   setClick(!click);
    //   // setClick(false);
    // };
  
    
    // const handleLinkClick = () => {
    //   setClick(false); // Close the navbar when a link is clicked
    // };
    const [click, setClick] = useState(false);
    const handleClick = () => {
      setClick(!click);
      // setClick(false);
    };
  
    
    const handleLinkClick = () => {
      setClick(false); // Close the navbar when a link is clicked
    };

  

  return (
    <>
       <div className="navbar">
      <div className="socials">
      <a href="https://www.linkedin.com/in/uday-vasave/"><FaLinkedin size={30} /></a>
      <a href="https://github.com/udayvasave"><FaGithub size={30} /></a>
      <a href="https://www.instagram.com/uday__vasave/"><FaInstagram size={30} /></a>

      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/"  >{'<home />'}</Link>
          {/* <a onClick={() => scrollToSection('home')}> {'<home />'}</a> */}
        </li>
        <li>          
          <Link to="/AllProjects">{'<projects />'}</Link>
        </li>

        {/* <li> */}
        {/* <Link to="/#section3">{'<work />'}</Link> */}
          {/* <a  > {'<work />'}</a> */}
        {/* </li> */}
        
        {/* <li> */}
          {/* <Link to="/#section4">{'<experience />'}</Link> */}
          {/* <a   > {'<experience />'}</a> */}
        {/* </li> */}

        {/* <li> */}
        {/* <Link to="/#section5">{'<contact />'}</Link> */}
          {/* <a  > {'<contact />'}</a> */}
        {/* </li> */}

      </ul>
      <div className="hamburger" onClick={handleClick} > 
        {click ? (
          <FaTimes size={30} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#ffffff" }} />
        )}
      </div>
    </div>  
    </>
  )
}

export default Navbar2


//onClick={handleClick}