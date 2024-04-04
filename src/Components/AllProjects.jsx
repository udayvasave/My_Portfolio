import React from "react";
import "./allproject.css";
import Navbar2 from "./Navbar2";
import AllProjectList from "./AllProjectList";


const AllProjects = () => {
  return (
    <>
      <Navbar2 />
      <div className="All-projects">
      <AllProjectList title='Snacko' />


      </div>
    </>
  );
};

export default AllProjects;
