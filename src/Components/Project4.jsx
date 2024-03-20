import React, { useState, useEffect } from 'react'
import Navbar2 from "./Navbar2"
import "./project4.css"
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import talasari1 from "../assets/project4-screens/Ps talasari1.png"
import talasari2 from "../assets/project4-screens/ps talasari2.png"
import talasari3 from "../assets/project4-screens/ps talasari3.png"
import talasari4 from "../assets/project4-screens/ps talasari4.png"
import talasari5 from "../assets/project4-screens/ps talasari 5.png"
import talasari6 from "../assets/project4-screens/ps talasari7.png"

const Project4 = () => {
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
    <div  className="section1-project4">
    <div className="main-con-p4">

    <div id='section1-project4' className="project4-heading"><h1>Letter Monitoring System - Panchayat Samiti Talasari, Palghar</h1></div>
    {/* <div className="techno-used-project4"><span>JavaScript</span> <span>CSS</span> <span>HTML</span> <span>BOOTSTRAP</span> </div> */}
   

    <div className="description-p4">
<p>Our letter monitoring system streamlines communication and workflow processes within the Panchayat Samiti Talasari and Dahanu. It allows registration branch personnel to register new letters, which are then routed to the Assistant Administrative Personnel for approval. Once approved, letters are forwarded to respective clerical departments for action. The Block Divisional Officer oversees thae process, monitoring all letters, tracking their statuses, and identifying pending tasks. Each department records actions taken on letters, along with details such as letter number, inward number, action taken date, sender information, subject of the letter, and current status. This system enhances transparency, accountability, and efficiency in managing correspondence and administrative tasks</p>  
  </div>

    {/* <div className="links">
        <span><IoLinkOutline size={25}/><p> Link:</p> <a href="">app.royalinidanvivah.com</a></span>
        <span><FaGithub size={25}/><p> Github: </p><a href="">https://github.com/udayvasave</a></span>
        <span><FaGooglePlay size={25}/> <p>Play Store: </p><a href="">https://play.google.com/store/apps/details?id=io.ionic.Royal_indian_vivah&pcampaignid=web_share</a></span>
        <span><FaApple size={25}/> <p>App Store:</p> <a href=""></a></span>
    </div> */}
    <div className="linkTEchs" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    
<div className="project1links-p4">
    <div className="links-project4">
        <div className="xyz-p4" style={{borderRadius:'0.5rem',}}>
        <div className="plink-p4">
            <div className="link-icon"><a href="https://app.royalindianvivah.com"><IoLinkOutline size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title">link</div>
        </div>
        {/* <div className="p1-github">
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
        </div> */}
        {/* <div className="p1-playstore">
            <div className="link-icon"><FaGooglePlay size={30} style={{color:'grey',}}/></div>
            <div className="link-title"><span>Indus Appstore</span></div>
        </div> */}
        </div>
    </div>
    
    </div>
    <div className="techno-used-project4"><span>JavaScript</span> <span>CSS</span> <span>PHP</span> <span>HTML</span> <span>BOOTSTRAP</span>  </div>
    </div>
    <div className="screens">
        <div className="wide-screens1-p4">
        <div className="wide"><img src={talasari1} alt="" /></div>
    <div className="wide"><img src={talasari2} alt="" /></div>
    <div className="wide"><img src={talasari3} alt="" /></div>
        </div>
        <div className="wide-screens2-p4">
        <div className="wide"><img src={talasari4} alt="" /></div>
    <div className="wide"><img src={talasari5} alt="" /></div>
    <div className="wide"><img src={talasari6} alt="" /></div>
        </div>

        {/* <div className="mobile-screens">
            <div className="mobile"><img src={} alt="" /></div>
            <div className="mobile"><img src={} alt="" /></div>
            <div className="mobile"><img src={} alt="" /></div>
            <div className="mobile"><img src={} alt="" /></div>
            <div className="mobile"><img src={} alt="" /></div>
            <div className="mobile"><img src={} alt="" /></div>
        </div> */}
    </div>
    </div>
    </div>

    </>
  )
}

export default Project4