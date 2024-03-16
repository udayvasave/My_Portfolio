import React from 'react'
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import './project3.css'
import Navbar2 from './Navbar2';
import kanishka1 from "../assets/project3-screens/kanisha1.png"
import kanishka2 from "../assets/project3-screens/kanishka3.png"
import kanishka3 from "../assets/project3-screens/kanishka4.png"
import kanishka4 from "../assets/project3-screens/kanishkaApp1.jpg"
import kanishka5 from "../assets/project3-screens/kanishkaApp2.jpg"
import kanishka6 from "../assets/project3-screens/kanishkaApp3.jpg"




const Project3 = () => {
  return (
  
    <div className='section1-p3'>
      <Navbar2 />
    <div className='project3'>
      <div className="con1-p3">
        <div className="heading-p3">
          <h1>Kanishka Consultancy</h1>
        </div>
        <div className="description-p3">
      <p>Kanishka Consultancy presents a seamless solution for insurance and finance consultants to efficiently manage enquiries. Clients can submit inquiries through a user-friendly website, with data securely stored in a centralized database. Leveraging Flutter, administrators can access and take action on enquiries via a mobile app, facilitating swift review, assignment, and resolution. Real-time synchronization ensures updated information across platforms, empowering consultants to deliver timely responses and exceptional service. Kanishka Consultancy enhances operational efficiency, client satisfaction, and business growth by centralizing enquiry management and enabling proactive client engagement. With intuitive interfaces and robust security measures, Kanishka Consultancy is the ultimate tool for modern consultancy firms seeking to elevate service standards and stay ahead in the competitive market. Experience the power of Kanishka Consultancy to streamline your enquiry management process and unlock new opportunities for success in the insurance and finance industry.</p>
       </div>        
      </div>
      <div className="con2-p3">
        <div className="tech-used-p3">
        <div className="techno-used-project2">
        <span>Flutter</span> <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>PHP</span>  
    </div>
        </div>
        <div className="links-p-3">
        <div className="project1links">
    <div className="links-project1">
        <div className="xyz" style={{borderRadius:'0.5rem',}}>
        <div className="plink">
            <div className="link-icon"><a href="https://sidsambare.in"><IoLinkOutline size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title">Link</div>
        </div>
        <div className="p1-github">
            <div className="link-icon"><a href="https://github.com/udayvasave"><FaGithub  size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title">Github</div>
        </div>
        {/* <div className="p1-playstore">
            <div className="link-icon"><a href="https://play.google.com/store/apps/details?id=health.snacko"><FaGooglePlay size={30} style={{color:'grey',}}/></a></div>
           <div className="link-title"><span>Playstore</span></div>
        </div> */}
        {/* <div className="p1-playstore">
            <div className="link-icon"><a href="https://apps.apple.com/us/app/snacko-it/id6450678993"><FaApple size={30} style={{color:'grey',}}/></a></div>
            <div className="link-title"><span style={{whiteSpace:'nowrap'}}>App Store</span></div>
        </div> */}
        {/* <div className="p1-playstore">
            <div className="link-icon"><FaGooglePlay size={30} style={{color:'grey',}}/></div>
            <div className="link-title"><span>Indus Appstore</span></div>
        </div> */}
        </div>
    </div>
    </div>
        </div>

        
      </div>
    </div>
    <div className="screens-p3">
<div className="big-screen-p3">
  <div className="img1"><img src={kanishka1} alt="" /></div>
  <div className="img1"><img src={kanishka2} alt="" /></div>
  <div className="img1"><img src={kanishka3} alt="" /></div>
</div>
<div className="smallscreens-p3">
  <div className="Mobscreen1"><img src={kanishka4} alt="" /></div>
  <div className="Mobscreen1"><img src={kanishka5} alt="" /></div>
  <div className="Mobscreen1"><img src={kanishka6} alt="" /></div>
</div>
    </div>
    </div>
  )
}

export default Project3