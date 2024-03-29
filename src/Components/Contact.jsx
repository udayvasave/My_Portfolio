import React, { useState } from 'react'
import "./contact.css"
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
// import { FiTwitter } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";


const Contact = () => {

const [isHover, setIsHover] = useState(false);

const handleMouseEnter = ()=>{
setIsHover(true);
}
 const handlemouseLeave  = ()=> {
  setIsHover(false);
 }


  return (
    <>
    <div id='contact' className="section5">
    <div className="main-container-contact">
    <div className="contactHead">
        <h1>Contact<span>.</span></h1>
    </div>
    <div className="contact-text">
        <span>Thank you for taking the time to explore my portfolio. If you have any inquiries, collaboration opportunities, or simply want to get in touch, feel free to reach out using the following methods:</span>
    </div>
    <div className="socialiconsandtext">
    <div className="socials-med">
        <div className="social1"> <a onMouseHover={handleMouseEnter} onMouseLeave={handlemouseLeave} style={{color: isHover ? 'green' : 'white'}} href="mailto:udayvasave94@gmail.com"><div className="icon-con" >< AiOutlineMail style={{backgroundColor: isHover ? 'yellow' : 'transparent',}}  className='react-icon' size={30} /> </div> </a> <a href="mailto:milindvavare@gmail.com"><div className="icon-text">udayvasave94@gmail.com</div></a></div>
        <div className="social2"><a href="https://www.linkedin.com/in/uday-vasave/"><div className="icon-con"><  AiOutlineLinkedin className='react-icon' size={30}/></div> </a> <a href="https://www.linkedin.com/in/uday-vasave/"><div className="icon-text">LinkedIn</div></a></div>
        <div className="social3"><a href="https://www.instagram.com/uday__vasave/"><div className="icon-con">< AiOutlineInstagram className='react-icon' size={30}/></div></a><a href="https://www.instagram.com/uday__vasave/"> <div className="icon-text">Instagram</div></a></div>
        <div className="social4"><a href="https://twitter.com/udayvasave"><div className="icon-con">< CiTwitter className='react-icon' size={30}/></div></a> <a href="https://twitter.com/udayvasave"><div className="icon-text">Twitter</div></a></div>
    </div>
    </div>
    <div className="contact-text">
<span>I value open communication and am always eager to connect with fellow professionals and enthusiasts in the field. Whether you have feedback, questions, or exciting projects to discuss, I look forward to hearing from you!</span>    </div>
    </div>
    </div>
    </>
  )
}

export default Contact