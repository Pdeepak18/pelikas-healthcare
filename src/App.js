
import './App.css';
import Home from "../src/pages/Home"
import Contactus from "../src/pages/Contactus"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <div className=''>

<Routes>
          <Route  index path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contactus />} />
          {/* <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourproducts" element={<Ourproducts />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<PageNotFound />} /> */}
       </Routes>
   </div>
  );
}

export default App;
