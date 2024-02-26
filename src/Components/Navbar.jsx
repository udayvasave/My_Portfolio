
import { FaBars,FaTimes, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


function Navbar({scrollToSection}) {

 const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    // setClick(false);
  };

  
  const handleLinkClick = () => {
    setClick(false); // Close the navbar when a link is clicked
  };

  return (
    <div className="navbar">
      <div className="socials">
      <a href="https://www.linkedin.com/in/uday-vasave/"><FaLinkedin size={30} /></a>
      <a href="https://github.com/udayvasave"><FaGithub size={30} /></a>
      <a href="https://www.instagram.com/uday__vasave/"><FaInstagram size={30} /></a>

      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          {/* <Link to="/"  onClick={()=> scrollToSection('home')}>{'<home />'}</Link> */}
          <a  onClick={()=> { scrollToSection('home'); handleLinkClick(); }}  > {'<home />'}</a>
        </li>
        <li>
          
          {/* <Link to="#sec2">{'<skills />'}</Link> */}
          <a onClick={()=> { scrollToSection('sec2'); handleLinkClick(); }}> {'<skills />'}</a>
        </li>
        <li>
          {/* <Link to="/resume">{'<home />'}</Link> */}
          <a  onClick={()=> { scrollToSection('section3'); handleLinkClick(); }}> {'<work />'}</a>
        </li>
        <li>
          {/* <Link to="/contact">{'<home />'}</Link> */}
          <a  onClick={()=> { scrollToSection('section4'); handleLinkClick(); }} > {'<experience />'}</a>
        </li>
        <li>
          <a  onClick={()=> { scrollToSection('section5'); handleLinkClick(); }}> {'<contact />'}</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#ffffff" }} />
        )}
      </div>
    </div>  
  )
}

export default Navbar