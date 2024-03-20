import { useLocation } from "react-router-dom";
import Homepg from "./Pages/Home/Homepage";
import ContactUs from "./Pages/Contact/Contactpage";
import PortfolioPage from "./Pages/Portfolio/PortfolioPg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function RoutesWithAnimation() {
    const location = useLocation();
  
    return (
        <Routes location={location} key={location.key}>
        <Route path="/" element={<Homepg />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    );
  }
 
export default RoutesWithAnimation ;