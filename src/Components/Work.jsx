import React from 'react'
import "./work.css"
import { motion } from 'framer-motion'
import riv from '../assets/images/rivGradient.png';
import tapal from "../assets/images/Tapal monitoring system.png"

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
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit <span> <a href="">Read more &gt;</a> </span></p></div>
                </div>
           
            <div className="con2-work" style={{display:'none'}}> 
            <div className="image"><img src={riv} alt="" /></div>
            <div className="label"><h3>Matrimony Web App</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit <span> <a href="">Read more &gt;</a> </span></p></div>
            </div>

            <div className="con3-work">
            <div className="image"><img src={tapal} alt="" /></div>
            <div className="label"><h3>School Management Web & Mobile App</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit <span> <a href="">Read more &gt;</a> </span></p></div>
            </div>

            </div>


            <div className="big-box-work2">
            <div className="con1-work">
                <div className="image"><img src={riv} alt="" /></div>
                <div className="label"><h3>Matrimony Web & Mobile App</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit <span> <a href="">Read more &gt;</a> </span></p></div>
                </div>
           
            <div className="con2-work" style={{display:'none'}}> 
            <div className="image"><img src={riv} alt="" /></div>
            <div className="label"><h3>Matrimony Web App</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit <span> <a href="">Read more &gt;</a> </span></p></div>
            </div>

            <div className="con3-work">
            <div className="image"><img src={tapal} alt="" /></div>
            <div className="label"><h3>Tapal Monitoring System</h3><div className="h-line"></div></div>
                <div className="techInfo"><p>HTML - CSS - JS - PHP - SQL</p></div>
                <div className="descrp"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa quo consequatur natus ipsum dolor sit amet, consectetur adipisicing elit <span> <a href="">Read more &gt;</a> </span></p></div>
            </div>

            </div>
            </div>
        </div>
        

    </div>
  )
}

export default Work