import React from "react";
import "./allproject.css";
import Navbar2 from "./Navbar2";
import AllProjectList from "./AllProjectList";

const AllProjects = () => {
  const projectSnacko = 
    {
      number: "#1",
      title: "Snacko",
      description: "AI nutritional calorie tracker for 3.9 million products.",
      linkss: {
        github: "https://github.com/udayvasave",
        url: "https://snacko.health/",
        playstore:"https://play.google.com/store/apps/details?id=health.snacko",
        apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      },
    }
  

  const projectRoyalIndianVivah = 
    {
      number: "#2",
      title: "Royal Indian Vivah",
      description: "Matrimonial matchmaking web & mobile app",
      linkss: {
        github: "https://github.com/udayvasave",
        url: "https://snacko.health/",
        playstore:"https://play.google.com/store/apps/details?id=health.snacko",
        // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      },
    }

    const projectKanishkaConsultancy = 
    {
      number: "#3",
      title: "Kanishka Consultancy",
      description: "website for Insurance & Finance Consultant can handle leads in flutter app",
      linkss: {
        // github: "https://github.com/udayvasave",
        url: "https://sidesambare.in",
        // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
        // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      },
    }
  

  return (
    <>
      <Navbar2 />
      <div className="All-projects">
        <AllProjectList
          title={projectSnacko.title}
          description={projectSnacko.description}
          number={projectSnacko.number}
          links={projectSnacko.linkss}
        />
        <div className="sizedbox" style={{height:'1rem'}}></div>
         
         <AllProjectList
          title={projectRoyalIndianVivah.title}
          description={projectRoyalIndianVivah.description}
          number={projectRoyalIndianVivah.number}
          links={projectRoyalIndianVivah.linkss}
        />
         <div className="sizedbox" style={{height:'1rem'}}></div>
         
         <AllProjectList
          title={projectKanishkaConsultancy.title}
          description={projectKanishkaConsultancy.description}
          number={projectKanishkaConsultancy.number}
          links={projectKanishkaConsultancy.linkss}
        />
      </div>
    </>
  );
};

export default AllProjects;
