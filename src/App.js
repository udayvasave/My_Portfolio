// import logo from './logo.svg';
// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
   
    <Router>
<div>
  <Navbar/>
  <Home/>
 
  {/* <Route path="/" Component={Home}/> 
    <Route path="/About" Component={About}/>   */}
 
</div>
    </Router>

  
   
  );
}

export default App;
