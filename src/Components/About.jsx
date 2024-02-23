import React from 'react'
import './about.css'
import { CiDesktop } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
// import { RiFlutterFill } from "react-icons/ri";
import { TbBrandFlutter } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
    <div id='about' className="main-container">

    <div className="skills">
        <motion.h1 
        initial={{x:-200}}
        animate={{x:0}}
        transition={{duration:1, }} 
        >My Skills<span className='dot'>.</span></motion.h1>
        <div className="line"></div>
    </div>

    <div className="big-box">

    <div className="con1">
        <div className="logoText">
            <div className="SkillLogo"> <FaNodeJs size={50} color='white' className='DesktopICon' /> </div>
            <div className="SkillHead"> <span className='skillTitle'>Backend Dev</span> NodeJs, Python </div>

        </div>
        <div className="skillContent">
            <div className="h3line">
                <span>{"<h3>"}</span>
                <div className='straightline'></div>
                <span>{"</h3>"}</span>
            </div>
            <div className="para">Skilled in backend technologies including PHP, Python, Node.js, and relational and NoSQL databases like MySQL and MongoDB</div>
        </div>
    </div>
    <div className="con2">
    <div className="logoText">
            <div className="SkillLogo" > <motion.div className="iconholder"  animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}> <FaReact size={50} color='white'  className='DesktopICon' /></motion.div> </div>
            <div className="SkillHead"> <span className='skillTitle2'>Frontend Dev</span><span>  React, NextJS </span></div>

        </div>
        <div className="skillContent">
            <div className="h3line">
                <span>{"<h3>"}</span>
                <div className='straightline'></div>
                <span>{"</h3>"}</span>
            </div>
            <div className="para">Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</div>
        </div>
    </div>
    
    <div className="con3">
    <div className="logoText">
            <div className="SkillLogo"> <TbBrandFlutter size={50} color='white' className='DesktopICon' /> </div>
            <div className="SkillHead"> <span className='skillTitle3'>Flutter Dev</span> Android, iOS </div>

        </div>
        <div className="skillContent">
            <div className="h3line">
                <span>{"<h3>"}</span>
                <div className='straightline'></div>
                <span>{"</h3>"}</span>
            </div>
            <div className="para">Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</div>
        </div>
    </div>

    </div>
    </div>
    </>
  )
}

export default About