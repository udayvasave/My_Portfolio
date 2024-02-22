import React from 'react'
import "./navbar.css"
import {Link } from 'react-router-dom';
import About from './About';

function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="navcomponents">
            <ul>
                <li><a href="/" >{'<home />'}</a></li>
                <li><a href="/home#skills" >{'<skills/>'}</a></li>
                <li><a href="/" >{'<work />'}</a></li>
                <li><a href="/" >{'<contact />'}</a></li>
                {/* <li><a href="/" >Contact</a></li> */}
            </ul>
           
        </div>
    </div>
    </>
  )
}

export default Navbar