import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LocationProvider from "./LocationProvider";
import RoutesWithAnimation from "./AnimatedRoutes";
const RoutedPages = () => {
  return (
    <>
        <Router>
            <LocationProvider>
            <RoutesWithAnimation/>
          </LocationProvider>
        </Router>
    </>
  );
};

export default RoutedPages;
