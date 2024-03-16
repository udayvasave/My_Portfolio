import React from 'react'
import "./work.css"
// import { motion } from 'framer-motion'
import riv from '../assets/images/rivGradient.png';
import snacko from '../assets/project2-screens/snacko.png'
import { Link } from 'react-router-dom';
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Kanishka1 from "../assets/project3-screens/kanisha1.png"


const Work = () => {
  return (
    <div id='work' className='section3'>

        <div className="mai-con">

        <div className="skillsss">
        <h1>My Projects<span className='dott'>.</span></h1>
        <div className="linee"></div>
        </div>
            <div className="both-big-con">
            <div className="big-box-work">
            <div className="con1-work">
            <div className="image"><img src={riv} alt="" /></div>
                <div className="label"><h3>Matrimony Web & Mobile App</h3><div className="h-line"></div></div>
                <div className="techInfo" ><p>Flutter - HTML - CSS - JS - Bootstrap</p><span className='spanInTechUsed'> <p> <a href="https://app.royalindianvivah.com">< IoLinkOutline size={20} /></a></p> <p><a href="https://github.com/udayvasave">< FaGithub size={20} /></a></p> <p><a href="https://play.google.com/store/apps/details?id=io.ionic.Royal_indian_vivah&pcampaignid=web_share">< FaGooglePlay size={20} /></a></p></span></div>
                <div className="descrp"><p>Contributes in the development of Royal Indian Vivah, a comprehensive matrimony web and mobile application.Using HTML, CSS, JavaScript, and Bootstrap, I crafted the frontend of the web application, ensuring its responsiveness and aesthetic appeal.   </p></div>
                <a className='Link' href="/Project1"> <div className="button"><span >Read More</span></div></a>
                </div>
           
            {/* <div className="con2-work" style={{display:'none'}}> 
            <div className="image"><img src={riv} alt="" /></div>
            <div className="label"><h3>Matrimony Web App</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit </p></div>
                <Link className='Link' to="/Project2"> <div className="button"><span >Read More</span></div></Link>
            </div> */}

            <div className="con3-work">
            <div className="image"><img src={snacko} alt="" /></div>
            <div className="label"><h3>Snacko</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>React - Flutter</p><span className='spanInTechUsed'> <p> <a href="https://snacko.health/">< IoLinkOutline size={20} /></a></p> <p><a href="https://apps.apple.com/us/app/snacko-it/id6450678993">< FaApple size={20} /></a></p> <p><a href="https://play.google.com/store/apps/details?id=health.snacko">< FaGooglePlay size={20} /></a></p></span></div>
                <div className="descrp"><p>I've been part of the Snacko project, where I spearheaded the development of its web page and contributed significantly to crafting the frontend for its mobile applications on both Android and iOS platforms, leveraging the power of Flutter. </p></div>
               <a className='Link' href="/Project2"> <div className="button"><span >Read More</span></div></a>
            </div>

            </div>


            <div className="big-box-work2">
            <div className="con1-work">
                <div className="image"><img src={Kanishka1} alt="" /></div>
                <div className="label"><h3>Insurance and Finance Website and Mobile App</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>Flutter - HTML - CSS - JS - PHP - SQL </p></div>
                <div className="descrp"><p>Kanishka Consultancy presents a seamless solution for insurance and finance consultants to efficiently manage enquiries. Clients can submit inquiries through a user-friendly... </p></div>
                <Link className='Link' to="/Project3"> <div className="button"><span >Read More</span></div></Link>

                </div>
           
            {/* <div className="con2-work" style={{display:'none'}}> 
            <div className="image"><img src={riv} alt="" /></div>
            <div className="label"><h3>Matrimony Web App</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit </p></div>
                <Link className='Link' to="/"> <div className="button"><span >Read More</span></div></Link>

            </div> */}

            <div className="con3-work">
            <div className="image"><img src={snacko} alt="" /></div>
            <div className="label"><h3>Tapal Monitoring System</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit </p></div>
                <Link className='Link' to="/Project4"> <div className="button"><span >Read More</span></div></Link>

            </div>

            </div>
            </div>
        </div>
        

    </div>
  )
}

export default Work