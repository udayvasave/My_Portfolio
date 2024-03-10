import React from 'react'
import snack1 from '../assets/project2-screens/Screenshot 2024-03-02 212146.png'
import snack2 from '../assets/project2-screens/snacko.png'
import snackMobile1 from "../assets/project2-screens/IMG-20240302-WA0027.jpg"
import snackMobile2 from "../assets/project2-screens/IMG-20240302-WA0028.jpg"
import snackMobile3 from "../assets/project2-screens/IMG-20240302-WA0024.jpg"
import snackMobile4 from "../assets/project2-screens/IMG-20240302-WA0025.jpg"
import snackMobile5 from "../assets/project2-screens/IMG-20240302-WA0026.jpg"
import snackMobile6 from "../assets/project2-screens/IMG-20240302-WA0028.jpg"
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Navbar2 from "./Navbar2"
import "./project1.css"
import "./project2.css"



const Project2 = () => {
  return (
    <div>
       <Navbar2 />
    <div  className="section1-project">
    <div className="main-con">

    <div id='section1-project2' className="project1-heading"><center><h1>Snacko It</h1></center></div>
    
    <div className="techno-used-project2">
    <span>React</span> <span>Flutter</span> 
    </div>

    <div className="description">
        <p>I've been part of the Snacko project, where I spearheaded the development of its web page and contributed significantly to crafting the frontend for its mobile applications on both Android and iOS platforms, leveraging the power of Flutter.</p>
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
            <div className="link-icon"><a href="https://snacko.health/"><IoLinkOutline size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title">Link</div>
        </div>
        <div className="p1-github">
            <div className="link-icon"><a href="https://github.com/udayvasave"><FaGithub  size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title">Github</div>
        </div>
        <div className="p1-playstore">
            <div className="link-icon"><a href="https://play.google.com/store/apps/details?id=health.snacko"><FaGooglePlay size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title"><span>Playstore</span></div>
        </div>
        <div className="p1-playstore">
            <div className="link-icon"><a href="https://apps.apple.com/us/app/snacko-it/id6450678993"><FaApple size={30} style={{color:'grey',}}/></a></div>
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
        <div className="wide"><img src={snack1} alt="" /></div>
    {/* <div className="wide"><img src={} alt="" /></div> */}
    <div className="wide"><img src={snack2} alt="" /></div>
        </div>
        <div className="mobile-screens">
            <div className="mobile"><img src={snackMobile1} alt="" /></div>
            <div className="mobile"><img src={snackMobile2} alt="" /></div>
            <div className="mobile"><img src={snackMobile3} alt="" /></div>
            <div className="mobile"><img src={snackMobile4} alt="" /></div>
            <div className="mobile"><img src={snackMobile5} alt="" /></div>
            <div className="mobile"><img src={snackMobile6} alt="" /></div>
        </div>
    </div>
    </div>
    </div>
   
    </div>
  )
}

export default Project2