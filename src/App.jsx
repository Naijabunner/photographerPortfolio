import "./App.css";
import { useAnimate, stagger, motion } from "framer-motion";
import React, { Suspense } from "react";
const RoutedPages = React.lazy(() => import('./Router'));

function App() {
  return (
    <>
    <Suspense fallback = { <div> Please Wait... </div> } >
    <RoutedPages /></Suspense>
          
    </>
  );
}

export default App;
