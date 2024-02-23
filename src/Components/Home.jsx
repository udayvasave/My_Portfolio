import React, { useEffect, useState, useRef } from 'react'
import "./home.css"
import ThreeDObject from './ThreeDObject'
import { motion,useAnimation } from 'framer-motion'
import Rocket from './Rocket'
import About from './About'
import Robot from './Robot'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Work from './Work'
import Experience from './Experience'
import Contact from './Contact'

// import { Application } from '@splinetool/runtime';  

const Home = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const navbarHeight = document.querySelector("nav").offsetHeight; // Get height of the navbar
        const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
    }
};

useEffect(() => {
  window.scrollTo(
    {top:0,
    behavior:"smooth"
    }
  ); // Scroll to the top of the page on component mount
}, []);


  const skillsRef = useRef(null);
  // const location = useLocation();

  const scrollToSkills = ()=>{
    skillsRef.current.scrollIntoView({behaviour : "smooth"});
  };

//////////////////////////////////////////////////////// scroll animation //////////////////////////////
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffset = document.getElementById('sec2').offsetTop; // Replace 'your-section-id' with the actual ID of your section
      const windowHeight = window.innerHeight;

      // Calculate the distance between the scroll position and the section
      const distance = Math.abs(scrollPosition - sectionOffset);

      // Adjust the animation based on the distance from the section
      controls.start({
        opacity: distance < windowHeight ? 1 : 0, // Fade in when close to the section, fade out when far away
        scale: distance < windowHeight ? 1 : 0.5, // Scale up when close to the section, scale down when far away
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);







  return (
    <>
   
    <Navbar scrollToSection={scrollToSection} />
    <div className="section1" >
<div id='home' className="containers-home">
  <div className="outerCon1">

  <div className="Con1">
<motion.h1 
// animate={{x: move ? 100 : 0}}
// onHoverStart={()=>{  setMove(!false)}}
// onHoverEnd={()=>{setMove(false)}} ////////////// should use onClick instead of onHoverStart &end
// transition={{type:'tween',duration:1}}
// transition={{type:'spring',bounce:5}} // dont use
// transition={{type:'inertia',velocity:30}} // dont use

// initial={{opacity:0,scale:0.5}}
// animate={{opacity:1,scale:1}}
// transition={{duration:0.5}}

//  whileHover={{scale:1.1}}
// drag whileDrag={{scale:1.1}}
drag dragConstraints={{left:0,top:0,right:450,bottom:200}}

// animate={{rotate:[0,180,180,0]}}
// transition={{repeat:5, duration:1}}

initial={{x:-1000}}
animate={{x:0}}
transition={{duration:1, }}


>
Hey, I'm Milind </motion.h1>
<motion.p 
initial={{y:-200}}
animate={{y:0}}
transition={{duration:1, }} className='Con1-p1'><motion.div className='Text-fllstck'  >Fullstack & App Developer </motion.div></motion.p>

<motion.p 
initial={{y:-200}}
animate={{y:0}}
transition={{duration:1, }} className='Con1-p2'>Founder @DMS Computers & Technology</motion.p>
<motion.p
 initial={{x:1000}}
animate={{x:0}}
transition={{duration:1}}
 
className='parainCon1'>Over the past four years, I've been deeply immersed in building and scaling digital <br /> solutions for startups and companies. During this time, I've had the privilege of <br /> crafting impactful web applications, websites, and mobile apps that drive <br /> innovation and deliver tangible results.</motion.p>

</div>

    <div className="rocket">
      {/* <Rocket/> */}
    </div>
  </div>
 
    <motion.div  className="Con2">
    {/* <ThreeDObject/> */}
    <Robot/>
    </motion.div>  

</div>
</div>

<div id='sec2' className="section2" ref={skillsRef} >
  <motion.div 
   // Animation duration
  > <About/> </motion.div>
</div>

<div  className="section3">
  <Work/>
</div>
<div  className="section4">
  <Experience/>
</div>
<div  className="section5">
  <Contact/>
</div>

    </>
  )
}

export default Home