import React, {useState,useEffect} from 'react';
import "./navbar.css"
// import {Link } from 'react-router-dom';
import About from './About';
import Link from 'react-scroll';
// import { useEffect, useState } from "react"

function Navbar({scrollToSection}) {

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolled = window.scrollY > 0;
  //     setIsScrolled(scrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsHidden(scrollPosition > 0 && scrollPosition < viewportHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    {/* <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}> */}
    <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
        <div className="navcomponents">
            <ul>
                <li><a  onClick={()=> scrollToSection("home")} >{'<home/>'}</a></li>
                <li><a  onClick={()=> scrollToSection("about")} >{'<skills/>'}</a></li>
                <li><a  onClick={()=> scrollToSection("work")} >{'<work />'}</a></li>
                <li><a  onClick={()=> scrollToSection("exp")} >{'<experience />'}</a></li>
                <li><a  onClick={()=> scrollToSection("contact")}>{'<contact />'}</a></li>
                {/* <li><Link to="about" smooth={true} duration={500}>About</Link></li> */}
                {/* <li><a href="/" >Contact</a></li> */}
            </ul>
           
        </div>
    </nav>
    </>
  )
}

export default Navbar