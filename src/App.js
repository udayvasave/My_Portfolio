// // import logo from './logo.svg';
// // import { Router } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar';
// import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Project1 from './Components/Project1';
// import Project2 from './Components/Project2';
// import Project3 from './Components/Project3';
// import Project4 from './Components/Project4';
// import AllProjects from './Components/AllProjects';

// function App() {
//   return (
//    <BrowserRouter>
//     <Router>
//    {/* <Home/> */}
//    <Routes>
//    <Route exact path="/" Component={Home}/>
//    <Route path="/skills" Component={About}/> 
//     <Route path="/Project1" Component={Project1}/> 
//     <Route path="/Project2" Component={Project2}/> 
//     <Route path="/Project3" Component={Project3}/> 
//     <Route path="/Project4" Component={Project4}/>  
//     <Route path="/AllProjects" Component={AllProjects}/>  
//     </Routes>
// </Router>
// </BrowserRouter>
  
   
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
import Project4 from './Components/Project4';
import AllProjects from './Components/AllProjects';
import AllProjectList from './Components/AllProjectList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<About />} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
        <Route path="/Project4" element={<Project4 />} />
        <Route path="/AllProjects" element={<AllProjects />} />
        {/* <Route path="/AllProjectList" element={<AllProjectList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
