
import { FaBars,FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


function Navbar({scrollToSection}) {

 const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          {/* <Link to="/"  onClick={()=> scrollToSection('home')}>{'<home />'}</Link> */}
          <a  onClick={()=> scrollToSection('home')}> {'<home />'}</a>
        </li>
        <li>
          
          {/* <Link to="#sec2">{'<skills />'}</Link> */}
          <a onClick={()=> scrollToSection('sec2')}> {'<skills />'}</a>
        </li>
        <li>
          {/* <Link to="/resume">{'<home />'}</Link> */}
          <a  onClick={()=> scrollToSection('section3')}> {'<work />'}</a>
        </li>
        <li>
          {/* <Link to="/contact">{'<home />'}</Link> */}
          <a  onClick={()=> scrollToSection('section4')}> {'<experience />'}</a>
        </li>
        <li>
          <a  onClick={()=> scrollToSection('section5')}> {'<contact />'}</a>
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