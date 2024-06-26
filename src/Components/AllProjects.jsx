import React from "react";
import "./allproject.css";
import Navbar2 from "./Navbar2";
import AllProjectList from "./AllProjectList";
import { useEffect } from "react";

const AllProjects = () => {
  const ScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return null; // This component doesn't render anything
  };

  const projectSnacko = {
    number: "#1",
    title: "Snacko",
    description:
      "Contributed to enhancing user experiences for seamless navigation in the frontend development of a website and mobile app for an AI nutritional calorie tracker covering 3.9 million products.",
    linkss: {
      github: "https://github.com/udayvasave",
      url: "https://snacko.health/",
      playstore: "https://play.google.com/store/apps/details?id=health.snacko",
      apple: "https://apps.apple.com/us/app/snacko-it/id6450678993",
      projectPage: "/Project2",
    },
  };

  const projectRoyalIndianVivah = {
    number: "#2",
    title: "Royal Indian Vivah",
    description:
      "Crafted a frontend of matrimonial matchmaking platform offering seamless web and mobile experiences, fostering meaningful connections.",
    linkss: {
      github: "https://github.com/udayvasave",
      url: "https://app.royalindianvivah.com",
      playstore:
        "https://play.google.com/store/apps/details?id=com.royal_indian_vivah&hl=en&gl=US",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      projectPage: "/Project1",
    },
  };

  const projectKanishkaConsultancy = {
    number: "#3",
    title: "Kanishka Consultancy",
    description:
      "Led full-stack development for a dynamic client engagement platform, delivering personalized financial consultation via a seamless Flutter app(Android).",
    linkss: {
      // github: "https://github.com/udayvasave",
      url: "https://sidesambare.in",
      // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      projectPage: "/Project3",
    },
  };

  const projectTapalMonitoringSystem = {
    number: "#4",
    title: "Letter Monitoring System ",
    description:
      "Collaborated on the frontend development of an online letter management web app for Panchayat Samiti Talasari & Dahanu.",
    linkss: {
      // github: "https://github.com/udayvasave",
      // url: "https://sidesambare.in",
      // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      projectPage: "/Project4",
    },
  };

  const projectSchoolManagementSystem = {
    number: "#5",
    title: "School Management App",
    description:
      "Designed the frontend of a Flutter-based Parent and Teacher mobile apps.",
    linkss: {
      github: "https://github.com/udayvasave",
      // url: "https://sidesambare.in",
      // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      // projectPage:'/Project2'
    },
  };

  const projectMusicPlayer = {
    number: "#6",
    title: "Music Player",
    description:
      "Developed a dynamic music player using JavaScript, featuring essential functionalities such as play, pause, next, previous, and repeat.",
    linkss: {
      github: "https://github.com/udayvasave/Music-Player",
      // url: "https://mamachagaonresortt.netlify.app/",
      // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      // projectPage:'/Project2'
    },
  };
  const projectTravelrideGoa = {
    number: "#7",
    title: "Travelride Goa",
    description:
      "Developed frontend for a static tourist website spotlighting Goa's landmarks, cuisine, entertainment, accommodations, and experiences.",
    linkss: {
      github: "https://github.com/udayvasave/Travelride_Goa/",
      url: "https://travellridegoa.netlify.app/",
      // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      // projectPage:'/Project2'
    },
  };

  const projectmamachaGaonResort = {
    number: "#8",
    title: "Mama Cha Gaon Resort",
    description:
      "Created a comprehensive website tailored to showcase the unique offerings and amenities of a luxurious resort.",
    linkss: {
      github: "https://github.com/udayvasave/Mama-cha-gaon-Resort",
      url: "https://mamachagaonresortt.netlify.app/",
      // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      // projectPage:'/Project2'
    },
  };
 

  const projectJuniorClgWebsite = {
    number: "#9",
    title: "Csmacc Padgha Junior College",
    description:
      "Developed a junior college website using HTML CSS JS Bootstrap.",
    linkss: {
      // github: "https://github.com/udayvasave/Music-Player",
      url: "https://csmaccppadgha.netlify.app/",
      // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      // projectPage:'/Project2'
    },
  };

  const projectInvestmate = {
    number: "#10",
    title: "InvestMate",
    description:
      "Our stock simulator offers a unique blend of essential tools and features for aspiring traders. Users can engage in real-time trading with live market data through a refillable dummy account, ensuring a practical learning experience without financial risk. The platform also includes comprehensive educational modules covering key stock market concepts, along with essential risk management tools. This integrated approach provides users with a well-rounded and hands-on trading experience.",
    linkss: {
      github: "https://github.com/udayvasave/InvestMate",
      url: "https://investmatefinance.tech/",
      // playstore:"https://play.google.com/store/apps/details?id=health.snacko",
      // apple:"https://apps.apple.com/us/app/snacko-it/id6450678993",
      // projectPage:'/Project2'
    },
  };

  return (
    <>
      <ScrollToTopOnMount />
      <Navbar2 />
      <div className="All-projects">
        <AllProjectList
          title={projectSnacko.title}
          description={projectSnacko.description}
          number={projectSnacko.number}
          links={projectSnacko.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>

        <AllProjectList
          title={projectRoyalIndianVivah.title}
          description={projectRoyalIndianVivah.description}
          number={projectRoyalIndianVivah.number}
          links={projectRoyalIndianVivah.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>

        <AllProjectList
          title={projectKanishkaConsultancy.title}
          description={projectKanishkaConsultancy.description}
          number={projectKanishkaConsultancy.number}
          links={projectKanishkaConsultancy.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>

        <AllProjectList
          title={projectTapalMonitoringSystem.title}
          description={projectTapalMonitoringSystem.description}
          number={projectTapalMonitoringSystem.number}
          links={projectTapalMonitoringSystem.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>

        <AllProjectList
          title={projectSchoolManagementSystem.title}
          description={projectSchoolManagementSystem.description}
          number={projectSchoolManagementSystem.number}
          links={projectSchoolManagementSystem.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>

        <AllProjectList
          title={projectMusicPlayer.title}
          description={projectMusicPlayer.description}
          number={projectMusicPlayer.number}
          links={projectMusicPlayer.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>

        <AllProjectList
          title={projectTravelrideGoa.title}
          description={projectTravelrideGoa.description}
          number={projectTravelrideGoa.number}
          links={projectTravelrideGoa.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>

        <AllProjectList
          title={projectmamachaGaonResort.title}
          description={projectmamachaGaonResort.description}
          number={projectmamachaGaonResort.number}
          links={projectmamachaGaonResort.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>

        

        <AllProjectList
          title={projectJuniorClgWebsite.title}
          description={projectJuniorClgWebsite.description}
          number={projectJuniorClgWebsite.number}
          links={projectJuniorClgWebsite.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>


        <AllProjectList
          title={projectInvestmate.title}
          description={projectInvestmate.description}
          number={projectInvestmate.number}
          links={projectInvestmate.linkss}
        />
        <div className="sizedbox" style={{ height: "1rem" }}></div>
      </div>
    </>
  );
};

export default AllProjects;
