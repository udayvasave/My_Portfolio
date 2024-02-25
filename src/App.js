// import logo from './logo.svg';
// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ProjectMatri from './Components/ProjectMatri';

function App() {
  return (
   
    <Router>
   {/* <Home/> */}
   <Routes>
   <Route exact path="/" Component={Home}/> 
    <Route path="/ProjectMatri" Component={ProjectMatri}/>  
    </Routes>
</Router>
  
   
  );
}

export default App;
