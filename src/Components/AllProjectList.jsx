import React from 'react'
import './allproject.css';
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AllProjectList = ({title, description, number, links}) => {
  return (
    <>
      <div className="snackoProject-allproject">
        <div className="numbering-projects">
          <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>{number}</span>
        </div>
        <div className="snacko1 list-container-allproject">
          <div className="proDescrp">
            <h2>{title}</h2>
            <span>
             {description}
            </span>
          </div>

          <div className="linksAllpro">
            {links.playstore && (
                <a  href={links.playstore}>
              <span>
                {" "}
                <FaGooglePlay size={20} />{" "}
              </span>
            </a>
            )}
            
            {links.apple && (
                <a href={links.apple}>
                <span>
                  {" "}
                  <FaApple size={20} />
                </span>{" "}
              </a>
            )}
            
            {links.github && (
                 <a href={links.github}>
                 {" "}
                 <span>
                   <FaGithub size={20} />{" "}
                 </span>{" "}
               </a>
            )}
           
            {links.url && (
                <a href={links.url}>
                <span>
                  <IoLinkOutline size={20} />
                </span>
              </a>
            )}

            {links.projectPage && (
                <Link to={links.projectPage}>
                <span>
                  <FaArrowUpRightFromSquare size={17} />
                </span>
              </Link>
            )}
            
          </div>
        </div>
        </div>
    </>
  )
}

export default AllProjectList