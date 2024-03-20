import React, { useState } from 'react'
import { useEffect } from 'react';
import Navbar2 from "./Navbar2"
import "./project1.css"
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import riv1 from "../assets/project1-screens/rivscreens1.png"
import riv2 from "../assets/project1-screens/riv2.png"
import riv3 from "../assets/project1-screens/riv3.png"
import rivMobile1 from "../assets/project1-screens/riv-mobile1.jpg"
import rivMobile2 from "../assets/project1-screens/riv-mobile2.jpg"
import rivMobile3 from "../assets/project1-screens/riv-mobile3.jpg"
import rivMobile4 from "../assets/project1-screens/riv-mobile4.jpg"
import rivMobile5 from "../assets/project1-screens/riv-mobile5.jpg"
import rivMobile6 from "../assets/project1-screens/riv-mobile6.jpg"

const Project1 = () => {
    const ScrollToTopOnMount = () => {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []); // Empty dependency array ensures this effect runs only once on component mount
      
        return null; // This component doesn't render anything
      };
  return (
    <>
    <ScrollToTopOnMount />
    <Navbar2 />
    <div  className="section1-project" id="section1-project1">
    <div className="main-con">

    <div id='section1-project' className="project1-heading"><h1>Royal Indian Vivah - Matrimony Web and Mobile App</h1></div>
    
    <div className="techno-used-project1">
    <span>PHP</span> <span>JavaScript</span> <span>CSS</span> <span>HTML</span> <span>BOOTSTRAP</span> <span>SQL</span> <span>GitHub</span> <span>AWS</span>
    </div>

    <div className="description">
        <p>I played a significant role in the development of Royal Indian Vivah, a comprehensive matrimony web and mobile application. Using HTML, CSS, JavaScript, and Bootstrap, I crafted the frontend of the web application, ensuring its responsiveness and aesthetic appeal. For the mobile app, I utilized Flutter to deliver a seamless user experience. My contributions helped create a user-friendly platform for individuals seeking matrimonial connections.</p>
    </div>

    {/* <div className="links">
        <span><IoLinkOutline size={25}/><p> Link:</p> <a href="">app.royalinidanvivah.com</a></span>
        <span><FaGithub size={25}/><p> Github: </p><a href="">https://github.com/udayvasave</a></span>
        <span><FaGooglePlay size={25}/> <p>Play Store: </p><a href="">https://play.google.com/store/apps/details?id=io.ionic.Royal_indian_vivah&pcampaignid=web_share</a></span>
        <span><FaApple size={25}/> <p>App Store:</p> <a href=""></a></span>
    </div> */}
<div className="project1links">
    <div className="links-project1">
        <div className="xyz" style={{borderRadius:'0.5rem',}}>
        <div className="plink">
            <div className="link-icon"><a href="https://app.royalindianvivah.com"><IoLinkOutline size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title">link</div>
        </div>
        <div className="p1-github">
            <div className="link-icon"><a href="https://github.com/udayvasave"><FaGithub  size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title">Github</div>
        </div>
        <div className="p1-playstore">
            <div className="link-icon"><a href="https://play.google.com/store/apps/details?id=io.ionic.Royal_indian_vivah&pcampaignid=web_share"><FaGooglePlay size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title"><span>Playstore</span></div>
        </div>
        <div className="p1-playstore">
            <div className="link-icon"><a href="#"><FaApple size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title"><span>App Store</span></div>
        </div>
        {/* <div className="p1-playstore">
            <div className="link-icon"><FaGooglePlay size={30} style={{color:'grey',}}/></div>
            <div className="link-title"><span>Indus Appstore</span></div>
        </div> */}
        </div>
    </div>
    </div>

    <div className="screens">
        <div className="wide-screens">
        <div className="wide"><img src={riv1} alt="" /></div>
    <div className="wide"><img src={riv2} alt="" /></div>
    <div className="wide"><img src={riv3} alt="" /></div>
        </div>
        <div className="mobile-screens">
            <div className="mobile"><img src={rivMobile1} alt="" /></div>
            <div className="mobile"><img src={rivMobile2} alt="" /></div>
            <div className="mobile"><img src={rivMobile3} alt="" /></div>
            <div className="mobile"><img src={rivMobile4} alt="" /></div>
            <div className="mobile"><img src={rivMobile5} alt="" /></div>
            <div className="mobile"><img src={rivMobile6} alt="" /></div>
        </div>
    </div>
    </div>
    </div>
   
    </>
  )
}

export default Project1