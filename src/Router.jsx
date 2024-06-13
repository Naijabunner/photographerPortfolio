import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RoutesWithAnimation from "./AnimatedRoutes";
const RoutedPages = () => {
  return (
    <>
        <Router>
            <RoutesWithAnimation/>
        </Router>
    </>
  );
};

export default RoutedPages;
