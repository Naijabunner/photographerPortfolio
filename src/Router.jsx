
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepg from "./Pages/Home/Homepage";
import ContactUs from "./Pages/Contact/Contactpage";
import PortfolioPage from "./Pages/Portfolio/PortfolioPg";
const RoutedPages = () => {
    return ( <>
    
    <Router>
        <Routes>
             <Route path="/" element = {<Homepg/>}/>
             <Route path="/contact" element = {<ContactUs/>}/>
             <Route path="/portfolio" element = {<PortfolioPage/>}/>
        </Routes>
       
    </Router>
    
    </> );
}
 
export default RoutedPages;
