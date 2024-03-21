import "./App.css";
import { useAnimate, stagger, motion } from "framer-motion";
import React, { Suspense } from "react";
const RoutedPages = React.lazy(() => import('./Router'));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
        {" "}
        <div className="w-40 h-2 rounded-xl bg-black flex justify-center items-center">
          <motion.div className="loader bg-white w-14 rounded-xl h-1 "
          initial={{x:-50 }}
          animate={{ x: 50}}
          transition={{ duration: 1, repeat: Infinity}}
          ></motion.div>
        </div>
      </div>
        }
      >
        <RoutedPages />
      </Suspense>
      
    </>
  );
}

export default App;
