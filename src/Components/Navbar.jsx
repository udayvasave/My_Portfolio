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
                <li><Link to="/" >{'<home />'}</Link></li>
                <li><Link to="About" >{'<skills/>'}</Link></li>
                <li><Link to="/" >{'<work />'}</Link></li>
                <li><Link to="/" >{'<contact />'}</Link></li>
                {/* <li><Link to="/" >Contact</Link></li> */}
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar