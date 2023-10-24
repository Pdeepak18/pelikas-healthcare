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
import EnteralFormulation from "./components/product/EnteralFormulation";
import InhalationalFormulation from "./components/product/InhalationalFormulations";
import Others from "./components/product/Others";
import ParenteralFormulations from "./components/product/ParenteralFormulations";
import Productdropdown from "./components/product/Productdropdown";
import Tablet from "./components/product/Tablet";
import TopicFormulation from "./components/product/TopicFormulation";
import OpthlamicProduct from "./components/product/OpthlamicProduct";
import Services from "./pages/Services";
import InternationalPresence from "./pages/InternationalPresence";
import PageNotFound from "./pages/PageNotFound";
import Career from "./pages/Career";
import GlobalPresence from "./pages/GlobalPresence";
import EnternalCapsules from "./components/Enternal_product/Capsules";
import Tablets from "./components/Enternal_product/Tablets";
import Suppositories from "./components/Enternal_product/Suppositories";
import Lozenges from "./components/Enternal_product/Lozenges";
import Sachets from "./components/Enternal_product/Sachets";
import DryPowder from "./components/Parental_product/DryPowder";
import LiquidInjectables from "./components/Parental_product/LiquidInjectables";
import PrifilledSyringes from "./components/Parental_product/PrifilledSyringes";
import Infusion from "./components/Parental_product/Infusion";
import ContrastMedia from "./components/Parental_product/ContrastMedia";
import Inhalers from "./components/Inhalational_product/Inhalers";
import NasalSprays from "./components/Inhalational_product/NasalSprays";
import Repulses from "./components/Inhalational_product/Repulses";
import Rotacaps from "./components/Inhalational_product/Rotacaps";
import Creamointgel from "./components/Topical_product/Creamointgel";
import LotionPowder from "./components/Topical_product/LotionPowder";
import SerumDropSprays from "./components/Topical_product/SerumDropSprays";
import EyeEarDrop from "./components/Opthalmic_product/EyeEarDrop";
import ImplantLenses from "./components/Opthalmic_product/ImplantLenses";
import Intraocular from "./components/Opthalmic_product/Intraocular";
import Opthalmic from "./components/Opthalmic_product/Opthalmic";
import Hospital from "./components/Others/Hospital";
import Surgical from "./components/Others/Surgical";
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
        <Route path="products">
          <Route index element={<Productdropdown />} />
          {/* enteral-formulation */}
          <Route path="enteral-formulation">
            <Route index element={<EnteralFormulation />} />
            <Route path="Capsules" element={<EnternalCapsules />} />
            <Route path="Tablets" element={<Tablets />} />
            <Route path="Lozenges" element={<Lozenges />} />
            <Route path="Sachets" element={<Sachets />} />
            <Route path="Suppositories" element={<Suppositories />} />
          </Route>

          {/* parenteral-formulations */}
          <Route path="parenteral-formulations">
            <Route index element={<ParenteralFormulations />} />
            <Route path="Drypowder" element={<DryPowder />} />
            <Route path="LiquidInjectables" element={<LiquidInjectables />} />
            <Route path="PrifilledSyringes" element={<PrifilledSyringes />} />
            <Route path="Infusion" element={<Infusion />} />
            <Route path="ContrastMedia" element={<ContrastMedia />} />
          </Route>

          {/* inhalational-formulations */}
          <Route path="inhalational-formulations">
            <Route index element={<InhalationalFormulation />} />
            <Route path="Inhalers" element={<Inhalers />} />
            <Route path="NasalSprays" element={<NasalSprays />} />
            <Route path="Repulses" element={<Repulses />} />
            <Route path="Rotacaps" element={<Rotacaps />} />
          </Route>

          {/* total-formulations */}
          <Route path="topical-formulations">
            <Route index element={<TopicFormulation />} />
            <Route path="Cream-ointment-gel" element={<Creamointgel />} />
            <Route path="Lotion-powder" element={<LotionPowder />} />
            <Route path="Serum-drop-sprays" element={<SerumDropSprays />} />
          </Route>

          {/* OPTHALMIC & ENT PRODUCTS-formulations */}
          <Route path="opthalmic-formulations">
            <Route index element={<OpthlamicProduct />} />
            <Route path="eye-ear-drop" element={<EyeEarDrop />} />
            <Route path="Implant-lenses" element={<ImplantLenses />} />
            <Route path="Intraocular" element={<Intraocular />} />
            <Route path="opthalmic" element={<Opthalmic />} />
          </Route>
          <Route path="others">
            <Route index element={<Others />} />
            <Route path="hospital-technology" element={<Hospital />} />
            <Route path="surgical-consumables" element={<Surgical />} />
          
          </Route>


          <Route path="tablet" element={<Tablet />} />
        </Route>
        <Route path="services" element={<Services />} />
        <Route
          path="international-presence"
          element={<InternationalPresence />}
        />
        <Route path="global-presence" element={<GlobalPresence />} />

        <Route path="careers" element={<Career />} />

        <Route path="*" element={<PageNotFound />} />

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
