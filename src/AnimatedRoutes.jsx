import { useLocation } from "react-router-dom";
import Homepg from "./Pages/Home/Homepage";
import ContactUs from "./Pages/Contact/Contactpage";
import PortfolioPage from "./Pages/Portfolio/PortfolioPg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutpg from "./Pages/About/AboutPage";

function RoutesWithAnimation() {  
    return (
        <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<PortfolioPage />} />
        <Route path="/About" element={<Aboutpg />} />
      </Routes>
    );
  }
 
export default RoutesWithAnimation ;