import React from 'react'
import "./work.css"
import riv from '../assets/images/rivGradient.png';
import snacko from '../assets/project2-screens/snackoHomepage.png'
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Kanishka1 from "../assets/project3-screens/kanisha1.png"
import panchayatSamiti from "../assets/project4-screens/Ps talasari1.png"

const Work = () => {

    const handleClick = () => {
        const project1Section = document.getElementById('section1-project1');
        if (project1Section) {
            project1Section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id='work' className='section3'>

            <div className="mai-con">

                <div className="skillsss">
                    <h1>My Projects<span className='dott'>.</span></h1>
                    <div className="linee"></div>
                </div>
                <div className="btn-viewAll"><a className='invisible-a' href=""></a><Link className='visible-a' to="/AllProjects"> View All</Link></div>
                <div className="both-big-con">
                    <div className="big-box-work">
                        <div className="con1-work">
                            <div className="image"><img src={riv} alt="" /></div>
                            <div className="label"><h3>Matrimony Web & Mobile App</h3><div className="h-line"></div></div>
                            <div className="techInfo" ><p>Flutter - HTML - CSS - JS - Bootstrap</p><span className='spanInTechUsed'> <p> <a href="https://app.royalindianvivah.com">< IoLinkOutline size={20} /></a></p> <p><a href="https://github.com/udayvasave">< FaGithub size={20} /></a></p> <p><a href="https://play.google.com/store/apps/details?id=io.ionic.Royal_indian_vivah&pcampaignid=web_share">< FaGooglePlay size={20} /></a></p></span></div>
                            <div className="descrp"><p>Contributes in the development of Royal Indian Vivah, a comprehensive matrimony web and mobile application.Using HTML, CSS, JavaScript, and Bootstrap, I crafted the frontend of the web application, ensuring its responsiveness and aesthetic appeal.   </p></div>
                            <Link className='Link' to="/Project1" onClick={handleClick} > <div className="button"><span >Read More</span></div></Link>
                        </div>

                        <div className="con3-work">
                            <div className="image"><img src={snacko} alt="" /></div>
                            <div className="label"><h3>Snacko</h3><div className="h-line"></div></div>
                            <div className="techInfo"><p>React - Flutter</p><span className='spanInTechUsed'> <p> <a href="https://snacko.health/">< IoLinkOutline size={20} /></a></p> <p><a href="https://apps.apple.com/us/app/snacko-it/id6450678993">< FaApple size={20} /></a></p> <p><a href="https://play.google.com/store/apps/details?id=health.snacko">< FaGooglePlay size={20} /></a></p></span></div>
                            <div className="descrp"><p>I've been part of the Snacko project, where I spearheaded the development of its web page and contributed significantly to crafting the frontend for its mobile applications on both Android and iOS platforms, leveraging the power of Flutter. </p></div>
                            <Link className='Link' to="/Project2"> <div className="button"><span >Read More</span></div></Link>
                        </div>
                    </div>
                    <div className="big-box-work2">
                        <div className="con1-work">
                            <div className="image"><img src={Kanishka1} alt="" /></div>
                            <div className="label"><h3>Insurance and Finance Website and Mobile App</h3><div className="h-line"></div></div>
                            <div className="techInfo" ><p>Flutter - HTML - CSS - JS - PHP - Bootstrap </p><span className='spanInTechUsed'> <p> <a href="https://sidsambare.in">< IoLinkOutline size={20} /></a></p> <p><a href="https://github.com/udayvasave">< FaGithub size={20} /></a></p> </span></div>
                            <div className="descrp"><p>Kanishka Consultancy presents a seamless solution for insurance and finance consultants to efficiently manage enquiries. Clients can submit inquiries through a user-friendly... </p></div>
                            <Link className='Link' to="/Project3"> <div className="button"><span >Read More</span></div></Link>
                        </div>
                        <div className="con3-work">
                            <div className="image"><img src={panchayatSamiti} alt="" /></div>
                            <div className="label"><h3>Letter Monitoring System (Panchayat Samiti Talasari)</h3><div className="h-line"></div></div>
                            <div className="techInfo" ><p>HTML - CSS - JS - PHP - MySql - Bootstrap</p><span className='spanInTechUsed'> <p> <a href="https://panchayatsamititalasari.org/">< IoLinkOutline size={20} /></a></p>  </span></div>
                            <div className="descrp"><p> Letter monitoring system streamlines communication and workflow processes within the Panchayat Samiti Talasari and Dahanu. It allows registration branch personnel to register new letters... </p></div>
                            <Link className='Link' to="/Project4"> <div className="button"><span >Read More</span></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
