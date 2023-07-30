import './App.css';
import Navbar from './components/Navbar';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';
// import Navbar from './components/Navbar';
import {BrowserRouter as  Router, Switch, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Product';
import Careers from './components/pages/Career';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/contact-us' exact Component={ContactUs}/>
        <Route path='/services' exact Component={Services}/>
        <Route path='/product' exact Component={Products}/>
        <Route path='/about-us' exact Component={AboutUs}/>
        <Route path='/careers' exact Component={Careers}/>
        
      </Routes>
    </div>
  );
}

export default App;
