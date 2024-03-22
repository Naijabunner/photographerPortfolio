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
            whileInView={{ 
              x: [-50,50,-50],
            }}
            transition={{duration: 2, repeat: Infinity, spring: 1}}
            
          ></motion.div>
        </div>
      </div>
        }
      >
        <RoutedPages />
        <footer>
     <p className="absolute bottom-0 w-full bg-transparent text-center text-[3vmin] font-medium font-serif">James Onyekachi &copy; 2024</p>

     </footer>
      </Suspense>
      
    </>
  );
}

export default App;
