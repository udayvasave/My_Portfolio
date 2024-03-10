// import logo from './logo.svg';
// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
import Project4 from './Components/Project4';

function App() {
  return (
   
    <Router>
   {/* <Home/> */}
   <Routes>
   <Route exact path="/" Component={Home}/>
   <Route path="/skills" Component={About}/> 
    <Route path="/Project1" Component={Project1}/> 
    <Route path="/Project2" Component={Project2}/> 
    <Route path="/Project3" Component={Project3}/> 
    <Route path="/Project4" Component={Project4}/>  
    </Routes>
</Router>
  
   
  );
}

export default App;
