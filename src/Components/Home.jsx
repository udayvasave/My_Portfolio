import React, { useState } from 'react'
import "./home.css"
import ThreeDObject from './ThreeDObject'
import { delay, motion } from 'framer-motion'
import Rocket from './Rocket'
import About from './About'
import Robot from './Robot'

// import { Application } from '@splinetool/runtime';  

const Home = () => {

  // const [move, setMove] = useState(false);
  return (
    <>
    <div className="section1">
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
transition={{duration:"1", delay:"0.2"}}


>
Hey, I'm Milind </motion.h1>
<motion.p 
initial={{y:-200}}
animate={{y:0}}
transition={{duration:"1", delay:"0.2"}} className='Con1-p1'>Software Engineer,<motion.div className='Text-fllstck'  >Fullstack & App Developer </motion.div></motion.p>

<motion.p 
initial={{y:-200}}
animate={{y:0}}
transition={{duration:"1", delay:"0.2"}} className='Con1-p2'>Founder @DMS Computers & Technology</motion.p>
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

<div className="section2">
  <About/>
</div>

    </>
  )
}

export default Home