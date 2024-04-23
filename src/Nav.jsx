import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const Navbar = () => {
    const [isvisible, setIsvisible] = useState(false);
    const HandleToggle = () => {
      setIsvisible((prev) => !prev);
    };
    const [theme, setTheme] =useState("light")
    useEffect(()=>{
      const themeMode = sessionStorage.getItem("mode");
      const parsethemeMode= JSON.parse(themeMode);
  
      if (window.matchMedia('(prefers-color-scheme: dark)').matches || parsethemeMode === "dark") {
    setTheme("dark")
  }
    },[theme])
    return (  <>
       <nav className="absolute left-5 top-5 flex justify-between items-center bg-none w-[90%]">
        <a href="/">
          {" "}
          <h1 className=" text-5xl font-bold text-gray-400 dark:text-[#fff]">JO</h1>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1 left-16 w-5 fill-gray-400  dark:fill-white text-5xl font-bold text-gray-400"
          viewBox="0 0 384 512"
        >
          <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
        </svg>

        <div className="navLinks text-3xl font-medium md:flex justify-center items-center  hidden">
          <a href="/" className="relative bg-transparent">
            <div className={theme === "dark"? "hoverDark":"hover"}>
              <p className="mx-5 dark:text-[#ffff] "> Home </p>
            </div>
          </a>

          <a href="/portfolio" className="relative bg-transparent">
            <div className={theme === "dark"? "hoverDark":"hover"}>
              <p className="mx-5  dark:text-[#ffff]"> Portfolio </p>
            </div>
          </a>
          <a href="/contact" className="relative bg-transparent">
            <div className={theme === "dark"? "hoverDark":"hover"}>
              <p className="mx-5  dark:text-[#ffff] z-10"> Contact Me </p>
            </div>
          </a>
        </div>
        <p className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" relative w-7 cursor-pointer hover:fill-slate-400 dark:fill-[#f4f0f0] z-50"
            viewBox="0 0 512 512"
            onClick={HandleToggle}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </p>
      </nav>
      <AnimatePresence>
        {isvisible && (
          <motion.nav
            className="dark:bg-black bg-[#ffff] w-screen h-screen absolute top-0 z-50"
            initial={{ scale: 0, y: "-100%", opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.5, x: "-100%", opacity: 1 }}
            transition={{type:"spring", bounce:0.3, duration:0.5}}
          >
            <p className="block md:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                onClick={HandleToggle}
                className=" w-7 dark:fill-white fill-[#000] hover:fill-slate-400 mt-3 ml-5 cursor-pointer "
              >
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </p>
            <section className=" text-black dark:text-[#ffff] flex justify-center items-center flex-col h-[80vh] text-3xl">
              <a
                href="/"
                className=" space-x-4  border-b-2 p-2 w-[50%] text-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-[#000] hover:opacity-[0.8] transition-all ease-in duration-100"
              >
                Home
              </a>
              <a
                href="/portfolio"
                className=" space-x-4  border-b-2 p-2 w-[50%] text-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-[#000] hover:opacity-[0.8] transition-all ease-in duration-100"
              >
                Portfolio
              </a>
              <a
                href="/contact"
                className=" space-x-4  border-b-2 p-2 w-[50%] text-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-[#000] hover:opacity-[0.8] transition-all ease-in duration-100"
              >
                Contact
              </a>
            </section>
          </motion.nav>
        )}
      </AnimatePresence>
    </>);
}
 
export default Navbar;