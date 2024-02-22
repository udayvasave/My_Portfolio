import React, { useEffect, useState, useRef } from 'react'
import "./home.css"
import ThreeDObject from './ThreeDObject'
import { motion } from 'framer-motion'
import Rocket from './Rocket'
import About from './About'
import Robot from './Robot'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Work from './Work'
import Experience from './Experience'

// import { Application } from '@splinetool/runtime';  

const Home = () => {

  const skillsRef = useRef(null);
  // const location = useLocation();

  const scrollToSkills = ()=>{
    skillsRef.current.scrollIntoView({behaviour : "smooth"});
  };

////////////////////////////////////// home ////////////////////////////
  // const homeRef = useRef(null);
  // const locations = useLocation();

  // useEffect(()=>{
  //   const hashs= location.hash.substring(1);
  //   if (hashs === 'home'){
  //     skillsRef.current.scrollIntoView({behaviour : 'smooth'});
  //   }
  // },[location]);

  // const [move, setMove] = useState(false);
  return (
    <>
    <Navbar />
    <div className="section1" >
<div className="containers-home">
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

<div className="section2" ref={skillsRef} >
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}> <About/> </motion.div>
</div>

<div className="section3">
  <Work/>
</div>
<div className="section4">
  <Experience/>
</div>

    </>
  )
}

export default Home