import Product from './pages/Prodct';
import './App.css';
import Home from "../src/pages/Home"
import { Routes, Route } from 'react-router-dom';
import Message from './pages/Message';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Reports from './pages/Reports';
import Careers from './pages/Careers';
import News from './pages/News';
import About_Pelikas from './pages/about us/About_Pelikas';
import Mission from './pages/about us/Mission';
import Infrastructure from './pages/about us/Infrastructure';
import social from './pages/about us/social';
import Overview from './pages/about us/Overview';
import WhyChooseUs from './pages/about us/WhyChooseUs';

function App() {
  return (
   <div className='text-3xl w-full'>
  <Navbar/>
  <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/messages' Component={Message}/>
    <Route path='/about-us' Component={AboutUs}/>
    <Route path='/reports' Component={Reports}/>
    <Route path='/careers' Component={Careers}/>
    <Route path='/news' Component={News}/>
    <Route exact path="/product" Component={Product}/>
    <Route path='/about-pelikas-healthcare' Component={About_Pelikas}/>
    <Route path='/mission-vision-values' Component={Mission}/>
    <Route path='/infrastructure' Component={Infrastructure}/>
    <Route path='social' Component={social}/>
    <Route path='overview' Component={Overview}/>
    <Route path="why-choose-us" Component= {WhyChooseUs}/>
  </Routes>
   </div>
  );
}

export default App;
