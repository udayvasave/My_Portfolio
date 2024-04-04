import React from 'react'
import './allproject.css';
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const AllProjectList = ({title}) => {
  return (
    <>
      <div className="snackoProject-allproject">
        <div className="numbering-projects">
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>#1</span>
        </div>
        <div className="snacko1 list-container-allproject">
          <div className="proDescrp">
            <h2>{title}</h2>
            <span>
              AI nutritional calorie tracker for 3.9 million products.
            </span>
          </div>

          <div className="linksAllpro">
            <a href="https://play.google.com/store/apps/details?id=health.snacko">
              <span>
                {" "}
                <FaGooglePlay size={20} />{" "}
              </span>
            </a>
            <a href="https://apps.apple.com/us/app/snacko-it/id6450678993">
              <span>
                {" "}
                <FaApple size={20} />
              </span>{" "}
            </a>
            {/* <a href="https://github.com/udayvasave">
              {" "}
              <span>
                <FaGithub size={20} />{" "}
              </span>{" "}
            </a> */}
            <a href="https://snacko.health/">
              <span>
                <IoLinkOutline size={20} />
              </span>
            </a>
          </div>
        </div>
        </div>
    </>
  )
}

export default AllProjectList