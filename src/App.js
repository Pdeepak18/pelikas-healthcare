import "./App.css";
import Home from "../src/pages/Home";
import Contactus from "../src/pages/Contactus";
import { Routes, Route } from "react-router-dom";
import Aboutpelikas from "../src/pages/About us/Aboutpelikas";
import Infrasturcture from "../src/pages/About us/Infrastructure";
import Missionandvalue from "../src/pages/About us/Missionandvalue";
import Overview from "./pages/About us/Overview";
import Whychooseus from "./pages/About us/Whychooseus";
import Social from "./pages/About us/Social";

function App() {
  return (
    <div className="scroll-smooth	">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contactus />} />

        <Route path="about-pelikas-healthcare">
          <Route index element={<Aboutpelikas />} />
          <Route path="infrasturcture" element={<Infrasturcture />} />
          <Route path="mission-and-value" element={<Missionandvalue />} />
          <Route path="overview-pelikas-healthcare" element={<Overview />} />
          <Route path="why-choose-us" element={<Whychooseus />} />
          <Route path="social-responsibility" element={<Social />} />
        </Route>

        {/* <Route path="about-pelikas-healthcare" element={<Aboutpelikas  />}>
          <Route  path="infrasturcture" element={<Infrasturcture />} />
          <Route  path="mission-and-value" element={<Missionandvalue />} />
          </Route> */}

        {/* <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourproducts" element={<Ourproducts />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
