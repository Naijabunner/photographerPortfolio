import "./App.css";
import { useAnimate, stagger, motion } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./Nav";
const RoutedPages = React.lazy(() => import("./Router"));

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const themeMode = sessionStorage.getItem("mode");
    const parsethemeMode = JSON.parse(themeMode);

    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      parsethemeMode === "dark"
    ) {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("mode", JSON.stringify("dark"));
    } else {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("mode", JSON.stringify(theme));
    }
  }, [theme]);
  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Suspense
      fallback={
        <Loader/>
      }
    >
      <div className=" dark:bg-[#0E0F10] min-h-screen">
        <div className="absolute sm:right-5 flex flex-col justify-center items-center z-20 bg-transparent cursor-pointer">
          <div className="w-1 dark:bg-white sm:h-[10vh] h-[20vh] bg-black z-50 opacity-[0.5]"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="z-50 w-5 fill-black dark:fill-white text-5xl font-bold text-white rotate-180"
            viewBox="0 0 384 512"
            onClick={handleSwitchTheme}
          >
            <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
          </svg>
        </div>
        <Navbar/>
        <RoutedPages />
      </div>
    </Suspense>
  );
}
const Loader =()=>{
  return(
<div className="w-screen h-screen flex justify-center items-center dark:bg-[#0E0F10]">
          {" "}
          <div className="w-40 h-2 rounded-xl bg-black flex justify-center items-center dark:bg-white">
            <motion.div
              className="loader bg-white w-14 rounded-xl h-1  dark:bg-[#0E0F10]"
              whileInView={{
                x: [-50, 50, -50],
              }}
              transition={{ duration: 2, repeat: Infinity, spring: 1 }}
            ></motion.div>
          </div>
        </div>
  )
}

export default App;
